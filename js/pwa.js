/* TransEaz Mobile App Registration, Install Prompt & Offline Indicator */
import { showToast } from './navigation.js';

let deferredPromptEvent = null;
let isAppInstalled = false;
const pwaListeners = new Set();

export function onPwaStateChange(fn) {
  pwaListeners.add(fn);
  return () => pwaListeners.delete(fn);
}

function notifyPwaListeners() {
  const state = getPwaState();
  pwaListeners.forEach((fn) => fn(state));
}

export function getPwaState() {
  const isStandalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;
  const isIOS = /iphone|ipad|ipod/i.test(window.navigator.userAgent);

  return {
    isStandalone: isStandalone || isAppInstalled,
    canPromptInstall: Boolean(deferredPromptEvent),
    isIOS,
    isOnline: navigator.onLine
  };
}

export async function triggerPwaInstall() {
  if (deferredPromptEvent) {
    deferredPromptEvent.prompt();
    const result = await deferredPromptEvent.userChoice;
    if (result && result.outcome === 'accepted') {
      isAppInstalled = true;
      deferredPromptEvent = null;
      notifyPwaListeners();
      showToast('TransEaz installation started.', 'success');
      return true;
    }
    return false;
  }
  openInstallInstructionsModal();
  return false;
}

export function openInstallInstructionsModal() {
  const backdrop = document.getElementById('pwa-modal-backdrop');
  const body = document.getElementById('pwa-modal-body');
  if (!backdrop || !body) return;

  const { isIOS } = getPwaState();

  body.innerHTML = `
    <div class="modal-header">
      <div>
        <span class="section-kicker">Install TransEaz Mobile App</span>
        <h2 id="pwa-modal-title">Add TransEaz to Your Home Screen</h2>
      </div>
      <button type="button" class="icon-btn" id="close-pwa-modal" aria-label="Close dialog">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <p style="color:var(--color-text-secondary);font-size:0.93rem;margin-bottom:16px;">
      Install the TransEaz mobile app directly onto your phone's home screen from your mobile browser.
    </p>

    ${isIOS ? `
      <div class="card" style="padding:16px;margin-bottom:14px;">
        <h3 style="margin-bottom:8px;">iPhone / iPad (Safari)</h3>
        <ol style="margin:0;padding-left:20px;color:var(--color-text-secondary);display:flex;flex-direction:column;gap:6px;">
          <li>Tap the <strong>Share</strong> icon in Safari's toolbar.</li>
          <li>Scroll down and tap <strong>Add to Home Screen</strong>.</li>
          <li>Tap <strong>Add</strong> to install the TransEaz mobile app.</li>
        </ol>
      </div>
    ` : `
      <div class="card" style="padding:16px;margin-bottom:14px;">
        <h3 style="margin-bottom:8px;">Mobile Browser (Chrome)</h3>
        <ol style="margin:0;padding-left:20px;color:var(--color-text-secondary);display:flex;flex-direction:column;gap:6px;">
          <li>Tap Chrome's three-dot menu (<strong>⋮</strong>) in the top-right corner.</li>
          <li>Select <strong>Install app</strong> or <strong>Add to Home screen</strong>.</li>
          <li>Confirm <strong>Install</strong> to open the TransEaz mobile app in standalone mode.</li>
        </ol>
      </div>
    `}

    <div class="notice">
      <div>
        <strong>Note on Internet Access:</strong> Installed pages load faster and stay available offline, but an active internet connection is still required to send orders or requests via WhatsApp.
      </div>
    </div>
  `;

  backdrop.hidden = false;
  document.body.style.overflow = 'hidden';

  const close = () => {
    backdrop.hidden = true;
    document.body.style.overflow = '';
  };

  document.getElementById('close-pwa-modal')?.addEventListener('click', close);
  backdrop.onclick = (e) => {
    if (e.target === backdrop) close();
  };
}

function updateOnlineStatusBar() {
  const bar = document.getElementById('offline-status-bar');
  if (bar) {
    bar.hidden = navigator.onLine;
  }
  notifyPwaListeners();
}

async function purgeLegacyPoisonedCaches() {
  if (!('caches' in window)) return;
  try {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter((k) => k.startsWith('transeaz-v1.0.0') || k.startsWith('transeaz-v1.0.1'))
        .map((k) => caches.delete(k))
    );
  } catch (_err) {
    // Ignore cache API restriction
  }
}

export function initPWA() {
  updateOnlineStatusBar();
  window.addEventListener('online', updateOnlineStatusBar);
  window.addEventListener('offline', updateOnlineStatusBar);

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPromptEvent = e;
    notifyPwaListeners();
  });

  window.addEventListener('appinstalled', () => {
    isAppInstalled = true;
    deferredPromptEvent = null;
    notifyPwaListeners();
    showToast('TransEaz is now installed on your device.', 'success');
  });

  if ('serviceWorker' in navigator) {
    purgeLegacyPoisonedCaches();
    (async () => {
      try {
        const hadController = Boolean(navigator.serviceWorker.controller);
        const reg = await navigator.serviceWorker.register('./sw.js', { scope: './' });
        reg.update().catch(() => {});

        if (hadController) {
          let reloaded = false;
          navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (!reloaded) {
              reloaded = true;
              window.location.reload();
            }
          });
        }

        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          if (!newWorker) return;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              newWorker.postMessage({ type: 'SKIP_WAITING' });
            }
          });
        });
      } catch (_err) {
        // Service worker registration skipped if environment restricts SW
      }
    })();
  }
}
