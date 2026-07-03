// ── Analytics ─────────────────────────────────────────────────────────
const anSid = localStorage.getItem('an_sid') || (Date.now().toString(36) + Math.random().toString(36).slice(2, 10));
if (!localStorage.getItem('an_sid')) localStorage.setItem('an_sid', anSid);
function anTrack(type, data) {
  fetch('/api/analytics/event', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type, sessionId: anSid, data: data || {} }) }).catch(() => {});
}
let anHbTimer = null;
let anEventSource = null;
function anStartHeartbeat(extra) {
  if (anHbTimer) clearInterval(anHbTimer);
  anHbTimer = setInterval(() => anTrack('heartbeat', extra || {}), 30000);
}
function anStopHeartbeat() { if (anHbTimer) { clearInterval(anHbTimer); anHbTimer = null; } }
anTrack('pageview', { url: location.href });

// ── State ─────────────────────────────────────────────────────────────
let providers = {};
let providerOrder = [];
let allStreams = [];
let player = null;
let hlsInstance = null;
let hlsLevels = [];
let hlsAudioTracks = [];
let currentHlsLevel = -1;
let currentHlsAudio = -1;
let qualityFilter = { '4k': true, '1080': true, '720': true, 'sd': true, 'unknown': true };

async function api(path, opts = {}) {
  const res = await fetch(path, {
    headers: { 'Content-Type': 'application/json' },
    ...opts
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

function switchView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('view-' + name).classList.add('active');
  document.querySelector(`.nav-btn[data-view="${name}"]`).classList.add('active');
  if (name === 'providers') loadProvidersView();
  if (name === 'settings') loadSettings();
  if (name === 'filters') loadFilters();
  if (name === 'analytics') loadAnalytics();
  if (name === 'info') loadInfo();
}

async function doSearch() {
  const query = document.getElementById('searchInput').value.trim();
  if (!query) return;
  const type = document.getElementById('typeSelect').value;
  const season = document.getElementById('seasonInput').value;
  const episode = document.getElementById('episodeInput').value;

  const container = document.getElementById('results');
  const status = document.getElementById('statusBar');
  container.innerHTML = '<div class="loading">Searching all enabled providers...</div>';
  status.textContent = 'Searching...';

  try {
    let url = `/api/search?q=${encodeURIComponent(query)}&type=${type}`;
    if (season) url += `&season=${season}`;
    if (episode) url += `&episode=${episode}`;

    const data = await api(url);
    const total = data.results.reduce((s, r) => s + r.streams.length, 0);
    status.textContent = `Found ${total} streams from ${data.results.length} providers`;

    allStreams = [];
    for (const group of data.results) {
      for (const s of group.streams) {
        allStreams.push({
          ...s,
          _providerName: group.providerName,
          _providerId: group.provider,
        });
      }
    }

    if (data.results.length === 0) {
      container.innerHTML = '<div class="no-results">No streams found. Try a different ID or media type.<br>' +
        (data.errors.length ? `<small style="color:var(--text2)">${data.errors.length} providers errored</small>` : '') + '</div>';
      return;
    }

    let html = '';
    for (const group of data.results) {
      html += `
        <div class="provider-group">
          <div class="provider-group-header" onclick="this.nextElementSibling.classList.toggle('hidden')">
            <div>
              <h3>${group.providerName}</h3>
              <div class="server-tags">${group.servers.map(s => `<span class="server-tag">${s}</span>`).join('')}</div>
            </div>
            <span class="badge">${group.streams.length} streams</span>
          </div>
          <div class="stream-list">
            ${group.streams.map(s => {
              const qual = (s.quality || '').toLowerCase();
              const qClass = qual.includes('4k') || qual.includes('2160') || qual.includes('1080') ? 'q-high' :
                            qual.includes('720') ? 'q-med' : 'q-low';
              const proxyUrl = s.proxyUrl || s.url || '';
              const escapedUrl = encodeURIComponent(proxyUrl);
              const url = s.url || '';
              return `
                <div class="stream-card ${qClass}" data-quality="${(s.quality || 'Auto').replace(/"/g, '&quot;')}" onclick="playStream('${escapedUrl}', '${(s.name || 'Stream').replace(/'/g, "\\'")}', '${(s.quality || 'Auto').replace(/'/g, "\\'")}', '${(s.type || '').replace(/'/g, "\\'")}')">
                  <strong>${s.name || 'Stream'}</strong>
                  <div class="title">${(s.title || '').substring(0, 150)}</div>
                  <div class="url">${url.length > 120 ? url.substring(0, 120) + '...' : url}</div>
                  <div class="meta">
                    <span>🎯 ${s.quality || 'Auto'}</span>
                    ${s.size ? `<span>💾 ${s.size}</span>` : ''}
                    <span>🔗 ${s.provider || group.providerName}</span>
                  </div>
                  <span class="play-badge">▶️ Play</span>
                </div>`;
            }).join('')}
          </div>
        </div>`;
    }
    container.innerHTML = html;
    applyQualityFilter();
  } catch (e) {
    container.innerHTML = `<div class="error-box">Error: ${e.message}</div>`;
    status.textContent = 'Search failed';
  }
}

function detectType(url, type) {
  if (type === 'm3u8' || url.includes('.m3u8')) return 'application/x-mpegURL';
  if (type === 'mpd' || url.includes('.mpd')) return 'application/dash+xml';
  return 'video/mp4';
}

function classifyQuality(quality) {
  const q = (quality || '').toLowerCase();
  if (q.includes('4k') || q.includes('2160')) return '4k';
  if (q.includes('1080')) return '1080';
  if (q.includes('720')) return '720';
  if (q.includes('480') || q.includes('360') || q.includes('240') || q.includes('sd')) return 'sd';
  return 'unknown';
}

function matchesQualityFilter(quality) {
  return qualityFilter[classifyQuality(quality)] !== false;
}

function applyQualityFilter() {
  document.querySelectorAll('.stream-card').forEach(function(card) {
    const quality = card.dataset.quality || '';
    const visible = matchesQualityFilter(quality);
    card.style.display = visible ? '' : 'none';
  });
  document.querySelectorAll('.source-item').forEach(function(item) {
    const quality = item.dataset.quality || '';
    const visible = matchesQualityFilter(quality);
    item.style.display = visible ? '' : 'none';
  });
  document.querySelectorAll('.provider-group').forEach(function(group) {
    const list = group.querySelector('.stream-list');
    if (!list) return;
    const visibleCards = list.querySelectorAll('.stream-card[style*="display: none"]');
    const totalCards = list.querySelectorAll('.stream-card').length;
    group.style.display = visibleCards.length === totalCards ? 'none' : '';
  });
  document.querySelectorAll('.source-group').forEach(function(group) {
    const visibleItems = group.querySelectorAll('.source-item:not([style*="display: none"])');
    const allItems = group.querySelectorAll('.source-item').length;
    group.style.display = visibleItems.length === 0 && allItems > 0 ? 'none' : '';
  });
}

function loadFilters() {
  fetch('/api/settings').then(function(r) { return r.json(); }).then(function(cfg) {
    if (cfg.qualityFilter) qualityFilter = cfg.qualityFilter;
    const keys = ['4k', '1080', '720', 'sd', 'unknown'];
    keys.forEach(function(k) {
      const el = document.getElementById('filter' + k.charAt(0).toUpperCase() + k.slice(1));
      if (el) el.checked = qualityFilter[k] !== false;
    });
    applyQualityFilter();
  }).catch(function() {});
}

function saveFilterState() {
  qualityFilter['4k'] = document.getElementById('filter4k').checked;
  qualityFilter['1080'] = document.getElementById('filter1080').checked;
  qualityFilter['720'] = document.getElementById('filter720').checked;
  qualityFilter['sd'] = document.getElementById('filterSd').checked;
  qualityFilter['unknown'] = document.getElementById('filterUnknown').checked;
  fetch('/api/settings', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ qualityFilter: qualityFilter })
  }).then(function() {
    applyQualityFilter();
    const status = document.getElementById('filterStatus');
    if (status) { status.textContent = '✅ Filters saved'; setTimeout(function() { status.textContent = ''; }, 2000); }
  }).catch(function() {});
}

function toggleAllFilters(enable) {
  ['filter4k', 'filter1080', 'filter720', 'filterSd', 'filterUnknown'].forEach(function(id) {
    const el = document.getElementById(id);
    if (el) el.checked = enable;
  });
  saveFilterState();
}

function playStream(encodedUrl, name, quality, type) {
  const url = decodeURIComponent(encodedUrl);
  switchView('player');
  document.getElementById('playerMeta').textContent = `${name} ${quality ? '- ' + quality : ''}`;
  anTrack('play', { url, name, quality, type });
  anStartHeartbeat({ currentStream: name, currentUrl: location.href });
  loadPlayer(url, name, type);
  renderSourceSelector();
}

const HLS_CONFIG = {
  maxBufferLength: 60,
  maxMaxBufferLength: 120,
  backBufferLength: 30,
  startLevel: -1,
  abrEwmaDefaultEstimate: 5e6,
  enableWorker: true,
  lowLatencyMode: false,
};

function preloadRemaining(exceptUrl) {
  for (const s of allStreams) {
    const su = s.proxyUrl || s.url;
    if (su !== exceptUrl) {
      fetch(su, { method: 'GET', headers: { 'Range': 'bytes=0-0' } }).catch(() => {});
    }
  }
}

function updateHlsLevelLabel(btn) {
  if (!btn) return;
  if (currentHlsLevel === -1 || !hlsLevels[currentHlsLevel]) {
    btn.textContent = '📺 Auto';
  } else {
    const l = hlsLevels[currentHlsLevel];
    btn.textContent = '📺 ' + (l.height || '?') + 'p' + (l.bitrate ? ' (' + Math.round(l.bitrate/1000) + 'kbps)' : '');
  }
}

function updateHlsAudioLabel(btn) {
  if (!btn) return;
  if (hlsAudioTracks[currentHlsAudio]) {
    btn.textContent = '🔊 ' + (hlsAudioTracks[currentHlsAudio].name || 'Track ' + (currentHlsAudio + 1));
  } else {
    btn.textContent = '🔊 Audio';
  }
}

function renderHlsControls() {
  const container = document.getElementById('playerContainer');
  let bar = container.querySelector('.hls-controls');
  if (!bar) {
    bar = document.createElement('div');
    bar.className = 'hls-controls';
    container.appendChild(bar);
  }

  const hasLevels = hlsLevels.length > 0;
  const hasAudio = hlsAudioTracks.length > 1;

  if (!hasLevels && !hasAudio) {
    bar.style.display = 'none';
    return;
  }
  bar.style.display = 'flex';

  if (hasLevels && !bar.querySelector('.hls-quality-btn')) {
    const qBtn = document.createElement('button');
    qBtn.className = 'hls-btn hls-quality-btn';
    updateHlsLevelLabel(qBtn);
    qBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      const dd = this.querySelector('.hls-dropdown');
      if (dd) dd.classList.toggle('open');
    });
    const dd = document.createElement('div');
    dd.className = 'hls-dropdown';
    qBtn.appendChild(dd);
    bar.appendChild(qBtn);
  }

  if (hasAudio && !bar.querySelector('.hls-audio-btn')) {
    const aBtn = document.createElement('button');
    aBtn.className = 'hls-btn hls-audio-btn';
    updateHlsAudioLabel(aBtn);
    aBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      const dd = this.querySelector('.hls-dropdown');
      if (dd) dd.classList.toggle('open');
    });
    const dd = document.createElement('div');
    dd.className = 'hls-dropdown';
    aBtn.appendChild(dd);
    bar.appendChild(aBtn);
  }

  // Populate quality dropdown
  const qBtn = bar.querySelector('.hls-quality-btn');
  if (qBtn) {
    const dd = qBtn.querySelector('.hls-dropdown');
    if (dd) {
      let html = '<button data-level="-1" class="' + (currentHlsLevel === -1 ? 'is-active' : '') + '">Auto</button>';
      hlsLevels.forEach(function(l, i) {
        const label = (l.height || '?') + 'p' + (l.bitrate ? ' (' + Math.round(l.bitrate/1000) + 'kbps)' : '');
        html += '<button data-level="' + i + '" class="' + (currentHlsLevel === i ? 'is-active' : '') + '">' + label + '</button>';
      });
      dd.innerHTML = html;
      dd.querySelectorAll('button').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
          e.stopPropagation();
          const from = currentHlsLevel;
          currentHlsLevel = parseInt(this.dataset.level);
          if (hlsInstance) hlsInstance.currentLevel = currentHlsLevel;
          updateHlsLevelLabel(qBtn);
          dd.classList.remove('open');
          anTrack('quality_change', { from, to: currentHlsLevel, label: currentHlsLevel === -1 ? 'auto' : (hlsLevels[currentHlsLevel] ? hlsLevels[currentHlsLevel].height + 'p' : '?') });
        });
      });
    }
  }

  // Populate audio dropdown
  const aBtn = bar.querySelector('.hls-audio-btn');
  if (aBtn) {
    const dd = aBtn.querySelector('.hls-dropdown');
    if (dd) {
      let html = '';
      hlsAudioTracks.forEach(function(t, i) {
        html += '<button data-track="' + i + '" class="' + (currentHlsAudio === i ? 'is-active' : '') + '">' + (t.name || 'Track ' + (i + 1)) + '</button>';
      });
      dd.innerHTML = html;
      dd.querySelectorAll('button').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
          e.stopPropagation();
          const from = currentHlsAudio;
          currentHlsAudio = parseInt(this.dataset.track);
          if (hlsInstance) hlsInstance.audioTrack = currentHlsAudio;
          updateHlsAudioLabel(aBtn);
          dd.classList.remove('open');
          anTrack('audio_change', { from, to: currentHlsAudio, label: hlsAudioTracks[currentHlsAudio] ? hlsAudioTracks[currentHlsAudio].name : '?' });
        });
      });
    }
  }
}

function closeAllHlsDropdowns() {
  document.querySelectorAll('.hls-dropdown.open').forEach(function(d) { d.classList.remove('open'); });
}

function showLoader(text) {
  const loader = document.getElementById('playerLoader');
  if (!loader) return;
  loader.querySelector('.player-loader-text').textContent = text || 'Loading stream...';
  loader.style.display = 'flex';
}

function hideLoader() {
  const loader = document.getElementById('playerLoader');
  if (loader) loader.style.display = 'none';
}

function loadPlayer(url, title, type) {
  const video = document.getElementById('plyrVideo');

  showLoader('Loading ' + (title || 'stream') + '...');

  if (hlsInstance) {
    hlsInstance.destroy();
    hlsInstance = null;
  }
  if (player) {
    player.destroy();
    player = null;
  }

  hlsLevels = [];
  hlsAudioTracks = [];
  currentHlsLevel = -1;
  currentHlsAudio = -1;

  const mimeType = detectType(url, type);
  video.removeAttribute('src');
  video.innerHTML = '';
  video.load();

  function onCanPlay() {
    hideLoader();
    video.removeEventListener('canplay', onCanPlay);
    video.removeEventListener('playing', onCanPlay);
  }
  video.addEventListener('canplay', onCanPlay);
  video.addEventListener('playing', onCanPlay);

  if (mimeType === 'application/x-mpegURL' && Hls.isSupported()) {
    hlsInstance = new Hls(HLS_CONFIG);
    hlsInstance.loadSource(url);
    hlsInstance.attachMedia(video);
    hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
      hlsLevels = hlsInstance.levels || [];
      hlsAudioTracks = hlsInstance.audioTracks || [];
      currentHlsLevel = hlsInstance.currentLevel;
      currentHlsAudio = hlsInstance.audioTrack;
      renderHlsControls();
      player = new Plyr(video, {
        controls: ['play-large', 'play', 'progress', 'current-time', 'duration', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
        settings: ['quality', 'speed'],
      });
    });
    hlsInstance.on(Hls.Events.ERROR, (e, data) => {
      if (data.fatal) { anTrack('error', { message: data.type + ': ' + data.details, url }); hideLoader(); }
    });
    hlsInstance.on(Hls.Events.LEVEL_LOADED, () => hideLoader());
  } else {
    video.onerror = function() { hideLoader(); };
    video.src = url;
    video.load();
    player = new Plyr(video, {
      controls: ['play-large', 'play', 'progress', 'current-time', 'duration', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
      settings: ['quality', 'speed'],
    });
  }

  preloadRemaining(url);
}

async function pingStream(url, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(function() { controller.abort(); }, timeoutMs || 8000);
  const start = performance.now();
  try {
    const res = await fetch(url, { method: 'GET', headers: { 'Range': 'bytes=0-0' }, signal: controller.signal });
    clearTimeout(timer);
    if (res.ok || res.status === 206) {
      return { url, time: performance.now() - start, alive: true };
    }
    return { url, time: Infinity, alive: false };
  } catch (e) {
    clearTimeout(timer);
    return { url, time: Infinity, alive: false };
  }
}

async function selectFastestStream() {
  if (allStreams.length === 0) return null;
  const tests = allStreams.map(function(s) {
    return pingStream(s.proxyUrl || s.url, 8000);
  });
  appendTestLog('info', '⏱️ Ping-testing <strong>' + allStreams.length + '</strong> stream(s) to find the fastest...');
  const results = await Promise.all(tests);
  const alive = results.filter(function(r) { return r.alive; }).sort(function(a, b) { return a.time - b.time; });
  if (alive.length === 0) {
    appendTestLog('warn', '⚠️ No responsive streams found — falling back to first result');
    return allStreams[0];
  }
  const best = alive[0];
  const chosen = allStreams.find(function(s) { return (s.proxyUrl || s.url) === best.url; });
  appendTestLog('success', '⚡ Selected fastest stream — <strong>' + (chosen ? chosen.quality || 'Auto' : '?') + '</strong> (' + Math.round(best.time) + 'ms)' + (chosen ? ' from <strong>' + chosen._providerName + '</strong>' : ''));
  return chosen || allStreams[0];
}

function renderSourceSelector() {
  const selector = document.getElementById('sourceSelector');
  const list = document.getElementById('sourceList');
  selector.style.display = 'block';

  const groups = {};
  for (const s of allStreams) {
    const key = s._providerName || 'Unknown';
    if (!groups[key]) groups[key] = [];
    groups[key].push(s);
  }

  let html = '';
  for (const [provider, streams] of Object.entries(groups)) {
    html += `<div class="source-group">
      <div class="source-group-title">${provider}</div>`;
    for (const s of streams) {
      const qual = (s.quality || '').toLowerCase();
      const qClass = qual.includes('4k') || qual.includes('2160') ? 'q-4k' :
                    qual.includes('1080') ? 'q-1080' :
                    qual.includes('720') ? 'q-720' : 'q-auto';
      const proxyUrl = s.proxyUrl || s.url || '';
      const encodedUrl = encodeURIComponent(proxyUrl);
      html += `<div class="source-item ${qClass}" data-quality="${(s.quality || 'Auto').replace(/"/g, '&quot;')}" onclick="playStream('${encodedUrl}', '${(s.name || 'Stream').replace(/'/g, "\\'")}', '${(s.quality || 'Auto').replace(/'/g, "\\'")}', '${(s.type || '').replace(/'/g, "\\'")}')">
        <span class="source-name">${s.name || 'Stream'}</span>
        <span class="source-quality">${s.quality || 'Auto'}</span>
        ${s.size ? `<span class="source-size">${s.size}</span>` : ''}
      </div>`;
    }
    html += `</div>`;
  }
  list.innerHTML = html;
  applyQualityFilter();
}

async function toggleProvider(id) {
  await api(`/api/providers/${id}/toggle`, { method: 'POST' });
}

async function toggleSubServer(providerId, serverName, enable) {
  const p = providers[providerId];
  if (!p) return;
  let disabled = [...(p.disabledServers || [])];
  if (enable) {
    disabled = disabled.filter(s => s !== serverName);
  } else {
    if (!disabled.includes(serverName)) disabled.push(serverName);
  }
  p.disabledServers = disabled;
  await api(`/api/providers/${providerId}/servers`, {
    method: 'POST',
    body: JSON.stringify({ disabledServers: disabled })
  });
  const section = document.querySelector(`.sub-servers[data-provider="${providerId}"]`);
  if (section) renderSubServers(section, providerId, p);
}

function renderSubServers(container, providerId, p) {
  const servers = p._discoveredServers || [];
  if (!servers.length) {
    container.innerHTML = '<h4>🔌 Sub-Servers</h4><div class="loading" style="padding:8px">No sub-servers discovered. Search with this provider first.</div>';
    return;
  }
  container.innerHTML = `
    <h4>🔌 Sub-Servers (${servers.length})</h4>
    <div class="sub-server-list">
      ${servers.map(s => {
        const disabled = (p.disabledServers || []).includes(s);
        return `
          <div class="sub-server-item">
            <label class="toggle small-toggle">
              <input type="checkbox" ${disabled ? '' : 'checked'} onchange="toggleSubServer('${providerId}', '${s.replace(/'/g, "\\'")}', this.checked)">
              <span class="slider"></span>
            </label>
            <span style="${disabled ? 'text-decoration:line-through;color:var(--text2)' : ''}">${s}</span>
          </div>`;
      }).join('')}
    </div>`;
}

async function discoverServers(providerId, btn) {
  btn.disabled = true;
  btn.textContent = '⏳ Scanning...';
  try {
    const data = await api(`/api/providers/${providerId}/discover?q=550&type=movie`);
    if (!providers[providerId]) return;
    providers[providerId]._discoveredServers = data.servers || [];
    const container = document.querySelector(`.sub-servers[data-provider="${providerId}"]`);
    if (container) renderSubServers(container, providerId, providers[providerId]);
    btn.textContent = `✅ Found ${data.servers.length} servers`;
  } catch (e) {
    btn.textContent = '❌ Failed';
  }
  setTimeout(() => { btn.disabled = false; if (btn.textContent !== '✅ ...') btn.textContent = '🔍 Discover Servers'; }, 3000);
}

async function movePriority(id, dir) {
  const p = providers[id];
  if (!p) return;
  const newP = p.priority + dir;
  const other = Object.entries(providers).find(([, v]) => v.priority === newP);
  if (!other) return;
  await api(`/api/providers/${id}/priority`, { method: 'POST', body: JSON.stringify({ priority: newP }) });
  await api(`/api/providers/${other[0]}/priority`, { method: 'POST', body: JSON.stringify({ priority: p.priority }) });
  loadProvidersView();
}

async function loadProvidersView() {
  providers = await api('/api/providers');
  const container = document.getElementById('providerList');
  providerOrder = Object.entries(providers).sort((a, b) => (a[1].priority || 999) - (b[1].priority || 999));

  let html = `
    <div class="toggle-all-bar">
      <button class="btn-primary" onclick="toggleAllProviders(true)">✅ Enable All</button>
      <button class="btn-secondary" onclick="toggleAllProviders(false)">❌ Disable All</button>
      <span style="margin-left:12px;font-size:12px;color:var(--text2)">${Object.values(providers).filter(p => p.enabled).length}/${Object.keys(providers).length} enabled</span>
    </div>`;
  for (const [id, p] of providerOrder) {
    html += `
      <div class="provider-item" data-id="${id}">
        <span class="drag-handle">⠿</span>
        <div class="info">
          <div class="name">${p.name || id}</div>
          <div class="meta">${p.file || ''} · ${(p.supportedTypes || []).join(', ')}</div>
          <div class="sub-servers" data-provider="${id}">
            <h4>🔌 Sub-Servers</h4>
            <button class="btn-primary" style="font-size:11px;padding:4px 12px" onclick="discoverServers('${id}', this)">🔍 Discover Servers</button>
          </div>
        </div>
        <div class="controls">
          <div class="priority-btns">
            <button onclick="movePriority('${id}', -1)" title="Move up">▲</button>
            <button onclick="movePriority('${id}', 1)" title="Move down">▼</button>
          </div>
          <span style="font-size:12px;color:var(--text2);width:24px;text-align:center">${p.priority}</span>
          <label class="toggle">
            <input type="checkbox" ${p.enabled ? 'checked' : ''} onchange="toggleProvider('${id}')">
            <span class="slider"></span>
          </label>
        </div>
      </div>`;
  }
  container.innerHTML = html;
  document.getElementById('providerCount').textContent = `${Object.keys(providers).length} providers loaded`;
}

async function toggleAllProviders(enabled) {
  await api('/api/providers/toggle-all', { method: 'POST', body: JSON.stringify({ enabled }) });
  loadProvidersView();
}

async function loadSettings() {
  const cfg = await api('/api/settings');
  document.getElementById('setPort').value = cfg.port || 3000;
  document.getElementById('setTimeout').value = cfg.globalTimeout || 20000;
  document.getElementById('setMaxResults').value = cfg.maxResultsPerProvider || 20;
  document.getElementById('setTmdbKey').value = cfg.tmdbApiKey || '';
  document.getElementById('setProxyEnabled').checked = cfg.proxy?.enabled || false;
  document.getElementById('setProxyType').value = cfg.proxy?.type || 'http';
  document.getElementById('setProxyHost').value = cfg.proxy?.host || '';
  document.getElementById('setProxyPort').value = cfg.proxy?.port || '';
  document.getElementById('setProxyUser').value = cfg.proxy?.username || '';
  document.getElementById('setProxyPass').value = cfg.proxy?.password || '';
  document.getElementById('setAutoplay').checked = cfg.autoplay !== false;
  document.getElementById('setIntroSkip').checked = cfg.introSkip === true;
  if (cfg.qualityFilter) {
    qualityFilter = cfg.qualityFilter;
    ['4k', '1080', '720', 'sd', 'unknown'].forEach(function(k) {
      const el = document.getElementById('filter' + k.charAt(0).toUpperCase() + k.slice(1));
      if (el) el.checked = qualityFilter[k] !== false;
    });
    applyQualityFilter();
  }
}

async function saveSettings() {
  const body = {
    port: parseInt(document.getElementById('setPort').value) || 3000,
    globalTimeout: parseInt(document.getElementById('setTimeout').value) || 20000,
    maxResultsPerProvider: parseInt(document.getElementById('setMaxResults').value) || 20,
    tmdbApiKey: document.getElementById('setTmdbKey').value,
    proxy: {
      enabled: document.getElementById('setProxyEnabled').checked,
      type: document.getElementById('setProxyType').value,
      host: document.getElementById('setProxyHost').value,
      port: document.getElementById('setProxyPort').value,
      username: document.getElementById('setProxyUser').value,
      password: document.getElementById('setProxyPass').value,
    }
  };
  body.autoplay = document.getElementById('setAutoplay').checked;
  body.introSkip = document.getElementById('setIntroSkip').checked;
  await api('/api/settings', { method: 'PUT', body: JSON.stringify(body) });
  const status = document.getElementById('settingsStatus');
  status.textContent = '✅ Settings saved! Restart server to apply port change.';
  setTimeout(() => status.textContent = '', 5000);
}

async function loadInfo() {
  const container = document.getElementById('infoContent');
  try {
    const info = await api('/api/info');
    const ip = info.ips[0] || 'localhost';
    container.innerHTML = `
      <div class="info-section">
        <h3>📡 Server Details</h3>
        <table class="info-table">
          <tr><th>Hostname</th><td>${info.hostname}</td></tr>
          <tr><th>Port</th><td>${info.port}</td></tr>
          <tr><th>Platform</th><td>${info.platform}</td></tr>
          <tr><th>Server URL</th><td><code>http://${ip}:${info.port}</code> <button class="copy-btn" onclick="copyUrl('http://${ip}:${info.port}')">📋</button></td></tr>
        </table>
      </div>
      <div class="info-section">
        <h3>🌐 Network Access</h3>
        <p>Available on these addresses:</p>
        <ul style="list-style:none;padding:0;margin:8px 0">
          ${info.ips.map(ip => `
            <li style="padding:4px 0;display:flex;align-items:center;gap:8px">
              <code style="background:var(--bg);padding:4px 8px;border-radius:4px">http://${ip}:${info.port}</code>
              <button class="copy-btn" onclick="copyUrl('http://${ip}:${info.port}')">📋 Copy</button>
            </li>`).join('')}
          <li style="padding:4px 0;display:flex;align-items:center;gap:8px">
            <code style="background:var(--bg);padding:4px 8px;border-radius:4px">http://localhost:${info.port}</code>
            <button class="copy-btn" onclick="copyUrl('http://localhost:${info.port}')">📋 Copy</button>
          </li>
        </ul>
      </div>
      <div class="info-section">
        <h3>🔗 API Reference</h3>
        <table class="info-table">
          <tr><th>Method</th><th>Endpoint</th><th>Description</th></tr>
          <tr><td>GET</td><td><code>/api/search?q=TMDB_ID&type=movie</code></td><td>Search movie streams</td></tr>
          <tr><td>GET</td><td><code>/api/search?q=ID&type=tv&season=1&episode=1</code></td><td>Get TV episode streams</td></tr>
          <tr><td>GET</td><td><code>/api/providers</code></td><td>List providers & status</td></tr>
          <tr><td>POST</td><td><code>/api/providers/:id/toggle</code></td><td>Toggle provider on/off</td></tr>
          <tr><td>POST</td><td><code>/api/providers/:id/priority</code></td><td>Set provider priority</td></tr>
          <tr><td>POST</td><td><code>/api/providers/:id/servers</code></td><td>Update disabled sub-servers</td></tr>
          <tr><td>GET</td><td><code>/api/settings</code></td><td>Get settings</td></tr>
          <tr><td>PUT</td><td><code>/api/settings</code></td><td>Update settings</td></tr>
        </table>
      </div>
      <div class="info-section">
        <h3>🚀 Deployment</h3>
        <pre># Run directly
node server/server.js

# With PM2 (recommended for production)
npm install -g pm2
pm2 start server/server.js --name streamscraper
pm2 save
pm2 startup

# nginx reverse proxy for custom domain
server {
    listen 80;
    server_name yourdomain.com;
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}</pre>
      </div>
      <div class="info-section">
        <h3>🔒 Security Note</h3>
        <p>When deploying on a public VPS, consider adding authentication or firewall rules. The API provides direct access to streaming links. Use environment variables or a reverse proxy for production.</p>
      </div>`;
  } catch (e) {
    container.innerHTML = `<div class="error-box">Failed to load info: ${e.message}</div>`;
  }
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('.hls-btn')) closeAllHlsDropdowns();
});

// ── Analytics Dashboard ───────────────────────────────────────────────

function loadAnalytics() {
  fetch('/api/analytics/stats').then(function(r) { return r.json(); }).then(function(stats) {
    renderAnalyticsStats(stats);
  }).catch(function() {});
  loadAnalyticsEvents();
  connectAnalyticsRealtime();
}

function renderAnalyticsStats(stats) {
  var t = stats.totals;
  document.getElementById('anPageViews').textContent = t.pageViews || 0;
  document.getElementById('anPlays').textContent = t.plays || 0;
  document.getElementById('anErrors').textContent = t.errors || 0;
  document.getElementById('anUnique').textContent = (t.uniqueIps || []).length || 0;
  document.getElementById('anActive').textContent = stats.realtime.activeNow || 0;

  // Hourly chart
  var hourly = stats.hourly || {};
  var hours = Object.keys(hourly).sort();
  var container = document.getElementById('anHourlyChart');
  if (hours.length === 0) {
    container.innerHTML = '<div class="an-empty">No data yet</div>';
  } else {
    var maxVal = 1;
    hours.forEach(function(h) { var r = Math.max(hourly[h].pageViews, hourly[h].plays); if (r > maxVal) maxVal = r; });
    var html = '<div class="an-chart-bars">';
    hours.forEach(function(h) {
      var d = hourly[h];
      var pct = Math.max(d.pageViews, d.plays) / maxVal * 100;
      var label = h.slice(5, 10) + 'h' + h.slice(11, 13);
      html += '<div class="an-chart-col" title="' + h + ' | Views: ' + d.pageViews + ' Plays: ' + d.plays + '">';
      html += '<div class="an-chart-bar an-bar-plays" style="height:' + (d.plays / maxVal * 100) + '%"></div>';
      html += '<div class="an-chart-bar an-bar-views" style="height:' + (d.pageViews / maxVal * 100) + '%"></div>';
      html += '<div class="an-chart-label">' + label + '</div></div>';
    });
    html += '</div><div class="an-chart-legend"><span class="an-legend-dot" style="background:var(--accent)"></span> Views <span class="an-legend-dot" style="background:var(--green)"></span> Plays</div>';
    container.innerHTML = html;
  }

  // Active users
  var activeHtml = '';
  var sessions = stats.realtime.sessions || {};
  var sessionKeys = Object.keys(sessions);
  if (sessionKeys.length === 0) {
    activeHtml = '<div class="an-empty">No active users</div>';
  } else {
    activeHtml = '<table class="an-table"><thead><tr><th>IP</th><th>Agent</th><th>Stream</th><th>Last Ping</th></tr></thead><tbody>';
    var now = Date.now();
    sessionKeys.forEach(function(sid) {
      var s = sessions[sid];
      if (now - s.lastPing > 120000) return;
      var ago = Math.round((now - s.lastPing) / 1000);
      var agoStr = ago < 60 ? ago + 's ago' : Math.round(ago / 60) + 'm ago';
      var ua = (s.userAgent || '').substring(0, 50);
      activeHtml += '<tr><td>' + (s.ip || '?') + '</td><td title="' + (s.userAgent || '') + '">' + ua + '</td><td>' + (s.currentStream || '-') + '</td><td>' + agoStr + '</td></tr>';
    });
    activeHtml += '</tbody></table>';
  }
  document.getElementById('anActiveUsers').innerHTML = activeHtml;
}

function loadAnalyticsEvents() {
  var filter = document.getElementById('anEventFilter').value;
  var url = '/api/analytics/events?limit=100';
  fetch(url).then(function(r) { return r.json(); }).then(function(events) {
    var container = document.getElementById('anEventsList');
    if (events.length === 0) {
      container.innerHTML = '<div class="an-empty">No events yet</div>';
      return;
    }
    var html = '<table class="an-table"><thead><tr><th>Time</th><th>Type</th><th>Session</th><th>IP</th><th>Details</th></tr></thead><tbody>';
    events.forEach(function(e) {
      if (filter !== 'all' && e.type !== filter) return;
      var time = new Date(e.time).toLocaleTimeString();
      var typeClass = 'an-type-' + e.type;
      var details = '';
      if (e.type === 'play' && e.data) details = e.data.name || e.data.url || '';
      if (e.type === 'error' && e.data) details = e.data.message || '';
      if (e.type === 'quality_change' && e.data) details = (e.data.from === -1 ? 'auto' : e.data.label) + ' → ' + (e.data.to === -1 ? 'auto' : e.data.label);
      if (e.type === 'audio_change' && e.data) details = e.data.label || '';
      html += '<tr><td>' + time + '</td><td><span class="an-type-badge ' + typeClass + '">' + e.type + '</span></td><td class="an-sid">' + (e.sessionId || '').slice(0, 8) + '</td><td>' + (e.ip || '') + '</td><td class="an-details">' + details + '</td></tr>';
    });
    html += '</tbody></table>';
    container.innerHTML = html;
  }).catch(function() {});
}

function connectAnalyticsRealtime() {
  if (anEventSource) anEventSource.close();
  anEventSource = new EventSource('/api/analytics/realtime');
  anEventSource.onmessage = function(e) {
    try {
      var msg = JSON.parse(e.data);
      if (msg.type === 'stats' && msg.stats) renderAnalyticsStats(msg.stats);
    } catch(err) {}
  };
  anEventSource.onerror = function() {
    anEventSource.close();
    setTimeout(connectAnalyticsRealtime, 5000);
  };
}

// ── Test Panel ─────────────────────────────────────────────────────────
let testEventSource = null;
let testLogLines = 0;

function startTest() {
  const query = document.getElementById('testTmdbId').value.trim();
  if (!query) { alert('Enter a TMDB ID'); return; }
  const type = document.getElementById('testTypeSelect').value;
  const season = document.getElementById('testSeason').value;
  const episode = document.getElementById('testEpisode').value;

  const panel = document.getElementById('testPanel');
  const log = document.getElementById('testLog');
  panel.style.display = 'block';
  log.innerHTML = '<div class="test-log-entry test-log-info"><span class="test-log-time">' + new Date().toLocaleTimeString() + '</span> 🚀 Starting scrape for <strong>' + query + '</strong> (' + type + (season ? ' S' + season + (episode ? 'E' + episode : '') : '') + ')...</div>';
  testLogLines = 1;

  document.getElementById('testBtn').disabled = true;
  document.getElementById('testBtn').textContent = '⏳ Scraping...';

  if (testEventSource) testEventSource.close();

  let url = '/api/search/stream?q=' + encodeURIComponent(query) + '&type=' + type;
  if (season) url += '&season=' + season;
  if (episode) url += '&episode=' + episode;

  testEventSource = new EventSource(url);

  testEventSource.addEventListener('start', function(e) {
    const data = JSON.parse(e.data);
    appendTestLog('info', '🔍 Testing ' + data.total + ' enabled provider(s)...');
  });

  testEventSource.addEventListener('provider-start', function(e) {
    const data = JSON.parse(e.data);
    appendTestLog('provider', '⏳ <strong>' + data.name + '</strong> scraping...');
  });

  testEventSource.addEventListener('stream', function(e) {
    const data = JSON.parse(e.data);
    appendTestLog('stream', '  ✅ <strong>' + data.name + '</strong> | ' + data.quality + ' → <span class="test-url">' + (data.url.length > 100 ? data.url.substring(0, 100) + '...' : data.url) + '</span>');
  });

  testEventSource.addEventListener('provider-done', function(e) {
    const data = JSON.parse(e.data);
    appendTestLog('success', '✅ <strong>' + data.name + '</strong> done — <strong>' + data.count + '</strong> stream(s) found' + (data.servers && data.servers.length ? ' [' + data.servers.join(', ') + ']' : ''));
  });

  testEventSource.addEventListener('provider-empty', function(e) {
    const data = JSON.parse(e.data);
    appendTestLog('warn', '⚠️ <strong>' + data.name + '</strong> returned no streams');
  });

  testEventSource.addEventListener('provider-error', function(e) {
    const data = JSON.parse(e.data);
    appendTestLog('error', '❌ <strong>' + data.name + '</strong> error: ' + data.error);
  });

  testEventSource.addEventListener('done', function(e) {
    const data = JSON.parse(e.data);
    const total = data.totalStreams || 0;
    appendTestLog(total > 0 ? 'success' : 'warn', '🏁 Scrape complete — <strong>' + total + '</strong> total stream(s) from <strong>' + (data.results ? data.results.length : 0) + '</strong> provider(s)' + (data.errors && data.errors.length ? ' (' + data.errors.length + ' error(s))' : ''));
    testEventSource.close();
    testEventSource = null;
    document.getElementById('testBtn').disabled = false;
    document.getElementById('testBtn').textContent = '🧪 Test';

    if (data.results && data.results.length > 0) {
      allStreams = [];
      for (const group of data.results) {
        for (const s of group.streams) {
          allStreams.push({ ...s, _providerName: group.providerName, _providerId: group.provider });
        }
      }
      renderSourceSelector();
      // Ping-test all streams and play the fastest responsive one
      selectFastestStream().then(function(best) {
        if (best) {
          const encodedUrl = encodeURIComponent(best.proxyUrl || best.url);
          playStream(encodedUrl, best.name || 'Stream', best.quality || 'Auto', best.type || '');
        }
      });
    } else {
      appendTestLog('warn', '💡 No streams loaded — source selector will not appear');
    }
  });

  testEventSource.onerror = function() {
    appendTestLog('error', '⚠️ SSE connection lost. Auto-retrying...');
    testEventSource.close();
    testEventSource = null;
    document.getElementById('testBtn').disabled = false;
    document.getElementById('testBtn').textContent = '🧪 Test';
  };
}

function appendTestLog(type, msg) {
  const log = document.getElementById('testLog');
  const entry = document.createElement('div');
  entry.className = 'test-log-entry test-log-' + type;
  entry.innerHTML = '<span class="test-log-time">' + new Date().toLocaleTimeString() + '</span> ' + msg;
  log.appendChild(entry);
  log.scrollTop = log.scrollHeight;
  testLogLines++;
  // Cap at 500 lines
  while (log.children.length > 500) log.removeChild(log.firstChild);
}

function clearTestLog() {
  document.getElementById('testLog').innerHTML = '';
  document.getElementById('testPanel').style.display = 'none';
  testLogLines = 0;
}

window.onload = () => { loadProvidersView(); };
