const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { Readable } = require('stream');
const { HttpProxyAgent } = require('http-proxy-agent');
const { HttpsProxyAgent } = require('https-proxy-agent');

const CONFIG_PATH = path.join(__dirname, 'config.json');
const PROVIDERS_DIR = path.join(__dirname, '..', 'deobfuscated');
const MANIFEST_PATH = path.join(__dirname, '..', 'manifest.json');

let config = loadConfig();
let providers = {};
let providerMeta = {};
const streamStore = new Map();
let streamIdCounter = 0;

function generateStreamId() {
  return (++streamIdCounter).toString(36) + crypto.randomBytes(4).toString('hex');
}

function loadConfig() {
  try {
    return JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
  } catch {
    return { port: 3000, tmdbApiKey: '', proxy: { enabled: false }, globalTimeout: 20000, maxResultsPerProvider: 20, providers: {} };
  }
}

function saveConfig() {
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2));
}

function initProviderConfig() {
  const files = fs.readdirSync(PROVIDERS_DIR).filter(f => f.endsWith('.js'));
  for (const file of files) {
    const id = path.basename(file, '.js');
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
          file: file,
          supportedTypes: mod.supportedTypes || ['movie', 'tv'],
        };
      }
    } catch (e) {
      console.error(`Failed to load provider ${id}: ${e.message}`);
    }
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
  const timeout = setTimeout(() => controller.abort(), config.globalTimeout || 20000);
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

function filterStreams(streams, providerId) {
  const pConfig = config.providers[providerId];
  if (!pConfig || !pConfig.disabledServers || pConfig.disabledServers.length === 0) return streams;
  return streams.filter(s => !pConfig.disabledServers.some(d => s.name && s.name.includes(d)));
}

function getEnabledProvidersSorted() {
  return Object.entries(config.providers)
    .filter(([id, p]) => p.enabled && providers[id])
    .sort((a, b) => (a[1].priority || 999) - (b[1].priority || 999));
}

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ============ API Routes ============

// List all providers with config
app.get('/api/providers', (req, res) => {
  const result = {};
  for (const [id, mod] of Object.entries(providers)) {
    result[id] = {
      ...providerMeta[id],
      enabled: config.providers[id]?.enabled ?? true,
      priority: config.providers[id]?.priority ?? 999,
      disabledServers: config.providers[id]?.disabledServers || [],
    };
  }
  res.json(result);
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
    if (providers[id]) config.providers[id].enabled = enabled;
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

  const timeoutMs = config.globalTimeout || 20000;
  await Promise.allSettled(enabledProviders.map(async ([id, pConfig]) => {
    try {
      const mod = providers[id];
      const streamPromise = mod.getStreams(query, type, season || null, episode || null);
      const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeoutMs));
      const streams = await Promise.race([streamPromise, timeoutPromise]);
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
            streamStore.set(storeId, {
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

// Get settings
app.get('/api/settings', (req, res) => {
  res.json(config);
});

// Update settings
app.put('/api/settings', (req, res) => {
  const { port, tmdbApiKey, globalTimeout, maxResultsPerProvider, proxy } = req.body;
  if (port) config.port = port;
  if (tmdbApiKey) config.tmdbApiKey = tmdbApiKey;
  if (globalTimeout) config.globalTimeout = globalTimeout;
  if (maxResultsPerProvider) config.maxResultsPerProvider = maxResultsPerProvider;
  if (proxy) config.proxy = { ...config.proxy, ...proxy };
  saveConfig();
  res.json(config);
});

// Discover servers for a provider (run a test search)
app.get('/api/providers/:id/discover', async (req, res) => {
  const { id } = req.params;
  const { q = '550', type = 'movie' } = req.query;
  if (!providers[id]) return res.status(404).json({ error: 'Provider not found' });
  try {
    const mod = providers[id];
    const timeoutMs = config.globalTimeout || 20000;
    const streamPromise = mod.getStreams(q, type, null, null);
    const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 15000));
    const streams = await Promise.race([streamPromise, timeoutPromise]);
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

// Embed player page
app.get('/embed', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'embed.html'));
});

// Documentation page
app.get('/docs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'docs.html'));
});

// SPA fallback - serve index.html for non-matching routes
app.use((req, res, next) => {
  if (req.path.startsWith('/api/') || req.path.startsWith('/proxy') || req.path.startsWith('/embed') || req.path.startsWith('/docs') || req.path.startsWith('/css/') || req.path.startsWith('/js/')) return next();
  res.sendFile(path.join(__dirname, 'public', 'index.html'), err => { if (err) next(); });
});

async function start() {
  await loadProviders();
  initProviderConfig();
  console.log(`Loaded ${Object.keys(providers).length} providers`);
  app.listen(config.port, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${config.port}`);
    const os = require('os');
    const nets = os.networkInterfaces();
    for (const name of Object.keys(nets)) {
      for (const net of nets[name]) {
        if (net.family === 'IPv4' && !net.internal) {
          console.log(`  Network: http://${net.address}:${config.port}`);
        }
      }
    }
  });
}

start().catch(console.error);
