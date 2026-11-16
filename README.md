# TransEaz — Campus Errands, Kampala Procurement & Local Marketplace

TransEaz is a mobile-first Progressive Web App (PWA) mobile app built with **HTML5**, **CSS3**, and **Vanilla JavaScript** for **GitHub Pages** hosting and **WhatsApp** customer order submissions.

Initial operating areas:
- Seeta University
- Seeta
- Mbalala
- Mukono, Uganda

Official WhatsApp Number: **+256 786 436524** (`https://wa.me/256786436524`)

---

## Marketplace Catalogue Summary

- **Categories (9):** `Electronics`, `Fashion`, `Personal Care`, `Kitchen Tools`, `Stationery`, `Groceries`, `Household Essentials`, `Food & Snacks`, `Others`
- **Total Products:** **135 products** (15 distinct products per category)
- **Reference Price Check Date:** **2026-11-16**
- **Currency & Pricing:** Uganda Shillings (`UGX`), listed at observed Ugandan online retail reference prices without markup. Prices are indicative and subject to availability; final pricing is confirmed through WhatsApp before any order is approved.

---

## Project Structure

```text
trans-eaz/
├── index.html
├── manifest.json
├── sw.js
├── offline.html
├── favicon.ico
├── README.md
├── assets/
│   ├── icons/          # favicon.ico, favicon.png, apple-touch-icon.png, icon-192.png, icon-512.png, icon-512-maskable.png
│   ├── images/         # Hero campus delivery image
│   ├── logo/           # Brand logo
│   ├── products/       # Marketplace product images
│   └── team/           # About Us team member portrait photos (ceo.jpg, customer-care.jpg, tech-support.jpg)
├── css/
│   ├── style.css
│   ├── components.css
│   ├── responsive.css
│   └── animations.css
└── js/
    ├── config.js       # Central WhatsApp number, service areas & delivery fees
    ├── storage.js      # Device-local localStorage persistence
    ├── validation.js   # Form validation, UGX formatting & escaping
    ├── whatsapp.js     # WhatsApp message formatters & handoff modal
    ├── products.js     # Central 135-product catalogue (9 categories × 15 items)
    ├── navigation.js   # Hash router, mobile drawer & toasts
    ├── marketplace.js  # Marketplace search, 9-category filter, sort & pagination
    ├── product-details.js
    ├── cart.js
    ├── checkout.js
    ├── procurement.js  # Kampala sourcing request form
    ├── errands.js      # Local errands request form
    ├── requests.js     # Local request history & 7-step guide
    ├── about.js        # About Us & 3 management team members (easy to edit)
    ├── more.js         # Preferences, PWA install card, Contact & Policies
    ├── pwa.js          # Service worker registration & install prompts
    └── app.js          # Homepage & application bootstrap
```

---

## 1. How to Run Locally

Because the application uses native ES modules (`<script type="module" src="./js/app.js">`), serve the folder over a local HTTP server (opening `file://` directly blocks ES modules and Service Workers in browsers).

Using Python (no extra installation required on macOS/Linux):
```bash
python3 -m http.server 8080
```
Then open `http://localhost:8080` in Google Chrome.

---

## 2. How to Deploy to GitHub Pages

1. Sign in to [GitHub](https://github.com) and create a **Public** repository (e.g. `trans-eaz`).
2. Upload or push `index.html`, `manifest.json`, `sw.js`, `offline.html`, `favicon.ico`, `README.md`, `assets/`, `css/`, and `js/` to the `main` branch:
   ```bash
   git init
   git add index.html manifest.json sw.js offline.html favicon.ico README.md assets css js
   git commit -m "Deploy TransEaz mobile app"
   git branch -M main
   git remote add origin https://github.com/<your-username>/trans-eaz.git
   git push -u origin main
   ```
3. In the repository on GitHub, open **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**, select **main** and **/ (root)**, then click **Save**.
5. After 1–2 minutes, open your live HTTPS site at `https://<your-username>.github.io/trans-eaz/`.

All internal assets, `manifest.json`, and `sw.js` use relative `./` paths so the mobile app runs cleanly under GitHub Pages project subpaths.

---

## 3. How to Install TransEaz as a Mobile App

1. Open the live HTTPS URL in your mobile browser (such as Chrome or Safari).
2. Tap **Install TransEaz Mobile App** on the homepage or under **Contact & More → Install Mobile App** when shown.
3. Alternatively, tap Chrome's three-dot menu (**⋮**) → **Install app** (or **Add to Home screen**) → **Install**.
4. Launch **TransEaz** from your phone's home screen in standalone mobile app mode.

---

## 4. How to Update Product Prices

Open `js/products.js` and edit the `price` integer (in UGX, e.g. `58000`) on any item inside `PRODUCTS`, then update `PRICE_CHECK_DATE` at the top of `js/products.js` to record when prices were last checked.

---

## 5. How to Add New Products

Open `js/products.js` and append a new object to `PRODUCTS`:
```js
{
  id: 'tez-el-16',
  name: 'Product Name',
  category: 'Electronics', // Must match an entry in PRODUCT_CATEGORIES
  price: 45000,
  image: './assets/products/powerbank.jpg',
  description: 'Short, accurate product description.',
  specs: 'Key specs or size',
  badge: 'Optional Tag'
}
```

---

## 6. How to Change Product Images

Place optimised `.jpg` or `.webp` images inside `assets/products/` and update each product's `image` path in `js/products.js`. If you add new image filenames, add their paths to `PRECACHE_ASSETS` inside `sw.js` and bump `CACHE_VERSION`.

---

## 7. How to Change the WhatsApp Number

Open `js/config.js` and update both fields in `CONFIG`:
- `whatsappDisplay`: Human-readable format (e.g. `'+256 786 436524'`)
- `whatsappNumber`: Digits-only international format without `+` (e.g. `'256786436524'`)

---

## 8. How to Update Service Areas

Open `js/config.js` and edit `CONFIG.serviceAreas` to add, rename, or adjust `estimatedFeeUGX` values for delivery zones.

---

## 9. How to Update the Logo and Favicon

Replace the files inside `assets/logo/` and `assets/icons/` keeping the same filenames:
- `assets/logo/transeaz-logo.jpg`
- `assets/icons/favicon.ico` and `favicon.ico`
- `assets/icons/favicon.png` (32×32)
- `assets/icons/apple-touch-icon.png` (180×180)
- `assets/icons/icon-192.png` (192×192)
- `assets/icons/icon-512.png` (512×512)
- `assets/icons/icon-512-maskable.png` (512×512 with outer safe margin)
