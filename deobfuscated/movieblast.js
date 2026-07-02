var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (_0x2f6bc6, _0x4b6353, _0x140ba5) => _0x4b6353 in _0x2f6bc6 ? __defProp(_0x2f6bc6, _0x4b6353, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x140ba5
}) : _0x2f6bc6[_0x4b6353] = _0x140ba5;
var __spreadValues = (_0xe116ae, _0x31f087) => {
  for (var _0x26c768 in _0x31f087 ||= {}) {
    if (__hasOwnProp.call(_0x31f087, _0x26c768)) {
      __defNormalProp(_0xe116ae, _0x26c768, _0x31f087[_0x26c768]);
    }
  }
  if (__getOwnPropSymbols) {
    for (var _0x26c768 of __getOwnPropSymbols(_0x31f087)) {
      if (__propIsEnum.call(_0x31f087, _0x26c768)) {
        __defNormalProp(_0xe116ae, _0x26c768, _0x31f087[_0x26c768]);
      }
    }
  }
  return _0xe116ae;
};
var __spreadProps = (_0x29229e, _0xafc651) => __defProps(_0x29229e, __getOwnPropDescs(_0xafc651));
var __copyProps = (_0x4e4855, _0x172aab, _0x3f2bd2, _0x5a288a) => {
  if (_0x172aab && typeof _0x172aab === "object" || typeof _0x172aab === "function") {
    for (let _0x2d4dd8 of __getOwnPropNames(_0x172aab)) {
      if (!__hasOwnProp.call(_0x4e4855, _0x2d4dd8) && _0x2d4dd8 !== _0x3f2bd2) {
        __defProp(_0x4e4855, _0x2d4dd8, {
          get: () => _0x172aab[_0x2d4dd8],
          enumerable: !(_0x5a288a = __getOwnPropDesc(_0x172aab, _0x2d4dd8)) || _0x5a288a.enumerable
        });
      }
    }
  }
  return _0x4e4855;
};
var __toESM = (_0x47c598, _0x5847fa, _0x25675a) => {
  _0x25675a = _0x47c598 != null ? __create(__getProtoOf(_0x47c598)) : {};
  return __copyProps(_0x5847fa || !_0x47c598 || !_0x47c598.__esModule ? __defProp(_0x25675a, "default", {
    value: _0x47c598,
    enumerable: true
  }) : _0x25675a, _0x47c598);
};
var __async = (_0x9f583a, _0x2a2a09, _0x5a70eb) => {
  return new Promise((_0x2adea4, _0x4691ab) => {
    var _0x469cf7 = _0x3d6f15 => {
      try {
        _0x5c2342(_0x5a70eb.next(_0x3d6f15));
      } catch (_0x5c07f6) {
        _0x4691ab(_0x5c07f6);
      }
    };
    var _0x51c245 = _0x3ddc9b => {
      try {
        _0x5c2342(_0x5a70eb.throw(_0x3ddc9b));
      } catch (_0x5f2a47) {
        _0x4691ab(_0x5f2a47);
      }
    };
    var _0x5c2342 = _0x3704b8 => _0x3704b8.done ? _0x2adea4(_0x3704b8.value) : Promise.resolve(_0x3704b8.value).then(_0x469cf7, _0x51c245);
    _0x5c2342((_0x5a70eb = _0x5a70eb.apply(_0x9f583a, _0x2a2a09)).next());
  });
};
var BASE_URL = "https://app.cloud-mb.xyz";
var TOKEN = "jdvhhjv255vghhghdhvfch2565656jhdcghfdf";
var APP_ID = "com.movieblast";
var HEADERS = {
  "user-agent": "okhttp/5.0.0-alpha.6",
  "x-request-x": APP_ID
};
var SEARCH_HEADERS = __spreadProps(__spreadValues({}, HEADERS), {
  hash256: "86dc03244adddb3cbedbf0ae36074a736ee293a64774b18e82a6244eafd0df30",
  packagename: APP_ID
});
var SIGN_SECRET = "GJ8reydarI7Jqat9rvbAJKNQ9gY4DoEQF2H5nfuI1gi";
var TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
var TMDB_BASE_URL = "https://api.themoviedb.org/3";
var import_crypto_js = __toESM(require("crypto-js"));
function generateSignedUrl(_0x5e4203) {
  try {
    const _0x56b7f6 = new URL(_0x5e4203);
    const _0x1ee493 = _0x56b7f6.pathname;
    const _0x596117 = Math.floor(Date.now() / 1000).toString();
    const _0x28999f = import_crypto_js.default.HmacSHA256(_0x1ee493 + _0x596117, SIGN_SECRET);
    const _0x5b06cf = import_crypto_js.default.enc.Base64.stringify(_0x28999f);
    const _0x99067d = encodeURIComponent(_0x5b06cf);
    return _0x5e4203 + "?verify=" + _0x596117 + "-" + _0x99067d;
  } catch (_0x313287) {
    console.error("[MovieBlast] Error generating signed URL:", _0x313287.message);
    return _0x5e4203;
  }
}
function matchQuality(_0x256200) {
  if (!_0x256200) {
    return "Unknown";
  }
  const _0x3e071e = _0x256200.toLowerCase();
  if (_0x3e071e.includes("2160") || _0x3e071e.includes("4k")) {
    return "4K";
  }
  if (_0x3e071e.includes("1440")) {
    return "2K";
  }
  if (_0x3e071e.includes("1080")) {
    return "1080p";
  }
  if (_0x3e071e.includes("720")) {
    return "720p";
  }
  if (_0x3e071e.includes("480")) {
    return "480p";
  }
  if (_0x3e071e.includes("360")) {
    return "360p";
  }
  return "Unknown";
}
function normalizeTitle(_0x22fd67) {
  if (!_0x22fd67) {
    return "";
  }
  return _0x22fd67.toLowerCase().replace(/\b(the|a|an)\b/g, "").replace(/[:\-_]/g, " ").replace(/\s+/g, " ").replace(/[^\w\s]/g, "").trim();
}
function getTMDBDetails(_0x3b02bc, _0x53718d) {
  return __async(this, null, function* () {
    const _0xea0646 = _0x53718d === "tv" ? "tv" : "movie";
    const _0x217bdb = TMDB_BASE_URL + "/" + _0xea0646 + "/" + _0x3b02bc + "?api_key=" + TMDB_API_KEY;
    const _0x5e2dd7 = yield fetch(_0x217bdb, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0"
      }
    });
    if (!_0x5e2dd7.ok) {
      throw new Error("TMDB API error: " + _0x5e2dd7.status);
    }
    const _0x4fcce7 = yield _0x5e2dd7.json();
    const _0x53021f = _0x53718d === "tv" ? _0x4fcce7.name : _0x4fcce7.title;
    const _0x3329ed = _0x53718d === "tv" ? _0x4fcce7.first_air_date : _0x4fcce7.release_date;
    const _0x2bc970 = _0x3329ed ? parseInt(_0x3329ed.split("-")[0]) : null;
    return {
      title: _0x53021f,
      year: _0x2bc970
    };
  });
}
function calculateTitleSimilarity(_0x59be19, _0x5f4f0f) {
  const _0x19f894 = normalizeTitle(_0x59be19);
  const _0x323850 = normalizeTitle(_0x5f4f0f);
  if (_0x19f894 === _0x323850) {
    return 1;
  }
  const _0x3c43cf = _0x19f894.split(/\s+/).filter(_0x1c0bec => _0x1c0bec.length > 0);
  const _0x1e0c83 = _0x323850.split(/\s+/).filter(_0x419b2e => _0x419b2e.length > 0);
  if (_0x3c43cf.length === 0 || _0x1e0c83.length === 0) {
    return 0;
  }
  const _0x572156 = new Set(_0x3c43cf);
  const _0x4cee15 = new Set(_0x1e0c83);
  const _0x31e7cf = _0x3c43cf.filter(_0xdf7475 => _0x4cee15.has(_0xdf7475));
  const _0x79f074 = new Set([..._0x3c43cf, ..._0x1e0c83]);
  return _0x31e7cf.length / _0x79f074.size;
}
function findBestMatch(_0x59dc1f, _0x1fc4dd) {
  if (!_0x1fc4dd || _0x1fc4dd.length === 0) {
    return null;
  }
  let _0xc01b04 = null;
  let _0x677343 = 0;
  for (const _0x25db1d of _0x1fc4dd) {
    let _0x508b5a = calculateTitleSimilarity(_0x59dc1f.title, _0x25db1d.name);
    if (_0x59dc1f.year && _0x25db1d.release_date) {
      const _0x42406b = parseInt(_0x25db1d.release_date.split("-")[0]);
      if (_0x59dc1f.year === _0x42406b) {
        _0x508b5a += 0.2;
      }
    }
    if (_0x508b5a > _0x677343 && _0x508b5a > 0.4) {
      _0x677343 = _0x508b5a;
      _0xc01b04 = _0x25db1d;
    }
  }
  return _0xc01b04;
}
function getStreams(_0xe0c8bd, _0xb5223a = "movie", _0x674976 = null, _0xc1b764 = null) {
  return __async(this, null, function* () {
    console.log("[MovieBlast] Fetching streams for TMDB ID: " + _0xe0c8bd + ", Type: " + _0xb5223a);
    try {
      const _0x221f1d = yield getTMDBDetails(_0xe0c8bd, _0xb5223a);
      console.log("[MovieBlast] Searching for: \"" + _0x221f1d.title + "\" (" + _0x221f1d.year + ")");
      const _0x2a3c18 = encodeURIComponent(_0x221f1d.title);
      const _0xacc299 = BASE_URL + "/api/search/" + _0x2a3c18 + "/" + TOKEN;
      const _0x12ae95 = yield fetch(_0xacc299, {
        headers: SEARCH_HEADERS
      });
      if (!_0x12ae95.ok) {
        console.error("[MovieBlast] Search failed with status: " + _0x12ae95.status);
        return [];
      }
      const _0x1c34fb = yield _0x12ae95.json();
      const _0x52d56d = _0x1c34fb.search || [];
      const _0x31ba54 = findBestMatch(_0x221f1d, _0x52d56d);
      if (!_0x31ba54) {
        console.log("[MovieBlast] No confident matches found in MovieBlast.");
        return [];
      }
      const _0x46aff4 = _0x31ba54.id;
      const _0x258a41 = _0x31ba54.type.toLowerCase().includes("serie") || _0xb5223a === "tv";
      console.log("[MovieBlast] Match Found: \"" + _0x31ba54.name + "\" (ID: " + _0x46aff4 + ")");
      const _0x3110f7 = _0x258a41 ? "series/show" : "media/detail";
      const _0x1daa73 = BASE_URL + "/api/" + _0x3110f7 + "/" + _0x46aff4 + "/" + TOKEN;
      const _0xe0ae2e = yield fetch(_0x1daa73, {
        headers: HEADERS
      });
      if (!_0xe0ae2e.ok) {
        console.error("[MovieBlast] Detail fetch failed: " + _0xe0ae2e.status);
        return [];
      }
      const _0x12af3f = yield _0xe0ae2e.json();
      let _0x3b8ffb = [];
      if (_0x258a41) {
        const _0x75890d = _0x12af3f.seasons || [];
        const _0x4d1f9e = _0x75890d.find(_0x34150d => _0x34150d.season_number == _0x674976);
        if (_0x4d1f9e) {
          const _0x1a67f7 = (_0x4d1f9e.episodes || []).find(_0x3f7514 => _0x3f7514.episode_number == _0xc1b764);
          if (_0x1a67f7) {
            _0x3b8ffb = _0x1a67f7.videos || [];
          } else {
            console.log("[MovieBlast] Episode " + _0xc1b764 + " not found in Season " + _0x674976 + ".");
          }
        } else {
          console.log("[MovieBlast] Season " + _0x674976 + " not found.");
        }
      } else {
        _0x3b8ffb = _0x12af3f.videos || [];
      }
      if (_0x3b8ffb.length === 0) {
        console.log("[MovieBlast] No video links found in details.");
        return [];
      }
      const _0x4aa62b = _0x3b8ffb.map(_0x553e51 => {
        const _0x3884ed = _0x553e51.link;
        if (!_0x3884ed) {
          return null;
        }
        const _0x4ae398 = _0x3884ed.startsWith("http") ? _0x3884ed : "https://" + _0x3884ed;
        const _0x57c144 = generateSignedUrl(_0x4ae398);
        return {
          name: "MovieBlast",
          title: "MovieBlast - " + _0x553e51.server + " (" + (_0x553e51.lang || "EN") + ")",
          url: _0x57c144,
          quality: matchQuality(_0x553e51.server),
          headers: {
            "User-Agent": "MovieBlast",
            Referer: "MovieBlast",
            "x-request-x": "com.movieblast"
          },
          provider: "movieblast"
        };
      }).filter(_0x29d247 => _0x29d247 !== null);
      console.log("[MovieBlast] Successfully found " + _0x4aa62b.length + " streams.");
      return _0x4aa62b;
    } catch (_0x2f009b) {
      console.error("[MovieBlast] Error: " + _0x2f009b.message);
      return [];
    }
  });
}
module.exports = {
  getStreams: getStreams
};