var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (_0x26f74f, _0x2b7d43, _0x54d530) => _0x2b7d43 in _0x26f74f ? __defProp(_0x26f74f, _0x2b7d43, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x54d530
}) : _0x26f74f[_0x2b7d43] = _0x54d530;
var __spreadValues = (_0x28d887, _0xa839ba) => {
  for (var _0x21e30e in _0xa839ba ||= {}) {
    if (__hasOwnProp.call(_0xa839ba, _0x21e30e)) {
      __defNormalProp(_0x28d887, _0x21e30e, _0xa839ba[_0x21e30e]);
    }
  }
  if (__getOwnPropSymbols) {
    for (var _0x21e30e of __getOwnPropSymbols(_0xa839ba)) {
      if (__propIsEnum.call(_0xa839ba, _0x21e30e)) {
        __defNormalProp(_0x28d887, _0x21e30e, _0xa839ba[_0x21e30e]);
      }
    }
  }
  return _0x28d887;
};
var __async = (_0x1782df, _0x3f766e, _0x3d0a87) => {
  return new Promise((_0x4b9a81, _0x3af23d) => {
    var _0x585f90 = _0x4ba4b6 => {
      try {
        _0xc4c79d(_0x3d0a87.next(_0x4ba4b6));
      } catch (_0x4855cd) {
        _0x3af23d(_0x4855cd);
      }
    };
    var _0x58d72c = _0xca6ebb => {
      try {
        _0xc4c79d(_0x3d0a87.throw(_0xca6ebb));
      } catch (_0xa1dbd5) {
        _0x3af23d(_0xa1dbd5);
      }
    };
    var _0xc4c79d = _0x3aa334 => _0x3aa334.done ? _0x4b9a81(_0x3aa334.value) : Promise.resolve(_0x3aa334.value).then(_0x585f90, _0x58d72c);
    _0xc4c79d((_0x3d0a87 = _0x3d0a87.apply(_0x1782df, _0x3f766e)).next());
  });
};
var PROVIDER_NAME = "4kHDHub";
var TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
var DOMAINS_JSON_URL = "https://raw.githubusercontent.com/PirateZoro9/asura-providers/main/urls.json";
var TIMEOUT = 12000;
var baseUrl = "https://4khdhub.one";
var cachedDomains = null;
var domainCacheTime = 0;
var DOMAIN_CACHE_TTL = 14400000;
var MOBILE_UAS = ["Mozilla/5.0 (Linux; Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 13; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"];
var sessionUA = MOBILE_UAS[0];
function refreshDomains() {
  return __async(this, null, function* () {
    if (cachedDomains && Date.now() - domainCacheTime < DOMAIN_CACHE_TTL) {
      return;
    }
    try {
      const _0x504f0f = yield fetch(DOMAINS_JSON_URL, {
        headers: {
          "User-Agent": "Mozilla/5.0"
        }
      });
      if (_0x504f0f && _0x504f0f.ok) {
        const _0x37e3a1 = yield _0x504f0f.json();
        if (_0x37e3a1 && _0x37e3a1["4khdhub"]) {
          cachedDomains = _0x37e3a1;
          domainCacheTime = Date.now();
          baseUrl = _0x37e3a1["4khdhub"];
        }
      }
    } catch (_0x29cc82) {}
  });
}
function getHeaders(_0x462ba1 = {}) {
  return __spreadValues({
    "User-Agent": sessionUA,
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9"
  }, _0x462ba1);
}
function fetchWithTimeout(_0x2d3c3f) {
  return __async(this, arguments, function* (_0x40301f, _0x49a37b = {}, _0x1bf9f2 = TIMEOUT) {
    const _0x35b90a = __spreadValues({}, _0x49a37b);
    if (!_0x35b90a.headers) {
      _0x35b90a.headers = getHeaders();
    }
    return Promise.race([fetch(_0x40301f, _0x35b90a), new Promise((_0x2d8f42, _0x522de5) => setTimeout(() => _0x522de5(new Error("Timeout")), _0x1bf9f2))]);
  });
}
function fetchText(_0x2eb381, _0x4c2313) {
  return __async(this, null, function* () {
    try {
      const _0x5685fc = yield fetchWithTimeout(_0x2eb381, _0x4c2313);
      if (_0x5685fc && _0x5685fc.ok) {
        return yield _0x5685fc.text();
      }
      return null;
    } catch (_0x5672a8) {
      return null;
    }
  });
}
function fetchJson(_0x5c764f, _0x3c1a2c) {
  return __async(this, null, function* () {
    try {
      const _0x10bf9e = yield fetchWithTimeout(_0x5c764f, _0x3c1a2c);
      if (_0x10bf9e && _0x10bf9e.ok) {
        return yield _0x10bf9e.json();
      }
      return null;
    } catch (_0x5a784a) {
      return null;
    }
  });
}
function base64Decode(_0x528242) {
  if (typeof atob === "function") {
    return atob(_0x528242);
  }
  const _0x1dc896 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let _0x33eec2 = "";
  let _0x2f579b = 0;
  _0x528242 = String(_0x528242 || "").replace(/[^A-Za-z0-9\+\/\=]/g, "");
  while (_0x2f579b < _0x528242.length) {
    const _0x182102 = _0x1dc896.indexOf(_0x528242.charAt(_0x2f579b++));
    const _0x2efa2c = _0x1dc896.indexOf(_0x528242.charAt(_0x2f579b++));
    const _0x11ce60 = _0x1dc896.indexOf(_0x528242.charAt(_0x2f579b++));
    const _0x3392c9 = _0x1dc896.indexOf(_0x528242.charAt(_0x2f579b++));
    _0x33eec2 += String.fromCharCode(_0x182102 << 2 | _0x2efa2c >> 4);
    if (_0x11ce60 !== 64) {
      _0x33eec2 += String.fromCharCode((_0x2efa2c & 15) << 4 | _0x11ce60 >> 2);
    }
    if (_0x3392c9 !== 64) {
      _0x33eec2 += String.fromCharCode((_0x11ce60 & 3) << 6 | _0x3392c9);
    }
  }
  return _0x33eec2;
}
function getTMDBInfo(_0x171b15, _0x5dd554) {
  return __async(this, null, function* () {
    var _0x4464be;
    const _0x2c8ce5 = _0x5dd554 === "tv" || _0x5dd554 === "series" ? "tv" : "movie";
    let _0x156653 = "";
    let _0x6a7e2f = "";
    let _0x158e04 = "";
    try {
      if (_0x2c8ce5 === "tv") {
        const _0x513d52 = yield fetchJson("https://api.themoviedb.org/3/tv/" + _0x171b15 + "?api_key=" + TMDB_API_KEY + "&append_to_response=external_ids");
        if (_0x513d52) {
          _0x156653 = _0x513d52.name;
          _0x6a7e2f = (_0x513d52.first_air_date || "").split("-")[0];
          _0x158e04 = ((_0x4464be = _0x513d52.external_ids) == null ? undefined : _0x4464be.imdb_id) || "";
        }
      } else {
        const _0x2cab4a = yield fetchJson("https://api.themoviedb.org/3/movie/" + _0x171b15 + "?api_key=" + TMDB_API_KEY);
        if (_0x2cab4a) {
          _0x156653 = _0x2cab4a.title;
          _0x6a7e2f = (_0x2cab4a.release_date || "").split("-")[0];
          _0x158e04 = _0x2cab4a.imdb_id || "";
        }
      }
    } catch (_0x89f67c) {}
    return {
      title: _0x156653,
      year: _0x6a7e2f,
      imdbId: _0x158e04,
      type: _0x2c8ce5
    };
  });
}
function searchSite(_0x2d47bd, _0x524810, _0xf0d270, _0x32ab39) {
  return __async(this, null, function* () {
    var _0x321132;
    var _0x4e9361;
    if (_0xf0d270) {
      try {
        const _0x30f9a1 = baseUrl + "/wp-json/wp/v2/posts?search=" + _0xf0d270;
        const _0x259069 = yield fetchJson(_0x30f9a1);
        if (_0x259069 && _0x259069.length > 0) {
          return {
            url: _0x259069[0].link,
            title: ((_0x321132 = _0x259069[0].title) == null ? undefined : _0x321132.rendered) || _0x2d47bd,
            content: ((_0x4e9361 = _0x259069[0].content) == null ? undefined : _0x4e9361.rendered) || ""
          };
        }
      } catch (_0x2b8d7e) {}
    }
    const _0x1efa4b = baseUrl + "/?s=" + encodeURIComponent(_0x2d47bd);
    const _0x42c32a = yield fetchText(_0x1efa4b);
    if (!_0x42c32a) {
      return null;
    }
    const _0x53891b = _0x42c32a.split("id=\"main\"")[1] || _0x42c32a;
    const _0x526609 = /href="(https?:\/\/[^"\/]+)?(\/[^"]+)"/g;
    let _0x19847f = null;
    const _0x48d745 = _0x2d47bd.toLowerCase().replace(/[^a-z0-9]/g, "");
    let _0x5f1b74;
    while ((_0x5f1b74 = _0x526609.exec(_0x53891b)) !== null) {
      const _0x531ab4 = _0x5f1b74[1] || "";
      let _0x1ca9e6 = _0x5f1b74[2];
      if (_0x531ab4 && !_0x531ab4.includes("4khdhub")) {
        continue;
      }
      if (_0x1ca9e6.includes("/category/") || _0x1ca9e6.includes("?")) {
        continue;
      }
      const _0x590efd = _0x1ca9e6.includes("-series-");
      const _0x4e4494 = _0x1ca9e6.includes("-movie-");
      if (_0x32ab39 && !_0x590efd) {
        continue;
      }
      if (!_0x32ab39 && !_0x4e4494) {
        continue;
      }
      const _0x185fd6 = _0x1ca9e6.split("/").filter(Boolean).pop().split("-");
      const _0x486688 = _0x185fd6.filter(_0x2391e8 => _0x2391e8 !== "movie" && _0x2391e8 !== "series" && !/^\d+$/.test(_0x2391e8)).join("");
      const _0x17a635 = _0x486688.toLowerCase().replace(/[^a-z0-9]/g, "");
      if (_0x17a635.includes(_0x48d745) || _0x48d745.includes(_0x17a635)) {
        const _0x2380d0 = _0x53891b.substring(_0x5f1b74.index, _0x5f1b74.index + 300);
        const _0x48c316 = _0x2380d0.match(/\b(19\d{2}|20\d{2})\b/);
        const _0x254034 = _0x48c316 ? _0x48c316[1] : null;
        const _0x269979 = _0x524810 && _0x254034 === _0x524810;
        if (!_0x19847f || _0x269979) {
          _0x19847f = {
            url: baseUrl + _0x1ca9e6,
            title: _0x2d47bd
          };
          if (_0x269979) {
            break;
          }
        }
      }
    }
    return _0x19847f;
  });
}
function extractHubcloudLinks(_0x26e3a7, _0x58e207, _0x3d0c7e, _0x279297) {
  const _0x2b2422 = [];
  let _0x4baecc = _0x26e3a7;
  if (_0x279297) {
    const _0x33c0a9 = _0x26e3a7.indexOf("id=\"episodes\"") > -1 ? _0x26e3a7.indexOf("id=\"episodes\"") : _0x26e3a7.indexOf("data-tab=\"episodes\"") > -1 ? _0x26e3a7.indexOf("data-tab=\"episodes\"") : -1;
    if (_0x33c0a9 > -1) {
      _0x4baecc = _0x26e3a7.substring(_0x33c0a9);
      const _0x60f4cd = _0x4baecc.indexOf("id=\"complete-pack\"");
      if (_0x60f4cd > -1) {
        _0x4baecc = _0x4baecc.substring(0, _0x60f4cd);
      }
    }
  }
  const _0x5d2f2d = /https?:\/\/hubcloud\.[a-z0-9]+\/drive\/[a-z0-9]+/ig;
  let _0x297cb5;
  while ((_0x297cb5 = _0x5d2f2d.exec(_0x4baecc)) !== null) {
    const _0x1eb191 = _0x297cb5[0];
    const _0xdd13c3 = _0x297cb5.index;
    const _0x370975 = _0x4baecc.substring(Math.max(0, _0xdd13c3 - 1500), _0xdd13c3);
    if (_0x279297) {
      const _0x1ac2c6 = _0x370975.match(/S0*(\d+)[.\s_\-]*E0*(\d+)/i) || _0x370975.match(/Episode\s*0*(\d+)/i);
      if (_0x1ac2c6) {
        let _0x46c2ab = _0x58e207;
        let _0x123748 = _0x3d0c7e;
        if (_0x1ac2c6[2]) {
          _0x46c2ab = parseInt(_0x1ac2c6[1]);
          _0x123748 = parseInt(_0x1ac2c6[2]);
        } else {
          _0x123748 = parseInt(_0x1ac2c6[1]);
        }
        if (_0x46c2ab !== _0x58e207 || _0x123748 !== _0x3d0c7e) {
          continue;
        }
      } else {
        continue;
      }
    }
    const _0xf55678 = _0x370975.match(/(2160|1080|720|480)\s*p/i) || _0x370975.match(/(4K|UHD)/i);
    let _0x348a1b = "HD";
    if (_0xf55678) {
      _0x348a1b = _0xf55678[1].toUpperCase() === "4K" || _0xf55678[1].toUpperCase() === "UHD" ? "2160P" : _0xf55678[1].toUpperCase() + "P";
    }
    if (_0x348a1b === "480P") {
      continue;
    }
    const _0x406e60 = _0x370975.match(/(?:^|[\s>])(\d+\.?\d*)\s*(GB|MB)\b/i);
    const _0x234458 = _0x406e60 ? _0x406e60[1] + " " + _0x406e60[2] : "";
    _0x2b2422.push({
      url: _0x1eb191,
      quality: _0x348a1b,
      size: _0x234458
    });
  }
  return _0x2b2422;
}
function makeStream(_0xd916aa, _0x96e8ff, _0x56c5ea, _0x4bffb3, _0x108932, _0x4095e5, _0xe10dcd) {
  var _0x24609e = _0x4bffb3 ? _0x4bffb3.toLowerCase() : "1080p";
  var _0x5f4861 = _0x56c5ea.replace(/ /g, "%20");
  var _0x31652c = String(_0xd916aa || "").replace(/\./g, " ");
  var _0x2cb7e5 = String(_0x96e8ff || "").replace(/\./g, " ");
  var _0x11b41f = (_0x31652c + " " + _0x2cb7e5 + " " + _0x5f4861).toLowerCase();
  var _0x1e3cce = _0x11b41f.replace(/[\s\.]+/g, "");
  var _0x3f6552 = "Dual-Audio";
  var _0x4b770d = /\bhindi\b/i.test(_0x11b41f);
  var _0x10add2 = /\b(english|eng)\b/i.test(_0x11b41f);
  var _0x2440d1 = /\btamil\b/i.test(_0x11b41f);
  var _0x5a59c4 = /\btelugu\b/i.test(_0x11b41f);
  var _0x32e388 = 0;
  if (_0x4b770d) {
    _0x32e388++;
  }
  if (_0x10add2) {
    _0x32e388++;
  }
  if (_0x2440d1) {
    _0x32e388++;
  }
  if (_0x5a59c4) {
    _0x32e388++;
  }
  if (/\b(multi|multi-audio|multi\.audio)\b/i.test(_0x11b41f) || _0x32e388 >= 3) {
    _0x3f6552 = "Multi-Audio";
  } else if (/\b(dual|dual-audio|dual\.audio|dubbed)\b/i.test(_0x11b41f) || _0x32e388 === 2) {
    _0x3f6552 = "Dual-Audio";
  } else if (_0x32e388 === 1) {
    if (_0x4b770d) {
      _0x3f6552 = "Hindi";
    } else if (_0x2440d1) {
      _0x3f6552 = "Tamil";
    } else if (_0x5a59c4) {
      _0x3f6552 = "Telugu";
    } else if (_0x10add2) {
      _0x3f6552 = "English";
    }
  }
  var _0x3465b8 = _0x31652c;
  var _0x2105ef = "";
  var _0x4d43c9 = _0x31652c.match(/\b(S\d{1,2}\s*E\d{1,2})\b/i);
  if (_0x4d43c9) {
    _0x2105ef = " | " + _0x4d43c9[1].toUpperCase().replace(/\s+/g, "");
    var _0x568189 = _0x31652c.toLowerCase().indexOf(_0x4d43c9[0].toLowerCase());
    if (_0x568189 > 0) {
      _0x3465b8 = _0x31652c.substring(0, _0x568189);
    }
  }
  var _0xea695a = "";
  var _0xe9f3d2 = _0x3465b8.match(/\b(19|20)\d{2}\b/);
  if (_0xe9f3d2) {
    _0xea695a = _0xe9f3d2[0];
    var _0x1ef271 = _0x3465b8.indexOf(_0xea695a);
    if (_0x1ef271 > 0) {
      _0x3465b8 = _0x3465b8.substring(0, _0x1ef271);
    }
  }
  _0x3465b8 = _0x3465b8.replace(/AMZN|WEB-DL|AVC|x264|x265|HEVC|STAN|WEBRip|SDR|10bit/gi, "").replace(/[-_()\[\]|]/g, " ").replace(/\s+/g, " ").trim();
  _0x3465b8 = _0x3465b8.replace(/\b\w/g, function (_0x36149b) {
    return _0x36149b.toUpperCase();
  });
  var _0xfc3325 = _0x24609e.toUpperCase();
  var _0x2a866c = _0x24609e === "2160p" || _0x24609e.includes("4k") ? "🌟" : "💎";
  var _0x57421d = _0x2a866c + " " + _0xfc3325 + " | 🌍 " + _0x3f6552 + " | 💾 " + (_0xe10dcd || "N/A");
  var _0x28ea84 = "";
  var _0x275af4 = false;
  if (/\b(hdr10\+|hdr10p)\b/i.test(_0x11b41f)) {
    _0x28ea84 = "HDR10+";
    _0x275af4 = true;
  } else if (/\bhdr10\b/i.test(_0x11b41f)) {
    _0x28ea84 = "HDR10";
    _0x275af4 = true;
  } else if (/\bhdr\b/i.test(_0x11b41f)) {
    _0x28ea84 = "HDR";
    _0x275af4 = true;
  } else if (/\bsdr\b/i.test(_0x11b41f)) {
    _0x28ea84 = "SDR";
    _0x275af4 = true;
  }
  var _0x56ca66 = /\b10bit\b/i.test(_0x11b41f) ? "🔆 10Bit" : "";
  var _0x5050a5 = /\b(dv|dolby\s*vision)\b/i.test(_0x11b41f) ? "🕵️‍♀️ DV" : "";
  var _0x3797c8 = /\bbluray\b/i.test(_0x11b41f);
  var _0x20fe35 = "x264";
  if (/\b(hevc|x265|265)\b/i.test(_0x11b41f) || _0x24609e === "2160p") {
    _0x20fe35 = "HEVC x265";
  }
  var _0x187794 = [];
  if (_0x28ea84) {
    _0x187794.push(_0x28ea84);
  }
  if (_0x56ca66) {
    _0x187794.push(_0x56ca66);
  }
  var _0xac5c60 = _0x187794.join(" • ");
  var _0x4a3d6d = [];
  if (_0x3797c8) {
    _0x4a3d6d.push("📀 BluRay");
  }
  if (_0x5050a5) {
    _0x4a3d6d.push(_0x5050a5);
  }
  var _0x24bd71 = _0x4a3d6d.join(" • ");
  var _0x13edff = [];
  if (_0xac5c60) {
    _0x13edff.push(_0xac5c60);
  }
  if (_0x24bd71) {
    _0x13edff.push(_0x24bd71);
  }
  var _0x44144b = "";
  if (_0x13edff.length > 0) {
    var _0x3ac793 = _0x275af4 ? "⚡ " : "";
    _0x44144b = _0x3ac793 + _0x13edff.join(" | ") + " | 🎥 " + _0x20fe35;
  } else {
    _0x44144b = "🎥 " + _0x20fe35;
  }
  var _0x41c029 = "🎞️ MKV";
  if (/\bmp4\b/i.test(_0x11b41f) || _0x5f4861.toLowerCase().split("?")[0].endsWith(".mp4")) {
    _0x41c029 = "🎞️ MP4";
  }
  var _0x435a82 = "DDP 5.1";
  var _0xce79bb = /\batmos\b/i.test(_0x11b41f);
  if (_0x1e3cce.indexOf("ddp51") !== -1 && _0x1e3cce.indexOf("truehd") !== -1 && _0x1e3cce.indexOf("71") !== -1) {
    _0x435a82 = "DDP 5.1 + TrueHD 7.1";
    _0xce79bb = true;
  } else if (_0x1e3cce.indexOf("ddp51") !== -1 && _0x1e3cce.indexOf("ddp71") !== -1) {
    _0x435a82 = "DDP 5.1 + DDP 7.1";
  } else if (_0x1e3cce.indexOf("ddp51") !== -1 && _0x1e3cce.indexOf("aac71") !== -1) {
    _0x435a82 = "DDP 5.1 + AAC 7.1";
  } else if (_0x1e3cce.indexOf("ddp51") !== -1) {
    _0x435a82 = "DDP 5.1";
  } else if (_0x1e3cce.indexOf("truehd") !== -1) {
    _0x435a82 = "TrueHD 7.1";
  } else if (_0x1e3cce.indexOf("aac") !== -1) {
    _0x435a82 = _0x1e3cce.indexOf("71") !== -1 ? "AAC 7.1" : "AAC 5.1";
  } else {
    _0x435a82 = "DDP 5.1";
  }
  var _0x3ac51d = _0xce79bb ? " • 🔊 Atmos" : "";
  var _0x194841 = _0x41c029 + " | 🎧 " + _0x435a82 + _0x3ac51d + " |";
  var _0x47e734 = "WEB-DL";
  if (_0x3797c8) {
    _0x47e734 = "BluRay";
  } else if (/\b(webrip|hdrip)\b/i.test(_0x11b41f)) {
    _0x47e734 = "WEB-Rip";
  }
  var _0x31a29c = /\bimax\b/i.test(_0x11b41f) ? " | 👁️ iMAX" : "";
  var _0x4c68e3 = "🔗 " + (_0x108932 || "Worker") + " | ☁️ " + _0x47e734 + _0x31a29c;
  var _0x8b7a5d = PROVIDER_NAME + " | " + _0xfc3325 + " | " + _0x3f6552;
  var _0x180ae9 = "🎬 " + _0x3465b8 + (_0xea695a ? " - (" + _0xea695a + ")" : "") + _0x2105ef + "\n" + _0x57421d + "\n" + _0x44144b + "\n" + _0x194841 + "\n" + _0x4c68e3;
  var _0xa164b2 = {
    name: _0x8b7a5d,
    title: _0x180ae9,
    size: _0x180ae9,
    url: _0x5f4861,
    behaviorHints: {
      notWebReady: true,
      proxyHeaders: {
        request: {
          Referer: _0x4095e5 || "https://4khdhub.one/"
        }
      }
    }
  };
  try {
    Object.defineProperties(_0xa164b2, {
      qualityTag: {
        get: function () {
          return "";
        },
        enumerable: true,
        configurable: true
      },
      quality: {
        get: function () {
          return "\b";
        },
        enumerable: true,
        configurable: true
      },
      language: {
        get: function () {
          return "";
        },
        enumerable: true,
        configurable: true
      }
    });
  } catch (_0x27d711) {}
  return _0xa164b2;
}
function resolveHubCloud(_0x2636ac, _0x3cbc23) {
  return __async(this, null, function* () {
    const _0x531b5c = [];
    const {
      url: _0x2077ac,
      quality: _0x70c5a2,
      size: _0x42fb51
    } = _0x2636ac;
    try {
      const _0x2dc6c1 = yield fetchText(_0x2077ac, {
        headers: getHeaders({
          Referer: baseUrl + "/"
        })
      });
      if (!_0x2dc6c1) {
        return _0x531b5c;
      }
      let _0x16e91e = null;
      const _0x389e73 = _0x2dc6c1.match(/href="([^"]+gamerxyt\.com[^"]+)"/i);
      if (_0x389e73) {
        _0x16e91e = _0x389e73[1].replace(/&amp;/g, "&");
      }
      if (!_0x16e91e) {
        const _0x4cfad2 = _0x2dc6c1.match(/x-href="([^"]+)"/i);
        if (_0x4cfad2) {
          try {
            const _0x49b85b = base64Decode(_0x4cfad2[1]);
            if (_0x49b85b.includes("gamerxyt.com")) {
              _0x16e91e = _0x49b85b;
            }
          } catch (_0x942597) {}
        }
      }
      let _0x13b209 = _0x2dc6c1;
      if (_0x16e91e) {
        const _0x1be072 = yield fetchText(_0x16e91e, {
          headers: getHeaders({
            Referer: _0x2077ac
          })
        });
        if (_0x1be072) {
          _0x13b209 = _0x1be072;
        }
      }
      const _0x47bdc9 = _0x13b209.match(/<div[^>]*class=['"][^'"]*card-header[^'"]*['"][^>]*>([^<]+)</i);
      let _0x90e921 = _0x47bdc9 ? _0x47bdc9[1].trim() : _0x3cbc23;
      _0x90e921 = _0x90e921.replace(/\.(mkv|mp4|avi|rar|zip)$/i, "");
      var _0x5d3819 = _0x42fb51 || "";
      var _0x1ece6e = _0x13b209.match(/<td[^>]*>\s*File\s*Size\s*:\s*<\/td>\s*<td[^>]*>\s*([\d\.]+\s*[MGBtbi]+)\s*<\/td>/i);
      if (!_0x1ece6e) {
        _0x1ece6e = _0x13b209.match(/Size\s*:\s*<\/strong>\s*([\d\.]+\s*[MGBtbi]+)/i);
      }
      if (_0x1ece6e) {
        _0x5d3819 = _0x1ece6e[1].trim();
      }
      const _0x6dc57 = /href="([^"]+)"[^>]*id="([^"]+)"/gi;
      let _0xf79982;
      while ((_0xf79982 = _0x6dc57.exec(_0x13b209)) !== null) {
        let _0x19fc14 = _0xf79982[1];
        const _0x35c7e0 = _0xf79982[2].toLowerCase();
        if (_0x19fc14.includes(".zip") || _0x19fc14.includes(".rar") || _0x19fc14.startsWith("#")) {
          continue;
        }
        let _0x4351c1 = "";
        if (_0x35c7e0 === "fsl" || _0x19fc14.includes("fsl")) {
          _0x4351c1 = "FSL";
        } else if (_0x35c7e0 === "s3" || _0x19fc14.includes("fslv2")) {
          _0x4351c1 = "FSLv2";
        } else if (_0x19fc14.includes(".workers.dev")) {
          _0x4351c1 = "Worker";
        }
        if (_0x4351c1) {
          if (_0x4351c1 === "FSL" && !_0x19fc14.includes("?s=")) {
            _0x19fc14 += (_0x19fc14.includes("?") ? "&" : "?") + "s=" + (1 + new Date().getMinutes());
          }
          _0x531b5c.push(makeStream(_0x90e921, _0x4351c1, _0x19fc14, _0x70c5a2, _0x4351c1, _0x16e91e || _0x2077ac, _0x5d3819));
        }
      }
      const _0x436b83 = /href="(https?:\/\/[^"']*?\.workers\.[a-z]+\/[^"']*)"/gi;
      let _0x3fd130;
      while ((_0x3fd130 = _0x436b83.exec(_0x13b209)) !== null) {
        let _0x2c4766 = _0x3fd130[1].replace(/&amp;/g, "&");
        if (_0x2c4766.includes(".zip") || _0x2c4766.includes(".rar") || _0x2c4766.startsWith("#")) {
          continue;
        }
        if (_0x2c4766.includes("pixel.hubcloud")) {
          continue;
        }
        if (_0x531b5c.some(_0x5984e0 => _0x5984e0.url === _0x2c4766)) {
          continue;
        }
        _0x531b5c.push(makeStream(_0x90e921, "Worker", _0x2c4766, _0x70c5a2, "Worker", _0x16e91e || _0x2077ac, _0x5d3819));
      }
    } catch (_0x270e52) {}
    return _0x531b5c;
  });
}
function getStreams(_0x1de68b, _0x530760, _0x9046de, _0x2b16fb) {
  return __async(this, null, function* () {
    sessionUA = MOBILE_UAS[Math.floor(Math.random() * MOBILE_UAS.length)];
    yield refreshDomains();
    const _0x3465e9 = _0x530760 === "tv" || _0x530760 === "series";
    let _0x4a7ecf = [];
    try {
      const _0x5575fb = yield getTMDBInfo(_0x1de68b, _0x530760);
      if (!_0x5575fb.title) {
        return _0x4a7ecf;
      }
      const _0x76907a = _0x5575fb.title + (_0x3465e9 ? " S" + (_0x9046de == null ? undefined : _0x9046de.toString().padStart(2, "0")) + "E" + (_0x2b16fb == null ? undefined : _0x2b16fb.toString().padStart(2, "0")) : "");
      console.log("[" + PROVIDER_NAME + "] Request: " + _0x76907a);
      const _0x39330b = yield searchSite(_0x5575fb.title, _0x5575fb.year, _0x5575fb.imdbId, _0x3465e9);
      if (!_0x39330b) {
        return _0x4a7ecf;
      }
      const _0x3c0b70 = _0x39330b.content || (yield fetchText(_0x39330b.url));
      if (!_0x3c0b70) {
        return _0x4a7ecf;
      }
      const _0x4e2df8 = extractHubcloudLinks(_0x3c0b70, parseInt(_0x9046de), parseInt(_0x2b16fb), _0x3465e9);
      const _0x3a718d = yield Promise.all(_0x4e2df8.map(_0x1700a7 => resolveHubCloud(_0x1700a7, _0x76907a)));
      _0x4a7ecf = _0x3a718d.flat();
      _0x4a7ecf.forEach(function (_0x279616) {
        var _0x418c14 = (_0x279616.title || "").toLowerCase();
        if (_0x418c14.indexOf("2160p") !== -1 || _0x418c14.indexOf("4k") !== -1) {
          _0x279616._resWeight = 4;
        } else if (_0x418c14.indexOf("1080p") !== -1) {
          _0x279616._resWeight = 3;
        } else if (_0x418c14.indexOf("720p") !== -1) {
          _0x279616._resWeight = 2;
        } else {
          _0x279616._resWeight = 1;
        }
        var _0x59b939 = (_0x279616.name || "").toLowerCase();
        if (_0x59b939.indexOf("fsl") !== -1) {
          _0x279616._srcWeight = 3;
        } else if (_0x59b939.indexOf("worker") !== -1) {
          _0x279616._srcWeight = 2;
        } else {
          _0x279616._srcWeight = 1;
        }
      });
      _0x4a7ecf.sort(function (_0x58f555, _0x2bd50b) {
        if (_0x2bd50b._resWeight !== _0x58f555._resWeight) {
          return _0x2bd50b._resWeight - _0x58f555._resWeight;
        }
        return _0x2bd50b._srcWeight - _0x58f555._srcWeight;
      });
      _0x4a7ecf.forEach(function (_0x584864) {
        delete _0x584864._resWeight;
        delete _0x584864._srcWeight;
      });
    } catch (_0x1c4186) {
      console.log("[" + PROVIDER_NAME + "] Fatal Error: " + _0x1c4186.message);
    }
    return _0x4a7ecf;
  });
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getStreams: getStreams
  };
} else {
  global.getStreams = getStreams;
}