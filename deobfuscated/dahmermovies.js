var __async = (_0x45e41a, _0x51e1a, _0x4062f3) => {
  return new Promise((_0x5b0a50, _0x172787) => {
    var _0x2df394 = _0x41e437 => {
      try {
        _0x4bb7d4(_0x4062f3.next(_0x41e437));
      } catch (_0x3ff30b) {
        _0x172787(_0x3ff30b);
      }
    };
    var _0x4ed7dd = _0x44ec8a => {
      try {
        _0x4bb7d4(_0x4062f3.throw(_0x44ec8a));
      } catch (_0x500bc9) {
        _0x172787(_0x500bc9);
      }
    };
    var _0x4bb7d4 = _0x1c97cc => _0x1c97cc.done ? _0x5b0a50(_0x1c97cc.value) : Promise.resolve(_0x1c97cc.value).then(_0x2df394, _0x4ed7dd);
    _0x4bb7d4((_0x4062f3 = _0x4062f3.apply(_0x45e41a, _0x51e1a)).next());
  });
};
console.log("[DahmerMovies] Initializing Scraper");
var TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
var DAHMER_MOVIES_API = "https://a.111477.xyz";
var DAHMER_WORKER_API = "https://p.111477.xyz/bulk?u=";
function makeRequest(_0x4873c3) {
  return __async(this, null, function* () {
    try {
      return yield fetch(_0x4873c3, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          Referer: DAHMER_MOVIES_API + "/"
        }
      });
    } catch (_0x259102) {
      return {
        ok: false
      };
    }
  });
}
function parseLinks(_0x4ebc26) {
  const _0x3e8d9a = [];
  const _0x4718e3 = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  let _0x1cfdca;
  while ((_0x1cfdca = _0x4718e3.exec(_0x4ebc26)) !== null) {
    const _0x5cee51 = _0x1cfdca[1];
    const _0x450106 = _0x5cee51.match(/<a[^>]*href=["']([^"']*)["'][^>]*>([^<]*)<\/a>/i);
    const _0x508162 = _0x5cee51.match(/<td[^>]*>(\d+(?:\.\d+)?\s?[KMGT]B)<\/td>/i);
    if (_0x450106) {
      const _0x1e531e = _0x450106[1];
      const _0x3846ab = _0x450106[2].trim();
      const _0xe4ff8f = _0x508162 ? _0x508162[1].trim() : "N/A";
      if (_0x3846ab && _0x1e531e !== "../" && /\.(mkv|mp4|avi|webm|m3u8)$/i.test(_0x3846ab)) {
        _0x3e8d9a.push({
          text: _0x3846ab,
          href: _0x1e531e,
          size: _0xe4ff8f
        });
      }
    }
  }
  return _0x3e8d9a;
}
function invokeDahmerMovies(_0x281b4d, _0x3875c7, _0x33dad9 = null, _0x4ecc2c = null) {
  return __async(this, null, function* () {
    var _0x22b1cb;
    const _0x2e17fa = _0x281b4d.replace(/:/g, "");
    const _0x2db398 = _0x33dad9 !== null ? ["/tvs/" + encodeURIComponent(_0x2e17fa) + "/Season%20" + (_0x33dad9 < 10 ? "0" + _0x33dad9 : _0x33dad9) + "/", "/tvs/" + encodeURIComponent(_0x2e17fa) + "/Season%20" + _0x33dad9 + "/"] : ["/movies/" + encodeURIComponent(_0x2e17fa + " (" + _0x3875c7 + ")") + "/"];
    let _0x4a108a = "";
    let _0x577087 = "";
    for (const _0x235ef7 of _0x2db398) {
      const _0x38edc5 = DAHMER_MOVIES_API + _0x235ef7;
      const _0xf926d = yield makeRequest(_0x38edc5);
      if (_0xf926d.ok) {
        _0x4a108a = yield _0xf926d.text();
        _0x577087 = _0x38edc5;
        break;
      }
    }
    if (!_0x4a108a) {
      return [];
    }
    const _0x3e7c7c = parseLinks(_0x4a108a);
    const _0x3e7a2d = _0x3e7c7c.sort((_0x366190, _0x5dcba3) => {
      const _0x5a7dc3 = /2160p|4k/i.test(_0x366190.text);
      const _0x4cab78 = /2160p|4k/i.test(_0x5dcba3.text);
      return _0x4cab78 - _0x5a7dc3;
    });
    const _0x1a99b6 = [];
    for (const _0x250035 of _0x3e7a2d.slice(0, 5)) {
      let _0x18db41;
      if (_0x250035.href.startsWith("http")) {
        _0x18db41 = _0x250035.href;
      } else if (_0x250035.href.includes("/movies/") || _0x250035.href.includes("/tvs/")) {
        _0x18db41 = DAHMER_MOVIES_API + (_0x250035.href.startsWith("/") ? "" : "/") + _0x250035.href;
      } else {
        _0x18db41 = _0x577087 + _0x250035.href;
      }
      _0x18db41 = _0x18db41.replace(/([^:]\/)\/+/g, "$1");
      _0x18db41 = decodeURI(_0x18db41);
      let _0x1ca44d = DAHMER_WORKER_API + encodeURI(_0x18db41);
      const _0x41c687 = _0x250035.text;
      let _0x4c99c0 = "Original";
      const _0x5dfb1a = /\b(HIN|TAM|TEL|Multi|Dual|DUB|Multi-Audio|MULTI)\b/i.test(_0x41c687);
      const _0x104fa7 = /\b(Eng|English)\b/i.test(_0x41c687);
      const _0xb619f6 = /^[a-zA-Z0-9\s?!\-:]+$/.test(_0x281b4d);
      if (_0x5dfb1a) {
        _0x4c99c0 = "Multi Audio";
      } else if (_0xb619f6 && _0x104fa7) {
        _0x4c99c0 = "English";
      }
      const _0x5f1538 = _0x41c687.match(/\.(mkv|mp4|m3u8|avi|webm)$/i);
      const _0x4aa592 = _0x5f1538 ? _0x5f1538[1].toUpperCase() : "LINK";
      const _0x2c2ff8 = ((_0x22b1cb = _0x41c687.match(/\b(2160p|1080p|720p|4k)\b/i)) == null ? undefined : _0x22b1cb[0]) || "1080p";
      const _0x541e77 = _0x250035.size !== "N/A" ? _0x250035.size : "N/A";
      let _0x8155f9 = _0x41c687.replace(/\.(mkv|mp4|avi|webm|m3u8)$/i, "").replace(/[\[\]()._-]/g, " ").replace(/\s+/g, " ").trim();
      _0x1a99b6.push({
        name: "DahmerMovies",
        title: "📺 " + _0x2c2ff8 + "  |  🌐 " + _0x4c99c0 + "  |  💾 " + _0x541e77 + "  |  🎞️ " + _0x4aa592 + "  |  ℹ️ " + _0x8155f9,
        url: _0x1ca44d,
        quality: _0x2c2ff8.toLowerCase(),
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          Referer: DAHMER_MOVIES_API + "/",
          Connection: "keep-alive",
          Accept: "*/*",
          Range: "bytes=0-"
        },
        provider: "dahmermovies"
      });
    }
    return _0x1a99b6;
  });
}
function getStreams(_0x390bdb, _0x599059 = "movie", _0x4513c8 = null, _0x3bd20a = null) {
  return __async(this, null, function* () {
    var _0x4399bd;
    try {
      const _0x375ee9 = _0x599059 === "tv" ? "tv" : "movie";
      const _0x269590 = "https://api.themoviedb.org/3/" + _0x375ee9 + "/" + _0x390bdb + "?api_key=" + TMDB_API_KEY;
      const _0x4732bf = yield makeRequest(_0x269590);
      const _0x5d0d8c = yield _0x4732bf.json();
      const _0x5ea823 = _0x599059 === "tv" ? _0x5d0d8c.name : _0x5d0d8c.title;
      const _0x19bc73 = (_0x4399bd = _0x599059 === "tv" ? _0x5d0d8c.first_air_date : _0x5d0d8c.release_date) == null ? undefined : _0x4399bd.substring(0, 4);
      if (!_0x5ea823) {
        return [];
      }
      return yield invokeDahmerMovies(_0x5ea823, _0x19bc73, _0x4513c8, _0x3bd20a);
    } catch (_0x294f5b) {
      return [];
    }
  });
}
if (typeof module !== "undefined") {
  module.exports = {
    getStreams: getStreams
  };
} else {
  global.getStreams = getStreams;
}