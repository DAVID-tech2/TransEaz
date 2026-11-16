/* Validation, Sanitization & Formatting Utilities */

export function escapeHTML(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function formatUGX(amount) {
  const num = Number(amount) || 0;
  return `UGX ${Math.round(num).toLocaleString('en-UG')}`;
}

export function normalizeText(value) {
  return String(value ?? '').trim();
}

export function isValidUgandanPhone(phone) {
  const cleaned = String(phone ?? '').replace(/[\s\-()]/g, '');
  // Accepts +2567XXXXXXXX, 2567XXXXXXXX, 07XXXXXXXX, +2563XXXXXXXX, 03XXXXXXXX, or general 9-15 digit intl format
  return /^(\+?256|0)(7\d{8}|3\d{8}|2\d{8})$/.test(cleaned) || /^\+?[1-9]\d{8,14}$/.test(cleaned);
}

export function generateReference(prefix) {
  const now = new Date();
  const y = String(now.getFullYear()).slice(-2);
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `TEZ-${prefix}-${y}${m}${d}-${rand}`;
}

export function showFieldError(fieldId, message) {
  const input = document.getElementById(fieldId);
  const errorEl = document.getElementById(`${fieldId}-error`);
  if (input) {
    input.classList.toggle('is-invalid', Boolean(message));
    input.setAttribute('aria-invalid', message ? 'true' : 'false');
  }
  if (errorEl) {
    errorEl.textContent = message || '';
  }
}

export function clearFormErrors(formEl) {
  if (!formEl) return;
  formEl.querySelectorAll('.is-invalid').forEach((el) => {
    el.classList.remove('is-invalid');
    el.setAttribute('aria-invalid', 'false');
  });
  formEl.querySelectorAll('.field-error').forEach((el) => {
    el.textContent = '';
  });
}

const activeLocks = new Set();

export function runWithSubmitLock(lockKey, fn) {
  if (activeLocks.has(lockKey)) return false;
  activeLocks.add(lockKey);
  try {
    fn();
  } finally {
    setTimeout(() => {
      activeLocks.delete(lockKey);
    }, 900);
  }
  return true;
}
