import json, asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        for icao in ['EKCH', 'ESSA', 'ENGM', 'ENBR', 'ESGG', 'EFHK']:
            pg = await b.new_page(); reqs = []; frames = []
            pg.on('request', lambda r: reqs.append([r.method, r.resource_type, r.url]))
            def ws(w):
                reqs.append(['WS', 'websocket', w.url])
                w.on('framereceived', lambda f: frames.append(('in', str(f)[:4000])))
                w.on('framesent', lambda f: frames.append(('out', str(f)[:1500])))
            pg.on('websocket', ws)
            resp = {}
            async def onresp(r):
                if r.request.resource_type in ('xhr', 'fetch'):
                    try: resp[r.url] = {'status': r.status, 'headers': dict(r.headers), 'body': (await r.text())[:20000]}
                    except Exception as e: resp[r.url] = {'err': str(e)}
            pg.on('response', lambda r: asyncio.ensure_future(onresp(r)))
            try:
                await pg.goto(f'https://atis.guru/atis/{icao}', wait_until='networkidle', timeout=45000)
            except Exception as e: reqs.append(['ERR', '', str(e)])
            await pg.wait_for_timeout(8000)
            text = await pg.evaluate('document.body.innerText')
            html = await pg.content()
            json.dump({'icao': icao, 'requests': reqs, 'responses': resp, 'frames': frames[:60], 'text': text}, open(f'out/browser_{icao}.json', 'w'), indent=1)
            open(f'out/browser_{icao}.html', 'w').write(html)
            await pg.close()
        await b.close()
asyncio.run(main())
