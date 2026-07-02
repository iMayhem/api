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
var __defNormalProp = (_0x2dae07, _0x274018, _0x29e17c) => _0x274018 in _0x2dae07 ? __defProp(_0x2dae07, _0x274018, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x29e17c
}) : _0x2dae07[_0x274018] = _0x29e17c;
var __spreadValues = (_0x492fa4, _0x22e2bd) => {
  for (var _0x254b06 in _0x22e2bd ||= {}) {
    if (__hasOwnProp.call(_0x22e2bd, _0x254b06)) {
      __defNormalProp(_0x492fa4, _0x254b06, _0x22e2bd[_0x254b06]);
    }
  }
  if (__getOwnPropSymbols) {
    for (var _0x254b06 of __getOwnPropSymbols(_0x22e2bd)) {
      if (__propIsEnum.call(_0x22e2bd, _0x254b06)) {
        __defNormalProp(_0x492fa4, _0x254b06, _0x22e2bd[_0x254b06]);
      }
    }
  }
  return _0x492fa4;
};
var __spreadProps = (_0x15cfe8, _0xc48f6b) => __defProps(_0x15cfe8, __getOwnPropDescs(_0xc48f6b));
var __copyProps = (_0x18421e, _0x204a78, _0x11897e, _0x461fc8) => {
  if (_0x204a78 && typeof _0x204a78 === "object" || typeof _0x204a78 === "function") {
    for (let _0x17b24f of __getOwnPropNames(_0x204a78)) {
      if (!__hasOwnProp.call(_0x18421e, _0x17b24f) && _0x17b24f !== _0x11897e) {
        __defProp(_0x18421e, _0x17b24f, {
          get: () => _0x204a78[_0x17b24f],
          enumerable: !(_0x461fc8 = __getOwnPropDesc(_0x204a78, _0x17b24f)) || _0x461fc8.enumerable
        });
      }
    }
  }
  return _0x18421e;
};
var __toESM = (_0x4dde22, _0x120ea3, _0x25db69) => {
  _0x25db69 = _0x4dde22 != null ? __create(__getProtoOf(_0x4dde22)) : {};
  return __copyProps(_0x120ea3 || !_0x4dde22 || !_0x4dde22.__esModule ? __defProp(_0x25db69, "default", {
    value: _0x4dde22,
    enumerable: true
  }) : _0x25db69, _0x4dde22);
};
var __async = (_0x29d962, _0x5d921d, _0x15a883) => {
  return new Promise((_0x4ab987, _0xe95780) => {
    var _0x26f92c = _0x3d0820 => {
      try {
        _0x5eb037(_0x15a883.next(_0x3d0820));
      } catch (_0x14ebc6) {
        _0xe95780(_0x14ebc6);
      }
    };
    var _0x1ea74d = _0x2ff374 => {
      try {
        _0x5eb037(_0x15a883.throw(_0x2ff374));
      } catch (_0x1cd14e) {
        _0xe95780(_0x1cd14e);
      }
    };
    var _0x5eb037 = _0x6f11ba => _0x6f11ba.done ? _0x4ab987(_0x6f11ba.value) : Promise.resolve(_0x6f11ba.value).then(_0x26f92c, _0x1ea74d);
    _0x5eb037((_0x15a883 = _0x15a883.apply(_0x29d962, _0x5d921d)).next());
  });
};
var import_cheerio_without_node_native = __toESM(require("cheerio-without-node-native"));
var MEGAPLAY_BASE = "https://megaplay.buzz";
var VIDWISH_BASE = "https://vidwish.live";
var MEGACLOUD_BASE = "https://megacloud.bloggy.click";
var TMDB_API_KEY = "1865f43a0549ca50d341dd9ab8b29f49";
var DEFAULT_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Accept: "*/*",
  Connection: "keep-alive"
};
function fetchText(_0x5267e4) {
  return __async(this, arguments, function* (_0x45ccd9, _0x4bb980 = {}) {
    const _0x5212ba = yield fetch(_0x45ccd9, __spreadValues({
      headers: __spreadValues(__spreadValues({}, DEFAULT_HEADERS), _0x4bb980.headers)
    }, _0x4bb980));
    if (!_0x5212ba.ok) {
      throw new Error("HTTP " + _0x5212ba.status + " on " + _0x45ccd9);
    }
    return yield _0x5212ba.text();
  });
}
function fetchJson(_0x46b20f) {
  return __async(this, arguments, function* (_0x207286, _0x46f2a0 = {}) {
    const _0x111e1a = yield fetchText(_0x207286, _0x46f2a0);
    return JSON.parse(_0x111e1a);
  });
}
function getImdbId(_0x2c75d7, _0x86b892) {
  return __async(this, null, function* () {
    try {
      const _0x4003c9 = "https://api.themoviedb.org/3/" + (_0x86b892 === "tv" ? "tv" : "movie") + "/" + _0x2c75d7 + "/external_ids?api_key=" + TMDB_API_KEY;
      const _0x4ab9aa = yield fetchJson(_0x4003c9);
      return _0x4ab9aa.imdb_id || null;
    } catch (_0x17141d) {
      return null;
    }
  });
}
function getTmdbDetails(_0x252301, _0x15e30d) {
  return __async(this, null, function* () {
    try {
      const _0x523a4f = "https://api.themoviedb.org/3/" + (_0x15e30d === "tv" ? "tv" : "movie") + "/" + _0x252301 + "?api_key=" + TMDB_API_KEY;
      return yield fetchJson(_0x523a4f);
    } catch (_0x4ce065) {
      return null;
    }
  });
}
function getEpisodeMetadata(_0x173fd5, _0x2f3985, _0x2f37ca, _0x2f8a19) {
  return __async(this, null, function* () {
    try {
      if (_0x2f3985 === "movie") {
        const _0x1c1e8f = "https://api.themoviedb.org/3/movie/" + _0x173fd5 + "?api_key=" + TMDB_API_KEY;
        const _0x39dc1c = yield fetchJson(_0x1c1e8f);
        return {
          title: _0x39dc1c.title || "Movie",
          duration: _0x39dc1c.runtime ? _0x39dc1c.runtime + "m" : "N/A"
        };
      } else {
        const _0x52a169 = "https://api.themoviedb.org/3/tv/" + _0x173fd5 + "/season/" + _0x2f37ca + "/episode/" + _0x2f8a19 + "?api_key=" + TMDB_API_KEY;
        const _0x570c4d = yield fetchJson(_0x52a169);
        return {
          title: _0x570c4d.name || "Episode " + _0x2f8a19,
          duration: _0x570c4d.runtime ? _0x570c4d.runtime + "m" : "24m"
        };
      }
    } catch (_0x38aecd) {
      return {
        title: "Episode " + _0x2f8a19,
        duration: "24m"
      };
    }
  });
}
function resolveMapping(_0x4995db, _0x2365e5, _0x5a84a1) {
  return __async(this, null, function* () {
    try {
      const _0xb65be9 = "https://id-mapping-api-malid.hf.space/api/resolve?id=" + _0x4995db + "&s=" + _0x2365e5 + "&e=" + _0x5a84a1;
      const _0x3bc4ed = yield fetchJson(_0xb65be9);
      if (_0x3bc4ed.error) {
        return null;
      }
      return _0x3bc4ed;
    } catch (_0x6b6afc) {
      return null;
    }
  });
}
function searchMalId(_0x1e73db, _0xd87fc6) {
  return __async(this, null, function* () {
    try {
      const _0x2f1e3e = _0xd87fc6 === "movie" ? "movie" : "tv";
      const _0x4c44db = "https://api.jikan.moe/v4/anime?q=" + encodeURIComponent(_0x1e73db) + "&type=" + _0x2f1e3e + "&limit=1";
      const _0xdb646a = yield fetchJson(_0x4c44db);
      if (_0xdb646a.data && _0xdb646a.data.length > 0) {
        return _0xdb646a.data[0].mal_id;
      }
      return null;
    } catch (_0x375f0e) {
      return null;
    }
  });
}
function extractSources(_0x37492a, _0x5db6a6, _0x9fddec, _0x54d0c1, _0x54723c, _0xb13dbf, _0x13fa30, _0x3990cb, _0x1dd32c, _0x3c867b) {
  return __async(this, null, function* () {
    var _0x59ab2b;
    try {
      const _0x2d9d1c = yield fetchJson(_0x37492a, {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          Referer: _0x5db6a6,
          Origin: _0x9fddec
        }
      });
      const _0x91625f = (_0x59ab2b = _0x2d9d1c.sources) == null ? undefined : _0x59ab2b.file;
      if (!_0x91625f) {
        return [];
      }
      const _0x3f5a78 = _0x1dd32c.toLowerCase() === "sub" ? "Original (SUB)" : "English (DUB)";
      const _0x9e6cb = _0x1dd32c.toUpperCase();
      let _0x185941 = [];
      if (_0xb13dbf === "movie") {
        _0x185941 = ["🎬 " + _0x54723c, "🎞️ M3U8 | ⚡ Auto | 🌍 " + _0x3f5a78 + " | ⏱️ " + _0x3c867b.duration];
      } else {
        _0x185941 = ["🎬 " + _0x54723c, "🎥 S" + _0x13fa30 + "E" + _0x3990cb + " - " + _0x3c867b.epTitle, "🎞️ M3U8 | ⚡ Auto | 🌍 " + _0x3f5a78 + " | ⏱️ " + _0x3c867b.duration];
      }
      const _0x5e9a48 = _0x185941.join("\n");
      const _0x5bddf2 = [];
      _0x5bddf2.push({
        name: "HiAnime | Auto | [" + _0x54d0c1 + "] (" + _0x9e6cb + ")",
        title: _0x5e9a48,
        url: _0x91625f,
        quality: "Auto",
        headers: __spreadProps(__spreadValues({}, DEFAULT_HEADERS), {
          Referer: _0x9fddec + "/",
          Origin: _0x9fddec
        }),
        provider: "hianime",
        type: "m3u8"
      });
      if (_0x2d9d1c.tracks && _0x2d9d1c.tracks.length > 0) {
        const _0x5ba4b5 = _0x2d9d1c.tracks.filter(_0x2698de => _0x2698de.file && _0x2698de.kind === "captions").map(_0x466d9f => ({
          url: _0x466d9f.file,
          name: _0x466d9f.label || "English",
          language: _0x466d9f.label ? _0x466d9f.label.slice(0, 3).toLowerCase() : "en"
        }));
        _0x5bddf2[0].subtitles = _0x5ba4b5;
      }
      return _0x5bddf2;
    } catch (_0xc9e618) {
      return [];
    }
  });
}
function scrapeType(_0x5f36cd, _0x105396, _0x6ab94d, _0x2f8165, _0x5483aa, _0x50e7d1, _0x8de394) {
  return __async(this, null, function* () {
    const _0x5e1cac = [];
    const _0x2caa0b = MEGAPLAY_BASE + "/stream/mal/" + _0x5f36cd + "/" + _0x105396 + "/" + _0x6ab94d;
    try {
      const _0x29afac = yield fetchText(_0x2caa0b, {
        headers: {
          Referer: _0x2caa0b
        }
      });
      const _0x49a6e5 = import_cheerio_without_node_native.default.load(_0x29afac);
      const _0x14afb3 = _0x49a6e5("div.fix-area#megaplay-player");
      if (!_0x14afb3.length) {
        return [];
      }
      const _0x24b5d1 = _0x14afb3.attr("data-id");
      const _0x2eaf70 = _0x14afb3.attr("data-realid");
      const _0x358486 = [];
      if (_0x24b5d1) {
        const _0x561168 = MEGAPLAY_BASE + "/stream/getSources?id=" + _0x24b5d1 + "&id=" + _0x24b5d1;
        _0x358486.push(extractSources(_0x561168, _0x2caa0b, MEGAPLAY_BASE, "MegaPlay", _0x2f8165, _0x50e7d1, _0x8de394, _0x105396, _0x6ab94d, _0x5483aa));
      }
      if (_0x2eaf70) {
        const _0x2e7767 = VIDWISH_BASE + "/stream/s-2/" + _0x2eaf70 + "/" + _0x6ab94d;
        _0x358486.push((() => __async(this, null, function* () {
          try {
            const _0x2f7c7f = yield fetchText(_0x2e7767, {
              headers: {
                Referer: _0x2caa0b
              }
            });
            const _0x2e40ae = import_cheerio_without_node_native.default.load(_0x2f7c7f);
            const _0x315d7b = _0x2e40ae("div.fix-area#megaplay-player");
            const _0x3b622d = _0x315d7b.attr("data-id");
            if (_0x3b622d) {
              const _0x3731c5 = VIDWISH_BASE + "/stream/getSources?id=" + _0x3b622d + "&id=" + _0x3b622d;
              return yield extractSources(_0x3731c5, _0x2e7767, VIDWISH_BASE, "Vidwish", _0x2f8165, _0x50e7d1, _0x8de394, _0x105396, _0x6ab94d, _0x5483aa);
            }
          } catch (_0x308f42) {}
          return [];
        }))());
      }
      if (_0x2eaf70) {
        const _0x21c11a = MEGACLOUD_BASE + "/stream/s-3/" + _0x2eaf70 + "/" + _0x6ab94d;
        _0x358486.push((() => __async(this, null, function* () {
          try {
            const _0x5bea62 = yield fetchText(_0x21c11a, {
              headers: {
                Referer: _0x2caa0b
              }
            });
            const _0x60928c = import_cheerio_without_node_native.default.load(_0x5bea62);
            const _0x38cb83 = _0x60928c("div.fix-area#megaplay-player");
            const _0x7cab52 = _0x38cb83.attr("data-id");
            if (_0x7cab52) {
              const _0x29efbd = MEGACLOUD_BASE + "/stream/getSources?id=" + _0x7cab52 + "&id=" + _0x7cab52;
              return yield extractSources(_0x29efbd, _0x21c11a, MEGACLOUD_BASE, "MegaCloud", _0x2f8165, _0x50e7d1, _0x8de394, _0x105396, _0x6ab94d, _0x5483aa);
            }
          } catch (_0x18a89f) {}
          return [];
        }))());
      }
      const _0x2d09f6 = yield Promise.all(_0x358486);
      for (const _0x58af50 of _0x2d09f6) {
        _0x5e1cac.push(..._0x58af50);
      }
    } catch (_0x5cac93) {}
    return _0x5e1cac;
  });
}
function onSettings() {
  return __async(this, null, function* () {
    return [{
      type: "header",
      label: "Stream Preferences"
    }, {
      type: "select",
      key: "subDub",
      label: "Audio/Subtitle Preference",
      options: [{
        label: "Sub & Dub",
        value: "both"
      }, {
        label: "Sub Only",
        value: "sub"
      }, {
        label: "Dub Only",
        value: "dub"
      }],
      defaultValue: "both"
    }];
  });
}
function getStreams(_0x5bd111, _0x1a8559 = "tv", _0x4cfc56 = 1, _0x2d2abe = 1) {
  return __async(this, null, function* () {
    try {
      const _0x3f85df = yield getTmdbDetails(_0x5bd111, _0x1a8559);
      if (!_0x3f85df) {
        return [];
      }
      const _0x11f81d = _0x3f85df.genres || [];
      const _0x83f11e = _0x11f81d.some(_0x214e2b => _0x214e2b.id === 16);
      const _0x48cdf2 = _0x3f85df.original_language || "";
      const _0x22eff8 = _0x3f85df.origin_country || [];
      const _0x427082 = _0x48cdf2 === "ja" || _0x22eff8.includes("JP");
      if (!_0x83f11e || !_0x427082) {
        return [];
      }
      let _0x58d750 = null;
      let _0x555d4f = _0x2d2abe;
      let _0x31ea66 = _0x3f85df.name || _0x3f85df.title || _0x3f85df.original_title || (_0x1a8559 === "movie" ? "Movie" : "Anime");
      const _0x560e7 = yield getImdbId(_0x5bd111, _0x1a8559);
      if (!_0x560e7) {
        return [];
      }
      const _0xeb5b6e = yield getEpisodeMetadata(_0x5bd111, _0x1a8559, _0x4cfc56, _0x2d2abe);
      const _0x15eb37 = {
        epTitle: _0xeb5b6e.title,
        duration: _0xeb5b6e.duration
      };
      const _0x2bfc5c = _0x1a8559 === "movie" ? 1 : _0x4cfc56;
      const _0x40abb6 = _0x1a8559 === "movie" ? 1 : _0x2d2abe;
      if (_0x1a8559 === "movie") {
        _0x58d750 = yield searchMalId(_0x31ea66, "movie");
        _0x555d4f = 1;
      }
      if (!_0x58d750 && _0x1a8559 !== "movie") {
        const _0x237577 = yield resolveMapping(_0x560e7, _0x2bfc5c, _0x40abb6);
        if (_0x237577 && _0x237577.mal_id) {
          _0x58d750 = _0x237577.mal_id;
          _0x555d4f = _0x237577.mal_episode || _0x2d2abe;
        }
      }
      if (!_0x58d750) {
        return [];
      }
      const _0x4356e2 = globalThis.SCRAPER_SETTINGS || {};
      const _0x20c779 = _0x4356e2.subDub || "both";
      let _0x22ca7a = [];
      if (_0x20c779 === "both") {
        const [_0x31baf3, _0x1a1e6c] = yield Promise.all([scrapeType(_0x58d750, _0x555d4f, "sub", _0x31ea66, _0x15eb37, _0x1a8559, _0x2bfc5c), scrapeType(_0x58d750, _0x555d4f, "dub", _0x31ea66, _0x15eb37, _0x1a8559, _0x2bfc5c)]);
        _0x22ca7a = [..._0x31baf3, ..._0x1a1e6c];
      } else {
        _0x22ca7a = yield scrapeType(_0x58d750, _0x555d4f, _0x20c779, _0x31ea66, _0x15eb37, _0x1a8559, _0x2bfc5c);
      }
      const _0x324702 = new Set();
      return _0x22ca7a.filter(_0x4694dc => {
        if (_0x324702.has(_0x4694dc.url)) {
          return false;
        }
        _0x324702.add(_0x4694dc.url);
        return true;
      });
    } catch (_0x55da10) {
      return [];
    }
  });
}
module.exports = {
  getStreams: getStreams,
  onSettings: onSettings
};