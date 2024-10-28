self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('gabidev-v1').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/assets/css/style.css',
          '/assets/js/main.js',
          '/assets/img/logodev.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  