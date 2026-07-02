'use strict';

var PROVIDER_NAME = "OnlyKDrama";
var SITE_URL = "https://onlykdrama.shop";
var TMDB_URL = "https://www.themoviedb.org";
var FILEPRESS_ORIGIN = "https://new5.filepress.wiki";
var DEFAULT_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
  "Accept-Language": "en-US,en;q=0.9"
};
var STOP_WORDS = {
  a: true,
  an: true,
  and: true,
  at: true,
  by: true,
  for: true,
  from: true,
  in: true,
  of: true,
  on: true,
  the: true,
  to: true,
  tv: true
};
function mergeHeaders(_0x27457d, _0x45029c) {
  var _0x1b0d01 = {};
  var _0x5cd293;
  for (_0x5cd293 in _0x27457d) {
    if (Object.prototype.hasOwnProperty.call(_0x27457d, _0x5cd293)) {
      _0x1b0d01[_0x5cd293] = _0x27457d[_0x5cd293];
    }
  }
  if (!_0x45029c) {
    return _0x1b0d01;
  }
  for (_0x5cd293 in _0x45029c) {
    if (Object.prototype.hasOwnProperty.call(_0x45029c, _0x5cd293)) {
      _0x1b0d01[_0x5cd293] = _0x45029c[_0x5cd293];
    }
  }
  return _0x1b0d01;
}
function fetchText(_0x4ff150, _0x1a3cef) {
  var _0x4a2aeb = _0x1a3cef || {};
  _0x4a2aeb.headers = mergeHeaders(DEFAULT_HEADERS, _0x4a2aeb.headers || {});
  return fetch(_0x4ff150, _0x4a2aeb).then(function (_0x4acd18) {
    if (!_0x4acd18.ok) {
      throw new Error("HTTP " + _0x4acd18.status + " for " + _0x4ff150);
    }
    return _0x4acd18.text();
  });
}
function fetchJson(_0x4a0b42, _0x5ebb7d) {
  var _0x3c6c6b = _0x5ebb7d || {};
  _0x3c6c6b.headers = mergeHeaders(DEFAULT_HEADERS, _0x3c6c6b.headers || {});
  return fetch(_0x4a0b42, _0x3c6c6b).then(function (_0x520aea) {
    if (!_0x520aea.ok) {
      throw new Error("HTTP " + _0x520aea.status + " for " + _0x4a0b42);
    }
    return _0x520aea.json();
  });
}
function decodeHtml(_0x32ce18) {
  if (!_0x32ce18) {
    return "";
  }
  return _0x32ce18.replace(/&#(\d+);/g, function (_0x3af2a5, _0x149eb4) {
    return String.fromCharCode(parseInt(_0x149eb4, 10));
  }).replace(/&amp;/g, "&").replace(/&quot;/g, "\"").replace(/&#39;/g, "'").replace(/&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}
function safeDecode(_0x17c60a) {
  if (!_0x17c60a) {
    return "";
  }
  try {
    return decodeURIComponent(_0x17c60a);
  } catch (_0x669afc) {
    return _0x17c60a;
  }
}
function safeEncodeUrl(_0x4cd907) {
  if (!_0x4cd907) {
    return "";
  }
  return String(_0x4cd907).replace(/ /g, "%20").replace(/\[/g, "%5B").replace(/\]/g, "%5D");
}
function stripTags(_0x14cc94) {
  return decodeHtml((_0x14cc94 || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}
function normalizeText(_0x47cf1e) {
  return decodeHtml(_0x47cf1e || "").toLowerCase().replace(/&#8212;/g, " ").replace(/[\u2019'`]/g, "").replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
}
function uniqueTokens(_0x8dd3e2) {
  var _0x549cc9 = normalizeText(_0x8dd3e2).split(" ");
  var _0x5265fe = {};
  var _0x4d5bc7 = [];
  var _0x3f2348;
  var _0x2861f0;
  for (_0x3f2348 = 0; _0x3f2348 < _0x549cc9.length; _0x3f2348 += 1) {
    _0x2861f0 = _0x549cc9[_0x3f2348];
    if (!_0x2861f0 || _0x2861f0.length < 2 || STOP_WORDS[_0x2861f0] || _0x5265fe[_0x2861f0]) {
      continue;
    }
    _0x5265fe[_0x2861f0] = true;
    _0x4d5bc7.push(_0x2861f0);
  }
  return _0x4d5bc7;
}
function escapeRegex(_0x37705e) {
  return String(_0x37705e || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function extractQuality(_0x5da079) {
  var _0x4b24d4 = String(_0x5da079 || "").match(/\b(2160p|1440p|1080p|720p|540p|480p|360p)\b/i);
  if (_0x4b24d4) {
    return _0x4b24d4[1].toUpperCase();
  } else {
    return "HD";
  }
}
function getFirstMatch(_0x40ace4, _0x3800d8) {
  var _0x22d078;
  var _0x334c0b;
  for (_0x22d078 = 0; _0x22d078 < _0x3800d8.length; _0x22d078 += 1) {
    _0x334c0b = _0x40ace4.match(_0x3800d8[_0x22d078]);
    if (_0x334c0b && _0x334c0b[1]) {
      return stripTags(_0x334c0b[1]);
    }
  }
  return "";
}
function getTmdbInfo(_0x599b, _0x58c67f) {
  var _0x534344 = _0x58c67f === "movie" ? "movie" : "tv";
  var _0x43bfbf = TMDB_URL + "/" + _0x534344 + "/" + encodeURIComponent(String(_0x599b)) + "?language=en-US";
  return fetchText(_0x43bfbf).then(function (_0x478406) {
    var _0x595b88 = getFirstMatch(_0x478406, [/<meta property="og:title" content="([^"]+)"/i, /<title>([\s\S]*?)<\/title>/i, /"name":"([^"]+)"/i]);
    var _0x1cb8bd = _0x478406.match(/<title>[\s\S]*?\b((?:19|20)\d{2})\b[\s\S]*?<\/title>/i) || _0x478406.match(/\b((?:19|20)\d{2})\b/);
    return {
      title: _0x595b88.replace(/\s+\(TV Series.*$/i, "").replace(/\s+\(\d{4}\).*$/i, "").trim(),
      year: _0x1cb8bd ? _0x1cb8bd[1] : ""
    };
  });
}
function buildSearchQueries(_0x2256fe, _0x37fed6) {
  var _0x4d3b43 = [];
  var _0xd6d3e9 = decodeHtml(_0x2256fe || "").replace(/[:\-]/g, " ").replace(/\s+/g, " ").trim();
  var _0x3a71b6 = {};
  function _0x3d1b79(_0x13f1e3) {
    var _0x4fca43 = normalizeText(_0x13f1e3);
    if (!_0x4fca43 || _0x3a71b6[_0x4fca43]) {
      return;
    }
    _0x3a71b6[_0x4fca43] = true;
    _0x4d3b43.push(_0x13f1e3);
  }
  _0x3d1b79(_0x2256fe);
  _0x3d1b79(_0xd6d3e9);
  if (_0x37fed6) {
    _0x3d1b79(_0x2256fe + " " + _0x37fed6);
    _0x3d1b79(_0xd6d3e9 + " " + _0x37fed6);
  }
  return _0x4d3b43;
}
function extractCandidateUrls(_0x194a70, _0x5b5dd4) {
  var _0x3b83b2 = _0x5b5dd4 === "movie" ? "/movies/" : "/drama/";
  var _0x5da032 = /href=["'](https?:\/\/onlykdrama\.shop\/[^"'#?]+)["']/gi;
  var _0x7e1139 = [];
  var _0xb890b0 = {};
  var _0x13229f;
  while (_0x13229f = _0x5da032.exec(_0x194a70)) {
    if (_0x13229f[1].indexOf(_0x3b83b2) === -1 || _0xb890b0[_0x13229f[1]]) {
      continue;
    }
    _0xb890b0[_0x13229f[1]] = true;
    _0x7e1139.push(_0x13229f[1]);
  }
  return _0x7e1139;
}
function scoreCandidateUrl(_0x15a2d4, _0x13f8f3, _0x18d18a, _0x22eb4c) {
  var _0x44d01f = _0x22eb4c === "movie" ? _0x15a2d4.indexOf("/movies/") !== -1 ? 10 : 0 : _0x15a2d4.indexOf("/drama/") !== -1 ? 10 : 0;
  var _0x2be248 = uniqueTokens(_0x13f8f3);
  var _0x30f5d6 = normalizeText(_0x15a2d4);
  var _0x344096;
  for (_0x344096 = 0; _0x344096 < _0x2be248.length; _0x344096 += 1) {
    if (_0x30f5d6.indexOf(_0x2be248[_0x344096]) !== -1) {
      _0x44d01f += 12;
    }
  }
  if (_0x18d18a && _0x30f5d6.indexOf(String(_0x18d18a)) !== -1) {
    _0x44d01f += 15;
  }
  return _0x44d01f;
}
function collectCandidatePages(_0x1175ab, _0x5a1c83, _0x5854e8, _0x29c8b8, _0x84dcae) {
  if (_0x29c8b8 >= _0x1175ab.length) {
    return Promise.resolve(rankCandidatePages(_0x84dcae, _0x5854e8, _0x5a1c83));
  }
  return fetchText(SITE_URL + "/?s=" + encodeURIComponent(_0x1175ab[_0x29c8b8])).then(function (_0x51a767) {
    return collectCandidatePages(_0x1175ab, _0x5a1c83, _0x5854e8, _0x29c8b8 + 1, _0x84dcae.concat(extractCandidateUrls(_0x51a767, _0x5a1c83)));
  }).catch(function () {
    return collectCandidatePages(_0x1175ab, _0x5a1c83, _0x5854e8, _0x29c8b8 + 1, _0x84dcae);
  });
}
function rankCandidatePages(_0x41cb39, _0x100bc1, _0x53999a) {
  var _0x416d16 = {};
  var _0x5a7761 = [];
  var _0x182110;
  for (_0x182110 = 0; _0x182110 < _0x41cb39.length; _0x182110 += 1) {
    if (_0x416d16[_0x41cb39[_0x182110]]) {
      continue;
    }
    _0x416d16[_0x41cb39[_0x182110]] = true;
    _0x5a7761.push({
      url: _0x41cb39[_0x182110],
      score: scoreCandidateUrl(_0x41cb39[_0x182110], _0x100bc1.title, _0x100bc1.year, _0x53999a),
      index: _0x182110
    });
  }
  _0x5a7761.sort(function (_0x2b4053, _0x216d28) {
    if (_0x216d28.score !== _0x2b4053.score) {
      return _0x216d28.score - _0x2b4053.score;
    }
    return _0x2b4053.index - _0x216d28.index;
  });
  return _0x5a7761.slice(0, 8).map(function (_0xabef99) {
    return _0xabef99.url;
  });
}
function getOnlyKDramaTitle(_0x1cf9e4) {
  return getFirstMatch(_0x1cf9e4, [/<div class="data">\s*<h1>([\s\S]*?)<\/h1>/i, /<h1[^>]*>([\s\S]*?)<\/h1>/i, /<meta property="og:title" content="([^"]+)"/i]);
}
function titleLooksRelevant(_0x4f9d3f, _0x4d93f3, _0xab0497) {
  var _0xe52cd6 = uniqueTokens(_0x4f9d3f);
  var _0x353454 = uniqueTokens(_0x4d93f3);
  var _0x357022 = 0;
  var _0xe1d081;
  var _0x22757e = {};
  var _0x4ea942 = String(_0x4f9d3f || "").match(/\b((?:19|20)\d{2})\b/);
  var _0xb730ee = _0x4ea942 ? _0x4ea942[1] : "";
  for (_0xe1d081 = 0; _0xe1d081 < _0xe52cd6.length; _0xe1d081 += 1) {
    _0x22757e[_0xe52cd6[_0xe1d081]] = true;
  }
  for (_0xe1d081 = 0; _0xe1d081 < _0x353454.length; _0xe1d081 += 1) {
    if (_0x22757e[_0x353454[_0xe1d081]]) {
      _0x357022 += 1;
    }
  }
  if (_0xab0497 && _0xb730ee && _0xb730ee !== String(_0xab0497)) {
    return false;
  }
  if (_0x353454.length <= 2) {
    return _0x357022 >= 1;
  }
  return _0x357022 >= 2;
}
function extractAttr(_0x167f63, _0x2de330) {
  var _0x284835 = _0x167f63.match(new RegExp(_0x2de330 + "=['\"]([^'\"]+)['\"]", "i"));
  if (_0x284835) {
    return _0x284835[1];
  } else {
    return "";
  }
}
function extractMovieOptions(_0x27d2d2) {
  var _0x4cd156 = /<li[^>]*class=['"][^'"]*dooplay_player_option[^'"]*['"][^>]*>[\s\S]*?<\/li>/gi;
  var _0x3d6c27 = [];
  var _0xbae690;
  while (_0xbae690 = _0x4cd156.exec(_0x27d2d2)) {
    _0x3d6c27.push({
      label: stripTags(_0xbae690[0]),
      post: extractAttr(_0xbae690[0], "data-post"),
      type: extractAttr(_0xbae690[0], "data-type"),
      nume: extractAttr(_0xbae690[0], "data-nume")
    });
  }
  return _0x3d6c27;
}
function extractDirectMovieUrl(_0xd3a475) {
  if (!_0xd3a475) {
    return "";
  }
  try {
    var _0x496a07 = new URL(_0xd3a475);
    var _0xc25403 = _0x496a07.searchParams.get("source");
    if (_0xc25403) {
      return _0xc25403;
    }
  } catch (_0x200c87) {
    return _0xd3a475;
  }
  return _0xd3a475;
}
function buildStream(_0x5e1cc7, _0x58dc97, _0x2a09fe) {
  return {
    name: PROVIDER_NAME,
    title: _0x5e1cc7,
    url: safeEncodeUrl(_0x58dc97),
    quality: _0x2a09fe || "HD"
  };
}
function resolveMoviePage(_0x35816b, _0x23fec6) {
  var _0x37f3f5 = extractMovieOptions(_0x23fec6);
  var _0x41199b = null;
  var _0x158cf4;
  for (_0x158cf4 = 0; _0x158cf4 < _0x37f3f5.length; _0x158cf4 += 1) {
    if (/fast stream/i.test(_0x37f3f5[_0x158cf4].label) && _0x37f3f5[_0x158cf4].post && _0x37f3f5[_0x158cf4].nume) {
      _0x41199b = _0x37f3f5[_0x158cf4];
      break;
    }
  }
  if (!_0x41199b) {
    return Promise.resolve([]);
  }
  return fetchJson(SITE_URL + "/wp-admin/admin-ajax.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Requested-With": "XMLHttpRequest",
      Referer: _0x35816b
    },
    body: new URLSearchParams({
      action: "doo_player_ajax",
      post: _0x41199b.post,
      nume: _0x41199b.nume,
      type: _0x41199b.type || "movie"
    }).toString()
  }).then(function (_0x435f10) {
    var _0x22f75c = extractDirectMovieUrl(_0x435f10 && _0x435f10.embed_url);
    if (!_0x22f75c) {
      return [];
    }
    return [buildStream("Fast Stream", _0x22f75c, extractQuality(safeDecode(_0x22f75c)))];
  });
}
function extractEpisodeAnchors(_0x3eaf3d) {
  var _0x14d802 = /<a[^>]+href=["'](https:\/\/new5\.filepress\.wiki\/file\/([A-Za-z0-9]+))["'][^>]*>([\s\S]*?)<\/a>/gi;
  var _0x1ae13a = [];
  var _0x47fcaa = {};
  var _0x293ce0;
  while (_0x293ce0 = _0x14d802.exec(_0x3eaf3d)) {
    if (_0x47fcaa[_0x293ce0[2]]) {
      continue;
    }
    _0x47fcaa[_0x293ce0[2]] = true;
    _0x1ae13a.push({
      url: _0x293ce0[1],
      fileId: _0x293ce0[2],
      text: stripTags(_0x293ce0[3])
    });
  }
  return _0x1ae13a;
}
function episodeMatches(_0x1a8a51, _0x13cf5d, _0x357635, _0x33f7c3) {
  var _0x588edb = escapeRegex(String(_0x357635));
  var _0x5cbaca = new RegExp("(?:^|[^A-Z0-9])S0*" + escapeRegex(String(_0x13cf5d)) + "E0*" + _0x588edb + "(?:[^A-Z0-9]|$)", "i");
  var _0x377d02 = new RegExp("(?:^|[^A-Z0-9])E0*" + _0x588edb + "(?:[^A-Z0-9]|$)", "i");
  var _0x4d50c8 = new RegExp("Episode\\s*0*" + _0x588edb + "(?:[^0-9]|$)", "i");
  if (_0x5cbaca.test(_0x1a8a51)) {
    return true;
  }
  if (_0x33f7c3) {
    return false;
  }
  if (_0x13cf5d > 1) {
    return false;
  }
  return _0x377d02.test(_0x1a8a51) || _0x4d50c8.test(_0x1a8a51);
}
function pickEpisodeAnchor(_0x32a402, _0x524870, _0x434c96) {
  var _0x478f23 = _0x32a402.some(function (_0x5b1295) {
    return /S\d{1,2}E\d{1,2}/i.test(_0x5b1295.text);
  });
  var _0x31017f;
  for (_0x31017f = 0; _0x31017f < _0x32a402.length; _0x31017f += 1) {
    if (episodeMatches(_0x32a402[_0x31017f].text, _0x524870, _0x434c96, _0x478f23)) {
      return _0x32a402[_0x31017f];
    }
  }
  return null;
}
function filePressHeaders(_0x328989) {
  return {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    Origin: FILEPRESS_ORIGIN,
    Referer: FILEPRESS_ORIGIN + "/file/" + _0x328989,
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin"
  };
}
function extractFilePressUrl(_0x3a7e0c, _0x3d8e6d) {
  if (_0x3d8e6d === "indexDownlaod" || _0x3d8e6d === "cloudDownlaod" || _0x3d8e6d === "cloudR2Downlaod") {
    if (Array.isArray(_0x3a7e0c) && _0x3a7e0c[0]) {
      return _0x3a7e0c[0];
    } else {
      return "";
    }
  }
  if (_0x3d8e6d === "publicDownlaod" || _0x3d8e6d === "publicUserDownlaod") {
    if (_0x3a7e0c) {
      return "https://drive.google.com/uc?id=" + _0x3a7e0c;
    } else {
      return "";
    }
  }
  return "";
}
function resolveFilePressWithMethod(_0x4418bf, _0x2d5930, _0x128346) {
  if (_0x128346 >= _0x2d5930.length) {
    return Promise.resolve("");
  }
  var _0x6630f4 = _0x2d5930[_0x128346];
  var _0x4ed149 = filePressHeaders(_0x4418bf);
  return fetchJson(FILEPRESS_ORIGIN + "/api/file/downlaod/", {
    method: "POST",
    headers: _0x4ed149,
    body: JSON.stringify({
      id: _0x4418bf,
      method: _0x6630f4,
      captchaValue: ""
    })
  }).then(function (_0x8d1889) {
    if (!_0x8d1889 || !_0x8d1889.status || !_0x8d1889.data) {
      return resolveFilePressWithMethod(_0x4418bf, _0x2d5930, _0x128346 + 1);
    }
    return fetchJson(FILEPRESS_ORIGIN + "/api/file/downlaod2/", {
      method: "POST",
      headers: _0x4ed149,
      body: JSON.stringify({
        id: _0x8d1889.data,
        method: _0x6630f4,
        captchaValue: ""
      })
    }).then(function (_0xbd3e2a) {
      var _0x2a84f7 = _0xbd3e2a && _0xbd3e2a.status ? extractFilePressUrl(_0xbd3e2a.data, _0x6630f4) : "";
      if (_0x2a84f7) {
        return _0x2a84f7;
      }
      return resolveFilePressWithMethod(_0x4418bf, _0x2d5930, _0x128346 + 1);
    });
  }).catch(function () {
    return resolveFilePressWithMethod(_0x4418bf, _0x2d5930, _0x128346 + 1);
  });
}
function resolveEpisodePage(_0x586747, _0x280dbd, _0x6ffd4a) {
  var _0x4c04c5 = pickEpisodeAnchor(extractEpisodeAnchors(_0x586747), _0x280dbd, _0x6ffd4a);
  if (!_0x4c04c5) {
    return Promise.resolve([]);
  }
  return resolveFilePressWithMethod(_0x4c04c5.fileId, ["indexDownlaod", "publicDownlaod", "publicUserDownlaod"], 0).then(function (_0x2d4378) {
    if (!_0x2d4378) {
      return [];
    }
    return [buildStream(_0x4c04c5.text || "Episode " + _0x6ffd4a, _0x2d4378, extractQuality(_0x4c04c5.text))];
  });
}
function tryCandidatePages(_0x46ac1a, _0x32887c, _0xc1fa27, _0x5312cb, _0x506609, _0x119d18) {
  if (_0x32887c >= _0x46ac1a.length) {
    return Promise.resolve([]);
  }
  return fetchText(_0x46ac1a[_0x32887c]).then(function (_0x3c375d) {
    var _0x2fb4ca = getOnlyKDramaTitle(_0x3c375d);
    if (!titleLooksRelevant(_0x2fb4ca, _0x5312cb.title, _0x5312cb.year)) {
      return tryCandidatePages(_0x46ac1a, _0x32887c + 1, _0xc1fa27, _0x5312cb, _0x506609, _0x119d18);
    }
    return (_0xc1fa27 === "movie" ? resolveMoviePage(_0x46ac1a[_0x32887c], _0x3c375d) : resolveEpisodePage(_0x3c375d, _0x506609, _0x119d18)).then(function (_0x492942) {
      if (_0x492942 && _0x492942.length) {
        return _0x492942;
      }
      return tryCandidatePages(_0x46ac1a, _0x32887c + 1, _0xc1fa27, _0x5312cb, _0x506609, _0x119d18);
    }).catch(function () {
      return tryCandidatePages(_0x46ac1a, _0x32887c + 1, _0xc1fa27, _0x5312cb, _0x506609, _0x119d18);
    });
  }).catch(function () {
    return tryCandidatePages(_0x46ac1a, _0x32887c + 1, _0xc1fa27, _0x5312cb, _0x506609, _0x119d18);
  });
}
function getStreams(_0x164a51, _0x361684, _0x4384f9, _0x40d098) {
  var _0x362d08 = _0x361684 === "movie" ? "movie" : "tv";
  var _0x83e84d = Number(_0x4384f9) || 1;
  var _0x3123bb = Number(_0x40d098) || 1;
  return getTmdbInfo(_0x164a51, _0x362d08).then(function (_0x5b1747) {
    if (!_0x5b1747 || !_0x5b1747.title) {
      return [];
    }
    return collectCandidatePages(buildSearchQueries(_0x5b1747.title, _0x5b1747.year), _0x362d08, _0x5b1747, 0, []).then(function (_0x30862c) {
      return tryCandidatePages(_0x30862c, 0, _0x362d08, _0x5b1747, _0x83e84d, _0x3123bb);
    });
  }).catch(function (_0x56cd9a) {
    console.log("[" + PROVIDER_NAME + "] " + _0x56cd9a.message);
    return [];
  });
}
module.exports = {
  getStreams: getStreams
};