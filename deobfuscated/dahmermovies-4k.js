var __async = (_0x3b000f, _0x6b952b, _0x285023) => {
  return new Promise((_0x4983ee, _0xc561fb) => {
    var _0x51942c = _0x6d4c8c => {
      try {
        _0x2ad414(_0x285023.next(_0x6d4c8c));
      } catch (_0x203eba) {
        _0xc561fb(_0x203eba);
      }
    };
    var _0x18eb73 = _0x383366 => {
      try {
        _0x2ad414(_0x285023.throw(_0x383366));
      } catch (_0xe29812) {
        _0xc561fb(_0xe29812);
      }
    };
    var _0x2ad414 = _0x291a99 => _0x291a99.done ? _0x4983ee(_0x291a99.value) : Promise.resolve(_0x291a99.value).then(_0x51942c, _0x18eb73);
    _0x2ad414((_0x285023 = _0x285023.apply(_0x3b000f, _0x6b952b)).next());
  });
};
console.log("[DahmerMovies] Initializing Scraper");
var TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
var DAHMER_MOVIES_API = "https://a.111477.xyz";
function makeRequest(_0x30119a) {
  return __async(this, null, function* () {
    try {
      return yield fetch(_0x30119a, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
      });
    } catch (_0x3c2474) {
      return {
        ok: false
      };
    }
  });
}
function resolveFinalUrl(_0x627e34) {
  return __async(this, null, function* () {
    let _0x3fb108 = _0x627e34;
    if (_0x627e34.includes("/bulk?u=")) {
      _0x3fb108 = decodeURIComponent(_0x627e34.split("u=")[1]);
    }
    try {
      const _0x3bf089 = yield fetch(_0x3fb108, {
        method: "HEAD",
        redirect: "follow",
        headers: {
          "User-Agent": "Mozilla/5.0 (Android) ExoPlayer",
          Referer: DAHMER_MOVIES_API + "/"
        }
      });
      return _0x3bf089.url;
    } catch (_0xb659b3) {
      return _0x3fb108;
    }
  });
}
function parseLinks(_0x26f757) {
  const _0x5eb3f4 = [];
  const _0x51fc2a = new RegExp("<tr[^>]*>(.*?)<\\/tr>", "gis");
  let _0x169d05;
  while ((_0x169d05 = _0x51fc2a.exec(_0x26f757)) !== null) {
    const _0x39826c = _0x169d05[1];
    const _0x51945a = _0x39826c.match(/<a[^>]*href=["']([^"']*)["'][^>]*>([^<]*)<\/a>/i);
    if (_0x51945a) {
      const _0x3d7834 = _0x51945a[1];
      const _0x20c39e = _0x51945a[2].trim();
      if (_0x20c39e && _0x3d7834 !== "../" && /\.(mkv|mp4|avi|webm)$/i.test(_0x20c39e)) {
        _0x5eb3f4.push({
          text: _0x20c39e,
          href: _0x3d7834
        });
      }
    }
  }
  return _0x5eb3f4;
}
function invokeDahmerMovies(_0x192091, _0xd66db5, _0x494e3e = null, _0x5a3aa2 = null) {
  return __async(this, null, function* () {
    const _0x1f47e4 = _0x192091.replace(/:/g, "");
    const _0x337327 = _0x494e3e !== null ? ["/tvs/" + encodeURIComponent(_0x1f47e4) + "/Season%20" + (_0x494e3e < 10 ? "0" + _0x494e3e : _0x494e3e) + "/", "/tvs/" + encodeURIComponent(_0x1f47e4) + "/Season%20" + _0x494e3e + "/"] : ["/movies/" + encodeURIComponent(_0x1f47e4 + " (" + _0xd66db5 + ")") + "/"];
    let _0x515d71 = "";
    let _0x664bb5 = "";
    for (const _0x132250 of _0x337327) {
      const _0x2bb293 = DAHMER_MOVIES_API + _0x132250;
      const _0x397254 = yield makeRequest(_0x2bb293);
      if (_0x397254.ok) {
        _0x515d71 = yield _0x397254.text();
        _0x664bb5 = _0x2bb293;
        break;
      }
    }
    if (!_0x515d71) {
      return [];
    }
    const _0x11d018 = parseLinks(_0x515d71);
    let _0x777c46 = _0x11d018;
    if (_0x494e3e !== null && _0x5a3aa2 !== null) {
      const _0x1cf256 = _0x5a3aa2 < 10 ? "0" + _0x5a3aa2 : _0x5a3aa2;
      const _0x3bbd1a = new RegExp("E" + _0x1cf256 + "|E" + _0x5a3aa2, "i");
      _0x777c46 = _0x11d018.filter(_0x2f6fd5 => _0x3bbd1a.test(_0x2f6fd5.text));
    }
    const _0x26a508 = _0x777c46.sort((_0x419f63, _0x31c5b6) => {
      const _0x40fb2c = /2160p|4k/i.test(_0x419f63.text);
      const _0x342460 = /2160p|4k/i.test(_0x31c5b6.text);
      return _0x342460 - _0x40fb2c;
    });
    const _0x9bc5c9 = [];
    for (const _0x592ff6 of _0x26a508.slice(0, 5)) {
      let _0x280393;
      if (_0x592ff6.href.startsWith("http")) {
        _0x280393 = _0x592ff6.href;
      } else if (_0x592ff6.href.includes("/movies/") || _0x592ff6.href.includes("/tvs/")) {
        _0x280393 = DAHMER_MOVIES_API + (_0x592ff6.href.startsWith("/") ? "" : "/") + _0x592ff6.href;
      } else {
        _0x280393 = _0x664bb5 + _0x592ff6.href;
      }
      _0x280393 = _0x280393.replace(/([^:]\/)\/+/g, "$1");
      const _0x46f628 = yield resolveFinalUrl(_0x280393);
      _0x9bc5c9.push({
        name: "DahmerMovies",
        title: _0x592ff6.text,
        url: _0x46f628,
        quality: /2160p|4k/i.test(_0x592ff6.text) ? "2160p" : "1080p",
        headers: {
          "User-Agent": "Mozilla/5.0 (Android) ExoPlayer",
          Referer: DAHMER_MOVIES_API + "/",
          Range: "bytes=0-"
        },
        provider: "dahmermovies"
      });
    }
    return _0x9bc5c9;
  });
}
function getStreams(_0x1e74c7, _0x4e7a14 = "movie", _0x479f09 = null, _0x21c0c7 = null) {
  return __async(this, null, function* () {
    var _0x2ae1e9;
    try {
      const _0x2ce8eb = _0x4e7a14 === "tv" ? "tv" : "movie";
      const _0x10adb0 = "https://api.themoviedb.org/3/" + _0x2ce8eb + "/" + _0x1e74c7 + "?api_key=" + TMDB_API_KEY;
      const _0x55b796 = yield makeRequest(_0x10adb0);
      const _0x1fc166 = yield _0x55b796.json();
      const _0x4720c9 = _0x4e7a14 === "tv" ? _0x1fc166.name : _0x1fc166.title;
      const _0x5989ac = (_0x2ae1e9 = _0x4e7a14 === "tv" ? _0x1fc166.first_air_date : _0x1fc166.release_date) == null ? undefined : _0x2ae1e9.substring(0, 4);
      if (!_0x4720c9) {
        return [];
      }
      return yield invokeDahmerMovies(_0x4720c9, _0x5989ac, _0x479f09, _0x21c0c7);
    } catch (_0x3e51b0) {
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