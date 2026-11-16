/* TransEaz Local Errands & Delivery Request Page */
import { CONFIG } from './config.js';
import { Storage } from './storage.js';
import {
  escapeHTML,
  generateReference,
  isValidUgandanPhone,
  normalizeText,
  showFieldError,
  clearFormErrors,
  runWithSubmitLock
} from './validation.js';
import { formatErrandMessage, openWhatsAppHandoff } from './whatsapp.js';
import { showToast } from './navigation.js';

export function renderErrandsView(rootEl) {
  const prefs = Storage.getPreferences();

  rootEl.innerHTML = `
    <section class="page-section view-enter">
      <div class="container">
        <div class="section-header">
          <div>
            <span class="section-kicker">Approved Service Areas Only</span>
            <h1>Local Errands &amp; Deliveries</h1>
            <p class="section-subtitle">
              Book eligible local pickups, document runs, pharmacy runs, or parcel drops between Seeta University, Seeta, Mbalala, and Mukono.
            </p>
          </div>
          <a href="#procurement" class="btn btn--secondary">Need Kampala Sourcing?</a>
        </div>

        <div class="split-layout">
          <div class="card">
            <h2 style="margin-bottom:6px;">Book a Local Errand</h2>
            <p style="font-size:0.88rem;color:var(--color-text-secondary);margin-bottom:18px;">
              All local errand requests are reviewed and confirmed by the TransEaz team on WhatsApp based on courier availability.
            </p>

            <form id="errands-form" novalidate>
              <div class="form-grid">
                <div class="form-field">
                  <label class="form-label" for="er-name">Customer Name <span class="req">*</span></label>
                  <input id="er-name" type="text" class="input" required placeholder="e.g. Grace Akello" value="${escapeHTML(prefs.name || '')}" />
                  <span class="field-error" id="er-name-error" role="alert"></span>
                </div>

                <div class="form-field">
                  <label class="form-label" for="er-phone">Telephone / WhatsApp Number <span class="req">*</span></label>
                  <input id="er-phone" type="tel" class="input" required placeholder="e.g. 0701 234567" value="${escapeHTML(prefs.phone || '')}" />
                  <span class="field-error" id="er-phone-error" role="alert"></span>
                </div>

                <div class="form-field form-field--full">
                  <label class="form-label" for="er-type">Errand Type <span class="req">*</span></label>
                  <select id="er-type" class="select" required>
                    ${CONFIG.errandTypes.map((t) => `<option value="${escapeHTML(t)}">${escapeHTML(t)}</option>`).join('')}
                  </select>
                </div>

                <div class="form-field">
                  <label class="form-label" for="er-pickup-area">Pickup Area <span class="req">*</span></label>
                  <select id="er-pickup-area" class="select" required>
                    ${CONFIG.serviceAreas.map((a) => `<option value="${escapeHTML(a.name)}">${escapeHTML(a.name)}</option>`).join('')}
                  </select>
                </div>

                <div class="form-field">
                  <label class="form-label" for="er-pickup-landmark">Pickup Point / Shop / Hostel <span class="req">*</span></label>
                  <input id="er-pickup-landmark" type="text" class="input" required placeholder="e.g. Mukono Town Pharmacy or Admin Block" />
                  <span class="field-error" id="er-pickup-landmark-error" role="alert"></span>
                </div>

                <div class="form-field">
                  <label class="form-label" for="er-dest-area">Destination Area <span class="req">*</span></label>
                  <select id="er-dest-area" class="select" required>
                    ${CONFIG.serviceAreas.map((a) => `
                      <option value="${escapeHTML(a.name)}" ${a.name === prefs.area ? 'selected' : ''}>${escapeHTML(a.name)}</option>
                    `).join('')}
                  </select>
                </div>

                <div class="form-field">
                  <label class="form-label" for="er-dest-landmark">Destination Hostel / Landmark <span class="req">*</span></label>
                  <input id="er-dest-landmark" type="text" class="input" required placeholder="e.g. Seeta University Female Hostel" value="${escapeHTML(prefs.landmark || '')}" />
                  <span class="field-error" id="er-dest-landmark-error" role="alert"></span>
                </div>

                <div class="form-field form-field--full">
                  <label class="form-label" for="er-item">Item or Parcel Description <span class="req">*</span></label>
                  <textarea id="er-item" class="textarea" required placeholder="Describe what is being collected or delivered (e.g. Printed assignment folder, 1 shopping bag of groceries)..."></textarea>
                  <span class="field-error" id="er-item-error" role="alert"></span>
                </div>

                <div class="form-field">
                  <label class="form-label" for="er-size">Approximate Parcel Size / Weight</label>
                  <select id="er-size" class="select">
                    ${CONFIG.parcelSizes.map((s) => `<option value="${escapeHTML(s)}">${escapeHTML(s)}</option>`).join('')}
                  </select>
                </div>

                <div class="form-field">
                  <label class="form-label" for="er-window">Preferred Delivery Window <span class="req">*</span></label>
                  <select id="er-window" class="select" required>
                    ${CONFIG.deliveryWindows.map((w) => `<option value="${escapeHTML(w)}">${escapeHTML(w)}</option>`).join('')}
                  </select>
                </div>

                <div class="form-field form-field--full">
                  <label class="form-label" for="er-instructions">Special Instructions (Optional)</label>
                  <textarea id="er-instructions" class="textarea" placeholder="Contact person at pickup, fragile handling note, or gate call note..."></textarea>
                </div>
              </div>

              <button type="submit" class="btn btn--primary btn--full" style="margin-top:18px;">
                Prepare Errand Request on WhatsApp
              </button>
            </form>
          </div>

          <div style="display:flex;flex-direction:column;gap:16px;">
            <div class="card">
              <h2 style="margin-bottom:12px;">Approved Local Service Areas</h2>
              <ul style="margin:0;padding-left:18px;display:flex;flex-direction:column;gap:8px;color:var(--color-text-secondary);font-size:0.93rem;">
                ${CONFIG.serviceAreas.map((a) => `
                  <li><strong>${escapeHTML(a.name)}:</strong> ${escapeHTML(a.description)}</li>
                `).join('')}
              </ul>
            </div>

            <div class="notice">
              <div>
                <strong>Subject to Confirmation:</strong> Errand availability, courier timing, and exact delivery fee depend on distance, parcel size, and team availability. TransEaz confirms all terms in WhatsApp before dispatch.
              </div>
            </div>

            <div class="notice">
              <div>
                <strong>Service Scope &amp; Guidelines:</strong> ${escapeHTML(CONFIG.excludedServicesNote)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  const form = document.getElementById('errands-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    clearFormErrors(form);

    const customerName = normalizeText(document.getElementById('er-name')?.value);
    const phone = normalizeText(document.getElementById('er-phone')?.value);
    const errandType = normalizeText(document.getElementById('er-type')?.value);
    const pickupArea = normalizeText(document.getElementById('er-pickup-area')?.value);
    const pickupLandmark = normalizeText(document.getElementById('er-pickup-landmark')?.value);
    const destArea = normalizeText(document.getElementById('er-dest-area')?.value);
    const destLandmark = normalizeText(document.getElementById('er-dest-landmark')?.value);
    const itemDescription = normalizeText(document.getElementById('er-item')?.value);
    const parcelSize = normalizeText(document.getElementById('er-size')?.value);
    const deliveryWindow = normalizeText(document.getElementById('er-window')?.value);
    const instructions = normalizeText(document.getElementById('er-instructions')?.value);

    let valid = true;
    if (customerName.length < 2) {
      showFieldError('er-name', 'Please enter your name.');
      valid = false;
    }
    if (!isValidUgandanPhone(phone)) {
      showFieldError('er-phone', 'Please enter a valid telephone number.');
      valid = false;
    }
    if (pickupLandmark.length < 3) {
      showFieldError('er-pickup-landmark', 'Please specify the exact pickup point.');
      valid = false;
    }
    if (destLandmark.length < 3) {
      showFieldError('er-dest-landmark', 'Please specify the exact destination.');
      valid = false;
    }
    if (itemDescription.length < 4) {
      showFieldError('er-item', 'Please describe the item or parcel.');
      valid = false;
    }

    if (!valid) {
      showToast('Please fix the highlighted errand fields.', 'error');
      return;
    }

    runWithSubmitLock('errands', () => {
      const reference = generateReference('ERR');
      const message = formatErrandMessage({
        reference,
        customerName,
        phone,
        errandType,
        pickupArea,
        pickupLandmark,
        destArea,
        destLandmark,
        itemDescription,
        parcelSize,
        deliveryWindow,
        instructions
      });

      Storage.addRequest({
        reference,
        type: 'Local Errand',
        summary: `${errandType}: ${pickupArea} → ${destArea}`,
        createdAt: new Date().toISOString(),
        message
      });

      openWhatsAppHandoff({
        title: 'Local Errand Request Ready',
        reference,
        message
      });
    });
  });
}
