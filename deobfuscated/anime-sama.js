/**
 * anime-sama - Built from src/anime-sama/
 * Generated: 2026-05-20T23:01:52.298112258Z
 */
var __provider = (() => {
  var Cb = Object.create;
  var ya = Object.defineProperty;
  var Sb = Object.defineProperties;
  var Tb = Object.getOwnPropertyDescriptor;
  var qb = Object.getOwnPropertyDescriptors;
  var Lb = Object.getOwnPropertyNames;
  var su = Object.getOwnPropertySymbols;
  var Bb = Object.getPrototypeOf;
  var Da = Object.prototype.hasOwnProperty;
  var vl = Object.prototype.propertyIsEnumerable;
  var _l = (t, n, i) => n in t ? ya(t, n, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: i
  }) : t[n] = i;
  var gt = (t, n) => {
    for (var i in n ||= {}) {
      if (Da.call(n, i)) {
        _l(t, i, n[i]);
      }
    }
    if (su) {
      for (var i of su(n)) {
        if (vl.call(n, i)) {
          _l(t, i, n[i]);
        }
      }
    }
    return t;
  };
  var Nt = (t, n) => Sb(t, qb(n));
  var ml = (t, n) => {
    var i = {};
    for (var s in t) {
      if (Da.call(t, s) && n.indexOf(s) < 0) {
        i[s] = t[s];
      }
    }
    if (t != null && su) {
      for (var s of su(t)) {
        if (n.indexOf(s) < 0 && vl.call(t, s)) {
          i[s] = t[s];
        }
      }
    }
    return i;
  };
  var Un = (t, n) => () => {
    if (t) {
      n = t(t = 0);
    }
    return n;
  };
  var O = (t, n) => () => {
    if (!n) {
      t((n = {
        exports: {}
      }).exports, n);
    }
    return n.exports;
  };
  var Fb = (t, n, i, s) => {
    if (n && typeof n == "object" || typeof n == "function") {
      for (let o of Lb(n)) {
        if (!Da.call(t, o) && o !== i) {
          ya(t, o, {
            get: () => n[o],
            enumerable: !(s = Tb(n, o)) || s.enumerable
          });
        }
      }
    }
    return t;
  };
  var Rb = (t, n, i) => {
    i = t != null ? Cb(Bb(t)) : {};
    return Fb(n || !t || !t.__esModule ? ya(i, "default", {
      value: t,
      enumerable: true
    }) : i, t);
  };
  var J = (t, n, i) => new Promise((s, o) => {
    var c = d => {
      try {
        g(i.next(d));
      } catch (v) {
        o(v);
      }
    };
    var l = d => {
      try {
        g(i.throw(d));
      } catch (v) {
        o(v);
      }
    };
    var g = d => d.done ? s(d.value) : Promise.resolve(d.value).then(c, l);
    g((i = i.apply(t, n)).next());
  });
  function wl(t, n) {
    try {
      if (typeof process != "undefined" && process.env && process.env[t]) {
        let i = parseInt(process.env[t], 10);
        if (isNaN(i)) {
          return n;
        } else {
          return i;
        }
      }
    } catch (i) {}
    return n;
  }
  function El(t, n, i = "Operation") {
    return J(this, null, function* () {
      if (!n || n <= 0 || typeof setTimeout == "undefined") {
        return t;
      }
      let s;
      let o = new Promise((c, l) => {
        s = setTimeout(() => l(new Error(`[Timeout] ${i} exceeded ${n}ms`)), n);
      });
      try {
        return yield Promise.race([t, o]);
      } finally {
        clearTimeout(s);
      }
    });
  }
  function en(t) {
    if (!t || typeof t != "string") {
      return true;
    }
    let n = t.toLowerCase();
    return n.includes("test-videos.co.uk") || n.includes("big_buck_bunny") || n.includes("bigbuckbunny") || n.includes("sample-videos.com") || n.includes("example.com") || n.includes("localhost");
  }
  function Ob(t) {
    if (!t || typeof t != "string") {
      return false;
    }
    let n = t.toLowerCase();
    if (en(n)) {
      return false;
    } else {
      return /\.(mp4|m3u8|mkv|webm)(\?.*)?$/.test(n) || n.includes("/hls2/") || n.includes("/master.m3u8");
    }
  }
  function xl(t) {
    if (!Number.isFinite(t) || t <= 0) {
      return ou;
    }
    let n = au[0];
    let i = Math.abs(t - n);
    for (let s of au) {
      let o = Math.abs(t - s);
      if (o < i) {
        i = o;
        n = s;
      }
    }
    return n;
  }
  function ze(t) {
    let n = String(t || "").trim().toLowerCase();
    if (!n) {
      return `${ou}p`;
    }
    if (n === "4k" || n === "uhd" || n.includes("2160")) {
      return "2160p";
    }
    if (n.includes("fhd") || n.includes("fullhd") || n.includes("1080")) {
      return "1080p";
    }
    if (n.includes("hd") || n.includes("720")) {
      return "720p";
    }
    let i = n.match(/(\d{3,4})\s*p?/i);
    if (i) {
      return `${xl(Number(i[1]))}p`;
    } else {
      return `${ou}p`;
    }
  }
  function Nb(t) {
    if (!t || typeof t != "string") {
      return {
        video: null,
        audio: null
      };
    }
    let n = t.split(",").map(o => o.trim());
    let i = null;
    let s = null;
    for (let o of n) {
      let c = o.split(".")[0].toLowerCase();
      let l = Ib[c];
      if (l) {
        if (["H.264", "H.265", "AV1", "VP9"].includes(l)) {
          i ||= {
            codec: l,
            raw: o
          };
        } else if (["AAC", "AC3", "EAC3", "Opus"].includes(l)) {
          s ||= {
            codec: l,
            raw: o
          };
        }
      }
    }
    return {
      video: i,
      audio: s
    };
  }
  function Mb(t) {
    let n = Cl.get(t);
    if (n && Date.now() - n.ts < kb) {
      return n.data;
    } else {
      return null;
    }
  }
  function Pb(t, n) {
    Cl.set(t, {
      data: n,
      ts: Date.now()
    });
  }
  function cu(t) {
    let i = ze(t).toLowerCase().match(/(\d{3,4})p/);
    let s = i ? Number(i[1]) : ou;
    let o = xl(s);
    return au.length - 1 - au.indexOf(o);
  }
  function Ub(t, n, i, s) {
    let o = [];
    let c = ze(n);
    if (c && !(t || "").includes(c)) {
      o.push(c);
    }
    if (i && i !== "H.264") {
      o.push(i);
    }
    if (s && s > 30) {
      o.push(`${s}fps`);
    }
    if (o.length === 0) {
      return t;
    } else {
      return `${t} [${o.join(" ")}]`;
    }
  }
  function wa(t) {
    if (!t || typeof t != "string") {
      return null;
    }
    let n = t.toLowerCase();
    if (n.includes(".m3u8") || n.includes("/hls/") || n.includes("/hls2/") || n.includes("master.m3u8")) {
      return "hls";
    } else if (n.includes(".mp4")) {
      return "mp4";
    } else if (n.includes(".mkv")) {
      return "mkv";
    } else if (n.includes(".webm")) {
      return "webm";
    } else {
      return null;
    }
  }
  function Hb(t) {
    if (t.language) {
      return t.language;
    }
    let i = (t.name || "").match(/\((\w+)\)/);
    if (i) {
      let s = i[1].toUpperCase();
      if (["VF", "VOSTFR", "VO", "VOSTF", "VOA", "VOST"].includes(s)) {
        return s;
      }
    }
    return null;
  }
  function Gb(i) {
    return J(this, arguments, function* (t, n = {}) {
      var L;
      var B;
      var P;
      var Y;
      var nt;
      var ht;
      var it;
      if (!t || !t.url || typeof t.url != "string") {
        return [];
      }
      let s = t.url;
      let o = s.toLowerCase();
      if (!o.includes(".m3u8") && !o.includes("/hls/")) {
        return [Nt(gt({}, t), {
          quality: ze(t.quality || "HD"),
          type: wa(s)
        })];
      }
      let c = s;
      if (!n.forceRefresh) {
        let $ = Mb(c);
        if ($) {
          return $;
        }
      }
      let l = yield ot(s, {
        headers: t.headers || {}
      });
      if (!l) {
        return [Nt(gt({}, t), {
          quality: ze(t.quality || "HD"),
          type: "hls"
        })];
      }
      let g = yield l.text();
      if (!/#EXT-X-STREAM-INF/i.test(g)) {
        return [Nt(gt({}, t), {
          quality: ze(t.quality || "HD"),
          type: "hls"
        })];
      }
      let d = g.split(/\r?\n/).map($ => $.trim()).filter(Boolean);
      let v = [];
      for (let $ = 0; $ < d.length; $++) {
        let N = d[$];
        if (!N.startsWith("#EXT-X-STREAM-INF:")) {
          continue;
        }
        let W = d[$ + 1];
        if (!W || W.startsWith("#")) {
          continue;
        }
        let pt = (L = N.match(/RESOLUTION=\d+x(\d+)/i)) == null ? undefined : L[1];
        let yt = (B = N.match(/FRAME-RATE=([0-9.]+)/i)) == null ? undefined : B[1];
        let Rt = (P = N.match(/BANDWIDTH=(\d+)/i)) == null ? undefined : P[1];
        let Qt = (Y = N.match(/CODECS="([^"]+)"/i)) == null ? undefined : Y[1];
        let qt = pt ? `${pt}p` : null;
        if (!qt && Rt) {
          let te = Number(Rt);
          if (te >= 8000000) {
            qt = "2160p";
          } else if (te >= 5000000) {
            qt = "1080p";
          } else if (te >= 2500000) {
            qt = "720p";
          } else if (te >= 1200000) {
            qt = "480p";
          } else {
            qt = "360p";
          }
        }
        if (!qt && yt) {
          qt = `${ze(t.quality || "HD")}`;
        }
        let Pr = Nb(Qt);
        let hi = yt ? Math.round(parseFloat(yt)) : null;
        let pi = W;
        try {
          pi = new URL(W, s).toString();
        } catch (te) {}
        v.push(Nt(gt({}, t), {
          url: pi,
          quality: ze(qt || t.quality || "HD"),
          type: "hls",
          codec: ((nt = Pr.video) == null ? undefined : nt.codec) || null,
          audioCodec: ((ht = Pr.audio) == null ? undefined : ht.codec) || null,
          fps: hi,
          bandwidth: Rt ? parseInt(Rt) : null,
          title: Ub(t.title || t.name || "Stream", qt || t.quality || "HD", n.includeCodec !== false ? (it = Pr.video) == null ? undefined : it.codec : null, n.includeFps !== false ? hi : null)
        }));
      }
      if (v.length === 0) {
        return [Nt(gt({}, t), {
          quality: ze(t.quality || "HD"),
          type: "hls"
        })];
      }
      let A = [];
      let w = new Set();
      for (let $ of v) {
        if (!w.has($.url)) {
          w.add($.url);
          A.push($);
        }
      }
      A.sort(($, N) => cu(N.quality) - cu($.quality));
      let T = n.maxVariants || A.length;
      let S = A.slice(0, T);
      Pb(c, S);
      return S;
    });
  }
  function Wb(t, n) {
    if (!n || !t.length) {
      return t;
    }
    let i = n.toUpperCase();
    if (t.some(o => {
      var c;
      return ((c = o.codec) == null ? undefined : c.toUpperCase()) === i;
    })) {
      return t.filter(o => {
        var c;
        return ((c = o.codec) == null ? undefined : c.toUpperCase()) === i;
      });
    } else {
      return t;
    }
  }
  function $b(t) {
    return [...t].sort((n, i) => {
      let s = cu(i.quality) - cu(n.quality);
      if (s !== 0) {
        return s;
      }
      if (n.codec && i.codec) {
        let o = c => Al.indexOf(c) >= 0 ? Al.indexOf(c) : 99;
        return o(n.codec) - o(i.codec);
      }
      return 0;
    });
  }
  function Sl(i) {
    return J(this, arguments, function* (t, n = {}) {
      let s = Array.isArray(t) ? t : [];
      let o = [];
      for (let d of s) {
        try {
          let v = yield Gb(d, n);
          for (let A of v) {
            o.push(A);
          }
        } catch (v) {
          if (d) {
            o.push(Nt(gt({}, d), {
              quality: ze(d.quality || "HD"),
              type: wa(d.url)
            }));
          }
        }
      }
      let c = [];
      let l = new Set();
      for (let d of o) {
        if (d != null && d.url) {
          if (!en(d.url) && !l.has(d.url)) {
            l.add(d.url);
            c.push(d);
          }
        }
      }
      let g = $b(c);
      g = g.map(d => Nt(gt({}, d), {
        type: d.type || wa(d.url),
        language: Hb(d) || d.language || null
      }));
      if (n.preferredCodec) {
        return Wb(g, n.preferredCodec);
      } else {
        return g;
      }
    });
  }
  function ot(i) {
    return J(this, arguments, function* (t, n = {}) {
      try {
        let s = n;
        let {
          timeout: o
        } = s;
        let c = ml(s, ["timeout"]);
        let l = Nt(gt({}, c), {
          headers: gt(gt({}, yl), c.headers),
          redirect: "follow"
        });
        if (o > 0 && typeof AbortSignal != "undefined" && typeof AbortSignal.timeout != "undefined") {
          l.signal = AbortSignal.timeout(o);
        }
        let g = yield fetch(t, l);
        if (!g) {
          return null;
        }
        let d = g.status;
        let v = "";
        try {
          v = yield g.text();
        } catch (A) {
          v = "";
        }
        return {
          text: () => Promise.resolve(v),
          json: () => J(null, null, function* () {
            try {
              return JSON.parse(v);
            } catch (A) {
              throw A;
            }
          }),
          ok: g.ok,
          status: d,
          url: g.url,
          headers: g.headers
        };
      } catch (o) {
        return null;
      }
    });
  }
  function _e(t) {
    try {
      if (!t.includes("p,a,c,k,e,d")) {
        return t;
      }
      let n = c => {
        let l = [];
        let g = 0;
        while (true) {
          let d = c.indexOf("eval(function(p,a,c,k,e,d)", g);
          if (d === -1) {
            break;
          }
          let v = d;
          let A = 0;
          let w = false;
          let T = false;
          let S = false;
          for (; v < c.length; v++) {
            let L = c[v];
            if (S) {
              S = false;
              continue;
            }
            if (L === "\\") {
              S = true;
              continue;
            }
            if (!T && L === "'") {
              w = !w;
            } else if (!w && L === "\"") {
              T = !T;
            }
            if (!w && !T) {
              if (L === "(") {
                A++;
              } else if (L === ")" && (A--, A === 0)) {
                v++;
                break;
              }
            }
          }
          if (v > d) {
            l.push(c.slice(d, v));
          }
          g = v;
        }
        return l;
      };
      let i = c => {
        let l = (N, W) => {
          let pt = N[W];
          if (pt !== "'" && pt !== "\"") {
            return null;
          }
          let yt = W + 1;
          let Rt = "";
          let Qt = false;
          for (; yt < N.length; yt++) {
            let qt = N[yt];
            if (Qt) {
              Rt += qt;
              Qt = false;
              continue;
            }
            if (qt === "\\") {
              Qt = true;
              continue;
            }
            if (qt === pt) {
              return {
                value: Rt,
                end: yt + 1
              };
            }
            Rt += qt;
          }
          return null;
        };
        let g = (N, W) => {
          while (W < N.length && /\s/.test(N[W])) {
            W++;
          }
          return W;
        };
        let d = (N, W) => {
          W = g(N, W);
          let pt = N.slice(W).match(/^\d+/);
          if (pt) {
            return {
              value: parseInt(pt[0], 10),
              end: W + pt[0].length
            };
          } else {
            return null;
          }
        };
        let v = c.indexOf("}(");
        if (v === -1) {
          return null;
        }
        let A = v + 2;
        A = g(c, A);
        let w = l(c, A);
        if (!w) {
          return null;
        }
        let T = w.value;
        A = g(c, w.end);
        if (c[A] !== ",") {
          return null;
        }
        let S = d(c, A + 1);
        if (!S) {
          return null;
        }
        let L = S.value;
        A = g(c, S.end);
        if (c[A] !== ",") {
          return null;
        }
        let B = d(c, A + 1);
        if (!B) {
          return null;
        }
        let P = B.value;
        A = g(c, B.end);
        if (c[A] !== ",") {
          return null;
        }
        let Y = l(c, g(c, A + 1));
        if (!Y) {
          return null;
        }
        let nt = c.slice(Y.end, Y.end + 20);
        if (!/\.split\(\s*['"]\|['"]\s*\)/.test(nt)) {
          return null;
        }
        let ht = Y.value.split("|");
        let it = N => (N < L ? "" : it(parseInt(N / L, 10))) + ((N = N % L) > 35 ? String.fromCharCode(N + 29) : N.toString(36));
        let $ = {};
        while (P--) {
          $[it(P)] = ht[P] || it(P);
        }
        return T.replace(/\b\w+\b/g, N => $[N] || N);
      };
      let s = t;
      let o = n(t);
      for (let c of o) {
        try {
          let l = i(c);
          if (l) {
            s = s.replace(c, l);
          }
        } catch (l) {}
      }
      return s;
    } catch (n) {
      return t;
    }
  }
  function Vb(t) {
    return J(this, null, function* () {
      try {
        let n = yield ot(t, {
          headers: {
            Referer: "https://video.sibnet.ru/"
          }
        });
        if (!n) {
          return {
            url: t
          };
        }
        let i = yield n.text();
        let s = i.match(/file\s*:\s*["']([^"']*\.mp4[^"']*)['"]/i) || i.match(/src\s*:\s*["']([^"']*\.mp4[^"']*)['"]/i) || i.match(/["']((?:https?:)?\/\/[^"'\s]+\.mp4[^"'\s]*)["']/i);
        if (s) {
          let o = s[1];
          if (o.startsWith("//")) {
            o = "https:" + o;
          } else if (o.startsWith("/")) {
            o = "https://video.sibnet.ru" + o;
          }
          return {
            url: o,
            headers: {
              Referer: "https://video.sibnet.ru/"
            }
          };
        }
      } catch (n) {}
      return {
        url: t
      };
    });
  }
  function zb(t) {
    return J(this, null, function* () {
      try {
        let n = [t.replace(/vidmoly\.(net|to|ru|is)/, "vidmoly.me"), t.replace(/vidmoly\.(net|to|ru|is)/, "vidmoly.biz"), t.replace(/vidmoly\.(net|to|ru|is)/, "vidmoly.bz")];
        let i = [...new Set(n)];
        let s = {
          Referer: "https://vidmoly.me/",
          Origin: "https://vidmoly.me"
        };
        for (let o of i) {
          try {
            let c = yield ot(o, {
              headers: s
            });
            if (!c) {
              continue;
            }
            let l = yield c.text();
            if (l.includes("p,a,c,k,e,d") || l.includes("eval(function")) {
              l = _e(l);
            }
            let g = l.match(/file\s*:\s*["']([^"']+\.(?:m3u8|mp4)[^"']*)["']/i) || l.match(/sources\s*:\s*\[["']([^"']+\.(?:m3u8|mp4)[^"']*)["']\]/i) || l.match(/["'](https?:\/\/[^"']+\.(?:m3u8|mp4)[^"']*)["']/i);
            if (g) {
              return {
                url: g[1],
                headers: {
                  Referer: "https://vidmoly.me/"
                }
              };
            }
            let d = l.match(/window\.location\.replace\(['"]([^'"]+)['"]\)/) || l.match(/window\.location\.href\s*=\s*['"]([^'"]+)['"]/);
            if (d && d[1] !== o && (c = yield ot(d[1], {
              headers: s
            }), c)) {
              l = yield c.text();
              if (l.includes("p,a,c,k,e,d") || l.includes("eval(function")) {
                l = _e(l);
              }
              let v = l.match(/file\s*:\s*["']([^"']+\.(?:m3u8|mp4)[^"']*)["']/i) || l.match(/sources\s*:\s*\[["']([^"']+\.(?:m3u8|mp4)[^"']*)["']\]/i) || l.match(/["'](https?:\/\/[^"']+\.(?:m3u8|mp4)[^"']*)["']/i);
              if (v) {
                return {
                  url: v[1],
                  headers: {
                    Referer: "https://vidmoly.me/"
                  }
                };
              }
            }
          } catch (c) {}
        }
      } catch (n) {}
      return {
        url: t
      };
    });
  }
  function Xb(t) {
    return J(this, null, function* () {
      var c;
      let n = t.replace(/^https?:\/\/[^/]+/, "");
      let i = ((c = t.match(/^https?:\/\/([^/]+)/)) == null ? undefined : c[1]) || "uqload.co";
      let s = [...new Set([i, "uqload.co", "oneupload.to"])];
      let o = `https://${i}/`;
      return new Promise(l => {
        let g = 0;
        let d = false;
        let v = A => J(null, null, function* () {
          try {
            let w = `https://${A}${n}`;
            let T = `https://${A}/`;
            let S = yield ot(w, {
              headers: Nt(gt({}, yl), {
                Referer: T
              })
            });
            if (S) {
              let L = yield S.text();
              let B = L.match(/sources\s*:\s*\[["']([^"']+\.(?:mp4|m3u8))["']\]/) || L.match(/file\s*:\s*["']([^"']+\.(?:mp4|m3u8))["']/);
              if (B && !d) {
                d = true;
                l({
                  url: B[1],
                  headers: {
                    Referer: T
                  }
                });
                return;
              }
            }
          } catch (w) {}
          g++;
          if (g === s.length && !d) {
            l({
              url: t
            });
          }
        });
        s.forEach(v);
      });
    });
  }
  function Yb(t) {
    return J(this, null, function* () {
      try {
        let n = yield ot(t);
        if (!n) {
          return {
            url: t
          };
        }
        let i = yield n.text();
        let s = t;
        let o = i.match(/window\.location\.href\s*=\s*['"]([^'"]+)['"]/);
        if (o) {
          s = o[1];
          let l = yield ot(s);
          if (l) {
            i = yield l.text();
          }
        }
        if (i.includes("p,a,c,k,e,d") || i.includes("eval(function")) {
          i = _e(i);
        }
        let c = i.match(/'hls'\s*:\s*'([^']+)'/) || i.match(/"hls"\s*:\s*"([^"]+)"/) || i.match(/file\s*:\s*["']([^"']+\.(?:m3u8|mp4)[^"']*)["']/i) || i.match(/sources\s*:\s*\[["']([^"']+\.(?:m3u8|mp4)[^"']*)["']\]/i) || i.match(/https?:\/\/[^"']+\.m3u8[^"']*/);
        if (c) {
          let l = c[1] || c[0];
          if (l.includes("base64")) {
            l = Dl(l.split(",")[1] || l);
          }
          if (en(l)) {
            return {
              url: t
            };
          } else {
            return {
              url: l,
              headers: {
                Referer: s
              }
            };
          }
        }
      } catch (n) {}
      return {
        url: t
      };
    });
  }
  function Kb(t) {
    return J(this, null, function* () {
      try {
        let n = yield ot(t);
        if (!n) {
          return {
            url: t
          };
        }
        let i = yield n.text();
        if (i.includes("p,a,c,k,e,d")) {
          i = _e(i);
        }
        let s = i.match(/robotlink['"]\)\.innerHTML\s*=\s*['"]([^'"]+)['"]\s*\+\s*([^;]+)/);
        if (s) {
          let o = "https:" + s[1];
          let c = s[2].split("+");
          for (let l of c) {
            let g = l.match(/['"]([^'"]+)['"]/);
            if (g) {
              let d = g[1];
              let v = l.match(/substring\((\d+)\)/);
              if (v) {
                d = d.substring(parseInt(v[1]));
              }
              o += d;
            }
          }
          return {
            url: o,
            headers: {
              Referer: "https://streamtape.com/"
            }
          };
        }
      } catch (n) {}
      return {
        url: t
      };
    });
  }
  function jb(t) {
    return J(this, null, function* () {
      try {
        if (t.includes("daisukianime")) {
          let c = t.match(/[?&]id=([a-z0-9]+)/i);
          if (c) {
            t = `https://sendvid.com/embed/${c[1]}`;
          }
        }
        let n = t.includes("/embed/") ? t : t.replace(/sendvid\.com\/([a-z0-9]+)/i, "sendvid.com/embed/$1");
        let i = yield ot(n, {
          headers: {
            Referer: "https://sendvid.com/"
          }
        });
        if (!i) {
          return {
            url: t
          };
        }
        let s = yield i.text();
        let o = s.match(/video_source\s*:\s*["']([^"']+\.mp4[^"']*)["|']/) || s.match(/source\s+src=["']([^"']+\.mp4[^"']*)["|']/) || s.match(/<source[^>]+src=["']([^"']+\.(?:mp4|m3u8)[^"']*)["']/) || s.match(/file\s*:\s*["']([^"']+\.(?:mp4|m3u8)[^"']*)["|']/) || s.match(/["'](https?:\/\/[^"']+\.mp4[^"']*)["']/);
        if (o) {
          return {
            url: o[1],
            headers: {
              Referer: "https://sendvid.com/"
            }
          };
        }
      } catch (n) {}
      return {
        url: t
      };
    });
  }
  function Zb(t) {
    return J(this, null, function* () {
      try {
        let n = yield ot(t);
        if (!n) {
          return {
            url: t
          };
        }
        let i = yield n.text();
        if (i.includes("p,a,c,k,e,d")) {
          i = _e(i);
        }
        let s = i.match(/sources\s*:\s*\[["']([^"']+\.(?:m3u8|mp4)[^"']*)["']\]/) || i.match(/file\s*:\s*["']([^"']+\.(?:m3u8|mp4)[^"']*)["']/);
        if (s) {
          let o = s[1];
          if (o.includes("base64")) {
            o = Dl(o.split(",")[1] || o);
          }
          return {
            url: o,
            headers: {
              Referer: t
            }
          };
        }
      } catch (n) {}
      return {
        url: t
      };
    });
  }
  function Jb(t) {
    return J(this, null, function* () {
      try {
        let n = yield ot(t);
        if (!n) {
          return {
            url: t
          };
        }
        let s = (yield n.text()).match(/["'](https?:\/\/[^"']+\.m3u8[^"']*)["']/);
        if (s) {
          return {
            url: s[1],
            headers: {
              Referer: t
            }
          };
        }
      } catch (n) {}
      return {
        url: t
      };
    });
  }
  function Qb(t) {
    return J(this, null, function* () {
      var n;
      try {
        let i = ((n = t.match(/https?:\/\/([^\/]+)/)) == null ? undefined : n[1]) || "dood.to";
        let s = yield ot(t);
        if (!s) {
          return {
            url: t
          };
        }
        let o = yield s.text();
        if (o.includes("eval(function(p,a,c,k,e,d)")) {
          o = _e(o);
        }
        let c = o.match(/\$\.get\(['"]\/pass_md5\/([^'"]+)['"]/);
        if (c) {
          let l = c[1];
          let g = `https://${i}/pass_md5/${l}`;
          let d = yield ot(g, {
            headers: {
              Referer: t
            }
          });
          if (d && d.ok) {
            let v = yield d.text();
            let A = Math.random().toString(36).substring(2, 12);
            return {
              url: v + A + "?token=" + l + "&expiry=" + Date.now(),
              headers: {
                Referer: `https://${i}/`
              }
            };
          }
        }
      } catch (i) {}
      return {
        url: t
      };
    });
  }
  function ty(t) {
    return J(this, null, function* () {
      try {
        let n = yield ot(t, {
          headers: {
            Referer: "https://www.myvi.ru/"
          }
        });
        if (!n) {
          return {
            url: t
          };
        }
        let i = yield n.text();
        if (i.includes("eval(function(p,a,c,k,e,d)")) {
          i = _e(i);
        }
        let s = i.match(/["'](?:file|src|url|stream_url)["']\s*:\s*["']([^"']+\.(?:mp4|m3u8)[^"']*)["']/) || i.match(/["'](https?:\/\/[^"']+\.(?:mp4|m3u8)[^"']*)["']/) || i.match(/source\s+src=["']([^"']+\.(?:mp4|m3u8)[^"']*)/);
        if (s) {
          return {
            url: s[1],
            headers: {
              Referer: "https://www.myvi.ru/"
            }
          };
        }
        let o = t.match(/\/(?:embed\/|watch\/|video\/)([a-zA-Z0-9_-]+)/);
        if (o) {
          let c = `https://www.myvi.ru/api/video/${o[1]}`;
          let l = yield ot(c, {
            headers: {
              Referer: t
            }
          });
          if (l) {
            let d = (yield l.text()).match(/["'](?:url|src|file)["']\s*:\s*["']([^"']+\.(?:mp4|m3u8)[^"']*)["']/);
            if (d) {
              return {
                url: d[1],
                headers: {
                  Referer: "https://www.myvi.ru/"
                }
              };
            }
          }
        }
      } catch (n) {}
      return {
        url: t
      };
    });
  }
  function ey(t) {
    return J(this, null, function* () {
      var n;
      try {
        let i = ((n = t.match(/^https?:\/\/[^/]+/)) == null ? undefined : n[0]) || "https://younetu.org";
        let s = yield ot(t, {
          headers: {
            Referer: i + "/"
          }
        });
        if (!s) {
          return {
            url: t
          };
        }
        let o = yield s.text();
        if (o.includes("p,a,c,k,e,d") || o.includes("eval(function")) {
          o = _e(o);
        }
        let c = o.match(/src\s*:\s*["']([^"']+\.(?:m3u8|mp4)[^"']*)["']/i) || o.match(/file\s*:\s*["']([^"']+\.(?:m3u8|mp4)[^"']*)["']/i) || o.match(/sources\s*:\s*\[["']([^"']+\.(?:m3u8|mp4)[^"']*)["']\]/i) || o.match(/["'](https?:\/\/[^"']+\.(?:m3u8|mp4)[^"']*)["']/i);
        if (c) {
          return {
            url: c[1],
            headers: {
              Referer: i + "/"
            }
          };
        }
      } catch (i) {}
      return {
        url: t
      };
    });
  }
  function ry(t) {
    return J(this, null, function* () {
      try {
        let n = yield ot(t, {
          headers: {
            Referer: "https://vidoza.net/"
          }
        });
        if (!n) {
          return {
            url: t
          };
        }
        let i = yield n.text();
        let s = i.match(/src\s*:\s*["']([^"']+\.(?:mp4|m3u8)[^"']*)["']/i) || i.match(/file\s*:\s*["']([^"']+\.(?:mp4|m3u8)[^"']*)["']/i) || i.match(/["'](https?:\/\/[^"']+\.(?:mp4|m3u8)[^"']*)["']/i);
        if (s) {
          return {
            url: s[1],
            headers: {
              Referer: "https://vidoza.net/"
            }
          };
        }
      } catch (n) {}
      return {
        url: t
      };
    });
  }
  function ny(t) {
    return J(this, null, function* () {
      try {
        let n = yield ot(t);
        if (!n) {
          return {
            url: t
          };
        }
        let i = yield n.text();
        if (i.includes("p,a,c,k,e,d")) {
          i = _e(i);
        }
        let s = i.match(/file\s*:\s*["']([^"']+\.(?:mp4|m3u8)[^"']*)["']/);
        if (s) {
          return {
            url: s[1],
            headers: {
              Referer: t
            }
          };
        }
      } catch (n) {}
      return {
        url: t
      };
    });
  }
  function bl(t) {
    return J(this, null, function* () {
      var n;
      try {
        let i = ((n = t.match(/^https?:\/\/[^/]+/)) == null ? undefined : n[0]) || t;
        let s = yield ot(t, {
          headers: {
            Referer: i + "/"
          }
        });
        if (!s) {
          return {
            url: t
          };
        }
        let o = yield s.text();
        if (o.includes("p,a,c,k,e,d") || o.includes("eval(function")) {
          o = _e(o);
        }
        let c = o.match(/file\s*:\s*["']([^"']+\.(?:m3u8|mp4)[^"']*)["']/i) || o.match(/sources\s*:\s*\[[^\]]*?["'](https?:\/\/[^"']+\.(?:m3u8|mp4)[^"']*)["']/i) || o.match(/["'](https?:\/\/[^"']+\.(?:m3u8|mp4)[^"']*)["']/i);
        if (c) {
          return {
            url: c[1],
            headers: {
              Referer: i + "/"
            }
          };
        }
      } catch (i) {}
      return {
        url: t
      };
    });
  }
  function Ea(t, n = 0) {
    return J(this, null, function* () {
      var o;
      if (n > 3) {
        return Nt(gt({}, t), {
          isDirect: false
        });
      }
      let i = t.url;
      let s = i.toLowerCase();
      if (!i || i.includes("google-analytics") || i.includes("doubleclick")) {
        return null;
      }
      if (Ob(i)) {
        return Nt(gt({}, t), {
          isDirect: true
        });
      }
      try {
        let c = null;
        if (s.includes("sibnet.ru")) {
          c = yield Vb(i);
        } else if (s.includes("vidmoly.")) {
          c = yield zb(i);
        } else if (s.includes("uqload.") || s.includes("oneupload.")) {
          c = yield Xb(i);
        } else if (s.includes("voe") || s.includes("weneverbeenfree") || s.includes("maryspecialwatch") || s.includes("charlestoughrace") || s.includes("sandratableother")) {
          c = yield Yb(i);
        } else if (s.includes("streamtape.com") || s.includes("stape")) {
          c = yield Kb(i);
        } else if (s.includes("dood") || s.includes("ds2play") || s.includes("bigwar5")) {
          c = yield Qb(i);
        } else if (s.includes("moonplayer") || s.includes("filemoon")) {
          c = yield ny(i);
        } else if (s.includes("younetu.") || s.includes("netu.")) {
          c = yield ey(i);
        } else if (s.includes("vidoza.")) {
          c = yield ry(i);
        } else if (s.includes("sendvid.") || s.includes("daisukianime")) {
          c = yield jb(i);
        } else if (s.includes("myvi.") || s.includes("mytv.")) {
          c = yield ty(i);
        } else if (s.includes("fsvid.lol") || s.includes("vidzy.live") || s.includes("vidstream.pro") || s.includes("vidcdn.")) {
          c = yield bl(i);
        } else if (s.includes("luluvid.") || s.includes("lulustream.") || s.includes("luluvdo.") || s.includes("wishonly.") || s.includes("veev.")) {
          c = yield bl(i);
        } else if (s.includes("lulu.")) {
          c = yield Zb(i);
        } else if (s.includes("hgcloud.") || s.includes("savefiles.")) {
          c = yield Jb(i);
        }
        if (c && c.url !== i && !en(c.url)) {
          return Nt(gt({}, t), {
            url: c.url,
            headers: gt(gt({}, t.headers), c.headers || {}),
            isDirect: true,
            originalUrl: i
          });
        }
        if (!c || c.url === i) {
          let l = yield ot(i, {
            headers: t.headers
          });
          if (l) {
            let g = yield l.text();
            if (g.includes("p,a,c,k,e,d")) {
              g = _e(g);
            }
            let d = g.match(/window\.location\.(?:href|replace)\s*=\s*['"]([^'"]+)['"]/);
            if (d && d[1] !== i) {
              let A = yield ot(d[1], {
                headers: t.headers
              });
              if (A) {
                g = yield A.text();
                if (g.includes("p,a,c,k,e,d")) {
                  g = _e(g);
                }
              }
            }
            let v = g.match(/https?:\/\/[^"']+\.m3u8[^"']*/) || g.match(/https?:\/\/[^"']+\.mp4[^"']*/) || g.match(/file\s*:\s*["']([^"']+\.(?:m3u8|mp4)[^"']*)["']/i) || g.match(/sources\s*:\s*\[["']([^"']+\.(?:m3u8|mp4)[^"']*)["']\]/i) || g.match(/'hls'\s*:\s*'([^']+)'/) || g.match(/"hls"\s*:\s*"([^"]+)"/);
            if (v) {
              let A = v[1] || v[0];
              if (A.startsWith("//")) {
                A = "https:" + A;
              }
              let w = A.match(/\.(css|js|html|php|jpg|png|gif|svg)(\?.*)?$/i);
              if (A.startsWith("http") && !A.includes(iy) && !w && !en(A)) {
                c = {
                  url: A
                };
              }
            }
            if (!c) {
              let A = g.match(/<iframe\s+[^>]*src=["']([^"']+)["']/i);
              if (A) {
                let w = A[1];
                if (w.startsWith("//")) {
                  w = "https:" + w;
                }
                if (w.startsWith("/")) {
                  let T = (o = i.match(/^https?:\/\/[^\/]+/)) == null ? undefined : o[0];
                  if (T) {
                    w = T + w;
                  }
                }
                if (w.startsWith("http") && w !== i) {
                  console.log(`[Resolver] Peeling: Found nested iframe -> ${w}`);
                  return yield Ea(Nt(gt({}, t), {
                    url: w
                  }), n + 1);
                }
              }
            }
          }
        }
        if (c && c.url !== i && c.url.startsWith("http") && !en(c.url)) {
          return Nt(gt({}, t), {
            url: c.url,
            headers: gt(gt({}, t.headers), c.headers || {}),
            isDirect: true,
            originalUrl: i
          });
        }
      } catch (c) {}
      return Nt(gt({}, t), {
        isDirect: false
      });
    });
  }
  var yl;
  var Dl;
  var Al;
  var au;
  var ou;
  var Ib;
  var Cl;
  var kb;
  var iy;
  var rn = Un(() => {
    yl = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36",
      "Accept-Encoding": "identity"
    };
    Dl = t => {
      try {
        return atob(t);
      } catch (n) {
        return t;
      }
    };
    Al = ["AV1", "H.265", "H.264", "VP9"];
    au = [2160, 1080, 720, 480, 360, 240];
    ou = 360;
    Ib = {
      avc1: "H.264",
      h264: "H.264",
      hev1: "H.265",
      hvc1: "H.265",
      h265: "H.265",
      av01: "AV1",
      av1: "AV1",
      vp9: "VP9",
      vp09: "VP9",
      mp4a: "AAC",
      "ac-3": "AC3",
      "ec-3": "EAC3",
      opus: "Opus"
    };
    Cl = new Map();
    kb = 120000;
    iy = "googletagmanager";
  });
  function xa(i) {
    return J(this, arguments, function* (t, n = {}) {
      console.log(`[Anime-Sama] Fetching: ${t}`);
      let s = yield ot(t, gt({
        headers: gt(gt({}, uy), n.headers || {})
      }, n));
      if (!s || !s.ok) {
        let o = s && typeof s.status == "number" ? s.status : "no-response";
        throw new Error(`HTTP error ${o} for ${t}`);
      }
      return yield s.text();
    });
  }
  var uy;
  var Tl = Un(() => {
    rn();
    uy = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "Accept-Language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
      "Cache-Control": "max-age=0",
      "Sec-Ch-Ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
      "Sec-Ch-Ua-Mobile": "?0",
      "Sec-Ch-Ua-Platform": "\"Windows\"",
      "Sec-Fetch-Dest": "document",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-Site": "none",
      "Sec-Fetch-User": "?1",
      "Upgrade-Insecure-Requests": "1"
    };
  });
  var ql = O((aE, sy) => {
    sy.exports = {
      "0": 65533,
      "128": 8364,
      "130": 8218,
      "131": 402,
      "132": 8222,
      "133": 8230,
      "134": 8224,
      "135": 8225,
      "136": 710,
      "137": 8240,
      "138": 352,
      "139": 8249,
      "140": 338,
      "142": 381,
      "145": 8216,
      "146": 8217,
      "147": 8220,
      "148": 8221,
      "149": 8226,
      "150": 8211,
      "151": 8212,
      "152": 732,
      "153": 8482,
      "154": 353,
      "155": 8250,
      "156": 339,
      "158": 382,
      "159": 376
    };
  });
  var Ca = O((oE, Bl) => {
    var Ll = ql();
    Bl.exports = ay;
    function ay(t) {
      if (t >= 55296 && t <= 57343 || t > 1114111) {
        return "�";
      }
      if (t in Ll) {
        t = Ll[t];
      }
      var n = "";
      if (t > 65535) {
        t -= 65536;
        n += String.fromCharCode(t >>> 10 & 1023 | 55296);
        t = t & 1023 | 56320;
      }
      n += String.fromCharCode(t);
      return n;
    }
  });
  var fu = O((cE, oy) => {
    oy.exports = {
      Aacute: "Á",
      aacute: "á",
      Abreve: "Ă",
      abreve: "ă",
      ac: "∾",
      acd: "∿",
      acE: "∾̳",
      Acirc: "Â",
      acirc: "â",
      acute: "´",
      Acy: "А",
      acy: "а",
      AElig: "Æ",
      aelig: "æ",
      af: "⁡",
      Afr: "𝔄",
      afr: "𝔞",
      Agrave: "À",
      agrave: "à",
      alefsym: "ℵ",
      aleph: "ℵ",
      Alpha: "Α",
      alpha: "α",
      Amacr: "Ā",
      amacr: "ā",
      amalg: "⨿",
      amp: "&",
      AMP: "&",
      andand: "⩕",
      And: "⩓",
      and: "∧",
      andd: "⩜",
      andslope: "⩘",
      andv: "⩚",
      ang: "∠",
      ange: "⦤",
      angle: "∠",
      angmsdaa: "⦨",
      angmsdab: "⦩",
      angmsdac: "⦪",
      angmsdad: "⦫",
      angmsdae: "⦬",
      angmsdaf: "⦭",
      angmsdag: "⦮",
      angmsdah: "⦯",
      angmsd: "∡",
      angrt: "∟",
      angrtvb: "⊾",
      angrtvbd: "⦝",
      angsph: "∢",
      angst: "Å",
      angzarr: "⍼",
      Aogon: "Ą",
      aogon: "ą",
      Aopf: "𝔸",
      aopf: "𝕒",
      apacir: "⩯",
      ap: "≈",
      apE: "⩰",
      ape: "≊",
      apid: "≋",
      apos: "'",
      ApplyFunction: "⁡",
      approx: "≈",
      approxeq: "≊",
      Aring: "Å",
      aring: "å",
      Ascr: "𝒜",
      ascr: "𝒶",
      Assign: "≔",
      ast: "*",
      asymp: "≈",
      asympeq: "≍",
      Atilde: "Ã",
      atilde: "ã",
      Auml: "Ä",
      auml: "ä",
      awconint: "∳",
      awint: "⨑",
      backcong: "≌",
      backepsilon: "϶",
      backprime: "‵",
      backsim: "∽",
      backsimeq: "⋍",
      Backslash: "∖",
      Barv: "⫧",
      barvee: "⊽",
      barwed: "⌅",
      Barwed: "⌆",
      barwedge: "⌅",
      bbrk: "⎵",
      bbrktbrk: "⎶",
      bcong: "≌",
      Bcy: "Б",
      bcy: "б",
      bdquo: "„",
      becaus: "∵",
      because: "∵",
      Because: "∵",
      bemptyv: "⦰",
      bepsi: "϶",
      bernou: "ℬ",
      Bernoullis: "ℬ",
      Beta: "Β",
      beta: "β",
      beth: "ℶ",
      between: "≬",
      Bfr: "𝔅",
      bfr: "𝔟",
      bigcap: "⋂",
      bigcirc: "◯",
      bigcup: "⋃",
      bigodot: "⨀",
      bigoplus: "⨁",
      bigotimes: "⨂",
      bigsqcup: "⨆",
      bigstar: "★",
      bigtriangledown: "▽",
      bigtriangleup: "△",
      biguplus: "⨄",
      bigvee: "⋁",
      bigwedge: "⋀",
      bkarow: "⤍",
      blacklozenge: "⧫",
      blacksquare: "▪",
      blacktriangle: "▴",
      blacktriangledown: "▾",
      blacktriangleleft: "◂",
      blacktriangleright: "▸",
      blank: "␣",
      blk12: "▒",
      blk14: "░",
      blk34: "▓",
      block: "█",
      bne: "=⃥",
      bnequiv: "≡⃥",
      bNot: "⫭",
      bnot: "⌐",
      Bopf: "𝔹",
      bopf: "𝕓",
      bot: "⊥",
      bottom: "⊥",
      bowtie: "⋈",
      boxbox: "⧉",
      boxdl: "┐",
      boxdL: "╕",
      boxDl: "╖",
      boxDL: "╗",
      boxdr: "┌",
      boxdR: "╒",
      boxDr: "╓",
      boxDR: "╔",
      boxh: "─",
      boxH: "═",
      boxhd: "┬",
      boxHd: "╤",
      boxhD: "╥",
      boxHD: "╦",
      boxhu: "┴",
      boxHu: "╧",
      boxhU: "╨",
      boxHU: "╩",
      boxminus: "⊟",
      boxplus: "⊞",
      boxtimes: "⊠",
      boxul: "┘",
      boxuL: "╛",
      boxUl: "╜",
      boxUL: "╝",
      boxur: "└",
      boxuR: "╘",
      boxUr: "╙",
      boxUR: "╚",
      boxv: "│",
      boxV: "║",
      boxvh: "┼",
      boxvH: "╪",
      boxVh: "╫",
      boxVH: "╬",
      boxvl: "┤",
      boxvL: "╡",
      boxVl: "╢",
      boxVL: "╣",
      boxvr: "├",
      boxvR: "╞",
      boxVr: "╟",
      boxVR: "╠",
      bprime: "‵",
      breve: "˘",
      Breve: "˘",
      brvbar: "¦",
      bscr: "𝒷",
      Bscr: "ℬ",
      bsemi: "⁏",
      bsim: "∽",
      bsime: "⋍",
      bsolb: "⧅",
      bsol: "\\",
      bsolhsub: "⟈",
      bull: "•",
      bullet: "•",
      bump: "≎",
      bumpE: "⪮",
      bumpe: "≏",
      Bumpeq: "≎",
      bumpeq: "≏",
      Cacute: "Ć",
      cacute: "ć",
      capand: "⩄",
      capbrcup: "⩉",
      capcap: "⩋",
      cap: "∩",
      Cap: "⋒",
      capcup: "⩇",
      capdot: "⩀",
      CapitalDifferentialD: "ⅅ",
      caps: "∩︀",
      caret: "⁁",
      caron: "ˇ",
      Cayleys: "ℭ",
      ccaps: "⩍",
      Ccaron: "Č",
      ccaron: "č",
      Ccedil: "Ç",
      ccedil: "ç",
      Ccirc: "Ĉ",
      ccirc: "ĉ",
      Cconint: "∰",
      ccups: "⩌",
      ccupssm: "⩐",
      Cdot: "Ċ",
      cdot: "ċ",
      cedil: "¸",
      Cedilla: "¸",
      cemptyv: "⦲",
      cent: "¢",
      centerdot: "·",
      CenterDot: "·",
      cfr: "𝔠",
      Cfr: "ℭ",
      CHcy: "Ч",
      chcy: "ч",
      check: "✓",
      checkmark: "✓",
      Chi: "Χ",
      chi: "χ",
      circ: "ˆ",
      circeq: "≗",
      circlearrowleft: "↺",
      circlearrowright: "↻",
      circledast: "⊛",
      circledcirc: "⊚",
      circleddash: "⊝",
      CircleDot: "⊙",
      circledR: "®",
      circledS: "Ⓢ",
      CircleMinus: "⊖",
      CirclePlus: "⊕",
      CircleTimes: "⊗",
      cir: "○",
      cirE: "⧃",
      cire: "≗",
      cirfnint: "⨐",
      cirmid: "⫯",
      cirscir: "⧂",
      ClockwiseContourIntegral: "∲",
      CloseCurlyDoubleQuote: "”",
      CloseCurlyQuote: "’",
      clubs: "♣",
      clubsuit: "♣",
      colon: ":",
      Colon: "∷",
      Colone: "⩴",
      colone: "≔",
      coloneq: "≔",
      comma: ",",
      commat: "@",
      comp: "∁",
      compfn: "∘",
      complement: "∁",
      complexes: "ℂ",
      cong: "≅",
      congdot: "⩭",
      Congruent: "≡",
      conint: "∮",
      Conint: "∯",
      ContourIntegral: "∮",
      copf: "𝕔",
      Copf: "ℂ",
      coprod: "∐",
      Coproduct: "∐",
      copy: "©",
      COPY: "©",
      copysr: "℗",
      CounterClockwiseContourIntegral: "∳",
      crarr: "↵",
      cross: "✗",
      Cross: "⨯",
      Cscr: "𝒞",
      cscr: "𝒸",
      csub: "⫏",
      csube: "⫑",
      csup: "⫐",
      csupe: "⫒",
      ctdot: "⋯",
      cudarrl: "⤸",
      cudarrr: "⤵",
      cuepr: "⋞",
      cuesc: "⋟",
      cularr: "↶",
      cularrp: "⤽",
      cupbrcap: "⩈",
      cupcap: "⩆",
      CupCap: "≍",
      cup: "∪",
      Cup: "⋓",
      cupcup: "⩊",
      cupdot: "⊍",
      cupor: "⩅",
      cups: "∪︀",
      curarr: "↷",
      curarrm: "⤼",
      curlyeqprec: "⋞",
      curlyeqsucc: "⋟",
      curlyvee: "⋎",
      curlywedge: "⋏",
      curren: "¤",
      curvearrowleft: "↶",
      curvearrowright: "↷",
      cuvee: "⋎",
      cuwed: "⋏",
      cwconint: "∲",
      cwint: "∱",
      cylcty: "⌭",
      dagger: "†",
      Dagger: "‡",
      daleth: "ℸ",
      darr: "↓",
      Darr: "↡",
      dArr: "⇓",
      dash: "‐",
      Dashv: "⫤",
      dashv: "⊣",
      dbkarow: "⤏",
      dblac: "˝",
      Dcaron: "Ď",
      dcaron: "ď",
      Dcy: "Д",
      dcy: "д",
      ddagger: "‡",
      ddarr: "⇊",
      DD: "ⅅ",
      dd: "ⅆ",
      DDotrahd: "⤑",
      ddotseq: "⩷",
      deg: "°",
      Del: "∇",
      Delta: "Δ",
      delta: "δ",
      demptyv: "⦱",
      dfisht: "⥿",
      Dfr: "𝔇",
      dfr: "𝔡",
      dHar: "⥥",
      dharl: "⇃",
      dharr: "⇂",
      DiacriticalAcute: "´",
      DiacriticalDot: "˙",
      DiacriticalDoubleAcute: "˝",
      DiacriticalGrave: "`",
      DiacriticalTilde: "˜",
      diam: "⋄",
      diamond: "⋄",
      Diamond: "⋄",
      diamondsuit: "♦",
      diams: "♦",
      die: "¨",
      DifferentialD: "ⅆ",
      digamma: "ϝ",
      disin: "⋲",
      div: "÷",
      divide: "÷",
      divideontimes: "⋇",
      divonx: "⋇",
      DJcy: "Ђ",
      djcy: "ђ",
      dlcorn: "⌞",
      dlcrop: "⌍",
      dollar: "$",
      Dopf: "𝔻",
      dopf: "𝕕",
      Dot: "¨",
      dot: "˙",
      DotDot: "⃜",
      doteq: "≐",
      doteqdot: "≑",
      DotEqual: "≐",
      dotminus: "∸",
      dotplus: "∔",
      dotsquare: "⊡",
      doublebarwedge: "⌆",
      DoubleContourIntegral: "∯",
      DoubleDot: "¨",
      DoubleDownArrow: "⇓",
      DoubleLeftArrow: "⇐",
      DoubleLeftRightArrow: "⇔",
      DoubleLeftTee: "⫤",
      DoubleLongLeftArrow: "⟸",
      DoubleLongLeftRightArrow: "⟺",
      DoubleLongRightArrow: "⟹",
      DoubleRightArrow: "⇒",
      DoubleRightTee: "⊨",
      DoubleUpArrow: "⇑",
      DoubleUpDownArrow: "⇕",
      DoubleVerticalBar: "∥",
      DownArrowBar: "⤓",
      downarrow: "↓",
      DownArrow: "↓",
      Downarrow: "⇓",
      DownArrowUpArrow: "⇵",
      DownBreve: "̑",
      downdownarrows: "⇊",
      downharpoonleft: "⇃",
      downharpoonright: "⇂",
      DownLeftRightVector: "⥐",
      DownLeftTeeVector: "⥞",
      DownLeftVectorBar: "⥖",
      DownLeftVector: "↽",
      DownRightTeeVector: "⥟",
      DownRightVectorBar: "⥗",
      DownRightVector: "⇁",
      DownTeeArrow: "↧",
      DownTee: "⊤",
      drbkarow: "⤐",
      drcorn: "⌟",
      drcrop: "⌌",
      Dscr: "𝒟",
      dscr: "𝒹",
      DScy: "Ѕ",
      dscy: "ѕ",
      dsol: "⧶",
      Dstrok: "Đ",
      dstrok: "đ",
      dtdot: "⋱",
      dtri: "▿",
      dtrif: "▾",
      duarr: "⇵",
      duhar: "⥯",
      dwangle: "⦦",
      DZcy: "Џ",
      dzcy: "џ",
      dzigrarr: "⟿",
      Eacute: "É",
      eacute: "é",
      easter: "⩮",
      Ecaron: "Ě",
      ecaron: "ě",
      Ecirc: "Ê",
      ecirc: "ê",
      ecir: "≖",
      ecolon: "≕",
      Ecy: "Э",
      ecy: "э",
      eDDot: "⩷",
      Edot: "Ė",
      edot: "ė",
      eDot: "≑",
      ee: "ⅇ",
      efDot: "≒",
      Efr: "𝔈",
      efr: "𝔢",
      eg: "⪚",
      Egrave: "È",
      egrave: "è",
      egs: "⪖",
      egsdot: "⪘",
      el: "⪙",
      Element: "∈",
      elinters: "⏧",
      ell: "ℓ",
      els: "⪕",
      elsdot: "⪗",
      Emacr: "Ē",
      emacr: "ē",
      empty: "∅",
      emptyset: "∅",
      EmptySmallSquare: "◻",
      emptyv: "∅",
      EmptyVerySmallSquare: "▫",
      emsp13: "\u2004",
      emsp14: "\u2005",
      emsp: "\u2003",
      ENG: "Ŋ",
      eng: "ŋ",
      ensp: "\u2002",
      Eogon: "Ę",
      eogon: "ę",
      Eopf: "𝔼",
      eopf: "𝕖",
      epar: "⋕",
      eparsl: "⧣",
      eplus: "⩱",
      epsi: "ε",
      Epsilon: "Ε",
      epsilon: "ε",
      epsiv: "ϵ",
      eqcirc: "≖",
      eqcolon: "≕",
      eqsim: "≂",
      eqslantgtr: "⪖",
      eqslantless: "⪕",
      Equal: "⩵",
      equals: "=",
      EqualTilde: "≂",
      equest: "≟",
      Equilibrium: "⇌",
      equiv: "≡",
      equivDD: "⩸",
      eqvparsl: "⧥",
      erarr: "⥱",
      erDot: "≓",
      escr: "ℯ",
      Escr: "ℰ",
      esdot: "≐",
      Esim: "⩳",
      esim: "≂",
      Eta: "Η",
      eta: "η",
      ETH: "Ð",
      eth: "ð",
      Euml: "Ë",
      euml: "ë",
      euro: "€",
      excl: "!",
      exist: "∃",
      Exists: "∃",
      expectation: "ℰ",
      exponentiale: "ⅇ",
      ExponentialE: "ⅇ",
      fallingdotseq: "≒",
      Fcy: "Ф",
      fcy: "ф",
      female: "♀",
      ffilig: "ﬃ",
      fflig: "ﬀ",
      ffllig: "ﬄ",
      Ffr: "𝔉",
      ffr: "𝔣",
      filig: "ﬁ",
      FilledSmallSquare: "◼",
      FilledVerySmallSquare: "▪",
      fjlig: "fj",
      flat: "♭",
      fllig: "ﬂ",
      fltns: "▱",
      fnof: "ƒ",
      Fopf: "𝔽",
      fopf: "𝕗",
      forall: "∀",
      ForAll: "∀",
      fork: "⋔",
      forkv: "⫙",
      Fouriertrf: "ℱ",
      fpartint: "⨍",
      frac12: "½",
      frac13: "⅓",
      frac14: "¼",
      frac15: "⅕",
      frac16: "⅙",
      frac18: "⅛",
      frac23: "⅔",
      frac25: "⅖",
      frac34: "¾",
      frac35: "⅗",
      frac38: "⅜",
      frac45: "⅘",
      frac56: "⅚",
      frac58: "⅝",
      frac78: "⅞",
      frasl: "⁄",
      frown: "⌢",
      fscr: "𝒻",
      Fscr: "ℱ",
      gacute: "ǵ",
      Gamma: "Γ",
      gamma: "γ",
      Gammad: "Ϝ",
      gammad: "ϝ",
      gap: "⪆",
      Gbreve: "Ğ",
      gbreve: "ğ",
      Gcedil: "Ģ",
      Gcirc: "Ĝ",
      gcirc: "ĝ",
      Gcy: "Г",
      gcy: "г",
      Gdot: "Ġ",
      gdot: "ġ",
      ge: "≥",
      gE: "≧",
      gEl: "⪌",
      gel: "⋛",
      geq: "≥",
      geqq: "≧",
      geqslant: "⩾",
      gescc: "⪩",
      ges: "⩾",
      gesdot: "⪀",
      gesdoto: "⪂",
      gesdotol: "⪄",
      gesl: "⋛︀",
      gesles: "⪔",
      Gfr: "𝔊",
      gfr: "𝔤",
      gg: "≫",
      Gg: "⋙",
      ggg: "⋙",
      gimel: "ℷ",
      GJcy: "Ѓ",
      gjcy: "ѓ",
      gla: "⪥",
      gl: "≷",
      glE: "⪒",
      glj: "⪤",
      gnap: "⪊",
      gnapprox: "⪊",
      gne: "⪈",
      gnE: "≩",
      gneq: "⪈",
      gneqq: "≩",
      gnsim: "⋧",
      Gopf: "𝔾",
      gopf: "𝕘",
      grave: "`",
      GreaterEqual: "≥",
      GreaterEqualLess: "⋛",
      GreaterFullEqual: "≧",
      GreaterGreater: "⪢",
      GreaterLess: "≷",
      GreaterSlantEqual: "⩾",
      GreaterTilde: "≳",
      Gscr: "𝒢",
      gscr: "ℊ",
      gsim: "≳",
      gsime: "⪎",
      gsiml: "⪐",
      gtcc: "⪧",
      gtcir: "⩺",
      gt: ">",
      GT: ">",
      Gt: "≫",
      gtdot: "⋗",
      gtlPar: "⦕",
      gtquest: "⩼",
      gtrapprox: "⪆",
      gtrarr: "⥸",
      gtrdot: "⋗",
      gtreqless: "⋛",
      gtreqqless: "⪌",
      gtrless: "≷",
      gtrsim: "≳",
      gvertneqq: "≩︀",
      gvnE: "≩︀",
      Hacek: "ˇ",
      hairsp: "\u200A",
      half: "½",
      hamilt: "ℋ",
      HARDcy: "Ъ",
      hardcy: "ъ",
      harrcir: "⥈",
      harr: "↔",
      hArr: "⇔",
      harrw: "↭",
      Hat: "^",
      hbar: "ℏ",
      Hcirc: "Ĥ",
      hcirc: "ĥ",
      hearts: "♥",
      heartsuit: "♥",
      hellip: "…",
      hercon: "⊹",
      hfr: "𝔥",
      Hfr: "ℌ",
      HilbertSpace: "ℋ",
      hksearow: "⤥",
      hkswarow: "⤦",
      hoarr: "⇿",
      homtht: "∻",
      hookleftarrow: "↩",
      hookrightarrow: "↪",
      hopf: "𝕙",
      Hopf: "ℍ",
      horbar: "―",
      HorizontalLine: "─",
      hscr: "𝒽",
      Hscr: "ℋ",
      hslash: "ℏ",
      Hstrok: "Ħ",
      hstrok: "ħ",
      HumpDownHump: "≎",
      HumpEqual: "≏",
      hybull: "⁃",
      hyphen: "‐",
      Iacute: "Í",
      iacute: "í",
      ic: "⁣",
      Icirc: "Î",
      icirc: "î",
      Icy: "И",
      icy: "и",
      Idot: "İ",
      IEcy: "Е",
      iecy: "е",
      iexcl: "¡",
      iff: "⇔",
      ifr: "𝔦",
      Ifr: "ℑ",
      Igrave: "Ì",
      igrave: "ì",
      ii: "ⅈ",
      iiiint: "⨌",
      iiint: "∭",
      iinfin: "⧜",
      iiota: "℩",
      IJlig: "Ĳ",
      ijlig: "ĳ",
      Imacr: "Ī",
      imacr: "ī",
      image: "ℑ",
      ImaginaryI: "ⅈ",
      imagline: "ℐ",
      imagpart: "ℑ",
      imath: "ı",
      Im: "ℑ",
      imof: "⊷",
      imped: "Ƶ",
      Implies: "⇒",
      incare: "℅",
      in: "∈",
      infin: "∞",
      infintie: "⧝",
      inodot: "ı",
      intcal: "⊺",
      int: "∫",
      Int: "∬",
      integers: "ℤ",
      Integral: "∫",
      intercal: "⊺",
      Intersection: "⋂",
      intlarhk: "⨗",
      intprod: "⨼",
      InvisibleComma: "⁣",
      InvisibleTimes: "⁢",
      IOcy: "Ё",
      iocy: "ё",
      Iogon: "Į",
      iogon: "į",
      Iopf: "𝕀",
      iopf: "𝕚",
      Iota: "Ι",
      iota: "ι",
      iprod: "⨼",
      iquest: "¿",
      iscr: "𝒾",
      Iscr: "ℐ",
      isin: "∈",
      isindot: "⋵",
      isinE: "⋹",
      isins: "⋴",
      isinsv: "⋳",
      isinv: "∈",
      it: "⁢",
      Itilde: "Ĩ",
      itilde: "ĩ",
      Iukcy: "І",
      iukcy: "і",
      Iuml: "Ï",
      iuml: "ï",
      Jcirc: "Ĵ",
      jcirc: "ĵ",
      Jcy: "Й",
      jcy: "й",
      Jfr: "𝔍",
      jfr: "𝔧",
      jmath: "ȷ",
      Jopf: "𝕁",
      jopf: "𝕛",
      Jscr: "𝒥",
      jscr: "𝒿",
      Jsercy: "Ј",
      jsercy: "ј",
      Jukcy: "Є",
      jukcy: "є",
      Kappa: "Κ",
      kappa: "κ",
      kappav: "ϰ",
      Kcedil: "Ķ",
      kcedil: "ķ",
      Kcy: "К",
      kcy: "к",
      Kfr: "𝔎",
      kfr: "𝔨",
      kgreen: "ĸ",
      KHcy: "Х",
      khcy: "х",
      KJcy: "Ќ",
      kjcy: "ќ",
      Kopf: "𝕂",
      kopf: "𝕜",
      Kscr: "𝒦",
      kscr: "𝓀",
      lAarr: "⇚",
      Lacute: "Ĺ",
      lacute: "ĺ",
      laemptyv: "⦴",
      lagran: "ℒ",
      Lambda: "Λ",
      lambda: "λ",
      lang: "⟨",
      Lang: "⟪",
      langd: "⦑",
      langle: "⟨",
      lap: "⪅",
      Laplacetrf: "ℒ",
      laquo: "«",
      larrb: "⇤",
      larrbfs: "⤟",
      larr: "←",
      Larr: "↞",
      lArr: "⇐",
      larrfs: "⤝",
      larrhk: "↩",
      larrlp: "↫",
      larrpl: "⤹",
      larrsim: "⥳",
      larrtl: "↢",
      latail: "⤙",
      lAtail: "⤛",
      lat: "⪫",
      late: "⪭",
      lates: "⪭︀",
      lbarr: "⤌",
      lBarr: "⤎",
      lbbrk: "❲",
      lbrace: "{",
      lbrack: "[",
      lbrke: "⦋",
      lbrksld: "⦏",
      lbrkslu: "⦍",
      Lcaron: "Ľ",
      lcaron: "ľ",
      Lcedil: "Ļ",
      lcedil: "ļ",
      lceil: "⌈",
      lcub: "{",
      Lcy: "Л",
      lcy: "л",
      ldca: "⤶",
      ldquo: "“",
      ldquor: "„",
      ldrdhar: "⥧",
      ldrushar: "⥋",
      ldsh: "↲",
      le: "≤",
      lE: "≦",
      LeftAngleBracket: "⟨",
      LeftArrowBar: "⇤",
      leftarrow: "←",
      LeftArrow: "←",
      Leftarrow: "⇐",
      LeftArrowRightArrow: "⇆",
      leftarrowtail: "↢",
      LeftCeiling: "⌈",
      LeftDoubleBracket: "⟦",
      LeftDownTeeVector: "⥡",
      LeftDownVectorBar: "⥙",
      LeftDownVector: "⇃",
      LeftFloor: "⌊",
      leftharpoondown: "↽",
      leftharpoonup: "↼",
      leftleftarrows: "⇇",
      leftrightarrow: "↔",
      LeftRightArrow: "↔",
      Leftrightarrow: "⇔",
      leftrightarrows: "⇆",
      leftrightharpoons: "⇋",
      leftrightsquigarrow: "↭",
      LeftRightVector: "⥎",
      LeftTeeArrow: "↤",
      LeftTee: "⊣",
      LeftTeeVector: "⥚",
      leftthreetimes: "⋋",
      LeftTriangleBar: "⧏",
      LeftTriangle: "⊲",
      LeftTriangleEqual: "⊴",
      LeftUpDownVector: "⥑",
      LeftUpTeeVector: "⥠",
      LeftUpVectorBar: "⥘",
      LeftUpVector: "↿",
      LeftVectorBar: "⥒",
      LeftVector: "↼",
      lEg: "⪋",
      leg: "⋚",
      leq: "≤",
      leqq: "≦",
      leqslant: "⩽",
      lescc: "⪨",
      les: "⩽",
      lesdot: "⩿",
      lesdoto: "⪁",
      lesdotor: "⪃",
      lesg: "⋚︀",
      lesges: "⪓",
      lessapprox: "⪅",
      lessdot: "⋖",
      lesseqgtr: "⋚",
      lesseqqgtr: "⪋",
      LessEqualGreater: "⋚",
      LessFullEqual: "≦",
      LessGreater: "≶",
      lessgtr: "≶",
      LessLess: "⪡",
      lesssim: "≲",
      LessSlantEqual: "⩽",
      LessTilde: "≲",
      lfisht: "⥼",
      lfloor: "⌊",
      Lfr: "𝔏",
      lfr: "𝔩",
      lg: "≶",
      lgE: "⪑",
      lHar: "⥢",
      lhard: "↽",
      lharu: "↼",
      lharul: "⥪",
      lhblk: "▄",
      LJcy: "Љ",
      ljcy: "љ",
      llarr: "⇇",
      ll: "≪",
      Ll: "⋘",
      llcorner: "⌞",
      Lleftarrow: "⇚",
      llhard: "⥫",
      lltri: "◺",
      Lmidot: "Ŀ",
      lmidot: "ŀ",
      lmoustache: "⎰",
      lmoust: "⎰",
      lnap: "⪉",
      lnapprox: "⪉",
      lne: "⪇",
      lnE: "≨",
      lneq: "⪇",
      lneqq: "≨",
      lnsim: "⋦",
      loang: "⟬",
      loarr: "⇽",
      lobrk: "⟦",
      longleftarrow: "⟵",
      LongLeftArrow: "⟵",
      Longleftarrow: "⟸",
      longleftrightarrow: "⟷",
      LongLeftRightArrow: "⟷",
      Longleftrightarrow: "⟺",
      longmapsto: "⟼",
      longrightarrow: "⟶",
      LongRightArrow: "⟶",
      Longrightarrow: "⟹",
      looparrowleft: "↫",
      looparrowright: "↬",
      lopar: "⦅",
      Lopf: "𝕃",
      lopf: "𝕝",
      loplus: "⨭",
      lotimes: "⨴",
      lowast: "∗",
      lowbar: "_",
      LowerLeftArrow: "↙",
      LowerRightArrow: "↘",
      loz: "◊",
      lozenge: "◊",
      lozf: "⧫",
      lpar: "(",
      lparlt: "⦓",
      lrarr: "⇆",
      lrcorner: "⌟",
      lrhar: "⇋",
      lrhard: "⥭",
      lrm: "‎",
      lrtri: "⊿",
      lsaquo: "‹",
      lscr: "𝓁",
      Lscr: "ℒ",
      lsh: "↰",
      Lsh: "↰",
      lsim: "≲",
      lsime: "⪍",
      lsimg: "⪏",
      lsqb: "[",
      lsquo: "‘",
      lsquor: "‚",
      Lstrok: "Ł",
      lstrok: "ł",
      ltcc: "⪦",
      ltcir: "⩹",
      lt: "<",
      LT: "<",
      Lt: "≪",
      ltdot: "⋖",
      lthree: "⋋",
      ltimes: "⋉",
      ltlarr: "⥶",
      ltquest: "⩻",
      ltri: "◃",
      ltrie: "⊴",
      ltrif: "◂",
      ltrPar: "⦖",
      lurdshar: "⥊",
      luruhar: "⥦",
      lvertneqq: "≨︀",
      lvnE: "≨︀",
      macr: "¯",
      male: "♂",
      malt: "✠",
      maltese: "✠",
      Map: "⤅",
      map: "↦",
      mapsto: "↦",
      mapstodown: "↧",
      mapstoleft: "↤",
      mapstoup: "↥",
      marker: "▮",
      mcomma: "⨩",
      Mcy: "М",
      mcy: "м",
      mdash: "—",
      mDDot: "∺",
      measuredangle: "∡",
      MediumSpace: "\u205F",
      Mellintrf: "ℳ",
      Mfr: "𝔐",
      mfr: "𝔪",
      mho: "℧",
      micro: "µ",
      midast: "*",
      midcir: "⫰",
      mid: "∣",
      middot: "·",
      minusb: "⊟",
      minus: "−",
      minusd: "∸",
      minusdu: "⨪",
      MinusPlus: "∓",
      mlcp: "⫛",
      mldr: "…",
      mnplus: "∓",
      models: "⊧",
      Mopf: "𝕄",
      mopf: "𝕞",
      mp: "∓",
      mscr: "𝓂",
      Mscr: "ℳ",
      mstpos: "∾",
      Mu: "Μ",
      mu: "μ",
      multimap: "⊸",
      mumap: "⊸",
      nabla: "∇",
      Nacute: "Ń",
      nacute: "ń",
      nang: "∠⃒",
      nap: "≉",
      napE: "⩰̸",
      napid: "≋̸",
      napos: "ŉ",
      napprox: "≉",
      natural: "♮",
      naturals: "ℕ",
      natur: "♮",
      nbsp: "\xA0",
      nbump: "≎̸",
      nbumpe: "≏̸",
      ncap: "⩃",
      Ncaron: "Ň",
      ncaron: "ň",
      Ncedil: "Ņ",
      ncedil: "ņ",
      ncong: "≇",
      ncongdot: "⩭̸",
      ncup: "⩂",
      Ncy: "Н",
      ncy: "н",
      ndash: "–",
      nearhk: "⤤",
      nearr: "↗",
      neArr: "⇗",
      nearrow: "↗",
      ne: "≠",
      nedot: "≐̸",
      NegativeMediumSpace: "​",
      NegativeThickSpace: "​",
      NegativeThinSpace: "​",
      NegativeVeryThinSpace: "​",
      nequiv: "≢",
      nesear: "⤨",
      nesim: "≂̸",
      NestedGreaterGreater: "≫",
      NestedLessLess: "≪",
      NewLine: `
`,
      nexist: "∄",
      nexists: "∄",
      Nfr: "𝔑",
      nfr: "𝔫",
      ngE: "≧̸",
      nge: "≱",
      ngeq: "≱",
      ngeqq: "≧̸",
      ngeqslant: "⩾̸",
      nges: "⩾̸",
      nGg: "⋙̸",
      ngsim: "≵",
      nGt: "≫⃒",
      ngt: "≯",
      ngtr: "≯",
      nGtv: "≫̸",
      nharr: "↮",
      nhArr: "⇎",
      nhpar: "⫲",
      ni: "∋",
      nis: "⋼",
      nisd: "⋺",
      niv: "∋",
      NJcy: "Њ",
      njcy: "њ",
      nlarr: "↚",
      nlArr: "⇍",
      nldr: "‥",
      nlE: "≦̸",
      nle: "≰",
      nleftarrow: "↚",
      nLeftarrow: "⇍",
      nleftrightarrow: "↮",
      nLeftrightarrow: "⇎",
      nleq: "≰",
      nleqq: "≦̸",
      nleqslant: "⩽̸",
      nles: "⩽̸",
      nless: "≮",
      nLl: "⋘̸",
      nlsim: "≴",
      nLt: "≪⃒",
      nlt: "≮",
      nltri: "⋪",
      nltrie: "⋬",
      nLtv: "≪̸",
      nmid: "∤",
      NoBreak: "⁠",
      NonBreakingSpace: "\xA0",
      nopf: "𝕟",
      Nopf: "ℕ",
      Not: "⫬",
      not: "¬",
      NotCongruent: "≢",
      NotCupCap: "≭",
      NotDoubleVerticalBar: "∦",
      NotElement: "∉",
      NotEqual: "≠",
      NotEqualTilde: "≂̸",
      NotExists: "∄",
      NotGreater: "≯",
      NotGreaterEqual: "≱",
      NotGreaterFullEqual: "≧̸",
      NotGreaterGreater: "≫̸",
      NotGreaterLess: "≹",
      NotGreaterSlantEqual: "⩾̸",
      NotGreaterTilde: "≵",
      NotHumpDownHump: "≎̸",
      NotHumpEqual: "≏̸",
      notin: "∉",
      notindot: "⋵̸",
      notinE: "⋹̸",
      notinva: "∉",
      notinvb: "⋷",
      notinvc: "⋶",
      NotLeftTriangleBar: "⧏̸",
      NotLeftTriangle: "⋪",
      NotLeftTriangleEqual: "⋬",
      NotLess: "≮",
      NotLessEqual: "≰",
      NotLessGreater: "≸",
      NotLessLess: "≪̸",
      NotLessSlantEqual: "⩽̸",
      NotLessTilde: "≴",
      NotNestedGreaterGreater: "⪢̸",
      NotNestedLessLess: "⪡̸",
      notni: "∌",
      notniva: "∌",
      notnivb: "⋾",
      notnivc: "⋽",
      NotPrecedes: "⊀",
      NotPrecedesEqual: "⪯̸",
      NotPrecedesSlantEqual: "⋠",
      NotReverseElement: "∌",
      NotRightTriangleBar: "⧐̸",
      NotRightTriangle: "⋫",
      NotRightTriangleEqual: "⋭",
      NotSquareSubset: "⊏̸",
      NotSquareSubsetEqual: "⋢",
      NotSquareSuperset: "⊐̸",
      NotSquareSupersetEqual: "⋣",
      NotSubset: "⊂⃒",
      NotSubsetEqual: "⊈",
      NotSucceeds: "⊁",
      NotSucceedsEqual: "⪰̸",
      NotSucceedsSlantEqual: "⋡",
      NotSucceedsTilde: "≿̸",
      NotSuperset: "⊃⃒",
      NotSupersetEqual: "⊉",
      NotTilde: "≁",
      NotTildeEqual: "≄",
      NotTildeFullEqual: "≇",
      NotTildeTilde: "≉",
      NotVerticalBar: "∤",
      nparallel: "∦",
      npar: "∦",
      nparsl: "⫽⃥",
      npart: "∂̸",
      npolint: "⨔",
      npr: "⊀",
      nprcue: "⋠",
      nprec: "⊀",
      npreceq: "⪯̸",
      npre: "⪯̸",
      nrarrc: "⤳̸",
      nrarr: "↛",
      nrArr: "⇏",
      nrarrw: "↝̸",
      nrightarrow: "↛",
      nRightarrow: "⇏",
      nrtri: "⋫",
      nrtrie: "⋭",
      nsc: "⊁",
      nsccue: "⋡",
      nsce: "⪰̸",
      Nscr: "𝒩",
      nscr: "𝓃",
      nshortmid: "∤",
      nshortparallel: "∦",
      nsim: "≁",
      nsime: "≄",
      nsimeq: "≄",
      nsmid: "∤",
      nspar: "∦",
      nsqsube: "⋢",
      nsqsupe: "⋣",
      nsub: "⊄",
      nsubE: "⫅̸",
      nsube: "⊈",
      nsubset: "⊂⃒",
      nsubseteq: "⊈",
      nsubseteqq: "⫅̸",
      nsucc: "⊁",
      nsucceq: "⪰̸",
      nsup: "⊅",
      nsupE: "⫆̸",
      nsupe: "⊉",
      nsupset: "⊃⃒",
      nsupseteq: "⊉",
      nsupseteqq: "⫆̸",
      ntgl: "≹",
      Ntilde: "Ñ",
      ntilde: "ñ",
      ntlg: "≸",
      ntriangleleft: "⋪",
      ntrianglelefteq: "⋬",
      ntriangleright: "⋫",
      ntrianglerighteq: "⋭",
      Nu: "Ν",
      nu: "ν",
      num: "#",
      numero: "№",
      numsp: "\u2007",
      nvap: "≍⃒",
      nvdash: "⊬",
      nvDash: "⊭",
      nVdash: "⊮",
      nVDash: "⊯",
      nvge: "≥⃒",
      nvgt: ">⃒",
      nvHarr: "⤄",
      nvinfin: "⧞",
      nvlArr: "⤂",
      nvle: "≤⃒",
      nvlt: "<⃒",
      nvltrie: "⊴⃒",
      nvrArr: "⤃",
      nvrtrie: "⊵⃒",
      nvsim: "∼⃒",
      nwarhk: "⤣",
      nwarr: "↖",
      nwArr: "⇖",
      nwarrow: "↖",
      nwnear: "⤧",
      Oacute: "Ó",
      oacute: "ó",
      oast: "⊛",
      Ocirc: "Ô",
      ocirc: "ô",
      ocir: "⊚",
      Ocy: "О",
      ocy: "о",
      odash: "⊝",
      Odblac: "Ő",
      odblac: "ő",
      odiv: "⨸",
      odot: "⊙",
      odsold: "⦼",
      OElig: "Œ",
      oelig: "œ",
      ofcir: "⦿",
      Ofr: "𝔒",
      ofr: "𝔬",
      ogon: "˛",
      Ograve: "Ò",
      ograve: "ò",
      ogt: "⧁",
      ohbar: "⦵",
      ohm: "Ω",
      oint: "∮",
      olarr: "↺",
      olcir: "⦾",
      olcross: "⦻",
      oline: "‾",
      olt: "⧀",
      Omacr: "Ō",
      omacr: "ō",
      Omega: "Ω",
      omega: "ω",
      Omicron: "Ο",
      omicron: "ο",
      omid: "⦶",
      ominus: "⊖",
      Oopf: "𝕆",
      oopf: "𝕠",
      opar: "⦷",
      OpenCurlyDoubleQuote: "“",
      OpenCurlyQuote: "‘",
      operp: "⦹",
      oplus: "⊕",
      orarr: "↻",
      Or: "⩔",
      or: "∨",
      ord: "⩝",
      order: "ℴ",
      orderof: "ℴ",
      ordf: "ª",
      ordm: "º",
      origof: "⊶",
      oror: "⩖",
      orslope: "⩗",
      orv: "⩛",
      oS: "Ⓢ",
      Oscr: "𝒪",
      oscr: "ℴ",
      Oslash: "Ø",
      oslash: "ø",
      osol: "⊘",
      Otilde: "Õ",
      otilde: "õ",
      otimesas: "⨶",
      Otimes: "⨷",
      otimes: "⊗",
      Ouml: "Ö",
      ouml: "ö",
      ovbar: "⌽",
      OverBar: "‾",
      OverBrace: "⏞",
      OverBracket: "⎴",
      OverParenthesis: "⏜",
      para: "¶",
      parallel: "∥",
      par: "∥",
      parsim: "⫳",
      parsl: "⫽",
      part: "∂",
      PartialD: "∂",
      Pcy: "П",
      pcy: "п",
      percnt: "%",
      period: ".",
      permil: "‰",
      perp: "⊥",
      pertenk: "‱",
      Pfr: "𝔓",
      pfr: "𝔭",
      Phi: "Φ",
      phi: "φ",
      phiv: "ϕ",
      phmmat: "ℳ",
      phone: "☎",
      Pi: "Π",
      pi: "π",
      pitchfork: "⋔",
      piv: "ϖ",
      planck: "ℏ",
      planckh: "ℎ",
      plankv: "ℏ",
      plusacir: "⨣",
      plusb: "⊞",
      pluscir: "⨢",
      plus: "+",
      plusdo: "∔",
      plusdu: "⨥",
      pluse: "⩲",
      PlusMinus: "±",
      plusmn: "±",
      plussim: "⨦",
      plustwo: "⨧",
      pm: "±",
      Poincareplane: "ℌ",
      pointint: "⨕",
      popf: "𝕡",
      Popf: "ℙ",
      pound: "£",
      prap: "⪷",
      Pr: "⪻",
      pr: "≺",
      prcue: "≼",
      precapprox: "⪷",
      prec: "≺",
      preccurlyeq: "≼",
      Precedes: "≺",
      PrecedesEqual: "⪯",
      PrecedesSlantEqual: "≼",
      PrecedesTilde: "≾",
      preceq: "⪯",
      precnapprox: "⪹",
      precneqq: "⪵",
      precnsim: "⋨",
      pre: "⪯",
      prE: "⪳",
      precsim: "≾",
      prime: "′",
      Prime: "″",
      primes: "ℙ",
      prnap: "⪹",
      prnE: "⪵",
      prnsim: "⋨",
      prod: "∏",
      Product: "∏",
      profalar: "⌮",
      profline: "⌒",
      profsurf: "⌓",
      prop: "∝",
      Proportional: "∝",
      Proportion: "∷",
      propto: "∝",
      prsim: "≾",
      prurel: "⊰",
      Pscr: "𝒫",
      pscr: "𝓅",
      Psi: "Ψ",
      psi: "ψ",
      puncsp: "\u2008",
      Qfr: "𝔔",
      qfr: "𝔮",
      qint: "⨌",
      qopf: "𝕢",
      Qopf: "ℚ",
      qprime: "⁗",
      Qscr: "𝒬",
      qscr: "𝓆",
      quaternions: "ℍ",
      quatint: "⨖",
      quest: "?",
      questeq: "≟",
      quot: "\"",
      QUOT: "\"",
      rAarr: "⇛",
      race: "∽̱",
      Racute: "Ŕ",
      racute: "ŕ",
      radic: "√",
      raemptyv: "⦳",
      rang: "⟩",
      Rang: "⟫",
      rangd: "⦒",
      range: "⦥",
      rangle: "⟩",
      raquo: "»",
      rarrap: "⥵",
      rarrb: "⇥",
      rarrbfs: "⤠",
      rarrc: "⤳",
      rarr: "→",
      Rarr: "↠",
      rArr: "⇒",
      rarrfs: "⤞",
      rarrhk: "↪",
      rarrlp: "↬",
      rarrpl: "⥅",
      rarrsim: "⥴",
      Rarrtl: "⤖",
      rarrtl: "↣",
      rarrw: "↝",
      ratail: "⤚",
      rAtail: "⤜",
      ratio: "∶",
      rationals: "ℚ",
      rbarr: "⤍",
      rBarr: "⤏",
      RBarr: "⤐",
      rbbrk: "❳",
      rbrace: "}",
      rbrack: "]",
      rbrke: "⦌",
      rbrksld: "⦎",
      rbrkslu: "⦐",
      Rcaron: "Ř",
      rcaron: "ř",
      Rcedil: "Ŗ",
      rcedil: "ŗ",
      rceil: "⌉",
      rcub: "}",
      Rcy: "Р",
      rcy: "р",
      rdca: "⤷",
      rdldhar: "⥩",
      rdquo: "”",
      rdquor: "”",
      rdsh: "↳",
      real: "ℜ",
      realine: "ℛ",
      realpart: "ℜ",
      reals: "ℝ",
      Re: "ℜ",
      rect: "▭",
      reg: "®",
      REG: "®",
      ReverseElement: "∋",
      ReverseEquilibrium: "⇋",
      ReverseUpEquilibrium: "⥯",
      rfisht: "⥽",
      rfloor: "⌋",
      rfr: "𝔯",
      Rfr: "ℜ",
      rHar: "⥤",
      rhard: "⇁",
      rharu: "⇀",
      rharul: "⥬",
      Rho: "Ρ",
      rho: "ρ",
      rhov: "ϱ",
      RightAngleBracket: "⟩",
      RightArrowBar: "⇥",
      rightarrow: "→",
      RightArrow: "→",
      Rightarrow: "⇒",
      RightArrowLeftArrow: "⇄",
      rightarrowtail: "↣",
      RightCeiling: "⌉",
      RightDoubleBracket: "⟧",
      RightDownTeeVector: "⥝",
      RightDownVectorBar: "⥕",
      RightDownVector: "⇂",
      RightFloor: "⌋",
      rightharpoondown: "⇁",
      rightharpoonup: "⇀",
      rightleftarrows: "⇄",
      rightleftharpoons: "⇌",
      rightrightarrows: "⇉",
      rightsquigarrow: "↝",
      RightTeeArrow: "↦",
      RightTee: "⊢",
      RightTeeVector: "⥛",
      rightthreetimes: "⋌",
      RightTriangleBar: "⧐",
      RightTriangle: "⊳",
      RightTriangleEqual: "⊵",
      RightUpDownVector: "⥏",
      RightUpTeeVector: "⥜",
      RightUpVectorBar: "⥔",
      RightUpVector: "↾",
      RightVectorBar: "⥓",
      RightVector: "⇀",
      ring: "˚",
      risingdotseq: "≓",
      rlarr: "⇄",
      rlhar: "⇌",
      rlm: "‏",
      rmoustache: "⎱",
      rmoust: "⎱",
      rnmid: "⫮",
      roang: "⟭",
      roarr: "⇾",
      robrk: "⟧",
      ropar: "⦆",
      ropf: "𝕣",
      Ropf: "ℝ",
      roplus: "⨮",
      rotimes: "⨵",
      RoundImplies: "⥰",
      rpar: ")",
      rpargt: "⦔",
      rppolint: "⨒",
      rrarr: "⇉",
      Rrightarrow: "⇛",
      rsaquo: "›",
      rscr: "𝓇",
      Rscr: "ℛ",
      rsh: "↱",
      Rsh: "↱",
      rsqb: "]",
      rsquo: "’",
      rsquor: "’",
      rthree: "⋌",
      rtimes: "⋊",
      rtri: "▹",
      rtrie: "⊵",
      rtrif: "▸",
      rtriltri: "⧎",
      RuleDelayed: "⧴",
      ruluhar: "⥨",
      rx: "℞",
      Sacute: "Ś",
      sacute: "ś",
      sbquo: "‚",
      scap: "⪸",
      Scaron: "Š",
      scaron: "š",
      Sc: "⪼",
      sc: "≻",
      sccue: "≽",
      sce: "⪰",
      scE: "⪴",
      Scedil: "Ş",
      scedil: "ş",
      Scirc: "Ŝ",
      scirc: "ŝ",
      scnap: "⪺",
      scnE: "⪶",
      scnsim: "⋩",
      scpolint: "⨓",
      scsim: "≿",
      Scy: "С",
      scy: "с",
      sdotb: "⊡",
      sdot: "⋅",
      sdote: "⩦",
      searhk: "⤥",
      searr: "↘",
      seArr: "⇘",
      searrow: "↘",
      sect: "§",
      semi: ";",
      seswar: "⤩",
      setminus: "∖",
      setmn: "∖",
      sext: "✶",
      Sfr: "𝔖",
      sfr: "𝔰",
      sfrown: "⌢",
      sharp: "♯",
      SHCHcy: "Щ",
      shchcy: "щ",
      SHcy: "Ш",
      shcy: "ш",
      ShortDownArrow: "↓",
      ShortLeftArrow: "←",
      shortmid: "∣",
      shortparallel: "∥",
      ShortRightArrow: "→",
      ShortUpArrow: "↑",
      shy: "­",
      Sigma: "Σ",
      sigma: "σ",
      sigmaf: "ς",
      sigmav: "ς",
      sim: "∼",
      simdot: "⩪",
      sime: "≃",
      simeq: "≃",
      simg: "⪞",
      simgE: "⪠",
      siml: "⪝",
      simlE: "⪟",
      simne: "≆",
      simplus: "⨤",
      simrarr: "⥲",
      slarr: "←",
      SmallCircle: "∘",
      smallsetminus: "∖",
      smashp: "⨳",
      smeparsl: "⧤",
      smid: "∣",
      smile: "⌣",
      smt: "⪪",
      smte: "⪬",
      smtes: "⪬︀",
      SOFTcy: "Ь",
      softcy: "ь",
      solbar: "⌿",
      solb: "⧄",
      sol: "/",
      Sopf: "𝕊",
      sopf: "𝕤",
      spades: "♠",
      spadesuit: "♠",
      spar: "∥",
      sqcap: "⊓",
      sqcaps: "⊓︀",
      sqcup: "⊔",
      sqcups: "⊔︀",
      Sqrt: "√",
      sqsub: "⊏",
      sqsube: "⊑",
      sqsubset: "⊏",
      sqsubseteq: "⊑",
      sqsup: "⊐",
      sqsupe: "⊒",
      sqsupset: "⊐",
      sqsupseteq: "⊒",
      square: "□",
      Square: "□",
      SquareIntersection: "⊓",
      SquareSubset: "⊏",
      SquareSubsetEqual: "⊑",
      SquareSuperset: "⊐",
      SquareSupersetEqual: "⊒",
      SquareUnion: "⊔",
      squarf: "▪",
      squ: "□",
      squf: "▪",
      srarr: "→",
      Sscr: "𝒮",
      sscr: "𝓈",
      ssetmn: "∖",
      ssmile: "⌣",
      sstarf: "⋆",
      Star: "⋆",
      star: "☆",
      starf: "★",
      straightepsilon: "ϵ",
      straightphi: "ϕ",
      strns: "¯",
      sub: "⊂",
      Sub: "⋐",
      subdot: "⪽",
      subE: "⫅",
      sube: "⊆",
      subedot: "⫃",
      submult: "⫁",
      subnE: "⫋",
      subne: "⊊",
      subplus: "⪿",
      subrarr: "⥹",
      subset: "⊂",
      Subset: "⋐",
      subseteq: "⊆",
      subseteqq: "⫅",
      SubsetEqual: "⊆",
      subsetneq: "⊊",
      subsetneqq: "⫋",
      subsim: "⫇",
      subsub: "⫕",
      subsup: "⫓",
      succapprox: "⪸",
      succ: "≻",
      succcurlyeq: "≽",
      Succeeds: "≻",
      SucceedsEqual: "⪰",
      SucceedsSlantEqual: "≽",
      SucceedsTilde: "≿",
      succeq: "⪰",
      succnapprox: "⪺",
      succneqq: "⪶",
      succnsim: "⋩",
      succsim: "≿",
      SuchThat: "∋",
      sum: "∑",
      Sum: "∑",
      sung: "♪",
      sup1: "¹",
      sup2: "²",
      sup3: "³",
      sup: "⊃",
      Sup: "⋑",
      supdot: "⪾",
      supdsub: "⫘",
      supE: "⫆",
      supe: "⊇",
      supedot: "⫄",
      Superset: "⊃",
      SupersetEqual: "⊇",
      suphsol: "⟉",
      suphsub: "⫗",
      suplarr: "⥻",
      supmult: "⫂",
      supnE: "⫌",
      supne: "⊋",
      supplus: "⫀",
      supset: "⊃",
      Supset: "⋑",
      supseteq: "⊇",
      supseteqq: "⫆",
      supsetneq: "⊋",
      supsetneqq: "⫌",
      supsim: "⫈",
      supsub: "⫔",
      supsup: "⫖",
      swarhk: "⤦",
      swarr: "↙",
      swArr: "⇙",
      swarrow: "↙",
      swnwar: "⤪",
      szlig: "ß",
      Tab: "\t",
      target: "⌖",
      Tau: "Τ",
      tau: "τ",
      tbrk: "⎴",
      Tcaron: "Ť",
      tcaron: "ť",
      Tcedil: "Ţ",
      tcedil: "ţ",
      Tcy: "Т",
      tcy: "т",
      tdot: "⃛",
      telrec: "⌕",
      Tfr: "𝔗",
      tfr: "𝔱",
      there4: "∴",
      therefore: "∴",
      Therefore: "∴",
      Theta: "Θ",
      theta: "θ",
      thetasym: "ϑ",
      thetav: "ϑ",
      thickapprox: "≈",
      thicksim: "∼",
      ThickSpace: "\u205F\u200A",
      ThinSpace: "\u2009",
      thinsp: "\u2009",
      thkap: "≈",
      thksim: "∼",
      THORN: "Þ",
      thorn: "þ",
      tilde: "˜",
      Tilde: "∼",
      TildeEqual: "≃",
      TildeFullEqual: "≅",
      TildeTilde: "≈",
      timesbar: "⨱",
      timesb: "⊠",
      times: "×",
      timesd: "⨰",
      tint: "∭",
      toea: "⤨",
      topbot: "⌶",
      topcir: "⫱",
      top: "⊤",
      Topf: "𝕋",
      topf: "𝕥",
      topfork: "⫚",
      tosa: "⤩",
      tprime: "‴",
      trade: "™",
      TRADE: "™",
      triangle: "▵",
      triangledown: "▿",
      triangleleft: "◃",
      trianglelefteq: "⊴",
      triangleq: "≜",
      triangleright: "▹",
      trianglerighteq: "⊵",
      tridot: "◬",
      trie: "≜",
      triminus: "⨺",
      TripleDot: "⃛",
      triplus: "⨹",
      trisb: "⧍",
      tritime: "⨻",
      trpezium: "⏢",
      Tscr: "𝒯",
      tscr: "𝓉",
      TScy: "Ц",
      tscy: "ц",
      TSHcy: "Ћ",
      tshcy: "ћ",
      Tstrok: "Ŧ",
      tstrok: "ŧ",
      twixt: "≬",
      twoheadleftarrow: "↞",
      twoheadrightarrow: "↠",
      Uacute: "Ú",
      uacute: "ú",
      uarr: "↑",
      Uarr: "↟",
      uArr: "⇑",
      Uarrocir: "⥉",
      Ubrcy: "Ў",
      ubrcy: "ў",
      Ubreve: "Ŭ",
      ubreve: "ŭ",
      Ucirc: "Û",
      ucirc: "û",
      Ucy: "У",
      ucy: "у",
      udarr: "⇅",
      Udblac: "Ű",
      udblac: "ű",
      udhar: "⥮",
      ufisht: "⥾",
      Ufr: "𝔘",
      ufr: "𝔲",
      Ugrave: "Ù",
      ugrave: "ù",
      uHar: "⥣",
      uharl: "↿",
      uharr: "↾",
      uhblk: "▀",
      ulcorn: "⌜",
      ulcorner: "⌜",
      ulcrop: "⌏",
      ultri: "◸",
      Umacr: "Ū",
      umacr: "ū",
      uml: "¨",
      UnderBar: "_",
      UnderBrace: "⏟",
      UnderBracket: "⎵",
      UnderParenthesis: "⏝",
      Union: "⋃",
      UnionPlus: "⊎",
      Uogon: "Ų",
      uogon: "ų",
      Uopf: "𝕌",
      uopf: "𝕦",
      UpArrowBar: "⤒",
      uparrow: "↑",
      UpArrow: "↑",
      Uparrow: "⇑",
      UpArrowDownArrow: "⇅",
      updownarrow: "↕",
      UpDownArrow: "↕",
      Updownarrow: "⇕",
      UpEquilibrium: "⥮",
      upharpoonleft: "↿",
      upharpoonright: "↾",
      uplus: "⊎",
      UpperLeftArrow: "↖",
      UpperRightArrow: "↗",
      upsi: "υ",
      Upsi: "ϒ",
      upsih: "ϒ",
      Upsilon: "Υ",
      upsilon: "υ",
      UpTeeArrow: "↥",
      UpTee: "⊥",
      upuparrows: "⇈",
      urcorn: "⌝",
      urcorner: "⌝",
      urcrop: "⌎",
      Uring: "Ů",
      uring: "ů",
      urtri: "◹",
      Uscr: "𝒰",
      uscr: "𝓊",
      utdot: "⋰",
      Utilde: "Ũ",
      utilde: "ũ",
      utri: "▵",
      utrif: "▴",
      uuarr: "⇈",
      Uuml: "Ü",
      uuml: "ü",
      uwangle: "⦧",
      vangrt: "⦜",
      varepsilon: "ϵ",
      varkappa: "ϰ",
      varnothing: "∅",
      varphi: "ϕ",
      varpi: "ϖ",
      varpropto: "∝",
      varr: "↕",
      vArr: "⇕",
      varrho: "ϱ",
      varsigma: "ς",
      varsubsetneq: "⊊︀",
      varsubsetneqq: "⫋︀",
      varsupsetneq: "⊋︀",
      varsupsetneqq: "⫌︀",
      vartheta: "ϑ",
      vartriangleleft: "⊲",
      vartriangleright: "⊳",
      vBar: "⫨",
      Vbar: "⫫",
      vBarv: "⫩",
      Vcy: "В",
      vcy: "в",
      vdash: "⊢",
      vDash: "⊨",
      Vdash: "⊩",
      VDash: "⊫",
      Vdashl: "⫦",
      veebar: "⊻",
      vee: "∨",
      Vee: "⋁",
      veeeq: "≚",
      vellip: "⋮",
      verbar: "|",
      Verbar: "‖",
      vert: "|",
      Vert: "‖",
      VerticalBar: "∣",
      VerticalLine: "|",
      VerticalSeparator: "❘",
      VerticalTilde: "≀",
      VeryThinSpace: "\u200A",
      Vfr: "𝔙",
      vfr: "𝔳",
      vltri: "⊲",
      vnsub: "⊂⃒",
      vnsup: "⊃⃒",
      Vopf: "𝕍",
      vopf: "𝕧",
      vprop: "∝",
      vrtri: "⊳",
      Vscr: "𝒱",
      vscr: "𝓋",
      vsubnE: "⫋︀",
      vsubne: "⊊︀",
      vsupnE: "⫌︀",
      vsupne: "⊋︀",
      Vvdash: "⊪",
      vzigzag: "⦚",
      Wcirc: "Ŵ",
      wcirc: "ŵ",
      wedbar: "⩟",
      wedge: "∧",
      Wedge: "⋀",
      wedgeq: "≙",
      weierp: "℘",
      Wfr: "𝔚",
      wfr: "𝔴",
      Wopf: "𝕎",
      wopf: "𝕨",
      wp: "℘",
      wr: "≀",
      wreath: "≀",
      Wscr: "𝒲",
      wscr: "𝓌",
      xcap: "⋂",
      xcirc: "◯",
      xcup: "⋃",
      xdtri: "▽",
      Xfr: "𝔛",
      xfr: "𝔵",
      xharr: "⟷",
      xhArr: "⟺",
      Xi: "Ξ",
      xi: "ξ",
      xlarr: "⟵",
      xlArr: "⟸",
      xmap: "⟼",
      xnis: "⋻",
      xodot: "⨀",
      Xopf: "𝕏",
      xopf: "𝕩",
      xoplus: "⨁",
      xotime: "⨂",
      xrarr: "⟶",
      xrArr: "⟹",
      Xscr: "𝒳",
      xscr: "𝓍",
      xsqcup: "⨆",
      xuplus: "⨄",
      xutri: "△",
      xvee: "⋁",
      xwedge: "⋀",
      Yacute: "Ý",
      yacute: "ý",
      YAcy: "Я",
      yacy: "я",
      Ycirc: "Ŷ",
      ycirc: "ŷ",
      Ycy: "Ы",
      ycy: "ы",
      yen: "¥",
      Yfr: "𝔜",
      yfr: "𝔶",
      YIcy: "Ї",
      yicy: "ї",
      Yopf: "𝕐",
      yopf: "𝕪",
      Yscr: "𝒴",
      yscr: "𝓎",
      YUcy: "Ю",
      yucy: "ю",
      yuml: "ÿ",
      Yuml: "Ÿ",
      Zacute: "Ź",
      zacute: "ź",
      Zcaron: "Ž",
      zcaron: "ž",
      Zcy: "З",
      zcy: "з",
      Zdot: "Ż",
      zdot: "ż",
      zeetrf: "ℨ",
      ZeroWidthSpace: "​",
      Zeta: "Ζ",
      zeta: "ζ",
      zfr: "𝔷",
      Zfr: "ℨ",
      ZHcy: "Ж",
      zhcy: "ж",
      zigrarr: "⇝",
      zopf: "𝕫",
      Zopf: "ℤ",
      Zscr: "𝒵",
      zscr: "𝓏",
      zwj: "‍",
      zwnj: "‌"
    };
  });
  var Sa = O((fE, cy) => {
    cy.exports = {
      Aacute: "Á",
      aacute: "á",
      Acirc: "Â",
      acirc: "â",
      acute: "´",
      AElig: "Æ",
      aelig: "æ",
      Agrave: "À",
      agrave: "à",
      amp: "&",
      AMP: "&",
      Aring: "Å",
      aring: "å",
      Atilde: "Ã",
      atilde: "ã",
      Auml: "Ä",
      auml: "ä",
      brvbar: "¦",
      Ccedil: "Ç",
      ccedil: "ç",
      cedil: "¸",
      cent: "¢",
      copy: "©",
      COPY: "©",
      curren: "¤",
      deg: "°",
      divide: "÷",
      Eacute: "É",
      eacute: "é",
      Ecirc: "Ê",
      ecirc: "ê",
      Egrave: "È",
      egrave: "è",
      ETH: "Ð",
      eth: "ð",
      Euml: "Ë",
      euml: "ë",
      frac12: "½",
      frac14: "¼",
      frac34: "¾",
      gt: ">",
      GT: ">",
      Iacute: "Í",
      iacute: "í",
      Icirc: "Î",
      icirc: "î",
      iexcl: "¡",
      Igrave: "Ì",
      igrave: "ì",
      iquest: "¿",
      Iuml: "Ï",
      iuml: "ï",
      laquo: "«",
      lt: "<",
      LT: "<",
      macr: "¯",
      micro: "µ",
      middot: "·",
      nbsp: "\xA0",
      not: "¬",
      Ntilde: "Ñ",
      ntilde: "ñ",
      Oacute: "Ó",
      oacute: "ó",
      Ocirc: "Ô",
      ocirc: "ô",
      Ograve: "Ò",
      ograve: "ò",
      ordf: "ª",
      ordm: "º",
      Oslash: "Ø",
      oslash: "ø",
      Otilde: "Õ",
      otilde: "õ",
      Ouml: "Ö",
      ouml: "ö",
      para: "¶",
      plusmn: "±",
      pound: "£",
      quot: "\"",
      QUOT: "\"",
      raquo: "»",
      reg: "®",
      REG: "®",
      sect: "§",
      shy: "­",
      sup1: "¹",
      sup2: "²",
      sup3: "³",
      szlig: "ß",
      THORN: "Þ",
      thorn: "þ",
      times: "×",
      Uacute: "Ú",
      uacute: "ú",
      Ucirc: "Û",
      ucirc: "û",
      Ugrave: "Ù",
      ugrave: "ù",
      uml: "¨",
      Uuml: "Ü",
      uuml: "ü",
      Yacute: "Ý",
      yacute: "ý",
      yen: "¥",
      yuml: "ÿ"
    };
  });
  var lu = O((lE, fy) => {
    fy.exports = {
      amp: "&",
      apos: "'",
      gt: ">",
      lt: "<",
      quot: "\""
    };
  });
  var Ha = O((hE, gh) => {
    gh.exports = R;
    var ly = Ca();
    var hy = fu();
    var Fl = Sa();
    var py = lu();
    var M = 0;
    var lt = M++;
    var Rl = M++;
    var wr = M++;
    var Ol = M++;
    var Il = M++;
    var Hn = M++;
    var Nl = M++;
    var or = M++;
    var hu = M++;
    var Ta = M++;
    var qa = M++;
    var La = M++;
    var Ba = M++;
    var Fa = M++;
    var kl = M++;
    var Xe = M++;
    var Ml = M++;
    var Pl = M++;
    var Gn = M++;
    var Ra = M++;
    var Oa = M++;
    var Ul = M++;
    var Hl = M++;
    var Gl = M++;
    var Wl = M++;
    var $l = M++;
    var Vl = M++;
    var pu = M++;
    var Ia = M++;
    var Na = M++;
    var zl = M++;
    var Xl = M++;
    var Yl = M++;
    var Kl = M++;
    var jl = M++;
    var Zl = M++;
    var Jl = M++;
    var Ql = M++;
    var th = M++;
    var eh = M++;
    var rh = M++;
    var nh = M++;
    var ih = M++;
    var uh = M++;
    var sh = M++;
    var ah = M++;
    var oh = M++;
    var ch = M++;
    var fh = M++;
    var lh = M++;
    var Wn = M++;
    var hh = M++;
    var ka = M++;
    var Ma = M++;
    var Pa = M++;
    var Ua = 0;
    var nn = Ua++;
    var ph = Ua++;
    var dh = Ua++;
    function zt(t) {
      return t === " " || t === `
` || t === "\t" || t === "\f" || t === "\r";
    }
    function dy(t, n) {
      return function (i) {
        if (i === t) {
          this._state = n;
        }
      };
    }
    function Xt(t, n, i) {
      var s = t.toLowerCase();
      if (t === s) {
        return function (o) {
          if (o === s) {
            this._state = n;
          } else {
            this._state = i;
            this._index--;
          }
        };
      } else {
        return function (o) {
          if (o === s || o === t) {
            this._state = n;
          } else {
            this._state = i;
            this._index--;
          }
        };
      }
    }
    function Er(t, n) {
      var i = t.toLowerCase();
      return function (s) {
        if (s === i || s === t) {
          this._state = n;
        } else {
          this._state = wr;
          this._index--;
        }
      };
    }
    function R(t, n) {
      this._state = lt;
      this._buffer = "";
      this._sectionStart = 0;
      this._index = 0;
      this._bufferOffset = 0;
      this._baseState = lt;
      this._special = nn;
      this._cbs = n;
      this._running = true;
      this._ended = false;
      this._xmlMode = !!t && !!t.xmlMode;
      this._decodeEntities = !!t && !!t.decodeEntities;
    }
    R.prototype._stateText = function (t) {
      if (t === "<") {
        if (this._index > this._sectionStart) {
          this._cbs.ontext(this._getSection());
        }
        this._state = Rl;
        this._sectionStart = this._index;
      } else if (this._decodeEntities && this._special === nn && t === "&") {
        if (this._index > this._sectionStart) {
          this._cbs.ontext(this._getSection());
        }
        this._baseState = lt;
        this._state = Wn;
        this._sectionStart = this._index;
      }
    };
    R.prototype._stateBeforeTagName = function (t) {
      if (t === "/") {
        this._state = Il;
      } else if (t === "<") {
        this._cbs.ontext(this._getSection());
        this._sectionStart = this._index;
      } else if (t === ">" || this._special !== nn || zt(t)) {
        this._state = lt;
      } else if (t === "!") {
        this._state = kl;
        this._sectionStart = this._index + 1;
      } else if (t === "?") {
        this._state = Ml;
        this._sectionStart = this._index + 1;
      } else {
        this._state = !this._xmlMode && (t === "s" || t === "S") ? zl : wr;
        this._sectionStart = this._index;
      }
    };
    R.prototype._stateInTagName = function (t) {
      if (t === "/" || t === ">" || zt(t)) {
        this._emitToken("onopentagname");
        this._state = or;
        this._index--;
      }
    };
    R.prototype._stateBeforeCloseingTagName = function (t) {
      if (!zt(t)) {
        if (t === ">") {
          this._state = lt;
        } else if (this._special !== nn) {
          if (t === "s" || t === "S") {
            this._state = Xl;
          } else {
            this._state = lt;
            this._index--;
          }
        } else {
          this._state = Hn;
          this._sectionStart = this._index;
        }
      }
    };
    R.prototype._stateInCloseingTagName = function (t) {
      if (t === ">" || zt(t)) {
        this._emitToken("onclosetag");
        this._state = Nl;
        this._index--;
      }
    };
    R.prototype._stateAfterCloseingTagName = function (t) {
      if (t === ">") {
        this._state = lt;
        this._sectionStart = this._index + 1;
      }
    };
    R.prototype._stateBeforeAttributeName = function (t) {
      if (t === ">") {
        this._cbs.onopentagend();
        this._state = lt;
        this._sectionStart = this._index + 1;
      } else if (t === "/") {
        this._state = Ol;
      } else if (!zt(t)) {
        this._state = hu;
        this._sectionStart = this._index;
      }
    };
    R.prototype._stateInSelfClosingTag = function (t) {
      if (t === ">") {
        this._cbs.onselfclosingtag();
        this._state = lt;
        this._sectionStart = this._index + 1;
      } else if (!zt(t)) {
        this._state = or;
        this._index--;
      }
    };
    R.prototype._stateInAttributeName = function (t) {
      if (t === "=" || t === "/" || t === ">" || zt(t)) {
        this._cbs.onattribname(this._getSection());
        this._sectionStart = -1;
        this._state = Ta;
        this._index--;
      }
    };
    R.prototype._stateAfterAttributeName = function (t) {
      if (t === "=") {
        this._state = qa;
      } else if (t === "/" || t === ">") {
        this._cbs.onattribend();
        this._state = or;
        this._index--;
      } else if (!zt(t)) {
        this._cbs.onattribend();
        this._state = hu;
        this._sectionStart = this._index;
      }
    };
    R.prototype._stateBeforeAttributeValue = function (t) {
      if (t === "\"") {
        this._state = La;
        this._sectionStart = this._index + 1;
      } else if (t === "'") {
        this._state = Ba;
        this._sectionStart = this._index + 1;
      } else if (!zt(t)) {
        this._state = Fa;
        this._sectionStart = this._index;
        this._index--;
      }
    };
    R.prototype._stateInAttributeValueDoubleQuotes = function (t) {
      if (t === "\"") {
        this._emitToken("onattribdata");
        this._cbs.onattribend();
        this._state = or;
      } else if (this._decodeEntities && t === "&") {
        this._emitToken("onattribdata");
        this._baseState = this._state;
        this._state = Wn;
        this._sectionStart = this._index;
      }
    };
    R.prototype._stateInAttributeValueSingleQuotes = function (t) {
      if (t === "'") {
        this._emitToken("onattribdata");
        this._cbs.onattribend();
        this._state = or;
      } else if (this._decodeEntities && t === "&") {
        this._emitToken("onattribdata");
        this._baseState = this._state;
        this._state = Wn;
        this._sectionStart = this._index;
      }
    };
    R.prototype._stateInAttributeValueNoQuotes = function (t) {
      if (zt(t) || t === ">") {
        this._emitToken("onattribdata");
        this._cbs.onattribend();
        this._state = or;
        this._index--;
      } else if (this._decodeEntities && t === "&") {
        this._emitToken("onattribdata");
        this._baseState = this._state;
        this._state = Wn;
        this._sectionStart = this._index;
      }
    };
    R.prototype._stateBeforeDeclaration = function (t) {
      this._state = t === "[" ? Ul : t === "-" ? Pl : Xe;
    };
    R.prototype._stateInDeclaration = function (t) {
      if (t === ">") {
        this._cbs.ondeclaration(this._getSection());
        this._state = lt;
        this._sectionStart = this._index + 1;
      }
    };
    R.prototype._stateInProcessingInstruction = function (t) {
      if (t === ">") {
        this._cbs.onprocessinginstruction(this._getSection());
        this._state = lt;
        this._sectionStart = this._index + 1;
      }
    };
    R.prototype._stateBeforeComment = function (t) {
      if (t === "-") {
        this._state = Gn;
        this._sectionStart = this._index + 1;
      } else {
        this._state = Xe;
      }
    };
    R.prototype._stateInComment = function (t) {
      if (t === "-") {
        this._state = Ra;
      }
    };
    R.prototype._stateAfterComment1 = function (t) {
      if (t === "-") {
        this._state = Oa;
      } else {
        this._state = Gn;
      }
    };
    R.prototype._stateAfterComment2 = function (t) {
      if (t === ">") {
        this._cbs.oncomment(this._buffer.substring(this._sectionStart, this._index - 2));
        this._state = lt;
        this._sectionStart = this._index + 1;
      } else if (t !== "-") {
        this._state = Gn;
      }
    };
    R.prototype._stateBeforeCdata1 = Xt("C", Hl, Xe);
    R.prototype._stateBeforeCdata2 = Xt("D", Gl, Xe);
    R.prototype._stateBeforeCdata3 = Xt("A", Wl, Xe);
    R.prototype._stateBeforeCdata4 = Xt("T", $l, Xe);
    R.prototype._stateBeforeCdata5 = Xt("A", Vl, Xe);
    R.prototype._stateBeforeCdata6 = function (t) {
      if (t === "[") {
        this._state = pu;
        this._sectionStart = this._index + 1;
      } else {
        this._state = Xe;
        this._index--;
      }
    };
    R.prototype._stateInCdata = function (t) {
      if (t === "]") {
        this._state = Ia;
      }
    };
    R.prototype._stateAfterCdata1 = dy("]", Na);
    R.prototype._stateAfterCdata2 = function (t) {
      if (t === ">") {
        this._cbs.oncdata(this._buffer.substring(this._sectionStart, this._index - 2));
        this._state = lt;
        this._sectionStart = this._index + 1;
      } else if (t !== "]") {
        this._state = pu;
      }
    };
    R.prototype._stateBeforeSpecial = function (t) {
      if (t === "c" || t === "C") {
        this._state = Yl;
      } else if (t === "t" || t === "T") {
        this._state = ih;
      } else {
        this._state = wr;
        this._index--;
      }
    };
    R.prototype._stateBeforeSpecialEnd = function (t) {
      if (this._special === ph && (t === "c" || t === "C")) {
        this._state = Ql;
      } else if (this._special === dh && (t === "t" || t === "T")) {
        this._state = oh;
      } else {
        this._state = lt;
      }
    };
    R.prototype._stateBeforeScript1 = Er("R", Kl);
    R.prototype._stateBeforeScript2 = Er("I", jl);
    R.prototype._stateBeforeScript3 = Er("P", Zl);
    R.prototype._stateBeforeScript4 = Er("T", Jl);
    R.prototype._stateBeforeScript5 = function (t) {
      if (t === "/" || t === ">" || zt(t)) {
        this._special = ph;
      }
      this._state = wr;
      this._index--;
    };
    R.prototype._stateAfterScript1 = Xt("R", th, lt);
    R.prototype._stateAfterScript2 = Xt("I", eh, lt);
    R.prototype._stateAfterScript3 = Xt("P", rh, lt);
    R.prototype._stateAfterScript4 = Xt("T", nh, lt);
    R.prototype._stateAfterScript5 = function (t) {
      if (t === ">" || zt(t)) {
        this._special = nn;
        this._state = Hn;
        this._sectionStart = this._index - 6;
        this._index--;
      } else {
        this._state = lt;
      }
    };
    R.prototype._stateBeforeStyle1 = Er("Y", uh);
    R.prototype._stateBeforeStyle2 = Er("L", sh);
    R.prototype._stateBeforeStyle3 = Er("E", ah);
    R.prototype._stateBeforeStyle4 = function (t) {
      if (t === "/" || t === ">" || zt(t)) {
        this._special = dh;
      }
      this._state = wr;
      this._index--;
    };
    R.prototype._stateAfterStyle1 = Xt("Y", ch, lt);
    R.prototype._stateAfterStyle2 = Xt("L", fh, lt);
    R.prototype._stateAfterStyle3 = Xt("E", lh, lt);
    R.prototype._stateAfterStyle4 = function (t) {
      if (t === ">" || zt(t)) {
        this._special = nn;
        this._state = Hn;
        this._sectionStart = this._index - 5;
        this._index--;
      } else {
        this._state = lt;
      }
    };
    R.prototype._stateBeforeEntity = Xt("#", hh, ka);
    R.prototype._stateBeforeNumericEntity = Xt("X", Pa, Ma);
    R.prototype._parseNamedEntityStrict = function () {
      if (this._sectionStart + 1 < this._index) {
        var t = this._buffer.substring(this._sectionStart + 1, this._index);
        var n = this._xmlMode ? py : hy;
        if (n.hasOwnProperty(t)) {
          this._emitPartial(n[t]);
          this._sectionStart = this._index + 1;
        }
      }
    };
    R.prototype._parseLegacyEntity = function () {
      var t = this._sectionStart + 1;
      var n = this._index - t;
      for (n > 6 && (n = 6); n >= 2;) {
        var i = this._buffer.substr(t, n);
        if (Fl.hasOwnProperty(i)) {
          this._emitPartial(Fl[i]);
          this._sectionStart += n + 1;
          return;
        } else {
          n--;
        }
      }
    };
    R.prototype._stateInNamedEntity = function (t) {
      if (t === ";") {
        this._parseNamedEntityStrict();
        if (this._sectionStart + 1 < this._index && !this._xmlMode) {
          this._parseLegacyEntity();
        }
        this._state = this._baseState;
      } else if ((t < "a" || t > "z") && (t < "A" || t > "Z") && (t < "0" || t > "9")) {
        if (!this._xmlMode && this._sectionStart + 1 !== this._index) {
          if (this._baseState !== lt) {
            if (t !== "=") {
              this._parseNamedEntityStrict();
            }
          } else {
            this._parseLegacyEntity();
          }
        }
        this._state = this._baseState;
        this._index--;
      }
    };
    R.prototype._decodeNumericEntity = function (t, n) {
      var i = this._sectionStart + t;
      if (i !== this._index) {
        var s = this._buffer.substring(i, this._index);
        var o = parseInt(s, n);
        this._emitPartial(ly(o));
        this._sectionStart = this._index;
      } else {
        this._sectionStart--;
      }
      this._state = this._baseState;
    };
    R.prototype._stateInNumericEntity = function (t) {
      if (t === ";") {
        this._decodeNumericEntity(2, 10);
        this._sectionStart++;
      } else if (t < "0" || t > "9") {
        if (this._xmlMode) {
          this._state = this._baseState;
        } else {
          this._decodeNumericEntity(2, 10);
        }
        this._index--;
      }
    };
    R.prototype._stateInHexEntity = function (t) {
      if (t === ";") {
        this._decodeNumericEntity(3, 16);
        this._sectionStart++;
      } else if ((t < "a" || t > "f") && (t < "A" || t > "F") && (t < "0" || t > "9")) {
        if (this._xmlMode) {
          this._state = this._baseState;
        } else {
          this._decodeNumericEntity(3, 16);
        }
        this._index--;
      }
    };
    R.prototype._cleanup = function () {
      if (this._sectionStart < 0) {
        this._buffer = "";
        this._bufferOffset += this._index;
        this._index = 0;
      } else if (this._running) {
        if (this._state === lt) {
          if (this._sectionStart !== this._index) {
            this._cbs.ontext(this._buffer.substr(this._sectionStart));
          }
          this._buffer = "";
          this._bufferOffset += this._index;
          this._index = 0;
        } else if (this._sectionStart === this._index) {
          this._buffer = "";
          this._bufferOffset += this._index;
          this._index = 0;
        } else {
          this._buffer = this._buffer.substr(this._sectionStart);
          this._index -= this._sectionStart;
          this._bufferOffset += this._sectionStart;
        }
        this._sectionStart = 0;
      }
    };
    R.prototype.write = function (t) {
      if (this._ended) {
        this._cbs.onerror(Error(".write() after done!"));
      }
      this._buffer += t;
      this._parse();
    };
    R.prototype._parse = function () {
      while (this._index < this._buffer.length && this._running) {
        var t = this._buffer.charAt(this._index);
        if (this._state === lt) {
          this._stateText(t);
        } else if (this._state === Rl) {
          this._stateBeforeTagName(t);
        } else if (this._state === wr) {
          this._stateInTagName(t);
        } else if (this._state === Il) {
          this._stateBeforeCloseingTagName(t);
        } else if (this._state === Hn) {
          this._stateInCloseingTagName(t);
        } else if (this._state === Nl) {
          this._stateAfterCloseingTagName(t);
        } else if (this._state === Ol) {
          this._stateInSelfClosingTag(t);
        } else if (this._state === or) {
          this._stateBeforeAttributeName(t);
        } else if (this._state === hu) {
          this._stateInAttributeName(t);
        } else if (this._state === Ta) {
          this._stateAfterAttributeName(t);
        } else if (this._state === qa) {
          this._stateBeforeAttributeValue(t);
        } else if (this._state === La) {
          this._stateInAttributeValueDoubleQuotes(t);
        } else if (this._state === Ba) {
          this._stateInAttributeValueSingleQuotes(t);
        } else if (this._state === Fa) {
          this._stateInAttributeValueNoQuotes(t);
        } else if (this._state === kl) {
          this._stateBeforeDeclaration(t);
        } else if (this._state === Xe) {
          this._stateInDeclaration(t);
        } else if (this._state === Ml) {
          this._stateInProcessingInstruction(t);
        } else if (this._state === Pl) {
          this._stateBeforeComment(t);
        } else if (this._state === Gn) {
          this._stateInComment(t);
        } else if (this._state === Ra) {
          this._stateAfterComment1(t);
        } else if (this._state === Oa) {
          this._stateAfterComment2(t);
        } else if (this._state === Ul) {
          this._stateBeforeCdata1(t);
        } else if (this._state === Hl) {
          this._stateBeforeCdata2(t);
        } else if (this._state === Gl) {
          this._stateBeforeCdata3(t);
        } else if (this._state === Wl) {
          this._stateBeforeCdata4(t);
        } else if (this._state === $l) {
          this._stateBeforeCdata5(t);
        } else if (this._state === Vl) {
          this._stateBeforeCdata6(t);
        } else if (this._state === pu) {
          this._stateInCdata(t);
        } else if (this._state === Ia) {
          this._stateAfterCdata1(t);
        } else if (this._state === Na) {
          this._stateAfterCdata2(t);
        } else if (this._state === zl) {
          this._stateBeforeSpecial(t);
        } else if (this._state === Xl) {
          this._stateBeforeSpecialEnd(t);
        } else if (this._state === Yl) {
          this._stateBeforeScript1(t);
        } else if (this._state === Kl) {
          this._stateBeforeScript2(t);
        } else if (this._state === jl) {
          this._stateBeforeScript3(t);
        } else if (this._state === Zl) {
          this._stateBeforeScript4(t);
        } else if (this._state === Jl) {
          this._stateBeforeScript5(t);
        } else if (this._state === Ql) {
          this._stateAfterScript1(t);
        } else if (this._state === th) {
          this._stateAfterScript2(t);
        } else if (this._state === eh) {
          this._stateAfterScript3(t);
        } else if (this._state === rh) {
          this._stateAfterScript4(t);
        } else if (this._state === nh) {
          this._stateAfterScript5(t);
        } else if (this._state === ih) {
          this._stateBeforeStyle1(t);
        } else if (this._state === uh) {
          this._stateBeforeStyle2(t);
        } else if (this._state === sh) {
          this._stateBeforeStyle3(t);
        } else if (this._state === ah) {
          this._stateBeforeStyle4(t);
        } else if (this._state === oh) {
          this._stateAfterStyle1(t);
        } else if (this._state === ch) {
          this._stateAfterStyle2(t);
        } else if (this._state === fh) {
          this._stateAfterStyle3(t);
        } else if (this._state === lh) {
          this._stateAfterStyle4(t);
        } else if (this._state === Wn) {
          this._stateBeforeEntity(t);
        } else if (this._state === hh) {
          this._stateBeforeNumericEntity(t);
        } else if (this._state === ka) {
          this._stateInNamedEntity(t);
        } else if (this._state === Ma) {
          this._stateInNumericEntity(t);
        } else if (this._state === Pa) {
          this._stateInHexEntity(t);
        } else {
          this._cbs.onerror(Error("unknown _state"), this._state);
        }
        this._index++;
      }
      this._cleanup();
    };
    R.prototype.pause = function () {
      this._running = false;
    };
    R.prototype.resume = function () {
      this._running = true;
      if (this._index < this._buffer.length) {
        this._parse();
      }
      if (this._ended) {
        this._finish();
      }
    };
    R.prototype.end = function (t) {
      if (this._ended) {
        this._cbs.onerror(Error(".end() after done!"));
      }
      if (t) {
        this.write(t);
      }
      this._ended = true;
      if (this._running) {
        this._finish();
      }
    };
    R.prototype._finish = function () {
      if (this._sectionStart < this._index) {
        this._handleTrailingData();
      }
      this._cbs.onend();
    };
    R.prototype._handleTrailingData = function () {
      var t = this._buffer.substr(this._sectionStart);
      if (this._state === pu || this._state === Ia || this._state === Na) {
        this._cbs.oncdata(t);
      } else if (this._state === Gn || this._state === Ra || this._state === Oa) {
        this._cbs.oncomment(t);
      } else if (this._state === ka && !this._xmlMode) {
        this._parseLegacyEntity();
        if (this._sectionStart < this._index) {
          this._state = this._baseState;
          this._handleTrailingData();
        }
      } else if (this._state === Ma && !this._xmlMode) {
        this._decodeNumericEntity(2, 10);
        if (this._sectionStart < this._index) {
          this._state = this._baseState;
          this._handleTrailingData();
        }
      } else if (this._state === Pa && !this._xmlMode) {
        this._decodeNumericEntity(3, 16);
        if (this._sectionStart < this._index) {
          this._state = this._baseState;
          this._handleTrailingData();
        }
      } else if (this._state !== wr && this._state !== or && this._state !== qa && this._state !== Ta && this._state !== hu && this._state !== Ba && this._state !== La && this._state !== Fa && this._state !== Hn) {
        this._cbs.ontext(t);
      }
    };
    R.prototype.reset = function () {
      R.call(this, {
        xmlMode: this._xmlMode,
        decodeEntities: this._decodeEntities
      }, this._cbs);
    };
    R.prototype.getAbsoluteIndex = function () {
      return this._bufferOffset + this._index;
    };
    R.prototype._getSection = function () {
      return this._buffer.substring(this._sectionStart, this._index);
    };
    R.prototype._emitToken = function (t) {
      this._cbs[t](this._getSection());
      this._sectionStart = -1;
    };
    R.prototype._emitPartial = function (t) {
      if (this._baseState !== lt) {
        this._cbs.onattribdata(t);
      } else {
        this._cbs.ontext(t);
      }
    };
  });
  var Wa = O((pE, Ga) => {
    if (typeof Object.create == "function") {
      Ga.exports = function (n, i) {
        if (i) {
          n.super_ = i;
          n.prototype = Object.create(i.prototype, {
            constructor: {
              value: n,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      Ga.exports = function (n, i) {
        if (i) {
          n.super_ = i;
          function s() {}
          s.prototype = i.prototype;
          n.prototype = new s();
          n.prototype.constructor = n;
        }
      };
    }
  });
  var mh = O((_h, vh) => {
    (function (t) {
      var n = Array.isArray ? Array.isArray : function (v) {
        return Object.prototype.toString.call(v) === "[object Array]";
      };
      var i = 10;
      function s() {
        this._events = {};
        if (this._conf) {
          o.call(this, this._conf);
        }
      }
      function o(d) {
        if (d) {
          this._conf = d;
          if (d.delimiter) {
            this.delimiter = d.delimiter;
          }
          if (d.maxListeners) {
            this._events.maxListeners = d.maxListeners;
          }
          if (d.wildcard) {
            this.wildcard = d.wildcard;
          }
          if (d.newListener) {
            this.newListener = d.newListener;
          }
          if (this.wildcard) {
            this.listenerTree = {};
          }
        }
      }
      function c(d) {
        this._events = {};
        this.newListener = false;
        o.call(this, d);
      }
      c.EventEmitter2 = c;
      function l(d, v, A, w) {
        if (!A) {
          return [];
        }
        var T = [];
        var S;
        var L;
        var B;
        var P;
        var Y;
        var nt;
        var ht;
        var it = v.length;
        var $ = v[w];
        var N = v[w + 1];
        if (w === it && A._listeners) {
          if (typeof A._listeners == "function") {
            if (d) {
              d.push(A._listeners);
            }
            return [A];
          }
          S = 0;
          L = A._listeners.length;
          for (; S < L; S++) {
            if (d) {
              d.push(A._listeners[S]);
            }
          }
          return [A];
        }
        if ($ === "*" || $ === "**" || A[$]) {
          if ($ === "*") {
            for (B in A) {
              if (B !== "_listeners" && A.hasOwnProperty(B)) {
                T = T.concat(l(d, v, A[B], w + 1));
              }
            }
            return T;
          } else if ($ === "**") {
            ht = w + 1 === it || w + 2 === it && N === "*";
            if (ht && A._listeners) {
              T = T.concat(l(d, v, A, it));
            }
            for (B in A) {
              if (B !== "_listeners" && A.hasOwnProperty(B)) {
                if (B === "*" || B === "**") {
                  if (A[B]._listeners && !ht) {
                    T = T.concat(l(d, v, A[B], it));
                  }
                  T = T.concat(l(d, v, A[B], w));
                } else if (B === N) {
                  T = T.concat(l(d, v, A[B], w + 2));
                } else {
                  T = T.concat(l(d, v, A[B], w));
                }
              }
            }
            return T;
          }
          T = T.concat(l(d, v, A[$], w + 1));
        }
        P = A["*"];
        if (P) {
          l(d, v, P, w + 1);
        }
        Y = A["**"];
        if (Y) {
          if (w < it) {
            if (Y._listeners) {
              l(d, v, Y, it);
            }
            for (B in Y) {
              if (B !== "_listeners" && Y.hasOwnProperty(B)) {
                if (B === N) {
                  l(d, v, Y[B], w + 2);
                } else if (B === $) {
                  l(d, v, Y[B], w + 1);
                } else {
                  nt = {};
                  nt[B] = Y[B];
                  l(d, v, {
                    "**": nt
                  }, w + 1);
                }
              }
            }
          } else if (Y._listeners) {
            l(d, v, Y, it);
          } else if (Y["*"] && Y["*"]._listeners) {
            l(d, v, Y["*"], it);
          }
        }
        return T;
      }
      function g(d, v) {
        d = typeof d == "string" ? d.split(this.delimiter) : d.slice();
        for (var A = 0, w = d.length; A + 1 < w; A++) {
          if (d[A] === "**" && d[A + 1] === "**") {
            return;
          }
        }
        var T = this.listenerTree;
        for (var S = d.shift(); S;) {
          T[S] ||= {};
          T = T[S];
          if (d.length === 0) {
            if (!T._listeners) {
              T._listeners = v;
            } else if (typeof T._listeners == "function") {
              T._listeners = [T._listeners, v];
            } else if (n(T._listeners) && (T._listeners.push(v), !T._listeners.warned)) {
              var L = i;
              if (typeof this._events.maxListeners != "undefined") {
                L = this._events.maxListeners;
              }
              if (L > 0 && T._listeners.length > L) {
                T._listeners.warned = true;
                console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", T._listeners.length);
                if (console.trace) {
                  console.trace();
                }
              }
            }
            return true;
          }
          S = d.shift();
        }
        return true;
      }
      c.prototype.delimiter = ".";
      c.prototype.setMaxListeners = function (d) {
        if (!this._events) {
          s.call(this);
        }
        this._events.maxListeners = d;
        this._conf ||= {};
        this._conf.maxListeners = d;
      };
      c.prototype.event = "";
      c.prototype.once = function (d, v) {
        this.many(d, 1, v);
        return this;
      };
      c.prototype.many = function (d, v, A) {
        var w = this;
        if (typeof A != "function") {
          throw new Error("many only accepts instances of Function");
        }
        function T() {
          if (--v === 0) {
            w.off(d, T);
          }
          A.apply(this, arguments);
        }
        T._origin = A;
        this.on(d, T);
        return w;
      };
      c.prototype.emit = function () {
        if (!this._events) {
          s.call(this);
        }
        var d = arguments[0];
        if (d === "newListener" && !this.newListener && !this._events.newListener) {
          return false;
        }
        var v = arguments.length;
        var A;
        var w;
        var T;
        var S;
        var L;
        if (this._all && this._all.length) {
          L = this._all.slice();
          if (v > 3) {
            A = new Array(v);
            S = 1;
            for (; S < v; S++) {
              A[S] = arguments[S];
            }
          }
          T = 0;
          w = L.length;
          for (; T < w; T++) {
            this.event = d;
            switch (v) {
              case 1:
                L[T].call(this, d);
                break;
              case 2:
                L[T].call(this, d, arguments[1]);
                break;
              case 3:
                L[T].call(this, d, arguments[1], arguments[2]);
                break;
              default:
                L[T].apply(this, A);
            }
          }
        }
        if (this.wildcard) {
          L = [];
          var B = typeof d == "string" ? d.split(this.delimiter) : d.slice();
          l.call(this, L, B, this.listenerTree, 0);
        } else {
          L = this._events[d];
          if (typeof L == "function") {
            this.event = d;
            switch (v) {
              case 1:
                L.call(this);
                break;
              case 2:
                L.call(this, arguments[1]);
                break;
              case 3:
                L.call(this, arguments[1], arguments[2]);
                break;
              default:
                A = new Array(v - 1);
                S = 1;
                for (; S < v; S++) {
                  A[S - 1] = arguments[S];
                }
                L.apply(this, A);
            }
            return true;
          } else {
            L &&= L.slice();
          }
        }
        if (L && L.length) {
          if (v > 3) {
            A = new Array(v - 1);
            S = 1;
            for (; S < v; S++) {
              A[S - 1] = arguments[S];
            }
          }
          T = 0;
          w = L.length;
          for (; T < w; T++) {
            this.event = d;
            switch (v) {
              case 1:
                L[T].call(this);
                break;
              case 2:
                L[T].call(this, arguments[1]);
                break;
              case 3:
                L[T].call(this, arguments[1], arguments[2]);
                break;
              default:
                L[T].apply(this, A);
            }
          }
          return true;
        } else if (!this._all && d === "error") {
          throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
        }
        return !!this._all;
      };
      c.prototype.emitAsync = function () {
        if (!this._events) {
          s.call(this);
        }
        var d = arguments[0];
        if (d === "newListener" && !this.newListener && !this._events.newListener) {
          return Promise.resolve([false]);
        }
        var v = [];
        var A = arguments.length;
        var w;
        var T;
        var S;
        var L;
        var B;
        if (this._all) {
          if (A > 3) {
            w = new Array(A);
            L = 1;
            for (; L < A; L++) {
              w[L] = arguments[L];
            }
          }
          S = 0;
          T = this._all.length;
          for (; S < T; S++) {
            this.event = d;
            switch (A) {
              case 1:
                v.push(this._all[S].call(this, d));
                break;
              case 2:
                v.push(this._all[S].call(this, d, arguments[1]));
                break;
              case 3:
                v.push(this._all[S].call(this, d, arguments[1], arguments[2]));
                break;
              default:
                v.push(this._all[S].apply(this, w));
            }
          }
        }
        if (this.wildcard) {
          B = [];
          var P = typeof d == "string" ? d.split(this.delimiter) : d.slice();
          l.call(this, B, P, this.listenerTree, 0);
        } else {
          B = this._events[d];
        }
        if (typeof B == "function") {
          this.event = d;
          switch (A) {
            case 1:
              v.push(B.call(this));
              break;
            case 2:
              v.push(B.call(this, arguments[1]));
              break;
            case 3:
              v.push(B.call(this, arguments[1], arguments[2]));
              break;
            default:
              w = new Array(A - 1);
              L = 1;
              for (; L < A; L++) {
                w[L - 1] = arguments[L];
              }
              v.push(B.apply(this, w));
          }
        } else if (B && B.length) {
          if (A > 3) {
            w = new Array(A - 1);
            L = 1;
            for (; L < A; L++) {
              w[L - 1] = arguments[L];
            }
          }
          S = 0;
          T = B.length;
          for (; S < T; S++) {
            this.event = d;
            switch (A) {
              case 1:
                v.push(B[S].call(this));
                break;
              case 2:
                v.push(B[S].call(this, arguments[1]));
                break;
              case 3:
                v.push(B[S].call(this, arguments[1], arguments[2]));
                break;
              default:
                v.push(B[S].apply(this, w));
            }
          }
        } else if (!this._all && d === "error") {
          if (arguments[1] instanceof Error) {
            return Promise.reject(arguments[1]);
          } else {
            return Promise.reject("Uncaught, unspecified 'error' event.");
          }
        }
        return Promise.all(v);
      };
      c.prototype.on = function (d, v) {
        if (typeof d == "function") {
          this.onAny(d);
          return this;
        }
        if (typeof v != "function") {
          throw new Error("on only accepts instances of Function");
        }
        if (!this._events) {
          s.call(this);
        }
        this.emit("newListener", d, v);
        if (this.wildcard) {
          g.call(this, d, v);
          return this;
        }
        if (!this._events[d]) {
          this._events[d] = v;
        } else if (typeof this._events[d] == "function") {
          this._events[d] = [this._events[d], v];
        } else if (n(this._events[d]) && (this._events[d].push(v), !this._events[d].warned)) {
          var A = i;
          if (typeof this._events.maxListeners != "undefined") {
            A = this._events.maxListeners;
          }
          if (A > 0 && this._events[d].length > A) {
            this._events[d].warned = true;
            console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[d].length);
            if (console.trace) {
              console.trace();
            }
          }
        }
        return this;
      };
      c.prototype.onAny = function (d) {
        if (typeof d != "function") {
          throw new Error("onAny only accepts instances of Function");
        }
        this._all ||= [];
        this._all.push(d);
        return this;
      };
      c.prototype.addListener = c.prototype.on;
      c.prototype.off = function (d, v) {
        if (typeof v != "function") {
          throw new Error("removeListener only takes instances of Function");
        }
        var A;
        var w = [];
        if (this.wildcard) {
          var T = typeof d == "string" ? d.split(this.delimiter) : d.slice();
          w = l.call(this, null, T, this.listenerTree, 0);
        } else {
          if (!this._events[d]) {
            return this;
          }
          A = this._events[d];
          w.push({
            _listeners: A
          });
        }
        for (var S = 0; S < w.length; S++) {
          var L = w[S];
          A = L._listeners;
          if (n(A)) {
            var B = -1;
            for (var P = 0, Y = A.length; P < Y; P++) {
              if (A[P] === v || A[P].listener && A[P].listener === v || A[P]._origin && A[P]._origin === v) {
                B = P;
                break;
              }
            }
            if (B < 0) {
              continue;
            }
            if (this.wildcard) {
              L._listeners.splice(B, 1);
            } else {
              this._events[d].splice(B, 1);
            }
            if (A.length === 0) {
              if (this.wildcard) {
                delete L._listeners;
              } else {
                delete this._events[d];
              }
            }
            this.emit("removeListener", d, v);
            return this;
          } else if (A === v || A.listener && A.listener === v || A._origin && A._origin === v) {
            if (this.wildcard) {
              delete L._listeners;
            } else {
              delete this._events[d];
            }
            this.emit("removeListener", d, v);
          }
        }
        function nt(ht) {
          if (ht !== t) {
            var it = Object.keys(ht);
            for (var $ in it) {
              var N = it[$];
              var W = ht[N];
              if (!(W instanceof Function) && typeof W == "object") {
                if (Object.keys(W).length > 0) {
                  nt(ht[N]);
                }
                if (Object.keys(W).length === 0) {
                  delete ht[N];
                }
              }
            }
          }
        }
        nt(this.listenerTree);
        return this;
      };
      c.prototype.offAny = function (d) {
        var v = 0;
        var A = 0;
        var w;
        if (d && this._all && this._all.length > 0) {
          w = this._all;
          v = 0;
          A = w.length;
          for (; v < A; v++) {
            if (d === w[v]) {
              w.splice(v, 1);
              this.emit("removeListenerAny", d);
              return this;
            }
          }
        } else {
          w = this._all;
          v = 0;
          A = w.length;
          for (; v < A; v++) {
            this.emit("removeListenerAny", w[v]);
          }
          this._all = [];
        }
        return this;
      };
      c.prototype.removeListener = c.prototype.off;
      c.prototype.removeAllListeners = function (d) {
        if (arguments.length === 0) {
          if (this._events) {
            s.call(this);
          }
          return this;
        }
        if (this.wildcard) {
          var v = typeof d == "string" ? d.split(this.delimiter) : d.slice();
          for (var A = l.call(this, null, v, this.listenerTree, 0), w = 0; w < A.length; w++) {
            var T = A[w];
            T._listeners = null;
          }
        } else {
          if (!this._events || !this._events[d]) {
            return this;
          }
          this._events[d] = null;
        }
        return this;
      };
      c.prototype.listeners = function (d) {
        if (this.wildcard) {
          var v = [];
          var A = typeof d == "string" ? d.split(this.delimiter) : d.slice();
          l.call(this, v, A, this.listenerTree, 0);
          return v;
        }
        if (!this._events) {
          s.call(this);
        }
        this._events[d] ||= [];
        if (!n(this._events[d])) {
          this._events[d] = [this._events[d]];
        }
        return this._events[d];
      };
      c.prototype.listenersAny = function () {
        if (this._all) {
          return this._all;
        } else {
          return [];
        }
      };
      if (typeof define == "function" && define.amd) {
        define(function () {
          return c;
        });
      } else if (typeof _h == "object") {
        vh.exports = c;
      } else {
        window.EventEmitter2 = c;
      }
    })();
  });
  var yh = O((dE, bh) => {
    var $a;
    var un = {
      input: true,
      option: true,
      optgroup: true,
      select: true,
      button: true,
      datalist: true,
      textarea: true
    };
    var Ah = {
      tr: {
        tr: true,
        th: true,
        td: true
      },
      th: {
        th: true
      },
      td: {
        thead: true,
        th: true,
        td: true
      },
      body: {
        head: true,
        link: true,
        script: true
      },
      li: {
        li: true
      },
      p: {
        p: true
      },
      h1: {
        p: true
      },
      h2: {
        p: true
      },
      h3: {
        p: true
      },
      h4: {
        p: true
      },
      h5: {
        p: true
      },
      h6: {
        p: true
      },
      select: un,
      input: un,
      output: un,
      button: un,
      datalist: un,
      textarea: un,
      option: {
        option: true
      },
      optgroup: {
        optgroup: true
      }
    };
    var Va = {
      __proto__: null,
      area: true,
      base: true,
      basefont: true,
      br: true,
      col: true,
      command: true,
      embed: true,
      frame: true,
      hr: true,
      img: true,
      input: true,
      isindex: true,
      keygen: true,
      link: true,
      meta: true,
      param: true,
      source: true,
      track: true,
      wbr: true,
      path: true,
      circle: true,
      ellipse: true,
      line: true,
      rect: true,
      use: true,
      stop: true,
      polyline: true,
      polygon: true
    };
    var gy = /\s|\//;
    function ct(t, n) {
      this._options = n || {};
      this._cbs = t || {};
      this._tagname = "";
      this._attribname = "";
      this._attribvalue = "";
      this._attribs = null;
      this._stack = [];
      this.startIndex = 0;
      this.endIndex = null;
      this._lowerCaseTagNames = "lowerCaseTags" in this._options ? !!this._options.lowerCaseTags : !this._options.xmlMode;
      this._lowerCaseAttributeNames = "lowerCaseAttributeNames" in this._options ? !!this._options.lowerCaseAttributeNames : !this._options.xmlMode;
      if (this._options.Tokenizer) {
        $a = this._options.Tokenizer;
      } else {
        $a = Ha();
      }
      this._tokenizer = new $a(this._options, this);
      if (this._cbs.onparserinit) {
        this._cbs.onparserinit(this);
      }
    }
    Wa()(ct, mh());
    ct.prototype._updatePosition = function (t) {
      if (this.endIndex === null) {
        if (this._tokenizer._sectionStart <= t) {
          this.startIndex = 0;
        } else {
          this.startIndex = this._tokenizer._sectionStart - t;
        }
      } else {
        this.startIndex = this.endIndex + 1;
      }
      this.endIndex = this._tokenizer.getAbsoluteIndex();
    };
    ct.prototype.ontext = function (t) {
      this._updatePosition(1);
      this.endIndex--;
      if (this._cbs.ontext) {
        this._cbs.ontext(t);
      }
    };
    ct.prototype.onopentagname = function (t) {
      if (this._lowerCaseTagNames) {
        t = t.toLowerCase();
      }
      this._tagname = t;
      if (!this._options.xmlMode && t in Ah) {
        for (var n; (n = this._stack[this._stack.length - 1]) in Ah[t]; this.onclosetag(n));
      }
      if (this._options.xmlMode || !(t in Va)) {
        this._stack.push(t);
      }
      if (this._cbs.onopentagname) {
        this._cbs.onopentagname(t);
      }
      if (this._cbs.onopentag) {
        this._attribs = {};
      }
    };
    ct.prototype.onopentagend = function () {
      this._updatePosition(1);
      if (this._attribs) {
        if (this._cbs.onopentag) {
          this._cbs.onopentag(this._tagname, this._attribs);
        }
        this._attribs = null;
      }
      if (!this._options.xmlMode && this._cbs.onclosetag && this._tagname in Va) {
        this._cbs.onclosetag(this._tagname);
      }
      this._tagname = "";
    };
    ct.prototype.onclosetag = function (t) {
      this._updatePosition(1);
      if (this._lowerCaseTagNames) {
        t = t.toLowerCase();
      }
      if (this._stack.length && (!(t in Va) || this._options.xmlMode)) {
        var n = this._stack.lastIndexOf(t);
        if (n !== -1) {
          if (this._cbs.onclosetag) {
            for (n = this._stack.length - n; n--;) {
              this._cbs.onclosetag(this._stack.pop());
            }
          } else {
            this._stack.length = n;
          }
        } else if (t === "p" && !this._options.xmlMode) {
          this.onopentagname(t);
          this._closeCurrentTag();
        }
      } else if (!this._options.xmlMode && (t === "br" || t === "p")) {
        this.onopentagname(t);
        this._closeCurrentTag();
      }
    };
    ct.prototype.onselfclosingtag = function () {
      if (this._options.xmlMode || this._options.recognizeSelfClosing) {
        this._closeCurrentTag();
      } else {
        this.onopentagend();
      }
    };
    ct.prototype._closeCurrentTag = function () {
      var t = this._tagname;
      this.onopentagend();
      if (this._stack[this._stack.length - 1] === t) {
        if (this._cbs.onclosetag) {
          this._cbs.onclosetag(t);
        }
        this._stack.pop();
      }
    };
    ct.prototype.onattribname = function (t) {
      if (this._lowerCaseAttributeNames) {
        t = t.toLowerCase();
      }
      this._attribname = t;
    };
    ct.prototype.onattribdata = function (t) {
      this._attribvalue += t;
    };
    ct.prototype.onattribend = function () {
      if (this._cbs.onattribute) {
        this._cbs.onattribute(this._attribname, this._attribvalue);
      }
      if (this._attribs && !Object.prototype.hasOwnProperty.call(this._attribs, this._attribname)) {
        this._attribs[this._attribname] = this._attribvalue;
      }
      this._attribname = "";
      this._attribvalue = "";
    };
    ct.prototype._getInstructionName = function (t) {
      var n = t.search(gy);
      var i = n < 0 ? t : t.substr(0, n);
      if (this._lowerCaseTagNames) {
        i = i.toLowerCase();
      }
      return i;
    };
    ct.prototype.ondeclaration = function (t) {
      if (this._cbs.onprocessinginstruction) {
        var n = this._getInstructionName(t);
        this._cbs.onprocessinginstruction("!" + n, "!" + t);
      }
    };
    ct.prototype.onprocessinginstruction = function (t) {
      if (this._cbs.onprocessinginstruction) {
        var n = this._getInstructionName(t);
        this._cbs.onprocessinginstruction("?" + n, "?" + t);
      }
    };
    ct.prototype.oncomment = function (t) {
      this._updatePosition(4);
      if (this._cbs.oncomment) {
        this._cbs.oncomment(t);
      }
      if (this._cbs.oncommentend) {
        this._cbs.oncommentend();
      }
    };
    ct.prototype.oncdata = function (t) {
      this._updatePosition(1);
      if (this._options.xmlMode || this._options.recognizeCDATA) {
        if (this._cbs.oncdatastart) {
          this._cbs.oncdatastart();
        }
        if (this._cbs.ontext) {
          this._cbs.ontext(t);
        }
        if (this._cbs.oncdataend) {
          this._cbs.oncdataend();
        }
      } else {
        this.oncomment("[CDATA[" + t + "]]");
      }
    };
    ct.prototype.onerror = function (t) {
      if (this._cbs.onerror) {
        this._cbs.onerror(t);
      }
    };
    ct.prototype.onend = function () {
      if (this._cbs.onclosetag) {
        for (var t = this._stack.length; t > 0; this._cbs.onclosetag(this._stack[--t]));
      }
      if (this._cbs.onend) {
        this._cbs.onend();
      }
    };
    ct.prototype.reset = function () {
      if (this._cbs.onreset) {
        this._cbs.onreset();
      }
      this._tokenizer.reset();
      this._tagname = "";
      this._attribname = "";
      this._attribs = null;
      this._stack = [];
      if (this._cbs.onparserinit) {
        this._cbs.onparserinit(this);
      }
    };
    ct.prototype.parseComplete = function (t) {
      this.reset();
      this.end(t);
    };
    ct.prototype.write = function (t) {
      this._tokenizer.write(t);
    };
    ct.prototype.end = function (t) {
      this._tokenizer.end(t);
    };
    ct.prototype.pause = function () {
      this._tokenizer.pause();
    };
    ct.prototype.resume = function () {
      this._tokenizer.resume();
    };
    ct.prototype.parseChunk = ct.prototype.write;
    ct.prototype.done = ct.prototype.end;
    bh.exports = ct;
  });
  var sn = O((gE, Dh) => {
    Dh.exports = {
      Text: "text",
      Directive: "directive",
      Comment: "comment",
      Script: "script",
      Style: "style",
      Tag: "tag",
      CDATA: "cdata",
      Doctype: "doctype",
      isTag: function (t) {
        return t.type === "tag" || t.type === "script" || t.type === "style";
      }
    };
  });
  var za = O((_E, xh) => {
    var _y = xh.exports = {
      get firstChild() {
        var t = this.children;
        return t && t[0] || null;
      },
      get lastChild() {
        var t = this.children;
        return t && t[t.length - 1] || null;
      },
      get nodeType() {
        return Eh[this.type] || Eh.element;
      }
    };
    var wh = {
      tagName: "name",
      childNodes: "children",
      parentNode: "parent",
      previousSibling: "prev",
      nextSibling: "next",
      nodeValue: "data"
    };
    var Eh = {
      element: 1,
      text: 3,
      cdata: 4,
      comment: 8
    };
    Object.keys(wh).forEach(function (t) {
      var n = wh[t];
      Object.defineProperty(_y, t, {
        get: function () {
          return this[n] || null;
        },
        set: function (i) {
          this[n] = i;
          return i;
        }
      });
    });
  });
  var Th = O((vE, Sh) => {
    var vy = za();
    var my = Sh.exports = Object.create(vy);
    var Ch = {
      tagName: "name"
    };
    Object.keys(Ch).forEach(function (t) {
      var n = Ch[t];
      Object.defineProperty(my, t, {
        get: function () {
          return this[n] || null;
        },
        set: function (i) {
          this[n] = i;
          return i;
        }
      });
    });
  });
  var Bh = O((mE, Lh) => {
    var xe = sn();
    var Xa = /\s+/g;
    var Ay = za();
    var by = Th();
    function Bt(t, n, i) {
      if (typeof t == "object") {
        i = n;
        n = t;
        t = null;
      } else if (typeof n == "function") {
        i = n;
        n = qh;
      }
      this._callback = t;
      this._options = n || qh;
      this._elementCB = i;
      this.dom = [];
      this._done = false;
      this._tagStack = [];
      this._parser = this._parser || null;
    }
    var qh = {
      normalizeWhitespace: false,
      withStartIndices: false,
      withEndIndices: false
    };
    Bt.prototype.onparserinit = function (t) {
      this._parser = t;
    };
    Bt.prototype.onreset = function () {
      Bt.call(this, this._callback, this._options, this._elementCB);
    };
    Bt.prototype.onend = function () {
      if (!this._done) {
        this._done = true;
        this._parser = null;
        this._handleCallback(null);
      }
    };
    Bt.prototype._handleCallback = Bt.prototype.onerror = function (t) {
      if (typeof this._callback == "function") {
        this._callback(t, this.dom);
      } else if (t) {
        throw t;
      }
    };
    Bt.prototype.onclosetag = function () {
      var t = this._tagStack.pop();
      if (this._options.withEndIndices && t) {
        t.endIndex = this._parser.endIndex;
      }
      if (this._elementCB) {
        this._elementCB(t);
      }
    };
    Bt.prototype._createDomElement = function (t) {
      if (!this._options.withDomLvl1) {
        return t;
      }
      var n;
      if (t.type === "tag") {
        n = Object.create(by);
      } else {
        n = Object.create(Ay);
      }
      for (var i in t) {
        if (t.hasOwnProperty(i)) {
          n[i] = t[i];
        }
      }
      return n;
    };
    Bt.prototype._addDomElement = function (t) {
      var n = this._tagStack[this._tagStack.length - 1];
      var i = n ? n.children : this.dom;
      var s = i[i.length - 1];
      t.next = null;
      if (this._options.withStartIndices) {
        t.startIndex = this._parser.startIndex;
      }
      if (this._options.withEndIndices) {
        t.endIndex = this._parser.endIndex;
      }
      if (s) {
        t.prev = s;
        s.next = t;
      } else {
        t.prev = null;
      }
      i.push(t);
      t.parent = n || null;
    };
    Bt.prototype.onopentag = function (t, n) {
      var i = {
        type: t === "script" ? xe.Script : t === "style" ? xe.Style : xe.Tag,
        name: t,
        attribs: n,
        children: []
      };
      var s = this._createDomElement(i);
      this._addDomElement(s);
      this._tagStack.push(s);
    };
    Bt.prototype.ontext = function (t) {
      var n = this._options.normalizeWhitespace || this._options.ignoreWhitespace;
      var i;
      if (!this._tagStack.length && this.dom.length && (i = this.dom[this.dom.length - 1]).type === xe.Text) {
        if (n) {
          i.data = (i.data + t).replace(Xa, " ");
        } else {
          i.data += t;
        }
      } else if (this._tagStack.length && (i = this._tagStack[this._tagStack.length - 1]) && (i = i.children[i.children.length - 1]) && i.type === xe.Text) {
        if (n) {
          i.data = (i.data + t).replace(Xa, " ");
        } else {
          i.data += t;
        }
      } else {
        if (n) {
          t = t.replace(Xa, " ");
        }
        var s = this._createDomElement({
          data: t,
          type: xe.Text
        });
        this._addDomElement(s);
      }
    };
    Bt.prototype.oncomment = function (t) {
      var n = this._tagStack[this._tagStack.length - 1];
      if (n && n.type === xe.Comment) {
        n.data += t;
        return;
      }
      var i = {
        data: t,
        type: xe.Comment
      };
      var s = this._createDomElement(i);
      this._addDomElement(s);
      this._tagStack.push(s);
    };
    Bt.prototype.oncdatastart = function () {
      var t = {
        children: [{
          data: "",
          type: xe.Text
        }],
        type: xe.CDATA
      };
      var n = this._createDomElement(t);
      this._addDomElement(n);
      this._tagStack.push(n);
    };
    Bt.prototype.oncommentend = Bt.prototype.oncdataend = function () {
      this._tagStack.pop();
    };
    Bt.prototype.onprocessinginstruction = function (t, n) {
      var i = this._createDomElement({
        name: t,
        data: n,
        type: xe.Directive
      });
      this._addDomElement(i);
    };
    Lh.exports = Bt;
  });
  var Ih = O((AE, Oh) => {
    var Rh = an();
    var Ya = Rh.DomHandler;
    var gu = Rh.DomUtils;
    function _u(t, n) {
      this.init(t, n);
    }
    Wa()(_u, Ya);
    _u.prototype.init = Ya;
    function Fh(t, n) {
      return gu.getElementsByTagName(t, n, true);
    }
    function du(t, n) {
      return gu.getElementsByTagName(t, n, true, 1)[0];
    }
    function xr(t, n, i) {
      return gu.getText(gu.getElementsByTagName(t, n, i, 1)).trim();
    }
    function Yt(t, n, i, s, o) {
      var c = xr(i, s, o);
      if (c) {
        t[n] = c;
      }
    }
    function yy(t) {
      return t === "rss" || t === "feed" || t === "rdf:RDF";
    }
    _u.prototype.onend = function () {
      var t = {};
      var n = du(yy, this.dom);
      var i;
      var s;
      if (n) {
        if (n.name === "feed") {
          s = n.children;
          t.type = "atom";
          Yt(t, "id", "id", s);
          Yt(t, "title", "title", s);
          if ((i = du("link", s)) && (i = i.attribs) && (i = i.href)) {
            t.link = i;
          }
          Yt(t, "description", "subtitle", s);
          if (i = xr("updated", s)) {
            t.updated = new Date(i);
          }
          Yt(t, "author", "email", s, true);
          t.items = Fh("entry", s).map(function (o) {
            var c = {};
            var l;
            o = o.children;
            Yt(c, "id", "id", o);
            Yt(c, "title", "title", o);
            if ((l = du("link", o)) && (l = l.attribs) && (l = l.href)) {
              c.link = l;
            }
            if (l = xr("summary", o) || xr("content", o)) {
              c.description = l;
            }
            if (l = xr("updated", o)) {
              c.pubDate = new Date(l);
            }
            return c;
          });
        } else {
          s = du("channel", n.children).children;
          t.type = n.name.substr(0, 3);
          t.id = "";
          Yt(t, "title", "title", s);
          Yt(t, "link", "link", s);
          Yt(t, "description", "description", s);
          if (i = xr("lastBuildDate", s)) {
            t.updated = new Date(i);
          }
          Yt(t, "author", "managingEditor", s, true);
          t.items = Fh("item", n.children).map(function (o) {
            var c = {};
            var l;
            o = o.children;
            Yt(c, "id", "guid", o);
            Yt(c, "title", "title", o);
            Yt(c, "link", "link", o);
            Yt(c, "description", "description", o);
            if (l = xr("pubDate", o)) {
              c.pubDate = new Date(l);
            }
            return c;
          });
        }
      }
      this.dom = t;
      Ya.prototype._handleCallback.call(this, n ? null : Error("couldn't find root of feed"));
    };
    Oh.exports = _u;
  });
  var kh = O((bE, Nh) => {
    Nh.exports = mu;
    function mu(t) {
      this._cbs = t || {};
    }
    var vu = an().EVENTS;
    Object.keys(vu).forEach(function (t) {
      if (vu[t] === 0) {
        t = "on" + t;
        mu.prototype[t] = function () {
          if (this._cbs[t]) {
            this._cbs[t]();
          }
        };
      } else if (vu[t] === 1) {
        t = "on" + t;
        mu.prototype[t] = function (n) {
          if (this._cbs[t]) {
            this._cbs[t](n);
          }
        };
      } else if (vu[t] === 2) {
        t = "on" + t;
        mu.prototype[t] = function (n, i) {
          if (this._cbs[t]) {
            this._cbs[t](n, i);
          }
        };
      } else {
        throw Error("wrong number of arguments");
      }
    });
  });
  var Mh = O(vt => {
    "use strict";

    Object.defineProperty(vt, "__esModule", {
      value: true
    });
    vt.Doctype = vt.CDATA = vt.Tag = vt.Style = vt.Script = vt.Comment = vt.Directive = vt.Text = vt.Root = vt.isTag = vt.ElementType = undefined;
    var oe;
    (function (t) {
      t.Root = "root";
      t.Text = "text";
      t.Directive = "directive";
      t.Comment = "comment";
      t.Script = "script";
      t.Style = "style";
      t.Tag = "tag";
      t.CDATA = "cdata";
      t.Doctype = "doctype";
    })(oe = vt.ElementType ||= {});
    function Dy(t) {
      return t.type === oe.Tag || t.type === oe.Script || t.type === oe.Style;
    }
    vt.isTag = Dy;
    vt.Root = oe.Root;
    vt.Text = oe.Text;
    vt.Directive = oe.Directive;
    vt.Comment = oe.Comment;
    vt.Script = oe.Script;
    vt.Style = oe.Style;
    vt.Tag = oe.Tag;
    vt.CDATA = oe.CDATA;
    vt.Doctype = oe.Doctype;
  });
  var Ka = O((DE, wy) => {
    wy.exports = {
      Aacute: "Á",
      aacute: "á",
      Abreve: "Ă",
      abreve: "ă",
      ac: "∾",
      acd: "∿",
      acE: "∾̳",
      Acirc: "Â",
      acirc: "â",
      acute: "´",
      Acy: "А",
      acy: "а",
      AElig: "Æ",
      aelig: "æ",
      af: "⁡",
      Afr: "𝔄",
      afr: "𝔞",
      Agrave: "À",
      agrave: "à",
      alefsym: "ℵ",
      aleph: "ℵ",
      Alpha: "Α",
      alpha: "α",
      Amacr: "Ā",
      amacr: "ā",
      amalg: "⨿",
      amp: "&",
      AMP: "&",
      andand: "⩕",
      And: "⩓",
      and: "∧",
      andd: "⩜",
      andslope: "⩘",
      andv: "⩚",
      ang: "∠",
      ange: "⦤",
      angle: "∠",
      angmsdaa: "⦨",
      angmsdab: "⦩",
      angmsdac: "⦪",
      angmsdad: "⦫",
      angmsdae: "⦬",
      angmsdaf: "⦭",
      angmsdag: "⦮",
      angmsdah: "⦯",
      angmsd: "∡",
      angrt: "∟",
      angrtvb: "⊾",
      angrtvbd: "⦝",
      angsph: "∢",
      angst: "Å",
      angzarr: "⍼",
      Aogon: "Ą",
      aogon: "ą",
      Aopf: "𝔸",
      aopf: "𝕒",
      apacir: "⩯",
      ap: "≈",
      apE: "⩰",
      ape: "≊",
      apid: "≋",
      apos: "'",
      ApplyFunction: "⁡",
      approx: "≈",
      approxeq: "≊",
      Aring: "Å",
      aring: "å",
      Ascr: "𝒜",
      ascr: "𝒶",
      Assign: "≔",
      ast: "*",
      asymp: "≈",
      asympeq: "≍",
      Atilde: "Ã",
      atilde: "ã",
      Auml: "Ä",
      auml: "ä",
      awconint: "∳",
      awint: "⨑",
      backcong: "≌",
      backepsilon: "϶",
      backprime: "‵",
      backsim: "∽",
      backsimeq: "⋍",
      Backslash: "∖",
      Barv: "⫧",
      barvee: "⊽",
      barwed: "⌅",
      Barwed: "⌆",
      barwedge: "⌅",
      bbrk: "⎵",
      bbrktbrk: "⎶",
      bcong: "≌",
      Bcy: "Б",
      bcy: "б",
      bdquo: "„",
      becaus: "∵",
      because: "∵",
      Because: "∵",
      bemptyv: "⦰",
      bepsi: "϶",
      bernou: "ℬ",
      Bernoullis: "ℬ",
      Beta: "Β",
      beta: "β",
      beth: "ℶ",
      between: "≬",
      Bfr: "𝔅",
      bfr: "𝔟",
      bigcap: "⋂",
      bigcirc: "◯",
      bigcup: "⋃",
      bigodot: "⨀",
      bigoplus: "⨁",
      bigotimes: "⨂",
      bigsqcup: "⨆",
      bigstar: "★",
      bigtriangledown: "▽",
      bigtriangleup: "△",
      biguplus: "⨄",
      bigvee: "⋁",
      bigwedge: "⋀",
      bkarow: "⤍",
      blacklozenge: "⧫",
      blacksquare: "▪",
      blacktriangle: "▴",
      blacktriangledown: "▾",
      blacktriangleleft: "◂",
      blacktriangleright: "▸",
      blank: "␣",
      blk12: "▒",
      blk14: "░",
      blk34: "▓",
      block: "█",
      bne: "=⃥",
      bnequiv: "≡⃥",
      bNot: "⫭",
      bnot: "⌐",
      Bopf: "𝔹",
      bopf: "𝕓",
      bot: "⊥",
      bottom: "⊥",
      bowtie: "⋈",
      boxbox: "⧉",
      boxdl: "┐",
      boxdL: "╕",
      boxDl: "╖",
      boxDL: "╗",
      boxdr: "┌",
      boxdR: "╒",
      boxDr: "╓",
      boxDR: "╔",
      boxh: "─",
      boxH: "═",
      boxhd: "┬",
      boxHd: "╤",
      boxhD: "╥",
      boxHD: "╦",
      boxhu: "┴",
      boxHu: "╧",
      boxhU: "╨",
      boxHU: "╩",
      boxminus: "⊟",
      boxplus: "⊞",
      boxtimes: "⊠",
      boxul: "┘",
      boxuL: "╛",
      boxUl: "╜",
      boxUL: "╝",
      boxur: "└",
      boxuR: "╘",
      boxUr: "╙",
      boxUR: "╚",
      boxv: "│",
      boxV: "║",
      boxvh: "┼",
      boxvH: "╪",
      boxVh: "╫",
      boxVH: "╬",
      boxvl: "┤",
      boxvL: "╡",
      boxVl: "╢",
      boxVL: "╣",
      boxvr: "├",
      boxvR: "╞",
      boxVr: "╟",
      boxVR: "╠",
      bprime: "‵",
      breve: "˘",
      Breve: "˘",
      brvbar: "¦",
      bscr: "𝒷",
      Bscr: "ℬ",
      bsemi: "⁏",
      bsim: "∽",
      bsime: "⋍",
      bsolb: "⧅",
      bsol: "\\",
      bsolhsub: "⟈",
      bull: "•",
      bullet: "•",
      bump: "≎",
      bumpE: "⪮",
      bumpe: "≏",
      Bumpeq: "≎",
      bumpeq: "≏",
      Cacute: "Ć",
      cacute: "ć",
      capand: "⩄",
      capbrcup: "⩉",
      capcap: "⩋",
      cap: "∩",
      Cap: "⋒",
      capcup: "⩇",
      capdot: "⩀",
      CapitalDifferentialD: "ⅅ",
      caps: "∩︀",
      caret: "⁁",
      caron: "ˇ",
      Cayleys: "ℭ",
      ccaps: "⩍",
      Ccaron: "Č",
      ccaron: "č",
      Ccedil: "Ç",
      ccedil: "ç",
      Ccirc: "Ĉ",
      ccirc: "ĉ",
      Cconint: "∰",
      ccups: "⩌",
      ccupssm: "⩐",
      Cdot: "Ċ",
      cdot: "ċ",
      cedil: "¸",
      Cedilla: "¸",
      cemptyv: "⦲",
      cent: "¢",
      centerdot: "·",
      CenterDot: "·",
      cfr: "𝔠",
      Cfr: "ℭ",
      CHcy: "Ч",
      chcy: "ч",
      check: "✓",
      checkmark: "✓",
      Chi: "Χ",
      chi: "χ",
      circ: "ˆ",
      circeq: "≗",
      circlearrowleft: "↺",
      circlearrowright: "↻",
      circledast: "⊛",
      circledcirc: "⊚",
      circleddash: "⊝",
      CircleDot: "⊙",
      circledR: "®",
      circledS: "Ⓢ",
      CircleMinus: "⊖",
      CirclePlus: "⊕",
      CircleTimes: "⊗",
      cir: "○",
      cirE: "⧃",
      cire: "≗",
      cirfnint: "⨐",
      cirmid: "⫯",
      cirscir: "⧂",
      ClockwiseContourIntegral: "∲",
      CloseCurlyDoubleQuote: "”",
      CloseCurlyQuote: "’",
      clubs: "♣",
      clubsuit: "♣",
      colon: ":",
      Colon: "∷",
      Colone: "⩴",
      colone: "≔",
      coloneq: "≔",
      comma: ",",
      commat: "@",
      comp: "∁",
      compfn: "∘",
      complement: "∁",
      complexes: "ℂ",
      cong: "≅",
      congdot: "⩭",
      Congruent: "≡",
      conint: "∮",
      Conint: "∯",
      ContourIntegral: "∮",
      copf: "𝕔",
      Copf: "ℂ",
      coprod: "∐",
      Coproduct: "∐",
      copy: "©",
      COPY: "©",
      copysr: "℗",
      CounterClockwiseContourIntegral: "∳",
      crarr: "↵",
      cross: "✗",
      Cross: "⨯",
      Cscr: "𝒞",
      cscr: "𝒸",
      csub: "⫏",
      csube: "⫑",
      csup: "⫐",
      csupe: "⫒",
      ctdot: "⋯",
      cudarrl: "⤸",
      cudarrr: "⤵",
      cuepr: "⋞",
      cuesc: "⋟",
      cularr: "↶",
      cularrp: "⤽",
      cupbrcap: "⩈",
      cupcap: "⩆",
      CupCap: "≍",
      cup: "∪",
      Cup: "⋓",
      cupcup: "⩊",
      cupdot: "⊍",
      cupor: "⩅",
      cups: "∪︀",
      curarr: "↷",
      curarrm: "⤼",
      curlyeqprec: "⋞",
      curlyeqsucc: "⋟",
      curlyvee: "⋎",
      curlywedge: "⋏",
      curren: "¤",
      curvearrowleft: "↶",
      curvearrowright: "↷",
      cuvee: "⋎",
      cuwed: "⋏",
      cwconint: "∲",
      cwint: "∱",
      cylcty: "⌭",
      dagger: "†",
      Dagger: "‡",
      daleth: "ℸ",
      darr: "↓",
      Darr: "↡",
      dArr: "⇓",
      dash: "‐",
      Dashv: "⫤",
      dashv: "⊣",
      dbkarow: "⤏",
      dblac: "˝",
      Dcaron: "Ď",
      dcaron: "ď",
      Dcy: "Д",
      dcy: "д",
      ddagger: "‡",
      ddarr: "⇊",
      DD: "ⅅ",
      dd: "ⅆ",
      DDotrahd: "⤑",
      ddotseq: "⩷",
      deg: "°",
      Del: "∇",
      Delta: "Δ",
      delta: "δ",
      demptyv: "⦱",
      dfisht: "⥿",
      Dfr: "𝔇",
      dfr: "𝔡",
      dHar: "⥥",
      dharl: "⇃",
      dharr: "⇂",
      DiacriticalAcute: "´",
      DiacriticalDot: "˙",
      DiacriticalDoubleAcute: "˝",
      DiacriticalGrave: "`",
      DiacriticalTilde: "˜",
      diam: "⋄",
      diamond: "⋄",
      Diamond: "⋄",
      diamondsuit: "♦",
      diams: "♦",
      die: "¨",
      DifferentialD: "ⅆ",
      digamma: "ϝ",
      disin: "⋲",
      div: "÷",
      divide: "÷",
      divideontimes: "⋇",
      divonx: "⋇",
      DJcy: "Ђ",
      djcy: "ђ",
      dlcorn: "⌞",
      dlcrop: "⌍",
      dollar: "$",
      Dopf: "𝔻",
      dopf: "𝕕",
      Dot: "¨",
      dot: "˙",
      DotDot: "⃜",
      doteq: "≐",
      doteqdot: "≑",
      DotEqual: "≐",
      dotminus: "∸",
      dotplus: "∔",
      dotsquare: "⊡",
      doublebarwedge: "⌆",
      DoubleContourIntegral: "∯",
      DoubleDot: "¨",
      DoubleDownArrow: "⇓",
      DoubleLeftArrow: "⇐",
      DoubleLeftRightArrow: "⇔",
      DoubleLeftTee: "⫤",
      DoubleLongLeftArrow: "⟸",
      DoubleLongLeftRightArrow: "⟺",
      DoubleLongRightArrow: "⟹",
      DoubleRightArrow: "⇒",
      DoubleRightTee: "⊨",
      DoubleUpArrow: "⇑",
      DoubleUpDownArrow: "⇕",
      DoubleVerticalBar: "∥",
      DownArrowBar: "⤓",
      downarrow: "↓",
      DownArrow: "↓",
      Downarrow: "⇓",
      DownArrowUpArrow: "⇵",
      DownBreve: "̑",
      downdownarrows: "⇊",
      downharpoonleft: "⇃",
      downharpoonright: "⇂",
      DownLeftRightVector: "⥐",
      DownLeftTeeVector: "⥞",
      DownLeftVectorBar: "⥖",
      DownLeftVector: "↽",
      DownRightTeeVector: "⥟",
      DownRightVectorBar: "⥗",
      DownRightVector: "⇁",
      DownTeeArrow: "↧",
      DownTee: "⊤",
      drbkarow: "⤐",
      drcorn: "⌟",
      drcrop: "⌌",
      Dscr: "𝒟",
      dscr: "𝒹",
      DScy: "Ѕ",
      dscy: "ѕ",
      dsol: "⧶",
      Dstrok: "Đ",
      dstrok: "đ",
      dtdot: "⋱",
      dtri: "▿",
      dtrif: "▾",
      duarr: "⇵",
      duhar: "⥯",
      dwangle: "⦦",
      DZcy: "Џ",
      dzcy: "џ",
      dzigrarr: "⟿",
      Eacute: "É",
      eacute: "é",
      easter: "⩮",
      Ecaron: "Ě",
      ecaron: "ě",
      Ecirc: "Ê",
      ecirc: "ê",
      ecir: "≖",
      ecolon: "≕",
      Ecy: "Э",
      ecy: "э",
      eDDot: "⩷",
      Edot: "Ė",
      edot: "ė",
      eDot: "≑",
      ee: "ⅇ",
      efDot: "≒",
      Efr: "𝔈",
      efr: "𝔢",
      eg: "⪚",
      Egrave: "È",
      egrave: "è",
      egs: "⪖",
      egsdot: "⪘",
      el: "⪙",
      Element: "∈",
      elinters: "⏧",
      ell: "ℓ",
      els: "⪕",
      elsdot: "⪗",
      Emacr: "Ē",
      emacr: "ē",
      empty: "∅",
      emptyset: "∅",
      EmptySmallSquare: "◻",
      emptyv: "∅",
      EmptyVerySmallSquare: "▫",
      emsp13: "\u2004",
      emsp14: "\u2005",
      emsp: "\u2003",
      ENG: "Ŋ",
      eng: "ŋ",
      ensp: "\u2002",
      Eogon: "Ę",
      eogon: "ę",
      Eopf: "𝔼",
      eopf: "𝕖",
      epar: "⋕",
      eparsl: "⧣",
      eplus: "⩱",
      epsi: "ε",
      Epsilon: "Ε",
      epsilon: "ε",
      epsiv: "ϵ",
      eqcirc: "≖",
      eqcolon: "≕",
      eqsim: "≂",
      eqslantgtr: "⪖",
      eqslantless: "⪕",
      Equal: "⩵",
      equals: "=",
      EqualTilde: "≂",
      equest: "≟",
      Equilibrium: "⇌",
      equiv: "≡",
      equivDD: "⩸",
      eqvparsl: "⧥",
      erarr: "⥱",
      erDot: "≓",
      escr: "ℯ",
      Escr: "ℰ",
      esdot: "≐",
      Esim: "⩳",
      esim: "≂",
      Eta: "Η",
      eta: "η",
      ETH: "Ð",
      eth: "ð",
      Euml: "Ë",
      euml: "ë",
      euro: "€",
      excl: "!",
      exist: "∃",
      Exists: "∃",
      expectation: "ℰ",
      exponentiale: "ⅇ",
      ExponentialE: "ⅇ",
      fallingdotseq: "≒",
      Fcy: "Ф",
      fcy: "ф",
      female: "♀",
      ffilig: "ﬃ",
      fflig: "ﬀ",
      ffllig: "ﬄ",
      Ffr: "𝔉",
      ffr: "𝔣",
      filig: "ﬁ",
      FilledSmallSquare: "◼",
      FilledVerySmallSquare: "▪",
      fjlig: "fj",
      flat: "♭",
      fllig: "ﬂ",
      fltns: "▱",
      fnof: "ƒ",
      Fopf: "𝔽",
      fopf: "𝕗",
      forall: "∀",
      ForAll: "∀",
      fork: "⋔",
      forkv: "⫙",
      Fouriertrf: "ℱ",
      fpartint: "⨍",
      frac12: "½",
      frac13: "⅓",
      frac14: "¼",
      frac15: "⅕",
      frac16: "⅙",
      frac18: "⅛",
      frac23: "⅔",
      frac25: "⅖",
      frac34: "¾",
      frac35: "⅗",
      frac38: "⅜",
      frac45: "⅘",
      frac56: "⅚",
      frac58: "⅝",
      frac78: "⅞",
      frasl: "⁄",
      frown: "⌢",
      fscr: "𝒻",
      Fscr: "ℱ",
      gacute: "ǵ",
      Gamma: "Γ",
      gamma: "γ",
      Gammad: "Ϝ",
      gammad: "ϝ",
      gap: "⪆",
      Gbreve: "Ğ",
      gbreve: "ğ",
      Gcedil: "Ģ",
      Gcirc: "Ĝ",
      gcirc: "ĝ",
      Gcy: "Г",
      gcy: "г",
      Gdot: "Ġ",
      gdot: "ġ",
      ge: "≥",
      gE: "≧",
      gEl: "⪌",
      gel: "⋛",
      geq: "≥",
      geqq: "≧",
      geqslant: "⩾",
      gescc: "⪩",
      ges: "⩾",
      gesdot: "⪀",
      gesdoto: "⪂",
      gesdotol: "⪄",
      gesl: "⋛︀",
      gesles: "⪔",
      Gfr: "𝔊",
      gfr: "𝔤",
      gg: "≫",
      Gg: "⋙",
      ggg: "⋙",
      gimel: "ℷ",
      GJcy: "Ѓ",
      gjcy: "ѓ",
      gla: "⪥",
      gl: "≷",
      glE: "⪒",
      glj: "⪤",
      gnap: "⪊",
      gnapprox: "⪊",
      gne: "⪈",
      gnE: "≩",
      gneq: "⪈",
      gneqq: "≩",
      gnsim: "⋧",
      Gopf: "𝔾",
      gopf: "𝕘",
      grave: "`",
      GreaterEqual: "≥",
      GreaterEqualLess: "⋛",
      GreaterFullEqual: "≧",
      GreaterGreater: "⪢",
      GreaterLess: "≷",
      GreaterSlantEqual: "⩾",
      GreaterTilde: "≳",
      Gscr: "𝒢",
      gscr: "ℊ",
      gsim: "≳",
      gsime: "⪎",
      gsiml: "⪐",
      gtcc: "⪧",
      gtcir: "⩺",
      gt: ">",
      GT: ">",
      Gt: "≫",
      gtdot: "⋗",
      gtlPar: "⦕",
      gtquest: "⩼",
      gtrapprox: "⪆",
      gtrarr: "⥸",
      gtrdot: "⋗",
      gtreqless: "⋛",
      gtreqqless: "⪌",
      gtrless: "≷",
      gtrsim: "≳",
      gvertneqq: "≩︀",
      gvnE: "≩︀",
      Hacek: "ˇ",
      hairsp: "\u200A",
      half: "½",
      hamilt: "ℋ",
      HARDcy: "Ъ",
      hardcy: "ъ",
      harrcir: "⥈",
      harr: "↔",
      hArr: "⇔",
      harrw: "↭",
      Hat: "^",
      hbar: "ℏ",
      Hcirc: "Ĥ",
      hcirc: "ĥ",
      hearts: "♥",
      heartsuit: "♥",
      hellip: "…",
      hercon: "⊹",
      hfr: "𝔥",
      Hfr: "ℌ",
      HilbertSpace: "ℋ",
      hksearow: "⤥",
      hkswarow: "⤦",
      hoarr: "⇿",
      homtht: "∻",
      hookleftarrow: "↩",
      hookrightarrow: "↪",
      hopf: "𝕙",
      Hopf: "ℍ",
      horbar: "―",
      HorizontalLine: "─",
      hscr: "𝒽",
      Hscr: "ℋ",
      hslash: "ℏ",
      Hstrok: "Ħ",
      hstrok: "ħ",
      HumpDownHump: "≎",
      HumpEqual: "≏",
      hybull: "⁃",
      hyphen: "‐",
      Iacute: "Í",
      iacute: "í",
      ic: "⁣",
      Icirc: "Î",
      icirc: "î",
      Icy: "И",
      icy: "и",
      Idot: "İ",
      IEcy: "Е",
      iecy: "е",
      iexcl: "¡",
      iff: "⇔",
      ifr: "𝔦",
      Ifr: "ℑ",
      Igrave: "Ì",
      igrave: "ì",
      ii: "ⅈ",
      iiiint: "⨌",
      iiint: "∭",
      iinfin: "⧜",
      iiota: "℩",
      IJlig: "Ĳ",
      ijlig: "ĳ",
      Imacr: "Ī",
      imacr: "ī",
      image: "ℑ",
      ImaginaryI: "ⅈ",
      imagline: "ℐ",
      imagpart: "ℑ",
      imath: "ı",
      Im: "ℑ",
      imof: "⊷",
      imped: "Ƶ",
      Implies: "⇒",
      incare: "℅",
      in: "∈",
      infin: "∞",
      infintie: "⧝",
      inodot: "ı",
      intcal: "⊺",
      int: "∫",
      Int: "∬",
      integers: "ℤ",
      Integral: "∫",
      intercal: "⊺",
      Intersection: "⋂",
      intlarhk: "⨗",
      intprod: "⨼",
      InvisibleComma: "⁣",
      InvisibleTimes: "⁢",
      IOcy: "Ё",
      iocy: "ё",
      Iogon: "Į",
      iogon: "į",
      Iopf: "𝕀",
      iopf: "𝕚",
      Iota: "Ι",
      iota: "ι",
      iprod: "⨼",
      iquest: "¿",
      iscr: "𝒾",
      Iscr: "ℐ",
      isin: "∈",
      isindot: "⋵",
      isinE: "⋹",
      isins: "⋴",
      isinsv: "⋳",
      isinv: "∈",
      it: "⁢",
      Itilde: "Ĩ",
      itilde: "ĩ",
      Iukcy: "І",
      iukcy: "і",
      Iuml: "Ï",
      iuml: "ï",
      Jcirc: "Ĵ",
      jcirc: "ĵ",
      Jcy: "Й",
      jcy: "й",
      Jfr: "𝔍",
      jfr: "𝔧",
      jmath: "ȷ",
      Jopf: "𝕁",
      jopf: "𝕛",
      Jscr: "𝒥",
      jscr: "𝒿",
      Jsercy: "Ј",
      jsercy: "ј",
      Jukcy: "Є",
      jukcy: "є",
      Kappa: "Κ",
      kappa: "κ",
      kappav: "ϰ",
      Kcedil: "Ķ",
      kcedil: "ķ",
      Kcy: "К",
      kcy: "к",
      Kfr: "𝔎",
      kfr: "𝔨",
      kgreen: "ĸ",
      KHcy: "Х",
      khcy: "х",
      KJcy: "Ќ",
      kjcy: "ќ",
      Kopf: "𝕂",
      kopf: "𝕜",
      Kscr: "𝒦",
      kscr: "𝓀",
      lAarr: "⇚",
      Lacute: "Ĺ",
      lacute: "ĺ",
      laemptyv: "⦴",
      lagran: "ℒ",
      Lambda: "Λ",
      lambda: "λ",
      lang: "⟨",
      Lang: "⟪",
      langd: "⦑",
      langle: "⟨",
      lap: "⪅",
      Laplacetrf: "ℒ",
      laquo: "«",
      larrb: "⇤",
      larrbfs: "⤟",
      larr: "←",
      Larr: "↞",
      lArr: "⇐",
      larrfs: "⤝",
      larrhk: "↩",
      larrlp: "↫",
      larrpl: "⤹",
      larrsim: "⥳",
      larrtl: "↢",
      latail: "⤙",
      lAtail: "⤛",
      lat: "⪫",
      late: "⪭",
      lates: "⪭︀",
      lbarr: "⤌",
      lBarr: "⤎",
      lbbrk: "❲",
      lbrace: "{",
      lbrack: "[",
      lbrke: "⦋",
      lbrksld: "⦏",
      lbrkslu: "⦍",
      Lcaron: "Ľ",
      lcaron: "ľ",
      Lcedil: "Ļ",
      lcedil: "ļ",
      lceil: "⌈",
      lcub: "{",
      Lcy: "Л",
      lcy: "л",
      ldca: "⤶",
      ldquo: "“",
      ldquor: "„",
      ldrdhar: "⥧",
      ldrushar: "⥋",
      ldsh: "↲",
      le: "≤",
      lE: "≦",
      LeftAngleBracket: "⟨",
      LeftArrowBar: "⇤",
      leftarrow: "←",
      LeftArrow: "←",
      Leftarrow: "⇐",
      LeftArrowRightArrow: "⇆",
      leftarrowtail: "↢",
      LeftCeiling: "⌈",
      LeftDoubleBracket: "⟦",
      LeftDownTeeVector: "⥡",
      LeftDownVectorBar: "⥙",
      LeftDownVector: "⇃",
      LeftFloor: "⌊",
      leftharpoondown: "↽",
      leftharpoonup: "↼",
      leftleftarrows: "⇇",
      leftrightarrow: "↔",
      LeftRightArrow: "↔",
      Leftrightarrow: "⇔",
      leftrightarrows: "⇆",
      leftrightharpoons: "⇋",
      leftrightsquigarrow: "↭",
      LeftRightVector: "⥎",
      LeftTeeArrow: "↤",
      LeftTee: "⊣",
      LeftTeeVector: "⥚",
      leftthreetimes: "⋋",
      LeftTriangleBar: "⧏",
      LeftTriangle: "⊲",
      LeftTriangleEqual: "⊴",
      LeftUpDownVector: "⥑",
      LeftUpTeeVector: "⥠",
      LeftUpVectorBar: "⥘",
      LeftUpVector: "↿",
      LeftVectorBar: "⥒",
      LeftVector: "↼",
      lEg: "⪋",
      leg: "⋚",
      leq: "≤",
      leqq: "≦",
      leqslant: "⩽",
      lescc: "⪨",
      les: "⩽",
      lesdot: "⩿",
      lesdoto: "⪁",
      lesdotor: "⪃",
      lesg: "⋚︀",
      lesges: "⪓",
      lessapprox: "⪅",
      lessdot: "⋖",
      lesseqgtr: "⋚",
      lesseqqgtr: "⪋",
      LessEqualGreater: "⋚",
      LessFullEqual: "≦",
      LessGreater: "≶",
      lessgtr: "≶",
      LessLess: "⪡",
      lesssim: "≲",
      LessSlantEqual: "⩽",
      LessTilde: "≲",
      lfisht: "⥼",
      lfloor: "⌊",
      Lfr: "𝔏",
      lfr: "𝔩",
      lg: "≶",
      lgE: "⪑",
      lHar: "⥢",
      lhard: "↽",
      lharu: "↼",
      lharul: "⥪",
      lhblk: "▄",
      LJcy: "Љ",
      ljcy: "љ",
      llarr: "⇇",
      ll: "≪",
      Ll: "⋘",
      llcorner: "⌞",
      Lleftarrow: "⇚",
      llhard: "⥫",
      lltri: "◺",
      Lmidot: "Ŀ",
      lmidot: "ŀ",
      lmoustache: "⎰",
      lmoust: "⎰",
      lnap: "⪉",
      lnapprox: "⪉",
      lne: "⪇",
      lnE: "≨",
      lneq: "⪇",
      lneqq: "≨",
      lnsim: "⋦",
      loang: "⟬",
      loarr: "⇽",
      lobrk: "⟦",
      longleftarrow: "⟵",
      LongLeftArrow: "⟵",
      Longleftarrow: "⟸",
      longleftrightarrow: "⟷",
      LongLeftRightArrow: "⟷",
      Longleftrightarrow: "⟺",
      longmapsto: "⟼",
      longrightarrow: "⟶",
      LongRightArrow: "⟶",
      Longrightarrow: "⟹",
      looparrowleft: "↫",
      looparrowright: "↬",
      lopar: "⦅",
      Lopf: "𝕃",
      lopf: "𝕝",
      loplus: "⨭",
      lotimes: "⨴",
      lowast: "∗",
      lowbar: "_",
      LowerLeftArrow: "↙",
      LowerRightArrow: "↘",
      loz: "◊",
      lozenge: "◊",
      lozf: "⧫",
      lpar: "(",
      lparlt: "⦓",
      lrarr: "⇆",
      lrcorner: "⌟",
      lrhar: "⇋",
      lrhard: "⥭",
      lrm: "‎",
      lrtri: "⊿",
      lsaquo: "‹",
      lscr: "𝓁",
      Lscr: "ℒ",
      lsh: "↰",
      Lsh: "↰",
      lsim: "≲",
      lsime: "⪍",
      lsimg: "⪏",
      lsqb: "[",
      lsquo: "‘",
      lsquor: "‚",
      Lstrok: "Ł",
      lstrok: "ł",
      ltcc: "⪦",
      ltcir: "⩹",
      lt: "<",
      LT: "<",
      Lt: "≪",
      ltdot: "⋖",
      lthree: "⋋",
      ltimes: "⋉",
      ltlarr: "⥶",
      ltquest: "⩻",
      ltri: "◃",
      ltrie: "⊴",
      ltrif: "◂",
      ltrPar: "⦖",
      lurdshar: "⥊",
      luruhar: "⥦",
      lvertneqq: "≨︀",
      lvnE: "≨︀",
      macr: "¯",
      male: "♂",
      malt: "✠",
      maltese: "✠",
      Map: "⤅",
      map: "↦",
      mapsto: "↦",
      mapstodown: "↧",
      mapstoleft: "↤",
      mapstoup: "↥",
      marker: "▮",
      mcomma: "⨩",
      Mcy: "М",
      mcy: "м",
      mdash: "—",
      mDDot: "∺",
      measuredangle: "∡",
      MediumSpace: "\u205F",
      Mellintrf: "ℳ",
      Mfr: "𝔐",
      mfr: "𝔪",
      mho: "℧",
      micro: "µ",
      midast: "*",
      midcir: "⫰",
      mid: "∣",
      middot: "·",
      minusb: "⊟",
      minus: "−",
      minusd: "∸",
      minusdu: "⨪",
      MinusPlus: "∓",
      mlcp: "⫛",
      mldr: "…",
      mnplus: "∓",
      models: "⊧",
      Mopf: "𝕄",
      mopf: "𝕞",
      mp: "∓",
      mscr: "𝓂",
      Mscr: "ℳ",
      mstpos: "∾",
      Mu: "Μ",
      mu: "μ",
      multimap: "⊸",
      mumap: "⊸",
      nabla: "∇",
      Nacute: "Ń",
      nacute: "ń",
      nang: "∠⃒",
      nap: "≉",
      napE: "⩰̸",
      napid: "≋̸",
      napos: "ŉ",
      napprox: "≉",
      natural: "♮",
      naturals: "ℕ",
      natur: "♮",
      nbsp: "\xA0",
      nbump: "≎̸",
      nbumpe: "≏̸",
      ncap: "⩃",
      Ncaron: "Ň",
      ncaron: "ň",
      Ncedil: "Ņ",
      ncedil: "ņ",
      ncong: "≇",
      ncongdot: "⩭̸",
      ncup: "⩂",
      Ncy: "Н",
      ncy: "н",
      ndash: "–",
      nearhk: "⤤",
      nearr: "↗",
      neArr: "⇗",
      nearrow: "↗",
      ne: "≠",
      nedot: "≐̸",
      NegativeMediumSpace: "​",
      NegativeThickSpace: "​",
      NegativeThinSpace: "​",
      NegativeVeryThinSpace: "​",
      nequiv: "≢",
      nesear: "⤨",
      nesim: "≂̸",
      NestedGreaterGreater: "≫",
      NestedLessLess: "≪",
      NewLine: `
`,
      nexist: "∄",
      nexists: "∄",
      Nfr: "𝔑",
      nfr: "𝔫",
      ngE: "≧̸",
      nge: "≱",
      ngeq: "≱",
      ngeqq: "≧̸",
      ngeqslant: "⩾̸",
      nges: "⩾̸",
      nGg: "⋙̸",
      ngsim: "≵",
      nGt: "≫⃒",
      ngt: "≯",
      ngtr: "≯",
      nGtv: "≫̸",
      nharr: "↮",
      nhArr: "⇎",
      nhpar: "⫲",
      ni: "∋",
      nis: "⋼",
      nisd: "⋺",
      niv: "∋",
      NJcy: "Њ",
      njcy: "њ",
      nlarr: "↚",
      nlArr: "⇍",
      nldr: "‥",
      nlE: "≦̸",
      nle: "≰",
      nleftarrow: "↚",
      nLeftarrow: "⇍",
      nleftrightarrow: "↮",
      nLeftrightarrow: "⇎",
      nleq: "≰",
      nleqq: "≦̸",
      nleqslant: "⩽̸",
      nles: "⩽̸",
      nless: "≮",
      nLl: "⋘̸",
      nlsim: "≴",
      nLt: "≪⃒",
      nlt: "≮",
      nltri: "⋪",
      nltrie: "⋬",
      nLtv: "≪̸",
      nmid: "∤",
      NoBreak: "⁠",
      NonBreakingSpace: "\xA0",
      nopf: "𝕟",
      Nopf: "ℕ",
      Not: "⫬",
      not: "¬",
      NotCongruent: "≢",
      NotCupCap: "≭",
      NotDoubleVerticalBar: "∦",
      NotElement: "∉",
      NotEqual: "≠",
      NotEqualTilde: "≂̸",
      NotExists: "∄",
      NotGreater: "≯",
      NotGreaterEqual: "≱",
      NotGreaterFullEqual: "≧̸",
      NotGreaterGreater: "≫̸",
      NotGreaterLess: "≹",
      NotGreaterSlantEqual: "⩾̸",
      NotGreaterTilde: "≵",
      NotHumpDownHump: "≎̸",
      NotHumpEqual: "≏̸",
      notin: "∉",
      notindot: "⋵̸",
      notinE: "⋹̸",
      notinva: "∉",
      notinvb: "⋷",
      notinvc: "⋶",
      NotLeftTriangleBar: "⧏̸",
      NotLeftTriangle: "⋪",
      NotLeftTriangleEqual: "⋬",
      NotLess: "≮",
      NotLessEqual: "≰",
      NotLessGreater: "≸",
      NotLessLess: "≪̸",
      NotLessSlantEqual: "⩽̸",
      NotLessTilde: "≴",
      NotNestedGreaterGreater: "⪢̸",
      NotNestedLessLess: "⪡̸",
      notni: "∌",
      notniva: "∌",
      notnivb: "⋾",
      notnivc: "⋽",
      NotPrecedes: "⊀",
      NotPrecedesEqual: "⪯̸",
      NotPrecedesSlantEqual: "⋠",
      NotReverseElement: "∌",
      NotRightTriangleBar: "⧐̸",
      NotRightTriangle: "⋫",
      NotRightTriangleEqual: "⋭",
      NotSquareSubset: "⊏̸",
      NotSquareSubsetEqual: "⋢",
      NotSquareSuperset: "⊐̸",
      NotSquareSupersetEqual: "⋣",
      NotSubset: "⊂⃒",
      NotSubsetEqual: "⊈",
      NotSucceeds: "⊁",
      NotSucceedsEqual: "⪰̸",
      NotSucceedsSlantEqual: "⋡",
      NotSucceedsTilde: "≿̸",
      NotSuperset: "⊃⃒",
      NotSupersetEqual: "⊉",
      NotTilde: "≁",
      NotTildeEqual: "≄",
      NotTildeFullEqual: "≇",
      NotTildeTilde: "≉",
      NotVerticalBar: "∤",
      nparallel: "∦",
      npar: "∦",
      nparsl: "⫽⃥",
      npart: "∂̸",
      npolint: "⨔",
      npr: "⊀",
      nprcue: "⋠",
      nprec: "⊀",
      npreceq: "⪯̸",
      npre: "⪯̸",
      nrarrc: "⤳̸",
      nrarr: "↛",
      nrArr: "⇏",
      nrarrw: "↝̸",
      nrightarrow: "↛",
      nRightarrow: "⇏",
      nrtri: "⋫",
      nrtrie: "⋭",
      nsc: "⊁",
      nsccue: "⋡",
      nsce: "⪰̸",
      Nscr: "𝒩",
      nscr: "𝓃",
      nshortmid: "∤",
      nshortparallel: "∦",
      nsim: "≁",
      nsime: "≄",
      nsimeq: "≄",
      nsmid: "∤",
      nspar: "∦",
      nsqsube: "⋢",
      nsqsupe: "⋣",
      nsub: "⊄",
      nsubE: "⫅̸",
      nsube: "⊈",
      nsubset: "⊂⃒",
      nsubseteq: "⊈",
      nsubseteqq: "⫅̸",
      nsucc: "⊁",
      nsucceq: "⪰̸",
      nsup: "⊅",
      nsupE: "⫆̸",
      nsupe: "⊉",
      nsupset: "⊃⃒",
      nsupseteq: "⊉",
      nsupseteqq: "⫆̸",
      ntgl: "≹",
      Ntilde: "Ñ",
      ntilde: "ñ",
      ntlg: "≸",
      ntriangleleft: "⋪",
      ntrianglelefteq: "⋬",
      ntriangleright: "⋫",
      ntrianglerighteq: "⋭",
      Nu: "Ν",
      nu: "ν",
      num: "#",
      numero: "№",
      numsp: "\u2007",
      nvap: "≍⃒",
      nvdash: "⊬",
      nvDash: "⊭",
      nVdash: "⊮",
      nVDash: "⊯",
      nvge: "≥⃒",
      nvgt: ">⃒",
      nvHarr: "⤄",
      nvinfin: "⧞",
      nvlArr: "⤂",
      nvle: "≤⃒",
      nvlt: "<⃒",
      nvltrie: "⊴⃒",
      nvrArr: "⤃",
      nvrtrie: "⊵⃒",
      nvsim: "∼⃒",
      nwarhk: "⤣",
      nwarr: "↖",
      nwArr: "⇖",
      nwarrow: "↖",
      nwnear: "⤧",
      Oacute: "Ó",
      oacute: "ó",
      oast: "⊛",
      Ocirc: "Ô",
      ocirc: "ô",
      ocir: "⊚",
      Ocy: "О",
      ocy: "о",
      odash: "⊝",
      Odblac: "Ő",
      odblac: "ő",
      odiv: "⨸",
      odot: "⊙",
      odsold: "⦼",
      OElig: "Œ",
      oelig: "œ",
      ofcir: "⦿",
      Ofr: "𝔒",
      ofr: "𝔬",
      ogon: "˛",
      Ograve: "Ò",
      ograve: "ò",
      ogt: "⧁",
      ohbar: "⦵",
      ohm: "Ω",
      oint: "∮",
      olarr: "↺",
      olcir: "⦾",
      olcross: "⦻",
      oline: "‾",
      olt: "⧀",
      Omacr: "Ō",
      omacr: "ō",
      Omega: "Ω",
      omega: "ω",
      Omicron: "Ο",
      omicron: "ο",
      omid: "⦶",
      ominus: "⊖",
      Oopf: "𝕆",
      oopf: "𝕠",
      opar: "⦷",
      OpenCurlyDoubleQuote: "“",
      OpenCurlyQuote: "‘",
      operp: "⦹",
      oplus: "⊕",
      orarr: "↻",
      Or: "⩔",
      or: "∨",
      ord: "⩝",
      order: "ℴ",
      orderof: "ℴ",
      ordf: "ª",
      ordm: "º",
      origof: "⊶",
      oror: "⩖",
      orslope: "⩗",
      orv: "⩛",
      oS: "Ⓢ",
      Oscr: "𝒪",
      oscr: "ℴ",
      Oslash: "Ø",
      oslash: "ø",
      osol: "⊘",
      Otilde: "Õ",
      otilde: "õ",
      otimesas: "⨶",
      Otimes: "⨷",
      otimes: "⊗",
      Ouml: "Ö",
      ouml: "ö",
      ovbar: "⌽",
      OverBar: "‾",
      OverBrace: "⏞",
      OverBracket: "⎴",
      OverParenthesis: "⏜",
      para: "¶",
      parallel: "∥",
      par: "∥",
      parsim: "⫳",
      parsl: "⫽",
      part: "∂",
      PartialD: "∂",
      Pcy: "П",
      pcy: "п",
      percnt: "%",
      period: ".",
      permil: "‰",
      perp: "⊥",
      pertenk: "‱",
      Pfr: "𝔓",
      pfr: "𝔭",
      Phi: "Φ",
      phi: "φ",
      phiv: "ϕ",
      phmmat: "ℳ",
      phone: "☎",
      Pi: "Π",
      pi: "π",
      pitchfork: "⋔",
      piv: "ϖ",
      planck: "ℏ",
      planckh: "ℎ",
      plankv: "ℏ",
      plusacir: "⨣",
      plusb: "⊞",
      pluscir: "⨢",
      plus: "+",
      plusdo: "∔",
      plusdu: "⨥",
      pluse: "⩲",
      PlusMinus: "±",
      plusmn: "±",
      plussim: "⨦",
      plustwo: "⨧",
      pm: "±",
      Poincareplane: "ℌ",
      pointint: "⨕",
      popf: "𝕡",
      Popf: "ℙ",
      pound: "£",
      prap: "⪷",
      Pr: "⪻",
      pr: "≺",
      prcue: "≼",
      precapprox: "⪷",
      prec: "≺",
      preccurlyeq: "≼",
      Precedes: "≺",
      PrecedesEqual: "⪯",
      PrecedesSlantEqual: "≼",
      PrecedesTilde: "≾",
      preceq: "⪯",
      precnapprox: "⪹",
      precneqq: "⪵",
      precnsim: "⋨",
      pre: "⪯",
      prE: "⪳",
      precsim: "≾",
      prime: "′",
      Prime: "″",
      primes: "ℙ",
      prnap: "⪹",
      prnE: "⪵",
      prnsim: "⋨",
      prod: "∏",
      Product: "∏",
      profalar: "⌮",
      profline: "⌒",
      profsurf: "⌓",
      prop: "∝",
      Proportional: "∝",
      Proportion: "∷",
      propto: "∝",
      prsim: "≾",
      prurel: "⊰",
      Pscr: "𝒫",
      pscr: "𝓅",
      Psi: "Ψ",
      psi: "ψ",
      puncsp: "\u2008",
      Qfr: "𝔔",
      qfr: "𝔮",
      qint: "⨌",
      qopf: "𝕢",
      Qopf: "ℚ",
      qprime: "⁗",
      Qscr: "𝒬",
      qscr: "𝓆",
      quaternions: "ℍ",
      quatint: "⨖",
      quest: "?",
      questeq: "≟",
      quot: "\"",
      QUOT: "\"",
      rAarr: "⇛",
      race: "∽̱",
      Racute: "Ŕ",
      racute: "ŕ",
      radic: "√",
      raemptyv: "⦳",
      rang: "⟩",
      Rang: "⟫",
      rangd: "⦒",
      range: "⦥",
      rangle: "⟩",
      raquo: "»",
      rarrap: "⥵",
      rarrb: "⇥",
      rarrbfs: "⤠",
      rarrc: "⤳",
      rarr: "→",
      Rarr: "↠",
      rArr: "⇒",
      rarrfs: "⤞",
      rarrhk: "↪",
      rarrlp: "↬",
      rarrpl: "⥅",
      rarrsim: "⥴",
      Rarrtl: "⤖",
      rarrtl: "↣",
      rarrw: "↝",
      ratail: "⤚",
      rAtail: "⤜",
      ratio: "∶",
      rationals: "ℚ",
      rbarr: "⤍",
      rBarr: "⤏",
      RBarr: "⤐",
      rbbrk: "❳",
      rbrace: "}",
      rbrack: "]",
      rbrke: "⦌",
      rbrksld: "⦎",
      rbrkslu: "⦐",
      Rcaron: "Ř",
      rcaron: "ř",
      Rcedil: "Ŗ",
      rcedil: "ŗ",
      rceil: "⌉",
      rcub: "}",
      Rcy: "Р",
      rcy: "р",
      rdca: "⤷",
      rdldhar: "⥩",
      rdquo: "”",
      rdquor: "”",
      rdsh: "↳",
      real: "ℜ",
      realine: "ℛ",
      realpart: "ℜ",
      reals: "ℝ",
      Re: "ℜ",
      rect: "▭",
      reg: "®",
      REG: "®",
      ReverseElement: "∋",
      ReverseEquilibrium: "⇋",
      ReverseUpEquilibrium: "⥯",
      rfisht: "⥽",
      rfloor: "⌋",
      rfr: "𝔯",
      Rfr: "ℜ",
      rHar: "⥤",
      rhard: "⇁",
      rharu: "⇀",
      rharul: "⥬",
      Rho: "Ρ",
      rho: "ρ",
      rhov: "ϱ",
      RightAngleBracket: "⟩",
      RightArrowBar: "⇥",
      rightarrow: "→",
      RightArrow: "→",
      Rightarrow: "⇒",
      RightArrowLeftArrow: "⇄",
      rightarrowtail: "↣",
      RightCeiling: "⌉",
      RightDoubleBracket: "⟧",
      RightDownTeeVector: "⥝",
      RightDownVectorBar: "⥕",
      RightDownVector: "⇂",
      RightFloor: "⌋",
      rightharpoondown: "⇁",
      rightharpoonup: "⇀",
      rightleftarrows: "⇄",
      rightleftharpoons: "⇌",
      rightrightarrows: "⇉",
      rightsquigarrow: "↝",
      RightTeeArrow: "↦",
      RightTee: "⊢",
      RightTeeVector: "⥛",
      rightthreetimes: "⋌",
      RightTriangleBar: "⧐",
      RightTriangle: "⊳",
      RightTriangleEqual: "⊵",
      RightUpDownVector: "⥏",
      RightUpTeeVector: "⥜",
      RightUpVectorBar: "⥔",
      RightUpVector: "↾",
      RightVectorBar: "⥓",
      RightVector: "⇀",
      ring: "˚",
      risingdotseq: "≓",
      rlarr: "⇄",
      rlhar: "⇌",
      rlm: "‏",
      rmoustache: "⎱",
      rmoust: "⎱",
      rnmid: "⫮",
      roang: "⟭",
      roarr: "⇾",
      robrk: "⟧",
      ropar: "⦆",
      ropf: "𝕣",
      Ropf: "ℝ",
      roplus: "⨮",
      rotimes: "⨵",
      RoundImplies: "⥰",
      rpar: ")",
      rpargt: "⦔",
      rppolint: "⨒",
      rrarr: "⇉",
      Rrightarrow: "⇛",
      rsaquo: "›",
      rscr: "𝓇",
      Rscr: "ℛ",
      rsh: "↱",
      Rsh: "↱",
      rsqb: "]",
      rsquo: "’",
      rsquor: "’",
      rthree: "⋌",
      rtimes: "⋊",
      rtri: "▹",
      rtrie: "⊵",
      rtrif: "▸",
      rtriltri: "⧎",
      RuleDelayed: "⧴",
      ruluhar: "⥨",
      rx: "℞",
      Sacute: "Ś",
      sacute: "ś",
      sbquo: "‚",
      scap: "⪸",
      Scaron: "Š",
      scaron: "š",
      Sc: "⪼",
      sc: "≻",
      sccue: "≽",
      sce: "⪰",
      scE: "⪴",
      Scedil: "Ş",
      scedil: "ş",
      Scirc: "Ŝ",
      scirc: "ŝ",
      scnap: "⪺",
      scnE: "⪶",
      scnsim: "⋩",
      scpolint: "⨓",
      scsim: "≿",
      Scy: "С",
      scy: "с",
      sdotb: "⊡",
      sdot: "⋅",
      sdote: "⩦",
      searhk: "⤥",
      searr: "↘",
      seArr: "⇘",
      searrow: "↘",
      sect: "§",
      semi: ";",
      seswar: "⤩",
      setminus: "∖",
      setmn: "∖",
      sext: "✶",
      Sfr: "𝔖",
      sfr: "𝔰",
      sfrown: "⌢",
      sharp: "♯",
      SHCHcy: "Щ",
      shchcy: "щ",
      SHcy: "Ш",
      shcy: "ш",
      ShortDownArrow: "↓",
      ShortLeftArrow: "←",
      shortmid: "∣",
      shortparallel: "∥",
      ShortRightArrow: "→",
      ShortUpArrow: "↑",
      shy: "­",
      Sigma: "Σ",
      sigma: "σ",
      sigmaf: "ς",
      sigmav: "ς",
      sim: "∼",
      simdot: "⩪",
      sime: "≃",
      simeq: "≃",
      simg: "⪞",
      simgE: "⪠",
      siml: "⪝",
      simlE: "⪟",
      simne: "≆",
      simplus: "⨤",
      simrarr: "⥲",
      slarr: "←",
      SmallCircle: "∘",
      smallsetminus: "∖",
      smashp: "⨳",
      smeparsl: "⧤",
      smid: "∣",
      smile: "⌣",
      smt: "⪪",
      smte: "⪬",
      smtes: "⪬︀",
      SOFTcy: "Ь",
      softcy: "ь",
      solbar: "⌿",
      solb: "⧄",
      sol: "/",
      Sopf: "𝕊",
      sopf: "𝕤",
      spades: "♠",
      spadesuit: "♠",
      spar: "∥",
      sqcap: "⊓",
      sqcaps: "⊓︀",
      sqcup: "⊔",
      sqcups: "⊔︀",
      Sqrt: "√",
      sqsub: "⊏",
      sqsube: "⊑",
      sqsubset: "⊏",
      sqsubseteq: "⊑",
      sqsup: "⊐",
      sqsupe: "⊒",
      sqsupset: "⊐",
      sqsupseteq: "⊒",
      square: "□",
      Square: "□",
      SquareIntersection: "⊓",
      SquareSubset: "⊏",
      SquareSubsetEqual: "⊑",
      SquareSuperset: "⊐",
      SquareSupersetEqual: "⊒",
      SquareUnion: "⊔",
      squarf: "▪",
      squ: "□",
      squf: "▪",
      srarr: "→",
      Sscr: "𝒮",
      sscr: "𝓈",
      ssetmn: "∖",
      ssmile: "⌣",
      sstarf: "⋆",
      Star: "⋆",
      star: "☆",
      starf: "★",
      straightepsilon: "ϵ",
      straightphi: "ϕ",
      strns: "¯",
      sub: "⊂",
      Sub: "⋐",
      subdot: "⪽",
      subE: "⫅",
      sube: "⊆",
      subedot: "⫃",
      submult: "⫁",
      subnE: "⫋",
      subne: "⊊",
      subplus: "⪿",
      subrarr: "⥹",
      subset: "⊂",
      Subset: "⋐",
      subseteq: "⊆",
      subseteqq: "⫅",
      SubsetEqual: "⊆",
      subsetneq: "⊊",
      subsetneqq: "⫋",
      subsim: "⫇",
      subsub: "⫕",
      subsup: "⫓",
      succapprox: "⪸",
      succ: "≻",
      succcurlyeq: "≽",
      Succeeds: "≻",
      SucceedsEqual: "⪰",
      SucceedsSlantEqual: "≽",
      SucceedsTilde: "≿",
      succeq: "⪰",
      succnapprox: "⪺",
      succneqq: "⪶",
      succnsim: "⋩",
      succsim: "≿",
      SuchThat: "∋",
      sum: "∑",
      Sum: "∑",
      sung: "♪",
      sup1: "¹",
      sup2: "²",
      sup3: "³",
      sup: "⊃",
      Sup: "⋑",
      supdot: "⪾",
      supdsub: "⫘",
      supE: "⫆",
      supe: "⊇",
      supedot: "⫄",
      Superset: "⊃",
      SupersetEqual: "⊇",
      suphsol: "⟉",
      suphsub: "⫗",
      suplarr: "⥻",
      supmult: "⫂",
      supnE: "⫌",
      supne: "⊋",
      supplus: "⫀",
      supset: "⊃",
      Supset: "⋑",
      supseteq: "⊇",
      supseteqq: "⫆",
      supsetneq: "⊋",
      supsetneqq: "⫌",
      supsim: "⫈",
      supsub: "⫔",
      supsup: "⫖",
      swarhk: "⤦",
      swarr: "↙",
      swArr: "⇙",
      swarrow: "↙",
      swnwar: "⤪",
      szlig: "ß",
      Tab: "\t",
      target: "⌖",
      Tau: "Τ",
      tau: "τ",
      tbrk: "⎴",
      Tcaron: "Ť",
      tcaron: "ť",
      Tcedil: "Ţ",
      tcedil: "ţ",
      Tcy: "Т",
      tcy: "т",
      tdot: "⃛",
      telrec: "⌕",
      Tfr: "𝔗",
      tfr: "𝔱",
      there4: "∴",
      therefore: "∴",
      Therefore: "∴",
      Theta: "Θ",
      theta: "θ",
      thetasym: "ϑ",
      thetav: "ϑ",
      thickapprox: "≈",
      thicksim: "∼",
      ThickSpace: "\u205F\u200A",
      ThinSpace: "\u2009",
      thinsp: "\u2009",
      thkap: "≈",
      thksim: "∼",
      THORN: "Þ",
      thorn: "þ",
      tilde: "˜",
      Tilde: "∼",
      TildeEqual: "≃",
      TildeFullEqual: "≅",
      TildeTilde: "≈",
      timesbar: "⨱",
      timesb: "⊠",
      times: "×",
      timesd: "⨰",
      tint: "∭",
      toea: "⤨",
      topbot: "⌶",
      topcir: "⫱",
      top: "⊤",
      Topf: "𝕋",
      topf: "𝕥",
      topfork: "⫚",
      tosa: "⤩",
      tprime: "‴",
      trade: "™",
      TRADE: "™",
      triangle: "▵",
      triangledown: "▿",
      triangleleft: "◃",
      trianglelefteq: "⊴",
      triangleq: "≜",
      triangleright: "▹",
      trianglerighteq: "⊵",
      tridot: "◬",
      trie: "≜",
      triminus: "⨺",
      TripleDot: "⃛",
      triplus: "⨹",
      trisb: "⧍",
      tritime: "⨻",
      trpezium: "⏢",
      Tscr: "𝒯",
      tscr: "𝓉",
      TScy: "Ц",
      tscy: "ц",
      TSHcy: "Ћ",
      tshcy: "ћ",
      Tstrok: "Ŧ",
      tstrok: "ŧ",
      twixt: "≬",
      twoheadleftarrow: "↞",
      twoheadrightarrow: "↠",
      Uacute: "Ú",
      uacute: "ú",
      uarr: "↑",
      Uarr: "↟",
      uArr: "⇑",
      Uarrocir: "⥉",
      Ubrcy: "Ў",
      ubrcy: "ў",
      Ubreve: "Ŭ",
      ubreve: "ŭ",
      Ucirc: "Û",
      ucirc: "û",
      Ucy: "У",
      ucy: "у",
      udarr: "⇅",
      Udblac: "Ű",
      udblac: "ű",
      udhar: "⥮",
      ufisht: "⥾",
      Ufr: "𝔘",
      ufr: "𝔲",
      Ugrave: "Ù",
      ugrave: "ù",
      uHar: "⥣",
      uharl: "↿",
      uharr: "↾",
      uhblk: "▀",
      ulcorn: "⌜",
      ulcorner: "⌜",
      ulcrop: "⌏",
      ultri: "◸",
      Umacr: "Ū",
      umacr: "ū",
      uml: "¨",
      UnderBar: "_",
      UnderBrace: "⏟",
      UnderBracket: "⎵",
      UnderParenthesis: "⏝",
      Union: "⋃",
      UnionPlus: "⊎",
      Uogon: "Ų",
      uogon: "ų",
      Uopf: "𝕌",
      uopf: "𝕦",
      UpArrowBar: "⤒",
      uparrow: "↑",
      UpArrow: "↑",
      Uparrow: "⇑",
      UpArrowDownArrow: "⇅",
      updownarrow: "↕",
      UpDownArrow: "↕",
      Updownarrow: "⇕",
      UpEquilibrium: "⥮",
      upharpoonleft: "↿",
      upharpoonright: "↾",
      uplus: "⊎",
      UpperLeftArrow: "↖",
      UpperRightArrow: "↗",
      upsi: "υ",
      Upsi: "ϒ",
      upsih: "ϒ",
      Upsilon: "Υ",
      upsilon: "υ",
      UpTeeArrow: "↥",
      UpTee: "⊥",
      upuparrows: "⇈",
      urcorn: "⌝",
      urcorner: "⌝",
      urcrop: "⌎",
      Uring: "Ů",
      uring: "ů",
      urtri: "◹",
      Uscr: "𝒰",
      uscr: "𝓊",
      utdot: "⋰",
      Utilde: "Ũ",
      utilde: "ũ",
      utri: "▵",
      utrif: "▴",
      uuarr: "⇈",
      Uuml: "Ü",
      uuml: "ü",
      uwangle: "⦧",
      vangrt: "⦜",
      varepsilon: "ϵ",
      varkappa: "ϰ",
      varnothing: "∅",
      varphi: "ϕ",
      varpi: "ϖ",
      varpropto: "∝",
      varr: "↕",
      vArr: "⇕",
      varrho: "ϱ",
      varsigma: "ς",
      varsubsetneq: "⊊︀",
      varsubsetneqq: "⫋︀",
      varsupsetneq: "⊋︀",
      varsupsetneqq: "⫌︀",
      vartheta: "ϑ",
      vartriangleleft: "⊲",
      vartriangleright: "⊳",
      vBar: "⫨",
      Vbar: "⫫",
      vBarv: "⫩",
      Vcy: "В",
      vcy: "в",
      vdash: "⊢",
      vDash: "⊨",
      Vdash: "⊩",
      VDash: "⊫",
      Vdashl: "⫦",
      veebar: "⊻",
      vee: "∨",
      Vee: "⋁",
      veeeq: "≚",
      vellip: "⋮",
      verbar: "|",
      Verbar: "‖",
      vert: "|",
      Vert: "‖",
      VerticalBar: "∣",
      VerticalLine: "|",
      VerticalSeparator: "❘",
      VerticalTilde: "≀",
      VeryThinSpace: "\u200A",
      Vfr: "𝔙",
      vfr: "𝔳",
      vltri: "⊲",
      vnsub: "⊂⃒",
      vnsup: "⊃⃒",
      Vopf: "𝕍",
      vopf: "𝕧",
      vprop: "∝",
      vrtri: "⊳",
      Vscr: "𝒱",
      vscr: "𝓋",
      vsubnE: "⫋︀",
      vsubne: "⊊︀",
      vsupnE: "⫌︀",
      vsupne: "⊋︀",
      Vvdash: "⊪",
      vzigzag: "⦚",
      Wcirc: "Ŵ",
      wcirc: "ŵ",
      wedbar: "⩟",
      wedge: "∧",
      Wedge: "⋀",
      wedgeq: "≙",
      weierp: "℘",
      Wfr: "𝔚",
      wfr: "𝔴",
      Wopf: "𝕎",
      wopf: "𝕨",
      wp: "℘",
      wr: "≀",
      wreath: "≀",
      Wscr: "𝒲",
      wscr: "𝓌",
      xcap: "⋂",
      xcirc: "◯",
      xcup: "⋃",
      xdtri: "▽",
      Xfr: "𝔛",
      xfr: "𝔵",
      xharr: "⟷",
      xhArr: "⟺",
      Xi: "Ξ",
      xi: "ξ",
      xlarr: "⟵",
      xlArr: "⟸",
      xmap: "⟼",
      xnis: "⋻",
      xodot: "⨀",
      Xopf: "𝕏",
      xopf: "𝕩",
      xoplus: "⨁",
      xotime: "⨂",
      xrarr: "⟶",
      xrArr: "⟹",
      Xscr: "𝒳",
      xscr: "𝓍",
      xsqcup: "⨆",
      xuplus: "⨄",
      xutri: "△",
      xvee: "⋁",
      xwedge: "⋀",
      Yacute: "Ý",
      yacute: "ý",
      YAcy: "Я",
      yacy: "я",
      Ycirc: "Ŷ",
      ycirc: "ŷ",
      Ycy: "Ы",
      ycy: "ы",
      yen: "¥",
      Yfr: "𝔜",
      yfr: "𝔶",
      YIcy: "Ї",
      yicy: "ї",
      Yopf: "𝕐",
      yopf: "𝕪",
      Yscr: "𝒴",
      yscr: "𝓎",
      YUcy: "Ю",
      yucy: "ю",
      yuml: "ÿ",
      Yuml: "Ÿ",
      Zacute: "Ź",
      zacute: "ź",
      Zcaron: "Ž",
      zcaron: "ž",
      Zcy: "З",
      zcy: "з",
      Zdot: "Ż",
      zdot: "ż",
      zeetrf: "ℨ",
      ZeroWidthSpace: "​",
      Zeta: "Ζ",
      zeta: "ζ",
      zfr: "𝔷",
      Zfr: "ℨ",
      ZHcy: "Ж",
      zhcy: "ж",
      zigrarr: "⇝",
      zopf: "𝕫",
      Zopf: "ℤ",
      Zscr: "𝒵",
      zscr: "𝓏",
      zwj: "‍",
      zwnj: "‌"
    };
  });
  var Ph = O((wE, Ey) => {
    Ey.exports = {
      Aacute: "Á",
      aacute: "á",
      Acirc: "Â",
      acirc: "â",
      acute: "´",
      AElig: "Æ",
      aelig: "æ",
      Agrave: "À",
      agrave: "à",
      amp: "&",
      AMP: "&",
      Aring: "Å",
      aring: "å",
      Atilde: "Ã",
      atilde: "ã",
      Auml: "Ä",
      auml: "ä",
      brvbar: "¦",
      Ccedil: "Ç",
      ccedil: "ç",
      cedil: "¸",
      cent: "¢",
      copy: "©",
      COPY: "©",
      curren: "¤",
      deg: "°",
      divide: "÷",
      Eacute: "É",
      eacute: "é",
      Ecirc: "Ê",
      ecirc: "ê",
      Egrave: "È",
      egrave: "è",
      ETH: "Ð",
      eth: "ð",
      Euml: "Ë",
      euml: "ë",
      frac12: "½",
      frac14: "¼",
      frac34: "¾",
      gt: ">",
      GT: ">",
      Iacute: "Í",
      iacute: "í",
      Icirc: "Î",
      icirc: "î",
      iexcl: "¡",
      Igrave: "Ì",
      igrave: "ì",
      iquest: "¿",
      Iuml: "Ï",
      iuml: "ï",
      laquo: "«",
      lt: "<",
      LT: "<",
      macr: "¯",
      micro: "µ",
      middot: "·",
      nbsp: "\xA0",
      not: "¬",
      Ntilde: "Ñ",
      ntilde: "ñ",
      Oacute: "Ó",
      oacute: "ó",
      Ocirc: "Ô",
      ocirc: "ô",
      Ograve: "Ò",
      ograve: "ò",
      ordf: "ª",
      ordm: "º",
      Oslash: "Ø",
      oslash: "ø",
      Otilde: "Õ",
      otilde: "õ",
      Ouml: "Ö",
      ouml: "ö",
      para: "¶",
      plusmn: "±",
      pound: "£",
      quot: "\"",
      QUOT: "\"",
      raquo: "»",
      reg: "®",
      REG: "®",
      sect: "§",
      shy: "­",
      sup1: "¹",
      sup2: "²",
      sup3: "³",
      szlig: "ß",
      THORN: "Þ",
      thorn: "þ",
      times: "×",
      Uacute: "Ú",
      uacute: "ú",
      Ucirc: "Û",
      ucirc: "û",
      Ugrave: "Ù",
      ugrave: "ù",
      uml: "¨",
      Uuml: "Ü",
      uuml: "ü",
      Yacute: "Ý",
      yacute: "ý",
      yen: "¥",
      yuml: "ÿ"
    };
  });
  var ja = O((EE, xy) => {
    xy.exports = {
      amp: "&",
      apos: "'",
      gt: ">",
      lt: "<",
      quot: "\""
    };
  });
  var Uh = O((xE, Cy) => {
    Cy.exports = {
      "0": 65533,
      "128": 8364,
      "130": 8218,
      "131": 402,
      "132": 8222,
      "133": 8230,
      "134": 8224,
      "135": 8225,
      "136": 710,
      "137": 8240,
      "138": 352,
      "139": 8249,
      "140": 338,
      "142": 381,
      "145": 8216,
      "146": 8217,
      "147": 8220,
      "148": 8221,
      "149": 8226,
      "150": 8211,
      "151": 8212,
      "152": 732,
      "153": 8482,
      "154": 353,
      "155": 8250,
      "156": 339,
      "158": 382,
      "159": 376
    };
  });
  var Gh = O($n => {
    "use strict";

    var Sy = $n && $n.__importDefault || function (t) {
      if (t && t.__esModule) {
        return t;
      } else {
        return {
          default: t
        };
      }
    };
    Object.defineProperty($n, "__esModule", {
      value: true
    });
    var Hh = Sy(Uh());
    var Ty = String.fromCodePoint || function (t) {
      var n = "";
      if (t > 65535) {
        t -= 65536;
        n += String.fromCharCode(t >>> 10 & 1023 | 55296);
        t = t & 1023 | 56320;
      }
      n += String.fromCharCode(t);
      return n;
    };
    function qy(t) {
      if (t >= 55296 && t <= 57343 || t > 1114111) {
        return "�";
      } else {
        if (t in Hh.default) {
          t = Hh.default[t];
        }
        return Ty(t);
      }
    }
    $n.default = qy;
  });
  var Ja = O(Re => {
    "use strict";

    var Au = Re && Re.__importDefault || function (t) {
      if (t && t.__esModule) {
        return t;
      } else {
        return {
          default: t
        };
      }
    };
    Object.defineProperty(Re, "__esModule", {
      value: true
    });
    Re.decodeHTML = Re.decodeHTMLStrict = Re.decodeXML = undefined;
    var Za = Au(Ka());
    var Ly = Au(Ph());
    var By = Au(ja());
    var Wh = Au(Gh());
    var Fy = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
    Re.decodeXML = Vh(By.default);
    Re.decodeHTMLStrict = Vh(Za.default);
    function Vh(t) {
      var n = zh(t);
      return function (i) {
        return String(i).replace(Fy, n);
      };
    }
    function $h(t, n) {
      if (t < n) {
        return 1;
      } else {
        return -1;
      }
    }
    Re.decodeHTML = function () {
      var t = Object.keys(Ly.default).sort($h);
      for (var n = Object.keys(Za.default).sort($h), i = 0, s = 0; i < n.length; i++) {
        if (t[s] === n[i]) {
          n[i] += ";?";
          s++;
        } else {
          n[i] += ";";
        }
      }
      var o = new RegExp("&(?:" + n.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
      var c = zh(Za.default);
      function l(g) {
        if (g.substr(-1) !== ";") {
          g += ";";
        }
        return c(g);
      }
      return function (g) {
        return String(g).replace(o, l);
      };
    }();
    function zh(t) {
      return function (i) {
        if (i.charAt(1) === "#") {
          var s = i.charAt(2);
          if (s === "X" || s === "x") {
            return Wh.default(parseInt(i.substr(3), 16));
          } else {
            return Wh.default(parseInt(i.substr(2), 10));
          }
        }
        return t[i.slice(1, -1)] || i;
      };
    }
  });
  var to = O(Kt => {
    "use strict";

    var Xh = Kt && Kt.__importDefault || function (t) {
      if (t && t.__esModule) {
        return t;
      } else {
        return {
          default: t
        };
      }
    };
    Object.defineProperty(Kt, "__esModule", {
      value: true
    });
    Kt.escapeUTF8 = Kt.escape = Kt.encodeNonAsciiHTML = Kt.encodeHTML = Kt.encodeXML = undefined;
    var Ry = Xh(ja());
    var Yh = jh(Ry.default);
    var Kh = Zh(Yh);
    Kt.encodeXML = tp(Yh);
    var Oy = Xh(Ka());
    var Qa = jh(Oy.default);
    var Iy = Zh(Qa);
    Kt.encodeHTML = ky(Qa, Iy);
    Kt.encodeNonAsciiHTML = tp(Qa);
    function jh(t) {
      return Object.keys(t).sort().reduce(function (n, i) {
        n[t[i]] = "&" + i + ";";
        return n;
      }, {});
    }
    function Zh(t) {
      var n = [];
      var i = [];
      for (var s = 0, o = Object.keys(t); s < o.length; s++) {
        var c = o[s];
        if (c.length === 1) {
          n.push("\\" + c);
        } else {
          i.push(c);
        }
      }
      n.sort();
      for (var l = 0; l < n.length - 1; l++) {
        for (var g = l; g < n.length - 1 && n[g].charCodeAt(1) + 1 === n[g + 1].charCodeAt(1);) {
          g += 1;
        }
        var d = 1 + g - l;
        if (!(d < 3)) {
          n.splice(l, d, n[l] + "-" + n[g]);
        }
      }
      i.unshift("[" + n.join("") + "]");
      return new RegExp(i.join("|"), "g");
    }
    var Jh = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
    var Ny = String.prototype.codePointAt != null ? function (t) {
      return t.codePointAt(0);
    } : function (t) {
      return (t.charCodeAt(0) - 55296) * 1024 + t.charCodeAt(1) - 56320 + 65536;
    };
    function bu(t) {
      return "&#x" + (t.length > 1 ? Ny(t) : t.charCodeAt(0)).toString(16).toUpperCase() + ";";
    }
    function ky(t, n) {
      return function (i) {
        return i.replace(n, function (s) {
          return t[s];
        }).replace(Jh, bu);
      };
    }
    var Qh = new RegExp(Kh.source + "|" + Jh.source, "g");
    function My(t) {
      return t.replace(Qh, bu);
    }
    Kt.escape = My;
    function Py(t) {
      return t.replace(Kh, bu);
    }
    Kt.escapeUTF8 = Py;
    function tp(t) {
      return function (n) {
        return n.replace(Qh, function (i) {
          return t[i] || bu(i);
        });
      };
    }
  });
  var rp = O(Q => {
    "use strict";

    Object.defineProperty(Q, "__esModule", {
      value: true
    });
    Q.decodeXMLStrict = Q.decodeHTML5Strict = Q.decodeHTML4Strict = Q.decodeHTML5 = Q.decodeHTML4 = Q.decodeHTMLStrict = Q.decodeHTML = Q.decodeXML = Q.encodeHTML5 = Q.encodeHTML4 = Q.escapeUTF8 = Q.escape = Q.encodeNonAsciiHTML = Q.encodeHTML = Q.encodeXML = Q.encode = Q.decodeStrict = Q.decode = undefined;
    var yu = Ja();
    var ep = to();
    function Uy(t, n) {
      return (!n || n <= 0 ? yu.decodeXML : yu.decodeHTML)(t);
    }
    Q.decode = Uy;
    function Hy(t, n) {
      return (!n || n <= 0 ? yu.decodeXML : yu.decodeHTMLStrict)(t);
    }
    Q.decodeStrict = Hy;
    function Gy(t, n) {
      return (!n || n <= 0 ? ep.encodeXML : ep.encodeHTML)(t);
    }
    Q.encode = Gy;
    var Cr = to();
    Object.defineProperty(Q, "encodeXML", {
      enumerable: true,
      get: function () {
        return Cr.encodeXML;
      }
    });
    Object.defineProperty(Q, "encodeHTML", {
      enumerable: true,
      get: function () {
        return Cr.encodeHTML;
      }
    });
    Object.defineProperty(Q, "encodeNonAsciiHTML", {
      enumerable: true,
      get: function () {
        return Cr.encodeNonAsciiHTML;
      }
    });
    Object.defineProperty(Q, "escape", {
      enumerable: true,
      get: function () {
        return Cr.escape;
      }
    });
    Object.defineProperty(Q, "escapeUTF8", {
      enumerable: true,
      get: function () {
        return Cr.escapeUTF8;
      }
    });
    Object.defineProperty(Q, "encodeHTML4", {
      enumerable: true,
      get: function () {
        return Cr.encodeHTML;
      }
    });
    Object.defineProperty(Q, "encodeHTML5", {
      enumerable: true,
      get: function () {
        return Cr.encodeHTML;
      }
    });
    var cr = Ja();
    Object.defineProperty(Q, "decodeXML", {
      enumerable: true,
      get: function () {
        return cr.decodeXML;
      }
    });
    Object.defineProperty(Q, "decodeHTML", {
      enumerable: true,
      get: function () {
        return cr.decodeHTML;
      }
    });
    Object.defineProperty(Q, "decodeHTMLStrict", {
      enumerable: true,
      get: function () {
        return cr.decodeHTMLStrict;
      }
    });
    Object.defineProperty(Q, "decodeHTML4", {
      enumerable: true,
      get: function () {
        return cr.decodeHTML;
      }
    });
    Object.defineProperty(Q, "decodeHTML5", {
      enumerable: true,
      get: function () {
        return cr.decodeHTML;
      }
    });
    Object.defineProperty(Q, "decodeHTML4Strict", {
      enumerable: true,
      get: function () {
        return cr.decodeHTMLStrict;
      }
    });
    Object.defineProperty(Q, "decodeHTML5Strict", {
      enumerable: true,
      get: function () {
        return cr.decodeHTMLStrict;
      }
    });
    Object.defineProperty(Q, "decodeXMLStrict", {
      enumerable: true,
      get: function () {
        return cr.decodeXML;
      }
    });
  });
  var np = O((LE, Wy) => {
    Wy.exports = {
      elementNames: {
        altglyph: "altGlyph",
        altglyphdef: "altGlyphDef",
        altglyphitem: "altGlyphItem",
        animatecolor: "animateColor",
        animatemotion: "animateMotion",
        animatetransform: "animateTransform",
        clippath: "clipPath",
        feblend: "feBlend",
        fecolormatrix: "feColorMatrix",
        fecomponenttransfer: "feComponentTransfer",
        fecomposite: "feComposite",
        feconvolvematrix: "feConvolveMatrix",
        fediffuselighting: "feDiffuseLighting",
        fedisplacementmap: "feDisplacementMap",
        fedistantlight: "feDistantLight",
        fedropshadow: "feDropShadow",
        feflood: "feFlood",
        fefunca: "feFuncA",
        fefuncb: "feFuncB",
        fefuncg: "feFuncG",
        fefuncr: "feFuncR",
        fegaussianblur: "feGaussianBlur",
        feimage: "feImage",
        femerge: "feMerge",
        femergenode: "feMergeNode",
        femorphology: "feMorphology",
        feoffset: "feOffset",
        fepointlight: "fePointLight",
        fespecularlighting: "feSpecularLighting",
        fespotlight: "feSpotLight",
        fetile: "feTile",
        feturbulence: "feTurbulence",
        foreignobject: "foreignObject",
        glyphref: "glyphRef",
        lineargradient: "linearGradient",
        radialgradient: "radialGradient",
        textpath: "textPath"
      },
      attributeNames: {
        definitionurl: "definitionURL",
        attributename: "attributeName",
        attributetype: "attributeType",
        basefrequency: "baseFrequency",
        baseprofile: "baseProfile",
        calcmode: "calcMode",
        clippathunits: "clipPathUnits",
        diffuseconstant: "diffuseConstant",
        edgemode: "edgeMode",
        filterunits: "filterUnits",
        glyphref: "glyphRef",
        gradienttransform: "gradientTransform",
        gradientunits: "gradientUnits",
        kernelmatrix: "kernelMatrix",
        kernelunitlength: "kernelUnitLength",
        keypoints: "keyPoints",
        keysplines: "keySplines",
        keytimes: "keyTimes",
        lengthadjust: "lengthAdjust",
        limitingconeangle: "limitingConeAngle",
        markerheight: "markerHeight",
        markerunits: "markerUnits",
        markerwidth: "markerWidth",
        maskcontentunits: "maskContentUnits",
        maskunits: "maskUnits",
        numoctaves: "numOctaves",
        pathlength: "pathLength",
        patterncontentunits: "patternContentUnits",
        patterntransform: "patternTransform",
        patternunits: "patternUnits",
        pointsatx: "pointsAtX",
        pointsaty: "pointsAtY",
        pointsatz: "pointsAtZ",
        preservealpha: "preserveAlpha",
        preserveaspectratio: "preserveAspectRatio",
        primitiveunits: "primitiveUnits",
        refx: "refX",
        refy: "refY",
        repeatcount: "repeatCount",
        repeatdur: "repeatDur",
        requiredextensions: "requiredExtensions",
        requiredfeatures: "requiredFeatures",
        specularconstant: "specularConstant",
        specularexponent: "specularExponent",
        spreadmethod: "spreadMethod",
        startoffset: "startOffset",
        stddeviation: "stdDeviation",
        stitchtiles: "stitchTiles",
        surfacescale: "surfaceScale",
        systemlanguage: "systemLanguage",
        tablevalues: "tableValues",
        targetx: "targetX",
        targety: "targetY",
        textlength: "textLength",
        viewbox: "viewBox",
        viewtarget: "viewTarget",
        xchannelselector: "xChannelSelector",
        ychannelselector: "yChannelSelector",
        zoomandpan: "zoomAndPan"
      }
    };
  });
  var ap = O((BE, sp) => {
    var Du = Mh();
    var ip = rp();
    var wu = np();
    wu.elementNames.__proto__ = null;
    wu.attributeNames.__proto__ = null;
    var $y = {
      __proto__: null,
      style: true,
      script: true,
      xmp: true,
      iframe: true,
      noembed: true,
      noframes: true,
      plaintext: true,
      noscript: true
    };
    function Vy(t, n) {
      if (t) {
        var i = "";
        var s;
        for (var o in t) {
          s = t[o];
          if (i) {
            i += " ";
          }
          if (n.xmlMode === "foreign") {
            o = wu.attributeNames[o] || o;
          }
          i += o;
          if (s !== null && s !== "" || n.xmlMode) {
            i += "=\"" + (n.decodeEntities ? ip.encodeXML(s) : s.replace(/\"/g, "&quot;")) + "\"";
          }
        }
        return i;
      }
    }
    var zy = {
      __proto__: null,
      area: true,
      base: true,
      basefont: true,
      br: true,
      col: true,
      command: true,
      embed: true,
      frame: true,
      hr: true,
      img: true,
      input: true,
      isindex: true,
      keygen: true,
      link: true,
      meta: true,
      param: true,
      source: true,
      track: true,
      wbr: true
    };
    var up = sp.exports = function (t, n) {
      if (!Array.isArray(t) && !t.cheerio) {
        t = [t];
      }
      n = n || {};
      var i = "";
      for (var s = 0; s < t.length; s++) {
        var o = t[s];
        if (o.type === "root") {
          i += up(o.children, n);
        } else if (Du.isTag(o)) {
          i += Yy(o, n);
        } else if (o.type === Du.Directive) {
          i += Ky(o);
        } else if (o.type === Du.Comment) {
          i += Jy(o);
        } else if (o.type === Du.CDATA) {
          i += Zy(o);
        } else {
          i += jy(o, n);
        }
      }
      return i;
    };
    var Xy = ["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"];
    function Yy(t, n) {
      if (n.xmlMode === "foreign") {
        t.name = wu.elementNames[t.name] || t.name;
        if (t.parent && Xy.indexOf(t.parent.name) >= 0) {
          n = Object.assign({}, n, {
            xmlMode: false
          });
        }
      }
      if (!n.xmlMode && ["svg", "math"].indexOf(t.name) >= 0) {
        n = Object.assign({}, n, {
          xmlMode: "foreign"
        });
      }
      var i = "<" + t.name;
      var s = Vy(t.attribs, n);
      if (s) {
        i += " " + s;
      }
      if (n.xmlMode && (!t.children || t.children.length === 0)) {
        i += "/>";
      } else {
        i += ">";
        if (t.children) {
          i += up(t.children, n);
        }
        if (!zy[t.name] || n.xmlMode) {
          i += "</" + t.name + ">";
        }
      }
      return i;
    }
    function Ky(t) {
      return "<" + t.data + ">";
    }
    function jy(t, n) {
      var i = t.data || "";
      if (n.decodeEntities && (!t.parent || !(t.parent.name in $y))) {
        i = ip.encodeXML(i);
      }
      return i;
    }
    function Zy(t) {
      return "<![CDATA[" + t.children[0].data + "]]>";
    }
    function Jy(t) {
      return "<!--" + t.data + "-->";
    }
  });
  var fp = O((FE, cp) => {
    var eo = sn();
    var op = ap();
    var Qy = eo.isTag;
    cp.exports = {
      getInnerHTML: tD,
      getOuterHTML: op,
      getText: Eu
    };
    function tD(t, n) {
      if (t.children) {
        return t.children.map(function (i) {
          return op(i, n);
        }).join("");
      } else {
        return "";
      }
    }
    function Eu(t) {
      if (Array.isArray(t)) {
        return t.map(Eu).join("");
      } else if (Qy(t)) {
        if (t.name === "br") {
          return `
`;
        } else {
          return Eu(t.children);
        }
      } else if (t.type === eo.CDATA) {
        return Eu(t.children);
      } else if (t.type === eo.Text) {
        return t.data;
      } else {
        return "";
      }
    }
  });
  var lp = O(Sr => {
    var eD = Sr.getChildren = function (t) {
      return t.children;
    };
    var rD = Sr.getParent = function (t) {
      return t.parent;
    };
    Sr.getSiblings = function (t) {
      var n = rD(t);
      if (n) {
        return eD(n);
      } else {
        return [t];
      }
    };
    Sr.getAttributeValue = function (t, n) {
      return t.attribs && t.attribs[n];
    };
    Sr.hasAttrib = function (t, n) {
      return !!t.attribs && hasOwnProperty.call(t.attribs, n);
    };
    Sr.getName = function (t) {
      return t.name;
    };
  });
  var hp = O(on => {
    on.removeElement = function (t) {
      if (t.prev) {
        t.prev.next = t.next;
      }
      if (t.next) {
        t.next.prev = t.prev;
      }
      if (t.parent) {
        var n = t.parent.children;
        n.splice(n.lastIndexOf(t), 1);
      }
    };
    on.replaceElement = function (t, n) {
      var i = n.prev = t.prev;
      if (i) {
        i.next = n;
      }
      var s = n.next = t.next;
      if (s) {
        s.prev = n;
      }
      var o = n.parent = t.parent;
      if (o) {
        var c = o.children;
        c[c.lastIndexOf(t)] = n;
      }
    };
    on.appendChild = function (t, n) {
      n.parent = t;
      if (t.children.push(n) !== 1) {
        var i = t.children[t.children.length - 2];
        i.next = n;
        n.prev = i;
        n.next = null;
      }
    };
    on.append = function (t, n) {
      var i = t.parent;
      var s = t.next;
      n.next = s;
      n.prev = t;
      t.next = n;
      n.parent = i;
      if (s) {
        s.prev = n;
        if (i) {
          var o = i.children;
          o.splice(o.lastIndexOf(s), 0, n);
        }
      } else if (i) {
        i.children.push(n);
      }
    };
    on.prepend = function (t, n) {
      var i = t.parent;
      if (i) {
        var s = i.children;
        s.splice(s.lastIndexOf(t), 0, n);
      }
      if (t.prev) {
        t.prev.next = n;
      }
      n.parent = i;
      n.prev = t.prev;
      n.next = t;
      t.prev = n;
    };
  });
  var _p = O((IE, gp) => {
    var ro = sn().isTag;
    gp.exports = {
      filter: nD,
      find: no,
      findOneChild: iD,
      findOne: pp,
      existsOne: dp,
      findAll: uD
    };
    function nD(t, n, i, s) {
      if (!Array.isArray(n)) {
        n = [n];
      }
      if (typeof s != "number" || !isFinite(s)) {
        s = Infinity;
      }
      return no(t, n, i !== false, s);
    }
    function no(t, n, i, s) {
      for (var o = [], c, l = 0, g = n.length; l < g && (!t(n[l]) || !(o.push(n[l]), --s <= 0)) && !(c = n[l].children, i && c && c.length > 0 && (c = no(t, c, i, s), o = o.concat(c), s -= c.length, s <= 0)); l++);
      return o;
    }
    function iD(t, n) {
      for (var i = 0, s = n.length; i < s; i++) {
        if (t(n[i])) {
          return n[i];
        }
      }
      return null;
    }
    function pp(t, n) {
      for (var i = null, s = 0, o = n.length; s < o && !i; s++) {
        if (ro(n[s])) {
          if (t(n[s])) {
            i = n[s];
          } else if (n[s].children.length > 0) {
            i = pp(t, n[s].children);
          }
        } else {
          continue;
        }
      }
      return i;
    }
    function dp(t, n) {
      for (var i = 0, s = n.length; i < s; i++) {
        if (ro(n[i]) && (t(n[i]) || n[i].children.length > 0 && dp(t, n[i].children))) {
          return true;
        }
      }
      return false;
    }
    function uD(t, n) {
      var i = [];
      for (var s = n.slice(); s.length;) {
        var o = s.shift();
        if (ro(o)) {
          if (o.children && o.children.length > 0) {
            s.unshift.apply(s, o.children);
          }
          if (t(o)) {
            i.push(o);
          }
        }
      }
      return i;
    }
  });
  var mp = O(qr => {
    var sD = sn();
    var Tr = qr.isTag = sD.isTag;
    qr.testElement = function (t, n) {
      for (var i in t) {
        if (t.hasOwnProperty(i)) {
          if (i === "tag_name") {
            if (!Tr(n) || !t.tag_name(n.name)) {
              return false;
            }
          } else if (i === "tag_type") {
            if (!t.tag_type(n.type)) {
              return false;
            }
          } else if (i === "tag_contains") {
            if (Tr(n) || !t.tag_contains(n.data)) {
              return false;
            }
          } else if (!n.attribs || !t[i](n.attribs[i])) {
            return false;
          }
        }
      }
      return true;
    };
    var xu = {
      tag_name: function (t) {
        if (typeof t == "function") {
          return function (n) {
            return Tr(n) && t(n.name);
          };
        } else if (t === "*") {
          return Tr;
        } else {
          return function (n) {
            return Tr(n) && n.name === t;
          };
        }
      },
      tag_type: function (t) {
        if (typeof t == "function") {
          return function (n) {
            return t(n.type);
          };
        } else {
          return function (n) {
            return n.type === t;
          };
        }
      },
      tag_contains: function (t) {
        if (typeof t == "function") {
          return function (n) {
            return !Tr(n) && t(n.data);
          };
        } else {
          return function (n) {
            return !Tr(n) && n.data === t;
          };
        }
      }
    };
    function vp(t, n) {
      if (typeof n == "function") {
        return function (i) {
          return i.attribs && n(i.attribs[t]);
        };
      } else {
        return function (i) {
          return i.attribs && i.attribs[t] === n;
        };
      }
    }
    function aD(t, n) {
      return function (i) {
        return t(i) || n(i);
      };
    }
    qr.getElements = function (t, n, i, s) {
      var o = Object.keys(t).map(function (c) {
        var l = t[c];
        if (c in xu) {
          return xu[c](l);
        } else {
          return vp(c, l);
        }
      });
      if (o.length === 0) {
        return [];
      } else {
        return this.filter(o.reduce(aD), n, i, s);
      }
    };
    qr.getElementById = function (t, n, i) {
      if (!Array.isArray(n)) {
        n = [n];
      }
      return this.findOne(vp("id", t), n, i !== false);
    };
    qr.getElementsByTagName = function (t, n, i, s) {
      return this.filter(xu.tag_name(t), n, i, s);
    };
    qr.getElementsByTagType = function (t, n, i, s) {
      return this.filter(xu.tag_type(t), n, i, s);
    };
  });
  var Ap = O(Cu => {
    Cu.removeSubsets = function (t) {
      for (var n = t.length, i, s, o; --n > -1;) {
        i = s = t[n];
        t[n] = null;
        o = true;
        while (s) {
          if (t.indexOf(s) > -1) {
            o = false;
            t.splice(n, 1);
            break;
          }
          s = s.parent;
        }
        if (o) {
          t[n] = i;
        }
      }
      return t;
    };
    var Ye = {
      DISCONNECTED: 1,
      PRECEDING: 2,
      FOLLOWING: 4,
      CONTAINS: 8,
      CONTAINED_BY: 16
    };
    var oD = Cu.compareDocumentPosition = function (t, n) {
      var i = [];
      var s = [];
      var o;
      var c;
      var l;
      var g;
      var d;
      var v;
      if (t === n) {
        return 0;
      }
      for (o = t; o;) {
        i.unshift(o);
        o = o.parent;
      }
      for (o = n; o;) {
        s.unshift(o);
        o = o.parent;
      }
      for (v = 0; i[v] === s[v];) {
        v++;
      }
      if (v === 0) {
        return Ye.DISCONNECTED;
      } else {
        c = i[v - 1];
        l = c.children;
        g = i[v];
        d = s[v];
        if (l.indexOf(g) > l.indexOf(d)) {
          if (c === n) {
            return Ye.FOLLOWING | Ye.CONTAINED_BY;
          } else {
            return Ye.FOLLOWING;
          }
        } else if (c === t) {
          return Ye.PRECEDING | Ye.CONTAINS;
        } else {
          return Ye.PRECEDING;
        }
      }
    };
    Cu.uniqueSort = function (t) {
      var n = t.length;
      var i;
      var s;
      for (t = t.slice(); --n > -1;) {
        i = t[n];
        s = t.indexOf(i);
        if (s > -1 && s < n) {
          t.splice(n, 1);
        }
      }
      t.sort(function (o, c) {
        var l = oD(o, c);
        if (l & Ye.PRECEDING) {
          return -1;
        } else if (l & Ye.FOLLOWING) {
          return 1;
        } else {
          return 0;
        }
      });
      return t;
    };
  });
  var Dp = O((ME, yp) => {
    var bp = yp.exports;
    [fp(), lp(), hp(), _p(), mp(), Ap()].forEach(function (t) {
      Object.keys(t).forEach(function (n) {
        bp[n] = t[n].bind(bp);
      });
    });
  });
  var Ep = O((PE, wp) => {
    wp.exports = cn;
    function cn(t) {
      this._cbs = t || {};
      this.events = [];
    }
    var Su = an().EVENTS;
    Object.keys(Su).forEach(function (t) {
      if (Su[t] === 0) {
        t = "on" + t;
        cn.prototype[t] = function () {
          this.events.push([t]);
          if (this._cbs[t]) {
            this._cbs[t]();
          }
        };
      } else if (Su[t] === 1) {
        t = "on" + t;
        cn.prototype[t] = function (n) {
          this.events.push([t, n]);
          if (this._cbs[t]) {
            this._cbs[t](n);
          }
        };
      } else if (Su[t] === 2) {
        t = "on" + t;
        cn.prototype[t] = function (n, i) {
          this.events.push([t, n, i]);
          if (this._cbs[t]) {
            this._cbs[t](n, i);
          }
        };
      } else {
        throw Error("wrong number of arguments");
      }
    });
    cn.prototype.onreset = function () {
      this.events = [];
      if (this._cbs.onreset) {
        this._cbs.onreset();
      }
    };
    cn.prototype.restart = function () {
      if (this._cbs.onreset) {
        this._cbs.onreset();
      }
      for (var t = 0, n = this.events.length; t < n; t++) {
        if (this._cbs[this.events[t][0]]) {
          var i = this.events[t].length;
          if (i === 1) {
            this._cbs[this.events[t][0]]();
          } else if (i === 2) {
            this._cbs[this.events[t][0]](this.events[t][1]);
          } else {
            this._cbs[this.events[t][0]](this.events[t][1], this.events[t][2]);
          }
        }
      }
    };
  });
  var an = O((UE, zn) => {
    var Tu = yh();
    var qu = Bh();
    function Vn(t, n) {
      delete zn.exports[t];
      zn.exports[t] = n;
      return n;
    }
    zn.exports = {
      Parser: Tu,
      Tokenizer: Ha(),
      ElementType: sn(),
      DomHandler: qu,
      get FeedHandler() {
        return Vn("FeedHandler", Ih());
      },
      get ProxyHandler() {
        return Vn("ProxyHandler", kh());
      },
      get DomUtils() {
        return Vn("DomUtils", Dp());
      },
      get CollectingHandler() {
        return Vn("CollectingHandler", Ep());
      },
      DefaultHandler: qu,
      get RssHandler() {
        return Vn("RssHandler", this.FeedHandler);
      },
      parseDOM: function (t, n) {
        var i = new qu(n);
        new Tu(i, n).end(t);
        return i.dom;
      },
      parseFeed: function (t, n) {
        var i = new zn.exports.FeedHandler(n);
        new Tu(i, n).end(t);
        return i.dom;
      },
      createDomStream: function (t, n, i) {
        var s = new qu(t, n, i);
        return new Tu(s, n);
      },
      EVENTS: {
        attribute: 2,
        cdatastart: 0,
        cdataend: 0,
        text: 1,
        processinginstruction: 2,
        comment: 1,
        commentend: 0,
        closetag: 1,
        opentag: 2,
        opentagname: 1,
        error: 1,
        end: 0
      }
    };
  });
  var Xn = O((Lr, xp) => {
    var cD = an();
    Lr = xp.exports = function (t, n) {
      var i = Lr.evaluate(t, n);
      var s = Lr.evaluate("<root></root>", n)[0];
      s.type = "root";
      Lr.update(i, s);
      return s;
    };
    Lr.evaluate = function (t, n) {
      var i;
      if (typeof t == "string") {
        i = cD.parseDOM(t, n);
      } else {
        i = t;
      }
      return i;
    };
    Lr.update = function (t, n) {
      if (!Array.isArray(t)) {
        t = [t];
      }
      if (n) {
        n.children = t;
      } else {
        n = null;
      }
      for (var i = 0; i < t.length; i++) {
        var s = t[i];
        var o = s.parent || s.root;
        var c = o && o.children;
        if (c && c !== t) {
          c.splice(c.indexOf(s), 1);
          if (s.prev) {
            s.prev.next = s.next;
          }
          if (s.next) {
            s.next.prev = s.prev;
          }
        }
        if (n) {
          s.prev = t[i - 1] || null;
          s.next = t[i + 1] || null;
        } else {
          s.prev = s.next = null;
        }
        if (n && n.type === "root") {
          s.root = n;
          s.parent = null;
        } else {
          s.root = null;
          s.parent = n;
        }
      }
      return n;
    };
  });
  var Yn = O((HE, Cp) => {
    Cp.exports = {
      Text: "text",
      Directive: "directive",
      Comment: "comment",
      Script: "script",
      Style: "style",
      Tag: "tag",
      CDATA: "cdata",
      Doctype: "doctype",
      isTag: function (t) {
        return t.type === "tag" || t.type === "script" || t.type === "style";
      }
    };
  });
  var Rp = O(Lu => {
    var uo = Tp(lu());
    var fD = so(uo);
    Lu.XML = Fp(uo, fD);
    var Sp = Tp(fu());
    var lD = so(Sp);
    Lu.HTML = Fp(Sp, lD);
    function Tp(t) {
      return Object.keys(t).sort().reduce(function (n, i) {
        n[t[i]] = "&" + i + ";";
        return n;
      }, {});
    }
    function so(t) {
      var n = [];
      var i = [];
      Object.keys(t).forEach(function (s) {
        if (s.length === 1) {
          n.push("\\" + s);
        } else {
          i.push(s);
        }
      });
      i.unshift("[" + n.join("") + "]");
      return new RegExp(i.join("|"), "g");
    }
    var qp = /[^\0-\x7F]/g;
    var Lp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    function io(t) {
      return "&#x" + t.charCodeAt(0).toString(16).toUpperCase() + ";";
    }
    function Bp(t) {
      var n = t.charCodeAt(0);
      var i = t.charCodeAt(1);
      var s = (n - 55296) * 1024 + i - 56320 + 65536;
      return "&#x" + s.toString(16).toUpperCase() + ";";
    }
    function Fp(t, n) {
      function i(s) {
        return t[s];
      }
      return function (s) {
        return s.replace(n, i).replace(Lp, Bp).replace(qp, io);
      };
    }
    var hD = so(uo);
    function pD(t) {
      return t.replace(hD, io).replace(Lp, Bp).replace(qp, io);
    }
    Lu.escape = pD;
  });
  var Pp = O((WE, Mp) => {
    var ao = fu();
    var dD = Sa();
    var gD = lu();
    var Op = Ca();
    var _D = Np(gD);
    var vD = Np(ao);
    function Np(t) {
      var n = Object.keys(t).join("|");
      var i = kp(t);
      n += "|#[xX][\\da-fA-F]+|#\\d+";
      var s = new RegExp("&(?:" + n + ");", "g");
      return function (o) {
        return String(o).replace(s, i);
      };
    }
    var mD = function () {
      var t = Object.keys(dD).sort(Ip);
      for (var n = Object.keys(ao).sort(Ip), i = 0, s = 0; i < n.length; i++) {
        if (t[s] === n[i]) {
          n[i] += ";?";
          s++;
        } else {
          n[i] += ";";
        }
      }
      var o = new RegExp("&(?:" + n.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
      var c = kp(ao);
      function l(g) {
        if (g.substr(-1) !== ";") {
          g += ";";
        }
        return c(g);
      }
      return function (g) {
        return String(g).replace(o, l);
      };
    }();
    function Ip(t, n) {
      if (t < n) {
        return 1;
      } else {
        return -1;
      }
    }
    function kp(t) {
      return function (i) {
        if (i.charAt(1) === "#") {
          if (i.charAt(2) === "X" || i.charAt(2) === "x") {
            return Op(parseInt(i.substr(3), 16));
          } else {
            return Op(parseInt(i.substr(2), 10));
          }
        } else {
          return t[i.slice(1, -1)];
        }
      };
    }
    Mp.exports = {
      XML: _D,
      HTML: mD,
      HTMLStrict: vD
    };
  });
  var Up = O(Ft => {
    var Kn = Rp();
    var Br = Pp();
    Ft.decode = function (t, n) {
      return (!n || n <= 0 ? Br.XML : Br.HTML)(t);
    };
    Ft.decodeStrict = function (t, n) {
      return (!n || n <= 0 ? Br.XML : Br.HTMLStrict)(t);
    };
    Ft.encode = function (t, n) {
      return (!n || n <= 0 ? Kn.XML : Kn.HTML)(t);
    };
    Ft.encodeXML = Kn.XML;
    Ft.encodeHTML4 = Ft.encodeHTML5 = Ft.encodeHTML = Kn.HTML;
    Ft.decodeXML = Ft.decodeXMLStrict = Br.XML;
    Ft.decodeHTML4 = Ft.decodeHTML5 = Ft.decodeHTML = Br.HTML;
    Ft.decodeHTML4Strict = Ft.decodeHTML5Strict = Ft.decodeHTMLStrict = Br.HTMLStrict;
    Ft.escape = Kn.escape;
  });
  var Fu = O((VE, Wp) => {
    var Bu = Yn();
    var Hp = Up();
    var AD = {
      __proto__: null,
      style: true,
      script: true,
      xmp: true,
      iframe: true,
      noembed: true,
      noframes: true,
      plaintext: true,
      noscript: true
    };
    function bD(t, n) {
      if (t) {
        var i = "";
        var s;
        for (var o in t) {
          s = t[o];
          if (i) {
            i += " ";
          }
          i += o;
          if (s !== null && s !== "" || n.xmlMode) {
            i += "=\"" + (n.decodeEntities ? Hp.encodeXML(s) : s) + "\"";
          }
        }
        return i;
      }
    }
    var yD = {
      __proto__: null,
      area: true,
      base: true,
      basefont: true,
      br: true,
      col: true,
      command: true,
      embed: true,
      frame: true,
      hr: true,
      img: true,
      input: true,
      isindex: true,
      keygen: true,
      link: true,
      meta: true,
      param: true,
      source: true,
      track: true,
      wbr: true
    };
    var Gp = Wp.exports = function (t, n) {
      if (!Array.isArray(t) && !t.cheerio) {
        t = [t];
      }
      n = n || {};
      var i = "";
      for (var s = 0; s < t.length; s++) {
        var o = t[s];
        if (o.type === "root") {
          i += Gp(o.children, n);
        } else if (Bu.isTag(o)) {
          i += DD(o, n);
        } else if (o.type === Bu.Directive) {
          i += wD(o);
        } else if (o.type === Bu.Comment) {
          i += CD(o);
        } else if (o.type === Bu.CDATA) {
          i += xD(o);
        } else {
          i += ED(o, n);
        }
      }
      return i;
    };
    function DD(t, n) {
      if (t.name === "svg") {
        n = {
          decodeEntities: n.decodeEntities,
          xmlMode: true
        };
      }
      var i = "<" + t.name;
      var s = bD(t.attribs, n);
      if (s) {
        i += " " + s;
      }
      if (n.xmlMode && (!t.children || t.children.length === 0)) {
        i += "/>";
      } else {
        i += ">";
        if (t.children) {
          i += Gp(t.children, n);
        }
        if (!yD[t.name] || n.xmlMode) {
          i += "</" + t.name + ">";
        }
      }
      return i;
    }
    function wD(t) {
      return "<" + t.data + ">";
    }
    function ED(t, n) {
      var i = t.data || "";
      if (n.decodeEntities && (!t.parent || !(t.parent.name in AD))) {
        i = Hp.encodeXML(i);
      }
      return i;
    }
    function xD(t) {
      return "<![CDATA[" + t.children[0].data + "]]>";
    }
    function CD(t) {
      return "<!--" + t.data + "-->";
    }
  });
  var fn = O(Fr => {
    var SD = Xn();
    var TD = Fu();
    var qD = {
      tag: true,
      script: true,
      style: true
    };
    Fr.isTag = function (t) {
      if (t.type) {
        t = t.type;
      }
      return qD[t] || false;
    };
    Fr.camelCase = function (t) {
      return t.replace(/[_.-](\w|$)/g, function (n, i) {
        return i.toUpperCase();
      });
    };
    Fr.cssCase = function (t) {
      return t.replace(/[A-Z]/g, "-$&").toLowerCase();
    };
    Fr.domEach = function (t, n) {
      for (var i = 0, s = t.length; i < s && n.call(t, i, t[i]) !== false;) {
        ++i;
      }
      return t;
    };
    Fr.cloneDom = function (t, n) {
      return SD(TD(t, n), n).children;
    };
    var LD = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/;
    Fr.isHtml = function (t) {
      if (t.charAt(0) === "<" && t.charAt(t.length - 1) === ">" && t.length >= 3) {
        return true;
      }
      var n = LD.exec(t);
      return !!n && !!n[1];
    };
  });
  var fr = O((ln, jn) => {
    (function () {
      var t;
      var n = "4.18.1";
      var i = 200;
      var s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.";
      var o = "Expected a function";
      var c = "Invalid `variable` option passed into `_.template`";
      var l = "Invalid `imports` option passed into `_.template`";
      var g = "__lodash_hash_undefined__";
      var d = 500;
      var v = "__lodash_placeholder__";
      var A = 1;
      var w = 2;
      var T = 4;
      var S = 1;
      var L = 2;
      var B = 1;
      var P = 2;
      var Y = 4;
      var nt = 8;
      var ht = 16;
      var it = 32;
      var $ = 64;
      var N = 128;
      var W = 256;
      var pt = 512;
      var yt = 30;
      var Rt = "...";
      var Qt = 800;
      var qt = 16;
      var Pr = 1;
      var hi = 2;
      var pi = 3;
      var te = Infinity;
      var Ze = 9007199254740991;
      var P2 = 1.7976931348623157e+308;
      var di = NaN;
      var qe = 4294967295;
      var U2 = qe - 1;
      var H2 = qe >>> 1;
      var G2 = [["ary", N], ["bind", B], ["bindKey", P], ["curry", nt], ["curryRight", ht], ["flip", pt], ["partial", it], ["partialRight", $], ["rearg", W]];
      var Ur = "[object Arguments]";
      var gi = "[object Array]";
      var W2 = "[object AsyncFunction]";
      var mn = "[object Boolean]";
      var An = "[object Date]";
      var $2 = "[object DOMException]";
      var _i = "[object Error]";
      var vi = "[object Function]";
      var No = "[object GeneratorFunction]";
      var me = "[object Map]";
      var bn = "[object Number]";
      var V2 = "[object Null]";
      var ke = "[object Object]";
      var ko = "[object Promise]";
      var z2 = "[object Proxy]";
      var yn = "[object RegExp]";
      var Ae = "[object Set]";
      var Dn = "[object String]";
      var mi = "[object Symbol]";
      var X2 = "[object Undefined]";
      var wn = "[object WeakMap]";
      var Y2 = "[object WeakSet]";
      var En = "[object ArrayBuffer]";
      var Hr = "[object DataView]";
      var Qu = "[object Float32Array]";
      var ts = "[object Float64Array]";
      var es = "[object Int8Array]";
      var rs = "[object Int16Array]";
      var ns = "[object Int32Array]";
      var is = "[object Uint8Array]";
      var us = "[object Uint8ClampedArray]";
      var ss = "[object Uint16Array]";
      var as = "[object Uint32Array]";
      var K2 = /\b__p \+= '';/g;
      var j2 = /\b(__p \+=) '' \+/g;
      var Z2 = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var Mo = /&(?:amp|lt|gt|quot|#39);/g;
      var Po = /[&<>"']/g;
      var J2 = RegExp(Mo.source);
      var Q2 = RegExp(Po.source);
      var tg = /<%-([\s\S]+?)%>/g;
      var eg = /<%([\s\S]+?)%>/g;
      var Uo = /<%=([\s\S]+?)%>/g;
      var rg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      var ng = /^\w*$/;
      var ig = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var os = /[\\^$.*+?()[\]{}|]/g;
      var ug = RegExp(os.source);
      var cs = /^\s+/;
      var sg = /\s/;
      var ag = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
      var og = /\{\n\/\* \[wrapped with (.+)\] \*/;
      var cg = /,? & /;
      var fg = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var Ho = /[()=,{}\[\]\/\s]/;
      var lg = /\\(\\)?/g;
      var hg = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var Go = /\w*$/;
      var pg = /^[-+]0x[0-9a-f]+$/i;
      var dg = /^0b[01]+$/i;
      var gg = /^\[object .+?Constructor\]$/;
      var _g = /^0o[0-7]+$/i;
      var vg = /^(?:0|[1-9]\d*)$/;
      var mg = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var Ai = /($^)/;
      var Ag = /['\n\r\u2028\u2029\\]/g;
      var bi = "\\ud800-\\udfff";
      var bg = "\\u0300-\\u036f";
      var yg = "\\ufe20-\\ufe2f";
      var Dg = "\\u20d0-\\u20ff";
      var Wo = bg + yg + Dg;
      var $o = "\\u2700-\\u27bf";
      var Vo = "a-z\\xdf-\\xf6\\xf8-\\xff";
      var wg = "\\xac\\xb1\\xd7\\xf7";
      var Eg = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
      var xg = "\\u2000-\\u206f";
      var Cg = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
      var zo = "A-Z\\xc0-\\xd6\\xd8-\\xde";
      var Xo = "\\ufe0e\\ufe0f";
      var Yo = wg + Eg + xg + Cg;
      var fs = "['’]";
      var Sg = "[" + bi + "]";
      var Ko = "[" + Yo + "]";
      var yi = "[" + Wo + "]";
      var jo = "\\d+";
      var Tg = "[" + $o + "]";
      var Zo = "[" + Vo + "]";
      var Jo = "[^" + bi + Yo + jo + $o + Vo + zo + "]";
      var ls = "\\ud83c[\\udffb-\\udfff]";
      var qg = "(?:" + yi + "|" + ls + ")";
      var Qo = "[^" + bi + "]";
      var hs = "(?:\\ud83c[\\udde6-\\uddff]){2}";
      var ps = "[\\ud800-\\udbff][\\udc00-\\udfff]";
      var Gr = "[" + zo + "]";
      var tc = "\\u200d";
      var ec = "(?:" + Zo + "|" + Jo + ")";
      var Lg = "(?:" + Gr + "|" + Jo + ")";
      var rc = "(?:" + fs + "(?:d|ll|m|re|s|t|ve))?";
      var nc = "(?:" + fs + "(?:D|LL|M|RE|S|T|VE))?";
      var ic = qg + "?";
      var uc = "[" + Xo + "]?";
      var Bg = "(?:" + tc + "(?:" + [Qo, hs, ps].join("|") + ")" + uc + ic + ")*";
      var Fg = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])";
      var Rg = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])";
      var sc = uc + ic + Bg;
      var Og = "(?:" + [Tg, hs, ps].join("|") + ")" + sc;
      var Ig = "(?:" + [Qo + yi + "?", yi, hs, ps, Sg].join("|") + ")";
      var Ng = RegExp(fs, "g");
      var kg = RegExp(yi, "g");
      var ds = RegExp(ls + "(?=" + ls + ")|" + Ig + sc, "g");
      var Mg = RegExp([Gr + "?" + Zo + "+" + rc + "(?=" + [Ko, Gr, "$"].join("|") + ")", Lg + "+" + nc + "(?=" + [Ko, Gr + ec, "$"].join("|") + ")", Gr + "?" + ec + "+" + rc, Gr + "+" + nc, Rg, Fg, jo, Og].join("|"), "g");
      var Pg = RegExp("[" + tc + bi + Wo + Xo + "]");
      var Ug = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var Hg = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"];
      var Gg = -1;
      var _t = {};
      _t[Qu] = _t[ts] = _t[es] = _t[rs] = _t[ns] = _t[is] = _t[us] = _t[ss] = _t[as] = true;
      _t[Ur] = _t[gi] = _t[En] = _t[mn] = _t[Hr] = _t[An] = _t[_i] = _t[vi] = _t[me] = _t[bn] = _t[ke] = _t[yn] = _t[Ae] = _t[Dn] = _t[wn] = false;
      var dt = {};
      dt[Ur] = dt[gi] = dt[En] = dt[Hr] = dt[mn] = dt[An] = dt[Qu] = dt[ts] = dt[es] = dt[rs] = dt[ns] = dt[me] = dt[bn] = dt[ke] = dt[yn] = dt[Ae] = dt[Dn] = dt[mi] = dt[is] = dt[us] = dt[ss] = dt[as] = true;
      dt[_i] = dt[vi] = dt[wn] = false;
      var Wg = {
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
      };
      var $g = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;"
      };
      var Vg = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": "\"",
        "&#39;": "'"
      };
      var zg = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var Xg = parseFloat;
      var Yg = parseInt;
      var ac = typeof global == "object" && global && global.Object === Object && global;
      var Kg = typeof self == "object" && self && self.Object === Object && self;
      var St = ac || Kg || Function("return this")();
      var gs = typeof ln == "object" && ln && !ln.nodeType && ln;
      var dr = gs && typeof jn == "object" && jn && !jn.nodeType && jn;
      var oc = dr && dr.exports === gs;
      var _s = oc && ac.process;
      var ce = function () {
        try {
          var b = dr && dr.require && dr.require("util").types;
          return b || _s && _s.binding && _s.binding("util");
        } catch (E) {}
      }();
      var cc = ce && ce.isArrayBuffer;
      var fc = ce && ce.isDate;
      var lc = ce && ce.isMap;
      var hc = ce && ce.isRegExp;
      var pc = ce && ce.isSet;
      var dc = ce && ce.isTypedArray;
      function ee(b, E, D) {
        switch (D.length) {
          case 0:
            return b.call(E);
          case 1:
            return b.call(E, D[0]);
          case 2:
            return b.call(E, D[0], D[1]);
          case 3:
            return b.call(E, D[0], D[1], D[2]);
        }
        return b.apply(E, D);
      }
      function jg(b, E, D, I) {
        for (var V = -1, ut = b == null ? 0 : b.length; ++V < ut;) {
          var Et = b[V];
          E(I, Et, D(Et), b);
        }
        return I;
      }
      function re(b, E) {
        for (var D = -1, I = b == null ? 0 : b.length; ++D < I && E(b[D], D, b) !== false;);
        return b;
      }
      function Zg(b, E) {
        for (var D = b == null ? 0 : b.length; D-- && E(b[D], D, b) !== false;);
        return b;
      }
      function gc(b, E) {
        for (var D = -1, I = b == null ? 0 : b.length; ++D < I;) {
          if (!E(b[D], D, b)) {
            return false;
          }
        }
        return true;
      }
      function Je(b, E) {
        for (var D = -1, I = b == null ? 0 : b.length, V = 0, ut = []; ++D < I;) {
          var Et = b[D];
          if (E(Et, D, b)) {
            ut[V++] = Et;
          }
        }
        return ut;
      }
      function Di(b, E) {
        var D = b == null ? 0 : b.length;
        return !!D && Wr(b, E, 0) > -1;
      }
      function vs(b, E, D) {
        for (var I = -1, V = b == null ? 0 : b.length; ++I < V;) {
          if (D(E, b[I])) {
            return true;
          }
        }
        return false;
      }
      function mt(b, E) {
        for (var D = -1, I = b == null ? 0 : b.length, V = Array(I); ++D < I;) {
          V[D] = E(b[D], D, b);
        }
        return V;
      }
      function Qe(b, E) {
        for (var D = -1, I = E.length, V = b.length; ++D < I;) {
          b[V + D] = E[D];
        }
        return b;
      }
      function ms(b, E, D, I) {
        var V = -1;
        var ut = b == null ? 0 : b.length;
        for (I && ut && (D = b[++V]); ++V < ut;) {
          D = E(D, b[V], V, b);
        }
        return D;
      }
      function Jg(b, E, D, I) {
        var V = b == null ? 0 : b.length;
        for (I && V && (D = b[--V]); V--;) {
          D = E(D, b[V], V, b);
        }
        return D;
      }
      function As(b, E) {
        for (var D = -1, I = b == null ? 0 : b.length; ++D < I;) {
          if (E(b[D], D, b)) {
            return true;
          }
        }
        return false;
      }
      var Qg = bs("length");
      function t0(b) {
        return b.split("");
      }
      function e0(b) {
        return b.match(fg) || [];
      }
      function _c(b, E, D) {
        var I;
        D(b, function (V, ut, Et) {
          if (E(V, ut, Et)) {
            I = ut;
            return false;
          }
        });
        return I;
      }
      function wi(b, E, D, I) {
        for (var V = b.length, ut = D + (I ? 1 : -1); I ? ut-- : ++ut < V;) {
          if (E(b[ut], ut, b)) {
            return ut;
          }
        }
        return -1;
      }
      function Wr(b, E, D) {
        if (E === E) {
          return p0(b, E, D);
        } else {
          return wi(b, vc, D);
        }
      }
      function r0(b, E, D, I) {
        for (var V = D - 1, ut = b.length; ++V < ut;) {
          if (I(b[V], E)) {
            return V;
          }
        }
        return -1;
      }
      function vc(b) {
        return b !== b;
      }
      function mc(b, E) {
        var D = b == null ? 0 : b.length;
        if (D) {
          return Ds(b, E) / D;
        } else {
          return di;
        }
      }
      function bs(b) {
        return function (E) {
          if (E == null) {
            return t;
          } else {
            return E[b];
          }
        };
      }
      function ys(b) {
        return function (E) {
          if (b == null) {
            return t;
          } else {
            return b[E];
          }
        };
      }
      function Ac(b, E, D, I, V) {
        V(b, function (ut, Et, ft) {
          D = I ? (I = false, ut) : E(D, ut, Et, ft);
        });
        return D;
      }
      function n0(b, E) {
        var D = b.length;
        for (b.sort(E); D--;) {
          b[D] = b[D].value;
        }
        return b;
      }
      function Ds(b, E) {
        var D;
        for (var I = -1, V = b.length; ++I < V;) {
          var ut = E(b[I]);
          if (ut !== t) {
            D = D === t ? ut : D + ut;
          }
        }
        return D;
      }
      function ws(b, E) {
        for (var D = -1, I = Array(b); ++D < b;) {
          I[D] = E(D);
        }
        return I;
      }
      function i0(b, E) {
        return mt(E, function (D) {
          return [D, b[D]];
        });
      }
      function bc(b) {
        return b && b.slice(0, Ec(b) + 1).replace(cs, "");
      }
      function ne(b) {
        return function (E) {
          return b(E);
        };
      }
      function Es(b, E) {
        return mt(E, function (D) {
          return b[D];
        });
      }
      function xn(b, E) {
        return b.has(E);
      }
      function yc(b, E) {
        for (var D = -1, I = b.length; ++D < I && Wr(E, b[D], 0) > -1;);
        return D;
      }
      function Dc(b, E) {
        for (var D = b.length; D-- && Wr(E, b[D], 0) > -1;);
        return D;
      }
      function u0(b, E) {
        for (var D = b.length, I = 0; D--;) {
          if (b[D] === E) {
            ++I;
          }
        }
        return I;
      }
      var s0 = ys(Wg);
      var a0 = ys($g);
      function o0(b) {
        return "\\" + zg[b];
      }
      function c0(b, E) {
        if (b == null) {
          return t;
        } else {
          return b[E];
        }
      }
      function $r(b) {
        return Pg.test(b);
      }
      function f0(b) {
        return Ug.test(b);
      }
      function l0(b) {
        for (var E, D = []; !(E = b.next()).done;) {
          D.push(E.value);
        }
        return D;
      }
      function xs(b) {
        var E = -1;
        var D = Array(b.size);
        b.forEach(function (I, V) {
          D[++E] = [V, I];
        });
        return D;
      }
      function wc(b, E) {
        return function (D) {
          return b(E(D));
        };
      }
      function tr(b, E) {
        for (var D = -1, I = b.length, V = 0, ut = []; ++D < I;) {
          var Et = b[D];
          if (Et === E || Et === v) {
            b[D] = v;
            ut[V++] = D;
          }
        }
        return ut;
      }
      function Ei(b) {
        var E = -1;
        var D = Array(b.size);
        b.forEach(function (I) {
          D[++E] = I;
        });
        return D;
      }
      function h0(b) {
        var E = -1;
        var D = Array(b.size);
        b.forEach(function (I) {
          D[++E] = [I, I];
        });
        return D;
      }
      function p0(b, E, D) {
        for (var I = D - 1, V = b.length; ++I < V;) {
          if (b[I] === E) {
            return I;
          }
        }
        return -1;
      }
      function d0(b, E, D) {
        for (var I = D + 1; I--;) {
          if (b[I] === E) {
            return I;
          }
        }
        return I;
      }
      function Vr(b) {
        if ($r(b)) {
          return _0(b);
        } else {
          return Qg(b);
        }
      }
      function be(b) {
        if ($r(b)) {
          return v0(b);
        } else {
          return t0(b);
        }
      }
      function Ec(b) {
        for (var E = b.length; E-- && sg.test(b.charAt(E)););
        return E;
      }
      var g0 = ys(Vg);
      function _0(b) {
        var E = ds.lastIndex = 0;
        for (; ds.test(b);) {
          ++E;
        }
        return E;
      }
      function v0(b) {
        return b.match(ds) || [];
      }
      function m0(b) {
        return b.match(Mg) || [];
      }
      var A0 = function b(E) {
        E = E == null ? St : er.defaults(St.Object(), E, er.pick(St, Hg));
        var D = E.Array;
        var I = E.Date;
        var V = E.Error;
        var ut = E.Function;
        var Et = E.Math;
        var ft = E.Object;
        var Cs = E.RegExp;
        var b0 = E.String;
        var fe = E.TypeError;
        var xi = D.prototype;
        var y0 = ut.prototype;
        var zr = ft.prototype;
        var Ci = E["__core-js_shared__"];
        var Si = y0.toString;
        var st = zr.hasOwnProperty;
        var D0 = 0;
        var xc = function () {
          var e = /[^.]+$/.exec(Ci && Ci.keys && Ci.keys.IE_PROTO || "");
          if (e) {
            return "Symbol(src)_1." + e;
          } else {
            return "";
          }
        }();
        var Ti = zr.toString;
        var w0 = Si.call(ft);
        var E0 = St._;
        var x0 = Cs("^" + Si.call(st).replace(os, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        var qi = oc ? E.Buffer : t;
        var rr = E.Symbol;
        var Li = E.Uint8Array;
        var Cc = qi ? qi.allocUnsafe : t;
        var Bi = wc(ft.getPrototypeOf, ft);
        var Sc = ft.create;
        var Tc = zr.propertyIsEnumerable;
        var Fi = xi.splice;
        var qc = rr ? rr.isConcatSpreadable : t;
        var Cn = rr ? rr.iterator : t;
        var gr = rr ? rr.toStringTag : t;
        var Ri = function () {
          try {
            var e = br(ft, "defineProperty");
            e({}, "", {});
            return e;
          } catch (r) {}
        }();
        var C0 = E.clearTimeout !== St.clearTimeout && E.clearTimeout;
        var S0 = I && I.now !== St.Date.now && I.now;
        var T0 = E.setTimeout !== St.setTimeout && E.setTimeout;
        var Oi = Et.ceil;
        var Ii = Et.floor;
        var Ss = ft.getOwnPropertySymbols;
        var q0 = qi ? qi.isBuffer : t;
        var Lc = E.isFinite;
        var L0 = xi.join;
        var B0 = wc(ft.keys, ft);
        var xt = Et.max;
        var Ot = Et.min;
        var F0 = I.now;
        var R0 = E.parseInt;
        var Bc = Et.random;
        var O0 = xi.reverse;
        var Ts = br(E, "DataView");
        var Sn = br(E, "Map");
        var qs = br(E, "Promise");
        var Xr = br(E, "Set");
        var Tn = br(E, "WeakMap");
        var qn = br(ft, "create");
        var Ni = Tn && new Tn();
        var Yr = {};
        var I0 = yr(Ts);
        var N0 = yr(Sn);
        var k0 = yr(qs);
        var M0 = yr(Xr);
        var P0 = yr(Tn);
        var ki = rr ? rr.prototype : t;
        var Ln = ki ? ki.valueOf : t;
        var Fc = ki ? ki.toString : t;
        function h(e) {
          if (bt(e) && !z(e) && !(e instanceof et)) {
            if (e instanceof le) {
              return e;
            }
            if (st.call(e, "__wrapped__")) {
              return Of(e);
            }
          }
          return new le(e);
        }
        var Kr = function () {
          function e() {}
          return function (r) {
            if (!At(r)) {
              return {};
            }
            if (Sc) {
              return Sc(r);
            }
            e.prototype = r;
            var u = new e();
            e.prototype = t;
            return u;
          };
        }();
        function Mi() {}
        function le(e, r) {
          this.__wrapped__ = e;
          this.__actions__ = [];
          this.__chain__ = !!r;
          this.__index__ = 0;
          this.__values__ = t;
        }
        h.templateSettings = {
          escape: tg,
          evaluate: eg,
          interpolate: Uo,
          variable: "",
          imports: {
            _: h
          }
        };
        h.prototype = Mi.prototype;
        h.prototype.constructor = h;
        le.prototype = Kr(Mi.prototype);
        le.prototype.constructor = le;
        function et(e) {
          this.__wrapped__ = e;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = qe;
          this.__views__ = [];
        }
        function U0() {
          var e = new et(this.__wrapped__);
          e.__actions__ = Gt(this.__actions__);
          e.__dir__ = this.__dir__;
          e.__filtered__ = this.__filtered__;
          e.__iteratees__ = Gt(this.__iteratees__);
          e.__takeCount__ = this.__takeCount__;
          e.__views__ = Gt(this.__views__);
          return e;
        }
        function H0() {
          if (this.__filtered__) {
            var e = new et(this);
            e.__dir__ = -1;
            e.__filtered__ = true;
          } else {
            e = this.clone();
            e.__dir__ *= -1;
          }
          return e;
        }
        function G0() {
          var e = this.__wrapped__.value();
          var r = this.__dir__;
          var u = z(e);
          var a = r < 0;
          var f = u ? e.length : 0;
          var p = tv(0, f, this.__views__);
          var _ = p.start;
          var m = p.end;
          var y = m - _;
          var x = a ? m : _ - 1;
          var C = this.__iteratees__;
          var q = C.length;
          var F = 0;
          var k = Ot(y, this.__takeCount__);
          if (!u || !a && f == y && k == y) {
            return rf(e, this.__actions__);
          }
          var G = [];
          t: while (y-- && F < k) {
            x += r;
            for (var K = -1, U = e[x]; ++K < q;) {
              var tt = C[K];
              var rt = tt.iteratee;
              var se = tt.type;
              var Ht = rt(U);
              if (se == hi) {
                U = Ht;
              } else if (!Ht) {
                if (se == Pr) {
                  continue t;
                }
                break t;
              }
            }
            G[F++] = U;
          }
          return G;
        }
        et.prototype = Kr(Mi.prototype);
        et.prototype.constructor = et;
        function _r(e) {
          var r = -1;
          var u = e == null ? 0 : e.length;
          for (this.clear(); ++r < u;) {
            var a = e[r];
            this.set(a[0], a[1]);
          }
        }
        function W0() {
          this.__data__ = qn ? qn(null) : {};
          this.size = 0;
        }
        function $0(e) {
          var r = this.has(e) && delete this.__data__[e];
          this.size -= r ? 1 : 0;
          return r;
        }
        function V0(e) {
          var r = this.__data__;
          if (qn) {
            var u = r[e];
            if (u === g) {
              return t;
            } else {
              return u;
            }
          }
          if (st.call(r, e)) {
            return r[e];
          } else {
            return t;
          }
        }
        function z0(e) {
          var r = this.__data__;
          if (qn) {
            return r[e] !== t;
          } else {
            return st.call(r, e);
          }
        }
        function X0(e, r) {
          var u = this.__data__;
          this.size += this.has(e) ? 0 : 1;
          u[e] = qn && r === t ? g : r;
          return this;
        }
        _r.prototype.clear = W0;
        _r.prototype.delete = $0;
        _r.prototype.get = V0;
        _r.prototype.has = z0;
        _r.prototype.set = X0;
        function Me(e) {
          var r = -1;
          var u = e == null ? 0 : e.length;
          for (this.clear(); ++r < u;) {
            var a = e[r];
            this.set(a[0], a[1]);
          }
        }
        function Y0() {
          this.__data__ = [];
          this.size = 0;
        }
        function K0(e) {
          var r = this.__data__;
          var u = Pi(r, e);
          if (u < 0) {
            return false;
          }
          var a = r.length - 1;
          if (u == a) {
            r.pop();
          } else {
            Fi.call(r, u, 1);
          }
          --this.size;
          return true;
        }
        function j0(e) {
          var r = this.__data__;
          var u = Pi(r, e);
          if (u < 0) {
            return t;
          } else {
            return r[u][1];
          }
        }
        function Z0(e) {
          return Pi(this.__data__, e) > -1;
        }
        function J0(e, r) {
          var u = this.__data__;
          var a = Pi(u, e);
          if (a < 0) {
            ++this.size;
            u.push([e, r]);
          } else {
            u[a][1] = r;
          }
          return this;
        }
        Me.prototype.clear = Y0;
        Me.prototype.delete = K0;
        Me.prototype.get = j0;
        Me.prototype.has = Z0;
        Me.prototype.set = J0;
        function Pe(e) {
          var r = -1;
          var u = e == null ? 0 : e.length;
          for (this.clear(); ++r < u;) {
            var a = e[r];
            this.set(a[0], a[1]);
          }
        }
        function Q0() {
          this.size = 0;
          this.__data__ = {
            hash: new _r(),
            map: new (Sn || Me)(),
            string: new _r()
          };
        }
        function t_(e) {
          var r = Zi(this, e).delete(e);
          this.size -= r ? 1 : 0;
          return r;
        }
        function e_(e) {
          return Zi(this, e).get(e);
        }
        function r_(e) {
          return Zi(this, e).has(e);
        }
        function n_(e, r) {
          var u = Zi(this, e);
          var a = u.size;
          u.set(e, r);
          this.size += u.size == a ? 0 : 1;
          return this;
        }
        Pe.prototype.clear = Q0;
        Pe.prototype.delete = t_;
        Pe.prototype.get = e_;
        Pe.prototype.has = r_;
        Pe.prototype.set = n_;
        function vr(e) {
          var r = -1;
          var u = e == null ? 0 : e.length;
          for (this.__data__ = new Pe(); ++r < u;) {
            this.add(e[r]);
          }
        }
        function i_(e) {
          this.__data__.set(e, g);
          return this;
        }
        function u_(e) {
          return this.__data__.has(e);
        }
        vr.prototype.add = vr.prototype.push = i_;
        vr.prototype.has = u_;
        function ye(e) {
          var r = this.__data__ = new Me(e);
          this.size = r.size;
        }
        function s_() {
          this.__data__ = new Me();
          this.size = 0;
        }
        function a_(e) {
          var r = this.__data__;
          var u = r.delete(e);
          this.size = r.size;
          return u;
        }
        function o_(e) {
          return this.__data__.get(e);
        }
        function c_(e) {
          return this.__data__.has(e);
        }
        function f_(e, r) {
          var u = this.__data__;
          if (u instanceof Me) {
            var a = u.__data__;
            if (!Sn || a.length < i - 1) {
              a.push([e, r]);
              this.size = ++u.size;
              return this;
            }
            u = this.__data__ = new Pe(a);
          }
          u.set(e, r);
          this.size = u.size;
          return this;
        }
        ye.prototype.clear = s_;
        ye.prototype.delete = a_;
        ye.prototype.get = o_;
        ye.prototype.has = c_;
        ye.prototype.set = f_;
        function Rc(e, r) {
          var u = z(e);
          var a = !u && Dr(e);
          var f = !u && !a && ar(e);
          var p = !u && !a && !f && Qr(e);
          var _ = u || a || f || p;
          var m = _ ? ws(e.length, b0) : [];
          var y = m.length;
          for (var x in e) {
            if ((r || st.call(e, x)) && (!_ || x != "length" && (!f || x != "offset" && x != "parent") && (!p || x != "buffer" && x != "byteLength" && x != "byteOffset") && !Ge(x, y))) {
              m.push(x);
            }
          }
          return m;
        }
        function Oc(e) {
          var r = e.length;
          if (r) {
            return e[Us(0, r - 1)];
          } else {
            return t;
          }
        }
        function l_(e, r) {
          return Ji(Gt(e), mr(r, 0, e.length));
        }
        function h_(e) {
          return Ji(Gt(e));
        }
        function Ls(e, r, u) {
          if (u !== t && !we(e[r], u) || u === t && !(r in e)) {
            Le(e, r, u);
          }
        }
        function Bn(e, r, u) {
          var a = e[r];
          if (!st.call(e, r) || !we(a, u) || u === t && !(r in e)) {
            Le(e, r, u);
          }
        }
        function Pi(e, r) {
          for (var u = e.length; u--;) {
            if (we(e[u][0], r)) {
              return u;
            }
          }
          return -1;
        }
        function p_(e, r, u, a) {
          nr(e, function (f, p, _) {
            r(a, f, u(f), _);
          });
          return a;
        }
        function Ic(e, r) {
          return e && Fe(r, Tt(r), e);
        }
        function d_(e, r) {
          return e && Fe(r, $t(r), e);
        }
        function Le(e, r, u) {
          if (r == "__proto__" && Ri) {
            Ri(e, r, {
              configurable: true,
              enumerable: true,
              value: u,
              writable: true
            });
          } else {
            e[r] = u;
          }
        }
        function Bs(e, r) {
          for (var u = -1, a = r.length, f = D(a), p = e == null; ++u < a;) {
            f[u] = p ? t : ha(e, r[u]);
          }
          return f;
        }
        function mr(e, r, u) {
          if (e === e) {
            if (u !== t) {
              e = e <= u ? e : u;
            }
            if (r !== t) {
              e = e >= r ? e : r;
            }
          }
          return e;
        }
        function he(e, r, u, a, f, p) {
          var _;
          var m = r & A;
          var y = r & w;
          var x = r & T;
          if (u) {
            _ = f ? u(e, a, f, p) : u(e);
          }
          if (_ !== t) {
            return _;
          }
          if (!At(e)) {
            return e;
          }
          var C = z(e);
          if (C) {
            _ = rv(e);
            if (!m) {
              return Gt(e, _);
            }
          } else {
            var q = It(e);
            var F = q == vi || q == No;
            if (ar(e)) {
              return sf(e, m);
            }
            if (q == ke || q == Ur || F && !f) {
              _ = y || F ? {} : xf(e);
              if (!m) {
                if (y) {
                  return V_(e, d_(_, e));
                } else {
                  return $_(e, Ic(_, e));
                }
              }
            } else {
              if (!dt[q]) {
                if (f) {
                  return e;
                } else {
                  return {};
                }
              }
              _ = nv(e, q, m);
            }
          }
          p ||= new ye();
          var k = p.get(e);
          if (k) {
            return k;
          }
          p.set(e, _);
          if (tl(e)) {
            e.forEach(function (U) {
              _.add(he(U, r, u, U, e, p));
            });
          } else if (Jf(e)) {
            e.forEach(function (U, tt) {
              _.set(tt, he(U, r, u, tt, e, p));
            });
          }
          var G = x ? y ? Zs : js : y ? $t : Tt;
          var K = C ? t : G(e);
          re(K || e, function (U, tt) {
            if (K) {
              tt = U;
              U = e[tt];
            }
            Bn(_, tt, he(U, r, u, tt, e, p));
          });
          return _;
        }
        function g_(e) {
          var r = Tt(e);
          return function (u) {
            return Nc(u, e, r);
          };
        }
        function Nc(e, r, u) {
          var a = u.length;
          if (e == null) {
            return !a;
          }
          for (e = ft(e); a--;) {
            var f = u[a];
            var p = r[f];
            var _ = e[f];
            if (_ === t && !(f in e) || !p(_)) {
              return false;
            }
          }
          return true;
        }
        function kc(e, r, u) {
          if (typeof e != "function") {
            throw new fe(o);
          }
          return Mn(function () {
            e.apply(t, u);
          }, r);
        }
        function Fn(e, r, u, a) {
          var f = -1;
          var p = Di;
          var _ = true;
          var m = e.length;
          var y = [];
          var x = r.length;
          if (!m) {
            return y;
          }
          if (u) {
            r = mt(r, ne(u));
          }
          if (a) {
            p = vs;
            _ = false;
          } else if (r.length >= i) {
            p = xn;
            _ = false;
            r = new vr(r);
          }
          t: while (++f < m) {
            var C = e[f];
            var q = u == null ? C : u(C);
            C = a || C !== 0 ? C : 0;
            if (_ && q === q) {
              for (var F = x; F--;) {
                if (r[F] === q) {
                  continue t;
                }
              }
              y.push(C);
            } else if (!p(r, q, a)) {
              y.push(C);
            }
          }
          return y;
        }
        var nr = lf(Be);
        var Mc = lf(Rs, true);
        function __(e, r) {
          var u = true;
          nr(e, function (a, f, p) {
            u = !!r(a, f, p);
            return u;
          });
          return u;
        }
        function Ui(e, r, u) {
          for (var a = -1, f = e.length; ++a < f;) {
            var p = e[a];
            var _ = r(p);
            if (_ != null && (m === t ? _ === _ && !ue(_) : u(_, m))) {
              var m = _;
              var y = p;
            }
          }
          return y;
        }
        function v_(e, r, u, a) {
          var f = e.length;
          u = X(u);
          if (u < 0) {
            u = -u > f ? 0 : f + u;
          }
          a = a === t || a > f ? f : X(a);
          if (a < 0) {
            a += f;
          }
          a = u > a ? 0 : rl(a);
          while (u < a) {
            e[u++] = r;
          }
          return e;
        }
        function Pc(e, r) {
          var u = [];
          nr(e, function (a, f, p) {
            if (r(a, f, p)) {
              u.push(a);
            }
          });
          return u;
        }
        function Lt(e, r, u, a, f) {
          var p = -1;
          var _ = e.length;
          u ||= uv;
          f ||= [];
          while (++p < _) {
            var m = e[p];
            if (r > 0 && u(m)) {
              if (r > 1) {
                Lt(m, r - 1, u, a, f);
              } else {
                Qe(f, m);
              }
            } else if (!a) {
              f[f.length] = m;
            }
          }
          return f;
        }
        var Fs = hf();
        var Uc = hf(true);
        function Be(e, r) {
          return e && Fs(e, r, Tt);
        }
        function Rs(e, r) {
          return e && Uc(e, r, Tt);
        }
        function Hi(e, r) {
          return Je(r, function (u) {
            return We(e[u]);
          });
        }
        function Ar(e, r) {
          r = ur(r, e);
          for (var u = 0, a = r.length; e != null && u < a;) {
            e = e[De(r[u++])];
          }
          if (u && u == a) {
            return e;
          } else {
            return t;
          }
        }
        function Hc(e, r, u) {
          var a = r(e);
          if (z(e)) {
            return a;
          } else {
            return Qe(a, u(e));
          }
        }
        function Pt(e) {
          if (e == null) {
            if (e === t) {
              return X2;
            } else {
              return V2;
            }
          } else if (gr && gr in ft(e)) {
            return Q_(e);
          } else {
            return hv(e);
          }
        }
        function Os(e, r) {
          return e > r;
        }
        function m_(e, r) {
          return e != null && st.call(e, r);
        }
        function A_(e, r) {
          return e != null && r in ft(e);
        }
        function b_(e, r, u) {
          return e >= Ot(r, u) && e < xt(r, u);
        }
        function Is(e, r, u) {
          var a = u ? vs : Di;
          var f = e[0].length;
          var p = e.length;
          for (var _ = p, m = D(p), y = Infinity, x = []; _--;) {
            var C = e[_];
            if (_ && r) {
              C = mt(C, ne(r));
            }
            y = Ot(C.length, y);
            m[_] = !u && (r || f >= 120 && C.length >= 120) ? new vr(_ && C) : t;
          }
          C = e[0];
          var q = -1;
          var F = m[0];
          t: while (++q < f && x.length < y) {
            var k = C[q];
            var G = r ? r(k) : k;
            k = u || k !== 0 ? k : 0;
            if (!(F ? xn(F, G) : a(x, G, u))) {
              for (_ = p; --_;) {
                var K = m[_];
                if (!(K ? xn(K, G) : a(e[_], G, u))) {
                  continue t;
                }
              }
              if (F) {
                F.push(G);
              }
              x.push(k);
            }
          }
          return x;
        }
        function y_(e, r, u, a) {
          Be(e, function (f, p, _) {
            r(a, u(f), p, _);
          });
          return a;
        }
        function Rn(e, r, u) {
          r = ur(r, e);
          e = qf(e, r);
          var a = e == null ? e : e[De(de(r))];
          if (a == null) {
            return t;
          } else {
            return ee(a, e, u);
          }
        }
        function Gc(e) {
          return bt(e) && Pt(e) == Ur;
        }
        function D_(e) {
          return bt(e) && Pt(e) == En;
        }
        function w_(e) {
          return bt(e) && Pt(e) == An;
        }
        function On(e, r, u, a, f) {
          if (e === r) {
            return true;
          } else if (e == null || r == null || !bt(e) && !bt(r)) {
            return e !== e && r !== r;
          } else {
            return E_(e, r, u, a, On, f);
          }
        }
        function E_(e, r, u, a, f, p) {
          var _ = z(e);
          var m = z(r);
          var y = _ ? gi : It(e);
          var x = m ? gi : It(r);
          y = y == Ur ? ke : y;
          x = x == Ur ? ke : x;
          var C = y == ke;
          var q = x == ke;
          var F = y == x;
          if (F && ar(e)) {
            if (!ar(r)) {
              return false;
            }
            _ = true;
            C = false;
          }
          if (F && !C) {
            p ||= new ye();
            if (_ || Qr(e)) {
              return Df(e, r, u, a, f, p);
            } else {
              return Z_(e, r, y, u, a, f, p);
            }
          }
          if (!(u & S)) {
            var k = C && st.call(e, "__wrapped__");
            var G = q && st.call(r, "__wrapped__");
            if (k || G) {
              var K = k ? e.value() : e;
              var U = G ? r.value() : r;
              p ||= new ye();
              return f(K, U, u, a, p);
            }
          }
          if (F) {
            p ||= new ye();
            return J_(e, r, u, a, f, p);
          } else {
            return false;
          }
        }
        function x_(e) {
          return bt(e) && It(e) == me;
        }
        function Ns(e, r, u, a) {
          var f = u.length;
          var p = f;
          var _ = !a;
          if (e == null) {
            return !p;
          }
          for (e = ft(e); f--;) {
            var m = u[f];
            if (_ && m[2] ? m[1] !== e[m[0]] : !(m[0] in e)) {
              return false;
            }
          }
          while (++f < p) {
            m = u[f];
            var y = m[0];
            var x = e[y];
            var C = m[1];
            if (_ && m[2]) {
              if (x === t && !(y in e)) {
                return false;
              }
            } else {
              var q = new ye();
              if (a) {
                var F = a(x, C, y, e, r, q);
              }
              if (!(F === t ? On(C, x, S | L, a, q) : F)) {
                return false;
              }
            }
          }
          return true;
        }
        function Wc(e) {
          if (!At(e) || av(e)) {
            return false;
          }
          var r = We(e) ? x0 : gg;
          return r.test(yr(e));
        }
        function C_(e) {
          return bt(e) && Pt(e) == yn;
        }
        function S_(e) {
          return bt(e) && It(e) == Ae;
        }
        function T_(e) {
          return bt(e) && iu(e.length) && !!_t[Pt(e)];
        }
        function $c(e) {
          if (typeof e == "function") {
            return e;
          } else if (e == null) {
            return Vt;
          } else if (typeof e == "object") {
            if (z(e)) {
              return Xc(e[0], e[1]);
            } else {
              return zc(e);
            }
          } else {
            return dl(e);
          }
        }
        function ks(e) {
          if (!kn(e)) {
            return B0(e);
          }
          var r = [];
          for (var u in ft(e)) {
            if (st.call(e, u) && u != "constructor") {
              r.push(u);
            }
          }
          return r;
        }
        function q_(e) {
          if (!At(e)) {
            return lv(e);
          }
          var r = kn(e);
          var u = [];
          for (var a in e) {
            if (a != "constructor" || !r && !!st.call(e, a)) {
              u.push(a);
            }
          }
          return u;
        }
        function Ms(e, r) {
          return e < r;
        }
        function Vc(e, r) {
          var u = -1;
          var a = Wt(e) ? D(e.length) : [];
          nr(e, function (f, p, _) {
            a[++u] = r(f, p, _);
          });
          return a;
        }
        function zc(e) {
          var r = Qs(e);
          if (r.length == 1 && r[0][2]) {
            return Sf(r[0][0], r[0][1]);
          } else {
            return function (u) {
              return u === e || Ns(u, e, r);
            };
          }
        }
        function Xc(e, r) {
          if (ea(e) && Cf(r)) {
            return Sf(De(e), r);
          } else {
            return function (u) {
              var a = ha(u, e);
              if (a === t && a === r) {
                return pa(u, e);
              } else {
                return On(r, a, S | L);
              }
            };
          }
        }
        function Gi(e, r, u, a, f) {
          if (e !== r) {
            Fs(r, function (p, _) {
              f ||= new ye();
              if (At(p)) {
                L_(e, r, _, u, Gi, a, f);
              } else {
                var m = a ? a(na(e, _), p, _ + "", e, r, f) : t;
                if (m === t) {
                  m = p;
                }
                Ls(e, _, m);
              }
            }, $t);
          }
        }
        function L_(e, r, u, a, f, p, _) {
          var m = na(e, u);
          var y = na(r, u);
          var x = _.get(y);
          if (x) {
            Ls(e, u, x);
            return;
          }
          var C = p ? p(m, y, u + "", e, r, _) : t;
          var q = C === t;
          if (q) {
            var F = z(y);
            var k = !F && ar(y);
            var G = !F && !k && Qr(y);
            C = y;
            if (F || k || G) {
              if (z(m)) {
                C = m;
              } else if (Dt(m)) {
                C = Gt(m);
              } else if (k) {
                q = false;
                C = sf(y, true);
              } else if (G) {
                q = false;
                C = af(y, true);
              } else {
                C = [];
              }
            } else if (Pn(y) || Dr(y)) {
              C = m;
              if (Dr(m)) {
                C = nl(m);
              } else if (!At(m) || We(m)) {
                C = xf(y);
              }
            } else {
              q = false;
            }
          }
          if (q) {
            _.set(y, C);
            f(C, y, a, p, _);
            _.delete(y);
          }
          Ls(e, u, C);
        }
        function Yc(e, r) {
          var u = e.length;
          if (u) {
            r += r < 0 ? u : 0;
            if (Ge(r, u)) {
              return e[r];
            } else {
              return t;
            }
          }
        }
        function Kc(e, r, u) {
          if (r.length) {
            r = mt(r, function (p) {
              if (z(p)) {
                return function (_) {
                  return Ar(_, p.length === 1 ? p[0] : p);
                };
              } else {
                return p;
              }
            });
          } else {
            r = [Vt];
          }
          var a = -1;
          r = mt(r, ne(H()));
          var f = Vc(e, function (p, _, m) {
            var y = mt(r, function (x) {
              return x(p);
            });
            return {
              criteria: y,
              index: ++a,
              value: p
            };
          });
          return n0(f, function (p, _) {
            return W_(p, _, u);
          });
        }
        function B_(e, r) {
          return jc(e, r, function (u, a) {
            return pa(e, a);
          });
        }
        function jc(e, r, u) {
          for (var a = -1, f = r.length, p = {}; ++a < f;) {
            var _ = r[a];
            var m = Ar(e, _);
            if (u(m, _)) {
              In(p, ur(_, e), m);
            }
          }
          return p;
        }
        function F_(e) {
          return function (r) {
            return Ar(r, e);
          };
        }
        function Ps(e, r, u, a) {
          var f = a ? r0 : Wr;
          var p = -1;
          var _ = r.length;
          var m = e;
          if (e === r) {
            r = Gt(r);
          }
          if (u) {
            m = mt(e, ne(u));
          }
          while (++p < _) {
            for (var y = 0, x = r[p], C = u ? u(x) : x; (y = f(m, C, y, a)) > -1;) {
              if (m !== e) {
                Fi.call(m, y, 1);
              }
              Fi.call(e, y, 1);
            }
          }
          return e;
        }
        function Zc(e, r) {
          for (var u = e ? r.length : 0, a = u - 1; u--;) {
            var f = r[u];
            if (u == a || f !== p) {
              var p = f;
              if (Ge(f)) {
                Fi.call(e, f, 1);
              } else {
                Ws(e, f);
              }
            }
          }
          return e;
        }
        function Us(e, r) {
          return e + Ii(Bc() * (r - e + 1));
        }
        function R_(e, r, u, a) {
          var f = -1;
          for (var p = xt(Oi((r - e) / (u || 1)), 0), _ = D(p); p--;) {
            _[a ? p : ++f] = e;
            e += u;
          }
          return _;
        }
        function Hs(e, r) {
          var u = "";
          if (!e || r < 1 || r > Ze) {
            return u;
          }
          do {
            if (r % 2) {
              u += e;
            }
            r = Ii(r / 2);
            if (r) {
              e += e;
            }
          } while (r);
          return u;
        }
        function Z(e, r) {
          return ia(Tf(e, r, Vt), e + "");
        }
        function O_(e) {
          return Oc(tn(e));
        }
        function I_(e, r) {
          var u = tn(e);
          return Ji(u, mr(r, 0, u.length));
        }
        function In(e, r, u, a) {
          if (!At(e)) {
            return e;
          }
          r = ur(r, e);
          for (var f = -1, p = r.length, _ = p - 1, m = e; m != null && ++f < p;) {
            var y = De(r[f]);
            var x = u;
            if (y === "__proto__" || y === "constructor" || y === "prototype") {
              return e;
            }
            if (f != _) {
              var C = m[y];
              x = a ? a(C, y, m) : t;
              if (x === t) {
                x = At(C) ? C : Ge(r[f + 1]) ? [] : {};
              }
            }
            Bn(m, y, x);
            m = m[y];
          }
          return e;
        }
        var Jc = Ni ? function (e, r) {
          Ni.set(e, r);
          return e;
        } : Vt;
        var N_ = Ri ? function (e, r) {
          return Ri(e, "toString", {
            configurable: true,
            enumerable: false,
            value: ga(r),
            writable: true
          });
        } : Vt;
        function k_(e) {
          return Ji(tn(e));
        }
        function pe(e, r, u) {
          var a = -1;
          var f = e.length;
          if (r < 0) {
            r = -r > f ? 0 : f + r;
          }
          u = u > f ? f : u;
          if (u < 0) {
            u += f;
          }
          f = r > u ? 0 : u - r >>> 0;
          r >>>= 0;
          var p = D(f);
          for (; ++a < f;) {
            p[a] = e[a + r];
          }
          return p;
        }
        function M_(e, r) {
          var u;
          nr(e, function (a, f, p) {
            u = r(a, f, p);
            return !u;
          });
          return !!u;
        }
        function Wi(e, r, u) {
          var a = 0;
          var f = e == null ? a : e.length;
          if (typeof r == "number" && r === r && f <= H2) {
            while (a < f) {
              var p = a + f >>> 1;
              var _ = e[p];
              if (_ !== null && !ue(_) && (u ? _ <= r : _ < r)) {
                a = p + 1;
              } else {
                f = p;
              }
            }
            return f;
          }
          return Gs(e, r, Vt, u);
        }
        function Gs(e, r, u, a) {
          var f = 0;
          var p = e == null ? 0 : e.length;
          if (p === 0) {
            return 0;
          }
          r = u(r);
          var _ = r !== r;
          var m = r === null;
          var y = ue(r);
          var x = r === t;
          for (; f < p;) {
            var C = Ii((f + p) / 2);
            var q = u(e[C]);
            var F = q !== t;
            var k = q === null;
            var G = q === q;
            var K = ue(q);
            if (_) {
              var U = a || G;
            } else if (x) {
              U = G && (a || F);
            } else if (m) {
              U = G && F && (a || !k);
            } else if (y) {
              U = G && F && !k && (a || !K);
            } else if (k || K) {
              U = false;
            } else {
              U = a ? q <= r : q < r;
            }
            if (U) {
              f = C + 1;
            } else {
              p = C;
            }
          }
          return Ot(p, U2);
        }
        function Qc(e, r) {
          for (var u = -1, a = e.length, f = 0, p = []; ++u < a;) {
            var _ = e[u];
            var m = r ? r(_) : _;
            if (!u || !we(m, y)) {
              var y = m;
              p[f++] = _ === 0 ? 0 : _;
            }
          }
          return p;
        }
        function tf(e) {
          if (typeof e == "number") {
            return e;
          } else if (ue(e)) {
            return di;
          } else {
            return +e;
          }
        }
        function ie(e) {
          if (typeof e == "string") {
            return e;
          }
          if (z(e)) {
            return mt(e, ie) + "";
          }
          if (ue(e)) {
            if (Fc) {
              return Fc.call(e);
            } else {
              return "";
            }
          }
          var r = e + "";
          if (r == "0" && 1 / e == -te) {
            return "-0";
          } else {
            return r;
          }
        }
        function ir(e, r, u) {
          var a = -1;
          var f = Di;
          var p = e.length;
          var _ = true;
          var m = [];
          var y = m;
          if (u) {
            _ = false;
            f = vs;
          } else if (p >= i) {
            var x = r ? null : K_(e);
            if (x) {
              return Ei(x);
            }
            _ = false;
            f = xn;
            y = new vr();
          } else {
            y = r ? [] : m;
          }
          t: while (++a < p) {
            var C = e[a];
            var q = r ? r(C) : C;
            C = u || C !== 0 ? C : 0;
            if (_ && q === q) {
              for (var F = y.length; F--;) {
                if (y[F] === q) {
                  continue t;
                }
              }
              if (r) {
                y.push(q);
              }
              m.push(C);
            } else if (!f(y, q, u)) {
              if (y !== m) {
                y.push(q);
              }
              m.push(C);
            }
          }
          return m;
        }
        function Ws(e, r) {
          r = ur(r, e);
          var u = -1;
          var a = r.length;
          if (!a) {
            return true;
          }
          while (++u < a) {
            var f = De(r[u]);
            if (f === "__proto__" && !st.call(e, "__proto__") || (f === "constructor" || f === "prototype") && u < a - 1) {
              return false;
            }
          }
          var p = qf(e, r);
          return p == null || delete p[De(de(r))];
        }
        function ef(e, r, u, a) {
          return In(e, r, u(Ar(e, r)), a);
        }
        function $i(e, r, u, a) {
          for (var f = e.length, p = a ? f : -1; (a ? p-- : ++p < f) && r(e[p], p, e););
          if (u) {
            return pe(e, a ? 0 : p, a ? p + 1 : f);
          } else {
            return pe(e, a ? p + 1 : 0, a ? f : p);
          }
        }
        function rf(e, r) {
          var u = e;
          if (u instanceof et) {
            u = u.value();
          }
          return ms(r, function (a, f) {
            return f.func.apply(f.thisArg, Qe([a], f.args));
          }, u);
        }
        function $s(e, r, u) {
          var a = e.length;
          if (a < 2) {
            if (a) {
              return ir(e[0]);
            } else {
              return [];
            }
          }
          for (var f = -1, p = D(a); ++f < a;) {
            var _ = e[f];
            for (var m = -1; ++m < a;) {
              if (m != f) {
                p[f] = Fn(p[f] || _, e[m], r, u);
              }
            }
          }
          return ir(Lt(p, 1), r, u);
        }
        function nf(e, r, u) {
          for (var a = -1, f = e.length, p = r.length, _ = {}; ++a < f;) {
            var m = a < p ? r[a] : t;
            u(_, e[a], m);
          }
          return _;
        }
        function Vs(e) {
          if (Dt(e)) {
            return e;
          } else {
            return [];
          }
        }
        function zs(e) {
          if (typeof e == "function") {
            return e;
          } else {
            return Vt;
          }
        }
        function ur(e, r) {
          if (z(e)) {
            return e;
          } else if (ea(e, r)) {
            return [e];
          } else {
            return Rf(at(e));
          }
        }
        var P_ = Z;
        function sr(e, r, u) {
          var a = e.length;
          u = u === t ? a : u;
          if (!r && u >= a) {
            return e;
          } else {
            return pe(e, r, u);
          }
        }
        var uf = C0 || function (e) {
          return St.clearTimeout(e);
        };
        function sf(e, r) {
          if (r) {
            return e.slice();
          }
          var u = e.length;
          var a = Cc ? Cc(u) : new e.constructor(u);
          e.copy(a);
          return a;
        }
        function Xs(e) {
          var r = new e.constructor(e.byteLength);
          new Li(r).set(new Li(e));
          return r;
        }
        function U_(e, r) {
          var u = r ? Xs(e.buffer) : e.buffer;
          return new e.constructor(u, e.byteOffset, e.byteLength);
        }
        function H_(e) {
          var r = new e.constructor(e.source, Go.exec(e));
          r.lastIndex = e.lastIndex;
          return r;
        }
        function G_(e) {
          if (Ln) {
            return ft(Ln.call(e));
          } else {
            return {};
          }
        }
        function af(e, r) {
          var u = r ? Xs(e.buffer) : e.buffer;
          return new e.constructor(u, e.byteOffset, e.length);
        }
        function of(e, r) {
          if (e !== r) {
            var u = e !== t;
            var a = e === null;
            var f = e === e;
            var p = ue(e);
            var _ = r !== t;
            var m = r === null;
            var y = r === r;
            var x = ue(r);
            if (!m && !x && !p && e > r || p && _ && y && !m && !x || a && _ && y || !u && y || !f) {
              return 1;
            }
            if (!a && !p && !x && e < r || x && u && f && !a && !p || m && u && f || !_ && f || !y) {
              return -1;
            }
          }
          return 0;
        }
        function W_(e, r, u) {
          for (var a = -1, f = e.criteria, p = r.criteria, _ = f.length, m = u.length; ++a < _;) {
            var y = of(f[a], p[a]);
            if (y) {
              if (a >= m) {
                return y;
              }
              var x = u[a];
              return y * (x == "desc" ? -1 : 1);
            }
          }
          return e.index - r.index;
        }
        function cf(e, r, u, a) {
          var f = -1;
          var p = e.length;
          var _ = u.length;
          for (var m = -1, y = r.length, x = xt(p - _, 0), C = D(y + x), q = !a; ++m < y;) {
            C[m] = r[m];
          }
          while (++f < _) {
            if (q || f < p) {
              C[u[f]] = e[f];
            }
          }
          while (x--) {
            C[m++] = e[f++];
          }
          return C;
        }
        function ff(e, r, u, a) {
          for (var f = -1, p = e.length, _ = -1, m = u.length, y = -1, x = r.length, C = xt(p - m, 0), q = D(C + x), F = !a; ++f < C;) {
            q[f] = e[f];
          }
          var k = f;
          for (; ++y < x;) {
            q[k + y] = r[y];
          }
          while (++_ < m) {
            if (F || f < p) {
              q[k + u[_]] = e[f++];
            }
          }
          return q;
        }
        function Gt(e, r) {
          var u = -1;
          var a = e.length;
          for (r ||= D(a); ++u < a;) {
            r[u] = e[u];
          }
          return r;
        }
        function Fe(e, r, u, a) {
          var f = !u;
          u ||= {};
          for (var p = -1, _ = r.length; ++p < _;) {
            var m = r[p];
            var y = a ? a(u[m], e[m], m, u, e) : t;
            if (y === t) {
              y = e[m];
            }
            if (f) {
              Le(u, m, y);
            } else {
              Bn(u, m, y);
            }
          }
          return u;
        }
        function $_(e, r) {
          return Fe(e, ta(e), r);
        }
        function V_(e, r) {
          return Fe(e, wf(e), r);
        }
        function Vi(e, r) {
          return function (u, a) {
            var f = z(u) ? jg : p_;
            var p = r ? r() : {};
            return f(u, e, H(a, 2), p);
          };
        }
        function jr(e) {
          return Z(function (r, u) {
            var a = -1;
            var f = u.length;
            var p = f > 1 ? u[f - 1] : t;
            var _ = f > 2 ? u[2] : t;
            p = e.length > 3 && typeof p == "function" ? (f--, p) : t;
            if (_ && Ut(u[0], u[1], _)) {
              p = f < 3 ? t : p;
              f = 1;
            }
            r = ft(r);
            while (++a < f) {
              var m = u[a];
              if (m) {
                e(r, m, a, p);
              }
            }
            return r;
          });
        }
        function lf(e, r) {
          return function (u, a) {
            if (u == null) {
              return u;
            }
            if (!Wt(u)) {
              return e(u, a);
            }
            for (var f = u.length, p = r ? f : -1, _ = ft(u); (r ? p-- : ++p < f) && a(_[p], p, _) !== false;);
            return u;
          };
        }
        function hf(e) {
          return function (r, u, a) {
            var f = -1;
            var p = ft(r);
            var _ = a(r);
            for (var m = _.length; m--;) {
              var y = _[e ? m : ++f];
              if (u(p[y], y, p) === false) {
                break;
              }
            }
            return r;
          };
        }
        function z_(e, r, u) {
          var a = r & B;
          var f = Nn(e);
          function p() {
            var _ = this && this !== St && this instanceof p ? f : e;
            return _.apply(a ? u : this, arguments);
          }
          return p;
        }
        function pf(e) {
          return function (r) {
            r = at(r);
            var u = $r(r) ? be(r) : t;
            var a = u ? u[0] : r.charAt(0);
            var f = u ? sr(u, 1).join("") : r.slice(1);
            return a[e]() + f;
          };
        }
        function Zr(e) {
          return function (r) {
            return ms(hl(ll(r).replace(Ng, "")), e, "");
          };
        }
        function Nn(e) {
          return function () {
            var r = arguments;
            switch (r.length) {
              case 0:
                return new e();
              case 1:
                return new e(r[0]);
              case 2:
                return new e(r[0], r[1]);
              case 3:
                return new e(r[0], r[1], r[2]);
              case 4:
                return new e(r[0], r[1], r[2], r[3]);
              case 5:
                return new e(r[0], r[1], r[2], r[3], r[4]);
              case 6:
                return new e(r[0], r[1], r[2], r[3], r[4], r[5]);
              case 7:
                return new e(r[0], r[1], r[2], r[3], r[4], r[5], r[6]);
            }
            var u = Kr(e.prototype);
            var a = e.apply(u, r);
            if (At(a)) {
              return a;
            } else {
              return u;
            }
          };
        }
        function X_(e, r, u) {
          var a = Nn(e);
          function f() {
            var p = arguments.length;
            var _ = D(p);
            for (var m = p, y = Jr(f); m--;) {
              _[m] = arguments[m];
            }
            var x = p < 3 && _[0] !== y && _[p - 1] !== y ? [] : tr(_, y);
            p -= x.length;
            if (p < u) {
              return mf(e, r, zi, f.placeholder, t, _, x, t, t, u - p);
            }
            var C = this && this !== St && this instanceof f ? a : e;
            return ee(C, this, _);
          }
          return f;
        }
        function df(e) {
          return function (r, u, a) {
            var f = ft(r);
            if (!Wt(r)) {
              var p = H(u, 3);
              r = Tt(r);
              u = function (m) {
                return p(f[m], m, f);
              };
            }
            var _ = e(r, u, a);
            if (_ > -1) {
              return f[p ? r[_] : _];
            } else {
              return t;
            }
          };
        }
        function gf(e) {
          return He(function (r) {
            var u = r.length;
            var a = u;
            var f = le.prototype.thru;
            for (e && r.reverse(); a--;) {
              var p = r[a];
              if (typeof p != "function") {
                throw new fe(o);
              }
              if (f && !_ && ji(p) == "wrapper") {
                var _ = new le([], true);
              }
            }
            for (a = _ ? a : u; ++a < u;) {
              p = r[a];
              var m = ji(p);
              var y = m == "wrapper" ? Js(p) : t;
              if (y && ra(y[0]) && y[1] == (N | nt | it | W) && !y[4].length && y[9] == 1) {
                _ = _[ji(y[0])].apply(_, y[3]);
              } else {
                _ = p.length == 1 && ra(p) ? _[m]() : _.thru(p);
              }
            }
            return function () {
              var x = arguments;
              var C = x[0];
              if (_ && x.length == 1 && z(C)) {
                return _.plant(C).value();
              }
              for (var q = 0, F = u ? r[q].apply(this, x) : C; ++q < u;) {
                F = r[q].call(this, F);
              }
              return F;
            };
          });
        }
        function zi(e, r, u, a, f, p, _, m, y, x) {
          var C = r & N;
          var q = r & B;
          var F = r & P;
          var k = r & (nt | ht);
          var G = r & pt;
          var K = F ? t : Nn(e);
          function U() {
            var tt = arguments.length;
            var rt = D(tt);
            for (var se = tt; se--;) {
              rt[se] = arguments[se];
            }
            if (k) {
              var Ht = Jr(U);
              var ae = u0(rt, Ht);
            }
            if (a) {
              rt = cf(rt, a, f, k);
            }
            if (p) {
              rt = ff(rt, p, _, k);
            }
            tt -= ae;
            if (k && tt < x) {
              var wt = tr(rt, Ht);
              return mf(e, r, zi, U.placeholder, u, rt, wt, m, y, x - tt);
            }
            var Ee = q ? u : this;
            var Ve = F ? Ee[e] : e;
            tt = rt.length;
            if (m) {
              rt = pv(rt, m);
            } else if (G && tt > 1) {
              rt.reverse();
            }
            if (C && y < tt) {
              rt.length = y;
            }
            if (this && this !== St && this instanceof U) {
              Ve = K || Nn(Ve);
            }
            return Ve.apply(Ee, rt);
          }
          return U;
        }
        function _f(e, r) {
          return function (u, a) {
            return y_(u, e, r(a), {});
          };
        }
        function Xi(e, r) {
          return function (u, a) {
            var f;
            if (u === t && a === t) {
              return r;
            }
            if (u !== t) {
              f = u;
            }
            if (a !== t) {
              if (f === t) {
                return a;
              }
              if (typeof u == "string" || typeof a == "string") {
                u = ie(u);
                a = ie(a);
              } else {
                u = tf(u);
                a = tf(a);
              }
              f = e(u, a);
            }
            return f;
          };
        }
        function Ys(e) {
          return He(function (r) {
            r = mt(r, ne(H()));
            return Z(function (u) {
              var a = this;
              return e(r, function (f) {
                return ee(f, a, u);
              });
            });
          });
        }
        function Yi(e, r) {
          r = r === t ? " " : ie(r);
          var u = r.length;
          if (u < 2) {
            if (u) {
              return Hs(r, e);
            } else {
              return r;
            }
          }
          var a = Hs(r, Oi(e / Vr(r)));
          if ($r(r)) {
            return sr(be(a), 0, e).join("");
          } else {
            return a.slice(0, e);
          }
        }
        function Y_(e, r, u, a) {
          var f = r & B;
          var p = Nn(e);
          function _() {
            var m = -1;
            var y = arguments.length;
            for (var x = -1, C = a.length, q = D(C + y), F = this && this !== St && this instanceof _ ? p : e; ++x < C;) {
              q[x] = a[x];
            }
            while (y--) {
              q[x++] = arguments[++m];
            }
            return ee(F, f ? u : this, q);
          }
          return _;
        }
        function vf(e) {
          return function (r, u, a) {
            if (a && typeof a != "number" && Ut(r, u, a)) {
              u = a = t;
            }
            r = $e(r);
            if (u === t) {
              u = r;
              r = 0;
            } else {
              u = $e(u);
            }
            a = a === t ? r < u ? 1 : -1 : $e(a);
            return R_(r, u, a, e);
          };
        }
        function Ki(e) {
          return function (r, u) {
            if (typeof r != "string" || typeof u != "string") {
              r = ge(r);
              u = ge(u);
            }
            return e(r, u);
          };
        }
        function mf(e, r, u, a, f, p, _, m, y, x) {
          var C = r & nt;
          var q = C ? _ : t;
          var F = C ? t : _;
          var k = C ? p : t;
          var G = C ? t : p;
          r |= C ? it : $;
          r &= ~(C ? $ : it);
          if (!(r & Y)) {
            r &= ~(B | P);
          }
          var K = [e, r, f, k, q, G, F, m, y, x];
          var U = u.apply(t, K);
          if (ra(e)) {
            Lf(U, K);
          }
          U.placeholder = a;
          return Bf(U, e, r);
        }
        function Ks(e) {
          var r = Et[e];
          return function (u, a) {
            u = ge(u);
            a = a == null ? 0 : Ot(X(a), 292);
            if (a && Lc(u)) {
              var f = (at(u) + "e").split("e");
              var p = r(f[0] + "e" + (+f[1] + a));
              f = (at(p) + "e").split("e");
              return +(f[0] + "e" + (+f[1] - a));
            }
            return r(u);
          };
        }
        var K_ = Xr && 1 / Ei(new Xr([, -0]))[1] == te ? function (e) {
          return new Xr(e);
        } : ma;
        function Af(e) {
          return function (r) {
            var u = It(r);
            if (u == me) {
              return xs(r);
            } else if (u == Ae) {
              return h0(r);
            } else {
              return i0(r, e(r));
            }
          };
        }
        function Ue(e, r, u, a, f, p, _, m) {
          var y = r & P;
          if (!y && typeof e != "function") {
            throw new fe(o);
          }
          var x = a ? a.length : 0;
          if (!x) {
            r &= ~(it | $);
            a = f = t;
          }
          _ = _ === t ? _ : xt(X(_), 0);
          m = m === t ? m : X(m);
          x -= f ? f.length : 0;
          if (r & $) {
            var C = a;
            var q = f;
            a = f = t;
          }
          var F = y ? t : Js(e);
          var k = [e, r, u, a, f, C, q, p, _, m];
          if (F) {
            fv(k, F);
          }
          e = k[0];
          r = k[1];
          u = k[2];
          a = k[3];
          f = k[4];
          m = k[9] = k[9] === t ? y ? 0 : e.length : xt(k[9] - x, 0);
          if (!m && r & (nt | ht)) {
            r &= ~(nt | ht);
          }
          if (!r || r == B) {
            var G = z_(e, r, u);
          } else if (r == nt || r == ht) {
            G = X_(e, r, m);
          } else if ((r == it || r == (B | it)) && !f.length) {
            G = Y_(e, r, u, a);
          } else {
            G = zi.apply(t, k);
          }
          var K = F ? Jc : Lf;
          return Bf(K(G, k), e, r);
        }
        function bf(e, r, u, a) {
          if (e === t || we(e, zr[u]) && !st.call(a, u)) {
            return r;
          } else {
            return e;
          }
        }
        function yf(e, r, u, a, f, p) {
          if (At(e) && At(r)) {
            p.set(r, e);
            Gi(e, r, t, yf, p);
            p.delete(r);
          }
          return e;
        }
        function j_(e) {
          if (Pn(e)) {
            return t;
          } else {
            return e;
          }
        }
        function Df(e, r, u, a, f, p) {
          var _ = u & S;
          var m = e.length;
          var y = r.length;
          if (m != y && (!_ || !(y > m))) {
            return false;
          }
          var x = p.get(e);
          var C = p.get(r);
          if (x && C) {
            return x == r && C == e;
          }
          var q = -1;
          var F = true;
          var k = u & L ? new vr() : t;
          p.set(e, r);
          p.set(r, e);
          while (++q < m) {
            var G = e[q];
            var K = r[q];
            if (a) {
              var U = _ ? a(K, G, q, r, e, p) : a(G, K, q, e, r, p);
            }
            if (U !== t) {
              if (U) {
                continue;
              }
              F = false;
              break;
            }
            if (k) {
              if (!As(r, function (tt, rt) {
                if (!xn(k, rt) && (G === tt || f(G, tt, u, a, p))) {
                  return k.push(rt);
                }
              })) {
                F = false;
                break;
              }
            } else if (G !== K && !f(G, K, u, a, p)) {
              F = false;
              break;
            }
          }
          p.delete(e);
          p.delete(r);
          return F;
        }
        function Z_(e, r, u, a, f, p, _) {
          switch (u) {
            case Hr:
              if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset) {
                return false;
              }
              e = e.buffer;
              r = r.buffer;
            case En:
              return e.byteLength == r.byteLength && !!p(new Li(e), new Li(r));
            case mn:
            case An:
            case bn:
              return we(+e, +r);
            case _i:
              return e.name == r.name && e.message == r.message;
            case yn:
            case Dn:
              return e == r + "";
            case me:
              var m = xs;
            case Ae:
              var y = a & S;
              m ||= Ei;
              if (e.size != r.size && !y) {
                return false;
              }
              var x = _.get(e);
              if (x) {
                return x == r;
              }
              a |= L;
              _.set(e, r);
              var C = Df(m(e), m(r), a, f, p, _);
              _.delete(e);
              return C;
            case mi:
              if (Ln) {
                return Ln.call(e) == Ln.call(r);
              }
          }
          return false;
        }
        function J_(e, r, u, a, f, p) {
          var _ = u & S;
          var m = js(e);
          var y = m.length;
          var x = js(r);
          var C = x.length;
          if (y != C && !_) {
            return false;
          }
          for (var q = y; q--;) {
            var F = m[q];
            if (!(_ ? F in r : st.call(r, F))) {
              return false;
            }
          }
          var k = p.get(e);
          var G = p.get(r);
          if (k && G) {
            return k == r && G == e;
          }
          var K = true;
          p.set(e, r);
          p.set(r, e);
          var U = _;
          for (; ++q < y;) {
            F = m[q];
            var tt = e[F];
            var rt = r[F];
            if (a) {
              var se = _ ? a(rt, tt, F, r, e, p) : a(tt, rt, F, e, r, p);
            }
            if (!(se === t ? tt === rt || f(tt, rt, u, a, p) : se)) {
              K = false;
              break;
            }
            U ||= F == "constructor";
          }
          if (K && !U) {
            var Ht = e.constructor;
            var ae = r.constructor;
            if (Ht != ae && "constructor" in e && "constructor" in r && (typeof Ht != "function" || !(Ht instanceof Ht) || typeof ae != "function" || !(ae instanceof ae))) {
              K = false;
            }
          }
          p.delete(e);
          p.delete(r);
          return K;
        }
        function He(e) {
          return ia(Tf(e, t, kf), e + "");
        }
        function js(e) {
          return Hc(e, Tt, ta);
        }
        function Zs(e) {
          return Hc(e, $t, wf);
        }
        var Js = Ni ? function (e) {
          return Ni.get(e);
        } : ma;
        function ji(e) {
          var r = e.name + "";
          var u = Yr[r];
          for (var a = st.call(Yr, r) ? u.length : 0; a--;) {
            var f = u[a];
            var p = f.func;
            if (p == null || p == e) {
              return f.name;
            }
          }
          return r;
        }
        function Jr(e) {
          var r = st.call(h, "placeholder") ? h : e;
          return r.placeholder;
        }
        function H() {
          var e = h.iteratee || _a;
          e = e === _a ? $c : e;
          if (arguments.length) {
            return e(arguments[0], arguments[1]);
          } else {
            return e;
          }
        }
        function Zi(e, r) {
          var u = e.__data__;
          if (sv(r)) {
            return u[typeof r == "string" ? "string" : "hash"];
          } else {
            return u.map;
          }
        }
        function Qs(e) {
          var r = Tt(e);
          for (var u = r.length; u--;) {
            var a = r[u];
            var f = e[a];
            r[u] = [a, f, Cf(f)];
          }
          return r;
        }
        function br(e, r) {
          var u = c0(e, r);
          if (Wc(u)) {
            return u;
          } else {
            return t;
          }
        }
        function Q_(e) {
          var r = st.call(e, gr);
          var u = e[gr];
          try {
            e[gr] = t;
            var a = true;
          } catch (p) {}
          var f = Ti.call(e);
          if (a) {
            if (r) {
              e[gr] = u;
            } else {
              delete e[gr];
            }
          }
          return f;
        }
        var ta = Ss ? function (e) {
          if (e == null) {
            return [];
          } else {
            e = ft(e);
            return Je(Ss(e), function (r) {
              return Tc.call(e, r);
            });
          }
        } : Aa;
        var wf = Ss ? function (e) {
          var r = [];
          for (; e;) {
            Qe(r, ta(e));
            e = Bi(e);
          }
          return r;
        } : Aa;
        var It = Pt;
        if (Ts && It(new Ts(new ArrayBuffer(1))) != Hr || Sn && It(new Sn()) != me || qs && It(qs.resolve()) != ko || Xr && It(new Xr()) != Ae || Tn && It(new Tn()) != wn) {
          It = function (e) {
            var r = Pt(e);
            var u = r == ke ? e.constructor : t;
            var a = u ? yr(u) : "";
            if (a) {
              switch (a) {
                case I0:
                  return Hr;
                case N0:
                  return me;
                case k0:
                  return ko;
                case M0:
                  return Ae;
                case P0:
                  return wn;
              }
            }
            return r;
          };
        }
        function tv(e, r, u) {
          for (var a = -1, f = u.length; ++a < f;) {
            var p = u[a];
            var _ = p.size;
            switch (p.type) {
              case "drop":
                e += _;
                break;
              case "dropRight":
                r -= _;
                break;
              case "take":
                r = Ot(r, e + _);
                break;
              case "takeRight":
                e = xt(e, r - _);
                break;
            }
          }
          return {
            start: e,
            end: r
          };
        }
        function ev(e) {
          var r = e.match(og);
          if (r) {
            return r[1].split(cg);
          } else {
            return [];
          }
        }
        function Ef(e, r, u) {
          r = ur(r, e);
          for (var a = -1, f = r.length, p = false; ++a < f;) {
            var _ = De(r[a]);
            if (!(p = e != null && u(e, _))) {
              break;
            }
            e = e[_];
          }
          if (p || ++a != f) {
            return p;
          } else {
            f = e == null ? 0 : e.length;
            return !!f && iu(f) && Ge(_, f) && (z(e) || Dr(e));
          }
        }
        function rv(e) {
          var r = e.length;
          var u = new e.constructor(r);
          if (r && typeof e[0] == "string" && st.call(e, "index")) {
            u.index = e.index;
            u.input = e.input;
          }
          return u;
        }
        function xf(e) {
          if (typeof e.constructor == "function" && !kn(e)) {
            return Kr(Bi(e));
          } else {
            return {};
          }
        }
        function nv(e, r, u) {
          var a = e.constructor;
          switch (r) {
            case En:
              return Xs(e);
            case mn:
            case An:
              return new a(+e);
            case Hr:
              return U_(e, u);
            case Qu:
            case ts:
            case es:
            case rs:
            case ns:
            case is:
            case us:
            case ss:
            case as:
              return af(e, u);
            case me:
              return new a();
            case bn:
            case Dn:
              return new a(e);
            case yn:
              return H_(e);
            case Ae:
              return new a();
            case mi:
              return G_(e);
          }
        }
        function iv(e, r) {
          var u = r.length;
          if (!u) {
            return e;
          }
          var a = u - 1;
          r[a] = (u > 1 ? "& " : "") + r[a];
          r = r.join(u > 2 ? ", " : " ");
          return e.replace(ag, `{
/* [wrapped with ${r}] */
`);
        }
        function uv(e) {
          return z(e) || Dr(e) || !!qc && !!e && !!e[qc];
        }
        function Ge(e, r) {
          var u = typeof e;
          r = r == null ? Ze : r;
          return !!r && (u == "number" || u != "symbol" && vg.test(e)) && e > -1 && e % 1 == 0 && e < r;
        }
        function Ut(e, r, u) {
          if (!At(u)) {
            return false;
          }
          var a = typeof r;
          if (a == "number" ? Wt(u) && Ge(r, u.length) : a == "string" && r in u) {
            return we(u[r], e);
          } else {
            return false;
          }
        }
        function ea(e, r) {
          if (z(e)) {
            return false;
          }
          var u = typeof e;
          if (u == "number" || u == "symbol" || u == "boolean" || e == null || ue(e)) {
            return true;
          } else {
            return ng.test(e) || !rg.test(e) || r != null && e in ft(r);
          }
        }
        function sv(e) {
          var r = typeof e;
          if (r == "string" || r == "number" || r == "symbol" || r == "boolean") {
            return e !== "__proto__";
          } else {
            return e === null;
          }
        }
        function ra(e) {
          var r = ji(e);
          var u = h[r];
          if (typeof u != "function" || !(r in et.prototype)) {
            return false;
          }
          if (e === u) {
            return true;
          }
          var a = Js(u);
          return !!a && e === a[0];
        }
        function av(e) {
          return !!xc && xc in e;
        }
        var ov = Ci ? We : ba;
        function kn(e) {
          var r = e && e.constructor;
          var u = typeof r == "function" && r.prototype || zr;
          return e === u;
        }
        function Cf(e) {
          return e === e && !At(e);
        }
        function Sf(e, r) {
          return function (u) {
            if (u == null) {
              return false;
            } else {
              return u[e] === r && (r !== t || e in ft(u));
            }
          };
        }
        function cv(e) {
          var r = ru(e, function (a) {
            if (u.size === d) {
              u.clear();
            }
            return a;
          });
          var u = r.cache;
          return r;
        }
        function fv(e, r) {
          var u = e[1];
          var a = r[1];
          var f = u | a;
          var p = f < (B | P | N);
          var _ = a == N && u == nt || a == N && u == W && e[7].length <= r[8] || a == (N | W) && r[7].length <= r[8] && u == nt;
          if (!p && !_) {
            return e;
          }
          if (a & B) {
            e[2] = r[2];
            f |= u & B ? 0 : Y;
          }
          var m = r[3];
          if (m) {
            var y = e[3];
            e[3] = y ? cf(y, m, r[4]) : m;
            e[4] = y ? tr(e[3], v) : r[4];
          }
          m = r[5];
          if (m) {
            y = e[5];
            e[5] = y ? ff(y, m, r[6]) : m;
            e[6] = y ? tr(e[5], v) : r[6];
          }
          m = r[7];
          if (m) {
            e[7] = m;
          }
          if (a & N) {
            e[8] = e[8] == null ? r[8] : Ot(e[8], r[8]);
          }
          if (e[9] == null) {
            e[9] = r[9];
          }
          e[0] = r[0];
          e[1] = f;
          return e;
        }
        function lv(e) {
          var r = [];
          if (e != null) {
            for (var u in ft(e)) {
              r.push(u);
            }
          }
          return r;
        }
        function hv(e) {
          return Ti.call(e);
        }
        function Tf(e, r, u) {
          r = xt(r === t ? e.length - 1 : r, 0);
          return function () {
            var a = arguments;
            for (var f = -1, p = xt(a.length - r, 0), _ = D(p); ++f < p;) {
              _[f] = a[r + f];
            }
            f = -1;
            var m = D(r + 1);
            for (; ++f < r;) {
              m[f] = a[f];
            }
            m[r] = u(_);
            return ee(e, this, m);
          };
        }
        function qf(e, r) {
          if (r.length < 2) {
            return e;
          } else {
            return Ar(e, pe(r, 0, -1));
          }
        }
        function pv(e, r) {
          var u = e.length;
          for (var a = Ot(r.length, u), f = Gt(e); a--;) {
            var p = r[a];
            e[a] = Ge(p, u) ? f[p] : t;
          }
          return e;
        }
        function na(e, r) {
          if ((r !== "constructor" || typeof e[r] != "function") && r != "__proto__") {
            return e[r];
          }
        }
        var Lf = Ff(Jc);
        var Mn = T0 || function (e, r) {
          return St.setTimeout(e, r);
        };
        var ia = Ff(N_);
        function Bf(e, r, u) {
          var a = r + "";
          return ia(e, iv(a, dv(ev(a), u)));
        }
        function Ff(e) {
          var r = 0;
          var u = 0;
          return function () {
            var a = F0();
            var f = qt - (a - u);
            u = a;
            if (f > 0) {
              if (++r >= Qt) {
                return arguments[0];
              }
            } else {
              r = 0;
            }
            return e.apply(t, arguments);
          };
        }
        function Ji(e, r) {
          var u = -1;
          var a = e.length;
          var f = a - 1;
          for (r = r === t ? a : r; ++u < r;) {
            var p = Us(u, f);
            var _ = e[p];
            e[p] = e[u];
            e[u] = _;
          }
          e.length = r;
          return e;
        }
        var Rf = cv(function (e) {
          var r = [];
          if (e.charCodeAt(0) === 46) {
            r.push("");
          }
          e.replace(ig, function (u, a, f, p) {
            r.push(f ? p.replace(lg, "$1") : a || u);
          });
          return r;
        });
        function De(e) {
          if (typeof e == "string" || ue(e)) {
            return e;
          }
          var r = e + "";
          if (r == "0" && 1 / e == -te) {
            return "-0";
          } else {
            return r;
          }
        }
        function yr(e) {
          if (e != null) {
            try {
              return Si.call(e);
            } catch (r) {}
            try {
              return e + "";
            } catch (r) {}
          }
          return "";
        }
        function dv(e, r) {
          re(G2, function (u) {
            var a = "_." + u[0];
            if (r & u[1] && !Di(e, a)) {
              e.push(a);
            }
          });
          return e.sort();
        }
        function Of(e) {
          if (e instanceof et) {
            return e.clone();
          }
          var r = new le(e.__wrapped__, e.__chain__);
          r.__actions__ = Gt(e.__actions__);
          r.__index__ = e.__index__;
          r.__values__ = e.__values__;
          return r;
        }
        function gv(e, r, u) {
          if (u ? Ut(e, r, u) : r === t) {
            r = 1;
          } else {
            r = xt(X(r), 0);
          }
          var a = e == null ? 0 : e.length;
          if (!a || r < 1) {
            return [];
          }
          for (var f = 0, p = 0, _ = D(Oi(a / r)); f < a;) {
            _[p++] = pe(e, f, f += r);
          }
          return _;
        }
        function _v(e) {
          for (var r = -1, u = e == null ? 0 : e.length, a = 0, f = []; ++r < u;) {
            var p = e[r];
            if (p) {
              f[a++] = p;
            }
          }
          return f;
        }
        function vv() {
          var e = arguments.length;
          if (!e) {
            return [];
          }
          var r = D(e - 1);
          var u = arguments[0];
          for (var a = e; a--;) {
            r[a - 1] = arguments[a];
          }
          return Qe(z(u) ? Gt(u) : [u], Lt(r, 1));
        }
        var mv = Z(function (e, r) {
          if (Dt(e)) {
            return Fn(e, Lt(r, 1, Dt, true));
          } else {
            return [];
          }
        });
        var Av = Z(function (e, r) {
          var u = de(r);
          if (Dt(u)) {
            u = t;
          }
          if (Dt(e)) {
            return Fn(e, Lt(r, 1, Dt, true), H(u, 2));
          } else {
            return [];
          }
        });
        var bv = Z(function (e, r) {
          var u = de(r);
          if (Dt(u)) {
            u = t;
          }
          if (Dt(e)) {
            return Fn(e, Lt(r, 1, Dt, true), t, u);
          } else {
            return [];
          }
        });
        function yv(e, r, u) {
          var a = e == null ? 0 : e.length;
          if (a) {
            r = u || r === t ? 1 : X(r);
            return pe(e, r < 0 ? 0 : r, a);
          } else {
            return [];
          }
        }
        function Dv(e, r, u) {
          var a = e == null ? 0 : e.length;
          if (a) {
            r = u || r === t ? 1 : X(r);
            r = a - r;
            return pe(e, 0, r < 0 ? 0 : r);
          } else {
            return [];
          }
        }
        function wv(e, r) {
          if (e && e.length) {
            return $i(e, H(r, 3), true, true);
          } else {
            return [];
          }
        }
        function Ev(e, r) {
          if (e && e.length) {
            return $i(e, H(r, 3), true);
          } else {
            return [];
          }
        }
        function xv(e, r, u, a) {
          var f = e == null ? 0 : e.length;
          if (f) {
            if (u && typeof u != "number" && Ut(e, r, u)) {
              u = 0;
              a = f;
            }
            return v_(e, r, u, a);
          } else {
            return [];
          }
        }
        function If(e, r, u) {
          var a = e == null ? 0 : e.length;
          if (!a) {
            return -1;
          }
          var f = u == null ? 0 : X(u);
          if (f < 0) {
            f = xt(a + f, 0);
          }
          return wi(e, H(r, 3), f);
        }
        function Nf(e, r, u) {
          var a = e == null ? 0 : e.length;
          if (!a) {
            return -1;
          }
          var f = a - 1;
          if (u !== t) {
            f = X(u);
            f = u < 0 ? xt(a + f, 0) : Ot(f, a - 1);
          }
          return wi(e, H(r, 3), f, true);
        }
        function kf(e) {
          var r = e == null ? 0 : e.length;
          if (r) {
            return Lt(e, 1);
          } else {
            return [];
          }
        }
        function Cv(e) {
          var r = e == null ? 0 : e.length;
          if (r) {
            return Lt(e, te);
          } else {
            return [];
          }
        }
        function Sv(e, r) {
          var u = e == null ? 0 : e.length;
          if (u) {
            r = r === t ? 1 : X(r);
            return Lt(e, r);
          } else {
            return [];
          }
        }
        function Tv(e) {
          for (var r = -1, u = e == null ? 0 : e.length, a = {}; ++r < u;) {
            var f = e[r];
            Le(a, f[0], f[1]);
          }
          return a;
        }
        function Mf(e) {
          if (e && e.length) {
            return e[0];
          } else {
            return t;
          }
        }
        function qv(e, r, u) {
          var a = e == null ? 0 : e.length;
          if (!a) {
            return -1;
          }
          var f = u == null ? 0 : X(u);
          if (f < 0) {
            f = xt(a + f, 0);
          }
          return Wr(e, r, f);
        }
        function Lv(e) {
          var r = e == null ? 0 : e.length;
          if (r) {
            return pe(e, 0, -1);
          } else {
            return [];
          }
        }
        var Bv = Z(function (e) {
          var r = mt(e, Vs);
          if (r.length && r[0] === e[0]) {
            return Is(r);
          } else {
            return [];
          }
        });
        var Fv = Z(function (e) {
          var r = de(e);
          var u = mt(e, Vs);
          if (r === de(u)) {
            r = t;
          } else {
            u.pop();
          }
          if (u.length && u[0] === e[0]) {
            return Is(u, H(r, 2));
          } else {
            return [];
          }
        });
        var Rv = Z(function (e) {
          var r = de(e);
          var u = mt(e, Vs);
          r = typeof r == "function" ? r : t;
          if (r) {
            u.pop();
          }
          if (u.length && u[0] === e[0]) {
            return Is(u, t, r);
          } else {
            return [];
          }
        });
        function Ov(e, r) {
          if (e == null) {
            return "";
          } else {
            return L0.call(e, r);
          }
        }
        function de(e) {
          var r = e == null ? 0 : e.length;
          if (r) {
            return e[r - 1];
          } else {
            return t;
          }
        }
        function Iv(e, r, u) {
          var a = e == null ? 0 : e.length;
          if (!a) {
            return -1;
          }
          var f = a;
          if (u !== t) {
            f = X(u);
            f = f < 0 ? xt(a + f, 0) : Ot(f, a - 1);
          }
          if (r === r) {
            return d0(e, r, f);
          } else {
            return wi(e, vc, f, true);
          }
        }
        function Nv(e, r) {
          if (e && e.length) {
            return Yc(e, X(r));
          } else {
            return t;
          }
        }
        var kv = Z(Pf);
        function Pf(e, r) {
          if (e && e.length && r && r.length) {
            return Ps(e, r);
          } else {
            return e;
          }
        }
        function Mv(e, r, u) {
          if (e && e.length && r && r.length) {
            return Ps(e, r, H(u, 2));
          } else {
            return e;
          }
        }
        function Pv(e, r, u) {
          if (e && e.length && r && r.length) {
            return Ps(e, r, t, u);
          } else {
            return e;
          }
        }
        var Uv = He(function (e, r) {
          var u = e == null ? 0 : e.length;
          var a = Bs(e, r);
          Zc(e, mt(r, function (f) {
            if (Ge(f, u)) {
              return +f;
            } else {
              return f;
            }
          }).sort(of));
          return a;
        });
        function Hv(e, r) {
          var u = [];
          if (!e || !e.length) {
            return u;
          }
          var a = -1;
          var f = [];
          var p = e.length;
          for (r = H(r, 3); ++a < p;) {
            var _ = e[a];
            if (r(_, a, e)) {
              u.push(_);
              f.push(a);
            }
          }
          Zc(e, f);
          return u;
        }
        function ua(e) {
          if (e == null) {
            return e;
          } else {
            return O0.call(e);
          }
        }
        function Gv(e, r, u) {
          var a = e == null ? 0 : e.length;
          if (a) {
            if (u && typeof u != "number" && Ut(e, r, u)) {
              r = 0;
              u = a;
            } else {
              r = r == null ? 0 : X(r);
              u = u === t ? a : X(u);
            }
            return pe(e, r, u);
          } else {
            return [];
          }
        }
        function Wv(e, r) {
          return Wi(e, r);
        }
        function $v(e, r, u) {
          return Gs(e, r, H(u, 2));
        }
        function Vv(e, r) {
          var u = e == null ? 0 : e.length;
          if (u) {
            var a = Wi(e, r);
            if (a < u && we(e[a], r)) {
              return a;
            }
          }
          return -1;
        }
        function zv(e, r) {
          return Wi(e, r, true);
        }
        function Xv(e, r, u) {
          return Gs(e, r, H(u, 2), true);
        }
        function Yv(e, r) {
          var u = e == null ? 0 : e.length;
          if (u) {
            var a = Wi(e, r, true) - 1;
            if (we(e[a], r)) {
              return a;
            }
          }
          return -1;
        }
        function Kv(e) {
          if (e && e.length) {
            return Qc(e);
          } else {
            return [];
          }
        }
        function jv(e, r) {
          if (e && e.length) {
            return Qc(e, H(r, 2));
          } else {
            return [];
          }
        }
        function Zv(e) {
          var r = e == null ? 0 : e.length;
          if (r) {
            return pe(e, 1, r);
          } else {
            return [];
          }
        }
        function Jv(e, r, u) {
          if (e && e.length) {
            r = u || r === t ? 1 : X(r);
            return pe(e, 0, r < 0 ? 0 : r);
          } else {
            return [];
          }
        }
        function Qv(e, r, u) {
          var a = e == null ? 0 : e.length;
          if (a) {
            r = u || r === t ? 1 : X(r);
            r = a - r;
            return pe(e, r < 0 ? 0 : r, a);
          } else {
            return [];
          }
        }
        function t1(e, r) {
          if (e && e.length) {
            return $i(e, H(r, 3), false, true);
          } else {
            return [];
          }
        }
        function e1(e, r) {
          if (e && e.length) {
            return $i(e, H(r, 3));
          } else {
            return [];
          }
        }
        var r1 = Z(function (e) {
          return ir(Lt(e, 1, Dt, true));
        });
        var n1 = Z(function (e) {
          var r = de(e);
          if (Dt(r)) {
            r = t;
          }
          return ir(Lt(e, 1, Dt, true), H(r, 2));
        });
        var i1 = Z(function (e) {
          var r = de(e);
          r = typeof r == "function" ? r : t;
          return ir(Lt(e, 1, Dt, true), t, r);
        });
        function u1(e) {
          if (e && e.length) {
            return ir(e);
          } else {
            return [];
          }
        }
        function s1(e, r) {
          if (e && e.length) {
            return ir(e, H(r, 2));
          } else {
            return [];
          }
        }
        function a1(e, r) {
          r = typeof r == "function" ? r : t;
          if (e && e.length) {
            return ir(e, t, r);
          } else {
            return [];
          }
        }
        function sa(e) {
          if (!e || !e.length) {
            return [];
          }
          var r = 0;
          e = Je(e, function (u) {
            if (Dt(u)) {
              r = xt(u.length, r);
              return true;
            }
          });
          return ws(r, function (u) {
            return mt(e, bs(u));
          });
        }
        function Uf(e, r) {
          if (!e || !e.length) {
            return [];
          }
          var u = sa(e);
          if (r == null) {
            return u;
          } else {
            return mt(u, function (a) {
              return ee(r, t, a);
            });
          }
        }
        var o1 = Z(function (e, r) {
          if (Dt(e)) {
            return Fn(e, r);
          } else {
            return [];
          }
        });
        var c1 = Z(function (e) {
          return $s(Je(e, Dt));
        });
        var f1 = Z(function (e) {
          var r = de(e);
          if (Dt(r)) {
            r = t;
          }
          return $s(Je(e, Dt), H(r, 2));
        });
        var l1 = Z(function (e) {
          var r = de(e);
          r = typeof r == "function" ? r : t;
          return $s(Je(e, Dt), t, r);
        });
        var h1 = Z(sa);
        function p1(e, r) {
          return nf(e || [], r || [], Bn);
        }
        function d1(e, r) {
          return nf(e || [], r || [], In);
        }
        var g1 = Z(function (e) {
          var r = e.length;
          var u = r > 1 ? e[r - 1] : t;
          u = typeof u == "function" ? (e.pop(), u) : t;
          return Uf(e, u);
        });
        function Hf(e) {
          var r = h(e);
          r.__chain__ = true;
          return r;
        }
        function _1(e, r) {
          r(e);
          return e;
        }
        function Qi(e, r) {
          return r(e);
        }
        var v1 = He(function (e) {
          var r = e.length;
          var u = r ? e[0] : 0;
          var a = this.__wrapped__;
          function f(p) {
            return Bs(p, e);
          }
          if (r > 1 || this.__actions__.length || !(a instanceof et) || !Ge(u)) {
            return this.thru(f);
          } else {
            a = a.slice(u, +u + (r ? 1 : 0));
            a.__actions__.push({
              func: Qi,
              args: [f],
              thisArg: t
            });
            return new le(a, this.__chain__).thru(function (p) {
              if (r && !p.length) {
                p.push(t);
              }
              return p;
            });
          }
        });
        function m1() {
          return Hf(this);
        }
        function A1() {
          return new le(this.value(), this.__chain__);
        }
        function b1() {
          if (this.__values__ === t) {
            this.__values__ = el(this.value());
          }
          var e = this.__index__ >= this.__values__.length;
          var r = e ? t : this.__values__[this.__index__++];
          return {
            done: e,
            value: r
          };
        }
        function y1() {
          return this;
        }
        function D1(e) {
          var r;
          for (var u = this; u instanceof Mi;) {
            var a = Of(u);
            a.__index__ = 0;
            a.__values__ = t;
            if (r) {
              f.__wrapped__ = a;
            } else {
              r = a;
            }
            var f = a;
            u = u.__wrapped__;
          }
          f.__wrapped__ = e;
          return r;
        }
        function w1() {
          var e = this.__wrapped__;
          if (e instanceof et) {
            var r = e;
            if (this.__actions__.length) {
              r = new et(this);
            }
            r = r.reverse();
            r.__actions__.push({
              func: Qi,
              args: [ua],
              thisArg: t
            });
            return new le(r, this.__chain__);
          }
          return this.thru(ua);
        }
        function E1() {
          return rf(this.__wrapped__, this.__actions__);
        }
        var x1 = Vi(function (e, r, u) {
          if (st.call(e, u)) {
            ++e[u];
          } else {
            Le(e, u, 1);
          }
        });
        function C1(e, r, u) {
          var a = z(e) ? gc : __;
          if (u && Ut(e, r, u)) {
            r = t;
          }
          return a(e, H(r, 3));
        }
        function S1(e, r) {
          var u = z(e) ? Je : Pc;
          return u(e, H(r, 3));
        }
        var T1 = df(If);
        var q1 = df(Nf);
        function L1(e, r) {
          return Lt(tu(e, r), 1);
        }
        function B1(e, r) {
          return Lt(tu(e, r), te);
        }
        function F1(e, r, u) {
          u = u === t ? 1 : X(u);
          return Lt(tu(e, r), u);
        }
        function Gf(e, r) {
          var u = z(e) ? re : nr;
          return u(e, H(r, 3));
        }
        function Wf(e, r) {
          var u = z(e) ? Zg : Mc;
          return u(e, H(r, 3));
        }
        var R1 = Vi(function (e, r, u) {
          if (st.call(e, u)) {
            e[u].push(r);
          } else {
            Le(e, u, [r]);
          }
        });
        function O1(e, r, u, a) {
          e = Wt(e) ? e : tn(e);
          u = u && !a ? X(u) : 0;
          var f = e.length;
          if (u < 0) {
            u = xt(f + u, 0);
          }
          if (uu(e)) {
            return u <= f && e.indexOf(r, u) > -1;
          } else {
            return !!f && Wr(e, r, u) > -1;
          }
        }
        var I1 = Z(function (e, r, u) {
          var a = -1;
          var f = typeof r == "function";
          var p = Wt(e) ? D(e.length) : [];
          nr(e, function (_) {
            p[++a] = f ? ee(r, _, u) : Rn(_, r, u);
          });
          return p;
        });
        var N1 = Vi(function (e, r, u) {
          Le(e, u, r);
        });
        function tu(e, r) {
          var u = z(e) ? mt : Vc;
          return u(e, H(r, 3));
        }
        function k1(e, r, u, a) {
          if (e == null) {
            return [];
          } else {
            if (!z(r)) {
              r = r == null ? [] : [r];
            }
            u = a ? t : u;
            if (!z(u)) {
              u = u == null ? [] : [u];
            }
            return Kc(e, r, u);
          }
        }
        var M1 = Vi(function (e, r, u) {
          e[u ? 0 : 1].push(r);
        }, function () {
          return [[], []];
        });
        function P1(e, r, u) {
          var a = z(e) ? ms : Ac;
          var f = arguments.length < 3;
          return a(e, H(r, 4), u, f, nr);
        }
        function U1(e, r, u) {
          var a = z(e) ? Jg : Ac;
          var f = arguments.length < 3;
          return a(e, H(r, 4), u, f, Mc);
        }
        function H1(e, r) {
          var u = z(e) ? Je : Pc;
          return u(e, nu(H(r, 3)));
        }
        function G1(e) {
          var r = z(e) ? Oc : O_;
          return r(e);
        }
        function W1(e, r, u) {
          if (u ? Ut(e, r, u) : r === t) {
            r = 1;
          } else {
            r = X(r);
          }
          var a = z(e) ? l_ : I_;
          return a(e, r);
        }
        function $1(e) {
          var r = z(e) ? h_ : k_;
          return r(e);
        }
        function V1(e) {
          if (e == null) {
            return 0;
          }
          if (Wt(e)) {
            if (uu(e)) {
              return Vr(e);
            } else {
              return e.length;
            }
          }
          var r = It(e);
          if (r == me || r == Ae) {
            return e.size;
          } else {
            return ks(e).length;
          }
        }
        function z1(e, r, u) {
          var a = z(e) ? As : M_;
          if (u && Ut(e, r, u)) {
            r = t;
          }
          return a(e, H(r, 3));
        }
        var X1 = Z(function (e, r) {
          if (e == null) {
            return [];
          }
          var u = r.length;
          if (u > 1 && Ut(e, r[0], r[1])) {
            r = [];
          } else if (u > 2 && Ut(r[0], r[1], r[2])) {
            r = [r[0]];
          }
          return Kc(e, Lt(r, 1), []);
        });
        var eu = S0 || function () {
          return St.Date.now();
        };
        function Y1(e, r) {
          if (typeof r != "function") {
            throw new fe(o);
          }
          e = X(e);
          return function () {
            if (--e < 1) {
              return r.apply(this, arguments);
            }
          };
        }
        function $f(e, r, u) {
          r = u ? t : r;
          r = e && r == null ? e.length : r;
          return Ue(e, N, t, t, t, t, r);
        }
        function Vf(e, r) {
          var u;
          if (typeof r != "function") {
            throw new fe(o);
          }
          e = X(e);
          return function () {
            if (--e > 0) {
              u = r.apply(this, arguments);
            }
            if (e <= 1) {
              r = t;
            }
            return u;
          };
        }
        var aa = Z(function (e, r, u) {
          var a = B;
          if (u.length) {
            var f = tr(u, Jr(aa));
            a |= it;
          }
          return Ue(e, a, r, u, f);
        });
        var zf = Z(function (e, r, u) {
          var a = B | P;
          if (u.length) {
            var f = tr(u, Jr(zf));
            a |= it;
          }
          return Ue(r, a, e, u, f);
        });
        function Xf(e, r, u) {
          r = u ? t : r;
          var a = Ue(e, nt, t, t, t, t, t, r);
          a.placeholder = Xf.placeholder;
          return a;
        }
        function Yf(e, r, u) {
          r = u ? t : r;
          var a = Ue(e, ht, t, t, t, t, t, r);
          a.placeholder = Yf.placeholder;
          return a;
        }
        function Kf(e, r, u) {
          var a;
          var f;
          var p;
          var _;
          var m;
          var y;
          var x = 0;
          var C = false;
          var q = false;
          var F = true;
          if (typeof e != "function") {
            throw new fe(o);
          }
          r = ge(r) || 0;
          if (At(u)) {
            C = !!u.leading;
            q = "maxWait" in u;
            p = q ? xt(ge(u.maxWait) || 0, r) : p;
            F = "trailing" in u ? !!u.trailing : F;
          }
          function k(wt) {
            var Ee = a;
            var Ve = f;
            a = f = t;
            x = wt;
            _ = e.apply(Ve, Ee);
            return _;
          }
          function G(wt) {
            x = wt;
            m = Mn(tt, r);
            if (C) {
              return k(wt);
            } else {
              return _;
            }
          }
          function K(wt) {
            var Ee = wt - y;
            var Ve = wt - x;
            var gl = r - Ee;
            if (q) {
              return Ot(gl, p - Ve);
            } else {
              return gl;
            }
          }
          function U(wt) {
            var Ee = wt - y;
            var Ve = wt - x;
            return y === t || Ee >= r || Ee < 0 || q && Ve >= p;
          }
          function tt() {
            var wt = eu();
            if (U(wt)) {
              return rt(wt);
            }
            m = Mn(tt, K(wt));
          }
          function rt(wt) {
            m = t;
            if (F && a) {
              return k(wt);
            } else {
              a = f = t;
              return _;
            }
          }
          function se() {
            if (m !== t) {
              uf(m);
            }
            x = 0;
            a = y = f = m = t;
          }
          function Ht() {
            if (m === t) {
              return _;
            } else {
              return rt(eu());
            }
          }
          function ae() {
            var wt = eu();
            var Ee = U(wt);
            a = arguments;
            f = this;
            y = wt;
            if (Ee) {
              if (m === t) {
                return G(y);
              }
              if (q) {
                uf(m);
                m = Mn(tt, r);
                return k(y);
              }
            }
            if (m === t) {
              m = Mn(tt, r);
            }
            return _;
          }
          ae.cancel = se;
          ae.flush = Ht;
          return ae;
        }
        var K1 = Z(function (e, r) {
          return kc(e, 1, r);
        });
        var j1 = Z(function (e, r, u) {
          return kc(e, ge(r) || 0, u);
        });
        function Z1(e) {
          return Ue(e, pt);
        }
        function ru(e, r) {
          if (typeof e != "function" || r != null && typeof r != "function") {
            throw new fe(o);
          }
          function u() {
            var a = arguments;
            var f = r ? r.apply(this, a) : a[0];
            var p = u.cache;
            if (p.has(f)) {
              return p.get(f);
            }
            var _ = e.apply(this, a);
            u.cache = p.set(f, _) || p;
            return _;
          }
          u.cache = new (ru.Cache || Pe)();
          return u;
        }
        ru.Cache = Pe;
        function nu(e) {
          if (typeof e != "function") {
            throw new fe(o);
          }
          return function () {
            var r = arguments;
            switch (r.length) {
              case 0:
                return !e.call(this);
              case 1:
                return !e.call(this, r[0]);
              case 2:
                return !e.call(this, r[0], r[1]);
              case 3:
                return !e.call(this, r[0], r[1], r[2]);
            }
            return !e.apply(this, r);
          };
        }
        function J1(e) {
          return Vf(2, e);
        }
        var Q1 = P_(function (e, r) {
          r = r.length == 1 && z(r[0]) ? mt(r[0], ne(H())) : mt(Lt(r, 1), ne(H()));
          var u = r.length;
          return Z(function (a) {
            for (var f = -1, p = Ot(a.length, u); ++f < p;) {
              a[f] = r[f].call(this, a[f]);
            }
            return ee(e, this, a);
          });
        });
        var oa = Z(function (e, r) {
          var u = tr(r, Jr(oa));
          return Ue(e, it, t, r, u);
        });
        var jf = Z(function (e, r) {
          var u = tr(r, Jr(jf));
          return Ue(e, $, t, r, u);
        });
        var tm = He(function (e, r) {
          return Ue(e, W, t, t, t, r);
        });
        function em(e, r) {
          if (typeof e != "function") {
            throw new fe(o);
          }
          r = r === t ? r : X(r);
          return Z(e, r);
        }
        function rm(e, r) {
          if (typeof e != "function") {
            throw new fe(o);
          }
          r = r == null ? 0 : xt(X(r), 0);
          return Z(function (u) {
            var a = u[r];
            var f = sr(u, 0, r);
            if (a) {
              Qe(f, a);
            }
            return ee(e, this, f);
          });
        }
        function nm(e, r, u) {
          var a = true;
          var f = true;
          if (typeof e != "function") {
            throw new fe(o);
          }
          if (At(u)) {
            a = "leading" in u ? !!u.leading : a;
            f = "trailing" in u ? !!u.trailing : f;
          }
          return Kf(e, r, {
            leading: a,
            maxWait: r,
            trailing: f
          });
        }
        function im(e) {
          return $f(e, 1);
        }
        function um(e, r) {
          return oa(zs(r), e);
        }
        function sm() {
          if (!arguments.length) {
            return [];
          }
          var e = arguments[0];
          if (z(e)) {
            return e;
          } else {
            return [e];
          }
        }
        function am(e) {
          return he(e, T);
        }
        function om(e, r) {
          r = typeof r == "function" ? r : t;
          return he(e, T, r);
        }
        function cm(e) {
          return he(e, A | T);
        }
        function fm(e, r) {
          r = typeof r == "function" ? r : t;
          return he(e, A | T, r);
        }
        function lm(e, r) {
          return r == null || Nc(e, r, Tt(r));
        }
        function we(e, r) {
          return e === r || e !== e && r !== r;
        }
        var hm = Ki(Os);
        var pm = Ki(function (e, r) {
          return e >= r;
        });
        var Dr = Gc(function () {
          return arguments;
        }()) ? Gc : function (e) {
          return bt(e) && st.call(e, "callee") && !Tc.call(e, "callee");
        };
        var z = D.isArray;
        var dm = cc ? ne(cc) : D_;
        function Wt(e) {
          return e != null && iu(e.length) && !We(e);
        }
        function Dt(e) {
          return bt(e) && Wt(e);
        }
        function gm(e) {
          return e === true || e === false || bt(e) && Pt(e) == mn;
        }
        var ar = q0 || ba;
        var _m = fc ? ne(fc) : w_;
        function vm(e) {
          return bt(e) && e.nodeType === 1 && !Pn(e);
        }
        function mm(e) {
          if (e == null) {
            return true;
          }
          if (Wt(e) && (z(e) || typeof e == "string" || typeof e.splice == "function" || ar(e) || Qr(e) || Dr(e))) {
            return !e.length;
          }
          var r = It(e);
          if (r == me || r == Ae) {
            return !e.size;
          }
          if (kn(e)) {
            return !ks(e).length;
          }
          for (var u in e) {
            if (st.call(e, u)) {
              return false;
            }
          }
          return true;
        }
        function Am(e, r) {
          return On(e, r);
        }
        function bm(e, r, u) {
          u = typeof u == "function" ? u : t;
          var a = u ? u(e, r) : t;
          if (a === t) {
            return On(e, r, t, u);
          } else {
            return !!a;
          }
        }
        function ca(e) {
          if (!bt(e)) {
            return false;
          }
          var r = Pt(e);
          return r == _i || r == $2 || typeof e.message == "string" && typeof e.name == "string" && !Pn(e);
        }
        function ym(e) {
          return typeof e == "number" && Lc(e);
        }
        function We(e) {
          if (!At(e)) {
            return false;
          }
          var r = Pt(e);
          return r == vi || r == No || r == W2 || r == z2;
        }
        function Zf(e) {
          return typeof e == "number" && e == X(e);
        }
        function iu(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ze;
        }
        function At(e) {
          var r = typeof e;
          return e != null && (r == "object" || r == "function");
        }
        function bt(e) {
          return e != null && typeof e == "object";
        }
        var Jf = lc ? ne(lc) : x_;
        function Dm(e, r) {
          return e === r || Ns(e, r, Qs(r));
        }
        function wm(e, r, u) {
          u = typeof u == "function" ? u : t;
          return Ns(e, r, Qs(r), u);
        }
        function Em(e) {
          return Qf(e) && e != +e;
        }
        function xm(e) {
          if (ov(e)) {
            throw new V(s);
          }
          return Wc(e);
        }
        function Cm(e) {
          return e === null;
        }
        function Sm(e) {
          return e == null;
        }
        function Qf(e) {
          return typeof e == "number" || bt(e) && Pt(e) == bn;
        }
        function Pn(e) {
          if (!bt(e) || Pt(e) != ke) {
            return false;
          }
          var r = Bi(e);
          if (r === null) {
            return true;
          }
          var u = st.call(r, "constructor") && r.constructor;
          return typeof u == "function" && u instanceof u && Si.call(u) == w0;
        }
        var fa = hc ? ne(hc) : C_;
        function Tm(e) {
          return Zf(e) && e >= -Ze && e <= Ze;
        }
        var tl = pc ? ne(pc) : S_;
        function uu(e) {
          return typeof e == "string" || !z(e) && bt(e) && Pt(e) == Dn;
        }
        function ue(e) {
          return typeof e == "symbol" || bt(e) && Pt(e) == mi;
        }
        var Qr = dc ? ne(dc) : T_;
        function qm(e) {
          return e === t;
        }
        function Lm(e) {
          return bt(e) && It(e) == wn;
        }
        function Bm(e) {
          return bt(e) && Pt(e) == Y2;
        }
        var Fm = Ki(Ms);
        var Rm = Ki(function (e, r) {
          return e <= r;
        });
        function el(e) {
          if (!e) {
            return [];
          }
          if (Wt(e)) {
            if (uu(e)) {
              return be(e);
            } else {
              return Gt(e);
            }
          }
          if (Cn && e[Cn]) {
            return l0(e[Cn]());
          }
          var r = It(e);
          var u = r == me ? xs : r == Ae ? Ei : tn;
          return u(e);
        }
        function $e(e) {
          if (!e) {
            if (e === 0) {
              return e;
            } else {
              return 0;
            }
          }
          e = ge(e);
          if (e === te || e === -te) {
            var r = e < 0 ? -1 : 1;
            return r * P2;
          }
          if (e === e) {
            return e;
          } else {
            return 0;
          }
        }
        function X(e) {
          var r = $e(e);
          var u = r % 1;
          if (r === r) {
            if (u) {
              return r - u;
            } else {
              return r;
            }
          } else {
            return 0;
          }
        }
        function rl(e) {
          if (e) {
            return mr(X(e), 0, qe);
          } else {
            return 0;
          }
        }
        function ge(e) {
          if (typeof e == "number") {
            return e;
          }
          if (ue(e)) {
            return di;
          }
          if (At(e)) {
            var r = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = At(r) ? r + "" : r;
          }
          if (typeof e != "string") {
            if (e === 0) {
              return e;
            } else {
              return +e;
            }
          }
          e = bc(e);
          var u = dg.test(e);
          if (u || _g.test(e)) {
            return Yg(e.slice(2), u ? 2 : 8);
          } else if (pg.test(e)) {
            return di;
          } else {
            return +e;
          }
        }
        function nl(e) {
          return Fe(e, $t(e));
        }
        function Om(e) {
          if (e) {
            return mr(X(e), -Ze, Ze);
          } else if (e === 0) {
            return e;
          } else {
            return 0;
          }
        }
        function at(e) {
          if (e == null) {
            return "";
          } else {
            return ie(e);
          }
        }
        var Im = jr(function (e, r) {
          if (kn(r) || Wt(r)) {
            Fe(r, Tt(r), e);
            return;
          }
          for (var u in r) {
            if (st.call(r, u)) {
              Bn(e, u, r[u]);
            }
          }
        });
        var il = jr(function (e, r) {
          Fe(r, $t(r), e);
        });
        var ul = jr(function (e, r, u, a) {
          Fe(r, $t(r), e, a);
        });
        var la = jr(function (e, r, u, a) {
          Fe(r, Tt(r), e, a);
        });
        var Nm = He(Bs);
        function km(e, r) {
          var u = Kr(e);
          if (r == null) {
            return u;
          } else {
            return Ic(u, r);
          }
        }
        var Mm = Z(function (e, r) {
          e = ft(e);
          var u = -1;
          var a = r.length;
          var f = a > 2 ? r[2] : t;
          for (f && Ut(r[0], r[1], f) && (a = 1); ++u < a;) {
            var p = r[u];
            var _ = $t(p);
            for (var m = -1, y = _.length; ++m < y;) {
              var x = _[m];
              var C = e[x];
              if (C === t || we(C, zr[x]) && !st.call(e, x)) {
                e[x] = p[x];
              }
            }
          }
          return e;
        });
        var Pm = Z(function (e) {
          e.push(t, yf);
          return ee(sl, t, e);
        });
        function Um(e, r) {
          return _c(e, H(r, 3), Be);
        }
        function Hm(e, r) {
          return _c(e, H(r, 3), Rs);
        }
        function Gm(e, r) {
          if (e == null) {
            return e;
          } else {
            return Fs(e, H(r, 3), $t);
          }
        }
        function Wm(e, r) {
          if (e == null) {
            return e;
          } else {
            return Uc(e, H(r, 3), $t);
          }
        }
        function $m(e, r) {
          return e && Be(e, H(r, 3));
        }
        function Vm(e, r) {
          return e && Rs(e, H(r, 3));
        }
        function zm(e) {
          if (e == null) {
            return [];
          } else {
            return Hi(e, Tt(e));
          }
        }
        function Xm(e) {
          if (e == null) {
            return [];
          } else {
            return Hi(e, $t(e));
          }
        }
        function ha(e, r, u) {
          var a = e == null ? t : Ar(e, r);
          if (a === t) {
            return u;
          } else {
            return a;
          }
        }
        function Ym(e, r) {
          return e != null && Ef(e, r, m_);
        }
        function pa(e, r) {
          return e != null && Ef(e, r, A_);
        }
        var Km = _f(function (e, r, u) {
          if (r != null && typeof r.toString != "function") {
            r = Ti.call(r);
          }
          e[r] = u;
        }, ga(Vt));
        var jm = _f(function (e, r, u) {
          if (r != null && typeof r.toString != "function") {
            r = Ti.call(r);
          }
          if (st.call(e, r)) {
            e[r].push(u);
          } else {
            e[r] = [u];
          }
        }, H);
        var Zm = Z(Rn);
        function Tt(e) {
          if (Wt(e)) {
            return Rc(e);
          } else {
            return ks(e);
          }
        }
        function $t(e) {
          if (Wt(e)) {
            return Rc(e, true);
          } else {
            return q_(e);
          }
        }
        function Jm(e, r) {
          var u = {};
          r = H(r, 3);
          Be(e, function (a, f, p) {
            Le(u, r(a, f, p), a);
          });
          return u;
        }
        function Qm(e, r) {
          var u = {};
          r = H(r, 3);
          Be(e, function (a, f, p) {
            Le(u, f, r(a, f, p));
          });
          return u;
        }
        var tA = jr(function (e, r, u) {
          Gi(e, r, u);
        });
        var sl = jr(function (e, r, u, a) {
          Gi(e, r, u, a);
        });
        var eA = He(function (e, r) {
          var u = {};
          if (e == null) {
            return u;
          }
          var a = false;
          r = mt(r, function (p) {
            p = ur(p, e);
            a ||= p.length > 1;
            return p;
          });
          Fe(e, Zs(e), u);
          if (a) {
            u = he(u, A | w | T, j_);
          }
          for (var f = r.length; f--;) {
            Ws(u, r[f]);
          }
          return u;
        });
        function rA(e, r) {
          return al(e, nu(H(r)));
        }
        var nA = He(function (e, r) {
          if (e == null) {
            return {};
          } else {
            return B_(e, r);
          }
        });
        function al(e, r) {
          if (e == null) {
            return {};
          }
          var u = mt(Zs(e), function (a) {
            return [a];
          });
          r = H(r);
          return jc(e, u, function (a, f) {
            return r(a, f[0]);
          });
        }
        function iA(e, r, u) {
          r = ur(r, e);
          var a = -1;
          var f = r.length;
          for (f || (f = 1, e = t); ++a < f;) {
            var p = e == null ? t : e[De(r[a])];
            if (p === t) {
              a = f;
              p = u;
            }
            e = We(p) ? p.call(e) : p;
          }
          return e;
        }
        function uA(e, r, u) {
          if (e == null) {
            return e;
          } else {
            return In(e, r, u);
          }
        }
        function sA(e, r, u, a) {
          a = typeof a == "function" ? a : t;
          if (e == null) {
            return e;
          } else {
            return In(e, r, u, a);
          }
        }
        var ol = Af(Tt);
        var cl = Af($t);
        function aA(e, r, u) {
          var a = z(e);
          var f = a || ar(e) || Qr(e);
          r = H(r, 4);
          if (u == null) {
            var p = e && e.constructor;
            if (f) {
              u = a ? new p() : [];
            } else if (At(e)) {
              u = We(p) ? Kr(Bi(e)) : {};
            } else {
              u = {};
            }
          }
          (f ? re : Be)(e, function (_, m, y) {
            return r(u, _, m, y);
          });
          return u;
        }
        function oA(e, r) {
          if (e == null) {
            return true;
          } else {
            return Ws(e, r);
          }
        }
        function cA(e, r, u) {
          if (e == null) {
            return e;
          } else {
            return ef(e, r, zs(u));
          }
        }
        function fA(e, r, u, a) {
          a = typeof a == "function" ? a : t;
          if (e == null) {
            return e;
          } else {
            return ef(e, r, zs(u), a);
          }
        }
        function tn(e) {
          if (e == null) {
            return [];
          } else {
            return Es(e, Tt(e));
          }
        }
        function lA(e) {
          if (e == null) {
            return [];
          } else {
            return Es(e, $t(e));
          }
        }
        function hA(e, r, u) {
          if (u === t) {
            u = r;
            r = t;
          }
          if (u !== t) {
            u = ge(u);
            u = u === u ? u : 0;
          }
          if (r !== t) {
            r = ge(r);
            r = r === r ? r : 0;
          }
          return mr(ge(e), r, u);
        }
        function pA(e, r, u) {
          r = $e(r);
          if (u === t) {
            u = r;
            r = 0;
          } else {
            u = $e(u);
          }
          e = ge(e);
          return b_(e, r, u);
        }
        function dA(e, r, u) {
          if (u && typeof u != "boolean" && Ut(e, r, u)) {
            r = u = t;
          }
          if (u === t) {
            if (typeof r == "boolean") {
              u = r;
              r = t;
            } else if (typeof e == "boolean") {
              u = e;
              e = t;
            }
          }
          if (e === t && r === t) {
            e = 0;
            r = 1;
          } else {
            e = $e(e);
            if (r === t) {
              r = e;
              e = 0;
            } else {
              r = $e(r);
            }
          }
          if (e > r) {
            var a = e;
            e = r;
            r = a;
          }
          if (u || e % 1 || r % 1) {
            var f = Bc();
            return Ot(e + f * (r - e + Xg("1e-" + ((f + "").length - 1))), r);
          }
          return Us(e, r);
        }
        var gA = Zr(function (e, r, u) {
          r = r.toLowerCase();
          return e + (u ? fl(r) : r);
        });
        function fl(e) {
          return da(at(e).toLowerCase());
        }
        function ll(e) {
          e = at(e);
          return e && e.replace(mg, s0).replace(kg, "");
        }
        function _A(e, r, u) {
          e = at(e);
          r = ie(r);
          var a = e.length;
          u = u === t ? a : mr(X(u), 0, a);
          var f = u;
          u -= r.length;
          return u >= 0 && e.slice(u, f) == r;
        }
        function vA(e) {
          e = at(e);
          if (e && Q2.test(e)) {
            return e.replace(Po, a0);
          } else {
            return e;
          }
        }
        function mA(e) {
          e = at(e);
          if (e && ug.test(e)) {
            return e.replace(os, "\\$&");
          } else {
            return e;
          }
        }
        var AA = Zr(function (e, r, u) {
          return e + (u ? "-" : "") + r.toLowerCase();
        });
        var bA = Zr(function (e, r, u) {
          return e + (u ? " " : "") + r.toLowerCase();
        });
        var yA = pf("toLowerCase");
        function DA(e, r, u) {
          e = at(e);
          r = X(r);
          var a = r ? Vr(e) : 0;
          if (!r || a >= r) {
            return e;
          }
          var f = (r - a) / 2;
          return Yi(Ii(f), u) + e + Yi(Oi(f), u);
        }
        function wA(e, r, u) {
          e = at(e);
          r = X(r);
          var a = r ? Vr(e) : 0;
          if (r && a < r) {
            return e + Yi(r - a, u);
          } else {
            return e;
          }
        }
        function EA(e, r, u) {
          e = at(e);
          r = X(r);
          var a = r ? Vr(e) : 0;
          if (r && a < r) {
            return Yi(r - a, u) + e;
          } else {
            return e;
          }
        }
        function xA(e, r, u) {
          if (u || r == null) {
            r = 0;
          } else {
            r &&= +r;
          }
          return R0(at(e).replace(cs, ""), r || 0);
        }
        function CA(e, r, u) {
          if (u ? Ut(e, r, u) : r === t) {
            r = 1;
          } else {
            r = X(r);
          }
          return Hs(at(e), r);
        }
        function SA() {
          var e = arguments;
          var r = at(e[0]);
          if (e.length < 3) {
            return r;
          } else {
            return r.replace(e[1], e[2]);
          }
        }
        var TA = Zr(function (e, r, u) {
          return e + (u ? "_" : "") + r.toLowerCase();
        });
        function qA(e, r, u) {
          if (u && typeof u != "number" && Ut(e, r, u)) {
            r = u = t;
          }
          u = u === t ? qe : u >>> 0;
          if (u) {
            e = at(e);
            if (e && (typeof r == "string" || r != null && !fa(r)) && (r = ie(r), !r && $r(e))) {
              return sr(be(e), 0, u);
            } else {
              return e.split(r, u);
            }
          } else {
            return [];
          }
        }
        var LA = Zr(function (e, r, u) {
          return e + (u ? " " : "") + da(r);
        });
        function BA(e, r, u) {
          e = at(e);
          u = u == null ? 0 : mr(X(u), 0, e.length);
          r = ie(r);
          return e.slice(u, u + r.length) == r;
        }
        function FA(e, r, u) {
          var a = h.templateSettings;
          if (u && Ut(e, r, u)) {
            r = t;
          }
          e = at(e);
          r = la({}, r, a, bf);
          var f = la({}, r.imports, a.imports, bf);
          var p = Tt(f);
          var _ = Es(f, p);
          re(p, function (U) {
            if (Ho.test(U)) {
              throw new V(l);
            }
          });
          var m;
          var y;
          var x = 0;
          var C = r.interpolate || Ai;
          var q = "__p += '";
          var F = Cs((r.escape || Ai).source + "|" + C.source + "|" + (C === Uo ? hg : Ai).source + "|" + (r.evaluate || Ai).source + "|$", "g");
          var k = `${"//# sourceURL=" + (st.call(r, "sourceURL") ? (r.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Gg + "]")}
`;
          e.replace(F, function (U, tt, rt, se, Ht, ae) {
            rt ||= se;
            q += e.slice(x, ae).replace(Ag, o0);
            if (tt) {
              m = true;
              q += `' +
__e(${tt}) +
'`;
            }
            if (Ht) {
              y = true;
              q += `';
${Ht};
__p += '`;
            }
            if (rt) {
              q += `' +
((__t = (${rt})) == null ? '' : __t) +
'`;
            }
            x = ae + U.length;
            return U;
          });
          q += `';
`;
          var G = st.call(r, "variable") && r.variable;
          if (!G) {
            q = `with (obj) {
${q}
}
`;
          } else if (Ho.test(G)) {
            throw new V(c);
          }
          q = (y ? q.replace(K2, "") : q).replace(j2, "$1").replace(Z2, "$1;");
          q = `${"function(" + (G || "obj")}) {
${G ? "" : `obj || (obj = {});
`}var __t, __p = ''${m ? ", __e = _.escape" : ""}${y ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`}${q}return __p
}`;
          var K = pl(function () {
            return ut(p, k + "return " + q).apply(t, _);
          });
          K.source = q;
          if (ca(K)) {
            throw K;
          }
          return K;
        }
        function RA(e) {
          return at(e).toLowerCase();
        }
        function OA(e) {
          return at(e).toUpperCase();
        }
        function IA(e, r, u) {
          e = at(e);
          if (e && (u || r === t)) {
            return bc(e);
          }
          if (!e || !(r = ie(r))) {
            return e;
          }
          var a = be(e);
          var f = be(r);
          var p = yc(a, f);
          var _ = Dc(a, f) + 1;
          return sr(a, p, _).join("");
        }
        function NA(e, r, u) {
          e = at(e);
          if (e && (u || r === t)) {
            return e.slice(0, Ec(e) + 1);
          }
          if (!e || !(r = ie(r))) {
            return e;
          }
          var a = be(e);
          var f = Dc(a, be(r)) + 1;
          return sr(a, 0, f).join("");
        }
        function kA(e, r, u) {
          e = at(e);
          if (e && (u || r === t)) {
            return e.replace(cs, "");
          }
          if (!e || !(r = ie(r))) {
            return e;
          }
          var a = be(e);
          var f = yc(a, be(r));
          return sr(a, f).join("");
        }
        function MA(e, r) {
          var u = yt;
          var a = Rt;
          if (At(r)) {
            var f = "separator" in r ? r.separator : f;
            u = "length" in r ? X(r.length) : u;
            a = "omission" in r ? ie(r.omission) : a;
          }
          e = at(e);
          var p = e.length;
          if ($r(e)) {
            var _ = be(e);
            p = _.length;
          }
          if (u >= p) {
            return e;
          }
          var m = u - Vr(a);
          if (m < 1) {
            return a;
          }
          var y = _ ? sr(_, 0, m).join("") : e.slice(0, m);
          if (f === t) {
            return y + a;
          }
          if (_) {
            m += y.length - m;
          }
          if (fa(f)) {
            if (e.slice(m).search(f)) {
              var x;
              var C = y;
              if (!f.global) {
                f = Cs(f.source, at(Go.exec(f)) + "g");
              }
              f.lastIndex = 0;
              while (x = f.exec(C)) {
                var q = x.index;
              }
              y = y.slice(0, q === t ? m : q);
            }
          } else if (e.indexOf(ie(f), m) != m) {
            var F = y.lastIndexOf(f);
            if (F > -1) {
              y = y.slice(0, F);
            }
          }
          return y + a;
        }
        function PA(e) {
          e = at(e);
          if (e && J2.test(e)) {
            return e.replace(Mo, g0);
          } else {
            return e;
          }
        }
        var UA = Zr(function (e, r, u) {
          return e + (u ? " " : "") + r.toUpperCase();
        });
        var da = pf("toUpperCase");
        function hl(e, r, u) {
          e = at(e);
          r = u ? t : r;
          if (r === t) {
            if (f0(e)) {
              return m0(e);
            } else {
              return e0(e);
            }
          } else {
            return e.match(r) || [];
          }
        }
        var pl = Z(function (e, r) {
          try {
            return ee(e, t, r);
          } catch (u) {
            if (ca(u)) {
              return u;
            } else {
              return new V(u);
            }
          }
        });
        var HA = He(function (e, r) {
          re(r, function (u) {
            u = De(u);
            Le(e, u, aa(e[u], e));
          });
          return e;
        });
        function GA(e) {
          var r = e == null ? 0 : e.length;
          var u = H();
          e = r ? mt(e, function (a) {
            if (typeof a[1] != "function") {
              throw new fe(o);
            }
            return [u(a[0]), a[1]];
          }) : [];
          return Z(function (a) {
            for (var f = -1; ++f < r;) {
              var p = e[f];
              if (ee(p[0], this, a)) {
                return ee(p[1], this, a);
              }
            }
          });
        }
        function WA(e) {
          return g_(he(e, A));
        }
        function ga(e) {
          return function () {
            return e;
          };
        }
        function $A(e, r) {
          if (e == null || e !== e) {
            return r;
          } else {
            return e;
          }
        }
        var VA = gf();
        var zA = gf(true);
        function Vt(e) {
          return e;
        }
        function _a(e) {
          return $c(typeof e == "function" ? e : he(e, A));
        }
        function XA(e) {
          return zc(he(e, A));
        }
        function YA(e, r) {
          return Xc(e, he(r, A));
        }
        var KA = Z(function (e, r) {
          return function (u) {
            return Rn(u, e, r);
          };
        });
        var jA = Z(function (e, r) {
          return function (u) {
            return Rn(e, u, r);
          };
        });
        function va(e, r, u) {
          var a = Tt(r);
          var f = Hi(r, a);
          if (u == null && (!At(r) || !f.length && !!a.length)) {
            u = r;
            r = e;
            e = this;
            f = Hi(r, Tt(r));
          }
          var p = !At(u) || !("chain" in u) || !!u.chain;
          var _ = We(e);
          re(f, function (m) {
            var y = r[m];
            e[m] = y;
            if (_) {
              e.prototype[m] = function () {
                var x = this.__chain__;
                if (p || x) {
                  var C = e(this.__wrapped__);
                  var q = C.__actions__ = Gt(this.__actions__);
                  q.push({
                    func: y,
                    args: arguments,
                    thisArg: e
                  });
                  C.__chain__ = x;
                  return C;
                }
                return y.apply(e, Qe([this.value()], arguments));
              };
            }
          });
          return e;
        }
        function ZA() {
          if (St._ === this) {
            St._ = E0;
          }
          return this;
        }
        function ma() {}
        function JA(e) {
          e = X(e);
          return Z(function (r) {
            return Yc(r, e);
          });
        }
        var QA = Ys(mt);
        var tb = Ys(gc);
        var eb = Ys(As);
        function dl(e) {
          if (ea(e)) {
            return bs(De(e));
          } else {
            return F_(e);
          }
        }
        function rb(e) {
          return function (r) {
            if (e == null) {
              return t;
            } else {
              return Ar(e, r);
            }
          };
        }
        var nb = vf();
        var ib = vf(true);
        function Aa() {
          return [];
        }
        function ba() {
          return false;
        }
        function ub() {
          return {};
        }
        function sb() {
          return "";
        }
        function ab() {
          return true;
        }
        function ob(e, r) {
          e = X(e);
          if (e < 1 || e > Ze) {
            return [];
          }
          var u = qe;
          var a = Ot(e, qe);
          r = H(r);
          e -= qe;
          var f = ws(a, r);
          for (; ++u < e;) {
            r(u);
          }
          return f;
        }
        function cb(e) {
          if (z(e)) {
            return mt(e, De);
          } else if (ue(e)) {
            return [e];
          } else {
            return Gt(Rf(at(e)));
          }
        }
        function fb(e) {
          var r = ++D0;
          return at(e) + r;
        }
        var lb = Xi(function (e, r) {
          return e + r;
        }, 0);
        var hb = Ks("ceil");
        var pb = Xi(function (e, r) {
          return e / r;
        }, 1);
        var db = Ks("floor");
        function gb(e) {
          if (e && e.length) {
            return Ui(e, Vt, Os);
          } else {
            return t;
          }
        }
        function _b(e, r) {
          if (e && e.length) {
            return Ui(e, H(r, 2), Os);
          } else {
            return t;
          }
        }
        function vb(e) {
          return mc(e, Vt);
        }
        function mb(e, r) {
          return mc(e, H(r, 2));
        }
        function Ab(e) {
          if (e && e.length) {
            return Ui(e, Vt, Ms);
          } else {
            return t;
          }
        }
        function bb(e, r) {
          if (e && e.length) {
            return Ui(e, H(r, 2), Ms);
          } else {
            return t;
          }
        }
        var yb = Xi(function (e, r) {
          return e * r;
        }, 1);
        var Db = Ks("round");
        var wb = Xi(function (e, r) {
          return e - r;
        }, 0);
        function Eb(e) {
          if (e && e.length) {
            return Ds(e, Vt);
          } else {
            return 0;
          }
        }
        function xb(e, r) {
          if (e && e.length) {
            return Ds(e, H(r, 2));
          } else {
            return 0;
          }
        }
        h.after = Y1;
        h.ary = $f;
        h.assign = Im;
        h.assignIn = il;
        h.assignInWith = ul;
        h.assignWith = la;
        h.at = Nm;
        h.before = Vf;
        h.bind = aa;
        h.bindAll = HA;
        h.bindKey = zf;
        h.castArray = sm;
        h.chain = Hf;
        h.chunk = gv;
        h.compact = _v;
        h.concat = vv;
        h.cond = GA;
        h.conforms = WA;
        h.constant = ga;
        h.countBy = x1;
        h.create = km;
        h.curry = Xf;
        h.curryRight = Yf;
        h.debounce = Kf;
        h.defaults = Mm;
        h.defaultsDeep = Pm;
        h.defer = K1;
        h.delay = j1;
        h.difference = mv;
        h.differenceBy = Av;
        h.differenceWith = bv;
        h.drop = yv;
        h.dropRight = Dv;
        h.dropRightWhile = wv;
        h.dropWhile = Ev;
        h.fill = xv;
        h.filter = S1;
        h.flatMap = L1;
        h.flatMapDeep = B1;
        h.flatMapDepth = F1;
        h.flatten = kf;
        h.flattenDeep = Cv;
        h.flattenDepth = Sv;
        h.flip = Z1;
        h.flow = VA;
        h.flowRight = zA;
        h.fromPairs = Tv;
        h.functions = zm;
        h.functionsIn = Xm;
        h.groupBy = R1;
        h.initial = Lv;
        h.intersection = Bv;
        h.intersectionBy = Fv;
        h.intersectionWith = Rv;
        h.invert = Km;
        h.invertBy = jm;
        h.invokeMap = I1;
        h.iteratee = _a;
        h.keyBy = N1;
        h.keys = Tt;
        h.keysIn = $t;
        h.map = tu;
        h.mapKeys = Jm;
        h.mapValues = Qm;
        h.matches = XA;
        h.matchesProperty = YA;
        h.memoize = ru;
        h.merge = tA;
        h.mergeWith = sl;
        h.method = KA;
        h.methodOf = jA;
        h.mixin = va;
        h.negate = nu;
        h.nthArg = JA;
        h.omit = eA;
        h.omitBy = rA;
        h.once = J1;
        h.orderBy = k1;
        h.over = QA;
        h.overArgs = Q1;
        h.overEvery = tb;
        h.overSome = eb;
        h.partial = oa;
        h.partialRight = jf;
        h.partition = M1;
        h.pick = nA;
        h.pickBy = al;
        h.property = dl;
        h.propertyOf = rb;
        h.pull = kv;
        h.pullAll = Pf;
        h.pullAllBy = Mv;
        h.pullAllWith = Pv;
        h.pullAt = Uv;
        h.range = nb;
        h.rangeRight = ib;
        h.rearg = tm;
        h.reject = H1;
        h.remove = Hv;
        h.rest = em;
        h.reverse = ua;
        h.sampleSize = W1;
        h.set = uA;
        h.setWith = sA;
        h.shuffle = $1;
        h.slice = Gv;
        h.sortBy = X1;
        h.sortedUniq = Kv;
        h.sortedUniqBy = jv;
        h.split = qA;
        h.spread = rm;
        h.tail = Zv;
        h.take = Jv;
        h.takeRight = Qv;
        h.takeRightWhile = t1;
        h.takeWhile = e1;
        h.tap = _1;
        h.throttle = nm;
        h.thru = Qi;
        h.toArray = el;
        h.toPairs = ol;
        h.toPairsIn = cl;
        h.toPath = cb;
        h.toPlainObject = nl;
        h.transform = aA;
        h.unary = im;
        h.union = r1;
        h.unionBy = n1;
        h.unionWith = i1;
        h.uniq = u1;
        h.uniqBy = s1;
        h.uniqWith = a1;
        h.unset = oA;
        h.unzip = sa;
        h.unzipWith = Uf;
        h.update = cA;
        h.updateWith = fA;
        h.values = tn;
        h.valuesIn = lA;
        h.without = o1;
        h.words = hl;
        h.wrap = um;
        h.xor = c1;
        h.xorBy = f1;
        h.xorWith = l1;
        h.zip = h1;
        h.zipObject = p1;
        h.zipObjectDeep = d1;
        h.zipWith = g1;
        h.entries = ol;
        h.entriesIn = cl;
        h.extend = il;
        h.extendWith = ul;
        va(h, h);
        h.add = lb;
        h.attempt = pl;
        h.camelCase = gA;
        h.capitalize = fl;
        h.ceil = hb;
        h.clamp = hA;
        h.clone = am;
        h.cloneDeep = cm;
        h.cloneDeepWith = fm;
        h.cloneWith = om;
        h.conformsTo = lm;
        h.deburr = ll;
        h.defaultTo = $A;
        h.divide = pb;
        h.endsWith = _A;
        h.eq = we;
        h.escape = vA;
        h.escapeRegExp = mA;
        h.every = C1;
        h.find = T1;
        h.findIndex = If;
        h.findKey = Um;
        h.findLast = q1;
        h.findLastIndex = Nf;
        h.findLastKey = Hm;
        h.floor = db;
        h.forEach = Gf;
        h.forEachRight = Wf;
        h.forIn = Gm;
        h.forInRight = Wm;
        h.forOwn = $m;
        h.forOwnRight = Vm;
        h.get = ha;
        h.gt = hm;
        h.gte = pm;
        h.has = Ym;
        h.hasIn = pa;
        h.head = Mf;
        h.identity = Vt;
        h.includes = O1;
        h.indexOf = qv;
        h.inRange = pA;
        h.invoke = Zm;
        h.isArguments = Dr;
        h.isArray = z;
        h.isArrayBuffer = dm;
        h.isArrayLike = Wt;
        h.isArrayLikeObject = Dt;
        h.isBoolean = gm;
        h.isBuffer = ar;
        h.isDate = _m;
        h.isElement = vm;
        h.isEmpty = mm;
        h.isEqual = Am;
        h.isEqualWith = bm;
        h.isError = ca;
        h.isFinite = ym;
        h.isFunction = We;
        h.isInteger = Zf;
        h.isLength = iu;
        h.isMap = Jf;
        h.isMatch = Dm;
        h.isMatchWith = wm;
        h.isNaN = Em;
        h.isNative = xm;
        h.isNil = Sm;
        h.isNull = Cm;
        h.isNumber = Qf;
        h.isObject = At;
        h.isObjectLike = bt;
        h.isPlainObject = Pn;
        h.isRegExp = fa;
        h.isSafeInteger = Tm;
        h.isSet = tl;
        h.isString = uu;
        h.isSymbol = ue;
        h.isTypedArray = Qr;
        h.isUndefined = qm;
        h.isWeakMap = Lm;
        h.isWeakSet = Bm;
        h.join = Ov;
        h.kebabCase = AA;
        h.last = de;
        h.lastIndexOf = Iv;
        h.lowerCase = bA;
        h.lowerFirst = yA;
        h.lt = Fm;
        h.lte = Rm;
        h.max = gb;
        h.maxBy = _b;
        h.mean = vb;
        h.meanBy = mb;
        h.min = Ab;
        h.minBy = bb;
        h.stubArray = Aa;
        h.stubFalse = ba;
        h.stubObject = ub;
        h.stubString = sb;
        h.stubTrue = ab;
        h.multiply = yb;
        h.nth = Nv;
        h.noConflict = ZA;
        h.noop = ma;
        h.now = eu;
        h.pad = DA;
        h.padEnd = wA;
        h.padStart = EA;
        h.parseInt = xA;
        h.random = dA;
        h.reduce = P1;
        h.reduceRight = U1;
        h.repeat = CA;
        h.replace = SA;
        h.result = iA;
        h.round = Db;
        h.runInContext = b;
        h.sample = G1;
        h.size = V1;
        h.snakeCase = TA;
        h.some = z1;
        h.sortedIndex = Wv;
        h.sortedIndexBy = $v;
        h.sortedIndexOf = Vv;
        h.sortedLastIndex = zv;
        h.sortedLastIndexBy = Xv;
        h.sortedLastIndexOf = Yv;
        h.startCase = LA;
        h.startsWith = BA;
        h.subtract = wb;
        h.sum = Eb;
        h.sumBy = xb;
        h.template = FA;
        h.times = ob;
        h.toFinite = $e;
        h.toInteger = X;
        h.toLength = rl;
        h.toLower = RA;
        h.toNumber = ge;
        h.toSafeInteger = Om;
        h.toString = at;
        h.toUpper = OA;
        h.trim = IA;
        h.trimEnd = NA;
        h.trimStart = kA;
        h.truncate = MA;
        h.unescape = PA;
        h.uniqueId = fb;
        h.upperCase = UA;
        h.upperFirst = da;
        h.each = Gf;
        h.eachRight = Wf;
        h.first = Mf;
        va(h, function () {
          var e = {};
          Be(h, function (r, u) {
            if (!st.call(h.prototype, u)) {
              e[u] = r;
            }
          });
          return e;
        }(), {
          chain: false
        });
        h.VERSION = n;
        re(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (e) {
          h[e].placeholder = h;
        });
        re(["drop", "take"], function (e, r) {
          et.prototype[e] = function (u) {
            u = u === t ? 1 : xt(X(u), 0);
            var a = this.__filtered__ && !r ? new et(this) : this.clone();
            if (a.__filtered__) {
              a.__takeCount__ = Ot(u, a.__takeCount__);
            } else {
              a.__views__.push({
                size: Ot(u, qe),
                type: e + (a.__dir__ < 0 ? "Right" : "")
              });
            }
            return a;
          };
          et.prototype[e + "Right"] = function (u) {
            return this.reverse()[e](u).reverse();
          };
        });
        re(["filter", "map", "takeWhile"], function (e, r) {
          var u = r + 1;
          var a = u == Pr || u == pi;
          et.prototype[e] = function (f) {
            var p = this.clone();
            p.__iteratees__.push({
              iteratee: H(f, 3),
              type: u
            });
            p.__filtered__ = p.__filtered__ || a;
            return p;
          };
        });
        re(["head", "last"], function (e, r) {
          var u = "take" + (r ? "Right" : "");
          et.prototype[e] = function () {
            return this[u](1).value()[0];
          };
        });
        re(["initial", "tail"], function (e, r) {
          var u = "drop" + (r ? "" : "Right");
          et.prototype[e] = function () {
            if (this.__filtered__) {
              return new et(this);
            } else {
              return this[u](1);
            }
          };
        });
        et.prototype.compact = function () {
          return this.filter(Vt);
        };
        et.prototype.find = function (e) {
          return this.filter(e).head();
        };
        et.prototype.findLast = function (e) {
          return this.reverse().find(e);
        };
        et.prototype.invokeMap = Z(function (e, r) {
          if (typeof e == "function") {
            return new et(this);
          } else {
            return this.map(function (u) {
              return Rn(u, e, r);
            });
          }
        });
        et.prototype.reject = function (e) {
          return this.filter(nu(H(e)));
        };
        et.prototype.slice = function (e, r) {
          e = X(e);
          var u = this;
          if (u.__filtered__ && (e > 0 || r < 0)) {
            return new et(u);
          } else {
            if (e < 0) {
              u = u.takeRight(-e);
            } else if (e) {
              u = u.drop(e);
            }
            if (r !== t) {
              r = X(r);
              u = r < 0 ? u.dropRight(-r) : u.take(r - e);
            }
            return u;
          }
        };
        et.prototype.takeRightWhile = function (e) {
          return this.reverse().takeWhile(e).reverse();
        };
        et.prototype.toArray = function () {
          return this.take(qe);
        };
        Be(et.prototype, function (e, r) {
          var u = /^(?:filter|find|map|reject)|While$/.test(r);
          var a = /^(?:head|last)$/.test(r);
          var f = h[a ? "take" + (r == "last" ? "Right" : "") : r];
          var p = a || /^find/.test(r);
          if (f) {
            h.prototype[r] = function () {
              var _ = this.__wrapped__;
              var m = a ? [1] : arguments;
              var y = _ instanceof et;
              var x = m[0];
              var C = y || z(_);
              function q(tt) {
                var rt = f.apply(h, Qe([tt], m));
                if (a && F) {
                  return rt[0];
                } else {
                  return rt;
                }
              }
              if (C && u && typeof x == "function" && x.length != 1) {
                y = C = false;
              }
              var F = this.__chain__;
              var k = !!this.__actions__.length;
              var G = p && !F;
              var K = y && !k;
              if (!p && C) {
                _ = K ? _ : new et(this);
                var U = e.apply(_, m);
                U.__actions__.push({
                  func: Qi,
                  args: [q],
                  thisArg: t
                });
                return new le(U, F);
              }
              if (G && K) {
                return e.apply(this, m);
              } else {
                U = this.thru(q);
                if (G) {
                  if (a) {
                    return U.value()[0];
                  } else {
                    return U.value();
                  }
                } else {
                  return U;
                }
              }
            };
          }
        });
        re(["pop", "push", "shift", "sort", "splice", "unshift"], function (e) {
          var r = xi[e];
          var u = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru";
          var a = /^(?:pop|shift)$/.test(e);
          h.prototype[e] = function () {
            var f = arguments;
            if (a && !this.__chain__) {
              var p = this.value();
              return r.apply(z(p) ? p : [], f);
            }
            return this[u](function (_) {
              return r.apply(z(_) ? _ : [], f);
            });
          };
        });
        Be(et.prototype, function (e, r) {
          var u = h[r];
          if (u) {
            var a = u.name + "";
            if (!st.call(Yr, a)) {
              Yr[a] = [];
            }
            Yr[a].push({
              name: r,
              func: u
            });
          }
        });
        Yr[zi(t, P).name] = [{
          name: "wrapper",
          func: t
        }];
        et.prototype.clone = U0;
        et.prototype.reverse = H0;
        et.prototype.value = G0;
        h.prototype.at = v1;
        h.prototype.chain = m1;
        h.prototype.commit = A1;
        h.prototype.next = b1;
        h.prototype.plant = D1;
        h.prototype.reverse = w1;
        h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = E1;
        h.prototype.first = h.prototype.head;
        if (Cn) {
          h.prototype[Cn] = y1;
        }
        return h;
      };
      var er = A0();
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        St._ = er;
        define(function () {
          return er;
        });
      } else if (dr) {
        (dr.exports = er)._ = er;
        gs._ = er;
      } else {
        St._ = er;
      }
    }).call(ln);
  });
  var zp = O((XE, Vp) => {
    var oo = Yn();
    var $p = Fu();
    var BD = oo.isTag;
    Vp.exports = {
      getInnerHTML: FD,
      getOuterHTML: $p,
      getText: co
    };
    function FD(t, n) {
      if (t.children) {
        return t.children.map(function (i) {
          return $p(i, n);
        }).join("");
      } else {
        return "";
      }
    }
    function co(t) {
      if (Array.isArray(t)) {
        return t.map(co).join("");
      } else if (BD(t) || t.type === oo.CDATA) {
        return co(t.children);
      } else if (t.type === oo.Text) {
        return t.data;
      } else {
        return "";
      }
    }
  });
  var Xp = O(Rr => {
    var RD = Rr.getChildren = function (t) {
      return t.children;
    };
    var OD = Rr.getParent = function (t) {
      return t.parent;
    };
    Rr.getSiblings = function (t) {
      var n = OD(t);
      if (n) {
        return RD(n);
      } else {
        return [t];
      }
    };
    Rr.getAttributeValue = function (t, n) {
      return t.attribs && t.attribs[n];
    };
    Rr.hasAttrib = function (t, n) {
      return !!t.attribs && hasOwnProperty.call(t.attribs, n);
    };
    Rr.getName = function (t) {
      return t.name;
    };
  });
  var Yp = O(hn => {
    hn.removeElement = function (t) {
      if (t.prev) {
        t.prev.next = t.next;
      }
      if (t.next) {
        t.next.prev = t.prev;
      }
      if (t.parent) {
        var n = t.parent.children;
        n.splice(n.lastIndexOf(t), 1);
      }
    };
    hn.replaceElement = function (t, n) {
      var i = n.prev = t.prev;
      if (i) {
        i.next = n;
      }
      var s = n.next = t.next;
      if (s) {
        s.prev = n;
      }
      var o = n.parent = t.parent;
      if (o) {
        var c = o.children;
        c[c.lastIndexOf(t)] = n;
      }
    };
    hn.appendChild = function (t, n) {
      n.parent = t;
      if (t.children.push(n) !== 1) {
        var i = t.children[t.children.length - 2];
        i.next = n;
        n.prev = i;
        n.next = null;
      }
    };
    hn.append = function (t, n) {
      var i = t.parent;
      var s = t.next;
      n.next = s;
      n.prev = t;
      t.next = n;
      n.parent = i;
      if (s) {
        s.prev = n;
        if (i) {
          var o = i.children;
          o.splice(o.lastIndexOf(s), 0, n);
        }
      } else if (i) {
        i.children.push(n);
      }
    };
    hn.prepend = function (t, n) {
      var i = t.parent;
      if (i) {
        var s = i.children;
        s.splice(s.lastIndexOf(t), 0, n);
      }
      if (t.prev) {
        t.prev.next = n;
      }
      n.parent = i;
      n.prev = t.prev;
      n.next = t;
      t.prev = n;
    };
  });
  var Qp = O((jE, Jp) => {
    var fo = Yn().isTag;
    Jp.exports = {
      filter: ID,
      find: lo,
      findOneChild: ND,
      findOne: Kp,
      existsOne: jp,
      findAll: Zp
    };
    function ID(t, n, i, s) {
      if (!Array.isArray(n)) {
        n = [n];
      }
      if (typeof s != "number" || !isFinite(s)) {
        s = Infinity;
      }
      return lo(t, n, i !== false, s);
    }
    function lo(t, n, i, s) {
      for (var o = [], c, l = 0, g = n.length; l < g && (!t(n[l]) || !(o.push(n[l]), --s <= 0)) && !(c = n[l].children, i && c && c.length > 0 && (c = lo(t, c, i, s), o = o.concat(c), s -= c.length, s <= 0)); l++);
      return o;
    }
    function ND(t, n) {
      for (var i = 0, s = n.length; i < s; i++) {
        if (t(n[i])) {
          return n[i];
        }
      }
      return null;
    }
    function Kp(t, n) {
      for (var i = null, s = 0, o = n.length; s < o && !i; s++) {
        if (fo(n[s])) {
          if (t(n[s])) {
            i = n[s];
          } else if (n[s].children.length > 0) {
            i = Kp(t, n[s].children);
          }
        } else {
          continue;
        }
      }
      return i;
    }
    function jp(t, n) {
      for (var i = 0, s = n.length; i < s; i++) {
        if (fo(n[i]) && (t(n[i]) || n[i].children.length > 0 && jp(t, n[i].children))) {
          return true;
        }
      }
      return false;
    }
    function Zp(t, n) {
      var i = [];
      for (var s = 0, o = n.length; s < o; s++) {
        if (fo(n[s])) {
          if (t(n[s])) {
            i.push(n[s]);
          }
          if (n[s].children.length > 0) {
            i = i.concat(Zp(t, n[s].children));
          }
        }
      }
      return i;
    }
  });
  var ed = O(Ir => {
    var kD = Yn();
    var Or = Ir.isTag = kD.isTag;
    Ir.testElement = function (t, n) {
      for (var i in t) {
        if (t.hasOwnProperty(i)) {
          if (i === "tag_name") {
            if (!Or(n) || !t.tag_name(n.name)) {
              return false;
            }
          } else if (i === "tag_type") {
            if (!t.tag_type(n.type)) {
              return false;
            }
          } else if (i === "tag_contains") {
            if (Or(n) || !t.tag_contains(n.data)) {
              return false;
            }
          } else if (!n.attribs || !t[i](n.attribs[i])) {
            return false;
          }
        }
      }
      return true;
    };
    var Ru = {
      tag_name: function (t) {
        if (typeof t == "function") {
          return function (n) {
            return Or(n) && t(n.name);
          };
        } else if (t === "*") {
          return Or;
        } else {
          return function (n) {
            return Or(n) && n.name === t;
          };
        }
      },
      tag_type: function (t) {
        if (typeof t == "function") {
          return function (n) {
            return t(n.type);
          };
        } else {
          return function (n) {
            return n.type === t;
          };
        }
      },
      tag_contains: function (t) {
        if (typeof t == "function") {
          return function (n) {
            return !Or(n) && t(n.data);
          };
        } else {
          return function (n) {
            return !Or(n) && n.data === t;
          };
        }
      }
    };
    function td(t, n) {
      if (typeof n == "function") {
        return function (i) {
          return i.attribs && n(i.attribs[t]);
        };
      } else {
        return function (i) {
          return i.attribs && i.attribs[t] === n;
        };
      }
    }
    function MD(t, n) {
      return function (i) {
        return t(i) || n(i);
      };
    }
    Ir.getElements = function (t, n, i, s) {
      var o = Object.keys(t).map(function (c) {
        var l = t[c];
        if (c in Ru) {
          return Ru[c](l);
        } else {
          return td(c, l);
        }
      });
      if (o.length === 0) {
        return [];
      } else {
        return this.filter(o.reduce(MD), n, i, s);
      }
    };
    Ir.getElementById = function (t, n, i) {
      if (!Array.isArray(n)) {
        n = [n];
      }
      return this.findOne(td("id", t), n, i !== false);
    };
    Ir.getElementsByTagName = function (t, n, i, s) {
      return this.filter(Ru.tag_name(t), n, i, s);
    };
    Ir.getElementsByTagType = function (t, n, i, s) {
      return this.filter(Ru.tag_type(t), n, i, s);
    };
  });
  var rd = O(Ou => {
    Ou.removeSubsets = function (t) {
      for (var n = t.length, i, s, o; --n > -1;) {
        i = s = t[n];
        t[n] = null;
        o = true;
        while (s) {
          if (t.indexOf(s) > -1) {
            o = false;
            t.splice(n, 1);
            break;
          }
          s = s.parent;
        }
        if (o) {
          t[n] = i;
        }
      }
      return t;
    };
    var Ke = {
      DISCONNECTED: 1,
      PRECEDING: 2,
      FOLLOWING: 4,
      CONTAINS: 8,
      CONTAINED_BY: 16
    };
    var PD = Ou.compareDocumentPosition = function (t, n) {
      var i = [];
      var s = [];
      var o;
      var c;
      var l;
      var g;
      var d;
      var v;
      if (t === n) {
        return 0;
      }
      for (o = t; o;) {
        i.unshift(o);
        o = o.parent;
      }
      for (o = n; o;) {
        s.unshift(o);
        o = o.parent;
      }
      for (v = 0; i[v] === s[v];) {
        v++;
      }
      if (v === 0) {
        return Ke.DISCONNECTED;
      } else {
        c = i[v - 1];
        l = c.children;
        g = i[v];
        d = s[v];
        if (l.indexOf(g) > l.indexOf(d)) {
          if (c === n) {
            return Ke.FOLLOWING | Ke.CONTAINED_BY;
          } else {
            return Ke.FOLLOWING;
          }
        } else if (c === t) {
          return Ke.PRECEDING | Ke.CONTAINS;
        } else {
          return Ke.PRECEDING;
        }
      }
    };
    Ou.uniqueSort = function (t) {
      var n = t.length;
      var i;
      var s;
      for (t = t.slice(); --n > -1;) {
        i = t[n];
        s = t.indexOf(i);
        if (s > -1 && s < n) {
          t.splice(n, 1);
        }
      }
      t.sort(function (o, c) {
        var l = PD(o, c);
        if (l & Ke.PRECEDING) {
          return -1;
        } else if (l & Ke.FOLLOWING) {
          return 1;
        } else {
          return 0;
        }
      });
      return t;
    };
  });
  var pn = O((QE, id) => {
    var nd = id.exports;
    [zp(), Xp(), Yp(), Qp(), ed(), rd()].forEach(function (t) {
      Object.keys(t).forEach(function (n) {
        nd[n] = t[n].bind(nd);
      });
    });
  });
  var sd = O((tx, ud) => {
    ud.exports = HD;
    var UD = /^([+\-]?\d*n)?\s*(?:([+\-]?)\s*(\d+))?$/;
    function HD(t) {
      t = t.trim().toLowerCase();
      if (t === "even") {
        return [2, 0];
      }
      if (t === "odd") {
        return [2, 1];
      }
      var n = t.match(UD);
      if (!n) {
        throw new SyntaxError("n-th rule couldn't be parsed ('" + t + "')");
      }
      var i;
      if (n[1]) {
        i = parseInt(n[1], 10);
        if (isNaN(i)) {
          if (n[1].charAt(0) === "-") {
            i = -1;
          } else {
            i = 1;
          }
        }
      } else {
        i = 0;
      }
      return [i, n[3] ? parseInt((n[2] || "") + n[3], 10) : 0];
    }
  });
  var dn = O((ex, ad) => {
    ad.exports = {
      trueFunc: function () {
        return true;
      },
      falseFunc: function () {
        return false;
      }
    };
  });
  var fd = O((rx, cd) => {
    cd.exports = $D;
    var od = dn();
    var GD = od.trueFunc;
    var WD = od.falseFunc;
    function $D(t) {
      var n = t[0];
      var i = t[1] - 1;
      if (i < 0 && n <= 0) {
        return WD;
      }
      if (n === -1) {
        return function (o) {
          return o <= i;
        };
      }
      if (n === 0) {
        return function (o) {
          return o === i;
        };
      }
      if (n === 1) {
        if (i < 0) {
          return GD;
        } else {
          return function (o) {
            return o >= i;
          };
        }
      }
      var s = i % n;
      if (s < 0) {
        s += n;
      }
      if (n > 1) {
        return function (o) {
          return o >= i && o % n === s;
        };
      } else {
        n *= -1;
        return function (o) {
          return o <= i && o % n === s;
        };
      }
    }
  });
  var pd = O((nx, Iu) => {
    var ld = sd();
    var hd = fd();
    Iu.exports = function (n) {
      return hd(ld(n));
    };
    Iu.exports.parse = ld;
    Iu.exports.compile = hd;
  });
  var ho = O((ix, vd) => {
    var _d = pn();
    var VD = _d.hasAttrib;
    var jt = _d.getAttributeValue;
    var Nu = dn().falseFunc;
    var dd = /[-[\]{}()*+?.,\\^$|#\s]/g;
    var gd = {
      __proto__: null,
      equals: function (t, n) {
        var i = n.name;
        var s = n.value;
        if (n.ignoreCase) {
          s = s.toLowerCase();
          return function (c) {
            var l = jt(c, i);
            return l != null && l.toLowerCase() === s && t(c);
          };
        } else {
          return function (c) {
            return jt(c, i) === s && t(c);
          };
        }
      },
      hyphen: function (t, n) {
        var i = n.name;
        var s = n.value;
        var o = s.length;
        if (n.ignoreCase) {
          s = s.toLowerCase();
          return function (l) {
            var g = jt(l, i);
            return g != null && (g.length === o || g.charAt(o) === "-") && g.substr(0, o).toLowerCase() === s && t(l);
          };
        } else {
          return function (l) {
            var g = jt(l, i);
            return g != null && g.substr(0, o) === s && (g.length === o || g.charAt(o) === "-") && t(l);
          };
        }
      },
      element: function (t, n) {
        var i = n.name;
        var s = n.value;
        if (/\s/.test(s)) {
          return Nu;
        }
        s = s.replace(dd, "\\$&");
        var o = "(?:^|\\s)" + s + "(?:$|\\s)";
        var c = n.ignoreCase ? "i" : "";
        var l = new RegExp(o, c);
        return function (d) {
          var v = jt(d, i);
          return v != null && l.test(v) && t(d);
        };
      },
      exists: function (t, n) {
        var i = n.name;
        return function (o) {
          return VD(o, i) && t(o);
        };
      },
      start: function (t, n) {
        var i = n.name;
        var s = n.value;
        var o = s.length;
        if (o === 0) {
          return Nu;
        } else if (n.ignoreCase) {
          s = s.toLowerCase();
          return function (l) {
            var g = jt(l, i);
            return g != null && g.substr(0, o).toLowerCase() === s && t(l);
          };
        } else {
          return function (l) {
            var g = jt(l, i);
            return g != null && g.substr(0, o) === s && t(l);
          };
        }
      },
      end: function (t, n) {
        var i = n.name;
        var s = n.value;
        var o = -s.length;
        if (o === 0) {
          return Nu;
        } else if (n.ignoreCase) {
          s = s.toLowerCase();
          return function (l) {
            var g = jt(l, i);
            return g != null && g.substr(o).toLowerCase() === s && t(l);
          };
        } else {
          return function (l) {
            var g = jt(l, i);
            return g != null && g.substr(o) === s && t(l);
          };
        }
      },
      any: function (t, n) {
        var i = n.name;
        var s = n.value;
        if (s === "") {
          return Nu;
        }
        if (n.ignoreCase) {
          var o = new RegExp(s.replace(dd, "\\$&"), "i");
          return function (l) {
            var g = jt(l, i);
            return g != null && o.test(g) && t(l);
          };
        }
        return function (l) {
          var g = jt(l, i);
          return g != null && g.indexOf(s) >= 0 && t(l);
        };
      },
      not: function (t, n) {
        var i = n.name;
        var s = n.value;
        if (s === "") {
          return function (c) {
            return !!jt(c, i) && t(c);
          };
        } else if (n.ignoreCase) {
          s = s.toLowerCase();
          return function (c) {
            var l = jt(c, i);
            return l != null && l.toLowerCase() !== s && t(c);
          };
        } else {
          return function (c) {
            return jt(c, i) !== s && t(c);
          };
        }
      }
    };
    vd.exports = {
      compile: function (t, n, i) {
        if (i && i.strict && (n.ignoreCase || n.action === "not")) {
          throw SyntaxError("Unsupported attribute selector");
        }
        return gd[n.action](t, n);
      },
      rules: gd
    };
  });
  var Pu = O((ux, wd) => {
    var lr = pn();
    var ve = lr.isTag;
    var md = lr.getText;
    var po = lr.getParent;
    var Ad = lr.getChildren;
    var Oe = lr.getSiblings;
    var je = lr.hasAttrib;
    var kt = lr.getName;
    var bd = lr.getAttributeValue;
    var ku = pd();
    var zD = ho().rules.equals;
    var Dd = dn();
    var Zn = Dd.trueFunc;
    var Jn = Dd.falseFunc;
    function XD(t) {
      for (var n = 0; t && n < t.length; n++) {
        if (ve(t[n])) {
          return t[n];
        }
      }
    }
    function Nr(t, n) {
      var i = {
        name: t,
        value: n
      };
      return function (o) {
        return zD(o, i);
      };
    }
    function Mu(t) {
      return function (n) {
        return !!po(n) && t(n);
      };
    }
    var Qn = {
      contains: function (t, n) {
        return function (s) {
          return t(s) && md(s).indexOf(n) >= 0;
        };
      },
      icontains: function (t, n) {
        var i = n.toLowerCase();
        return function (o) {
          return t(o) && md(o).toLowerCase().indexOf(i) >= 0;
        };
      },
      "nth-child": function (t, n) {
        var i = ku(n);
        if (i === Jn) {
          return i;
        } else if (i === Zn) {
          return Mu(t);
        } else {
          return function (o) {
            for (var c = Oe(o), l = 0, g = 0; l < c.length; l++) {
              if (ve(c[l])) {
                if (c[l] === o) {
                  break;
                }
                g++;
              }
            }
            return i(g) && t(o);
          };
        }
      },
      "nth-last-child": function (t, n) {
        var i = ku(n);
        if (i === Jn) {
          return i;
        } else if (i === Zn) {
          return Mu(t);
        } else {
          return function (o) {
            var c = Oe(o);
            var l = 0;
            for (var g = c.length - 1; g >= 0; g--) {
              if (ve(c[g])) {
                if (c[g] === o) {
                  break;
                }
                l++;
              }
            }
            return i(l) && t(o);
          };
        }
      },
      "nth-of-type": function (t, n) {
        var i = ku(n);
        if (i === Jn) {
          return i;
        } else if (i === Zn) {
          return Mu(t);
        } else {
          return function (o) {
            for (var c = Oe(o), l = 0, g = 0; g < c.length; g++) {
              if (ve(c[g])) {
                if (c[g] === o) {
                  break;
                }
                if (kt(c[g]) === kt(o)) {
                  l++;
                }
              }
            }
            return i(l) && t(o);
          };
        }
      },
      "nth-last-of-type": function (t, n) {
        var i = ku(n);
        if (i === Jn) {
          return i;
        } else if (i === Zn) {
          return Mu(t);
        } else {
          return function (o) {
            var c = Oe(o);
            var l = 0;
            for (var g = c.length - 1; g >= 0; g--) {
              if (ve(c[g])) {
                if (c[g] === o) {
                  break;
                }
                if (kt(c[g]) === kt(o)) {
                  l++;
                }
              }
            }
            return i(l) && t(o);
          };
        }
      },
      root: function (t) {
        return function (n) {
          return !po(n) && t(n);
        };
      },
      scope: function (t, n, i, s) {
        if (!s || s.length === 0) {
          return Qn.root(t);
        } else if (s.length === 1) {
          return function (o) {
            return s[0] === o && t(o);
          };
        } else {
          return function (o) {
            return s.indexOf(o) >= 0 && t(o);
          };
        }
      },
      checkbox: Nr("type", "checkbox"),
      file: Nr("type", "file"),
      password: Nr("type", "password"),
      radio: Nr("type", "radio"),
      reset: Nr("type", "reset"),
      image: Nr("type", "image"),
      submit: Nr("type", "submit")
    };
    var ti = {
      empty: function (t) {
        return !Ad(t).some(function (n) {
          return ve(n) || n.type === "text";
        });
      },
      "first-child": function (t) {
        return XD(Oe(t)) === t;
      },
      "last-child": function (t) {
        var n = Oe(t);
        for (var i = n.length - 1; i >= 0; i--) {
          if (n[i] === t) {
            return true;
          }
          if (ve(n[i])) {
            break;
          }
        }
        return false;
      },
      "first-of-type": function (t) {
        for (var n = Oe(t), i = 0; i < n.length; i++) {
          if (ve(n[i])) {
            if (n[i] === t) {
              return true;
            }
            if (kt(n[i]) === kt(t)) {
              break;
            }
          }
        }
        return false;
      },
      "last-of-type": function (t) {
        var n = Oe(t);
        for (var i = n.length - 1; i >= 0; i--) {
          if (ve(n[i])) {
            if (n[i] === t) {
              return true;
            }
            if (kt(n[i]) === kt(t)) {
              break;
            }
          }
        }
        return false;
      },
      "only-of-type": function (t) {
        var n = Oe(t);
        for (var i = 0, s = n.length; i < s; i++) {
          if (ve(n[i])) {
            if (n[i] === t) {
              continue;
            }
            if (kt(n[i]) === kt(t)) {
              return false;
            }
          }
        }
        return true;
      },
      "only-child": function (t) {
        for (var n = Oe(t), i = 0; i < n.length; i++) {
          if (ve(n[i]) && n[i] !== t) {
            return false;
          }
        }
        return true;
      },
      link: function (t) {
        return je(t, "href");
      },
      visited: Jn,
      selected: function (t) {
        if (je(t, "selected")) {
          return true;
        }
        if (kt(t) !== "option") {
          return false;
        }
        var n = po(t);
        if (!n || kt(n) !== "select" || je(n, "multiple")) {
          return false;
        }
        for (var i = Ad(n), s = false, o = 0; o < i.length; o++) {
          if (ve(i[o])) {
            if (i[o] === t) {
              s = true;
            } else if (s) {
              if (je(i[o], "selected")) {
                return false;
              }
            } else {
              return false;
            }
          }
        }
        return s;
      },
      disabled: function (t) {
        return je(t, "disabled");
      },
      enabled: function (t) {
        return !je(t, "disabled");
      },
      checked: function (t) {
        return je(t, "checked") || ti.selected(t);
      },
      required: function (t) {
        return je(t, "required");
      },
      optional: function (t) {
        return !je(t, "required");
      },
      parent: function (t) {
        return !ti.empty(t);
      },
      header: function (t) {
        var n = kt(t);
        return n === "h1" || n === "h2" || n === "h3" || n === "h4" || n === "h5" || n === "h6";
      },
      button: function (t) {
        var n = kt(t);
        return n === "button" || n === "input" && bd(t, "type") === "button";
      },
      input: function (t) {
        var n = kt(t);
        return n === "input" || n === "textarea" || n === "select" || n === "button";
      },
      text: function (t) {
        var n;
        return kt(t) === "input" && (!(n = bd(t, "type")) || n.toLowerCase() === "text");
      }
    };
    function yd(t, n, i) {
      if (i === null) {
        if (t.length > 1 && n !== "scope") {
          throw new SyntaxError("pseudo-selector :" + n + " requires an argument");
        }
      } else if (t.length === 1) {
        throw new SyntaxError("pseudo-selector :" + n + " doesn't have any arguments");
      }
    }
    var YD = /^(?:(?:nth|last|first|only)-(?:child|of-type)|root|empty|(?:en|dis)abled|checked|not)$/;
    wd.exports = {
      compile: function (t, n, i, s) {
        var o = n.name;
        var c = n.data;
        if (i && i.strict && !YD.test(o)) {
          throw SyntaxError(":" + o + " isn't part of CSS3");
        }
        if (typeof Qn[o] == "function") {
          yd(Qn[o], o, c);
          return Qn[o](t, c, i, s);
        }
        if (typeof ti[o] == "function") {
          var l = ti[o];
          yd(l, o, c);
          if (t === Zn) {
            return l;
          } else {
            return function (d) {
              return l(d, c) && t(d);
            };
          }
        } else {
          throw new SyntaxError("unmatched pseudo-class :" + o);
        }
      },
      filters: Qn,
      pseudos: ti
    };
  });
  var Bd = O((sx, Ld) => {
    "use strict";

    Ld.exports = ew;
    var Ed = /^(?:\\.|[\w\-\u00b0-\uFFFF])+/;
    var KD = /\\([\da-f]{1,6}\s?|(\s)|.)/ig;
    var jD = /^\s*((?:\\.|[\w\u00b0-\uFFFF\-])+)\s*(?:(\S?)=\s*(?:(['"])([^]*?)\3|(#?(?:\\.|[\w\u00b0-\uFFFF\-])*)|)|)\s*(i)?\]/;
    var ZD = {
      __proto__: null,
      undefined: "exists",
      "": "equals",
      "~": "element",
      "^": "start",
      $: "end",
      "*": "any",
      "!": "not",
      "|": "hyphen"
    };
    var xd = {
      __proto__: null,
      ">": "child",
      "<": "parent",
      "~": "sibling",
      "+": "adjacent"
    };
    var go = {
      __proto__: null,
      "#": ["id", "equals"],
      ".": ["class", "element"]
    };
    var JD = {
      __proto__: null,
      has: true,
      not: true,
      matches: true
    };
    var QD = {
      __proto__: null,
      contains: true,
      icontains: true
    };
    var Cd = {
      __proto__: null,
      "\"": true,
      "'": true
    };
    function tw(t, n, i) {
      var s = "0x" + n - 65536;
      if (s !== s || i) {
        return n;
      } else if (s < 0) {
        return String.fromCharCode(s + 65536);
      } else {
        return String.fromCharCode(s >> 10 | 55296, s & 1023 | 56320);
      }
    }
    function Uu(t) {
      return t.replace(KD, tw);
    }
    function Sd(t) {
      return t === " " || t === `
` || t === "\t" || t === "\f" || t === "\r";
    }
    function ew(t, n) {
      var i = [];
      t = qd(i, t + "", n);
      if (t !== "") {
        throw new SyntaxError("Unmatched selector: " + t);
      }
      return i;
    }
    function qd(t, n, i) {
      var s = [];
      var o = false;
      var c;
      var l;
      var g;
      var d;
      function v() {
        var B = n.match(Ed)[0];
        n = n.substr(B.length);
        return Uu(B);
      }
      function A(B) {
        while (Sd(n.charAt(B))) {
          B++;
        }
        n = n.substr(B);
      }
      function w(B) {
        var P = 0;
        for (; n.charAt(--B) === "\\";) {
          P++;
        }
        return (P & 1) === 1;
      }
      for (A(0); n !== "";) {
        l = n.charAt(0);
        if (Sd(l)) {
          o = true;
          A(1);
        } else if (l in xd) {
          s.push({
            type: xd[l]
          });
          o = false;
          A(1);
        } else if (l === ",") {
          if (s.length === 0) {
            throw new SyntaxError("empty sub-selector");
          }
          t.push(s);
          s = [];
          o = false;
          A(1);
        } else {
          if (o) {
            if (s.length > 0) {
              s.push({
                type: "descendant"
              });
            }
            o = false;
          }
          if (l === "*") {
            n = n.substr(1);
            s.push({
              type: "universal"
            });
          } else if (l in go) {
            n = n.substr(1);
            s.push({
              type: "attribute",
              name: go[l][0],
              action: go[l][1],
              value: v(),
              ignoreCase: false
            });
          } else if (l === "[") {
            n = n.substr(1);
            c = n.match(jD);
            if (!c) {
              throw new SyntaxError("Malformed attribute selector: " + n);
            }
            n = n.substr(c[0].length);
            g = Uu(c[1]);
            if (!i || ("lowerCaseAttributeNames" in i ? i.lowerCaseAttributeNames : !i.xmlMode)) {
              g = g.toLowerCase();
            }
            s.push({
              type: "attribute",
              name: g,
              action: ZD[c[2]],
              value: Uu(c[4] || c[5] || ""),
              ignoreCase: !!c[6]
            });
          } else if (l === ":") {
            if (n.charAt(1) === ":") {
              n = n.substr(2);
              s.push({
                type: "pseudo-element",
                name: v().toLowerCase()
              });
              continue;
            }
            n = n.substr(1);
            g = v().toLowerCase();
            c = null;
            if (n.charAt(0) === "(") {
              if (g in JD) {
                d = n.charAt(1);
                var T = d in Cd;
                n = n.substr(T + 1);
                c = [];
                n = qd(c, n, i);
                if (T) {
                  if (n.charAt(0) !== d) {
                    throw new SyntaxError("unmatched quotes in :" + g);
                  }
                  n = n.substr(1);
                }
                if (n.charAt(0) !== ")") {
                  throw new SyntaxError("missing closing parenthesis in :" + g + " " + n);
                }
                n = n.substr(1);
              } else {
                for (var S = 1, L = 1; L > 0 && S < n.length; S++) {
                  if (n.charAt(S) === "(" && !w(S)) {
                    L++;
                  } else if (n.charAt(S) === ")" && !w(S)) {
                    L--;
                  }
                }
                if (L) {
                  throw new SyntaxError("parenthesis not matched");
                }
                c = n.substr(1, S - 2);
                n = n.substr(S);
                if (g in QD) {
                  d = c.charAt(0);
                  if (d === c.slice(-1) && d in Cd) {
                    c = c.slice(1, -1);
                  }
                  c = Uu(c);
                }
              }
            }
            s.push({
              type: "pseudo",
              name: g,
              data: c
            });
          } else if (Ed.test(n)) {
            g = v();
            if (!i || ("lowerCaseTags" in i ? i.lowerCaseTags : !i.xmlMode)) {
              g = g.toLowerCase();
            }
            s.push({
              type: "tag",
              name: g
            });
          } else {
            if (s.length && s[s.length - 1].type === "descendant") {
              s.pop();
            }
            Td(t, s);
            return n;
          }
        }
      }
      Td(t, s);
      return n;
    }
    function Td(t, n) {
      if (t.length > 0 && n.length === 0) {
        throw new SyntaxError("empty sub-selector");
      }
      t.push(n);
    }
  });
  var Id = O((ax, Od) => {
    var ei = pn();
    var _o = ei.isTag;
    var Fd = ei.getParent;
    var rw = ei.getChildren;
    var Rd = ei.getSiblings;
    var nw = ei.getName;
    Od.exports = {
      __proto__: null,
      attribute: ho().compile,
      pseudo: Pu().compile,
      tag: function (t, n) {
        var i = n.name;
        return function (o) {
          return nw(o) === i && t(o);
        };
      },
      descendant: function (t, n, i, s, o) {
        return function (l) {
          if (o && t(l)) {
            return true;
          }
          for (var g = false; !g && (l = Fd(l));) {
            g = t(l);
          }
          return g;
        };
      },
      parent: function (t, n, i) {
        if (i && i.strict) {
          throw SyntaxError("Parent selector isn't part of CSS3");
        }
        return function (c) {
          return rw(c).some(s);
        };
        function s(o) {
          return _o(o) && t(o);
        }
      },
      child: function (t) {
        return function (i) {
          var s = Fd(i);
          return !!s && t(s);
        };
      },
      sibling: function (t) {
        return function (i) {
          for (var s = Rd(i), o = 0; o < s.length; o++) {
            if (_o(s[o])) {
              if (s[o] === i) {
                break;
              }
              if (t(s[o])) {
                return true;
              }
            }
          }
          return false;
        };
      },
      adjacent: function (t) {
        return function (i) {
          for (var s = Rd(i), o, c = 0; c < s.length; c++) {
            if (_o(s[c])) {
              if (s[c] === i) {
                break;
              }
              o = s[c];
            }
          }
          return !!o && t(o);
        };
      },
      universal: function (t) {
        return t;
      }
    };
  });
  var vo = O((ox, iw) => {
    iw.exports = {
      universal: 50,
      tag: 30,
      attribute: 1,
      pseudo: 0,
      descendant: -1,
      child: -1,
      parent: -1,
      sibling: -1,
      adjacent: -1
    };
  });
  var Pd = O((cx, Md) => {
    Md.exports = uw;
    var mo = vo();
    var Nd = {
      __proto__: null,
      exists: 10,
      equals: 8,
      not: 7,
      start: 6,
      end: 6,
      any: 5,
      hyphen: 4,
      element: 4
    };
    function uw(t) {
      var n = t.map(kd);
      for (var i = 1; i < t.length; i++) {
        var s = n[i];
        if (!(s < 0)) {
          for (var o = i - 1; o >= 0 && s < n[o]; o--) {
            var c = t[o + 1];
            t[o + 1] = t[o];
            t[o] = c;
            n[o + 1] = n[o];
            n[o] = s;
          }
        }
      }
    }
    function kd(t) {
      var n = mo[t.type];
      if (n === mo.attribute) {
        n = Nd[t.action];
        if (n === Nd.equals && t.name === "id") {
          n = 9;
        }
        if (t.ignoreCase) {
          n >>= 1;
        }
      } else if (n === mo.pseudo) {
        if (!t.data) {
          n = 3;
        } else if (t.name === "has" || t.name === "contains") {
          n = 0;
        } else if (t.name === "matches" || t.name === "not") {
          n = 0;
          for (var i = 0; i < t.data.length; i++) {
            if (t.data[i].length === 1) {
              var s = kd(t.data[i][0]);
              if (s === 0) {
                n = 0;
                break;
              }
              if (s > n) {
                n = s;
              }
            }
          }
          if (t.data.length > 1 && n > 0) {
            n -= 1;
          }
        } else {
          n = 1;
        }
      }
      return n;
    }
  });
  var Yd = O((fx, Hu) => {
    Hu.exports = fw;
    Hu.exports.compileUnsafe = Wd;
    Hu.exports.compileToken = ii;
    var sw = Bd();
    var ni = pn();
    var yo = ni.isTag;
    var aw = Id();
    var ow = Pd();
    var Hd = dn();
    var ri = Hd.trueFunc;
    var hr = Hd.falseFunc;
    var cw = vo();
    function fw(t, n, i) {
      var s = Wd(t, n, i);
      return Gd(s);
    }
    function Gd(t) {
      return function (i) {
        return yo(i) && t(i);
      };
    }
    function Wd(t, n, i) {
      var s = sw(t, n);
      return ii(s, n, i);
    }
    function $d(t) {
      return t.type === "pseudo" && (t.name === "scope" || Array.isArray(t.data) && t.data.some(function (n) {
        return n.some($d);
      }));
    }
    var lw = {
      type: "descendant"
    };
    var hw = {
      type: "pseudo",
      name: "scope"
    };
    var Vd = {};
    var pw = ni.getParent;
    function dw(t, n) {
      var i = !!n && !!n.length && n.every(function (s) {
        return s === Vd || !!pw(s);
      });
      t.forEach(function (s) {
        if (!(s.length > 0) || !zd(s[0]) || s[0].type === "descendant") {
          if (i && !$d(s)) {
            s.unshift(lw);
          } else {
            return;
          }
        }
        s.unshift(hw);
      });
    }
    function ii(t, n, i) {
      t = t.filter(function (o) {
        return o.length > 0;
      });
      t.forEach(ow);
      var s = Array.isArray(i);
      i = n && n.context || i;
      if (i && !s) {
        i = [i];
      }
      dw(t, i);
      return t.map(function (o) {
        return gw(o, n, i, s);
      }).reduce(_w, hr);
    }
    function zd(t) {
      return cw[t.type] < 0;
    }
    function gw(t, n, i, s) {
      var o = s && t[0].name === "scope" && t[1].type === "descendant";
      return t.reduce(function (c, l, g) {
        if (c === hr) {
          return c;
        } else {
          return aw[l.type](c, l, n, i, o && g === 1);
        }
      }, n && n.rootFunc || ri);
    }
    function _w(t, n) {
      if (n === hr || t === ri) {
        return t;
      } else if (t === hr || n === ri) {
        return n;
      } else {
        return function (s) {
          return t(s) || n(s);
        };
      }
    }
    var vw = Pu();
    var bo = vw.filters;
    var Ud = ni.existsOne;
    var yo = ni.isTag;
    var Ao = ni.getChildren;
    function Xd(t) {
      return t.some(zd);
    }
    bo.not = function (t, n, i, s) {
      var o = {
        xmlMode: !!i && !!i.xmlMode,
        strict: !!i && !!i.strict
      };
      if (o.strict && (n.length > 1 || n.some(Xd))) {
        throw new SyntaxError("complex selectors in :not aren't allowed in strict mode");
      }
      var c = ii(n, o, s);
      if (c === hr) {
        return t;
      } else if (c === ri) {
        return hr;
      } else {
        return function (l) {
          return !c(l) && t(l);
        };
      }
    };
    bo.has = function (t, n, i) {
      var s = {
        xmlMode: !!i && !!i.xmlMode,
        strict: !!i && !!i.strict
      };
      var o = n.some(Xd) ? [Vd] : null;
      var c = ii(n, s, o);
      if (c === hr) {
        return hr;
      } else if (c === ri) {
        return function (l) {
          return Ao(l).some(yo) && t(l);
        };
      } else {
        c = Gd(c);
        if (o) {
          return function (g) {
            return t(g) && (o[0] = g, Ud(c, Ao(g)));
          };
        } else {
          return function (g) {
            return t(g) && Ud(c, Ao(g));
          };
        }
      }
    };
    bo.matches = function (t, n, i, s) {
      var o = {
        xmlMode: !!i && !!i.xmlMode,
        strict: !!i && !!i.strict,
        rootFunc: t
      };
      return ii(n, o, s);
    };
  });
  var wo = O((lx, Qd) => {
    "use strict";

    Qd.exports = Ce;
    var Kd = Pu();
    var Gu = pn();
    var mw = Gu.findOne;
    var Aw = Gu.findAll;
    var bw = Gu.getChildren;
    var yw = Gu.removeSubsets;
    var jd = dn().falseFunc;
    var ui = Yd();
    var Zd = ui.compileUnsafe;
    var Dw = ui.compileToken;
    function Jd(t) {
      return function (i, s, o) {
        if (typeof i != "function") {
          i = Zd(i, o, s);
        }
        if (Array.isArray(s)) {
          s = yw(s);
        } else {
          s = bw(s);
        }
        return t(i, s);
      };
    }
    var Do = Jd(function (n, i) {
      if (n === jd || !i || i.length === 0) {
        return [];
      } else {
        return Aw(n, i);
      }
    });
    var ww = Jd(function (n, i) {
      if (n === jd || !i || i.length === 0) {
        return null;
      } else {
        return mw(n, i);
      }
    });
    function Ew(t, n, i) {
      return (typeof n == "function" ? n : ui(n, i))(t);
    }
    function Ce(t, n, i) {
      return Do(t, n, i);
    }
    Ce.compile = ui;
    Ce.filters = Kd.filters;
    Ce.pseudos = Kd.pseudos;
    Ce.selectAll = Do;
    Ce.selectOne = ww;
    Ce.is = Ew;
    Ce.parse = ui;
    Ce.iterate = Do;
    Ce._compileUnsafe = Zd;
    Ce._compileToken = Dw;
  });
  var Wu = O(Ie => {
    var xw = wo();
    var Cw = Xn();
    var Sw = Fu();
    var si = fr();
    Ie.load = function (t, n) {
      var i = $u();
      n = si.defaults(n || {}, i.prototype.options);
      var s = Cw(t, n);
      function o(c, l, g, d) {
        if (this instanceof o) {
          d = si.defaults(d || {}, n);
          return i.call(this, c, l, g || s, d);
        } else {
          return new o(c, l, g, d);
        }
      }
      o.prototype = Object.create(i.prototype);
      o.prototype.constructor = o;
      o.fn = o.prototype;
      o.prototype._originalRoot = s;
      si.merge(o, Ie);
      o._root = s;
      o._options = n;
      return o;
    };
    function t2(t, n, i) {
      if (n) {
        if (typeof n == "string") {
          n = xw(n, t._root, i);
        }
      } else if (t._root && t._root.children) {
        n = t._root.children;
      } else {
        return "";
      }
      return Sw(n, i);
    }
    Ie.html = function (t, n) {
      var i = $u();
      if (Object.prototype.toString.call(t) === "[object Object]" && !n && !("length" in t) && !("type" in t)) {
        n = t;
        t = undefined;
      }
      n = si.defaults(n || {}, this._options, i.prototype.options);
      return t2(this, t, n);
    };
    Ie.xml = function (t) {
      var n = si.defaults({
        xmlMode: true
      }, this._options);
      return t2(this, t, n);
    };
    Ie.text = function (t) {
      if (!t) {
        return "";
      }
      var n = "";
      for (var i = t.length, s, o = 0; o < i; o++) {
        s = t[o];
        if (s.type === "text") {
          n += s.data;
        } else if (s.children && s.type !== "comment") {
          n += Ie.text(s.children);
        }
      }
      return n;
    };
    Ie.parseHTML = function (t, n, i) {
      var s;
      if (!t || typeof t != "string") {
        return null;
      } else {
        if (typeof n == "boolean") {
          i = n;
        }
        s = this.load(t);
        if (!i) {
          s("script").remove();
        }
        return s.root()[0].children.slice();
      }
    };
    Ie.root = function () {
      return this(this._root);
    };
    Ie.contains = function (t, n) {
      if (n === t) {
        return false;
      }
      while (n && n !== n.parent) {
        n = n.parent;
        if (n === t) {
          return true;
        }
      }
      return false;
    };
  });
  var u2 = O(Zt => {
    var gn = fr();
    var Tw = Wu();
    var zu = fn();
    var kr = zu.isTag;
    var Se = zu.domEach;
    var oi = Object.prototype.hasOwnProperty;
    var qw = zu.camelCase;
    var Lw = zu.cssCase;
    var ci = /\s+/;
    var Vu = "data-";
    var e2 = {
      null: null,
      true: true,
      false: false
    };
    var Co = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;
    var Bw = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
    function fi(t, n) {
      if (!!t && !!kr(t)) {
        t.attribs ||= {};
        if (!n) {
          return t.attribs;
        }
        if (oi.call(t.attribs, n)) {
          if (Co.test(n)) {
            return n;
          } else {
            return t.attribs[n];
          }
        }
        if (t.name === "option" && n === "value") {
          return Tw.text(t.children);
        }
        if (t.name === "input" && (t.attribs.type === "radio" || t.attribs.type === "checkbox") && n === "value") {
          return "on";
        }
      }
    }
    function ai(t, n, i) {
      if (i === null) {
        i2(t, n);
      } else {
        t.attribs[n] = i + "";
      }
    }
    Zt.attr = function (t, n) {
      if (typeof t == "object" || n !== undefined) {
        if (typeof n == "function") {
          return Se(this, function (i, s) {
            ai(s, t, n.call(s, i, s.attribs[t]));
          });
        } else {
          return Se(this, function (i, s) {
            if (kr(s)) {
              if (typeof t == "object") {
                gn.each(t, function (o, c) {
                  ai(s, c, o);
                });
              } else {
                ai(s, t, n);
              }
            }
          });
        }
      } else {
        return fi(this[0], t);
      }
    };
    function r2(t, n) {
      if (t.hasOwnProperty(n)) {
        return t[n];
      } else if (Co.test(n)) {
        return fi(t, n) !== undefined;
      } else {
        return fi(t, n);
      }
    }
    function Eo(t, n, i) {
      t[n] = Co.test(n) ? !!i : i;
    }
    Zt.prop = function (t, n) {
      var i = 0;
      var s;
      if (typeof t == "string" && n === undefined) {
        switch (t) {
          case "style":
            s = this.css();
            gn.each(s, function (o, c) {
              s[i++] = c;
            });
            s.length = i;
            break;
          case "tagName":
          case "nodeName":
            s = this[0].name.toUpperCase();
            break;
          default:
            s = r2(this[0], t);
        }
        return s;
      }
      if (typeof t == "object" || n !== undefined) {
        if (typeof n == "function") {
          return Se(this, function (o, c) {
            Eo(c, t, n.call(c, o, r2(c, t)));
          });
        } else {
          return Se(this, function (o, c) {
            if (kr(c)) {
              if (typeof t == "object") {
                gn.each(t, function (l, g) {
                  Eo(c, g, l);
                });
              } else {
                Eo(c, t, n);
              }
            }
          });
        }
      }
    };
    function Fw(t, n, i) {
      t.data ||= {};
      if (typeof n == "object") {
        return gn.extend(t.data, n);
      }
      if (typeof n == "string" && i !== undefined) {
        t.data[n] = i;
      } else if (typeof n == "object") {
        gn.exend(t.data, n);
      }
    }
    function n2(t, n) {
      var i = arguments.length === 1;
      var s;
      var o;
      var c;
      var l;
      var g;
      var d;
      var v;
      if (i) {
        s = Object.keys(t.attribs).filter(function (A) {
          return A.slice(0, Vu.length) === Vu;
        });
        c = s.map(function (A) {
          return qw(A.slice(Vu.length));
        });
      } else {
        s = [Vu + Lw(n)];
        c = [n];
      }
      d = 0;
      v = s.length;
      for (; d < v; ++d) {
        o = s[d];
        l = c[d];
        if (oi.call(t.attribs, o)) {
          g = t.attribs[o];
          if (oi.call(e2, g)) {
            g = e2[g];
          } else if (g === String(Number(g))) {
            g = Number(g);
          } else if (Bw.test(g)) {
            try {
              g = JSON.parse(g);
            } catch (A) {}
          }
          t.data[l] = g;
        }
      }
      if (i) {
        return t.data;
      } else {
        return g;
      }
    }
    Zt.data = function (t, n) {
      var i = this[0];
      if (!!i && !!kr(i)) {
        i.data ||= {};
        if (t) {
          if (typeof t == "object" || n !== undefined) {
            Se(this, function (s, o) {
              Fw(o, t, n);
            });
            return this;
          } else if (oi.call(i.data, t)) {
            return i.data[t];
          } else {
            return n2(i, t);
          }
        } else {
          return n2(i);
        }
      }
    };
    Zt.val = function (t) {
      var n = arguments.length === 0;
      var i = this[0];
      if (i) {
        switch (i.name) {
          case "textarea":
            return this.text(t);
          case "input":
            if (this.attr("type") === "radio") {
              if (n) {
                return this.attr("value");
              } else {
                this.attr("value", t);
                return this;
              }
            } else {
              return this.attr("value", t);
            }
          case "select":
            var s = this.find("option:selected");
            var o;
            if (s === undefined) {
              return;
            }
            if (!n) {
              if (!this.attr().hasOwnProperty("multiple") && typeof t == "object") {
                return this;
              }
              if (typeof t != "object") {
                t = [t];
              }
              this.find("option").removeAttr("selected");
              for (var c = 0; c < t.length; c++) {
                this.find("option[value=\"" + t[c] + "\"]").attr("selected", "");
              }
              return this;
            }
            o = s.attr("value");
            if (this.attr().hasOwnProperty("multiple")) {
              o = [];
              Se(s, function (l, g) {
                o.push(fi(g, "value"));
              });
            }
            return o;
          case "option":
            if (n) {
              return this.attr("value");
            } else {
              this.attr("value", t);
              return this;
            }
        }
      }
    };
    function i2(t, n) {
      if (!!t.attribs && !!oi.call(t.attribs, n)) {
        delete t.attribs[n];
      }
    }
    Zt.removeAttr = function (t) {
      Se(this, function (n, i) {
        i2(i, t);
      });
      return this;
    };
    Zt.hasClass = function (t) {
      return gn.some(this, function (n) {
        var i = n.attribs;
        var s = i && i.class;
        var o = -1;
        var c;
        if (s) {
          while ((o = s.indexOf(t, o + 1)) > -1) {
            c = o + t.length;
            if ((o === 0 || ci.test(s[o - 1])) && (c === s.length || ci.test(s[c]))) {
              return true;
            }
          }
        }
      });
    };
    Zt.addClass = function (t) {
      if (typeof t == "function") {
        return Se(this, function (v, A) {
          var w = A.attribs.class || "";
          Zt.addClass.call([A], t.call(A, v, w));
        });
      }
      if (!t || typeof t != "string") {
        return this;
      }
      var n = t.split(ci);
      for (var i = this.length, s = 0; s < i; s++) {
        if (kr(this[s])) {
          var o = fi(this[s], "class");
          var c;
          var l;
          if (!o) {
            ai(this[s], "class", n.join(" ").trim());
          } else {
            l = " " + o + " ";
            c = n.length;
            for (var g = 0; g < c; g++) {
              var d = n[g] + " ";
              if (l.indexOf(" " + d) < 0) {
                l += d;
              }
            }
            ai(this[s], "class", l.trim());
          }
        }
      }
      return this;
    };
    function xo(t) {
      if (t) {
        return t.trim().split(ci);
      } else {
        return [];
      }
    }
    Zt.removeClass = function (t) {
      var n;
      var i;
      var s;
      if (typeof t == "function") {
        return Se(this, function (o, c) {
          Zt.removeClass.call([c], t.call(c, o, c.attribs.class || ""));
        });
      } else {
        n = xo(t);
        i = n.length;
        s = arguments.length === 0;
        return Se(this, function (o, c) {
          if (kr(c)) {
            if (s) {
              c.attribs.class = "";
            } else {
              var l = xo(c.attribs.class);
              var g;
              var d;
              for (var v = 0; v < i; v++) {
                g = l.indexOf(n[v]);
                if (g >= 0) {
                  l.splice(g, 1);
                  d = true;
                  v--;
                }
              }
              if (d) {
                c.attribs.class = l.join(" ");
              }
            }
          }
        });
      }
    };
    Zt.toggleClass = function (t, n) {
      if (typeof t == "function") {
        return Se(this, function (A, w) {
          Zt.toggleClass.call([w], t.call(w, A, w.attribs.class || "", n), n);
        });
      }
      if (!t || typeof t != "string") {
        return this;
      }
      var i = t.split(ci);
      var s = i.length;
      var o = typeof n == "boolean" ? n ? 1 : -1 : 0;
      for (var c = this.length, l, g, d = 0; d < c; d++) {
        if (kr(this[d])) {
          l = xo(this[d].attribs.class);
          for (var v = 0; v < s; v++) {
            g = l.indexOf(i[v]);
            if (o >= 0 && g < 0) {
              l.push(i[v]);
            } else if (o <= 0 && g >= 0) {
              l.splice(g, 1);
            }
          }
          this[d].attribs.class = l.join(" ");
        }
      }
      return this;
    };
    Zt.is = function (t) {
      if (t) {
        return this.filter(t).length > 0;
      } else {
        return false;
      }
    };
  });
  var f2 = O(j => {
    var Mt = fr();
    var _n = wo();
    var s2 = fn();
    var a2 = s2.domEach;
    var Rw = an().DomUtils.uniqueSort;
    var Ne = s2.isTag;
    j.find = function (t) {
      var n = Mt.reduce(this, function (c, l) {
        return c.concat(Mt.filter(l.children, Ne));
      }, []);
      var i = this.constructor.contains;
      var s;
      if (t && typeof t != "string") {
        if (t.cheerio) {
          s = t.get();
        } else {
          s = [t];
        }
        return this._make(s.filter(function (c) {
          var l;
          var g;
          l = 0;
          g = this.length;
          for (; l < g; ++l) {
            if (i(this[l], c)) {
              return true;
            }
          }
        }, this));
      }
      var o = {
        __proto__: this.options,
        context: this.toArray()
      };
      return this._make(_n(t, n, o));
    };
    j.parent = function (t) {
      var n = [];
      a2(this, function (i, s) {
        var o = s.parent;
        if (o && n.indexOf(o) < 0) {
          n.push(o);
        }
      });
      if (arguments.length) {
        n = j.filter.call(n, t, this);
      }
      return this._make(n);
    };
    j.parents = function (t) {
      var n = [];
      this.get().reverse().forEach(function (i) {
        c2(this, i.parent, t, Infinity).forEach(function (s) {
          if (n.indexOf(s) === -1) {
            n.push(s);
          }
        });
      }, this);
      return this._make(n);
    };
    j.parentsUntil = function (t, n) {
      var i = [];
      var s;
      var o;
      if (typeof t == "string") {
        s = _n(t, this.parents().toArray(), this.options)[0];
      } else if (t && t.cheerio) {
        o = t.toArray();
      } else if (t) {
        s = t;
      }
      this.toArray().reverse().forEach(function (c) {
        while ((c = c.parent) && (s && c !== s || o && o.indexOf(c) === -1 || !s && !o)) {
          if (Ne(c) && i.indexOf(c) === -1) {
            i.push(c);
          }
        }
      }, this);
      return this._make(n ? _n(n, i, this.options) : i);
    };
    j.closest = function (t) {
      var n = [];
      if (t) {
        a2(this, function (i, s) {
          var o = c2(this, s, t, 1)[0];
          if (o && n.indexOf(o) < 0) {
            n.push(o);
          }
        }.bind(this));
        return this._make(n);
      } else {
        return this._make(n);
      }
    };
    j.next = function (t) {
      if (!this[0]) {
        return this;
      }
      var n = [];
      Mt.forEach(this, function (i) {
        while (i = i.next) {
          if (Ne(i)) {
            n.push(i);
            return;
          }
        }
      });
      if (t) {
        return j.filter.call(n, t, this);
      } else {
        return this._make(n);
      }
    };
    j.nextAll = function (t) {
      if (!this[0]) {
        return this;
      }
      var n = [];
      Mt.forEach(this, function (i) {
        while (i = i.next) {
          if (Ne(i) && n.indexOf(i) === -1) {
            n.push(i);
          }
        }
      });
      if (t) {
        return j.filter.call(n, t, this);
      } else {
        return this._make(n);
      }
    };
    j.nextUntil = function (t, n) {
      if (!this[0]) {
        return this;
      }
      var i = [];
      var s;
      var o;
      if (typeof t == "string") {
        s = _n(t, this.nextAll().get(), this.options)[0];
      } else if (t && t.cheerio) {
        o = t.get();
      } else if (t) {
        s = t;
      }
      Mt.forEach(this, function (c) {
        while ((c = c.next) && (s && c !== s || o && o.indexOf(c) === -1 || !s && !o)) {
          if (Ne(c) && i.indexOf(c) === -1) {
            i.push(c);
          }
        }
      });
      if (n) {
        return j.filter.call(i, n, this);
      } else {
        return this._make(i);
      }
    };
    j.prev = function (t) {
      if (!this[0]) {
        return this;
      }
      var n = [];
      Mt.forEach(this, function (i) {
        while (i = i.prev) {
          if (Ne(i)) {
            n.push(i);
            return;
          }
        }
      });
      if (t) {
        return j.filter.call(n, t, this);
      } else {
        return this._make(n);
      }
    };
    j.prevAll = function (t) {
      if (!this[0]) {
        return this;
      }
      var n = [];
      Mt.forEach(this, function (i) {
        while (i = i.prev) {
          if (Ne(i) && n.indexOf(i) === -1) {
            n.push(i);
          }
        }
      });
      if (t) {
        return j.filter.call(n, t, this);
      } else {
        return this._make(n);
      }
    };
    j.prevUntil = function (t, n) {
      if (!this[0]) {
        return this;
      }
      var i = [];
      var s;
      var o;
      if (typeof t == "string") {
        s = _n(t, this.prevAll().get(), this.options)[0];
      } else if (t && t.cheerio) {
        o = t.get();
      } else if (t) {
        s = t;
      }
      Mt.forEach(this, function (c) {
        while ((c = c.prev) && (s && c !== s || o && o.indexOf(c) === -1 || !s && !o)) {
          if (Ne(c) && i.indexOf(c) === -1) {
            i.push(c);
          }
        }
      });
      if (n) {
        return j.filter.call(i, n, this);
      } else {
        return this._make(i);
      }
    };
    j.siblings = function (t) {
      var n = this.parent();
      var i = Mt.filter(n ? n.children() : this.siblingsAndMe(), Mt.bind(function (s) {
        return Ne(s) && !this.is(s);
      }, this));
      if (t !== undefined) {
        return j.filter.call(i, t, this);
      } else {
        return this._make(i);
      }
    };
    j.children = function (t) {
      var n = Mt.reduce(this, function (i, s) {
        return i.concat(Mt.filter(s.children, Ne));
      }, []);
      if (t === undefined) {
        return this._make(n);
      } else {
        return j.filter.call(n, t, this);
      }
    };
    j.contents = function () {
      return this._make(Mt.reduce(this, function (t, n) {
        t.push.apply(t, n.children);
        return t;
      }, []));
    };
    j.each = function (t) {
      for (var n = 0, i = this.length; n < i && t.call(this[n], n, this[n]) !== false;) {
        ++n;
      }
      return this;
    };
    j.map = function (t) {
      return this._make(Mt.reduce(this, function (n, i, s) {
        var o = t.call(i, s, i);
        if (o == null) {
          return n;
        } else {
          return n.concat(o);
        }
      }, []));
    };
    function o2(t) {
      return function (n, i) {
        var s;
        i = i || this;
        if (typeof n == "string") {
          s = _n.compile(n, i.options);
        } else if (typeof n == "function") {
          s = function (o, c) {
            return n.call(o, c, o);
          };
        } else if (n.cheerio) {
          s = n.is.bind(n);
        } else {
          s = function (o) {
            return n === o;
          };
        }
        return i._make(t(this, s));
      };
    }
    j.filter = o2(Mt.filter);
    j.not = o2(Mt.reject);
    j.has = function (t) {
      var n = this;
      return j.filter.call(this, function () {
        return n._make(this).find(t).length > 0;
      });
    };
    j.first = function () {
      if (this.length > 1) {
        return this._make(this[0]);
      } else {
        return this;
      }
    };
    j.last = function () {
      if (this.length > 1) {
        return this._make(this[this.length - 1]);
      } else {
        return this;
      }
    };
    j.eq = function (t) {
      t = +t;
      if (t === 0 && this.length <= 1) {
        return this;
      } else {
        if (t < 0) {
          t = this.length + t;
        }
        if (this[t]) {
          return this._make(this[t]);
        } else {
          return this._make([]);
        }
      }
    };
    j.get = function (t) {
      if (t == null) {
        return Array.prototype.slice.call(this);
      } else {
        return this[t < 0 ? this.length + t : t];
      }
    };
    j.index = function (t) {
      var n;
      var i;
      if (arguments.length === 0) {
        n = this.parent().children();
        i = this[0];
      } else if (typeof t == "string") {
        n = this._make(t);
        i = this[0];
      } else {
        n = this;
        i = t.cheerio ? t[0] : t;
      }
      return n.get().indexOf(i);
    };
    j.slice = function () {
      return this._make([].slice.apply(this, arguments));
    };
    function c2(t, n, i, s) {
      for (var o = []; n && o.length < s;) {
        if (!i || j.filter.call([n], i, t).length) {
          o.push(n);
        }
        n = n.parent;
      }
      return o;
    }
    j.end = function () {
      return this.prevObject || this._make([]);
    };
    j.add = function (t, n) {
      var i = this._make(t, n);
      for (var s = Rw(i.get().concat(this.get())), o = 0; o < s.length; ++o) {
        i[o] = s[o];
      }
      i.length = s.length;
      return i;
    };
    j.addBack = function (t) {
      return this.add(arguments.length ? this.prevObject.filter(t) : this.prevObject);
    };
  });
  var d2 = O(Ct => {
    var vn = fr();
    var l2 = Xn();
    var Mr = Wu();
    var Xu = l2.update;
    var h2 = l2.evaluate;
    var To = fn();
    var Te = To.domEach;
    var So = To.cloneDom;
    var Ow = To.isHtml;
    var qo = Array.prototype.slice;
    Ct._makeDomArray = function (n, i) {
      if (n == null) {
        return [];
      } else if (n.cheerio) {
        if (i) {
          return So(n.get(), n.options);
        } else {
          return n.get();
        }
      } else if (Array.isArray(n)) {
        return vn.flatten(n.map(function (s) {
          return this._makeDomArray(s, i);
        }, this));
      } else if (typeof n == "string") {
        return h2(n, this.options);
      } else if (i) {
        return So([n]);
      } else {
        return [n];
      }
    };
    function p2(t) {
      return function () {
        var n = qo.call(arguments);
        var i = this.length - 1;
        return Te(this, function (s, o) {
          var c;
          var l;
          if (typeof n[0] == "function") {
            l = n[0].call(o, s, Mr.html(o.children));
          } else {
            l = n;
          }
          c = this._makeDomArray(l, s < i);
          t(c, o.children, o);
        });
      };
    }
    function pr(t, n, i, s, o) {
      var c = [n, i].concat(s);
      var l = t[n - 1] || null;
      var g = t[n] || null;
      var d;
      var v;
      var A;
      var w;
      var T;
      d = 0;
      v = s.length;
      for (; d < v; ++d) {
        w = s[d];
        T = w.parent || w.root;
        A = T && T.children.indexOf(s[d]);
        if (T && A > -1) {
          T.children.splice(A, 1);
          if (o === T && n > A) {
            c[0]--;
          }
        }
        w.root = null;
        w.parent = o;
        if (w.prev) {
          w.prev.next = w.next || null;
        }
        if (w.next) {
          w.next.prev = w.prev || null;
        }
        w.prev = s[d - 1] || l;
        w.next = s[d + 1] || g;
      }
      if (l) {
        l.next = s[0];
      }
      if (g) {
        g.prev = s[s.length - 1];
      }
      return t.splice.apply(t, c);
    }
    Ct.appendTo = function (t) {
      if (!t.cheerio) {
        t = this.constructor.call(this.constructor, t, null, this._originalRoot);
      }
      t.append(this);
      return this;
    };
    Ct.prependTo = function (t) {
      if (!t.cheerio) {
        t = this.constructor.call(this.constructor, t, null, this._originalRoot);
      }
      t.prepend(this);
      return this;
    };
    Ct.append = p2(function (t, n, i) {
      pr(n, n.length, 0, t, i);
    });
    Ct.prepend = p2(function (t, n, i) {
      pr(n, 0, 0, t, i);
    });
    Ct.wrap = function (t) {
      var n = typeof t == "function" && t;
      var i = this.length - 1;
      vn.forEach(this, vn.bind(function (s, o) {
        var c = s.parent || s.root;
        var l = c.children;
        var g;
        var d;
        if (c) {
          if (n) {
            t = n.call(s, o);
          }
          if (typeof t == "string" && !Ow(t)) {
            t = this.parents().last().find(t).clone();
          }
          g = this._makeDomArray(t, o < i).slice(0, 1);
          d = l.indexOf(s);
          Xu([s], g[0]);
          pr(l, d, 0, g, c);
        }
      }, this));
      return this;
    };
    Ct.after = function () {
      var t = qo.call(arguments);
      var n = this.length - 1;
      Te(this, function (i, s) {
        var o = s.parent || s.root;
        if (o) {
          var c = o.children;
          var l = c.indexOf(s);
          var g;
          var d;
          if (!(l < 0)) {
            if (typeof t[0] == "function") {
              g = t[0].call(s, i, Mr.html(s.children));
            } else {
              g = t;
            }
            d = this._makeDomArray(g, i < n);
            pr(c, l + 1, 0, d, o);
          }
        }
      });
      return this;
    };
    Ct.insertAfter = function (t) {
      var n = [];
      var i = this;
      if (typeof t == "string") {
        t = this.constructor.call(this.constructor, t, null, this._originalRoot);
      }
      t = this._makeDomArray(t);
      i.remove();
      Te(t, function (s, o) {
        var c = i._makeDomArray(i.clone());
        var l = o.parent || o.root;
        if (l) {
          var g = l.children;
          var d = g.indexOf(o);
          if (!(d < 0)) {
            pr(g, d + 1, 0, c, l);
            n.push(c);
          }
        }
      });
      return this.constructor.call(this.constructor, this._makeDomArray(n));
    };
    Ct.before = function () {
      var t = qo.call(arguments);
      var n = this.length - 1;
      Te(this, function (i, s) {
        var o = s.parent || s.root;
        if (o) {
          var c = o.children;
          var l = c.indexOf(s);
          var g;
          var d;
          if (!(l < 0)) {
            if (typeof t[0] == "function") {
              g = t[0].call(s, i, Mr.html(s.children));
            } else {
              g = t;
            }
            d = this._makeDomArray(g, i < n);
            pr(c, l, 0, d, o);
          }
        }
      });
      return this;
    };
    Ct.insertBefore = function (t) {
      var n = [];
      var i = this;
      if (typeof t == "string") {
        t = this.constructor.call(this.constructor, t, null, this._originalRoot);
      }
      t = this._makeDomArray(t);
      i.remove();
      Te(t, function (s, o) {
        var c = i._makeDomArray(i.clone());
        var l = o.parent || o.root;
        if (l) {
          var g = l.children;
          var d = g.indexOf(o);
          if (!(d < 0)) {
            pr(g, d, 0, c, l);
            n.push(c);
          }
        }
      });
      return this.constructor.call(this.constructor, this._makeDomArray(n));
    };
    Ct.remove = function (t) {
      var n = this;
      if (t) {
        n = n.filter(t);
      }
      Te(n, function (i, s) {
        var o = s.parent || s.root;
        if (o) {
          var c = o.children;
          var l = c.indexOf(s);
          if (!(l < 0)) {
            c.splice(l, 1);
            if (s.prev) {
              s.prev.next = s.next;
            }
            if (s.next) {
              s.next.prev = s.prev;
            }
            s.prev = s.next = s.parent = s.root = null;
          }
        }
      });
      return this;
    };
    Ct.replaceWith = function (t) {
      var n = this;
      Te(this, function (i, s) {
        var o = s.parent || s.root;
        if (o) {
          var c = o.children;
          var l = n._makeDomArray(typeof t == "function" ? t.call(s, i, s) : t);
          var g;
          Xu(l, null);
          g = c.indexOf(s);
          pr(c, g, 1, l, o);
          s.parent = s.prev = s.next = s.root = null;
        }
      });
      return this;
    };
    Ct.empty = function () {
      Te(this, function (t, n) {
        vn.each(n.children, function (i) {
          i.next = i.prev = i.parent = null;
        });
        n.children.length = 0;
      });
      return this;
    };
    Ct.html = function (t) {
      if (t === undefined) {
        if (!this[0] || !this[0].children) {
          return null;
        } else {
          return Mr.html(this[0].children, this.options);
        }
      }
      var n = this.options;
      Te(this, function (i, s) {
        vn.each(s.children, function (c) {
          c.next = c.prev = c.parent = null;
        });
        var o = t.cheerio ? t.clone().get() : h2("" + t, n);
        Xu(o, s);
      });
      return this;
    };
    Ct.toString = function () {
      return Mr.html(this, this.options);
    };
    Ct.text = function (t) {
      if (t === undefined) {
        return Mr.text(this);
      } else if (typeof t == "function") {
        return Te(this, function (n, i) {
          var s = [i];
          return Ct.text.call(s, t.call(i, n, Mr.text(s)));
        });
      } else {
        Te(this, function (n, i) {
          vn.each(i.children, function (o) {
            o.next = o.prev = o.parent = null;
          });
          var s = {
            data: "" + t,
            type: "text",
            parent: i,
            prev: null,
            next: null,
            children: []
          };
          Xu(s, i);
        });
        return this;
      }
    };
    Ct.clone = function () {
      return this._make(So(this.get(), this.options));
    };
  });
  var m2 = O(v2 => {
    var Iw = fr();
    var Nw = fn().domEach;
    var kw = Object.prototype.toString;
    v2.css = function (t, n) {
      if (arguments.length === 2 || kw.call(t) === "[object Object]") {
        return Nw(this, function (i, s) {
          g2(s, t, n, i);
        });
      } else {
        return _2(this[0], t);
      }
    };
    function g2(t, n, i, s) {
      if (typeof n == "string") {
        var o = _2(t);
        if (typeof i == "function") {
          i = i.call(t, s, o[n]);
        }
        if (i === "") {
          delete o[n];
        } else if (i != null) {
          o[n] = i;
        }
        t.attribs.style = Mw(o);
      } else if (typeof n == "object") {
        Object.keys(n).forEach(function (c) {
          g2(t, c, n[c]);
        });
      }
    }
    function _2(t, n) {
      var i = Pw(t.attribs.style);
      if (typeof n == "string") {
        return i[n];
      } else if (Array.isArray(n)) {
        return Iw.pick(i, n);
      } else {
        return i;
      }
    }
    function Mw(t) {
      return Object.keys(t || {}).reduce(function (n, i) {
        return n += (n ? " " : "") + i + ": " + t[i] + ";";
      }, "");
    }
    function Pw(t) {
      t = (t || "").trim();
      if (t) {
        return t.split(";").reduce(function (n, i) {
          var s = i.indexOf(":");
          if (!(s < 1) && s !== i.length - 1) {
            n[i.slice(0, s).trim()] = i.slice(s + 1).trim();
          }
          return n;
        }, {});
      } else {
        return {};
      }
    }
  });
  var D2 = O(y2 => {
    var Uw = fr();
    var A2 = "input,select,textarea,keygen";
    var b2 = /\r?\n/g;
    y2.serializeArray = function () {
      var t = this.constructor;
      return this.map(function () {
        var n = this;
        var i = t(n);
        if (n.name === "form") {
          return i.find(A2).toArray();
        } else {
          return i.filter(A2).toArray();
        }
      }).filter("[name!=\"\"]:not(:disabled):not(:submit, :button, :image, :reset, :file):matches([checked], :not(:checkbox, :radio))").map(function (n, i) {
        var s = t(i);
        var o = s.attr("name");
        var c = s.val();
        if (c == null) {
          return null;
        } else if (Array.isArray(c)) {
          return Uw.map(c, function (l) {
            return {
              name: o,
              value: l.replace(b2, `\r
`)
            };
          });
        } else {
          return {
            name: o,
            value: c.replace(b2, `\r
`)
          };
        }
      }).get();
    };
  });
  var $u = O((mx, E2) => {
    var Lo = Xn();
    var w2 = fn().isHtml;
    var li = fr();
    var Hw = [u2(), f2(), d2(), m2(), D2()];
    var Jt = E2.exports = function (t, n, i, s) {
      if (this instanceof Jt) {
        this.options = li.defaults(s || {}, this.options);
        if (t) {
          if (i) {
            if (typeof i == "string") {
              i = Lo(i, this.options);
            }
            this._root = Jt.call(this, i);
          }
          if (t.cheerio) {
            return t;
          } else {
            if (Gw(t)) {
              t = [t];
            }
            if (Array.isArray(t)) {
              li.forEach(t, li.bind(function (o, c) {
                this[c] = o;
              }, this));
              this.length = t.length;
              return this;
            } else if (typeof t == "string" && w2(t)) {
              return Jt.call(this, Lo(t, this.options).children);
            } else {
              if (n) {
                if (typeof n == "string") {
                  if (w2(n)) {
                    n = Lo(n, this.options);
                    n = Jt.call(this, n);
                  } else {
                    t = [n, t].join(" ");
                    n = this._root;
                  }
                } else if (!n.cheerio) {
                  n = Jt.call(this, n);
                }
              } else {
                n = this._root;
              }
              if (n) {
                return n.find(t);
              } else {
                return this;
              }
            }
          }
        } else {
          return this;
        }
      } else {
        return new Jt(t, n, i, s);
      }
    };
    li.extend(Jt, Wu());
    Jt.prototype.cheerio = "[cheerio object]";
    Jt.prototype.options = {
      withDomLvl1: true,
      normalizeWhitespace: false,
      xmlMode: false,
      decodeEntities: true
    };
    Jt.prototype.length = 0;
    Jt.prototype.splice = Array.prototype.splice;
    Jt.prototype._make = function (t, n) {
      var i = new this.constructor(t, n, this._root, this.options);
      i.prevObject = this;
      return i;
    };
    Jt.prototype.toArray = function () {
      return this.get();
    };
    Hw.forEach(function (t) {
      li.extend(Jt.prototype, t);
    });
    function Gw(t) {
      return t.name || t.type === "text" || t.type === "comment";
    }
  });
  var x2 = O((Ax, Ww) => {
    Ww.exports = {
      name: "cheerio-without-node-native",
      version: "0.20.2",
      description: "Cheerio build that excludes node native modules so that you can use it in platforms like React Native.",
      license: "MIT",
      keywords: ["htmlparser", "jquery", "selector", "scraper", "parser", "html"],
      repository: {
        type: "git",
        url: "git://github.com/oyyd/cheerio-without-node-native"
      },
      main: "./index.js",
      files: ["index.js", "lib"],
      engines: {
        node: ">= 0.6"
      },
      dependencies: {
        "css-select": "~1.2.0",
        "dom-serializer": "~0.1.0",
        entities: "~1.1.1",
        "htmlparser2-without-node-native": "^3.9.0",
        lodash: "^4.1.0"
      },
      devDependencies: {
        benchmark: "~1.0.0",
        coveralls: "~2.10",
        "expect.js": "~0.3.1",
        istanbul: "~0.2",
        jshint: "~2.5.1",
        mocha: "*",
        xyz: "~0.5.0"
      },
      scripts: {
        test: "make test"
      },
      optionalDependencies: {
        jsdom: "^7.0.2"
      }
    };
  });
  var S2 = O((Bo, C2) => {
    Bo = C2.exports = $u();
    Bo.version = x2().version;
  });
  function Oo(t) {
    return /^[\x00-\x7F\u00C0-\u024F\s\-,:!.'?&()0-9]+$/.test(t);
  }
  function q2(s, o) {
    return J(this, arguments, function* (t, n, i = {}) {
      var v;
      var A;
      var w;
      var T;
      var S;
      var L;
      let c = n === "movie" ? "movie" : "tv";
      let l = [];
      try {
        let B = `${Ro}/${c}/${t}?api_key=${Fo}&language=en-US`;
        let P = yield ot(B);
        if (P) {
          let $ = yield P.json();
          let N = (v = c === "movie" ? $.title : $.name) == null ? undefined : v.trim();
          let W = (A = c === "movie" ? $.original_title : $.original_name) == null ? undefined : A.trim();
          let pt = $.number_of_seasons;
          if (N) {
            l.push(N);
          }
          if (W && W !== N && Oo(W)) {
            l.push(W);
          }
          if (n === "tv" && i.season) {
            let yt = parseInt(i.season, 10);
            if (yt > 0 && N) {
              for (let Rt of T2) {
                let Qt = `${N} ${Rt(yt)}`;
                if (!l.includes(Qt)) {
                  l.push(Qt);
                }
              }
            }
            if (yt > 0 && W && W !== N && Oo(W)) {
              for (let Rt of T2) {
                let Qt = `${W} ${Rt(yt)}`;
                if (!l.includes(Qt)) {
                  l.push(Qt);
                }
              }
            }
          }
        }
        let Y = `${Ro}/${c}/${t}/translations?api_key=${Fo}`;
        let nt = yield ot(Y);
        if (nt) {
          let N = ((yield nt.json()).translations || []).find(pt => pt.iso_639_1 === "fr");
          let W = ((T = (w = N == null ? undefined : N.data) == null ? undefined : w.name) == null ? undefined : T.trim()) || ((L = (S = N == null ? undefined : N.data) == null ? undefined : S.title) == null ? undefined : L.trim());
          if (W && !l.includes(W)) {
            l.push(W);
          }
          if (n === "tv" && i.season && W) {
            let pt = parseInt(i.season, 10);
            if (pt > 0) {
              let yt = `${W} Saison ${pt}`;
              if (!l.includes(yt)) {
                l.push(yt);
              }
            }
          }
        }
        let ht = `${Ro}/${c}/${t}/alternative_titles?api_key=${Fo}`;
        let it = yield ot(ht);
        if (it) {
          let $ = yield it.json();
          let N = c === "movie" ? $.titles : $.results;
          if (N && Array.isArray(N)) {
            N.forEach(W => {
              var yt;
              let pt = (yt = W.title) == null ? undefined : yt.trim();
              if (pt && !l.some(Rt => Rt.toLowerCase() === pt.toLowerCase()) && Oo(pt)) {
                if (W.type === "Romaji" || W.iso_3166_1 === "US" || W.iso_3166_1 === "FR" || W.type === "Search Tag") {
                  l.splice(1, 0, pt);
                } else {
                  l.push(pt);
                }
              }
            });
          }
        }
      } catch (B) {
        console.error(`[Metadata] TMDB API error: ${B.message}`);
      }
      let g = new Set();
      let d = l.filter(B => {
        let P = B.toLowerCase();
        if (g.has(P)) {
          return false;
        } else {
          g.add(P);
          return true;
        }
      });
      console.log(`[Metadata] Titles for ${t}: ${d.join(" | ")}`);
      return d;
    });
  }
  var Fo;
  var Ro;
  var T2;
  var L2 = Un(() => {
    rn();
    Fo = "8265bd1679663a7ea12ac168da84d2e8";
    Ro = "https://api.themoviedb.org/3";
    T2 = [t => `Season ${t}`, t => `Saison ${t}`, t => `S${t}`];
  });
  function Io(i) {
    return J(this, arguments, function* (t, n = {}) {
      try {
        return yield ot(t, n);
      } catch (s) {
        console.error(`[ArmSync] Fetch failed: ${t}`, s.message);
        return null;
      }
    });
  }
  function B2(t, n) {
    return J(this, null, function* () {
      if (!t) {
        return null;
      }
      let i = yield Io(`${$w}/themoviedb?id=${t}`);
      if (i) {
        try {
          let c = yield i.json();
          let l = Array.isArray(c) ? c[0] : c;
          if (l && l.imdb) {
            return l.imdb;
          }
        } catch (c) {}
      }
      let s = `https://www.themoviedb.org/${n === "movie" ? "movie" : "tv"}/${t}`;
      let o = yield Io(s);
      if (o) {
        let l = (yield o.text()).match(/imdb\.com\/title\/(tt\d+)/);
        if (l) {
          return l[1];
        }
      }
      return null;
    });
  }
  function F2(t, n, i) {
    return J(this, null, function* () {
      var v;
      if (!t || n === 0) {
        return null;
      }
      let s = yield Io(`${Vw}/meta/series/${t}.json`);
      if (!s) {
        return null;
      }
      let o = yield s.json();
      if ((v = o == null ? undefined : o.meta) == null || !v.videos) {
        return null;
      }
      let c = o.meta.videos.filter(A => A.season > 0 && A.episode > 0).sort((A, w) => A.season - w.season || A.episode - w.episode);
      let l = [];
      let g = new Set();
      for (let A of c) {
        let w = `${A.season}-${A.episode}`;
        if (!g.has(w)) {
          g.add(w);
          l.push(A);
        }
      }
      let d = l.findIndex(A => A.season == n && A.episode == i);
      if (d !== -1) {
        let A = d + 1;
        console.log(`[ArmSync] Resolved: S${n}E${i} -> Absolute ${A}`);
        return A;
      }
      return null;
    });
  }
  var $w;
  var Vw;
  var R2 = Un(() => {
    rn();
    $w = "https://arm.haglund.dev/api/v2";
    Vw = "https://v3-cinemeta.strem.io";
  });
  function Xw(t) {
    return J(this, null, function* () {
      try {
        let n = yield xa(`${Ju}/template-php/defaut/fetch.php`, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Referer: Ju
          },
          body: `query=${encodeURIComponent(t)}`
        });
        let i = I2.default.load(n);
        let s = [];
        i("a[href*=\"/catalogue/\"]").each((o, c) => {
          let g = i(c).attr("href").match(/\/catalogue\/([^/]+)\/?/);
          if (!g) {
            return;
          }
          let d = g[1];
          if (s.some(T => T.slug === d)) {
            return;
          }
          let v = i(c).find(".asn-search-result-title").text().trim();
          let A = i(c).find(".asn-search-result-subtitle").text().trim();
          let w = Yw(v, A, t);
          s.push({
            slug: d,
            title: v,
            subtitle: A,
            score: w
          });
        });
        s.sort((o, c) => c.score - o.score);
        return s.map(o => o.slug);
      } catch (n) {
        return [];
      }
    });
  }
  function Yw(t, n, i) {
    let s = i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let o = t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let c = n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let l = 0;
    if (o === s) {
      return 100;
    }
    if (o.includes(s)) {
      l += 60;
    } else if (s.includes(o)) {
      l += 50;
    }
    let g = s.split(/[^a-z0-9]+/).filter(v => v.length > 2);
    let d = o.split(/[^a-z0-9]+/).filter(v => v.length > 2);
    for (let v of g) {
      if (d.includes(v)) {
        l += 15;
      }
    }
    for (let v of g) {
      if (c.includes(v) && !o.includes(v)) {
        l += 3;
      }
    }
    return l;
  }
  function Kw(t) {
    return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
  }
  function jw(t, n) {
    if (n.includes("sibnet")) {
      return "Sibnet";
    } else if (n.includes("vidmoly")) {
      return "Vidmoly";
    } else if (n.includes("sendvid")) {
      return "Sendvid";
    } else if (n.includes("voe")) {
      return "Voe";
    } else if (n.includes("stape") || n.includes("streamtape")) {
      return "Streamtape";
    } else if (n.includes("dood")) {
      return "Doodstream";
    } else if (n.includes("uqload") || n.includes("oneupload")) {
      return "Uqload";
    } else {
      return "Player";
    }
  }
  function Ku(t) {
    var o;
    let n = /var\s+([a-z0-9]+)\s*=\s*\[([\s\S]*?)\s*\];/gm;
    let i = [];
    let s;
    while ((s = n.exec(t)) !== null) {
      let c = ((o = s[2].match(/['"]([^'"]+)['"]/g)) == null ? undefined : o.map(l => l.slice(1, -1))) || [];
      i.push({
        varName: s[1],
        urls: c
      });
    }
    return i;
  }
  function ju(t, n, i) {
    return J(this, null, function* () {
      let s = `${Ju}/catalogue/${t}${n ? "/" + n : ""}/${i}/episodes.js`;
      try {
        return (yield xa(s)) || null;
      } catch (o) {
        return null;
      }
    });
  }
  function Zu(t, n, i, s) {
    let o = [];
    for (let {
      varName: c,
      urls: l
    } of t) {
      let g = l[s];
      if (g && g.startsWith("http")) {
        let d = i ? `Ep ${i} - ` : "";
        let v = Ea({
          name: `Anime-Sama (${n.toUpperCase()})`,
          title: `${jw(c, g)} - ${d}${n.toUpperCase()}`,
          url: g,
          quality: "HD",
          headers: {
            Referer: Ju
          }
        });
        o.push(v);
      }
    }
    return Promise.all(o).then(c => c.filter(l => l != null));
  }
  function Yu(l, g, d, v, A) {
    return J(this, arguments, function* (t, n, i, s, o, c = []) {
      let w = [s, ...c.filter(T => T !== s)];
      if (o === "movie") {
        let T = yield ju(t, "film", n);
        if (!T) {
          return [];
        }
        let S = Ku(T);
        if (S.length === 0) {
          return [];
        } else {
          return Zu(S, n, null, 0);
        }
      }
      for (let T of w) {
        let S = yield Zw(t, n, i, T);
        if (S.length > 0) {
          return S;
        }
      }
      return [];
    });
  }
  function Zw(t, n, i, s) {
    return J(this, null, function* () {
      let o = yield ju(t, `saison${i}`, n);
      if (o) {
        let l = Ku(o);
        if (l.length > 0) {
          let g = l[0].urls.length;
          if (s >= 1 && s <= g) {
            return Zu(l, n, s, s - 1);
          }
          let d = g;
          for (let v = 2; v <= 5; v++) {
            let A = yield ju(t, `saison${i}-${v}`, n);
            if (!A) {
              break;
            }
            let w = Ku(A);
            if (w.length === 0) {
              break;
            }
            let T = w[0].urls.length;
            let S = s - d;
            if (S >= 1 && S <= T) {
              return Zu(w, n, s, S - 1);
            }
            d += T;
          }
        }
      }
      let c = yield ju(t, "", n);
      if (c) {
        let l = Ku(c);
        if (l.length > 0) {
          let g = s - 1;
          if (g >= 0 && g < l[0].urls.length) {
            return Zu(l, n, s, g);
          }
        }
      }
      return [];
    });
  }
  function N2(t, n, i, s) {
    return J(this, null, function* () {
      let o = yield q2(t, n, {
        season: i
      });
      if (o.length === 0) {
        return [];
      }
      let c = [];
      if (n === "tv") {
        try {
          let S = yield B2(t, n);
          if (S) {
            let L = yield F2(S, i, s);
            if (L && L !== s) {
              c.push(L);
            }
          }
        } catch (S) {
          console.warn(`[Anime-Sama] ArmSync failed: ${S.message}`);
        }
      }
      let l = o[0];
      let g = Kw(l);
      let d = ["vostfr", "vf"];
      let v = [];
      let A = [];
      for (let S of d) {
        A.push(Yu(g, S, i, s, n, c));
      }
      let w = yield Promise.all(A);
      for (let S of w) {
        v.push(...S);
      }
      if (v.length === 0 && i > 1) {
        let S = `${g}-saison-${i}`;
        let L = [];
        for (let P of d) {
          L.push(Yu(S, P, i, s, n, c));
        }
        let B = yield Promise.all(L);
        for (let P of B) {
          v.push(...P);
        }
      }
      if (v.length === 0 && i > 1) {
        let S = `${g}-${i}`;
        let L = [];
        for (let P of d) {
          L.push(Yu(S, P, i, s, n, c));
        }
        let B = yield Promise.all(L);
        for (let P of B) {
          v.push(...P);
        }
      }
      if (v.length === 0) {
        let S = [];
        for (let Y of o.slice(0, zw)) {
          let nt = yield Xw(Y);
          for (let ht of nt) {
            if (!S.includes(ht)) {
              S.push(ht);
            }
            if (S.length >= O2) {
              break;
            }
          }
          if (S.length >= O2) {
            break;
          }
        }
        let L = new Set([g]);
        let B = [];
        for (let Y of S) {
          if (!L.has(Y)) {
            L.add(Y);
            for (let nt of d) {
              B.push(Yu(Y, nt, i, s, n, c));
            }
          }
        }
        let P = yield Promise.all(B);
        for (let Y of P) {
          v.push(...Y);
        }
      }
      let T = v.filter(S => S && S.isDirect);
      console.log(`[Anime-Sama] Total streams found: ${T.length}`);
      T.sort((S, L) => {
        let B = nt => nt && (nt.toUpperCase().includes("VF") || nt.toUpperCase().includes("FRENCH"));
        let P = B(S.name) || B(S.title);
        let Y = B(L.name) || B(L.title);
        if (P && !Y) {
          return -1;
        } else if (!P && Y) {
          return 1;
        } else {
          return 0;
        }
      });
      return T;
    });
  }
  var I2;
  var Ju;
  var zw;
  var O2;
  var k2 = Un(() => {
    Tl();
    I2 = Rb(S2());
    rn();
    L2();
    R2();
    Ju = "https://anime-sama.to";
    zw = 3;
    O2 = 3;
  });
  var tE = O((Ox, M2) => {
    k2();
    rn();
    var Jw = wl("NUVIO_TIMEOUT_ANIME_SAMA", 45000);
    function Qw(t, n, i, s) {
      return J(this, null, function* () {
        var c;
        let o = `Anime-Sama ${n} ${t} S${i}E${s}`;
        console.log(`[Anime-Sama] Request: ${o}`);
        try {
          let l = yield El(N2(t, n, i, s), Jw, o);
          return yield Sl(l, {
            includeCodec: true,
            includeFps: true
          });
        } catch (l) {
          if ((c = l.message) != null && c.includes("[Timeout]")) {
            console.warn(`[Anime-Sama] ${l.message}`);
          } else {
            console.error("[Anime-Sama] Error:", l);
          }
          return [];
        }
      });
    }
    M2.exports = {
      getStreams: Qw
    };
  });
  return tE();
})();
/*! Bundled license information:

eventemitter2/lib/eventemitter2.js:
  (*!
   * EventEmitter2
   * https://github.com/hij1nx/EventEmitter2
   *
   * Copyright (c) 2013 hij1nx
   * Licensed under the MIT license.
   *)

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/

if (typeof module !== "undefined" && module.exports) {
  module.exports = __provider;
}
if (__provider && __provider.getStreams) {
  if (typeof globalThis !== "undefined") {
    globalThis.getStreams = __provider.getStreams;
  }
  if (typeof global !== "undefined") {
    global.getStreams = __provider.getStreams;
  }
  if (typeof self !== "undefined") {
    self.getStreams = __provider.getStreams;
  }
}