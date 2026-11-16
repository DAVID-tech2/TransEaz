/* TransEaz My Requests & Device-Local Order History View */
import { Storage } from './storage.js';
import { escapeHTML } from './validation.js';
import { openWhatsAppHandoff } from './whatsapp.js';
import { showToast } from './navigation.js';
import { CONFIG } from './config.js';

const WORKFLOW_STEPS = [
  { num: '01', title: 'Request Prepared', text: 'You fill in your cart, Kampala procurement, or local errand details on this website.' },
  { num: '02', title: 'You Send on WhatsApp', text: 'You tap Open WhatsApp and manually press Send to deliver the message to TransEaz.' },
  { num: '03', title: 'TransEaz Reviews', text: 'Our team checks item availability, pickup logistics, or Kampala shop pricing.' },
  { num: '04', title: 'Quotation / Confirmation', text: 'We reply on WhatsApp with confirmed item costs, service/delivery fees, and timing.' },
  { num: '05', title: 'Approval & Payment', text: 'You approve the quotation and complete the agreed payment verification.' },
  { num: '06', title: 'Processing & Sourcing', text: 'TransEaz collects or purchases your approved items from local merchants or Kampala.' },
  { num: '07', title: 'Delivery Coordinated', text: 'Your order is delivered to Seeta University, Seeta, Mbalala, or Mukono as agreed.' }
];

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleString('en-UG', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });
  } catch (_err) {
    return iso;
  }
}

export function renderRequestsView(rootEl) {
  const history = Storage.getRequests();

  rootEl.innerHTML = `
    <section class="page-section view-enter">
      <div class="container">
        <div class="section-header">
          <div>
            <span class="section-kicker">WhatsApp Workflow &amp; Device Log</span>
            <h1>My Requests</h1>
            <p class="section-subtitle">
              Track requests prepared on this phone and follow the 7-step WhatsApp confirmation process.
            </p>
          </div>
          ${history.length ? `<button type="button" class="btn btn--subtle-danger btn--sm" id="clear-history-btn">Clear Local History</button>` : ''}
        </div>

        <div class="notice" style="margin-bottom:24px;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;margin-top:2px" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <div>
            <strong>Device-Only Storage:</strong> Entries below are saved locally in your browser on this device so you can review or re-open them in WhatsApp. Official confirmation always happens inside WhatsApp (${escapeHTML(CONFIG.whatsappDisplay)}).
          </div>
        </div>

        <div style="margin-bottom:32px;">
          <h2 style="margin-bottom:14px;">Requests Prepared on This Device (${history.length})</h2>
          ${history.length === 0 ? `
            <div class="empty-state">
              <h3>No Requests Prepared Yet on This Device</h3>
              <p>When you prepare a Marketplace order, Kampala Procurement request, or Local Errand, a reference copy is saved here so you can easily re-open it in WhatsApp.</p>
              <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;">
                <a href="#marketplace" class="btn btn--primary">Browse Marketplace</a>
                <a href="#procurement" class="btn btn--secondary">Kampala Procurement</a>
                <a href="#errands" class="btn btn--secondary">Book an Errand</a>
              </div>
            </div>
          ` : `
            <div style="display:flex;flex-direction:column;gap:12px;">
              ${history.map((item) => `
                <article class="request-card">
                  <div class="request-card-head">
                    <div>
                      <span style="font-size:0.8rem;font-weight:700;color:var(--color-emerald);">${escapeHTML(item.type)}</span>
                      <h3 style="margin-top:2px;">${escapeHTML(item.summary)}</h3>
                    </div>
                    <span class="mono-ref" style="color:var(--color-text-muted);">${escapeHTML(item.reference)}</span>
                  </div>
                  <div style="font-size:0.83rem;color:var(--color-text-muted);">
                    Prepared locally on ${escapeHTML(formatDate(item.createdAt))} · Status does not update automatically; check your WhatsApp chat for confirmation.
                  </div>
                  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px;">
                    <button type="button" class="btn btn--primary btn--sm" data-reopen-ref="${escapeHTML(item.reference)}">
                      View / Re-open in WhatsApp
                    </button>
                    <button type="button" class="btn btn--secondary btn--sm" data-delete-ref="${escapeHTML(item.reference)}">
                      Remove Entry
                    </button>
                  </div>
                </article>
              `).join('')}
            </div>
          `}
        </div>

        <hr class="hairline-divider" />

        <div>
          <span class="section-kicker">Informational Process Guide</span>
          <h2 style="margin-bottom:6px;">How Every TransEaz Request Progresses</h2>
          <p style="color:var(--color-text-secondary);font-size:0.93rem;margin-bottom:18px;">
            Because TransEaz operates through direct WhatsApp communication rather than automated server tracking, your request follows these clear manual stages:
          </p>
          <div class="steps-grid">
            ${WORKFLOW_STEPS.map((s) => `
              <div class="step-card">
                <span class="step-num">${escapeHTML(s.num)}</span>
                <h3 style="font-size:1rem;margin-bottom:6px;">${escapeHTML(s.title)}</h3>
                <p style="font-size:0.86rem;color:var(--color-text-secondary);">${escapeHTML(s.text)}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;

  rootEl.querySelectorAll('[data-reopen-ref]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const ref = btn.getAttribute('data-reopen-ref');
      const entry = Storage.getRequests().find((r) => r.reference === ref);
      if (!entry) return;
      openWhatsAppHandoff({
        title: `${entry.type} (${entry.reference})`,
        reference: entry.reference,
        message: entry.message
      });
    });
  });

  rootEl.querySelectorAll('[data-delete-ref]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const ref = btn.getAttribute('data-delete-ref');
      Storage.removeRequest(ref);
      showToast('Removed local entry.', 'success');
      renderRequestsView(rootEl);
    });
  });

  document.getElementById('clear-history-btn')?.addEventListener('click', (e) => {
    const btn = e.currentTarget;
    if (btn.dataset.confirming === 'true') {
      Storage.clearRequests();
      showToast('Local request history cleared.', 'success');
      renderRequestsView(rootEl);
    } else {
      btn.dataset.confirming = 'true';
      btn.textContent = 'Confirm Clear History';
      setTimeout(() => {
        if (document.body.contains(btn)) {
          btn.dataset.confirming = 'false';
          btn.textContent = 'Clear Local History';
        }
      }, 3500);
    }
  });
}
