/* GRF Runway Cond: everything is stored on the device at install, then served from the cache (works with no network). */
const CACHE = 'grf-db8f355741';
const FILES = {
"./": "f448d67434cf9896",
"app.bin": "73f3aa4d4bd431e0",
"fonts/Barlow-Medium.woff": "a7ab5c7e54c3c38d",
"fonts/Barlow-Regular.woff": "bee61e0690d27f46",
"fonts/Barlow-SemiBold.woff": "bfe69e7af9279ad8",
"fonts/BarlowCondensed-Bold.woff": "51e31ec10a15077d",
"fonts/BarlowCondensed-SemiBold.woff": "44aca26511e53091",
"fonts/IBMPlexMono-Medium.woff": "3a7fc269bd1fc79c",
"fonts/IBMPlexMono-SemiBold.woff": "74d9c19dc8a8933f",
"fonts/Monoton-Regular.woff": "dcc3dc535c754275",
"icon-180.png": "5e29497706d4b452",
"icon-192.png": "2160ef544412cde2",
"icon-512.png": "019c91474f53a9a4",
"icon-maskable-512.png": "00ffe0a4fa864efc",
"index.html": "f448d67434cf9896",
"manifest.webmanifest": "59ecacf939c7aa24",
"ocr-client.js": "e88548e52aa98db0",
"ocr/eng.traineddata": "906538558589e563",
"ocr/ocr-worker.js": "2a21f08055ef5aae",
"ocr/tesseract-core-lstm.js": "6510efc4e8b45c54",
"ocr/tesseract-core-lstm.wasm": "66b17df6e20c5329",
"ocr/tesseract-core-simd-lstm.js": "e48e2f02ddae3716",
"ocr/tesseract-core-simd-lstm.wasm": "34e8d50cac216427"
};   /* path: first 16 hex of SHA-256 */
const hashOf = async r => Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', await r.arrayBuffer())).slice(0, 8), b => b.toString(16).padStart(2, '0')).join('');
/* an update only downloads the files that changed: the rest is copied from the previous version's cache (checked by hash) */
self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    const old = (await caches.keys()).filter(k => k.startsWith('grf-') && k !== CACHE);
    await Promise.all(Object.entries(FILES).map(async ([f, h]) => {
      for (const k of old) {
        const r = await (await caches.open(k)).match(f);
        if (r && await hashOf(r.clone()) === h) { await c.put(f, r); return; }
      }
      /* a download must match the published hash; a stale copy from a cache gets one retry with a fresh address */
      for (const u of [f, f + '?v=' + h]) {
        const res = await fetch(new Request(u, {cache: 'reload'}));
        if (res.ok && await hashOf(res.clone()) === h) { await c.put(f, res); return; }
      }
      throw new Error(f + ' does not match this version');
    }));
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('grf-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  const url = new URL(req.url);
  /* the revocation list, the published version number and the key tool always come from the network, never from the cache */
  if (req.method !== 'GET' || url.origin !== self.location.origin || /\/(revoked\.json|version\.json|act\.bin|admin\.html|keys-log\.bin)$/.test(url.pathname)) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(req, {ignoreSearch: true});
    if (hit) return hit;
    try { return await fetch(req); }
    catch (err) { return (req.mode === 'navigate' && await c.match('index.html')) || new Response('Offline', {status: 503}); }
  }));
});
