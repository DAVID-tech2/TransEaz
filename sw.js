/* TransEaz Service Worker — GitHub Pages Subpath-Safe Static Caching */
const CACHE_VERSION = 'transeaz-v1.0.6';
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;

const CORE_ASSETS = [
  './',
  './index.html',
  './offline.html',
  './manifest.json',
  './favicon.ico',
  './assets/icons/favicon.png',
  './assets/icons/apple-touch-icon.png',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/icon-512-maskable.png',
  './assets/logo/transeaz-logo.jpg',
  './assets/images/hero-campus-delivery.jpg',
  './assets/team/ceo.jpg',
  './assets/team/customer-care.jpg',
  './assets/team/tech-support.jpg',
  './assets/products/powerbank.jpg',
  './assets/products/earbuds.jpg',
  './assets/products/backpack.jpg',
  './assets/products/stationery.jpg',
  './assets/products/groceries.jpg',
  './assets/products/kettle.jpg',
  './assets/products/skincare.jpg',
  './assets/products/desklamp.jpg',
  './assets/products/sneakers.jpg',
  './assets/products/cookware.jpg',
  './assets/products/household.jpg',
  './assets/products/snacks.jpg',
  './assets/products/smartwatch.jpg',
  './assets/products/utilities.jpg',
  './css/style.css',
  './css/components.css',
  './css/responsive.css',
  './css/animations.css',
  './js/config.js',
  './js/storage.js',
  './js/validation.js',
  './js/whatsapp.js',
  './js/products.js',
  './js/navigation.js',
  './js/marketplace.js',
  './js/product-details.js',
  './js/cart.js',
  './js/checkout.js',
  './js/procurement.js',
  './js/errands.js',
  './js/requests.js',
  './js/about.js',
  './js/more.js',
  './js/pwa.js',
  './js/app.js'
];

function isValidMimeForAsset(urlPath, contentType) {
  if (!contentType) return true;
  const ct = contentType.toLowerCase();
  if (urlPath.endsWith('.css')) return ct.includes('text/css');
  if (urlPath.endsWith('.js')) return ct.includes('javascript') || ct.includes('ecmascript');
  if (urlPath.endsWith('.html')) return ct.includes('text/html');
  if (urlPath.endsWith('.json')) return ct.includes('application/json') || ct.includes('manifest');
  return true;
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then(async (cache) => {
        await Promise.allSettled(
          CORE_ASSETS.map(async (url) => {
            try {
              const headers = url.endsWith('.css')
                ? { Accept: 'text/css,*/*;q=0.1' }
                : undefined;
              const response = await fetch(url, { cache: 'no-cache', headers });
              const contentType = response.headers.get('content-type') || '';
              if (response.ok && isValidMimeForAsset(url, contentType)) {
                await cache.put(url, response);
              }
            } catch (_err) {
              // Skip unreachable optional path during install
            }
          })
        );
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== STATIC_CACHE && key !== RUNTIME_CACHE)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    return;
  }

  if (
    url.pathname.startsWith('/@') ||
    url.pathname.includes('node_modules') ||
    url.searchParams.has('t')
  ) {
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.ok) {
            const copy = networkResponse.clone();
            caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
          }
          return networkResponse;
        })
        .catch(async () => {
          const cachedExact = await caches.match(request, { ignoreSearch: true });
          if (cachedExact) return cachedExact;
          const cachedRoot = await caches.match('./');
          if (cachedRoot) return cachedRoot;
          const cachedIndex = await caches.match('./index.html');
          if (cachedIndex) return cachedIndex;
          const offlineFallback = await caches.match('./offline.html');
          return offlineFallback || new Response('Offline', { status: 503, statusText: 'Offline' });
        })
    );
    return;
  }

  const isCodeOrStyle =
    request.destination === 'style' ||
    request.destination === 'script' ||
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('.js');

  if (isCodeOrStyle) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          const ct = networkResponse.headers.get('content-type') || '';
          if (networkResponse && networkResponse.ok && isValidMimeForAsset(url.pathname, ct)) {
            const copy = networkResponse.clone();
            caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
          }
          return networkResponse;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          if (cached) {
            const ct = cached.headers.get('content-type') || '';
            if (isValidMimeForAsset(url.pathname, ct)) return cached;
          }
          return new Response('', { status: 504 });
        })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.ok) {
            const copy = networkResponse.clone();
            caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
          }
          return networkResponse;
        })
        .catch(() => cachedResponse || new Response('', { status: 504 }));

      return cachedResponse || fetchPromise;
    })
  );
});
