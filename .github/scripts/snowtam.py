#!/usr/bin/env python3
"""Collects current SNOWTAMs from public AIS pre-flight information bulletins and writes snowtam.json.

Sources (public, refreshed by their publishers every 30 min or every hour):
  - LFV (Sweden) AROWeb "NOTAM Sweden" / "NOTAM Other" PDF bulletins
  - Fintraffic ANS (Finland) www.ais.fi bulletins: Finland, Sweden, Norway and the Baltic states
Every SNOWTAM keeps its own observation time (item B) and the issue time of the bulletin it came from, so the
app can show how old it is and whether it is still within the 8-hour SNOWTAM validity.
Usage: snowtam.py OUTDIR
"""
import html, json, os, re, subprocess, sys, tempfile, time, urllib.parse, urllib.request
from datetime import datetime, timezone

UA = 'GRF-Runway-Cond bulletin reader (low volume, every 15 min; github.com/iskiillxalexi/grf-runway-cond)'
MON = {m: i + 1 for i, m in enumerate('JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC'.split())}

LFV = [  # (id, folder, listing name, file name prefix, label, ICAO prefixes)
    ('lfv-esaa', 'pibsweden', 'NOTAM Sweden', 'ESAA FIR IFR 24hr', 'LFV bulletin ESAA FIR IFR', ['ES']),
    ('lfv-efin', 'pibother', 'NOTAM Other', 'EFIN FIR 24hr', 'LFV bulletin EFIN FIR', ['EF']),
    ('lfv-ekdk', 'pibother', 'NOTAM Other', 'EKDK FIR 24hr', 'LFV bulletin EKDK FIR', ['EK']),
    ('lfv-enor', 'pibother', 'NOTAM Other', 'ENOR ENOB FIR 24hr', 'LFV bulletin ENOR/ENOB FIR', ['EN']),
]
AISFI = [  # (id, page, label, ICAO prefixes)
    ('aisfi-efin-ifr', 'efinen', 'Fintraffic AIS Helsinki FIR IFR', ['EF']),
    ('aisfi-efin-a', 'envfra', 'Fintraffic AIS Helsinki FIR EFAA-EFLP', ['EF']),
    ('aisfi-efin-m', 'envfrm', 'Fintraffic AIS Helsinki FIR EFMA-EFYL', ['EF']),
    ('aisfi-esaa-a', 'esaavfr', 'Fintraffic AIS Sweden FIR (1/3)', ['ES', 'EK']),
    ('aisfi-esaa-m', 'esaavfrm', 'Fintraffic AIS Sweden FIR (2/3)', ['ES']),
    ('aisfi-esaa-s', 'esaavfrs', 'Fintraffic AIS Sweden FIR (3/3)', ['ES']),
    ('aisfi-enor-a', 'enorvfr', 'Fintraffic AIS Norway FIR ENAL-ENOV', ['EN']),
    ('aisfi-enor-r', 'enorvfrr', 'Fintraffic AIS Norway FIR ENRA-ENZV', ['EN']),
    ('aisfi-eett', 'eettvfr', 'Fintraffic AIS Tallinn FIR', ['EE']),
    ('aisfi-evrr', 'evrrvfr', 'Fintraffic AIS Riga FIR', ['EV']),
    ('aisfi-eyvl', 'eyvlvfr', 'Fintraffic AIS Vilnius FIR', ['EY']),
]

def get(url, binary=False):
    last = None
    for attempt in range(3):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': UA})
            with urllib.request.urlopen(req, timeout=40) as r:
                data = r.read()
                if binary: return data
                for cs in (r.headers.get_content_charset(), 'utf-8', 'cp1252'):
                    if not cs: continue
                    try: return data.decode(cs)
                    except (UnicodeDecodeError, LookupError): pass
                return data.decode('latin-1')
        except Exception as e:
            last = e; time.sleep(3 * (attempt + 1))
    raise last

def iso(dt): return dt.strftime('%Y-%m-%dT%H:%M:00Z') if dt else None

def html_text(page):
    page = re.sub(r'(?is)<(script|style)[^>]*>.*?</\1>', ' ', page)
    page = re.sub(r'(?i)<br\s*/?>|</(p|div|tr|li|h\d|table|td|th)>|<(tr|p|div|li|h\d|table)[^>]*>', '\n', page)
    page = html.unescape(re.sub(r'<[^>]+>', ' ', page)).replace('\xa0', ' ')
    lines = [re.sub(r'[ \t]+', ' ', l).strip() for l in page.split('\n')]
    return '\n'.join(l for l in lines if l and not re.fullmatch(r'[\u2022\u00b7\ufffd\u0095*]+', l))

def pdf_text(data):
    with tempfile.NamedTemporaryFile(suffix='.pdf', delete=False) as f:
        f.write(data); path = f.name
    try:
        out = subprocess.run(['pdftotext', '-raw', path, '-'], capture_output=True, text=True, timeout=60)
        if out.returncode == 0 and out.stdout.strip(): return out.stdout
        from pypdf import PdfReader
        return '\n'.join(p.extract_text() or '' for p in PdfReader(path).pages)
    finally:
        os.unlink(path)

HEAD = re.compile(r'^([A-Z]{4}) - (\S.*)$')
RCR = re.compile(r'\b(\d{8})\s+(?:RWY\s*)?(\d{2}[LRC]?)\s+[0-6]\s*/\s*[0-6]\s*/\s*[0-6]\b')
STOP = re.compile(r'^(?:\+|\*|-)(?:\s|$)|^SNOWTAM\b|^FROM:.*\bTO:|^END OF PIB|^EN-ROUTE|^NAV WARNINGS|^AERODROMES$|^Page \d+ of \d+|^[A-Z]{4} - \S')

def observed(b, ref):
    """item B (MMDDhhmm) as a UTC time, year taken from the bulletin time"""
    mo, d, hh, mi = int(b[:2]), int(b[2:4]), int(b[4:6]), int(b[6:8])
    y = ref.year - (1 if mo > ref.month + 6 else 0) + (1 if mo < ref.month - 6 else 0)
    try: return datetime(y, mo, d, hh, mi, tzinfo=timezone.utc)
    except ValueError: return None

def extract(text, ref):
    """SNOWTAM blocks: 'SNOWTAM' [FROM: ...] ICAO, then the runway condition line(s) and any plain-language remarks"""
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    names, out = {}, []
    for k, l in enumerate(lines):
        m = HEAD.match(l)
        if m: names[m.group(1)] = m.group(2).strip()
        elif re.fullmatch(r'[A-Z]{4}', l) and k + 2 < len(lines) and lines[k + 1] == '-' and re.match(r'[A-Z]', lines[k + 2]):
            names[l] = lines[k + 2]   # web bulletin: "ESNZ" / "-" / "ARE OESTERSUND" on separate lines
    i = 0
    while i < len(lines):
        if not re.match(r'^SNOWTAM\b', lines[i]):
            i += 1; continue
        j = i + 1; frm = None; icao = None
        rest = lines[i][7:].strip()
        body = []
        if rest: body.append(rest)
        while j < len(lines) and len(body) < 40:
            l = lines[j]
            if not l: j += 1; continue
            if icao is None and l.startswith('FROM:') and 'TO:' not in l:
                frm = l[5:].strip() or frm; j += 1; continue
            if icao is None and re.fullmatch(r'\d{2} [A-Z]{3} \d{4} \d{2}:\d{2}', l):
                frm = l; j += 1; continue          # the PDF text puts the date before "FROM:"
            if icao is None and re.fullmatch(r'[A-Z]{4}', l):
                icao = l; j += 1; continue
            if icao is None:
                m = re.match(r'^([A-Z]{4})\s+(\d{8}\s.*)$', l)
                if m: icao = m.group(1); body.append(m.group(2)); j += 1; continue
            if STOP.match(l) or l == 'NIL' or (body and re.fullmatch(r'[A-Z]{4}', l)): break
            body.append(l); j += 1
        i = j
        txt = '\n'.join(body).strip()
        m = RCR.search(txt)
        if not icao or not m: continue
        issued = None
        fm = re.fullmatch(r'(\d{2}) ([A-Z]{3}) (\d{4}) (\d{2}):(\d{2})', frm or '')
        if fm and fm.group(2) in MON: issued = datetime(int(fm.group(3)), MON[fm.group(2)], int(fm.group(1)), int(fm.group(4)), int(fm.group(5)), tzinfo=timezone.utc)
        out.append({'icao': icao, 'observed': iso(observed(m.group(1), ref)), 'issued': iso(issued), 'text': txt})
    return names, out

def lfv_sources():
    res = []
    for sid, folder, listname, prefix, label, pre in LFV:
        src = {'id': sid, 'name': label, 'host': 'aro.lfv.se', 'prefixes': pre, 'ok': False}
        try:
            listing = get('https://aro.lfv.se/Links/Link/ShowFileList?' + urllib.parse.urlencode({'type': 'AIS', 'path': '\\' + folder + '\\', 'torlinkName': listname}))
            files = re.findall(r'href="([^"]*/FileList/[^"]*?' + re.escape(prefix) + r'_(\d{14})\.pdf)"', html.unescape(listing))
            if not files: raise RuntimeError('file not listed')
            href, stamp = max(files, key=lambda f: f[1])
            url = urllib.parse.urljoin('https://aro.lfv.se/', href).replace(' ', '%20')
            issued = datetime.strptime(stamp[:12], '%Y%m%d%H%M').replace(tzinfo=timezone.utc)
            text = pdf_text(get(url, binary=True))
            src.update(url=url, issued=iso(issued), ok=True)
            res.append((src, text, issued))
        except Exception as e:
            src['error'] = str(e)[:200]; res.append((src, '', None))
    return res

def aisfi_sources():
    res = []
    for sid, page, label, pre in AISFI:
        url = f'https://www.ais.fi/bulletins/{page}.htm'
        src = {'id': sid, 'name': label, 'host': 'ais.fi', 'prefixes': pre, 'ok': False, 'url': url}
        try:
            text = html_text(get(url))
            m = re.search(r'(\d{2})([A-Z]{3})(\d{4})\s+(\d{2})(\d{2})\s*-\s*\d{2}[A-Z]{3}\d{4}', text)
            issued = datetime(int(m.group(3)), MON[m.group(2)], int(m.group(1)), int(m.group(4)), int(m.group(5)), tzinfo=timezone.utc) if m else None
            src.update(issued=iso(issued), ok=True)
            res.append((src, text, issued))
        except Exception as e:
            src['error'] = str(e)[:200]; res.append((src, '', None))
    return res

def main(outdir):
    now = datetime.now(timezone.utc)
    os.makedirs(outdir, exist_ok=True)
    sources, airports, debug = [], {}, os.path.join(outdir, 'text')
    os.makedirs(debug, exist_ok=True)
    for src, text, issued in lfv_sources() + aisfi_sources():
        if src['ok']:
            open(os.path.join(debug, src['id'] + '.txt'), 'w').write(text)
            names, found = extract(text, issued or now)
            src['aerodromes'] = sorted(names)
            src['snowtams'] = len(found)
            for icao, nm in names.items():
                airports.setdefault(icao, {'name': nm, 'snowtams': []})
            for s in found:
                a = airports.setdefault(s['icao'], {'name': names.get(s['icao'], ''), 'snowtams': []})
                key = re.sub(r'\s+', ' ', s['text'])
                same = next((x for x in a['snowtams'] if re.sub(r'\s+', ' ', x['text']) == key), None)
                if same:
                    if src['id'] not in same['sources']: same['sources'].append(src['id'])
                    same['issued'] = same['issued'] or s['issued']
                    if (src.get('issued') or '') > (same['bulletin'] or ''): same['bulletin'] = src.get('issued'); same['source'] = src['id']
                else:
                    a['snowtams'].append({'observed': s['observed'], 'issued': s['issued'], 'text': s['text'], 'source': src['id'], 'sources': [src['id']], 'bulletin': src.get('issued')})
        sources.append(src)
    for a in airports.values():
        a['snowtams'].sort(key=lambda x: x['observed'] or '', reverse=True)
    data = {'v': 1, 'generated': iso(now), 'validity_hours': 8, 'sources': sources,
            'airports': {k: airports[k] for k in sorted(airports)}}
    json.dump(data, open(os.path.join(outdir, 'snowtam.json'), 'w'), separators=(',', ':'))
    n = sum(len(a['snowtams']) for a in airports.values())
    print(f"{len([s for s in sources if s['ok']])}/{len(sources)} sources, {len(airports)} aerodromes, {n} SNOWTAMs")
    for s in sources: print(' ', s['id'], s.get('issued'), s.get('snowtams'), s.get('error', ''))

if __name__ == '__main__':
    main(sys.argv[1] if len(sys.argv) > 1 else 'out')
