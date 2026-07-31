'use strict';

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (_0x1bd8fe, _0x43a10c, _0x256223) => _0x43a10c in _0x1bd8fe ? __defProp(_0x1bd8fe, _0x43a10c, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x256223
}) : _0x1bd8fe[_0x43a10c] = _0x256223;
var __spreadValues = (_0x82eee6, _0x25a6e1) => {
  for (var _0xf7c831 in _0x25a6e1 ||= {}) {
    if (__hasOwnProp.call(_0x25a6e1, _0xf7c831)) {
      __defNormalProp(_0x82eee6, _0xf7c831, _0x25a6e1[_0xf7c831]);
    }
  }
  if (__getOwnPropSymbols) {
    for (var _0xf7c831 of __getOwnPropSymbols(_0x25a6e1)) {
      if (__propIsEnum.call(_0x25a6e1, _0xf7c831)) {
        __defNormalProp(_0x82eee6, _0xf7c831, _0x25a6e1[_0xf7c831]);
      }
    }
  }
  return _0x82eee6;
};
var __async = (_0x56dc30, _0x4ed561, _0x267797) => {
  return new Promise((_0x170526, _0x13dda8) => {
    var _0x5e18b1 = _0x51d46c => {
      try {
        _0x4b0257(_0x267797.next(_0x51d46c));
      } catch (_0x478a26) {
        _0x13dda8(_0x478a26);
      }
    };
    var _0x5c517a = _0x4da371 => {
      try {
        _0x4b0257(_0x267797.throw(_0x4da371));
      } catch (_0x2893a0) {
        _0x13dda8(_0x2893a0);
      }
    };
    var _0x4b0257 = _0x29e7e7 => _0x29e7e7.done ? _0x170526(_0x29e7e7.value) : Promise.resolve(_0x29e7e7.value).then(_0x5e18b1, _0x5c517a);
    _0x4b0257((_0x267797 = _0x267797.apply(_0x56dc30, _0x4ed561)).next());
  });
};
var TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
var TMDB_BASE_URL = "https://api.themoviedb.org/3";
var CASTLE_BASE = "https://api.hlowb.com";
var PKG = "com.external.castle";
var CHANNEL = "IndiaA";
var CLIENT = "1";
var LANG = "en-US";
var API_HEADERS = {
  "User-Agent": "okhttp/4.9.3",
  Accept: "application/json",
  "Accept-Language": "en-US,en;q=0.9",
  Connection: "Keep-Alive",
  Referer: CASTLE_BASE
};
var PLAYBACK_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
  Accept: "video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5",
  "Accept-Language": "en-US,en;q=0.9",
  "Accept-Encoding": "identity",
  Connection: "keep-alive",
  "Sec-Fetch-Dest": "video",
  "Sec-Fetch-Mode": "no-cors",
  "Sec-Fetch-Site": "cross-site",
  DNT: "1"
};
function makeRequest(_0x1b363e) {
  return __async(this, arguments, function* (_0x3d5cba, _0x27b3ee = {}) {
    try {
      const _0x1c6c59 = yield fetch(_0x3d5cba, {
        method: _0x27b3ee.method || "GET",
        headers: __spreadValues(__spreadValues({}, API_HEADERS), _0x27b3ee.headers),
        body: _0x27b3ee.body
      });
      if (!_0x1c6c59.ok) {
        throw new Error("HTTP " + _0x1c6c59.status + ": " + _0x1c6c59.statusText);
      }
      return _0x1c6c59;
    } catch (_0x1cd416) {
      console.error("[Castle] Request failed for " + _0x3d5cba + ": " + _0x1cd416.message);
      throw _0x1cd416;
    }
  });
}
function extractCipherFromResponse(_0x409352) {
  return __async(this, null, function* () {
    const _0x3f740d = yield _0x409352.text();
    const _0x4fa311 = _0x3f740d.trim();
    if (!_0x4fa311) {
      throw new Error("Empty response");
    }
    try {
      const _0x2dc537 = JSON.parse(_0x4fa311);
      if (_0x2dc537 && _0x2dc537.data && typeof _0x2dc537.data === "string") {
        return _0x2dc537.data.trim();
      }
    } catch (_0x49255b) {}
    return _0x4fa311;
  });
}
function extractDataBlock(_0x5c1776) {
  if (_0x5c1776 && _0x5c1776.data && typeof _0x5c1776.data === "object") {
    return _0x5c1776.data;
  }
  return _0x5c1776 || {};
}
function getTMDBDetails(_0x45bec2, _0xd6d16b) {
  return __async(this, null, function* () {
    const _0x1fa830 = _0xd6d16b === "tv" ? "tv" : "movie";
    const _0x4e7160 = TMDB_BASE_URL + "/" + _0x1fa830 + "/" + _0x45bec2 + "?api_key=" + TMDB_API_KEY + "&append_to_response=external_ids";
    const _0x220bdb = yield makeRequest(_0x4e7160);
    const _0x2565cd = yield _0x220bdb.json();
    const _0xfa7224 = _0xd6d16b === "tv" ? _0x2565cd.name : _0x2565cd.title;
    const _0x23eea7 = _0xd6d16b === "tv" ? _0x2565cd.first_air_date : _0x2565cd.release_date;
    const _0x451860 = _0x23eea7 ? parseInt(_0x23eea7.split("-")[0]) : null;
    return {
      title: _0xfa7224,
      year: _0x451860,
      tmdbId: _0x45bec2
    };
  });
}
function decryptCastle(_0xc6ebf1, _0x4830a9) {
  return __async(this, null, function* () {
    console.log("[Castle] Starting local AES-CBC decryption...");
    try {
      const _0x124330 = require("crypto-js");
      if (typeof __crypto_aes_decrypt_raw !== "undefined") {
        const _0x23174d = _0x124330.AES.decrypt;
        _0x124330.AES.decrypt = function (_0xee5ebe, _0xdc47ba, _0x350562) {
          try {
            const _0xe2ca99 = _0x56fed0 => {
              const _0x4f63a2 = new Uint8Array(_0x56fed0.sigBytes);
              for (let _0x3866bd = 0; _0x3866bd < _0x56fed0.sigBytes; _0x3866bd++) {
                _0x4f63a2[_0x3866bd] = _0x56fed0.words[_0x3866bd >>> 2] >>> 24 - _0x3866bd % 4 * 8 & 255;
              }
              return _0x4f63a2;
            };
            const _0x2a1521 = _0x36e655 => {
              if (_0x36e655 instanceof Uint8Array) {
                return _0x36e655;
              }
              if (_0x36e655 instanceof ArrayBuffer) {
                return new Uint8Array(_0x36e655);
              }
              if (_0x36e655 && typeof _0x36e655.length === "number") {
                return new Uint8Array(Array.prototype.slice.call(_0x36e655));
              }
              return new Uint8Array(0);
            };
            const _0x5d8830 = typeof _0xee5ebe === "string" ? new Uint8Array(Array.from(atob(_0xee5ebe), _0x42cb6d => _0x42cb6d.charCodeAt(0))) : _0xee5ebe.ciphertext ? _0xe2ca99(_0xee5ebe.ciphertext) : _0x2a1521(_0xee5ebe);
            const _0x300d1d = _0xe2ca99(_0xdc47ba);
            const _0x25e833 = _0x350562 && _0x350562.iv ? _0xe2ca99(_0x350562.iv) : new Uint8Array(0);
            const _0x37b488 = _0x350562 && _0x350562.mode || "AES-CBC";
            const _0x155c77 = typeof Int8Array !== "undefined" ? new Int8Array(_0x300d1d.buffer) : _0x300d1d;
            const _0x579db0 = typeof Int8Array !== "undefined" ? new Int8Array(_0x25e833.buffer) : _0x25e833;
            const _0x2d2b32 = typeof Int8Array !== "undefined" ? new Int8Array(_0x5d8830.buffer) : _0x5d8830;
            const _0x5ba30d = __crypto_aes_decrypt_raw(_0x37b488, _0x155c77, _0x579db0, _0x2d2b32);
            const _0xd18d9e = new TextDecoder().decode(_0x5ba30d);
            return {
              toString: function () {
                return _0xd18d9e;
              }
            };
          } catch (_0xe309ac) {
            console.error("[Castle JNI Patch] Decrypt failed, falling back:", _0xe309ac);
            return _0x23174d.call(_0x124330.AES, _0xee5ebe, _0xdc47ba, _0x350562);
          }
        };
      }
      const _0x227260 = "T!BgJB";
      const _0x482d9c = _0x124330.enc.Base64.parse(_0x4830a9);
      const _0x1339d3 = _0x124330.enc.Utf8.parse(_0x227260);
      const _0xd52821 = _0x482d9c.concat(_0x1339d3);
      let _0x59f612;
      if (_0xd52821.sigBytes < 16) {
        const _0x129518 = _0x124330.lib.WordArray.create(new Array(16 - _0xd52821.sigBytes).fill(0));
        _0x59f612 = _0xd52821.concat(_0x129518);
      } else if (_0xd52821.sigBytes > 16) {
        _0x59f612 = _0x124330.lib.WordArray.create(_0xd52821.words.slice(0, 4), 16);
      } else {
        _0x59f612 = _0xd52821;
      }
      const _0x305fbb = _0x59f612;
      const _0x165e51 = _0x124330.AES.decrypt(_0xc6ebf1, _0x59f612, {
        iv: _0x305fbb,
        mode: _0x124330.mode.CBC,
        padding: _0x124330.pad.Pkcs7
      });
      const _0x3adb8e = _0x165e51.toString(_0x124330.enc.Utf8);
      if (!_0x3adb8e) {
        throw new Error("Decryption resulted in empty string (possible key/IV mismatch)");
      }
      console.log("[Castle] Local decryption successful");
      return _0x3adb8e;
    } catch (_0x282f45) {
      console.error("[Castle] Local decryption failed: " + _0x282f45.message);
      throw _0x282f45;
    }
  });
}
function getSecurityKey() {
  return __async(this, null, function* () {
    console.log("[Castle] Fetching security key...");
    const _0xcc4799 = CASTLE_BASE + "/v0.1/system/getSecurityKey/1?channel=" + CHANNEL + "&clientType=" + CLIENT + "&lang=" + LANG;
    const _0x25d0a0 = yield makeRequest(_0xcc4799);
    const _0x5985bc = yield _0x25d0a0.json();
    if (_0x5985bc.code !== 200 || !_0x5985bc.data) {
      throw new Error("Security key API error: " + JSON.stringify(_0x5985bc));
    }
    console.log("[Castle] Security key obtained");
    return _0x5985bc.data;
  });
}
function searchCastle(_0x1a0a07, _0x15b1e2, _0x560f28 = 1, _0x208034 = 30) {
  return __async(this, null, function* () {
    console.log("[Castle] Searching for: " + _0x15b1e2);
    const _0x4a939a = new URLSearchParams({
      channel: CHANNEL,
      clientType: CLIENT,
      keyword: _0x15b1e2,
      lang: LANG,
      mode: "1",
      packageName: PKG,
      page: _0x560f28.toString(),
      size: _0x208034.toString()
    });
    const _0x1cc3db = CASTLE_BASE + "/film-api/v1.1.0/movie/searchByKeyword?" + _0x4a939a.toString();
    const _0x20be66 = yield makeRequest(_0x1cc3db);
    const _0xd7a2bd = yield extractCipherFromResponse(_0x20be66);
    const _0x703ccd = yield decryptCastle(_0xd7a2bd, _0x1a0a07);
    return JSON.parse(_0x703ccd);
  });
}
function getDetails(_0x1b40c9, _0x33dbe1) {
  return __async(this, null, function* () {
    console.log("[Castle] Fetching details for movieId: " + _0x33dbe1);
    const _0x588fee = CASTLE_BASE + "/film-api/v1.9.9/movie?channel=" + CHANNEL + "&clientType=" + CLIENT + "&lang=" + LANG + "&movieId=" + _0x33dbe1 + "&packageName=" + PKG;
    const _0x2289e0 = yield makeRequest(_0x588fee);
    const _0x2865b4 = yield extractCipherFromResponse(_0x2289e0);
    const _0x217860 = yield decryptCastle(_0x2865b4, _0x1b40c9);
    return JSON.parse(_0x217860);
  });
}
function getVideoV1(_0x5db07e, _0x5e010, _0x5b503c, _0x39cb02, _0x52da17 = 2) {
  return __async(this, null, function* () {
    console.log("[Castle] Fetching video (v1) for movieId: " + _0x5e010 + ", languageId: " + _0x39cb02);
    const _0x4153b9 = CASTLE_BASE + "/film-api/v2.0.1/movie/getVideo2?clientType=" + CLIENT + "&packageName=" + PKG + "&channel=" + CHANNEL + "&lang=" + LANG;
    const _0x1eb498 = {
      mode: "1",
      appMarket: "GuanWang",
      clientType: CLIENT,
      woolUser: "false",
      apkSignKey: "ED0955EB04E67A1D9F3305B95454FED485261475",
      androidVersion: "13",
      movieId: _0x5e010.toString(),
      episodeId: _0x5b503c.toString(),
      languageId: _0x39cb02.toString(),
      isNewUser: "true",
      resolution: _0x52da17.toString(),
      packageName: PKG
    };
    const _0x10b03a = yield makeRequest(_0x4153b9, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(_0x1eb498)
    });
    const _0x3b5806 = yield extractCipherFromResponse(_0x10b03a);
    const _0x3545cc = yield decryptCastle(_0x3b5806, _0x5db07e);
    return JSON.parse(_0x3545cc);
  });
}
function getVideo2(_0x13e2e0, _0x4e860c, _0x1b29ed, _0x12b2eb = 2) {
  return __async(this, null, function* () {
    console.log("[Castle] Fetching video (v2) for movieId: " + _0x4e860c + ", episodeId: " + _0x1b29ed);
    const _0x492b01 = CASTLE_BASE + "/film-api/v2.0.1/movie/getVideo2?clientType=" + CLIENT + "&packageName=" + PKG + "&channel=" + CHANNEL + "&lang=" + LANG;
    const _0x2bbf47 = {
      mode: "1",
      appMarket: "GuanWang",
      clientType: CLIENT,
      woolUser: "false",
      apkSignKey: "ED0955EB04E67A1D9F3305B95454FED485261475",
      androidVersion: "13",
      movieId: _0x4e860c.toString(),
      episodeId: _0x1b29ed.toString(),
      isNewUser: "true",
      resolution: _0x12b2eb.toString(),
      packageName: PKG
    };
    const _0x334736 = yield makeRequest(_0x492b01, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(_0x2bbf47)
    });
    const _0x891bc9 = yield extractCipherFromResponse(_0x334736);
    const _0x33520e = yield decryptCastle(_0x891bc9, _0x13e2e0);
    return JSON.parse(_0x33520e);
  });
}
function findCastleMovieId(_0x57fcd6, _0x4f8418) {
  return __async(this, null, function* () {
    const _0x26af00 = _0x4f8418.year ? _0x4f8418.title + " " + _0x4f8418.year : _0x4f8418.title;
    const _0x4d704e = yield searchCastle(_0x57fcd6, _0x26af00);
    const _0x59afbd = extractDataBlock(_0x4d704e);
    const _0x8a8050 = _0x59afbd.rows || [];
    if (_0x8a8050.length === 0) {
      throw new Error("No search results found");
    }
    for (const _0x255a56 of _0x8a8050) {
      const _0x20be27 = (_0x255a56.title || _0x255a56.name || "").toLowerCase();
      const _0x4f2b66 = _0x4f8418.title.toLowerCase();
      if (_0x20be27.includes(_0x4f2b66) || _0x4f2b66.includes(_0x20be27)) {
        const _0x38ac5b = _0x255a56.id || _0x255a56.redirectId || _0x255a56.redirectIdStr;
        if (_0x38ac5b) {
          console.log("[Castle] Found match: " + (_0x255a56.title || _0x255a56.name) + " (id: " + _0x38ac5b + ")");
          return _0x38ac5b.toString();
        }
      }
    }
    const _0x4d2a6e = _0x8a8050[0];
    const _0x3a963b = _0x4d2a6e.id || _0x4d2a6e.redirectId || _0x4d2a6e.redirectIdStr;
    if (_0x3a963b) {
      console.log("[Castle] Using first result: " + (_0x4d2a6e.title || _0x4d2a6e.name) + " (id: " + _0x3a963b + ")");
      return _0x3a963b.toString();
    }
    throw new Error("Could not extract movie ID from search results");
  });
}
function getQualityValue(_0x2ea31c) {
  if (!_0x2ea31c) {
    return 0;
  }
  const _0x4f5e3d = _0x2ea31c.toString().toLowerCase().replace(/^(sd|hd|fhd|uhd|4k)\s*/i, "").replace(/p$/, "").trim();
  const _0x28cc18 = {
    "4k": 2160,
    "2160": 2160,
    "1440": 1440,
    "1080": 1080,
    "720": 720,
    "480": 480,
    "360": 360,
    "240": 240
  };
  if (_0x28cc18[_0x4f5e3d]) {
    return _0x28cc18[_0x4f5e3d];
  }
  const _0x3c9cf9 = parseInt(_0x4f5e3d);
  if (!isNaN(_0x3c9cf9) && _0x3c9cf9 > 0) {
    return _0x3c9cf9;
  }
  return 0;
}
function formatSize(_0x2ca7d8) {
  if (typeof _0x2ca7d8 !== "number" || _0x2ca7d8 <= 0) {
    return "Unknown";
  }
  if (_0x2ca7d8 > 1000000000) {
    return (_0x2ca7d8 / 1000000000).toFixed(2) + " GB";
  }
  return (_0x2ca7d8 / 1000000).toFixed(0) + " MB";
}
function resolutionToQuality(_0x4bfeef) {
  const _0x2d7fe4 = {
    1: "480p",
    2: "720p",
    3: "1080p"
  };
  return _0x2d7fe4[_0x4bfeef] || _0x4bfeef + "p";
}
function processVideoResponse(_0x51d20f, _0x73c86a, _0x29525d, _0x2a9997, _0xc0905c, _0x463154) {
  const _0x4a3539 = [];
  const _0x5df573 = extractDataBlock(_0x51d20f);
  const _0x4355a9 = _0x5df573.videoUrl;
  if (!_0x4355a9) {
    console.log("[Castle] No videoUrl found in response");
    return _0x4a3539;
  }
  const _0x18d63b = [];
  if (_0x5df573.subtitles && Array.isArray(_0x5df573.subtitles)) {
    _0x5df573.subtitles.forEach(_0x6fb016 => {
      if (_0x6fb016.url) {
        _0x18d63b.push({
          url: _0x6fb016.url,
          language: _0x6fb016.abbreviate || "Unknown",
          name: _0x6fb016.title || _0x6fb016.abbreviate || "Unknown",
          headers: PLAYBACK_HEADERS
        });
      }
    });
  }
  let _0x1e4135 = _0x73c86a.title || "Unknown";
  if (_0x73c86a.year) {
    _0x1e4135 += " (" + _0x73c86a.year + ")";
  }
  if (_0x29525d && _0x2a9997) {
    _0x1e4135 = _0x73c86a.title + " S" + String(_0x29525d).padStart(2, "0") + "E" + String(_0x2a9997).padStart(2, "0");
  }
  const _0x36522a = resolutionToQuality(_0xc0905c);
  if (_0x5df573.videos && Array.isArray(_0x5df573.videos)) {
    for (const _0x2adc37 of _0x5df573.videos) {
      let _0x40004a = _0x2adc37.resolutionDescription || _0x2adc37.resolution || _0x36522a;
      _0x40004a = _0x40004a.replace(/^(SD|HD|FHD)\s+/i, "");
      const _0x57d84b = _0x463154 ? "Castle " + _0x463154 + " - " + _0x40004a : "Castle - " + _0x40004a;
      _0x4a3539.push({
        name: _0x57d84b,
        title: _0x1e4135,
        url: _0x2adc37.url || _0x4355a9,
        quality: _0x40004a,
        size: formatSize(_0x2adc37.size),
        headers: PLAYBACK_HEADERS,
        provider: "castle",
        subtitles: _0x18d63b
      });
    }
  } else {
    const _0x23119a = _0x463154 ? "Castle " + _0x463154 + " - " + _0x36522a : "Castle - " + _0x36522a;
    _0x4a3539.push({
      name: _0x23119a,
      title: _0x1e4135,
      url: _0x4355a9,
      quality: _0x36522a,
      size: formatSize(_0x5df573.size),
      headers: PLAYBACK_HEADERS,
      provider: "castle",
      subtitles: _0x18d63b
    });
  }
  return _0x4a3539;
}
function getStreams(_0x4e2678, _0x308ce5, _0x4360e6, _0x3a120a) {
  return __async(this, null, function* () {
    console.log("[Castle] Starting extraction for TMDB ID: " + _0x4e2678 + ", Type: " + _0x308ce5 + (_0x308ce5 === "tv" ? ", S:" + _0x4360e6 + "E:" + _0x3a120a : ""));
    try {
      const _0x49acb1 = yield getTMDBDetails(_0x4e2678, _0x308ce5);
      console.log("[Castle] TMDB Info: \"" + _0x49acb1.title + "\" (" + (_0x49acb1.year || "N/A") + ")");
      const _0x3a9a82 = yield getSecurityKey();
      const _0xc7ae78 = yield findCastleMovieId(_0x3a9a82, _0x49acb1);
      let _0x581633 = yield getDetails(_0x3a9a82, _0xc7ae78);
      let _0x53456a = _0xc7ae78;
      if (_0x308ce5 === "tv" && _0x4360e6 && _0x3a120a) {
        const _0x31bf4c = extractDataBlock(_0x581633);
        const _0x49de5f = _0x31bf4c.seasons || [];
        const _0x28e6b7 = _0x49de5f.find(_0x2fba64 => _0x2fba64.number === _0x4360e6);
        if (_0x28e6b7 && _0x28e6b7.movieId && _0x28e6b7.movieId !== _0xc7ae78) {
          console.log("[Castle] Fetching season " + _0x4360e6 + " details...");
          _0x581633 = yield getDetails(_0x3a9a82, _0x28e6b7.movieId.toString());
          _0x53456a = _0x28e6b7.movieId.toString();
        }
      }
      const _0x28285a = extractDataBlock(_0x581633);
      const _0x5a3185 = _0x28285a.episodes || [];
      let _0x278ae7 = null;
      if (_0x308ce5 === "tv" && _0x4360e6 && _0x3a120a) {
        const _0x3a26a4 = _0x5a3185.find(_0x40594b => _0x40594b.number === _0x3a120a);
        if (_0x3a26a4 && _0x3a26a4.id) {
          _0x278ae7 = _0x3a26a4.id.toString();
        }
      } else if (_0x5a3185.length > 0) {
        _0x278ae7 = _0x5a3185[0].id.toString();
      }
      if (!_0x278ae7) {
        throw new Error("Could not find episode ID");
      }
      const _0x32e04c = _0x5a3185.find(_0x5b0c72 => _0x5b0c72.id.toString() === _0x278ae7);
      const _0x568af5 = _0x32e04c && _0x32e04c.tracks || [];
      const _0x5e477c = 2;
      const _0xcfb5e5 = [];
      for (const _0x26219c of _0x568af5) {
        const _0x47f944 = _0x26219c.languageName || _0x26219c.abbreviate || "Unknown";
        if (_0x26219c.existIndividualVideo && _0x26219c.languageId) {
          try {
            console.log("[Castle] Fetching " + _0x47f944 + " (languageId: " + _0x26219c.languageId + ")");
            const _0x133c6 = yield getVideoV1(_0x3a9a82, _0x53456a, _0x278ae7, _0x26219c.languageId, _0x5e477c);
            const _0x31a517 = processVideoResponse(_0x133c6, _0x49acb1, _0x4360e6, _0x3a120a, _0x5e477c, "[" + _0x47f944 + "]");
            if (_0x31a517.length > 0) {
              console.log("[Castle] ✅ " + _0x47f944 + ": Found " + _0x31a517.length + " streams");
              _0xcfb5e5.push(..._0x31a517);
            }
          } catch (_0x524520) {
            console.log("[Castle] ⚠️ " + _0x47f944 + ": Failed - " + _0x524520.message);
          }
        }
      }
      if (_0xcfb5e5.length === 0) {
        console.log("[Castle] Falling back to shared stream (v2)");
        const _0x4916cb = yield getVideo2(_0x3a9a82, _0x53456a, _0x278ae7, _0x5e477c);
        const _0x5306a6 = processVideoResponse(_0x4916cb, _0x49acb1, _0x4360e6, _0x3a120a, _0x5e477c, "[Shared]");
        _0xcfb5e5.push(..._0x5306a6);
      }
      _0xcfb5e5.sort((_0x10ef39, _0x38ac31) => getQualityValue(_0x38ac31.quality) - getQualityValue(_0x10ef39.quality));
      console.log("[Castle] Total streams found: " + _0xcfb5e5.length);
      return _0xcfb5e5;
    } catch (_0x90f7a8) {
      console.error("[Castle] Error: " + _0x90f7a8.message);
      return [];
    }
  });
}
module.exports = {
  getStreams: getStreams
};