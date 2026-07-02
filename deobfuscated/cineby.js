var __async = (_0x402a6e, _0x2d5732, _0x5f2975) => {
  return new Promise((_0x5c9fef, _0x2ad3cf) => {
    var _0x521ae1 = _0x4ad4ac => {
      try {
        _0x142b2b(_0x5f2975.next(_0x4ad4ac));
      } catch (_0x380f12) {
        _0x2ad3cf(_0x380f12);
      }
    };
    var _0x27b601 = _0x2b9f22 => {
      try {
        _0x142b2b(_0x5f2975.throw(_0x2b9f22));
      } catch (_0x33c8de) {
        _0x2ad3cf(_0x33c8de);
      }
    };
    var _0x142b2b = _0x262643 => _0x262643.done ? _0x5c9fef(_0x262643.value) : Promise.resolve(_0x262643.value).then(_0x521ae1, _0x27b601);
    _0x142b2b((_0x5f2975 = _0x5f2975.apply(_0x402a6e, _0x2d5732)).next());
  });
};
var BACKEND = "http://145.241.158.129:3113";
var VIDEASY_API = "https://api.videasy.to";
var VIDEASY_DB = "https://db.videasy.to/3";
var ANIME_DB = "https://anime-db.videasy.net/api/v2/hianime";
var SERVERS = [{
  name: "Oxygen",
  endpoint: "myflixerzupcloud/sources-with-title"
}, {
  name: "Hydrogen",
  endpoint: "cdn/sources-with-title"
}, {
  name: "Lithium",
  endpoint: "moviebox/sources-with-title"
}, {
  name: "Helium",
  endpoint: "1movies/sources-with-title"
}, {
  name: "Titanium",
  endpoint: "primesrcme/sources-with-title"
}];
var UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
var PLAY_HEADERS = {
  "User-Agent": UA,
  Referer: "https://www.vidking.net/",
  Origin: "https://www.vidking.net"
};
var VIDLINK_HEADERS = {
  "User-Agent": UA,
  Referer: "https://vidlink.pro/",
  Origin: "https://vidlink.pro"
};
var SERVER_ORDER = {
  Hydrogen: 0,
  Neon: 1,
  Cypher: 2,
  Helium: 3,
  Vidlink: 9
};
function safeFetch(_0x446266, _0x51afed, _0xdf79ee) {
  _0xdf79ee = _0xdf79ee || 15000;
  var _0x5c14d8;
  var _0x63f73c;
  try {
    _0x5c14d8 = new AbortController();
    _0x63f73c = setTimeout(function () {
      _0x5c14d8.abort();
    }, _0xdf79ee);
  } catch (_0x1389fc) {
    _0x5c14d8 = null;
  }
  var _0x4bef43 = Object.assign({
    method: "GET"
  }, _0x51afed || {});
  if (_0x5c14d8) {
    _0x4bef43.signal = _0x5c14d8.signal;
  }
  return fetch(_0x446266, _0x4bef43).then(function (_0x5a0e2e) {
    if (_0x63f73c) {
      clearTimeout(_0x63f73c);
    }
    return _0x5a0e2e;
  }).catch(function (_0x5f142c) {
    if (_0x63f73c) {
      clearTimeout(_0x63f73c);
    }
    throw _0x5f142c;
  });
}
function getTmdbMeta(_0x57ee06, _0x4372ad, _0x390ca0) {
  return __async(this, null, function* () {
    var _0x45b91e = VIDEASY_DB + "/" + _0x57ee06 + "/" + _0x4372ad + "?append_to_response=external_ids,genres";
    var _0xac0edd = yield safeFetch(_0x45b91e, {}, 8000);
    if (!_0xac0edd.ok) {
      throw new Error("TMDB " + _0xac0edd.status);
    }
    var _0x4c8bd1 = yield _0xac0edd.json();
    var _0x17cac3;
    var _0x2b4ac4;
    var _0x4b466a;
    var _0x27ab0f;
    if (_0x57ee06 === "movie") {
      _0x17cac3 = _0x4c8bd1.title;
      _0x2b4ac4 = _0x4c8bd1.release_date ? new Date(_0x4c8bd1.release_date).getFullYear() : "";
    } else {
      _0x17cac3 = _0x4c8bd1.name;
      _0x2b4ac4 = _0x4c8bd1.first_air_date ? new Date(_0x4c8bd1.first_air_date).getFullYear() : "";
    }
    _0x4b466a = _0x4c8bd1.external_ids && _0x4c8bd1.external_ids.imdb_id || "";
    var _0x5369b1 = (_0x4c8bd1.genres || []).map(function (_0x117883) {
      return _0x117883.id;
    });
    var _0x5cbf10 = _0x5369b1.indexOf(16) !== -1;
    var _0x3825fb = _0x4c8bd1.original_language === "ja";
    _0x27ab0f = _0x57ee06 === "tv" && _0x5cbf10 && _0x3825fb;
    var _0x34972f = null;
    var _0x53db0c = 0;
    if (_0x390ca0 && _0x4c8bd1.seasons) {
      var _0x38fedd = parseInt(_0x390ca0, 10);
      for (var _0x497d81 = 0; _0x497d81 < _0x4c8bd1.seasons.length; _0x497d81++) {
        if (_0x4c8bd1.seasons[_0x497d81].season_number === _0x38fedd) {
          _0x34972f = _0x4c8bd1.seasons[_0x497d81].name;
          _0x53db0c = _0x4c8bd1.seasons[_0x497d81].episode_count || 0;
          break;
        }
      }
    }
    return {
      title: _0x17cac3,
      year: _0x2b4ac4,
      imdbId: _0x4b466a,
      isAnime: _0x27ab0f,
      originalTitle: _0x4c8bd1.original_name || _0x4c8bd1.original_title || "",
      seasonName: _0x34972f,
      seasonEpisodeCount: _0x53db0c
    };
  });
}
function fetchEncrypted(_0x612807, _0x491668) {
  return __async(this, null, function* () {
    var _0x1af437 = VIDEASY_API + "/" + _0x612807 + "?title=" + encodeURIComponent(_0x491668.title) + "&mediaType=" + _0x491668.mediaType + "&year=" + _0x491668.year + "&episodeId=" + (_0x491668.episodeId || "1") + "&seasonId=" + (_0x491668.seasonId || "1") + "&tmdbId=" + _0x491668.tmdbId + "&imdbId=" + encodeURIComponent(_0x491668.imdbId || "") + "&_t=" + Date.now();
    var _0x4cf471 = yield safeFetch(_0x1af437, {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache"
      }
    }, 12000);
    if (!_0x4cf471.ok) {
      throw new Error("API " + _0x4cf471.status);
    }
    return _0x4cf471.text();
  });
}
function decryptItems(_0x47fd42, _0x465f74, _0x3bc471) {
  return __async(this, null, function* () {
    var _0x58435b = yield safeFetch(BACKEND + "/decrypt-batch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        items: _0x47fd42,
        tmdbId: String(_0x465f74),
        cacheKey: _0x3bc471
      })
    }, 10000);
    if (!_0x58435b.ok) {
      console.log("[Cineby] Backend returned " + _0x58435b.status);
      return null;
    }
    var _0x1b483b = yield _0x58435b.json();
    if (_0x1b483b.error) {
      console.log("[Cineby] Backend error: " + _0x1b483b.error);
      return null;
    }
    return _0x1b483b;
  });
}
function fetchVidlinkFallback(_0x6806c9) {
  return __async(this, null, function* () {
    var _0x29c5d7 = BACKEND + "/vidlink-streams?tmdbId=" + encodeURIComponent(_0x6806c9.tmdbId) + "&mediaType=" + encodeURIComponent(_0x6806c9.mediaType) + "&season=" + encodeURIComponent(_0x6806c9.seasonId || "1") + "&episode=" + encodeURIComponent(_0x6806c9.episodeId || "1");
    var _0x2d68a8 = yield safeFetch(_0x29c5d7, {}, 22000);
    if (!_0x2d68a8.ok) {
      throw new Error("Vidlink " + _0x2d68a8.status);
    }
    return _0x2d68a8.json();
  });
}
function fetchRealBackend(_0x2b560d) {
  return __async(this, null, function* () {
    var _0x3c0ce3 = BACKEND + "/real-streams?title=" + encodeURIComponent(_0x2b560d.title) + "&mediaType=" + encodeURIComponent(_0x2b560d.mediaType) + "&year=" + encodeURIComponent(_0x2b560d.year || "") + "&episodeId=" + encodeURIComponent(_0x2b560d.episodeId || "1") + "&seasonId=" + encodeURIComponent(_0x2b560d.seasonId || "1") + "&tmdbId=" + encodeURIComponent(_0x2b560d.tmdbId) + "&imdbId=" + encodeURIComponent(_0x2b560d.imdbId || "");
    var _0xc79e74 = yield safeFetch(_0x3c0ce3, {}, 30000);
    if (!_0xc79e74.ok) {
      throw new Error("Real backend " + _0xc79e74.status);
    }
    return _0xc79e74.json();
  });
}
function formatVidlinkStreams(_0x298af7) {
  var _0x53316c = _0x298af7.sources || [];
  var _0x55253b = [];
  for (var _0x4a15d0 = 0; _0x4a15d0 < _0x53316c.length; _0x4a15d0++) {
    var _0xcd4dc4 = _0x53316c[_0x4a15d0];
    if (!_0xcd4dc4.url) {
      continue;
    }
    var _0x1a47e3 = normalizeQuality(_0xcd4dc4.quality || "auto");
    var _0x2039d2 = BACKEND + "/vidlink-proxy?url=" + encodeURIComponent(_0xcd4dc4.url);
    _0x55253b.push({
      name: "Cineby",
      title: _0x1a47e3 + " [Cineby]",
      url: _0xcd4dc4.url,
      quality: _0x1a47e3,
      size: "",
      headers: VIDLINK_HEADERS,
      subtitles: [],
      provider: "cineby"
    });
    _0x55253b.push({
      name: "Cineby",
      title: _0x1a47e3 + " Fallback [Cineby]",
      url: _0x2039d2,
      quality: _0x1a47e3,
      size: "",
      headers: {},
      subtitles: [],
      provider: "cineby"
    });
  }
  _0x55253b.sort(compareStreams);
  return _0x55253b;
}
function formatRegularStreams(_0x33e0ce) {
  var _0x26ba98 = _0x33e0ce.sources || [];
  var _0x2c2a73 = [];
  for (var _0x471c58 = 0; _0x471c58 < _0x26ba98.length; _0x471c58++) {
    var _0x43b47a = _0x26ba98[_0x471c58];
    if (!_0x43b47a.url) {
      continue;
    }
    var _0x2b6a88 = normalizeQuality(_0x43b47a.quality);
    var _0x50f326 = _0x43b47a.server ? " [" + _0x43b47a.server + "]" : "";
    var _0x362a1b = BACKEND + "/videasy-proxy?url=" + encodeURIComponent(_0x43b47a.url);
    if (_0x2b6a88 === "4K") {
      _0x2c2a73.push({
        name: _0x43b47a.server ? "Cineby " + _0x43b47a.server : "Cineby",
        title: _0x2b6a88 + _0x50f326,
        url: _0x43b47a.url,
        quality: _0x2b6a88,
        size: "",
        headers: PLAY_HEADERS,
        subtitles: [],
        provider: "cineby"
      });
    }
    _0x2c2a73.push({
      name: _0x43b47a.server ? "Cineby " + _0x43b47a.server : "Cineby",
      title: _0x2b6a88 === "4K" ? _0x2b6a88 + " Fallback" + _0x50f326 : _0x2b6a88 + _0x50f326,
      url: _0x362a1b,
      quality: _0x2b6a88,
      size: "",
      headers: {},
      subtitles: [],
      provider: "cineby"
    });
  }
  _0x2c2a73.sort(compareStreams);
  return _0x2c2a73;
}
function compareStreams(_0x4224b6, _0x2e3ced) {
  var _0x436401 = qualityRank(_0x2e3ced && _0x2e3ced.quality) - qualityRank(_0x4224b6 && _0x4224b6.quality);
  if (_0x436401) {
    return _0x436401;
  }
  var _0x4198dd = directRank(_0x2e3ced) - directRank(_0x4224b6);
  if (_0x4198dd) {
    return _0x4198dd;
  }
  var _0x20c0d8 = serverRank(_0x4224b6) - serverRank(_0x2e3ced);
  if (_0x20c0d8) {
    return _0x20c0d8;
  }
  return String(_0x4224b6 && _0x4224b6.title || "").localeCompare(String(_0x2e3ced && _0x2e3ced.title || ""));
}
function directRank(_0x9860d0) {
  if (_0x9860d0 && _0x9860d0.title && String(_0x9860d0.title).indexOf("Fallback") !== -1) {
    return 0;
  } else {
    return 1;
  }
}
function serverRank(_0x1e9ca0) {
  var _0x5b5104 = String(_0x1e9ca0 && _0x1e9ca0.title || "");
  var _0x9afad = _0x5b5104.match(/\[([^\]]+)\]/);
  var _0x20929f = _0x9afad ? _0x9afad[1] : "";
  if (SERVER_ORDER.hasOwnProperty(_0x20929f)) {
    return SERVER_ORDER[_0x20929f];
  } else {
    return 99;
  }
}
function qualityRank(_0x53baa7) {
  _0x53baa7 = normalizeQuality(_0x53baa7);
  if (_0x53baa7 === "4K") {
    return 4000;
  }
  var _0x2bfbc7 = String(_0x53baa7 || "").match(/(\d+)/);
  if (_0x2bfbc7) {
    return parseInt(_0x2bfbc7[1], 10);
  } else {
    return 0;
  }
}
function normalizeQuality(_0x3f004d) {
  if (!_0x3f004d) {
    return "Unknown";
  }
  var _0x5b3a57 = String(_0x3f004d).toUpperCase().trim();
  if (_0x5b3a57 === "4K" || _0x5b3a57 === "2160P") {
    return "4K";
  }
  if (_0x5b3a57 === "1080P") {
    return "1080p";
  }
  if (_0x5b3a57 === "720P") {
    return "720p";
  }
  if (_0x5b3a57 === "480P") {
    return "480p";
  }
  if (_0x5b3a57 === "360P") {
    return "360p";
  }
  return _0x3f004d;
}
function normTitle(_0x2cd8cf) {
  return String(_0x2cd8cf || "").toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();
}
function titleScore(_0x17a37d, _0x4a7a89) {
  var _0x34f5fd = normTitle(_0x17a37d).split(" ").filter(Boolean);
  var _0x36fd37 = normTitle(_0x4a7a89).split(" ").filter(Boolean);
  var _0x3b77b6 = _0x34f5fd.length <= _0x36fd37.length ? _0x34f5fd : _0x36fd37;
  var _0x39ea20 = _0x34f5fd.length <= _0x36fd37.length ? _0x36fd37 : _0x34f5fd;
  var _0x25a71b = {};
  _0x39ea20.forEach(function (_0x30d61f) {
    _0x25a71b[_0x30d61f] = true;
  });
  var _0x578f49 = _0x3b77b6.filter(function (_0x53dfe4) {
    return _0x25a71b[_0x53dfe4];
  }).length;
  if (_0x578f49 === _0x3b77b6.length) {
    return 1;
  }
  return _0x578f49 / Math.max(_0x34f5fd.length, _0x36fd37.length, 1);
}
function findHiAnimeId(_0x4596d6, _0x594f06, _0xcdae8f, _0x4647e0, _0x158067) {
  return __async(this, null, function* () {
    var _0xa21b6a = [_0x4596d6];
    if (_0x594f06 && normTitle(_0x594f06) !== normTitle(_0x4596d6)) {
      _0xa21b6a.push(_0x594f06);
    }
    var _0x3cba5d = yield Promise.all(_0xa21b6a.map(function (_0x2cd1e6) {
      var _0x2b4e0a = ANIME_DB + "/search?q=" + encodeURIComponent(_0x2cd1e6);
      return safeFetch(_0x2b4e0a, {}, 8000).then(function (_0x9e3163) {
        if (_0x9e3163.ok) {
          return _0x9e3163.json();
        } else {
          return null;
        }
      }).then(function (_0x517c9d) {
        if (!_0x517c9d) {
          return [];
        }
        return _0x517c9d.data && _0x517c9d.data.animes || _0x517c9d.animes || [];
      }).catch(function () {
        return [];
      });
    }));
    var _0x5b9651 = null;
    var _0x3a7b47 = 0;
    var _0x40f01a = false;
    var _0x1e658e = Infinity;
    var _0x4e6cc7 = [];
    for (var _0x26c12f = 0; _0x26c12f < _0x3cba5d.length; _0x26c12f++) {
      var _0xf01730 = _0x3cba5d[_0x26c12f];
      var _0x2dcd7e = _0xa21b6a[_0x26c12f];
      var _0x1473db = normTitle(_0x2dcd7e).split(" ").filter(Boolean).length;
      for (var _0xe5a987 = 0; _0xe5a987 < _0xf01730.length; _0xe5a987++) {
        var _0x3c7605 = _0xf01730[_0xe5a987];
        var _0x2919b5 = titleScore(_0x3c7605.name, _0x2dcd7e);
        var _0x44d20e = !!_0x3c7605.episodes && !!_0x3c7605.episodes.dub;
        var _0x19284b = Math.abs(normTitle(_0x3c7605.name).split(" ").filter(Boolean).length - _0x1473db);
        var _0x9f54a7 = _0x2919b5 > _0x3a7b47 || _0x2919b5 === _0x3a7b47 && _0x19284b < _0x1e658e || _0x2919b5 === _0x3a7b47 && _0x19284b === _0x1e658e && _0x44d20e && !_0x40f01a;
        if (_0x9f54a7) {
          _0x3a7b47 = _0x2919b5;
          _0x5b9651 = _0x3c7605.id;
          _0x40f01a = _0x44d20e;
          _0x1e658e = _0x19284b;
        }
        if (_0x2919b5 >= 0.8) {
          _0x4e6cc7.push(_0x3c7605);
        }
      }
    }
    if (_0x3a7b47 < 0.4) {
      console.log("[Cineby/HiAnime] No match found (best score: " + _0x3a7b47.toFixed(2) + ")");
      return null;
    }
    if (_0x4647e0 && _0x4e6cc7.length > 1) {
      var _0x4bab26 = normTitle(_0x4647e0);
      var _0x16a46b = _0x4bab26.split(" ").filter(function (_0x2311de) {
        return _0x2311de.length > 2;
      });
      if (_0x16a46b.length > 0) {
        var _0x183b21 = -1;
        var _0x12c7a9 = null;
        var _0x4f0c57 = false;
        for (var _0xe5a987 = 0; _0xe5a987 < _0x4e6cc7.length; _0xe5a987++) {
          var _0x3c7605 = _0x4e6cc7[_0xe5a987];
          var _0xb429fd = normTitle(_0x3c7605.name);
          var _0x50f7fc = 0;
          for (var _0x362ada = 0; _0x362ada < _0x16a46b.length; _0x362ada++) {
            if (_0xb429fd.indexOf(_0x16a46b[_0x362ada]) > -1) {
              _0x50f7fc++;
            }
          }
          var _0x243b7c = _0x50f7fc / _0x16a46b.length;
          if (_0x158067 > 4) {
            var _0x6f6b41 = _0x3c7605.episodes && (_0x3c7605.episodes.sub || _0x3c7605.episodes.dub || 0) || 0;
            if (_0x6f6b41 > 0 && _0x6f6b41 < _0x158067 * 0.5) {
              _0x243b7c *= 0.3;
            }
          }
          var _0x44d20e = !!_0x3c7605.episodes && !!_0x3c7605.episodes.dub;
          if (_0x243b7c > _0x183b21 || _0x243b7c === _0x183b21 && _0x44d20e && !_0x4f0c57) {
            _0x183b21 = _0x243b7c;
            _0x12c7a9 = _0x3c7605.id;
            _0x4f0c57 = _0x44d20e;
          }
        }
        if (_0x183b21 >= 0.5 && _0x12c7a9) {
          console.log("[Cineby/HiAnime] Season-name tiebreaker: \"" + _0x4647e0 + "\" -> " + _0x12c7a9);
          return _0x12c7a9;
        }
      }
    }
    console.log("[Cineby/HiAnime] Matched: " + _0x5b9651 + " (score: " + _0x3a7b47.toFixed(2) + ")");
    return _0x5b9651;
  });
}
function getHiAnimeStreams(_0x3f2df0, _0x4f40ae) {
  return __async(this, null, function* () {
    var _0x1793ca = VIDEASY_API + "/hianime/sources-with-id?providerId=" + encodeURIComponent(_0x3f2df0) + "&episodeId=" + _0x4f40ae + "&dub=true";
    var _0x2ef498 = yield safeFetch(_0x1793ca, {}, 15000);
    if (!_0x2ef498.ok) {
      throw new Error("HiAnime API " + _0x2ef498.status);
    }
    var _0x44f35c = yield _0x2ef498.json();
    var _0x4a166e = _0x44f35c.mediaSources;
    if (!_0x4a166e) {
      throw new Error("No mediaSources in response");
    }
    return {
      sources: _0x4a166e.sources || [],
      subtitles: _0x4a166e.subtitles || []
    };
  });
}
function getStreams(_0xe5caa5, _0x424c18, _0xd2395c, _0xfdf844) {
  return __async(this, null, function* () {
    try {
      var _0x375431 = _0x424c18 === "movie" ? "movie" : "tv";
      var _0x6f09eb = String(parseInt(_0xd2395c, 10) || 1);
      var _0x4adbb2 = String(parseInt(_0xfdf844, 10) || 1);
      console.log("[Cineby] Fetching " + _0x375431 + " tmdb:" + _0xe5caa5 + (_0x375431 === "tv" ? " S" + _0x6f09eb + "E" + _0x4adbb2 : ""));
      var _0x320ccf = yield getTmdbMeta(_0x375431, _0xe5caa5, _0x375431 === "tv" ? _0x6f09eb : null);
      console.log("[Cineby] " + _0x320ccf.title + " (" + _0x320ccf.year + ")" + (_0x320ccf.isAnime ? " [ANIME]" : "") + (_0x320ccf.seasonName ? " [" + _0x320ccf.seasonName + "]" : ""));
      if (_0x320ccf.isAnime) {
        console.log("[Cineby] Using HiAnime path for anime");
        try {
          var _0x33256f = yield findHiAnimeId(_0x320ccf.title, _0x320ccf.originalTitle, _0x320ccf.year, _0x320ccf.seasonName, _0x320ccf.seasonEpisodeCount);
          if (!_0x33256f) {
            console.log("[Cineby] HiAnime: no match, falling back to TV path");
          } else {
            var _0x2c75af = yield getHiAnimeStreams(_0x33256f, _0x4adbb2);
            var _0x2c79c0 = _0x2c75af.sources;
            console.log("[Cineby/HiAnime] " + _0x2c79c0.length + " sources");
            if (_0x2c79c0.length === 0) {
              console.log("[Cineby] HiAnime: no sources, falling back to TV path");
            } else {
              var _0x2beae8 = [];
              for (var _0x249527 = 0; _0x249527 < _0x2c79c0.length; _0x249527++) {
                var _0x2063c1 = _0x2c79c0[_0x249527];
                if (!_0x2063c1.url) {
                  continue;
                }
                var _0x5dbb75 = _0x2063c1.quality || "Unknown";
                var _0x2a70fc = _0x5dbb75.split(" - ");
                var _0x508729 = normalizeQuality(_0x2a70fc[0]);
                var _0x135ca4 = _0x2a70fc[1] || "";
                var _0x501fdd = _0x135ca4 ? _0x508729 + " - " + _0x135ca4 : _0x508729;
                var _0x316df1 = BACKEND + "/hianime-proxy?url=" + encodeURIComponent(_0x2063c1.url);
                var _0x3c4fed = _0x135ca4 ? "Cineby HiAnime " + _0x508729 + " " + _0x135ca4 : "Cineby HiAnime " + _0x508729;
                _0x2beae8.push({
                  name: _0x3c4fed,
                  title: _0x501fdd + " [HiAnime]",
                  url: _0x316df1,
                  quality: _0x508729,
                  size: "",
                  headers: {},
                  subtitles: [],
                  provider: "cineby"
                });
              }
              _0x2beae8.sort(compareStreams);
              console.log("[Cineby/HiAnime] Returning " + _0x2beae8.length + " streams");
              return _0x2beae8;
            }
          }
        } catch (_0x3e7012) {
          console.log("[Cineby/HiAnime] Error: " + _0x3e7012.message + " — falling back to TV path");
        }
      }
      var _0x23b3f7 = {
        title: _0x320ccf.title,
        mediaType: _0x375431,
        year: String(_0x320ccf.year),
        tmdbId: String(_0xe5caa5),
        imdbId: _0x320ccf.imdbId,
        seasonId: _0x6f09eb,
        episodeId: _0x4adbb2
      };
      var _0x241c91 = _0x375431 + ":" + _0xe5caa5 + ":" + _0x6f09eb + ":" + _0x4adbb2;
      try {
        console.log("[Cineby] Trying real Videasy session backend");
        var _0x3bf829 = yield fetchRealBackend(_0x23b3f7);
        if (_0x3bf829 && _0x3bf829.sources && _0x3bf829.sources.length > 0) {
          console.log("[Cineby] Real backend returned " + _0x3bf829.sources.length + " sources from [" + (_0x3bf829.servers || []).join(", ") + "]");
          return formatRegularStreams(_0x3bf829);
        }
        console.log("[Cineby] Real backend returned no sources, trying direct/fallback path");
      } catch (_0x4475da) {
        console.log("[Cineby] Real backend error: " + _0x4475da.message + " — trying direct/fallback path");
      }
      var _0x406e31 = SERVERS[1] || SERVERS[0];
      var _0x362ac8 = yield fetchEncrypted(_0x406e31.endpoint, _0x23b3f7).then(function (_0x256c35) {
        if (!_0x256c35 || _0x256c35.length < 10) {
          throw new Error("Empty");
        }
        return {
          server: _0x406e31.name,
          encrypted: _0x256c35
        };
      }).catch(function () {
        return null;
      });
      if (_0x362ac8) {
        console.log("[Cineby] Got encrypted data from primary " + _0x406e31.name);
        var _0x83610 = yield decryptItems([_0x362ac8], _0xe5caa5, _0x241c91 + ":" + _0x406e31.name);
        if (_0x83610 && _0x83610.sources && _0x83610.sources.length > 0) {
          console.log("[Cineby] " + _0x83610.sources.length + " sources from [" + (_0x83610.servers || []).join(", ") + "]");
          var _0x312447 = formatRegularStreams(_0x83610);
          console.log("[Cineby] Returning " + _0x312447.length + " streams");
          return _0x312447;
        }
        console.log("[Cineby] Primary " + _0x406e31.name + " returned no sources, trying backups");
      }
      var _0x1f0d0d = SERVERS.filter(function (_0x28bdb7) {
        return _0x28bdb7.name !== _0x406e31.name;
      });
      var _0x1c85b4 = _0x1f0d0d.map(function (_0x16dbf4) {
        return fetchEncrypted(_0x16dbf4.endpoint, _0x23b3f7).then(function (_0xb258c) {
          if (!_0xb258c || _0xb258c.length < 10) {
            throw new Error("Empty");
          }
          return {
            server: _0x16dbf4.name,
            encrypted: _0xb258c
          };
        }).catch(function () {
          return null;
        });
      });
      var _0x380009 = yield Promise.all(_0x1c85b4);
      var _0x3b5695 = [];
      for (var _0x6c7b91 = 0; _0x6c7b91 < _0x380009.length; _0x6c7b91++) {
        if (_0x380009[_0x6c7b91]) {
          _0x3b5695.push(_0x380009[_0x6c7b91]);
        }
      }
      if (_0x3b5695.length === 0) {
        console.log("[Cineby] No encrypted data from any server");
        try {
          console.log("[Cineby] Trying Vidlink fallback");
          var _0x1f69f4 = yield fetchVidlinkFallback(_0x23b3f7);
          var _0x1d05ee = formatVidlinkStreams(_0x1f69f4);
          console.log("[Cineby] Vidlink fallback returning " + _0x1d05ee.length + " streams");
          return _0x1d05ee;
        } catch (_0x37dd6c) {
          console.log("[Cineby] Vidlink fallback error: " + _0x37dd6c.message);
          return [];
        }
      }
      console.log("[Cineby] Got encrypted data from " + _0x3b5695.length + " servers");
      var _0x52f772 = yield decryptItems(_0x3b5695, _0xe5caa5, _0x241c91 + ":backups");
      if (!_0x52f772) {
        try {
          console.log("[Cineby] Trying Vidlink fallback after decrypt failure");
          return formatVidlinkStreams(yield fetchVidlinkFallback(_0x23b3f7));
        } catch (_0x2db1b0) {
          return [];
        }
      }
      var _0x5b37a1 = _0x52f772.sources || [];
      console.log("[Cineby] " + _0x5b37a1.length + " sources from [" + (_0x52f772.servers || []).join(", ") + "]");
      var _0x2beae8 = formatRegularStreams(_0x52f772);
      if (_0x2beae8.length === 0) {
        try {
          console.log("[Cineby] Trying Vidlink fallback after empty source list");
          _0x2beae8 = formatVidlinkStreams(yield fetchVidlinkFallback(_0x23b3f7));
        } catch (_0x37e55a) {}
      }
      console.log("[Cineby] Returning " + _0x2beae8.length + " streams");
      return _0x2beae8;
    } catch (_0xd52cc7) {
      console.error("[Cineby] Error: " + _0xd52cc7.message);
      return [];
    }
  });
}
module.exports = {
  getStreams: getStreams
};