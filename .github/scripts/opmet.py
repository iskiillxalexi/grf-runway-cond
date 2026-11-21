#!/usr/bin/env python3
"""Collects the newest METAR and TAF of the world's airports and writes them for the app: one small file for each two
first letters of the ICAO code (opmet/ES.json, opmet/GC.json ...), so that an app reads only what its flight needs.

Source: NOAA Aviation Weather Center (aviationweather.gov), the two files it publishes for reading everything at once:
  data/cache/metars.cache.csv.gz   the newest METAR or SPECI of every station
  data/cache/tafs.cache.xml.gz     the TAF in force of every station
They hold the reports as the met offices of the states send them out. The text is kept as it is: nothing is decoded here.

Usage: opmet.py OUTDIR [PUBLISHED] [--from DIR]
  PUBLISHED   the folder with what is published now: when one of the two readings fails, its reports are kept from there
  --from DIR  read the two files from DIR instead of the network (tests)
Exit code 2 when neither could be read: nothing is written then, and what is published stays.

A file:  {"v": 1, "generated": time, "metars": time of that reading, "tafs": time of that reading,
          "airports": {"ESGG": {"m": [text, observed, "SPECI" if it is one], "t": [text, issued, from, to]}}}
with the times of the reports in seconds since 1970.
"""
import csv, gzip, io, json, os, re, sys, time, urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone

UA = 'GRF-Runway-Cond METAR/TAF reader (low volume, every 15 min; github.com/iskiillxalexi/grf-runway-cond)'
BASE = 'https://aviationweather.gov/data/cache/'
METARS, TAFS = 'metars.cache.csv.gz', 'tafs.cache.xml.gz'
ICAO = re.compile(r'^[A-Z]{4}$')
METAR_HOURS = 6             # AWC's file holds the last hour and a half: a station that has gone quiet since (closed for the
                            # night) keeps its last METAR from the reading before, for this long
FEW = {'m': 1500, 't': 800}   # fewer stations than this: the file was cut short, the reading does not count

def get(url):
    last = None
    for attempt in range(3):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': UA, 'Accept': '*/*'})
            with urllib.request.urlopen(req, timeout=20) as r:
                body = r.read()
            if len(body) < 1000: raise ValueError('only %d bytes' % len(body))     # an empty answer now and then: ask again
            return body
        except Exception as e:
            last = e
            if attempt < 2: time.sleep(2 * (attempt + 1))
    raise last

def iso(t):
    return datetime.fromtimestamp(t, timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')

def when(s):
    """2026-11-21T17:50:00Z (with or without parts of a second) as seconds since 1970"""
    m = re.match(r'(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d))?', (s or '').strip())
    if not m: return None
    try: return int(datetime(*[int(x or 0) for x in m.groups()], tzinfo=timezone.utc).timestamp())
    except ValueError: return None

def one_line(s):
    return ' '.join((s or '').split())

def metars(body, now):
    text = gzip.decompress(body).decode('utf-8', 'replace')
    i = text.find('raw_text,')
    if i < 0: raise ValueError('no table in the METAR file')
    out = {}
    for r in csv.DictReader(io.StringIO(text[i:])):
        code, raw, t = (r.get('station_id') or '').strip().upper(), one_line(r.get('raw_text')), when(r.get('observation_time'))
        if not ICAO.match(code) or not raw or t is None or t > now + 3600 or t < now - METAR_HOURS * 3600: continue
        if code in out and out[code][1] >= t: continue
        kind = (r.get('metar_type') or '').strip().upper()
        out[code] = [raw, t, 'SPECI'] if kind == 'SPECI' or raw.startswith('SPECI ') else [raw, t]
    if len(out) < FEW['m']: raise ValueError('only %d METARs' % len(out))
    return out

def tafs(body, now):
    out = {}
    for x in ET.fromstring(gzip.decompress(body)).iter('TAF'):
        code, raw = (x.findtext('station_id') or '').strip().upper(), one_line(x.findtext('raw_text'))
        issued, a, b = when(x.findtext('issue_time')), when(x.findtext('valid_time_from')), when(x.findtext('valid_time_to'))
        if not ICAO.match(code) or not raw or None in (issued, a, b) or b <= now or b <= a: continue
        if code in out and out[code][1] >= issued: continue
        out[code] = [raw, issued, a, b]
    if len(out) < FEW['t']: raise ValueError('only %d TAFs' % len(out))
    return out

def published(folder, now):
    """what the app has now: the reports of each kind, and when each kind was read"""
    got = {'m': {}, 't': {}, 'metars': None, 'tafs': None}
    d = os.path.join(folder or '', 'opmet')
    if not folder or not os.path.isdir(d): return got
    for name in sorted(os.listdir(d)):
        if not re.match(r'^[A-Z]{2}\.json$', name): continue
        try:
            j = json.load(open(os.path.join(d, name)))
            if j.get('v') != 1: continue
            for k in ('metars', 'tafs'): got[k] = max(got[k] or '', j.get(k) or '') or None
            for code, a in (j.get('airports') or {}).items():
                m, t = a.get('m'), a.get('t')
                if m and m[1] >= now - METAR_HOURS * 3600: got['m'][code] = m
                if t and t[3] > now: got['t'][code] = t
        except Exception as e:
            print('published %s could not be read: %r' % (name, e))
    return got

def main(argv):
    args, src = [], None
    it = iter(argv)
    for a in it:
        if a == '--from': src = next(it)
        else: args.append(a)
    outdir, pub = args[0], (args[1] if len(args) > 1 else None)
    now = int(time.time()); read = iso(now)
    fetch = (lambda name: open(os.path.join(src, name), 'rb').read()) if src else (lambda name: get(BASE + name))
    new, state = {}, {}
    for key, name, parse in (('m', METARS, metars), ('t', TAFS, tafs)):
        t0 = time.time()
        try:
            new[key] = parse(fetch(name), now)
            state[key] = {'ok': True, 'read': read, 'count': len(new[key])}
            print('%s: %d stations, %.1f s' % (name, len(new[key]), time.time() - t0))
        except Exception as e:
            state[key] = {'ok': False, 'error': repr(e)[:200]}
            print('::warning::%s could not be read: %r' % (name, e))
    if not new: return 2
    old = published(pub, now)
    for key, stamp in (('m', 'metars'), ('t', 'tafs')):
        if key not in new:
            new[key] = old[key]; state[key].update(read=old[stamp], count=len(old[key]), kept=True)
            print('kept from the last reading: %d of them, read %s' % (len(old[key]), old[stamp]))
    if state['m'].get('ok'):
        quiet = {code: m for code, m in old['m'].items() if code not in new['m']}
        new['m'].update(quiet); state['m'].update(count=len(new['m']), earlier=len(quiet))
        print('METARs of stations that have gone quiet, kept from before: %d' % len(quiet))
    files = {}
    for key in ('m', 't'):
        for code, v in new[key].items(): files.setdefault(code[:2], {}).setdefault(code, {})[key] = v
    d = os.path.join(outdir, 'opmet'); os.makedirs(d, exist_ok=True)
    for name in os.listdir(d):
        if name.endswith('.json'): os.remove(os.path.join(d, name))
    size = 0
    for two, airports in sorted(files.items()):
        body = json.dumps({'v': 1, 'generated': read, 'metars': state['m'].get('read'), 'tafs': state['t'].get('read'),
                           'airports': dict(sorted(airports.items()))}, separators=(',', ':'))
        open(os.path.join(d, two + '.json'), 'w').write(body); size += len(body)
    json.dump({'v': 1, 'generated': read, 'metars': state['m'], 'tafs': state['t'], 'files': len(files),
               'source': {'name': 'NOAA Aviation Weather Center', 'host': 'aviationweather.gov', 'url': 'https://aviationweather.gov/'}},
              open(os.path.join(d, 'index.json'), 'w'), separators=(',', ':'))
    print('opmet: %d files, %d bytes, %d airports' % (len(files), size, sum(len(a) for a in files.values())))
    return 0

if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
