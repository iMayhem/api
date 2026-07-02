var __async = (_0x179375, _0xbab1a8, _0xadbf64) => {
  return new Promise((_0x48c211, _0x2496d2) => {
    var _0x13150c = _0x3cd622 => {
      try {
        _0x5593e2(_0xadbf64.next(_0x3cd622));
      } catch (_0x4ff15c) {
        _0x2496d2(_0x4ff15c);
      }
    };
    var _0x418651 = _0x587802 => {
      try {
        _0x5593e2(_0xadbf64.throw(_0x587802));
      } catch (_0x3f5cb0) {
        _0x2496d2(_0x3f5cb0);
      }
    };
    var _0x5593e2 = _0x25ada3 => _0x25ada3.done ? _0x48c211(_0x25ada3.value) : Promise.resolve(_0x25ada3.value).then(_0x13150c, _0x418651);
    _0x5593e2((_0xadbf64 = _0xadbf64.apply(_0x179375, _0xbab1a8)).next());
  });
};
var NOTORRENT_API = "https://addon-osvh.onrender.com";
var TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
function getImdbId(_0x22b479, _0x51aab7) {
  return __async(this, null, function* () {
    var _0xfd03ad;
    try {
      const _0x5e0b9e = _0x51aab7 === "tv" ? "tv" : "movie";
      const _0x5566de = "https://api.themoviedb.org/3/" + _0x5e0b9e + "/" + _0x22b479 + "?api_key=" + TMDB_API_KEY + "&append_to_response=external_ids";
      const _0xa49fe6 = yield fetch(_0x5566de);
      if (!_0xa49fe6.ok) {
        return null;
      }
      const _0x4db071 = yield _0xa49fe6.json();
      return ((_0xfd03ad = _0x4db071.external_ids) == null ? undefined : _0xfd03ad.imdb_id) || null;
    } catch (_0x5f18ac) {
      console.error("[NoTorrent] Failed obtaining IMDB mapping:", _0x5f18ac.message);
      return null;
    }
  });
}
function cleanText(_0x50c520) {
  if (!_0x50c520) {
    return "";
  }
  return _0x50c520.replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]/gu, "").trim();
}
function extractQuality(_0x1b0b5f) {
  const _0x2967b7 = _0x1b0b5f || "";
  const _0x5b4475 = _0x2967b7.match(/(\d{3,4}p)/);
  if (_0x5b4475) {
    return _0x5b4475[0];
  }
  if (_0x2967b7.toUpperCase().includes("FREE")) {
    return "Auto";
  }
  return "Unknown";
}
function getStreams(_0x56e61a, _0x37e560, _0x1bc3bb, _0x388b82) {
  return __async(this, null, function* () {
    console.log("[NoTorrent] Searching for " + _0x37e560 + " " + _0x56e61a);
    const _0x383807 = [];
    try {
      const _0x1cd85a = yield getImdbId(_0x56e61a, _0x37e560);
      if (!_0x1cd85a) {
        console.warn("[NoTorrent] Failed to map IMDB ID.");
        return [];
      }
      let _0x955834 = NOTORRENT_API + "/stream/movie/" + _0x1cd85a + ".json";
      if (_0x37e560 === "tv" || _0x1bc3bb != null) {
        _0x955834 = NOTORRENT_API + "/stream/series/" + _0x1cd85a + ":" + _0x1bc3bb + ":" + _0x388b82 + ".json";
      }
      const _0x36df5f = yield fetch(_0x955834);
      if (!_0x36df5f.ok) {
        console.warn("[NoTorrent] API down or unreachable.");
        return [];
      }
      const _0x53dbdf = yield _0x36df5f.json();
      const _0x2d2039 = _0x53dbdf.streams || [];
      _0x2d2039.forEach(_0x52c2ce => {
        var _0x5d56c0;
        var _0x322e06;
        var _0x465f73;
        if (_0x52c2ce.externalUrl || !_0x52c2ce.url) {
          return;
        }
        if (_0x52c2ce.url.includes("github.com") || _0x52c2ce.url.includes("googleusercontent")) {
          return;
        }
        const _0xb21db2 = _0x52c2ce.title || "";
        const _0x1e7c80 = cleanText(_0xb21db2);
        const _0x3a3f43 = extractQuality(_0x1e7c80);
        let _0x159f61 = "Default";
        const _0x152899 = _0x1e7c80.match(/\(([^)]+)\)/);
        if (_0x152899) {
          _0x159f61 = _0x152899[1].charAt(0).toUpperCase() + _0x152899[1].slice(1).toLowerCase();
        }
        const _0x2436bb = ((_0x322e06 = (_0x5d56c0 = _0x52c2ce.behaviorHints) == null ? undefined : _0x5d56c0.proxyHeaders) == null ? undefined : _0x322e06.request) || {};
        const _0x4a8d1d = Object.assign({}, ((_0x465f73 = _0x52c2ce.behaviorHints) == null ? undefined : _0x465f73.headers) || {}, _0x2436bb);
        const _0xa806fd = ["NoTorrent", _0x159f61 !== "Default" ? _0x159f61 : ""].filter(_0x186dcc => _0x186dcc && _0x186dcc.trim() !== "");
        _0x383807.push({
          name: _0xa806fd.join(" • "),
          title: _0x3a3f43,
          url: _0x52c2ce.url,
          quality: _0x3a3f43,
          type: _0x52c2ce.url.includes(".m3u8") ? "m3u8" : _0x52c2ce.url.includes(".mp4") || _0x52c2ce.url.includes(".mkv") ? "video" : null,
          headers: Object.keys(_0x4a8d1d).length > 0 ? _0x4a8d1d : undefined,
          provider: "notorrent"
        });
      });
    } catch (_0x258743) {
      console.error("[NoTorrent] Fetch failed:", _0x258743.message);
    }
    console.log("[NoTorrent] Total results found: " + _0x383807.length);
    return _0x383807;
  });
}
module.exports = {
  getStreams: getStreams
};