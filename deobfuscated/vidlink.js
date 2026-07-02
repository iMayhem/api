var __async = (_0x541021, _0x4133af, _0x4e4688) => {
  return new Promise((_0x3914b8, _0x15cb6b) => {
    var _0x59c7e8 = _0x297daa => {
      try {
        _0x414964(_0x4e4688.next(_0x297daa));
      } catch (_0x5656b8) {
        _0x15cb6b(_0x5656b8);
      }
    };
    var _0x18896d = _0xcfa585 => {
      try {
        _0x414964(_0x4e4688.throw(_0xcfa585));
      } catch (_0x49e62a) {
        _0x15cb6b(_0x49e62a);
      }
    };
    var _0x414964 = _0xcc0f3b => _0xcc0f3b.done ? _0x3914b8(_0xcc0f3b.value) : Promise.resolve(_0xcc0f3b.value).then(_0x59c7e8, _0x18896d);
    _0x414964((_0x4e4688 = _0x4e4688.apply(_0x541021, _0x4133af)).next());
  });
};
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (_0x2adf9c, _0x1da427, _0x2589c6) => _0x1da427 in _0x2adf9c ? __defProp(_0x2adf9c, _0x1da427, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x2589c6
}) : _0x2adf9c[_0x1da427] = _0x2589c6;
var __spreadValues = (_0x48738e, _0x51c4c4) => {
  for (var _0x1c55ae in _0x51c4c4 ||= {}) {
    if (__hasOwnProp.call(_0x51c4c4, _0x1c55ae)) {
      __defNormalProp(_0x48738e, _0x1c55ae, _0x51c4c4[_0x1c55ae]);
    }
  }
  if (__getOwnPropSymbols) {
    for (var _0x1c55ae of __getOwnPropSymbols(_0x51c4c4)) {
      if (__propIsEnum.call(_0x51c4c4, _0x1c55ae)) {
        __defNormalProp(_0x48738e, _0x1c55ae, _0x51c4c4[_0x1c55ae]);
      }
    }
  }
  return _0x48738e;
};
var __spreadProps = (_0x560518, _0x44c238) => __defProps(_0x560518, __getOwnPropDescs(_0x44c238));
var __async2 = (_0xc3dbce, _0x519e1c, _0x29be60) => {
  return new Promise((_0x128a75, _0x4939c0) => {
    var _0x18594d = _0x7a5008 => {
      try {
        _0x2d029e(_0x29be60.next(_0x7a5008));
      } catch (_0x1fa5e8) {
        _0x4939c0(_0x1fa5e8);
      }
    };
    var _0x124519 = _0x38df2a => {
      try {
        _0x2d029e(_0x29be60.throw(_0x38df2a));
      } catch (_0x29a84f) {
        _0x4939c0(_0x29a84f);
      }
    };
    var _0x2d029e = _0x54316d => _0x54316d.done ? _0x128a75(_0x54316d.value) : Promise.resolve(_0x54316d.value).then(_0x18594d, _0x124519);
    _0x2d029e((_0x29be60 = _0x29be60.apply(_0xc3dbce, _0x519e1c)).next());
  });
};
var VIDLINK_API = "https://vidlink.pro";
var DECRYPT_API = "https://enc-dec.app/api";
var TMDB_API_KEY = "68e094699525b18a70bab2f86b1fa706";
var HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  Connection: "keep-alive",
  Referer: "https://vidlink.pro/",
  Origin: "https://vidlink.pro"
};
function formatBytes(_0x1d12de) {
  if (!_0x1d12de || isNaN(_0x1d12de)) {
    return "Variable Size";
  }
  const _0x5de26c = ["B", "KB", "MB", "GB"];
  let _0x4321bd = 0;
  while (_0x1d12de >= 1024 && _0x4321bd < _0x5de26c.length - 1) {
    _0x1d12de /= 1024;
    _0x4321bd++;
  }
  return _0x1d12de.toFixed(2) + " " + _0x5de26c[_0x4321bd];
}
function calculateCalculatedFallbackSize(_0x43887c, _0x5cf79f) {
  const _0x392511 = parseInt(_0x5cf79f) || 90;
  const _0x35a1f3 = String(_0x43887c || "").toLowerCase();
  let _0x3e68ae = 5200;
  if (_0x35a1f3.includes("4k") || _0x35a1f3.includes("2160")) {
    _0x3e68ae = 16000;
  } else if (_0x35a1f3.includes("1080") || _0x35a1f3.includes("fhd")) {
    _0x3e68ae = 5200;
  } else if (_0x35a1f3.includes("720") || _0x35a1f3.includes("hd")) {
    _0x3e68ae = 2500;
  } else if (_0x35a1f3.includes("480") || _0x35a1f3.includes("sd")) {
    _0x3e68ae = 1200;
  }
  const _0x255b95 = 0.94 + _0x392511 % 9 / 100;
  const _0x18c7b9 = _0x3e68ae * _0x255b95 * 1000 / 8 * (_0x392511 * 60);
  return formatBytes(_0x18c7b9);
}
function getTmdbMetadata(_0xde73a7, _0x276019, _0x109a4a, _0x1c3436) {
  return __async(this, null, function* () {
    let _0xca7c9b = "Unknown Title";
    let _0xe71fc9 = _0x276019 === "tv" ? "45 min" : "90 min";
    try {
      const _0x4980e7 = _0x276019 === "movie" ? "movie" : "tv";
      const _0xd7237c = "https://api.themoviedb.org/3/" + _0x4980e7 + "/" + _0xde73a7 + "?api_key=" + TMDB_API_KEY;
      const _0x378228 = yield fetch(_0xd7237c);
      if (!_0x378228.ok) {
        return {
          name: _0xca7c9b,
          year: "N/A",
          duration: _0xe71fc9
        };
      }
      const _0x13183d = yield _0x378228.json();
      let _0x149b80 = _0xe71fc9;
      if (_0x276019 === "movie" && _0x13183d.runtime) {
        _0x149b80 = _0x13183d.runtime + " min";
      } else if (_0x276019 === "tv") {
        const _0x1c0bde = "https://api.themoviedb.org/3/tv/" + _0xde73a7 + "/season/" + _0x109a4a + "/episode/" + _0x1c3436 + "?api_key=" + TMDB_API_KEY;
        const _0x28ee9b = yield fetch(_0x1c0bde);
        if (_0x28ee9b.ok) {
          const _0x39fc87 = yield _0x28ee9b.json();
          if (_0x39fc87.runtime) {
            _0x149b80 = _0x39fc87.runtime + " min";
          } else if (_0x13183d.episode_run_time && _0x13183d.episode_run_time.length > 0) {
            _0x149b80 = _0x13183d.episode_run_time[0] + " min";
          }
        }
      }
      return {
        name: _0x13183d.title || _0x13183d.name || _0xca7c9b,
        year: (_0x13183d.release_date || _0x13183d.first_air_date || "").split("-")[0] || "N/A",
        duration: _0x149b80
      };
    } catch (_0x31b79c) {
      return {
        name: _0xca7c9b,
        year: "N/A",
        duration: _0xe71fc9
      };
    }
  });
}
function generateM3u8(_0x916c06) {
  return __async2(this, arguments, function* (_0x4742cc, _0xd3349 = {}) {
    try {
      console.log("[M3U8] Parsing master m3u8: " + _0x4742cc);
      const _0x102033 = yield fetch(_0x4742cc, {
        headers: _0xd3349
      });
      const _0x56f9f3 = yield _0x102033.text();
      const _0x2948b6 = _0x4742cc.substring(0, _0x4742cc.lastIndexOf("/")) + "/";
      const _0x2a8079 = [];
      const _0x3299ee = /#EXT-X-STREAM-INF:.*?RESOLUTION=(\d+x\d+).*?\n([^\n]+)/g;
      let _0x56e1ff;
      while ((_0x56e1ff = _0x3299ee.exec(_0x56f9f3)) !== null) {
        const _0x5595d7 = parseInt(_0x56e1ff[1].split("x")[1]);
        if (_0x5595d7 < 720) {
          continue;
        }
        const _0x2c6144 = _0x5595d7 + "p";
        let _0x3eff8d = _0x56e1ff[2].trim();
        if (!_0x3eff8d.startsWith("http")) {
          if (_0x3eff8d.startsWith("/")) {
            const _0x459239 = new URL(_0x4742cc).origin;
            _0x3eff8d = _0x459239 + _0x3eff8d;
          } else {
            _0x3eff8d = _0x2948b6 + _0x3eff8d;
          }
        }
        _0x2a8079.push({
          quality: _0x2c6144,
          url: _0x3eff8d
        });
      }
      return _0x2a8079;
    } catch (_0x6a895e) {
      console.warn("[M3U8] Error parsing M3U8, returning empty.", _0x6a895e);
      return [];
    }
  });
}
function getStreams(_0x30be17, _0x3ab998, _0x456cb3, _0x25010e) {
  return __async2(this, null, function* () {
    console.log("[Vidlink] Fetching streams for " + _0x3ab998 + " " + _0x30be17);
    try {
      const _0x498435 = DECRYPT_API + "/enc-vidlink?text=" + _0x30be17;
      const _0x41d92f = yield fetch(_0x498435);
      const _0x398de0 = yield _0x41d92f.json();
      const _0x3e0592 = _0x398de0.result;
      if (!_0x3e0592) {
        console.log("[Vidlink] No encrypted ID returned");
        return [];
      }
      const _0x131462 = _0x3ab998 !== "tv" && _0x456cb3 == null;
      const _0x249719 = _0x131462 ? "movie" : "tv";
      const _0x3b42a1 = yield getTmdbMetadata(_0x30be17, _0x249719, _0x456cb3, _0x25010e);
      const _0x373493 = _0x131462 ? VIDLINK_API + "/api/b/movie/" + _0x3e0592 : VIDLINK_API + "/api/b/tv/" + _0x3e0592 + "/" + _0x456cb3 + "/" + _0x25010e;
      console.log("[Vidlink] Fetching playlist from: " + _0x373493);
      const _0x38f503 = yield fetch(_0x373493, {
        headers: HEADERS
      });
      const _0x172337 = yield _0x38f503.json();
      const _0x38acbb = _0x172337 && _0x172337.stream && _0x172337.stream.playlist;
      if (!_0x38acbb) {
        console.log("[Vidlink] No playlist in response");
        return [];
      }
      const _0x5de6a0 = [];
      const _0x564c88 = (_0x49bb74, _0x25f1fd) => {
        let _0x27cf62 = "1080p FHD";
        let _0x5bbc47 = "1080P";
        const _0x10d9ea = String(_0x49bb74).toLowerCase();
        if (_0x10d9ea.includes("2160") || _0x10d9ea.includes("4k")) {
          _0x27cf62 = "4K UHD";
          _0x5bbc47 = "2160P";
        } else if (_0x10d9ea.includes("1080")) {
          _0x27cf62 = "1080p FHD";
          _0x5bbc47 = "1080P";
        } else if (_0x10d9ea.includes("720")) {
          _0x27cf62 = "720p HD";
          _0x5bbc47 = "720P";
        } else if (_0x10d9ea.includes("auto")) {
          _0x27cf62 = "Auto Dynamic";
          _0x5bbc47 = "Auto";
        }
        const _0x4809b0 = calculateCalculatedFallbackSize(_0x5bbc47, _0x3b42a1.duration);
        const _0x3d982b = _0x3b42a1.name + (!_0x131462 ? " S" + _0x456cb3 + "E" + _0x25010e : "");
        const _0x2406d9 = "VidLink | " + _0x27cf62 + " | Main Mirror";
        const _0x3adf33 = "🎬 " + _0x3d982b + " - " + _0x3b42a1.year + "\n⚡ " + _0x5bbc47 + " | 🌍 Original | 💾 " + _0x4809b0 + "\n🎞️ M3U8 | ⏱️ " + _0x3b42a1.duration + " | 📌 Main Mirror";
        _0x5de6a0.push({
          name: _0x2406d9,
          title: _0x3adf33,
          url: _0x25f1fd,
          quality: _0x49bb74,
          type: "m3u8",
          headers: {
            "User-Agent": HEADERS["User-Agent"],
            Referer: VIDLINK_API + "/",
            Origin: VIDLINK_API
          },
          provider: "vidlink"
        });
      };
      _0x564c88("Auto", _0x38acbb);
      try {
        const _0x514053 = yield generateM3u8(_0x38acbb, {
          Referer: VIDLINK_API + "/",
          "User-Agent": HEADERS["User-Agent"]
        });
        _0x514053.forEach(_0x2d92db => {
          _0x564c88(_0x2d92db.quality, _0x2d92db.url);
        });
      } catch (_0x3658a5) {
        console.warn("[Vidlink] Failed to parse extra qualities for " + _0x38acbb);
      }
      console.log("[Vidlink] Found playlist stream");
      return _0x5de6a0.map(_0x4f56f9 => __spreadProps(__spreadValues({}, _0x4f56f9), {
        quality: getSortedQuality(_0x4f56f9.quality)
      }));
    } catch (_0x5856c2) {
      console.error("[Vidlink] Error: " + _0x5856c2.message);
      return [];
    }
  });
}
function getSortedQuality(_0x464a66) {
  if (!_0x464a66) {
    return "Auto";
  }
  const _0x3084f6 = _0x464a66.toLowerCase();
  if (_0x3084f6.includes("auto")) {
    return "Auto";
  }
  if (_0x3084f6.includes("2160") || _0x3084f6.includes("4k") || _0x3084f6.includes("uhd")) {
    return "​" + _0x464a66;
  }
  if (_0x3084f6.includes("1080") || _0x3084f6.includes("fhd")) {
    return "​​" + _0x464a66;
  }
  if (_0x3084f6.includes("720") || _0x3084f6.includes("hd")) {
    return "​​​" + _0x464a66;
  }
  if (_0x3084f6.includes("480") || _0x3084f6.includes("sd")) {
    return "​​​​" + _0x464a66;
  }
  if (_0x3084f6.includes("360")) {
    return "​​​​​" + _0x464a66;
  }
  return "​​​​" + _0x464a66;
}
module.exports = {
  getStreams: getStreams
};