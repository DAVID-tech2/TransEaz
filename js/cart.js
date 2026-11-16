/* TransEaz Shopping Cart State & Totals Controller */
import { Storage } from './storage.js';
import { getProductById } from './products.js';
import { CONFIG } from './config.js';
import { showToast } from './navigation.js';

let cartItems = Storage.getCart();
const listeners = new Set();

function persistAndNotify() {
  Storage.saveCart(cartItems);
  syncCartBadges();
  listeners.forEach((cb) => cb(getCart()));
}

export function onCartChange(callback) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

export function getCart() {
  return cartItems.map((item) => ({ ...item }));
}

export function getCartCount() {
  return cartItems.reduce((sum, item) => sum + item.quantity, 0);
}

export function getCartSubtotal() {
  return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function getServiceFee() {
  return 0;
}

export function getEstimatedDeliveryFee(areaName) {
  const area = CONFIG.serviceAreas.find(
    (a) => a.name.toLowerCase() === String(areaName || '').toLowerCase()
  );
  return area ? area.estimatedFeeUGX : 4000;
}

export function addToCart(productId, quantity = 1) {
  const product = getProductById(productId);
  if (!product) return false;

  const qtyToAdd = Math.max(1, Math.min(50, Math.floor(Number(quantity) || 1)));
  const existing = cartItems.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity = Math.min(50, existing.quantity + qtyToAdd);
  } else {
    cartItems.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      specs: product.specs || '',
      quantity: qtyToAdd
    });
  }

  persistAndNotify();
  showToast(`Added "${product.name}" to cart.`, 'success');
  return true;
}

export function updateCartQuantity(productId, nextQty) {
  const qty = Math.floor(Number(nextQty) || 0);
  if (qty <= 0) {
    removeFromCart(productId);
    return;
  }
  const target = cartItems.find((item) => item.id === productId);
  if (!target) return;
  target.quantity = Math.min(50, qty);
  persistAndNotify();
}

export function removeFromCart(productId) {
  cartItems = cartItems.filter((item) => item.id !== productId);
  persistAndNotify();
}

export function clearCart() {
  cartItems = [];
  Storage.clearCart();
  persistAndNotify();
}

export function syncCartBadges() {
  const count = getCartCount();
  document.querySelectorAll('[data-cart-count]').forEach((el) => {
    el.textContent = String(count);
  });
}
