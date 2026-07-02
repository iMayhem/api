var __async = (_0x172586, _0x2c8c42, _0x277790) => {
  return new Promise((_0x10746e, _0x24dcca) => {
    var _0x2647aa = _0x299787 => {
      try {
        _0x4de87b(_0x277790.next(_0x299787));
      } catch (_0x1495e4) {
        _0x24dcca(_0x1495e4);
      }
    };
    var _0x428bea = _0x306d8d => {
      try {
        _0x4de87b(_0x277790.throw(_0x306d8d));
      } catch (_0x661ca7) {
        _0x24dcca(_0x661ca7);
      }
    };
    var _0x4de87b = _0x2698ee => _0x2698ee.done ? _0x10746e(_0x2698ee.value) : Promise.resolve(_0x2698ee.value).then(_0x2647aa, _0x428bea);
    _0x4de87b((_0x277790 = _0x277790.apply(_0x172586, _0x2c8c42)).next());
  });
};
var cheerio = require("cheerio-without-node-native");
var BASE_URL = "https://www.topcartoons.tv";
var TMDB_API_KEY = "1865f43a0549ca50d341dd9ab8b29f49";
var HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Referer: BASE_URL + "/"
};
function extractQuality(_0x529f17) {
  const _0x4de897 = (_0x529f17 || "").toLowerCase();
  if (_0x4de897.includes("2160p") || _0x4de897.includes("4k")) {
    return "4K";
  }
  if (_0x4de897.includes("1080p")) {
    return "1080p";
  }
  if (_0x4de897.includes("720p")) {
    return "720p";
  }
  if (_0x4de897.includes("480p")) {
    return "480p";
  }
  return "Unknown";
}
function getStreams(_0x492b3c, _0x102a04, _0x3a8ce0, _0x47acce) {
  return __async(this, null, function* () {
    try {
      const _0xddf9b = "https://api.themoviedb.org/3/" + _0x102a04 + "/" + _0x492b3c + "?api_key=" + TMDB_API_KEY;
      const _0x3d6784 = yield (yield fetch(_0xddf9b)).json();
      const _0x2d4063 = _0x3d6784.title || _0x3d6784.name;
      if (!_0x2d4063) {
        return [];
      }
      const _0x1b0164 = BASE_URL + "/?s=" + encodeURIComponent(_0x2d4063);
      const _0x24c27f = yield (yield fetch(_0x1b0164, {
        headers: HEADERS
      })).text();
      const _0x2f6a4b = cheerio.load(_0x24c27f);
      const _0x42c3bf = _0x2f6a4b("article a").first();
      let _0x5dadc7 = _0x42c3bf.attr("href");
      if (!_0x5dadc7) {
        return [];
      }
      if (!_0x5dadc7.startsWith("http")) {
        _0x5dadc7 = BASE_URL + _0x5dadc7;
      }
      const _0x2ae304 = yield (yield fetch(_0x5dadc7, {
        headers: HEADERS
      })).text();
      const _0x5ddd85 = cheerio.load(_0x2ae304);
      const _0x176500 = [];
      _0x5ddd85("article article").each((_0x30ee9f, _0x51ddc9) => {
        const _0x36ca37 = _0x5ddd85(_0x51ddc9).find("a").attr("href");
        const _0x1f62ed = _0x5ddd85(_0x51ddc9).find("h3 a").text().trim();
        if (_0x36ca37) {
          _0x176500.push({
            href: _0x36ca37,
            name: _0x1f62ed
          });
        }
      });
      let _0x427e08 = _0x5dadc7;
      if (_0x176500.length > 0 && _0x102a04 === "tv" && _0x47acce != null) {
        const _0x1e8888 = parseInt(_0x47acce) - 1;
        if (_0x1e8888 >= 0 && _0x1e8888 < _0x176500.length) {
          _0x427e08 = _0x176500[_0x1e8888].href;
        } else {
          _0x427e08 = _0x176500[0].href;
        }
      } else if (_0x176500.length > 0) {
        _0x427e08 = _0x176500[0].href;
      }
      if (!_0x427e08.startsWith("http")) {
        _0x427e08 = BASE_URL + _0x427e08;
      }
      const _0x30148f = yield (yield fetch(_0x427e08, {
        headers: HEADERS
      })).text();
      const _0x33db12 = cheerio.load(_0x30148f);
      const _0x60bea3 = _0x33db12("meta[property=\"og:video:url\"]").attr("content") || "";
      if (!_0x60bea3) {
        return [];
      }
      return [{
        name: "TopCartoons",
        url: _0x60bea3,
        quality: extractQuality(_0x60bea3),
        title: "TopCartoons",
        subtitles: [],
        behaviorHints: {
          notWebReady: true,
          proxyHeaders: {
            request: Object.assign({}, HEADERS)
          }
        }
      }];
    } catch (_0x27c91f) {
      console.error("[TopCartoons]", _0x27c91f);
      return [];
    }
  });
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getStreams: getStreams
  };
}