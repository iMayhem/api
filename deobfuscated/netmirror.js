var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (_0x92b10d, _0x194e92, _0x81782a) => _0x194e92 in _0x92b10d ? __defProp(_0x92b10d, _0x194e92, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x81782a
}) : _0x92b10d[_0x194e92] = _0x81782a;
var __spreadValues = (_0x2d0e9e, _0x4b5223) => {
  for (var _0xa2f427 in _0x4b5223 ||= {}) {
    if (__hasOwnProp.call(_0x4b5223, _0xa2f427)) {
      __defNormalProp(_0x2d0e9e, _0xa2f427, _0x4b5223[_0xa2f427]);
    }
  }
  if (__getOwnPropSymbols) {
    for (var _0xa2f427 of __getOwnPropSymbols(_0x4b5223)) {
      if (__propIsEnum.call(_0x4b5223, _0xa2f427)) {
        __defNormalProp(_0x2d0e9e, _0xa2f427, _0x4b5223[_0xa2f427]);
      }
    }
  }
  return _0x2d0e9e;
};
var __spreadProps = (_0x349e95, _0x4434e2) => __defProps(_0x349e95, __getOwnPropDescs(_0x4434e2));
var __async = (_0x2e576b, _0x14a341, _0x18adea) => {
  return new Promise((_0x4d4778, _0x51c7a5) => {
    var _0x3f27ba = _0x2d9836 => {
      try {
        _0x12b329(_0x18adea.next(_0x2d9836));
      } catch (_0x16f0a1) {
        _0x51c7a5(_0x16f0a1);
      }
    };
    var _0x5ac59b = _0xfcf8e8 => {
      try {
        _0x12b329(_0x18adea.throw(_0xfcf8e8));
      } catch (_0x5e7cd8) {
        _0x51c7a5(_0x5e7cd8);
      }
    };
    var _0x12b329 = _0x108110 => _0x108110.done ? _0x4d4778(_0x108110.value) : Promise.resolve(_0x108110.value).then(_0x3f27ba, _0x5ac59b);
    _0x12b329((_0x18adea = _0x18adea.apply(_0x2e576b, _0x14a341)).next());
  });
};
var CONFIG_URL = "https://raw.githubusercontent.com/SaurabhKaperwan/Utils/refs/heads/main/urls.json";
var FALLBACK_NF_API = "https://tv.imgcdn.kim/newtv";
var OTT_SERVICES = [{
  code: "nf",
  name: "Netflix"
}, {
  code: "pv",
  name: "PrimeVideo"
}, {
  code: "hs",
  name: "Hotstar"
}];
var TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
var TMDB_BASE_URL = "https://api.themoviedb.org/3";
function getNfMirrorApi() {
  return __async(this, null, function* () {
    try {
      const _0x27bbf8 = yield fetch(CONFIG_URL);
      const _0x373c1c = yield _0x27bbf8.json();
      return _0x373c1c.nfmirror || FALLBACK_NF_API;
    } catch (_0x37d2b4) {
      console.warn("[NetMirror] Using fallback API URL:", FALLBACK_NF_API);
      return FALLBACK_NF_API;
    }
  });
}
function getMediaDetails(_0x10b325, _0x46a0f6) {
  return __async(this, null, function* () {
    const _0xcc0bd = _0x46a0f6 === "tv" ? "tv" : "movie";
    const _0x17ae5f = TMDB_BASE_URL + "/" + _0xcc0bd + "/" + _0x10b325 + "?api_key=" + TMDB_API_KEY;
    const _0x25f69a = yield fetch(_0x17ae5f);
    return _0x25f69a.json();
  });
}
function generateM3u8(_0x136669) {
  return __async(this, arguments, function* (_0x64729c, _0x1c39cc = {}) {
    try {
      console.log("[NetMirror] Parsing master m3u8: " + _0x64729c);
      const _0x362df7 = yield fetch(_0x64729c, {
        headers: _0x1c39cc
      });
      const _0x48af33 = yield _0x362df7.text();
      const _0x2c8f9c = _0x64729c.substring(0, _0x64729c.lastIndexOf("/")) + "/";
      const _0x177f37 = [];
      const _0x3e07f3 = /#EXT-X-STREAM-INF:.*?RESOLUTION=(\d+x\d+).*?\n([^\n]+)/g;
      let _0x533e19;
      while ((_0x533e19 = _0x3e07f3.exec(_0x48af33)) !== null) {
        const _0x4ea1c5 = parseInt(_0x533e19[1].split("x")[1]);
        if (_0x4ea1c5 < 720) {
          continue;
        }
        const _0x4c9ab = _0x4ea1c5 + "p";
        let _0x4221da = _0x533e19[2].trim();
        if (!_0x4221da.startsWith("http")) {
          if (_0x4221da.startsWith("/")) {
            const _0x24fa1b = new URL(_0x64729c).origin;
            _0x4221da = _0x24fa1b + _0x4221da;
          } else {
            _0x4221da = _0x2c8f9c + _0x4221da;
          }
        }
        _0x177f37.push({
          quality: _0x4c9ab,
          url: _0x4221da
        });
      }
      return _0x177f37;
    } catch (_0x37ac47) {
      console.warn("[NetMirror] Error parsing M3U8, returning empty.", _0x37ac47);
      return [];
    }
  });
}
function getStreams(_0x217a20, _0x284199, _0x330940, _0x4dc845) {
  return __async(this, null, function* () {
    console.log("[NetMirror] Starting search for " + _0x284199 + " " + _0x217a20);
    const _0x4e0783 = [];
    try {
      const _0x1a11ea = yield getMediaDetails(_0x217a20, _0x284199);
      const _0x230fc2 = _0x284199 === "tv" ? _0x1a11ea.name : _0x1a11ea.title;
      if (!_0x230fc2) {
        console.log("[NetMirror] Could not retrieve media title.");
        return [];
      }
      const _0x45878f = yield getNfMirrorApi();
      console.log("[NetMirror] Resolved API base: " + _0x45878f);
      const _0xf27bb5 = OTT_SERVICES.map(_0x198fb3 => extractServiceStreams(_0x45878f, _0x198fb3, _0x230fc2, _0x284199, _0x330940, _0x4dc845).catch(_0x3f7444 => {
        console.warn("[NetMirror] Error from service " + _0x198fb3.name + ":", _0x3f7444.message);
        return [];
      }));
      const _0x860050 = yield Promise.all(_0xf27bb5);
      for (const _0x5ea9d2 of _0x860050) {
        _0x4e0783.push(..._0x5ea9d2);
      }
    } catch (_0x2f6352) {
      console.error("[NetMirror] Fatal overall extraction failure:", _0x2f6352.message);
    }
    console.log("[NetMirror] Returning total " + _0x4e0783.length + " stream(s).");
    return _0x4e0783.map(_0x11139c => __spreadProps(__spreadValues({}, _0x11139c), {
      quality: getSortedQuality(_0x11139c.quality)
    }));
  });
}
function extractServiceStreams(_0x2a0b7d, _0x52161e, _0x1fe256, _0x210363, _0x2eef13, _0x595c9d) {
  return __async(this, null, function* () {
    const _0xf23d12 = [];
    const _0x14bfd5 = _0x1fe256.trim();
    const _0x49d584 = {
      ott: _0x52161e.code,
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) rv:136.0) Gecko/20100101 Firefox/136.0 /OS.GatuNewTV v1.0",
      "x-requested-with": "NetmirrorNewTV v1.0"
    };
    console.log("[NetMirror] Searching " + _0x52161e.name + " for \"" + _0x14bfd5 + "\"");
    const _0x2b981f = _0x2a0b7d + "/search.php?s=" + encodeURIComponent(_0x14bfd5);
    const _0x4cb91f = yield fetch(_0x2b981f, {
      headers: _0x49d584
    });
    const _0x4b6086 = yield _0x4cb91f.json();
    const _0x39903c = _0x4b6086.searchResult || [];
    const _0x575e26 = _0x39903c.find(_0x5c7c3c => _0x5c7c3c.t && _0x5c7c3c.t.trim().toLowerCase() === _0x14bfd5.toLowerCase());
    if (!_0x575e26 || !_0x575e26.id) {
      console.log("[NetMirror] No direct match on " + _0x52161e.name);
      return [];
    }
    const _0x2c26cb = _0x575e26.id;
    let _0x410739 = _0x2c26cb;
    if (_0x210363 === "tv") {
      console.log("[NetMirror] TV Match on " + _0x52161e.name + " (ID: " + _0x2c26cb + "), drilling down to S" + _0x2eef13 + "E" + _0x595c9d);
      const _0x428252 = yield fetch(_0x2a0b7d + "/post.php?id=" + _0x2c26cb, {
        headers: _0x49d584
      });
      const _0x3c7bc6 = yield _0x428252.json();
      const _0x999014 = _0x3c7bc6.season || [];
      const _0x49e583 = "Season " + _0x2eef13;
      const _0x13a8c2 = _0x999014.find(_0x1389d2 => _0x1389d2.s && _0x1389d2.s.toString().includes(_0x49e583));
      if (!_0x13a8c2 || !_0x13a8c2.id) {
        console.log("[NetMirror] Season " + _0x2eef13 + " not found on " + _0x52161e.name);
        return [];
      }
      const _0x5d954e = _0x13a8c2.id;
      let _0x2ba8b3 = null;
      let _0xaf7566 = 1;
      while (!_0x2ba8b3 && _0xaf7566 < 10) {
        console.log("[NetMirror] Paging episodes list (Page " + _0xaf7566 + ") on " + _0x52161e.name);
        const _0x2d4455 = yield fetch(_0x2a0b7d + "/episodes.php?id=" + _0x5d954e + "&page=" + _0xaf7566, {
          headers: _0x49d584
        });
        const _0x2c89f8 = yield _0x2d4455.json();
        const _0x41078a = _0x2c89f8.episodes || [];
        const _0x3baeaa = _0x41078a.find(_0x1d79b9 => _0x1d79b9.ep && _0x1d79b9.ep.toString() === _0x595c9d.toString());
        if (_0x3baeaa && _0x3baeaa.id) {
          _0x2ba8b3 = _0x3baeaa.id;
        }
        if (parseInt(_0x2c89f8.nextPageShow) !== 1) {
          break;
        }
        _0xaf7566++;
      }
      if (!_0x2ba8b3) {
        console.log("[NetMirror] Episode " + _0x595c9d + " not found on " + _0x52161e.name);
        return [];
      }
      _0x410739 = _0x2ba8b3;
    }
    console.log("[NetMirror] Fetching final stream payload for ID " + _0x410739 + " on " + _0x52161e.name);
    const _0x2f648a = yield fetch(_0x2a0b7d + "/player.php?id=" + _0x410739, {
      headers: _0x49d584
    });
    const _0x201efd = yield _0x2f648a.json();
    if (_0x201efd && _0x201efd.video_link) {
      const _0x47f41e = _0x201efd.video_link;
      const _0x19e2ab = _0x47f41e.includes(".m3u8");
      const _0x2f648b = _0x201efd.referer || "https://tv.imgcdn.kim/";
      const _0x2f648c = (() => { try { return new URL(_0x2f648b).origin; } catch(e) { return "https://tv.imgcdn.kim"; } })();
      _0xf23d12.push({
        name: _0x52161e.name,
        title: "Auto",
        url: _0x47f41e,
        quality: "Auto",
        type: _0x19e2ab ? "m3u8" : _0x47f41e.includes(".mp4") || _0x47f41e.includes(".mkv") ? "video" : null,
        headers: {
          Referer: _0x2f648b,
          Origin: _0x2f648c,
          "User-Agent": _0x49d584["User-Agent"]
        },
        provider: "netmirror"
      });
      if (_0x19e2ab) {
        try {
          const _0x5286e1 = yield generateM3u8(_0x47f41e, {
            Referer: _0x2f648b,
            Origin: _0x2f648c,
            "User-Agent": _0x49d584["User-Agent"]
          });
          _0x5286e1.forEach(_0x15e13c => {
            _0xf23d12.push({
              name: _0x52161e.name,
              title: _0x15e13c.quality,
              url: _0x15e13c.url,
              quality: _0x15e13c.quality,
              type: "m3u8",
              headers: {
                Referer: _0x2f648b,
                Origin: _0x2f648c,
                "User-Agent": _0x49d584["User-Agent"]
              },
              provider: "netmirror"
            });
          });
        } catch (_0x1a21b9) {}
      }
      console.log("[NetMirror] SUCCESS: Captured link for " + _0x52161e.name);
    }
    return _0xf23d12;
  });
}
function getSortedQuality(_0x8ff978) {
  if (!_0x8ff978) {
    return "Auto";
  }
  const _0x3c1967 = _0x8ff978.toLowerCase();
  if (_0x3c1967.includes("auto")) {
    return "Auto";
  }
  if (_0x3c1967.includes("2160") || _0x3c1967.includes("4k") || _0x3c1967.includes("uhd")) {
    return "​" + _0x8ff978;
  }
  if (_0x3c1967.includes("1080") || _0x3c1967.includes("fhd")) {
    return "​​" + _0x8ff978;
  }
  if (_0x3c1967.includes("720") || _0x3c1967.includes("hd")) {
    return "​​​" + _0x8ff978;
  }
  if (_0x3c1967.includes("480") || _0x3c1967.includes("sd")) {
    return "​​​​" + _0x8ff978;
  }
  if (_0x3c1967.includes("360")) {
    return "​​​​​" + _0x8ff978;
  }
  return "​​​​" + _0x8ff978;
}
module.exports = {
  getStreams: getStreams
};