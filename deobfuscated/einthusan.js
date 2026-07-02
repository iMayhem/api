'use strict';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (_0x4462bc, _0x148813, _0x182a38) => _0x148813 in _0x4462bc ? __defProp(_0x4462bc, _0x148813, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x182a38
}) : _0x4462bc[_0x148813] = _0x182a38;
var __spreadValues = (_0x5209b2, _0x40a9f6) => {
  for (var _0x22ea0e in _0x40a9f6 ||= {}) {
    if (__hasOwnProp.call(_0x40a9f6, _0x22ea0e)) {
      __defNormalProp(_0x5209b2, _0x22ea0e, _0x40a9f6[_0x22ea0e]);
    }
  }
  if (__getOwnPropSymbols) {
    for (var _0x22ea0e of __getOwnPropSymbols(_0x40a9f6)) {
      if (__propIsEnum.call(_0x40a9f6, _0x22ea0e)) {
        __defNormalProp(_0x5209b2, _0x22ea0e, _0x40a9f6[_0x22ea0e]);
      }
    }
  }
  return _0x5209b2;
};
var __spreadProps = (_0x14aebc, _0xc7f904) => __defProps(_0x14aebc, __getOwnPropDescs(_0xc7f904));
var __async = (_0x5e73d3, _0x254b0e, _0x12b4a3) => {
  return new Promise((_0x14317b, _0x145add) => {
    var _0x545593 = _0x262828 => {
      try {
        _0x31a0a0(_0x12b4a3.next(_0x262828));
      } catch (_0x5a0b6a) {
        _0x145add(_0x5a0b6a);
      }
    };
    var _0x58aa0e = _0x497f13 => {
      try {
        _0x31a0a0(_0x12b4a3.throw(_0x497f13));
      } catch (_0x513e74) {
        _0x145add(_0x513e74);
      }
    };
    var _0x31a0a0 = _0x4ad4a9 => _0x4ad4a9.done ? _0x14317b(_0x4ad4a9.value) : Promise.resolve(_0x4ad4a9.value).then(_0x545593, _0x58aa0e);
    _0x31a0a0((_0x12b4a3 = _0x12b4a3.apply(_0x5e73d3, _0x254b0e)).next());
  });
};
function onSettings() {
  return __async(this, null, function* () {
    return [{
      type: "header",
      label: "Language Preferences"
    }, {
      type: "toggle",
      key: "langHindi",
      label: "Enable Hindi 🇮🇳",
      defaultValue: true
    }, {
      type: "toggle",
      key: "langTamil",
      label: "Enable Tamil 🇮🇳",
      defaultValue: true
    }, {
      type: "toggle",
      key: "langTelugu",
      label: "Enable Telugu 🇮🇳",
      defaultValue: true
    }, {
      type: "toggle",
      key: "langMalayalam",
      label: "Enable Malayalam 🇮🇳",
      defaultValue: true
    }, {
      type: "toggle",
      key: "langKannada",
      label: "Enable Kannada 🇮🇳",
      defaultValue: true
    }, {
      type: "toggle",
      key: "langBengali",
      label: "Enable Bengali 🇧🇩",
      defaultValue: true
    }];
  });
}
var EINTHUSAN_BASE = "https://einthusan.asaddon.com";
var TMDB_API_KEY = "6e6ab700b6477171ee6c23d504b1e9cb";
var PROVIDER_NAME = "Einthusan";
var LANGUAGES = {
  langHindi: {
    path: "hindi",
    label: "Hindi 🇮🇳",
    webCode: "hindi"
  },
  langTamil: {
    path: "tamil",
    label: "Tamil",
    webCode: "tamil"
  },
  langTelugu: {
    path: "telugu",
    label: "Telugu",
    webCode: "telugu"
  },
  langMalayalam: {
    path: "malayalam",
    label: "Malayalam",
    webCode: "malayalam"
  },
  langKannada: {
    path: "kannada",
    label: "Kannada",
    webCode: "kannada"
  },
  langBengali: {
    path: "bengali",
    label: "Bengali 🇧🇩",
    webCode: "bengali"
  }
};
var LANGUAGE_ORDER = ["hindi", "tamil", "telugu", "malayalam", "kannada", "bengali"];
var DEFAULT_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.9"
};
var sessionCache = {};
function getSession(_0x290a67) {
  const _0x149370 = sessionCache["session_" + _0x290a67];
  if (!_0x149370) {
    return null;
  }
  if (Date.now() - _0x149370.createdAt > 9000000) {
    delete sessionCache["session_" + _0x290a67];
    return null;
  }
  return _0x149370.cookieString;
}
function parseAndCombineCookies(_0x4bada2, _0x5b141c) {
  if (!_0x5b141c) {
    return _0x4bada2;
  }
  const _0x33fbb3 = {};
  if (_0x4bada2) {
    _0x4bada2.split(";").forEach(_0xcf1a38 => {
      const _0x4dcf64 = _0xcf1a38.split("=");
      if (_0x4dcf64[0]) {
        _0x33fbb3[_0x4dcf64[0].trim()] = _0x4dcf64.slice(1).join("=").trim();
      }
    });
  }
  const _0x212b03 = Array.isArray(_0x5b141c) ? _0x5b141c : [_0x5b141c];
  _0x212b03.forEach(_0x4c13d2 => {
    _0x4c13d2.split(",").forEach(_0x2c95fe => {
      const _0x10b53d = _0x2c95fe.split(";")[0].split("=");
      if (_0x10b53d[0] && _0x10b53d[1]) {
        _0x33fbb3[_0x10b53d[0].trim()] = _0x10b53d.slice(1).join("=").trim();
      }
    });
  });
  return Object.entries(_0x33fbb3).map(([_0x4000d6, _0x1e450]) => _0x4000d6 + "=" + _0x1e450).join("; ");
}
function loginAndGetCookies(_0x308155, _0x35ec57, _0x18763c) {
  return __async(this, null, function* () {
    if (!_0x308155 || !_0x35ec57) {
      return "";
    }
    const _0x1a69b4 = getSession(_0x308155);
    if (_0x1a69b4) {
      return _0x1a69b4;
    }
    try {
      const _0x422ab8 = "https://einthusan.tv/account/login/?lang=" + _0x18763c;
      const _0x5513d9 = yield fetch(_0x422ab8, {
        headers: DEFAULT_HEADERS
      });
      const _0x13b39c = yield _0x5513d9.text();
      const _0x430b69 = _0x13b39c.match(/name="(?:csrfmiddlewaretoken|_token)"\s+value="([^"]+)"/) || _0x13b39c.match(/value="([^"]+)"\s+name="(?:csrfmiddlewaretoken|_token)"/);
      const _0x59e769 = _0x430b69 ? _0x430b69[1] : "";
      const _0x160042 = _0x5513d9.headers.getSetCookie ? _0x5513d9.headers.getSetCookie() : _0x5513d9.headers.get("set-cookie");
      let _0x4bca91 = parseAndCombineCookies("", _0x160042);
      const _0x7f74e6 = new URLSearchParams({
        csrfmiddlewaretoken: _0x59e769,
        email: _0x308155,
        password: _0x35ec57,
        next: "/"
      });
      const _0xbde95d = yield fetch(_0x422ab8, {
        method: "POST",
        headers: __spreadProps(__spreadValues({}, DEFAULT_HEADERS), {
          "Content-Type": "application/x-www-form-urlencoded",
          Cookie: _0x4bca91,
          Referer: _0x422ab8
        }),
        body: _0x7f74e6.toString(),
        redirect: "manual"
      });
      const _0x38f40c = _0xbde95d.headers.getSetCookie ? _0xbde95d.headers.getSetCookie() : _0xbde95d.headers.get("set-cookie");
      _0x4bca91 = parseAndCombineCookies(_0x4bca91, _0x38f40c);
      if (!_0x4bca91.includes("sid=")) {
        return "";
      }
      sessionCache["session_" + _0x308155] = {
        cookieString: _0x4bca91,
        createdAt: Date.now()
      };
      return _0x4bca91;
    } catch (_0x204e9b) {
      return "";
    }
  });
}
function scrapePremiumTokens(_0x3ec53d, _0x4f3b1a, _0x5caf9a, _0x1fa27c) {
  return __async(this, null, function* () {
    try {
      const _0x1da548 = _0x5caf9a ? "serial" : "movie";
      const _0x2c965a = "https://einthusan.tv/" + (_0x1fa27c ? "premium/" : "") + _0x1da548 + "/watch/" + _0x3ec53d + "/?lang=" + (_0x4f3b1a || "hindi") + "&uhd=true";
      const _0x1f772f = __spreadProps(__spreadValues({}, DEFAULT_HEADERS), {
        Referer: "https://einthusan.tv/"
      });
      if (_0x1fa27c) {
        _0x1f772f.Cookie = _0x1fa27c;
      }
      const _0x10c202 = yield fetch(_0x2c965a, {
        headers: _0x1f772f
      });
      if (!_0x10c202.ok) {
        return null;
      }
      const _0x20af79 = yield _0x10c202.text();
      const _0x2fbb2e = /data-m3u8=["']([^"']*\.mp4(?:\.m3u8)?\?[^"']+)["']/;
      const _0x177ea0 = _0x20af79.match(_0x2fbb2e);
      if (_0x177ea0 && _0x177ea0[1]) {
        const _0x14255c = _0x177ea0[1].replace(/&amp;/g, "&");
        const _0x4e09e7 = _0x14255c.match(/[?&](e=\d+&md5=[a-zA-Z0-9_=-]+)/);
        if (_0x4e09e7) {
          return _0x4e09e7[1];
        }
      }
      const _0x41ddcb = /content\/[DB][^.]+\.mp4(?:\.m3u8)?\?(e=\d+&amp;md5=[a-zA-Z0-9_=-]+)/;
      const _0x19379a = _0x20af79.match(_0x41ddcb);
      if (_0x19379a) {
        return _0x19379a[1].replace(/&amp;/g, "&");
      }
    } catch (_0x5d3fc7) {
      console.error("Token structural parsing error:", _0x5d3fc7);
    }
    return null;
  });
}
function getTmdbMeta(_0x223566, _0x4a5c94) {
  return __async(this, null, function* () {
    const _0x2fc707 = _0x4a5c94 === "tv" ? "tv" : "movie";
    const _0x184084 = "https://api.themoviedb.org/3/" + _0x2fc707 + "/" + _0x223566 + "?api_key=" + TMDB_API_KEY + "&append_to_response=external_ids";
    try {
      const _0x131dc4 = yield fetch(_0x184084);
      if (!_0x131dc4.ok) {
        return null;
      }
      return yield _0x131dc4.json();
    } catch (_0x211a69) {
      return null;
    }
  });
}
var pad2 = _0x5f2726 => String(Number.parseInt(_0x5f2726 ?? 0, 10) || 0).padStart(2, "0");
var isProxyUrl = _0x4e0a08 => String(_0x4e0a08 ?? "").includes("workers.dev") || /[?&]url=/.test(String(_0x4e0a08 ?? ""));
function resolveProxyUrl(_0x44e34d) {
  return __async(this, null, function* () {
    try {
      const _0x5c7522 = yield fetch(_0x44e34d, {
        redirect: "follow",
        headers: __spreadProps(__spreadValues({}, DEFAULT_HEADERS), {
          Referer: _0x44e34d
        })
      });
      const _0x32ef9a = _0x5c7522.url;
      if ([".m3u8", ".mp4", ".mkv"].some(_0x1dfc3e => _0x32ef9a.includes(_0x1dfc3e))) {
        return _0x32ef9a;
      }
      const _0x7cd6e1 = _0x5c7522.headers.get("content-type") ?? "";
      if (_0x7cd6e1.includes("text/plain")) {
        return (yield _0x5c7522.text()).trim();
      }
      if (_0x7cd6e1.includes("application/json")) {
        const _0x29afd0 = yield _0x5c7522.json();
        return (_0x29afd0 == null ? undefined : _0x29afd0.url) ?? (_0x29afd0 == null ? undefined : _0x29afd0.stream) ?? (_0x29afd0 == null ? undefined : _0x29afd0.src) ?? null;
      }
      return _0x32ef9a;
    } catch (_0x249f65) {
      return null;
    }
  });
}
function fetchStreams(_0x1e416a) {
  return __async(this, null, function* () {
    try {
      const _0x49ba7f = yield fetch(_0x1e416a);
      if (!_0x49ba7f.ok) {
        return [];
      }
      const _0x10b3bd = yield _0x49ba7f.json();
      if (!Array.isArray(_0x10b3bd == null ? undefined : _0x10b3bd.streams)) {
        return [];
      }
      return _0x10b3bd.streams.filter(_0x562e8e => typeof (_0x562e8e == null ? undefined : _0x562e8e.url) === "string" && _0x562e8e.url.startsWith("https"));
    } catch (_0x76a9) {
      return [];
    }
  });
}
function getStreams(_0x34a7b0, _0x13025c, _0xf30bc2, _0x2fe195) {
  return __async(this, null, function* () {
    var _0x478001;
    const _0x21c5d1 = _0x13025c === "tv" || _0x13025c === "series" || _0xf30bc2 != null || _0x2fe195 != null;
    const _0xd15bd5 = _0xf30bc2 ?? 1;
    const _0x50136c = _0x2fe195 ?? 1;
    try {
      const _0xd20623 = globalThis.SCRAPER_SETTINGS || {};
      const _0x1af871 = Object.entries(LANGUAGES).filter(([_0x5d70de]) => _0xd20623[_0x5d70de] !== false);
      const _0x587fe0 = yield getTmdbMeta(_0x34a7b0, _0x21c5d1 ? "tv" : "movie");
      const _0x2fa412 = _0x587fe0 ? _0x587fe0.title || _0x587fe0.name : "Movie";
      const _0x36ab81 = _0x587fe0 ? _0x587fe0.release_date || _0x587fe0.first_air_date || "" : "";
      const _0x3403ab = _0x36ab81 ? " - (" + _0x36ab81.substring(0, 4) + ")" : "";
      const _0x37fe12 = ((_0x478001 = _0x587fe0 == null ? undefined : _0x587fe0.external_ids) == null ? undefined : _0x478001.imdb_id) || (_0x587fe0 == null ? undefined : _0x587fe0.imdb_id);
      if (!_0x37fe12) {
        return [];
      }
      const _0x2e1f28 = _0xd20623.premiumEmail || "";
      const _0x3b296b = _0xd20623.premiumPassword || "";
      const _0x4c1246 = [];
      yield Promise.all(_0x1af871.map(_0x194197 => __async(this, [_0x194197], function* ([_0x37f633, _0x49e3f7]) {
        const _0x3099e5 = yield loginAndGetCookies(_0x2e1f28, _0x3b296b, _0x49e3f7.webCode);
        let _0xe7595b = [];
        const _0x382019 = EINTHUSAN_BASE + "/" + _0x49e3f7.path;
        if (!_0x21c5d1) {
          _0xe7595b = yield fetchStreams(_0x382019 + "/stream/movie/" + _0x37fe12 + ".json");
        } else {
          _0xe7595b = yield fetchStreams(_0x382019 + "/stream/series/" + _0x37fe12 + ":" + pad2(_0xd15bd5) + ":" + pad2(_0x50136c) + ".json");
        }
        for (const _0x4e4f6a of _0xe7595b) {
          if (!(_0x4e4f6a == null ? undefined : _0x4e4f6a.url) || _0x4e4f6a.externalUrl || String(_0x4e4f6a.url).includes("github.com")) {
            continue;
          }
          let _0x49f15d = isProxyUrl(_0x4e4f6a.url) ? yield resolveProxyUrl(_0x4e4f6a.url) : _0x4e4f6a.url;
          if (!_0x49f15d) {
            continue;
          }
          const _0x5e57ef = _0x49f15d.match(/\/content\/[DB]([^.]+)\.mp4/);
          if (!_0x5e57ef) {
            continue;
          }
          const _0x55fd09 = _0x5e57ef[1];
          let _0x51f445 = "";
          if (_0x3099e5) {
            _0x51f445 = yield scrapePremiumTokens(_0x55fd09, _0x49e3f7.webCode, _0x21c5d1, _0x3099e5);
          }
          if (!_0x51f445) {
            const _0x950ca9 = _0x49f15d.split("?")[1];
            _0x51f445 = _0x950ca9 ? _0x950ca9.replace(/&amp;/g, "&") : "";
          }
          const _0x170bcc = "https://cdn1.einthusan.io/etv/content/D" + _0x55fd09 + ".mp4?" + _0x51f445;
          const _0xdac97c = "https://cdn2.einthusan.io/etv/content/B" + _0x55fd09 + ".mp4?" + _0x51f445;
          const _0x4abe5a = _0x49e3f7.webCode === "hindi";
          if (_0x4abe5a) {
            let _0x514af7 = false;
            try {
              const _0x19b0e4 = yield fetch(_0xdac97c, {
                method: "HEAD",
                headers: DEFAULT_HEADERS
              });
              if (_0x19b0e4.ok) {
                _0x514af7 = true;
              }
            } catch (_0x34f14a) {
              _0x514af7 = false;
            }
            if (_0x514af7) {
              const _0x19ee54 = "🎦 " + _0x2fa412 + _0x3403ab + "\n⚡ 1080p | 🗣️ " + _0x49e3f7.label + "\n🎞️ MP4 | 🔗 (CDN2 • Premium)";
              _0x4c1246.push({
                name: PROVIDER_NAME + " | 1080p | " + _0x49e3f7.label,
                title: _0x19ee54,
                size: _0x19ee54,
                description: _0x19ee54,
                url: _0xdac97c,
                langKey: _0x49e3f7.webCode,
                behaviorHints: _0x4e4f6a.behaviorHints ?? {}
              });
            }
          }
          const _0x2f2c74 = "🎦 " + _0x2fa412 + _0x3403ab + "\n💎 480p | 🗣️ " + _0x49e3f7.label + "\n🎞️ MP4 | 🔗 (CDN1 • Standard)";
          _0x4c1246.push({
            name: PROVIDER_NAME + " | 480p | " + _0x49e3f7.label,
            title: _0x2f2c74,
            size: _0x2f2c74,
            description: _0x2f2c74,
            url: _0x170bcc,
            langKey: _0x49e3f7.webCode,
            behaviorHints: _0x4e4f6a.behaviorHints ?? {}
          });
        }
      })));
      return _0x4c1246.sort((_0x9f55fc, _0x19accb) => {
        const _0x330298 = LANGUAGE_ORDER.indexOf(_0x9f55fc.langKey);
        const _0x257414 = LANGUAGE_ORDER.indexOf(_0x19accb.langKey);
        const _0x42c5bb = _0x330298 === -1 ? 99 : _0x330298;
        const _0x30a7c7 = _0x257414 === -1 ? 99 : _0x257414;
        if (_0x42c5bb !== _0x30a7c7) {
          return _0x42c5bb - _0x30a7c7;
        }
        if (_0x9f55fc.name.includes("1080p")) {
          return -1;
        } else {
          return 1;
        }
      });
    } catch (_0x2f35c5) {
      console.error("Global processing failure context:", _0x2f35c5);
      return [];
    }
  });
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getStreams: getStreams,
    onSettings: onSettings
  };
} else {
  global.getStreams = getStreams;
  global.onSettings = onSettings;
}