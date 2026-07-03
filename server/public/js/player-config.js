// Shared player configuration between main app and embed
window.PLAYER_CONFIG = {
  plyr: {
    controls: ['play-large', 'play', 'progress', 'current-time', 'duration', 'mute', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
    settings: ['quality', 'speed'],
    autoplay: true,
  },
  hls: {
    maxBufferLength: 60,
    maxMaxBufferLength: 120,
    backBufferLength: 30,
    startLevel: -1,
    abrEwmaDefaultEstimate: 5e6,
    enableWorker: true,
    lowLatencyMode: false,
  },
  theme: {
    accent: '#ff5a1f',
    bg: '#0b0a08',
    text: '#f5efe4',
    text2: '#9ca3af',
    overlayBg: 'rgba(11, 10, 8, 0.8)',
  },
};
