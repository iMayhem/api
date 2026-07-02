var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (_0x4c2529, _0xf0d22d, _0xd0f73a) => _0xf0d22d in _0x4c2529 ? __defProp(_0x4c2529, _0xf0d22d, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0xd0f73a
}) : _0x4c2529[_0xf0d22d] = _0xd0f73a;
var __spreadValues = (_0x3f0e1d, _0x2c110c) => {
  for (var _0x2385c1 in _0x2c110c ||= {}) {
    if (__hasOwnProp.call(_0x2c110c, _0x2385c1)) {
      __defNormalProp(_0x3f0e1d, _0x2385c1, _0x2c110c[_0x2385c1]);
    }
  }
  if (__getOwnPropSymbols) {
    for (var _0x2385c1 of __getOwnPropSymbols(_0x2c110c)) {
      if (__propIsEnum.call(_0x2c110c, _0x2385c1)) {
        __defNormalProp(_0x3f0e1d, _0x2385c1, _0x2c110c[_0x2385c1]);
      }
    }
  }
  return _0x3f0e1d;
};
var __spreadProps = (_0xfee7a9, _0x2e851a) => __defProps(_0xfee7a9, __getOwnPropDescs(_0x2e851a));
var __async = (_0x5c523a, _0x4cf45c, _0xbbf5e1) => {
  return new Promise((_0x5bc88e, _0x2f6717) => {
    var _0x5a3fd5 = _0x49d615 => {
      try {
        _0x4a91b3(_0xbbf5e1.next(_0x49d615));
      } catch (_0x11ea2b) {
        _0x2f6717(_0x11ea2b);
      }
    };
    var _0x58b612 = _0xf94934 => {
      try {
        _0x4a91b3(_0xbbf5e1.throw(_0xf94934));
      } catch (_0x28a232) {
        _0x2f6717(_0x28a232);
      }
    };
    var _0x4a91b3 = _0x2dad2e => _0x2dad2e.done ? _0x5bc88e(_0x2dad2e.value) : Promise.resolve(_0x2dad2e.value).then(_0x5a3fd5, _0x58b612);
    _0x4a91b3((_0xbbf5e1 = _0xbbf5e1.apply(_0x5c523a, _0x4cf45c)).next());
  });
};
var KURAGE_BASE = "https://kurage.live";
var TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
var ANILIST_URL = "https://graphql.anilist.co";
var ARM_BASE = "https://arm.haglund.dev/api/v2";
var CINEMETA_URL = "https://v3-cinemeta.strem.io/meta";
var DEFAULT_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Accept: "application/json, text/plain, */*",
  "Accept-Language": "en-US,en;q=0.9",
  Origin: KURAGE_BASE,
  Referer: KURAGE_BASE + "/"
};
function fetchText(_0x1caee2) {
  return __async(this, arguments, function* (_0x101775, _0x5dba55 = {}) {
    const _0x4b5f74 = yield fetch(_0x101775, __spreadProps(__spreadValues({}, _0x5dba55), {
      headers: __spreadValues(__spreadValues({}, DEFAULT_HEADERS), _0x5dba55.headers || {})
    }));
    if (!_0x4b5f74.ok) {
      throw new Error("HTTP " + _0x4b5f74.status + ": " + _0x101775);
    }
    return yield _0x4b5f74.text();
  });
}
function fetchJson(_0x1e17b4) {
  return __async(this, arguments, function* (_0x4ad1ec, _0x1cb9ec = {}) {
    const _0x1eb7d8 = yield fetchText(_0x4ad1ec, _0x1cb9ec);
    return JSON.parse(_0x1eb7d8);
  });
}
function getSyncInfo(_0x1d852b, _0x151384, _0x2c2ed1, _0x446f5a) {
  return __async(this, null, function* () {
    const _0x129b2e = _0x415e93 => __async(this, null, function* () {
      const _0x503cc2 = _0x151384 === "movie" ? "movie" : "series";
      const _0x42e6c9 = CINEMETA_URL + "/" + _0x503cc2 + "/" + _0x415e93 + ".json";
      try {
        const _0x5077dc = yield fetchJson(_0x42e6c9);
        const _0x26f5f0 = _0x5077dc.meta;
        if (!_0x26f5f0) {
          throw new Error("No Cinemata metadata");
        }
        if (_0x151384 === "movie") {
          return {
            date: _0x26f5f0.released ? _0x26f5f0.released.split("T")[0] : null,
            title: _0x26f5f0.name,
            dayIndex: 1,
            runtime: _0x26f5f0.runtime || "N/A"
          };
        }
        const _0x4d0e73 = _0x26f5f0.videos || [];
        const _0x1076d5 = _0x4d0e73.find(_0x36ec1d => _0x36ec1d.season == _0x2c2ed1 && _0x36ec1d.episode == _0x446f5a);
        if (!_0x1076d5 || !_0x1076d5.released) {
          return {
            date: null,
            title: null,
            dayIndex: 1,
            runtime: "24m"
          };
        }
        const _0x59cef5 = _0x1076d5.released.split("T")[0];
        const _0x4a8232 = _0x4d0e73.filter(_0x3ef849 => _0x3ef849.season == _0x2c2ed1 && _0x3ef849.released && _0x3ef849.released.split("T")[0] === _0x59cef5 && parseInt(_0x3ef849.episode) < parseInt(_0x446f5a)).length + 1;
        return {
          date: _0x59cef5,
          title: _0x1076d5.name || null,
          dayIndex: _0x4a8232,
          runtime: _0x26f5f0.runtime || "24m"
        };
      } catch (_0x24169c) {
        return {
          date: null,
          title: null,
          dayIndex: 1,
          runtime: "24m"
        };
      }
    });
    const _0x5397c3 = "https://api.themoviedb.org/3/" + (_0x151384 === "movie" ? "movie" : "tv") + "/" + _0x1d852b;
    const [_0x3cd5e6, _0x3a3f1a] = yield Promise.all([fetchJson(_0x5397c3 + (_0x151384 === "movie" ? "" : "/external_ids") + ("?api_key=" + TMDB_API_KEY)), fetchJson(_0x5397c3 + ("?api_key=" + TMDB_API_KEY))]);
    let _0x16c1d6 = _0x3cd5e6.imdb_id || null;
    const _0x2d0242 = _0x3a3f1a.name || _0x3a3f1a.title || null;
    if (!_0x16c1d6) {
      try {
        const _0x2ca554 = yield fetchJson(ARM_BASE + "/themoviedb?id=" + _0x1d852b);
        _0x16c1d6 = Array.isArray(_0x2ca554) && _0x2ca554.length > 0 ? _0x2ca554[0].imdb : null;
      } catch (_0x56b588) {}
    }
    if (!_0x16c1d6) {
      throw new Error("No IMDb ID found for TMDB " + _0x1d852b);
    }
    const _0x2c3bd5 = yield _0x129b2e(_0x16c1d6);
    let _0x26b763 = _0x2c3bd5.date;
    if (_0x151384 === "movie" && _0x3a3f1a.release_date) {
      _0x26b763 = _0x3a3f1a.release_date;
    }
    if (!_0x26b763) {
      throw new Error("Could not find release date for ID " + _0x16c1d6);
    }
    const _0x35ac6c = _0x3a3f1a.runtime ? _0x3a3f1a.runtime + "m" : _0x2c3bd5.runtime ? _0x2c3bd5.runtime.toString().includes("m") ? _0x2c3bd5.runtime : _0x2c3bd5.runtime + "m" : "24m";
    return {
      imdbId: _0x16c1d6,
      tmdbId: _0x1d852b,
      releaseDate: _0x26b763,
      title: _0x2d0242,
      episodeTitle: _0x2c3bd5.title,
      dayIndex: _0x2c3bd5.dayIndex,
      episode: _0x446f5a,
      duration: _0x35ac6c
    };
  });
}
function resolveAnilistId(_0x3daa3e) {
  return __async(this, null, function* () {
    var _0x3f6201;
    var _0xd41751;
    const {
      releaseDate: _0x107e3a,
      title: _0x43b110,
      episode: _0x16224b,
      episodeTitle: _0x443d4b,
      dayIndex: _0x5cbc04
    } = _0x3daa3e;
    if (!_0x107e3a || !/^\d{4}-\d{2}-\d{2}/.test(_0x107e3a)) {
      return null;
    }
    const _0x28284c = "query($search:String){Page(perPage:20){media(search:$search,type:ANIME){id type format title{romaji english}startDate{year month day}endDate{year month day}episodes streamingEpisodes{title}}}}";
    try {
      const _0x1edad7 = yield fetchJson(ANILIST_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: _0x28284c,
          variables: {
            search: _0x43b110
          }
        })
      });
      const _0xc6d3bc = ((_0xd41751 = (_0x3f6201 = _0x1edad7.data) == null ? undefined : _0x3f6201.Page) == null ? undefined : _0xd41751.media) || [];
      if (_0xc6d3bc.length === 0) {
        return null;
      }
      const _0x4c5b38 = new Date(_0x107e3a);
      for (const _0x142a44 of _0xc6d3bc) {
        const _0x428304 = _0x142a44.startDate;
        const _0x46d78e = _0x428304.year && _0x428304.month && _0x428304.day ? _0x428304.year + "-" + String(_0x428304.month).padStart(2, "0") + "-" + String(_0x428304.day).padStart(2, "0") : null;
        if (!_0x46d78e) {
          continue;
        }
        const _0x1c2fc6 = new Date(_0x46d78e);
        const _0x1de188 = Math.ceil(Math.abs(_0x4c5b38.getTime() - _0x1c2fc6.getTime()) / 86400000);
        let _0x389649 = false;
        if (_0x142a44.format === "MOVIE" || _0x142a44.format === "SPECIAL" || _0x142a44.episodes === 1) {
          if (_0x1de188 <= 2) {
            _0x389649 = true;
          }
        } else {
          const _0x20bc6a = new Date(_0x1c2fc6);
          _0x20bc6a.setDate(_0x20bc6a.getDate() - 2);
          if (_0x4c5b38 >= _0x20bc6a) {
            if (_0x142a44.endDate && _0x142a44.endDate.year) {
              const _0x299545 = new Date(_0x142a44.endDate.year, (_0x142a44.endDate.month || 12) - 1, _0x142a44.endDate.day || 31);
              _0x299545.setDate(_0x299545.getDate() + 2);
              if (_0x4c5b38 <= _0x299545) {
                _0x389649 = true;
              }
            } else {
              _0x389649 = true;
            }
          }
        }
        if (_0x389649) {
          const _0x2c2600 = _0x142a44.format !== "MOVIE" && _0x142a44.format !== "SPECIAL" && _0x142a44.episodes !== 1;
          let _0x359785 = _0x2c2600 && _0x16224b ? _0x16224b : _0x5cbc04 || 1;
          const _0x3415fb = _0x142a44.streamingEpisodes || [];
          if (_0x3415fb.length > 1 && _0x443d4b) {
            const _0x356602 = _0x443d4b.toLowerCase().replace(/[^a-z0-9]/g, "");
            for (let _0x2d1e3e = 0; _0x2d1e3e < _0x3415fb.length; _0x2d1e3e++) {
              const _0x137cad = (_0x3415fb[_0x2d1e3e].title || "").toLowerCase().replace(/[^a-z0-9]/g, "");
              if (_0x137cad && (_0x137cad.indexOf(_0x356602) !== -1 || _0x356602.indexOf(_0x137cad) !== -1)) {
                _0x359785 = _0x2d1e3e + 1;
                break;
              }
            }
          }
          return {
            alId: _0x142a44.id,
            episode: _0x359785
          };
        }
      }
    } catch (_0xa3e291) {}
    return null;
  });
}
function getStreams(_0x2f293c, _0x307e15, _0x5affbb, _0x20dbd9) {
  return __async(this, null, function* () {
    try {
      const _0x595a2f = yield getSyncInfo(_0x2f293c, _0x307e15, _0x5affbb, _0x20dbd9);
      const _0x438e73 = yield resolveAnilistId(_0x595a2f);
      if (!_0x438e73 || !_0x438e73.alId) {
        console.log("[Kurage] Could not resolve AniList ID for TMDB " + _0x2f293c);
        return [];
      }
      const {
        alId: _0x688ae2,
        episode: _0x24b8f8
      } = _0x438e73;
      console.log("[Kurage] Resolved to AniList ID: " + _0x688ae2 + ", Episode: " + _0x24b8f8);
      const _0x3d0623 = {
        "0": {
          json: {
            id: _0x688ae2
          }
        },
        "1": {
          json: {
            animeId: _0x688ae2,
            episode: _0x24b8f8,
            language: "sub"
          }
        },
        "2": {
          json: {
            animeId: _0x688ae2,
            episode: _0x24b8f8,
            language: "dub"
          }
        }
      };
      const _0x4d504b = KURAGE_BASE + "/api/trpc/catalog.anilistInfo,episodes.source,episodes.source?batch=1&input=" + encodeURIComponent(JSON.stringify(_0x3d0623));
      const _0x1afd11 = yield fetchJson(_0x4d504b, {
        headers: {
          "trpc-accept": "application/json",
          "x-trpc-source": "nextjs-react"
        }
      });
      const _0x1738e0 = [];
      _0x1afd11.forEach(_0x4dc964 => {
        var _0x1e232e;
        var _0x33736c;
        var _0x3d2c9e;
        const _0x2cbc91 = ((_0x3d2c9e = (_0x33736c = (_0x1e232e = _0x4dc964.result) == null ? undefined : _0x1e232e.data) == null ? undefined : _0x33736c.json) == null ? undefined : _0x3d2c9e.servers) || [];
        _0x2cbc91.forEach(_0x55a323 => {
          const _0x23e5ac = _0x55a323.url.startsWith("/") ? "" + KURAGE_BASE + _0x55a323.url : _0x55a323.url;
          let _0x56f05b = {};
          try {
            const _0x2901e8 = new URL(_0x23e5ac);
            const _0x2dcd4 = _0x2901e8.searchParams.get("headers");
            if (_0x2dcd4) {
              _0x56f05b = JSON.parse(atob(_0x2dcd4));
            }
          } catch (_0x5e4a24) {}
          const _0x2158a1 = (_0x55a323.language || "sub").toUpperCase();
          const _0x5b1fb0 = _0x2158a1 === "SUB" ? "Original (SUB)" : "English (DUB)";
          let _0xd826f1 = [];
          if (_0x307e15 === "movie") {
            _0xd826f1 = ["🎬 " + _0x595a2f.title, "🎞️ MP4 | ⚡ Auto | 🌍 " + _0x5b1fb0 + " | ⏱️ " + _0x595a2f.duration];
          } else {
            _0xd826f1 = ["🎬 " + _0x595a2f.title, "🎥 S" + _0x5affbb + "E" + _0x20dbd9 + " - " + (_0x595a2f.episodeTitle || "Episode " + _0x24b8f8), "🎞️ MP4 | ⚡ Auto | 🌍 " + _0x5b1fb0 + " | ⏱️ " + _0x595a2f.duration];
          }
          const _0x11fa8f = _0xd826f1.join("\n");
          _0x1738e0.push({
            name: "Kurage | Auto | [" + _0x55a323.label + "] (" + _0x2158a1 + ")",
            title: _0x11fa8f,
            url: _0x23e5ac,
            quality: "Auto",
            headers: __spreadValues(__spreadValues({}, DEFAULT_HEADERS), _0x56f05b),
            provider: "kurage",
            type: _0x55a323.sourceType || "mp4"
          });
        });
      });
      return _0x1738e0;
    } catch (_0x4c1fcd) {
      console.error("[Kurage] Error: " + _0x4c1fcd.message);
      return [];
    }
  });
}
module.exports = {
  getStreams: getStreams
};