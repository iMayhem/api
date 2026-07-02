var __async = (_0x3e35a4, _0x4aa1fe, _0x5dd4f7) => {
  return new Promise((_0x6604d1, _0x3ad7fd) => {
    var _0x188209 = _0xb4e14f => {
      try {
        _0x93ce69(_0x5dd4f7.next(_0xb4e14f));
      } catch (_0x394308) {
        _0x3ad7fd(_0x394308);
      }
    };
    var _0x2a85b3 = _0x104a05 => {
      try {
        _0x93ce69(_0x5dd4f7.throw(_0x104a05));
      } catch (_0x50766a) {
        _0x3ad7fd(_0x50766a);
      }
    };
    var _0x93ce69 = _0xf644d2 => _0xf644d2.done ? _0x6604d1(_0xf644d2.value) : Promise.resolve(_0xf644d2.value).then(_0x188209, _0x2a85b3);
    _0x93ce69((_0x5dd4f7 = _0x5dd4f7.apply(_0x3e35a4, _0x4aa1fe)).next());
  });
};
var TMDB_API_KEY = "1865f43a0549ca50d341dd9ab8b29f49";
var TORRENTIO_API = "https://torrentio.strem.fun";
var HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
  Accept: "application/json"
};
function extractQuality(_0x2c42fb = "") {
  const _0x107066 = _0x2c42fb.toLowerCase();
  if (_0x107066.includes("2160p") || _0x107066.includes("4k")) {
    return "4K";
  }
  if (_0x107066.includes("1080p")) {
    return "1080p";
  }
  if (_0x107066.includes("720p")) {
    return "720p";
  }
  if (_0x107066.includes("480p")) {
    return "480p";
  }
  return "Unknown";
}
var TRACKERS = ["udp://tracker.opentrackr.org:1337/announce", "udp://open.stealth.si:80/announce", "udp://tracker.torrent.eu.org:451/announce", "udp://exodus.desync.com:6969/announce"];
function buildMagnet(_0xb9a8f7) {
  if (!_0xb9a8f7) {
    return "";
  }
  const _0x4512fb = TRACKERS.map(_0x57ad1d => "&tr=" + encodeURIComponent(_0x57ad1d)).join("");
  return "magnet:?xt=urn:btih:" + _0xb9a8f7 + _0x4512fb;
}
function getImdbId(_0x34d5fb, _0x11c68a) {
  return __async(this, null, function* () {
    var _0x19913e;
    try {
      const _0x3eeb9f = "https://api.themoviedb.org/3/" + _0x11c68a + "/" + _0x34d5fb + "?api_key=" + TMDB_API_KEY + "&append_to_response=external_ids";
      const _0x45a112 = yield (yield fetch(_0x3eeb9f, {
        skipSizeCheck: true
      })).json();
      return ((_0x19913e = _0x45a112.external_ids) == null ? undefined : _0x19913e.imdb_id) || _0x45a112.imdb_id || null;
    } catch (_0x45688d) {
      return null;
    }
  });
}
function invokeTorrentio(_0x9c86b4, _0x383cf7, _0xadf1fd) {
  return __async(this, null, function* () {
    var _0x33dfd3;
    try {
      const _0x47a940 = _0x383cf7 != null && _0xadf1fd != null;
      const _0x27eeec = _0x47a940 ? TORRENTIO_API + "/stream/series/" + _0x9c86b4 + ":" + _0x383cf7 + ":" + _0xadf1fd + ".json" : TORRENTIO_API + "/stream/movie/" + _0x9c86b4 + ".json";
      console.log("[TORRENTIO URL]", _0x27eeec);
      const _0x653108 = yield fetch(_0x27eeec, {
        headers: HEADERS,
        skipSizeCheck: true
      });
      const _0x3b28a8 = yield _0x653108.json();
      if (!_0x3b28a8 || !_0x3b28a8.streams) {
        console.log("[TORRENTIO] No streams");
        return [];
      }
      const _0x52e045 = [];
      for (const _0x152226 of _0x3b28a8.streams.slice(0, 15)) {
        try {
          const _0x264363 = _0x152226.title || "";
          const _0x36e454 = extractQuality(_0x264363);
          const _0xe48b41 = ((_0x33dfd3 = _0x264363.match(/👤\s*(\d+)/)) == null ? undefined : _0x33dfd3[1]) || "?";
          const _0x54ad4e = buildMagnet(_0x152226.infoHash);
          if (!_0x54ad4e) {
            continue;
          }
          _0x52e045.push({
            url: _0x54ad4e,
            quality: _0x36e454,
            title: "Torrentio | " + _0x36e454 + " | 👤 " + _0xe48b41,
            subtitles: []
          });
        } catch (_0x4639e0) {}
      }
      return _0x52e045;
    } catch (_0x229da3) {
      console.log("[TORRENTIO ERROR]", _0x229da3);
      return [];
    }
  });
}
function getStreams(_0x12d264, _0x21f2b2, _0x20c981, _0x111a3e) {
  return __async(this, null, function* () {
    try {
      const _0x5927ef = yield getImdbId(_0x12d264, _0x21f2b2);
      if (!_0x5927ef) {
        console.log("[TORRA] No IMDB ID");
        return [];
      }
      console.log("[TORRA IMDB]", _0x5927ef);
      const _0x118881 = yield invokeTorrentio(_0x5927ef, _0x21f2b2 === "tv" ? _0x20c981 : null, _0x21f2b2 === "tv" ? _0x111a3e : null);
      return _0x118881;
    } catch (_0x2262d9) {
      console.log("[TORRA FATAL]", _0x2262d9);
      return [];
    }
  });
}
module.exports = {
  getStreams: getStreams
};