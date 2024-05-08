// Define the Service Worker event listeners

// Event listener for the 'install' event
self.addEventListener('install', event => {
  event.waitUntil(
    // Perform installation tasks, e.g., caching static assets
    caches.open('my-cache').then(cache => {
      return cache.addAll([
        '/index.html',
        '/styles.css',
        '/script.js',
        '/images/logo.png',
      ]);
    })
  );
});

// Event listener for the 'activate' event
self.addEventListener('activate', event => {
  // Perform activation tasks, e.g., cleaning up old caches
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName.startsWith('my-') && cacheName !== 'my-cache';
        }).map(cacheName => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

// Event listener for the 'fetch' event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // If the request is found in the cache, return the cached response
      if (response) {
        return response;
      }
      // If not, fetch the request from the network and cache it
      return fetch(event.request).then(networkResponse => {
        caches.open('my-cache').then(cache => {
          cache.put(event.request, networkResponse.clone());
        });
        return networkResponse;
      });
    })
  );
});