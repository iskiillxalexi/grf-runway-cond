#!/usr/bin/env python3
"""Weather for the Route tool: the NOAA GFS forecast (1 degree) made into small files, one for each valid time.

    wx.py OUT [--hours 48] [--region W,E,S,N] [--have index.json] [--check]

Read: wind, temperature and cloud cover at ten pressure levels (FL050 to FL450), the tropopause, and the tops and
bases of the model's convection. Worked out here: a clear-air turbulence index (Ellrod and Knapp's TI1: vertical wind
shear times horizontal deformation). Written: OUT/index.json and OUT/tYYYYMMDDHHcDDHH.bin (gzip; the valid time,
then the run it is from), three hours apart, from now and --hours ahead.

--have: the index.json published now. When it is from the same run and still reaches far enough ahead, nothing is
written (and nothing needs publishing): the job can then run every hour and publish only when there is a new run.
--check: only say whether there is something new to read ("new" or "same" as the last line); needs no numpy or pygrib.

The forecast is the U.S. National Weather Service's (NCEP), public domain. It is read from NOAA's open data on AWS,
or from NOMADS when that fails: only the parts of each file that are needed (by its .idx list).
"""
import sys, os, re, io, json, gzip, math, time, struct, datetime, urllib.request, concurrent.futures as cf
try: import numpy as np
except ImportError: np = None                                 # enough for --check

SOURCES = ['https://noaa-gfs-bdp-pds.s3.amazonaws.com/', 'https://nomads.ncep.noaa.gov/pub/data/nccf/com/gfs/prod/']
LEVELS = [850, 700, 600, 500, 400, 350, 300, 250, 200, 150]
UA = 'grf-toolbox-wx/1 (github.com/iskiillxalexi/grf-runway-cond)'
UTC = datetime.timezone.utc

def get(url, rng=None, t=60, tries=3):
    for i in range(tries):
        try:
            h = {'User-Agent': UA}
            if rng: h['Range'] = 'bytes=%d-%s' % (rng[0], '' if rng[1] is None else rng[1])
            with urllib.request.urlopen(urllib.request.Request(url, headers=h), timeout=t) as f: return f.read()
        except Exception as e:
            if i == tries - 1 or (hasattr(e, 'code') and e.code in (403, 404)): raise
            time.sleep(2 + 3 * i)

def fl_of(p):
    """pressure (hPa) -> flight level (ICAO standard atmosphere)"""
    p = np.asarray(p, dtype='f8')
    lo = 44330.77 * (1 - (p / 1013.25) ** 0.190263)
    hi = 11000 + 6341.62 * np.log(226.32 / np.maximum(p, 1e-6))
    return np.where(p > 226.32, lo, hi) / 0.3048 / 100

def wanted(idx):
    """the messages to take from a file, by its .idx: [(key, first byte, last byte or None)]"""
    rows = [l.split(':') for l in idx.strip().split('\n') if l.strip()]
    out = []; seen = set()
    for i, r in enumerate(rows):
        var, lev, what = r[3], r[4], r[5] if len(r) > 5 else ''
        key = None
        m = re.fullmatch(r'(\d+) mb', lev)
        if m and int(m.group(1)) in LEVELS and var in ('UGRD', 'VGRD', 'TMP', 'TCDC'): key = (var, int(m.group(1)))
        elif var == 'PRES' and lev == 'tropopause': key = ('TROP', 0)
        elif var == 'PRES' and lev == 'convective cloud top level': key = ('CTOP', 0)
        elif var == 'PRES' and lev == 'convective cloud bottom level': key = ('CBAS', 0)
        elif var == 'CPRAT' and lev == 'surface' and 'ave' in what: key = ('CRAT', 0)
        if key and key not in seen:
            seen.add(key); out.append((key, int(r[1]), int(rows[i + 1][1]) - 1 if i + 1 < len(rows) else None))
    return out

def read_file(base, name):
    """the fields of one forecast file as {key: array[181][360]} (north to south, from 0 degrees east)"""
    import pygrib
    idx = get(base + name + '.idx').decode()
    want = wanted(idx)
    need = [(v, l) for v in ('UGRD', 'VGRD', 'TMP', 'TCDC') for l in LEVELS] + [('TROP', 0)]
    miss = [k for k in need if k not in dict((w[0], 1) for w in want)]
    if miss: raise RuntimeError('%s lacks %s' % (name, miss[:5]))
    with cf.ThreadPoolExecutor(8) as ex: parts = list(ex.map(lambda w: get(base + name, (w[1], w[2])), want))
    tmp = 'part.grb2'; open(tmp, 'wb').write(b''.join(parts))
    g = pygrib.open(tmp); msgs = list(g); g.close(); os.remove(tmp)
    if len(msgs) != len(want): raise RuntimeError('%s: %d messages for %d asked' % (name, len(msgs), len(want)))
    la, lo = msgs[0].latlons()
    if la.shape != (181, 360) or abs(la[0, 0] - 90) > 1e-6 or abs(lo[0, 0]) > 1e-6 or la[1, 0] > la[0, 0]: raise RuntimeError('%s: not the 1 degree grid expected: %s %s %s' % (name, la.shape, la[0, 0], lo[0, 0]))
    out = {}
    for w, m in zip(want, msgs):
        v = m.values; out[w[0]] = np.ma.filled(v.astype('f4'), np.nan) if np.ma.isMaskedArray(v) else np.asarray(v, dtype='f4')
    return out, msgs[0].validDate.replace(tzinfo=UTC), sum(len(p) for p in parts)

def ellrod(F):
    """Ellrod and Knapp's turbulence index TI1 (1e-7 s^-2) at each level: vertical wind shear x horizontal deformation"""
    z = fl_of(LEVELS) * 100 * 0.3048                         # heights of the levels in the standard atmosphere, m
    lat = np.deg2rad(np.arange(90, -91, -1.0))[:, None]; R = 6371000.0
    dy = R * math.radians(1.0); dx = R * np.maximum(np.cos(lat), 0.05) * math.radians(1.0)
    U = np.stack([F[('UGRD', l)] for l in LEVELS]); V = np.stack([F[('VGRD', l)] for l in LEVELS])
    ddx = lambda a: (np.roll(a, -1, axis=-1) - np.roll(a, 1, axis=-1)) / (2 * dx)
    def ddy(a):                                               # northward derivative (rows run north to south)
        d = np.empty_like(a); d[..., 1:-1, :] = (a[..., :-2, :] - a[..., 2:, :]) / (2 * dy); d[..., 0, :] = d[..., 1, :]; d[..., -1, :] = d[..., -2, :]; return d
    DEF = np.sqrt((ddx(U) - ddy(V)) ** 2 + (ddx(V) + ddy(U)) ** 2)
    n = len(LEVELS); TI = np.zeros_like(U)
    for k in range(n):
        a, b = max(0, k - 1), min(n - 1, k + 1)
        vws = np.hypot(U[b] - U[a], V[b] - V[a]) / (z[b] - z[a])
        TI[k] = vws * DEF[k] * 1e7
    TI[:, :6, :] = 0; TI[:, -6:, :] = 0                       # the grid is no use for this right at the poles
    return TI

def pack(F, valid, cycle, fh, region):
    W, E, S_, N = region
    cols = [(x % 360) for x in range(W, E + 1)]; rows = [90 - y for y in range(N, S_ - 1, -1)]
    cut = lambda a: a[np.ix_(rows, cols)]
    i8 = lambda a: np.clip(np.rint(a), -127, 127).astype('i1')
    u8 = lambda a: np.clip(np.rint(np.nan_to_num(a, nan=0.0)), 0, 255).astype('u1')
    KT = 1.943844
    TI = ellrod(F)
    fields = []; data = []
    def put(name, typ, scale, arrs): fields.append({'n': name, 't': typ, 'k': len(arrs), 's': scale}); data.extend(a.tobytes() for a in arrs)
    put('u', 'i8', 2, [i8(cut(F[('UGRD', l)]) * KT / 2) for l in LEVELS])
    put('v', 'i8', 2, [i8(cut(F[('VGRD', l)]) * KT / 2) for l in LEVELS])
    put('t', 'i8', 1, [i8(cut(F[('TMP', l)]) - 273.15) for l in LEVELS])
    put('c', 'u8', 1, [u8(cut(F[('TCDC', l)])) for l in LEVELS])
    put('ti', 'u8', 0.1, [u8(cut(TI[k]) * 10) for k in range(len(LEVELS))])
    put('trop', 'u8', 3, [u8(fl_of(cut(F[('TROP', 0)]) / 100) / 3)])
    # the model's convection: top and base as flight levels, where it rains from it (0 = none)
    if ('CTOP', 0) in F and ('CBAS', 0) in F:
        top = fl_of(np.nan_to_num(F[('CTOP', 0)], nan=101325.0) / 100); bas = fl_of(np.nan_to_num(F[('CBAS', 0)], nan=101325.0) / 100)
        on = np.isfinite(F[('CTOP', 0)]) & (top > bas + 20)
        if ('CRAT', 0) in F: on &= np.nan_to_num(F[('CRAT', 0)], nan=0.0) > 2.0e-5          # more than about 0.07 mm an hour
        put('ctop', 'u8', 2, [u8(cut(np.where(on, top, 0)) / 2)]); put('cbas', 'u8', 2, [u8(cut(np.where(on, bas, 0)) / 2)])
    head = {'v': 1, 'valid': valid.strftime('%Y-%m-%dT%H:%MZ'), 'cycle': cycle.strftime('%Y-%m-%dT%H:%MZ'), 'fh': fh,
            'grid': {'lon0': W, 'lat0': N, 'nx': len(cols), 'ny': len(rows), 'd': 1}, 'levels': LEVELS, 'fl': [int(round(x)) for x in fl_of(LEVELS)], 'fields': fields}
    hj = json.dumps(head, separators=(',', ':')).encode()
    raw = b'GRFW' + struct.pack('<I', len(hj)) + hj + b''.join(data)
    return gzip.compress(raw, 9, mtime=0), head, len(raw)

def main():
    out = sys.argv[1]; os.makedirs(out, exist_ok=True)
    hours = int(sys.argv[sys.argv.index('--hours') + 1]) if '--hours' in sys.argv else 48
    region = tuple(int(x) for x in sys.argv[sys.argv.index('--region') + 1].split(',')) if '--region' in sys.argv else (-50, 70, -5, 75)
    now = datetime.datetime.now(UTC)
    first = now.replace(minute=0, second=0, microsecond=0) - datetime.timedelta(hours=now.hour % 3)
    valids = [first + datetime.timedelta(hours=3 * i) for i in range(hours // 3 + 1)]
    # the newest run that has reached the last hour needed
    c0 = now.replace(minute=0, second=0, microsecond=0) - datetime.timedelta(hours=now.hour % 6); chosen = None
    for back in range(0, 6):
        cyc = c0 - datetime.timedelta(hours=6 * back); last = int((valids[-1] - cyc).total_seconds() // 3600)
        if last > 120: continue
        for base in SOURCES:
            b = base + 'gfs.%s/%02d/atmos/' % (cyc.strftime('%Y%m%d'), cyc.hour)
            try: get(b + 'gfs.t%02dz.pgrb2.1p00.f%03d.idx' % (cyc.hour, last), t=30, tries=1); chosen = (cyc, b); break
            except Exception as e: print('not yet', cyc.strftime('%d %HZ'), base.split('/')[2], repr(e)[:80])
        if chosen: break
    if not chosen: raise SystemExit('no GFS run found')
    cyc, base = chosen; print('run', cyc.strftime('%Y-%m-%d %HZ'), 'from', base); times = []; total = 0
    if '--have' in sys.argv:
        try:
            have = json.load(open(sys.argv[sys.argv.index('--have') + 1]))
            end = datetime.datetime.strptime(have['times'][-1]['valid'], '%Y-%m-%dT%H:%MZ').replace(tzinfo=UTC)
            if have['cycle'] == cyc.strftime('%Y-%m-%dT%H:%MZ') and end >= valids[-1] - datetime.timedelta(hours=9):
                print('published already: run', have['cycle'], 'to', have['times'][-1]['valid']); print('same'); return
        except Exception as e: print('nothing usable published:', repr(e)[:100])
    if '--check' in sys.argv: print('new'); return
    if np is None: raise SystemExit('numpy is missing: pip install numpy pygrib')
    for v in valids:
        fh = int((v - cyc).total_seconds() // 3600)
        if fh < 0: continue
        name = 'gfs.t%02dz.pgrb2.1p00.f%03d' % (cyc.hour, fh); t0 = time.time()
        F, vd, got = read_file(base, name)
        if abs((vd - v).total_seconds()) > 60: raise RuntimeError('%s is valid %s, not %s' % (name, vd, v))
        blob, head, raw = pack(F, v, cyc, fh, region); fn = 't%sc%s.bin' % (v.strftime('%Y%m%d%H'), cyc.strftime('%d%H')); open(os.path.join(out, fn), 'wb').write(blob)
        times.append({'valid': head['valid'], 'fh': fh, 'file': fn, 'bytes': len(blob)}); total += len(blob)
        print('%s f%03d read %d KB -> %s %d KB (raw %d KB) in %.1f s' % (head['valid'], fh, got // 1024, fn, len(blob) // 1024, raw // 1024, time.time() - t0))
    index = {'v': 1, 'source': 'NOAA/NCEP GFS, 1 degree', 'cycle': cyc.strftime('%Y-%m-%dT%H:%MZ'), 'made': datetime.datetime.now(UTC).strftime('%Y-%m-%dT%H:%MZ'),
             'grid': head['grid'], 'levels': LEVELS, 'fl': head['fl'], 'times': times}
    json.dump(index, open(os.path.join(out, 'index.json'), 'w'), separators=(',', ':'))
    print('wrote', len(times), 'times,', total // 1024, 'KB')

if __name__ == '__main__': main()
