var DOMAINS_URL = "https://raw.githubusercontent.com/wooodyhood/nuvio-repo/main/domains.json";
var PURSTREAM_FALLBACK = "ac";
var PURSTREAM_API = "https://api.purstream." + PURSTREAM_FALLBACK + "/api/v1";
var PURSTREAM_REFERER = "https://purstream." + PURSTREAM_FALLBACK + "/";
var PURSTREAM_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
var TMDB_KEY = "f3d757824f08ea2cff45eb8f47ca3a1e";
var _cachedEndpoint = null;
function getTmdbDetails(_0x11a3bd, _0x167ad8) {
  var _0x3a3b7a = "https://api.themoviedb.org/3/" + (_0x167ad8 === "tv" ? "tv" : "movie") + "/" + _0x11a3bd + "?api_key=" + TMDB_KEY + "&language=en-US";
  return fetch(_0x3a3b7a).then(function (_0xd9008e) {
    return _0xd9008e.json();
  }).then(function (_0x24829d) {
    var _0x4f92ca = _0x24829d.release_date || _0x24829d.first_air_date || "";
    return {
      enName: _0x24829d.title || _0x24829d.name || "Purstream",
      year: _0x4f92ca ? _0x4f92ca.split("-")[0] : "",
      duration: _0x167ad8 === "movie" && _0x24829d.runtime ? _0x24829d.runtime + " min" : _0x167ad8 === "tv" && _0x24829d.episode_run_time && _0x24829d.episode_run_time.length > 0 ? _0x24829d.episode_run_time[0] + " min" : ""
    };
  }).catch(function () {
    return {
      enName: "Purstream",
      year: "",
      duration: ""
    };
  });
}
function getEpisodeInfo(_0x5ee155, _0x1f3098, _0x53f3dc) {
  if (!_0x5ee155 || !_0x1f3098 || !_0x53f3dc) {
    return Promise.resolve(null);
  }
  var _0x392c9b = "https://api.themoviedb.org/3/tv/" + _0x5ee155 + "/season/" + _0x1f3098 + "/episode/" + _0x53f3dc + "?api_key=" + TMDB_KEY + "&language=en-US";
  return fetch(_0x392c9b).then(function (_0x1a8569) {
    return _0x1a8569.json();
  }).then(function (_0x380c1f) {
    return {
      name: _0x380c1f.name || null,
      duration: _0x380c1f.runtime ? _0x380c1f.runtime + " min" : null
    };
  }).catch(function () {
    return null;
  });
}
function buildPurstreamTitle(_0x3fd266, _0x53e886, _0x38c740, _0x2dd4fb, _0x86826c, _0x13542d, _0x30fc7e) {
  var _0x52d743 = _0x53e886.includes("2160") || _0x53e886.includes("4K") ? "💎" : "📺";
  var _0x56956f = "🇫🇷";
  var _0xfefe6b = "VF";
  var _0x344d9a = (_0x38c740 || "").toUpperCase();
  if (_0x344d9a.indexOf("MULTI") !== -1) {
    _0x56956f = "🌍";
    _0xfefe6b = "MULTI";
  } else if (_0x344d9a.indexOf("VOST") !== -1) {
    _0x56956f = "🔡";
    _0xfefe6b = "VOSTFR";
  }
  var _0x136736 = "🎬 ";
  if (_0x86826c && _0x13542d) {
    _0x136736 += "S" + _0x86826c + " E" + _0x13542d + (_0x30fc7e && _0x30fc7e.name ? " - " + _0x30fc7e.name : "") + " | " + _0x3fd266.enName;
  } else {
    _0x136736 += _0x3fd266.enName + (_0x3fd266.year ? " - " + _0x3fd266.year : "");
  }
  var _0x4204f4 = [_0x52d743 + " " + _0x53e886, _0x56956f + " " + _0xfefe6b, "🎞️ " + (_0x2dd4fb || "M3U8").toUpperCase()];
  var _0x5e5a8e = _0x30fc7e && _0x30fc7e.duration ? _0x30fc7e.duration : _0x3fd266.duration;
  if (_0x5e5a8e) {
    _0x4204f4.push("⏱️ " + _0x5e5a8e);
  }
  return _0x136736 + "\n" + _0x4204f4.join(" | ");
}
function detectPurstreamDomain() {
  if (_cachedEndpoint) {
    return Promise.resolve(_cachedEndpoint);
  }
  return fetch(DOMAINS_URL).then(function (_0x149c36) {
    if (!_0x149c36.ok) {
      throw new Error();
    }
    return _0x149c36.json();
  }).then(function (_0x4a5cf1) {
    var _0x18c285 = _0x4a5cf1.purstream || PURSTREAM_FALLBACK;
    _cachedEndpoint = {
      api: "https://api.purstream." + _0x18c285 + "/api/v1",
      referer: "https://purstream." + _0x18c285 + "/"
    };
    return _cachedEndpoint;
  }).catch(function () {
    return {
      api: "https://api.purstream." + PURSTREAM_FALLBACK + "/api/v1",
      referer: "https://purstream." + PURSTREAM_FALLBACK + "/"
    };
  });
}
function applyPurstreamDomain(_0x58a61a) {
  PURSTREAM_API = _0x58a61a.api;
  PURSTREAM_REFERER = _0x58a61a.referer;
}
function cleanTitle(_0x411301) {
  if (!_0x411301) {
    return "";
  }
  return _0x411301.toLowerCase().replace(/[àáâãäå]/g, "a").replace(/[èéêë]/g, "e").replace(/[ìíîï]/g, "i").replace(/[òóôõö]/g, "o").replace(/[ùúûü]/g, "u").replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ").trim();
}
function extractYear(_0x44828b) {
  if (!_0x44828b) {
    return null;
  }
  var _0xb7fdcd = String(_0x44828b).match(/(\d{4})/);
  if (_0xb7fdcd) {
    return parseInt(_0xb7fdcd[1], 10);
  } else {
    return null;
  }
}
function getTmdbSearchMeta(_0x59ed60, _0x33d1d0) {
  var _0x4cb7e7 = _0x33d1d0 === "tv" ? "tv" : "movie";
  var _0x20b1ad = "https://api.themoviedb.org/3/" + _0x4cb7e7 + "/" + _0x59ed60 + "?language=fr-FR&api_key=" + TMDB_KEY;
  return fetch(_0x20b1ad).then(function (_0x53e6f9) {
    return _0x53e6f9.json();
  }).then(function (_0x5df08a) {
    return {
      fr: _0x5df08a.title || _0x5df08a.name,
      orig: _0x5df08a.original_title || _0x5df08a.original_name,
      year: extractYear(_0x5df08a.release_date || _0x5df08a.first_air_date)
    };
  });
}
function findPurstreamIdByTitle(_0x516866, _0x36fe99, _0x11a380) {
  var _0x40c984 = encodeURIComponent(_0x516866);
  return fetch(PURSTREAM_API + "/search-bar/search/" + _0x40c984, {
    headers: {
      "User-Agent": PURSTREAM_UA,
      Referer: PURSTREAM_REFERER
    }
  }).then(function (_0x27213d) {
    return _0x27213d.json();
  }).then(function (_0x3da17b) {
    var _0x204b07 = _0x3da17b.data.items.movies && _0x3da17b.data.items.movies.items ? _0x3da17b.data.items.movies.items : [];
    if (_0x204b07.length === 0) {
      throw new Error();
    }
    var _0x3ffaf3 = cleanTitle(_0x516866);
    var _0x44b884 = _0x204b07.find(function (_0x21dd42) {
      var _0x417429 = extractYear(_0x21dd42.release_date);
      return cleanTitle(_0x21dd42.title) === _0x3ffaf3 && (Math.abs(_0x11a380 - _0x417429) <= 1 || !_0x11a380);
    }) || _0x204b07[0];
    return _0x44b884.id;
  });
}
function fetchMovieSources(_0x533405) {
  return fetch(PURSTREAM_API + "/media/" + _0x533405 + "/sheet", {
    headers: {
      "User-Agent": PURSTREAM_UA,
      Referer: PURSTREAM_REFERER
    }
  }).then(function (_0x504b92) {
    return _0x504b92.json();
  }).then(function (_0x3a09ab) {
    return _0x3a09ab.data.items.urls || [];
  });
}
function fetchEpisodeSources(_0x17957e, _0x5059bd, _0x3baa98) {
  return fetch(PURSTREAM_API + "/stream/" + _0x17957e + "/episode?season=" + (_0x5059bd || 1) + "&episode=" + (_0x3baa98 || 1), {
    headers: {
      "User-Agent": PURSTREAM_UA,
      Referer: PURSTREAM_REFERER
    }
  }).then(function (_0x18c438) {
    return _0x18c438.json();
  }).then(function (_0x37540a) {
    return _0x37540a.data.items.sources || [];
  });
}
function parseLang(_0x3a5cd4) {
  var _0x26f24f = (_0x3a5cd4 || "").toUpperCase();
  if (_0x26f24f.indexOf("VOSTFR") !== -1) {
    return "VOSTFR";
  }
  if (_0x26f24f.indexOf("VF") !== -1) {
    return "VF";
  }
  return "MULTI";
}
function parseQuality(_0x17dbd6) {
  var _0xa12298 = (_0x17dbd6 || "").toUpperCase();
  if (_0xa12298.indexOf("4K") !== -1) {
    return "4K";
  }
  if (_0xa12298.indexOf("1080") !== -1) {
    return "1080p";
  }
  if (_0xa12298.indexOf("720") !== -1) {
    return "720p";
  }
  return "HD";
}
function normalizeMovieSources(_0x124bc8, _0x32311f) {
  return _0x124bc8.filter(function (_0x4b6c4b) {
    return _0x4b6c4b.url && (_0x4b6c4b.url.match(/\.m3u8/i) || _0x4b6c4b.url.match(/\.mp4/i));
  }).map(function (_0x5aacc5) {
    var _0x8bc287 = parseQuality(_0x5aacc5.name);
    return {
      name: "Purstream - " + _0x8bc287,
      title: buildPurstreamTitle(_0x32311f, _0x8bc287, parseLang(_0x5aacc5.name), _0x5aacc5.url.match(/\.mp4/i) ? "mp4" : "m3u8", null, null, null),
      url: _0x5aacc5.url,
      quality: _0x8bc287,
      format: _0x5aacc5.url.match(/\.mp4/i) ? "mp4" : "m3u8",
      headers: {
        "User-Agent": PURSTREAM_UA,
        Referer: PURSTREAM_REFERER
      }
    };
  });
}
function normalizeEpisodeSources(_0x2a8097, _0xcb2e1a, _0x391827, _0x201c78, _0x4e2cab) {
  return _0x2a8097.map(function (_0x2dc7c2) {
    var _0x46d436 = parseQuality(_0x2dc7c2.source_name);
    return {
      name: "Purstream - " + _0x46d436,
      title: buildPurstreamTitle(_0xcb2e1a, _0x46d436, parseLang(_0x2dc7c2.source_name), _0x2dc7c2.format || "m3u8", _0x391827, _0x201c78, _0x4e2cab),
      url: _0x2dc7c2.stream_url,
      quality: _0x46d436,
      format: _0x2dc7c2.format || "m3u8",
      headers: {
        "User-Agent": PURSTREAM_UA,
        Referer: PURSTREAM_REFERER
      }
    };
  });
}
function getStreams(_0x59085a, _0x3a2749, _0x26a625, _0x2d7abb) {
  return Promise.all([getTmdbDetails(_0x59085a, _0x3a2749), _0x3a2749 === "tv" ? getEpisodeInfo(_0x59085a, _0x26a625, _0x2d7abb) : Promise.resolve(null), detectPurstreamDomain(), getTmdbSearchMeta(_0x59085a, _0x3a2749)]).then(function (_0x77ac69) {
    var _0xea149a = _0x77ac69[0];
    var _0x9a30da = _0x77ac69[1];
    var _0x4219cf = _0x77ac69[2];
    var _0x4d1da7 = _0x77ac69[3];
    applyPurstreamDomain(_0x4219cf);
    return findPurstreamIdByTitle(_0x4d1da7.fr, _0x3a2749, _0x4d1da7.year).catch(function () {
      return findPurstreamIdByTitle(_0x4d1da7.orig, _0x3a2749, _0x4d1da7.year);
    }).then(function (_0xd8ae8c) {
      if (_0x3a2749 === "tv") {
        return fetchEpisodeSources(_0xd8ae8c, _0x26a625, _0x2d7abb).then(function (_0x4737fd) {
          return normalizeEpisodeSources(_0x4737fd, _0xea149a, _0x26a625, _0x2d7abb, _0x9a30da);
        });
      } else {
        return fetchMovieSources(_0xd8ae8c).then(function (_0x56d655) {
          return normalizeMovieSources(_0x56d655, _0xea149a);
        });
      }
    });
  }).catch(function () {
    return [];
  });
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getStreams: getStreams
  };
} else {
  global.getStreams = getStreams;
}