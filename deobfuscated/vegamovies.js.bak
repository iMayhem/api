var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (_0x32590f, _0x27c482, _0x48a42e) => _0x27c482 in _0x32590f ? __defProp(_0x32590f, _0x27c482, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x48a42e
}) : _0x32590f[_0x27c482] = _0x48a42e;
var __spreadValues = (_0x595ba4, _0x30bb44) => {
  for (var _0x26e519 in _0x30bb44 ||= {}) {
    if (__hasOwnProp.call(_0x30bb44, _0x26e519)) {
      __defNormalProp(_0x595ba4, _0x26e519, _0x30bb44[_0x26e519]);
    }
  }
  if (__getOwnPropSymbols) {
    for (var _0x26e519 of __getOwnPropSymbols(_0x30bb44)) {
      if (__propIsEnum.call(_0x30bb44, _0x26e519)) {
        __defNormalProp(_0x595ba4, _0x26e519, _0x30bb44[_0x26e519]);
      }
    }
  }
  return _0x595ba4;
};
var __spreadProps = (_0x209ef2, _0x132606) => __defProps(_0x209ef2, __getOwnPropDescs(_0x132606));
var __async = (_0x316a2a, _0x265c19, _0x1b3776) => {
  return new Promise((_0x169f1f, _0x3893d9) => {
    var _0x51350e = _0x195a5a => {
      try {
        _0x4fc7ee(_0x1b3776.next(_0x195a5a));
      } catch (_0x3de298) {
        _0x3893d9(_0x3de298);
      }
    };
    var _0x3df2e6 = _0x7d30df => {
      try {
        _0x4fc7ee(_0x1b3776.throw(_0x7d30df));
      } catch (_0x2c4253) {
        _0x3893d9(_0x2c4253);
      }
    };
    var _0x4fc7ee = _0x23f409 => _0x23f409.done ? _0x169f1f(_0x23f409.value) : Promise.resolve(_0x23f409.value).then(_0x51350e, _0x3df2e6);
    _0x4fc7ee((_0x1b3776 = _0x1b3776.apply(_0x316a2a, _0x265c19)).next());
  });
};
var cheerio = require("cheerio-without-node-native");
var PROVIDER_NAME = "VegaMovies";
var BASE_URL = "https://vegamovies.mq";
var TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
var DOMAINS_JSON_URL = "https://raw.githubusercontent.com/SaurabhKaperwan/Utils/refs/heads/main/urls.json";
var REQUEST_TIMEOUT = 12000;
var HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.5"
};
var MOBILE_UAS = ["Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (Linux; Android 13; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 12; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36"];
function getMobileHeaders() {
  const _0x5922f8 = MOBILE_UAS[Math.floor(Math.random() * MOBILE_UAS.length)];
  return {
    "User-Agent": _0x5922f8,
    Accept: "application/json, text/plain, */*",
    "Accept-Language": "en-US,en;q=0.9",
    Referer: BASE_URL + "/"
  };
}
var EXCLUDED_BUTTONS = ["filepress", "gdtot", "dropgalaxy", "gdflix", "gdlink"];
function fetchSafe(_0x5a0281) {
  return __async(this, arguments, function* (_0x39d6a7, _0x483931 = {}, _0x3b4973 = REQUEST_TIMEOUT) {
    try {
      const _0x33c175 = __spreadProps(__spreadValues({}, _0x483931), {
        headers: __spreadProps(__spreadValues(__spreadValues({}, HEADERS), _0x483931.headers || {}), {
          "Accept-Encoding": "identity"
        })
      });
      const _0x472583 = fetch(_0x39d6a7, _0x33c175);
      const _0x4f3bbe = new Promise((_0x18ab37, _0x265aa4) => setTimeout(() => _0x265aa4(new Error("timeout")), _0x3b4973));
      return yield Promise.race([_0x472583, _0x4f3bbe]);
    } catch (_0x47acfc) {
      if (_0x47acfc.message === "timeout") {
        console.error("[" + PROVIDER_NAME + "] Timeout: " + _0x39d6a7.substring(0, 100));
      } else {
        console.error("[" + PROVIDER_NAME + "] fetchSafe: " + _0x39d6a7.substring(0, 100) + " -> " + _0x47acfc.message);
      }
      return null;
    }
  });
}
function fetchJson(_0x40331b) {
  return __async(this, arguments, function* (_0x34a341, _0x3075a8 = {}) {
    try {
      const _0x214ef3 = yield fetchSafe(_0x34a341, _0x3075a8);
      if (!_0x214ef3 || !_0x214ef3.ok) {
        return null;
      }
      const _0x310824 = yield _0x214ef3.text();
      return JSON.parse(_0x310824);
    } catch (_0x2f356d) {
      return null;
    }
  });
}
function fetchHtml(_0x10e231) {
  return __async(this, arguments, function* (_0x296544, _0x414b45 = {}) {
    try {
      const _0x489fe6 = yield fetchSafe(_0x296544, _0x414b45);
      if (!_0x489fe6 || !_0x489fe6.ok) {
        return null;
      }
      return cheerio.load(yield _0x489fe6.text());
    } catch (_0x3edfb2) {
      return null;
    }
  });
}
function getOrigin(_0x61b7d2) {
  try {
    const _0x4f7360 = _0x61b7d2.split("//");
    if (_0x4f7360.length < 2) {
      return _0x61b7d2;
    }
    return _0x4f7360[0] + "//" + _0x4f7360[1].split("/")[0];
  } catch (_0xe05cf4) {
    return _0x61b7d2;
  }
}
function fixUrl(_0x14a5cf) {
  if (!_0x14a5cf) {
    return "";
  }
  if (_0x14a5cf.startsWith("http://") || _0x14a5cf.startsWith("https://")) {
    return _0x14a5cf;
  }
  if (_0x14a5cf.startsWith("//")) {
    return "https:" + _0x14a5cf;
  }
  if (_0x14a5cf.startsWith("/")) {
    return baseUrl + _0x14a5cf;
  }
  return baseUrl + "/" + _0x14a5cf;
}
function parseQuality(_0x535849) {
  const _0x8f687a = String(_0x535849 || "");
  const _0x39de4b = _0x8f687a.match(/(2160|1080|720|480)\s*P/i);
  if (_0x39de4b) {
    return _0x39de4b[1].toLowerCase() + "p";
  }
  if (/4K|UHD/i.test(_0x8f687a)) {
    return "2160p";
  }
  if (/1440|2K/i.test(_0x8f687a)) {
    return "1440p";
  }
  return "HD";
}
function decodeEntities(_0x16e7db) {
  if (!_0x16e7db) {
    return "";
  }
  return _0x16e7db.replace(/&#8211;/g, "-").replace(/&#8212;/g, "-").replace(/&#038;/g, "&").replace(/&#8217;/g, "'").replace(/&amp;/g, "&").replace(/&ndash;/g, "-").replace(/&mdash;/g, "-").replace(/&quot;/g, "\"");
}
function makeStream(_0x4450b2, _0x5d1c6c, _0xcc35f, _0x5367e2, _0x5855d6, _0x36fa1d) {
  const _0x23298f = decodeEntities(_0x4450b2).replace(/[\n\t]+/g, "").trim();
  let _0x1f1932 = decodeEntities(_0x5d1c6c || "").replace(/[\n\t]+/g, " ").replace(/\s{2,}/g, " ").trim();
  let _0x8b093e = "";
  const _0x1206e8 = _0x1f1932.match(/\[\s*([^\]]+\.(?:mkv|mp4|avi|zip|rar|ts))\s*\]/i);
  if (_0x1206e8) {
    _0x8b093e = _0x1206e8[1].trim();
    _0x1f1932 = _0x1f1932.replace(_0x1206e8[0], "").trim();
  }
  let _0x212553 = "N/A";
  const _0x3e18e2 = _0x5d1c6c.match(/\[\s*(\d+(?:\.\d+)?\s*[MG]B)\s*\]/i);
  if (_0x3e18e2) {
    _0x212553 = _0x3e18e2[1].trim();
  }
  let _0x37bd64 = "MKV";
  if (_0x8b093e && _0x8b093e.toLowerCase().endsWith(".mp4")) {
    _0x37bd64 = "MP4";
  }
  let _0x35c194 = "WEB-DL";
  if (/bluray|blu\-ray|bdrip/i.test(_0x5d1c6c)) {
    _0x35c194 = "BluRay";
  } else if (/hdrip|webrip/i.test(_0x5d1c6c)) {
    _0x35c194 = "WEBRip";
  }
  let _0x25380f = "";
  if (/imax/i.test(_0x5d1c6c)) {
    _0x25380f = " | 👁️ iMAX";
  }
  let _0x1e67aa = "";
  let _0xe08b0d = "";
  if (/dolby\s*vision|dovi/i.test(_0x5d1c6c.toLowerCase())) {
    _0xe08b0d = "Dolby Vision";
  } else if (/hdr10/i.test(_0x5d1c6c)) {
    _0xe08b0d = "HDR10";
  } else if (/hdr/i.test(_0x5d1c6c)) {
    _0xe08b0d = "HDR";
  } else if (/10bit|10\-bit/i.test(_0x5d1c6c)) {
    _0xe08b0d = "10Bit";
  } else if (/sdr/i.test(_0x5d1c6c.toLowerCase())) {
    _0xe08b0d = "SDR";
  }
  let _0xa39325 = "H.264";
  if (/hevc/i.test(_0x5d1c6c)) {
    _0xa39325 = "HEVC";
  } else if (/x265|h265/i.test(_0x5d1c6c)) {
    _0xa39325 = "H.265";
  } else if (/x264|h264/i.test(_0x5d1c6c)) {
    _0xa39325 = "H.264";
  }
  if (_0xe08b0d) {
    _0x1e67aa = " | 🔆 " + _0xe08b0d + " • ⚡ " + _0xa39325;
  } else {
    _0x1e67aa = " | ⚡ " + _0xa39325;
  }
  let _0x1f3450 = "";
  const _0x4347b7 = _0x5d1c6c.match(/(TrueHD\s*7\.1|DDP\s*7\.1|DDP\s*5\.1|DD\s*5\.1|5\.1|AAC)/i);
  if (_0x4347b7) {
    let _0x415cb1 = _0x4347b7[1].toUpperCase().replace(/\s+/g, "");
    if (_0x415cb1 === "5.1") {
      _0x415cb1 = "DDP5.1";
    }
    if (_0x415cb1.includes("TRUEHD")) {
      _0x415cb1 = "TrueHD 7.1";
    }
    _0x1f3450 = _0x415cb1;
  } else if (/dolby\s*digital|dd/i.test(_0x5d1c6c)) {
    _0x1f3450 = "Dolby Digital";
  } else if (/dolby/i.test(_0x5d1c6c)) {
    _0x1f3450 = "Dolby";
  }
  if (/atmos/i.test(_0x5d1c6c)) {
    _0x1f3450 = _0x1f3450 ? _0x1f3450 + " • 🔊 Atmos" : "🔊 Atmos";
  }
  if (!_0x1f3450) {
    _0x1f3450 = "Auto";
  }
  let _0x39005a = [];
  const _0x4bdc67 = _0x5d1c6c.toLowerCase();
  const _0x3fc79e = /dual|hindi\-eng|eng\-hin/i.test(_0x5d1c6c || "");
  if (_0x3fc79e) {
    _0x39005a.push("English 🇺🇸 • Hindi 🇮🇳");
  } else {
    if (/hindi|hin/i.test(_0x4bdc67)) {
      _0x39005a.push("Hindi 🇮🇳");
    }
    if (/english|eng/i.test(_0x4bdc67)) {
      _0x39005a.push("English 🇺🇸");
    }
    if (_0x39005a.length === 0) {
      _0x39005a.push("English 🇺🇸");
    }
  }
  const _0x39bd80 = _0x39005a.join(" • ");
  let _0xe972d8 = "";
  const _0x57f460 = _0x5d1c6c.match(/\b(19\d{2}|20\d{2})\b/);
  const _0x2e665d = _0x57f460 ? "(" + _0x57f460[1] + ")" : "";
  const _0x4c4117 = _0x8b093e || _0x1f1932;
  const _0x5e01ec = _0x4c4117.match(/[sS](\d+)\s*[eE](\d+)/);
  if (_0x5e01ec) {
    let _0xf3e6bc = _0x4c4117.split(/[sS]\d+/i)[0].replace(/[\.\-_]/g, " ").replace(/[\{\[\(].*$/g, "").trim();
    let _0x2c7d61 = parseInt(_0x5e01ec[1], 10);
    let _0x5c9b8c = parseInt(_0x5e01ec[2], 10);
    _0xe972d8 = _0xf3e6bc + " - S" + _0x2c7d61 + " E" + _0x5c9b8c;
  } else {
    let _0x3939b1 = _0x1f1932.split(/[\.\-_]\d{3,4}p/i)[0].replace(/[\.\-_]/g, " ").replace(/\d{3,4}p.*/i, "").replace(/[\{\[\(].*$/g, "").trim();
    _0xe972d8 = _0x3939b1 + (_0x2e665d ? " - " + _0x2e665d : "");
  }
  _0xe972d8 = _0xe972d8.replace(/\s+/g, " ").replace(/\s+-\s+-\s+/g, " - ").replace(/-\s*$/, "").trim();
  const _0x111425 = _0x5367e2 || "1080p";
  const _0x3e74c4 = _0x3fc79e ? "Dual-Audio" : "Single Audio";
  const _0x4c71e0 = PROVIDER_NAME + " | " + _0x111425 + " | " + _0x3e74c4;
  let _0x2ed652 = "Play Stream";
  const _0x3f1e9b = (_0xcc35f || "").toLowerCase();
  if (_0x3f1e9b.includes("/hub2/") || _0x3f1e9b.includes("hubcloud") || _0x3f1e9b.includes("homelander.buzz") || _0x3f1e9b.includes("whistle.lat") || _0x3f1e9b.includes("mandalorian.buzz")) {
    _0x2ed652 = "HubCloud";
  } else if (_0x3f1e9b.includes(".r2.dev") || _0x3f1e9b.includes("vcloud")) {
    _0x2ed652 = "vCloud";
  }
  const _0x589216 = "🎬 " + _0xe972d8;
  const _0x4611d9 = "💎 " + _0x111425 + " | 🗣️ " + _0x39bd80 + " | 💾 " + _0x212553;
  const _0x2ad5e3 = "🎞️ " + _0x37bd64 + " | 🎧 " + _0x1f3450 + _0x1e67aa;
  const _0x1b8e5f = "🔗 " + _0x2ed652 + " | ☁️ " + _0x35c194 + _0x25380f;
  _0x1f1932 = _0x589216 + "\n" + _0x4611d9 + "\n" + _0x2ad5e3 + "\n" + _0x1b8e5f;
  return {
    name: _0x4c71e0,
    title: _0x1f1932,
    size: _0x1f1932,
    url: _0xcc35f || "",
    _resWeight: _0x111425.includes("2160") || _0x111425.toLowerCase().includes("4k") ? 3 : _0x111425.includes("1080") ? 2 : 1,
    _sizeWeight: _0x3e18e2 ? parseFloat(_0x3e18e2[1]) * (_0x3e18e2[1].toUpperCase().includes("GB") ? 1024 : 1) : 0,
    behaviorHints: {
      notWebReady: true,
      proxyHeaders: {
        request: _0x5855d6 || {
          Referer: baseUrl + "/"
        }
      }
    }
  };
}
function dedupe(_0x298c79) {
  const _0x27b0b9 = new Set();
  return (_0x298c79 || []).filter(_0x6d39e1 => {
    if (!_0x6d39e1 || !_0x6d39e1.url || _0x27b0b9.has(_0x6d39e1.url)) {
      return false;
    }
    _0x27b0b9.add(_0x6d39e1.url);
    return true;
  });
}
function isStrictMatch(_0x565f88, _0xed554a, _0x383945, _0x273e87, _0x2b169f = []) {
  if (!_0x383945) {
    return false;
  }
  const _0x6d7d18 = _0x383945.toLowerCase().replace(/download\s*/gi, "").replace(/[^a-z0-9\s]/g, " ").trim().replace(/\s+/g, " ");
  let _0x15e8f5 = [_0x565f88, ..._0x2b169f].filter(_0x13d1e1 => _0x13d1e1);
  let _0x1c54d9 = false;
  for (let _0x459520 of _0x15e8f5) {
    const _0x34594c = _0x459520.toLowerCase().replace(/[^a-z0-9\s]/g, " ").trim().replace(/\s+/g, " ");
    if (_0x34594c.length > 0 && (_0x6d7d18.includes(_0x34594c) || _0x6d7d18.startsWith(_0x34594c))) {
      _0x1c54d9 = true;
      break;
    }
  }
  if (!_0x1c54d9) {
    return false;
  }
  if (_0xed554a && _0x273e87) {
    const _0x487d11 = parseInt(_0xed554a);
    const _0x2c6791 = parseInt(_0x273e87);
    if (!isNaN(_0x487d11) && !isNaN(_0x2c6791)) {
      if (Math.abs(_0x487d11 - _0x2c6791) > 1) {
        return false;
      }
    }
  }
  return true;
}
var cachedDomains = null;
var domainCacheTime = 0;
var DOMAIN_CACHE_TTL = 14400000;
var baseUrl = BASE_URL;
var cachedHubDomain = "https://hubcloud.foo";
var cachedVcDomain = "https://vcloud.zip";
function refreshDomains() {
  return __async(this, null, function* () {
    const _0x465310 = Date.now();
    if (cachedDomains && _0x465310 - domainCacheTime < DOMAIN_CACHE_TTL) {
      return cachedDomains;
    }
    try {
      const _0x50b9fd = yield fetchJson(DOMAINS_JSON_URL, {}, 8000);
      if (_0x50b9fd) {
        cachedDomains = _0x50b9fd;
        domainCacheTime = _0x465310;
        if (_0x50b9fd.vegamovies) {
          baseUrl = _0x50b9fd.vegamovies;
        }
        if (_0x50b9fd.hubcloud) {
          cachedHubDomain = _0x50b9fd.hubcloud;
        }
        if (_0x50b9fd.vcloud) {
          cachedVcDomain = _0x50b9fd.vcloud;
        }
        console.log("[" + PROVIDER_NAME + "] Domains updated: site=" + baseUrl + " hub=" + cachedHubDomain + " vc=" + cachedVcDomain);
      }
    } catch (_0x4bfa2b) {
      console.log("[" + PROVIDER_NAME + "] Domain refresh failed, using defaults");
    }
    return cachedDomains || {};
  });
}
function getLatestHubDomain() {
  return cachedHubDomain;
}
function getLatestVcDomain() {
  return cachedVcDomain;
}
function getTMDBInfo(_0x2b6ab0, _0x2cd785) {
  return __async(this, null, function* () {
    const _0x3f5238 = String(_0x2b6ab0 || "").trim();
    const _0x240a66 = _0x3f5238.startsWith("tt");
    const _0x4add53 = _0x2cd785 === "tv" || _0x2cd785 === "series" ? "tv" : "movie";
    try {
      if (_0x240a66) {
        const _0x5b7c48 = yield fetchJson("https://api.themoviedb.org/3/find/" + _0x3f5238 + "?api_key=" + TMDB_API_KEY + "&external_source=imdb_id", {
          headers: {
            "Accept-Encoding": "identity"
          }
        });
        const _0x5536f5 = _0x5b7c48 ? _0x4add53 === "tv" ? _0x5b7c48.tv_results : _0x5b7c48.movie_results : null;
        if (_0x5536f5 && _0x5536f5.length > 0) {
          const _0x147cf8 = _0x5536f5[0];
          return {
            title: _0x4add53 === "tv" ? _0x147cf8.name : _0x147cf8.title,
            year: (_0x147cf8.first_air_date || _0x147cf8.release_date || "").split("-")[0],
            imdbId: _0x3f5238,
            tmdbId: _0x147cf8.id
          };
        }
        return {
          title: _0x3f5238,
          year: null,
          imdbId: _0x3f5238,
          tmdbId: null
        };
      } else {
        const _0x3658d1 = yield fetchJson("https://api.themoviedb.org/3/" + _0x4add53 + "/" + _0x3f5238 + "?api_key=" + TMDB_API_KEY + "&append_to_response=external_ids,alternative_titles", {
          headers: {
            "Accept-Encoding": "identity"
          }
        });
        if (_0x3658d1) {
          let _0x4d73b3 = [];
          if (_0x3658d1.alternative_titles && _0x3658d1.alternative_titles.titles) {
            _0x4d73b3 = _0x3658d1.alternative_titles.titles.map(_0x40edfa => String(_0x40edfa.title || ""));
          } else if (_0x3658d1.alternative_titles && _0x3658d1.alternative_titles.results) {
            _0x4d73b3 = _0x3658d1.alternative_titles.results.map(_0x5e7f34 => String(_0x5e7f34.title || ""));
          }
          return {
            title: _0x4add53 === "tv" ? _0x3658d1.name : _0x3658d1.title,
            year: (_0x3658d1.first_air_date || _0x3658d1.release_date || "").split("-")[0],
            imdbId: _0x3658d1.imdb_id || _0x3658d1.external_ids && _0x3658d1.external_ids.imdb_id || null,
            tmdbId: _0x3658d1.id,
            altTitles: _0x4d73b3
          };
        }
      }
    } catch (_0x41fe73) {
      console.error("[" + PROVIDER_NAME + "] TMDB error: " + _0x41fe73.message);
    }
    return {
      title: _0x3f5238,
      year: null,
      imdbId: null,
      tmdbId: null
    };
  });
}
function searchByTitle(_0x3a9183, _0x3fd63d) {
  return __async(this, null, function* () {
    if (!_0x3a9183) {
      return [];
    }
    const _0xdff8cd = encodeURIComponent(_0x3a9183 + (_0x3fd63d ? " " + _0x3fd63d : ""));
    const _0xb5a8fd = baseUrl + "/search.php?q=" + _0xdff8cd + "&page=1&per_page=15";
    console.log("[" + PROVIDER_NAME + "] Search: \"" + _0x3a9183.substring(0, 60) + "\" -> " + _0xb5a8fd.substring(0, 120));
    const _0x2b0c95 = yield fetchJson(_0xb5a8fd, {
      headers: __spreadProps(__spreadValues({}, getMobileHeaders()), {
        "Accept-Encoding": "identity"
      })
    });
    if (!_0x2b0c95 || !_0x2b0c95.hits || _0x2b0c95.hits.length === 0) {
      console.log("[" + PROVIDER_NAME + "] Search: no results");
      return [];
    }
    console.log("[" + PROVIDER_NAME + "] Search: " + _0x2b0c95.hits.length + " results");
    return _0x2b0c95.hits.map(_0x3ce943 => {
      const _0x27f2b2 = _0x3ce943.document || {};
      return {
        postId: String(_0x27f2b2.id || ""),
        title: (_0x27f2b2.post_title || "").replace(/Download\s*/gi, "").trim(),
        permalink: _0x27f2b2.permalink || "",
        imdbId: _0x27f2b2.imdb_id || "",
        year: _0x27f2b2.category && Array.isArray(_0x27f2b2.category) ? _0x27f2b2.category.find(_0x520bbc => /^(19|20)\d{2}$/.test(String(_0x520bbc).trim())) || ((_0x27f2b2.post_title || "").match(/\b(19|20)\d{2}\b/) || [null])[0] : ((_0x27f2b2.post_title || "").match(/\b(19|20)\d{2}\b/) || [null])[0]
      };
    });
  });
}
function fetchPostContent(_0x9f88c0, _0x29efef) {
  return __async(this, null, function* () {
    if (!_0x9f88c0) {
      return null;
    }
    const _0x2e7cbf = baseUrl + "/wp-json/wp/v2/posts/" + _0x9f88c0;
    console.log("[" + PROVIDER_NAME + "] Fetching post content " + _0x9f88c0);
    try {
      const _0x446f6e = yield fetchSafe(_0x2e7cbf, {
        headers: getMobileHeaders()
      }, 15000);
      if (_0x446f6e && _0x446f6e.ok) {
        const _0x3011b6 = yield _0x446f6e.text();
        try {
          const _0x3a630e = JSON.parse(_0x3011b6);
          if (_0x3a630e && _0x3a630e.content && _0x3a630e.content.rendered) {
            const _0x1aedb3 = _0x3a630e.content.rendered;
            if (!/nexdrive|vcloud|hubcloud|fastdl|genxfm/i.test(_0x1aedb3)) {
              throw new Error("WP-JSON payload is a stale cache missing download links");
            }
            return {
              title: (_0x3a630e.title && _0x3a630e.title.rendered || "").replace(/Download\s*/gi, "").trim(),
              html: _0x1aedb3
            };
          }
        } catch (_0x374d99) {
          console.log("[" + PROVIDER_NAME + "] WP-JSON parse failed (likely 256KB truncation). Falling back to raw HTML.");
        }
      }
    } catch (_0x38fcb8) {
      console.error("[" + PROVIDER_NAME + "] WP-JSON fetch error: " + _0x38fcb8.message);
    }
    try {
      const _0x195e31 = _0x29efef ? fixUrl(_0x29efef) : baseUrl + "/?p=" + _0x9f88c0;
      console.log("[" + PROVIDER_NAME + "] HTML Fallback fetching: " + _0x195e31);
      const _0x49922a = yield fetchHtml(_0x195e31, {
        headers: getMobileHeaders()
      });
      if (_0x49922a) {
        const _0x1cde3e = _0x49922a(".entry-content").html() || _0x49922a(".post-content").html();
        if (_0x1cde3e) {
          return {
            title: _0x49922a("title").text().replace(/Download\s*/gi, "").trim(),
            html: _0x1cde3e
          };
        }
      }
    } catch (_0x2bab95) {
      console.error("[" + PROVIDER_NAME + "] HTML fallback error: " + _0x2bab95.message);
    }
    return null;
  });
}
function extractNexdriveLinks(_0x6162d7) {
  if (!_0x6162d7) {
    return [];
  }
  const _0x321dc4 = [];
  const _0x368f41 = cheerio.load(_0x6162d7);
  const _0x4f35cc = new Set();
  _0x368f41("a[href*=\"nexdrive\"], a[href*=\"genxfm\"], a[href*=\"fastdl\"], a[href*=\"vcloud\"], a[href*=\"hubcloud\"]").each((_0x45b8c5, _0x465502) => {
    try {
      const _0x166383 = _0x368f41(_0x465502).attr("href");
      if (!_0x166383) {
        return;
      }
      const _0x362177 = (_0x368f41(_0x465502).text() || "").trim();
      if (EXCLUDED_BUTTONS.some(_0x339238 => _0x362177.toLowerCase().includes(_0x339238))) {
        return;
      }
      if (_0x4f35cc.has(_0x166383)) {
        return;
      }
      _0x4f35cc.add(_0x166383);
      let _0x1780cb = "HD";
      let _0x10a0c7 = _0x362177 || "Download";
      const _0x2db168 = _0x6162d7.indexOf(_0x166383);
      if (_0x2db168 > 0) {
        const _0x50b397 = _0x6162d7.substring(Math.max(0, _0x2db168 - 3000), _0x2db168);
        const _0x288dc6 = _0x50b397.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi);
        if (_0x288dc6 && _0x288dc6.length > 0) {
          const _0x48067a = _0x288dc6[_0x288dc6.length - 1].replace(/<[^>]*>/g, "").trim().replace(/Download/ig, "");
          if (_0x48067a.length > 5) {
            _0x10a0c7 = _0x48067a;
          }
        }
        const _0x32f52b = /(?:^|>|\s)(\d{3,4}p|4K|UHD|HDR)(?:<|\s|$)/gi;
        let _0x3dbce9;
        let _0x5b9ed8 = null;
        let _0x2131fa = -1;
        while ((_0x3dbce9 = _0x32f52b.exec(_0x50b397)) !== null) {
          if (_0x3dbce9.index > _0x2131fa) {
            _0x2131fa = _0x3dbce9.index;
            _0x5b9ed8 = _0x3dbce9[1];
          }
        }
        if (_0x5b9ed8) {
          _0x1780cb = parseQuality(_0x5b9ed8);
        }
        if (!_0x1780cb || _0x1780cb === "HD") {
          const _0x38d9de = _0x50b397.match(/<(?:h[1-6]|strong|b)[^>]*>[^<]*?(\d{3,4}p|4K|UHD)[^<]*?<\//i);
          if (_0x38d9de) {
            _0x1780cb = parseQuality(_0x38d9de[1]);
          }
        }
      }
      if (_0x1780cb === "480p") {
        return;
      }
      _0x321dc4.push({
        href: fixUrl(_0x166383),
        quality: _0x1780cb || "HD",
        label: _0x10a0c7
      });
    } catch (_0x4a6a53) {}
  });
  return _0x321dc4;
}
function capLinksForEfficiency(_0x1cf241, _0x542ada = 15) {
  if (!_0x1cf241 || _0x1cf241.length <= _0x542ada) {
    return _0x1cf241;
  }
  return _0x1cf241.slice(0, _0x542ada);
}
function extractSeasonFromContent(_0x5c1d1a, _0x4eacc1) {
  if (!_0x5c1d1a || _0x4eacc1 == null) {
    return _0x5c1d1a;
  }
  let _0x2558dc = _0x5c1d1a.split("id=\"comments\"")[0];
  if (_0x2558dc.length === _0x5c1d1a.length) {
    _0x2558dc = _0x5c1d1a.split("class=\"comments-area\"")[0];
  }
  const _0x13716c = /(?:Season|Saison|Staffel)\s+0*(\d+)\b(?!\s*(?:-|–|to|and|&|&#))/gi;
  let _0x4416e2;
  let _0x5a22a0 = [];
  while ((_0x4416e2 = _0x13716c.exec(_0x2558dc)) !== null) {
    let _0x49c11b = _0x2558dc.lastIndexOf("<h", _0x4416e2.index);
    let _0xc00ede = _0x2558dc.lastIndexOf("<strong", _0x4416e2.index);
    let _0x48ab1b = Math.max(_0x49c11b, _0xc00ede);
    if (_0x48ab1b < 0 || _0x4416e2.index - _0x48ab1b > 500) {
      _0x48ab1b = _0x4416e2.index;
    }
    let _0x38ca4b = _0x2558dc.substring(_0x48ab1b, _0x4416e2.index + 50);
    if (_0x38ca4b.toLowerCase().includes("download") || _0x38ca4b.toLowerCase().includes("episode")) {
      continue;
    }
    _0x5a22a0.push({
      season: parseInt(_0x4416e2[1]),
      index: _0x48ab1b
    });
  }
  if (_0x5a22a0.length === 0) {
    return _0x2558dc;
  }
  let _0x506ac0 = _0x5a22a0.filter(_0x1c93c6 => _0x1c93c6.season === _0x4eacc1);
  let _0x528311 = _0x506ac0[0];
  if (!_0x528311) {
    return _0x2558dc;
  }
  let _0x3a7abc = _0x528311.index;
  let _0x2c0fa1 = _0x5a22a0.find(_0x300727 => _0x300727.index > _0x3a7abc && _0x300727.season !== _0x4eacc1);
  let _0x32075f = _0x2c0fa1 ? _0x2c0fa1.index : _0x2558dc.length;
  return _0x2558dc.substring(_0x3a7abc, _0x32075f);
}
function extractSingleVc(_0x35c11c, _0x257791, _0x3a56e1, _0x21005d, _0x3461c6, _0x4f0253, _0x378336) {
  return __async(this, null, function* () {
    const _0x4c4fe0 = [];
    const _0x19bbef = _0x35c11c.toLowerCase();
    if (_0x19bbef.includes("vcloud") || _0x19bbef.includes("hubcloud") || _0x19bbef.includes("nexdrive") || _0x19bbef.includes("fastdl")) {
      const _0x222c5c = _0x19bbef.includes("hubcloud");
      const _0x3016b3 = _0x222c5c ? getLatestHubDomain() : getLatestVcDomain();
      const _0x5ebdf1 = getOrigin(_0x35c11c);
      let _0x3beec6 = _0x35c11c;
      if (_0x5ebdf1 !== _0x3016b3 && (_0x35c11c.includes("vcloud") || _0x35c11c.includes("hubcloud"))) {
        _0x3beec6 = _0x35c11c.replace(_0x5ebdf1, _0x3016b3);
      }
      const _0x28839b = yield fetchHtml(_0x3beec6, {
        headers: __spreadProps(__spreadValues({}, getMobileHeaders()), {
          Referer: _0x257791 || baseUrl + "/",
          Cookie: "xla=s4t"
        }),
        redirect: "manual"
      });
      if (!_0x28839b) {
        return _0x4c4fe0;
      }
      const _0x58d0d8 = _0x28839b.html();
      const _0x5142d6 = _0x28839b("title").text() || "";
      if (_0x3a56e1 != null || _0x21005d != null) {
        const _0x6bc96e = _0x5142d6.match(/[.\s_\-](?:S|Season)\s*0*(\d{1,2})[.\s_\-]*(?:E|Ep|Episode)\s*0*(\d{1,2})[.\s_\-]/i);
        if (_0x6bc96e) {
          const _0x126c7c = parseInt(_0x6bc96e[1]);
          const _0x192773 = parseInt(_0x6bc96e[2]);
          if (_0x3a56e1 != null && _0x126c7c !== _0x3a56e1) {
            console.log("[" + PROVIDER_NAME + "] V-Cloud title mismatch: Title=" + _0x5142d6.substring(0, 40) + " Target=S" + _0x3a56e1);
            return _0x4c4fe0;
          }
          if (_0x21005d != null && _0x192773 !== _0x21005d) {
            console.log("[" + PROVIDER_NAME + "] V-Cloud title mismatch: Title=" + _0x5142d6.substring(0, 40) + " Target=E" + _0x21005d);
            return _0x4c4fe0;
          }
        } else {
          const _0x33e127 = _0x5142d6.match(/[.\s_\-](?:S|Season)\s*0*(\d{1,2})[.\s_\-]/i);
          if (_0x33e127 && _0x3a56e1 != null) {
            const _0x58e9ab = parseInt(_0x33e127[1]);
            if (_0x58e9ab !== _0x3a56e1) {
              console.log("[" + PROVIDER_NAME + "] V-Cloud pack mismatch: Title=" + _0x5142d6.substring(0, 40) + " Target=S" + _0x3a56e1);
              return _0x4c4fe0;
            }
          }
        }
      }
      let _0x4bca0b = "";
      const _0x2586c2 = _0x58d0d8.match(/var\s+url\s*=\s*['"]([^'"]+)['"]/);
      const _0x9d3b26 = _0x58d0d8.match(/var\s+url\s*=\s*atob\(atob\('([^']+)'\)\)/);
      if (_0x9d3b26) {
        try {
          _0x4bca0b = atob(atob(_0x9d3b26[1]));
        } catch (_0x5272c5) {
          _0x4bca0b = _0x9d3b26[1];
        }
      } else if (_0x2586c2) {
        _0x4bca0b = _0x2586c2[1];
      }
      const _0x9bd742 = [];
      const _0x2896bd = _0x28839b("div.card-header").text() || "";
      let _0xc31fde = parseQuality(_0x2896bd) || _0x4f0253 || "HD";
      if (_0x4bca0b && _0x4bca0b.includes(".workers.dev")) {
        const _0x1b7a0a = _0x4bca0b + "?s=" + (1 + new Date().getMinutes());
        _0x9bd742.push(() => {
          _0x4c4fe0.push(makeStream("Worker | " + _0xc31fde, (_0x3461c6 || "Worker Server") + " [" + _0x2896bd + "]", _0x1b7a0a, _0xc31fde, {
            Referer: _0x3beec6
          }, _0x378336));
        });
        _0x4bca0b = "";
      }
      _0x28839b("a.btn, a").each((_0xeaf23c, _0x2db01a) => {
        try {
          let _0x38b62a = _0x28839b(_0x2db01a).attr("href") || "";
          let _0x165a18 = (_0x28839b(_0x2db01a).text() || "").trim();
          let _0x369a07 = _0x165a18.toLowerCase();
          if (!_0x38b62a || _0x38b62a === "#") {
            return;
          }
          if (_0x38b62a.toLowerCase().includes(".zip")) {
            return;
          }
          if (_0x369a07.includes("10gbps") || _0x369a07.includes("gdflix") || _0x369a07.includes("dropgalaxy") || _0x369a07.includes("telegram")) {
            return;
          }
          if (_0x369a07.includes("fslv2")) {
            _0x9bd742.push(() => {
              _0x4c4fe0.push(makeStream("FSLv2 (Fast) | " + _0xc31fde, (_0x3461c6 || _0x165a18) + " [" + _0x2896bd + "]", _0x38b62a, _0xc31fde, {
                Referer: _0x3beec6
              }, _0x378336));
            });
          } else if (_0x369a07.includes("fsl")) {
            const _0x3a1895 = _0x38b62a.includes("?") ? _0x38b62a + "&s=" + (1 + new Date().getMinutes()) : _0x38b62a + "?s=" + (1 + new Date().getMinutes());
            _0x9bd742.push(() => {
              _0x4c4fe0.push(makeStream("FSL | " + _0xc31fde, (_0x3461c6 || _0x165a18) + " [" + _0x2896bd + "]", _0x3a1895, _0xc31fde, {
                Referer: _0x3beec6
              }, _0x378336));
            });
          } else if (_0x369a07.includes("worker")) {
            const _0x26ad42 = _0x38b62a.includes("?") ? _0x38b62a + "&s=" + (1 + new Date().getMinutes()) : _0x38b62a + "?s=" + (1 + new Date().getMinutes());
            _0x9bd742.push(() => {
              _0x4c4fe0.push(makeStream("Worker | " + _0xc31fde, (_0x3461c6 || _0x165a18) + " [" + _0x2896bd + "]", _0x26ad42, _0xc31fde, {
                Referer: _0x3beec6
              }, _0x378336));
            });
          }
        } catch (_0x28d455) {}
      });
      if (_0x9bd742.length > 0) {
        _0x9bd742.forEach(_0x24f75d => _0x24f75d());
        return _0x4c4fe0;
      }
      if (!_0x4bca0b) {
        const _0x380363 = _0x28839b("#download").attr("href") || _0x28839b("a").filter((_0x65dd87, _0x263e58) => {
          const _0x57e575 = _0x28839b(_0x263e58).attr("href") || "";
          return _0x57e575.includes("hubcloud.php") || _0x57e575.includes("token") || _0x57e575.includes("dl");
        }).first().attr("href");
        if (_0x380363) {
          _0x4bca0b = _0x380363.startsWith("http") ? _0x380363 : getOrigin(_0x3beec6) + "/" + _0x380363.replace(/^\//, "");
        }
      }
      if (!_0x4bca0b) {
        const _0xebaf1a = _0x28839b("a[href*=\"vcloud.zip\"]").filter((_0x5485a1, _0x1cec5a) => {
          const _0x593128 = _0x28839b(_0x1cec5a).attr("href") || "";
          return !_0x593128.includes("/api/") && _0x593128 !== _0x3beec6;
        }).first().attr("href");
        if (_0xebaf1a) {
          return yield extractSingleVc(_0xebaf1a, _0x257791, _0x3a56e1, _0x21005d, _0x3461c6, _0x4f0253, _0x378336);
        }
      }
      if (!_0x4bca0b) {
        return _0x4c4fe0;
      }
      if (_0x4bca0b.indexOf("://") < 0) {
        _0x4bca0b = getOrigin(_0x3beec6) + _0x4bca0b;
      }
      const _0x553338 = yield fetchHtml(_0x4bca0b, {
        headers: __spreadProps(__spreadValues({}, getMobileHeaders()), {
          Referer: _0x3beec6,
          Cookie: "xla=s4t"
        })
      });
      if (!_0x553338) {
        return _0x4c4fe0;
      }
      const _0x4aa625 = _0x553338.html();
      const _0x1964d8 = _0x553338("div.card-header").text() || "";
      const _0x2f12cb = parseQuality(_0x1964d8) || _0xc31fde;
      const _0x194524 = _0x4aa625.match(/var\s+url\s*=\s*['"]([^'"]+)['"]/);
      if (_0x194524) {
        const _0x10251e = _0x194524[1];
        if (_0x10251e.includes(".workers.dev")) {
          const _0xd2070f = _0x10251e + "?s=" + (1 + new Date().getMinutes());
          _0x9bd742.push(() => {
            _0x4c4fe0.push(makeStream("Worker | " + _0x2f12cb, (_0x3461c6 || "Worker Server") + " [" + _0x1964d8 + "]", _0xd2070f, _0x2f12cb, {
              Referer: _0x4bca0b
            }, _0x378336));
          });
        }
      }
      _0x553338("a.btn, a").each((_0x36327d, _0x4d3319) => {
        try {
          let _0x1e4298 = _0x553338(_0x4d3319).attr("href") || "";
          let _0x209e5a = (_0x553338(_0x4d3319).text() || "").trim();
          let _0x2e9983 = _0x209e5a.toLowerCase();
          if (!_0x1e4298 || _0x1e4298 === "#") {
            return;
          }
          if (_0x1e4298.toLowerCase().includes(".zip")) {
            return;
          }
          if (_0x2e9983.includes("10gbps") || _0x2e9983.includes("gdflix") || _0x2e9983.includes("dropgalaxy") || _0x2e9983.includes("telegram")) {
            return;
          }
          if (_0x2e9983.includes("fslv2")) {
            _0x9bd742.push(() => {
              _0x4c4fe0.push(makeStream("FSLv2 (Fast) | " + (_0x4f0253 || quality), (_0x3461c6 || _0x209e5a) + " [" + _0x2896bd + "]", _0x1e4298, _0x4f0253 || quality, {
                Referer: _0x4bca0b
              }, _0x378336));
            });
          } else if (_0x2e9983.includes("fsl")) {
            const _0x279946 = _0x1e4298.includes("?") ? _0x1e4298 + "&s=" + (1 + new Date().getMinutes()) : _0x1e4298 + "?s=" + (1 + new Date().getMinutes());
            _0x9bd742.push(() => {
              _0x4c4fe0.push(makeStream("FSL | " + (_0x4f0253 || quality), (_0x3461c6 || _0x209e5a) + " [" + _0x2896bd + "]", _0x279946, _0x4f0253 || quality, {
                Referer: _0x4bca0b
              }, _0x378336));
            });
          }
        } catch (_0x26a0e3) {}
      });
      if (_0x9bd742.length === 0) {
        const _0x1cb992 = _0x553338("#fsl").attr("href");
        if (_0x1cb992) {
          const _0x49492b = _0x1cb992 + "?s=" + (1 + new Date().getMinutes());
          _0x9bd742.push(() => {
            _0x4c4fe0.push(makeStream("FSL | " + (_0x4f0253 || quality), (_0x3461c6 || "FSL Server") + " [" + _0x2896bd + "]", _0x49492b, _0x4f0253 || quality, {
              Referer: _0x4bca0b
            }, _0x378336));
          });
        }
      }
      _0x9bd742.forEach(_0xb85584 => _0xb85584());
    }
    return _0x4c4fe0;
  });
}
function loadStreamsFromUrl(_0x25949c, _0x2fe3a0, _0x297738, _0x54196f, _0x3de310, _0x142120, _0x36566e) {
  return __async(this, null, function* () {
    const _0x17b529 = _0x25949c.toLowerCase();
    if (_0x17b529.includes("vcloud") || _0x17b529.includes("hubcloud")) {
      return yield extractSingleVc(_0x25949c, _0x54196f || _0x25949c, _0x3de310, _0x142120, _0x2fe3a0, _0x297738, _0x36566e);
    }
    if (_0x17b529.includes("nexdrive") || _0x17b529.includes("genxfm") || _0x17b529.includes("fastdl")) {
      const _0xbae326 = yield fetchHtml(_0x25949c, {
        headers: __spreadProps(__spreadValues({}, getMobileHeaders()), {
          Referer: _0x54196f || baseUrl + "/"
        }),
        redirect: "manual"
      });
      if (!_0xbae326) {
        return [];
      }
      const _0x47e3a9 = [];
      const _0x19d847 = [];
      _0xbae326("a[href*=\"vcloud\"], a[href*=\"hubcloud\"]").each((_0x47dd72, _0x1757f2) => {
        let _0xe4d02e = _0xbae326(_0x1757f2).attr("href");
        if (_0xe4d02e) {
          if (_0xe4d02e.startsWith("/")) {
            _0xe4d02e = curBase + _0xe4d02e;
          }
          if (_0xe4d02e.includes("/api/index.php?link=")) {
            _0x19d847.push(() => __async(this, null, function* () {
              const _0xe949f5 = yield fetchHtml(_0xe4d02e, {
                headers: __spreadProps(__spreadValues({}, getMobileHeaders()), {
                  Referer: _0x25949c
                }),
                redirect: "manual"
              });
              if (!_0xe949f5) {
                return [];
              }
              let _0x4b45b4 = _0xe949f5("a.btn-success, a.btn").attr("href");
              if (_0x4b45b4) {
                if (_0x4b45b4.startsWith("/")) {
                  _0x4b45b4 = getOrigin(_0xe4d02e) + _0x4b45b4;
                }
                return yield extractSingleVc(_0x4b45b4, _0xe4d02e, _0x3de310, _0x142120, _0x2fe3a0, _0x297738, _0x36566e);
              }
              return [];
            }));
            return;
          }
          _0x19d847.push(() => __async(this, null, function* () {
            return yield extractSingleVc(_0xe4d02e, _0x25949c, _0x3de310, _0x142120, _0x2fe3a0, _0x297738, _0x36566e);
          }));
        }
      });
      if (_0x142120 != null) {
        let _0x4e04bc = false;
        const _0x135b79 = _0x142120 - 1;
        if (_0x135b79 >= 0 && _0x135b79 < _0x19d847.length) {
          try {
            const _0x355554 = yield _0x19d847[_0x135b79]();
            if (Array.isArray(_0x355554) && _0x355554.length > 0) {
              _0x355554.forEach(_0x45b5cf => {
                if (_0x45b5cf && _0x45b5cf.url) {
                  _0x47e3a9.push(_0x45b5cf);
                }
              });
              _0x4e04bc = true;
            }
          } catch (_0x2b041d) {}
        }
        if (!_0x4e04bc) {
          const _0x8c7f82 = _0x19d847.filter((_0x34f91e, _0x2e7abd) => _0x2e7abd !== _0x135b79);
          for (let _0x2c56bb = 0; _0x2c56bb < _0x8c7f82.length; _0x2c56bb += 5) {
            const _0x3d99b3 = _0x8c7f82.slice(_0x2c56bb, _0x2c56bb + 5);
            const _0x19d4af = yield Promise.all(_0x3d99b3.map(_0xf157a7 => (() => __async(this, null, function* () {
              try {
                return yield _0xf157a7();
              } catch (_0x5d4c9d) {
                return [];
              }
            }))()));
            let _0x2ba0ab = false;
            _0x19d4af.forEach(_0x2bfeba => {
              if (Array.isArray(_0x2bfeba) && _0x2bfeba.length > 0) {
                _0x2bfeba.forEach(_0x239dbe => {
                  if (_0x239dbe && _0x239dbe.url) {
                    _0x47e3a9.push(_0x239dbe);
                  }
                });
                _0x2ba0ab = true;
              }
            });
            if (_0x2ba0ab) {
              break;
            }
          }
        }
      } else {
        for (let _0xf9f425 = 0; _0xf9f425 < _0x19d847.length; _0xf9f425 += 5) {
          const _0x199e65 = _0x19d847.slice(_0xf9f425, _0xf9f425 + 5);
          const _0x2ff8d9 = yield Promise.all(_0x199e65.map(_0xa57b93 => (() => __async(this, null, function* () {
            try {
              return yield _0xa57b93();
            } catch (_0x54948f) {
              return [];
            }
          }))()));
          _0x2ff8d9.forEach(_0x47f0c3 => {
            if (Array.isArray(_0x47f0c3)) {
              _0x47f0c3.forEach(_0x9dc7ee => {
                if (_0x9dc7ee && _0x9dc7ee.url) {
                  _0x47e3a9.push(_0x9dc7ee);
                }
              });
            }
          });
        }
      }
      return _0x47e3a9;
    }
    return [];
  });
}
function extractFromPost(_0xbacf7e, _0x7a5c44, _0x3d66fe, _0xbbbca1, _0x359376, _0x1ad368) {
  return __async(this, null, function* () {
    try {
      let _0x85bf47 = _0xbacf7e.html;
      let _0x30d1da = "";
      if (_0x3d66fe && _0xbbbca1 != null) {
        const _0x480e2a = extractSeasonFromContent(_0x85bf47, _0xbbbca1);
        if (_0x480e2a) {
          _0x85bf47 = _0x480e2a;
        }
        _0x30d1da = " S" + _0xbbbca1;
        if (_0x359376) {
          _0x30d1da += "E" + _0x359376;
        }
      }
      const _0x9f9740 = (_0x30d1da.trim() || _0x1ad368 || "").trim();
      const _0x3266ff = extractNexdriveLinks(_0x85bf47);
      const _0x345eae = capLinksForEfficiency(_0x3266ff);
      if (_0x345eae.length === 0) {
        return [];
      }
      const _0x4a4f07 = [];
      const _0x3bc1ec = [];
      for (const _0x2ade89 of _0x345eae) {
        const _0x2620eb = _0x2ade89.quality || "HD";
        const _0x5c0f9b = _0x2ade89.label || _0x30d1da + " [" + _0x2620eb + "]";
        _0x3bc1ec.push(() => loadStreamsFromUrl(_0x2ade89.href, _0x5c0f9b, _0x2620eb, baseUrl + "/", _0xbbbca1, _0x359376, _0x9f9740));
      }
      console.log("[" + PROVIDER_NAME + "] Resolving " + _0x3bc1ec.length + " nexdrive links for post...");
      const _0x4402d2 = yield Promise.all(_0x3bc1ec.map(_0x2e4022 => (() => __async(this, null, function* () {
        try {
          return yield _0x2e4022();
        } catch (_0x14c973) {
          return [];
        }
      }))()));
      _0x4402d2.forEach(_0x5cdea7 => {
        if (Array.isArray(_0x5cdea7)) {
          _0x5cdea7.forEach(_0x14bb54 => {
            if (_0x14bb54 && _0x14bb54.url) {
              _0x4a4f07.push(_0x14bb54);
            }
          });
        }
      });
      return _0x4a4f07;
    } catch (_0x1a8184) {
      console.error("[" + PROVIDER_NAME + "] extractPost Fatal: " + _0x1a8184.message);
      return [];
    }
  });
}
function getStreams(_0x5d6da7, _0x54062b, _0x4934f6, _0x5a0f1a) {
  return __async(this, null, function* () {
    try {
      console.log("[" + PROVIDER_NAME + "] Request: ID=" + _0x5d6da7 + " Type=" + _0x54062b + " S=" + _0x4934f6 + " E=" + _0x5a0f1a);
      yield refreshDomains();
      const _0x1c564e = _0x54062b === "tv" || _0x54062b === "series";
      const _0x47a56c = yield getTMDBInfo(_0x5d6da7, _0x54062b);
      let _0x5929ad = _0x47a56c.imdbId;
      let _0x54c39e = _0x47a56c.title;
      let _0x4e1ab4 = _0x47a56c.year;
      if ((!_0x5929ad || !_0x5929ad.startsWith("tt")) && String(_0x5d6da7).startsWith("tt")) {
        _0x5929ad = String(_0x5d6da7);
      }
      let _0x1a514a = [];
      if (_0x5929ad && _0x5929ad.startsWith("tt")) {
        console.log("[" + PROVIDER_NAME + "] Searching by exact IMDb ID: " + _0x5929ad);
        _0x1a514a = yield searchByTitle(_0x5929ad, null);
      }
      const _0x370e26 = _0x1a514a.some(_0x3a36f6 => _0x3a36f6.imdbId === _0x5929ad);
      if (_0x1a514a.length === 0 || !_0x370e26) {
        let _0x462002 = _0x54c39e;
        if (_0x1c564e && _0x4934f6 != null) {
          _0x462002 += " season " + Number(_0x4934f6);
        } else if (_0x4e1ab4) {
          _0x462002 += " " + _0x4e1ab4;
        }
        console.log("[" + PROVIDER_NAME + "] Falling back to title search: " + _0x462002);
        _0x1a514a = yield searchByTitle(_0x462002, _0x4e1ab4);
        if (_0x1a514a.length === 0 && _0x1c564e && _0x4934f6 != null) {
          _0x1a514a = yield searchByTitle(_0x54c39e, _0x4e1ab4);
        }
      }
      if (_0x1a514a.length === 0) {
        return [];
      }
      let _0xa6935c = null;
      const _0x346acc = _0x5929ad && _0x5929ad.startsWith("tt") ? _0x5929ad : null;
      for (const _0x24bca2 of _0x1a514a) {
        if (_0x346acc && _0x24bca2.imdbId === _0x346acc) {
          if (!_0x1c564e || !_0x4934f6) {
            _0xa6935c = _0x24bca2;
            break;
          }
          const _0x50bbd5 = /(?:s|season|staffel|saison)\s*0*(\d+)\s*(?:-|–|to|and|&|&#)\s*0*(\d+)\b/i.exec(_0x24bca2.title);
          let _0xfd1189 = false;
          if (_0x50bbd5) {
            const _0x383f60 = parseInt(_0x50bbd5[1]);
            const _0x4cdaf6 = parseInt(_0x50bbd5[2]);
            const _0x356ab8 = parseInt(_0x4934f6);
            if (_0x356ab8 >= _0x383f60 && _0x356ab8 <= _0x4cdaf6) {
              _0xfd1189 = true;
            }
          }
          if (!_0xfd1189) {
            _0xfd1189 = new RegExp("(?:s|season|staffel|saison)\\s*0*" + Number(_0x4934f6) + "\\b", "i").test(_0x24bca2.title);
          }
          if (_0xfd1189) {
            _0xa6935c = _0x24bca2;
            break;
          }
        }
        if (!_0xa6935c) {
          if (isStrictMatch(_0x54c39e, _0x4e1ab4, _0x24bca2.title, _0x24bca2.year, _0x47a56c.altTitles)) {
            _0xa6935c = _0x24bca2;
          }
        }
      }
      if (!_0xa6935c || !_0xa6935c.postId) {
        console.log("[" + PROVIDER_NAME + "] No strict match found. Rejecting to prevent serving wrong media.");
        return [];
      }
      console.log("[" + PROVIDER_NAME + "] Matched: \"" + _0xa6935c.title + "\"");
      const _0x13a26a = yield fetchPostContent(_0xa6935c.postId, _0xa6935c.permalink);
      if (!_0x13a26a) {
        return [];
      }
      const _0x50376c = _0x13a26a.title || _0xa6935c.title;
      const _0x1c7d9b = yield extractFromPost(_0x13a26a, _0x50376c, _0x1c564e, _0x4934f6 != null ? Number(_0x4934f6) : null, _0x5a0f1a != null ? Number(_0x5a0f1a) : null, _0x4e1ab4);
      const _0x28c338 = dedupe(_0x1c7d9b).sort((_0x4f55bd, _0x4f4436) => {
        if (_0x4f4436._resWeight !== _0x4f55bd._resWeight) {
          return _0x4f4436._resWeight - _0x4f55bd._resWeight;
        }
        return _0x4f4436._sizeWeight - _0x4f55bd._sizeWeight;
      });
      return _0x28c338;
    } catch (_0x4a68ff) {
      console.error("[" + PROVIDER_NAME + "] Fatal: " + _0x4a68ff.message);
      return [];
    }
  });
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getStreams: getStreams
  };
} else {
  global.getStreams = getStreams;
}