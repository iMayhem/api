var __async = (_0x4d6e64, _0x1479a4, _0x43d1ab) => {
  return new Promise((_0x4f420e, _0x28dd29) => {
    var _0x109112 = _0x17a146 => {
      try {
        _0x19023b(_0x43d1ab.next(_0x17a146));
      } catch (_0x398f04) {
        _0x28dd29(_0x398f04);
      }
    };
    var _0x5acb95 = _0x5d9149 => {
      try {
        _0x19023b(_0x43d1ab.throw(_0x5d9149));
      } catch (_0xf1b57b) {
        _0x28dd29(_0xf1b57b);
      }
    };
    var _0x19023b = _0x5c2acd => _0x5c2acd.done ? _0x4f420e(_0x5c2acd.value) : Promise.resolve(_0x5c2acd.value).then(_0x109112, _0x5acb95);
    _0x19023b((_0x43d1ab = _0x43d1ab.apply(_0x4d6e64, _0x1479a4)).next());
  });
};
var CryptoJS = require("crypto-js");
var AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36";
var ALLANIME_BASE = "https://allanime.day";
var ALLANIME_API = "https://api.allanime.day/api";
function getSimilarity(_0x25c78b, _0x56bb90) {
  if (!_0x25c78b || !_0x56bb90) {
    return 0;
  }
  const _0x3f2a3f = _0x25c78b.toLowerCase().replace(/[^a-z0-9]/g, "");
  const _0x5800a5 = _0x56bb90.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (_0x3f2a3f === _0x5800a5) {
    return 1;
  }
  if (_0x3f2a3f.length < 2 || _0x5800a5.length < 2) {
    return 0;
  }
  const _0x49297b = _0x512424 => {
    const _0x15de49 = new Set();
    for (let _0x4ec5da = 0; _0x4ec5da < _0x512424.length - 1; _0x4ec5da++) {
      _0x15de49.add(_0x512424.substring(_0x4ec5da, _0x4ec5da + 2));
    }
    return _0x15de49;
  };
  const _0x58bbf6 = _0x49297b(_0x3f2a3f);
  const _0x193fef = _0x49297b(_0x5800a5);
  let _0x339919 = 0;
  for (const _0x3fa688 of _0x58bbf6) {
    if (_0x193fef.has(_0x3fa688)) {
      _0x339919++;
    }
  }
  return _0x339919 * 2 / (_0x58bbf6.size + _0x193fef.size);
}
function decryptProviderId(_0x586506) {
  const _0x292af9 = {
    "79": "A",
    "7a": "B",
    "7b": "C",
    "7c": "D",
    "7d": "E",
    "7e": "F",
    "7f": "G",
    "70": "H",
    "71": "I",
    "72": "J",
    "73": "K",
    "74": "L",
    "75": "M",
    "76": "N",
    "77": "O",
    "68": "P",
    "69": "Q",
    "6a": "R",
    "6b": "S",
    "6c": "T",
    "6d": "U",
    "6e": "V",
    "6f": "W",
    "60": "X",
    "61": "Y",
    "62": "Z",
    "59": "a",
    "5a": "b",
    "5b": "c",
    "5c": "d",
    "5d": "e",
    "5e": "f",
    "5f": "g",
    "50": "h",
    "51": "i",
    "52": "j",
    "53": "k",
    "54": "l",
    "55": "m",
    "56": "n",
    "57": "o",
    "48": "p",
    "49": "q",
    "4a": "r",
    "4b": "s",
    "4c": "t",
    "4d": "u",
    "4e": "v",
    "4f": "w",
    "40": "x",
    "41": "y",
    "42": "z",
    "08": "0",
    "09": "1",
    "0a": "2",
    "0b": "3",
    "0c": "4",
    "0d": "5",
    "0e": "6",
    "0f": "7",
    "00": "8",
    "01": "9",
    "15": "-",
    "16": ".",
    "67": "_",
    "46": "~",
    "02": ":",
    "17": "/",
    "07": "?",
    "1b": "#",
    "63": "[",
    "65": "]",
    "78": "@",
    "19": "!",
    "1c": "$",
    "1e": "&",
    "10": "(",
    "11": ")",
    "12": "*",
    "13": "+",
    "14": ",",
    "03": ";",
    "05": "=",
    "1d": "%"
  };
  let _0x5b9252 = "";
  for (let _0x3c69b7 = 0; _0x3c69b7 < _0x586506.length; _0x3c69b7 += 2) {
    const _0x2cfa35 = _0x586506.substring(_0x3c69b7, _0x3c69b7 + 2);
    _0x5b9252 += _0x292af9[_0x2cfa35] || _0x2cfa35;
  }
  return _0x5b9252.replace(/([^:])\/\//g, "$1/").replace("/clock", "/clock.json");
}
var AES_KEY = CryptoJS.SHA256("Xot36i3lK3:v1");
function decryptToBeParsed(_0x313a64) {
  const _0x224a88 = CryptoJS.enc.Base64.parse(_0x313a64);
  const _0x57156c = _0x224a88.toString(CryptoJS.enc.Hex);
  const _0x5f5dd6 = _0x57156c.substring(2, 26);
  const _0x213493 = _0x57156c.substring(26, _0x57156c.length - 32);
  if (!_0x213493 || _0x213493.length === 0) {
    return null;
  }
  const _0x4f61c0 = _0x5f5dd6 + "00000002";
  const _0x1986fc = CryptoJS.enc.Hex.parse(_0x4f61c0);
  const _0x482034 = CryptoJS.enc.Hex.parse(_0x213493);
  const _0x2a1f73 = CryptoJS.lib.CipherParams.create({
    ciphertext: _0x482034
  });
  const _0x2b961c = CryptoJS.AES.decrypt(_0x2a1f73, AES_KEY, {
    iv: _0x1986fc,
    mode: CryptoJS.mode.CTR,
    padding: CryptoJS.pad.NoPadding
  });
  return _0x2b961c.toString(CryptoJS.enc.Utf8);
}
function searchAnime(_0x39b928, _0x117a37) {
  return __async(this, null, function* () {
    var _0x1080b6;
    var _0x36d801;
    const _0x274e20 = _0x117a37 === "dub" ? "dub" : "sub";
    const _0x336c59 = "query( $search: SearchInput $limit: Int $page: Int $translationType: VaildTranslationTypeEnumType $countryOrigin: VaildCountryOriginEnumType ) { shows( search: $search limit: $limit page: $page translationType: $translationType countryOrigin: $countryOrigin ) { edges { _id name availableEpisodes __typename } }}";
    const _0x2ec480 = JSON.stringify({
      variables: {
        search: {
          allowAdult: false,
          allowUnknown: false,
          query: _0x39b928
        },
        limit: 40,
        page: 1,
        translationType: _0x274e20,
        countryOrigin: "ALL"
      },
      query: _0x336c59
    });
    const _0x212bc1 = {
      "User-Agent": AGENT,
      "Content-Type": "application/json",
      Referer: "https://allmanga.to",
      Origin: "https://allmanga.to"
    };
    try {
      const _0x2a23db = yield fetch(ALLANIME_API, {
        method: "POST",
        headers: _0x212bc1,
        body: _0x2ec480
      });
      if (!_0x2a23db.ok) {
        return [];
      }
      const _0x4a4ac1 = yield _0x2a23db.json();
      const _0x5a0c53 = ((_0x36d801 = (_0x1080b6 = _0x4a4ac1 == null ? undefined : _0x4a4ac1.data) == null ? undefined : _0x1080b6.shows) == null ? undefined : _0x36d801.edges) || [];
      return _0x5a0c53.map(_0x51c079 => ({
        id: _0x51c079._id,
        name: _0x51c079.name,
        episodes: _0x51c079.availableEpisodes && _0x51c079.availableEpisodes[_0x274e20] || 0
      }));
    } catch (_0x24a9b5) {
      console.error("AllAnime Search Error:", _0x24a9b5);
      return [];
    }
  });
}
function getRawStreamSources(_0x4feff4, _0x3055fe, _0x4228cd) {
  return __async(this, null, function* () {
    var _0x41d349;
    var _0x232cef;
    var _0x2de22d;
    var _0x538cff;
    const _0x3e122a = _0x4228cd === "dub" ? "dub" : "sub";
    const _0x5ddac9 = {
      showId: _0x4feff4,
      translationType: _0x3e122a,
      episodeString: String(_0x3055fe)
    };
    const _0x3d4933 = "d405d0edd690624b66baba3068e0edc3ac90f1597d898a1ec8db4e5c43c00fec";
    const _0x5ebad0 = ALLANIME_API + "?variables=" + encodeURIComponent(JSON.stringify(_0x5ddac9)) + "&extensions=" + encodeURIComponent(JSON.stringify({
      persistedQuery: {
        version: 1,
        sha256Hash: _0x3d4933
      }
    }));
    const _0x530f6c = {
      "User-Agent": AGENT,
      Accept: "*/*",
      Referer: "https://youtu-chan.com",
      Origin: ALLANIME_BASE
    };
    try {
      const _0xf1d365 = yield fetch(_0x5ebad0, {
        headers: _0x530f6c
      });
      if (!_0xf1d365.ok) {
        console.error("getRawStreamSources HTTP", _0xf1d365.status);
        return [];
      }
      const _0x8ec7a0 = yield _0xf1d365.json();
      if ((_0x41d349 = _0x8ec7a0 == null ? undefined : _0x8ec7a0.data) == null ? undefined : _0x41d349.tobeparsed) {
        const _0x298734 = decryptToBeParsed(_0x8ec7a0.data.tobeparsed);
        if (_0x298734) {
          try {
            const _0x1bb6c9 = JSON.parse(_0x298734);
            if ((_0x232cef = _0x1bb6c9 == null ? undefined : _0x1bb6c9.episode) == null ? undefined : _0x232cef.sourceUrls) {
              return _0x1bb6c9.episode.sourceUrls;
            }
          } catch (_0x5af37b) {
            console.error("tobeparsed JSON parse error:", _0x5af37b, _0x298734.substring(0, 100));
          }
        }
        return [];
      }
      return ((_0x538cff = (_0x2de22d = _0x8ec7a0 == null ? undefined : _0x8ec7a0.data) == null ? undefined : _0x2de22d.episode) == null ? undefined : _0x538cff.sourceUrls) || [];
    } catch (_0x4e560d) {
      console.error("AllAnime Raw Stream Error:", _0x4e560d);
      return [];
    }
  });
}
function fetchLinksFromProvider(_0x3e9921) {
  return __async(this, null, function* () {
    try {
      const _0x2fd86d = _0x3e9921.startsWith("http") ? _0x3e9921 : ALLANIME_BASE + _0x3e9921;
      const _0x5115b2 = yield fetch(_0x2fd86d, {
        headers: {
          "User-Agent": AGENT,
          Referer: ALLANIME_BASE + "/"
        }
      });
      if (!_0x5115b2.ok) {
        return [];
      }
      const _0x17e8e1 = yield _0x5115b2.json();
      const _0x117979 = [];
      if (_0x17e8e1.links && Array.isArray(_0x17e8e1.links)) {
        _0x117979.push(..._0x17e8e1.links.map(_0xb2b7a9 => ({
          url: _0xb2b7a9.link,
          quality: _0xb2b7a9.resolutionStr || "Unknown",
          headers: {
            "User-Agent": AGENT
          }
        })));
      } else if (_0x17e8e1.data) {
        const _0x50f325 = decryptToBeParsed(_0x17e8e1.data);
        try {
          const _0x5f2b11 = JSON.parse(_0x50f325);
          const _0x50eb83 = Array.isArray(_0x5f2b11) ? _0x5f2b11 : _0x5f2b11.links || [];
          _0x117979.push(..._0x50eb83.map(_0xd985b4 => ({
            url: _0xd985b4.link,
            quality: _0xd985b4.resolutionStr || "Unknown",
            headers: {
              "User-Agent": AGENT
            }
          })));
        } catch (_0x45ebe5) {
          console.error("Failed to parse decrypted tobeparsed:", _0x45ebe5);
        }
      }
      return _0x117979;
    } catch (_0x58e08e) {
      console.error("Fetch provider links error:", _0x58e08e);
      return [];
    }
  });
}
function getAnilistId(_0xca0663, _0x2351c1) {
  return __async(this, null, function* () {
    try {
      const _0x41a075 = "https://arm.haglund.dev/api/v2/themoviedb?id=" + _0xca0663;
      const _0x46f521 = yield fetch(_0x41a075);
      if (_0x46f521.ok) {
        const _0x108b74 = yield _0x46f521.json();
        if (Array.isArray(_0x108b74) && _0x108b74.length > 0 && _0x108b74[0].anilist) {
          return _0x108b74[0].anilist;
        }
      }
    } catch (_0x4bd60e) {
      console.error("Mapping Error:", _0x4bd60e);
    }
    return null;
  });
}
function getAnilistMeta(_0x4a3456) {
  return __async(this, null, function* () {
    var _0x2e8be1;
    const _0x1d0027 = "\n        query ($id: Int) {\n            Media (id: $id) {\n                id\n                format\n                episodes\n                title { romaji english native }\n                relations {\n                    edges { relationType }\n                    nodes { id format episodes type }\n                }\n            }\n        }\n    ";
    try {
      const _0xb3e40c = yield fetch("https://graphql.anilist.co", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          query: _0x1d0027,
          variables: {
            id: parseInt(_0x4a3456)
          }
        })
      });
      if (_0xb3e40c.ok) {
        const _0x3fc055 = yield _0xb3e40c.json();
        if ((_0x2e8be1 = _0x3fc055.data) == null) {
          return undefined;
        } else {
          return _0x2e8be1.Media;
        }
      }
    } catch (_0x32d788) {}
    return null;
  });
}
function resolveAnilistEpisode(_0x5b8b85, _0x4f282e, _0x3409d1, _0xfab697) {
  return __async(this, null, function* () {
    const _0x75f294 = yield getAnilistMeta(_0x5b8b85);
    if (!_0x75f294) {
      return {
        title: null,
        ep: _0x3409d1
      };
    }
    const _0x3ac1d2 = _0x75f294.title.romaji || _0x75f294.title.english || "";
    return {
      title: _0x3ac1d2,
      ep: _0x3409d1
    };
  });
}
function getStreams(_0x4fdcbd, _0x201f36, _0x1e9786, _0x4e7317) {
  return __async(this, null, function* () {
    const _0x29e328 = _0x4fdcbd;
    const _0x585b61 = yield getAnilistId(_0x29e328, _0x201f36);
    console.log("Anilist ID:", _0x585b61);
    let _0x242caa = "Anime";
    let _0x414797 = String(_0x4e7317);
    let _0x641ea2 = String(_0x4e7317);
    if (_0x585b61) {
      const _0x51ec9a = yield resolveAnilistEpisode(_0x585b61, _0x1e9786, _0x4e7317, _0x201f36);
      console.log("Resolved:", _0x51ec9a);
      _0x242caa = _0x51ec9a.title || _0x242caa;
      _0x414797 = String(_0x51ec9a.ep);
      _0x641ea2 = String(_0x51ec9a.ep);
    } else {
      try {
        const _0x454ae8 = yield fetch("https://api.themoviedb.org/3/" + (_0x201f36 === "movie" ? "movie" : "tv") + "/" + _0x29e328 + "?api_key=94fc7b2a9e6af14b1c78465d64e9e0d1");
        if (_0x454ae8.ok) {
          const _0x57f89b = yield _0x454ae8.json();
          _0x242caa = _0x57f89b.name || _0x57f89b.title || _0x242caa;
        }
      } catch (_0x3cfcaa) {}
    }
    console.log("Search title:", _0x242caa);
    const _0xa0ca3e = [_0x242caa];
    const [_0x42ee0b, _0x30443b] = yield Promise.all([searchAnime(_0xa0ca3e[0], "sub").catch(() => []), searchAnime(_0xa0ca3e[0], "dub").catch(() => [])]);
    console.log("Sub results: " + _0x42ee0b.length + ", Dub results: " + _0x30443b.length);
    const _0x35cac6 = (_0x364788, _0x4a1f3a) => {
      if (!_0x364788 || _0x364788.length === 0) {
        return null;
      }
      let _0x10f9dc = 0;
      let _0x47676f = null;
      for (const _0x1551fe of _0x364788) {
        const _0x3ddd05 = getSimilarity(_0x1551fe.name, _0x4a1f3a);
        if (_0x3ddd05 > _0x10f9dc) {
          _0x10f9dc = _0x3ddd05;
          _0x47676f = _0x1551fe;
        }
      }
      if (_0x47676f && _0x10f9dc > 0.4) {
        return _0x47676f;
      }
      return _0x364788[0];
    };
    let _0x30f471 = _0x35cac6(_0x42ee0b, _0x242caa);
    let _0x5a10bc = _0x35cac6(_0x30443b, _0x242caa);
    const _0x328a1a = [];
    const _0x3ece6d = (_0x23982e, _0x25454c, _0x57f403) => __async(this, null, function* () {
      if (!_0x23982e) {
        return;
      }
      const _0x4d65af = yield getRawStreamSources(_0x23982e.id, _0x57f403, _0x25454c.toLowerCase());
      console.log("[" + _0x25454c + "] Got " + _0x4d65af.length + " raw sources");
      const _0x2b948d = ["Yt-mp4", "Default", "S-mp4", "Uv-mp4", "Luf-Mp4", "Sl-mp4"];
      for (const _0x55c20b of _0x4d65af) {
        const _0x1e51c1 = _0x55c20b.sourceName || "";
        let _0x3d56cf = _0x55c20b.sourceUrl;
        if (_0x3d56cf.startsWith("--")) {
          _0x3d56cf = decryptProviderId(_0x3d56cf.substring(2));
          if (!_0x3d56cf) {
            console.log("[" + _0x25454c + "] Failed to decrypt " + _0x1e51c1);
            continue;
          }
        }
        console.log("[" + _0x25454c + "] " + _0x1e51c1 + ": " + _0x3d56cf.substring(0, 80));
        if (_0x3d56cf.includes("fast4speed")) {
          _0x328a1a.push({
            url: _0x3d56cf,
            quality: "1080p",
            provider: "AllAnime " + _0x1e51c1 + " (" + _0x25454c + ")",
            headers: {
              Referer: "https://allanime.day",
              "User-Agent": AGENT
            }
          });
          continue;
        }
        if (_0x3d56cf.includes("/clock.json") || _0x3d56cf.includes("/apivtwo/")) {
          const _0x19e4a1 = _0x3d56cf.startsWith("http") ? _0x3d56cf : ALLANIME_BASE + _0x3d56cf;
          const _0x21fea8 = yield fetchLinksFromProvider(_0x19e4a1);
          for (const _0x347fa5 of _0x21fea8) {
            const _0x312468 = _0x347fa5.url || "";
            if (!_0x312468) {
              continue;
            }
            const _0x3d5aca = _0x312468.match(/repackager\.wixmp\.com\/([^,]+)\/((?:,[^,]+)+,?)\/mp4\/file\.mp4/);
            if (_0x3d5aca) {
              const _0x5b17ff = _0x3d5aca[1];
              const _0x496b2f = _0x3d5aca[2].split(",").filter(_0x4429ca => _0x4429ca.length > 0);
              for (const _0x473afe of _0x496b2f) {
                _0x328a1a.push({
                  url: "https://" + _0x5b17ff + "/" + _0x473afe + "/mp4/file.mp4",
                  quality: _0x473afe,
                  provider: "AllAnime " + _0x1e51c1 + " (" + _0x25454c + ")",
                  headers: {
                    "User-Agent": AGENT
                  }
                });
              }
            } else {
              _0x328a1a.push({
                url: _0x312468,
                quality: _0x347fa5.quality || _0x347fa5.resolutionStr || "Auto",
                provider: "AllAnime " + _0x1e51c1 + " (" + _0x25454c + ")",
                headers: Object.assign({
                  Referer: "https://allanime.day"
                }, _0x347fa5.headers || {})
              });
            }
          }
          continue;
        }
        if (_0x55c20b.type === "iframe") {
          console.log("[" + _0x25454c + "] Skipping iframe: " + _0x1e51c1);
          continue;
        }
      }
    });
    yield Promise.all([_0x3ece6d(_0x30f471, "Sub", _0x414797), _0x3ece6d(_0x5a10bc, "Dub", _0x641ea2)]);
    return _0x328a1a.map(_0x41e1e5 => {
      let _0xd3b67b = "Unknown";
      if (_0x41e1e5.quality) {
        const _0xb148ad = _0x41e1e5.quality.match(/\d+p/i);
        if (_0xb148ad) {
          _0xd3b67b = _0xb148ad[0];
        } else if (_0x41e1e5.quality.toLowerCase() === "best") {
          _0xd3b67b = "1080p";
        }
      }
      return {
        name: _0x41e1e5.provider,
        title: _0x41e1e5.provider + " | " + _0x41e1e5.quality,
        url: _0x41e1e5.url,
        quality: _0xd3b67b,
        headers: _0x41e1e5.headers
      };
    });
  });
}
module.exports = {
  name: "AllAnime",
  getStreams: getStreams
};