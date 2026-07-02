var TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
var TMDB_BASE_URL = "https://api.themoviedb.org/3";
var ANILIST_URL = "https://graphql.anilist.co";
var HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
  Connection: "keep-alive",
  Referer: "https://animekai.to/"
};
var API = "https://enc-dec.app/api";
var DB_API = "https://enc-dec.app/db/kai";
var KAI_AJAX = "https://animekai.to/ajax";
var ARM_BASE = "https://arm.haglund.dev/api/v2";
function createRequestId() {
  try {
    var _0xfc93e7 = Math.random().toString(36).slice(2, 8);
    var _0x3bcb64 = Date.now().toString(36).slice(-6);
    return _0xfc93e7 + _0x3bcb64;
  } catch (_0x39ff82) {
    return String(Date.now());
  }
}
function logRid(_0x101211, _0x185ece, _0x2f8f44) {
  try {
    if (typeof _0x2f8f44 !== "undefined") {
      console.log("[AnimeKai][rid:" + _0x101211 + "] " + _0x185ece, _0x2f8f44);
    } else {
      console.log("[AnimeKai][rid:" + _0x101211 + "] " + _0x185ece);
    }
  } catch (_0x46d9a8) {}
}
function fetchRequest(_0x44f2dc, _0x45aec5) {
  var _0xc6cbd3 = Object.assign({
    method: "GET",
    headers: HEADERS
  }, _0x45aec5 || {});
  return fetch(_0x44f2dc, _0xc6cbd3).then(function (_0x9502ff) {
    if (_0x9502ff.status === 403 || _0x9502ff.status === 503) {
      if (typeof Cloudflare !== "undefined" && Cloudflare.solve) {
        console.log("[AnimeKai] Blocked by Cloudflare! Asking Nuvio to solve it for: " + _0x44f2dc);
        return Cloudflare.solve(_0x44f2dc).then(function (_0x2d174d) {
          console.log("[AnimeKai] Cloudflare solved! Updating headers and retrying...");
          if (_0x2d174d.Cookie) {
            HEADERS.Cookie = _0x2d174d.Cookie;
          }
          if (_0x2d174d["User-Agent"]) {
            HEADERS["User-Agent"] = _0x2d174d["User-Agent"];
          }
          var _0x575d8d = Object.assign({}, _0xc6cbd3);
          _0x575d8d.headers = Object.assign({}, _0x575d8d.headers || {}, {
            Cookie: HEADERS.Cookie,
            "User-Agent": HEADERS["User-Agent"]
          });
          return fetch(_0x44f2dc, _0x575d8d).then(function (_0x3d5e72) {
            if (!_0x3d5e72.ok) {
              throw new Error("HTTP " + _0x3d5e72.status + " after Cloudflare solve: " + _0x3d5e72.statusText);
            }
            return _0x3d5e72;
          });
        });
      }
    }
    if (!_0x9502ff.ok) {
      throw new Error("HTTP " + _0x9502ff.status + ": " + _0x9502ff.statusText);
    }
    return _0x9502ff;
  });
}
function getSyncInfo(_0x1a843e, _0x24481d, _0x4a068c, _0x19d08b) {
  var _0x48cfb0 = typeof _0x1a843e === "string" && _0x1a843e.indexOf("tt") === 0;
  function _0x12ff84(_0x242d55) {
    var _0x23f324 = _0x24481d === "movie" ? "movie" : "series";
    var _0x514815 = "https://v3-cinemeta.strem.io/meta/" + _0x23f324 + "/" + _0x242d55 + ".json";
    return fetchRequest(_0x514815).then(function (_0x4eb3f9) {
      return _0x4eb3f9.json();
    }).then(function (_0x16bf6e) {
      var _0x3f7722 = _0x16bf6e.meta;
      if (!_0x3f7722) {
        throw new Error("No Cinemata metadata");
      }
      if (_0x24481d === "movie") {
        return {
          date: _0x3f7722.released ? _0x3f7722.released.split("T")[0] : null,
          title: _0x3f7722.name,
          dayIndex: 1
        };
      }
      var _0xbf6b81 = _0x3f7722.videos || [];
      var _0x37221 = _0xbf6b81.find(function (_0x2dcbf7) {
        return _0x2dcbf7.season == _0x4a068c && _0x2dcbf7.episode == _0x19d08b;
      });
      if (!_0x37221 || !_0x37221.released) {
        return {
          date: null,
          title: null,
          dayIndex: 1
        };
      }
      var _0x497179 = _0x37221.released.split("T")[0];
      var _0x41d8c6 = _0x37221.name || null;
      var _0x3c858c = 1;
      for (var _0x224da0 = 0; _0x224da0 < _0xbf6b81.length; _0x224da0++) {
        var _0x1cb3bb = _0xbf6b81[_0x224da0];
        if (_0x1cb3bb.season == _0x4a068c && _0x1cb3bb.released && _0x1cb3bb.released.split("T")[0] === _0x497179) {
          if (parseInt(_0x1cb3bb.episode) < parseInt(_0x19d08b)) {
            _0x3c858c++;
          }
        }
      }
      return {
        date: _0x497179,
        title: _0x41d8c6,
        dayIndex: _0x3c858c
      };
    }).catch(function () {
      return {
        date: null,
        title: null,
        dayIndex: 1
      };
    });
  }
  function _0x37ca14() {
    var _0x8031d2 = TMDB_BASE_URL + "/" + (_0x24481d === "movie" ? "movie" : "tv") + "/" + _0x1a843e + "?api_key=" + TMDB_API_KEY;
    return fetchRequest(_0x8031d2).then(function (_0x38fa6c) {
      return _0x38fa6c.json();
    });
  }
  if (_0x48cfb0) {
    return _0x12ff84(_0x1a843e).then(function (_0x3041d6) {
      if (_0x3041d6.date) {
        return {
          imdbId: _0x1a843e,
          releaseDate: _0x3041d6.date,
          episodeTitle: _0x3041d6.title,
          dayIndex: _0x3041d6.dayIndex,
          episode: _0x19d08b
        };
      }
      throw new Error("Could not find release date on Cinemata");
    });
  } else {
    var _0x393756 = TMDB_BASE_URL + "/" + (_0x24481d === "movie" ? "movie" : "tv") + "/" + _0x1a843e;
    var _0x14ce5f = fetchRequest(_0x393756 + (_0x24481d === "movie" ? "" : "/external_ids") + "?api_key=" + TMDB_API_KEY).then(function (_0x70025d) {
      return _0x70025d.json();
    });
    var _0x28295e = fetchRequest(_0x393756 + "?api_key=" + TMDB_API_KEY).then(function (_0x30f632) {
      return _0x30f632.json();
    });
    return Promise.all([_0x14ce5f, _0x28295e]).then(function (_0x23a805) {
      var _0x48cd19 = _0x23a805[0];
      var _0x107050 = _0x23a805[1];
      var _0x276c1f = _0x48cd19.imdb_id || null;
      var _0x53b1a4 = _0x107050.name || _0x107050.title || null;
      if (_0x276c1f) {
        return {
          imdbId: _0x276c1f,
          title: _0x53b1a4,
          movieDate: _0x107050.release_date || null
        };
      }
      logRid("ArmSync: TMDB missing IMDb ID, trying ARM fallback for " + _0x1a843e);
      return fetchRequest(ARM_BASE + "/themoviedb?id=" + _0x1a843e).then(function (_0x3b6a03) {
        return _0x3b6a03.json();
      }).then(function (_0x7348a1) {
        var _0x32f56f = Array.isArray(_0x7348a1) && _0x7348a1.length > 0 ? _0x7348a1[0].imdb : null;
        return {
          imdbId: _0x32f56f,
          title: _0x53b1a4,
          movieDate: _0x107050.release_date || null
        };
      }).catch(function () {
        return {
          imdbId: null,
          title: _0x53b1a4,
          movieDate: _0x107050.release_date || null
        };
      });
    }).then(function (_0x524658) {
      if (!_0x524658.imdbId) {
        throw new Error("No IMDb ID found for TMDB " + _0x1a843e);
      }
      return _0x12ff84(_0x524658.imdbId).then(function (_0x4f9c44) {
        var _0x52133c = _0x4f9c44.date;
        if (_0x24481d === "movie" && _0x524658.movieDate) {
          _0x52133c = _0x524658.movieDate;
        }
        if (_0x52133c) {
          return {
            imdbId: _0x524658.imdbId,
            tmdbId: _0x1a843e,
            releaseDate: _0x52133c,
            title: _0x524658.title,
            episodeTitle: _0x4f9c44.title,
            dayIndex: _0x4f9c44.dayIndex,
            episode: _0x19d08b
          };
        }
        throw new Error("Could not find release date on Cinemata or TMDB for ID " + _0x524658.imdbId);
      });
    });
  }
}
function resolveByDate(_0x4d4bd4, _0x583786, _0x1ff796, _0x735365, _0x275a7e, _0x119cf6, _0x5745e8) {
  if (!_0x4d4bd4 || !/^\d{4}-\d{2}-\d{2}/.test(_0x4d4bd4)) {
    return Promise.resolve(null);
  }
  logRid(_0x583786, "ArmSync: Resolving for date " + _0x4d4bd4 + " (Show: " + _0x1ff796 + ", DayIndex: " + _0x119cf6 + ")");
  var _0x2d556a = "query($search:String){Page(perPage:20){media(search:$search,type:ANIME){id type format title{romaji english}startDate{year month day}endDate{year month day}episodes streamingEpisodes{title}}}}";
  return fetchRequest(ANILIST_URL, {
    method: "POST",
    headers: Object.assign({}, HEADERS, {
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({
      query: _0x2d556a,
      variables: {
        search: _0x1ff796
      }
    })
  }).then(function (_0x2041d7) {
    return _0x2041d7.json();
  }).then(function (_0x1985e4) {
    var _0x13c7bc = _0x1985e4.data && _0x1985e4.data.Page && _0x1985e4.data.Page.media ? _0x1985e4.data.Page.media : [];
    if (_0x13c7bc.length === 0) {
      return null;
    }
    logRid(_0x583786, "ArmSync: Found " + _0x13c7bc.length + " AniList candidates via search");
    var _0x37b166 = new Date(_0x4d4bd4);
    for (var _0x4452f1 = 0; _0x4452f1 < _0x13c7bc.length; _0x4452f1++) {
      var _0x335777 = _0x13c7bc[_0x4452f1];
      var _0x35fbea = _0x335777.startDate;
      var _0x14d7eb = _0x35fbea.year && _0x35fbea.month && _0x35fbea.day ? _0x35fbea.year + "-" + String(_0x35fbea.month).padStart(2, "0") + "-" + String(_0x35fbea.day).padStart(2, "0") : null;
      if (!_0x14d7eb) {
        continue;
      }
      var _0x4316fe = new Date(_0x14d7eb);
      var _0x599aba = Math.ceil(Math.abs(_0x37b166.getTime() - _0x4316fe.getTime()) / 86400000);
      var _0x293b20 = false;
      if (_0x335777.format === "MOVIE" || _0x335777.format === "SPECIAL" || _0x335777.episodes === 1) {
        if (_0x599aba <= 2) {
          _0x293b20 = true;
        }
      } else {
        var _0x4cf911 = new Date(_0x4316fe);
        _0x4cf911.setDate(_0x4cf911.getDate() - 2);
        if (_0x37b166 >= _0x4cf911) {
          if (_0x335777.endDate && _0x335777.endDate.year) {
            var _0x4fbc7b = new Date(_0x335777.endDate.year, (_0x335777.endDate.month || 12) - 1, _0x335777.endDate.day || 31);
            _0x4fbc7b.setDate(_0x4fbc7b.getDate() + 2);
            if (_0x37b166 <= _0x4fbc7b) {
              _0x293b20 = true;
            }
          } else {
            _0x293b20 = true;
          }
        }
      }
      if (_0x293b20) {
        logRid(_0x583786, "ArmSync: Match found AniList ID " + _0x335777.id + " (" + (_0x335777.title.english || _0x335777.title.romaji) + ")");
        var _0x293526 = _0x335777.format !== "MOVIE" && _0x335777.format !== "SPECIAL" && _0x335777.episodes !== 1;
        var _0x5153f3 = _0x293526 && _0x5745e8 ? _0x5745e8 : _0x119cf6 || 1;
        var _0x275591 = _0x335777.streamingEpisodes || [];
        if (_0x275591.length > 1 && _0x275a7e) {
          var _0x44c829 = _0x275a7e.toLowerCase().replace(/[^a-z0-9]/g, "");
          for (var _0x5951fb = 0; _0x5951fb < _0x275591.length; _0x5951fb++) {
            var _0x464dd8 = (_0x275591[_0x5951fb].title || "").toLowerCase().replace(/[^a-z0-9]/g, "");
            if (_0x464dd8 && (_0x464dd8.indexOf(_0x44c829) !== -1 || _0x44c829.indexOf(_0x464dd8) !== -1)) {
              _0x5153f3 = _0x5951fb + 1;
              logRid(_0x583786, "ArmSync: Title tie-breaker success #" + _0x5153f3);
              break;
            }
          }
        }
        return {
          alId: _0x335777.id,
          episode: _0x5153f3,
          title: _0x275a7e,
          dayIndex: _0x119cf6
        };
      }
    }
    return null;
  }).catch(function (_0x766d8) {
    logRid(_0x583786, "ArmSync: AniList search error: " + _0x766d8.message);
    return null;
  });
}
function encryptKai(_0x46d303) {
  return fetchRequest(API + "/enc-kai?text=" + encodeURIComponent(_0x46d303)).then(function (_0x34f70f) {
    return _0x34f70f.json();
  }).then(function (_0x2b89a1) {
    return _0x2b89a1.result;
  });
}
function decryptKai(_0x24425b) {
  return fetchRequest(API + "/dec-kai", {
    method: "POST",
    headers: Object.assign({}, HEADERS, {
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({
      text: _0x24425b
    })
  }).then(function (_0x39f91f) {
    return _0x39f91f.json();
  }).then(function (_0x626bfe) {
    return _0x626bfe.result;
  });
}
function parseHtmlViaApi(_0x408ec7) {
  return fetchRequest(API + "/parse-html", {
    method: "POST",
    headers: Object.assign({}, HEADERS, {
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({
      text: _0x408ec7
    })
  }).then(function (_0x266e44) {
    return _0x266e44.json();
  }).then(function (_0x472281) {
    return _0x472281.result;
  });
}
function decryptMegaMedia(_0x22db60) {
  var _0x4c84e8 = _0x22db60.replace("/e/", "/media/").replace("/e2/", "/media/");
  return fetchRequest(_0x4c84e8, {
    headers: {
      "User-Agent": HEADERS["User-Agent"],
      Referer: "https://animekai.to/"
    }
  }).then(function (_0x1069da) {
    return _0x1069da.json();
  }).then(function (_0xda8e33) {
    return _0xda8e33.result;
  }).then(function (_0x36f43b) {
    return fetchRequest(API + "/dec-mega", {
      method: "POST",
      headers: Object.assign({}, HEADERS, {
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({
        text: _0x36f43b,
        agent: HEADERS["User-Agent"]
      })
    }).then(function (_0x50d3ec) {
      return _0x50d3ec.json();
    });
  }).then(function (_0x490950) {
    return _0x490950.result;
  });
}
function findInDatabase(_0x1ad757) {
  var _0xbda4f8 = DB_API + "/find?anilist_id=" + _0x1ad757;
  return fetchRequest(_0xbda4f8).then(function (_0x2e7807) {
    return _0x2e7807.json();
  }).then(function (_0x5d7d84) {
    if (Array.isArray(_0x5d7d84) && _0x5d7d84.length > 0) {
      return _0x5d7d84[0];
    }
    return null;
  }).catch(function () {
    return null;
  });
}
function extractQualityFromUrl(_0x36557f) {
  if (!_0x36557f) {
    return "Unknown";
  }
  var _0x26d720 = [{
    regex: /[._\/-]2160[pP]?/i,
    label: "4K"
  }, {
    regex: /[._\/-]1440[pP]?/i,
    label: "1440p"
  }, {
    regex: /[._\/-]1080[pP]?/i,
    label: "1080p"
  }, {
    regex: /[._\/-]720[pP]?/i,
    label: "720p"
  }, {
    regex: /[._\/-]480[pP]?/i,
    label: "480p"
  }, {
    regex: /[._\/-]360[pP]?/i,
    label: "360p"
  }, {
    regex: /[._\/-]240[pP]?/i,
    label: "240p"
  }, {
    regex: /\b(4k|uhd)\b/i,
    label: "4K"
  }, {
    regex: /\b(fhd|1080)\b/i,
    label: "1080p"
  }, {
    regex: /\b(hd|720)\b/i,
    label: "720p"
  }, {
    regex: /\b(sd|480)\b/i,
    label: "480p"
  }, {
    regex: /quality[_-]?(\d{3,4})/i,
    label: "MATCH"
  }, {
    regex: /res[_-]?(\d{3,4})/i,
    label: "MATCH"
  }, {
    regex: /(\d{3,4})x\d{3,4}/i,
    label: "MATCH"
  }];
  for (var _0x4fcf2e = 0; _0x4fcf2e < _0x26d720.length; _0x4fcf2e++) {
    var _0x5c9604 = _0x36557f.match(_0x26d720[_0x4fcf2e].regex);
    if (_0x5c9604) {
      if (_0x26d720[_0x4fcf2e].label === "MATCH") {
        var _0x127f0d = parseInt(_0x5c9604[1]);
        if (_0x127f0d >= 240 && _0x127f0d <= 4320) {
          return _0x127f0d + "p";
        }
      } else {
        return _0x26d720[_0x4fcf2e].label;
      }
    }
  }
  return "Unknown";
}
function parseM3U8Master(_0x4b91b3, _0x36ae58) {
  var _0x17648e = _0x4b91b3.split("\n");
  var _0x25df14 = [];
  var _0x36e427 = null;
  for (var _0x382765 = 0; _0x382765 < _0x17648e.length; _0x382765++) {
    var _0x1ef89c = _0x17648e[_0x382765].trim();
    if (!_0x1ef89c) {
      continue;
    }
    if (_0x1ef89c.indexOf("#EXT-X-STREAM-INF:") === 0) {
      _0x36e427 = {
        bandwidth: null,
        resolution: null,
        url: null
      };
      var _0x5408f1 = _0x1ef89c.match(/BANDWIDTH=(\d+)/);
      if (_0x5408f1) {
        _0x36e427.bandwidth = parseInt(_0x5408f1[1]);
      }
      var _0x3cb5f1 = _0x1ef89c.match(/RESOLUTION=(\d+x\d+)/);
      if (_0x3cb5f1) {
        _0x36e427.resolution = _0x3cb5f1[1];
      }
    } else if (_0x36e427 && _0x1ef89c[0] !== "#") {
      _0x36e427.url = resolveUrlRelative(_0x1ef89c, _0x36ae58);
      _0x25df14.push(_0x36e427);
      _0x36e427 = null;
    }
  }
  return _0x25df14;
}
function resolveUrlRelative(_0xe83172, _0x55352c) {
  if (_0xe83172.indexOf("http") === 0) {
    return _0xe83172;
  }
  try {
    return new URL(_0xe83172, _0x55352c).toString();
  } catch (_0x4554a4) {
    return _0xe83172;
  }
}
function qualityFromResolutionOrBandwidth(_0x2a9cbf) {
  if (_0x2a9cbf && _0x2a9cbf.resolution) {
    var _0x28e85 = parseInt(String(_0x2a9cbf.resolution).split("x")[1]);
    if (_0x28e85 >= 2160) {
      return "4K";
    }
    if (_0x28e85 >= 1440) {
      return "1440p";
    }
    if (_0x28e85 >= 1080) {
      return "1080p";
    }
    if (_0x28e85 >= 720) {
      return "720p";
    }
    if (_0x28e85 >= 480) {
      return "480p";
    }
    if (_0x28e85 >= 360) {
      return "360p";
    }
    return "240p";
  }
  if (_0x2a9cbf && _0x2a9cbf.bandwidth) {
    var _0xf7b869 = _0x2a9cbf.bandwidth / 1000000;
    if (_0xf7b869 >= 15) {
      return "4K";
    }
    if (_0xf7b869 >= 8) {
      return "1440p";
    }
    if (_0xf7b869 >= 5) {
      return "1080p";
    }
    if (_0xf7b869 >= 3) {
      return "720p";
    }
    if (_0xf7b869 >= 1.5) {
      return "480p";
    }
    if (_0xf7b869 >= 0.8) {
      return "360p";
    }
    return "240p";
  }
  return "Unknown";
}
function resolveM3U8(_0x1d7ead, _0xd82c4c, _0x92878a) {
  return fetchRequest(_0x1d7ead, {
    skipSizeCheck: true,
    headers: Object.assign({}, HEADERS, {
      Accept: "application/vnd.apple.mpegurl,application/x-mpegURL,application/octet-stream,*/*"
    })
  }).then(function (_0x28b8ba) {
    return _0x28b8ba.text();
  }).then(function (_0x45be37) {
    if (_0x45be37.indexOf("#EXT-X-STREAM-INF") !== -1) {
      var _0x49cbfe = parseM3U8Master(_0x45be37, _0x1d7ead);
      var _0x5ecd8f = [];
      for (var _0x43cdc9 = 0; _0x43cdc9 < _0x49cbfe.length; _0x43cdc9++) {
        var _0x29da1c = qualityFromResolutionOrBandwidth(_0x49cbfe[_0x43cdc9]);
        _0x5ecd8f.push({
          url: _0x49cbfe[_0x43cdc9].url,
          quality: _0x29da1c,
          serverType: _0xd82c4c,
          serverName: _0x92878a
        });
      }
      var _0x289089 = {
        "4K": 7,
        "2160p": 7,
        "1440p": 6,
        "1080p": 5,
        "720p": 4,
        "480p": 3,
        "360p": 2,
        "240p": 1,
        Unknown: 0
      };
      _0x5ecd8f.sort(function (_0x467376, _0x45f7c8) {
        return (_0x289089[_0x45f7c8.quality] || 0) - (_0x289089[_0x467376.quality] || 0);
      });
      return {
        success: true,
        streams: _0x5ecd8f
      };
    }
    if (_0x45be37.indexOf("#EXTINF:") !== -1) {
      return {
        success: true,
        streams: [{
          url: _0x1d7ead,
          quality: extractQualityFromUrl(_0x1d7ead),
          serverType: _0xd82c4c,
          serverName: _0x92878a
        }]
      };
    }
    throw new Error("Invalid M3U8");
  }).catch(function () {
    return {
      success: false,
      streams: [{
        url: _0x1d7ead,
        quality: extractQualityFromUrl(_0x1d7ead),
        serverType: _0xd82c4c,
        serverName: _0x92878a
      }]
    };
  });
}
function resolveMultipleM3U8(_0x1ea757) {
  var _0x44785e = _0x1ea757.map(function (_0x212c0c) {
    return resolveM3U8(_0x212c0c.url, _0x212c0c.serverType, _0x212c0c.serverName);
  });
  return Promise.allSettled(_0x44785e).then(function (_0x40dd08) {
    var _0x1c1263 = [];
    for (var _0x3c181e = 0; _0x3c181e < _0x40dd08.length; _0x3c181e++) {
      if (_0x40dd08[_0x3c181e].status === "fulfilled" && _0x40dd08[_0x3c181e].value && _0x40dd08[_0x3c181e].value.streams) {
        _0x1c1263 = _0x1c1263.concat(_0x40dd08[_0x3c181e].value.streams);
      }
    }
    return _0x1c1263;
  });
}
function formatToNuvioStreams(_0x5e2d86, _0x238dd2) {
  var _0xe03e06 = [];
  var _0x2eb514 = _0x5e2d86 && _0x5e2d86.streams ? _0x5e2d86.streams : [];
  var _0x158392 = {
    "User-Agent": HEADERS["User-Agent"],
    Accept: "video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5",
    "Accept-Language": "en-US,en;q=0.9",
    "Accept-Encoding": "identity"
  };
  var _0x434373 = {
    sub: "Hard Sub",
    softsub: "Soft Sub",
    dub: "Dub & S-Sub"
  };
  var _0x55641c = {};
  for (var _0x5dcf30 = 0; _0x5dcf30 < _0x2eb514.length; _0x5dcf30++) {
    var _0x4a30fe = _0x2eb514[_0x5dcf30];
    if (_0x55641c[_0x4a30fe.url]) {
      continue;
    }
    _0x55641c[_0x4a30fe.url] = true;
    var _0x51d3c5 = _0x4a30fe.quality || extractQualityFromUrl(_0x4a30fe.url);
    if (_0x51d3c5 === "Unknown") {
      _0x51d3c5 = "Auto";
    }
    var _0x4720a0 = _0x434373[_0x4a30fe.serverType] || _0x4a30fe.serverType || "Raw";
    var _0x29c078 = _0x4a30fe.serverName || "Server";
    var _0x3a08cc = "⌜ AnimeKai ⌟ | " + _0x29c078 + " | [" + _0x4720a0 + "] - " + _0x51d3c5;
    _0xe03e06.push({
      name: _0x3a08cc,
      title: _0x238dd2 || "",
      url: _0x4a30fe.url,
      quality: _0x51d3c5,
      size: "Unknown",
      headers: _0x158392,
      subtitles: [],
      provider: "animekai"
    });
  }
  return _0xe03e06;
}
function runStreamFetch(_0x3cc20d, _0x4046e5) {
  logRid(_0x4046e5, "runStreamFetch: start token=" + _0x3cc20d);
  return encryptKai(_0x3cc20d).then(function (_0x2d9f11) {
    logRid(_0x4046e5, "links/list: enc(token) ready");
    return fetchRequest(KAI_AJAX + "/links/list?token=" + _0x3cc20d + "&_=" + _0x2d9f11).then(function (_0x4e9bbb) {
      return _0x4e9bbb.json();
    }).catch(function (_0x224ef3) {
      logRid(_0x4046e5, "links/list failed", _0x224ef3.message || _0x224ef3);
      throw _0x224ef3;
    });
  }).then(function (_0x200a26) {
    return parseHtmlViaApi(_0x200a26.result);
  }).then(function (_0x5478ff) {
    var _0x32d09a = Object.keys(_0x5478ff || {});
    var _0x3b3daf = _0x32d09a.map(function (_0x2703ca) {
      return {
        type: _0x2703ca,
        count: Object.keys(_0x5478ff[_0x2703ca] || {}).length
      };
    });
    logRid(_0x4046e5, "servers available", _0x3b3daf);
    var _0x38978b = [];
    Object.keys(_0x5478ff || {}).forEach(function (_0x4503cd) {
      Object.keys(_0x5478ff[_0x4503cd] || {}).forEach(function (_0x493222) {
        var _0x8992ec = _0x5478ff[_0x4503cd][_0x493222];
        var _0x29310d = _0x8992ec.lid;
        var _0x5d6aa8 = _0x8992ec.name || _0x8992ec.title || _0x8992ec.label;
        if (!_0x5d6aa8 && !isNaN(_0x493222)) {
          _0x5d6aa8 = "Server " + _0x493222;
        }
        var _0x50c5c1 = _0x5d6aa8 || _0x493222;
        var _0x5eb018 = encryptKai(_0x29310d).then(function (_0x518b75) {
          logRid(_0x4046e5, "links/view: enc(lid) ready", {
            serverType: _0x4503cd,
            serverKey: _0x493222,
            lid: _0x29310d
          });
          return fetchRequest(KAI_AJAX + "/links/view?id=" + _0x29310d + "&_=" + _0x518b75).then(function (_0x19a310) {
            return _0x19a310.json();
          });
        }).then(function (_0x42ad03) {
          logRid(_0x4046e5, "decrypt(embed)", {
            lid: _0x29310d,
            serverType: _0x4503cd
          });
          return decryptKai(_0x42ad03.result);
        }).then(function (_0x36dd4c) {
          if (_0x36dd4c && _0x36dd4c.url) {
            var _0x2376e5 = _0x36dd4c.url;
            logRid(_0x4046e5, "AnimeKai: Fetching intermediate iframe source", {
              url: _0x2376e5
            });
            return fetchRequest(_0x2376e5).then(function (_0x32796b) {
              return _0x32796b.text();
            }).then(function (_0x18b3b9) {
              var _0x274b4d = _0x18b3b9.match(/<iframe[^>]+src=["']([^"']+)["']/i);
              var _0x2c4fc6 = _0x274b4d ? _0x274b4d[1] : _0x2376e5;
              if (_0x2c4fc6.indexOf("//") === 0) {
                _0x2c4fc6 = "https:" + _0x2c4fc6;
              }
              logRid(_0x4046e5, "mega.media → dec-mega", {
                lid: _0x29310d,
                finalUrl: _0x2c4fc6
              });
              return decryptMegaMedia(_0x2c4fc6);
            }).then(function (_0xdee010) {
              var _0x437f8a = [];
              if (_0xdee010 && _0xdee010.sources) {
                for (var _0x25df0a = 0; _0x25df0a < _0xdee010.sources.length; _0x25df0a++) {
                  var _0x21888b = _0xdee010.sources[_0x25df0a];
                  if (_0x21888b && _0x21888b.file) {
                    _0x437f8a.push({
                      url: _0x21888b.file,
                      quality: extractQualityFromUrl(_0x21888b.file),
                      serverType: _0x4503cd,
                      serverName: _0x50c5c1
                    });
                  }
                }
              }
              return {
                streams: _0x437f8a,
                subtitles: _0xdee010 && _0xdee010.tracks ? _0xdee010.tracks.filter(function (_0x347543) {
                  return _0x347543.kind === "captions";
                }).map(function (_0x6af896) {
                  return {
                    language: _0x6af896.label || "Unknown",
                    url: _0x6af896.file,
                    default: !!_0x6af896.default
                  };
                }) : []
              };
            });
          }
          return {
            streams: [],
            subtitles: []
          };
        }).catch(function () {
          return {
            streams: [],
            subtitles: []
          };
        });
        _0x38978b.push(_0x5eb018);
      });
    });
    return Promise.allSettled(_0x38978b).then(function (_0x296a50) {
      var _0x2c3c16 = [];
      var _0x13af2e = [];
      for (var _0x2f6985 = 0; _0x2f6985 < _0x296a50.length; _0x2f6985++) {
        if (_0x296a50[_0x2f6985].status === "fulfilled") {
          var _0x569524 = _0x296a50[_0x2f6985].value || {
            streams: [],
            subtitles: []
          };
          _0x2c3c16 = _0x2c3c16.concat(_0x569524.streams || []);
          _0x13af2e = _0x13af2e.concat(_0x569524.subtitles || []);
        }
      }
      var _0x3bb000 = _0x2c3c16.filter(function (_0x51a5cb) {
        return _0x51a5cb && _0x51a5cb.url && _0x51a5cb.url.indexOf(".m3u8") !== -1;
      });
      var _0x50aa99 = _0x2c3c16.filter(function (_0x23d259) {
        return !_0x23d259 || !_0x23d259.url || _0x23d259.url.indexOf(".m3u8") === -1;
      });
      return resolveMultipleM3U8(_0x3bb000).then(function (_0x2484c8) {
        var _0x5aedcd = _0x50aa99.concat(_0x2484c8);
        logRid(_0x4046e5, "streams resolved", {
          direct: _0x50aa99.length,
          m3u8: _0x3bb000.length,
          combined: _0x5aedcd.length
        });
        return {
          streams: _0x5aedcd,
          subtitles: _0x13af2e
        };
      });
    });
  });
}
function getStreams(_0x258fa2, _0x72996b, _0x562559, _0x166583) {
  if (_0x72996b !== "tv" && _0x72996b !== "movie") {
    return Promise.resolve([]);
  }
  var _0x315fcc = createRequestId();
  logRid(_0x315fcc, "getStreams start", {
    id: _0x258fa2,
    S: _0x562559,
    E: _0x166583
  });
  var _0x14be78;
  if (typeof _0x258fa2 === "string" && _0x258fa2.indexOf("anilist:") === 0) {
    _0x14be78 = Promise.resolve({
      alId: _0x258fa2.split(":")[1],
      episode: _0x166583
    });
  } else {
    _0x14be78 = getSyncInfo(_0x258fa2, _0x72996b, _0x562559, _0x166583).then(function (_0x1a1011) {
      return resolveByDate(_0x1a1011.releaseDate, _0x315fcc, _0x1a1011.title, _0x562559, _0x1a1011.episodeTitle, _0x1a1011.dayIndex, _0x166583);
    });
  }
  return _0x14be78.then(function (_0x59b9be) {
    if (!_0x59b9be || !_0x59b9be.alId) {
      throw new Error("ArmSync: Could not match episode via air date (AniList Search)");
    }
    logRid(_0x315fcc, "using verified result", _0x59b9be);
    return findInDatabase(_0x59b9be.alId).then(function (_0x1ac9f3) {
      if (!_0x1ac9f3) {
        throw new Error("AniList ID " + _0x59b9be.alId + " not found in provider database");
      }
      var _0x3dcaea = null;
      var _0xba76ef = String(_0x59b9be.episode || _0x59b9be.dayIndex || 1);
      var _0x1f5567 = _0x1ac9f3.episodes || {};
      var _0x3ed669 = Object.keys(_0x1f5567);
      for (var _0x951aa8 = 0; _0x951aa8 < _0x3ed669.length; _0x951aa8++) {
        if (_0x1f5567[_0x3ed669[_0x951aa8]][_0xba76ef]) {
          _0x3dcaea = _0x1f5567[_0x3ed669[_0x951aa8]][_0xba76ef].token;
          logRid(_0x315fcc, "Database: Numeric match success #" + _0xba76ef);
          break;
        }
      }
      if (!_0x3dcaea && _0x59b9be.title) {
        var _0x431669 = _0x59b9be.title.toLowerCase().replace(/[^a-z0-9]/g, "");
        Object.keys(_0x1f5567).forEach(function (_0x4b0060) {
          Object.keys(_0x1f5567[_0x4b0060]).forEach(function (_0x351142) {
            var _0xf95d3f = _0x1f5567[_0x4b0060][_0x351142];
            var _0x47e7b2 = (_0xf95d3f.title || "").toLowerCase().replace(/[^a-z0-9]/g, "");
            if (_0x47e7b2 && (_0x47e7b2.indexOf(_0x431669) !== -1 || _0x431669.indexOf(_0x47e7b2) !== -1)) {
              if (!_0x3dcaea) {
                _0x3dcaea = _0xf95d3f.token;
                _0xba76ef = _0x351142;
                logRid(_0x315fcc, "Database: Title match success #" + _0x351142 + " (" + _0xf95d3f.title + ")");
              }
            }
          });
        });
      }
      if (!_0x3dcaea) {
        throw new Error("Episode " + _0xba76ef + " token not found for AniList ID " + _0x59b9be.alId);
      }
      return runStreamFetch(_0x3dcaea, _0x315fcc).then(function (_0x4b7583) {
        var _0x1d01a3 = _0x1ac9f3.info ? _0x1ac9f3.info.title_en : "Anime";
        var _0x19f467 = _0x1d01a3 + " E" + _0xba76ef;
        var _0x10f1b0 = formatToNuvioStreams(_0x4b7583, _0x19f467);
        if (_0x4b7583.subtitles && _0x4b7583.subtitles.length > 0) {
          _0x10f1b0.forEach(function (_0x2b401f) {
            _0x2b401f.subtitles = _0x4b7583.subtitles;
          });
        }
        return _0x10f1b0;
      });
    });
  }).then(function (_0x233c96) {
    var _0x4c8320 = {
      "4K": 7,
      "2160p": 7,
      "1440p": 6,
      "1080p": 5,
      "720p": 4,
      "480p": 3,
      "360p": 2,
      "240p": 1,
      Unknown: 0
    };
    _0x233c96.sort(function (_0x4ab912, _0xfedd08) {
      return (_0x4c8320[_0xfedd08.quality] || 0) - (_0x4c8320[_0x4ab912.quality] || 0);
    });
    logRid(_0x315fcc, "done", {
      streams: _0x233c96.length
    });
    return _0x233c96;
  }).catch(function (_0x1d28c2) {
    logRid(_0x315fcc, "ERROR: " + (_0x1d28c2.message || _0x1d28c2));
    return [];
  });
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getStreams: getStreams
  };
} else {
  global.AnimeKaiScraperModule = {
    getStreams: getStreams
  };
}