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
let preferredAudioLang = localStorage.getItem('preferredAudioLang') || '';
let currentLanguageVariants = [];
let currentSearchContext = { type: 'movie', season: null, episode: null };

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
  localStorage.setItem('activeView', name);
  if (name === 'providers') loadProvidersView();
  if (name === 'settings') loadSettings();
  if (name === 'filters') loadFilters();
  if (name === 'analytics') loadAnalytics();
  if (name === 'info') loadInfo();
  if (name === 'player') initPlyr();
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

  currentSearchContext = { type, season, episode };

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

    let html = '<div id="providerIndex" class="provider-index"></div>';
    for (const group of data.results) {
      const id = 'pg-' + (group.provider || Math.random().toString(36).slice(2, 8));
      html += `
        <div class="provider-group" id="${id}">
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
              const variants = s._languageVariants || [];
              const variantHtml = variants.length ? '<div class="lang-variants">' +
                variants.map(function(v) {
                  return '<span class="lang-variant-badge" data-provider="' + (group.provider || '') + '" data-catalog-id="' + v.catalogId + '" data-media-type="' + (v.media_type || '') + '" data-lang="' + v.language + '" onclick="event.stopPropagation();playLanguageVariant(this)">' + v.language + '</span>';
                }).join('') +
              '</div>' : '';
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
                  ${variantHtml}
                  <span class="play-badge">▶️ Play</span>
                </div>`;
            }).join('')}
          </div>
        </div>`;
    }
    container.innerHTML = html;
    renderProviderIndex(data.results);
    applyQualityFilter();
  } catch (e) {
    container.innerHTML = `<div class="error-box">Error: ${e.message}</div>`;
    status.textContent = 'Search failed';
  }
}

function renderProviderIndex(results) {
  const el = document.getElementById('providerIndex');
  if (!el || results.length < 2) { if (el) el.style.display = 'none'; return; }
  el.style.display = 'flex';
  el.innerHTML = results.map(function(g) {
    const id = 'pg-' + (g.provider || '');
    return '<button onclick="scrollToAndHighlight(\'' + id + '\');this.blur()">' + (g.providerName || g.provider) + '</button>';
  }).join('');
}

function scrollToAndHighlight(elId) {
  const el = document.getElementById(elId);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'end' });
  el.classList.remove('highlight-flash');
  // Force reflow so the animation restarts
  void el.offsetWidth;
  el.classList.add('highlight-flash');
  setTimeout(function() { el.classList.remove('highlight-flash'); }, 2000);
}

function applyIndexOpacity(val) {
  document.documentElement.style.setProperty('--index-opacity', val);
  document.getElementById('indexOpacityVal').textContent = Math.round(parseFloat(val) * 100) + '%';
  localStorage.setItem('indexOpacity', val);
}

function loadIndexOpacity() {
  const saved = localStorage.getItem('indexOpacity');
  if (saved) {
    document.documentElement.style.setProperty('--index-opacity', saved);
    const slider = document.getElementById('setIndexOpacity');
    if (slider) { slider.value = saved; document.getElementById('indexOpacityVal').textContent = Math.round(parseFloat(saved) * 100) + '%'; }
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

  const clicked = allStreams.find(function(s) { return (s.proxyUrl || s.url) === url; });
  currentLanguageVariants = (clicked && clicked._languageVariants) || [];

  const container = document.getElementById('playerContainer');
  container.dataset.provider = (clicked && clicked._providerId) || 'moovie-catalog';

  anTrack('play', { url, name, quality, type });
  anStartHeartbeat({ currentStream: name, currentUrl: location.href });
  loadPlayer(url, name, type);
  renderSourceSelector();
  renderDubsControls();
}

async function playLanguageVariant(el) {
  const provider = el.dataset.provider;
  const catalogId = el.dataset.catalogId;
  const mediaType = el.dataset.mediaType || 'movie';
  const lang = el.dataset.lang;
  if (!provider || !catalogId) return;

  const season = currentSearchContext.season || null;
  const episode = currentSearchContext.episode || null;
  const type = mediaType || currentSearchContext.type || 'movie';

  document.getElementById('playerMeta').textContent = `Switching to ${lang}...`;
  el.classList.add('loading');

  try {
    const res = await fetch(`/api/resolve-variant?provider=${encodeURIComponent(provider)}&id=${encodeURIComponent(catalogId)}&type=${encodeURIComponent(type)}&season=${season || ''}&episode=${episode || ''}`);
    if (!res.ok) throw new Error((await res.json()).error || 'Failed to resolve variant');
    const data = await res.json();
    el.classList.remove('loading');

    document.getElementById('playerMeta').textContent = `Netflix · ${data.quality || 'Auto'} · ${lang}`;
    anTrack('audio_change', { from: 'variant', to: lang, label: lang });
    loadPlayer(data.proxyUrl || data.url, data.name || 'MoovieCatalog', data.type);
    renderSourceSelector();
    renderDubsControls();
  } catch (e) {
    el.classList.remove('loading');
    el.style.borderColor = 'var(--error, #ef4444)';
    document.getElementById('playerMeta').textContent = `Failed to load ${lang}: ${e.message}`;
  }
}

function renderDubsControls() {
  const container = document.getElementById('playerContainer');
  if (!currentLanguageVariants || !currentLanguageVariants.length) {
    const existing = container.querySelector('.dubs-controls');
    if (existing) existing.style.display = 'none';
    return;
  }

  let bar = container.querySelector('.dubs-controls');
  if (!bar) {
    bar = document.createElement('div');
    bar.className = 'dubs-controls';
    container.appendChild(bar);
  }
  bar.style.display = 'flex';

  if (bar.querySelector('.dubs-btn')) return; // already rendered

  const btn = document.createElement('button');
  btn.className = 'hls-btn dubs-btn';
  btn.textContent = '🔊 Dubs';
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    const dd = this.querySelector('.dubs-dropdown');
    if (dd) dd.classList.toggle('open');
  });

  const dd = document.createElement('div');
  dd.className = 'hls-dropdown dubs-dropdown';
  currentLanguageVariants.forEach(function(v) {
    const item = document.createElement('button');
    item.textContent = v.language;
    item.addEventListener('click', function(ev) {
      ev.stopPropagation();
      const provider = container.dataset.provider || 'moovie-catalog';
      const type = v.media_type || container.dataset.type || 'movie';
      const season = currentSearchContext.season || '';
      const episode = currentSearchContext.episode || '';
      fetch(`/api/resolve-variant?provider=${encodeURIComponent(provider)}&id=${encodeURIComponent(v.catalogId)}&type=${encodeURIComponent(type)}&season=${season}&episode=${episode}`)
        .then(function(r) { return r.json(); })
        .then(function(data) {
          if (data.url) {
            document.getElementById('playerMeta').textContent = 'Netflix · ' + (data.quality || 'Auto') + ' · ' + v.language;
            anTrack('audio_change', { from: 'dubs', to: v.language, label: v.language });
            loadPlayer(data.proxyUrl || data.url, data.name || 'MoovieCatalog', data.type);
            renderDubsControls();
          }
          dd.classList.remove('open');
        })
        .catch(function() { dd.classList.remove('open'); });
    });
    dd.appendChild(item);
  });
  btn.appendChild(dd);
  bar.appendChild(btn);
}

const HLS_CONFIG = window.PLAYER_CONFIG?.hls || {
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

function updateAudioTracksInfo() {
  const list = document.getElementById('audioTracksList');
  if (!list) return;
  if (!hlsAudioTracks.length) {
    list.textContent = 'No audio tracks loaded. Play a stream to see available tracks.';
    return;
  }
  let html = '';
  hlsAudioTracks.forEach(function(t, i) {
    const active = currentHlsAudio === i;
    html += '<div style="padding:2px 0;' + (active ? 'color:var(--accent);font-weight:700' : '') + '">'
      + (active ? '▶ ' : '') + (t.name || 'Track ' + (i + 1))
      + (t.lang ? ' <span style="color:var(--text2)">[' + t.lang + ']</span>' : '')
      + (active ? ' <span style="color:var(--accent)">(active)</span>' : '')
      + '</div>';
  });
  list.innerHTML = html;
}

function updateHlsAudioLabel(btn) {
  if (!btn) return;
  if (hlsAudioTracks[currentHlsAudio]) {
    btn.textContent = '🔊 ' + (hlsAudioTracks[currentHlsAudio].name || 'Track ' + (currentHlsAudio + 1));
  } else {
    btn.textContent = '🔊 Audio';
  }
}

function tryAutoSelectAudio() {
  if (!preferredAudioLang || !hlsAudioTracks.length) return;
  const langLower = preferredAudioLang.toLowerCase();
  for (let i = 0; i < hlsAudioTracks.length; i++) {
    const t = hlsAudioTracks[i];
    if ((t.lang && t.lang.toLowerCase().includes(langLower)) ||
        (t.name && t.name.toLowerCase().includes(langLower))) {
      if (i !== currentHlsAudio) {
        currentHlsAudio = i;
        if (hlsInstance) hlsInstance.audioTrack = i;
        const aBtn = document.querySelector('.hls-audio-btn');
        if (aBtn) updateHlsAudioLabel(aBtn);
        updateAudioTracksInfo();
      }
      break;
    }
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
  const hasAudio = hlsAudioTracks.length > 0;

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

  if (hlsAudioTracks.length > 0 && !bar.querySelector('.hls-audio-btn')) {
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
        const langTag = t.lang ? ' <span style="color:var(--text2);font-size:11px">[' + t.lang + ']</span>' : '';
        html += '<button data-track="' + i + '" class="' + (currentHlsAudio === i ? 'is-active' : '') + '">' + (t.name || 'Track ' + (i + 1)) + langTag + '</button>';
      });
      dd.innerHTML = html;
      dd.querySelectorAll('button').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
          e.stopPropagation();
          const idx = parseInt(this.dataset.track);
          const track = hlsAudioTracks[idx];
          if (!track) return;
          // If it's a language variant, resolve and switch instead of HLS audio switch
          if (track._isVariant) {
            dd.classList.remove('open');
            const container = document.getElementById('playerContainer');
            const provider = container.dataset.provider || 'moovie-catalog';
            const type = track._mediaType || 'movie';
            const season = currentSearchContext.season || '';
            const episode = currentSearchContext.episode || '';
            document.getElementById('playerMeta').textContent = 'Switching to ' + track.name + '...';
            fetch('/api/resolve-variant?provider=' + encodeURIComponent(provider) + '&id=' + encodeURIComponent(track._catalogId) + '&type=' + encodeURIComponent(type) + '&season=' + season + '&episode=' + episode)
              .then(function(r) { return r.json(); })
              .then(function(data) {
                if (data.url) {
                  document.getElementById('playerMeta').textContent = 'Netflix · ' + (data.quality || 'Auto') + ' · ' + track.name;
                  anTrack('audio_change', { from: 'hls-audio', to: track.name, label: track.name });
                  loadPlayer(data.proxyUrl || data.url, data.name || 'MoovieCatalog', data.type);
                  renderSourceSelector();
                  renderDubsControls();
                }
              })
              .catch(function() {});
            return;
          }
          const from = currentHlsAudio;
          currentHlsAudio = idx;
          if (hlsInstance) hlsInstance.audioTrack = currentHlsAudio;
          updateHlsAudioLabel(aBtn);
          updateAudioTracksInfo();
          dd.classList.remove('open');
          anTrack('audio_change', { from, to: currentHlsAudio, label: track.name || '?' });
        });
      });
    }
  }
}

function closeAllHlsDropdowns() {
  document.querySelectorAll('.hls-dropdown.open').forEach(function(d) { d.classList.remove('open'); });
}

const PLYR_CONFIG = window.PLAYER_CONFIG?.plyr || {
  controls: ['play-large', 'play', 'progress', 'current-time', 'duration', 'mute', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
  settings: ['quality', 'speed'],
  autoplay: true,
};
PLYR_CONFIG.settings = ['quality', 'speed'];
if (!PLYR_CONFIG.settings.includes('audio')) PLYR_CONFIG.settings.push('audio');

function initPlyr() {
  const video = document.getElementById('plyrVideo');
  if (!video || player) return;
  player = new Plyr(video, PLYR_CONFIG);
}

function injectLanguageVariantTracks() {
  if (!currentLanguageVariants.length) return;
  for (const v of currentLanguageVariants) {
    const exists = hlsAudioTracks.some(function(t) { return t.name === v.language; });
    if (!exists) {
      hlsAudioTracks.push({
        name: v.language,
        lang: v.language,
        _isVariant: true,
        _catalogId: v.catalogId,
        _mediaType: v.media_type,
      });
    }
  }
}

function loadPlayer(url, title, type) {
  const video = document.getElementById('plyrVideo');
  video.autoplay = true;

  // Destroy old HLS if switching
  if (hlsInstance) {
    hlsInstance.destroy();
    hlsInstance = null;
  }

  hlsLevels = [];
  hlsAudioTracks = [];
  currentHlsLevel = -1;
  currentHlsAudio = -1;

  const mimeType = detectType(url, type);

  function onReady() {
    markStreamLoaded();
    video.removeEventListener('canplay', onReady);
    video.removeEventListener('playing', onReady);
  }
  video.addEventListener('canplay', onReady);
  video.addEventListener('playing', onReady);

  if (mimeType === 'application/x-mpegURL' && Hls.isSupported()) {
    // Keep Plyr alive, just swap HLS source underneath
    video.removeAttribute('src');
    video.innerHTML = '';
    video.load();
    hlsInstance = new Hls(HLS_CONFIG);
    hlsInstance.loadSource(url);
    hlsInstance.attachMedia(video);
    hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
      hlsLevels = hlsInstance.levels || [];
      hlsAudioTracks = hlsInstance.audioTracks || [];
      injectLanguageVariantTracks();
      if (hlsLevels.length > 0) {
        hlsInstance.currentLevel = hlsLevels.length - 1;
      }
      currentHlsLevel = hlsInstance.currentLevel;
      currentHlsAudio = hlsInstance.audioTrack;
      renderHlsControls();
      updateAudioTracksInfo();
      tryAutoSelectAudio();
      if (!player) {
        player = new Plyr(video, PLYR_CONFIG);
      }
      player.play();
    });
    hlsInstance.on(Hls.Events.ERROR, (e, data) => {
      if (data.fatal) { anTrack('error', { message: data.type + ': ' + data.details, url }); markStreamLoaded(); }
    });
    hlsInstance.on(Hls.Events.LEVEL_LOADED, () => markStreamLoaded());
  } else {
    injectLanguageVariantTracks();
    // Show HLS controls for variant tracks even without HLS
    renderHlsControls();
    updateAudioTracksInfo();
    video.onerror = function() { markStreamLoaded(); };
    video.src = url;
    video.load();
    if (!player) {
      player = new Plyr(video, PLYR_CONFIG);
    } else {
      player.play();
    }
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

let lastPingResults = [];

function renderPingResults() {
  const panel = document.getElementById('pingPanel');
  const list = document.getElementById('pingList');
  if (!panel || !list || lastPingResults.length === 0) return;
  panel.style.display = 'flex';
  list.innerHTML = lastPingResults.map(function(r) {
    const timeClass = r.alive ? (r.time < 500 ? 'fast' : r.time < 3000 ? 'slow' : 'slow') : 'dead';
    const timeText = r.alive ? Math.round(r.time) + 'ms' : '✕';
    return '<div class="ping-item"><span class="ping-provider">' + (r.provider || '?') + '</span><span class="ping-quality">' + (r.quality || 'Auto') + '</span><span class="ping-time ' + timeClass + '">' + timeText + '</span></div>';
  }).join('');
}

const QUALITY_RANK = { '4k': 4, '1080': 3, '720': 2, 'sd': 1, 'unknown': 0 };

function rankQuality(quality) {
  return QUALITY_RANK[classifyQuality(quality)] || 0;
}

async function selectFastestStream() {
  if (allStreams.length === 0) return null;
  const tests = allStreams.map(function(s) {
    return pingStream(s.proxyUrl || s.url, 8000);
  });
  appendTestLog('info', '⏱️ Ping-testing <strong>' + allStreams.length + '</strong> stream(s) to find responsive ones...');
  const results = await Promise.all(tests);
  lastPingResults = results.map(function(r) {
    const s = allStreams.find(function(st) { return (st.proxyUrl || st.url) === r.url; });
    return { url: r.url, time: r.time, alive: r.alive, provider: s ? s._providerName : '?', quality: s ? s.quality || 'Auto' : '?' };
  });
  renderPingResults();
  const alive = results.filter(function(r) { return r.alive; });
  if (alive.length === 0) {
    appendTestLog('warn', '⚠️ No responsive streams found — falling back to first result');
    return allStreams[0];
  }
  const sortedByQuality = alive
    .map(function(r) {
      const s = allStreams.find(function(st) { return (st.proxyUrl || st.url) === r.url; });
      return { ...r, _quality: s ? s.quality || 'Auto' : 'Auto', _provider: s ? s._providerName : '?' };
    })
    .sort(function(a, b) { return rankQuality(b._quality) - rankQuality(a._quality) || a.time - b.time; });
  const best = sortedByQuality[0];
  const chosen = allStreams.find(function(s) { return (s.proxyUrl || s.url) === best.url; });
  appendTestLog('success', '🎯 Selected highest quality stream — <strong>' + (best._quality || 'Auto') + '</strong> (' + Math.round(best.time) + 'ms) from <strong>' + (best._provider || '?') + '</strong>');
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

async function reorderProviders(order) {
  await api('/api/providers/reorder', { method: 'POST', body: JSON.stringify({ order }) });
  loadProvidersView();
}

async function movePriority(id, dir) {
  const p = providers[id];
  if (!p) return;
  const entries = Object.entries(providers).sort((a, b) => a[1].priority - b[1].priority);
  const idx = entries.findIndex(([eid]) => eid === id);
  const swapIdx = idx + dir;
  if (swapIdx < 0 || swapIdx >= entries.length) return;
  // Swap positions in the order array
  const order = entries.map(([eid]) => eid);
  [order[idx], order[swapIdx]] = [order[swapIdx], order[idx]];
  await reorderProviders(order);
}

function toggleMovePopup(id, btn) {
  // Close any other open popups
  document.querySelectorAll('.move-popup.open').forEach(function(p) { p.classList.remove('open'); });
  const popup = btn.parentElement.querySelector('.move-popup');
  if (popup) popup.classList.toggle('open');
}

async function quickMoveProvider(id, targetPriority) {
  const p = providers[id];
  if (!p || p.priority === targetPriority) return;
  const entries = Object.entries(providers).sort((a, b) => a[1].priority - b[1].priority);
  const fromIdx = entries.findIndex(([eid]) => eid === id);
  const toIdx = targetPriority - 1; // priorities are 1-based
  if (toIdx < 0 || toIdx >= entries.length) return;
  const order = entries.map(([eid]) => eid);
  order.splice(fromIdx, 1);
  order.splice(toIdx, 0, id);
  await reorderProviders(order);
}

function closeAllMovePopups() {
  document.querySelectorAll('.move-popup.open').forEach(function(p) { p.classList.remove('open'); });
}

async function loadProvidersView() {
  providers = await api('/api/providers');
  const container = document.getElementById('providerList');
  providerOrder = Object.entries(providers).sort((a, b) => (a[1].priority || 999) - (b[1].priority || 999));

  let html = '';
  if (providerOrder.length > 3) {
    html += '<div id="pvIndex" class="provider-index">' +
      providerOrder.map(function(entry) {
        var id = entry[0], p = entry[1];
        return '<button onclick="scrollToAndHighlight(\'pi-' + id + '\');this.blur()">' + (p.name || id) + '</button>';
      }).join('') +
    '</div>';
  }
  html += `
    <div class="toggle-all-bar">
      <button class="btn-primary" onclick="toggleAllProviders(true)">✅ Enable All</button>
      <button class="btn-secondary" onclick="toggleAllProviders(false)">❌ Disable All</button>
      <span style="margin-left:12px;font-size:12px;color:var(--text2)">${Object.values(providers).filter(p => p.enabled).length}/${Object.keys(providers).length} enabled</span>
    </div>`;
  for (const [id, p] of providerOrder) {
    html += `
      <div class="provider-item" id="pi-${id}" data-id="${id}">
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
          <div class="move-wrapper" style="position:relative">
            <span onclick="toggleMovePopup('${id}', this)" style="font-size:12px;color:var(--accent);width:24px;text-align:center;cursor:pointer" title="Click to jump to priority">${p.priority}</span>
            <div class="move-popup">
              ${providerOrder.map(function(entry) {
                var pid = entry[0], pp = entry[1];
                var isHere = pid === id;
                return '<button class="' + (isHere ? 'is-here' : '') + '" onclick="quickMoveProvider(\'' + id + '\', ' + pp.priority + ')" ' + (isHere ? 'disabled' : '') + '>' + pp.priority + '. ' + (pp.name || pid) + '</button>';
              }).join('')}
            </div>
          </div>
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
  document.getElementById('setStreamProxy').checked = cfg.streamProxy !== false;
  document.getElementById('setAutoplay').checked = cfg.autoplay !== false;
  document.getElementById('setIntroSkip').checked = cfg.introSkip === true;
  loadIndexOpacity();
  document.getElementById('setAudioLang').value = preferredAudioLang;
  updateAudioTracksInfo();
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
  body.streamProxy = document.getElementById('setStreamProxy').checked;
  body.autoplay = document.getElementById('setAutoplay').checked;
  body.introSkip = document.getElementById('setIntroSkip').checked;
  const lang = document.getElementById('setAudioLang').value.trim();
  preferredAudioLang = lang;
  localStorage.setItem('preferredAudioLang', lang);
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
  if (!e.target.closest('.move-wrapper')) closeAllMovePopups();
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
let testTotalProviders = 0;
let testCompletedProviders = 0;

function updateTestCounter() {
  const el = document.getElementById('testCounter');
  if (el) el.textContent = testTotalProviders ? '(' + (testTotalProviders - testCompletedProviders) + '/' + testTotalProviders + ' remaining)' : '';
}

function startTest() {
  const query = document.getElementById('testTmdbId').value.trim();
  if (!query) { alert('Enter a TMDB ID'); return; }
  const type = document.getElementById('testTypeSelect').value;
  const season = document.getElementById('testSeason').value;
  const episode = document.getElementById('testEpisode').value;
  const smartPing = document.getElementById('smartPingToggle').checked;

  testTotalProviders = 0;
  testCompletedProviders = 0;
  updateTestCounter();
  lastPingResults = [];
  allStreams = [];

  const panel = document.getElementById('testPanel');
  const log = document.getElementById('testLog');
  panel.style.display = 'block';
  log.innerHTML = '<div class="test-log-entry test-log-info"><span class="test-log-time">' + new Date().toLocaleTimeString() + '</span> 🚀 Starting scrape for <strong>' + query + '</strong> (' + type + (season ? ' S' + season + (episode ? 'E' + episode : '') : '') + ')...</div>';
  testLogLines = 1;

  document.getElementById('testBtn').disabled = true;
  document.getElementById('testBtn').textContent = '⏳ Scraping...';
  document.getElementById('stopTestBtn').style.display = '';

  if (testEventSource) testEventSource.close();

  let url = '/api/search/stream?q=' + encodeURIComponent(query) + '&type=' + type;
  if (season) url += '&season=' + season;
  if (episode) url += '&episode=' + episode;

  testEventSource = new EventSource(url);

  // ── Smart ping state ──
  let pingPromises = [];
  let firstStreamPlayed = false;

  function playNow(stream) {
    firstStreamPlayed = true;
    const encodedUrl = encodeURIComponent(stream.proxyUrl || stream.url);
    switchView('player');
    document.getElementById('playerMeta').textContent = (stream.name || 'Stream') + (stream.quality ? ' - ' + stream.quality : '');
    anTrack('play', { url: stream.url, name: stream.name, quality: stream.quality, type: stream.type });
    anStartHeartbeat({ currentStream: stream.name, currentUrl: location.href });
    loadPlayer(stream.proxyUrl || stream.url, stream.name || 'Stream', stream.type || '');
    renderSourceSelector();
  }

  // ── Event handlers ──

  testEventSource.addEventListener('start', function(e) {
    const data = JSON.parse(e.data);
    testTotalProviders = data.total;
    updateTestCounter();
    appendTestLog('info', '🔍 Testing ' + data.total + ' enabled provider(s)...');
  });

  testEventSource.addEventListener('provider-start', function(e) {
    const data = JSON.parse(e.data);
    appendTestLog('provider', '⏳ <strong>' + data.name + '</strong> scraping...');
  });

  testEventSource.addEventListener('stream', function(e) {
    const data = JSON.parse(e.data);
    appendTestLog('stream', '  ✅ <strong>' + data.name + '</strong> | ' + data.quality + ' → <span class="test-url">' + (data.url.length > 100 ? data.url.substring(0, 100) + '...' : data.url) + '</span>');
    const stream = { proxyUrl: data.proxyUrl || data.url, url: data.url, name: data.name || 'Stream', quality: data.quality || 'Auto', type: data.type || '' };
    allStreams.push({ ...stream, _providerName: data.name, _providerId: data.provider });

    const pingRef = lastPingResults;
    const doPing = function() {
      return pingStream(stream.proxyUrl, 8000).then(function(r) {
        pingRef.push({ url: r.url, time: r.time, alive: r.alive, provider: data.name, quality: data.quality });
        renderPingResults();
        return r;
      });
    };

    if (smartPing) {
      pingPromises.push(doPing());
    } else if (!firstStreamPlayed) {
      playNow(stream);
      appendTestLog('success', '⚡ Auto-played <strong>' + data.name + '</strong> (' + data.quality + ') immediately');
      pingPromises.push(doPing()); // background ping for display
    } else {
      pingPromises.push(doPing()); // background ping for display
    }
  });

  function onProviderFinish(e) {
    testCompletedProviders++;
    updateTestCounter();
  }

  testEventSource.addEventListener('provider-done', function(e) {
    const data = JSON.parse(e.data);
    onProviderFinish(e);
    appendTestLog('success', '✅ <strong>' + data.name + '</strong> done — <strong>' + data.count + '</strong> stream(s) found' + (data.servers && data.servers.length ? ' [' + data.servers.join(', ') + ']' : ''));
  });

  testEventSource.addEventListener('provider-empty', function(e) {
    const data = JSON.parse(e.data);
    onProviderFinish(e);
    appendTestLog('warn', '⚠️ <strong>' + data.name + '</strong> returned no streams');
  });

  testEventSource.addEventListener('provider-error', function(e) {
    const data = JSON.parse(e.data);
    onProviderFinish(e);
    appendTestLog('error', '❌ <strong>' + data.name + '</strong> error: ' + data.error);
  });

  testEventSource.addEventListener('done', function(e) {
    const data = JSON.parse(e.data);
    const el = document.getElementById('testCounter');
    if (el) el.textContent = '✅ Complete';
    const total = data.totalStreams || 0;
    appendTestLog(total > 0 ? 'success' : 'warn', '🏁 Scrape complete — <strong>' + total + '</strong> total stream(s) from <strong>' + (data.results ? data.results.length : 0) + '</strong> provider(s)' + (data.errors && data.errors.length ? ' (' + data.errors.length + ' error(s))' : ''));
    testEventSource.close();
    testEventSource = null;
    document.getElementById('testBtn').disabled = false;
    document.getElementById('testBtn').textContent = '🧪 Test';
    document.getElementById('stopTestBtn').style.display = 'none';

    if (data.results && data.results.length > 0) {
      // Merge any remaining streams from results
      for (const group of data.results) {
        for (const s of group.streams) {
          const exists = allStreams.some(function(a) { return (a.proxyUrl || a.url) === (s.proxyUrl || s.url); });
          if (!exists) allStreams.push({ ...s, _providerName: group.providerName, _providerId: group.provider });
        }
      }
      renderSourceSelector();
      renderPingResults();
    } else {
      appendTestLog('warn', '💡 No streams loaded — source selector will not appear');
    }

    if (smartPing) {
      const doneRef = lastPingResults;
      Promise.allSettled(pingPromises).then(function() {
        renderPingResults();
        const alive = doneRef.filter(function(r) { return r.alive; });
        const best = alive.length > 0
          ? alive
              .map(function(r) { return { ...r, _rank: rankQuality(r.quality) }; })
              .sort(function(a, b) { return b._rank - a._rank || a.time - b.time; })[0]
          : null;
        const target = best
          ? allStreams.find(function(s) { return (s.proxyUrl || s.url) === best.url; })
          : null;
        const fallback = target || allStreams[0];
        if (fallback) {
          playNow(fallback);
          if (target) {
            appendTestLog('success', '🎯 Smart ping chose <strong>' + (target.provider || '?') + '</strong> (' + Math.round(best.time) + 'ms) — ' + (target.quality || 'Auto') + ' (highest quality)');
          } else {
            appendTestLog('warn', '⚠️ No responsive streams — playing first available');
          }
        }
      });
    } else if (!firstStreamPlayed && allStreams.length > 0) {
      // No stream auto-played yet (all returned empty during scrape)
      playNow(allStreams[0]);
    }
  });

  testEventSource.onerror = function() {
    appendTestLog('error', '⚠️ SSE connection lost. Auto-retrying...');
    testEventSource.close();
    testEventSource = null;
    document.getElementById('testBtn').disabled = false;
    document.getElementById('testBtn').textContent = '🧪 Test';
    document.getElementById('stopTestBtn').style.display = 'none';
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

function stopTest() {
  if (testEventSource) {
    testEventSource.close();
    testEventSource = null;
  }
  document.getElementById('testBtn').disabled = false;
  document.getElementById('testBtn').textContent = '🧪 Test';
  document.getElementById('stopTestBtn').style.display = 'none';
  appendTestLog('warn', '⏹ Scrape stopped by user');
}

function clearTestLog() {
  document.getElementById('testLog').innerHTML = '';
  document.getElementById('testPanel').style.display = 'none';
  testLogLines = 0;
  testTotalProviders = 0;
  testCompletedProviders = 0;
  updateTestCounter();
}

window.onload = () => {
  loadProvidersView();
  initPlyr();
  loadIndexOpacity();
  const saved = localStorage.getItem('activeView');
  if (saved && saved !== 'search') switchView(saved);
};

document.addEventListener('keydown', function(e) {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') return;
  const video = document.getElementById('plyrVideo');
  if (!video || !video.duration) return;
  if (e.key === 'ArrowLeft') {
    e.preventDefault();
    video.currentTime = Math.max(0, video.currentTime - 10);
  } else if (e.key === 'ArrowRight') {
    e.preventDefault();
    video.currentTime = Math.min(video.duration, video.currentTime + 10);
  }
});
