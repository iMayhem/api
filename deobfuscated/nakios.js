var TMDB_KEY = "f3d757824f08ea2cff45eb8f47ca3a1e";
var NAKIOS_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
var DOMAINS_URL = "https://raw.githubusercontent.com/wooodyhood/nuvio-repo/main/domains.json";
var NAKIOS_FALLBACK = "click";
var _cachedEndpoint = null;
function getTmdbMetadata(_0x45dacc, _0x547f97) {
  var _0x2adc87 = "https://api.themoviedb.org/3/" + (_0x547f97 === "tv" ? "tv" : "movie") + "/" + _0x45dacc + "?api_key=" + TMDB_KEY + "&language=en-US";
  return fetch(_0x2adc87).then(function (_0x51291e) {
    return _0x51291e.json();
  }).then(function (_0x32fcd0) {
    var _0x308a6b = _0x32fcd0.title || _0x32fcd0.name || "Nakios";
    var _0x2a2412 = _0x32fcd0.release_date || _0x32fcd0.first_air_date || "";
    var _0x230dee = _0x2a2412 ? _0x2a2412.split("-")[0] : "";
    var _0x46fb31 = "";
    if (_0x547f97 === "movie" && _0x32fcd0.runtime) {
      _0x46fb31 = _0x32fcd0.runtime + " min";
    } else if (_0x547f97 === "tv" && _0x32fcd0.episode_run_time && _0x32fcd0.episode_run_time.length > 0) {
      _0x46fb31 = _0x32fcd0.episode_run_time[0] + " min";
    }
    return {
      name: _0x308a6b,
      year: _0x230dee,
      duration: _0x46fb31
    };
  }).catch(function () {
    return {
      name: "Nakios",
      year: "",
      duration: ""
    };
  });
}
function getEpisodeInfo(_0x250583, _0x289e12, _0x2d109d) {
  if (!_0x250583 || !_0x289e12 || !_0x2d109d) {
    return Promise.resolve(null);
  }
  var _0x949365 = "https://api.themoviedb.org/3/tv/" + _0x250583 + "/season/" + _0x289e12 + "/episode/" + _0x2d109d + "?api_key=" + TMDB_KEY + "&language=en-US";
  return fetch(_0x949365).then(function (_0x250aba) {
    return _0x250aba.json();
  }).then(function (_0x568341) {
    return {
      name: _0x568341.name || null,
      duration: _0x568341.runtime ? _0x568341.runtime + " min" : null
    };
  }).catch(function () {
    return null;
  });
}
function buildEndpoint(_0x8995ab) {
  var _0x4322a1 = _0x8995ab.includes("nakios") ? _0x8995ab : "nakios." + _0x8995ab;
  return {
    base: "https://" + _0x4322a1,
    api: "https://api." + _0x4322a1 + "/api",
    referer: "https://" + _0x4322a1 + "/"
  };
}
function detectEndpoint() {
  if (_cachedEndpoint) {
    return Promise.resolve(_cachedEndpoint);
  }
  return fetch(DOMAINS_URL).then(function (_0xeaa3fb) {
    if (_0xeaa3fb.ok) {
      return _0xeaa3fb.json();
    } else {
      return Promise.reject();
    }
  }).then(function (_0x4a6009) {
    _cachedEndpoint = buildEndpoint(_0x4a6009.nakios || NAKIOS_FALLBACK);
    return _cachedEndpoint;
  }).catch(function () {
    _cachedEndpoint = buildEndpoint(NAKIOS_FALLBACK);
    return _cachedEndpoint;
  });
}
function extractOrigin(_0x4aa458) {
  var _0x4e98d4 = _0x4aa458.match(/^(https?:\/\/[^\/]+)/);
  if (_0x4e98d4) {
    return _0x4e98d4[1];
  } else {
    return null;
  }
}
function resolveSource(_0x11af07, _0x5ed86c) {
  var _0x224c51 = _0x11af07.url || "";
  if (_0x224c51.startsWith("http")) {
    return {
      url: _0x224c51,
      format: _0x11af07.isM3U8 || _0x224c51.indexOf(".m3u8") !== -1 ? "m3u8" : "mp4",
      referer: _0x5ed86c.referer,
      origin: _0x5ed86c.base
    };
  }
  if (_0x224c51.charAt(0) === "/") {
    var _0x524f0f = _0x224c51.match(/[?&]url=([^&]+)/);
    if (!_0x524f0f) {
      return null;
    }
    var _0x12fe4e;
    try {
      _0x12fe4e = decodeURIComponent(_0x524f0f[1]);
    } catch (_0x396c9f) {
      return null;
    }
    var _0x208919 = extractOrigin(_0x12fe4e);
    return {
      url: _0x12fe4e,
      format: "m3u8",
      referer: _0x208919 ? _0x208919 + "/" : _0x5ed86c.referer,
      origin: _0x208919 || _0x5ed86c.base
    };
  }
  return null;
}
function normalizeSources(_0x250cd4, _0x46a02a, _0xaf122e, _0x33b35f, _0x4de12e, _0x352f17) {
  var _0x423049 = [];
  for (var _0x4026bc = 0; _0x4026bc < _0x250cd4.length; _0x4026bc++) {
    var _0x5eb8c2 = _0x250cd4[_0x4026bc];
    if (_0x5eb8c2.isEmbed) {
      continue;
    }
    var _0x2bc749 = resolveSource(_0x5eb8c2, _0x46a02a);
    if (!_0x2bc749) {
      continue;
    }
    var _0x20e31d = _0x5eb8c2.quality || "HD";
    var _0x576bf8 = (_0x5eb8c2.lang || "MULTI").toUpperCase();
    var _0x5d6e29 = _0x2bc749.format.toUpperCase();
    var _0x15350e = "🇫🇷";
    var _0x252ab6 = "VF";
    if (_0x576bf8.indexOf("MULTI") !== -1 || _0x5eb8c2.name && _0x5eb8c2.name.toUpperCase().indexOf("MULTI") !== -1) {
      _0x15350e = "🌍";
      _0x252ab6 = "MULTI";
    } else if (_0x576bf8.indexOf("VOST") !== -1) {
      _0x15350e = "🔡";
      _0x252ab6 = "VOSTFR";
    }
    var _0x5949d1 = "🎬 ";
    if (_0x33b35f && _0x4de12e) {
      var _0x9aa953 = _0x352f17 && _0x352f17.name ? " - " + _0x352f17.name : "";
      _0x5949d1 += "S" + _0x33b35f + " E" + _0x4de12e + _0x9aa953 + " | " + _0xaf122e.name;
    } else {
      _0x5949d1 += _0xaf122e.name + (_0xaf122e.year ? " - " + _0xaf122e.year : "");
    }
    var _0x3a0676 = ["📺 " + _0x20e31d, _0x15350e + " " + _0x252ab6, "🎞️ " + _0x5d6e29];
    if (_0x5eb8c2.size) {
      _0x3a0676.push("💾 " + _0x5eb8c2.size);
    }
    var _0x49da3a = _0x352f17 && _0x352f17.duration ? _0x352f17.duration : _0xaf122e.duration;
    if (_0x49da3a) {
      _0x3a0676.push("⏱️ " + _0x49da3a);
    }
    _0x423049.push({
      name: "Nakios - " + _0x20e31d,
      title: _0x5949d1 + "\n" + _0x3a0676.join(" | "),
      url: _0x2bc749.url,
      quality: _0x20e31d,
      format: _0x2bc749.format,
      headers: {
        "User-Agent": NAKIOS_UA,
        Referer: _0x2bc749.referer,
        Origin: _0x2bc749.origin
      }
    });
  }
  return _0x423049;
}
function getStreams(_0x4cb892, _0x4394b5, _0x4ca306, _0x1478d9) {
  return Promise.all([getTmdbMetadata(_0x4cb892, _0x4394b5), _0x4394b5 === "tv" ? getEpisodeInfo(_0x4cb892, _0x4ca306, _0x1478d9) : Promise.resolve(null), detectEndpoint()]).then(function (_0x368e90) {
    var _0x1b9f68 = _0x368e90[0];
    var _0x5214c9 = _0x368e90[1];
    var _0x3e704b = _0x368e90[2];
    var _0x4e50cd = _0x4394b5 === "tv" ? _0x3e704b.api + "/sources/tv/" + _0x4cb892 + "/" + (_0x4ca306 || 1) + "/" + (_0x1478d9 || 1) : _0x3e704b.api + "/sources/movie/" + _0x4cb892;
    return fetch(_0x4e50cd, {
      headers: {
        "User-Agent": NAKIOS_UA,
        Referer: _0x3e704b.referer
      }
    }).then(function (_0x4eb8ae) {
      return _0x4eb8ae.json();
    }).then(function (_0x3c19c8) {
      if (!_0x3c19c8.success || !_0x3c19c8.sources) {
        return [];
      }
      var _0x4d3b6e = _0x4394b5 === "tv" ? _0x4ca306 : null;
      var _0xa51308 = _0x4394b5 === "tv" ? _0x1478d9 : null;
      return normalizeSources(_0x3c19c8.sources, _0x3e704b, _0x1b9f68, _0x4d3b6e, _0xa51308, _0x5214c9);
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