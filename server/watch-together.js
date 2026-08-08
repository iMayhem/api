const crypto = require('crypto');

const rooms = new Map();

const ROOM_EXPIRE_MS = 6 * 60 * 60 * 1000;

// Persist watch-together chat messages to the Moovie sync database
// (JSON-file DB on port 3002 — viewable in the DB admin panel).
// Schema matches the Moovie app's party_chat_messages (user_name/message).
const SYNC_BASE = process.env.SYNC_URL || 'http://127.0.0.1:3002';

function persistChatMessage(msg) {
  try {
    fetch(`${SYNC_BASE}/api/party_chat_messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        room_id: msg.room_id,
        user_name: msg.username,
        message: msg.text,
        image_url: null,
      }),
    }).catch(() => {});
  } catch (e) {}
}

setInterval(() => {
  const now = Date.now();
  for (const [id, room] of rooms) {
    if (now - room.createdAt > ROOM_EXPIRE_MS) {
      for (const client of room.clients) {
        try { client.ws.close(); } catch {}
      }
      rooms.delete(id);
    }
  }
}, 60 * 1000);

const commands = {};

function define(name, handler) {
  commands[name] = handler;
}

define('create_room', (ws, data) => {
  const roomId = crypto.randomBytes(4).toString('hex');
  const room = {
    id: roomId,
    clients: [],
    hostId: null,
    videoUrl: null,
    videoType: null,
    isPlaying: false,
    position: 0,
    lastAction: null,
    createdAt: Date.now(),
  };
  rooms.set(roomId, room);
  send(ws, { type: 'room_created', room_id: roomId });
});

define('join_room', (ws, data) => {
  const room = rooms.get(data.room_id);
  if (!room) return send(ws, { type: 'error', message: 'Room not found' });
  if (room.clients.length >= 20) return send(ws, { type: 'error', message: 'Room is full' });

  const userId = crypto.randomBytes(6).toString('hex');
  const username = data.username || `User-${userId.slice(0, 4)}`;

  ws._roomId = room.id;
  ws._userId = userId;
  ws._username = username;

  room.clients.push({ ws, userId, username });

  if (!room.hostId) room.hostId = userId;

  send(ws, {
    type: 'room_joined',
    room_id: room.id,
    user_id: userId,
    username,
    users: room.clients.map(c => ({ user_id: c.userId, username: c.username })),
    state: {
      video_url: room.videoUrl,
      video_type: room.videoType,
      is_playing: room.isPlaying,
      position: room.position,
    },
  });

  broadcast(room, {
    type: 'user_joined',
    user_id: userId,
    username,
    users: room.clients.map(c => ({ user_id: c.userId, username: c.username })),
  }, ws);
});

define('leave_room', (ws) => {
  leaveRoom(ws);
});

define('chat_message', (ws, data) => {
  if (!ws._roomId) return;
  const room = rooms.get(ws._roomId);
  if (!room) return;
  const text = String(data.text || '').slice(0, 1000);
  broadcast(room, {
    type: 'chat_message',
    user_id: ws._userId,
    username: ws._username,
    text,
  });
  persistChatMessage({
    room_id: ws._roomId,
    user_id: ws._userId,
    username: ws._username,
    text,
  });
});

define('video_action', (ws, data) => {
  if (!ws._roomId) return;
  const room = rooms.get(ws._roomId);
  if (!room) return;
  room.isPlaying = data.is_playing !== undefined ? data.is_playing : room.isPlaying;
  room.position = data.position !== undefined ? data.position : room.position;
  broadcast(room, {
    type: 'video_action',
    user_id: ws._userId,
    is_playing: room.isPlaying,
    position: room.position,
    timestamp: Date.now(),
  }, ws);
});

define('video_change', (ws, data) => {
  if (!ws._roomId) return;
  const room = rooms.get(ws._roomId);
  if (!room) return;
  room.videoUrl = data.url || null;
  room.videoType = data.type || null;
  room.isPlaying = false;
  room.position = 0;
  broadcast(room, {
    type: 'video_change',
    user_id: ws._userId,
    url: room.videoUrl,
    video_type: room.videoType,
  });
});

define('ping', (ws) => {
  send(ws, { type: 'pong' });
});

function leaveRoom(ws) {
  if (!ws._roomId) return;
  const room = rooms.get(ws._roomId);
  if (!room) return;
  room.clients = room.clients.filter(c => c.ws !== ws);
  if (room.clients.length === 0) {
    rooms.delete(ws._roomId);
    return;
  }
  if (room.hostId === ws._userId) {
    room.hostId = room.clients[0].userId;
  }
  broadcast(room, {
    type: 'user_left',
    user_id: ws._userId,
    username: ws._username,
    users: room.clients.map(c => ({ user_id: c.userId, username: c.username })),
    new_host: room.hostId,
  });
  ws._roomId = null;
  ws._userId = null;
  ws._username = null;
}

function send(ws, data) {
  try {
    ws.send(JSON.stringify(data));
  } catch {}
}

function broadcast(room, data, exclude) {
  const msg = JSON.stringify(data);
  for (const client of room.clients) {
    if (client.ws === exclude) continue;
    try { client.ws.send(msg); } catch {}
  }
}

function handleMessage(ws, raw) {
  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    return send(ws, { type: 'error', message: 'Invalid JSON' });
  }
  const handler = commands[data.type];
  if (handler) {
    handler(ws, data);
  }
}

function handleClose(ws) {
  leaveRoom(ws);
}

function setupWebSocket(wss) {
  wss.on('connection', (ws) => {
    ws._roomId = null;
    ws._userId = null;
    ws._username = null;

    ws.on('message', (raw) => handleMessage(ws, raw.toString()));
    ws.on('close', () => handleClose(ws));
    ws.on('error', () => handleClose(ws));

    send(ws, { type: 'connected' });
  });
}

module.exports = { setupWebSocket };
