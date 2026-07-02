var __async = (_0x3f2689, _0xa549f7, _0x5a548b) => {
  return new Promise((_0x33e761, _0x3974ca) => {
    var _0x52be38 = _0x565d79 => {
      try {
        _0x18dbb7(_0x5a548b.next(_0x565d79));
      } catch (_0x514fa6) {
        _0x3974ca(_0x514fa6);
      }
    };
    var _0x1fec6c = _0x2428c3 => {
      try {
        _0x18dbb7(_0x5a548b.throw(_0x2428c3));
      } catch (_0x34df54) {
        _0x3974ca(_0x34df54);
      }
    };
    var _0x18dbb7 = _0x1e5c0b => _0x1e5c0b.done ? _0x33e761(_0x1e5c0b.value) : Promise.resolve(_0x1e5c0b.value).then(_0x52be38, _0x1fec6c);
    _0x18dbb7((_0x5a548b = _0x5a548b.apply(_0x3f2689, _0xa549f7)).next());
  });
};
var PROVIDER_NAME = "AnikotoTV";
var TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
var TVDB_API_KEY = "777140fb-de92-440a-aec2-95eb51e2d7ab";
var MOBILE_UAS = ["Mozilla/5.0 (Linux; Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 13; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 12; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"];
function getHeaders(_0x39de1b) {
  var _0x1ffa21 = MOBILE_UAS[Math.floor(Math.random() * MOBILE_UAS.length)];
  var _0x2e170b = {
    "User-Agent": _0x1ffa21,
    "Accept-Language": "en-US,en;q=0.9"
  };
  if (_0x39de1b) {
    for (var _0x452b9f in _0x39de1b) {
      _0x2e170b[_0x452b9f] = _0x39de1b[_0x452b9f];
    }
  }
  return _0x2e170b;
}
var _tvdbToken = null;
function getTvdbToken() {
  return __async(this, null, function* () {
    if (_tvdbToken) {
      return _tvdbToken;
    }
    try {
      var _0x358e7d = yield fetch("https://api4.thetvdb.com/v4/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          apikey: TVDB_API_KEY
        })
      });
      if (_0x358e7d.ok) {
        var _0x14a2fd = yield _0x358e7d.json();
        if (_0x14a2fd && _0x14a2fd.data && _0x14a2fd.data.token) {
          _tvdbToken = _0x14a2fd.data.token;
        }
      }
    } catch (_0x422868) {}
    return _tvdbToken;
  });
}
function getTMDBTitle(_0x1b3bc7, _0x20eebe) {
  return __async(this, null, function* () {
    const _0x5ada99 = _0x20eebe === "tv" || _0x20eebe === "series" ? "tv" : "movie";
    let _0x5d82ab = "https://api.themoviedb.org/3/" + _0x5ada99 + "/" + _0x1b3bc7 + "?api_key=" + TMDB_API_KEY;
    if (String(_0x1b3bc7).startsWith("tt")) {
      _0x5d82ab = "https://api.themoviedb.org/3/find/" + _0x1b3bc7 + "?external_source=imdb_id&api_key=" + TMDB_API_KEY;
      try {
        const _0x4ec9de = yield fetch(_0x5d82ab, {
          headers: getHeaders()
        });
        if (_0x4ec9de.ok) {
          const _0x124b6a = yield _0x4ec9de.json();
          if (_0x5ada99 === "tv" && _0x124b6a.tv_results && _0x124b6a.tv_results.length > 0) {
            return {
              title: _0x124b6a.tv_results[0].name,
              numericId: _0x124b6a.tv_results[0].id
            };
          } else if (_0x5ada99 === "movie" && _0x124b6a.movie_results && _0x124b6a.movie_results.length > 0) {
            return {
              title: _0x124b6a.movie_results[0].title,
              numericId: _0x124b6a.movie_results[0].id
            };
          }
        }
      } catch (_0x5ae431) {}
      return {
        title: null,
        numericId: null
      };
    }
    try {
      const _0x556f66 = yield fetch(_0x5d82ab, {
        headers: getHeaders()
      });
      if (_0x556f66.ok) {
        const _0x28427a = yield _0x556f66.json();
        return {
          title: _0x5ada99 === "tv" ? _0x28427a.name : _0x28427a.title,
          numericId: _0x1b3bc7
        };
      }
    } catch (_0x55acdd) {}
    return {
      title: null,
      numericId: null
    };
  });
}
function getTMDBSeasonName(_0x3228da, _0x3599b9) {
  return __async(this, null, function* () {
    const _0x299ead = "https://api.themoviedb.org/3/tv/" + _0x3228da + "/season/" + _0x3599b9 + "?api_key=" + TMDB_API_KEY;
    try {
      const _0xc5fac0 = yield fetch(_0x299ead);
      if (_0xc5fac0.ok) {
        const _0x4d6254 = yield _0xc5fac0.json();
        return _0x4d6254.name;
      }
    } catch (_0x4f6bd4) {}
    return null;
  });
}
function aniListBridge(_0x3b1acd) {
  return __async(this, null, function* () {
    const _0x5cf473 = "\n    query ($search: String) {\n      Media (search: $search, type: ANIME) {\n        id\n        idMal\n      }\n    }\n    ";
    try {
      const _0x3980ce = yield fetch("https://graphql.anilist.co", {
        method: "POST",
        headers: Object.assign(getHeaders(), {
          "Content-Type": "application/json",
          Accept: "application/json"
        }),
        body: JSON.stringify({
          query: _0x5cf473,
          variables: {
            search: _0x3b1acd
          }
        })
      });
      const _0x5c5fb0 = yield _0x3980ce.json();
      if (_0x5c5fb0 && _0x5c5fb0.data && _0x5c5fb0.data.Media) {
        return {
          malId: _0x5c5fb0.data.Media.idMal,
          aniId: _0x5c5fb0.data.Media.id,
          absEp: null
        };
      }
    } catch (_0x46fde9) {}
    return null;
  });
}
function getMalId(_0x3ef56b, _0x31e608, _0x5b3cb5, _0x283f03) {
  return __async(this, null, function* () {
    try {
      let _0x8f69 = "https://arm.haglund.dev/api/v2/tmdb?id=" + _0x3ef56b;
      if (_0x31e608 === "tv" || _0x31e608 === "series") {
        _0x8f69 += "&s=" + _0x5b3cb5 + "&e=" + _0x283f03;
      }
      const _0x22a91f = yield fetch(_0x8f69);
      if (_0x22a91f.ok) {
        const _0x1c5741 = yield _0x22a91f.json();
        if (_0x1c5741.mal || _0x1c5741.mal_id || _0x1c5741.anilist || _0x1c5741.ani_id) {
          return {
            malId: _0x1c5741.mal || _0x1c5741.mal_id,
            aniId: _0x1c5741.anilist || _0x1c5741.ani_id,
            absEp: _0x1c5741.episode || _0x283f03
          };
        }
      }
    } catch (_0x1af077) {}
    const _0x530e9d = yield getTMDBTitle(_0x3ef56b, _0x31e608);
    let _0x2034e7 = _0x530e9d.title;
    const _0x291c89 = _0x530e9d.numericId;
    if (_0x2034e7) {
      let _0x56eab9 = _0x2034e7;
      if ((_0x31e608 === "tv" || _0x31e608 === "series") && _0x5b3cb5 > 1 && _0x291c89) {
        const _0x2c0c11 = yield getTMDBSeasonName(_0x291c89, _0x5b3cb5);
        if (_0x2c0c11) {
          if (_0x2c0c11.toLowerCase().includes(_0x2034e7.toLowerCase())) {
            _0x2034e7 = _0x2c0c11;
          } else {
            _0x2034e7 = _0x2034e7 + " " + _0x2c0c11;
          }
        } else {
          _0x2034e7 = _0x2034e7 + " Season " + _0x5b3cb5;
        }
      }
      console.log("[" + PROVIDER_NAME + "] TMDB Title: " + _0x2034e7);
      let _0x107017 = yield aniListBridge(_0x2034e7);
      let _0x191b89 = false;
      if ((!_0x107017 || _0x107017 && !_0x107017.malId) && _0x2034e7 !== _0x56eab9) {
        console.log("[" + PROVIDER_NAME + "] Fallback TMDB Title: " + _0x56eab9);
        _0x107017 = yield aniListBridge(_0x56eab9);
        _0x191b89 = true;
      }
      if (_0x107017) {
        _0x107017.absEp = _0x283f03;
        _0x107017.usedFallback = _0x191b89;
        _0x107017.name = _0x530e9d.title;
        return _0x107017;
      }
    }
    return null;
  });
}
function extractHLS(_0x2622be, _0x4476e5) {
  return __async(this, null, function* () {
    try {
      const _0x3822c5 = Object.assign(getHeaders(), {
        Referer: "https://" + _0x4476e5 + "/"
      });
      const _0x149b48 = yield fetch(_0x2622be, {
        headers: _0x3822c5
      });
      if (!_0x149b48.ok) {
        return null;
      }
      const _0x1540a6 = yield _0x149b48.text();
      let _0x184ee6 = _0x1540a6.match(/data-id="(\d+)"/);
      if (!_0x184ee6) {
        const _0x19ea0c = _0x1540a6.match(/<iframe[^>]*src="([^"]+)"/);
        if (_0x19ea0c) {
          const _0x53ce61 = _0x19ea0c[1].startsWith("http") ? _0x19ea0c[1] : "https://" + _0x4476e5 + _0x19ea0c[1];
          const _0x4cf43f = yield fetch(_0x53ce61, {
            headers: _0x3822c5
          });
          if (_0x4cf43f.ok) {
            const _0x4d8ef6 = yield _0x4cf43f.text();
            _0x184ee6 = _0x4d8ef6.match(/data-id="(\d+)"/);
          }
        }
      }
      if (!_0x184ee6) {
        return null;
      }
      const _0x4827c5 = _0x184ee6[1];
      const _0x3a985e = "https://" + _0x4476e5 + "/stream/getSources?id=" + _0x4827c5;
      const _0x155847 = yield fetch(_0x3a985e, {
        headers: Object.assign(getHeaders(), {
          "X-Requested-With": "XMLHttpRequest",
          Referer: _0x2622be
        })
      });
      if (!_0x155847.ok) {
        return null;
      }
      const _0x36e735 = yield _0x155847.json();
      if (_0x36e735.sources && _0x36e735.sources.file) {
        const _0x1be4c3 = [];
        if (_0x36e735.tracks) {
          for (const _0x17fd84 of _0x36e735.tracks) {
            if (_0x17fd84.kind === "captions" || _0x17fd84.kind === "subtitles") {
              _0x1be4c3.push({
                id: _0x17fd84.label || _0x17fd84.file || "Unknown",
                url: _0x17fd84.file,
                language: _0x17fd84.label && _0x17fd84.label.toLowerCase().includes("eng") ? "eng" : "eng"
              });
            }
          }
        }
        var _0x54cb31 = "1080p";
        try {
          const _0x2fc408 = yield fetch(_0x36e735.sources.file, {
            headers: {
              Referer: "https://" + _0x4476e5 + "/"
            }
          });
          if (_0x2fc408.ok) {
            const _0x31adbd = yield _0x2fc408.text();
            var _0x326c4e = _0x31adbd.match(/RESOLUTION=\d+x(\d+)/);
            if (_0x326c4e) {
              _0x54cb31 = _0x326c4e[1] + "p";
            }
          }
        } catch (_0x19dd3b) {}
        return {
          url: _0x36e735.sources.file,
          quality: _0x54cb31,
          subtitles: _0x1be4c3,
          headers: {
            Referer: "https://" + _0x4476e5 + "/",
            Origin: "https://" + _0x4476e5
          }
        };
      }
    } catch (_0x194f50) {
      console.error("[" + PROVIDER_NAME + "] Extractor Error for " + _0x4476e5 + ":", _0x194f50.message);
    }
    return null;
  });
}
function fetchJson(_0x11afd4) {
  return __async(this, arguments, function* (_0x370b92, _0x427570 = {}) {
    const _0x4753af = yield fetch(_0x370b92, _0x427570);
    if (!_0x4753af.ok) {
      return null;
    }
    return yield _0x4753af.json();
  });
}
function getAbsoluteEpisode(_0x5a162f, _0xf31cba, _0x1ce477, _0x46e942, _0x1be59b) {
  return __async(this, null, function* () {
    if (_0xf31cba === "movie") {
      return 1;
    }
    let _0x388736 = _0x46e942;
    let _0x2d7edc = null;
    let _0x46d8a0 = null;
    try {
      const _0x3b4510 = yield fetchJson("https://api.themoviedb.org/3/tv/" + _0x5a162f + "/external_ids?api_key=" + TMDB_API_KEY);
      if (_0x3b4510) {
        _0x2d7edc = _0x3b4510.imdb_id;
        _0x46d8a0 = _0x3b4510.tvdb_id;
      }
    } catch (_0x467fe3) {}
    if (!_0x46d8a0 && _0x1be59b) {
      try {
        console.log("[" + PROVIDER_NAME + "] Searching TVDB for series: " + _0x1be59b);
        const _0x42ce91 = yield getTvdbToken();
        if (_0x42ce91) {
          const _0x56d944 = yield fetchJson("https://api4.thetvdb.com/v4/search?query=" + encodeURIComponent(_0x1be59b), {
            headers: {
              Authorization: "Bearer " + _0x42ce91
            }
          });
          if (_0x56d944 && _0x56d944.data) {
            const _0x514b1b = _0x56d944.data.find(_0x48d771 => _0x48d771.type === "series");
            if (_0x514b1b) {
              const _0x57fd42 = _0x514b1b.id || _0x514b1b.tvdb_id;
              if (_0x57fd42) {
                _0x46d8a0 = parseInt(String(_0x57fd42).replace(/^series-/, ""), 10);
                console.log("[" + PROVIDER_NAME + "] Resolved TVDB ID " + _0x46d8a0 + " from search");
              }
            }
          }
        }
      } catch (_0x9508ed) {}
    }
    if (_0x46d8a0) {
      try {
        console.log("[" + PROVIDER_NAME + "] Attempting TVDB Math for TVDB: " + _0x46d8a0);
        const _0x3aad41 = yield getTvdbToken();
        if (_0x3aad41) {
          const _0x2b4955 = yield fetchJson("https://api4.thetvdb.com/v4/series/" + _0x46d8a0 + "/episodes/default?season=" + _0x1ce477, {
            headers: {
              Authorization: "Bearer " + _0x3aad41
            }
          });
          if (_0x2b4955 && _0x2b4955.data && _0x2b4955.data.episodes) {
            const _0x5ad5d4 = _0x2b4955.data.episodes.find(_0x1503e8 => _0x1503e8.seasonNumber == _0x1ce477 && _0x1503e8.number == _0x46e942);
            if (_0x5ad5d4 && _0x5ad5d4.absoluteNumber) {
              console.log("[" + PROVIDER_NAME + "] TVDB Math calculated absolute episode: " + _0x5ad5d4.absoluteNumber);
              return _0x5ad5d4.absoluteNumber;
            }
          }
        }
      } catch (_0x3e2063) {}
    }
    if (_0x2d7edc) {
      try {
        console.log("[" + PROVIDER_NAME + "] Attempting Regex Math for IMDB: " + _0x2d7edc);
        const _0x4531be = "https://aiometadata.elfhosted.com/stremio/80d082c4-6e99-4c97-a67d-3d9e242685ce/meta/series/" + _0x2d7edc + ".json";
        const _0x4502d3 = yield fetch(_0x4531be);
        if (_0x4502d3.ok) {
          const _0x2e6ca5 = yield _0x4502d3.text();
          let _0x4d2cb3 = 0;
          let _0x1d55e7 = false;
          const _0x3d6a1b = /"season"\s*:\s*(\d+)/g;
          let _0x37892e;
          while ((_0x37892e = _0x3d6a1b.exec(_0x2e6ca5)) !== null) {
            _0x1d55e7 = true;
            const _0x54dbad = parseInt(_0x37892e[1]);
            if (_0x54dbad > 0 && _0x54dbad < _0x1ce477) {
              _0x4d2cb3++;
            }
          }
          if (_0x1d55e7) {
            let _0x87fd00 = _0x4d2cb3 + _0x46e942;
            console.log("[" + PROVIDER_NAME + "] Regex Math calculated absolute episode: " + _0x87fd00);
            return _0x87fd00;
          }
        }
      } catch (_0x380078) {}
    }
    try {
      console.log("[" + PROVIDER_NAME + "] Cinemeta failed. Falling back to TMDB math...");
      const _0x372f78 = "https://api.themoviedb.org/3/tv/" + _0x5a162f + "?api_key=" + TMDB_API_KEY;
      const _0x18581a = yield fetchJson(_0x372f78, {});
      if (_0x18581a && _0x18581a.seasons) {
        let _0x283c24 = 0;
        const _0x670e3b = _0x18581a.seasons.filter(_0x5da26b => _0x5da26b.season_number > 0 && _0x5da26b.season_number < _0x1ce477);
        for (let _0x309443 of _0x670e3b) {
          _0x283c24 += _0x309443.episode_count;
        }
        _0x283c24 += _0x46e942;
        console.log("[" + PROVIDER_NAME + "] TMDB Calculated absolute episode: " + _0x283c24);
        return _0x283c24;
      }
    } catch (_0xca9e62) {}
    return _0x388736;
  });
}
function getStreams(_0x495081, _0x5898d5, _0x149129, _0x2e86b8) {
  return __async(this, null, function* () {
    try {
      console.log("[" + PROVIDER_NAME + "] Fetching: " + _0x495081 + " S" + _0x149129 + " E" + _0x2e86b8);
      const _0x11acad = yield getMalId(_0x495081, _0x5898d5, _0x149129, _0x2e86b8);
      if (!_0x11acad || !_0x11acad.malId && !_0x11acad.aniId) {
        console.log("[" + PROVIDER_NAME + "] Exhausted all mapping bridges. Could not resolve ID.");
        return [];
      }
      const _0x4195a0 = !!_0x11acad.malId;
      const _0x31f2b2 = _0x4195a0 ? _0x11acad.malId : _0x11acad.aniId;
      const _0xb5c57e = _0x4195a0 ? "mal" : "ani";
      let _0x306894 = _0x5898d5 === "movie" ? 1 : _0x11acad.absEp;
      if (_0x5898d5 !== "movie" && _0x11acad.usedFallback && _0x149129 > 1) {
        _0x306894 = yield getAbsoluteEpisode(_0x495081, _0x5898d5, _0x149129, _0x2e86b8, _0x11acad.name);
      }
      console.log("[" + PROVIDER_NAME + "] Mapped to " + _0xb5c57e.toUpperCase() + " ID: " + _0x31f2b2 + " | Ep: " + _0x306894);
      const _0x4a8ea1 = [];
      const _0x3c6e2f = String(_0x149129).padStart(2, "0");
      const _0x45da5f = String(_0x2e86b8).padStart(2, "0");
      const _0x32f1ab = _0x5898d5 === "movie" ? "" : " S" + _0x3c6e2f + "E" + _0x45da5f;
      const _0x34ce9f = [{
        id: "Vidstream",
        domain: "megaplay.buzz"
      }];
      for (const _0x255d1d of _0x34ce9f) {
        const _0x1b2511 = ["sub", "dub"];
        for (const _0x3b5fc4 of _0x1b2511) {
          const _0x7ab17f = "https://" + _0x255d1d.domain + "/stream/" + _0xb5c57e + "/" + _0x31f2b2 + "/" + _0x306894 + "/" + _0x3b5fc4;
          const _0x1c74ab = yield extractHLS(_0x7ab17f, _0x255d1d.domain);
          if (_0x1c74ab) {
            _0x4a8ea1.push({
              name: "" + PROVIDER_NAME + _0x32f1ab + " (" + _0x3b5fc4.toUpperCase() + ")",
              quality: _0x1c74ab.quality || "1080p",
              title: "" + _0x255d1d.id + _0x32f1ab + " (" + _0x3b5fc4.toUpperCase() + ")",
              size: "" + _0x255d1d.id + _0x32f1ab + " (" + _0x3b5fc4.toUpperCase() + ")",
              url: _0x1c74ab.url,
              subtitles: _0x1c74ab.subtitles,
              headers: _0x1c74ab.headers
            });
          }
        }
      }
      console.log("[" + PROVIDER_NAME + "] Returning " + _0x4a8ea1.length + " direct stream URLs.");
      return _0x4a8ea1;
    } catch (_0x270635) {
      console.error("[" + PROVIDER_NAME + "] Fatal Error:", _0x270635);
      return [];
    }
  });
}
function search(_0x265046) {
  return __async(this, null, function* () {
    return [];
  });
}
function getCatalog(_0xc50eb5) {
  return __async(this, null, function* () {
    return [];
  });
}
function getItemDetails(_0xa9ed71) {
  return __async(this, null, function* () {
    return [];
  });
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getStreams: getStreams,
    search: search,
    getCatalog: getCatalog,
    getItemDetails: getItemDetails
  };
} else {
  global.getStreams = getStreams;
}