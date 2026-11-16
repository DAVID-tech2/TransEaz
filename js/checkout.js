/* TransEaz Shopping Cart & WhatsApp Checkout View */
import {
  getCart,
  getCartSubtotal,
  getServiceFee,
  getEstimatedDeliveryFee,
  updateCartQuantity,
  removeFromCart,
  clearCart
} from './cart.js';
import { CONFIG } from './config.js';
import { Storage } from './storage.js';
import {
  escapeHTML,
  formatUGX,
  generateReference,
  isValidUgandanPhone,
  normalizeText,
  showFieldError,
  clearFormErrors,
  runWithSubmitLock
} from './validation.js';
import { formatMarketplaceOrderMessage, openWhatsAppHandoff } from './whatsapp.js';
import { showToast } from './navigation.js';

export function renderCartCheckoutView(rootEl) {
  const items = getCart();
  const prefs = Storage.getPreferences();

  if (items.length === 0) {
    rootEl.innerHTML = `
      <section class="page-section view-enter">
        <div class="container">
          <div class="empty-state">
            <h1>Your Cart Is Empty</h1>
            <p>Browse our local merchant marketplace for campus essentials, or request custom sourcing from Kampala.</p>
            <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;">
              <a href="#marketplace" class="btn btn--primary">Browse Marketplace</a>
              <a href="#procurement" class="btn btn--secondary">Request Kampala Procurement</a>
            </div>
          </div>
        </div>
      </section>
    `;
    return;
  }

  const initialArea = prefs.area || CONFIG.serviceAreas[0].name;
  const subtotal = getCartSubtotal();
  const serviceFee = getServiceFee();
  const estFee = getEstimatedDeliveryFee(initialArea);
  const estTotal = subtotal + serviceFee + estFee;

  rootEl.innerHTML = `
    <section class="page-section view-enter">
      <div class="container">
        <div class="section-header">
          <div>
            <span class="section-kicker">My Cart &amp; WhatsApp Checkout</span>
            <h1>Review Your Order</h1>
            <p class="section-subtitle">
              Adjust quantities, review your estimated total in UGX, and prepare a formatted WhatsApp order for confirmation by TransEaz.
            </p>
          </div>
          <button type="button" class="btn btn--subtle-danger btn--sm" id="clear-cart-btn">Clear Cart</button>
        </div>

        <div class="split-layout">
          <div>
            <div class="cart-list" id="cart-items-list">
              ${items.map((item) => {
                const subMeta = item.category || item.specs || item.merchant || 'Marketplace item';
                return `
                <div class="cart-item" data-cart-row="${escapeHTML(item.id)}">
                  <img
                    src="${escapeHTML(item.image)}"
                    alt="${escapeHTML(item.name)}"
                    class="cart-thumb"
                    onerror="this.style.visibility='hidden';"
                  />
                  <div style="min-width:0;">
                    <a href="#product/${encodeURIComponent(item.id)}" style="font-family:var(--font-display);font-weight:700;text-decoration:none;color:var(--color-navy);display:block;margin-bottom:2px;">
                      ${escapeHTML(item.name)}
                    </a>
                    <div style="font-size:0.83rem;color:var(--color-text-muted);">
                      Unit price: <span class="tabular-nums">${escapeHTML(formatUGX(item.price))}</span> · ${escapeHTML(subMeta)}
                    </div>
                  </div>
                  <div class="cart-item-controls" style="display:flex;align-items:center;gap:12px;">
                    <div class="qty-stepper">
                      <button type="button" class="qty-btn" data-qty-dec="${escapeHTML(item.id)}" aria-label="Decrease quantity of ${escapeHTML(item.name)}">−</button>
                      <span class="qty-value">${item.quantity}</span>
                      <button type="button" class="qty-btn" data-qty-inc="${escapeHTML(item.id)}" aria-label="Increase quantity of ${escapeHTML(item.name)}">+</button>
                    </div>
                    <div style="text-align:right;min-width:96px;">
                      <div class="tabular-nums" style="font-weight:700;color:var(--color-navy);">
                        ${escapeHTML(formatUGX(item.price * item.quantity))}
                      </div>
                      <button type="button" data-remove-item="${escapeHTML(item.id)}" style="background:none;border:none;color:var(--color-text-muted);font-size:0.78rem;font-weight:600;cursor:pointer;padding:6px 4px;min-height:36px;text-decoration:underline;">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              `;
              }).join('')}
            </div>

            <div class="card" style="margin-top:20px;">
              <h2 style="margin-bottom:12px;">Order Summary</h2>
              <div class="summary-row">
                <span>Product Subtotal</span>
                <span class="tabular-nums" id="cart-subtotal-display">${escapeHTML(formatUGX(subtotal))}</span>
              </div>
              <div class="summary-row">
                <span>Service Fee</span>
                <span class="tabular-nums" id="cart-service-fee-display">${escapeHTML(formatUGX(serviceFee))}</span>
              </div>
              <div class="summary-row">
                <span>Estimated Delivery Fee (<span id="cart-fee-area">${escapeHTML(initialArea)}</span>)</span>
                <span class="tabular-nums" id="cart-fee-display">${escapeHTML(formatUGX(estFee))}</span>
              </div>
              <div class="summary-row summary-row--total">
                <span>Estimated Total</span>
                <span class="tabular-nums" id="cart-total-display">${escapeHTML(formatUGX(estTotal))}</span>
              </div>
              <p style="font-size:0.82rem;color:var(--color-text-muted);margin-top:10px;">
                Prices are indicative and subject to availability. Final pricing is confirmed through WhatsApp before an order is approved.
              </p>
            </div>
          </div>

          <div class="card">
            <h2 style="margin-bottom:6px;">Delivery &amp; Contact Details</h2>
            <p style="font-size:0.88rem;color:var(--color-text-secondary);margin-bottom:18px;">
              We serve Seeta University, Seeta, Mbalala, and Mukono.
            </p>

            <form id="checkout-form" novalidate>
              <div class="form-grid">
                <div class="form-field form-field--full">
                  <label class="form-label" for="co-name">Customer Name <span class="req">*</span></label>
                  <input id="co-name" name="name" type="text" class="input" required placeholder="e.g. Sarah Namukasa" value="${escapeHTML(prefs.name || '')}" />
                  <span class="field-error" id="co-name-error" role="alert"></span>
                </div>

                <div class="form-field form-field--full">
                  <label class="form-label" for="co-phone">WhatsApp / Telephone Number <span class="req">*</span></label>
                  <input id="co-phone" name="phone" type="tel" class="input" required placeholder="e.g. 0772 123456 or +256 786 436524" value="${escapeHTML(prefs.phone || '')}" />
                  <span class="field-error" id="co-phone-error" role="alert"></span>
                </div>

                <div class="form-field form-field--full">
                  <label class="form-label" for="co-area">Approved Service Area <span class="req">*</span></label>
                  <select id="co-area" name="area" class="select" required>
                    ${CONFIG.serviceAreas.map((a) => `
                      <option value="${escapeHTML(a.name)}" ${a.name === initialArea ? 'selected' : ''}>
                        ${escapeHTML(a.name)} (Est. delivery ${escapeHTML(formatUGX(a.estimatedFeeUGX))})
                      </option>
                    `).join('')}
                  </select>
                  <span class="field-error" id="co-area-error" role="alert"></span>
                </div>

                <div class="form-field form-field--full">
                  <label class="form-label" for="co-landmark">Hostel / Hall / Specific Delivery Landmark <span class="req">*</span></label>
                  <input id="co-landmark" name="landmark" type="text" class="input" required placeholder="e.g. Main Gate, Block B Room 14, or Seeta Road" value="${escapeHTML(prefs.landmark || '')}" />
                  <span class="field-error" id="co-landmark-error" role="alert"></span>
                </div>

                <div class="form-field form-field--full">
                  <label class="form-label" for="co-window">Preferred Delivery Option <span class="req">*</span></label>
                  <select id="co-window" name="window" class="select" required>
                    ${CONFIG.deliveryWindows.map((w) => `<option value="${escapeHTML(w)}">${escapeHTML(w)}</option>`).join('')}
                  </select>
                </div>

                <div class="form-field form-field--full">
                  <label class="form-label" for="co-instructions">Additional Instructions (Optional)</label>
                  <textarea id="co-instructions" name="instructions" class="textarea" placeholder="Call on arrival, preferred brand color, gate pass instructions..."></textarea>
                </div>
              </div>

              <div class="notice" style="margin-top:16px;margin-bottom:16px;">
                <div>
                  <strong>How confirmation works:</strong> Tapping <strong>Place Order via WhatsApp</strong> opens WhatsApp with your prepared order. Send the message and wait for TransEaz to confirm availability and final total.
                </div>
              </div>

              <button type="submit" class="btn btn--primary btn--full">
                Place Order via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;

  rootEl.querySelectorAll('[data-qty-dec]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-qty-dec');
      const found = getCart().find((i) => i.id === id);
      if (found) {
        updateCartQuantity(id, found.quantity - 1);
        renderCartCheckoutView(rootEl);
      }
    });
  });

  rootEl.querySelectorAll('[data-qty-inc]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-qty-inc');
      const found = getCart().find((i) => i.id === id);
      if (found) {
        updateCartQuantity(id, found.quantity + 1);
        renderCartCheckoutView(rootEl);
      }
    });
  });

  rootEl.querySelectorAll('[data-remove-item]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-remove-item');
      removeFromCart(id);
      showToast('Item removed from cart.', 'success');
      renderCartCheckoutView(rootEl);
    });
  });

  document.getElementById('clear-cart-btn')?.addEventListener('click', (e) => {
    const btn = e.currentTarget;
    if (btn.dataset.confirming === 'true') {
      clearCart();
      showToast('Cart cleared.', 'success');
      renderCartCheckoutView(rootEl);
    } else {
      btn.dataset.confirming = 'true';
      btn.textContent = 'Confirm Clear Cart';
      setTimeout(() => {
        if (document.body.contains(btn)) {
          btn.dataset.confirming = 'false';
          btn.textContent = 'Clear Cart';
        }
      }, 3500);
    }
  });

  const areaSelect = document.getElementById('co-area');
  areaSelect?.addEventListener('change', () => {
    const chosenArea = areaSelect.value;
    const fee = getEstimatedDeliveryFee(chosenArea);
    const currentSub = getCartSubtotal();
    const currentServiceFee = getServiceFee();
    const feeAreaEl = document.getElementById('cart-fee-area');
    const feeEl = document.getElementById('cart-fee-display');
    const totalEl = document.getElementById('cart-total-display');
    if (feeAreaEl) feeAreaEl.textContent = chosenArea;
    if (feeEl) feeEl.textContent = formatUGX(fee);
    if (totalEl) totalEl.textContent = formatUGX(currentSub + currentServiceFee + fee);
  });

  const form = document.getElementById('checkout-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    clearFormErrors(form);

    const customerName = normalizeText(document.getElementById('co-name')?.value);
    const customerPhone = normalizeText(document.getElementById('co-phone')?.value);
    const deliveryArea = normalizeText(document.getElementById('co-area')?.value);
    const deliveryLandmark = normalizeText(document.getElementById('co-landmark')?.value);
    const deliveryWindow = normalizeText(document.getElementById('co-window')?.value);
    const instructions = normalizeText(document.getElementById('co-instructions')?.value);

    let valid = true;
    if (customerName.length < 2) {
      showFieldError('co-name', 'Please enter your full name.');
      valid = false;
    }
    if (!isValidUgandanPhone(customerPhone)) {
      showFieldError('co-phone', 'Enter a valid Ugandan or international phone number (e.g. 0772 123456).');
      valid = false;
    }
    if (deliveryLandmark.length < 3) {
      showFieldError('co-landmark', 'Please specify your hostel, hall, or nearby landmark.');
      valid = false;
    }

    if (!valid) {
      showToast('Please fix the highlighted checkout fields.', 'error');
      return;
    }

    runWithSubmitLock('checkout', () => {
      const currentItems = getCart();
      const currentSubtotal = getCartSubtotal();
      const currentServiceFee = getServiceFee();
      const deliveryFee = getEstimatedDeliveryFee(deliveryArea);
      const total = currentSubtotal + currentServiceFee + deliveryFee;
      const reference = generateReference('MKT');

      const message = formatMarketplaceOrderMessage({
        reference,
        customerName,
        customerPhone,
        deliveryArea,
        deliveryLandmark,
        deliveryWindow,
        items: currentItems,
        subtotal: currentSubtotal,
        serviceFee: currentServiceFee,
        deliveryFee,
        total,
        instructions
      });

      Storage.addRequest({
        reference,
        type: 'Marketplace Order',
        summary: `${currentItems.length} item(s) — Est. ${formatUGX(total)} (${deliveryArea})`,
        createdAt: new Date().toISOString(),
        message
      });

      openWhatsAppHandoff({
        title: 'Marketplace Order Prepared',
        reference,
        message
      });
    });
  });
}
