/* TransEaz Product Details Page (PDP) */
import { getProductById, getRelatedProducts, CATEGORY_ICONS } from './products.js';
import { addToCart } from './cart.js';
import { Storage } from './storage.js';
import { renderProductCardHTML, bindProductGridEvents, toggleWishlist } from './marketplace.js';
import { escapeHTML, formatUGX } from './validation.js';
import { openWhatsAppHandoff, formatSupportMessage } from './whatsapp.js';

export function renderProductDetailView(rootEl, productId) {
  const product = getProductById(productId);

  if (!product) {
    rootEl.innerHTML = `
      <section class="page-section view-enter">
        <div class="container">
          <div class="empty-state">
            <h1>Product Not Found</h1>
            <p>This item could not be found. Browse the marketplace or request custom sourcing from Kampala.</p>
            <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;">
              <a href="#marketplace" class="btn btn--primary">Back to Marketplace</a>
              <a href="#procurement" class="btn btn--secondary">Kampala Procurement</a>
            </div>
          </div>
        </div>
      </section>
    `;
    return;
  }

  let qty = 1;
  const isSaved = Storage.getWishlist().includes(product.id);
  const relatedList = getRelatedProducts(product, 4);
  const fallbackIcon = CATEGORY_ICONS[product.category] || CATEGORY_ICONS['Others'];

  rootEl.innerHTML = `
    <section class="page-section view-enter">
      <div class="container">
        <nav aria-label="Breadcrumb" style="margin-bottom:18px;font-size:0.875rem;color:var(--color-text-muted);display:flex;gap:8px;flex-wrap:wrap;">
          <a href="#home" style="text-decoration:none;">Home</a>
          <span aria-hidden="true">/</span>
          <a href="#marketplace" style="text-decoration:none;">Marketplace</a>
          <span aria-hidden="true">/</span>
          <a href="#marketplace?category=${encodeURIComponent(product.category)}" style="text-decoration:none;">${escapeHTML(product.category)}</a>
          <span aria-hidden="true">/</span>
          <span style="color:var(--color-navy);font-weight:600;">${escapeHTML(product.name)}</span>
        </nav>

        <div class="pdp-layout">
          <div class="pdp-image-box">
            <img
              src="${escapeHTML(product.image)}"
              alt="${escapeHTML(product.name)}"
              referrerpolicy="no-referrer"
              onerror="this.style.display='none';this.nextElementSibling.hidden=false;"
            />
            <div class="image-fallback" hidden>
              ${fallbackIcon}
              <span>${escapeHTML(product.category)} · ${escapeHTML(product.name)}</span>
            </div>
          </div>

          <div style="display:flex;flex-direction:column;gap:14px;">
            <div class="product-meta-line" style="font-size:0.85rem;">
              <span>${escapeHTML(product.category)}</span>
              ${product.specs ? `<span aria-hidden="true">·</span><span>${escapeHTML(product.specs)}</span>` : ''}
            </div>

            <h1>${escapeHTML(product.name)}</h1>

            <div class="tabular-nums" style="font-family:var(--font-display);font-size:1.625rem;font-weight:800;color:var(--color-emerald);">
              ${escapeHTML(formatUGX(product.price))}
            </div>

            <p style="color:var(--color-text-secondary);font-size:0.975rem;line-height:1.65;">
              ${escapeHTML(product.description)}
            </p>

            <div class="notice">
              <div>
                Prices are indicative and subject to availability. Final pricing is confirmed through WhatsApp before an order is approved.
              </div>
            </div>

            <div style="display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-top:4px;">
              <div>
                <span class="form-label" style="display:block;margin-bottom:6px;">Quantity</span>
                <div class="qty-stepper">
                  <button type="button" class="qty-btn" id="pdp-qty-dec" aria-label="Decrease quantity">−</button>
                  <span class="qty-value" id="pdp-qty-val">1</span>
                  <button type="button" class="qty-btn" id="pdp-qty-inc" aria-label="Increase quantity">+</button>
                </div>
              </div>

              <div style="flex:1;min-width:200px;padding-top:24px;display:flex;gap:10px;flex-wrap:wrap;">
                <button type="button" class="btn btn--primary" id="pdp-add-cart" style="flex:1;">
                  Add to Cart
                </button>
                <button type="button" class="btn btn--secondary" id="pdp-wishlist-btn" aria-pressed="${isSaved ? 'true' : 'false'}">
                  ${isSaved ? 'Saved' : 'Save'}
                </button>
              </div>
            </div>

            <div style="display:flex;flex-wrap:wrap;gap:10px;padding-top:8px;">
              <button type="button" class="btn btn--ghost btn--sm" id="pdp-ask-wa">
                Ask about this item on WhatsApp
              </button>
              <a href="#cart" class="btn btn--ghost btn--sm">Go to My Cart</a>
            </div>
          </div>
        </div>

        <hr class="hairline-divider" style="margin-block:36px;" />

        <div>
          <div class="section-header">
            <div>
              <span class="section-kicker">More in ${escapeHTML(product.category)}</span>
              <h2>Related Products</h2>
            </div>
            <a href="#marketplace?category=${encodeURIComponent(product.category)}" class="btn btn--secondary btn--sm">View All ${escapeHTML(product.category)}</a>
          </div>
          <div id="pdp-related-grid" class="product-grid">
            ${relatedList.map(renderProductCardHTML).join('')}
          </div>
        </div>
      </div>
    </section>
  `;

  const qtyDisplay = document.getElementById('pdp-qty-val');
  document.getElementById('pdp-qty-dec')?.addEventListener('click', () => {
    qty = Math.max(1, qty - 1);
    if (qtyDisplay) qtyDisplay.textContent = String(qty);
  });

  document.getElementById('pdp-qty-inc')?.addEventListener('click', () => {
    qty = Math.min(50, qty + 1);
    if (qtyDisplay) qtyDisplay.textContent = String(qty);
  });

  document.getElementById('pdp-add-cart')?.addEventListener('click', () => {
    addToCart(product.id, qty);
  });

  document.getElementById('pdp-wishlist-btn')?.addEventListener('click', (e) => {
    const saved = toggleWishlist(product.id);
    e.currentTarget.textContent = saved ? 'Saved' : 'Save';
    e.currentTarget.setAttribute('aria-pressed', saved ? 'true' : 'false');
  });

  document.getElementById('pdp-ask-wa')?.addEventListener('click', () => {
    const message = formatSupportMessage({
      topic: 'Product Enquiry',
      name: '',
      phone: '',
      message: `Hello TransEaz, I would like to confirm availability and final price for "${product.name}" (listed at ${formatUGX(product.price)}).`
    });
    openWhatsAppHandoff({
      title: 'Ask About Product on WhatsApp',
      reference: '',
      message
    });
  });

  const relatedGrid = document.getElementById('pdp-related-grid');
  bindProductGridEvents(relatedGrid);
}
