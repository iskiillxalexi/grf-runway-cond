/* On-device text recognition for photos. Runs Tesseract (WebAssembly) in a worker; no network needed. */
window.LOCAL_OCR = (() => {
  let w = null, seq = 0;
  const wait = new Map();
  const fail = msg => { for (const [, p] of wait) p.rej({code:'ocr_failed', message:msg}); wait.clear(); w = null; };
  const worker = () => {
    if (w) return w;
    w = new Worker('ocr/ocr-worker.js');
    w.onmessage = e => {
      const p = wait.get(e.data.id); if (!p) return;
      wait.delete(e.data.id);
      e.data.error ? p.rej({code:'ocr_failed', message:e.data.error}) : p.res(e.data.text || '');
    };
    w.onerror = e => fail(e.message || 'worker error');
    return w;
  };
  const post = msg => new Promise((res, rej) => { const id = ++seq; wait.set(id, {res, rej}); worker().postMessage({id, ...msg}, msg.png ? [msg.png] : []); });
  /* A photo of a screen shows the screen's pixel grid, which text recognition cannot see past: soften it away.
     Grey, then three box blurs of radius r (about a gaussian of sigma 1.4 for r = 1, 2.4 for r = 2). */
  function blurLine(src, dst, start, step, len, r) {
    let sum = 0;
    for (let k = -r; k <= r; k++) sum += src[start + Math.min(len - 1, Math.max(0, k)) * step];
    for (let i = 0; i < len; i++) {
      dst[start + i * step] = sum / (2 * r + 1);
      sum += src[start + Math.min(len - 1, i + r + 1) * step] - src[start + Math.max(0, i - r) * step];
    }
  }
  function soften(g, w, h, r) {
    const img = g.getImageData(0, 0, w, h), d = img.data, n = w * h;
    let a = new Float32Array(n), b = new Float32Array(n);
    for (let i = 0, j = 0; i < n; i++, j += 4) a[i] = 0.299 * d[j] + 0.587 * d[j + 1] + 0.114 * d[j + 2];
    for (let pass = 0; pass < 3; pass++) {
      for (let y = 0; y < h; y++) blurLine(a, b, y * w, 1, w, r);
      for (let x = 0; x < w; x++) blurLine(b, a, x, w, h, r);
    }
    for (let i = 0, j = 0; i < n; i++, j += 4) { d[j] = d[j + 1] = d[j + 2] = a[i]; d[j + 3] = 255; }
    g.putImageData(img, 0, 0);
  }
  /* draw the photo (orientation applied by the browser) at a given long side, as PNG */
  async function toPng(file, size, blur) {
    const url = URL.createObjectURL(file);
    try {
      const img = new Image(); img.src = url; await img.decode();
      const k = size / Math.max(img.naturalWidth, img.naturalHeight);
      const c = document.createElement('canvas');
      c.width = Math.max(1, Math.round(img.naturalWidth * k)); c.height = Math.max(1, Math.round(img.naturalHeight * k));
      const g = c.getContext('2d'); g.imageSmoothingQuality = 'high'; g.drawImage(img, 0, 0, c.width, c.height);
      if (blur) soften(g, c.width, c.height, blur);
      const blob = await new Promise(r => c.toBlob(r, 'image/png'));
      if (!blob) throw new Error('canvas');
      return await blob.arrayBuffer();
    } finally { URL.revokeObjectURL(url); }
  }
  /* How grainy the photo is at 1000 px: the median difference between neighbouring pixels. A photo of a screen shows the
     pixel grid everywhere (about 20-30); paper, screenshots and clean photos have flat backgrounds (0-3). */
  async function texture(file) {
    const url = URL.createObjectURL(file);
    try {
      const img = new Image(); img.src = url; await img.decode();
      const k = 1000 / Math.max(img.naturalWidth, img.naturalHeight);
      const c = document.createElement('canvas');
      const w = c.width = Math.max(2, Math.round(img.naturalWidth * k)), h = c.height = Math.max(2, Math.round(img.naturalHeight * k));
      const g = c.getContext('2d'); g.imageSmoothingQuality = 'low'; g.drawImage(img, 0, 0, w, h);
      const d = g.getImageData(0, 0, w, h).data, hist = new Uint32Array(512);
      const L = i => 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
      let n = 0;
      for (let y = 0; y < h - 1; y += 2) for (let x = 0; x < w - 1; x += 2) {
        const i = (y * w + x) * 4, v = L(i);
        hist[Math.min(511, Math.round(Math.abs(v - L(i + 4)) + Math.abs(v - L(i + w * 4))))]++; n++;
      }
      let acc = 0; for (let t = 0; t < 512; t++) { acc += hist[t]; if (acc >= n / 2) return t; }
      return 0;
    } catch (e) { return 0; } finally { URL.revokeObjectURL(url); }
  }
  return {
    texture,
    warm() { post({warm:true}).catch(() => {}); },
    async read(file, size, blur) {
      let png;
      try { png = await toPng(file, size, blur); } catch (e) { throw {code:'image_rejected'}; }
      return post({png});
    }
  };
})();
