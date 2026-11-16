/* TransEaz Kampala Procurement Request Page */
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
import { formatProcurementMessage, openWhatsAppHandoff } from './whatsapp.js';
import { showToast } from './navigation.js';

export function renderProcurementView(rootEl) {
  const prefs = Storage.getPreferences();
  let selectedImageName = '';

  rootEl.innerHTML = `
    <section class="page-section view-enter">
      <div class="container">
        <div class="section-header">
          <div>
            <span class="section-kicker">Kampala Sourcing &amp; Quotation Service</span>
            <h1>Kampala Procurement Request</h1>
            <p class="section-subtitle">
              Looking for something in Kampala? Tell us what you need, and TransEaz will help source it and coordinate delivery to you.
            </p>
          </div>
          <a href="#marketplace" class="btn btn--secondary">Browse Local Marketplace</a>
        </div>

        <div class="split-layout">
          <div class="card">
            <h2 style="margin-bottom:6px;">Submit Product Details</h2>
            <p style="font-size:0.88rem;color:var(--color-text-secondary);margin-bottom:18px;">
              This request prepares a quotation enquiry for WhatsApp. Nothing is purchased until you approve the quotation.
            </p>

            <form id="procurement-form" novalidate>
              <div class="form-grid">
                <div class="form-field">
                  <label class="form-label" for="kp-name">Customer Name <span class="req">*</span></label>
                  <input id="kp-name" type="text" class="input" required placeholder="e.g. Daniel Kato" value="${escapeHTML(prefs.name || '')}" />
                  <span class="field-error" id="kp-name-error" role="alert"></span>
                </div>

                <div class="form-field">
                  <label class="form-label" for="kp-phone">WhatsApp / Phone Number <span class="req">*</span></label>
                  <input id="kp-phone" type="tel" class="input" required placeholder="e.g. 0786 436524" value="${escapeHTML(prefs.phone || '')}" />
                  <span class="field-error" id="kp-phone-error" role="alert"></span>
                </div>

                <div class="form-field form-field--full">
                  <label class="form-label" for="kp-product">Product Name <span class="req">*</span></label>
                  <input id="kp-product" type="text" class="input" required placeholder="e.g. HP 65W Blue-Tip Laptop Charger or Textbooks" />
                  <span class="field-error" id="kp-product-error" role="alert"></span>
                </div>

                <div class="form-field form-field--full">
                  <label class="form-label" for="kp-desc">Product Description <span class="req">*</span></label>
                  <textarea id="kp-desc" class="textarea" required placeholder="Describe the item clearly, including brand, edition, or usage details..."></textarea>
                  <span class="field-error" id="kp-desc-error" role="alert"></span>
                </div>

                <div class="form-field">
                  <label class="form-label" for="kp-qty">Quantity <span class="req">*</span></label>
                  <input id="kp-qty" type="number" min="1" max="100" value="1" class="input" required />
                  <span class="field-error" id="kp-qty-error" role="alert"></span>
                </div>

                <div class="form-field">
                  <label class="form-label" for="kp-budget">Estimated Budget (UGX) <span class="req">*</span></label>
                  <input id="kp-budget" type="number" min="1000" step="500" class="input" required placeholder="e.g. 85000" />
                  <span class="field-error" id="kp-budget-error" role="alert"></span>
                </div>

                <div class="form-field form-field--full">
                  <label class="form-label" for="kp-merchant">Preferred Shop or Kampala Area (Optional)</label>
                  <input id="kp-merchant" type="text" class="input" placeholder="e.g. Kampala Road, Gazaland, Aristoc, or Any trusted shop" />
                </div>

                <div class="form-field form-field--full">
                  <label class="form-label" for="kp-specs">Product Specifications (Size, Color, Model, Capacity)</label>
                  <input id="kp-specs" type="text" class="input" placeholder="e.g. Original 65W, 4.5mm blue tip, black cable" />
                </div>

                <div class="form-field">
                  <label class="form-label" for="kp-area">Delivery Area <span class="req">*</span></label>
                  <select id="kp-area" class="select" required>
                    ${CONFIG.serviceAreas.map((a) => `
                      <option value="${escapeHTML(a.name)}" ${a.name === prefs.area ? 'selected' : ''}>${escapeHTML(a.name)}</option>
                    `).join('')}
                  </select>
                </div>

                <div class="form-field">
                  <label class="form-label" for="kp-window">Preferred Delivery Window <span class="req">*</span></label>
                  <select id="kp-window" class="select" required>
                    ${CONFIG.deliveryWindows.map((w) => `<option value="${escapeHTML(w)}">${escapeHTML(w)}</option>`).join('')}
                  </select>
                </div>

                <div class="form-field form-field--full">
                  <label class="form-label" for="kp-landmark">Specific Hostel / Hall / Landmark <span class="req">*</span></label>
                  <input id="kp-landmark" type="text" class="input" required placeholder="e.g. Seeta University Main Gate" value="${escapeHTML(prefs.landmark || '')}" />
                  <span class="field-error" id="kp-landmark-error" role="alert"></span>
                </div>

                <div class="form-field form-field--full">
                  <label class="form-label" for="kp-instructions">Additional Instructions (Optional)</label>
                  <textarea id="kp-instructions" class="textarea" placeholder="Let us know if you want alternatives priced if out of stock..."></textarea>
                </div>

                <div class="form-field form-field--full">
                  <label class="form-label" for="kp-image">Optional Reference Photo (Local Preview Only)</label>
                  <input id="kp-image" type="file" accept="image/*" class="input" style="padding:8px;" />
                  <span class="field-hint">
                    Selected reference photos stay on your phone for preview only and are not uploaded automatically. If you pick a photo, attach it manually inside WhatsApp after it opens.
                  </span>
                  <div id="kp-image-preview" class="upload-preview" hidden>
                    <img id="kp-preview-img" alt="Selected product reference preview" />
                    <div style="flex:1;">
                      <div id="kp-preview-name" style="font-size:0.85rem;font-weight:600;"></div>
                      <div style="font-size:0.78rem;color:var(--color-emerald-dark);font-weight:500;">Remember to attach this photo manually in WhatsApp.</div>
                    </div>
                    <button type="button" class="btn btn--secondary btn--sm" id="kp-clear-img">Remove</button>
                  </div>
                </div>
              </div>

              <button type="submit" class="btn btn--primary btn--full" style="margin-top:18px;">
                Prepare Procurement Request on WhatsApp
              </button>
            </form>
          </div>

          <div style="display:flex;flex-direction:column;gap:16px;">
            <div class="card">
              <h2 style="margin-bottom:12px;">How Kampala Procurement Works</h2>
              <ol style="margin:0;padding-left:20px;display:flex;flex-direction:column;gap:10px;color:var(--color-text-secondary);font-size:0.93rem;">
                <li><strong>Availability &amp; Price Check:</strong> TransEaz checks trusted Kampala suppliers for your exact specifications.</li>
                <li><strong>Transparent Quotation:</strong> You receive a WhatsApp breakdown showing <strong>Product Cost</strong>, <strong>Procurement Fee</strong>, and <strong>Delivery Fee</strong> separately.</li>
                <li><strong>Your Approval First:</strong> We never purchase anything until you review and approve the quotation and complete the agreed payment verification.</li>
                <li><strong>No Unapproved Substitutions:</strong> If an exact item is unavailable, we ask you before picking any alternative.</li>
              </ol>
            </div>

            <div class="notice">
              <div>
                <strong>No Automatic Purchase:</strong> Submitting this form does not buy the item or charge you. It opens WhatsApp so you can send the sourcing request to TransEaz (${escapeHTML(CONFIG.whatsappDisplay)}).
              </div>
            </div>

            <div class="notice">
              <div>
                <strong>Service Scope:</strong> Legal, safe, portable everyday items only within our approved service areas.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  const fileInput = document.getElementById('kp-image');
  const previewBox = document.getElementById('kp-image-preview');
  const previewImg = document.getElementById('kp-preview-img');
  const previewName = document.getElementById('kp-preview-name');
  let objectUrl = null;

  const clearPreview = () => {
    selectedImageName = '';
    if (objectUrl) {
      URL.revokeObjectURL(objectUrl);
      objectUrl = null;
    }
    if (fileInput) fileInput.value = '';
    if (previewBox) previewBox.hidden = true;
    if (previewImg) previewImg.removeAttribute('src');
  };

  fileInput?.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      clearPreview();
      return;
    }
    if (!file.type.startsWith('image/')) {
      showToast('Please select a valid image file.', 'error');
      clearPreview();
      return;
    }
    if (objectUrl) URL.revokeObjectURL(objectUrl);
    objectUrl = URL.createObjectURL(file);
    selectedImageName = file.name;
    if (previewImg) previewImg.src = objectUrl;
    if (previewName) previewName.textContent = file.name;
    if (previewBox) previewBox.hidden = false;
  });

  document.getElementById('kp-clear-img')?.addEventListener('click', clearPreview);

  const form = document.getElementById('procurement-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    clearFormErrors(form);

    const customerName = normalizeText(document.getElementById('kp-name')?.value);
    const phone = normalizeText(document.getElementById('kp-phone')?.value);
    const productName = normalizeText(document.getElementById('kp-product')?.value);
    const description = normalizeText(document.getElementById('kp-desc')?.value);
    const quantity = Number(document.getElementById('kp-qty')?.value);
    const budget = Number(document.getElementById('kp-budget')?.value);
    const preferredMerchant = normalizeText(document.getElementById('kp-merchant')?.value);
    const specifications = normalizeText(document.getElementById('kp-specs')?.value);
    const deliveryArea = normalizeText(document.getElementById('kp-area')?.value);
    const deliveryWindow = normalizeText(document.getElementById('kp-window')?.value);
    const deliveryLandmark = normalizeText(document.getElementById('kp-landmark')?.value);
    const instructions = normalizeText(document.getElementById('kp-instructions')?.value);

    let valid = true;
    if (customerName.length < 2) {
      showFieldError('kp-name', 'Please enter your name.');
      valid = false;
    }
    if (!isValidUgandanPhone(phone)) {
      showFieldError('kp-phone', 'Please enter a valid WhatsApp/phone number.');
      valid = false;
    }
    if (productName.length < 2) {
      showFieldError('kp-product', 'Please enter the product name.');
      valid = false;
    }
    if (description.length < 5) {
      showFieldError('kp-desc', 'Please provide a brief description of the item.');
      valid = false;
    }
    if (!Number.isFinite(quantity) || quantity < 1) {
      showFieldError('kp-qty', 'Quantity must be at least 1.');
      valid = false;
    }
    if (!Number.isFinite(budget) || budget < 1000) {
      showFieldError('kp-budget', 'Please enter an estimated budget in UGX (at least 1,000).');
      valid = false;
    }
    if (deliveryLandmark.length < 3) {
      showFieldError('kp-landmark', 'Please specify your hostel or landmark.');
      valid = false;
    }

    if (!valid) {
      showToast('Please complete all required procurement fields.', 'error');
      return;
    }

    runWithSubmitLock('procurement', () => {
      const reference = generateReference('KLA');
      const hasImage = Boolean(selectedImageName);

      const message = formatProcurementMessage({
        reference,
        customerName,
        phone,
        productName,
        description,
        quantity,
        budget,
        preferredMerchant,
        deliveryArea,
        deliveryLandmark,
        deliveryWindow,
        specifications,
        instructions,
        hasImage
      });

      Storage.addRequest({
        reference,
        type: 'Kampala Procurement',
        summary: `${productName} × ${quantity} — Est. Budget ${formatUGX(budget)}`,
        createdAt: new Date().toISOString(),
        message
      });

      openWhatsAppHandoff({
        title: 'Kampala Procurement Request Ready',
        reference,
        message,
        hasAttachmentReminder: hasImage
      });
    });
  });
}
