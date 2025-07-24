const cacheName = "work-tips-v1";
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/icon.png",
  "/manifest.json"
];

// Install event: Cache essential files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
  self.skipWaiting(); // Activate this service worker immediately
});

// Activate event: Clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event: Serve cached assets if offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }).catch(() => {
      // Optional: You can return a fallback page or image here if wanted
    })
  );
});
