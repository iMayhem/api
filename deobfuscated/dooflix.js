var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (_0x30dfd2, _0x2defd7) => {
  for (var _0x2a744a in _0x2defd7) {
    __defProp(_0x30dfd2, _0x2a744a, {
      get: _0x2defd7[_0x2a744a],
      enumerable: true
    });
  }
};
var __copyProps = (_0x599d71, _0x355933, _0x5f08bd, _0x364e9b) => {
  if (_0x355933 && typeof _0x355933 === "object" || typeof _0x355933 === "function") {
    for (let _0x146172 of __getOwnPropNames(_0x355933)) {
      if (!__hasOwnProp.call(_0x599d71, _0x146172) && _0x146172 !== _0x5f08bd) {
        __defProp(_0x599d71, _0x146172, {
          get: () => _0x355933[_0x146172],
          enumerable: !(_0x364e9b = __getOwnPropDesc(_0x355933, _0x146172)) || _0x364e9b.enumerable
        });
      }
    }
  }
  return _0x599d71;
};
var __toCommonJS = _0x4ea6ad => __copyProps(__defProp({}, "__esModule", {
  value: true
}), _0x4ea6ad);
var __async = (_0x556b42, _0x2554fa, _0x3f930d) => {
  return new Promise((_0x3e1d23, _0x194ff4) => {
    var _0x48cf60 = _0x1c05c4 => {
      try {
        _0x525665(_0x3f930d.next(_0x1c05c4));
      } catch (_0x84a9da) {
        _0x194ff4(_0x84a9da);
      }
    };
    var _0x2fff47 = _0x3b61bb => {
      try {
        _0x525665(_0x3f930d.throw(_0x3b61bb));
      } catch (_0x365145) {
        _0x194ff4(_0x365145);
      }
    };
    var _0x525665 = _0x21972c => _0x21972c.done ? _0x3e1d23(_0x21972c.value) : Promise.resolve(_0x21972c.value).then(_0x48cf60, _0x2fff47);
    _0x525665((_0x3f930d = _0x3f930d.apply(_0x556b42, _0x2554fa)).next());
  });
};
var dooflix_exports = {};
__export(dooflix_exports, {
  getStreams: () => getStreams
});
module.exports = __toCommonJS(dooflix_exports);
var BASE_API = "https://panel.watchkaroabhi.com";
var API_KEY = "qNhKLJiZVyoKdi9NCQGz8CIGrpUijujE";
var HEADERS = {
  "X-Package-Name": "com.king.moja",
  "User-Agent": "dooflix",
  "X-App-Version": "305"
};
var STREAM_REFERER = "https://molop.art/";
function getStreams(_0x421279, _0x588383 = "movie", _0x4d7743 = null, _0xc410b3 = null) {
  return __async(this, null, function* () {
    console.log("[DooFlix] Fetching streams for TMDB ID: " + _0x421279 + ", Type: " + _0x588383);
    try {
      let _0x1f301c;
      if (_0x588383 === "movie") {
        _0x1f301c = BASE_API + "/api/3/movie/" + _0x421279 + "/links?api_key=" + API_KEY;
      } else {
        if (!_0x4d7743 || !_0xc410b3) {
          console.error("[DooFlix] Missing season or episode for TV show");
          return [];
        }
        _0x1f301c = BASE_API + "/api/3/tv/" + _0x421279 + "/season/" + _0x4d7743 + "/episode/" + _0xc410b3 + "/links?api_key=" + API_KEY;
      }
      const _0x267192 = yield fetch(_0x1f301c, {
        headers: HEADERS
      });
      if (!_0x267192.ok) {
        console.log("[DooFlix] API error: " + _0x267192.status);
        return [];
      }
      const _0x50eb08 = yield _0x267192.json();
      const _0x58477c = _0x50eb08.links || [];
      const _0x5d71cc = [];
      for (const _0x5c8478 of _0x58477c) {
        try {
          const _0x556f38 = yield fetch(_0x5c8478.url, {
            method: "GET",
            headers: {
              Referer: STREAM_REFERER,
              "User-Agent": HEADERS["User-Agent"]
            },
            redirect: "manual"
          });
          let _0xfa14f7 = _0x556f38.headers.get("location") || _0x556f38.url;
          if (_0xfa14f7 && _0xfa14f7 !== _0x5c8478.url) {
            _0x5d71cc.push({
              name: "DooFlix",
              title: "DooFlix - " + (_0x5c8478.host || "Server"),
              url: _0xfa14f7,
              quality: "Auto",
              headers: {
                Referer: STREAM_REFERER,
                "User-Agent": HEADERS["User-Agent"]
              },
              provider: "dooflix"
            });
          }
        } catch (_0x4d1b70) {
          console.log("[DooFlix] Error fetching redirect for " + _0x5c8478.url + ": " + _0x4d1b70.message);
        }
      }
      return _0x5d71cc;
    } catch (_0x2be428) {
      console.error("[DooFlix] Error: " + _0x2be428.message);
      return [];
    }
  });
}