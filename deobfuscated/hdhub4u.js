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
var __defNormalProp = (_0x88bbc8, _0x59e2f6, _0x38ec05) => _0x59e2f6 in _0x88bbc8 ? __defProp(_0x88bbc8, _0x59e2f6, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x38ec05
}) : _0x88bbc8[_0x59e2f6] = _0x38ec05;
var __spreadValues = (_0x586ac9, _0x243eff) => {
  for (var _0x4d4ed6 in _0x243eff ||= {}) {
    if (__hasOwnProp.call(_0x243eff, _0x4d4ed6)) {
      __defNormalProp(_0x586ac9, _0x4d4ed6, _0x243eff[_0x4d4ed6]);
    }
  }
  if (__getOwnPropSymbols) {
    for (var _0x4d4ed6 of __getOwnPropSymbols(_0x243eff)) {
      if (__propIsEnum.call(_0x243eff, _0x4d4ed6)) {
        __defNormalProp(_0x586ac9, _0x4d4ed6, _0x243eff[_0x4d4ed6]);
      }
    }
  }
  return _0x586ac9;
};
var __spreadProps = (_0x2528ff, _0x869b1a) => __defProps(_0x2528ff, __getOwnPropDescs(_0x869b1a));
var __copyProps = (_0x5d58d3, _0x472071, _0x7c0d03, _0xd1c451) => {
  if (_0x472071 && typeof _0x472071 === "object" || typeof _0x472071 === "function") {
    for (let _0x32d39b of __getOwnPropNames(_0x472071)) {
      if (!__hasOwnProp.call(_0x5d58d3, _0x32d39b) && _0x32d39b !== _0x7c0d03) {
        __defProp(_0x5d58d3, _0x32d39b, {
          get: () => _0x472071[_0x32d39b],
          enumerable: !(_0xd1c451 = __getOwnPropDesc(_0x472071, _0x32d39b)) || _0xd1c451.enumerable
        });
      }
    }
  }
  return _0x5d58d3;
};
var __toESM = (_0x522601, _0x375c55, _0x1820cc) => {
  _0x1820cc = _0x522601 != null ? __create(__getProtoOf(_0x522601)) : {};
  return __copyProps(_0x375c55 || !_0x522601 || !_0x522601.__esModule ? __defProp(_0x1820cc, "default", {
    value: _0x522601,
    enumerable: true
  }) : _0x1820cc, _0x522601);
};
var __async = (_0x1389ca, _0x1ef12d, _0x2af041) => {
  return new Promise((_0x217d5a, _0x5e2a10) => {
    var _0x1c6bd1 = _0x464de7 => {
      try {
        _0x2518b0(_0x2af041.next(_0x464de7));
      } catch (_0x4da465) {
        _0x5e2a10(_0x4da465);
      }
    };
    var _0xd2a47f = _0x185354 => {
      try {
        _0x2518b0(_0x2af041.throw(_0x185354));
      } catch (_0x325b10) {
        _0x5e2a10(_0x325b10);
      }
    };
    var _0x2518b0 = _0x3b9469 => _0x3b9469.done ? _0x217d5a(_0x3b9469.value) : Promise.resolve(_0x3b9469.value).then(_0x1c6bd1, _0xd2a47f);
    _0x2518b0((_0x2af041 = _0x2af041.apply(_0x1389ca, _0x1ef12d)).next());
  });
};
var import_cheerio_without_node_native2 = __toESM(require("cheerio-without-node-native"));
var TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
var TMDB_BASE_URL = "https://api.themoviedb.org/3";
var MAIN_URL = "https://new1.hdhub4u.cl";
var DOMAINS_URL = "https://raw.githubusercontent.com/phisher98/TVVVV/refs/heads/main/domains.json";
var DOMAIN_CACHE_TTL = 14400000;
var HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0",
  Cookie: "xla=s4t",
  Referer: MAIN_URL + "/"
};
function updateMainUrl(_0x2bc9ad) {
  MAIN_URL = _0x2bc9ad;
  HEADERS.Referer = _0x2bc9ad + "/";
}
var domainCacheTimestamp = 0;
function formatBytes(_0x3c872b) {
  if (!_0x3c872b || _0x3c872b === 0) {
    return "Unknown";
  }
  const _0x58bc76 = 1024;
  const _0x4e1b4d = ["Bytes", "KB", "MB", "GB", "TB"];
  const _0x15c2ec = Math.floor(Math.log(_0x3c872b) / Math.log(_0x58bc76));
  return parseFloat((_0x3c872b / Math.pow(_0x58bc76, _0x15c2ec)).toFixed(1)) + " " + _0x4e1b4d[_0x15c2ec];
}
function extractServerName(_0x308c00) {
  if (!_0x308c00) {
    return "Unknown";
  }
  if (_0x308c00.startsWith("HubCloud")) {
    const _0x36e3ab = _0x308c00.match(/HubCloud(?:\s*-\s*([^[\]]+))?/);
    if (_0x36e3ab) {
      return _0x36e3ab[1] || "Download";
    } else {
      return "HubCloud";
    }
  }
  if (_0x308c00.startsWith("Pixeldrain")) {
    return "Pixeldrain";
  }
  if (_0x308c00.startsWith("StreamTape")) {
    return "StreamTape";
  }
  if (_0x308c00.startsWith("HubCdn")) {
    return "HubCdn";
  }
  if (_0x308c00.startsWith("HbLinks")) {
    return "HbLinks";
  }
  if (_0x308c00.startsWith("Hubstream")) {
    return "Hubstream";
  }
  return _0x308c00.replace(/^www\./, "").split(".")[0];
}
function rot13(_0x457d9a) {
  return _0x457d9a.replace(/[a-zA-Z]/g, function (_0x359643) {
    return String.fromCharCode((_0x359643 <= "Z" ? 90 : 122) >= (_0x359643 = _0x359643.charCodeAt(0) + 13) ? _0x359643 : _0x359643 - 26);
  });
}
var BASE64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function atob(_0x5adf3b) {
  if (!_0x5adf3b) {
    return "";
  }
  let _0x54ae01 = String(_0x5adf3b).replace(/=+$/, "");
  let _0x26a2bf = "";
  let _0x3af0cf = 0;
  let _0x4c155d;
  let _0x23c38e;
  let _0x23662f = 0;
  while (_0x23c38e = _0x54ae01.charAt(_0x23662f++)) {
    _0x23c38e = BASE64_CHARS.indexOf(_0x23c38e);
    if (~_0x23c38e) {
      _0x4c155d = _0x3af0cf % 4 ? _0x4c155d * 64 + _0x23c38e : _0x23c38e;
      if (_0x3af0cf++ % 4) {
        _0x26a2bf += String.fromCharCode(_0x4c155d >> (_0x3af0cf * -2 & 6) & 255);
      }
    }
  }
  return _0x26a2bf;
}
function cleanTitle(_0x297d1f) {
  let _0x5d2ab8 = _0x297d1f.replace(/\.[a-zA-Z0-9]{2,4}$/, "");
  const _0x41af30 = _0x5d2ab8.replace(/WEB[-_. ]?DL/gi, "WEB-DL").replace(/WEB[-_. ]?RIP/gi, "WEBRIP").replace(/H[ .]?265/gi, "H265").replace(/H[ .]?264/gi, "H264").replace(/DDP[ .]?([0-9]\.[0-9])/gi, "DDP$1");
  const _0x23ddbd = _0x41af30.split(/[\s_.]/);
  const _0x4c9494 = new Set(["WEB-DL", "WEBRIP", "BLURAY", "HDRIP", "DVDRIP", "HDTV", "CAM", "TS", "BRRIP", "BDRIP"]);
  const _0x41a9cf = new Set(["H264", "H265", "X264", "X265", "HEVC", "AVC"]);
  const _0x13d603 = ["AAC", "AC3", "DTS", "MP3", "FLAC", "DD", "DDP", "EAC3"];
  const _0x44d8f7 = new Set(["ATMOS"]);
  const _0x4b10ed = new Set(["SDR", "HDR", "HDR10", "HDR10+", "DV", "DOLBYVISION"]);
  const _0x522135 = _0x23ddbd.map(_0x58df58 => {
    const _0xe390ee = _0x58df58.toUpperCase();
    if (_0x4c9494.has(_0xe390ee)) {
      return _0xe390ee;
    }
    if (_0x41a9cf.has(_0xe390ee)) {
      return _0xe390ee;
    }
    if (_0x13d603.some(_0x1a4762 => _0xe390ee.startsWith(_0x1a4762))) {
      return _0xe390ee;
    }
    if (_0x44d8f7.has(_0xe390ee)) {
      return _0xe390ee;
    }
    if (_0x4b10ed.has(_0xe390ee)) {
      if (_0xe390ee === "DOLBYVISION" || _0xe390ee === "DV") {
        return "DOLBYVISION";
      } else {
        return _0xe390ee;
      }
    }
    if (_0xe390ee === "NF" || _0xe390ee === "CR") {
      return _0xe390ee;
    }
    return null;
  }).filter(Boolean);
  return [...new Set(_0x522135)].join(" ");
}
function fetchAndUpdateDomain() {
  return __async(this, null, function* () {
    const _0x36af68 = Date.now();
    if (_0x36af68 - domainCacheTimestamp < DOMAIN_CACHE_TTL) {
      return;
    }
    console.log("[HDHub4u] Fetching latest domain...");
    try {
      const _0x277b12 = yield fetch(DOMAINS_URL, {
        method: "GET",
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
      });
      if (_0x277b12.ok) {
        const _0x34efb6 = yield _0x277b12.json();
        if (_0x34efb6 && _0x34efb6.HDHUB4u) {
          const _0x5f1f97 = _0x34efb6.HDHUB4u;
          if (_0x5f1f97 !== MAIN_URL) {
            console.log("[HDHub4u] Updating domain from " + MAIN_URL + " to " + _0x5f1f97);
            updateMainUrl(_0x5f1f97);
            domainCacheTimestamp = _0x36af68;
          }
        }
      }
    } catch (_0xbe2ec5) {
      console.error("[HDHub4u] Failed to fetch latest domains: " + _0xbe2ec5.message);
    }
  });
}
function getCurrentDomain() {
  return __async(this, null, function* () {
    yield fetchAndUpdateDomain();
    return MAIN_URL;
  });
}
function normalizeTitle(_0x4ff874) {
  if (!_0x4ff874) {
    return "";
  }
  return _0x4ff874.toLowerCase().replace(/\b(the|a|an)\b/g, "").replace(/[:\-_]/g, " ").replace(/\s+/g, " ").replace(/[^\w\s]/g, "").trim();
}
function calculateTitleSimilarity(_0x46b3e4, _0x1b01ae) {
  const _0xecd6c9 = normalizeTitle(_0x46b3e4);
  const _0x1ce152 = normalizeTitle(_0x1b01ae);
  if (_0xecd6c9 === _0x1ce152) {
    return 1;
  }
  const _0x497600 = _0xecd6c9.split(/\s+/).filter(_0x973f27 => _0x973f27.length > 0);
  const _0x13b7d3 = _0x1ce152.split(/\s+/).filter(_0x3d5d0c => _0x3d5d0c.length > 0);
  if (_0x497600.length === 0 || _0x13b7d3.length === 0) {
    return 0;
  }
  const _0x29dd94 = new Set(_0x497600);
  const _0x5c74c1 = new Set(_0x13b7d3);
  const _0x3778b0 = _0x497600.filter(_0x394f3e => _0x5c74c1.has(_0x394f3e));
  const _0x296ff4 = new Set([..._0x497600, ..._0x13b7d3]);
  const _0x315743 = _0x3778b0.length / _0x296ff4.size;
  const _0x14fb85 = _0x13b7d3.filter(_0x3d0b09 => !_0x29dd94.has(_0x3d0b09)).length;
  let _0x2872cd = _0x315743 - _0x14fb85 * 0.05;
  if (_0x497600.length > 0 && _0x497600.every(_0x41c073 => _0x5c74c1.has(_0x41c073))) {
    _0x2872cd += 0.2;
  }
  return _0x2872cd;
}
function findBestTitleMatch(_0x40cb33, _0x280381, _0x4a7316, _0xd19fba) {
  if (!_0x280381 || _0x280381.length === 0) {
    return null;
  }
  let _0x136bdf = null;
  let _0x14607c = 0;
  for (const _0x550c70 of _0x280381) {
    let _0x9de7ca = calculateTitleSimilarity(_0x40cb33.title, _0x550c70.title);
    if (_0x40cb33.year && _0x550c70.year) {
      const _0x528758 = Math.abs(_0x40cb33.year - _0x550c70.year);
      if (_0x528758 === 0) {
        _0x9de7ca += 0.2;
      } else if (_0x528758 <= 1) {
        _0x9de7ca += 0.1;
      } else if (_0x528758 > 5) {
        _0x9de7ca -= 0.3;
      }
    }
    if (_0x4a7316 === "tv" && _0xd19fba) {
      const _0x592c93 = _0x550c70.title.toLowerCase();
      const _0x238fc7 = ["season " + _0xd19fba, "s" + _0xd19fba, "season " + _0xd19fba.toString().padStart(2, "0"), "s" + _0xd19fba.toString().padStart(2, "0")];
      const _0x1e5c67 = _0x238fc7.some(_0xe07ba7 => _0x592c93.includes(_0xe07ba7));
      const _0x58c61e = _0x592c93.match(/season\s*(\d+)|s(\d+)/i);
      if (_0x58c61e) {
        const _0x23f41f = parseInt(_0x58c61e[1] || _0x58c61e[2]);
        if (_0x23f41f !== _0xd19fba) {
          _0x9de7ca -= 0.8;
        }
      }
      if (_0x1e5c67) {
        _0x9de7ca += 0.5;
      } else {
        _0x9de7ca -= 0.3;
      }
    }
    if (_0x550c70.title.toLowerCase().includes("2160p") || _0x550c70.title.toLowerCase().includes("4k")) {
      _0x9de7ca += 0.05;
    }
    if (_0x9de7ca > _0x14607c && _0x9de7ca > 0.3) {
      _0x14607c = _0x9de7ca;
      _0x136bdf = _0x550c70;
    }
  }
  if (_0x136bdf) {
    console.log("[HDHub4u] Best title match: \"" + _0x136bdf.title + "\" (score: " + _0x14607c.toFixed(2) + ")");
  }
  return _0x136bdf;
}
function getTMDBDetails(_0x30f6d5, _0x293f43) {
  return __async(this, null, function* () {
    var _0x4e4372;
    const _0x39bb08 = _0x293f43 === "tv" ? "tv" : "movie";
    const _0x2bdc62 = TMDB_BASE_URL + "/" + _0x39bb08 + "/" + _0x30f6d5 + "?api_key=" + TMDB_API_KEY + "&append_to_response=external_ids";
    const _0x2580ee = yield fetch(_0x2bdc62, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0"
      }
    });
    if (!_0x2580ee.ok) {
      throw new Error("TMDB API error: " + _0x2580ee.status);
    }
    const _0x35e068 = yield _0x2580ee.json();
    const _0x4179c8 = _0x293f43 === "tv" ? _0x35e068.name : _0x35e068.title;
    const _0x291a1d = _0x293f43 === "tv" ? _0x35e068.first_air_date : _0x35e068.release_date;
    const _0x316a55 = _0x291a1d ? parseInt(_0x291a1d.split("-")[0]) : null;
    return {
      title: _0x4179c8,
      year: _0x316a55,
      imdbId: ((_0x4e4372 = _0x35e068.external_ids) == null ? undefined : _0x4e4372.imdb_id) || null
    };
  });
}
var import_cheerio_without_node_native = __toESM(require("cheerio-without-node-native"));
var import_crypto_js = __toESM(require("crypto-js"));
function getRedirectLinks(_0x3a4a38) {
  return __async(this, null, function* () {
    try {
      const _0x1dc9b2 = yield fetch(_0x3a4a38, {
        headers: HEADERS
      });
      if (!_0x1dc9b2.ok) {
        throw new Error("HTTP " + _0x1dc9b2.status + ": " + _0x1dc9b2.statusText);
      }
      const _0x330cbb = yield _0x1dc9b2.text();
      const _0x1b48f6 = /s\s*\(\s*['"]o['"]\s*,\s*['"]([A-Za-z0-9+/=]+)['"]|ck\s*\(\s*['"]_wp_http_\d+['"]\s*,\s*['"]([^'"]+)['"]/g;
      let _0x151934 = "";
      let _0x1b719f;
      while ((_0x1b719f = _0x1b48f6.exec(_0x330cbb)) !== null) {
        const _0x5bfc8d = _0x1b719f[1] || _0x1b719f[2];
        if (_0x5bfc8d) {
          _0x151934 += _0x5bfc8d;
        }
      }
      if (!_0x151934) {
        const _0x502bed = _0x330cbb.match(/window\.location\.href\s*=\s*['"]([^'"]+)['"]/);
        if (_0x502bed && _0x502bed[1]) {
          const _0x19e414 = _0x502bed[1];
          if (_0x19e414 !== _0x3a4a38 && !_0x19e414.includes(_0x3a4a38)) {
            return yield getRedirectLinks(_0x19e414);
          }
        }
        return null;
      }
      const _0x42df4e = atob(rot13(atob(atob(_0x151934))));
      const _0x3f31d3 = JSON.parse(_0x42df4e);
      const _0x1657a9 = atob(_0x3f31d3.o || "").trim();
      if (_0x1657a9) {
        return _0x1657a9;
      }
      const _0x14ed66 = atob(_0x3f31d3.data || "").trim();
      const _0x3e9646 = (_0x3f31d3.blog_url || "").trim();
      if (_0x3e9646 && _0x14ed66) {
        const _0x98b056 = yield fetch(_0x3e9646 + "?re=" + _0x14ed66, {
          headers: HEADERS
        });
        const _0x36ff79 = yield _0x98b056.text();
        const _0x49af98 = import_cheerio_without_node_native.default.load(_0x36ff79);
        return (_0x49af98("body").text() || _0x36ff79).trim();
      }
      return null;
    } catch (_0x25d58d) {
      return null;
    }
  });
}
function vidStackExtractor(_0x11edee) {
  return __async(this, null, function* () {
    var _0x3223b7;
    var _0x79fab5;
    var _0x46f594;
    try {
      const _0x23102c = _0x11edee.split("#").pop().split("/").pop();
      const _0x5c88b3 = new URL(_0x11edee).origin;
      const _0x55ddcb = _0x5c88b3 + "/api/v1/video?id=" + _0x23102c;
      const _0x57224b = yield fetch(_0x55ddcb, {
        headers: __spreadProps(__spreadValues({}, HEADERS), {
          Referer: _0x11edee
        })
      });
      const _0x1b50c1 = (yield _0x57224b.text()).trim();
      const _0x43e1b9 = import_crypto_js.default.enc.Utf8.parse("kiemtienmua911ca");
      const _0x39fcda = ["1234567890oiuytr", "0123456789abcdef"];
      for (const _0x3b8c36 of _0x39fcda) {
        try {
          const _0x479c4a = import_crypto_js.default.enc.Utf8.parse(_0x3b8c36);
          const _0x2965ff = import_crypto_js.default.AES.decrypt({
            ciphertext: import_crypto_js.default.enc.Hex.parse(_0x1b50c1)
          }, _0x43e1b9, {
            iv: _0x479c4a,
            mode: import_crypto_js.default.mode.CBC,
            padding: import_crypto_js.default.pad.Pkcs7
          });
          const _0x2baea8 = _0x2965ff.toString(import_crypto_js.default.enc.Utf8);
          if (_0x2baea8 && _0x2baea8.includes("source")) {
            const _0x18f56d = (_0x79fab5 = (_0x3223b7 = _0x2baea8.match(/"source":"(.*?)"/)) == null ? undefined : _0x3223b7[1]) == null ? undefined : _0x79fab5.replace(/\\/g, "");
            const _0x415a15 = [];
            const _0x3f7223 = (_0x46f594 = _0x2baea8.match(/"subtitle":\{(.*?)\}/)) == null ? undefined : _0x46f594[1];
            if (_0x3f7223) {
              const _0x305160 = /"([^"]+)":\s*"([^"]+)"/g;
              let _0x5d18fa;
              while ((_0x5d18fa = _0x305160.exec(_0x3f7223)) !== null) {
                const _0x808ee3 = _0x5d18fa[1];
                const _0x3e50c2 = _0x5d18fa[2].split("#")[0].replace(/\\/g, "");
                if (_0x3e50c2) {
                  _0x415a15.push({
                    language: _0x808ee3,
                    url: _0x3e50c2.startsWith("http") ? _0x3e50c2 : "" + _0x5c88b3 + _0x3e50c2
                  });
                }
              }
            }
            if (_0x18f56d) {
              return [{
                source: "Vidstack Hubstream",
                quality: "M3U8",
                url: _0x18f56d.replace("https:", "http:"),
                headers: {
                  Referer: _0x11edee,
                  Origin: _0x11edee.split("/").pop()
                },
                subtitles: _0x415a15
              }];
            }
          }
        } catch (_0x5d46c8) {}
      }
      return [];
    } catch (_0x4ea3d9) {
      return [];
    }
  });
}
function hbLinksExtractor(_0x1b96b2) {
  return __async(this, null, function* () {
    try {
      const _0x1b2fba = yield fetch(_0x1b96b2, {
        headers: __spreadProps(__spreadValues({}, HEADERS), {
          Referer: _0x1b96b2
        })
      });
      const _0xf11254 = yield _0x1b2fba.text();
      const _0xaaa57f = import_cheerio_without_node_native.default.load(_0xf11254);
      const _0xe0515a = _0xaaa57f("h3 a, h5 a, div.entry-content p a").map((_0x14f8b3, _0x38ee5b) => _0xaaa57f(_0x38ee5b).attr("href")).get();
      const _0x295da5 = yield Promise.all(_0xe0515a.map(_0x438144 => loadExtractor(_0x438144, _0x1b96b2)));
      return _0x295da5.flat().map(_0x57c356 => __spreadProps(__spreadValues({}, _0x57c356), {
        source: _0x57c356.source + " Hblinks"
      }));
    } catch (_0x9238c2) {
      return [];
    }
  });
}
function pixelDrainExtractor(_0x1a2bd7) {
  return __async(this, null, function* () {
    var _0x155c03;
    try {
      const _0xe2832d = new URL(_0x1a2bd7);
      const _0x324dba = _0xe2832d.protocol + "//" + _0xe2832d.hostname;
      const _0x1f4e3f = ((_0x155c03 = _0x1a2bd7.match(/(?:file|u)\/([A-Za-z0-9]+)/)) == null ? undefined : _0x155c03[1]) || _0x1a2bd7.split("/").pop();
      if (!_0x1f4e3f) {
        return [{
          source: "Pixeldrain",
          quality: 0,
          url: _0x1a2bd7
        }];
      }
      const _0x40bab5 = _0x1a2bd7.includes("?download") ? _0x1a2bd7 : _0x324dba + "/api/file/" + _0x1f4e3f + "?download";
      return [{
        source: "Pixeldrain",
        quality: 0,
        url: _0x40bab5
      }];
    } catch (_0x2cb417) {
      return [{
        source: "Pixeldrain",
        quality: 0,
        url: _0x1a2bd7
      }];
    }
  });
}
function streamTapeExtractor(_0x1f9c4f) {
  return __async(this, null, function* () {
    var _0x49aaa2;
    var _0x5c07ff;
    var _0x2c8792;
    var _0x400c37;
    try {
      const _0x1146bd = new URL(_0x1f9c4f);
      _0x1146bd.hostname = "streamtape.com";
      const _0x1206a3 = yield fetch(_0x1146bd.toString(), {
        headers: HEADERS
      });
      const _0x4a5441 = yield _0x1206a3.text();
      let _0x4a3557 = (_0x2c8792 = (_0x5c07ff = (_0x49aaa2 = _0x4a5441.match(/document\.getElementById\('videolink'\)\.innerHTML = (.*?);/)) == null ? undefined : _0x49aaa2[1]) == null ? undefined : _0x5c07ff.match(/'(\/\/streamtape\.com\/get_video[^']+)'/)) == null ? undefined : _0x2c8792[1];
      if (!_0x4a3557) {
        _0x4a3557 = (_0x400c37 = _0x4a5441.match(/'(\/\/streamtape\.com\/get_video[^']+)'/)) == null ? undefined : _0x400c37[1];
      }
      if (_0x4a3557) {
        return [{
          source: "StreamTape",
          quality: 720,
          url: "https:" + _0x4a3557
        }];
      } else {
        return [];
      }
    } catch (_0x2afe28) {
      return [];
    }
  });
}
function hubCloudExtractor(_0x40be9e, _0x4b466f) {
  return __async(this, null, function* () {
    var _0x3b7b60;
    try {
      let _0x2e9567 = _0x40be9e.replace("hubcloud.ink", "hubcloud.dad");
      const _0x44ad7f = yield fetch(_0x2e9567, {
        headers: __spreadProps(__spreadValues({}, HEADERS), {
          Referer: _0x4b466f
        })
      });
      let _0x3c42ab = yield _0x44ad7f.text();
      let _0x1f1731 = _0x2e9567;
      if (!_0x2e9567.includes("hubcloud.php")) {
        let _0x5c5b56 = "";
        const _0x658c85 = import_cheerio_without_node_native.default.load(_0x3c42ab);
        const _0x506a69 = _0x658c85("#download");
        if (_0x506a69.length) {
          _0x5c5b56 = _0x506a69.attr("href");
        } else {
          const _0x18fdae = _0x3c42ab.match(/var url = '([^']*)'/);
          if (_0x18fdae) {
            _0x5c5b56 = _0x18fdae[1];
          }
        }
        if (_0x5c5b56) {
          if (!_0x5c5b56.startsWith("http")) {
            const _0x11f1f5 = new URL(_0x2e9567);
            _0x5c5b56 = _0x11f1f5.protocol + "//" + _0x11f1f5.hostname + "/" + _0x5c5b56.replace(/^\//, "");
          }
          _0x1f1731 = _0x5c5b56;
          const _0x3f741f = yield fetch(_0x1f1731, {
            headers: __spreadProps(__spreadValues({}, HEADERS), {
              Referer: _0x2e9567
            })
          });
          _0x3c42ab = yield _0x3f741f.text();
        }
      }
      const _0x26900c = import_cheerio_without_node_native.default.load(_0x3c42ab);
      const _0x4a5266 = _0x26900c("i#size").text().trim();
      const _0x7cdd77 = _0x26900c("div.card-header").text().trim();
      const _0x35c35d = (_0x3b7b60 = _0x7cdd77.match(/(\d{3,4})[pP]/)) == null ? undefined : _0x3b7b60[1];
      const _0x4d5130 = _0x35c35d ? parseInt(_0x35c35d) : 1080;
      const _0x586be9 = cleanTitle(_0x7cdd77);
      const _0x106853 = (_0x586be9 ? "[" + _0x586be9 + "]" : "") + (_0x4a5266 ? "[" + _0x4a5266 + "]" : "");
      const _0x3c4587 = (() => {
        const _0x3f0983 = _0x4a5266.match(/([\d.]+)\s*(GB|MB|KB)/i);
        if (!_0x3f0983) {
          return 0;
        }
        const _0x4e08f2 = {
          GB: 1073741824,
          MB: 1048576,
          KB: 1024
        };
        return parseFloat(_0x3f0983[1]) * (_0x4e08f2[_0x3f0983[2].toUpperCase()] || 0);
      })();
      const _0x349f68 = [];
      const _0x274ffe = _0x26900c("a.btn").get();
      for (const _0x2eeba4 of _0x274ffe) {
        const _0x4e6ddb = _0x26900c(_0x2eeba4).attr("href");
        const _0x28f39b = _0x26900c(_0x2eeba4).text().toLowerCase();
        const _0x30238b = _0x7cdd77 || _0x586be9 || "Unknown";
        if (_0x28f39b.includes("download file") || _0x28f39b.includes("fsl server") || _0x28f39b.includes("s3 server") || _0x28f39b.includes("fslv2") || _0x28f39b.includes("mega server") || _0x4e6ddb && _0x4e6ddb.includes("r2.dev")) {
          let _0x148366 = "HubCloud";
          if (_0x4e6ddb && _0x4e6ddb.includes("r2.dev")) {
            _0x148366 = "Direct R2";
          } else if (_0x4e6ddb && _0x4e6ddb.includes("workers.dev")) {
            _0x148366 = "ZipDisk Server";
          } else if (_0x28f39b.includes("fsl server")) {
            _0x148366 = "HubCloud - FSL";
          } else if (_0x28f39b.includes("s3 server")) {
            _0x148366 = "HubCloud - S3";
          } else if (_0x28f39b.includes("fslv2")) {
            _0x148366 = "HubCloud - FSLv2";
          } else if (_0x28f39b.includes("mega server")) {
            _0x148366 = "HubCloud - Mega";
          }
          _0x349f68.push({
            source: _0x148366 + " " + _0x106853,
            quality: _0x4d5130,
            url: _0x4e6ddb,
            size: _0x3c4587,
            fileName: _0x30238b
          });
        } else if (_0x28f39b.includes("buzzserver")) {
          try {
            const _0x2c3c73 = yield fetch(_0x4e6ddb + "/download", {
              method: "GET",
              headers: __spreadProps(__spreadValues({}, HEADERS), {
                Referer: _0x4e6ddb
              }),
              redirect: "manual"
            });
            let _0x519976 = _0x2c3c73.headers.get("hx-redirect") || _0x2c3c73.headers.get("HX-Redirect");
            if (!_0x519976 && _0x2c3c73.url && _0x2c3c73.url !== _0x4e6ddb + "/download") {
              _0x519976 = _0x2c3c73.url;
            }
            if (_0x519976) {
              _0x349f68.push({
                source: "HubCloud - BuzzServer " + _0x106853,
                quality: _0x4d5130,
                url: _0x519976,
                size: _0x3c4587,
                fileName: _0x30238b
              });
            }
          } catch (_0x40c8a9) {}
        } else if (_0x28f39b.includes("10gbps") || _0x4e6ddb && _0x4e6ddb.includes("hubcloud.cx")) {
          let _0x567c2e = _0x4e6ddb;
          if (_0x4e6ddb && !_0x4e6ddb.includes("hubcloud.cx")) {
            try {
              const _0x3abc77 = yield fetch(_0x4e6ddb, {
                method: "GET",
                redirect: "manual"
              });
              const _0x1e3af5 = _0x3abc77.headers.get("location");
              if (_0x1e3af5 && _0x1e3af5.includes("link=")) {
                _0x567c2e = _0x1e3af5.substring(_0x1e3af5.indexOf("link=") + 5);
              }
            } catch (_0x8aa1e5) {}
          }
          _0x349f68.push({
            source: "HubCloud - 10Gbps " + _0x106853,
            quality: _0x4d5130,
            url: _0x567c2e,
            size: _0x3c4587,
            fileName: _0x30238b
          });
        } else if (_0x28f39b.includes("zipdisk") || _0x4e6ddb && _0x4e6ddb.includes("workers.dev")) {
          _0x349f68.push({
            source: "ZipDisk Server " + _0x106853,
            quality: _0x4d5130,
            url: _0x4e6ddb,
            size: _0x3c4587,
            fileName: _0x30238b
          });
        } else if (_0x4e6ddb && _0x4e6ddb.includes("pixeldra")) {
          const _0x28c01d = yield pixelDrainExtractor(_0x4e6ddb);
          _0x349f68.push(..._0x28c01d.map(_0x3d631e => __spreadProps(__spreadValues({}, _0x3d631e), {
            source: _0x3d631e.source + " " + _0x106853,
            size: _0x3c4587,
            fileName: _0x30238b
          })));
        } else if (_0x4e6ddb && !_0x4e6ddb.includes("magnet:") && _0x4e6ddb.startsWith("http")) {
          const _0x269814 = yield loadExtractor(_0x4e6ddb, _0x1f1731);
          _0x349f68.push(..._0x269814.map(_0x38c29f => __spreadProps(__spreadValues({}, _0x38c29f), {
            quality: _0x38c29f.quality || _0x4d5130
          })));
        }
      }
      return _0x349f68;
    } catch (_0x5b5815) {
      return [];
    }
  });
}
function hubCdnExtractor(_0x57f16d, _0x156a2d) {
  return __async(this, null, function* () {
    try {
      const _0x308477 = yield fetch(_0x57f16d, {
        headers: __spreadProps(__spreadValues({}, HEADERS), {
          Referer: _0x156a2d
        })
      });
      const _0x25a016 = yield _0x308477.text();
      const _0x21ed9a = import_cheerio_without_node_native.default.load(_0x25a016);
      let _0x2fe83e = "";
      _0x21ed9a("script").each((_0x4485ae, _0x461b7d) => {
        const _0x578952 = _0x21ed9a(_0x461b7d).html();
        if (_0x578952 && _0x578952.includes("reurl")) {
          _0x2fe83e = _0x578952;
        }
      });
      if (_0x2fe83e) {
        const _0x3c4c92 = _0x2fe83e.match(/reurl\s*=\s*["']([^"']+)["']/);
        if (_0x3c4c92 && _0x3c4c92[1]) {
          const _0x14caa4 = _0x3c4c92[1];
          if (_0x14caa4.includes("?r=")) {
            const _0x3f8999 = _0x14caa4.split("?r=").pop();
            try {
              const _0x34087c = atob(_0x3f8999);
              const _0x584606 = _0x34087c.substring(_0x34087c.lastIndexOf("link=") + 5);
              if (_0x584606 && _0x584606.startsWith("http")) {
                return [{
                  source: "HubCdn",
                  quality: 1080,
                  url: _0x584606
                }];
              }
            } catch (_0xa2f973) {}
          } else if (_0x14caa4.includes("link=")) {
            const _0x577557 = _0x14caa4.split("link=").pop();
            if (_0x577557 && _0x577557.startsWith("http")) {
              return [{
                source: "HubCdn",
                quality: 1080,
                url: _0x577557
              }];
            }
          } else if (_0x14caa4.startsWith("http")) {
            return [{
              source: "HubCdn",
              quality: 1080,
              url: _0x14caa4
            }];
          }
        }
      }
      const _0x57b4da = _0x25a016.match(/r=([A-Za-z0-9+/=]+)/);
      if (_0x57b4da && _0x57b4da[1]) {
        try {
          const _0x44d334 = atob(_0x57b4da[1]);
          const _0x330cb5 = _0x44d334.substring(_0x44d334.lastIndexOf("link=") + 5);
          if (_0x330cb5 && _0x330cb5.startsWith("http")) {
            return [{
              source: "HubCdn",
              quality: 1080,
              url: _0x330cb5
            }];
          }
        } catch (_0x4ec171) {}
      }
      return [];
    } catch (_0x99eac8) {
      return [];
    }
  });
}
function loadExtractor(_0x37f613) {
  return __async(this, arguments, function* (_0x43a854, _0x38a20c = MAIN_URL) {
    try {
      const _0x7e64e9 = new URL(_0x43a854).hostname;
      const _0x32c947 = _0x43a854.includes("?id=") || _0x7e64e9.includes("techyboy4u") || _0x7e64e9.includes("gadgetsweb.xyz") || _0x7e64e9.includes("cryptoinsights.site") || _0x7e64e9.includes("bloggingvector") || _0x7e64e9.includes("ampproject.org");
      if (_0x32c947) {
        const _0x3c4d34 = yield getRedirectLinks(_0x43a854);
        if (_0x3c4d34 && _0x3c4d34 !== _0x43a854) {
          return yield loadExtractor(_0x3c4d34, _0x43a854);
        }
        return [];
      }
      if (_0x7e64e9.includes("hubcloud")) {
        return yield hubCloudExtractor(_0x43a854, _0x38a20c);
      }
      if (_0x7e64e9.includes("hubcdn")) {
        return yield hubCdnExtractor(_0x43a854, _0x38a20c);
      }
      if (_0x7e64e9.includes("hblinks") || _0x7e64e9.includes("hubstream.dad")) {
        return yield hbLinksExtractor(_0x43a854);
      }
      if (_0x7e64e9.includes("hubstream") || _0x7e64e9.includes("vidstack")) {
        return yield vidStackExtractor(_0x43a854);
      }
      if (_0x7e64e9.includes("pixeldrain")) {
        return yield pixelDrainExtractor(_0x43a854);
      }
      if (_0x7e64e9.includes("streamtape")) {
        return yield streamTapeExtractor(_0x43a854);
      }
      if (_0x7e64e9.includes("hdstream4u")) {
        return [{
          source: "HdStream4u",
          quality: 1080,
          url: _0x43a854
        }];
      }
      if (_0x7e64e9.includes("hubdrive")) {
        const _0xd2fc4f = yield fetch(_0x43a854, {
          headers: __spreadProps(__spreadValues({}, HEADERS), {
            Referer: _0x38a20c
          })
        });
        const _0x2bb502 = yield _0xd2fc4f.text();
        const _0x52fa9f = import_cheerio_without_node_native.default.load(_0x2bb502)(".btn.btn-primary.btn-user.btn-success1.m-1").attr("href");
        if (_0x52fa9f) {
          return yield loadExtractor(_0x52fa9f, _0x43a854);
        }
      }
      return [];
    } catch (_0x42387d) {
      return [];
    }
  });
}
function search(_0x4050e0) {
  return __async(this, null, function* () {
    const _0x394053 = new Date().toISOString().split("T")[0];
    const _0x54245b = "https://search.pingora.fyi/collections/post/documents/search?q=" + encodeURIComponent(_0x4050e0) + "&query_by=post_title,category&query_by_weights=4,2&sort_by=sort_by_date:desc&limit=15&highlight_fields=none&use_cache=true&page=1&analytics_tag=" + _0x394053;
    const _0x3ce9c9 = yield fetch(_0x54245b, {
      headers: HEADERS
    });
    const _0x4de085 = yield _0x3ce9c9.json();
    if (!_0x4de085 || !_0x4de085.hits) {
      return [];
    }
    return _0x4de085.hits.map(_0xdf65e0 => {
      const _0x4b6532 = _0xdf65e0.document;
      const _0x630153 = _0x4b6532.post_title;
      const _0x59fa7c = _0x630153.match(/\((\d{4})\)|\b(\d{4})\b/);
      const _0x5a819d = _0x59fa7c ? parseInt(_0x59fa7c[1] || _0x59fa7c[2]) : null;
      let _0x352428 = _0x4b6532.permalink;
      if (_0x352428 && _0x352428.startsWith("/")) {
        _0x352428 = "" + MAIN_URL + _0x352428;
      }
      return {
        title: _0x630153,
        url: _0x352428,
        poster: _0x4b6532.post_thumbnail,
        year: _0x5a819d
      };
    });
  });
}
function getDownloadLinks(_0x37ecb2) {
  return __async(this, null, function* () {
    const _0x491a83 = yield getCurrentDomain();
    if (_0x37ecb2.includes("hdhub4u.")) {
      try {
        const _0x5aa80e = new URL(_0x37ecb2);
        const _0x191c64 = new URL(_0x491a83);
        _0x5aa80e.hostname = _0x191c64.hostname;
        _0x37ecb2 = _0x5aa80e.toString();
      } catch (_0x14960f) {}
    }
    const _0x2977be = yield fetch(_0x37ecb2, {
      headers: __spreadProps(__spreadValues({}, HEADERS), {
        Referer: _0x491a83 + "/"
      })
    });
    const _0x203f07 = yield _0x2977be.text();
    const _0x346a06 = import_cheerio_without_node_native2.default.load(_0x203f07);
    const _0x1aac06 = _0x346a06("h1.page-title span").text();
    const _0xfa4a85 = _0x1aac06.toLowerCase().includes("movie");
    if (_0xfa4a85) {
      const _0x774e1a = _0x346a06("h3 a, h4 a").filter((_0x3d8871, _0x4e83cc) => _0x346a06(_0x4e83cc).text().match(/480|720|1080|2160|4K/i));
      const _0x44a955 = _0x346a06(".page-body > div a").filter((_0x3a4cf4, _0x275fe2) => {
        const _0x370ccf = _0x346a06(_0x275fe2).attr("href");
        return _0x370ccf && (_0x370ccf.includes("hdstream4u") || _0x370ccf.includes("hubstream"));
      });
      const _0x15f8f2 = [...new Set([..._0x774e1a.map((_0x1f7992, _0x12e5c0) => _0x346a06(_0x12e5c0).attr("href")).get(), ..._0x44a955.map((_0x3c1e41, _0x189e8f) => _0x346a06(_0x189e8f).attr("href")).get()])];
      const _0x222f1b = yield Promise.all(_0x15f8f2.map(_0x69d139 => loadExtractor(_0x69d139, _0x37ecb2)));
      const _0x56430f = _0x222f1b.flat();
      const _0x34f06a = new Set();
      const _0x57c441 = _0x56430f.filter(_0x143ac2 => {
        var _0x304ddb;
        if (!_0x143ac2.url || _0x143ac2.url.includes(".zip") || ((_0x304ddb = _0x143ac2.name) == null ? undefined : _0x304ddb.toLowerCase().includes(".zip"))) {
          return false;
        }
        if (_0x34f06a.has(_0x143ac2.url)) {
          return false;
        }
        _0x34f06a.add(_0x143ac2.url);
        return true;
      });
      return {
        finalLinks: _0x57c441,
        isMovie: _0xfa4a85
      };
    } else {
      const _0x12e458 = new Map();
      const _0x3b176b = [];
      _0x346a06("h3, h4").each((_0x49cf27, _0x8a1934) => {
        const _0xe47dfc = _0x346a06(_0x8a1934);
        const _0x1f94a4 = _0xe47dfc.text();
        const _0x55ff00 = _0xe47dfc.find("a");
        const _0x590ec1 = _0x55ff00.map((_0x29bfd9, _0xb4c1e4) => _0x346a06(_0xb4c1e4).attr("href")).get();
        const _0x45ebb7 = _0x55ff00.get().some(_0x9ebf90 => _0x346a06(_0x9ebf90).text().match(/1080|720|4K|2160/i));
        if (_0x45ebb7) {
          _0x3b176b.push(..._0x590ec1);
          return;
        }
        const _0x1f5588 = _0x1f94a4.match(/(?:EPiSODE\s*(\d+)|E(\d+))/i);
        if (_0x1f5588) {
          const _0x5cd6c6 = parseInt(_0x1f5588[1] || _0x1f5588[2]);
          if (!_0x12e458.has(_0x5cd6c6)) {
            _0x12e458.set(_0x5cd6c6, []);
          }
          _0x12e458.get(_0x5cd6c6).push(..._0x590ec1);
          let _0x492e9c = _0xe47dfc.next();
          while (_0x492e9c.length && _0x492e9c.get(0).tagName !== "hr") {
            const _0x34c9f5 = _0x492e9c.find("a[href]").map((_0x1e5376, _0x2755f6) => _0x346a06(_0x2755f6).attr("href")).get();
            _0x12e458.get(_0x5cd6c6).push(..._0x34c9f5);
            _0x492e9c = _0x492e9c.next();
          }
        }
      });
      if (_0x3b176b.length > 0) {
        yield Promise.all(_0x3b176b.map(_0x109f62 => __async(this, null, function* () {
          try {
            const _0x325ae7 = yield getRedirectLinks(_0x109f62);
            if (!_0x325ae7) {
              return;
            }
            const _0x588f94 = yield fetch(_0x325ae7, {
              headers: HEADERS
            });
            const _0x3b516e = yield _0x588f94.text();
            const _0xe62e14 = import_cheerio_without_node_native2.default.load(_0x3b516e);
            _0xe62e14("h5 a, h4 a, h3 a").each((_0x475367, _0x238ad0) => {
              const _0x36f923 = _0xe62e14(_0x238ad0).text();
              const _0x404524 = _0xe62e14(_0x238ad0).attr("href");
              const _0x5d2f74 = _0x36f923.match(/Episode\s*(\d+)/i);
              if (_0x5d2f74 && _0x404524) {
                const _0x21d8e0 = parseInt(_0x5d2f74[1]);
                if (!_0x12e458.has(_0x21d8e0)) {
                  _0x12e458.set(_0x21d8e0, []);
                }
                _0x12e458.get(_0x21d8e0).push(_0x404524);
              }
            });
          } catch (_0x319d2a) {}
        })));
      }
      const _0x1e0a42 = [];
      _0x12e458.forEach((_0x1387a7, _0x4127e4) => {
        const _0x1f018c = [...new Set(_0x1387a7)];
        _0x1e0a42.push(..._0x1f018c.map(_0x374732 => ({
          url: _0x374732,
          episode: _0x4127e4
        })));
      });
      const _0xe76bd9 = yield Promise.all(_0x1e0a42.map(_0x11c525 => __async(this, null, function* () {
        try {
          const _0x280a57 = yield loadExtractor(_0x11c525.url, _0x37ecb2);
          return _0x280a57.map(_0x58e66c => __spreadProps(__spreadValues({}, _0x58e66c), {
            episode: _0x11c525.episode
          }));
        } catch (_0x16778a) {
          return [];
        }
      })));
      const _0x2b3267 = _0xe76bd9.flat();
      const _0x397162 = new Set();
      const _0x19b4f0 = _0x2b3267.filter(_0x344da7 => {
        if (!_0x344da7.url || _0x344da7.url.includes(".zip")) {
          return false;
        }
        if (_0x397162.has(_0x344da7.url)) {
          return false;
        }
        _0x397162.add(_0x344da7.url);
        return true;
      });
      return {
        finalLinks: _0x19b4f0,
        isMovie: _0xfa4a85
      };
    }
  });
}
function getStreams(_0x6fb123, _0x44e130 = "movie", _0xe589e2 = null, _0x23aa96 = null) {
  return __async(this, null, function* () {
    console.log("[HDHub4u] Fetching streams for TMDB ID: " + _0x6fb123 + ", Type: " + _0x44e130);
    try {
      const _0x2fa81d = yield getTMDBDetails(_0x6fb123, _0x44e130);
      console.log("[HDHub4u] TMDB Info: \"" + _0x2fa81d.title + "\" (" + (_0x2fa81d.year || "N/A") + ")");
      const _0x5add83 = _0x44e130 === "tv" && _0xe589e2 ? _0x2fa81d.title + " Season " + _0xe589e2 : _0x2fa81d.title;
      const _0x424e15 = yield search(_0x5add83);
      if (_0x424e15.length === 0) {
        return [];
      }
      const _0x250433 = findBestTitleMatch(_0x2fa81d, _0x424e15, _0x44e130, _0xe589e2);
      const _0x8b1a29 = _0x250433 || _0x424e15[0];
      console.log("[HDHub4u] Selected: \"" + _0x8b1a29.title + "\" (" + _0x8b1a29.url + ")");
      const _0x256b26 = yield getDownloadLinks(_0x8b1a29.url);
      const _0x163c3e = _0x256b26.finalLinks;
      let _0x3cfcfe = _0x163c3e;
      if (_0x44e130 === "tv" && _0x23aa96 !== null) {
        _0x3cfcfe = _0x163c3e.filter(_0x4f12c5 => _0x4f12c5.episode === _0x23aa96);
      }
      const _0x1504d4 = _0x3cfcfe.map(_0x4c046b => {
        let _0x50686f = _0x4c046b.fileName && _0x4c046b.fileName !== "Unknown" ? _0x4c046b.fileName : _0x2fa81d.title;
        if (_0x44e130 === "tv" && _0xe589e2 && _0x23aa96) {
          _0x50686f = _0x2fa81d.title + " S" + String(_0xe589e2).padStart(2, "0") + "E" + String(_0x23aa96).padStart(2, "0");
        }
        const _0x53d15f = extractServerName(_0x4c046b.source);
        let _0x4acaf9 = "Unknown";
        if (typeof _0x4c046b.quality === "number" && _0x4c046b.quality > 0) {
          if (_0x4c046b.quality >= 2160) {
            _0x4acaf9 = "4K";
          } else if (_0x4c046b.quality >= 1080) {
            _0x4acaf9 = "1080p";
          } else if (_0x4c046b.quality >= 720) {
            _0x4acaf9 = "720p";
          } else if (_0x4c046b.quality >= 480) {
            _0x4acaf9 = "480p";
          }
        } else if (typeof _0x4c046b.quality === "string") {
          _0x4acaf9 = _0x4c046b.quality;
        }
        return {
          name: "HDHub4u " + _0x53d15f,
          title: _0x50686f,
          url: _0x4c046b.url,
          quality: _0x4acaf9,
          size: formatBytes(_0x4c046b.size),
          headers: _0x4c046b.headers || undefined,
          provider: "hdhub4u"
        };
      });
      const _0xa1c74 = {
        "4K": 4,
        "1080p": 2,
        "720p": 1,
        "480p": 0,
        Unknown: -2
      };
      return _0x1504d4.sort((_0x141dca, _0x5b99ad) => (_0xa1c74[_0x5b99ad.quality] || -3) - (_0xa1c74[_0x141dca.quality] || -3));
    } catch (_0x11c64c) {
      console.error("[HDHub4u] Scraping error: " + _0x11c64c.message);
      return [];
    }
  });
}
module.exports = {
  getStreams: getStreams
};