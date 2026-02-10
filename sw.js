const CACHE_NAME = 'lf-ultimate-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/vue@3/dist/vue.global.js'
];

// Tahap Install: Simpan semua file ke memori HP
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Tahap Fetch: Kalo internet mati, ambil dari memori (Cache)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
