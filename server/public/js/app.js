let providers = {};
let providerOrder = [];

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
  container.innerHTML = '<div class="loading">🔍 Searching all enabled providers...</div>';
  status.textContent = 'Searching...';

  try {
    let url = `/api/search?q=${encodeURIComponent(query)}&type=${type}`;
    if (season) url += `&season=${season}`;
    if (episode) url += `&episode=${episode}`;

    const data = await api(url);
    const total = data.results.reduce((s, r) => s + r.streams.length, 0);
    status.textContent = `Found ${total} streams from ${data.results.length} providers`;

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
              const url = s.url || '';
              const escapedUrl = url.replace(/'/g, "\\'").replace(/"/g, '&quot;');
              return `
                <div class="stream-card ${qClass}">
                  <button class="copy-btn" onclick="copyUrl('${escapedUrl}')">📋 Copy</button>
                  <strong>${s.name || 'Stream'}</strong>
                  <div class="title">${(s.title || '').substring(0, 150)}</div>
                  <div class="url">${url.length > 120 ? url.substring(0, 120) + '...' : url}</div>
                  <div class="meta">
                    <span>🎯 ${s.quality || 'Auto'}</span>
                    ${s.size ? `<span>💾 ${s.size}</span>` : ''}
                    <span>🔗 ${s.provider || group.providerName}</span>
                  </div>
                </div>`;
            }).join('')}
          </div>
        </div>`;
    }
    container.innerHTML = html;
  } catch (e) {
    container.innerHTML = `<div class="error-box">Error: ${e.message}</div>`;
    status.textContent = 'Search failed';
  }
}

function copyUrl(url) {
  navigator.clipboard.writeText(url).then(() => {
    const btn = event.target;
    btn.textContent = '✅ Copied!';
    setTimeout(() => btn.textContent = '📋 Copy', 2000);
  }).catch(() => {
    const btn = event.target;
    btn.textContent = '❌ Failed';
    setTimeout(() => btn.textContent = '📋 Copy', 2000);
  });
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
  // Refresh the sub-server section
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

  let html = '';
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

window.onload = () => { loadProvidersView(); };
