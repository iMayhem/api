var __async = (_0x3be549, _0x467335, _0x19a99c) => {
  return new Promise((_0x243f70, _0x1dbd51) => {
    var _0xb7e89b = _0x4349f5 => {
      try {
        _0x28e579(_0x19a99c.next(_0x4349f5));
      } catch (_0x3f34e9) {
        _0x1dbd51(_0x3f34e9);
      }
    };
    var _0x2ad1d7 = _0x1cada2 => {
      try {
        _0x28e579(_0x19a99c.throw(_0x1cada2));
      } catch (_0x114164) {
        _0x1dbd51(_0x114164);
      }
    };
    var _0x28e579 = _0xaa676e => _0xaa676e.done ? _0x243f70(_0xaa676e.value) : Promise.resolve(_0xaa676e.value).then(_0xb7e89b, _0x2ad1d7);
    _0x28e579((_0x19a99c = _0x19a99c.apply(_0x3be549, _0x467335)).next());
  });
};
var PROVIDER_NAME = "CineFreak";
var BASE_URL = "https://cinefreak.nl";
var CINECLOUD_BASE = "https://new5.cinecloud.site";
var TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
var MOBILE_UAS = ["Mozilla/5.0 (Linux; Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 13; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 12; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"];
function getHeaders(_0x2dd0c7) {
  return {
    "User-Agent": _0x2dd0c7,
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5"
  };
}
function fetchText(_0x52bf0e, _0x407ee1) {
  return __async(this, null, function* () {
    try {
      var _0x415047 = {
        headers: getHeaders(_0x407ee1 || MOBILE_UAS[0])
      };
      const _0x56ea88 = new Promise(function (_0x59a8a5, _0x125a17) {
        setTimeout(function () {
          _0x125a17(new Error("timeout"));
        }, 4000);
      });
      const _0x27b025 = yield Promise.race([fetch(_0x52bf0e, _0x415047), _0x56ea88]);
      if (!_0x27b025.ok) {
        return null;
      }
      return yield _0x27b025.text();
    } catch (_0x68dacb) {
      return null;
    }
  });
}
function fetchJson(_0x4952dc, _0x3dc4a1) {
  return __async(this, null, function* () {
    try {
      var _0x5ae51e = yield fetchText(_0x4952dc, _0x3dc4a1);
      if (!_0x5ae51e) {
        return null;
      }
      return JSON.parse(_0x5ae51e);
    } catch (_0x1f8085) {
      return null;
    }
  });
}
function parseQuality(_0x35f962) {
  var _0xda4ff3 = String(_0x35f962 || "").toLowerCase();
  if (_0xda4ff3.indexOf("2160") >= 0 || _0xda4ff3.indexOf("4k") >= 0) {
    return "2160p";
  }
  if (_0xda4ff3.indexOf("1080") >= 0) {
    return "1080p";
  }
  if (_0xda4ff3.indexOf("720") >= 0) {
    return "720p";
  }
  if (_0xda4ff3.indexOf("480") >= 0) {
    return "480p";
  }
  return "HD";
}
function extractFslUrl(_0x7d5745) {
  var _0x25a6b5 = /href="([^"]+)"[^>]*id="fsl"|href="([^"]+(?:\.workers\.dev|\.r2\.dev|\.buzz|\.cloudflarestorage\.com)\/[^"]+)"|href="(https?:\/\/[^"]+\.(?:mkv|mp4)[^"]*)"|href="(https:\/\/pub-[^"]+)"/ig;
  var _0x3ccd36;
  while ((_0x3ccd36 = _0x25a6b5.exec(_0x7d5745)) !== null) {
    var _0x58d607 = _0x3ccd36[1] || _0x3ccd36[2] || _0x3ccd36[3] || _0x3ccd36[4];
    if (_0x58d607 && !_0x58d607.includes(".zip")) {
      return _0x58d607.replace(/&amp;/g, "&");
    }
  }
  var _0x5cfdc0 = "href=\"https://pub-";
  var _0xcbdca5 = _0x7d5745.indexOf(_0x5cfdc0);
  if (_0xcbdca5 === -1) {
    return null;
  }
  var _0x273996 = _0xcbdca5 + 6;
  var _0x469335 = _0x7d5745.indexOf("\"", _0x273996);
  if (_0x469335 === -1) {
    return null;
  }
  var _0x15f79c = _0x7d5745.substring(_0x273996, _0x469335);
  _0x15f79c = _0x15f79c.replace(/&amp;/g, "&");
  return _0x15f79c;
}
function decodeGenerateUrl(_0x488e74) {
  try {
    var _0x1cd08c = atob(_0x488e74);
    _0x1cd08c = _0x1cd08c.replace(/newgo32$/, "");
    return _0x1cd08c;
  } catch (_0x184465) {
    return null;
  }
}
function encodeUri(_0x3d4840) {
  try {
    return encodeURIComponent(_0x3d4840);
  } catch (_0x317ba6) {
    return _0x3d4840;
  }
}
function manifest() {
  return {
    id: "cinefreak",
    name: "CineFreak",
    description: "Direct MKV/MP4 streams from cinefreak.nl",
    version: "1.0.0",
    logo: "https://cinefreak.nl/wp-content/uploads/2024/08/cropped-cgk-192x192.png",
    background: "https://cinefreak.nl/wp-content/uploads/2024/08/cropped-cgk-192x192.png",
    types: ["movie", "tv"],
    resources: ["stream"],
    idPrefixes: ["tt", "tmdb"]
  };
}
function search(_0x1a4407, _0x348ee3) {
  return __async(this, null, function* () {
    if (!_0x1a4407) {
      return [];
    }
    var _0x1eca08 = BASE_URL + "/wp-json/wp/v2/search?search=" + encodeUri(_0x1a4407) + "&per_page=10";
    var _0x5f3b1f = yield fetchJson(_0x1eca08);
    if (!_0x5f3b1f || !_0x5f3b1f.length) {
      return [];
    }
    var _0xe06eb8 = [];
    for (var _0x1da82e = 0; _0x1da82e < _0x5f3b1f.length; _0x1da82e++) {
      var _0xdb2a01 = _0x5f3b1f[_0x1da82e];
      if (!_0xdb2a01 || !_0xdb2a01.title || !_0xdb2a01.url) {
        continue;
      }
      var _0x4708b5 = String(_0xdb2a01.title).replace(/Download\s*/gi, "").trim();
      if (!_0x4708b5) {
        continue;
      }
      _0xe06eb8.push({
        id: _0xdb2a01.url,
        title: _0x4708b5,
        url: _0xdb2a01.url
      });
    }
    return _0xe06eb8;
  });
}
function getTMDBInfo(_0x3d2d43, _0x514873, _0x1c0dda) {
  return __async(this, null, function* () {
    var _0x104c4e = _0x514873 === "tv" || _0x514873 === "series";
    var _0x532a1f = _0x104c4e ? "https://api.themoviedb.org/3/tv/" + _0x3d2d43 + "?api_key=" + TMDB_API_KEY : "https://api.themoviedb.org/3/movie/" + _0x3d2d43 + "?api_key=" + TMDB_API_KEY;
    var _0x514ee8 = yield fetchJson(_0x532a1f, _0x1c0dda);
    if (!_0x514ee8) {
      return null;
    }
    return {
      title: _0x104c4e ? _0x514ee8.name : _0x514ee8.title,
      year: _0x104c4e ? (_0x514ee8.first_air_date || "").substring(0, 4) : (_0x514ee8.release_date || "").substring(0, 4),
      isTv: _0x104c4e
    };
  });
}
function wordMatchScore(_0xbc8050, _0x58d101) {
  var _0x37171c = String(_0xbc8050 || "").toLowerCase().trim();
  var _0x3040dd = String(_0x58d101 || "").toLowerCase();
  var _0x477e9f = _0x37171c.replace(/[^a-z0-9\s]/g, " ").split(/\s+/);
  var _0x52d020 = 0;
  var _0x1f8834 = 0;
  for (var _0x4834b7 = 0; _0x4834b7 < _0x477e9f.length; _0x4834b7++) {
    var _0x49d6ee = _0x477e9f[_0x4834b7];
    if (_0x49d6ee.length < 3) {
      continue;
    }
    _0x1f8834++;
    var _0x1da5d2 = new RegExp("\\b" + _0x49d6ee.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "i");
    if (_0x1da5d2.test(_0x58d101)) {
      _0x52d020++;
    }
  }
  if (_0x1f8834 === 0) {
    return 0;
  }
  return _0x52d020 / _0x1f8834;
}
function titleStartsWith(_0x5a12f7, _0x31e86f) {
  var _0x3d9be2 = String(_0x5a12f7 || "").toLowerCase().trim();
  var _0x294ecd = String(_0x31e86f || "").toLowerCase().trim();
  return _0x3d9be2.indexOf(_0x294ecd) === 0 || _0x3d9be2.indexOf(_0x294ecd + " ") === 0 || _0x3d9be2.indexOf("(" + _0x294ecd + ")") === 0;
}
function urlContains(_0x4a8b3b, _0x3000f3) {
  var _0x281a9d = String(_0x4a8b3b || "").toLowerCase();
  var _0x39f5bb = String(_0x3000f3 || "").toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
  var _0x2dea0f = _0x39f5bb.split("-").filter(function (_0x1f4265) {
    return _0x1f4265.length > 2;
  });
  var _0x148074 = 0;
  for (var _0x4c8880 = 0; _0x4c8880 < _0x2dea0f.length; _0x4c8880++) {
    if (_0x281a9d.indexOf(_0x2dea0f[_0x4c8880]) >= 0) {
      _0x148074++;
    }
  }
  if (_0x2dea0f.length > 0) {
    return _0x148074 / _0x2dea0f.length;
  } else {
    return 0;
  }
}
function matchByTitleYear(_0x42693c, _0x6704ea, _0x5abe5b, _0x321236) {
  if (!_0x5abe5b || !_0x5abe5b.length) {
    return null;
  }
  var _0x400a99 = String(_0x42693c || "").toLowerCase().trim();
  var _0x546209 = String(_0x6704ea || "");
  function _0x4a66b9(_0x4992f) {
    if (!_0x4992f) {
      return 0;
    }
    var _0x111d06 = 0;
    if (titleStartsWith(_0x4992f.title, _0x42693c)) {
      _0x111d06 += 10;
    }
    _0x111d06 += urlContains(_0x4992f.url, _0x42693c) * 5;
    _0x111d06 += wordMatchScore(_0x42693c, _0x4992f.title);
    if (_0x546209 && String(_0x4992f.title).toLowerCase().indexOf(_0x546209) >= 0) {
      _0x111d06 += 3;
    }
    return _0x111d06;
  }
  if (_0x321236) {
    var _0x358ce1 = "(?:season|s)\\s*" + _0x321236 + "\\b";
    var _0x5f22e8 = new RegExp(_0x358ce1, "i");
    var _0x333857 = null;
    var _0x141d96 = -1;
    for (var _0x54e15f = 0; _0x54e15f < _0x5abe5b.length; _0x54e15f++) {
      var _0x120a26 = _0x5abe5b[_0x54e15f];
      if (!_0x120a26 || !_0x120a26.title) {
        continue;
      }
      if (_0x5f22e8.test(_0x120a26.title)) {
        var _0x327716 = _0x4a66b9(_0x120a26) + 10;
        if (_0x327716 > _0x141d96) {
          _0x141d96 = _0x327716;
          _0x333857 = _0x120a26;
        }
      }
    }
    if (_0x333857) {
      return _0x333857;
    }
  }
  var _0x333857 = null;
  var _0x141d96 = -1;
  for (var _0x54e15f = 0; _0x54e15f < _0x5abe5b.length; _0x54e15f++) {
    var _0x120a26 = _0x5abe5b[_0x54e15f];
    if (!_0x120a26 || !_0x120a26.title) {
      continue;
    }
    var _0x327716 = _0x4a66b9(_0x120a26);
    if (_0x327716 > _0x141d96) {
      _0x141d96 = _0x327716;
      _0x333857 = _0x120a26;
    }
  }
  if (_0x333857 && _0x141d96 >= 3) {
    return _0x333857;
  }
  return null;
}
function searchCinefreak(_0xd0d906, _0x49e11d, _0x1e5b83) {
  return __async(this, null, function* () {
    if (!_0xd0d906) {
      return [];
    }
    var _0x38c726 = BASE_URL + "/wp-json/wp/v2/search?search=" + encodeUri(_0xd0d906) + "&per_page=10";
    var _0x2bdf4c = yield fetchJson(_0x38c726, _0x1e5b83);
    if (!_0x2bdf4c || !_0x2bdf4c.length) {
      return [];
    }
    var _0x543750 = [];
    for (var _0x305a1d = 0; _0x305a1d < _0x2bdf4c.length; _0x305a1d++) {
      var _0x222c12 = _0x2bdf4c[_0x305a1d];
      if (!_0x222c12 || !_0x222c12.title || !_0x222c12.url) {
        continue;
      }
      _0x543750.push({
        id: _0x222c12.id,
        title: String(_0x222c12.title).replace(/Download\s*/gi, "").trim(),
        url: _0x222c12.url
      });
    }
    return _0x543750;
  });
}
function fetchPostPage(_0x3f8371, _0x3f8a4a) {
  return __async(this, null, function* () {
    if (!_0x3f8371) {
      return null;
    }
    var _0x44fc7b = _0x3f8371;
    if (_0x3f8371.indexOf("http") !== 0) {
      if (_0x3f8371.indexOf("/") === 0) {
        _0x44fc7b = BASE_URL + _0x3f8371;
      } else {
        _0x44fc7b = BASE_URL + "/" + _0x3f8371;
      }
    }
    return yield fetchText(_0x44fc7b, _0x3f8a4a);
  });
}
function extractAllGenerateLinks(_0x44287b) {
  if (!_0x44287b) {
    return [];
  }
  var _0xbd97e9 = [];
  var _0x25fa84 = 0;
  var _0x4be806 = "/generate.php?id=";
  while (true) {
    var _0x437a92 = _0x44287b.indexOf(_0x4be806, _0x25fa84);
    if (_0x437a92 === -1) {
      break;
    }
    var _0x5314aa = _0x44287b.lastIndexOf("<a ", _0x437a92);
    if (_0x5314aa === -1 || _0x5314aa < _0x25fa84) {
      _0x25fa84 = _0x437a92 + 1;
      continue;
    }
    var _0x434c53 = _0x44287b.indexOf("</a>", _0x437a92);
    if (_0x434c53 === -1) {
      _0x25fa84 = _0x437a92 + 1;
      continue;
    }
    var _0x200dc0 = _0x44287b.indexOf(">", _0x437a92);
    if (_0x200dc0 === -1 || _0x200dc0 > _0x434c53) {
      _0x25fa84 = _0x434c53 + 4;
      continue;
    }
    var _0x8f7faf = _0x44287b.substring(_0x200dc0 + 1, _0x434c53).trim();
    var _0x3f3e36 = _0x44287b.indexOf("\"", _0x437a92);
    if (_0x3f3e36 === -1) {
      _0x25fa84 = _0x434c53 + 4;
      continue;
    }
    var _0x53b0fb = _0x44287b.substring(_0x437a92, _0x3f3e36);
    var _0x26d579 = _0x53b0fb.match(/id=([a-zA-Z0-9+/=]+)/);
    if (!_0x26d579) {
      _0x25fa84 = _0x434c53 + 4;
      continue;
    }
    var _0x50ea59 = _0x26d579[1];
    var _0x323aa9 = decodeGenerateUrl(_0x50ea59);
    _0xbd97e9.push({
      encodedId: _0x50ea59,
      decodedUrl: _0x323aa9 || "",
      label: _0x8f7faf,
      fullTag: _0x44287b.substring(_0x5314aa, _0x434c53 + 4)
    });
    _0x25fa84 = _0x434c53 + 4;
  }
  return _0xbd97e9;
}
function extractMovieQualities(_0x1cf4c1) {
  if (!_0x1cf4c1) {
    return [];
  }
  var _0x1f62eb = [];
  var _0x3435f4 = _0x1cf4c1.split("dlbtn-container");
  for (var _0x5018ff = 1; _0x5018ff < _0x3435f4.length; _0x5018ff++) {
    var _0x32d1b0 = _0x3435f4[_0x5018ff];
    var _0x426fed = _0x3435f4[_0x5018ff - 1];
    var _0x5d59e2 = _0x32d1b0.match(/href="(?:https?:\/\/[^"]*?)?\/generate\.php\?id=([a-zA-Z0-9+/=]+)"/);
    if (!_0x5d59e2) {
      continue;
    }
    var _0x468624 = _0x5d59e2[1];
    var _0x1cb06 = decodeGenerateUrl(_0x468624);
    if (!_0x1cb06 || _0x1cb06.indexOf("/f/") === -1) {
      continue;
    }
    var _0x1e7c91 = "";
    var _0x4e1d2a = _0x426fed.match(/<\/span>\s*([^<]*?(?:2160|1080|720|480|4K)[^<]*?\[[^\]]+\])/i);
    if (!_0x4e1d2a) {
      _0x4e1d2a = _0x426fed.match(/<\/span>\s*([^<]*?(?:2160|1080|720|480|4K)[^<]*?)\s*\[/i);
    }
    if (_0x4e1d2a) {
      _0x1e7c91 = _0x4e1d2a[1].trim();
    }
    if (!_0x1e7c91 || !_0x1e7c91.includes("[")) {
      var _0x358f6f = _0x426fed.match(/<h4[^>]*>([\s\S]*?)<\/h4>/i);
      if (_0x358f6f) {
        _0x1e7c91 = (_0x1e7c91 + " " + _0x358f6f[1].replace(/<[^>]*>/g, "")).trim();
      }
    }
    if (!_0x1e7c91) {
      _0x4e1d2a = _0x426fed.match(/\b(?:4K\s*2160p|UHD|2160p|1080p|720p|480p)\b/i);
      if (!_0x4e1d2a) {
        _0x4e1d2a = _0x426fed.match(/\b(?:SD|HD)\b/i);
      }
      if (_0x4e1d2a) {
        _0x1e7c91 = _0x4e1d2a[0];
      }
    }
    if (!_0x1e7c91) {
      _0x1e7c91 = _0x1cb06;
    }
    var _0x4422ac = parseQuality(_0x1e7c91);
    var _0x41a098 = false;
    for (var _0x5cfb41 = 0; _0x5cfb41 < _0x1f62eb.length; _0x5cfb41++) {
      if (_0x1f62eb[_0x5cfb41].decodedUrl === _0x1cb06) {
        _0x41a098 = true;
        break;
      }
    }
    if (_0x41a098) {
      continue;
    }
    _0x1f62eb.push({
      encodedId: _0x468624,
      decodedUrl: _0x1cb06,
      label: _0x1e7c91 || _0x4422ac,
      quality: _0x4422ac
    });
  }
  return _0x1f62eb;
}
function extractEpisodeQualities(_0x3ef157, _0x3d3be4) {
  if (!_0x3ef157) {
    return [];
  }
  var _0x2de654 = _0x3ef157.split("<div class=\"ep-card\"");
  var _0x420914 = null;
  for (var _0x37251a = 1; _0x37251a < _0x2de654.length; _0x37251a++) {
    var _0x385612 = _0x2de654[_0x37251a];
    var _0x1a2ca6 = _0x385612.match(/episode-badge[^>]*>Episode\s*(\d+)/i);
    if (!_0x1a2ca6) {
      continue;
    }
    var _0x2ab8ba = parseInt(_0x1a2ca6[1], 10);
    if (_0x2ab8ba === _0x3d3be4) {
      _0x420914 = _0x385612;
      break;
    }
  }
  if (!_0x420914) {
    return [];
  }
  var _0x8721cc = extractAllGenerateLinks(_0x420914);
  var _0x4e59d3 = [];
  for (var _0x1a2085 = 0; _0x1a2085 < _0x8721cc.length; _0x1a2085++) {
    var _0x5829f8 = _0x8721cc[_0x1a2085];
    if (!_0x5829f8.decodedUrl || _0x5829f8.decodedUrl.indexOf("/f/") === -1) {
      continue;
    }
    var _0x57a3fd = _0x5829f8.label;
    var _0x1b3da8 = parseQuality(_0x57a3fd || _0x5829f8.decodedUrl);
    var _0x2738b3 = false;
    for (var _0x4e14eb = 0; _0x4e14eb < _0x4e59d3.length; _0x4e14eb++) {
      if (_0x4e59d3[_0x4e14eb].decodedUrl === _0x5829f8.decodedUrl) {
        _0x2738b3 = true;
        break;
      }
    }
    if (_0x2738b3) {
      continue;
    }
    _0x4e59d3.push({
      encodedId: _0x5829f8.encodedId,
      decodedUrl: _0x5829f8.decodedUrl,
      label: _0x57a3fd || _0x1b3da8,
      quality: _0x1b3da8
    });
  }
  return _0x4e59d3;
}
function filterQualities(_0x140c40) {
  if (!_0x140c40 || !_0x140c40.length) {
    return [];
  }
  var _0xe7872 = [];
  for (var _0x5d5f0a = 0; _0x5d5f0a < _0x140c40.length; _0x5d5f0a++) {
    var _0x7f4f5 = _0x140c40[_0x5d5f0a];
    if (_0x7f4f5.quality === "480p" || _0x7f4f5.quality === "SD") {
      continue;
    }
    _0xe7872.push(_0x7f4f5);
  }
  var _0x3bd302 = {
    "2160p": 0,
    "1080p": 1,
    "720p": 2,
    HD: 3
  };
  _0xe7872.sort(function (_0x3a1f3a, _0x264d6e) {
    var _0x3c43a7 = _0x3bd302[_0x3a1f3a.quality] !== undefined ? _0x3bd302[_0x3a1f3a.quality] : 99;
    var _0x1e6e62 = _0x3bd302[_0x264d6e.quality] !== undefined ? _0x3bd302[_0x264d6e.quality] : 99;
    return _0x3c43a7 - _0x1e6e62;
  });
  return _0xe7872;
}
function extractHash(_0x276c4c) {
  if (!_0x276c4c) {
    return "";
  }
  var _0x20d164 = _0x276c4c.indexOf("/f/");
  var _0x18cfe7 = _0x276c4c.indexOf("/x/");
  var _0x25ced1 = _0x20d164 >= 0 ? _0x20d164 + 3 : _0x18cfe7 >= 0 ? _0x18cfe7 + 3 : -1;
  if (_0x25ced1 < 0) {
    return "";
  }
  return _0x276c4c.substring(_0x25ced1);
}
function resolveFslUrl(_0x26b466, _0x1223d6) {
  return __async(this, null, function* () {
    if (!_0x26b466) {
      return null;
    }
    var _0x4b7b66 = extractHash(_0x26b466);
    if (!_0x4b7b66) {
      return null;
    }
    var _0x1c9da5 = CINECLOUD_BASE + "/f/" + _0x4b7b66;
    var _0x40338e = yield fetchText(_0x1c9da5, _0x1223d6);
    if (!_0x40338e) {
      return null;
    }
    return extractFslUrl(_0x40338e);
  });
}
function decodeEntities(_0x40648d) {
  if (!_0x40648d) {
    return "";
  }
  var _0x432079 = /&(nbsp|amp|quot|lt|gt|#038);/g;
  var _0x41c2ce = {
    nbsp: " ",
    amp: "&",
    quot: "\"",
    lt: "<",
    gt: ">",
    "#038": "&"
  };
  return _0x40648d.replace(_0x432079, function (_0x3a1827, _0x2c13d0) {
    return _0x41c2ce[_0x2c13d0];
  }).replace(/&#(\d+);/g, function (_0xf7bc58, _0x42b312) {
    return String.fromCharCode(_0x42b312);
  });
}
function makeStream(_0x122e14, _0x219aa7, _0x2ef03f, _0x8666f, _0xac0aec, _0xad91d1) {
  var _0x51a831 = decodeEntities(_0x122e14 || "").replace(/[\n\t]+/g, "").trim();
  var _0x54eca3 = decodeEntities(_0x219aa7 || "").replace(/[\n\t]+/g, " ").replace(/\s{2,}/g, " ").trim();
  if (_0x51a831.indexOf(" - ") > 0) {
    _0x51a831 = _0x51a831.split(" - ")[0].trim();
  }
  _0x51a831 = _0x51a831.replace(/\(\d{4}\).*$/gi, "").replace(/\d{3,4}p.*$/gi, "").trim();
  var _0x1d7ae7 = _0x54eca3.toLowerCase();
  var _0x54f002 = (_0x2ef03f || "").toLowerCase();
  var _0x1ec06c = "N/A";
  var _0x2ee72d = _0x54eca3.match(/\[\s*(\d+(?:\.\d+)?\s*[MG]B)\s*\]/i) || _0x54eca3.match(/(\d+(?:\.\d+)?\s*[MG]B)/i);
  if (_0x2ee72d) {
    _0x1ec06c = _0x2ee72d[1].toUpperCase().replace(/\s+/g, "");
  }
  var _0x2bad2d = 0;
  var _0x588fd0 = 0;
  if (_0x2ee72d) {
    var _0x67dba4 = parseFloat(_0x2ee72d[1]);
    var _0x225f35 = _0x2ee72d[1].toUpperCase();
    _0x2bad2d = _0x225f35.includes("GB") ? _0x67dba4 * 1024 : _0x67dba4;
    _0x588fd0 = _0x225f35.includes("GB") ? _0x67dba4 : _0x67dba4 / 1024;
  }
  var _0x4a470a = "MKV";
  if (_0x2ef03f && _0x54f002.split("?")[0].endsWith(".mp4")) {
    _0x4a470a = "MP4";
  }
  var _0x441e46 = "WEB-DL";
  if (/\b(bluray|blu\-ray)\b/i.test(_0x1d7ae7)) {
    _0x441e46 = "BluRay";
  } else if (/\b(hdrip|webrip)\b/i.test(_0x1d7ae7)) {
    _0x441e46 = "WEBRip";
  }
  var _0x966acc = _0x8666f.includes("2160") || _0x8666f.toLowerCase().includes("4k") || _0x1d7ae7.includes("2160p");
  var _0x47db4b = "H.264";
  if (/\b(hevc|x265|h265)\b/i.test(_0x1d7ae7) || _0x54f002.includes("hevc") || _0x54f002.includes("x265") || _0x966acc) {
    _0x47db4b = "HEVC";
  }
  var _0x3a8100 = "";
  var _0x1c9b3a = "";
  if (/\b(dolby\s*vision|dovi|dv)\b/i.test(_0x1d7ae7) || _0x54f002.includes("dovi") || _0x54f002.includes("dolby.vision")) {
    _0x1c9b3a = "Dolby Vision";
  } else if (/\bhdr10\b/i.test(_0x1d7ae7) || _0x54f002.includes("hdr10")) {
    _0x1c9b3a = "HDR10";
  } else if (/\bhdr\b/i.test(_0x1d7ae7) || _0x54f002.includes("hdr")) {
    _0x1c9b3a = "HDR";
  } else if (/\b(10bit|10\-bit)\b/i.test(_0x1d7ae7) || _0x54f002.includes("10bit")) {
    _0x1c9b3a = "10Bit";
  }
  if (_0x1c9b3a) {
    _0x3a8100 = " | 🔆 " + _0x1c9b3a + " • ⚡ " + _0x47db4b;
  } else {
    _0x3a8100 = " | ⚡ " + _0x47db4b;
  }
  var _0x43cfa6 = "DD5.1";
  if (_0x966acc) {
    _0x43cfa6 = "DDP5.1 • 🔊 Atmos";
  } else if (_0x2ee72d && _0x588fd0 < 1.3) {
    _0x43cfa6 = "Stereo";
  } else if (_0x54f002.includes("hq")) {
    _0x43cfa6 = "DDP5.1 • 🔊 Atmos";
  } else if (_0x47db4b === "HEVC") {
    _0x43cfa6 = "DD5.1";
  }
  var _0xbfc29f = /\b(dual|multi|dubbed|hindi)\b/i.test(_0x1d7ae7) || decodeEntities(_0x122e14 || "").toLowerCase().includes("dual audio") || _0x54f002.includes("dual");
  var _0x17bf2b = _0xbfc29f ? "Dual-Audio" : "Single Audio";
  var _0x1b0fde = _0xbfc29f ? "English 🇺🇸 • Hindi 🇮🇳" : "English 🇺🇸";
  var _0x2f3e81 = _0x8666f || "1080p";
  var _0x4f2667 = PROVIDER_NAME + " | " + _0x2f3e81 + " | " + _0x17bf2b;
  var _0xe8d045 = decodeEntities(_0x122e14 || "").match(/\b(19|20)\d{2}\b/);
  var _0x115289 = _0xe8d045 ? _0xe8d045[0] : "2026";
  var _0x1ad103 = "";
  if (_0xad91d1 && (_0xad91d1.startsWith("S") || _0xad91d1.includes("E"))) {
    _0x1ad103 = "🎦 " + _0x51a831 + " (" + _0x115289 + ") - " + _0xad91d1.replace(/E0*(\d+)/i, "E$1").replace(/S0*(\d+)/i, "S$1");
  } else {
    _0x1ad103 = "🎦 " + _0x51a831 + " - (" + _0x115289 + ")";
  }
  var _0x4dca98 = "💎 " + _0x2f3e81 + " | 🗣️ " + _0x1b0fde + " | 💾 " + _0x1ec06c;
  var _0x45e7fb = "🎞️ " + _0x4a470a + " | 🎧 " + _0x43cfa6 + _0x3a8100;
  var _0x259934 = "🔗 FSL Server | ☁️ " + _0x441e46;
  var _0x59af77 = _0x1ad103 + "\n" + _0x4dca98 + "\n" + _0x45e7fb + "\n" + _0x259934;
  var _0x5851a0 = _0x966acc ? 9000000 : _0x2f3e81.includes("1080") ? 6000000 : 3000000;
  var _0x1583cc = _0x5851a0 + _0x2bad2d;
  return {
    name: _0x4f2667,
    title: _0x59af77,
    size: _0x59af77,
    url: _0x2ef03f || "",
    _resWeight: _0x5851a0,
    _sortWeight: _0x1583cc,
    behaviorHints: {
      notWebReady: true,
      proxyHeaders: {
        request: _0xac0aec || {
          Referer: CINECLOUD_BASE + "/"
        }
      }
    }
  };
}
function getStreams(_0x1c24c2, _0x598c03, _0xb3006a, _0x2ea8d7) {
  return __async(this, null, function* () {
    try {
      var _0xc96a6c = _0x598c03 === "tv" || _0x598c03 === "series";
      console.log("[" + PROVIDER_NAME + "] Request: tmdbId=" + _0x1c24c2 + " type=" + _0x598c03 + " S=" + _0xb3006a + " E=" + _0x2ea8d7);
      var _0x1d68e4 = MOBILE_UAS[Math.floor(Math.random() * MOBILE_UAS.length)];
      var _0x1022ee = yield getTMDBInfo(_0x1c24c2, _0x598c03, _0x1d68e4);
      if (!_0x1022ee || !_0x1022ee.title) {
        console.log("[" + PROVIDER_NAME + "] TMDB info not found for " + _0x1c24c2);
        return [];
      }
      console.log("[" + PROVIDER_NAME + "] TMDB: " + _0x1022ee.title + " (" + _0x1022ee.year + ")");
      var _0x4b3418 = _0xc96a6c ? parseInt(_0xb3006a, 10) || 1 : null;
      var _0x2bdde8 = yield searchCinefreak(_0x1022ee.title, null, _0x1d68e4);
      if (!_0x2bdde8 || _0x2bdde8.length < 3) {
        var _0x120b59 = yield searchCinefreak(_0x1022ee.title + " " + _0x1022ee.year, null, _0x1d68e4);
        if (_0x120b59 && _0x120b59.length) {
          _0x2bdde8 = _0x120b59;
        }
      }
      if (!_0x2bdde8 || !_0x2bdde8.length) {
        console.log("[" + PROVIDER_NAME + "] No search results for " + _0x1022ee.title);
        return [];
      }
      var _0x315c82 = matchByTitleYear(_0x1022ee.title, _0x1022ee.year, _0x2bdde8, _0x4b3418);
      if (!_0x315c82) {
        console.log("[" + PROVIDER_NAME + "] No match found for " + _0x1022ee.title);
        return [];
      }
      console.log("[" + PROVIDER_NAME + "] Matched: " + _0x315c82.title);
      var _0x9cb3ec = yield fetchPostPage(_0x315c82.url, _0x1d68e4);
      if (!_0x9cb3ec) {
        console.log("[" + PROVIDER_NAME + "] Failed to fetch post page");
        return [];
      }
      var _0x4475b1;
      if (_0xc96a6c) {
        var _0x5883a4 = parseInt(_0x2ea8d7, 10) || 1;
        _0x4475b1 = extractEpisodeQualities(_0x9cb3ec, _0x5883a4);
      } else {
        _0x4475b1 = extractMovieQualities(_0x9cb3ec);
      }
      if (!_0x4475b1 || !_0x4475b1.length) {
        console.log("[" + PROVIDER_NAME + "] No quality links found");
        return [];
      }
      var _0x2db500 = filterQualities(_0x4475b1);
      if (!_0x2db500.length) {
        console.log("[" + PROVIDER_NAME + "] No usable qualities after filtering");
        return [];
      }
      console.log("[" + PROVIDER_NAME + "] Qualities: " + _0x2db500.map(function (_0x5713e9) {
        return _0x5713e9.quality;
      }).join(", "));
      var _0x4b5dec = "";
      if (_0xc96a6c) {
        var _0xa85a7f = parseInt(_0xb3006a, 10) || 1;
        var _0x410351 = parseInt(_0x2ea8d7, 10) || 1;
        _0x4b5dec = "S" + (_0xa85a7f < 10 ? "0" : "") + _0xa85a7f + "E" + (_0x410351 < 10 ? "0" : "") + _0x410351 + " ";
      }
      var _0x2c1a43 = [];
      for (var _0x46bf4b = 0; _0x46bf4b < _0x2db500.length; _0x46bf4b++) {
        var _0x16d35d = _0x2db500[_0x46bf4b];
        var _0x5ec026 = yield resolveFslUrl(_0x16d35d.decodedUrl, _0x1d68e4);
        if (_0x5ec026) {
          var _0x283ed2 = makeStream(_0x315c82.title, _0x16d35d.label, _0x5ec026, _0x16d35d.quality, {
            Referer: CINECLOUD_BASE + "/",
            "User-Agent": _0x1d68e4
          }, _0x4b5dec.trim());
          _0x2c1a43.push(_0x283ed2);
        }
      }
      var _0x4cabd3 = _0x2c1a43.sort(function (_0x4b2eab, _0x4a011a) {
        return (_0x4a011a._sortWeight || 0) - (_0x4b2eab._sortWeight || 0);
      });
      console.log("[" + PROVIDER_NAME + "] Returning " + _0x4cabd3.length + " stream(s)");
      return _0x4cabd3;
    } catch (_0x26fcbf) {
      console.log("[" + PROVIDER_NAME + "] Fatal error: " + (_0x26fcbf.message || _0x26fcbf));
      return [];
    }
  });
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    manifest: manifest,
    search: search,
    getStreams: getStreams
  };
} else {
  global.manifest = manifest;
  global.search = search;
  global.getStreams = getStreams;
}