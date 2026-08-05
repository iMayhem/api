'use strict';
/**
 * Moovie self-hosted sync server.
 * Replaces Supabase: auth, user data, app settings, banners, notifications,
 * polls, party rooms, chat, logs, uploads (REST) + party realtime (WebSocket).
 * Zero runtime dependencies. Data stored as JSON files with atomic writes.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { URL } = require('url');

const PORT = parseInt(process.env.SYNC_PORT || '3002', 10);
const DATA_DIR = path.join(__dirname, 'data');
const FILES_DIR = path.join(DATA_DIR, 'files');
const AUTH_SECRET = process.env.SYNC_AUTH_SECRET || crypto.randomBytes(32).toString('hex');
const TOKEN_TTL_MS = 30 * 24 * 60 * 60 * 1000;

const TABLES = [
    'app_settings',
    'banners',
    'notifications',
    'notification_reads',
    'polls',
    'poll_votes',
    'rooms',
    'party_chat_messages',
    'download_logs',
    'movora_searches',
    'movora_ai_searches',
];

// ---------------------------------------------------------------- store -----

const tables = {
    users: {},
    sessions: {},
    app_settings: {},
    banners: [],
    notifications: [],
    notification_reads: [],
    polls: [],
    poll_votes: [],
    rooms: {},
    party_chat_messages: {},
    download_logs: [],
    movora_searches: [],
    movora_ai_searches: [],
};

let seq = { notifications: 1, polls: 1, poll_votes: 1, download_logs: 1, movora_searches: 1, movora_ai_searches: 1, banners: 1 };

function loadStore() {
    for (const key of Object.keys(tables)) {
        const file = path.join(DATA_DIR, key + '.json');
        if (fs.existsSync(file)) {
            try {
                tables[key] = JSON.parse(fs.readFileSync(file, 'utf8'));
            } catch (e) {
                console.error('[store] failed to load', key, e.message);
            }
        }
    }
    const seqFile = path.join(DATA_DIR, 'seq.json');
    if (fs.existsSync(seqFile)) {
        try { seq = Object.assign(seq, JSON.parse(fs.readFileSync(seqFile, 'utf8'))); } catch (e) {}
    }
}

const pendingWrites = new Map();
function saveTable(key) {
    if (pendingWrites.has(key)) return;
    pendingWrites.set(key, setTimeout(() => {
        pendingWrites.delete(key);
        const file = path.join(DATA_DIR, key + '.json');
        const tmp = file + '.tmp';
        try {
            fs.mkdirSync(DATA_DIR, { recursive: true });
            fs.writeFileSync(tmp, JSON.stringify(tables[key], null, 0));
            fs.renameSync(tmp, file);
        } catch (e) {
            console.error('[store] write failed', key, e.message);
        }
    }, 150));
}

function saveAll() {
    saveTable('users');
    saveTable('sessions');
    saveTable('app_settings');
    saveTable('banners');
    saveTable('notifications');
    saveTable('notification_reads');
    saveTable('polls');
    saveTable('poll_votes');
    saveTable('rooms');
    saveTable('party_chat_messages');
    saveTable('download_logs');
    saveTable('movora_searches');
    saveTable('movora_ai_searches');
}

// ------------------------------------------------------------ auth ----------

function scryptHash(password) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.scryptSync(String(password), salt, 64).toString('hex');
    return `scrypt$${salt}$${hash}`;
}

function scryptVerify(password, stored) {
    if (!stored || !stored.startsWith('scrypt$')) return false;
    const [, salt, hash] = stored.split('$');
    const check = crypto.scryptSync(String(password), salt, 64).toString('hex');
    const a = Buffer.from(hash, 'hex');
    const b = Buffer.from(check, 'hex');
    return a.length === b.length && crypto.timingSafeEqual(a, b);
}

function createToken(username) {
    const token = crypto.randomBytes(32).toString('hex');
    tables.sessions[token] = { username, expires: Date.now() + TOKEN_TTL_MS };
    saveTable('sessions');
    return token;
}

function tokenUser(token) {
    if (!token) return null;
    const s = tables.sessions[token];
    if (!s) return null;
    if (s.expires < Date.now()) {
        delete tables.sessions[token];
        saveTable('sessions');
        return null;
    }
    return s.username;
}

// ---------------------------------------------------------- utils ----------

function send(res, status, body) {
    const payload = JSON.stringify(body === undefined ? { data: null } : body);
    res.writeHead(status, {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Prefer, apikey',
        'Access-Control-Expose-Headers': 'X-Total-Count, Content-Range',
    });
    res.end(payload);
}

function readBody(req) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        let size = 0;
        req.on('data', (c) => {
            size += c.length;
            if (size > 25 * 1024 * 1024) {
                reject(new Error('payload too large'));
                req.destroy();
                return;
            }
            chunks.push(c);
        });
        req.on('end', () => {
            try {
                const raw = Buffer.concat(chunks);
                resolve(raw.length ? JSON.parse(raw.toString('utf8')) : {});
            } catch (e) {
                reject(e);
            }
        });
        req.on('error', reject);
    });
}

const isUuid = (s) => /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(String(s));

// ---------------------------------------------------- room helpers ---------

const ROOM_STALE_MS = 12 * 60 * 60 * 1000;

function pruneStaleRooms() {
    const cutoff = new Date(Date.now() - ROOM_STALE_MS).toISOString();
    let changed = false;
    for (const id of Object.keys(tables.rooms)) {
        const r = tables.rooms[id];
        if (!r.scheduled_start_time || r.scheduled_start_time < cutoff) {
            delete tables.rooms[id];
            delete tables.party_chat_messages[id];
            changed = true;
        }
    }
    if (changed) {
        saveTable('rooms');
        saveTable('party_chat_messages');
    }
}

function broadcastRoomsChanged() {
    const msg = JSON.stringify({ type: 'rooms_changed' });
    for (const ws of clients) {
        if (ws.channels && ws.channels.has('lobby_rooms_feed')) {
            try { ws.sendText(msg); } catch (e) {}
        }
    }
}

function nextId(table) {
    const v = seq[table] || 1;
    seq[table] = v + 1;
    saveSeq(table);
    return v;
}

function saveSeq(table) {
    const file = path.join(DATA_DIR, 'seq.json');
    const tmp = file + '.tmp';
    try {
        fs.mkdirSync(DATA_DIR, { recursive: true });
        fs.writeFileSync(tmp, JSON.stringify(seq));
        fs.renameSync(tmp, file);
    } catch (e) {}
}

// ---------------------------------------------------------- REST -----------

function tableForName(name) {
    switch (name) {
        case 'app_settings': return tables.app_settings;
        case 'banners': return tables.banners;
        case 'notifications': return tables.notifications;
        case 'notification_reads': return tables.notification_reads;
        case 'polls': return tables.polls;
        case 'poll_votes': return tables.poll_votes;
        case 'rooms': return tables.rooms;
        case 'party_chat_messages': return tables.party_chat_messages;
        case 'download_logs': return tables.download_logs;
        case 'movora_searches': return tables.movora_searches;
        case 'movora_ai_searches': return tables.movora_ai_searches;
        default: return null;
    }
}

function rowsForTable(name, table) {
    if (name === 'rooms' || name === 'app_settings') {
        return Object.values(table);
    }
    if (name === 'party_chat_messages') {
        return Object.values(table).flat();
    }
    return table;
}

function parseFilters(url) {
    const q = url.searchParams;
    const f = { eq: {}, gte: {}, lte: {}, neq: {}, in: {}, order: null, limit: null, single: false, head: false, select: null, onConflict: null };
    for (const [key, value] of q.entries()) {
        if (key.startsWith('eq.')) f.eq[key.slice(3)] = value;
        else if (key.startsWith('gte.')) f.gte[key.slice(4)] = value;
        else if (key.startsWith('lte.')) f.lte[key.slice(4)] = value;
        else if (key.startsWith('neq.')) f.neq[key.slice(4)] = value;
        else if (key.startsWith('in.')) f.in[key.slice(3)] = value.split(',');
        else if (key === 'order') f.order = value;
        else if (key === 'limit') f.limit = parseInt(value, 10) || null;
        else if (key === 'single') f.single = value === 'true' || value === '1';
        else if (key === 'head') f.head = value === 'true' || value === '1';
        else if (key === 'select') f.select = value;
        else if (key === 'onConflict') f.onConflict = value;
    }
    return f;
}

function applyFilters(rows, f) {
    let out = rows;
    for (const [col, val] of Object.entries(f.eq)) {
        out = out.filter((r) => String(r[col]) === String(val));
    }
    for (const [col, val] of Object.entries(f.gte)) {
        out = out.filter((r) => r[col] != null && r[col] >= val);
    }
    for (const [col, val] of Object.entries(f.lte)) {
        out = out.filter((r) => r[col] != null && r[col] <= val);
    }
    for (const [col, val] of Object.entries(f.neq)) {
        out = out.filter((r) => String(r[col]) !== String(val));
    }
    for (const [col, vals] of Object.entries(f.in)) {
        out = out.filter((r) => vals.some((v) => String(r[col]) === String(v)));
    }
    if (f.order) {
        const [col, dir] = f.order.split('.');
        const mult = dir === 'desc' ? -1 : 1;
        out = out.slice().sort((a, b) => {
            const av = a[col];
            const bv = b[col];
            if (av == null) return 1;
            if (bv == null) return -1;
            if (typeof av === 'number' && typeof bv === 'number') return (av - bv) * mult;
            return String(av).localeCompare(String(bv)) * mult;
        });
    }
    if (f.limit != null) out = out.slice(0, f.limit);
    return out;
}

function project(row, select) {
    if (!select || select === '*') return row;
    const cols = select.split(',').map((c) => c.trim()).filter(Boolean);
    const out = {};
    for (const c of cols) if (row[c] !== undefined) out[c] = row[c];
    return out;
}

function dbError(message, code) {
    return { error: { message, code: code || 'PGRST000' } };
}

function isOpenTable(name) {
    // mirrors old Supabase anon-permissive behavior (RLS was wide open)
    return true;
}

async function handleApi(req, res, url) {
    const method = req.method;
    const pathname = url.pathname;
    const f = parseFilters(url);

    // ---------- auth endpoints ----------
    if (method === 'POST' && (pathname === '/api/auth/register' || pathname === '/api/sync-auth/register')) {
        const body = await readBody(req).catch(() => ({}));
        const username = String(body.username || '').trim().toLowerCase();
        const password = String(body.password || '');
        if (username.length < 3) return send(res, 400, dbError('Username must be at least 3 characters long.'));
        if (password.length < 6) return send(res, 400, dbError('Password must be at least 6 characters long.'));
        if (tables.users[username]) return send(res, 409, dbError('Username is already taken.'));
        tables.users[username] = {
            username,
            password_hash: scryptHash(password),
            createdAt: new Date().toISOString(),
            liked_list: [],
            watchlist: { lists: [{ id: 'main', name: 'Watchlist', items: [], createdAt: Date.now(), updatedAt: Date.now() }], version: 2, activeListId: 'main' },
            watch_history: [],
            search_history: [],
        };
        saveTable('users');
        const token = createToken(username);
        return send(res, 200, { data: { username, token } });
    }

    if (method === 'POST' && (pathname === '/api/auth/login' || pathname === '/api/sync-auth/login')) {
        const body = await readBody(req).catch(() => ({}));
        const username = String(body.username || '').trim().toLowerCase();
        const user = tables.users[username];
        if (!user || !scryptVerify(String(body.password || ''), user.password_hash)) {
            return send(res, 401, dbError('Incorrect username or password.'));
        }
        const token = createToken(username);
        return send(res, 200, { data: { username, token } });
    }

    // ---------- user data endpoints ----------
    const userMatch = pathname.match(/^\/api\/user\/([^/]+)$/);
    if (userMatch) {
        const username = decodeURIComponent(userMatch[1]).toLowerCase();
        const user = tables.users[username];
        if (method === 'GET') {
            if (!user) return send(res, 404, dbError('User not found.'));
            return send(res, 200, { data: { ...user, password_hash: undefined } });
        }
        if (method === 'PUT') {
            const tokenUser = tokenUserFrom(req);
            if (!tokenUser || tokenUser !== username) {
                return send(res, 403, dbError('Not authorized to modify this account.'));
            }
            if (!user) return send(res, 404, dbError('User not found.'));
            const body = await readBody(req).catch(() => ({}));
            const allowed = ['watchlist', 'watch_history', 'search_history', 'liked_list'];
            for (const k of allowed) {
                if (body[k] !== undefined) user[k] = body[k];
            }
            saveTable('users');
            return send(res, 200, { data: { ...user, password_hash: undefined } });
        }
    }

    // ---------- uploads ----------
    if (method === 'POST' && pathname === '/api/uploads') {
        const bucket = url.searchParams.get('bucket') || 'files';
        const name = url.searchParams.get('name') || `${Date.now()}_${Math.random().toString(36).slice(2)}.bin`;
        const safeName = path.basename(name).replace(/[^a-zA-Z0-9._-]/g, '_');
        const dir = path.join(FILES_DIR, bucket);
        fs.mkdirSync(dir, { recursive: true });
        const chunks = [];
        for await (const c of req) chunks.push(c);
        const buf = Buffer.concat(chunks);
        fs.writeFileSync(path.join(dir, safeName), buf);
        return send(res, 200, { data: { path: `${bucket}/${safeName}` } });
    }
    if (method === 'GET' && pathname.startsWith('/api/uploads/')) {
        const parts = pathname.slice('/api/uploads/'.length).split('/');
        const bucket = parts[0] || 'files';
        const fileName = parts.slice(1).join('/');
        const safeName = path.basename(fileName).replace(/[^a-zA-Z0-9._-]/g, '_');
        const filePath = path.join(FILES_DIR, bucket, safeName);
        if (!fs.existsSync(filePath)) return send(res, 404, dbError('Not found.'));
        const ctype = {
            '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
            '.gif': 'image/gif', '.webp': 'image/webp', '.svg': 'image/svg+xml',
            '.txt': 'text/plain',
        }[path.extname(safeName).toLowerCase()] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': ctype, 'Cache-Control': 'public, max-age=3600' });
        fs.createReadStream(filePath).pipe(res);
        return;
    }

    // ---------- admin (token-gated: files listing/delete, raw table read/write) ----------
    if (pathname === '/api/_admin/files' && (method === 'GET' || method === 'DELETE')) {
        if (!tokenUserFrom(req)) return send(res, 401, dbError('Admin token required.'));
        if (method === 'DELETE') {
            const rel = (url.searchParams.get('path') || '').replace(/^\/+/, '');
            const target = path.join(FILES_DIR, path.normalize(rel));
            if (!target.startsWith(FILES_DIR) || !fs.existsSync(target) || fs.statSync(target).isDirectory()) {
                return send(res, 404, dbError('File not found.'));
            }
            fs.unlinkSync(target);
            return send(res, 200, { data: { deleted: rel } });
        }
        const list = [];
        const walk = (dir, bucket) => {
            let entries;
            try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
            for (const e of entries) {
                const full = path.join(dir, e.name);
                if (e.isDirectory()) walk(full, bucket ? `${bucket}/${e.name}` : e.name);
                else {
                    const st = fs.statSync(full);
                    list.push({ bucket: bucket || '', name: e.name, path: bucket ? `${bucket}/${e.name}` : e.name, size: st.size, mtime: st.mtime.toISOString() });
                }
            }
        };
        walk(FILES_DIR, '');
        list.sort((a, b) => b.mtime.localeCompare(a.mtime));
        return send(res, 200, { data: list });
    }

    const adminRawMatch = pathname.match(/^\/api\/_admin\/raw\/([a-z_]+)$/);
    if (adminRawMatch) {
        if (!tokenUserFrom(req)) return send(res, 401, dbError('Admin token required.'));
        const table = tableForName(adminRawMatch[1]);
        if (!table) return send(res, 404, dbError(`Unknown table '${adminRawMatch[1]}'`, 'PGRST205'));
        const name = adminRawMatch[1];
        if (method === 'GET') {
            const raw = name === 'rooms' || name === 'app_settings' || name === 'party_chat_messages'
                ? tables[name] : rowsForTable(name, table);
            return send(res, 200, { data: raw });
        }
        if (method === 'PUT') {
            const body = await readBody(req).catch(() => null);
            if (!body) return send(res, 400, dbError('Invalid JSON body'));
            const dictLike = name === 'rooms' || name === 'app_settings' || name === 'party_chat_messages';
            if (dictLike && typeof body !== 'object') return send(res, 400, dbError(`Table '${name}' must be a JSON object keyed by id`));
            if (!dictLike && !Array.isArray(body)) return send(res, 400, dbError(`Table '${name}' must be a JSON array`));
            tables[name] = body;
            saveTable(name);
            if (name === 'rooms') broadcastRoomsChanged();
            return send(res, 200, { data: { saved: name, rows: dictLike ? Object.keys(body).length : body.length } });
        }
        return send(res, 405, dbError('Method not allowed'));
    }

    // ---------- generic tables ----------
    const tableMatch = pathname.match(/^\/api\/([a-z_]+)$/);
    if (!tableMatch) {
        return send(res, 404, dbError('Not found.'));
    }
    const name = tableMatch[1];
    const table = tableForName(name);
    if (!table || !isOpenTable(name)) {
        return send(res, 404, dbError(`Could not find the table 'public.${name}' in the schema cache`, 'PGRST205'));
    }
    const rows = rowsForTable(name, table);
    const now = new Date().toISOString();

    switch (method) {
        case 'GET': {
            if (name === 'rooms') pruneStaleRooms();
            let out = applyFilters(rows, f);
            if (f.head) {
                return send(res, 200, { data: [], count: out.length });
            }
            if (f.single) {
                if (out.length === 0) return send(res, 406, dbError('No rows found', 'PGRST116'));
                return send(res, 200, { data: project(out[0], f.select) });
            }
            return send(res, 200, { data: out.map((r) => project(r, f.select)) });
        }
        case 'POST': {
            const body = await readBody(req).catch(() => null);
            if (!body) return send(res, 400, dbError('Invalid JSON body'));
            const inserts = Array.isArray(body) ? body : [body];
            const created = [];
            for (const row of inserts) {
                let final = { ...row };
                if (name === 'rooms') {
                    if (!final.id || !isUuid(final.id)) {
                        return send(res, 400, dbError('Room id must be a valid UUID'));
                    }
                    if (tables.rooms[final.id]) return send(res, 409, dbError('Room already exists'));
                    final.created_at = final.created_at || now;
                    tables.rooms[final.id] = final;
                    saveTable('rooms');
                    created.push(final);
                    broadcastRoomsChanged();
                } else if (name === 'party_chat_messages') {
                    const roomId = row.room_id;
                    if (!roomId) return send(res, 400, dbError('room_id is required'));
                    final.id = final.id || crypto.randomUUID();
                    final.created_at = final.created_at || now;
                    if (!tables.party_chat_messages[roomId]) tables.party_chat_messages[roomId] = [];
                    tables.party_chat_messages[roomId].push(final);
                    saveTable('party_chat_messages');
                    created.push(final);
                } else if (name === 'app_settings') {
                    final.updated_at = now;
                    tables.app_settings[String(final.key)] = final;
                    saveTable('app_settings');
                    created.push(final);
                } else if (name === 'notification_reads' || name === 'poll_votes') {
                    if (name === 'poll_votes') final.id = nextId('poll_votes');
                    final.voted_at = final.voted_at || now;
                    tables[name].push(final);
                    saveTable(name);
                    saveSeq(name);
                    created.push(final);
                } else if (name === 'notifications') {
                    final.id = nextId('notifications');
                    final.created_at = final.created_at || now;
                    tables.notifications.push(final);
                    saveTable('notifications');
                    saveSeq('notifications');
                    created.push(final);
                } else if (name === 'polls') {
                    final.id = nextId('polls');
                    final.created_at = final.created_at || now;
                    final.updated_at = final.updated_at || now;
                    tables.polls.push(final);
                    saveTable('polls');
                    saveSeq('polls');
                    created.push(final);
                } else if (name === 'download_logs' || name === 'movora_searches' || name === 'movora_ai_searches') {
                    final.id = nextId(name);
                    final.created_at = final.created_at || now;
                    tables[name].push(final);
                    saveTable(name);
                    saveSeq(name);
                    created.push(final);
                } else {
                    // banners
                    final.id = final.id ?? nextId('banners');
                    final.created_at = final.created_at || now;
                    tables.banners.push(final);
                    saveTable('banners');
                    created.push(final);
                }
            }
            return send(res, 201, { data: created });
        }
        case 'PUT': {
            const body = await readBody(req).catch(() => null);
            if (!body) return send(res, 400, dbError('Invalid JSON body'));
            const created = [];
            if (name === 'app_settings') {
                const key = String(body.key || '');
                const final = { ...body, updated_at: now };
                tables.app_settings[key] = final;
                saveTable('app_settings');
                created.push(final);
            } else if (name === 'notification_reads') {
                const conflictCols = (f.onConflict || 'notification_id,username').split(',');
                const readsIn = Array.isArray(body) ? body : [body];
                for (const b of readsIn) {
                    const existing = tables.notification_reads.find((r) => conflictCols.every((c) => String(r[c]) === String(b[c])));
                    if (existing) Object.assign(existing, b);
                    else {
                        const final = { ...b };
                        tables.notification_reads.push(final);
                        created.push(final);
                    }
                }
                saveTable('notification_reads');
            } else {
                let hit = null;
                for (const [key, v] of Object.entries(f.eq)) {
                    const idx = rows.findIndex((r) => String(r[key]) === String(v));
                    if (idx >= 0) hit = idx;
                }
                if (hit != null) {
                    Object.assign(rows[hit], body);
                    created.push(rows[hit]);
                } else {
                    const final = { ...body };
                    rows.push(final);
                    created.push(final);
                }
                saveTable(name);
                if (name === 'rooms') broadcastRoomsChanged();
            }
            return send(res, 200, { data: created });
        }
        case 'PATCH': {
            const body = await readBody(req).catch(() => null);
            if (!body) return send(res, 400, dbError('Invalid JSON body'));
            let matches = [];
            if (name === 'rooms') {
                const fIds = Object.entries(f.eq).filter(([k]) => k === 'id').map(([, v]) => v);
                if (fIds.length) {
                    matches = fIds.map((id) => tables.rooms[id]).filter(Boolean);
                } else {
                    matches = rows;
                }
            } else {
                matches = applyFilters(rows, f);
            }
            for (const row of matches) Object.assign(row, body);
            if (name === 'rooms') {
                saveTable('rooms');
                broadcastRoomsChanged();
            } else if (name === 'app_settings') {
                saveTable('app_settings');
            } else {
                saveTable(name);
            }
            return send(res, 200, { data: matches });
        }
        case 'DELETE': {
            const fIds = Object.entries(f.eq).filter(([k]) => k === 'id');
            let deleted = 0;
            if (name === 'rooms') {
                for (const [, v] of fIds) {
                    if (tables.rooms[v]) {
                        delete tables.rooms[v];
                        delete tables.party_chat_messages[v];
                        deleted++;
                    }
                }
                if (deleted) {
                    saveTable('rooms');
                    saveTable('party_chat_messages');
                    broadcastRoomsChanged();
                }
            } else if (name === 'party_chat_messages') {
                const roomId = f.eq.room_id;
                if (roomId && tables.party_chat_messages[roomId]) {
                    deleted = tables.party_chat_messages[roomId].length;
                    delete tables.party_chat_messages[roomId];
                    saveTable('party_chat_messages');
                }
            } else {
                const matches = applyFilters(rows, f);
                if (Array.isArray(table)) {
                    for (const m of matches) {
                        const idx = table.indexOf(m);
                        if (idx >= 0) { table.splice(idx, 1); deleted++; }
                    }
                } else {
                    for (const m of matches) {
                        for (const [k, v] of Object.entries(f.eq)) {
                            if (String(m[k]) === String(v)) { delete table[k]; deleted++; }
                        }
                    }
                }
                saveTable(name);
            }
            return send(res, 200, { data: deleted });
        }
        default:
            return send(res, 405, dbError('Method not allowed'));
    }
}

function tokenUserFrom(req) {
    const header = req.headers.authorization || '';
    const m = header.match(/^Bearer\s+(.+)$/i);
    return m ? tokenUser(m[1]) : null;
}

// ----------------------------------------------------------- WebSocket -----

const clients = new Set();

// Simple RFC 6455 server implementation (text frames only, no compression).
function wsHandshake(req, socket) {
    const key = req.headers['sec-websocket-key'];
    if (!key) return false;
    const accept = crypto
        .createHash('sha1')
        .update(key + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11')
        .digest('base64');
    socket.write(
        'HTTP/1.1 101 Switching Protocols\r\n' +
        'Upgrade: websocket\r\n' +
        'Connection: Upgrade\r\n' +
        `Sec-WebSocket-Accept: ${accept}\r\n\r\n`
    );
    return true;
}

function createWsClient(socket) {
    const client = {
        socket,
        channels: new Set(),
        presence: new Map(), // room -> Map(key -> payload)
        buffer: Buffer.alloc(0),
        closed: false,
        sendText(str) {
            if (client.closed) return;
            const payload = Buffer.from(str, 'utf8');
            const len = payload.length;
            let header;
            if (len < 126) {
                header = Buffer.alloc(2);
                header[1] = len;
            } else if (len < 65536) {
                header = Buffer.alloc(4);
                header[1] = 126;
                header.writeUInt16BE(len, 2);
            } else {
                header = Buffer.alloc(10);
                header[1] = 127;
                header.writeBigUInt64BE(BigInt(len), 2);
            }
            header[0] = 0x81;
            try {
                socket.write(Buffer.concat([header, payload]));
            } catch (e) {}
        },
        sendRaw(buf) {
            if (client.closed) return;
            try { socket.write(buf); } catch (e) {}
        },
        close() {
            if (client.closed) return;
            client.closed = true;
            try { socket.end(); } catch (e) {}
            cleanupClient(client);
        },
    };
    return client;
}

function cleanupClient(client) {
    if (client.closed) return;
    client.closed = true;
    for (const room of client.channels) {
        leaveRoom(client, room);
    }
    client.channels.clear();
    clients.delete(client);
}

function presenceSnapshot(room) {
    const members = {};
    for (const c of clients) {
        const p = c.presence.get(room);
        if (p) {
            for (const [key, payload] of p.entries()) {
                members[key] = [payload];
            }
        }
    }
    return members;
}

function broadcastToRoom(room, msg, exclude) {
    const payload = JSON.stringify(msg);
    for (const c of clients) {
        if (c === exclude) continue;
        if (c.channels.has(room)) {
            c.sendText(payload);
        }
    }
}

function broadcastPresence(room, diff) {
    broadcastToRoom(room, { type: 'presence_diff', room, ...diff });
}

function joinRoom(client, room) {
    if (client.channels.has(room)) return;
    client.channels.add(room);
    const initial = presenceSnapshot(room);
    if (room === 'lobby_rooms_feed') {
        client.sendText(JSON.stringify({ type: 'lobby_ready' }));
        return;
    }
    client.sendText(JSON.stringify({ type: 'presence_sync', room, members: initial }));
}

function leaveRoom(client, room) {
    if (!client.channels.has(room)) return;
    client.channels.delete(room);
    const mine = client.presence.get(room);
    if (mine && mine.size) {
        for (const [key, payload] of mine.entries()) {
            broadcastPresence(room, { remove: { [key]: [payload] } });
        }
        client.presence.delete(room);
    }
}

function handleWsMessage(client, text) {
    let msg;
    try { msg = JSON.parse(text); } catch (e) { return; }
    if (!msg || typeof msg !== 'object') return;

    switch (msg.type) {
        case 'join_room': {
            const room = String(msg.room || '');
            if (!room) return;
            joinRoom(client, room);
            break;
        }
        case 'leave_room': {
            leaveRoom(client, String(msg.room || ''));
            break;
        }
        case 'broadcast': {
            const room = String(msg.room || '');
            if (!room) return;
            if (!client.channels.has(room)) return;
            broadcastToRoom(room, {
                type: 'broadcast',
                event: String(msg.event || ''),
                payload: msg.payload || {},
                channel: room,
            }, client);
            break;
        }
        case 'presence_track': {
            const room = String(msg.room || '');
            if (!room) return;
            if (!client.channels.has(room)) {
                joinRoom(client, room);
            }
            const key = String(msg.key || 'anon');
            const payload = msg.payload || {};
            if (!client.presence.has(room)) client.presence.set(room, new Map());
            const existing = client.presence.get(room).get(key);
            client.presence.get(room).set(key, payload);
            if (existing) {
                // update — notify as join with new payload
                broadcastPresence(room, { add: { [key]: [payload] }, remove: { [key]: [existing] } });
            } else {
                broadcastPresence(room, { add: { [key]: [payload] } });
            }
            break;
        }
        case 'presence_untrack': {
            const room = String(msg.room || '');
            if (!room) return;
            const key = String(msg.key || '');
            const mine = client.presence.get(room);
            if (mine && mine.has(key)) {
                const payload = mine.get(key);
                mine.delete(key);
                broadcastPresence(room, { remove: { [key]: [payload] } });
            }
            break;
        }
        case 'ping': {
            client.sendText(JSON.stringify({ type: 'pong' }));
            break;
        }
        default:
            break;
    }
}

// WebSocket frame parsing state machine per connection.
function handleWsData(client, chunk) {
    client.buffer = Buffer.concat([client.buffer, chunk]);
    while (client.buffer.length >= 2) {
        const b0 = client.buffer[0];
        const b1 = client.buffer[1];
        const fin = (b0 & 0x80) !== 0;
        const opcode = b0 & 0x0f;
        const masked = (b1 & 0x80) !== 0;
        let len = b1 & 0x7f;
        let offset = 2;
        if (len === 126) {
            if (client.buffer.length < 4) return;
            len = client.buffer.readUInt16BE(2);
            offset = 4;
        } else if (len === 127) {
            if (client.buffer.length < 10) return;
            len = Number(client.buffer.readBigUInt64BE(2));
            offset = 10;
        }
        let maskKey = null;
        if (masked) {
            if (client.buffer.length < offset + 4) return;
            maskKey = client.buffer.slice(offset, offset + 4);
            offset += 4;
        }
        if (client.buffer.length < offset + len) return;
        const frame = client.buffer.slice(offset, offset + len);
        client.buffer = client.buffer.slice(offset + len);

        if (opcode === 0x8) { // close
            client.close();
            return;
        }
        if (opcode === 0x9) { // ping -> pong
            const pong = Buffer.alloc(2 + frame.length);
            pong[0] = 0x8a;
            pong[1] = frame.length;
            frame.copy(pong, 2);
            client.sendRaw(pong);
            continue;
        }
        if (opcode === 0xa) continue; // pong
        if (opcode === 0x1 || opcode === 0x0) { // text / continuation
            if (masked && maskKey) {
                for (let i = 0; i < frame.length; i++) frame[i] ^= maskKey[i % 4];
            }
            const text = frame.toString('utf8');
            if (text) handleWsMessage(client, text);
            continue;
        }
    }
}

function onWsUpgrade(req, socket) {
    if (!wsHandshake(req, socket)) {
        socket.destroy();
        return;
    }
    const client = createWsClient(socket);
    clients.add(client);
    socket.on('data', (chunk) => handleWsData(client, chunk));
    socket.on('end', () => {
        try { socket.end(); } catch (e) {}
        cleanupClient(client);
    });
    socket.on('error', () => cleanupClient(client));
    socket.on('close', () => cleanupClient(client));
    socket.setTimeout(0);
    socket.setKeepAlive(true);
}

// -------------------------------------------------------------- main -------

const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');

    if (req.method === 'OPTIONS') {
        res.writeHead(204, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, Prefer, apikey',
            'Access-Control-Max-Age': '86400',
        });
        res.end();
        return;
    }

    // Static uploads
    if (req.method === 'GET' && url.pathname.startsWith('/files/')) {
        const rel = url.pathname.slice('/files/'.length);
        const file = path.join(FILES_DIR, path.normalize(rel));
        if (!file.startsWith(FILES_DIR) || !fs.existsSync(file)) {
            res.writeHead(404); res.end(); return;
        }
        res.writeHead(200, {
            'Content-Type': /\.svg$/.test(file) ? 'image/svg+xml'
                : /\.jpg$|\.jpeg$/.test(file) ? 'image/jpeg'
                : /\.png$/.test(file) ? 'image/png'
                : /\.webp$/.test(file) ? 'image/webp'
                : 'application/octet-stream',
            'Cache-Control': 'public, max-age=3600',
            'Access-Control-Allow-Origin': '*',
        });
        fs.createReadStream(file).pipe(res);
        return;
    }

    if (url.pathname.startsWith('/api/')) {
        handleApi(req, res, url).catch((e) => {
            console.error('[api]', e);
            if (!res.headersSent) send(res, 500, dbError('Internal server error: ' + e.message));
        });
        return;
    }

    res.writeHead(404, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    res.end(JSON.stringify({ error: { message: 'Not found' } }));
});

server.on('upgrade', (req, socket) => {
    if ((req.url || '').startsWith('/ws')) {
        onWsUpgrade(req, socket);
    } else {
        socket.destroy();
    }
});

loadStore();
setInterval(() => {
    // heartbeat + session sweep
    for (const token of Object.keys(tables.sessions)) {
        if (tables.sessions[token].expires < Date.now()) {
            delete tables.sessions[token];
            saveTable('sessions');
        }
    }
    pruneStaleRooms();
}, 10 * 60 * 1000);

server.listen(PORT, '127.0.0.1', () => {
    console.log(`[sync-server] listening on http://127.0.0.1:${PORT}`);
});
