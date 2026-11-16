/* TransEaz Hash Router, Mobile Drawer & Toast Notifications */
import { escapeHTML } from './validation.js';

let routeHandler = null;

export function registerRouteHandler(fn) {
  routeHandler = fn;
}

export function navigateTo(hashPath) {
  const normalized = hashPath.startsWith('#') ? hashPath : `#${hashPath}`;
  if (window.location.hash === normalized) {
    handleHashChange();
  } else {
    window.location.hash = normalized;
  }
}

export function parseHash() {
  const raw = (window.location.hash || '#home').slice(1);
  const [pathPart, queryPart] = raw.split('?');
  const segments = pathPart.split('/').filter(Boolean);
  const route = segments[0] || 'home';
  const param = segments[1] ? decodeURIComponent(segments[1]) : null;
  const params = new URLSearchParams(queryPart || '');
  return { route, param, params };
}

export function handleHashChange() {
  const parsed = parseHash();
  updateActiveNav(parsed.route);
  closeMobileDrawer();
  if (typeof routeHandler === 'function') {
    routeHandler(parsed);
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
}

export function updateActiveNav(route) {
  const mappedRoute =
    route === 'product' ? 'marketplace' : route === 'policy' ? 'more' : route;

  document.querySelectorAll('[data-nav-route]').forEach((el) => {
    const target = el.getAttribute('data-nav-route');
    const isActive = target === mappedRoute;
    el.classList.toggle('is-active', isActive);
    if (isActive) {
      el.setAttribute('aria-current', 'page');
    } else {
      el.removeAttribute('aria-current');
    }
  });
}

export function openMobileDrawer() {
  const backdrop = document.getElementById('mobile-drawer-backdrop');
  const drawer = document.getElementById('mobile-drawer');
  if (backdrop && drawer) {
    backdrop.hidden = false;
    drawer.hidden = false;
    document.body.style.overflow = 'hidden';
  }
}

export function closeMobileDrawer() {
  const backdrop = document.getElementById('mobile-drawer-backdrop');
  const drawer = document.getElementById('mobile-drawer');
  if (backdrop && drawer) {
    backdrop.hidden = true;
    drawer.hidden = true;
    document.body.style.overflow = '';
  }
}

export function initNavigationListeners() {
  window.addEventListener('hashchange', handleHashChange);

  document.getElementById('mobile-menu-toggle')?.addEventListener('click', openMobileDrawer);
  document.getElementById('close-mobile-drawer')?.addEventListener('click', closeMobileDrawer);
  document.getElementById('mobile-drawer-backdrop')?.addEventListener('click', closeMobileDrawer);

  document.getElementById('header-search-btn')?.addEventListener('click', () => {
    navigateTo('#marketplace');
    setTimeout(() => {
      document.getElementById('marketplace-search-input')?.focus();
    }, 60);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileDrawer();
      const waBackdrop = document.getElementById('whatsapp-modal-backdrop');
      if (waBackdrop && !waBackdrop.hidden) {
        waBackdrop.hidden = true;
        document.body.style.overflow = '';
      }
      const pwaBackdrop = document.getElementById('pwa-modal-backdrop');
      if (pwaBackdrop && !pwaBackdrop.hidden) {
        pwaBackdrop.hidden = true;
        document.body.style.overflow = '';
      }
    }
  });
}

export function showToast(message, variant = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast--${variant}`;
  toast.setAttribute('role', 'status');
  toast.innerHTML = `<span>${escapeHTML(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3200);
}
