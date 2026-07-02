var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (_0x4d9d1f, _0x3e7b80, _0x16bec5) => _0x3e7b80 in _0x4d9d1f ? __defProp(_0x4d9d1f, _0x3e7b80, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x16bec5
}) : _0x4d9d1f[_0x3e7b80] = _0x16bec5;
var __spreadValues = (_0x582290, _0x50f77f) => {
  for (var _0x1e17e6 in _0x50f77f ||= {}) {
    if (__hasOwnProp.call(_0x50f77f, _0x1e17e6)) {
      __defNormalProp(_0x582290, _0x1e17e6, _0x50f77f[_0x1e17e6]);
    }
  }
  if (__getOwnPropSymbols) {
    for (var _0x1e17e6 of __getOwnPropSymbols(_0x50f77f)) {
      if (__propIsEnum.call(_0x50f77f, _0x1e17e6)) {
        __defNormalProp(_0x582290, _0x1e17e6, _0x50f77f[_0x1e17e6]);
      }
    }
  }
  return _0x582290;
};
var __spreadProps = (_0x314098, _0x3a9f20) => __defProps(_0x314098, __getOwnPropDescs(_0x3a9f20));
var __async = (_0x551ad7, _0x115246, _0x2cd757) => {
  return new Promise((_0x1b3d48, _0xeb76d4) => {
    var _0xd05f62 = _0x5940c5 => {
      try {
        _0x458233(_0x2cd757.next(_0x5940c5));
      } catch (_0x564f3e) {
        _0xeb76d4(_0x564f3e);
      }
    };
    var _0x40a25d = _0x3d068b => {
      try {
        _0x458233(_0x2cd757.throw(_0x3d068b));
      } catch (_0x575af3) {
        _0xeb76d4(_0x575af3);
      }
    };
    var _0x458233 = _0x51790b => _0x51790b.done ? _0x1b3d48(_0x51790b.value) : Promise.resolve(_0x51790b.value).then(_0xd05f62, _0x40a25d);
    _0x458233((_0x2cd757 = _0x2cd757.apply(_0x551ad7, _0x115246)).next());
  });
};
var PROVIDER_NAME = "MoviesDrive";
var MAIN_URL = "https://new3.moviesdrives.my";
var ARCHIVE_DOMAIN = "https://mdrive.lol";
var TMDB_KEY = "439c478a771f35c05022f9feabcca01c";
var MOBILE_UAS = ["Mozilla/5.0 (Linux; Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 13; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 12; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"];
function getHeaders(_0x423fc5) {
  var _0x237758 = MOBILE_UAS[Math.floor(Math.random() * MOBILE_UAS.length)];
  var _0x429a07 = {
    "User-Agent": _0x237758,
    "Accept-Language": "en-US,en;q=0.9"
  };
  if (_0x423fc5) {
    for (var _0x1a4cd2 in _0x423fc5) {
      _0x429a07[_0x1a4cd2] = _0x423fc5[_0x1a4cd2];
    }
  }
  return _0x429a07;
}
function log(_0x498a63) {
  console.log("[" + PROVIDER_NAME + "] " + _0x498a63);
}
function err(_0x48fe95) {
  console.error("[" + PROVIDER_NAME + "] " + _0x48fe95);
}
function fetchText(_0x1a6097, _0x4d2e64, _0x4dd7b7) {
  return __async(this, null, function* () {
    _0x4dd7b7 = _0x4dd7b7 || 12000;
    try {
      var _0x127178 = null;
      if (typeof AbortSignal !== "undefined" && AbortSignal.timeout) {
        _0x127178 = AbortSignal.timeout(_0x4dd7b7);
      }
      var _0xe065d9 = getHeaders(_0x4d2e64 && _0x4d2e64.headers ? null : null);
      if (_0x4d2e64 && _0x4d2e64.headers) {
        for (var _0x40cf80 in _0x4d2e64.headers) {
          _0xe065d9[_0x40cf80] = _0x4d2e64.headers[_0x40cf80];
        }
      }
      var _0x402334 = __spreadProps(__spreadValues({}, _0x4d2e64 || {}), {
        headers: _0xe065d9
      });
      if (_0x127178) {
        _0x402334.signal = _0x127178;
      }
      var _0x10d6a3 = fetch(_0x1a6097, _0x402334);
      var _0x393ae4 = new Promise(function (_0x198dc4, _0x5e76ea) {
        setTimeout(function () {
          _0x5e76ea(new Error("Timeout " + _0x4dd7b7 + "ms"));
        }, _0x4dd7b7);
      });
      var _0x55bd0b = yield Promise.race([_0x10d6a3, _0x393ae4]);
      if (_0x55bd0b.ok) {
        return yield _0x55bd0b.text();
      }
      return null;
    } catch (_0x418e2c) {
      err("fetch: " + _0x1a6097.substring(0, 80) + " -> " + (_0x418e2c.message || ""));
      return null;
    }
  });
}
function fetchJson(_0x4d5708, _0x6e5383, _0x397b7b) {
  return __async(this, null, function* () {
    var _0x174a50 = yield fetchText(_0x4d5708, _0x6e5383, _0x397b7b);
    if (!_0x174a50) {
      return null;
    }
    try {
      return JSON.parse(_0x174a50);
    } catch (_0x2adb79) {
      return null;
    }
  });
}
function parseQuality(_0x396dd3) {
  var _0x43100e = String(_0x396dd3 || "");
  var _0x486994 = _0x43100e.match(/(2160|1080|720|480)\s*P/i);
  if (_0x486994) {
    return _0x486994[1] + "p";
  }
  if (/4K|UHD/i.test(_0x43100e)) {
    return "2160p";
  }
  if (/1440|2K/i.test(_0x43100e)) {
    return "1440p";
  }
  return "HD";
}
function extractSiteTitle(_0x2fd229) {
  var _0x2c5ad7 = _0x2fd229.match(/<title>(.*?)<\/title>/i);
  if (!_0x2c5ad7) {
    return "";
  }
  var _0x4f1f71 = _0x2c5ad7[1];
  var _0x140396 = _0x4f1f71.match(/Download\s+(.+?)\s+(?:In HD Free|Free Download)/i);
  if (_0x140396) {
    return _0x140396[1].trim();
  }
  var _0x2b9423 = _0x4f1f71.replace(/^(?:Download\s+)?/, "");
  _0x2b9423 = _0x2b9423.replace(/\s+(?:\d{3,4}p\b|4K\b|WEB-DL\b|BluRay\b|HDTV\b|x26[45]\b|HEVC\b|SDR\b|HDR\b|DD\d|DDP\d|Hindi|English|Dual\s*Audio|ESubs?)\b.*$/i, "");
  _0x2b9423 = _0x2b9423.replace(/\s*[-–|]\s*\w*\s*$/i, "").trim();
  _0x2b9423 = _0x2b9423.replace(/&#8211;/g, "–");
  return _0x2b9423 || _0x4f1f71;
}
function isStrictMatch(_0xb533fc, _0x37794f, _0x3ed59b, _0x69a91b) {
  if (!_0xb533fc || !_0x3ed59b) {
    return false;
  }
  var _0x3744c2 = _0xb533fc.toLowerCase().replace(/[^a-z0-9\s]/g, " ").trim().replace(/\s+/g, " ");
  var _0x190a24 = _0x3ed59b.toLowerCase().replace(/download\s*/g, "").replace(/[^a-z0-9\s]/g, " ").trim().replace(/\s+/g, " ");
  if (_0x190a24 !== _0x3744c2 && _0x190a24.indexOf(_0x3744c2 + " ") !== 0 && _0x190a24.indexOf(" " + _0x3744c2 + " ") === -1 && _0x190a24.indexOf(" " + _0x3744c2) !== _0x190a24.length - _0x3744c2.length - 1) {
    return false;
  }
  if (_0x37794f && _0x69a91b) {
    var _0x3233a9 = parseInt(_0x37794f);
    var _0x56c49a = parseInt(_0x69a91b);
    if (!isNaN(_0x3233a9) && !isNaN(_0x56c49a) && Math.abs(_0x3233a9 - _0x56c49a) > 1) {
      return false;
    }
  }
  return true;
}
function extractSeasonHtml(_0x5ac560, _0x566514) {
  if (!_0x5ac560 || _0x566514 == null) {
    return _0x5ac560;
  }
  var _0x113961 = new RegExp("(<h[1-6][^>]*>|<strong[^>]*>|<span[^>]*>)[\\s\\S]{0,100}?(?:Season|Saison|Staffel)\\s*0*(\\d+)\\b(?!\\s*[-–+&])", "gi");
  var _0x21acec;
  var _0x372c39 = [];
  while ((_0x21acec = _0x113961.exec(_0x5ac560)) !== null) {
    _0x372c39.push({
      index: _0x21acec.index,
      season: parseInt(_0x21acec[2])
    });
  }
  var _0x576883 = -1;
  var _0x1ab3de = -1;
  for (var _0x581f2c = 0; _0x581f2c < _0x372c39.length; _0x581f2c++) {
    if (_0x372c39[_0x581f2c].season === _0x566514) {
      if (_0x576883 === -1) {
        _0x576883 = _0x581f2c;
      }
    } else {
      _0x1ab3de = _0x581f2c;
    }
  }
  if (_0x576883 === -1) {
    var _0x20fbc1 = new RegExp("(<h[1-6][^>]*>|<strong[^>]*>).*?(?:Season|Saison|Staffel)\\s*0*(\\d+)\\s*[-–]\\s*0*(\\d+)", "gi");
    var _0x56990f;
    var _0x261f02 = -1;
    while ((_0x56990f = _0x20fbc1.exec(_0x5ac560)) !== null) {
      if (_0x566514 >= parseInt(_0x56990f[2]) && _0x566514 <= parseInt(_0x56990f[3])) {
        _0x261f02 = _0x56990f.index;
        break;
      }
    }
    if (_0x261f02 !== -1) {
      return _0x5ac560.substring(_0x261f02);
    }
    return null;
  }
  var _0x345501 = _0x372c39[_0x576883].index;
  if (_0x1ab3de > _0x576883) {
    for (var _0x502a7c = 0; _0x502a7c < _0x372c39.length; _0x502a7c++) {
      if (_0x372c39[_0x502a7c].season === _0x566514 && _0x502a7c > _0x1ab3de) {
        _0x345501 = _0x372c39[_0x502a7c].index;
        break;
      }
    }
  }
  var _0x54ce02 = _0x5ac560.length;
  for (var _0x502a7c = 0; _0x502a7c < _0x372c39.length; _0x502a7c++) {
    if (_0x372c39[_0x502a7c].index > _0x345501 && _0x372c39[_0x502a7c].season !== _0x566514) {
      _0x54ce02 = _0x372c39[_0x502a7c].index;
      break;
    }
  }
  return _0x5ac560.substring(_0x345501, _0x54ce02);
}
function getMedia(_0xe2c3dd, _0x2a6cb7) {
  return __async(this, null, function* () {
    var _0x57fd3c = String(_0xe2c3dd || "").trim();
    var _0x1456ef = _0x57fd3c.indexOf("tt") === 0;
    var _0xca889 = _0x2a6cb7 === "tv" || _0x2a6cb7 === "series" ? "tv" : "movie";
    try {
      if (_0x1456ef) {
        var _0xa008d7 = yield fetchJson("https://api.themoviedb.org/3/find/" + _0x57fd3c + "?api_key=" + TMDB_KEY + "&external_source=imdb_id", {}, 10000);
        var _0x2134b8 = _0xa008d7 ? _0xca889 === "tv" ? _0xa008d7.tv_results : _0xa008d7.movie_results : null;
        if (_0x2134b8 && _0x2134b8.length > 0) {
          var _0x3a0239 = _0x2134b8[0];
          return {
            title: _0xca889 === "tv" ? _0x3a0239.name : _0x3a0239.title,
            year: (_0x3a0239.first_air_date || _0x3a0239.release_date || "").split("-")[0],
            imdb: _0x57fd3c
          };
        }
      } else {
        var _0xa008d7 = yield fetchJson("https://api.themoviedb.org/3/" + _0xca889 + "/" + _0x57fd3c + "?api_key=" + TMDB_KEY + "&append_to_response=external_ids", {}, 10000);
        if (_0xa008d7) {
          return {
            title: _0xca889 === "tv" ? _0xa008d7.name : _0xa008d7.title,
            year: (_0xa008d7.first_air_date || _0xa008d7.release_date || "").split("-")[0],
            imdb: _0xa008d7.imdb_id || _0xa008d7.external_ids && _0xa008d7.external_ids.imdb_id || null
          };
        }
      }
    } catch (_0x97d4ff) {
      err("tmdb: " + _0x97d4ff.message);
    }
    return {
      title: _0x57fd3c,
      year: null,
      imdb: null
    };
  });
}
function searchSite(_0x584f2b) {
  return __async(this, null, function* () {
    var _0x1efebd = encodeURIComponent(_0x584f2b);
    var _0x1963c4 = MAIN_URL + "/search.php?q=" + _0x1efebd + "&per_page=10";
    var _0x49bf85 = yield fetchJson(_0x1963c4, {
      headers: {
        Referer: MAIN_URL + "/"
      }
    }, 10000);
    if (!_0x49bf85 || !_0x49bf85.hits || _0x49bf85.hits.length === 0) {
      log("search zero: " + _0x584f2b);
      return [];
    }
    var _0xced5e0 = [];
    for (var _0x3cfcca = 0; _0x3cfcca < _0x49bf85.hits.length; _0x3cfcca++) {
      var _0x328f7f = _0x49bf85.hits[_0x3cfcca].document;
      if (_0x328f7f && _0x328f7f.permalink && _0x328f7f.post_title) {
        var _0x179d76 = _0x328f7f.post_title.match(/\((\d{4})\)/);
        _0xced5e0.push({
          title: _0x328f7f.post_title,
          href: _0x328f7f.permalink,
          year: _0x179d76 ? parseInt(_0x179d76[1]) : null,
          imdb: _0x328f7f.imdb_id || null
        });
      }
    }
    log("search found " + _0xced5e0.length + " for: " + _0x584f2b);
    return _0xced5e0;
  });
}
function parsePage(_0x406542, _0x47ed2b, _0x24fd7a) {
  return __async(this, null, function* () {
    if (!_0x24fd7a) {
      _0x24fd7a = yield fetchText(_0x406542, {
        headers: {
          Referer: MAIN_URL + "/"
        }
      }, 12000);
    }
    if (!_0x24fd7a) {
      return [];
    }
    var _0x2a059a = _0x47ed2b != null;
    var _0x29a213 = _0x2a059a ? extractSeasonHtml(_0x24fd7a, _0x47ed2b) : _0x24fd7a;
    if (!_0x29a213) {
      log("season " + _0x47ed2b + " not found");
      return [];
    }
    var _0x566b48 = [];
    var _0x5a722c = /href="(https?:\/\/mdrive\.lol\/archive\/(\d+)[^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
    var _0x2c2fa4;
    while ((_0x2c2fa4 = _0x5a722c.exec(_0x29a213)) !== null) {
      var _0x2d747f = _0x2c2fa4[3].replace(/<[^>]+>/g, "").trim();
      if (_0x2a059a && /zip/i.test(_0x2d747f)) {
        continue;
      }
      var _0x3036ea = parseQuality(_0x2d747f);
      if (_0x3036ea === "480p") {
        continue;
      }
      var _0x98d50a = _0x2d747f.match(/\[([\d.]+)\s*(MB|GB|TB)\]/i);
      var _0x387921 = _0x98d50a ? _0x98d50a[0] : "";
      _0x566b48.push({
        id: _0x2c2fa4[2],
        url: _0x2c2fa4[1],
        label: _0x2d747f,
        q: _0x3036ea,
        size: _0x387921
      });
    }
    log("archive links: " + _0x566b48.length + (_0x2a059a ? " (season " + _0x47ed2b + ")" : ""));
    return _0x566b48;
  });
}
function parseArchive(_0xa6a5a6, _0x3ab89d) {
  return __async(this, null, function* () {
    var _0x5224e7 = yield fetchText(_0xa6a5a6, {
      headers: {
        Referer: MAIN_URL + "/"
      }
    }, 12000);
    if (!_0x5224e7) {
      return [];
    }
    var _0x5ace4c = [];
    var _0xd0433c = /https?:\/\/hubcloud\.[a-z]+\/drive\/([a-z0-9_]+)/gi;
    var _0x550f98;
    while ((_0x550f98 = _0xd0433c.exec(_0x5224e7)) !== null) {
      var _0x380246 = _0x550f98[0];
      var _0x2a30a2 = _0x3ab89d != null;
      if (_0x2a30a2) {
        var _0x382b98 = Math.max(0, _0x550f98.index - 300);
        var _0x44293c = _0x5224e7.substring(_0x382b98, _0x550f98.index);
        var _0x80fcaa = /(?:EP|Episode|E)\D*0*(\d+)/gi;
        var _0x217dfd;
        var _0x28a9de = -1;
        while ((_0x217dfd = _0x80fcaa.exec(_0x44293c)) !== null) {
          _0x28a9de = parseInt(_0x217dfd[1]);
        }
        if (_0x28a9de === -1 || _0x28a9de !== _0x3ab89d) {
          continue;
        }
      }
      _0x5ace4c.push({
        url: _0x380246,
        id: _0x550f98[1]
      });
    }
    log("archive hosts: " + _0x5ace4c.length + (_0x2a30a2 ? " (ep " + _0x3ab89d + ")" : ""));
    return _0x5ace4c;
  });
}
function minutes() {
  return String(new Date().getMinutes());
}
function decodeBase64(_0xe2369f) {
  if (typeof atob === "function") {
    return atob(_0xe2369f);
  }
  var _0x1ab2d5 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var _0x1786fe = "";
  _0xe2369f = String(_0xe2369f).replace(/=+$/, "");
  for (var _0x4732c9 = 0, _0x45a805, _0x53a936, _0x482c26 = 0; _0x53a936 = _0xe2369f.charAt(_0x482c26++); ~_0x53a936 && (_0x45a805 = _0x4732c9 % 4 ? _0x45a805 * 64 + _0x53a936 : _0x53a936, _0x4732c9++ % 4) ? _0x1786fe += String.fromCharCode(_0x45a805 >> (_0x4732c9 * -2 & 6) & 255) : 0) {
    _0x53a936 = _0x1ab2d5.indexOf(_0x53a936);
  }
  return _0x1786fe;
}
function resolveHubcloud(_0x4dd573, _0x428d98, _0x331aad) {
  return __async(this, null, function* () {
    var _0x199af7 = yield fetchText(_0x4dd573, {
      headers: {
        Cookie: "xla=s4t",
        Referer: ARCHIVE_DOMAIN + "/"
      }
    }, 12000);
    if (!_0x199af7) {
      return [];
    }
    var _0x42b9ca = null;
    var _0x3a1a84 = _0x199af7.match(/var\s+url\s*=\s*'([^']+)'/);
    if (_0x3a1a84) {
      _0x42b9ca = _0x3a1a84[1];
    }
    if (!_0x42b9ca) {
      var _0x10aac4 = _0x199af7.match(/<a\s+id="download"\s+(?:x-href|href)="([^"]+)"/);
      if (_0x10aac4) {
        _0x42b9ca = _0x10aac4[1];
        if (!_0x42b9ca.startsWith("http")) {
          try {
            _0x42b9ca = decodeBase64(_0x42b9ca);
          } catch (_0x58ff1f) {}
        }
      }
    }
    if (!_0x42b9ca) {
      return [];
    }
    var _0xe2b16e = yield fetchText(_0x42b9ca, {
      headers: {
        Cookie: "xla=s4t",
        Referer: _0x4dd573
      }
    }, 15000);
    if (!_0xe2b16e) {
      return [];
    }
    var _0x209921 = [];
    var _0x59d0d1;
    var _0x4f7fb0 = /href="(https?:\/\/fsl\.gigabytes\.icu[^"]+)"/gi;
    while ((_0x59d0d1 = _0x4f7fb0.exec(_0xe2b16e)) !== null) {
      _0x209921.push({
        type: "FSLv2",
        url: _0x59d0d1[1],
        quality: _0x428d98,
        size: _0x331aad || ""
      });
    }
    var _0x7730c7 = /href="(https?:\/\/(?:pub-[a-z0-9]+\.r2\.dev|[a-z0-9.]+\.buzz)[^"]+)"/gi;
    while ((_0x59d0d1 = _0x7730c7.exec(_0xe2b16e)) !== null) {
      _0x209921.push({
        type: "FSL",
        url: _0x59d0d1[1] + "1" + minutes(),
        quality: _0x428d98,
        size: _0x331aad || ""
      });
    }
    if (_0x209921.length === 0) {
      var _0x3ad7fb = _0xe2b16e.match(/https?:\/\/[^\s"'<>]+\?token=\d+/);
      if (_0x3ad7fb) {
        var _0x3f001f = _0x3ad7fb[0].replace(/["'].*$/, "").replace(/[<>].*$/, "");
        _0x209921.push({
          type: "FSL",
          url: _0x3f001f + "1" + minutes(),
          quality: _0x428d98,
          size: _0x331aad || ""
        });
      }
    }
    return _0x209921;
  });
}
function dedupe(_0x4dd699) {
  var _0x9af556 = {};
  return (_0x4dd699 || []).filter(function (_0x418fb5) {
    if (!_0x418fb5 || !_0x418fb5.url || _0x9af556[_0x418fb5.url]) {
      return false;
    }
    _0x9af556[_0x418fb5.url] = true;
    return true;
  });
}
function pad2(_0x24a137) {
  if (_0x24a137 != null && _0x24a137 < 10) {
    return "0" + _0x24a137;
  } else {
    return String(_0x24a137);
  }
}
function getStreams(_0x2a3884, _0x28c1fd, _0x227d6a, _0x5bfc9d) {
  return __async(this, null, function* () {
    try {
      log("request: id=" + _0x2a3884 + " type=" + _0x28c1fd + " s=" + _0x227d6a + " e=" + _0x5bfc9d);
      var _0x819c33 = yield getMedia(_0x2a3884, _0x28c1fd);
      if (!_0x819c33 || !_0x819c33.title) {
        return [];
      }
      var _0x2fb6f1 = _0x28c1fd === "tv" || _0x28c1fd === "series";
      var _0x3d3344 = _0x227d6a != null ? Number(_0x227d6a) : null;
      var _0x52f292 = _0x5bfc9d != null ? Number(_0x5bfc9d) : null;
      log("resolved: \"" + _0x819c33.title + "\" (" + (_0x819c33.year || "?") + ")");
      var _0x428f2b;
      var _0x134692;
      var _0x42834c = null;
      var _0x26e3de = null;
      if (_0x819c33.imdb && _0x819c33.imdb.indexOf("tt") === 0) {
        _0x428f2b = yield searchSite(_0x819c33.imdb);
        if (_0x2fb6f1 && _0x3d3344 != null) {
          for (_0x134692 = 0; _0x134692 < _0x428f2b.length; _0x134692++) {
            if (_0x428f2b[_0x134692].imdb !== _0x819c33.imdb) {
              continue;
            }
            var _0x412224 = _0x428f2b[_0x134692].href.indexOf("http") === 0 ? _0x428f2b[_0x134692].href : MAIN_URL + _0x428f2b[_0x134692].href;
            var _0x11c902 = yield fetchText(_0x412224, {
              headers: {
                Referer: MAIN_URL + "/"
              }
            }, 12000);
            if (_0x11c902 && extractSeasonHtml(_0x11c902, _0x3d3344) !== null) {
              _0x42834c = _0x428f2b[_0x134692];
              _0x26e3de = _0x11c902;
              log("imdb season match: " + _0x42834c.title);
              break;
            }
          }
        } else {
          for (_0x134692 = 0; _0x134692 < _0x428f2b.length; _0x134692++) {
            if (_0x428f2b[_0x134692].imdb === _0x819c33.imdb) {
              _0x42834c = _0x428f2b[_0x134692];
              log("imdb exact match: " + _0x42834c.title);
              break;
            }
          }
        }
      }
      if (!_0x42834c) {
        _0x428f2b = yield searchSite(_0x819c33.title);
        for (_0x134692 = 0; _0x134692 < _0x428f2b.length; _0x134692++) {
          if (isStrictMatch(_0x819c33.title, _0x819c33.year, _0x428f2b[_0x134692].title, _0x428f2b[_0x134692].year)) {
            var _0x412224 = _0x428f2b[_0x134692].href.indexOf("http") === 0 ? _0x428f2b[_0x134692].href : MAIN_URL + _0x428f2b[_0x134692].href;
            var _0x11c902 = yield fetchText(_0x412224, {
              headers: {
                Referer: MAIN_URL + "/"
              }
            }, 12000);
            if (!_0x2fb6f1 || extractSeasonHtml(_0x11c902, _0x3d3344) !== null) {
              _0x42834c = _0x428f2b[_0x134692];
              _0x26e3de = _0x11c902;
              log("title match: " + _0x42834c.title);
              break;
            }
          }
        }
      }
      if (!_0x42834c) {
        log("no match");
        return [];
      }
      if (!_0x26e3de) {
        var _0x24e49c = _0x42834c.href.indexOf("http") === 0 ? _0x42834c.href : MAIN_URL + _0x42834c.href;
        _0x26e3de = yield fetchText(_0x24e49c, {
          headers: {
            Referer: MAIN_URL + "/"
          }
        }, 12000);
        if (!_0x26e3de) {
          return [];
        }
      }
      var _0x21f3d7 = extractSiteTitle(_0x26e3de);
      var _0x40e3a9 = "";
      if (_0x2fb6f1) {
        _0x40e3a9 = (_0x21f3d7 || _0x819c33.title) + " [S" + pad2(_0x3d3344) + "E" + pad2(_0x52f292) + "]";
      }
      var _0xa65ed2 = yield parsePage(_0x42834c.href.indexOf("http") === 0 ? _0x42834c.href : MAIN_URL + _0x42834c.href, _0x3d3344, _0x26e3de);
      _0xa65ed2 = _0xa65ed2.filter(function (_0x5e6ed8) {
        return _0x5e6ed8.q !== "480p";
      });
      if (_0xa65ed2.length === 0) {
        log("no 720p/1080p/4k archives");
        return [];
      }
      log("processing " + _0xa65ed2.length + " archive links");
      var _0x5659f3 = [];
      for (var _0x501c90 = 0; _0x501c90 < _0xa65ed2.length; _0x501c90++) {
        var _0x27241b = _0xa65ed2[_0x501c90];
        try {
          var _0x44efc1 = yield parseArchive(_0x27241b.url, _0x52f292);
          _0x44efc1.forEach(function (_0x549e3d) {
            _0x5659f3.push({
              url: _0x549e3d.url,
              q: _0x27241b.q,
              size: _0x27241b.size
            });
          });
        } catch (_0x2d0834) {}
      }
      if (_0x5659f3.length === 0) {
        log("no hubcloud hosts");
        return [];
      }
      log("resolving " + _0x5659f3.length + " hubcloud links");
      var _0x44fb69 = [];
      for (var _0x501c90 = 0; _0x501c90 < _0x5659f3.length; _0x501c90++) {
        var _0x5d8e6c = _0x5659f3[_0x501c90];
        try {
          var _0x371a65 = yield resolveHubcloud(_0x5d8e6c.url, _0x5d8e6c.q, _0x5d8e6c.size);
          _0x44fb69.push(_0x371a65);
        } catch (_0x175d6c) {}
      }
      var _0x29681a = [];
      _0x44fb69.forEach(function (_0x112da0) {
        _0x112da0.forEach(function (_0x205843) {
          _0x29681a.push(_0x205843);
        });
      });
      if (_0x29681a.length === 0) {
        log("no FSL streams resolved");
        return [];
      }
      var _0x534ec5 = _0x2fb6f1 && _0x40e3a9 ? _0x40e3a9 : _0x21f3d7;
      var _0x54d3a2 = [];
      _0x29681a.forEach(function (_0x3ef4f1) {
        var _0x36cef2 = _0x3ef4f1.size ? " " + _0x3ef4f1.size : "";
        var _0x3e9e1b = _0x534ec5 + " - " + PROVIDER_NAME;
        _0x54d3a2.push({
          name: _0x3e9e1b,
          title: "Auto",
          url: _0x3ef4f1.url,
          quality: _0x3ef4f1.quality,
          size: "(" + _0x3ef4f1.type + ")" + _0x36cef2,
          behaviorHints: {
            notWebReady: true,
            proxyHeaders: {
              request: {
                Referer: ARCHIVE_DOMAIN + "/"
              }
            }
          }
        });
      });
      _0x54d3a2 = dedupe(_0x54d3a2);
      var _0x58219d = {
        "2160p": 4,
        "1080p": 3,
        "720p": 2,
        HD: 1
      };
      _0x54d3a2.sort(function (_0x5cdca8, _0x3686ac) {
        function _0x3747aa(_0x1b6fd2) {
          if (_0x1b6fd2.indexOf("(FSLv2)") !== -1) {
            return 1;
          } else {
            return 0;
          }
        }
        var _0x43896f = _0x3747aa(_0x5cdca8.name);
        var _0x5b465e = _0x3747aa(_0x3686ac.name);
        if (_0x43896f !== _0x5b465e) {
          return _0x5b465e - _0x43896f;
        }
        return (_0x58219d[_0x3686ac.quality] || 0) - (_0x58219d[_0x5cdca8.quality] || 0);
      });
      log("returning " + _0x54d3a2.length + " streams");
      return _0x54d3a2;
    } catch (_0x175a0c) {
      err("fatal: " + _0x175a0c.message);
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