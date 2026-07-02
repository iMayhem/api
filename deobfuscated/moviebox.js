'use strict';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (_0x513d25, _0x2c04ef, _0x1011af) => _0x2c04ef in _0x513d25 ? __defProp(_0x513d25, _0x2c04ef, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x1011af
}) : _0x513d25[_0x2c04ef] = _0x1011af;
var __spreadValues = (_0x20a1b1, _0xa62b0) => {
  for (var _0x451f5f in _0xa62b0 ||= {}) {
    if (__hasOwnProp.call(_0xa62b0, _0x451f5f)) {
      __defNormalProp(_0x20a1b1, _0x451f5f, _0xa62b0[_0x451f5f]);
    }
  }
  if (__getOwnPropSymbols) {
    for (var _0x451f5f of __getOwnPropSymbols(_0xa62b0)) {
      if (__propIsEnum.call(_0xa62b0, _0x451f5f)) {
        __defNormalProp(_0x20a1b1, _0x451f5f, _0xa62b0[_0x451f5f]);
      }
    }
  }
  return _0x20a1b1;
};
var __spreadProps = (_0x4cadec, _0x52555f) => __defProps(_0x4cadec, __getOwnPropDescs(_0x52555f));
var __async = (_0x4e839f, _0x24556f, _0x262665) => {
  return new Promise((_0x3595e9, _0x59af5d) => {
    var _0x55a10d = _0x3257b5 => {
      try {
        _0x3376e8(_0x262665.next(_0x3257b5));
      } catch (_0xfdd913) {
        _0x59af5d(_0xfdd913);
      }
    };
    var _0x34cc66 = _0x43adb4 => {
      try {
        _0x3376e8(_0x262665.throw(_0x43adb4));
      } catch (_0x197ecd) {
        _0x59af5d(_0x197ecd);
      }
    };
    var _0x3376e8 = _0x4daf27 => _0x4daf27.done ? _0x3595e9(_0x4daf27.value) : Promise.resolve(_0x4daf27.value).then(_0x55a10d, _0x34cc66);
    _0x3376e8((_0x262665 = _0x262665.apply(_0x4e839f, _0x24556f)).next());
  });
};
function onSettings() {
  return __async(this, null, function* () {
    return [{
      type: "header",
      label: "Audio Preferences"
    }, {
      type: "toggle",
      key: "langEnglish",
      label: "Enable English 🇺🇸",
      defaultValue: true
    }, {
      type: "toggle",
      key: "langHindi",
      label: "Enable Hindi 🇮🇳",
      defaultValue: true
    }];
  });
}
var PROVIDER_NAME = "MovieBox";
var CINESCRAPE_BASE = "https://stremio-moviebox-1.onrender.com/eyJyZXNvbHV0aW9uIjoiMTA4MHAiLCJsYW5ndWFnZSI6ImFsbCIsImxheW91dCI6ImJhZGdlcyJ9";
var TMDB_API_KEY = "6e6ab700b6477171ee6c23d504b1e9cb";
function getStreams(_0x5c129a, _0x468ca5, _0x1ff3a4, _0x5d56dc) {
  return __async(this, null, function* () {
    var _0x4d082a;
    const _0x5c20cb = _0x468ca5 === "tv" || _0x468ca5 === "series";
    const _0x270b30 = "https://api.themoviedb.org/3/" + (_0x5c20cb ? "tv" : "movie") + "/" + _0x5c129a + "?api_key=" + TMDB_API_KEY + "&append_to_response=external_ids";
    try {
      const _0x31e551 = globalThis.SCRAPER_SETTINGS || {};
      const _0x572cf9 = _0x31e551.langEnglish !== false;
      const _0x52c2b5 = _0x31e551.langHindi !== false;
      const _0x54e639 = yield fetch(_0x270b30).then(_0x510587 => _0x510587.json());
      const _0x37b267 = ((_0x4d082a = _0x54e639 == null ? undefined : _0x54e639.external_ids) == null ? undefined : _0x4d082a.imdb_id) || (_0x54e639 == null ? undefined : _0x54e639.imdb_id);
      if (!_0x37b267) {
        return [];
      }
      const _0x2e760f = _0x54e639.title || _0x54e639.name || "Movie/Show";
      const _0x1365d6 = _0x54e639.release_date ? _0x54e639.release_date.split("-")[0] : _0x54e639.first_air_date ? _0x54e639.first_air_date.split("-")[0] : "2026";
      const _0xaed155 = _0x5c20cb ? CINESCRAPE_BASE + "/stream/series/" + _0x37b267 + ":" + (_0x1ff3a4 || 1) + ":" + (_0x5d56dc || 1) + ".json" : CINESCRAPE_BASE + "/stream/movie/" + _0x37b267 + ".json";
      const _0x33d670 = yield fetch(_0xaed155).then(_0x34b9b5 => _0x34b9b5.json());
      if (!(_0x33d670 == null ? undefined : _0x33d670.streams) || _0x33d670.streams.length === 0) {
        return [];
      }
      const _0x336919 = [];
      _0x33d670.streams.forEach(_0x97b66c => {
        if (_0x97b66c.url && _0x97b66c.url.includes("bcdnxw.hakunaymatata.com")) {
          return;
        }
        const _0x2513cc = (_0x97b66c.title || _0x97b66c.description || "").toLowerCase();
        let _0x4aaa15 = "English 🇺🇲";
        let _0x15e43a = false;
        if (/hindi|hin|dual/.test(_0x2513cc)) {
          _0x4aaa15 = "Hindi 🇮🇳";
          _0x15e43a = true;
        } else if (/multi|🌐/.test(_0x2513cc)) {
          _0x4aaa15 = "Multi 🌐";
        }
        if (_0x15e43a && !_0x52c2b5) {
          return;
        }
        if (!_0x15e43a && !_0x572cf9) {
          return;
        }
        _0x336919.push(__spreadProps(__spreadValues({}, _0x97b66c), {
          lang: _0x4aaa15
        }));
      });
      const _0x2ff337 = [];
      const _0x2eb8ac = {};
      _0x336919.forEach(_0x34f8b0 => {
        const _0x4a0316 = (_0x34f8b0.title || "").toLowerCase();
        const _0x1b1070 = /2160|4k/.test(_0x4a0316) ? "2160p" : /1080/.test(_0x4a0316) ? "1080p" : /720/.test(_0x4a0316) ? "720p" : /480/.test(_0x4a0316) ? "480p" : "1080p";
        const _0x28d4c2 = _0x1b1070 + "-" + _0x34f8b0.lang;
        if (!_0x2eb8ac[_0x28d4c2]) {
          _0x2eb8ac[_0x28d4c2] = [];
        }
        _0x2eb8ac[_0x28d4c2].push(_0x34f8b0);
      });
      Object.entries(_0x2eb8ac).forEach(([_0x4bcddd, _0x1438b2]) => {
        const [_0x182e96, _0x1a0d05] = _0x4bcddd.split("-");
        _0x1438b2.forEach(_0x18dfeb => {
          const _0x1498d4 = (_0x18dfeb.title || _0x18dfeb.description || "").toLowerCase();
          const _0x315303 = _0x18dfeb.title ? _0x18dfeb.title.match(/(\d+(?:\.\d+)?\s*(?:GB|MB))/i) : null;
          const _0x49c53b = _0x315303 ? _0x315303[1] : "1.99 GB";
          const _0x57867a = /\b(mp4|avi|m4v)\b/.test(_0x1498d4) ? "MP4" : "MKV";
          const _0x2d6e68 = _0x1a0d05.replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD00-\uDFFF]/g, "").trim();
          const _0x49488a = "🎬 " + _0x2e760f + " - (" + _0x1365d6 + ")\n💎 " + _0x182e96 + " | 🔊 " + _0x2d6e68 + " | 💾 " + _0x49c53b + "\n🎞️ " + _0x57867a + " | ⛓️‍💥 MovieBox";
          _0x2ff337.push({
            name: PROVIDER_NAME + " | " + _0x182e96 + " | " + _0x1a0d05,
            title: _0x49488a,
            size: _0x49488a,
            description: _0x49488a,
            url: _0x18dfeb.url,
            behaviorHints: {
              proxyHeaders: {
                request: {
                  Referer: "https://stremio-moviebox-1.onrender.com/"
                }
              }
            }
          });
        });
      });
      return _0x2ff337;
    } catch (_0x87c2eb) {
      console.error("Global processing failure context:", _0x87c2eb);
      return [];
    }
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