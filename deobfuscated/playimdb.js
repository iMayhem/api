var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (_0x1b278f, _0x4056c3, _0x70e7f3) => _0x4056c3 in _0x1b278f ? __defProp(_0x1b278f, _0x4056c3, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x70e7f3
}) : _0x1b278f[_0x4056c3] = _0x70e7f3;
var __spreadValues = (_0x2b23de, _0xbe8bfa) => {
  for (var _0x529cd0 in _0xbe8bfa ||= {}) {
    if (__hasOwnProp.call(_0xbe8bfa, _0x529cd0)) {
      __defNormalProp(_0x2b23de, _0x529cd0, _0xbe8bfa[_0x529cd0]);
    }
  }
  if (__getOwnPropSymbols) {
    for (var _0x529cd0 of __getOwnPropSymbols(_0xbe8bfa)) {
      if (__propIsEnum.call(_0xbe8bfa, _0x529cd0)) {
        __defNormalProp(_0x2b23de, _0x529cd0, _0xbe8bfa[_0x529cd0]);
      }
    }
  }
  return _0x2b23de;
};
var __spreadProps = (_0x2ec486, _0x39c3da) => __defProps(_0x2ec486, __getOwnPropDescs(_0x39c3da));
var __async = (_0x37b65b, _0x170b08, _0x488249) => {
  return new Promise((_0x9bda57, _0x583983) => {
    var _0x548817 = _0x5f4b48 => {
      try {
        _0x597fac(_0x488249.next(_0x5f4b48));
      } catch (_0x34a995) {
        _0x583983(_0x34a995);
      }
    };
    var _0x2a2afe = _0x200266 => {
      try {
        _0x597fac(_0x488249.throw(_0x200266));
      } catch (_0x5d68bc) {
        _0x583983(_0x5d68bc);
      }
    };
    var _0x597fac = _0x538a38 => _0x538a38.done ? _0x9bda57(_0x538a38.value) : Promise.resolve(_0x538a38.value).then(_0x548817, _0x2a2afe);
    _0x597fac((_0x488249 = _0x488249.apply(_0x37b65b, _0x170b08)).next());
  });
};
var PROVIDER_NAME = "🟡 PlayIMDb";
var BASE_API = "https://streamdata.vaplayer.ru/api.php";
var TMDB_API_KEY = "68e094699525b18a70bab2f86b1fa706";
var HEADERS = {
  Origin: "https://nextgencloudfabric.com",
  Referer: "https://nextgencloudfabric.com/",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
};
function fetchWithTimeout(_0xb5554e, _0x3c5a3f) {
  return __async(this, null, function* () {
    var _0x4fdd10 = 10000;
    var _0x286913 = typeof AbortSignal !== "undefined" && AbortSignal.timeout ? AbortSignal.timeout(_0x4fdd10) : null;
    var _0x40eed4 = __spreadProps(__spreadValues({}, _0x3c5a3f), {
      headers: __spreadValues(__spreadValues({}, HEADERS), (_0x3c5a3f == null ? undefined : _0x3c5a3f.headers) || {})
    });
    if (_0x286913) {
      _0x40eed4.signal = _0x286913;
    }
    return yield fetch(_0xb5554e, _0x40eed4);
  });
}
function fetchJson(_0x373bf4, _0x5a7592) {
  return __async(this, null, function* () {
    try {
      var _0x2d6ca2 = yield fetchWithTimeout(_0x373bf4, _0x5a7592 || {});
      if (_0x2d6ca2.ok) {
        return yield _0x2d6ca2.json();
      }
      return null;
    } catch (_0x45ec7a) {
      console.log("[" + PROVIDER_NAME + "] fetchJson error: " + _0x45ec7a);
      return null;
    }
  });
}
function getTmdbMetadata(_0xf33d62, _0x12d36b, _0x12f397, _0x20f23a) {
  return __async(this, null, function* () {
    let _0x5aab97 = "Unknown Title";
    let _0x3c9ac0 = _0x12d36b === "tv" ? "45 min" : "90 min";
    try {
      const _0x276e27 = _0x12d36b === "movie" ? "movie" : "tv";
      const _0x3b77c2 = "https://api.themoviedb.org/3/" + _0x276e27 + "/" + _0xf33d62 + "?api_key=" + TMDB_API_KEY;
      const _0x14b051 = yield fetch(_0x3b77c2);
      if (!_0x14b051.ok) {
        return {
          name: _0x5aab97,
          year: "N/A",
          duration: _0x3c9ac0
        };
      }
      const _0x1b9e97 = yield _0x14b051.json();
      let _0x4f8b5b = _0x3c9ac0;
      if (_0x12d36b === "movie" && _0x1b9e97.runtime) {
        _0x4f8b5b = _0x1b9e97.runtime + " min";
      } else if (_0x12d36b === "tv") {
        const _0x35f399 = "https://api.themoviedb.org/3/tv/" + _0xf33d62 + "/season/" + _0x12f397 + "/episode/" + _0x20f23a + "?api_key=" + TMDB_API_KEY;
        const _0x326882 = yield fetch(_0x35f399);
        if (_0x326882.ok) {
          const _0x4d5e6c = yield _0x326882.json();
          if (_0x4d5e6c.runtime) {
            _0x4f8b5b = _0x4d5e6c.runtime + " min";
          } else if (_0x1b9e97.episode_run_time && _0x1b9e97.episode_run_time.length > 0) {
            _0x4f8b5b = _0x1b9e97.episode_run_time[0] + " min";
          }
        }
      }
      return {
        name: _0x1b9e97.title || _0x1b9e97.name || _0x5aab97,
        year: (_0x1b9e97.release_date || _0x1b9e97.first_air_date || "").split("-")[0] || "N/A",
        duration: _0x4f8b5b
      };
    } catch (_0x348187) {
      return {
        name: _0x5aab97,
        year: "N/A",
        duration: _0x3c9ac0
      };
    }
  });
}
function getStreams(_0x8253ec, _0x3a181f, _0x7a0c24, _0x32fd74) {
  return __async(this, null, function* () {
    var _0x1e315d = [];
    try {
      var _0x5348b1 = _0x3a181f === "tv" || _0x3a181f === "series";
      var _0x305f95 = _0x5348b1 ? "tv" : "movie";
      if (!_0x8253ec) {
        console.log("[" + PROVIDER_NAME + "] Missing TMDB ID");
        return _0x1e315d;
      }
      var _0x2a5fa1 = yield getTmdbMetadata(_0x8253ec, _0x305f95, _0x7a0c24, _0x32fd74);
      var _0x2f5792 = BASE_API + "?tmdb=" + _0x8253ec + "&type=" + _0x305f95;
      if (_0x5348b1) {
        if (!_0x7a0c24 || !_0x32fd74) {
          return _0x1e315d;
        }
        _0x2f5792 += "&season=" + _0x7a0c24 + "&episode=" + _0x32fd74;
      }
      console.log("[" + PROVIDER_NAME + "] Fetching stream data from API: " + _0x2f5792);
      var _0x47c700 = yield fetchJson(_0x2f5792, {
        headers: HEADERS
      });
      if (_0x47c700 && (_0x47c700.status_code == 200 || _0x47c700.status_code === "200") && _0x47c700.data && _0x47c700.data.stream_urls) {
        var _0x2a8eff = "1080p FHD";
        var _0x35e348 = "1080P";
        var _0x4ff203 = String(_0x47c700.data.file_name || "").toLowerCase();
        if (_0x4ff203.includes("2160p") || _0x4ff203.includes("4k")) {
          _0x2a8eff = "4K UHD";
          _0x35e348 = "2160P";
        } else if (_0x4ff203.includes("1080p")) {
          _0x2a8eff = "1080p FHD";
          _0x35e348 = "1080P";
        } else if (_0x4ff203.includes("720p")) {
          _0x2a8eff = "720p HD";
          _0x35e348 = "720P";
        }
        var _0x241338 = "Original-Audio";
        var _0x2614ab = "Original-Audio";
        if (_0x4ff203.includes("dual") || _0x4ff203.includes("hindi") && _0x4ff203.includes("english")) {
          _0x241338 = "Dual-Audio";
          _0x2614ab = "English • Hindi";
        } else if (_0x4ff203.includes("multi")) {
          _0x241338 = "Multi-Audio";
          _0x2614ab = "Multilingual";
        } else if (_0x4ff203.includes("hindi")) {
          _0x241338 = "Hindi-Audio";
          _0x2614ab = "Hindi";
        } else if (_0x4ff203.includes("english")) {
          _0x241338 = "English-Audio";
          _0x2614ab = "English";
        }
        var _0x28cac4 = _0x2a5fa1.name || "Unknown Title";
        var _0x2ac274 = _0x2a5fa1.year || "N/A";
        _0x47c700.data.stream_urls.forEach((_0x1dec24, _0x4c0467) => {
          var _0x23a99f = _0x1dec24.toLowerCase();
          var _0x1f87bf = "Server " + (_0x4c0467 + 1);
          var _0x12e7e0 = "MKV";
          if (_0x23a99f.includes(".mp4")) {
            _0x12e7e0 = "MP4";
          }
          if (_0x23a99f.includes(".m3u8")) {
            _0x12e7e0 = "M3U8";
          }
          var _0x3ccd21 = PROVIDER_NAME + " | " + _0x2a8eff + " | " + _0x241338;
          var _0x5e7f4e = _0x5348b1 ? "🎬 " + _0x28cac4 + " - S" + _0x7a0c24 + "E" + _0x32fd74 + " (" + _0x2ac274 + ")" : "🎬 " + _0x28cac4 + " - " + _0x2ac274;
          var _0x5012a3 = "💎 " + _0x35e348 + " | 🌍 " + _0x2614ab;
          var _0x244502 = "🎞️ " + _0x12e7e0 + " | ⏱️ " + _0x2a5fa1.duration + " | 📌 " + _0x1f87bf;
          var _0x79ac9d = _0x5e7f4e + "\n" + _0x5012a3 + "\n" + _0x244502;
          var _0x3812f6 = {
            name: _0x3ccd21,
            title: _0x79ac9d,
            url: _0x1dec24,
            quality: _0x35e348.toLowerCase(),
            type: "direct"
          };
          _0x3812f6.headers = HEADERS;
          if (_0x47c700.default_subs && Array.isArray(_0x47c700.default_subs) && _0x47c700.default_subs.length > 0) {
            _0x3812f6.subtitles = _0x47c700.default_subs.map(_0x3d9f15 => {
              return {
                id: _0x3d9f15.code || _0x3d9f15.lang,
                url: _0x3d9f15.url,
                lang: _0x3d9f15.lang
              };
            });
          }
          _0x1e315d.push(_0x3812f6);
        });
      }
    } catch (_0x3b0a1f) {
      console.log("[" + PROVIDER_NAME + "] Error: " + _0x3b0a1f.message);
    }
    return _0x1e315d;
  });
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getStreams: getStreams
  };
} else {
  global.getStreams = getStreams;
}