#!/usr/bin/env python3
"""Collects current SIGMETs and writes sigmet.json for the app's SIGMET globe.

Sources:
  - NOAA Aviation Weather Center (aviationweather.gov) international SIGMETs: worldwide, decoded by AWC with the
    area as coordinates (cut to the real FIR boundaries), validity and the time AWC received each one.
  - MET Norway (api.met.no) SIGMETs for ENOR and ENOB, as text: the app reads them itself.
Each SIGMET keeps its source and times, so the app can show where it came from and how old the reading is.
Usage: sigmet.py OUTDIR [--quick]
  --quick  the first reading of a job, published at once so that an app that asked gets its SIGMETs in seconds:
           short waits, and when AWC does not answer nothing is written and the exit code is 2 (the job reads again later).
"""
import json, os, sys, time, urllib.request
from datetime import datetime, timezone

UA = 'GRF-Runway-Cond SIGMET reader (low volume, every 15 min; github.com/iskiillxalexi/grf-runway-cond)'
AWC = 'https://aviationweather.gov/api/data/isigmet?format=json'
METNO = 'https://api.met.no/weatherapi/sigmets/2.0/?type=sigmets'

QUICK = '--quick' in sys.argv[1:]

def get(url):
    last = None
    tries, wait, pause = (2, 12, 1) if QUICK else (3, 40, 3)
    for attempt in range(tries):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': UA, 'Accept': '*/*'})
            with urllib.request.urlopen(req, timeout=wait) as r:
                return r.read(), dict(r.headers)
        except Exception as e:
            last = e
            if attempt + 1 < tries: time.sleep(pause * (attempt + 1))
    raise last

def iso(t):
    return datetime.fromtimestamp(t, timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ') if t is not None else None

def ring(pts):
    r = [[round(p['lon'], 3), round(p['lat'], 3)] for p in pts if p.get('lon') is not None and p.get('lat') is not None]
    if r and r[0] != r[-1]: r.append(r[0])
    return r

def main(outdir):
    now = datetime.now(timezone.utc)
    os.makedirs(outdir, exist_ok=True)
    read = now.strftime('%Y-%m-%dT%H:%M:%SZ')
    sources, items, texts = [], [], []
    src = {'id': 'awc', 'name': 'NOAA Aviation Weather Center, international SIGMETs', 'host': 'aviationweather.gov',
           'url': 'https://aviationweather.gov/gfa/#sigmet', 'ok': False, 'read': read}
    try:
        body, _ = get(AWC)
        for x in json.loads(body):
            c = x.get('coords') or []
            rings = [ring(r) for r in c] if c and isinstance(c[0], list) else [ring(c)] if c else []
            items.append({'fir': x.get('firId'), 'firName': x.get('firName'), 'mwo': x.get('icaoId'), 'id': x.get('seriesId'),
                          'hazard': x.get('hazard'), 'qual': x.get('qualifier'), 'from': iso(x.get('validTimeFrom')), 'to': iso(x.get('validTimeTo')),
                          'received': (x.get('receiptTime') or '')[:19] + 'Z' if x.get('receiptTime') else None,
                          'base': x.get('base'), 'top': x.get('top'), 'dir': x.get('dir'), 'spd': x.get('spd'), 'chng': x.get('chng'),
                          'rings': [r for r in rings if len(r) >= 3], 'raw': (x.get('rawSigmet') or '').strip()})
        src['ok'] = True; src['count'] = len(items)
    except Exception as e:
        src['error'] = str(e)[:200]
    sources.append(src)
    src = {'id': 'metno', 'name': 'MET Norway SIGMETs (ENOR Polaris, ENOB Bodø Oceanic)', 'host': 'api.met.no',
           'url': 'https://api.met.no/weatherapi/sigmets/2.0/documentation', 'ok': False, 'read': read}
    try:
        body, hd = get(METNO)
        text = body.decode('utf-8', 'replace').strip()
        lm = hd.get('Last-Modified') or hd.get('last-modified')
        if lm:
            try: src['issued'] = datetime.strptime(lm, '%a, %d %b %Y %H:%M:%S GMT').replace(tzinfo=timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')
            except ValueError: pass
        if text: texts.append({'src': 'metno', 'read': read, 'text': text})
        src['ok'] = True; src['count'] = text.count('SIGMET')
    except Exception as e:
        src['error'] = str(e)[:200]
    sources.append(src)
    if QUICK and not sources[0]['ok']:
        print('AWC did not answer the quick reading:', sources[0].get('error', '')); sys.exit(2)
    data = {'v': 1, 'generated': read, 'sources': sources, 'awc': items, 'texts': texts}
    json.dump(data, open(os.path.join(outdir, 'sigmet.json'), 'w'), separators=(',', ':'))
    print(f"{len(items)} AWC SIGMETs, {len(texts)} text bulletins")
    for s in sources: print(' ', s['id'], s.get('ok'), s.get('count'), s.get('error', ''))

if __name__ == '__main__':
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    main(args[0] if args else 'out')
