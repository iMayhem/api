const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { Readable } = require('stream');
const { HttpProxyAgent } = require('http-proxy-agent');
const { HttpsProxyAgent } = require('https-proxy-agent');
const analytics = require('./analytics');

const CONFIG_PATH = path.join(__dirname, 'config.json');
const USER_PROVIDERS_PATH = path.join(__dirname, 'providers.json');
const PROVIDERS_DIR = path.join(__dirname, '..', 'deobfuscated');
const MANIFEST_PATH = path.join(__dirname, '..', 'manifest.json');

const PORT = parseInt(process.env.PORT, 10) || null;

let config = loadConfig();
let providers = {};
let providerMeta = {};
const streamStore = new Map();
let streamIdCounter = 0;

function generateStreamId() {
  return (++streamIdCounter).toString(36) + crypto.randomBytes(4).toString('hex');
}

// Stream store auto-cleanup every 5 minutes
const STREAM_TTL = 5 * 60 * 1000;
setInterval(function() {
  const now = Date.now();
  for (const [key, entry] of streamStore) {
    if (now - entry.ts > STREAM_TTL) streamStore.delete(key);
  }
}, 60 * 1000);

function loadConfig() {
  let cfg;
  try {
    cfg = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
  } catch {
    cfg = { port: 3000, tmdbApiKey: '', autoplay: true, introSkip: false, proxy: { enabled: false }, globalTimeout: 12000, maxResultsPerProvider: 20, providers: {}, qualityFilter: { '4k': true, '1080': true, '720': true, 'sd': true, 'unknown': true } };
  }
  if (!cfg.providers) cfg.providers = {};
  // Merge user's provider overrides from gitignored file
  try {
    const user = JSON.parse(fs.readFileSync(USER_PROVIDERS_PATH, 'utf8'));
    if (user && typeof user === 'object') {
      for (const [id, p] of Object.entries(user)) {
        if (cfg.providers[id]) {
          if (typeof p.enabled === 'boolean') cfg.providers[id].enabled = p.enabled;
          if (typeof p.priority === 'number') cfg.providers[id].priority = p.priority;
          if (Array.isArray(p.disabledServers)) cfg.providers[id].disabledServers = p.disabledServers;
        } else {
          // Provider exists in user file but not in defaults — add it
          cfg.providers[id] = { enabled: p.enabled !== false, priority: p.priority || Object.keys(cfg.providers).length + 1, disabledServers: p.disabledServers || [] };
        }
      }
    }
  } catch {}
  return cfg;
}

function saveConfig() {
  const providersOnly = {};
  for (const [id, p] of Object.entries(config.providers || {})) {
    providersOnly[id] = { enabled: p.enabled, priority: p.priority, disabledServers: p.disabledServers || [] };
  }
  fs.writeFileSync(USER_PROVIDERS_PATH, JSON.stringify(providersOnly, null, 2));
}

function saveNonProviderSettings() {
  const cfgClean = { ...config };
  delete cfgClean.providers;
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(cfgClean, null, 2));
}

const CLIENT_PROVIDERS = [
  { id: 'icefy', name: 'icefy', supportedTypes: ['movie', 'tv'] },
  { id: 'yp-hdbox-1', name: 'yp-hdbox-1', supportedTypes: ['movie', 'tv'] },
  { id: 'yp-hdbox-2', name: 'yp-hdbox-2', supportedTypes: ['movie', 'tv'] },
  { id: 'yp-flixhq-1', name: 'yp-flixhq-1', supportedTypes: ['movie', 'tv'] },
  { id: 'yp-flixhq-2', name: 'yp-flixhq-2', supportedTypes: ['movie', 'tv'] },
  { id: 'yp-moviebox-1', name: 'yp-moviebox-1', supportedTypes: ['movie', 'tv'] },
  { id: 'yp-moviebox-2', name: 'yp-moviebox-2', supportedTypes: ['movie', 'tv'] },
  { id: 'tugaflix', name: 'tugaflix', supportedTypes: ['movie', 'tv'] },
  { id: 'fsonline', name: 'fsonline', supportedTypes: ['movie', 'tv'] },
  { id: 'animeflv', name: 'animeflv', supportedTypes: ['tv'] },
  { id: 'cuevana3', name: 'cuevana3', supportedTypes: ['movie', 'tv'] },
  { id: 'fullhdfilmizle', name: 'fullhdfilmizle', supportedTypes: ['movie', 'tv'] }
];

function initProviderConfig() {
  const files = fs.readdirSync(PROVIDERS_DIR).filter(f => f.endsWith('.js'));
  const allIds = [
    ...files.map(f => path.basename(f, '.js')),
    ...CLIENT_PROVIDERS.map(p => p.id)
  ];
  for (const id of allIds) {
    if (!config.providers[id]) {
      config.providers[id] = { enabled: true, priority: Object.keys(config.providers).length + 1, disabledServers: [] };
    }
  }
  saveConfig();
}

async function loadProviders() {
  const files = fs.readdirSync(PROVIDERS_DIR).filter(f => f.endsWith('.js'));
  for (const file of files) {
    const id = path.basename(file, '.js');
    try {
      const filePath = path.join(PROVIDERS_DIR, file);
      delete require.cache[require.resolve(filePath)];
      const mod = require(filePath);
      if (mod && typeof mod.getStreams === 'function') {
        providers[id] = mod;
        providerMeta[id] = {
          name: mod.name || id,
          supportedTypes: mod.supportedTypes || ['movie', 'tv'],
        };
      }
    } catch (e) {
      console.error(`Failed to load provider ${id}:`, e);
    }
  }

  for (const cp of CLIENT_PROVIDERS) {
    providerMeta[cp.id] = {
      name: cp.name,
      supportedTypes: cp.supportedTypes,
      file: 'Client-side Scraper',
      isClientSide: true
    };
  }
}

function createProxyAgent(targetUrl) {
  if (!config.proxy || !config.proxy.enabled || !config.proxy.host) return null;
  const proxyUrl = `http://${config.proxy.host}:${config.proxy.port}`;
  const isHttps = targetUrl.startsWith('https');
  const Agent = isHttps ? HttpsProxyAgent : HttpProxyAgent;
  return new Agent(proxyUrl);
}

async function fetchWithProxy(url, opts = {}) {
  const agent = createProxyAgent(url);
  if (agent) {
    opts.agent = agent;
  }
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), config.globalTimeout || 12000);
  opts.signal = controller.signal;
  try {
    const res = await fetch(url, opts);
    return res;
  } finally {
    clearTimeout(timeout);
  }
}

// Patch global fetch for providers to use proxy
const originalFetch = global.fetch;
global.fetch = async (url, opts = {}) => {
  const agent = createProxyAgent(typeof url === 'string' ? url : url.url);
  if (agent) {
    opts.agent = agent;
  }
  return originalFetch(url, opts);
};

function extractStreamServers(streams) {
  const servers = new Set();
  for (const s of streams) {
    if (s.name) servers.add(s.name);
  }
  return [...servers].sort();
}

const NON_STREAMABLE_EXTS = /\.(zip|rar|7z|tar|gz|mkv|avi|mov|wmv|flv|iso|torrent)(\?|$)/i;

function isStreamableUrl(url) {
  if (!url) return false;
  // Reject download archive extensions
  if (NON_STREAMABLE_EXTS.test(url.split('?')[0])) return false;
  return true;
}

function filterStreams(streams, providerId) {
  const pConfig = config.providers[providerId];
  let filtered = streams;
  if (pConfig && pConfig.disabledServers && pConfig.disabledServers.length > 0) {
    filtered = filtered.filter(s => !pConfig.disabledServers.some(d => s.name && s.name.includes(d)));
  }
  // Remove streams whose URL is a non-streamable download archive
  filtered = filtered.filter(s => isStreamableUrl(s.url));
  return filtered;
}

function getEnabledProvidersSorted() {
  return Object.entries(config.providers)
    .filter(([id, p]) => p.enabled && providers[id])
    .sort((a, b) => (a[1].priority || 999) - (b[1].priority || 999));
}

const app = express();
app.use(cors());
app.use(express.json());

// ============ movie-web SSE Provider API (before static to ensure priority) ============

// Convert a scraper stream to movie-web Stream format
function scraperStreamToMwStream(stream, sourceId) {
  const flags = [];
  if (stream.headers && Object.keys(stream.headers).length > 0) {
    flags.push('ip-locked');
  } else {
    flags.push('cors-allowed');
  }

  // Handle multi-quality streams (object with quality keys)
  if (stream.qualities && typeof stream.qualities === 'object') {
    const qualities = {};
    for (const [q, entry] of Object.entries(stream.qualities)) {
      if (!entry || !entry.url) continue;
      if (!isStreamableUrl(entry.url)) {
        console.log(`[scraperStreamToMwStream] Skipping non-streamable quality "${q}": ${entry.url.slice(0, 80)}`);
        continue;
      }
      qualities[q] = { type: entry.type || 'mp4', url: entry.url };
    }
    if (Object.keys(qualities).length === 0) return null; // all qualities filtered
    return {
      type: 'file',
      id: sourceId + '-' + Date.now(),
      flags,
      captions: [],
      qualities,
      headers: stream.headers || undefined,
    };
  }

  const isHls = stream.type === 'm3u8' || (stream.url && stream.url.includes('.m3u8'));
  if (isHls) {
    return {
      type: 'hls',
      playlist: stream.url,
      id: sourceId + '-' + Date.now(),
      flags,
      captions: [],
      headers: stream.headers || undefined,
    };
  }

  // Single URL stream — reject non-streamable
  if (!isStreamableUrl(stream.url)) {
    console.log(`[scraperStreamToMwStream] Skipping non-streamable stream url: ${(stream.url || '').slice(0, 80)}`);
    return null;
  }

  const quality = stream.quality || 'unknown';
  const qualities = {};
  qualities[quality] = { type: 'mp4', url: stream.url };
  return {
    type: 'file',
    id: sourceId + '-' + Date.now(),
    flags,
    captions: [],
    qualities,
    headers: stream.headers || undefined,
  };
}

// GET /metadata - Return all providers in MetaOutput format
app.get('/metadata', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  const result = [];
  const sorted = Object.entries(providerMeta)
    .sort((a, b) => (config.providers[a[0]]?.priority || 999) - (config.providers[b[0]]?.priority || 999));
  for (const [id, meta] of sorted) {
    const pConfig = config.providers[id];
    if (!pConfig || pConfig.enabled === false) continue;
    result.push([{
      id,
      name: meta.name || id,
      type: 'source',
      rank: pConfig.priority || 999,
      flags: [],
      mediaTypes: meta.supportedTypes || ['movie', 'tv'],
    }]);
  }
  res.json(result);
});

function sendSSE(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Access-Control-Allow-Origin': '*',
  });
  res.flushHeaders();
  let cancelled = false;
  req.on('close', () => { cancelled = true; });
  function emit(event, data) {
    if (cancelled) return;
    try { res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`); } catch (e) {}
  }
  return { emit, cancelled: () => cancelled };
}

// GET /scrape - SSE endpoint that runs all scrapers (movie-web runAll)
app.get('/scrape', async (req, res) => {
  const { type, tmdbId, season, episode, seasonNumber, episodeNumber } = req.query;
  if (!tmdbId) return res.status(400).json({ error: 'tmdbId required' });
  const sse = sendSSE(req, res);
  if (sse.cancelled()) return;

  const enabledProviders = getEnabledProvidersSorted();
  const sourceIds = enabledProviders.map(([id]) => id);

  sse.emit('init', { sourceIds });

  for (const [id, pConfig] of enabledProviders) {
    if (sse.cancelled()) return;
    try {
      sse.emit('start', id);

      // Emit realtime progress fill while the scraper works
      let progress = 0;
      const progressTimer = setInterval(() => {
        if (sse.cancelled()) { clearInterval(progressTimer); return; }
        progress = Math.min(progress + 4, 85);
        sse.emit('update', { id, percentage: progress, status: 'pending' });
      }, 400);

      const mod = providers[id];
      const mediaType = type || 'movie';
      const sNum = season || seasonNumber || null;
      const eNum = episode || episodeNumber || null;
      const streams = await mod.getStreams(tmdbId, mediaType, sNum, eNum);
      clearInterval(progressTimer);
      if (sse.cancelled()) return;

      const filtered = filterStreams(streams || [], id);

      if (filtered && filtered.length > 0) {
        let foundValid = false;
        for (let i = 0; i < filtered.length; i++) {
          const stream = filtered[i];
          const mwStream = scraperStreamToMwStream(stream, id);
          if (!mwStream) continue;
          foundValid = true;
          const pct = Math.round(85 + ((i + 1) / filtered.length) * 15);
          sse.emit('update', { id, percentage: pct, status: 'success' });
          const output = { sourceId: id, stream: mwStream };
          sse.emit('completed', output);
          res.end();
          return;
        }
        if (!foundValid) {
          sse.emit('update', { id, percentage: 100, status: 'notfound', reason: 'No streamable qualities/sources found' });
        }
      } else {
        sse.emit('update', { id, percentage: 100, status: 'notfound', reason: 'No streams returned' });
      }
    } catch (e) {
      sse.emit('update', { id, percentage: 100, status: 'failure', error: e.message });
    }
  }

  if (!sse.cancelled()) {
    sse.emit('noOutput', '');
  }
  res.end();
});

// GET /scrape/source - SSE endpoint for a single source
app.get('/scrape/source', async (req, res) => {
  const { id, type, tmdbId, season, episode, seasonNumber, episodeNumber } = req.query;
  if (!id || !tmdbId) return res.status(400).json({ error: 'id and tmdbId required' });
  const sse = sendSSE(req, res);
  if (sse.cancelled()) return;

  const mod = providers[id];
  if (!mod) {
    sse.emit('error', { name: 'NotFoundError', message: `Source ${id} not found` });
    res.end();
    return;
  }

  try {
    sse.emit('start', id);
    const mediaType = type || 'movie';
    const sNum = season || seasonNumber || null;
    const eNum = episode || episodeNumber || null;
    const streams = await mod.getStreams(tmdbId, mediaType, sNum, eNum);
    const filtered = filterStreams(streams || [], id);

    if (filtered && filtered.length > 0) {
      const mwStreams = filtered
        .map((s, i) => scraperStreamToMwStream(s, id + '-' + i))
        .filter(Boolean);
      if (mwStreams.length > 0) {
        sse.emit('update', { id, percentage: 100, status: 'success' });
        const output = { embeds: [], stream: mwStreams };
        sse.emit('completed', output);
      } else {
        sse.emit('update', { id, percentage: 100, status: 'notfound', reason: 'No streamable qualities/sources found' });
        sse.emit('noOutput', '');
      }
    } else {
      sse.emit('update', { id, percentage: 100, status: 'notfound', reason: 'No streams returned' });
      sse.emit('noOutput', '');
    }
  } catch (e) {
    sse.emit('update', { id, percentage: 100, status: 'failure', error: e.message });
    sse.emit('noOutput', '');
  }

  res.end();
});

// GET /scrape/embed - SSE endpoint for a single embed (not supported by these scrapers)
app.get('/scrape/embed', async (req, res) => {
  const { id, url } = req.query;
  const sse = sendSSE(req, res);
  if (sse.cancelled()) return;

  sse.emit('start', id || 'embed');
  sse.emit('update', { id: id || 'embed', percentage: 100, status: 'notfound', reason: 'Embed scraping not supported' });
  sse.emit('noOutput', '');
  res.end();
});

app.use(express.static(path.join(__dirname, 'public')));

// ============ API Routes ============

// List all providers with config
app.get('/api/providers', (req, res) => {
  const result = {};
  for (const [id, meta] of Object.entries(providerMeta)) {
    result[id] = {
      ...meta,
      enabled: config.providers[id]?.enabled ?? true,
      priority: config.providers[id]?.priority ?? 999,
      disabledServers: config.providers[id]?.disabledServers || [],
    };
  }
  res.json(result);
});

// Bulk reorder providers — atomic, single request
app.post('/api/providers/reorder', (req, res) => {
  const { order } = req.body;
  if (!Array.isArray(order) || !order.length) return res.status(400).json({ error: 'Missing order array' });
  for (let i = 0; i < order.length; i++) {
    if (config.providers[order[i]]) {
      config.providers[order[i]].priority = i + 1;
    }
  }
  saveConfig();
  res.json({ ok: true });
});

// Toggle provider
app.post('/api/providers/:id/toggle', (req, res) => {
  const { id } = req.params;
  if (!config.providers[id]) return res.status(404).json({ error: 'Provider not found' });
  config.providers[id].enabled = !config.providers[id].enabled;
  saveConfig();
  res.json({ id, enabled: config.providers[id].enabled });
});

// Toggle all providers
app.post('/api/providers/toggle-all', (req, res) => {
  const { enabled } = req.body;
  if (typeof enabled !== 'boolean') return res.status(400).json({ error: 'Missing enabled boolean' });
  for (const id of Object.keys(config.providers)) {
    if (providerMeta[id]) config.providers[id].enabled = enabled;
  }
  saveConfig();
  res.json({ enabled });
});

// Update provider priority
app.post('/api/providers/:id/priority', (req, res) => {
  const { id } = req.params;
  const { priority } = req.body;
  if (!config.providers[id]) return res.status(404).json({ error: 'Provider not found' });
  config.providers[id].priority = priority;
  saveConfig();
  res.json({ id, priority });
});

// Update disabled servers for a provider
app.post('/api/providers/:id/servers', (req, res) => {
  const { id } = req.params;
  const { disabledServers } = req.body;
  if (!config.providers[id]) return res.status(404).json({ error: 'Provider not found' });
  config.providers[id].disabledServers = disabledServers || [];
  saveConfig();
  res.json({ id, disabledServers: config.providers[id].disabledServers });
});

// Search endpoint
app.get('/api/search', async (req, res) => {
  const { q: query, type = 'movie', season, episode } = req.query;
  if (!query) return res.status(400).json({ error: 'Missing query' });

  const enabledProviders = getEnabledProvidersSorted();
  const results = [];
  const errors = [];

  await Promise.allSettled(enabledProviders.map(async ([id, pConfig]) => {
    try {
      const mod = providers[id];
      const streams = await mod.getStreams(query, type, season || null, episode || null);
      if (streams && streams.length > 0) {
        const filtered = filterStreams(streams, id);
        if (filtered.length > 0) {
          const sliced = filtered.slice(0, config.maxResultsPerProvider || 20);
          for (const stream of sliced) {
            if (!stream.type) {
              if (stream.url.includes('.m3u8')) stream.type = 'm3u8';
              else if (stream.url.includes('.mpd')) stream.type = 'mpd';
              else if (stream.url.includes('.ts')) stream.type = 'ts';
              else if (stream.url.includes('.mp4')) stream.type = 'mp4';
              else if (stream.url.includes('.mkv')) stream.type = 'mkv';
              else stream.type = 'mp4';
            }
            const storeId = generateStreamId();
            streamStore.set(storeId, { ts: Date.now(),
              url: stream.url,
              headers: stream.headers || {},
              type: stream.type,
            });
            stream.proxyUrl = `/proxy?id=${storeId}`;
          }
          results.push({
            provider: id,
            providerName: providerMeta[id]?.name || id,
            priority: pConfig.priority,
            count: filtered.length,
            servers: extractStreamServers(filtered),
            streams: sliced,
          });
        }
      }
    } catch (e) {
      errors.push({ provider: id, error: e.message });
    }
  }));

  results.sort((a, b) => a.priority - b.priority);
  res.json({ query, type, results, errors, totalStreams: results.reduce((s, r) => s + r.streams.length, 0) });
});

// Streaming search (SSE) — for real-time test panel
app.get('/api/search/stream', async (req, res) => {
  const { q: query, type = 'movie', season, episode } = req.query;
  if (!query) return res.status(400).json({ error: 'Missing query' });

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Access-Control-Allow-Origin': '*',
  });
  res.flushHeaders();

  let cancelled = false;
  req.on('close', () => { cancelled = true; });

  function emit(event, data) {
    if (cancelled) return;
    try { res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`); } catch (e) {}
  }

  // Flush after every emit to ensure real-time delivery
  const origWrite = res.write.bind(res);
  res.write = function(chunk) {
    const ret = origWrite(chunk);
    if (typeof res.flush === 'function') res.flush();
    return ret;
  };

  const enabledProviders = getEnabledProvidersSorted();
  const results = [];
  const errors = [];
  const CONCURRENCY = 6;

  emit('start', { total: enabledProviders.length });

  async function processProvider(id, pConfig) {
    if (cancelled) return;
    const name = providerMeta[id]?.name || id;
    emit('provider-start', { provider: id, name });
    try {
      const mod = providers[id];
      const streams = await mod.getStreams(query, type, season || null, episode || null);
      if (cancelled) return;
      if (streams && streams.length > 0) {
        const filtered = filterStreams(streams, id);
        for (const stream of filtered.slice(0, config.maxResultsPerProvider || 20)) {
          if (cancelled) return;
          if (!stream.type) {
            if (stream.url.includes('.m3u8')) stream.type = 'm3u8';
            else if (stream.url.includes('.mpd')) stream.type = 'mpd';
            else if (stream.url.includes('.ts')) stream.type = 'ts';
            else if (stream.url.includes('.mp4')) stream.type = 'mp4';
            else if (stream.url.includes('.mkv')) stream.type = 'mkv';
            else stream.type = 'mp4';
          }
          const storeId = generateStreamId();
          streamStore.set(storeId, { ts: Date.now(), url: stream.url, headers: stream.headers || {}, type: stream.type });
          stream.proxyUrl = `/proxy?id=${storeId}`;
          emit('stream', { provider: id, name, quality: stream.quality || 'Auto', url: stream.url, proxyUrl: stream.proxyUrl, type: stream.type, title: stream.title || '' });
        }
        emit('provider-done', { provider: id, name, count: filtered.length, servers: extractStreamServers(filtered) });
        results.push({ provider: id, providerName: name, priority: pConfig.priority, count: filtered.length, servers: extractStreamServers(filtered), streams: filtered.slice(0, config.maxResultsPerProvider || 20) });
      } else {
        emit('provider-empty', { provider: id, name });
      }
    } catch (e) {
      emit('provider-error', { provider: id, name, error: e.message });
      errors.push({ provider: id, error: e.message });
    }
  }

  // Process providers in parallel batches
  for (let i = 0; i < enabledProviders.length && !cancelled; i += CONCURRENCY) {
    const batch = enabledProviders.slice(i, i + CONCURRENCY);
    await Promise.allSettled(batch.map(([id, pConfig]) => processProvider(id, pConfig)));
  }

  if (!cancelled) {
    emit('done', { results, errors, totalStreams: results.reduce((s, r) => s + r.streams.length, 0) });
  }
  res.end();
});

// Get settings
app.get('/api/settings', (req, res) => {
  res.json(config);
});

// Update settings
app.put('/api/settings', (req, res) => {
  const { port, tmdbApiKey, globalTimeout, maxResultsPerProvider, proxy, autoplay, introSkip, qualityFilter } = req.body;
  if (port) config.port = port;
  if (tmdbApiKey) config.tmdbApiKey = tmdbApiKey;
  if (globalTimeout) config.globalTimeout = globalTimeout;
  if (maxResultsPerProvider) config.maxResultsPerProvider = maxResultsPerProvider;
  if (proxy) config.proxy = { ...config.proxy, ...proxy };
  if (typeof autoplay === 'boolean') config.autoplay = autoplay;
  if (typeof introSkip === 'boolean') config.introSkip = introSkip;
  if (qualityFilter) config.qualityFilter = qualityFilter;
  saveNonProviderSettings();
  res.json(config);
});

// Intro/credits timestamps via theintrodb.org
app.get('/api/intro-timestamps', async (req, res) => {
  const { tmdb_id, type, season, episode, duration_ms } = req.query;
  if (!tmdb_id) return res.status(400).json({ error: 'tmdb_id required' });
  try {
    var apiUrl = 'https://api.theintrodb.org/v3/media?tmdb_id=' + encodeURIComponent(tmdb_id) + '&type=' + encodeURIComponent(type || 'movie');
    if (season) apiUrl += '&season=' + encodeURIComponent(season);
    if (episode) apiUrl += '&episode=' + encodeURIComponent(episode);
    if (duration_ms) apiUrl += '&duration_ms=' + encodeURIComponent(duration_ms);
    const apiRes = await fetch(apiUrl);
    if (!apiRes.ok) return res.status(apiRes.status).json({ error: 'introdb fetch failed' });
    const data = await apiRes.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Discover servers for a provider (run a test search)
app.get('/api/providers/:id/discover', async (req, res) => {
  const { id } = req.params;
  const { q = '550', type = 'movie' } = req.query;
  if (!providers[id]) return res.status(404).json({ error: 'Provider not found' });
  try {
    const mod = providers[id];
    const streams = await mod.getStreams(q, type, null, null);
    const servers = extractStreamServers(streams || []);
    res.json({ provider: id, servers, count: (streams || []).length });
  } catch (e) {
    res.json({ provider: id, servers: [], count: 0, error: e.message });
  }
});

// Get server IP / connection info
app.get('/api/info', (req, res) => {
  const os = require('os');
  const interfaces = os.networkInterfaces();
  const ips = [];
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) ips.push(iface.address);
    }
  }
  res.json({
    hostname: os.hostname(),
    ips,
    port: config.port,
    platform: os.platform(),
    serverUrl: `http://${ips[0] || 'localhost'}:${config.port}`,
  });
});

// ============ Stream Proxy ============

function encodeB64url(str) {
  return Buffer.from(str).toString('base64url');
}

function decodeB64url(str) {
  return Buffer.from(str, 'base64url').toString();
}

function rewriteHlsPlaylist(playlist, baseUrl, headers) {
  const headerB64 = encodeB64url(JSON.stringify(headers));
  const lines = playlist.split('\n');
  return lines.map(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return line;
    try {
      const absoluteUrl = new URL(trimmed, baseUrl).href;
      const urlB64 = encodeB64url(absoluteUrl);
      return `/proxy?u=${urlB64}&h=${headerB64}`;
    } catch {
      return line;
    }
  }).join('\n');
}

// Proxy endpoint - supports both ID-based lookup and inline URL+headers
app.get('/proxy', async (req, res) => {
  const { id, u, h } = req.query;

  let targetUrl, targetHeaders, targetType;

  if (id && streamStore.has(id)) {
    const entry = streamStore.get(id);
    targetUrl = entry.url;
    targetHeaders = entry.headers;
    targetType = entry.type;
  } else if (u) {
    targetUrl = decodeB64url(u);
    targetHeaders = h ? JSON.parse(decodeB64url(h)) : {};
  } else {
    return res.status(400).send('Missing id or url parameter');
  }

  const fetchHeaders = { ...targetHeaders };
  if (req.headers.range) {
    fetchHeaders.Range = req.headers.range;
  }
  if (!fetchHeaders['User-Agent'] && !fetchHeaders['user-agent']) {
    fetchHeaders['User-Agent'] = req.headers['user-agent'] || 'Mozilla/5.0';
  }

  try {
    const agent = createProxyAgent(targetUrl);
    const opts = { headers: fetchHeaders };
    if (agent) opts.agent = agent;

    const response = await fetch(targetUrl, opts);

    if (!response.ok && response.status !== 206) {
      return res.status(response.status).send(`Provider returned ${response.status}`);
    }

    const forwardHeaders = ['content-type', 'content-length', 'content-range', 'accept-ranges', 'content-disposition'];
    for (const [key, value] of response.headers) {
      if (forwardHeaders.includes(key.toLowerCase())) {
        res.setHeader(key, value);
      }
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Expose-Headers', 'Content-Length, Content-Range, Accept-Ranges');
    res.status(response.status);

    const contentType = response.headers.get('content-type') || '';
    const isHlsPlaylist = targetType === 'm3u8' || targetUrl.includes('.m3u8') ||
      contentType.includes('mpegurl') || contentType.includes('x-mpegurl');

    if (isHlsPlaylist) {
      const text = await response.text();
      const baseUrl = new URL(targetUrl);
      const rewritten = rewriteHlsPlaylist(text, baseUrl, targetHeaders);
      res.setHeader('Content-Type', contentType || 'application/vnd.apple.mpegurl');
      res.setHeader('Content-Length', Buffer.byteLength(rewritten));
      res.end(rewritten);
    } else {
      const nodeStream = Readable.fromWeb(response.body);
      req.on('close', () => nodeStream.destroy());
      nodeStream.pipe(res);
    }
  } catch (e) {
    console.error('Proxy error:', e.message);
    if (!res.headersSent) {
      if (e.code === 'ENOTFOUND' || e.code === 'ECONNREFUSED') {
        res.status(502).send('Provider unreachable');
      } else if (e.name === 'AbortError') {
        res.status(504).send('Proxy timeout');
      } else {
        res.status(502).send('Proxy error');
      }
    }
  }
});

// ============ Analytics Routes ============

app.post('/api/analytics/event', analytics.handleEvent);
app.get('/api/analytics/stats', analytics.handleStats);
app.get('/api/analytics/events', analytics.handleEventsList);
app.get('/api/analytics/realtime', analytics.handleRealtime);

// Documentation page
app.get('/docs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'docs.html'));
});

// SPA fallback - serve index.html for non-matching routes
app.use((req, res, next) => {
  if (req.path.startsWith('/api/') || req.path.startsWith('/proxy') || req.path.startsWith('/docs') || req.path.startsWith('/css/') || req.path.startsWith('/js/') || req.path.startsWith('/metadata') || req.path.startsWith('/scrape')) return next();
  res.sendFile(path.join(__dirname, 'public', 'index.html'), err => { if (err) next(); });
});

async function start() {
  await loadProviders();
  initProviderConfig();
  analytics.init();
  const port = PORT || config.port;
  console.log(`Loaded ${Object.keys(providers).length} providers`);
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
    console.log(`  Proxy: /proxy  |  Docs: /docs`);
    const os = require('os');
    const nets = os.networkInterfaces();
    for (const name of Object.keys(nets)) {
      for (const net of nets[name]) {
        if (net.family === 'IPv4' && !net.internal) {
          console.log(`  Network: http://${net.address}:${port}`);
        }
      }
    }
  });
}

start().catch(console.error);
