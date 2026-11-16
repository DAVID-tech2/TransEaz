/* TransEaz About Us & Management Team Page */
import { CONFIG } from './config.js';
import { escapeHTML } from './validation.js';
import { formatSupportMessage, openWhatsAppHandoff } from './whatsapp.js';

export const TEAM_MEMBERS = [
  {
    initials: 'SK',
    name: 'Samuel Kizza',
    role: 'Chief Executive Officer (CEO)',
    photo: './assets/team/ceo.jpg',
    zone: 'Strategy, Partnerships & Operations',
    bio: 'Leads TransEaz vision, local merchant partnerships, and campus service quality across Seeta University, Seeta, Mbalala, and Mukono.'
  },
  {
    initials: 'BN',
    name: 'Brenda Namukasa',
    role: 'Customer Care & Support',
    photo: './assets/team/customer-care.jpg',
    zone: 'WhatsApp Orders, Quotations & Delivery Follow-up',
    bio: 'Manages direct WhatsApp customer support, Kampala procurement quotations, order confirmations, and timely delivery updates.'
  },
  {
    initials: 'BS',
    name: 'Brian Ssemakula',
    role: 'Tech Support',
    photo: './assets/team/tech-support.jpg',
    zone: 'Mobile App, Catalogue & Systems',
    bio: 'Maintains the TransEaz mobile app experience, updates marketplace product listings and UGX pricing, and supports smooth ordering.'
  }
];

export function renderAboutView(rootEl) {
  rootEl.innerHTML = `
    <section class="page-section view-enter">
      <div class="container">
        <div class="section-header">
          <div>
            <span class="section-kicker">About TransEaz</span>
            <h1>Built for Campus Convenience &amp; Reliable Local Delivery</h1>
            <p class="section-subtitle">
              TransEaz is a Ugandan student-focused errands, Kampala procurement, marketplace, and local delivery service operating across Seeta University, Seeta, Mbalala, and Mukono.
            </p>
          </div>
          <button type="button" class="btn btn--primary" id="about-wa-btn">
            Message Our Team
          </button>
        </div>

        <div class="grid-2" style="margin-bottom:32px;">
          <div class="card">
            <span class="section-kicker">Our Mission</span>
            <h2 style="margin-bottom:10px;">Save Time, Skip Extra Trips</h2>
            <p style="color:var(--color-text-secondary);font-size:0.95rem;line-height:1.68;margin-bottom:12px;">
              Students and residents around Seeta University, Seeta, Mbalala, and Mukono spend valuable study and work hours travelling for everyday supplies or making costly trips into Kampala for specific items.
            </p>
            <p style="color:var(--color-text-secondary);font-size:0.95rem;line-height:1.68;">
              TransEaz brings local marketplace ordering, Kampala sourcing quotations, and local errands into one clear mobile workflow—with human confirmation on WhatsApp (<strong>${escapeHTML(CONFIG.whatsappDisplay)}</strong>) before any purchase or dispatch.
            </p>
          </div>

          <div class="card">
            <span class="section-kicker">How We Operate</span>
            <h2 style="margin-bottom:10px;">What Guides Every Order</h2>
            <ul style="margin:0;padding-left:18px;color:var(--color-text-secondary);font-size:0.94rem;display:flex;flex-direction:column;gap:10px;">
              <li><strong>Transparent UGX Pricing:</strong> Item costs, service fees, and delivery estimates are shown upfront and confirmed before approval.</li>
              <li><strong>Three Distinct Services:</strong> Local marketplace shopping, Kampala procurement, and local errands stay clearly separated.</li>
              <li><strong>No Surprise Substitutions:</strong> If an item is unavailable or priced differently, our team confirms with you on WhatsApp first.</li>
              <li><strong>Focused Service Zones:</strong> Dedicated coverage for Seeta University, Seeta, Mbalala, and Mukono.</li>
            </ul>
          </div>
        </div>

        <div class="section-header">
          <div>
            <span class="section-kicker">Leadership &amp; Support Team</span>
            <h2>Meet the Team Managing TransEaz</h2>
            <p class="section-subtitle">
              Our three-person leadership and support team keeps every order, quotation, and delivery running smoothly.
            </p>
          </div>
        </div>

        <div class="grid-3" style="margin-bottom:32px;">
          ${TEAM_MEMBERS.map((member) => `
            <article class="card team-card">
              <div class="team-photo-box">
                <img
                  src="${escapeHTML(member.photo)}"
                  alt="${escapeHTML(member.name)} — ${escapeHTML(member.role)}"
                  class="team-photo"
                  loading="lazy"
                  referrerpolicy="no-referrer"
                  onerror="this.style.display='none';this.nextElementSibling.hidden=false;"
                />
                <div class="team-photo-fallback" hidden>${escapeHTML(member.initials)}</div>
              </div>
              <div class="team-body">
                <div class="team-role">${escapeHTML(member.role)}</div>
                <h3 class="team-name">${escapeHTML(member.name)}</h3>
                <p class="team-bio">${escapeHTML(member.bio)}</p>
                <div class="team-zone">${escapeHTML(member.zone)}</div>
              </div>
            </article>
          `).join('')}
        </div>

        <div class="card" style="background:var(--color-navy);color:#ffffff;border-color:var(--color-navy);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:20px;">
          <div style="max-width:60ch;">
            <span class="section-kicker" style="color:#34d399;">Ready to Order or Enquire?</span>
            <h2 style="color:#ffffff;margin-bottom:6px;">Start With Any TransEaz Service</h2>
            <p style="color:#cbd5e1;font-size:0.93rem;">
              Browse our 135-item marketplace, request a custom Kampala procurement quote, or schedule a local errand today.
            </p>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:10px;">
            <a href="#marketplace" class="btn btn--primary btn--sm">Browse Marketplace</a>
            <a href="#procurement" class="btn btn--secondary btn--sm">Kampala Procurement</a>
            <a href="#errands" class="btn btn--secondary btn--sm">Local Errands</a>
          </div>
        </div>
      </div>
    </section>
  `;

  document.getElementById('about-wa-btn')?.addEventListener('click', () => {
    const message = formatSupportMessage({
      topic: 'About TransEaz Enquiry',
      name: '',
      phone: '',
      message: 'Hello TransEaz team, I would like to learn more about your services around Seeta, Mbalala, and Mukono.'
    });
    openWhatsAppHandoff({
      title: 'Message the TransEaz Team',
      reference: '',
      message
    });
  });
}
