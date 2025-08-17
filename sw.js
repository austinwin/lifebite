const CACHE_NAME = 'lifebite-v2.2';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/favicon.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
];

// Install service worker and cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate and clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Serve cached content when offline
self.addEventListener('fetch', e=>{
  const req = e.request;
  if(req.method !== 'GET') return; // don’t hijack POSTs (AI calls)
  const url = new URL(req.url);

  // Don’t cache cross-origin APIs by default
  if(url.origin !== location.origin) return;

  e.respondWith((async ()=>{
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(req);
    const fetcher = fetch(req).then(res=>{
      if(res.ok){ cache.put(req, res.clone()); }
      return res;
    }).catch(()=>cached);
    return cached || fetcher;
  })());
});
