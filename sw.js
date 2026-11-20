/* GRF Runway Cond: everything is stored on the device at install, then served from the cache (works with no network). */
const CACHE = 'grf-a434214686';
const FILES = {
"./": "72214c0b996e3a2b",
"app.bin": "873c2b0ef5f4b4e4",
"fonts/Barlow-Medium.woff": "a7ab5c7e54c3c38d",
"fonts/Barlow-Regular.woff": "bee61e0690d27f46",
"fonts/Barlow-SemiBold.woff": "bfe69e7af9279ad8",
"fonts/BarlowCondensed-Bold.woff": "51e31ec10a15077d",
"fonts/BarlowCondensed-SemiBold.woff": "44aca26511e53091",
"fonts/IBMPlexMono-Medium.woff": "3a7fc269bd1fc79c",
"fonts/IBMPlexMono-SemiBold.woff": "74d9c19dc8a8933f",
"fonts/Monoton-Regular.woff": "dcc3dc535c754275",
"geo/country-labels.json": "3049de10f56e8534",
"geo/fir.json": "9d13d2c09989b246",
"geo/land-110m.json": "ead5f68119c49a92",
"geo/rt-features.json": "0df3df0e359fedc8",
"geo/rt-places.json": "3a90b922b53caacb",
"geo/rt-points.json": "50762c63b4bb362f",
"geo/tz-places.json": "109ba5d2918fea12",
"geo/tz-zones.json": "4be990134530a1f5",
"geo/world-50m.json": "04342cdc1e3016bc",
"icon-180.png": "5e29497706d4b452",
"icon-192.png": "2160ef544412cde2",
"icon-512.png": "019c91474f53a9a4",
"icon-maskable-512.png": "00ffe0a4fa864efc",
"index.html": "72214c0b996e3a2b",
"manifest.webmanifest": "66fecc1b0c8ce87a",
"ocr-client.js": "6adfcb06c827d565",
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
  /* LFV's charts for the Weather view: from the network; with none, the copy the app kept ("wx-charts", which the app
     fills itself with requests marked ?keep: those pass by here untouched) */
  if (req.method === 'GET' && url.origin === 'https://aro.lfv.se' && url.pathname.startsWith('/tor/')) {
    if (url.searchParams.has('keep')) return;
    e.respondWith((async () => {
      const kept = await (await caches.open('wx-charts')).match(url.origin + url.pathname);
      /* a network that does not answer is given up on: sooner when there is a copy to show */
      return Promise.race([fetch(req), new Promise((ok, no) => setTimeout(no, kept ? 7000 : 25000))]).catch(() => kept || Response.error());
    })());
    return;
  }
  /* the revocation list, the published version number and the key tool always come from the network, never from the cache */
  if (req.method !== 'GET' || url.origin !== self.location.origin || /\/(revoked\.json|licenses\.json|status\.json|version\.json|act\.bin|admin\.html|keys-log\.bin)$/.test(url.pathname)) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(req, {ignoreSearch: true});
    if (hit) return hit;
    try { return await fetch(req); }
    catch (err) { return (req.mode === 'navigate' && await c.match('index.html')) || new Response('Offline', {status: 503}); }
  }));
});
