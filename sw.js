/* this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v2').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './js/app.js',
        './dist/build.js',
        './dist/build.js.map',
        './dist/1.png',
        './dist/istoriyz.png',
        './dist/matg.jpg',
        './dist/informatika.jpg',
        './favicon/apple-touch-icon.png',
        './favicon/favicon-32x32.png',
        './favicon/favicon-16x16.png',
        './favicon/manifest.json',
        './favicon/safari-pinned-tab.svg',
        'https://use.fontawesome.com/releases/v5.0.1/js/all.js'
      ]);
    })
  );
});

this.addEventListener('activate', function(event) {
  var cacheWhitelist = ['v2'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});

this.addEventListener('fetch', function(event) {
  var response;
  event.respondWith(caches.match(event.request).then(function() {
    return fetch(event.request);
  }).then(function(r) {
    response = r;
    caches.open('v1').then(function(cache) {
      cache.put(event.request, response);
    });
    return response.clone();
  }).catch(function() {
    console.log('Ошибка');
  }));
}); */