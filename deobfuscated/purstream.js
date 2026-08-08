const API_BASE = 'https://api.purstream.store/api/v1';

async function tmdbLookup(tmdbId, type) {
  const mediaType = type === 'tv' ? 'tv' : 'movie';
  const field = type === 'tv' ? 'name' : 'title';
  const dateField = type === 'tv' ? 'first_air_date' : 'release_date';
  const res = await fetch(`https://api.themoviedb.org/3/${mediaType}/${tmdbId}?api_key=5041824efe5b53c3a7ea9bee4d4e4eb8&language=fr-FR`, {
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) return null;
  const d = await res.json();
  return { title: d[field], year: (d[dateField] || '').split('-')[0] };
}

async function searchPurstream(query) {
  const res = await fetch(`${API_BASE}/search-bar/search/${encodeURIComponent(query)}`, {
    signal: AbortSignal.timeout(10000),
  });
  if (!res.ok) return null;
  const d = await res.json();
  return d.data?.items?.movies?.items || null;
}

async function getSheet(id) {
  const res = await fetch(`${API_BASE}/media/${id}/sheet`, { signal: AbortSignal.timeout(10000) });
  if (!res.ok) return null;
  const d = await res.json();
  return d.data?.items || null;
}

async function findPurstreamId(tmdbId, type, title, year) {
  if (!title) {
    const info = await tmdbLookup(tmdbId, type);
    if (!info) return null;
    title = info.title;
    year = info.year;
  }

  const results = await searchPurstream(title);
  if (!results?.length) return null;

  for (const r of results) {
    const matchYear = (r.release_date || '').split('-')[0];
    if (year && matchYear === year) return r.id;
  }

  for (const r of results) {
    const sheet = await getSheet(r.id);
    if (sheet?.tmdbId == tmdbId) return r.id;
  }

  return results[0].id;
}

function toStream(s) {
  return {
    name: 'Purstream',
    title: `Purstream · ${s.source_name || s.name || 'HLS'}`,
    url: s.stream_url || s.url,
    quality: (s.source_name || s.name || '').match(/(\d{3,4}p|4K)/i)?.[1] || 'Auto',
    headers: {},
  };
}

async function getStreams(id, type, season, episode) {
  try {
    let purId = id;

    const sheet = await getSheet(id);
    if (!sheet?.urls?.length) {
      purId = await findPurstreamId(id, type);
      if (!purId) return [];
    } else {
      if (type === 'tv' && season && episode) {
        const res = await fetch(`${API_BASE}/stream/${purId}/episode?season=${season}&episode=${episode}`, {
          signal: AbortSignal.timeout(10000),
        });
        if (res.ok) {
          const d = await res.json();
          const sources = d.data?.items?.sources;
          if (sources?.length) return sources.map(toStream);
        }
      }

      return sheet.urls.map(toStream);
    }

    if (type === 'tv' && season && episode) {
      const res = await fetch(`${API_BASE}/stream/${purId}/episode?season=${season}&episode=${episode}`, {
        signal: AbortSignal.timeout(10000),
      });
      if (res.ok) {
        const d = await res.json();
        const sources = d.data?.items?.sources;
        if (sources?.length) return sources.map(toStream);
      }
    }

    const res = await fetch(`${API_BASE}/stream/${purId}`, { signal: AbortSignal.timeout(10000) });
    if (!res.ok) return [];
    const d = await res.json();
    const sources = d.data?.items?.sources;
    if (!sources?.length) return [];

    return sources.map(toStream);
  } catch (e) {
    console.error('[Purstream]', e.message);
    return [];
  }
}

module.exports = { getStreams, name: 'Purstream', supportedTypes: ['movie', 'tv'] };
