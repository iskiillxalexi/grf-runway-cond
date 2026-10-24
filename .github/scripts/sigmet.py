#!/usr/bin/env python3
"""Collects current SIGMETs and writes sigmet.json for the app's SIGMET globe.

Sources:
  - NOAA Aviation Weather Center (aviationweather.gov) international SIGMETs: worldwide, decoded by AWC with the
    area as coordinates (cut to the real FIR boundaries), validity and the time AWC received each one.
  - MET Norway (api.met.no) SIGMETs for ENOR and ENOB, as text: the app reads them itself.
Each SIGMET keeps its source and times, so the app can show where it came from and how old the reading is.
Usage: sigmet.py OUTDIR
"""
import json, os, sys, time, urllib.request
from datetime import datetime, timezone

UA = 'GRF-Runway-Cond SIGMET reader (low volume, every 15 min; github.com/iskiillxalexi/grf-runway-cond)'
AWC = 'https://aviationweather.gov/api/data/isigmet?format=json'
METNO = 'https://api.met.no/weatherapi/sigmets/2.0/?type=sigmets'

def get(url):
    last = None
    for attempt in range(3):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': UA, 'Accept': '*/*'})
            with urllib.request.urlopen(req, timeout=40) as r:
                return r.read(), dict(r.headers)
        except Exception as e:
            last = e; time.sleep(3 * (attempt + 1))
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
    data = {'v': 1, 'generated': read, 'sources': sources, 'awc': items, 'texts': texts}
    json.dump(data, open(os.path.join(outdir, 'sigmet.json'), 'w'), separators=(',', ':'))
    print(f"{len(items)} AWC SIGMETs, {len(texts)} text bulletins")
    for s in sources: print(' ', s['id'], s.get('ok'), s.get('count'), s.get('error', ''))

if __name__ == '__main__':
    main(sys.argv[1] if len(sys.argv) > 1 else 'out')
