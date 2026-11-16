/* Safe LocalStorage Persistence — Device-local only, no credentials or images stored */

const KEYS = {
  CART: 'transeaz_cart_v1',
  WISHLIST: 'transeaz_wishlist_v1',
  REQUESTS: 'transeaz_requests_v1',
  PREFS: 'transeaz_prefs_v1'
};

function readJSON(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch (_err) {
    return fallback;
  }
}

function writeJSON(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (_err) {
    return false;
  }
}

export const Storage = {
  getCart() {
    const items = readJSON(KEYS.CART, []);
    return Array.isArray(items) ? items : [];
  },
  saveCart(items) {
    return writeJSON(KEYS.CART, items);
  },
  clearCart() {
    return writeJSON(KEYS.CART, []);
  },

  getWishlist() {
    const ids = readJSON(KEYS.WISHLIST, []);
    return Array.isArray(ids) ? ids : [];
  },
  saveWishlist(ids) {
    return writeJSON(KEYS.WISHLIST, ids);
  },

  getRequests() {
    const list = readJSON(KEYS.REQUESTS, []);
    return Array.isArray(list) ? list : [];
  },
  addRequest(entry) {
    const current = this.getRequests();
    const updated = [entry, ...current].slice(0, 40);
    return writeJSON(KEYS.REQUESTS, updated);
  },
  removeRequest(reference) {
    const updated = this.getRequests().filter((item) => item.reference !== reference);
    return writeJSON(KEYS.REQUESTS, updated);
  },
  clearRequests() {
    return writeJSON(KEYS.REQUESTS, []);
  },

  getPreferences() {
    const prefs = readJSON(KEYS.PREFS, null);
    return prefs && typeof prefs === 'object'
      ? prefs
      : { name: '', phone: '', area: 'Seeta University', landmark: '' };
  },
  savePreferences(prefs) {
    return writeJSON(KEYS.PREFS, {
      name: String(prefs.name || '').trim(),
      phone: String(prefs.phone || '').trim(),
      area: String(prefs.area || 'Seeta University').trim(),
      landmark: String(prefs.landmark || '').trim()
    });
  },
  clearPreferences() {
    try {
      window.localStorage.removeItem(KEYS.PREFS);
      return true;
    } catch (_err) {
      return false;
    }
  }
};
