var TMDB_API_KEY = "1c29a5198ee1854bd5eb45dbe8d17d92";
var DECRYPT_API = "https://enc-dec.app/api/dec-videasy";
var HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
  Accept: "application/json, text/plain, */*",
  Origin: "https://player.videasy.to",
  Referer: "https://player.videasy.to/"
};
var SERVERS = {
  Neon: {
    url: "https://api.videasy.to/myflixerzupcloud/sources-with-title"
  },
  Yoru: {
    url: "https://api.videasy.to/cdn/sources-with-title",
    moviesOnly: true
  },
  Cypher: {
    url: "https://api.videasy.to/moviebox/sources-with-title"
  },
  Reyna: {
    url: "https://api.videasy.to/primewire/sources-with-title"
  },
  Omen: {
    url: "https://api.videasy.to/onionplay/sources-with-title"
  },
  Breach: {
    url: "https://api.videasy.to/m4uhd/sources-with-title"
  },
  Ghost: {
    url: "https://api.videasy.to/primesrcme/sources-with-title"
  },
  Sage: {
    url: "https://api.videasy.to/1movies/sources-with-title"
  },
  Vyse: {
    url: "https://api.videasy.to/hdmovie/sources-with-title"
  },
  Raze: {
    url: "https://api.videasy.to/superflix/sources-with-title"
  }
};
function getStreams(_0x33ba59, _0x478fa9, _0x59393d, _0x6674bc) {
  const _0x169a0c = _0x478fa9 === "tv" ? "tv" : "movie";
  const _0x1c4e79 = "https://api.themoviedb.org/3/" + _0x169a0c + "/" + _0x33ba59 + "?api_key=" + TMDB_API_KEY + "&append_to_response=external_ids";
  return fetch(_0x1c4e79).then(_0x1b2555 => _0x1b2555.json()).then(_0x102ac9 => {
    const _0x3a22f3 = {
      id: _0x33ba59.toString(),
      title: _0x102ac9.title || _0x102ac9.name,
      year: (_0x102ac9.release_date || _0x102ac9.first_air_date || "").split("-")[0],
      imdbId: _0x102ac9.external_ids ? _0x102ac9.external_ids.imdb_id : "",
      type: _0x169a0c
    };
    const _0x29d99f = Object.keys(SERVERS).map(_0x32fc79 => {
      const _0x4ed5a4 = SERVERS[_0x32fc79];
      if (_0x3a22f3.type === "tv" && _0x4ed5a4.moviesOnly) {
        return Promise.resolve([]);
      }
      let _0xcd5b3c = _0x4ed5a4.url + "?title=" + encodeURIComponent(_0x3a22f3.title) + "&mediaType=" + _0x3a22f3.type + "&year=" + _0x3a22f3.year + "&tmdbId=" + _0x3a22f3.id + "&imdbId=" + (_0x3a22f3.imdbId || "");
      if (_0x3a22f3.type === "tv") {
        _0xcd5b3c += "&seasonId=" + _0x59393d + "&episodeId=" + _0x6674bc;
      }
      return fetch(_0xcd5b3c, {
        headers: HEADERS
      }).then(_0x11ea19 => _0x11ea19.text()).then(_0x19dd18 => {
        if (!_0x19dd18 || _0x19dd18.length < 20 || _0x19dd18.startsWith("<!")) {
          return [];
        }
        return fetch(DECRYPT_API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            text: _0x19dd18,
            id: _0x3a22f3.id
          })
        }).then(_0x2721b0 => _0x2721b0.json()).then(_0x5bd992 => {
          const _0xef54f6 = _0x5bd992.result || _0x5bd992;
          if (!_0xef54f6 || !_0xef54f6.sources) {
            return [];
          }
          return _0xef54f6.sources.map(_0x1163cc => ({
            name: "VIDEASY " + _0x32fc79,
            url: _0x1163cc.url,
            quality: _0x1163cc.quality || "Auto",
            headers: {
              Referer: "https://player.videasy.to/",
              Origin: "https://player.videasy.to",
              "User-Agent": HEADERS["User-Agent"]
            },
            provider: "videasy"
          }));
        });
      }).catch(() => []);
    });
    return Promise.all(_0x29d99f).then(_0x157ac8 => {
      const _0x54415b = _0x157ac8.flat();
      const _0x40e7ca = new Set();
      return _0x54415b.filter(_0x1ed459 => _0x40e7ca.has(_0x1ed459.url) ? false : _0x40e7ca.add(_0x1ed459.url));
    });
  }).catch(() => []);
}
if (typeof module !== "undefined") {
  module.exports = {
    getStreams: getStreams
  };
}