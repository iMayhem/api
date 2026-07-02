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
var __defNormalProp = (_0x537b5d, _0x312257, _0x145bab) => _0x312257 in _0x537b5d ? __defProp(_0x537b5d, _0x312257, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x145bab
}) : _0x537b5d[_0x312257] = _0x145bab;
var __spreadValues = (_0x454d4c, _0x10c821) => {
  for (var _0x5ca226 in _0x10c821 ||= {}) {
    if (__hasOwnProp.call(_0x10c821, _0x5ca226)) {
      __defNormalProp(_0x454d4c, _0x5ca226, _0x10c821[_0x5ca226]);
    }
  }
  if (__getOwnPropSymbols) {
    for (var _0x5ca226 of __getOwnPropSymbols(_0x10c821)) {
      if (__propIsEnum.call(_0x10c821, _0x5ca226)) {
        __defNormalProp(_0x454d4c, _0x5ca226, _0x10c821[_0x5ca226]);
      }
    }
  }
  return _0x454d4c;
};
var __spreadProps = (_0x3a8cb0, _0x2a9c46) => __defProps(_0x3a8cb0, __getOwnPropDescs(_0x2a9c46));
var __objRest = (_0x267409, _0x2a986e) => {
  var _0x4078ae = {};
  for (var _0x37e51c in _0x267409) {
    if (__hasOwnProp.call(_0x267409, _0x37e51c) && _0x2a986e.indexOf(_0x37e51c) < 0) {
      _0x4078ae[_0x37e51c] = _0x267409[_0x37e51c];
    }
  }
  if (_0x267409 != null && __getOwnPropSymbols) {
    for (var _0x37e51c of __getOwnPropSymbols(_0x267409)) {
      if (_0x2a986e.indexOf(_0x37e51c) < 0 && __propIsEnum.call(_0x267409, _0x37e51c)) {
        _0x4078ae[_0x37e51c] = _0x267409[_0x37e51c];
      }
    }
  }
  return _0x4078ae;
};
var __copyProps = (_0x257f25, _0x2649d8, _0xdbf521, _0x41706a) => {
  if (_0x2649d8 && typeof _0x2649d8 === "object" || typeof _0x2649d8 === "function") {
    for (let _0x5e4956 of __getOwnPropNames(_0x2649d8)) {
      if (!__hasOwnProp.call(_0x257f25, _0x5e4956) && _0x5e4956 !== _0xdbf521) {
        __defProp(_0x257f25, _0x5e4956, {
          get: () => _0x2649d8[_0x5e4956],
          enumerable: !(_0x41706a = __getOwnPropDesc(_0x2649d8, _0x5e4956)) || _0x41706a.enumerable
        });
      }
    }
  }
  return _0x257f25;
};
var __toESM = (_0x55ba45, _0x23f426, _0x31a83c) => {
  _0x31a83c = _0x55ba45 != null ? __create(__getProtoOf(_0x55ba45)) : {};
  return __copyProps(_0x23f426 || !_0x55ba45 || !_0x55ba45.__esModule ? __defProp(_0x31a83c, "default", {
    value: _0x55ba45,
    enumerable: true
  }) : _0x31a83c, _0x55ba45);
};
var __async = (_0x1abd7c, _0x51d469, _0x4db3b0) => {
  return new Promise((_0x1cb0f7, _0x58ba9a) => {
    var _0x16f488 = _0x2becae => {
      try {
        _0x3ddc4b(_0x4db3b0.next(_0x2becae));
      } catch (_0x4fff13) {
        _0x58ba9a(_0x4fff13);
      }
    };
    var _0x446bda = _0x2a96d8 => {
      try {
        _0x3ddc4b(_0x4db3b0.throw(_0x2a96d8));
      } catch (_0x4ee400) {
        _0x58ba9a(_0x4ee400);
      }
    };
    var _0x3ddc4b = _0x28cd85 => _0x28cd85.done ? _0x1cb0f7(_0x28cd85.value) : Promise.resolve(_0x28cd85.value).then(_0x16f488, _0x446bda);
    _0x3ddc4b((_0x4db3b0 = _0x4db3b0.apply(_0x1abd7c, _0x51d469)).next());
  });
};
var import_cheerio_without_node_native = __toESM(require("cheerio-without-node-native"));
var MAIN_URL = "https://animepahe.com";
var PROXY_URL = "https://animepaheproxy.phisheranimepahe.workers.dev/?url=";
var HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36",
  Cookie: "__ddg2_=1234567890",
  Referer: "https://animepahe.com/"
};
function fetchText(_0x53d5e8) {
  return __async(this, arguments, function* (_0x3a9d6b, _0x3f7815 = {}) {
    const _0x263547 = _0x3f7815;
    const {
      useProxy = true
    } = _0x263547;
    const _0x5368ce = __objRest(_0x263547, ["useProxy"]);
    const _0x3553fa = _0x3a9d6b.startsWith("http") ? _0x3a9d6b : "" + MAIN_URL + _0x3a9d6b;
    const _0x23e259 = useProxy ? "" + PROXY_URL + encodeURIComponent(_0x3553fa) : _0x3553fa;
    const _0x53e991 = yield fetch(_0x23e259, __spreadValues({
      headers: HEADERS
    }, _0x5368ce));
    if (!_0x53e991.ok) {
      throw new Error("HTTP " + _0x53e991.status + " on " + _0x3553fa);
    }
    return yield _0x53e991.text();
  });
}
function fetchJson(_0xbe08be) {
  return __async(this, arguments, function* (_0x290be1, _0x1fec65 = {}) {
    const _0x562e16 = yield fetchText(_0x290be1, _0x1fec65);
    return JSON.parse(_0x562e16);
  });
}
function getImdbId(_0x34ed2f, _0x226466) {
  return __async(this, null, function* () {
    try {
      const _0x42212d = "https://api.themoviedb.org/3/" + (_0x226466 === "tv" ? "tv" : "movie") + "/" + _0x34ed2f + "/external_ids?api_key=1865f43a0549ca50d341dd9ab8b29f49";
      const _0x49d3ef = yield fetch(_0x42212d);
      const _0x28a7ea = yield _0x49d3ef.json();
      return _0x28a7ea.imdb_id;
    } catch (_0x4cf7e7) {
      return null;
    }
  });
}
function resolveMapping(_0x459472, _0x2cc631, _0x460b16) {
  return __async(this, null, function* () {
    try {
      const _0x130392 = "https://id-mapping-api-malid.hf.space/api/resolve?id=" + _0x459472 + "&s=" + _0x2cc631 + "&e=" + _0x460b16;
      const _0x21e924 = yield fetch(_0x130392);
      if (!_0x21e924.ok) {
        return null;
      }
      return yield _0x21e924.json();
    } catch (_0x2c2385) {
      return null;
    }
  });
}
function getMalTitle(_0x30d391) {
  return __async(this, null, function* () {
    try {
      const _0x4abe52 = yield fetch("https://api.jikan.moe/v4/anime/" + _0x30d391);
      if (!_0x4abe52.ok) {
        return null;
      }
      const _0x238ad3 = yield _0x4abe52.json();
      return _0x238ad3.data.title;
    } catch (_0x263c9e) {
      return null;
    }
  });
}
function searchAnime(_0x3fa230) {
  return __async(this, null, function* () {
    const _0x346695 = "/api?m=search&l=8&q=" + encodeURIComponent(_0x3fa230);
    return yield fetchJson(_0x346695);
  });
}
function extractQuality(_0x334f2a) {
  const _0x39fb17 = _0x334f2a.match(/(\d{3,4}p)/);
  if (_0x39fb17) {
    return _0x39fb17[1];
  } else {
    return "720p";
  }
}
function unpack(_0xe31c41) {
  try {
    const _0xb76ad = _0xe31c41.match(/}\((['"])([\s\S]*?)\1,\s*(\d+),\s*(\d+),\s*(['"])([\s\S]*?)\5\.split\((['"])\|\7\)/);
    if (_0xb76ad) {
      let [_0x5456ad, _0x1c0673, _0x51199a, _0x2f53c4, _0x8c4f7d, _0x2f8bea, _0x357743] = _0xb76ad;
      _0x51199a = _0x51199a.replace(/\\'/g, "'").replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
      _0x2f53c4 = parseInt(_0x2f53c4);
      _0x8c4f7d = parseInt(_0x8c4f7d);
      const _0x354b84 = _0x357743.split("|");
      const _0x530bd9 = _0x1ec9b0 => (_0x1ec9b0 < _0x2f53c4 ? "" : _0x530bd9(parseInt(_0x1ec9b0 / _0x2f53c4))) + ((_0x1ec9b0 = _0x1ec9b0 % _0x2f53c4) > 35 ? String.fromCharCode(_0x1ec9b0 + 29) : _0x1ec9b0.toString(36));
      const _0x4b988a = {};
      while (_0x8c4f7d--) {
        _0x4b988a[_0x530bd9(_0x8c4f7d)] = _0x354b84[_0x8c4f7d] || _0x530bd9(_0x8c4f7d);
      }
      return _0x51199a.replace(/\b\w+\b/g, _0x574c2b => _0x4b988a[_0x574c2b]);
    }
  } catch (_0x2f2b57) {
    console.error("[AnimePahe] Unpack error:", _0x2f2b57.message);
  }
  return _0xe31c41;
}
function extractKwik(_0x3437f3) {
  return __async(this, null, function* () {
    try {
      const _0x495ea4 = globalThis.SCRAPER_SETTINGS || {};
      const _0x3cd98e = _0x495ea4.domain || "https://animepahe.com";
      const _0x24d558 = yield fetchText(_0x3437f3, {
        headers: __spreadProps(__spreadValues({}, HEADERS), {
          Referer: _0x3cd98e + "/",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }),
        useProxy: false
      });
      const _0x1c346c = _0x24d558.match(/<script.*?>([\s\S]*?)<\/script>/g) || [];
      const _0x12465c = [];
      for (const _0x15ba09 of _0x1c346c) {
        if (_0x15ba09.includes("eval(function(p,a,c,k,e,d)")) {
          let _0x21942c = 0;
          while (true) {
            const _0x34bf2f = _0x15ba09.indexOf("eval(function(p,a,c,k,e,d)", _0x21942c);
            if (_0x34bf2f === -1) {
              break;
            }
            const _0x338b30 = _0x15ba09.indexOf(".split('|')", _0x34bf2f);
            if (_0x338b30 === -1) {
              break;
            }
            const _0x3ddf3c = _0x15ba09.indexOf("))", _0x338b30);
            if (_0x3ddf3c === -1) {
              break;
            }
            _0x12465c.push(_0x15ba09.substring(_0x34bf2f, _0x3ddf3c + 2));
            _0x21942c = _0x3ddf3c + 2;
          }
        }
      }
      for (const _0x14c3ab of _0x12465c) {
        const _0x235e1d = unpack(_0x14c3ab);
        const _0x42fe27 = _0x235e1d.match(/source\s*=\s*'([^']+m3u8[^']*)'/) || _0x235e1d.match(/source\s*=\s*"([^"]+m3u8[^"]*)"/);
        if (_0x42fe27) {
          return {
            url: _0x42fe27[1],
            headers: {
              Referer: "https://kwik.cx/",
              Origin: "https://kwik.cx",
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
          };
        }
      }
    } catch (_0x2c7b87) {
      console.error("[AnimePahe] Kwik extraction failed:", _0x2c7b87.message);
    }
    return null;
  });
}
function getStreams(_0x1a69bb, _0x2befb3, _0x52fcf8, _0xfc825d) {
  return __async(this, null, function* () {
    try {
      let _0x5e5e45 = null;
      let _0x581fa6 = "";
      let _0x2c186e = _0xfc825d;
      let _0x18bb35 = null;
      if (_0x2befb3 === "tv") {
        const _0x324a65 = yield getImdbId(_0x1a69bb, _0x2befb3);
        if (!_0x324a65) {
          return [];
        }
        const _0xd31fc = yield resolveMapping(_0x324a65, _0x52fcf8, _0xfc825d);
        if (!_0xd31fc || !_0xd31fc.mal_id) {
          return [];
        }
        _0x18bb35 = _0xd31fc.mal_id;
        _0x2c186e = _0xd31fc.mal_episode || _0xfc825d;
        _0x581fa6 = yield getMalTitle(_0x18bb35);
        if (!_0x581fa6) {
          return [];
        }
        const _0x4cf3da = yield searchAnime(_0x581fa6);
        if (_0x4cf3da.data && _0x4cf3da.data.length > 0) {
          for (let _0x22ea5c = 0; _0x22ea5c < Math.min(_0x4cf3da.data.length, 3); _0x22ea5c++) {
            const _0x481763 = _0x4cf3da.data[_0x22ea5c];
            const _0x1a4687 = yield fetchText("/anime/" + _0x481763.session);
            if (_0x1a4687.includes("myanimelist.net/anime/" + _0x18bb35)) {
              _0x5e5e45 = _0x481763.session;
              break;
            }
          }
        }
      } else {
        const _0x426da0 = "https://api.themoviedb.org/3/movie/" + _0x1a69bb + "?api_key=1865f43a0549ca50d341dd9ab8b29f49";
        const _0x51feb2 = yield fetch(_0x426da0);
        const _0xc37f69 = yield _0x51feb2.json();
        _0x581fa6 = _0xc37f69.title || _0xc37f69.original_title;
        _0x2c186e = 1;
        if (!_0x581fa6) {
          return [];
        }
        const _0x1201c6 = yield searchAnime(_0x581fa6);
        if (_0x1201c6.data && _0x1201c6.data.length > 0) {
          const _0xbe3fcd = _0x1201c6.data[0];
          if (_0xbe3fcd.title.toLowerCase() === _0x581fa6.toLowerCase()) {
            _0x5e5e45 = _0xbe3fcd.session;
          }
        }
      }
      if (!_0x5e5e45) {
        return [];
      }
      const _0xf57a00 = "/api?m=release&id=" + _0x5e5e45 + "&sort=episode_asc&page=1";
      const _0x2f7c8a = yield fetchJson(_0xf57a00);
      if (!_0x2f7c8a.data || _0x2f7c8a.data.length === 0) {
        return [];
      }
      const _0x38a1e6 = Math.floor(_0x2f7c8a.data[0].episode);
      const _0x1712c9 = _0x2f7c8a.per_page || 30;
      const _0x203dac = _0x38a1e6 - 1 + _0x2c186e;
      const _0x341dc5 = Math.ceil(_0x2c186e / _0x1712c9) || 1;
      const _0x2b765d = "/api?m=release&id=" + _0x5e5e45 + "&sort=episode_asc&page=" + _0x341dc5;
      const _0x2a1326 = yield fetchJson(_0x2b765d);
      let _0x55ba83 = null;
      if (_0x2a1326 && _0x2a1326.data) {
        const _0x34b42a = _0x2a1326.data.find(_0x1c811c => Math.floor(_0x1c811c.episode) == _0x203dac);
        if (_0x34b42a) {
          _0x55ba83 = _0x34b42a.session;
        }
      }
      if (!_0x55ba83 && _0x341dc5 !== 1) {
        const _0x2d7354 = _0x2f7c8a.data.find(_0x213fbf => Math.floor(_0x213fbf.episode) == _0x203dac);
        if (_0x2d7354) {
          _0x55ba83 = _0x2d7354.session;
        }
      }
      if (!_0x55ba83) {
        return [];
      }
      const _0x418b69 = "/play/" + _0x5e5e45 + "/" + _0x55ba83;
      const _0x1219db = yield fetchText(_0x418b69);
      const _0x50d5e1 = import_cheerio_without_node_native.default.load(_0x1219db);
      const _0xf83878 = [];
      const _0x3369fd = [];
      _0x50d5e1("#resolutionMenu button").each((_0x48d682, _0x3a3741) => {
        const _0xe51f28 = _0x50d5e1(_0x3a3741);
        const _0x4d5d8e = _0xe51f28.attr("data-src");
        const _0x22e454 = _0xe51f28.text();
        const _0x22d1e4 = extractQuality(_0x22e454);
        const _0x1e1048 = _0x22e454.toLowerCase().includes("eng") ? "Dub" : "Sub";
        if (_0x4d5d8e && _0x4d5d8e.includes("kwik")) {
          _0x3369fd.push(extractKwik(_0x4d5d8e).then(_0x126da6 => {
            if (_0x126da6) {
              _0xf83878.push({
                name: "AnimePahe (" + _0x22d1e4 + " " + _0x1e1048 + ")",
                title: _0x581fa6 + " - Episode " + _0x2c186e,
                url: _0x126da6.url,
                quality: _0x22d1e4,
                headers: _0x126da6.headers
              });
            }
          }));
        }
      });
      yield Promise.all(_0x3369fd);
      const _0x33e14a = {
        "1080p": 3,
        "720p": 2,
        "360p": 1
      };
      return _0xf83878.sort((_0x45ffbb, _0x54b2c9) => (_0x33e14a[_0x54b2c9.quality] || 0) - (_0x33e14a[_0x45ffbb.quality] || 0));
    } catch (_0x18cd2a) {
      return [];
    }
  });
}
function onSettings() {
  return __async(this, null, function* () {
    return [{
      type: "header",
      label: "Domain Selection"
    }, {
      type: "select",
      key: "domain",
      label: "Preferred Domain",
      description: "AnimePahe frequently rotates domains. Choose the one currently working for you.",
      options: [{
        label: "animepahe.com",
        value: "https://animepahe.com"
      }, {
        label: "animepahe.org",
        value: "https://animepahe.org"
      }, {
        label: "animepahe.pw",
        value: "https://animepahe.pw"
      }],
      defaultValue: "https://animepahe.com"
    }];
  });
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getStreams: getStreams,
    onSettings: onSettings
  };
} else {
  global.getStreams = getStreams;
  global.onSettings = onSettings;
}