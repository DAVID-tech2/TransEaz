/* TransEaz Service Worker — GitHub Pages Subpath-Safe Static Caching */
const CACHE_VERSION = 'transeaz-v1.1.0';
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
  './assets/team/receptionist.jpg',
  './assets/team/david.jpg',
  './assets/team/customer-care.jpg',
  './assets/team/tech-support.jpg',
  './assets/products/powerbank.jpg',
  './assets/products/powerbank-only.jpg',
  './assets/products/earbuds.jpg',
  './assets/products/earbuds-enc.webp',
  './assets/products/speaker-sonic.jpg',
  './assets/products/speaker-fm.webp',
  './assets/products/smartwatch-only.jpg',
  './assets/products/smartwatch-amoled.webp',
  './assets/products/smartwatch.jpg',
  './assets/products/charger-gan65w.jpg',
  './assets/products/charger-wall.webp',
  './assets/products/usb-c-cable.jpg',
  './assets/products/usb-cable-black.jpg',
  './assets/products/headphones-anc.webp',
  './assets/products/dress-casual.webp',
  './assets/products/sneakers-blue.webp',
  './assets/products/backpack.jpg',
  './assets/products/sneakers-sports-men.webp',
  './assets/products/leather-belt.jpg',
  './assets/products/watch-silver.webp',
  './assets/products/canvas-shoes.jpg',
  './assets/products/sneakers-women-sport.webp',
  './assets/products/sneakers-only.jpg',
  './assets/products/sneakers-allblack.jpg',
  './assets/products/backpack-ladies.webp',
  './assets/products/belt-ratchet.jpg',
  './assets/products/sunglasses-mirrored.webp',
  './assets/products/glasses-bluelight.webp',
  './assets/products/vaseline-lip-tin.jpg',
  './assets/products/body-oil-brightening.jpg',
  './assets/products/body-oil.jpg',
  './assets/products/lip-balm-rosy.webp',
  './assets/products/cream-jar.jpg',
  './assets/products/body-wash.webp',
  './assets/products/vaseline-jelly.jpg',
  './assets/products/lotion-cocoaglow.jpg',
  './assets/products/nivea-hydration.jpg',
  './assets/products/deodorant-stick.jpg',
  './assets/products/lotion-men.webp',
  './assets/products/deodorant-spray.jpg',
  './assets/products/toothpaste-herbal.jpg',
  './assets/products/toothpaste-compact.jpg',
  './assets/products/soap-lux.jpg',
  './assets/products/kettle.jpg',
  './assets/products/cooking-pot.webp',
  './assets/products/frying-pan-single.webp',
  './assets/products/frying-pan-black.jpg',
  './assets/products/blender-2in1.webp',
  './assets/products/blender-unbreakable.webp',
  './assets/products/knife-board-set.jpg',
  './assets/products/chopping-boards.webp',
  './assets/products/vacuum-flask-3l.jpg',
  './assets/products/flask-stainless.jpg',
  './assets/products/dinner-plates.webp',
  './assets/products/dinnerware-24pc.jpg',
  './assets/products/dinnerware-36pc.jpg',
  './assets/products/food-containers-clear.jpg',
  './assets/products/food-containers-color.webp',
  './assets/products/exercise-books-blue.jpg',
  './assets/products/exercise-notebooks.jpg',
  './assets/products/markers-set.jpg',
  './assets/products/stationery.jpg',
  './assets/products/counter-books-6pk.jpg',
  './assets/products/counter-books-black.jpg',
  './assets/products/bic-pens-box50.jpg',
  './assets/products/bic-cristal-50pk.jpg',
  './assets/products/whiteboard-marker-red.jpg',
  './assets/products/calculator-desktop.jpg',
  './assets/products/calculator-scientific.jpg',
  './assets/products/rulers-6pk.jpg',
  './assets/products/portfolio-calculator.jpg',
  './assets/products/padfolio-folder.jpg',
  './assets/products/a4-paper-carton.jpg',
  './assets/products/rice-super-5kg.webp',
  './assets/products/biscuits-pack.jpg',
  './assets/products/mango-juice.jpg',
  './assets/products/cooking-oil-bottle.webp',
  './assets/products/sugar-kinyara-1kg.jpg',
  './assets/products/milk-powder-400g.jpg',
  './assets/products/milk-uht-carton.webp',
  './assets/products/nescafe-coffee-100g.webp',
  './assets/products/tea-bags-50pk.jpg',
  './assets/products/indomie-noodles-5pk.jpg',
  './assets/products/spaghetti-500g.jpg',
  './assets/products/maize-flour-2kg.jpg',
  './assets/products/peanut-butter-400g.jpg',
  './assets/products/omo-washing-powder.jpg',
  './assets/products/laundry-detergent.jpg',
  './assets/products/toilet-paper-10pk.jpg',
  './assets/products/toilet-paper-pack.jpg',
  './assets/products/tissue-box.webp',
  './assets/products/kitchen-towels-2pk.jpg',
  './assets/products/bleach-jik-750ml.jpg',
  './assets/products/bleach-bottle.jpg',
  './assets/products/toilet-cleaner-500ml.jpg',
  './assets/products/antiseptic-liquid-250ml.jpg',
  './assets/products/soap-antibacterial.jpg',
  './assets/products/spray-mop.jpg',
  './assets/products/broom-dustpan-set.jpg',
  './assets/products/spin-mop-bucket.jpg',
  './assets/products/garbage-bags-20pk.jpg',
  './assets/products/biscuits-chococreams.jpg',
  './assets/products/choco-biscuits.jpg',
  './assets/products/biscuit-jar-butter.jpg',
  './assets/products/biscuit-jar-galaxy.jpg',
  './assets/products/peanut-butter-jar.jpg',
  './assets/products/coffee-jar.jpg',
  './assets/products/cookies-tin.jpg',
  './assets/products/snacks.jpg',
  './assets/products/crisps-canisters.jpg',
  './assets/products/crackers-salted.jpg',
  './assets/products/pringles-sourcream.jpg',
  './assets/products/pringles-ketchup.jpg',
  './assets/products/umbrella-compact.jpg',
  './assets/products/utilities.jpg',
  './assets/products/padlock-brass.jpg',
  './assets/products/padlock-combo.jpg',
  './assets/products/extension-cable-4way.jpg',
  './assets/products/mosquito-net.jpg',
  './assets/products/led-torch.jpg',
  './assets/products/desklamp.jpg',
  './assets/products/solar-lantern.jpg',
  './assets/products/flat-iron-box.jpg',
  './assets/products/stainless-bottle.jpg',
  './assets/products/towel-set-2in1.jpg',
  './assets/products/clothes-hangers-12pk.jpg',
  './assets/products/shoe-rack-4tier.jpg',
  './assets/products/hot-water-bag.jpg',
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
