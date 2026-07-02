'use strict';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (_0x548213, _0x24a4e9, _0x2b77e0) => _0x24a4e9 in _0x548213 ? __defProp(_0x548213, _0x24a4e9, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x2b77e0
}) : _0x548213[_0x24a4e9] = _0x2b77e0;
var __spreadValues = (_0x2b7688, _0x6f4f2) => {
  for (var _0x45ef83 in _0x6f4f2 ||= {}) {
    if (__hasOwnProp.call(_0x6f4f2, _0x45ef83)) {
      __defNormalProp(_0x2b7688, _0x45ef83, _0x6f4f2[_0x45ef83]);
    }
  }
  if (__getOwnPropSymbols) {
    for (var _0x45ef83 of __getOwnPropSymbols(_0x6f4f2)) {
      if (__propIsEnum.call(_0x6f4f2, _0x45ef83)) {
        __propIsEnum.call(_0x6f4f2, _0x45ef83);
      }
    }
  }
  return _0x2b7688;
};
var __spreadProps = (_0x1d3b95, _0x2c34b2) => __defProps(_0x1d3b95, __getOwnPropDescs(_0x2c34b2));
var __objRest = (_0x4a5dbf, _0x2118ee) => {
  var _0x3b17c3 = {};
  for (var _0x539eee in _0x4a5dbf) {
    if (__hasOwnProp.call(_0x4a5dbf, _0x539eee) && _0x2118ee.indexOf(_0x539eee) < 0) {
      _0x3b17c3[_0x539eee] = _0x4a5dbf[_0x539eee];
    }
  }
  if (_0x4a5dbf != null && __getOwnPropSymbols) {
    for (var _0x539eee of __getOwnPropSymbols(_0x4a5dbf)) {
      if (_0x2118ee.indexOf(_0x539eee) < 0 && __propIsEnum.call(_0x4a5dbf, _0x539eee)) {
        _0x3b17c3[_0x539eee] = _0x4a5dbf[_0x539eee];
      }
    }
  }
  return _0x3b17c3;
};
var __commonJS = (_0x2f594f, _0x3a2c2c) => function _0x2d656a() {
  if (!_0x3a2c2c) {
    (0, _0x2f594f[__getOwnPropNames(_0x2f594f)[0]])((_0x3a2c2c = {
      exports: {}
    }).exports, _0x3a2c2c);
  }
  return _0x3a2c2c.exports;
};
var __async = (_0x5380a7, _0x16c05e, _0x173a63) => {
  return new Promise((_0x4c3547, _0x5eab92) => {
    var _0x3ab74c = _0x4056d7 => {
      try {
        _0x34a977(_0x173a63.next(_0x4056d7));
      } catch (_0x1c560a) {
        _0x5eab92(_0x1c560a);
      }
    };
    var _0x37ef82 = _0xfe8c18 => {
      try {
        _0x34a977(_0x173a63.throw(_0xfe8c18));
      } catch (_0x50aad1) {
        _0x5eab92(_0x50aad1);
      }
    };
    var _0x34a977 = _0x32cc15 => _0x32cc15.done ? _0x4c3547(_0x32cc15.value) : Promise.resolve(_0x32cc15.value).then(_0x3ab74c, _0x37ef82);
    _0x34a977((_0x173a63 = _0x173a63.apply(_0x5380a7, _0x16c05e)).next());
  });
};
var require_formatter = __commonJS({
  "src/formatter.js"(_0x4bb5ac, _0x2d65a6) {
    function _0x2d863a(_0x2e5d40) {
      if (!_0x2e5d40 || typeof _0x2e5d40 !== "object") {
        return _0x2e5d40;
      }
      const _0x5055f9 = {};
      for (const [_0x37c044, _0xa3906b] of Object.entries(_0x2e5d40)) {
        if (_0xa3906b == null) {
          continue;
        }
        const _0x54c947 = String(_0x37c044).toLowerCase();
        if (_0x54c947 === "user-agent") {
          _0x5055f9["User-Agent"] = _0xa3906b;
        } else if (_0x54c947 === "referer" || _0x54c947 === "referrer") {
          _0x5055f9.Referer = _0xa3906b;
        } else if (_0x54c947 === "origin") {
          _0x5055f9.Origin = _0xa3906b;
        } else if (_0x54c947 === "accept") {
          _0x5055f9.Accept = _0xa3906b;
        } else if (_0x54c947 === "accept-language") {
          _0x5055f9["Accept-Language"] = _0xa3906b;
        } else {
          _0x5055f9[_0x37c044] = _0xa3906b;
        }
      }
      return _0x5055f9;
    }
    function _0x3197ee(_0x22728a, _0x4eec39, _0x57cf08, _0x24e7c5) {
      const _0x429bfc = [_0x22728a == null ? undefined : _0x22728a.url, _0x22728a == null ? undefined : _0x22728a.name, _0x22728a == null ? undefined : _0x22728a.title, _0x22728a == null ? undefined : _0x22728a.server, _0x4eec39].filter(Boolean).join(" ").toLowerCase();
      if (_0x429bfc.includes("loadm") || _0x429bfc.includes("loadm.cam") || _0x429bfc.includes("mixdrop") || _0x429bfc.includes("mxcontent")) {
        return true;
      }
      return false;
    }
    function _0x6f4573(_0x301576) {
      const _0x2fe271 = String(_0x301576 || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "");
      return _0x2fe271 || undefined;
    }
    function _0x446dde(_0x4c6f9e, _0xa2a93d) {
      let _0x34afc4 = _0x4c6f9e.quality || "1080p";
      if (_0x34afc4.toLowerCase() === "1080p") {
        _0x34afc4 = "1080P";
      }
      if (_0x34afc4.toLowerCase() === "2160p" || _0x34afc4.toLowerCase() === "4k") {
        _0x34afc4 = "2160P";
      }
      let _0x19aca6 = "Single-Audio";
      if (_0x4c6f9e.language === "English" || _0x4c6f9e.name && (_0x4c6f9e.name.includes("ENG") || _0x4c6f9e.name.includes("English")) || _0x4c6f9e.hasEnglish === true || _0x4c6f9e.hasEnglish === "true" || _0x4c6f9e.url && (_0x4c6f9e.url.toLowerCase().includes("eng") || _0x4c6f9e.url.toLowerCase().includes("english"))) {
        _0x19aca6 = "Multi-Audio";
      }
      const _0x212e33 = "⚪ CinemaCity | " + _0x34afc4 + " | " + _0x19aca6;
      let _0x301f62 = _0x4c6f9e.displayTitle || _0x4c6f9e.title || "Stream";
      _0x301f62 = _0x301f62.replace(/^[\u2000-\u3300\ud83c-\udbff\udcc0-\udfff\u2011-\u2017\u2190-\u21FF\u2600-\u27BF\u2300-\u23EF\u2934-\u2b55]\s*/gi, "");
      var _0x33e872 = String(_0x4c6f9e.url || "").toLowerCase();
      var _0x424c63 = "M3U8 / HLS";
      if (_0x33e872.includes(".mp4")) {
        _0x424c63 = "MP4";
      }
      if (_0x33e872.includes(".mkv")) {
        _0x424c63 = "MKV";
      }
      var _0x3b9d5c = [];
      if (_0x33e872.includes("10bit")) {
        _0x3b9d5c.push("10bit");
      }
      if (_0x33e872.includes("x265") || _0x33e872.includes("hevc")) {
        _0x3b9d5c.push("x265");
      } else {
        _0x3b9d5c.push("x264");
      }
      _0x3b9d5c.push("WEB-DL");
      var _0x482f85 = "📌 " + _0x3b9d5c.join(" • ");
      var _0x27a8fe = _0x34afc4.includes("4K") || _0x34afc4.includes("2160") ? "🌟" : "💎";
      let _0x511df2 = "N/A";
      if (_0x4c6f9e.runtime && Number.isInteger(_0x4c6f9e.runtime) && _0x4c6f9e.runtime > 0) {
        _0x511df2 = _0x4c6f9e.runtime + " min";
      }
      var _0x24ff31 = "🎬 " + _0x301f62;
      var _0xff7e8a = _0x27a8fe + " " + _0x34afc4 + " | 🔊 " + _0x19aca6 + " | 🗃️ Server 1";
      var _0xa18019 = "🎞️ " + _0x424c63 + " | ⏱️ " + _0x511df2 + " | " + _0x482f85;
      var _0x3f2a2b = _0x24ff31 + "\n" + _0xff7e8a + "\n" + _0xa18019;
      const _0x11b049 = _0x4c6f9e.behaviorHints && typeof _0x4c6f9e.behaviorHints === "object" ? __spreadValues({}, _0x4c6f9e.behaviorHints) : {};
      let _0xb7f172 = _0x4c6f9e.headers;
      if (_0x11b049.proxyHeaders && _0x11b049.proxyHeaders.request) {
        _0xb7f172 = _0x11b049.proxyHeaders.request;
      } else if (_0x11b049.headers) {
        _0xb7f172 = _0x11b049.headers;
      }
      _0xb7f172 = _0x2d863a(_0xb7f172);
      const _0x5d1f00 = String(_0xa2a93d || "").toLowerCase() === "streamingcommunity" || String((_0x4c6f9e == null ? undefined : _0x4c6f9e.name) || "").toLowerCase().includes("streamingcommunity");
      if (_0x5d1f00 && !_0xb7f172) {
        delete _0x11b049.proxyHeaders;
        delete _0x11b049.headers;
        delete _0x11b049.notWebReady;
      }
      if (_0xb7f172) {
        _0x11b049.proxyHeaders = _0x11b049.proxyHeaders || {};
        _0x11b049.proxyHeaders.request = _0xb7f172;
        _0x11b049.headers = _0xb7f172;
      }
      const _0x4d106f = _0x4c6f9e.behaviorHints && "notWebReady" in _0x4c6f9e.behaviorHints;
      const _0x389df1 = _0x3197ee(_0x4c6f9e, _0xa2a93d, _0xb7f172, _0x11b049);
      if (!_0x5d1f00 && _0x389df1) {
        _0x11b049.notWebReady = true;
      } else if (!_0x4d106f) {
        delete _0x11b049.notWebReady;
      }
      const _0x563549 = _0x4c6f9e.referer || (_0xb7f172 == null ? undefined : _0xb7f172.Referer) || (_0xb7f172 == null ? undefined : _0xb7f172.referer);
      const _0x4ff542 = _0x4c6f9e.userAgent || (_0xb7f172 == null ? undefined : _0xb7f172["User-Agent"]) || (_0xb7f172 == null ? undefined : _0xb7f172["user-agent"]);
      const _0x125e76 = __spreadValues({}, _0x4c6f9e);
      const _0x1744bd = __spreadProps(_0x125e76, {
        name: _0x212e33,
        title: _0x3f2a2b,
        size: _0x3f2a2b,
        providerName: "CinemaCity",
        qualityTag: _0x34afc4,
        description: _0x3f2a2b,
        originalTitle: _0x4c6f9e.title || "Stream",
        _nuvio_formatted: true,
        behaviorHints: _0x11b049,
        provider: _0x4c6f9e.provider || _0x6f4573(_0xa2a93d),
        referer: _0x563549,
        userAgent: _0x4ff542,
        headers: _0xb7f172
      });
      try {
        Object.defineProperties(_0x1744bd, {
          qualityTag: {
            get: () => "",
            enumerable: true,
            configurable: true
          },
          quality: {
            get: () => "\b",
            enumerable: true,
            configurable: true
          },
          language: {
            get: () => "",
            enumerable: true,
            configurable: true
          }
        });
      } catch (_0x1be971) {}
      return _0x1744bd;
    }
    _0x2d65a6.exports = {
      formatStream: _0x446dde
    };
  }
});
var require_fetch_helper = __commonJS({
  "src/fetch_helper.js"(_0x249524, _0x46e7ee) {
    var _0x50d6c4 = 30000;
    function _0x2a0e3a(_0x8355c9) {
      const _0x1519a7 = Number.parseInt(String(_0x8355c9), 10);
      if (!Number.isFinite(_0x1519a7) || _0x1519a7 <= 0) {
        return {
          signal: undefined,
          cleanup: null,
          timed: false
        };
      }
      if (typeof AbortSignal !== "undefined" && typeof AbortSignal.timeout === "function") {
        return {
          signal: AbortSignal.timeout(_0x1519a7),
          cleanup: null,
          timed: true
        };
      }
      if (typeof AbortController !== "undefined" && typeof setTimeout === "function") {
        const _0x47ffa7 = new AbortController();
        const _0x4dea9c = setTimeout(() => {
          _0x47ffa7.abort();
        }, _0x1519a7);
        return {
          signal: _0x47ffa7.signal,
          cleanup: () => clearTimeout(_0x4dea9c),
          timed: true
        };
      }
      return {
        signal: undefined,
        cleanup: null,
        timed: false
      };
    }
    function _0x151111(_0xa1d7c3) {
      return __async(this, arguments, function* (_0x3bb150, _0x44f4b4 = {}) {
        if (typeof fetch === "undefined") {
          throw new Error("No fetch implementation found!");
        }
        const _0x447d82 = _0x44f4b4;
        const {
          timeout: _0x1aee18
        } = _0x447d82;
        const _0x12c294 = __objRest(_0x447d82, ["timeout"]);
        const _0x58ff95 = _0x1aee18 || _0x50d6c4;
        const _0x14dcfc = _0x2a0e3a(_0x58ff95);
        const _0x19406c = __spreadValues({}, _0x12c294);
        if (_0x14dcfc.signal) {
          if (_0x19406c.signal && typeof AbortSignal !== "undefined" && typeof AbortSignal.any === "function") {
            _0x19406c.signal = AbortSignal.any([_0x19406c.signal, _0x14dcfc.signal]);
          } else if (!_0x19406c.signal) {
            _0x19406c.signal = _0x14dcfc.signal;
          }
        }
        try {
          const _0x12e854 = yield fetch(_0x3bb150, _0x19406c);
          return _0x12e854;
        } catch (_0x2b2f77) {
          if (_0x2b2f77 && _0x2b2f77.name === "AbortError" && _0x14dcfc.timed) {
            throw new Error("Request to " + _0x3bb150 + " timed out after " + _0x58ff95 + "ms");
          }
          throw _0x2b2f77;
        } finally {
          if (typeof _0x14dcfc.cleanup === "function") {
            _0x14dcfc.cleanup();
          }
        }
      });
    }
    _0x46e7ee.exports = {
      fetchWithTimeout: _0x151111,
      createTimeoutSignal: _0x2a0e3a
    };
  }
});
var {
  formatStream
} = require_formatter();
var {
  fetchWithTimeout
} = require_fetch_helper();
var BASE64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function base64Decode(_0x959c7e) {
  try {
    if (typeof atob === "function") {
      return decodeURIComponent(escape(atob(_0x959c7e)));
    }
  } catch (_0x5344b7) {}
  try {
    let _0x507c93 = "";
    let _0x2df577 = 0;
    let _0x189f51 = 0;
    const _0x561f3e = String(_0x959c7e || "").replace(/[^A-Za-z0-9+/=]/g, "");
    for (let _0x3cc905 = 0; _0x3cc905 < _0x561f3e.length; _0x3cc905++) {
      const _0x501803 = _0x561f3e.charAt(_0x3cc905);
      if (_0x501803 === "=") {
        break;
      }
      const _0x3d4f79 = BASE64_CHARS.indexOf(_0x501803);
      if (_0x3d4f79 < 0) {
        continue;
      }
      _0x2df577 = _0x2df577 << 6 | _0x3d4f79;
      _0x189f51 += 6;
      if (_0x189f51 >= 8) {
        _0x189f51 -= 8;
        _0x507c93 += String.fromCharCode(_0x2df577 >> _0x189f51 & 255);
      }
    }
    try {
      return decodeURIComponent(escape(_0x507c93));
    } catch (_0x4a533a) {
      return _0x507c93;
    }
  } catch (_0x4e54d1) {
    console.error("[CinemaCity] Base64 decode error:", _0x4e54d1);
    return "";
  }
}
var BASE_URL = base64Decode("aHR0cHM6Ly9jaW5lbWFjaXR5LmNj");
var USER_AGENT = "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36";
var FETCH_TIMEOUT = 10000;
var TMDB_API_KEY = "68e094699525b18a70bab2f86b1fa706";
var SITEMAP_URL = BASE_URL + "/news_pages.xml";
var SITEMAP_CACHE_MS = 3600000;
var sitemapCache = null;
function getMappingApiUrl() {
  return "https://animemapping.realbestia.com";
}
function normalizeConfigBoolean(_0x3a143c) {
  if (_0x3a143c === true) {
    return true;
  }
  const _0x23c383 = String(_0x3a143c || "").trim().toLowerCase();
  return ["1", "true", "yes", "on", "enabled", "checked"].includes(_0x23c383);
}
function getMappingLanguage(_0x1b7a35 = null) {
  const _0x422549 = String((_0x1b7a35 == null ? undefined : _0x1b7a35.mappingLanguage) || "").trim().toLowerCase();
  if (_0x422549 === "it") {
    return "it";
  }
  if (normalizeConfigBoolean(_0x1b7a35 == null ? undefined : _0x1b7a35.easyCatalogsLangIt)) {
    return "it";
  } else {
    return null;
  }
}
function fetchViaWorker(_0x4137e6) {
  return __async(this, null, function* () {
    const _0x5a31fe = _0x4137e6.startsWith("http") ? new URL(_0x4137e6).pathname + new URL(_0x4137e6).search : _0x4137e6;
    const _0x29e99b = ("https://" + base64Decode("Y2MucmVhbGJlc3RpYS5jb20=")).replace(/\/+$/, "") + (_0x5a31fe.startsWith("/") ? _0x5a31fe : "/" + _0x5a31fe);
    const _0x5e6096 = yield fetchWithTimeout(_0x29e99b, {
      timeout: FETCH_TIMEOUT,
      headers: {
        "User-Agent": USER_AGENT
      }
    });
    if (!_0x5e6096.ok) {
      throw new Error("Worker HTTP " + _0x5e6096.status);
    }
    return yield _0x5e6096.text();
  });
}
function decodeHtmlEntities(_0x3d19e6) {
  return String(_0x3d19e6 || "").replace(/&#(\d+);/g, (_0x4f6c3d, _0x4a1190) => String.fromCharCode(Number(_0x4a1190))).replace(/&#x([0-9a-f]+);/gi, (_0x271f26, _0x190c7b) => String.fromCharCode(parseInt(_0x190c7b, 16))).replace(/&quot;/g, "\"").replace(/&#039;/g, "'").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&ndash;|&mdash;/g, "-").replace(/\u2013|\u2014/g, "-");
}
function normalizeTitle(_0x464e79) {
  return decodeHtmlEntities(String(_0x464e79 || "")).normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\([^)]*\)/g, " ").replace(/[^a-z0-9]+/g, " ").trim();
}
function compactTitle(_0x3c526c) {
  return normalizeTitle(_0x3c526c).replace(/\s+/g, "");
}
function extractYearFromMetadata(_0x4b7afd) {
  const _0x351f4f = (_0x4b7afd == null ? undefined : _0x4b7afd.release_date) || (_0x4b7afd == null ? undefined : _0x4b7afd.first_air_date) || "";
  const _0x326b77 = Number.parseInt(String(_0x351f4f).slice(0, 4), 10);
  if (Number.isInteger(_0x326b77)) {
    return _0x326b77;
  } else {
    return null;
  }
}
function getSignificantTokens(_0x21e135) {
  const _0x2b0866 = new Set(["the", "a", "an", "of", "and", "in", "on", "to", "for", "at", "by", "is", "it", "il", "lo", "la", "gli", "le", "un", "uno", "una", "di", "da", "del", "della", "dei", "e", "o", "con", "per", "su", "tra", "fra"]);
  return normalizeTitle(_0x21e135).split(/\s+/).filter(_0x2eb318 => _0x2eb318.length > 1 && !_0x2b0866.has(_0x2eb318));
}
function parseSitemapEntries(_0x450a85) {
  const _0x223391 = [];
  const _0x2b598f = /<loc>(https:\/\/cinemacity\.cc\/(movies|tv-series)\/\d+-([a-z0-9-]+)\.html)<\/loc>/gi;
  let _0x4a9fef;
  while ((_0x4a9fef = _0x2b598f.exec(String(_0x450a85 || ""))) !== null) {
    const _0x178e1f = _0x4a9fef[1];
    const _0x2dabbb = _0x4a9fef[2];
    const _0x38faad = _0x4a9fef[3];
    const _0x3e9897 = _0x38faad.match(/-(\d{4})$/);
    const _0x46eb7a = _0x3e9897 ? Number.parseInt(_0x3e9897[1], 10) : null;
    const _0x1763db = _0x3e9897 ? _0x38faad.slice(0, -5) : _0x38faad;
    const _0x1948a2 = _0x1763db.replace(/-/g, " ");
    _0x223391.push({
      url: _0x178e1f,
      kind: _0x2dabbb,
      title: _0x1948a2,
      normalizedTitle: normalizeTitle(_0x1948a2),
      compactTitle: compactTitle(_0x1948a2),
      tokens: getSignificantTokens(_0x1948a2),
      year: Number.isInteger(_0x46eb7a) ? _0x46eb7a : null
    });
  }
  return _0x223391;
}
function fetchSitemapEntries(_0x2f7ac9 = null) {
  return __async(this, null, function* () {
    if (sitemapCache && sitemapCache.expiresAt > Date.now()) {
      return sitemapCache.entries;
    }
    console.log("[CinemaCity] Fetching sitemap catalog...");
    let _0x1f3f00 = "https://" + base64Decode("Y2MucmVhbGJlc3RpYS5jb20=");
    const _0x210427 = SITEMAP_URL.startsWith("http") ? new URL(SITEMAP_URL).pathname : SITEMAP_URL;
    if (_0x1f3f00) {
      const _0xa680a5 = _0x1f3f00.endsWith("/") ? "" + _0x1f3f00.slice(0, -1) + _0x210427 + "?page=1&perPage=500" : "" + _0x1f3f00 + _0x210427 + "?page=1&perPage=500";
      const _0x28ebc2 = yield fetchWithTimeout(_0xa680a5, {
        timeout: FETCH_TIMEOUT,
        headers: {
          "User-Agent": USER_AGENT
        }
      });
      if (_0x28ebc2.ok) {
        const _0x3e2312 = parseInt(_0x28ebc2.headers.get("x-total-entries") || "0", 10);
        const _0x2665fb = yield _0x28ebc2.text();
        let _0x187248 = parseSitemapEntries(_0x2665fb);
        if (_0x3e2312 > 0) {
          const _0x4553ce = 500;
          const _0x10aa24 = Math.ceil(_0x3e2312 / _0x4553ce);
          const _0x453ee0 = [];
          for (let _0x297961 = 2; _0x297961 <= _0x10aa24; _0x297961++) {
            const _0xb90826 = _0x1f3f00.endsWith("/") ? "" + _0x1f3f00.slice(0, -1) + _0x210427 + "?page=" + _0x297961 + "&perPage=500" : "" + _0x1f3f00 + _0x210427 + "?page=" + _0x297961 + "&perPage=500";
            _0x453ee0.push(fetchWithTimeout(_0xb90826, {
              timeout: FETCH_TIMEOUT,
              headers: {
                "User-Agent": USER_AGENT
              }
            }).then(_0xd98c79 => _0xd98c79.ok ? _0xd98c79.text() : "").then(_0x8602c8 => {
              if (_0x8602c8) {
                _0x187248 = _0x187248.concat(parseSitemapEntries(_0x8602c8));
              }
            }).catch(() => {}));
          }
          yield Promise.all(_0x453ee0);
        } else if (_0x187248.length >= 1800) {
          sitemapCache = {
            entries: _0x187248,
            expiresAt: Date.now() + SITEMAP_CACHE_MS
          };
          return _0x187248;
        }
        if (_0x187248.length > 0) {
          sitemapCache = {
            entries: _0x187248,
            expiresAt: Date.now() + SITEMAP_CACHE_MS
          };
          return _0x187248;
        }
      }
      const _0x51f722 = _0x1f3f00.endsWith("/") ? "" + _0x1f3f00 + _0x210427.replace(/^\//, "") : "" + _0x1f3f00 + _0x210427;
      const _0x3ce347 = yield fetchWithTimeout(_0x51f722, {
        timeout: FETCH_TIMEOUT,
        headers: {
          "User-Agent": USER_AGENT
        }
      });
      if (!_0x3ce347.ok) {
        throw new Error("Proxy HTTP " + _0x3ce347.status);
      }
      const _0x2755ba = yield _0x3ce347.text();
      const _0x458462 = parseSitemapEntries(_0x2755ba);
      sitemapCache = {
        entries: _0x458462,
        expiresAt: Date.now() + SITEMAP_CACHE_MS
      };
      return _0x458462;
    } else {
      const _0x4a8e10 = yield fetchWithTimeout(SITEMAP_URL, {
        timeout: FETCH_TIMEOUT,
        headers: {
          "User-Agent": USER_AGENT
        }
      });
      if (!_0x4a8e10.ok) {
        throw new Error("HTTP " + _0x4a8e10.status);
      }
      const _0x2b9782 = yield _0x4a8e10.text();
      const _0x38a1da = parseSitemapEntries(_0x2b9782);
      sitemapCache = {
        entries: _0x38a1da,
        expiresAt: Date.now() + SITEMAP_CACHE_MS
      };
      return _0x38a1da;
    }
  });
}
function scoreSitemapEntry(_0x1b9f1a, _0xccf347, _0x3448fd) {
  let _0x12f9e8 = 0;
  for (const _0x95e751 of _0xccf347) {
    const _0x29b4d5 = normalizeTitle(_0x95e751);
    const _0x7eba41 = compactTitle(_0x95e751);
    if (!_0x29b4d5 || !_0x7eba41) {
      continue;
    }
    let _0x5889f1 = 0;
    if (_0x1b9f1a.normalizedTitle === _0x29b4d5 || _0x1b9f1a.compactTitle === _0x7eba41) {
      _0x5889f1 = 1000;
    } else if (_0x1b9f1a.normalizedTitle.startsWith(_0x29b4d5) || _0x29b4d5.startsWith(_0x1b9f1a.normalizedTitle)) {
      _0x5889f1 = 500;
    } else if (_0x1b9f1a.compactTitle.includes(_0x7eba41) || _0x7eba41.includes(_0x1b9f1a.compactTitle)) {
      _0x5889f1 = 420;
    } else {
      const _0xa1fffd = getSignificantTokens(_0x95e751);
      if (_0xa1fffd.length > 0 && _0x1b9f1a.tokens.length > 0) {
        let _0x17d3af = 0;
        const _0x2197a9 = new Set(_0x1b9f1a.tokens);
        for (const _0x425208 of _0xa1fffd) {
          if (_0x2197a9.has(_0x425208)) {
            _0x17d3af++;
          }
        }
        const _0x5db0d3 = _0x17d3af / _0xa1fffd.length;
        const _0x2d5f34 = Math.max(0, _0x1b9f1a.tokens.length - _0xa1fffd.length);
        _0x5889f1 = _0x5db0d3 * 300 - _0x2d5f34 * 20 - Math.abs(_0x1b9f1a.tokens.length - _0xa1fffd.length) * 2;
      }
    }
    if (_0x3448fd && _0x1b9f1a.year) {
      _0x5889f1 += _0x1b9f1a.year === _0x3448fd ? 50 : -Math.abs(_0x1b9f1a.year - _0x3448fd) * 3;
    }
    _0x12f9e8 = Math.max(_0x12f9e8, _0x5889f1);
  }
  return _0x12f9e8;
}
function extractImdbIdFromHtml(_0x9fd844) {
  const _0x390bbf = String(_0x9fd844 || "").match(/\btt\d{5,}\b/gi) || [];
  for (const _0x5d50bd of _0x390bbf) {
    if (/^tt\d{5,}$/i.test(_0x5d50bd)) {
      return _0x5d50bd.toLowerCase();
    }
  }
  return null;
}
function verifyCandidateImdb(_0x2c32f4, _0x3364a6) {
  return __async(this, null, function* () {
    const _0x3537c7 = String(_0x3364a6 || "").trim().toLowerCase();
    if (!/^tt\d{5,}$/.test(_0x3537c7)) {
      return null;
    }
    try {
      const _0x38a1a6 = yield fetchViaWorker(_0x2c32f4);
      const _0x4a87c9 = extractImdbIdFromHtml(_0x38a1a6);
      return _0x4a87c9;
    } catch (_0x586735) {
      return null;
    }
  });
}
function searchBySitemap(_0x94cbf1, _0xa54157, _0x19e68e, _0x5222da, _0xaa12fb = null) {
  return __async(this, null, function* () {
    const _0x2585c1 = /^tt\d{5,}$/i.test(String(_0x94cbf1 || "").trim()) ? String(_0x94cbf1).trim().toLowerCase() : null;
    const _0xe2be20 = yield getTmdbMetadata(_0x94cbf1, _0xa54157, _0x19e68e, _0x5222da);
    const _0x1efe55 = Array.from(new Set([_0xe2be20 == null ? undefined : _0xe2be20.title, _0xe2be20 == null ? undefined : _0xe2be20.name, _0xe2be20 == null ? undefined : _0xe2be20.original_title, _0xe2be20 == null ? undefined : _0xe2be20.original_name].filter(Boolean)));
    if (_0x1efe55.length === 0) {
      return null;
    }
    const _0x19809f = extractYearFromMetadata(_0xe2be20);
    const _0x539a28 = _0xa54157 === "movie" ? "movies" : "tv-series";
    let _0xdf4fc6;
    try {
      _0xdf4fc6 = yield fetchSitemapEntries(_0xaa12fb);
    } catch (_0x2c4e89) {
      return null;
    }
    let _0x540777 = null;
    let _0x2f4d74 = -Infinity;
    const _0x392fab = [];
    for (const _0x455d49 of _0xdf4fc6) {
      if (_0x455d49.kind !== _0x539a28) {
        continue;
      }
      const _0x362d0f = scoreSitemapEntry(_0x455d49, _0x1efe55, _0x19809f);
      if (_0x362d0f >= 250) {
        _0x392fab.push({
          entry: _0x455d49,
          score: _0x362d0f
        });
      }
      if (_0x362d0f > _0x2f4d74) {
        _0x2f4d74 = _0x362d0f;
        _0x540777 = _0x455d49;
      }
    }
    if (!_0x540777 || _0x2f4d74 < 250) {
      return null;
    }
    if (_0x2585c1) {
      _0x392fab.sort((_0x294f12, _0x2ebd6a) => _0x2ebd6a.score - _0x294f12.score);
      const _0x20b53e = _0x392fab.slice(0, 3);
      for (const _0x55d472 of _0x20b53e) {
        const _0x49b03d = yield verifyCandidateImdb(_0x55d472.entry.url, _0x2585c1);
        if (_0x49b03d === _0x2585c1) {
          return {
            url: _0x55d472.entry.url,
            title: _0x1efe55[0] || _0x55d472.entry.title,
            year: _0x19809f,
            runtime: _0xe2be20 ? _0xe2be20.runtime : null
          };
        }
      }
      if (_0x2f4d74 < 950) {
        return null;
      }
    }
    return {
      url: _0x540777.url,
      title: _0x1efe55[0] || _0x540777.title,
      year: _0x19809f,
      runtime: _0xe2be20 ? _0xe2be20.runtime : null
    };
  });
}
function getTmdbMetadata(_0x30d9a2, _0x7a64d1, _0x5c4d59, _0x4aa394) {
  return __async(this, null, function* () {
    try {
      let _0xba3be4 = null;
      const _0x306ca4 = String(_0x30d9a2 || "").trim();
      const _0x3bd9b7 = _0x7a64d1 === "movie" ? "movie" : "tv";
      const _0x34e833 = Number.isInteger(_0x5c4d59) ? _0x5c4d59 : 1;
      const _0x364447 = Number.isInteger(_0x4aa394) ? _0x4aa394 : 1;
      if (/^tt\d+$/i.test(_0x306ca4)) {
        _0xba3be4 = "https://api.themoviedb.org/3/find/" + encodeURIComponent(_0x306ca4) + "?api_key=" + TMDB_API_KEY + "&external_source=imdb_id&language=en-US";
        const _0x4fce81 = yield fetchWithTimeout(_0xba3be4, {
          timeout: FETCH_TIMEOUT
        });
        if (!_0x4fce81.ok) {
          return null;
        }
        const _0x59801a = yield _0x4fce81.json();
        const _0x1e1d67 = _0x3bd9b7 === "movie" ? _0x59801a == null ? undefined : _0x59801a.movie_results : _0x59801a == null ? undefined : _0x59801a.tv_results;
        if (Array.isArray(_0x1e1d67) && _0x1e1d67.length > 0) {
          const _0x33fae0 = _0x1e1d67[0].id;
          if (_0x3bd9b7 === "tv") {
            const _0x14a420 = "https://api.themoviedb.org/3/tv/" + _0x33fae0 + "/season/" + _0x34e833 + "/episode/" + _0x364447 + "?api_key=" + TMDB_API_KEY + "&language=en-US";
            const _0x1f8844 = yield fetchWithTimeout(_0x14a420, {
              timeout: FETCH_TIMEOUT
            });
            if (_0x1f8844.ok) {
              const _0x4d9095 = yield _0x1f8844.json();
              return {
                name: _0x1e1d67[0].name,
                original_name: _0x1e1d67[0].original_name,
                first_air_date: _0x1e1d67[0].first_air_date,
                runtime: _0x4d9095.runtime || 0
              };
            }
          } else {
            const _0x54f00a = "https://api.themoviedb.org/3/movie/" + _0x33fae0 + "?api_key=" + TMDB_API_KEY + "&language=en-US";
            const _0x2d2029 = yield fetchWithTimeout(_0x54f00a, {
              timeout: FETCH_TIMEOUT
            });
            if (_0x2d2029.ok) {
              return yield _0x2d2029.json();
            }
          }
          return _0x1e1d67[0];
        }
        return null;
      } else if (/^\d+$/.test(_0x306ca4)) {
        if (_0x3bd9b7 === "tv") {
          const _0x50c22c = "https://api.themoviedb.org/3/tv/" + _0x306ca4 + "/season/" + _0x34e833 + "/episode/" + _0x364447 + "?api_key=" + TMDB_API_KEY + "&language=en-US";
          const _0x4bfc69 = yield fetchWithTimeout(_0x50c22c, {
            timeout: FETCH_TIMEOUT
          });
          if (_0x4bfc69.ok) {
            const _0x4c8758 = yield _0x4bfc69.json();
            const _0x2d7cdb = "https://api.themoviedb.org/3/tv/" + _0x306ca4 + "?api_key=" + TMDB_API_KEY + "&language=en-US";
            const _0x46e489 = yield fetchWithTimeout(_0x2d7cdb, {
              timeout: FETCH_TIMEOUT
            });
            const _0x167c72 = _0x46e489.ok ? yield _0x46e489.json() : {};
            return {
              name: _0x167c72.name,
              original_name: _0x167c72.original_name,
              first_air_date: _0x167c72.first_air_date,
              runtime: _0x4c8758.runtime || 0
            };
          }
        } else {
          _0xba3be4 = "https://api.themoviedb.org/3/movie/" + _0x306ca4 + "?api_key=" + TMDB_API_KEY + "&language=en-US";
          const _0x55b9ef = yield fetchWithTimeout(_0xba3be4, {
            timeout: FETCH_TIMEOUT
          });
          if (!_0x55b9ef.ok) {
            return null;
          }
          return yield _0x55b9ef.json();
        }
      }
      return null;
    } catch (_0x43d23c) {
      return null;
    }
  });
}
function getIdsFromKitsu(_0x25490e, _0x9d8733, _0x19ce38, _0x2568d2 = null) {
  return __async(this, null, function* () {
    try {
      if (!_0x25490e) {
        return null;
      }
      const _0x2f9806 = new URLSearchParams();
      const _0x14c197 = Number.parseInt(String(_0x19ce38 || ""), 10);
      const _0x48ee5 = Number.parseInt(String(_0x9d8733 || ""), 10);
      _0x2f9806.set("ep", Number.isInteger(_0x14c197) && _0x14c197 > 0 ? String(_0x14c197) : "1");
      if (Number.isInteger(_0x48ee5) && _0x48ee5 >= 0) {
        _0x2f9806.set("s", String(_0x48ee5));
      }
      const _0x23db8f = getMappingLanguage(_0x2568d2);
      if (_0x23db8f) {
        _0x2f9806.set("lang", _0x23db8f);
      }
      const _0x2dda64 = getMappingApiUrl() + "/kitsu/" + encodeURIComponent(String(_0x25490e).trim()) + "?" + _0x2f9806.toString();
      const _0x313bb1 = yield fetchWithTimeout(_0x2dda64, {
        timeout: FETCH_TIMEOUT
      });
      if (!_0x313bb1.ok) {
        return null;
      }
      const _0x90a7e1 = yield _0x313bb1.json();
      const _0x1a1e67 = _0x90a7e1 && _0x90a7e1.mappings && _0x90a7e1.mappings.ids ? _0x90a7e1.mappings.ids : {};
      const _0x94f29e = _0x90a7e1 && _0x90a7e1.mappings && (_0x90a7e1.mappings.tmdb_episode || _0x90a7e1.mappings.tmdbEpisode) || _0x90a7e1 && (_0x90a7e1.tmdb_episode || _0x90a7e1.tmdbEpisode) || null;
      const _0x1505e5 = _0x1a1e67 && /^\d+$/.test(String(_0x1a1e67.tmdb || "").trim()) ? String(_0x1a1e67.tmdb).trim() : null;
      const _0x1bca7e = _0x1a1e67 && /^tt\d+$/i.test(String(_0x1a1e67.imdb || "").trim()) ? String(_0x1a1e67.imdb).trim() : null;
      const _0x7849a8 = Number.parseInt(String(_0x94f29e && (_0x94f29e.season || _0x94f29e.seasonNumber || _0x94f29e.season_number) || ""), 10);
      const _0x473fbe = Number.parseInt(String(_0x94f29e && (_0x94f29e.episode || _0x94f29e.episodeNumber || _0x94f29e.episode_number) || ""), 10);
      const _0x518bef = Number.parseInt(String(_0x94f29e && (_0x94f29e.rawEpisodeNumber || _0x94f29e.raw_episode_number || _0x94f29e.rawEpisode) || ""), 10);
      return {
        tmdbId: _0x1505e5,
        imdbId: _0x1bca7e,
        mappedSeason: Number.isInteger(_0x7849a8) && _0x7849a8 > 0 ? _0x7849a8 : null,
        mappedEpisode: Number.isInteger(_0x473fbe) && _0x473fbe > 0 ? _0x473fbe : null,
        rawEpisodeNumber: Number.isInteger(_0x518bef) && _0x518bef > 0 ? _0x518bef : null
      };
    } catch (_0x52f1a4) {
      return null;
    }
  });
}
function parseCompositeSeriesId(_0x4f1f5b, _0x381c8b, _0x3bcd44) {
  const _0x5ae51e = {
    normalizedId: String(_0x4f1f5b || "").trim(),
    season: Number.isInteger(_0x381c8b) ? _0x381c8b : Number.parseInt(_0x381c8b, 10) || 1,
    episode: Number.isInteger(_0x3bcd44) ? _0x3bcd44 : Number.parseInt(_0x3bcd44, 10) || 1
  };
  const _0x5950f9 = _0x5ae51e.normalizedId.match(/^(tt\d+|\d+|tmdb:\d+):(\d+):(\d+)$/i);
  if (_0x5950f9) {
    _0x5ae51e.normalizedId = _0x5950f9[1];
    _0x5ae51e.season = Number.parseInt(_0x5950f9[2], 10) || _0x5ae51e.season;
    _0x5ae51e.episode = Number.parseInt(_0x5950f9[3], 10) || _0x5ae51e.episode;
  }
  return _0x5ae51e;
}
function buildDownloadUrl(_0x2ce413, _0x55e096) {
  const _0x10f183 = _0x2ce413.indexOf("/public_files/");
  if (_0x10f183 === -1) {
    return null;
  }
  const _0x17b9d1 = _0x2ce413.substring(0, _0x10f183 + "/public_files/".length);
  const _0x241f17 = _0x2ce413.substring(_0x10f183 + "/public_files/".length);
  const _0x35eae3 = _0x241f17.split(",");
  const _0xc3c15e = _0x35eae3.find(_0x3fc59e => _0x3fc59e.includes("1080p") && _0x3fc59e.endsWith(".mp4")) || _0x35eae3.find(_0x1db8bf => _0x1db8bf.endsWith(".mp4"));
  if (!_0xc3c15e) {
    return null;
  }
  const _0x1ac7ff = _0x35eae3.find(_0x358d54 => /italian|italiano/i.test(_0x358d54) && _0x358d54.endsWith(".m4a"));
  const _0x28571f = _0x35eae3.find(_0x493142 => _0x493142.includes(".m3u8"));
  const _0x1ad3b0 = _0x17b9d1 + _0x241f17 + (_0x28571f ? "" : ".urlset/master.m3u8");
  return {
    url: _0x1ad3b0,
    hasItalian: !!_0x1ac7ff
  };
}
function extractStreamFromAtob(_0x32ea61, _0xd3f4f9, _0x418901, _0x34ea98) {
  const _0x5e18af = /atob\s*\(\s*['"]([^"']{20,})['"]\s*\)/gi;
  let _0x375d8a;
  while ((_0x375d8a = _0x5e18af.exec(_0x32ea61)) !== null) {
    try {
      const _0x16e4c5 = base64Decode(_0x375d8a[1]);
      if (!_0x16e4c5 || _0x16e4c5.length < 20) {
        continue;
      }
      const _0x3422d4 = _0x16e4c5.match(new RegExp("file\\s*:\\s*'(\\[.*?\\])'", "s"));
      if (_0x3422d4) {
        try {
          const _0x181ea2 = JSON.parse(_0x3422d4[1]);
          if (Array.isArray(_0x181ea2) && _0x181ea2.length > 0) {
            if (_0x181ea2[0].folder && Array.isArray(_0x181ea2[0].folder)) {
              const _0x51bf5d = (_0x418901 || 1) - 1;
              const _0x199f6f = _0x181ea2[_0x51bf5d];
              if (_0x199f6f && _0x199f6f.folder) {
                const _0x938efa = (_0x34ea98 || 1) - 1;
                const _0x1b6b36 = _0x199f6f.folder[_0x938efa];
                if (_0x1b6b36 && _0x1b6b36.file) {
                  const _0x7d7d1b = buildDownloadUrl(_0x1b6b36.file, _0xd3f4f9);
                  if (_0x7d7d1b) {
                    return _0x7d7d1b;
                  }
                }
              }
            }
            const _0x43aed6 = _0x181ea2[0].file;
            if (_0x43aed6 && _0x43aed6.startsWith("http")) {
              const _0xc601e3 = buildDownloadUrl(_0x43aed6, _0xd3f4f9);
              if (_0xc601e3) {
                return _0xc601e3;
              }
            }
          }
        } catch (_0x4e00d1) {}
      }
    } catch (_0x10ba30) {}
  }
  return null;
}
function extractDownloadLinks(_0x10624e) {
  const _0x2d544f = [];
  const _0x41ac93 = /<a\s[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let _0x1b9fca;
  while ((_0x1b9fca = _0x41ac93.exec(_0x10624e)) !== null) {
    const _0xb32326 = _0x1b9fca[1].trim();
    const _0xa959b3 = _0x1b9fca[2].replace(/<[^>]+>/g, "").trim();
    if (!/\.(mp4|m3u8|mkv|avi|mov|webm)([?#].*)?$/i.test(_0xb32326)) {
      continue;
    }
    if (_0xb32326.length < 10) {
      continue;
    }
    _0x2d544f.push({
      url: _0xb32326,
      text: _0xa959b3.toLowerCase()
    });
  }
  return _0x2d544f;
}
function resolveUrl(_0x4e2130, _0x3d3c3b) {
  try {
    return new URL(_0x3d3c3b, _0x4e2130).toString();
  } catch (_0x4d0aec) {
    return _0x3d3c3b;
  }
}
function getStreams(_0x5db17d, _0x117000, _0x3fc835, _0x46a761, _0x2e4bfe = null) {
  return __async(this, null, function* () {
    const _0x2eaca8 = parseCompositeSeriesId(_0x5db17d, _0x3fc835, _0x46a761);
    _0x5db17d = _0x2eaca8.normalizedId;
    _0x3fc835 = _0x2eaca8.season;
    _0x46a761 = _0x2eaca8.episode;
    let _0x20eba8 = String(_0x5db17d || "").trim();
    const _0x5dde85 = _0x117000 === "tv" || _0x117000 === "series" || _0x117000 === "anime" ? "tv" : "movie";
    const _0x17a6b0 = _0x2e4bfe && /^\d+$/.test(String(_0x2e4bfe.tmdbId || "")) ? String(_0x2e4bfe.tmdbId) : null;
    const _0x3b501f = _0x2e4bfe && /^tt\d+$/i.test(String(_0x2e4bfe.imdbId || "")) ? String(_0x2e4bfe.imdbId) : null;
    const _0x3dab3b = _0x2e4bfe && /^\d+$/.test(String(_0x2e4bfe.kitsuId || "")) ? String(_0x2e4bfe.kitsuId) : null;
    const _0xfebe19 = _0x2e4bfe && _0x2e4bfe.seasonProvided === true;
    if (_0x20eba8.startsWith("kitsu:") || _0x3dab3b) {
      const _0xeb2307 = _0x3dab3b || (_0x20eba8.match(/^kitsu:(\d+)/i) || [])[1] || null;
      const _0x937550 = _0xfebe19 ? _0x3fc835 : null;
      const _0x2875af = _0xeb2307 ? yield getIdsFromKitsu(_0xeb2307, _0x937550, _0x46a761, _0x2e4bfe) : null;
      if (_0x2875af) {
        if (_0x2875af.imdbId) {
          _0x20eba8 = _0x2875af.imdbId;
        } else if (_0x2875af.tmdbId) {
          _0x20eba8 = _0x2875af.tmdbId;
        }
        if (_0x2875af.mappedSeason && _0x2875af.mappedEpisode) {
          _0x3fc835 = _0x2875af.mappedSeason;
          _0x46a761 = _0x2875af.mappedEpisode;
        } else if (_0x2875af.rawEpisodeNumber) {
          _0x46a761 = _0x2875af.rawEpisodeNumber;
        }
      }
    }
    if (!_0x20eba8.startsWith("tt") && _0x3b501f) {
      _0x20eba8 = _0x3b501f;
    } else if (!/^\d+$/.test(_0x20eba8) && _0x17a6b0) {
      _0x20eba8 = _0x17a6b0;
    }
    if (!_0x20eba8.startsWith("tt")) {
      if (_0x2e4bfe && _0x2e4bfe.imdbId && _0x2e4bfe.imdbId.startsWith("tt")) {
        _0x20eba8 = _0x2e4bfe.imdbId;
      } else {
        try {
          const _0x4d8b69 = _0x20eba8.replace(/\D/g, "");
          if (_0x4d8b69) {
            let _0x5c1464 = _0x5dde85 === "movie" ? "https://api.themoviedb.org/3/movie/" + _0x4d8b69 + "?api_key=" + TMDB_API_KEY : "https://api.themoviedb.org/3/tv/" + _0x4d8b69 + "/external_ids?api_key=" + TMDB_API_KEY;
            const _0x2d0bc3 = yield fetchWithTimeout(_0x5c1464, {
              timeout: FETCH_TIMEOUT
            });
            if (_0x2d0bc3.ok) {
              const _0x1b85ae = yield _0x2d0bc3.json();
              if (_0x1b85ae.imdb_id) {
                _0x20eba8 = _0x1b85ae.imdb_id;
              }
            }
          }
        } catch (_0x4d0246) {}
      }
    }
    if (!_0x20eba8.startsWith("tt")) {
      return [];
    }
    try {
      let _0x12ce1e = yield searchBySitemap(_0x20eba8, _0x5dde85, _0x3fc835, _0x46a761, _0x2e4bfe);
      if (!_0x12ce1e || !_0x12ce1e.url) {
        return [];
      }
      const _0x394ecc = _0x12ce1e.url;
      const _0x83a21c = (_0x12ce1e.title || _0x20eba8).replace(/\s*\(.*?\)\s*/g, "").trim();
      const _0xfe67d5 = _0x12ce1e.year ? " (" + _0x12ce1e.year + ")" : "";
      const _0x2a3e18 = _0x117000 === "tv" || _0x117000 === "series" ? _0x83a21c + " - S" + String(_0x3fc835).padStart(2, "0") + "E" + String(_0x46a761).padStart(2, "0") + _0xfe67d5 : "" + _0x83a21c + _0xfe67d5;
      let _0x113a3f;
      try {
        _0x113a3f = yield fetchViaWorker(_0x394ecc);
      } catch (_0x51e8dd) {
        return [];
      }
      if (_0x113a3f.length < 500 || _0x113a3f.includes("Just a moment") || _0x113a3f.includes("admin") && _0x113a3f.includes("Unlimited")) {
        return [];
      }
      const _0x1bbfe2 = extractDownloadLinks(_0x113a3f);
      let _0x42b2ec = false;
      if (_0x1bbfe2.length === 0) {
        const _0x5a0e03 = _0x5dde85 === "tv" ? _0x3fc835 : null;
        const _0xa4a1b0 = _0x5dde85 === "tv" ? _0x46a761 : null;
        const _0x2f37e8 = extractStreamFromAtob(_0x113a3f, _0x83a21c, _0x5a0e03, _0xa4a1b0);
        if (_0x2f37e8) {
          _0x1bbfe2.push({
            url: _0x2f37e8.url,
            text: ""
          });
          _0x42b2ec = _0x2f37e8.hasItalian;
        }
      }
      let _0x3ef1c0 = null;
      if (_0x1bbfe2.length === 0) {
        return [];
      }
      for (const _0x386f2e of _0x1bbfe2) {
        const _0x45f05a = _0x386f2e.text;
        if (_0x45f05a.includes("eng") || _0x45f05a.includes("english")) {
          _0x3ef1c0 = _0x386f2e.url;
          _0x42b2ec = true;
          break;
        }
      }
      if (!_0x3ef1c0) {
        for (const _0x42f6e6 of _0x1bbfe2) {
          if (_0x42f6e6.text.includes("ita") || _0x42f6e6.text.includes("sub")) {
            continue;
          }
          _0x3ef1c0 = _0x42f6e6.url;
          break;
        }
      }
      if (!_0x3ef1c0) {
        _0x3ef1c0 = _0x1bbfe2[0].url;
      }
      const _0x4dfbcb = resolveUrl(_0x394ecc, _0x3ef1c0);
      const _0x2c0476 = {
        name: "CinemaCity",
        displayTitle: _0x2a3e18,
        url: _0x4dfbcb,
        quality: "1080P",
        runtime: _0x12ce1e.runtime,
        type: "hls",
        language: _0x42b2ec ? "English" : "",
        hasEnglish: _0x42b2ec,
        behaviorHints: {
          notWebReady: true
        },
        headers: {
          Referer: "https://cinemacity.cc/",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
        }
      };
      return [formatStream(_0x2c0476, "CinemaCity")].filter(_0x46a3f2 => _0x46a3f2 !== null);
    } catch (_0x1ba228) {
      return [];
    }
  });
}
module.exports = {
  getStreams: getStreams
};