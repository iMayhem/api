var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (_0x4eb127, _0x2ad423, _0x1a1f05) => _0x2ad423 in _0x4eb127 ? __defProp(_0x4eb127, _0x2ad423, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x1a1f05
}) : _0x4eb127[_0x2ad423] = _0x1a1f05;
var __spreadValues = (_0x229423, _0x157872) => {
  for (var _0x290fbc in _0x157872 ||= {}) {
    if (__hasOwnProp.call(_0x157872, _0x290fbc)) {
      __defNormalProp(_0x229423, _0x290fbc, _0x157872[_0x290fbc]);
    }
  }
  if (__getOwnPropSymbols) {
    for (var _0x290fbc of __getOwnPropSymbols(_0x157872)) {
      if (__propIsEnum.call(_0x157872, _0x290fbc)) {
        __defNormalProp(_0x229423, _0x290fbc, _0x157872[_0x290fbc]);
      }
    }
  }
  return _0x229423;
};
var __spreadProps = (_0x451b6b, _0x3855f4) => __defProps(_0x451b6b, __getOwnPropDescs(_0x3855f4));
var __async = (_0x12c675, _0x487e4f, _0x52e0c8) => {
  return new Promise((_0x283040, _0x255908) => {
    var _0x40da07 = _0x17e38c => {
      try {
        _0x3220f3(_0x52e0c8.next(_0x17e38c));
      } catch (_0x3c2d3c) {
        _0x255908(_0x3c2d3c);
      }
    };
    var _0x136407 = _0x1ca8d9 => {
      try {
        _0x3220f3(_0x52e0c8.throw(_0x1ca8d9));
      } catch (_0x1c70d7) {
        _0x255908(_0x1c70d7);
      }
    };
    var _0x3220f3 = _0x22f3f9 => _0x22f3f9.done ? _0x283040(_0x22f3f9.value) : Promise.resolve(_0x22f3f9.value).then(_0x40da07, _0x136407);
    _0x3220f3((_0x52e0c8 = _0x52e0c8.apply(_0x12c675, _0x487e4f)).next());
  });
};
var VIDFAST_API = "https://vidfast.pro";
var DECRYPT_API = "https://enc-dec.app/api";
var HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  Referer: "https://vidfast.pro/",
  "X-Requested-With": "XMLHttpRequest"
};
function generateM3u8(_0x2b1a44) {
  return __async(this, arguments, function* (_0xd1471d, _0x4d2700 = {}) {
    try {
      console.log("[VidFast] Parsing master m3u8: " + _0xd1471d);
      const _0x9cc564 = yield fetch(_0xd1471d, {
        headers: _0x4d2700
      });
      const _0xaf7900 = yield _0x9cc564.text();
      const _0x284887 = _0xd1471d.substring(0, _0xd1471d.lastIndexOf("/")) + "/";
      const _0x4b3dc7 = [];
      const _0xffe027 = /#EXT-X-STREAM-INF:.*?RESOLUTION=(\d+x\d+).*?\n([^\n]+)/g;
      let _0x1f1382;
      while ((_0x1f1382 = _0xffe027.exec(_0xaf7900)) !== null) {
        const _0x485f93 = parseInt(_0x1f1382[1].split("x")[1]);
        if (_0x485f93 < 720) {
          continue;
        }
        const _0x328c7a = _0x485f93 + "p";
        let _0x200511 = _0x1f1382[2].trim();
        if (!_0x200511.startsWith("http")) {
          if (_0x200511.startsWith("/")) {
            const _0x1e355f = new URL(_0xd1471d).origin;
            _0x200511 = _0x1e355f + _0x200511;
          } else {
            _0x200511 = _0x284887 + _0x200511;
          }
        }
        _0x4b3dc7.push({
          quality: _0x328c7a,
          url: _0x200511
        });
      }
      return _0x4b3dc7;
    } catch (_0x22b677) {
      console.warn("[VidFast] Error parsing M3U8, returning empty.", _0x22b677);
      return [];
    }
  });
}
function getStreams(_0x17529e, _0x513725, _0x90d1c0, _0x485af3) {
  return __async(this, null, function* () {
    console.log("[VidFast] Fetching streams for " + _0x513725 + " " + _0x17529e);
    try {
      const _0x37dd34 = _0x513725 !== "tv" && _0x90d1c0 == null;
      const _0x2bd461 = _0x37dd34 ? VIDFAST_API + "/movie/" + _0x17529e + "/" : VIDFAST_API + "/tv/" + _0x17529e + "/" + _0x90d1c0 + "/" + _0x485af3 + "/";
      console.log("[VidFast] Loading page: " + _0x2bd461);
      const _0x5932fc = yield fetch(_0x2bd461, {
        headers: HEADERS
      });
      const _0x1820c4 = yield _0x5932fc.text();
      const _0x2ea1cb = _0x1820c4.match(/\\"en\\":\\"(.*?)\\"/);
      if (!_0x2ea1cb || !_0x2ea1cb[1]) {
        console.log("[VidFast] No encoded token found in page");
        return [];
      }
      const _0x11edec = _0x2ea1cb[1];
      const _0x263a43 = DECRYPT_API + "/enc-vidfast?text=" + _0x11edec + "&version=1";
      const _0x20f10e = yield fetch(_0x263a43);
      const _0x4a803a = yield _0x20f10e.json();
      const _0x43d881 = _0x4a803a.result;
      if (!_0x43d881 || !_0x43d881.servers || !_0x43d881.stream || !_0x43d881.token) {
        console.log("[VidFast] Incomplete decryption config");
        return [];
      }
      const _0xcb5234 = _0x43d881.servers;
      const _0x4cf9df = _0x43d881.stream;
      const _0x43df5d = _0x43d881.token;
      const _0x1c5804 = __spreadProps(__spreadValues({}, HEADERS), {
        "X-CSRF-Token": _0x43df5d
      });
      const _0x4485ed = yield fetch(_0xcb5234, {
        method: "POST",
        headers: _0x1c5804
      });
      const _0x2427d5 = yield _0x4485ed.text();
      const _0x421f26 = yield fetch(DECRYPT_API + "/dec-vidfast", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": HEADERS["User-Agent"]
        },
        body: JSON.stringify({
          text: _0x2427d5,
          version: "1"
        })
      });
      const _0x42892b = yield _0x421f26.json();
      const _0x2823bc = _0x42892b.result;
      if (!Array.isArray(_0x2823bc) || _0x2823bc.length === 0) {
        console.log("[VidFast] No servers in decrypted response");
        return [];
      }
      console.log("[VidFast] Found " + _0x2823bc.length + " server(s)");
      const _0x4d1d62 = _0x2823bc.map(_0x50e411 => fetchServerStream(_0x50e411, _0x4cf9df, _0x1c5804).catch(() => []));
      const _0x2219bd = yield Promise.all(_0x4d1d62);
      const _0x39f0a3 = [];
      for (const _0x28c4d8 of _0x2219bd) {
        if (_0x28c4d8.length > 0) {
          _0x39f0a3.push(..._0x28c4d8);
        }
      }
      console.log("[VidFast] Returning " + _0x39f0a3.length + " streams");
      return _0x39f0a3.map(_0x4b1465 => __spreadProps(__spreadValues({}, _0x4b1465), {
        quality: getSortedQuality(_0x4b1465.quality)
      }));
    } catch (_0x59895d) {
      console.error("[VidFast] Error: " + _0x59895d.message);
      return [];
    }
  });
}
function fetchServerStream(_0xe191fc, _0x1404c5, _0x3d1966) {
  return __async(this, null, function* () {
    try {
      const _0x2f6291 = _0xe191fc.data;
      if (!_0x2f6291) {
        return [];
      }
      const _0x462ba3 = _0xe191fc.name || "Default";
      const _0x19a05c = _0xe191fc.description || "";
      const _0x1e07f7 = _0x1404c5 + "/" + _0x2f6291;
      const _0x53ba63 = yield fetch(_0x1e07f7, {
        method: "POST",
        headers: _0x3d1966
      });
      const _0x5f05c0 = yield _0x53ba63.text();
      if (!_0x5f05c0 || _0x5f05c0.trim() === "") {
        return [];
      }
      const _0x33e105 = yield fetch(DECRYPT_API + "/dec-vidfast", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": HEADERS["User-Agent"]
        },
        body: JSON.stringify({
          text: _0x5f05c0,
          version: "1"
        })
      });
      const _0x3f8f0b = yield _0x33e105.json();
      const _0x2a5f02 = _0x3f8f0b.result;
      if (!_0x2a5f02 || !_0x2a5f02.url) {
        return [];
      }
      const _0x6c694b = _0x2a5f02.url;
      const _0x498082 = _0x2a5f02["4kAvailable"] === true || _0x19a05c && _0x19a05c.toLowerCase().includes("4k");
      const _0xe077ec = _0x498082 ? "2160p" : "1080p";
      const _0x2d652b = _0x6c694b.includes(".m3u8");
      const _0x267487 = [{
        name: "Vidfast [" + _0x462ba3 + "]",
        title: _0x2d652b ? "Auto" : _0x19a05c || _0xe077ec,
        url: _0x6c694b,
        quality: _0x2d652b ? "Auto" : _0xe077ec,
        type: _0x2d652b ? "m3u8" : _0x6c694b.includes(".mp4") || _0x6c694b.includes(".mkv") ? "video" : null,
        headers: _0x3d1966,
        provider: "vidfast"
      }];
      if (_0x2d652b) {
        try {
          const _0x241c36 = yield generateM3u8(_0x6c694b, _0x3d1966);
          _0x241c36.forEach(_0x1d0cfa => {
            _0x267487.push({
              name: "Vidfast [" + _0x462ba3 + "]",
              title: _0x1d0cfa.quality,
              url: _0x1d0cfa.url,
              quality: _0x1d0cfa.quality,
              type: "m3u8",
              headers: _0x3d1966,
              provider: "vidfast"
            });
          });
        } catch (_0x483721) {}
      }
      console.log("[VidFast] " + _0x462ba3 + ": found stream (" + (_0x2d652b ? "Adaptive" : _0xe077ec) + ")");
      return _0x267487.map(_0x4adc17 => __spreadProps(__spreadValues({}, _0x4adc17), {
        quality: getSortedQuality(_0x4adc17.quality)
      }));
    } catch (_0x302d73) {
      return [];
    }
  });
}
function getSortedQuality(_0x1f35f6) {
  if (!_0x1f35f6) {
    return "Auto";
  }
  const _0x2a140d = _0x1f35f6.toLowerCase();
  if (_0x2a140d.includes("auto")) {
    return "Auto";
  }
  if (_0x2a140d.includes("2160") || _0x2a140d.includes("4k") || _0x2a140d.includes("uhd")) {
    return "​" + _0x1f35f6;
  }
  if (_0x2a140d.includes("1080") || _0x2a140d.includes("fhd")) {
    return "​​" + _0x1f35f6;
  }
  if (_0x2a140d.includes("720") || _0x2a140d.includes("hd")) {
    return "​​​" + _0x1f35f6;
  }
  if (_0x2a140d.includes("480") || _0x2a140d.includes("sd")) {
    return "​​​​" + _0x1f35f6;
  }
  if (_0x2a140d.includes("360")) {
    return "​​​​​" + _0x1f35f6;
  }
  return "​​​​" + _0x1f35f6;
}
module.exports = {
  getStreams: getStreams
};