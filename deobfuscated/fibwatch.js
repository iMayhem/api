var __async = (_0x2d675e, _0x60c5d2, _0x4d995e) => {
  return new Promise((_0x4625d3, _0x318b22) => {
    var _0x2208ac = _0x3e7f5a => {
      try {
        _0x4a8699(_0x4d995e.next(_0x3e7f5a));
      } catch (_0x548bed) {
        _0x318b22(_0x548bed);
      }
    };
    var _0x27dcf1 = _0x1e6249 => {
      try {
        _0x4a8699(_0x4d995e.throw(_0x1e6249));
      } catch (_0x39c42) {
        _0x318b22(_0x39c42);
      }
    };
    var _0x4a8699 = _0x278d21 => _0x278d21.done ? _0x4625d3(_0x278d21.value) : Promise.resolve(_0x278d21.value).then(_0x2208ac, _0x27dcf1);
    _0x4a8699((_0x4d995e = _0x4d995e.apply(_0x2d675e, _0x60c5d2)).next());
  });
};
var cheerio = require("cheerio-without-node-native");
var BASE_URL = "https://fibwatch.art";
var TMDB_API_KEY = "1865f43a0549ca50d341dd9ab8b29f49";
var BROWSER_UA = "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36";
var HEADERS = {
  "User-Agent": BROWSER_UA,
  Referer: BASE_URL + "/"
};
var PLAYBACK_HEADERS = {
  "User-Agent": BROWSER_UA,
  Referer: "https://urlshortlink.top/",
  Origin: "https://urlshortlink.top"
};
function extractQuality(_0x4af06e) {
  const _0x364bfd = (_0x4af06e || "").toLowerCase();
  if (_0x364bfd.includes("2160") || _0x364bfd.includes("4k")) {
    return "4K";
  }
  if (_0x364bfd.includes("1080")) {
    return "1080p";
  }
  if (_0x364bfd.includes("720")) {
    return "720p";
  }
  if (_0x364bfd.includes("480")) {
    return "480p";
  }
  if (_0x364bfd.includes("360")) {
    return "360p";
  }
  return "Unknown";
}
function parseStreamFromShortenerHtml(_0x472691) {
  if (!_0x472691) {
    return null;
  }
  const _0x30fbd7 = cheerio.load(_0x472691);
  let _0x37aa7e = _0x30fbd7("a.hidden-button.buttonDownloadnew").attr("href");
  if (!_0x37aa7e) {
    _0x30fbd7("a").each((_0x439235, _0x3862d7) => {
      const _0x58c50c = _0x30fbd7(_0x3862d7).attr("href") || "";
      if (_0x58c50c.includes("url=http")) {
        _0x37aa7e = _0x58c50c;
        return false;
      }
    });
  }
  if (!_0x37aa7e) {
    const _0x34e4f4 = /https?:\/\/[^\s"'`<>]+?\.b-cdn\.net\/[^\s"'`<>]+\.(?:mkv|mp4|m3u8)/i;
    const _0x2d5b16 = _0x472691.match(_0x34e4f4);
    if (_0x2d5b16) {
      return _0x2d5b16[0];
    }
  }
  if (_0x37aa7e) {
    let _0x88d123 = _0x37aa7e.replace(/.*url=/, "").trim();
    return decodeURIComponent(_0x88d123);
  }
  return null;
}
function generateStreamLayout(_0x45cde5, _0x473df8, _0x2ff13b, _0x2d85c1, _0x53b7b1, _0x1d9781, _0x17799c) {
  var _0x35e15c;
  const _0x50c4cc = _0x2d85c1.title || _0x2d85c1.name || "Unknown Title";
  const _0x4888ca = _0x2d85c1.release_date || _0x2d85c1.first_air_date || "";
  const _0x10b4de = _0x4888ca ? _0x4888ca.split("-")[0] : "N/A";
  const _0x1bded7 = _0x45cde5.toLowerCase();
  let _0x493a43 = "Single-Audio";
  let _0x574513 = "Hindi";
  if (_0x1bded7.includes("dual") || _0x1bded7.includes("hindi") && _0x1bded7.includes("english")) {
    _0x493a43 = "Dual-Audio";
    _0x574513 = "English • Hindi";
  } else if (_0x1bded7.includes("multi")) {
    _0x493a43 = "Multi-Audio";
    _0x574513 = "Multilingual";
  } else if (_0x1bded7.includes("bangla")) {
    _0x574513 = "Bangla";
  } else if (_0x1bded7.includes("tamil")) {
    _0x574513 = "Tamil";
  } else if (_0x1bded7.includes("telugu")) {
    _0x574513 = "Telugu";
  } else if (_0x1bded7.includes("english")) {
    _0x493a43 = "Single-Audio";
    _0x574513 = "English";
  }
  let _0x138764 = "MKV";
  if (_0x1bded7.includes(".mp4")) {
    _0x138764 = "MP4";
  }
  if (_0x1bded7.includes(".m3u8")) {
    _0x138764 = "M3U8 / HLS";
  }
  let _0x19f49d = "N/A";
  if (_0x53b7b1) {
    _0x19f49d = ((_0x35e15c = _0x2d85c1.episode_run_time) == null ? undefined : _0x35e15c[0]) ? _0x2d85c1.episode_run_time[0] + " min" : "45 min";
  } else {
    _0x19f49d = _0x2d85c1.runtime ? _0x2d85c1.runtime + " min" : "N/A";
  }
  const _0x148fca = _0x2ff13b.includes("4K") || _0x2ff13b.includes("2160") ? "🌟" : "💎";
  const _0xcd946a = "⚫ FibWatch | " + _0x2ff13b + " | " + _0x493a43;
  const _0x164663 = _0x53b7b1 ? "🎬 " + _0x50c4cc + " - S" + _0x1d9781 + "E" + _0x17799c + " (" + _0x10b4de + ")" : "🎬 " + _0x50c4cc + " - " + _0x10b4de;
  const _0x4f061e = _0x148fca + " " + _0x2ff13b + " | 🌍 " + _0x574513;
  const _0x1cafb5 = "🎞️ " + _0x138764 + " | ⏱️ " + _0x19f49d + " | 📌 WEB-DL";
  const _0x25d63e = _0x164663 + "\n" + _0x4f061e + "\n" + _0x1cafb5;
  return {
    name: _0xcd946a,
    title: _0x25d63e,
    url: _0x45cde5,
    quality: _0x2ff13b,
    behaviorHints: {
      notWebReady: false
    },
    headers: PLAYBACK_HEADERS
  };
}
function getStreams(_0x9bd952, _0x573dbc, _0x416797, _0x4f77c3) {
  return __async(this, null, function* () {
    try {
      const _0xab14ae = "https://api.themoviedb.org/3/" + _0x573dbc + "/" + _0x9bd952 + "?api_key=" + TMDB_API_KEY;
      const _0x5b3da3 = yield (yield fetch(_0xab14ae)).json();
      const _0x19d996 = _0x5b3da3.title || _0x5b3da3.name;
      if (!_0x19d996) {
        return [];
      }
      const _0x3b3a96 = BASE_URL + "/search?keyword=" + encodeURIComponent(_0x19d996) + "&page_id=1";
      const _0x221f78 = yield (yield fetch(_0x3b3a96, {
        headers: HEADERS
      })).text();
      const _0x24832c = cheerio.load(_0x221f78);
      const _0x3da328 = [];
      _0x24832c("div.video-thumb").each((_0x4491ab, _0x134ea3) => {
        const _0x3479ee = _0x24832c("a", _0x134ea3).attr("href");
        const _0x5050c8 = _0x24832c("p.hptag", _0x134ea3).text().trim() || _0x24832c("div.video-thumb img", _0x134ea3).attr("alt") || "";
        if (_0x3479ee) {
          _0x3da328.push({
            title: _0x5050c8,
            url: _0x3479ee
          });
        }
      });
      if (!_0x3da328.length) {
        return [];
      }
      const _0x240ce8 = _0x573dbc === "tv";
      const _0x5e59b5 = _0x19d996.toLowerCase();
      let _0x423ee6 = _0x3da328.find(_0x45e521 => _0x45e521.title.toLowerCase().includes(_0x5e59b5));
      if (!_0x423ee6) {
        _0x423ee6 = _0x3da328[0];
      }
      const _0x2b02bd = _0x423ee6.url.startsWith("http") ? _0x423ee6.url : "" + BASE_URL + _0x423ee6.url;
      const _0x1e5c29 = yield (yield fetch(_0x2b02bd, {
        headers: HEADERS
      })).text();
      const _0x154bdb = cheerio.load(_0x1e5c29);
      const _0x3ff341 = _0x154bdb("input#video-id").attr("value");
      if (!_0x3ff341) {
        return [];
      }
      const _0x5ee2f0 = [];
      const _0x180a66 = _0x4f2ccd => __async(this, null, function* () {
        for (const _0x5d7537 of _0x4f2ccd) {
          let _0x3bf558 = (_0x5d7537.url || "").trim();
          if (!_0x3bf558) {
            continue;
          }
          if (!_0x3bf558.startsWith("http")) {
            _0x3bf558 = "" + BASE_URL + _0x3bf558;
          }
          const _0xad5265 = extractQuality(_0x5d7537.res || _0x3bf558);
          if (_0x3bf558.match(/\.(mp4|mkv|m3u8)/i)) {
            _0x5ee2f0.push({
              url: _0x3bf558,
              quality: _0xad5265
            });
          } else {
            try {
              const _0x40602e = yield (yield fetch(_0x3bf558, {
                headers: HEADERS
              })).text();
              const _0x564a9f = parseStreamFromShortenerHtml(_0x40602e);
              if (_0x564a9f && _0x564a9f.startsWith("http")) {
                const _0xf57535 = extractQuality(_0x564a9f) !== "Unknown" ? extractQuality(_0x564a9f) : _0xad5265;
                _0x5ee2f0.push({
                  url: _0x564a9f,
                  quality: _0xf57535
                });
              }
            } catch (_0x1ecc2b) {}
          }
        }
      });
      if (_0x240ce8) {
        const _0x3eaa2e = BASE_URL + "/ajax/episodes.php?video_id=" + _0x3ff341;
        const _0x5cfa0e = yield (yield fetch(_0x3eaa2e, {
          headers: HEADERS
        })).json();
        const _0x4fd45b = _0x5cfa0e.episodes || [];
        if (!_0x4fd45b.length) {
          return [];
        }
        let _0x87078e = "";
        for (const _0x2a8eef of _0x4fd45b) {
          const _0x31f08d = (_0x2a8eef.title || "").toLowerCase();
          const _0x2b8c5a = _0x31f08d.match(/s(\d{1,2})e(\d{1,3})/);
          if (_0x2b8c5a) {
            const _0x5419ab = parseInt(_0x2b8c5a[1]);
            const _0xbc3e00 = parseInt(_0x2b8c5a[2]);
            if (_0x5419ab === _0x416797 && _0xbc3e00 === _0x4f77c3) {
              _0x87078e = _0x2a8eef.url ? _0x2a8eef.url.startsWith("http") ? _0x2a8eef.url : "" + BASE_URL + _0x2a8eef.url : "";
              break;
            }
          }
        }
        if (!_0x87078e && _0x4fd45b.length > 0) {
          _0x87078e = _0x4fd45b[0].url ? _0x4fd45b[0].url.startsWith("http") ? _0x4fd45b[0].url : "" + BASE_URL + _0x4fd45b[0].url : "";
        }
        if (!_0x87078e) {
          return [];
        }
        const _0x4be846 = yield (yield fetch(_0x87078e, {
          headers: HEADERS
        })).text();
        const _0x259da0 = cheerio.load(_0x4be846);
        const _0x588d93 = _0x259da0("input#video-id").attr("value");
        if (_0x588d93) {
          const _0x1a82ec = BASE_URL + "/ajax/resolution_switcher.php?video_id=" + _0x588d93;
          const _0x53c6fc = yield (yield fetch(_0x1a82ec, {
            headers: HEADERS
          })).json();
          const _0x529c64 = [...(_0x53c6fc.current || []), ...(_0x53c6fc.popup || [])];
          yield _0x180a66(_0x529c64);
        }
      } else {
        const _0x439a72 = BASE_URL + "/ajax/resolution_switcher.php?video_id=" + _0x3ff341;
        const _0x26760a = yield (yield fetch(_0x439a72, {
          headers: HEADERS
        })).json();
        const _0x184dd3 = [...(_0x26760a.current || []), ...(_0x26760a.popup || [])];
        yield _0x180a66(_0x184dd3);
      }
      const _0x803de4 = [];
      const _0x3dd978 = new Set();
      for (const _0x2740e8 of _0x5ee2f0) {
        if (!_0x3dd978.has(_0x2740e8.url)) {
          _0x3dd978.add(_0x2740e8.url);
          const _0x1d86da = generateStreamLayout(_0x2740e8.url, _0x19d996, _0x2740e8.quality, _0x5b3da3, _0x240ce8, _0x416797, _0x4f77c3);
          _0x803de4.push(_0x1d86da);
        }
      }
      const _0xc548d8 = {
        "4K": 5,
        "1080p": 4,
        "720p": 3,
        "480p": 2,
        "360p": 1,
        Unknown: 0
      };
      _0x803de4.sort((_0x18dc1a, _0x57bf79) => {
        const _0x475003 = _0xc548d8[_0x18dc1a.quality] || 0;
        const _0x2c32c2 = _0xc548d8[_0x57bf79.quality] || 0;
        return _0x2c32c2 - _0x475003;
      });
      return _0x803de4;
    } catch (_0x54ae18) {
      console.error("[FibWatch]", _0x54ae18);
      return [];
    }
  });
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getStreams: getStreams
  };
}