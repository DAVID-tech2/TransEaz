/* TransEaz Application Entry Point & Home Page Renderer */
import { CONFIG } from './config.js';
import { PRODUCTS, PRODUCT_CATEGORIES, CATEGORY_ICONS, getFeaturedProducts } from './products.js';
import { syncCartBadges } from './cart.js';
import { renderProductCardHTML, bindProductGridEvents, renderMarketplaceView, setMarketplaceFilter } from './marketplace.js';
import { renderProductDetailView } from './product-details.js';
import { renderCartCheckoutView } from './checkout.js';
import { renderProcurementView } from './procurement.js';
import { renderErrandsView } from './errands.js';
import { renderRequestsView } from './requests.js';
import { renderAboutView } from './about.js';
import { renderMoreView, renderPolicyView } from './more.js';
import { registerRouteHandler, handleHashChange, initNavigationListeners, navigateTo } from './navigation.js';
import { initPWA, getPwaState, triggerPwaInstall, onPwaStateChange } from './pwa.js';
import { formatSupportMessage, openWhatsAppHandoff } from './whatsapp.js';
import { escapeHTML } from './validation.js';

const FAQS = [
  {
    q: 'How is Kampala Procurement different from the Marketplace?',
    a: 'The Marketplace features 135 everyday items across 9 categories for local ordering in UGX. Kampala Procurement lets you request specific products from Kampala shops—TransEaz checks prices first and sends you a transparent breakdown quotation on WhatsApp before buying.'
  },
  {
    q: 'Does clicking "Place Order via WhatsApp" automatically confirm my order?',
    a: 'No. Opening WhatsApp prepares your order message for convenience. You must tap Send in WhatsApp and wait for TransEaz (+256 786 436524) to confirm availability, final pricing, and delivery timing.'
  },
  {
    q: 'Which areas does TransEaz currently serve?',
    a: 'We serve Seeta University, Seeta, Mbalala, and Mukono. Requests outside these approved areas are not guaranteed.'
  },
  {
    q: 'What kinds of items can I order or send through TransEaz?',
    a: 'TransEaz handles marketplace essentials, custom Kampala procurement for electronics, stationery, books, and hostel goods, plus local parcel and document errands across Seeta University, Seeta, Mbalala, and Mukono.'
  },
  {
    q: 'How do I install the TransEaz mobile app on my phone?',
    a: 'Open TransEaz in your mobile browser, tap the Install Mobile App button when shown (or use your browser menu → Install app / Add to Home screen).'
  }
];

const CAMPUS_SCENARIOS = [
  {
    label: 'Seeta University · Hostel Essentials',
    quote: 'Order stationery, groceries, and personal care items in one WhatsApp list between lectures without leaving campus.',
    author: 'Local Marketplace Workflow'
  },
  {
    label: 'Mukono · Kampala Sourcing',
    quote: 'Request a specific laptop charger or textbook from Kampala and approve the exact UGX quotation before any purchase.',
    author: 'Kampala Procurement Workflow'
  },
  {
    label: 'Seeta · Quick Campus Errand',
    quote: 'Coordinate document collection from a Seeta print shop directly to the campus gate within an agreed afternoon window.',
    author: 'Local Errands Workflow'
  }
];

function renderHomeView(rootEl) {
  const featured = getFeaturedProducts(4);
  const categories = PRODUCT_CATEGORIES.filter((c) => c !== 'All');
  const pwa = getPwaState();

  rootEl.innerHTML = `
    <!-- Hero Section -->
    <section class="hero-section view-enter">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="hero-meta">
              <span>Seeta University</span>
              <span aria-hidden="true">·</span>
              <span>Seeta</span>
              <span aria-hidden="true">·</span>
              <span>Mbalala</span>
              <span aria-hidden="true">·</span>
              <span>Mukono</span>
            </div>
            <h1>Your Campus Companion for Purchases, Errands and Deliveries.</h1>
            <p class="hero-subtitle">
              Get what you need without the extra trips. TransEaz makes shopping, procurement and local deliveries easier around Seeta, Mbalala and Mukono.
            </p>
            <div class="hero-actions">
              <a href="#marketplace" class="btn btn--primary">Shop Now</a>
              <a href="#procurement" class="btn btn--navy">Request Kampala Procurement</a>
              <a href="#errands" class="btn btn--secondary">Book an Errand</a>
            </div>
            ${!pwa.isStandalone ? `
              <div style="margin-top:4px;">
                <button type="button" id="home-install-btn" class="btn btn--ghost btn--sm" style="padding-left:0;color:var(--color-emerald);">
                  + Install TransEaz Mobile App
                </button>
              </div>
            ` : ''}
          </div>

          <div class="hero-media">
            <img
              src="./assets/images/hero-campus-delivery.jpg"
              alt="TransEaz courier handing a packaged parcel to a university student on a sunlit campus walkway"
              referrerpolicy="no-referrer"
              onerror="this.style.display='none';"
            />
            <div class="hero-media-caption">
              Direct WhatsApp confirmation on <strong>${escapeHTML(CONFIG.whatsappDisplay)}</strong> before every purchase or dispatch.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Three Distinct Services -->
    <section class="page-section">
      <div class="container">
        <div class="section-header">
          <div>
            <span class="section-kicker">Three Clear Services</span>
            <h2>Choose What You Need Today</h2>
            <p class="section-subtitle">
              Local marketplace shopping, custom Kampala sourcing, and point-to-point local errands are kept clearly separate so you always know how pricing and confirmation work.
            </p>
          </div>
        </div>

        <div class="grid-3">
          <article class="card card--interactive service-card">
            <div>
              <div class="service-icon-box" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
              </div>
              <div class="service-card-kicker" style="margin-top:14px;">Local Merchant Marketplace</div>
              <h3 style="margin-bottom:8px;">Marketplace Shopping</h3>
              <p>Browse 135 campus and household essentials across 9 categories in UGX, add items to your cart, and send your order via WhatsApp.</p>
            </div>
            <a href="#marketplace" class="btn btn--primary btn--sm">Browse Marketplace</a>
          </article>

          <article class="card card--interactive service-card">
            <div>
              <div class="service-icon-box" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                </svg>
              </div>
              <div class="service-card-kicker" style="margin-top:14px;">Custom Sourcing &amp; Quote</div>
              <h3 style="margin-bottom:8px;">Kampala Procurement</h3>
              <p>Need something from Kampala? Send specs and budget, receive a transparent quotation, and confirm before we buy.</p>
            </div>
            <a href="#procurement" class="btn btn--secondary btn--sm">Request Procurement</a>
          </article>

          <article class="card card--interactive service-card">
            <div>
              <div class="service-icon-box" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div class="service-card-kicker" style="margin-top:14px;">Seeta · Mbalala · Mukono</div>
              <h3 style="margin-bottom:8px;">Local Errands &amp; Delivery</h3>
              <p>Eligible parcel pickups, campus drops, pharmacy runs, and local shopping within our approved operating zone.</p>
            </div>
            <a href="#errands" class="btn btn--secondary btn--sm">Book an Errand</a>
          </article>
        </div>
      </div>
    </section>

    <!-- 9 Marketplace Categories & Featured Products -->
    <section class="page-section page-section--alt">
      <div class="container">
        <div class="section-header">
          <div>
            <span class="section-kicker">9 Product Categories · ${PRODUCTS.length} Items</span>
            <h2>Featured Campus Essentials</h2>
            <p class="section-subtitle">
              Prices are indicative and subject to availability. Final pricing is confirmed through WhatsApp before an order is approved.
            </p>
          </div>
          <a href="#marketplace" class="btn btn--secondary btn--sm">View All Categories</a>
        </div>

        <div class="category-strip" style="margin-bottom:28px;">
          ${categories.map((cat) => {
            const count = PRODUCTS.filter((p) => p.category === cat).length;
            const icon = CATEGORY_ICONS[cat] || CATEGORY_ICONS['Others'];
            return `
              <button type="button" class="category-tile" data-home-category="${escapeHTML(cat)}">
                <span class="category-tile-icon" aria-hidden="true">${icon}</span>
                <div>
                  <div class="category-tile-title">${escapeHTML(cat)}</div>
                  <div class="category-tile-count">${count} ${count === 1 ? 'product' : 'products'}</div>
                </div>
              </button>
            `;
          }).join('')}
        </div>

        <div id="home-featured-grid" class="product-grid">
          ${featured.map(renderProductCardHTML).join('')}
        </div>
      </div>
    </section>

    <!-- How TransEaz Works & Why Choose TransEaz -->
    <section class="page-section">
      <div class="container">
        <div class="section-header">
          <div>
            <span class="section-kicker">Simple &amp; Transparent</span>
            <h2>How TransEaz Works</h2>
          </div>
        </div>

        <div class="steps-grid" style="margin-bottom:36px;">
          <div class="step-card">
            <span class="step-num">01</span>
            <h3 style="margin-bottom:6px;">Pick a Service</h3>
            <p style="font-size:0.9rem;color:var(--color-text-secondary);">Shop local marketplace items, submit a Kampala sourcing request, or book a local errand.</p>
          </div>
          <div class="step-card">
            <span class="step-num">02</span>
            <h3 style="margin-bottom:6px;">Send via WhatsApp</h3>
            <p style="font-size:0.9rem;color:var(--color-text-secondary);">Review your prepared message and press Send to reach our team on ${escapeHTML(CONFIG.whatsappDisplay)}.</p>
          </div>
          <div class="step-card">
            <span class="step-num">03</span>
            <h3 style="margin-bottom:6px;">Confirm Quote &amp; Pay</h3>
            <p style="font-size:0.9rem;color:var(--color-text-secondary);">We verify availability and send clear item + delivery fees before any purchase proceeds.</p>
          </div>
          <div class="step-card">
            <span class="step-num">04</span>
            <h3 style="margin-bottom:6px;">Receive Delivery</h3>
            <p style="font-size:0.9rem;color:var(--color-text-secondary);">Our courier coordinates delivery to your hostel, campus gate, or local address.</p>
          </div>
        </div>

        <div class="grid-2">
          <div class="card">
            <span class="section-kicker">Why Choose TransEaz</span>
            <h3 style="font-size:1.25rem;margin-bottom:12px;">Designed Around Student Schedules &amp; Clarity</h3>
            <ul style="margin:0;padding-left:18px;color:var(--color-text-secondary);display:flex;flex-direction:column;gap:8px;font-size:0.94rem;">
              <li><strong>No Hidden Charges:</strong> Item cost, procurement fee, and delivery fee are communicated clearly before approval.</li>
              <li><strong>Human Confirmation:</strong> Real WhatsApp coordination ensures no surprise substitutions or unverified orders.</li>
              <li><strong>Campus-Focused Zones:</strong> Built specifically for Seeta University, Seeta, Mbalala, and Mukono.</li>
              <li><strong>Lightweight Mobile App:</strong> Runs smoothly on your phone with minimal mobile data usage.</li>
            </ul>
          </div>

          <div class="card">
            <span class="section-kicker">Approved Operating Zones</span>
            <h3 style="font-size:1.25rem;margin-bottom:12px;">Where We Deliver</h3>
            <div style="display:flex;flex-direction:column;gap:10px;font-size:0.92rem;color:var(--color-text-secondary);">
              ${CONFIG.serviceAreas.map((a) => `
                <div style="display:flex;justify-content:space-between;gap:12px;padding-bottom:8px;border-bottom:1px solid var(--color-border);">
                  <span><strong>${escapeHTML(a.name)}</strong> — ${escapeHTML(a.description)}</span>
                </div>
              `).join('')}
            </div>
            <p style="font-size:0.82rem;color:var(--color-text-muted);margin-top:12px;">
              ${escapeHTML(CONFIG.excludedServicesNote)}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Student Workflows & FAQs -->
    <section class="page-section page-section--alt">
      <div class="container">
        <div class="section-header">
          <div>
            <span class="section-kicker">Campus Workflows</span>
            <h2>How Students Use TransEaz</h2>
            <p class="section-subtitle">
              Practical ways students and residents around Seeta University, Seeta, Mbalala, and Mukono save time every week.
            </p>
          </div>
        </div>

        <div class="grid-3" style="margin-bottom:40px;">
          ${CAMPUS_SCENARIOS.map((item) => `
            <article class="card">
              <div style="font-size:0.78rem;font-weight:600;color:var(--color-emerald);margin-bottom:8px;">${escapeHTML(item.label)}</div>
              <p style="font-size:0.94rem;color:var(--color-navy);margin-bottom:12px;">${escapeHTML(item.quote)}</p>
              <div style="font-size:0.82rem;color:var(--color-text-muted);">${escapeHTML(item.author)}</div>
            </article>
          `).join('')}
        </div>

        <div style="max-width:820px;">
          <span class="section-kicker">Questions &amp; Answers</span>
          <h2 style="margin-bottom:16px;">Frequently Asked Questions</h2>
          <div class="faq-list" id="home-faq-list">
            ${FAQS.map((faq, idx) => `
              <div class="faq-item">
                <button type="button" class="faq-trigger" aria-expanded="${idx === 0 ? 'true' : 'false'}" data-faq-index="${idx}">
                  <span>${escapeHTML(faq.q)}</span>
                  <span aria-hidden="true">${idx === 0 ? '−' : '+'}</span>
                </button>
                <div class="faq-panel" ${idx === 0 ? '' : 'hidden'}>
                  ${escapeHTML(faq.a)}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- WhatsApp Contact Banner -->
    <section class="page-section">
      <div class="container">
        <div class="card" style="background:var(--color-navy);color:#ffffff;border-color:var(--color-navy);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:20px;">
          <div style="max-width:60ch;">
            <span class="section-kicker" style="color:#34d399;">Direct WhatsApp Desk</span>
            <h2 style="color:#ffffff;margin-bottom:6px;">Have a Question or Custom Request?</h2>
            <p style="color:#cbd5e1;font-size:0.94rem;">
              Message TransEaz directly on WhatsApp (${escapeHTML(CONFIG.whatsappDisplay)}) for quick availability checks, delivery questions, or assistance.
            </p>
          </div>
          <button type="button" class="btn btn--primary" id="home-banner-wa-btn">
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  `;

  bindProductGridEvents(document.getElementById('home-featured-grid'));

  rootEl.querySelectorAll('[data-home-category]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-home-category') || 'All';
      setMarketplaceFilter({ category: cat, search: '' });
      navigateTo('#marketplace');
    });
  });

  document.getElementById('home-install-btn')?.addEventListener('click', triggerPwaInstall);

  document.getElementById('home-banner-wa-btn')?.addEventListener('click', () => {
    const message = formatSupportMessage({
      topic: 'General Enquiry',
      name: '',
      phone: '',
      message: 'Hello TransEaz, I have a question about your marketplace, Kampala procurement, or local delivery services.'
    });
    openWhatsAppHandoff({
      title: 'Message TransEaz on WhatsApp',
      reference: '',
      message
    });
  });

  rootEl.querySelectorAll('[data-faq-index]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const panel = trigger.nextElementSibling;
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      const sign = trigger.querySelector('span:last-child');
      if (sign) sign.textContent = expanded ? '+' : '−';
      if (panel) panel.hidden = expanded;
    });
  });
}

function renderRoute({ route, param, params }) {
  const rootEl = document.getElementById('app-root');
  if (!rootEl) return;

  switch (route) {
    case 'marketplace':
      renderMarketplaceView(rootEl, params);
      break;
    case 'product':
      renderProductDetailView(rootEl, param);
      break;
    case 'cart':
      renderCartCheckoutView(rootEl);
      break;
    case 'procurement':
      renderProcurementView(rootEl);
      break;
    case 'errands':
      renderErrandsView(rootEl);
      break;
    case 'requests':
      renderRequestsView(rootEl);
      break;
    case 'about':
      renderAboutView(rootEl);
      break;
    case 'more':
      renderMoreView(rootEl);
      break;
    case 'policy':
      renderPolicyView(rootEl, param || 'terms');
      break;
    case 'home':
    default:
      renderHomeView(rootEl);
      break;
  }
}

function wireGlobalWhatsAppButtons() {
  const openGeneralChat = () => {
    const message = formatSupportMessage({
      topic: 'Customer Support',
      name: '',
      phone: '',
      message: 'Hello TransEaz, I need assistance with an order or delivery request.'
    });
    openWhatsAppHandoff({
      title: 'WhatsApp Support',
      reference: '',
      message
    });
  };

  document.getElementById('header-whatsapp-btn')?.addEventListener('click', openGeneralChat);
  document.getElementById('floating-whatsapp-btn')?.addEventListener('click', openGeneralChat);
  document.getElementById('drawer-whatsapp-btn')?.addEventListener('click', openGeneralChat);
  document.getElementById('footer-whatsapp-btn')?.addEventListener('click', openGeneralChat);
  document.getElementById('drawer-install-btn')?.addEventListener('click', triggerPwaInstall);
  document.getElementById('footer-install-btn')?.addEventListener('click', triggerPwaInstall);

  onPwaStateChange((state) => {
    const drawerInstall = document.getElementById('drawer-install-btn');
    if (drawerInstall) drawerInstall.hidden = state.isStandalone;
  });
}

function bootstrap() {
  syncCartBadges();
  initNavigationListeners();
  wireGlobalWhatsAppButtons();
  initPWA();

  registerRouteHandler(renderRoute);
  handleHashChange();
}

document.addEventListener('DOMContentLoaded', bootstrap);
