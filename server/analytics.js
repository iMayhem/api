const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ANALYTICS_PATH = path.join(__dirname, 'analytics.json');
const MAX_EVENTS = 10000;
const REALTIME_TTL = 120000;
const SAVE_INTERVAL = 30000;

let data = loadAnalytics();
let sseClients = [];
let saveTimer = null;

function loadAnalytics() {
  try {
    return JSON.parse(fs.readFileSync(ANALYTICS_PATH, 'utf8'));
  } catch {
    return {
      totals: { pageViews: 0, plays: 0, errors: 0, qualityChanges: 0, audioChanges: 0, uniqueIps: [], watchTimeMs: 0 },
      events: [],
      sessions: {},
      realtimeSessions: {},
    };
  }
}

function saveAnalytics() {
  try {
    const out = {
      totals: data.totals,
      events: data.events.slice(-1000),
      sessions: Object.fromEntries(Object.entries(data.sessions).slice(-500)),
      realtimeSessions: cleanupRealtime(),
    };
    fs.writeFileSync(ANALYTICS_PATH, JSON.stringify(out, null, 2));
  } catch (e) { console.error('analytics save error:', e.message); }
}

function startSaveTimer() {
  if (saveTimer) clearInterval(saveTimer);
  saveTimer = setInterval(saveAnalytics, SAVE_INTERVAL);
}

function stopSaveTimer() {
  if (saveTimer) { clearInterval(saveTimer); saveTimer = null; }
}

function cleanupRealtime() {
  const now = Date.now();
  for (const sid of Object.keys(data.realtimeSessions)) {
    if (now - data.realtimeSessions[sid].lastPing > REALTIME_TTL) delete data.realtimeSessions[sid];
  }
  return data.realtimeSessions;
}

function getClientIp(req) {
  return req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'].split(',')[0].trim() : req.ip || req.socket.remoteAddress || 'unknown';
}

function addEvent(type, sessionId, ip, userAgent, referrer, extra) {
  const event = {
    id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    type,
    sessionId,
    ip,
    userAgent,
    referrer,
    time: Date.now(),
    data: extra || {},
  };
  data.events.push(event);
  if (data.events.length > MAX_EVENTS) data.events = data.events.slice(-MAX_EVENTS);

  if (!data.sessions[sessionId]) {
    data.sessions[sessionId] = { firstSeen: Date.now(), lastSeen: Date.now(), ip, userAgent, referrer, pageViews: 0, plays: 0, errors: 0 };
  }
  const sess = data.sessions[sessionId];
  sess.lastSeen = Date.now();

  const totals = data.totals;
  switch (type) {
    case 'pageview':
      totals.pageViews++;
      sess.pageViews++;
      if (!totals.uniqueIps.includes(ip)) totals.uniqueIps.push(ip);
      break;
    case 'play':
      totals.plays++;
      sess.plays++;
      break;
    case 'error':
      totals.errors++;
      sess.errors++;
      break;
    case 'quality_change':
      totals.qualityChanges++;
      break;
    case 'audio_change':
      totals.audioChanges++;
      break;
    case 'heartbeat':
      if (extra.duration) totals.watchTimeMs += extra.duration;
      break;
  }

  // Track realtime
  data.realtimeSessions[sessionId] = { lastPing: Date.now(), ip, userAgent, referrer, currentUrl: extra.currentUrl || '', currentStream: extra.currentStream || '' };

  broadcast({ type: 'event', event });
  broadcast({ type: 'stats', stats: getStats() });
}

function getDomainFromReferrer(ref, extra) {
  let target = extra && extra.domain ? extra.domain : '';
  if (!target && extra && extra.referrer) target = extra.referrer;
  if (!target && ref) target = ref;
  if (!target) return 'Direct / Standalone';

  try {
    const raw = target.startsWith('http') ? target : `http://${target}`;
    const parsed = new URL(raw);
    return parsed.hostname || target;
  } catch (e) {
    return target;
  }
}

function getStats() {
  const now = Date.now();
  const activeSids = Object.keys(data.realtimeSessions).filter(sid => now - data.realtimeSessions[sid].lastPing < REALTIME_TTL);
  const realtimeCount = activeSids.length;

  const events24h = data.events.filter(e => now - e.time < 86400000);
  const plays24h = events24h.filter(e => e.type === 'play').length;
  const views24h = events24h.filter(e => e.type === 'pageview').length;

  // Hourly breakdown for last 24h
  const hourly = {};
  // Domain breakdown
  const domainStats = {};
  // Top Media
  const mediaStats = {};

  for (const e of events24h) {
    const hour = new Date(e.time).toISOString().slice(0, 13) + ':00Z';
    if (!hourly[hour]) hourly[hour] = { pageViews: 0, plays: 0, errors: 0 };
    hourly[hour].pageViews += e.type === 'pageview' ? 1 : 0;
    hourly[hour].plays += e.type === 'play' ? 1 : 0;
    hourly[hour].errors += e.type === 'error' ? 1 : 0;

    const domain = getDomainFromReferrer(e.referrer, e.data);
    if (!domainStats[domain]) domainStats[domain] = { domain, views: 0, plays: 0, errors: 0, activeNow: 0 };
    if (e.type === 'pageview') domainStats[domain].views++;
    if (e.type === 'play') domainStats[domain].plays++;
    if (e.type === 'error') domainStats[domain].errors++;

    if (e.data && (e.data.title || e.data.tmdbId)) {
      const mediaKey = e.data.title ? `${e.data.title}${e.data.mediaType ? ' (' + e.data.mediaType + ')' : ''}` : `TMDB: ${e.data.tmdbId}`;
      if (!mediaStats[mediaKey]) mediaStats[mediaKey] = { title: mediaKey, views: 0, plays: 0 };
      if (e.type === 'pageview') mediaStats[mediaKey].views++;
      if (e.type === 'play') mediaStats[mediaKey].plays++;
    }
  }

  // Count active live sessions per domain
  for (const sid of activeSids) {
    const sess = data.realtimeSessions[sid];
    const domain = getDomainFromReferrer(sess.referrer, sess);
    if (!domainStats[domain]) domainStats[domain] = { domain, views: 0, plays: 0, errors: 0, activeNow: 0 };
    domainStats[domain].activeNow++;
  }

  const topDomains = Object.values(domainStats).sort((a, b) => b.views - a.views);
  const topMedia = Object.values(mediaStats).sort((a, b) => b.plays - a.plays).slice(0, 15);

  return {
    totals: data.totals,
    realtime: { activeNow: realtimeCount, sessions: data.realtimeSessions },
    hourly,
    topDomains,
    topMedia,
    last24h: { plays: plays24h, pageViews: views24h },
    eventsCount: data.events.length,
    sessionsCount: Object.keys(data.sessions).length,
  };
}

function getEvents(limit, offset) {
  const start = offset || 0;
  const end = start + (limit || 50);
  return data.events.slice(-end).slice(0, limit || 50).reverse();
}

function broadcast(msg) {
  const payload = `data: ${JSON.stringify(msg)}\n\n`;
  for (let i = sseClients.length - 1; i >= 0; i--) {
    try {
      sseClients[i].write(payload);
    } catch {
      sseClients.splice(i, 1);
    }
  }
}

function handleEvent(req, res) {
  const { type, sessionId, data: extra } = req.body;
  if (!type || !sessionId) return res.status(400).json({ error: 'type and sessionId required' });
  const ip = getClientIp(req);
  const ua = req.headers['user-agent'] || '';
  const ref = req.headers['referer'] || req.headers['referrer'] || '';
  addEvent(type, sessionId, ip, ua, ref, extra || {});
  res.json({ ok: true });
}

function handleStats(req, res) {
  res.json(getStats());
}

function handleEventsList(req, res) {
  const limit = parseInt(req.query.limit) || 50;
  const offset = parseInt(req.query.offset) || 0;
  res.json(getEvents(limit, offset));
}

function handleRealtime(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Access-Control-Allow-Origin': '*',
  });
  res.write(`data: ${JSON.stringify({ type: 'stats', stats: getStats() })}\n\n`);

  sseClients.push(res);

  const pingTimer = setInterval(() => {
    try {
      res.write(`:ping\n\n`);
    } catch {
      clearInterval(pingTimer);
    }
  }, 30000);

  req.on('close', () => {
    clearInterval(pingTimer);
    const idx = sseClients.indexOf(res);
    if (idx !== -1) sseClients.splice(idx, 1);
  });
}

function init() {
  startSaveTimer();
  process.on('SIGINT', () => { stopSaveTimer(); saveAnalytics(); process.exit(0); });
  process.on('SIGTERM', () => { stopSaveTimer(); saveAnalytics(); process.exit(0); });
}

// Track an event programmatically (for internal server tracking)
function track(type, sessionId, ip, ua, ref, extra) {
  addEvent(type, sessionId || 'server', ip || 'internal', ua || '', ref || '', extra || {});
}

module.exports = { init, handleEvent, handleStats, handleEventsList, handleRealtime, track, getStats, saveAnalytics };
