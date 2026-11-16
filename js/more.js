/* TransEaz Account / More, Preferences, Contact & Policies View */
import { CONFIG } from './config.js';
import { Storage } from './storage.js';
import {
  escapeHTML,
  isValidUgandanPhone,
  normalizeText,
  showFieldError,
  clearFormErrors
} from './validation.js';
import { formatSupportMessage, openWhatsAppHandoff } from './whatsapp.js';
import { getPwaState, triggerPwaInstall, openInstallInstructionsModal } from './pwa.js';
import { showToast, navigateTo } from './navigation.js';

const POLICIES = {
  terms: {
    title: 'Terms and Conditions',
    updated: 'Effective 2026',
    paragraphs: [
      'TransEaz coordinates local marketplace orders, Kampala procurement enquiries, and eligible local errands within Seeta University, Seeta, Mbalala, and Mukono.',
      'TransEaz prepares structured request messages that customers manually send via WhatsApp (+256 786 436524). Preparing or submitting a form does not create a binding contract or purchase until TransEaz confirms availability, total pricing, and delivery window on WhatsApp.',
      'TransEaz accepts orders and errands for legal, safe, portable everyday items only, and reserves the right to decline hazardous, perishable, or oversized items.'
    ]
  },
  privacy: {
    title: 'Privacy Policy',
    updated: 'Effective 2026',
    paragraphs: [
      'TransEaz does not require user accounts or login, and we do not collect passwords, national ID numbers, or payment card details.',
      'Optional delivery preferences, shopping cart items, favourites, and a log of prepared request references are stored solely on your own device. Clearing your browser data erases them.',
      'Any optional product photograph selected on the Kampala Procurement page remains only in temporary device memory for preview and is never uploaded or stored. Information you enter into checkout or request forms is sent to WhatsApp only when you choose to open and send the prepared message.'
    ]
  },
  delivery: {
    title: 'Delivery Policy',
    updated: 'Effective 2026',
    paragraphs: [
      'Approved local delivery areas are Seeta University, Seeta, Mbalala, and Mukono. Requests outside these areas are not guaranteed.',
      'Delivery fees displayed on the cart page are estimates based on zone and may be adjusted on WhatsApp depending on parcel size, weight, multiple pickup stops, or Kampala sourcing logistics.',
      'Customers should ensure they or an authorized recipient are reachable by phone during the confirmed delivery window.'
    ]
  },
  cancellation: {
    title: 'Cancellation Policy',
    updated: 'Effective 2026',
    paragraphs: [
      'You may cancel or modify any prepared request before confirming the WhatsApp quotation or before dispatch.',
      'For Kampala Procurement requests, once you have approved the quotation, completed payment verification, and TransEaz has already purchased the item on your behalf, cancellations depend on the Kampala merchant’s return policy and incurred transport costs.'
    ]
  },
  refund: {
    title: 'Refund Policy',
    updated: 'Effective 2026',
    paragraphs: [
      'If an approved and paid item becomes unavailable before purchase or dispatch, TransEaz will inform you immediately on WhatsApp to choose between an approved alternative or a full refund of the unspent amount.',
      'Inspect delivered items upon handoff where possible. Report damaged, incorrect, or missing items to TransEaz on WhatsApp (+256 786 436524) promptly so the team can verify and resolve the issue.'
    ]
  }
};

export function renderPolicyView(rootEl, policyKey) {
  const doc = POLICIES[policyKey] || POLICIES.terms;

  rootEl.innerHTML = `
    <section class="page-section view-enter">
      <div class="container" style="max-width:820px;">
        <a href="#more" class="btn btn--secondary btn--sm" style="margin-bottom:18px;">← Back to More &amp; Policies</a>
        <div class="card">
          <span class="section-kicker">TransEaz Policy · ${escapeHTML(doc.updated)}</span>
          <h1 style="margin-bottom:18px;">${escapeHTML(doc.title)}</h1>
          <div style="display:flex;flex-direction:column;gap:14px;color:var(--color-text-secondary);line-height:1.7;">
            ${doc.paragraphs.map((p) => `<p>${escapeHTML(p)}</p>`).join('')}
          </div>
          <hr class="hairline-divider" />
          <div style="display:flex;flex-wrap:wrap;gap:8px;">
            ${Object.entries(POLICIES).map(([key, item]) => `
              <a href="#policy/${key}" class="filter-tab ${key === policyKey ? 'is-active' : ''}" style="text-decoration:none;">
                ${escapeHTML(item.title)}
              </a>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

export function renderMoreView(rootEl) {
  const prefs = Storage.getPreferences();
  const pwa = getPwaState();

  rootEl.innerHTML = `
    <section class="page-section view-enter">
      <div class="container">
        <div class="section-header">
          <div>
            <span class="section-kicker">TransEaz Information &amp; Support</span>
            <h1>More, Preferences &amp; Policies</h1>
            <p class="section-subtitle">
              No login or account registration is needed. Manage optional device delivery defaults, install the TransEaz mobile app, contact support, or read our policies.
            </p>
          </div>
        </div>

        <div class="grid-2" style="margin-bottom:24px;">
          <!-- PWA Installation Card -->
          <div class="card">
            <span class="section-kicker">TransEaz Mobile App</span>
            <h2 style="margin-bottom:8px;">Install TransEaz App</h2>
            <p style="color:var(--color-text-secondary);font-size:0.92rem;margin-bottom:16px;">
              Install the TransEaz mobile app directly onto your phone's home screen from your mobile browser for fast, standalone access.
            </p>
            <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;">
              ${pwa.isStandalone ? `
                <div class="notice notice--emerald" style="width:100%;">
                  <div><strong>Installed Mode Active:</strong> You are currently using the TransEaz mobile app in standalone mode.</div>
                </div>
              ` : `
                <button type="button" class="btn btn--primary" id="more-install-pwa-btn">
                  ${pwa.canPromptInstall ? 'Install Mobile App' : 'View Install Steps'}
                </button>
                <button type="button" class="btn btn--secondary" id="more-install-guide-btn">
                  Mobile Install Guide
                </button>
              `}
            </div>
            <p style="font-size:0.8rem;color:var(--color-text-muted);margin-top:12px;">
              Connectivity status: <strong>${pwa.isOnline ? 'Online (ready for WhatsApp submissions)' : 'Offline (browsing cached pages only)'}</strong>
            </p>
          </div>

          <!-- Optional Device Delivery Preferences -->
          <div class="card">
            <span class="section-kicker">Optional Local Convenience</span>
            <h2 style="margin-bottom:8px;">Saved Delivery Defaults (This Device Only)</h2>
            <p style="color:var(--color-text-secondary);font-size:0.88rem;margin-bottom:14px;">
              Optionally save your name, phone, and hostel landmark in this browser so checkout and request forms prefill automatically.
            </p>
            <form id="prefs-form" novalidate>
              <div class="form-grid">
                <div class="form-field">
                  <label class="form-label" for="pref-name">Default Name</label>
                  <input id="pref-name" type="text" class="input" placeholder="Your name" value="${escapeHTML(prefs.name || '')}" />
                </div>
                <div class="form-field">
                  <label class="form-label" for="pref-phone">Default WhatsApp Phone</label>
                  <input id="pref-phone" type="tel" class="input" placeholder="07XX XXXXXX" value="${escapeHTML(prefs.phone || '')}" />
                  <span class="field-error" id="pref-phone-error" role="alert"></span>
                </div>
                <div class="form-field">
                  <label class="form-label" for="pref-area">Default Area</label>
                  <select id="pref-area" class="select">
                    ${CONFIG.serviceAreas.map((a) => `
                      <option value="${escapeHTML(a.name)}" ${a.name === prefs.area ? 'selected' : ''}>${escapeHTML(a.name)}</option>
                    `).join('')}
                  </select>
                </div>
                <div class="form-field">
                  <label class="form-label" for="pref-landmark">Hostel / Landmark</label>
                  <input id="pref-landmark" type="text" class="input" placeholder="e.g. Seeta University Gate" value="${escapeHTML(prefs.landmark || '')}" />
                </div>
              </div>
              <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:14px;">
                <button type="submit" class="btn btn--primary btn--sm">Save on This Device</button>
                <button type="button" class="btn btn--secondary btn--sm" id="clear-prefs-btn">Clear Defaults</button>
              </div>
            </form>
          </div>
        </div>

        <div class="grid-2" style="margin-bottom:24px;">
          <!-- About & Service Areas -->
          <div class="card">
            <span class="section-kicker">About TransEaz</span>
            <h2 style="margin-bottom:10px;">Built for Campus Convenience</h2>
            <p style="color:var(--color-text-secondary);font-size:0.93rem;margin-bottom:14px;">
              TransEaz is a student-focused errands, Kampala procurement, marketplace, and local delivery startup serving Seeta University, Seeta, Mbalala, and Mukono. We help students and residents save time and transport costs through clear WhatsApp-confirmed coordination.
            </p>
            <h3 style="margin-bottom:8px;">Approved Operating Areas</h3>
            <ul style="margin:0;padding-left:18px;color:var(--color-text-secondary);font-size:0.9rem;display:flex;flex-direction:column;gap:6px;">
              ${CONFIG.serviceAreas.map((a) => `<li><strong>${escapeHTML(a.name)}:</strong> ${escapeHTML(a.description)}</li>`).join('')}
            </ul>
            <p style="font-size:0.85rem;color:var(--color-text-muted);margin-top:12px;margin-bottom:14px;">
              ${escapeHTML(CONFIG.excludedServicesNote)}
            </p>
            <a href="#about" class="btn btn--secondary btn--sm">Meet Our Management Team</a>
          </div>

          <!-- Contact Us / Support Form -->
          <div class="card">
            <span class="section-kicker">Direct WhatsApp Support</span>
            <h2 style="margin-bottom:8px;">Contact TransEaz</h2>
            <p style="color:var(--color-text-secondary);font-size:0.9rem;margin-bottom:14px;">
              Official WhatsApp Line: <strong>${escapeHTML(CONFIG.whatsappDisplay)}</strong>. Send general enquiries, merchant inquiries, or service complaints below.
            </p>
            <form id="contact-form" novalidate>
              <div class="form-grid">
                <div class="form-field">
                  <label class="form-label" for="ct-topic">Topic</label>
                  <select id="ct-topic" class="select">
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Customer Support">Customer Support</option>
                    <option value="Service Complaint">Service Complaint</option>
                    <option value="Local Merchant Partnership">Local Merchant Inquiry</option>
                  </select>
                </div>
                <div class="form-field">
                  <label class="form-label" for="ct-name">Your Name <span class="req">*</span></label>
                  <input id="ct-name" type="text" class="input" required placeholder="Your name" value="${escapeHTML(prefs.name || '')}" />
                  <span class="field-error" id="ct-name-error" role="alert"></span>
                </div>
                <div class="form-field form-field--full">
                  <label class="form-label" for="ct-message">Message <span class="req">*</span></label>
                  <textarea id="ct-message" class="textarea" required placeholder="How can our team assist you?"></textarea>
                  <span class="field-error" id="ct-message-error" role="alert"></span>
                </div>
              </div>
              <button type="submit" class="btn btn--primary btn--full" style="margin-top:14px;">
                Send Message via WhatsApp
              </button>
            </form>
          </div>
        </div>

        <!-- Policies Directory -->
        <div class="card">
          <span class="section-kicker">Transparency &amp; Guidelines</span>
          <h2 style="margin-bottom:14px;">Policies &amp; Legal Information</h2>
          <div style="display:flex;flex-wrap:wrap;gap:10px;">
            <button type="button" class="btn btn--secondary btn--sm" data-open-policy="terms">Terms and Conditions</button>
            <button type="button" class="btn btn--secondary btn--sm" data-open-policy="privacy">Privacy Policy</button>
            <button type="button" class="btn btn--secondary btn--sm" data-open-policy="delivery">Delivery Policy</button>
            <button type="button" class="btn btn--secondary btn--sm" data-open-policy="cancellation">Cancellation Policy</button>
            <button type="button" class="btn btn--secondary btn--sm" data-open-policy="refund">Refund Policy</button>
            <a href="#requests" class="btn btn--secondary btn--sm">How It Works (7 Steps)</a>
          </div>
        </div>
      </div>
    </section>
  `;

  document.getElementById('more-install-pwa-btn')?.addEventListener('click', triggerPwaInstall);
  document.getElementById('more-install-guide-btn')?.addEventListener('click', openInstallInstructionsModal);

  const prefsForm = document.getElementById('prefs-form');
  prefsForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    clearFormErrors(prefsForm);
    const phone = normalizeText(document.getElementById('pref-phone')?.value);
    if (phone && !isValidUgandanPhone(phone)) {
      showFieldError('pref-phone', 'Enter a valid phone number or leave blank.');
      return;
    }
    Storage.savePreferences({
      name: normalizeText(document.getElementById('pref-name')?.value),
      phone,
      area: normalizeText(document.getElementById('pref-area')?.value),
      landmark: normalizeText(document.getElementById('pref-landmark')?.value)
    });
    showToast('Delivery defaults saved on this device.', 'success');
  });

  document.getElementById('clear-prefs-btn')?.addEventListener('click', () => {
    Storage.clearPreferences();
    showToast('Saved delivery defaults cleared.', 'success');
    renderMoreView(rootEl);
  });

  const contactForm = document.getElementById('contact-form');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    clearFormErrors(contactForm);
    const topic = normalizeText(document.getElementById('ct-topic')?.value);
    const name = normalizeText(document.getElementById('ct-name')?.value);
    const msg = normalizeText(document.getElementById('ct-message')?.value);

    let valid = true;
    if (name.length < 2) {
      showFieldError('ct-name', 'Please enter your name.');
      valid = false;
    }
    if (msg.length < 5) {
      showFieldError('ct-message', 'Please enter your message.');
      valid = false;
    }
    if (!valid) return;

    const formatted = formatSupportMessage({
      topic,
      name,
      phone: prefs.phone || '',
      message: msg
    });

    openWhatsAppHandoff({
      title: `${topic} Ready for WhatsApp`,
      reference: '',
      message: formatted
    });
  });

  rootEl.querySelectorAll('[data-open-policy]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const slug = btn.getAttribute('data-open-policy');
      if (slug) navigateTo(`#policy/${slug}`);
    });
  });
}
