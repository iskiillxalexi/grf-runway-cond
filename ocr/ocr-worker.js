/* Tesseract LSTM in WebAssembly. Files are served from this folder and cached by the service worker. */
let M = null, api = null, ready = null;
const SIMD = (() => { try { return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])); } catch (e) { return false; } })();
function init() {
  if (ready) return ready;
  ready = (async () => {
    const base = SIMD ? 'tesseract-core-simd-lstm' : 'tesseract-core-lstm';
    importScripts(base + '.js');
    M = await TesseractCore({locateFile: f => f});
    const td = new Uint8Array(await (await fetch('eng.traineddata')).arrayBuffer());
    M.FS.writeFile('eng.traineddata', td);
    api = new M.TessBaseAPI();
    if (api.Init(null, 'eng')) throw new Error('Tesseract init failed');
    api.SetVariable('thresholding_method', '2');   /* Sauvola: copes with glare and uneven light */
  })();
  ready.catch(() => { ready = null; });
  return ready;
}
onmessage = async e => {
  const {id, png, warm} = e.data;
  try {
    await init();
    if (warm) return postMessage({id, text:''});
    M.FS.writeFile('/input', new Uint8Array(png));
    api.SetImageFile();
    postMessage({id, text: api.GetUTF8Text()});
  } catch (err) { postMessage({id, error: String(err && err.message || err)}); }
};
