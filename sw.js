/* GRF Runway Cond: everything is stored on the device at install, then served from the cache (works with no network). */
const CACHE = 'grf-9099b8c0df';
const FILES = [
"./",
"app.bin",
"fonts/Barlow-Medium.woff",
"fonts/Barlow-Regular.woff",
"fonts/Barlow-SemiBold.woff",
"fonts/BarlowCondensed-Bold.woff",
"fonts/BarlowCondensed-SemiBold.woff",
"fonts/IBMPlexMono-Medium.woff",
"fonts/IBMPlexMono-SemiBold.woff",
"fonts/Monoton-Regular.woff",
"icon-180.png",
"icon-192.png",
"icon-512.png",
"icon-maskable-512.png",
"index.html",
"manifest.webmanifest",
"ocr-client.js",
"ocr/eng.traineddata",
"ocr/ocr-worker.js",
"ocr/tesseract-core-lstm.js",
"ocr/tesseract-core-lstm.wasm",
"ocr/tesseract-core-simd-lstm.js",
"ocr/tesseract-core-simd-lstm.wasm"
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('grf-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin || url.pathname.endsWith('/revoked.json')) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(req, {ignoreSearch: true}) || (req.mode === 'navigate' ? await c.match('index.html') : null);
    if (hit) return hit;
    try { return await fetch(req); } catch (err) { return new Response('Offline', {status: 503}); }
  }));
});
