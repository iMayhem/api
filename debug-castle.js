const origFetch = global.fetch;
global.fetch = function (url, opts) {
  console.log('[FETCH]', String(url).slice(0, 160), opts && opts.method ? opts.method : 'GET');
  return origFetch(url, opts);
};
const origParse = JSON.parse;
JSON.parse = function (text, ...args) {
  try {
    const obj = origParse(text, ...args);
    if (obj && obj.data && typeof obj.data === 'object' && obj.data.id && typeof obj.data.id === 'number' && obj.data.id > 1000000000000) {
      const d = obj.data;
      console.log('[SEASONS-RAW]', JSON.stringify(d.seasons).slice(0, 300));
      console.log('[EP-COUNT]', (d.episodes || []).length, 'seasonNumber:', d.seasonNumber, 'totalNumber:', d.totalNumber);
    }
    return obj;
  } catch (e) { throw e; }
};
const mod = require('./providers/castle.js');
(async () => {
  const r1 = await mod.getStreams(1399, 'tv', '1', '1');
  console.log('TV result count:', r1 ? r1.length : 0);
})();
