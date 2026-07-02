var __async = (_0x3a0565, _0x22fa3f, _0x1ffd4e) => {
  return new Promise((_0x4bc82d, _0x4be4a1) => {
    var _0x47085d = _0x131a02 => {
      try {
        _0x2013fe(_0x1ffd4e.next(_0x131a02));
      } catch (_0x51287a) {
        _0x4be4a1(_0x51287a);
      }
    };
    var _0x53d322 = _0x3a8c51 => {
      try {
        _0x2013fe(_0x1ffd4e.throw(_0x3a8c51));
      } catch (_0x34921d) {
        _0x4be4a1(_0x34921d);
      }
    };
    var _0x2013fe = _0x551158 => _0x551158.done ? _0x4bc82d(_0x551158.value) : Promise.resolve(_0x551158.value).then(_0x47085d, _0x53d322);
    _0x2013fe((_0x1ffd4e = _0x1ffd4e.apply(_0x3a0565, _0x22fa3f)).next());
  });
};
var XPASS_API = "https://play.xpass.top";
var BASE_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Referer: XPASS_API + "/"
};
function generateM3u8(_0xf23bda, _0x2e383f) {
  return __async(this, arguments, function* (_0x31fabd, _0x2fe368, _0x5f3140 = {}) {
    try {
      console.log("[Xpass] Parsing master m3u8: " + _0x2fe368);
      const _0xc4234c = yield fetch(_0x2fe368, {
        headers: _0x5f3140
      });
      const _0x10e096 = yield _0xc4234c.text();
      const _0x9608c3 = _0x2fe368.substring(0, _0x2fe368.lastIndexOf("/")) + "/";
      const _0x47dbc4 = [];
      const _0x216f40 = /#EXT-X-STREAM-INF:.*?RESOLUTION=(\d+x\d+).*?\n([^\n]+)/g;
      let _0x1d3ef4;
      while ((_0x1d3ef4 = _0x216f40.exec(_0x10e096)) !== null) {
        const _0x13781a = _0x1d3ef4[1].split("x")[1] + "p";
        let _0x142801 = _0x1d3ef4[2].trim();
        if (!_0x142801.startsWith("http")) {
          if (_0x142801.startsWith("/")) {
            const _0xd9a343 = new URL(_0x2fe368).origin;
            _0x142801 = _0xd9a343 + _0x142801;
          } else {
            _0x142801 = _0x9608c3 + _0x142801;
          }
        }
        _0x47dbc4.push({
          quality: _0x13781a,
          url: _0x142801
        });
      }
      if (_0x47dbc4.length === 0) {
        return [{
          quality: "Auto",
          url: _0x2fe368
        }];
      }
      return _0x47dbc4;
    } catch (_0x52b45f) {
      console.warn("[Xpass] Error parsing M3U8, returning master URL.", _0x52b45f);
      return [{
        quality: "Auto",
        url: _0x2fe368
      }];
    }
  });
}
function getStreams(_0x384d54, _0x63fd0b, _0x54ef69, _0x1fa79d) {
  return __async(this, null, function* () {
    console.log("[Xpass] Fetching streams for " + _0x63fd0b + " " + _0x384d54);
    const _0x52ad55 = [];
    try {
      const _0x1f8775 = _0x63fd0b === "tv" ? XPASS_API + "/e/tv/" + _0x384d54 + "/" + _0x54ef69 + "/" + _0x1fa79d : XPASS_API + "/e/movie/" + _0x384d54;
      console.log("[Xpass] Navigating to Embed: " + _0x1f8775);
      const _0x3100ac = yield fetch(_0x1f8775, {
        headers: BASE_HEADERS
      });
      const _0x1a31ff = yield _0x3100ac.text();
      const _0x526cb2 = _0x1a31ff.match(new RegExp("var backups\\s*=\\s*(\\[.*?\\])\\s*(?:;|<\\/script>)", "s"));
      if (!_0x526cb2) {
        console.log("[Xpass] No backups variable found in page source.");
        return [];
      }
      let _0x3a003a = [];
      try {
        _0x3a003a = JSON.parse(_0x526cb2[1]);
      } catch (_0x39c978) {
        console.error("[Xpass] Failed parsing backups JSON:", _0x39c978);
        return [];
      }
      console.log("[Xpass] Found " + _0x3a003a.length + " servers.");
      for (const _0x6f7ff1 of _0x3a003a) {
        try {
          const _0x17a701 = _0x6f7ff1.name || "Default";
          let _0x5b8316 = _0x6f7ff1.url;
          if (!_0x5b8316) {
            continue;
          }
          if (!_0x5b8316.startsWith("http")) {
            _0x5b8316 = XPASS_API + _0x5b8316;
          }
          console.log("[Xpass] Fetching JSON from backup server: " + _0x5b8316);
          const _0x5cf924 = yield fetch(_0x5b8316, {
            headers: BASE_HEADERS
          });
          const _0xf94553 = yield _0x5cf924.json();
          const _0x28959a = _0xf94553.playlist || [];
          if (_0x28959a.length === 0) {
            continue;
          }
          const _0x209abd = _0x28959a[0].sources || [];
          for (const _0x344e43 of _0x209abd) {
            const _0x24b944 = _0x344e43.file;
            if (!_0x24b944 || !_0x24b944.startsWith("http")) {
              continue;
            }
            const _0xfede0f = _0x344e43.type && _0x344e43.type.toLowerCase().includes("hls") || _0x24b944.includes(".m3u8");
            if (_0xfede0f) {
              const _0x424a9c = yield generateM3u8(_0x17a701, _0x24b944, BASE_HEADERS);
              _0x424a9c.forEach(_0x949ef2 => {
                _0x52ad55.push({
                  name: "Xpass [" + _0x17a701 + "]",
                  title: _0x949ef2.quality,
                  url: _0x949ef2.url,
                  quality: _0x949ef2.quality,
                  type: "m3u8",
                  headers: {
                    Referer: XPASS_API + "/",
                    "User-Agent": BASE_HEADERS["User-Agent"]
                  },
                  provider: "xpass"
                });
              });
            } else {
              _0x52ad55.push({
                name: "Xpass [" + _0x17a701 + "]",
                title: "Auto",
                url: _0x24b944,
                quality: "Auto",
                type: _0x24b944.includes(".mp4") || _0x24b944.includes(".mkv") ? "video" : null,
                headers: {
                  Referer: XPASS_API + "/",
                  "User-Agent": BASE_HEADERS["User-Agent"]
                },
                provider: "xpass"
              });
            }
          }
        } catch (_0x361131) {
          console.warn("[Xpass] Failed querying server " + _0x6f7ff1.name + ":", _0x361131.message);
        }
      }
    } catch (_0x4c1a19) {
      console.error("[Xpass] Unexpected overall error:", _0x4c1a19.message);
    }
    console.log("[Xpass] Returning " + _0x52ad55.length + " parsed streams.");
    return _0x52ad55;
  });
}
module.exports = {
  getStreams: getStreams
};