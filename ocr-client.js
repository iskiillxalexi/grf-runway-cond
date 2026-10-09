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
  /* draw the photo (orientation applied by the browser) at a given long side, as PNG */
  async function toPng(file, size) {
    const url = URL.createObjectURL(file);
    try {
      const img = new Image(); img.src = url; await img.decode();
      const k = size / Math.max(img.naturalWidth, img.naturalHeight);
      const c = document.createElement('canvas');
      c.width = Math.max(1, Math.round(img.naturalWidth * k)); c.height = Math.max(1, Math.round(img.naturalHeight * k));
      const g = c.getContext('2d'); g.imageSmoothingQuality = 'high'; g.drawImage(img, 0, 0, c.width, c.height);
      const blob = await new Promise(r => c.toBlob(r, 'image/png'));
      if (!blob) throw new Error('canvas');
      return await blob.arrayBuffer();
    } finally { URL.revokeObjectURL(url); }
  }
  return {
    warm() { post({warm:true}).catch(() => {}); },
    async read(file, size) {
      let png;
      try { png = await toPng(file, size); } catch (e) { throw {code:'image_rejected'}; }
      return post({png});
    }
  };
})();
