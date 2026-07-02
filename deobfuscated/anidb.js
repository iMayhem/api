var __async = (_0x3201be, _0x47356b, _0x5aa756) => {
  return new Promise((_0x14ddc2, _0x4f6472) => {
    var _0x198337 = _0x477364 => {
      try {
        _0x51e3f4(_0x5aa756.next(_0x477364));
      } catch (_0x1535ed) {
        _0x4f6472(_0x1535ed);
      }
    };
    var _0x3758e1 = _0x1bb98b => {
      try {
        _0x51e3f4(_0x5aa756.throw(_0x1bb98b));
      } catch (_0x114279) {
        _0x4f6472(_0x114279);
      }
    };
    var _0x51e3f4 = _0x5a9902 => _0x5a9902.done ? _0x14ddc2(_0x5a9902.value) : Promise.resolve(_0x5a9902.value).then(_0x198337, _0x3758e1);
    _0x51e3f4((_0x5aa756 = _0x5aa756.apply(_0x3201be, _0x47356b)).next());
  });
};
var cheerio = require("cheerio-without-node-native");
var TMDB_API_KEY = "1865f43a0549ca50d341dd9ab8b29f49";
var BASE_URL = "https://anidb.app";
var USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
function getTmdbInfo(_0x2c6410, _0x2668b5, _0x507ecc, _0x2885de) {
  return __async(this, null, function* () {
    const _0x4b1147 = _0x2668b5 === "tv" ? "tv" : "movie";
    const _0x5374d6 = Number.isInteger(_0x507ecc) ? _0x507ecc : 1;
    const _0x2c99e3 = Number.isInteger(_0x2885de) ? _0x2885de : 1;
    try {
      if (_0x2668b5 === "tv") {
        const _0x164a10 = "https://api.themoviedb.org/3/tv/" + _0x2c6410 + "?api_key=" + TMDB_API_KEY;
        const _0x5d0f33 = yield fetch(_0x164a10, {
          headers: {
            "User-Agent": USER_AGENT,
            Accept: "application/json"
          }
        });
        if (!_0x5d0f33.ok) {
          return {
            title: "",
            year: null,
            runtime: 0
          };
        }
        const _0xcaedb8 = yield _0x5d0f33.json();
        const _0x1f57be = _0xcaedb8.name || "";
        const _0x22eb13 = _0xcaedb8.first_air_date ? parseInt(_0xcaedb8.first_air_date.slice(0, 4), 10) : null;
        const _0x5ae794 = "https://api.themoviedb.org/3/tv/" + _0x2c6410 + "/season/" + _0x5374d6 + "/episode/" + _0x2c99e3 + "?api_key=" + TMDB_API_KEY;
        const _0x528a1c = yield fetch(_0x5ae794, {
          headers: {
            "User-Agent": USER_AGENT,
            Accept: "application/json"
          }
        });
        let _0x447c00 = _0xcaedb8.episode_run_time ? _0xcaedb8.episode_run_time[0] : 0;
        if (_0x528a1c.ok) {
          const _0x35eabd = yield _0x528a1c.json();
          if (_0x35eabd.runtime) {
            _0x447c00 = _0x35eabd.runtime;
          }
        }
        return {
          title: _0x1f57be,
          year: _0x22eb13,
          runtime: _0x447c00
        };
      } else {
        const _0x18407a = "https://api.themoviedb.org/3/movie/" + _0x2c6410 + "?api_key=" + TMDB_API_KEY;
        const _0x375c05 = yield fetch(_0x18407a, {
          headers: {
            "User-Agent": USER_AGENT,
            Accept: "application/json"
          }
        });
        if (!_0x375c05.ok) {
          return {
            title: "",
            year: null,
            runtime: 0
          };
        }
        const _0x4cfc62 = yield _0x375c05.json();
        const _0x3c4ede = _0x4cfc62.release_date ? parseInt(_0x4cfc62.release_date.slice(0, 4), 10) : null;
        return {
          title: _0x4cfc62.title || "",
          year: _0x3c4ede,
          runtime: _0x4cfc62.runtime || 0
        };
      }
    } catch (_0x213d24) {
      return {
        title: "",
        year: null,
        runtime: 0
      };
    }
  });
}
function normalize(_0x3736ac) {
  return String(_0x3736ac || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}
function rankResults(_0x25b0ce, _0xe810ca) {
  const _0x9ee06d = normalize(_0xe810ca);
  const _0xbc5174 = [];
  const _0x32b90e = [];
  for (let _0x59c216 = 0; _0x59c216 < _0x25b0ce.length; _0x59c216++) {
    const _0x51a8fd = normalize(_0x25b0ce[_0x59c216].title);
    if (_0x51a8fd === _0x9ee06d) {
      _0xbc5174.push(_0x25b0ce[_0x59c216]);
    } else if (_0x51a8fd.indexOf(_0x9ee06d) !== -1 || _0x9ee06d.indexOf(_0x51a8fd) !== -1) {
      _0x32b90e.push(_0x25b0ce[_0x59c216]);
    }
  }
  return _0xbc5174.concat(_0x32b90e);
}
function absolutize(_0x26b9cc) {
  if (!_0x26b9cc) {
    return "";
  }
  if (_0x26b9cc.indexOf("http") === 0) {
    return _0x26b9cc;
  }
  if (_0x26b9cc.indexOf("//") === 0) {
    return "https:" + _0x26b9cc;
  }
  if (_0x26b9cc.charAt(0) === "/") {
    return BASE_URL + _0x26b9cc;
  }
  return BASE_URL + "/" + _0x26b9cc;
}
function searchSite(_0x54b77e) {
  return __async(this, null, function* () {
    const _0x9fb706 = [];
    const _0x354c9d = {};
    let _0x2109b2;
    try {
      const _0x2ff12a = yield fetch(BASE_URL + "/browse?q=" + encodeURIComponent(_0x54b77e), {
        headers: {
          "User-Agent": USER_AGENT,
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.9"
        }
      });
      _0x2109b2 = yield _0x2ff12a.text();
    } catch (_0x2dcf28) {
      return _0x9fb706;
    }
    const _0x446cd0 = cheerio.load(_0x2109b2);
    _0x446cd0("a.anime-card").each(function (_0x3a5c27, _0x377962) {
      const _0x2a78ff = absolutize(_0x446cd0(_0x377962).attr("href") || "");
      const _0xa5e15a = (_0x446cd0(_0x377962).attr("title") || _0x446cd0(_0x377962).find("img").attr("alt") || "").trim();
      if (_0x2a78ff && _0xa5e15a && !_0x354c9d[_0x2a78ff]) {
        _0x354c9d[_0x2a78ff] = true;
        _0x9fb706.push({
          url: _0x2a78ff,
          title: _0xa5e15a
        });
      }
    });
    return _0x9fb706;
  });
}
function getEpisodes(_0x1d5ecf) {
  return __async(this, null, function* () {
    const _0x57c586 = yield fetch(BASE_URL + "/api/frontend/anime/" + _0x1d5ecf + "/episodes", {
      headers: {
        "User-Agent": USER_AGENT,
        "X-Requested-With": "XMLHttpRequest"
      }
    });
    const _0x1de86c = yield _0x57c586.json();
    if (_0x1de86c && _0x1de86c.episodes) {
      return _0x1de86c.episodes;
    } else {
      return [];
    }
  });
}
function getLanguages(_0x465bf5, _0x353f32) {
  return __async(this, null, function* () {
    const _0x3fd6ec = yield fetch(BASE_URL + "/api/frontend/episode/" + _0x465bf5 + "/languages", {
      headers: {
        "User-Agent": USER_AGENT,
        "X-Requested-With": "XMLHttpRequest",
        Referer: BASE_URL + "/anime/" + _0x353f32
      }
    });
    const _0x7fe0f0 = yield _0x3fd6ec.json();
    if (_0x7fe0f0 && _0x7fe0f0.languages) {
      return _0x7fe0f0.languages;
    } else {
      return [];
    }
  });
}
var HLS_REGEXES = [/file\s*:\s*["'](https?:\/\/[^"']+\.m3u8[^"']*)["']/i, /sources\s*:\s*\[\s*\{[^}]*file\s*:\s*["'](https?:\/\/[^"']+\.m3u8[^"']*)["']/i, /["'](https?:\/\/[^"']+\/master\.m3u8[^"']*)["']/i, /["'](https?:\/\/[^"']+\.m3u8[^"']*)["']/i];
function extractEmbed(_0x24053c) {
  return __async(this, null, function* () {
    try {
      const _0x378bcd = yield fetch(_0x24053c, {
        headers: {
          "User-Agent": USER_AGENT,
          Referer: BASE_URL + "/"
        }
      });
      const _0x4eba61 = yield _0x378bcd.text();
      for (let _0xa21305 = 0; _0xa21305 < HLS_REGEXES.length; _0xa21305++) {
        const _0x2e03fd = _0x4eba61.match(HLS_REGEXES[_0xa21305]);
        if (_0x2e03fd && _0x2e03fd[1]) {
          return _0x2e03fd[1];
        }
      }
    } catch (_0x3f4868) {}
    return null;
  });
}
function getStreams(_0xa7d540, _0x41060f, _0x37ec66, _0x45fdec) {
  return __async(this, null, function* () {
    try {
      const _0x2988e6 = yield getTmdbInfo(_0xa7d540, _0x41060f, _0x37ec66, _0x45fdec);
      if (!_0x2988e6.title) {
        return [];
      }
      console.log("[AniDB] " + _0x41060f + " \"" + _0x2988e6.title + "\" S" + _0x37ec66 + "E" + _0x45fdec);
      const _0xfb33e = rankResults(yield searchSite(_0x2988e6.title), _0x2988e6.title);
      const _0x581036 = _0x41060f === "tv" ? _0x45fdec || 1 : 1;
      for (let _0x1d692b = 0; _0x1d692b < Math.min(3, _0xfb33e.length); _0x1d692b++) {
        const _0x5c7b8d = _0xfb33e[_0x1d692b];
        const _0xda1ce2 = _0x5c7b8d.url.split("/").filter(Boolean).pop() || "";
        const _0x14918e = _0xda1ce2.split("-").pop();
        const _0xe5ca01 = parseInt(_0x14918e, 10);
        if (!_0xe5ca01) {
          continue;
        }
        let _0x119c32 = [];
        try {
          _0x119c32 = yield getEpisodes(_0xe5ca01);
        } catch (_0x32f686) {
          continue;
        }
        if (!_0x119c32.length) {
          continue;
        }
        let _0xd170c2 = null;
        for (let _0xd6c271 = 0; _0xd6c271 < _0x119c32.length; _0xd6c271++) {
          if (_0x119c32[_0xd6c271].number === _0x581036) {
            _0xd170c2 = _0x119c32[_0xd6c271];
            break;
          }
        }
        if (!_0xd170c2) {
          _0xd170c2 = _0x119c32[_0x581036 - 1] || _0x119c32[0];
        }
        if (!_0xd170c2 || _0xd170c2.id == null) {
          continue;
        }
        let _0x21a936 = [];
        try {
          _0x21a936 = yield getLanguages(_0xd170c2.id, _0xda1ce2);
        } catch (_0x391440) {
          continue;
        }
        const _0x34c2b3 = [];
        for (let _0xfb51fa = 0; _0xfb51fa < _0x21a936.length; _0xfb51fa++) {
          const _0x4cdccc = _0x21a936[_0xfb51fa].embed_url;
          if (_0x4cdccc) {
            _0x34c2b3.push({
              url: _0x4cdccc,
              name: _0x21a936[_0xfb51fa].name || _0x21a936[_0xfb51fa].code || ""
            });
          }
        }
        if (!_0x34c2b3.length) {
          continue;
        }
        const _0x8a1131 = yield Promise.all(_0x34c2b3.map(function (_0x3278ac) {
          return extractEmbed(_0x3278ac.url);
        }));
        const _0x39588e = [];
        const _0x1eed04 = {};
        for (let _0x5da8e5 = 0; _0x5da8e5 < _0x8a1131.length; _0x5da8e5++) {
          const _0x43d7a9 = _0x8a1131[_0x5da8e5];
          if (!_0x43d7a9 || _0x1eed04[_0x43d7a9]) {
            continue;
          }
          _0x1eed04[_0x43d7a9] = true;
          const _0x402a3e = String(_0x34c2b3[_0x5da8e5].name || "").toLowerCase();
          let _0x3a031a = _0x34c2b3[_0x5da8e5].name ? _0x34c2b3[_0x5da8e5].name : "RAW / SUB";
          let _0x34c899 = "🗣️";
          let _0x481493 = "Subbed / Dubbed";
          if (_0x402a3e.includes("japanese") || _0x402a3e.includes("jp") || _0x402a3e.includes("jap")) {
            _0x34c899 = "🇯🇵";
            _0x481493 = "Japanese Audio";
          } else if (_0x402a3e.includes("english") || _0x402a3e.includes("eng") || _0x402a3e.includes("en")) {
            _0x34c899 = "🇺🇸";
            _0x481493 = "English Audio";
          } else if (_0x402a3e.includes("korean") || _0x402a3e.includes("kor") || _0x402a3e.includes("kr")) {
            _0x34c899 = "🇰🇷";
            _0x481493 = "Korean Audio";
          }
          const _0x33e2de = _0x2988e6.year ? " (" + _0x2988e6.year + ")" : "";
          let _0x4e63e3 = "N/A";
          if (_0x2988e6.runtime && Number.isInteger(_0x2988e6.runtime) && _0x2988e6.runtime > 0) {
            _0x4e63e3 = _0x2988e6.runtime + " min";
          }
          var _0x2a4dc5 = "🎋 " + _0x2988e6.title + _0x33e2de;
          var _0x5191ff = "🏷️ Auto | " + _0x34c899 + " " + _0x3a031a + " | 🔊 Native";
          var _0x1f71d8 = "⚡ HLS | ⏱️ " + _0x4e63e3 + " | 📌 AniDB Stream";
          var _0x159785 = _0x2a4dc5 + "\n" + _0x5191ff + "\n" + _0x1f71d8;
          _0x39588e.push({
            name: "AniDB | Auto | " + _0x481493,
            title: _0x159785,
            url: _0x43d7a9,
            quality: "Auto",
            description: _0x159785,
            headers: {
              Referer: BASE_URL + "/"
            }
          });
        }
        if (_0x39588e.length) {
          console.log("[AniDB] found " + _0x39588e.length + " streams");
          return _0x39588e;
        }
      }
      console.log("[AniDB] no streams found");
      return [];
    } catch (_0x3c169f) {
      console.error("[AniDB] Fatal: " + (_0x3c169f && _0x3c169f.message));
      return [];
    }
  });
}
module.exports = {
  getStreams: getStreams
};