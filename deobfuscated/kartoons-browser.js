const puppeteer = require('puppeteer-core');
const crypto = require('crypto');
const path = require('path');

const AES_KEY = "bca9e0df1a5abb32906ca3f63ac04cef";
const KARTONS_URL = "https://kartoons.me";
const API_BASE = "https://api.kartoons.me/api";

const CHROMIUM_PATHS = [
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/snap/bin/chromium',
];

let browser = null;
let page = null;
let lastSessionTime = 0;
const SESSION_TTL = 2 * 60 * 60 * 1000; // 2 hours
let launchAttempts = 0;
const MAX_LAUNCH_ATTEMPTS = 3;

function padKey(key) {
  const buf = Buffer.alloc(32, ' ');
  const k = Buffer.from(key, 'utf8');
  k.copy(buf);
  return buf;
}

function decryptUrl(encoded) {
  try {
    let b64 = encoded.replace(/-/g, '+').replace(/_/g, '/');
    while (b64.length % 4) b64 += '=';
    const raw = Buffer.from(b64, 'base64');
    const iv = raw.subarray(0, 16);
    const ciphertext = raw.subarray(16);
    const decipher = crypto.createDecipheriv('aes-256-cbc', padKey(AES_KEY), iv);
    decipher.setAutoPadding(false);
    let decrypted = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
    const padLen = decrypted[decrypted.length - 1];
    if (padLen > 0 && padLen <= 16) {
      let valid = true;
      for (let i = 0; i < padLen; i++) {
        if (decrypted[decrypted.length - 1 - i] !== padLen) { valid = false; break; }
      }
      if (valid) decrypted = decrypted.subarray(0, decrypted.length - padLen);
    }
    return decrypted.toString('utf8');
  } catch { return encoded; }
}

async function findChromium() {
  const fs = require('fs');
  for (const p of CHROMIUM_PATHS) {
    try {
      fs.accessSync(p, fs.constants.X_OK);
      return p;
    } catch {}
  }
  return null;
}

async function launchBrowser() {
  if (browser) {
    try {
      await browser.pages();
      return browser;
    } catch { browser = null; }
  }

  const execPath = await findChromium();
  if (!execPath) {
    console.warn('[KartoonsBrowser] Chromium not found. Puppeteer fallback unavailable.');
    return null;
  }

  try {
    browser = await puppeteer.launch({
      executablePath: execPath,
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--single-process',
        '--no-zygote',
        '--disable-web-security',
        '--disable-features=IsolateOrigins,site-per-process',
      ],
    });

    page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36');
    await page.setExtraHTTPHeaders({
      'Accept-Language': 'en-US,en;q=0.9',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    });

    // Block unnecessary resources for speed
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const type = req.resourceType();
      if (['image', 'stylesheet', 'font', 'media'].includes(type)) {
        req.abort();
      } else {
        req.continue();
      }
    });

    browser.on('disconnected', () => {
      console.warn('[KartoonsBrowser] Browser disconnected');
      browser = null;
      page = null;
    });

    launchAttempts = 0;
    console.log('[KartoonsBrowser] Launched successfully');
    return browser;
  } catch (e) {
    console.error('[KartoonsBrowser] Launch failed:', e.message);
    browser = null;
    page = null;
    return null;
  }
}

async function ensureSession() {
  if (!browser) {
    const b = await launchBrowser();
    if (!b) return false;
  }

  const now = Date.now();
  if (page && (now - lastSessionTime) < SESSION_TTL) return true;

  try {
    console.log('[KartoonsBrowser] Establishing new session...');
    await page.goto(KARTONS_URL, { waitUntil: 'domcontentloaded', timeout: 30000 });

    // Wait for React to render
    await page.waitForTimeout(3000);

    // Get adToken from localStorage
    const adToken = await page.evaluate(() => {
      try { return localStorage.getItem('adToken'); } catch { return null; }
    });

    if (adToken) {
      console.log('[KartoonsBrowser] Got adToken from localStorage');
    } else {
      console.log('[KartoonsBrowser] No adToken found, will try direct API calls');
    }

    lastSessionTime = now;
    return true;
  } catch (e) {
    console.error('[KartoonsBrowser] Session setup failed:', e.message);
    // Try restarting
    try { await browser.close(); } catch {}
    browser = null;
    page = null;
    return false;
  }
}

async function fetchLinks(endpoint) {
  try {
    await ensureSession();

    if (!page) return null;

    console.log(`[KartoonsBrowser] Fetching: ${endpoint}`);

    const result = await page.evaluate(async (ep) => {
      try {
        const adToken = localStorage.getItem('adToken');
        const url = `https://api.kartoons.me/api${ep}${adToken ? '?token=' + adToken : ''}`;
        const res = await fetch(url, {
          headers: {
            'User-Agent': navigator.userAgent,
            'Referer': 'https://kartoons.me/',
            'Origin': 'https://kartoons.me',
          },
        });
        const json = await res.json();
        return json;
      } catch (e) {
        return { error: e.message };
      }
    }, endpoint);

    return result;
  } catch (e) {
    console.error('[KartoonsBrowser] fetchLinks error:', e.message);
    return null;
  }
}

function extractLinks(json) {
  if (!json || !json.success) return [];
  const data = json.data;
  if (!data) return [];
  let links = [];
  if (Array.isArray(data)) links = data;
  else if (data.links && Array.isArray(data.links)) links = data.links;
  return links.map(link => {
    if (!link) return link;
    const out = { ...link };
    if (out.url) out.url = decryptUrl(out.url);
    if (out.subtitles && Array.isArray(out.subtitles)) {
      out.subtitles = out.subtitles.map(s => {
        if (s && s.url) return { ...s, url: decryptUrl(s.url) };
        return s;
      });
    }
    return out;
  });
}

async function getEpisodeLinks(episodeId) {
  const json = await fetchLinks(`/shows/episode/${episodeId}/links`);
  return extractLinks(json);
}

async function getMovieLinks(movieId) {
  const json = await fetchLinks(`/movies/${movieId}/links`);
  return extractLinks(json);
}

async function close() {
  if (browser) {
    try { await browser.close(); } catch {}
    browser = null;
    page = null;
  }
}

module.exports = { getEpisodeLinks, getMovieLinks, close, isAvailable: () => browser !== null };
