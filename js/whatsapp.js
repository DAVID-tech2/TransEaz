/* Centralized WhatsApp Message Builder & Handoff Modal */
import { CONFIG } from './config.js';
import { escapeHTML, formatUGX } from './validation.js';

export function buildWhatsAppUrl(message) {
  const encoded = encodeURIComponent(String(message || '').trim());
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encoded}`;
}

export function formatMarketplaceOrderMessage({
  reference,
  customerName,
  customerPhone,
  deliveryArea,
  deliveryLandmark,
  deliveryWindow,
  items,
  subtotal,
  serviceFee,
  deliveryFee,
  total,
  instructions
}) {
  const itemLines = items
    .map(
      (item) =>
        `• ${item.name} × ${item.quantity} (${formatUGX(item.price)} each) — ${formatUGX(item.price * item.quantity)}`
    )
    .join('\n');

  return [
    'TRANS EAZ — NEW MARKETPLACE ORDER',
    '',
    `Order Reference: ${reference}`,
    `Customer Name: ${customerName}`,
    `Customer Phone: ${customerPhone}`,
    `Delivery Location: ${deliveryArea}${deliveryLandmark ? ` (${deliveryLandmark})` : ''}`,
    `Preferred Delivery Window: ${deliveryWindow}`,
    '',
    'ORDER ITEMS:',
    itemLines,
    '',
    `Product Subtotal: ${formatUGX(subtotal)}`,
    `Service Fee: ${serviceFee > 0 ? formatUGX(serviceFee) : 'UGX 0 (No separate service fee)'}`,
    `Estimated Delivery Fee: ${formatUGX(deliveryFee)}`,
    `Estimated Total: ${formatUGX(total)}`,
    '',
    `Additional Instructions: ${instructions || 'None'}`,
    '',
    'Prices are indicative and subject to availability. Please confirm availability and final total.'
  ].join('\n');
}

export function formatProcurementMessage({
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
}) {
  const lines = [
    'TRANS EAZ — KAMPALA PROCUREMENT REQUEST',
    '',
    `Request Reference: ${reference}`,
    `Customer Name: ${customerName}`,
    `Phone Number: ${phone}`,
    '',
    `Product: ${productName}`,
    `Description: ${description}`,
    `Quantity: ${quantity}`,
    `Estimated Budget: ${formatUGX(budget)}`,
    `Preferred Shop / Area: ${preferredMerchant || 'Any reliable Kampala shop'}`,
    `Delivery Location: ${deliveryArea}${deliveryLandmark ? ` (${deliveryLandmark})` : ''}`,
    `Preferred Delivery Window: ${deliveryWindow}`,
    `Specifications: ${specifications || 'None specified'}`,
    `Additional Instructions: ${instructions || 'None'}`
  ];

  if (hasImage) {
    lines.push('');
    lines.push('Product Photo: I have a reference photo ready to attach manually in this WhatsApp chat.');
  }

  return lines.join('\n');
}

export function formatErrandMessage({
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
}) {
  return [
    'TRANS EAZ — LOCAL ERRAND REQUEST',
    '',
    `Request Reference: ${reference}`,
    `Customer Name: ${customerName}`,
    `Phone Number: ${phone}`,
    `Errand Type: ${errandType}`,
    `Pickup Location: ${pickupArea}${pickupLandmark ? ` — ${pickupLandmark}` : ''}`,
    `Destination: ${destArea}${destLandmark ? ` — ${destLandmark}` : ''}`,
    `Item Description: ${itemDescription}`,
    `Approximate Size / Weight: ${parcelSize}`,
    `Preferred Delivery Window: ${deliveryWindow}`,
    `Special Instructions: ${instructions || 'None'}`
  ].join('\n');
}

export function formatSupportMessage({ topic, name, phone, message }) {
  return [
    `TRANS EAZ — ${topic.toUpperCase()}`,
    '',
    `Name: ${name || 'Not provided'}`,
    `Phone: ${phone || 'Not provided'}`,
    '',
    `Message: ${message}`
  ].join('\n');
}

export function openWhatsAppHandoff({
  title,
  reference,
  message,
  hasAttachmentReminder = false,
  onConfirmOpen
}) {
  const backdrop = document.getElementById('whatsapp-modal-backdrop');
  const content = document.getElementById('whatsapp-modal-body');
  if (!backdrop || !content) {
    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
    return;
  }

  const waUrl = buildWhatsAppUrl(message);

  content.innerHTML = `
    <div class="modal-header">
      <div>
        <span class="section-kicker">Prepared for WhatsApp</span>
        <h2 id="whatsapp-modal-title">${escapeHTML(title)}</h2>
      </div>
      <button type="button" class="icon-btn" id="close-wa-modal" aria-label="Close dialog">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <div class="notice" style="margin-bottom: 14px;">
      <div>
        <strong>Next step:</strong> Tap <strong>Open WhatsApp to Send</strong> below, then press <strong>Send</strong> inside WhatsApp. Your request is confirmed once TransEaz (${escapeHTML(CONFIG.whatsappDisplay)}) replies.
      </div>
    </div>

    ${hasAttachmentReminder ? `
      <div class="notice notice--emerald" style="margin-bottom: 14px;">
        <div>
          <strong>Photo Reminder:</strong> After WhatsApp opens, tap the paperclip or camera icon in the chat to attach your selected product photo manually.
        </div>
      </div>
    ` : ''}

    ${reference ? `<p style="font-size:0.85rem;color:var(--color-text-secondary);margin-bottom:8px;">Reference: <span class="mono-ref">${escapeHTML(reference)}</span></p>` : ''}

    <div class="message-preview-box" aria-label="Prepared WhatsApp message">${escapeHTML(message)}</div>

    <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:16px;">
      <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--primary" id="launch-wa-link" style="flex:1;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
        Open WhatsApp to Send
      </a>
      <button type="button" class="btn btn--secondary" id="copy-wa-text">Copy Message</button>
    </div>
  `;

  backdrop.hidden = false;
  document.body.style.overflow = 'hidden';

  const closeModal = () => {
    backdrop.hidden = true;
    document.body.style.overflow = '';
  };

  document.getElementById('close-wa-modal')?.addEventListener('click', closeModal);
  backdrop.onclick = (e) => {
    if (e.target === backdrop) closeModal();
  };

  document.getElementById('launch-wa-link')?.addEventListener('click', () => {
    if (typeof onConfirmOpen === 'function') {
      onConfirmOpen();
    }
  });

  document.getElementById('copy-wa-text')?.addEventListener('click', async () => {
    const btn = document.getElementById('copy-wa-text');
    try {
      await navigator.clipboard.writeText(message);
      if (btn) btn.textContent = 'Copied';
    } catch (_err) {
      if (btn) btn.textContent = 'Select & copy above';
    }
  });
}
