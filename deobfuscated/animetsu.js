var __async = (_0x2ea7d8, _0x3c67f6, _0x542a7f) => {
  return new Promise((_0x5c99ff, _0x163440) => {
    var _0x19a76d = _0x78eaf2 => {
      try {
        _0x3698bc(_0x542a7f.next(_0x78eaf2));
      } catch (_0x504a09) {
        _0x163440(_0x504a09);
      }
    };
    var _0x40c560 = _0x1526d5 => {
      try {
        _0x3698bc(_0x542a7f.throw(_0x1526d5));
      } catch (_0x211bd8) {
        _0x163440(_0x211bd8);
      }
    };
    var _0x3698bc = _0x2a44c0 => _0x2a44c0.done ? _0x5c99ff(_0x2a44c0.value) : Promise.resolve(_0x2a44c0.value).then(_0x19a76d, _0x40c560);
    _0x3698bc((_0x542a7f = _0x542a7f.apply(_0x2ea7d8, _0x3c67f6)).next());
  });
};
var PROVIDER_NAME = "Animetsu";
var TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
var BASE_URL = "https://animetsu.live/v2/api";
var PROXY_URL = "https://swiftstream.top/proxy";
var MOBILE_UAS = ["Mozilla/5.0 (Linux; Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 13; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 12; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"];
function getHeaders(_0x160481 = null) {
  const _0xed24f2 = _0x160481 || MOBILE_UAS[Math.floor(Math.random() * MOBILE_UAS.length)];
  return {
    "User-Agent": _0xed24f2,
    Referer: "https://animetsu.live/",
    Origin: "https://animetsu.live/",
    "Accept-Language": "en-US,en;q=0.9"
  };
}
var DOMAINS_JSON_URL = "https://raw.githubusercontent.com/SaurabhKaperwan/Utils/refs/heads/main/urls.json";
var cachedDomains = null;
var domainCacheTime = 0;
var DOMAIN_CACHE_TTL = 14400000;
function refreshDomains() {
  return __async(this, null, function* () {
    const _0x19d3eb = Date.now();
    if (cachedDomains && _0x19d3eb - domainCacheTime < DOMAIN_CACHE_TTL) {
      return cachedDomains;
    }
    try {
      const _0x1908ea = yield fetch(DOMAINS_JSON_URL);
      if (_0x1908ea.ok) {
        const _0x48f10a = yield _0x1908ea.json();
        if (_0x48f10a) {
          cachedDomains = _0x48f10a;
          domainCacheTime = _0x19d3eb;
          if (_0x48f10a.gojo_base) {
            BASE_URL = _0x48f10a.gojo_base + "/v2/api";
          }
          console.log("[" + PROVIDER_NAME + "] Domains updated: BASE_URL=" + BASE_URL);
        }
      }
    } catch (_0x4b0a80) {
      console.log("[" + PROVIDER_NAME + "] Domain refresh failed, using default: " + BASE_URL);
    }
    return cachedDomains || {};
  });
}
function manifest() {
  return {
    id: "animetsu",
    name: "Animetsu",
    description: "Anime streams natively for Nuvio via Animetsu API.",
    version: "1.0.1",
    logo: "https://animetsu.live/favicon.ico",
    background: "https://animetsu.live/favicon.ico",
    types: ["tv", "movie", "anime"],
    resources: ["stream"],
    idPrefixes: ["tt", "tmdb"]
  };
}
function extractM3u8Qualities(_0x1cda90, _0x2e224b) {
  return __async(this, null, function* () {
    try {
      const _0x478bab = yield fetch(_0x1cda90, {
        headers: _0x2e224b
      });
      if (!_0x478bab.ok) {
        return null;
      }
      const _0x3ea20c = yield _0x478bab.text();
      const _0x5cf4fb = _0x3ea20c.split("\n");
      let _0x2e1fa9 = [];
      let _0x4fc3a1 = null;
      const _0x269fc6 = _0x1cda90.indexOf("?");
      const _0x3c7c8f = _0x269fc6 > -1 ? _0x1cda90.substring(_0x269fc6) : "";
      const _0x4f11cc = _0x269fc6 > -1 ? _0x1cda90.substring(0, _0x269fc6) : _0x1cda90;
      const _0x3d4849 = _0x4f11cc.substring(0, _0x4f11cc.lastIndexOf("/"));
      for (let _0x2a8ea6 = 0; _0x2a8ea6 < _0x5cf4fb.length; _0x2a8ea6++) {
        let _0x7e314e = _0x5cf4fb[_0x2a8ea6].trim();
        if (_0x7e314e.startsWith("#EXT-X-STREAM-INF")) {
          const _0x63c484 = _0x7e314e.match(/RESOLUTION=\d+x(\d+)/);
          _0x4fc3a1 = _0x63c484 ? _0x63c484[1] + "p" : "Unknown";
        } else if (_0x7e314e && !_0x7e314e.startsWith("#") && _0x4fc3a1) {
          let _0x4add9 = _0x7e314e.startsWith("http") ? _0x7e314e : _0x3d4849 + "/" + _0x7e314e;
          if (_0x3c7c8f && !_0x4add9.includes("?")) {
            _0x4add9 += _0x3c7c8f;
          }
          _0x2e1fa9.push({
            quality: _0x4fc3a1,
            url: _0x4add9
          });
          _0x4fc3a1 = null;
        }
      }
      if (_0x2e1fa9.length > 0) {
        return _0x2e1fa9;
      } else {
        return null;
      }
    } catch (_0x40176f) {
      console.log("[" + PROVIDER_NAME + "] Failed to parse M3U8: " + _0x40176f.message);
      return null;
    }
  });
}
function search(_0xed2861, _0x3e6e91) {
  return __async(this, null, function* () {
    return [];
  });
}
function makeStream(_0x3d2c51, _0x12805a, _0x67cc5d, _0x57b336, _0x2b500a, _0x193449, _0x1b2d8e, _0x1942b6) {
  return __async(this, null, function* () {
    let _0x3c01a7 = _0x2b500a;
    let _0x31ab21 = !_0x2b500a.includes(".mp4");
    let _0xdbe312 = _0x57b336.toUpperCase();
    let _0x2d67fb = getHeaders(_0x1942b6);
    const _0x1a7819 = {
      name: "" + _0x3d2c51 + _0x67cc5d + " (" + _0xdbe312 + ")",
      title: "" + _0x12805a + _0x67cc5d + " (" + _0xdbe312 + ")",
      size: "" + _0x12805a + _0x67cc5d + " (" + _0xdbe312 + ")",
      url: _0x3c01a7,
      quality: _0x193449,
      behaviorHints: {
        proxyHeaders: {
          request: _0x2d67fb
        },
        notWebReady: true
      }
    };
    if (_0x31ab21) {
      _0x1a7819.headers = _0x2d67fb;
      const _0x201f2d = yield extractM3u8Qualities(_0x3c01a7, _0x2d67fb);
      if (_0x201f2d) {
        const _0x2817c0 = _0x201f2d.find(_0x3a3fb1 => _0x3a3fb1.quality === "1080p") || _0x201f2d.find(_0x294ec9 => _0x294ec9.quality === "720p") || _0x201f2d[0];
        _0x1a7819.url = _0x2817c0.url + "#ext=.m3u8";
        _0x1a7819.quality = _0x2817c0.quality;
        console.log("[" + PROVIDER_NAME + "] Forced M3U8 Quality: " + _0x2817c0.quality);
      } else {
        _0x1a7819.url = _0x3c01a7 + "#ext=.m3u8";
      }
    }
    return _0x1a7819;
  });
}
function fetchJson(_0x10c064, _0x838dd0) {
  return __async(this, null, function* () {
    try {
      const _0x46fb12 = new Promise((_0x2117c7, _0x4c7a04) => {
        setTimeout(() => _0x4c7a04(new Error("timeout")), 4000);
      });
      const _0x2f0598 = yield Promise.race([fetch(_0x10c064, _0x838dd0), _0x46fb12]);
      if (!_0x2f0598.ok) {
        return null;
      }
      return yield _0x2f0598.json();
    } catch (_0x22f476) {
      return null;
    }
  });
}
function aniListBridge(_0x38fe92) {
  return __async(this, null, function* () {
    const _0x32a05c = "\n    query ($search: String) {\n      Media (search: $search, type: ANIME) {\n        id\n      }\n    }\n    ";
    try {
      const _0x3ab2de = yield fetch("https://graphql.anilist.co", {
        method: "POST",
        headers: Object.assign(getHeaders(), {
          "Content-Type": "application/json",
          Accept: "application/json"
        }),
        body: JSON.stringify({
          query: _0x32a05c,
          variables: {
            search: _0x38fe92
          }
        })
      });
      if (!_0x3ab2de.ok) {
        return null;
      }
      const _0x346a87 = yield _0x3ab2de.json();
      if (_0x346a87 && _0x346a87.data && _0x346a87.data.Media) {
        return {
          aniId: _0x346a87.data.Media.id
        };
      }
    } catch (_0x286b14) {}
    return null;
  });
}
function getAbsoluteEpisode(_0x3db03b, _0x4185bd, _0x4bf4b4, _0x55ddd6, _0x4f6e6e) {
  return __async(this, null, function* () {
    if (_0x4185bd === "movie") {
      return 1;
    }
    let _0x22bd86 = _0x55ddd6;
    let _0x46aca4 = null;
    let _0xf109eb = null;
    try {
      const _0x31a843 = yield fetchJson("https://api.themoviedb.org/3/tv/" + _0x3db03b + "/external_ids?api_key=" + TMDB_API_KEY);
      if (_0x31a843) {
        _0x46aca4 = _0x31a843.imdb_id;
        _0xf109eb = _0x31a843.tvdb_id;
      }
    } catch (_0x220014) {}
    if (!_0xf109eb && _0x4f6e6e) {
      try {
        console.log("[" + PROVIDER_NAME + "] Searching TVDB for series: " + _0x4f6e6e);
        const _0x47cb84 = "777140fb-de92-440a-aec2-95eb51e2d7ab";
        const _0x35a4d6 = yield fetchJson("https://api4.thetvdb.com/v4/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            apikey: _0x47cb84
          })
        });
        if (_0x35a4d6 && _0x35a4d6.data && _0x35a4d6.data.token) {
          const _0x5b605d = yield fetchJson("https://api4.thetvdb.com/v4/search?query=" + encodeURIComponent(_0x4f6e6e), {
            headers: {
              Authorization: "Bearer " + _0x35a4d6.data.token
            }
          });
          if (_0x5b605d && _0x5b605d.data) {
            const _0x38fad2 = _0x5b605d.data.find(_0x321abb => _0x321abb.type === "series");
            if (_0x38fad2) {
              const _0x25e6c3 = _0x38fad2.id || _0x38fad2.tvdb_id;
              if (_0x25e6c3) {
                _0xf109eb = parseInt(String(_0x25e6c3).replace(/^series-/, ""), 10);
                console.log("[" + PROVIDER_NAME + "] Resolved TVDB ID " + _0xf109eb + " from search");
              }
            }
          }
        }
      } catch (_0x38d891) {}
    }
    if (_0xf109eb) {
      try {
        console.log("[" + PROVIDER_NAME + "] Attempting TVDB Math for TVDB: " + _0xf109eb);
        const _0x34df74 = "777140fb-de92-440a-aec2-95eb51e2d7ab";
        const _0x5a80ea = yield fetchJson("https://api4.thetvdb.com/v4/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            apikey: _0x34df74
          })
        });
        if (_0x5a80ea && _0x5a80ea.data && _0x5a80ea.data.token) {
          const _0xdc9aea = yield fetchJson("https://api4.thetvdb.com/v4/series/" + _0xf109eb + "/episodes/default?season=" + _0x4bf4b4, {
            headers: {
              Authorization: "Bearer " + _0x5a80ea.data.token
            }
          });
          if (_0xdc9aea && _0xdc9aea.data && _0xdc9aea.data.episodes) {
            const _0x1ec331 = _0xdc9aea.data.episodes.find(_0x49617a => _0x49617a.seasonNumber == _0x4bf4b4 && _0x49617a.number == _0x55ddd6);
            if (_0x1ec331 && _0x1ec331.absoluteNumber) {
              console.log("[" + PROVIDER_NAME + "] TVDB Math calculated absolute episode: " + _0x1ec331.absoluteNumber);
              return _0x1ec331.absoluteNumber;
            }
          }
        }
      } catch (_0x8cd329) {}
    }
    if (_0x46aca4) {
      try {
        console.log("[" + PROVIDER_NAME + "] Attempting Regex Math for IMDB: " + _0x46aca4);
        const _0x53d2f4 = "https://aiometadata.elfhosted.com/stremio/80d082c4-6e99-4c97-a67d-3d9e242685ce/meta/series/" + _0x46aca4 + ".json";
        const _0x2ae4ca = yield fetch(_0x53d2f4);
        if (_0x2ae4ca && _0x2ae4ca.ok) {
          const _0x5f5d40 = yield _0x2ae4ca.text();
          let _0x2c988a = 0;
          let _0x5ca0b2 = false;
          const _0x10c8ed = /"season"\s*:\s*(\d+)/g;
          let _0xc5fb66;
          while ((_0xc5fb66 = _0x10c8ed.exec(_0x5f5d40)) !== null) {
            _0x5ca0b2 = true;
            const _0x508313 = parseInt(_0xc5fb66[1]);
            if (_0x508313 > 0 && _0x508313 < _0x4bf4b4) {
              _0x2c988a++;
            }
          }
          if (_0x5ca0b2) {
            let _0x1765f5 = _0x2c988a + _0x55ddd6;
            console.log("[" + PROVIDER_NAME + "] Regex Math calculated absolute episode: " + _0x1765f5);
            return _0x1765f5;
          }
        }
      } catch (_0x223fbf) {}
    }
    try {
      console.log("[" + PROVIDER_NAME + "] Attempting TMDB math for TMDB ID: " + _0x3db03b);
      const _0x3337de = "https://api.themoviedb.org/3/tv/" + _0x3db03b + "?api_key=" + TMDB_API_KEY;
      const _0x400b82 = yield fetchJson(_0x3337de, {});
      if (_0x400b82 && _0x400b82.seasons) {
        let _0x241726 = 0;
        const _0x59d19e = _0x400b82.seasons.filter(_0x1628f5 => _0x1628f5.season_number > 0 && _0x1628f5.season_number < _0x4bf4b4);
        for (let _0x18ffd7 of _0x59d19e) {
          _0x241726 += _0x18ffd7.episode_count;
        }
        _0x241726 += _0x55ddd6;
        console.log("[" + PROVIDER_NAME + "] TMDB Calculated absolute episode: " + _0x241726);
        return _0x241726;
      }
    } catch (_0xdc1694) {}
    return _0x22bd86;
  });
}
function getStreams(_0x37704d, _0x218083, _0x459b3d, _0x7ca264) {
  return __async(this, null, function* () {
    const _0x4ddd9d = MOBILE_UAS[Math.floor(Math.random() * MOBILE_UAS.length)];
    const _0x2ba8fd = getHeaders(_0x4ddd9d);
    console.log("[" + PROVIDER_NAME + "] Request: ID=" + _0x37704d + " Type=" + _0x218083 + " S=" + _0x459b3d + " E=" + _0x7ca264);
    yield refreshDomains();
    let _0x573ff5 = [];
    try {
      const _0x104193 = _0x218083 === "tv" || _0x218083 === "series" || _0x218083 === "anime";
      const _0x207569 = _0x104193 ? "tv" : "movie";
      const _0x14625b = yield fetchJson("https://api.themoviedb.org/3/" + _0x207569 + "/" + _0x37704d + "?api_key=" + TMDB_API_KEY);
      if (!_0x14625b) {
        return _0x573ff5;
      }
      const _0x382f2a = _0x14625b.genres && _0x14625b.genres.some(_0x55dd04 => _0x55dd04.name === "Animation");
      const _0x40d9b6 = ["ja", "zh", "ko"].includes(_0x14625b.original_language);
      if (!_0x382f2a || !_0x40d9b6) {
        console.log("[" + PROVIDER_NAME + "] Skipping non-anime media (Genres: " + (_0x14625b.genres ? _0x14625b.genres.map(_0x2f9226 => _0x2f9226.name).join(", ") : "none") + ", Lang: " + _0x14625b.original_language + ").");
        return _0x573ff5;
      }
      let _0x1fd32f = _0x14625b.name || _0x14625b.title;
      if (!_0x1fd32f) {
        return _0x573ff5;
      }
      let _0x26c93f = "";
      if (_0x14625b.release_date) {
        _0x26c93f = _0x14625b.release_date.split("-")[0];
      } else if (_0x14625b.first_air_date) {
        _0x26c93f = _0x14625b.first_air_date.split("-")[0];
      }
      let _0x346f8f = _0x1fd32f.split(":")[0].trim();
      let _0x1429a0 = _0x346f8f;
      if (_0x104193 && _0x459b3d > 1) {
        _0x1429a0 += " Season " + _0x459b3d;
      }
      console.log("[" + PROVIDER_NAME + "] Searching for: " + _0x1429a0 + " (Year: " + (_0x26c93f || "Unknown") + ")");
      let _0xd096f9 = yield fetchJson(BASE_URL + "/anime/search/?query=" + encodeURIComponent(_0x1429a0), {
        headers: _0x2ba8fd
      });
      let _0x40fe01 = false;
      if (!_0xd096f9 || !_0xd096f9.results || _0xd096f9.results.length === 0) {
        if (_0x1429a0 !== _0x346f8f) {
          console.log("[" + PROVIDER_NAME + "] No results with season appended. Trying base title: " + _0x346f8f);
          _0xd096f9 = yield fetchJson(BASE_URL + "/anime/search/?query=" + encodeURIComponent(_0x346f8f), {
            headers: _0x2ba8fd
          });
          _0x40fe01 = true;
        }
        if (!_0xd096f9 || !_0xd096f9.results || _0xd096f9.results.length === 0) {
          console.log("[" + PROVIDER_NAME + "] No results found for query.");
          return _0x573ff5;
        }
      }
      let _0x369347 = null;
      let _0x477f15 = "";
      let _0x28422e = _0x7ca264;
      let _0x574c5 = null;
      let _0x4fe5cc = false;
      if (_0x104193) {
        let _0x2dc1da = yield aniListBridge(_0x1429a0);
        if (_0x2dc1da && _0x2dc1da.aniId) {
          _0x574c5 = _0x2dc1da.aniId;
          _0x4fe5cc = false;
        } else if (_0x1429a0 !== _0x346f8f) {
          _0x2dc1da = yield aniListBridge(_0x346f8f);
          if (_0x2dc1da && _0x2dc1da.aniId) {
            _0x574c5 = _0x2dc1da.aniId;
            _0x4fe5cc = true;
          }
        }
      }
      if (_0x574c5) {
        console.log("[" + PROVIDER_NAME + "] AniList Mapping found: AniId=" + _0x574c5);
        const _0x3ebd33 = new RegExp("[a-zA-Z/]" + _0x574c5 + "[-.]");
        for (let _0x2b980a of _0xd096f9.results) {
          const _0x252850 = _0x2b980a.cover_image && _0x2b980a.cover_image.large ? _0x2b980a.cover_image.large : "";
          const _0x5e1b02 = _0x2b980a.banner || "";
          if (_0x3ebd33.test(_0x252850) || _0x3ebd33.test(_0x5e1b02)) {
            _0x369347 = _0x2b980a.id;
            _0x477f15 = _0x2b980a.title.english || _0x2b980a.title.romaji;
            if (_0x4fe5cc && _0x104193 && _0x459b3d > 1) {
              _0x28422e = yield getAbsoluteEpisode(_0x37704d, _0x218083, _0x459b3d, _0x7ca264, _0x1fd32f);
            } else {
              _0x28422e = _0x7ca264;
            }
            console.log("[" + PROVIDER_NAME + "] Matched via AniList Cover/Banner Image ID!");
            break;
          }
        }
      }
      if (!_0x369347) {
        for (let _0x3bc7ba = 0; _0x3bc7ba < _0xd096f9.results.length; _0x3bc7ba++) {
          let _0x1c8b33 = _0xd096f9.results[_0x3bc7ba];
          if (_0x26c93f && _0x1c8b33.year === parseInt(_0x26c93f)) {
            _0x369347 = _0x1c8b33.id;
            _0x477f15 = _0x1c8b33.title.english || _0x1c8b33.title.romaji;
            break;
          }
        }
        if (!_0x369347) {
          _0x369347 = _0xd096f9.results[0].id;
          _0x477f15 = _0xd096f9.results[0].title.english || _0xd096f9.results[0].title.romaji;
        }
        if (_0x104193 && _0x459b3d > 1 && _0x40fe01) {
          _0x28422e = yield getAbsoluteEpisode(_0x37704d, _0x218083, _0x459b3d, _0x7ca264, _0x1fd32f);
        }
      }
      console.log("[" + PROVIDER_NAME + "] Matched ID: " + _0x369347 + " (" + _0x477f15 + ") | Ep: " + _0x28422e);
      const _0x3167fa = ["kite", "dio"];
      const _0x114519 = ["sub", "dub"];
      for (const _0x273689 of _0x3167fa) {
        for (const _0x399b34 of _0x114519) {
          const _0x180b87 = BASE_URL + "/anime/oppai/" + _0x369347 + "/" + _0x28422e + "?server=" + _0x273689 + "&source_type=" + _0x399b34;
          try {
            const _0xc5dcb3 = yield fetchJson(_0x180b87, {
              headers: _0x2ba8fd
            });
            if (_0xc5dcb3 && _0xc5dcb3.sources && _0xc5dcb3.sources.length > 0) {
              for (let _0x518154 of _0xc5dcb3.sources) {
                if (_0x518154.url) {
                  const _0x43e8a1 = PROXY_URL + _0x518154.url;
                  const _0x473cf5 = yield makeStream(PROVIDER_NAME, _0x273689.charAt(0).toUpperCase() + _0x273689.slice(1), _0x104193 ? " S" + String(_0x459b3d).padStart(2, "0") + "E" + String(_0x7ca264).padStart(2, "0") : "", _0x399b34, _0x43e8a1, _0x518154.quality || "Auto", _0xc5dcb3.subs, _0x4ddd9d);
                  if (_0x473cf5) {
                    _0x573ff5.push(_0x473cf5);
                  }
                }
              }
            }
          } catch (_0x975fc4) {
            console.log("[" + PROVIDER_NAME + "] Error fetching " + _0x273689 + " " + _0x399b34 + ": " + _0x975fc4.message);
          }
        }
      }
    } catch (_0x3de368) {
      console.log("[" + PROVIDER_NAME + "] Error: " + _0x3de368.message);
    }
    return _0x573ff5;
  });
}
module.exports = {
  manifest: manifest,
  search: search,
  getStreams: getStreams
};