/* TransEaz Central Product Catalogue
 * 9 Categories x 15 Products = 135 Ugandan Market Reference Listings
 * Reference prices checked: 2026-11-16 (UGX, no markup added).
 * Prices are indicative and subject to availability via WhatsApp confirmation.
 */

export const PRICE_CHECK_DATE = '2026-11-16';

export const PRODUCT_CATEGORIES = [
  'All',
  'Electronics',
  'Fashion',
  'Personal Care',
  'Kitchen Tools',
  'Stationery',
  'Groceries',
  'Household Essentials',
  'Food & Snacks',
  'Others'
];

export const CATEGORY_ICONS = {
  'Electronics': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
  'Fashion': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  'Personal Care': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
  'Kitchen Tools': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>',
  'Stationery': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>',
  'Groceries': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
  'Household Essentials': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  'Food & Snacks': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',
  'Others': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>'
};

export const PRODUCTS = [
  // ===========================================================================
  // 1. ELECTRONICS (15 products)
  // ===========================================================================
  {
    id: 'tez-el-01',
    name: 'Oraimo Traveler 15 Power Bank 20000mAh',
    category: 'Electronics',
    price: 58000,
    image: './assets/products/powerbank.jpg',
    description: 'High-capacity portable power bank with 15W Type-C fast charging and included cable.',
    specs: '20,000mAh · 15W Type-C · Multi-output',
    badge: '20,000mAh',
    featured: true
  },
  {
    id: 'tez-el-02',
    name: 'Oraimo PowerNova QF1 Power Bank 27000mAh',
    category: 'Electronics',
    price: 95000,
    image: './assets/products/powerbank.jpg',
    description: 'High-capacity 22.5W fast-charging power bank with a smart digital battery percentage display.',
    specs: '27,000mAh · 22.5W Fast Charge · Digital LED',
    badge: '27,000mAh'
  },
  {
    id: 'tez-el-03',
    name: 'Oraimo SpaceBuds Lite Wireless Earbuds',
    category: 'Electronics',
    price: 38000,
    image: './assets/products/earbuds.jpg',
    description: 'Compact true wireless Bluetooth earbuds with Sound360 audio and anti-lost design in Black.',
    specs: 'Bluetooth · Charging Case · Black',
    featured: true
  },
  {
    id: 'tez-el-04',
    name: 'Oraimo SpaceBuds Neo True Wireless Earbuds',
    category: 'Electronics',
    price: 36000,
    image: './assets/products/earbuds.jpg',
    description: 'Lightweight spatial-audio true wireless earpods with compact pocket charging case.',
    specs: 'Bluetooth · Spatial Sound · Black'
  },
  {
    id: 'tez-el-05',
    name: 'Oraimo Air Buds 4 ENC Wireless Earbuds',
    category: 'Electronics',
    price: 44000,
    image: './assets/products/earbuds.jpg',
    description: 'Environmental noise-cancelling call earbuds offering up to 38 hours combined playtime.',
    specs: 'ENC Call Mic · 38-Hr Battery · Wireless'
  },
  {
    id: 'tez-el-06',
    name: 'Oraimo SpaceBox OBS-382 Bluetooth Speaker',
    category: 'Electronics',
    price: 88000,
    image: './assets/products/smartwatch.jpg',
    description: 'Portable wireless Bluetooth speaker featuring heavy bass output and ambient light show.',
    specs: 'Wireless Bluetooth · Heavy Bass · Black'
  },
  {
    id: 'tez-el-07',
    name: 'Oraimo SpaceBox 8W Portable FM Speaker',
    category: 'Electronics',
    price: 48000,
    image: './assets/products/smartwatch.jpg',
    description: 'Compact 8W portable Bluetooth speaker with built-in FM radio in a neutral grey finish.',
    specs: '8W Output · Bluetooth + FM · Grey'
  },
  {
    id: 'tez-el-08',
    name: 'Oraimo Watch 6 Lite OSW-809 Smartwatch',
    category: 'Electronics',
    price: 79000,
    image: './assets/products/smartwatch.jpg',
    description: 'Everyday smartwatch in Black for notifications, activity tracking, and daily timekeeping.',
    specs: 'OSW-809 · Touch Display · Black'
  },
  {
    id: 'tez-el-09',
    name: 'Oraimo Watch Nova 2 Lite 1.93" AMOLED',
    category: 'Electronics',
    price: 75000,
    image: './assets/products/smartwatch.jpg',
    description: 'Full-touch 1.93-inch AMOLED colour screen smartwatch for fitness and smartphone alerts.',
    specs: '1.93" AMOLED · Full Touch · Black'
  },
  {
    id: 'tez-el-10',
    name: 'Oraimo Watch 5 Lite 2.01" IP68 Smartwatch',
    category: 'Electronics',
    price: 39102,
    image: './assets/products/smartwatch.jpg',
    description: 'Water-resistant IP68 smartwatch with 2.01-inch HD screen and wireless calling support.',
    specs: '2.01" HD · IP68 · Wireless Calling'
  },
  {
    id: 'tez-el-11',
    name: 'Oraimo HyperGaN 65W Wall Charger Kit',
    category: 'Electronics',
    price: 159315,
    image: './assets/products/powerbank.jpg',
    description: 'High-speed 65W GaN wall adapter bundled with a 100W USB-C to USB-C fast charging cable.',
    specs: '65W GaN · 100W C-to-C Cable · PD/QC'
  },
  {
    id: 'tez-el-12',
    name: 'Oraimo Firefly 3 Fast Charger Kit (Micro-USB)',
    category: 'Electronics',
    price: 18999,
    image: './assets/products/powerbank.jpg',
    description: 'Compact wall charger adapter paired with a durable Micro-USB fast charging cable.',
    specs: 'Wall Adapter + Micro-USB Cable · Black'
  },
  {
    id: 'tez-el-13',
    name: 'Oraimo Foldable USB Type-C Fast Charge Cable',
    category: 'Electronics',
    price: 15000,
    image: './assets/products/powerbank.jpg',
    description: 'Reinforced foldable USB Type-C cable built for reliable daily charging and data transfer.',
    specs: 'USB-A to Type-C · Fast Charge & Data'
  },
  {
    id: 'tez-el-14',
    name: 'Oraimo Type-C USB Data & Charging Cable',
    category: 'Electronics',
    price: 14875,
    image: './assets/products/powerbank.jpg',
    description: 'Standard Black USB Type-C data and fast charging cable compatible with Android phones.',
    specs: 'USB Type-C · Black'
  },
  {
    id: 'tez-el-15',
    name: 'Oraimo BoomPop N ANC Wireless Headphones',
    category: 'Electronics',
    price: 98000,
    image: './assets/products/earbuds.jpg',
    description: 'Over-ear wireless Bluetooth headphones featuring hybrid noise cancellation for focused study.',
    specs: 'Over-Ear · Hybrid ANC · Wireless'
  },

  // ===========================================================================
  // 2. FASHION (15 products)
  // ===========================================================================
  {
    id: 'tez-fa-01',
    name: 'Free-Size Casual Everyday Dress',
    category: 'Fashion',
    price: 50000,
    image: './assets/products/sneakers.jpg',
    description: 'Comfortable free-size casual dress suited for campus classes and weekend wear.',
    specs: 'Free Size · Casual Fit'
  },
  {
    id: 'tez-fa-02',
    name: 'Modern Contrast Blue Casual Sneakers',
    category: 'Fashion',
    price: 55000,
    image: './assets/products/sneakers.jpg',
    description: 'Lace-up contrast blue sneakers crafted for comfortable daily walking around campus.',
    specs: 'Contrast Blue · Lace-Up Sneakers'
  },
  {
    id: 'tez-fa-03',
    name: 'Structured Laptop Backpack',
    category: 'Fashion',
    price: 95000,
    image: './assets/products/backpack.jpg',
    description: 'Roomy laptop backpack with padded sleeve and zippered compartments for books and electronics.',
    specs: 'Laptop Compartment · Multi-Pocket',
    featured: true
  },
  {
    id: 'tez-fa-04',
    name: 'Bekia Men Outdoor Non-Slip Sports Sneakers',
    category: 'Fashion',
    price: 35682,
    image: './assets/products/sneakers.jpg',
    description: 'Breathable men’s outdoor sports sneakers with textured non-slip sole for daily commuting.',
    specs: 'Breathable Mesh · Non-Slip Sole'
  },
  {
    id: 'tez-fa-05',
    name: 'Men Business Leather Belt (Automatic Buckle)',
    category: 'Fashion',
    price: 19900,
    image: './assets/products/sneakers.jpg',
    description: 'Classic formal/casual leather belt featuring an easy-adjust automatic buckle.',
    specs: 'Leather Strap · Automatic Buckle'
  },
  {
    id: 'tez-fa-06',
    name: 'BINBOND Men Silver Quartz Steel Watch',
    category: 'Fashion',
    price: 36386,
    image: './assets/products/sneakers.jpg',
    description: 'Classic silver stainless steel band quartz wristwatch suitable for lectures and presentations.',
    specs: 'Quartz Movement · Silver Steel Band'
  },
  {
    id: 'tez-fa-07',
    name: 'ASHION Men Breathable Canvas Lace-Up Shoes',
    category: 'Fashion',
    price: 39893,
    image: './assets/products/sneakers.jpg',
    description: 'Casual lace-up canvas sneakers available in sizes 39–48 for lightweight everyday wear.',
    specs: 'Sizes 39–48 · Breathable Canvas'
  },
  {
    id: 'tez-fa-08',
    name: 'Bekia Women Breathable Casual Sports Sneakers',
    category: 'Fashion',
    price: 21900,
    image: './assets/products/sneakers.jpg',
    description: 'Lightweight women’s casual walking and sports sneakers with breathable upper.',
    specs: 'Women · Breathable Casual'
  },
  {
    id: 'tez-fa-09',
    name: 'Fuxing Women Everyday Casual Sneakers',
    category: 'Fashion',
    price: 16887,
    image: './assets/products/sneakers.jpg',
    description: 'Simple, affordable women’s everyday lace-up sneakers for campus and errands.',
    specs: 'Women · Lightweight Sole'
  },
  {
    id: 'tez-fa-10',
    name: 'Sport Fashion All-Black Sculpted Sneakers',
    category: 'Fashion',
    price: 45000,
    image: './assets/products/sneakers.jpg',
    description: 'Minimalist all-black sculpted athletic sneakers that pair easily with casual outfits.',
    specs: 'All-Black · Sculpted Outsole'
  },
  {
    id: 'tez-fa-11',
    name: 'Denggao 14.5-Inch School Backpack Rucksack',
    category: 'Fashion',
    price: 75000,
    image: './assets/products/backpack.jpg',
    description: 'Durable 14.5-inch leisure and school rucksack sized for laptops, notebooks, and daily essentials.',
    specs: '14.5-Inch Fit · Padded Straps'
  },
  {
    id: 'tez-fa-12',
    name: 'STY Ladies Black Oxford Cloth Backpack',
    category: 'Fashion',
    price: 29992,
    image: './assets/products/backpack.jpg',
    description: 'Compact women’s black Oxford cloth rucksack ideal for notebooks, tablet, and personal items.',
    specs: 'Oxford Cloth · Black · Ladies'
  },
  {
    id: 'tez-fa-13',
    name: 'Mateamoda Men Automatic Buckle Belt',
    category: 'Fashion',
    price: 20000,
    image: './assets/products/sneakers.jpg',
    description: 'Versatile black men’s dress and casual belt with smooth ratchet automatic buckle.',
    specs: 'Adjustable Ratchet Buckle · Men'
  },
  {
    id: 'tez-fa-14',
    name: 'Unisex Frameless Mirrored Sunglasses',
    category: 'Fashion',
    price: 15000,
    image: './assets/products/sneakers.jpg',
    description: 'Lightweight frameless sunglasses with black mirrored PC lenses for sunny campus walks.',
    specs: 'PC Lenses · Unisex'
  },
  {
    id: 'tez-fa-15',
    name: 'Photochromic Anti-Blue Light Outdoor Glasses',
    category: 'Fashion',
    price: 10600,
    image: './assets/products/sneakers.jpg',
    description: 'Dual-use UV protection and anti-blue-light glasses suited for screen study and outdoor sun.',
    specs: 'Photochromic · Anti-Blue Light + UV'
  },

  // ===========================================================================
  // 3. PERSONAL CARE (15 products)
  // ===========================================================================
  {
    id: 'tez-pc-01',
    name: 'Vaseline Lip Therapy Original 20g',
    category: 'Personal Care',
    price: 6800,
    image: './assets/products/skincare.jpg',
    description: 'Compact 20g pocket tin of original petroleum lip balm to lock in moisture.',
    specs: '20g Tin · Original Formula'
  },
  {
    id: 'tez-pc-02',
    name: 'Vaseline Daily Brightening Body Oil 200ml',
    category: 'Personal Care',
    price: 32200,
    image: './assets/products/skincare.jpg',
    description: 'Fast-absorbing 200ml body oil formulated to nourish and brighten dry skin.',
    specs: '200ml Bottle · Daily Brightening'
  },
  {
    id: 'tez-pc-03',
    name: 'Vaseline Calm Healing Body Oil 200ml',
    category: 'Personal Care',
    price: 30800,
    image: './assets/products/skincare.jpg',
    description: 'Soothing 200ml body oil enriched with lavender and restorative moisture.',
    specs: '200ml Bottle · Calm Healing'
  },
  {
    id: 'tez-pc-04',
    name: 'Vaseline Lip Therapy Rosy Lips Stick 4.8g',
    category: 'Personal Care',
    price: 27000,
    image: './assets/products/skincare.jpg',
    description: 'Tinted Rosy Lips moisturizing stick balm for everyday pocket carry.',
    specs: '4.8g Stick · Rosy Lips'
  },
  {
    id: 'tez-pc-05',
    name: 'Vaseline Gluta-Hya Serum Burst Lotion 330ml',
    category: 'Personal Care',
    price: 65000,
    image: './assets/products/skincare.jpg',
    description: 'Lightweight dewy radiance serum lotion with Gluta-Hya hydration complex.',
    specs: '330ml · Dewy Radiance'
  },
  {
    id: 'tez-pc-06',
    name: 'Vaseline Lip Therapy Cherry Blush Stick 4.8g',
    category: 'Personal Care',
    price: 22000,
    image: './assets/products/skincare.jpg',
    description: 'Cherry-scented moisturizing lip balm stick with a subtle tint.',
    specs: '4.8g Stick · Cherry Blush'
  },
  {
    id: 'tez-pc-07',
    name: 'Vaseline Original Petroleum Jelly 95ml',
    category: 'Personal Care',
    price: 23750,
    image: './assets/products/skincare.jpg',
    description: 'Triple-purified 95ml petroleum jelly jar for skin protection and dry patches.',
    specs: '95ml Jar · Triple Purified'
  },
  {
    id: 'tez-pc-08',
    name: 'Vaseline Cocoa Glow Dry Skin Lotion 400ml',
    category: 'Personal Care',
    price: 55680,
    image: './assets/products/skincare.jpg',
    description: 'Rich cocoa butter body lotion in a 400ml bottle for deep daily skin moisture.',
    specs: '400ml · Cocoa Glow'
  },
  {
    id: 'tez-pc-09',
    name: 'NIVEA Maximum Hydration Body Lotion 400ml',
    category: 'Personal Care',
    price: 30000,
    image: './assets/products/skincare.jpg',
    description: 'NIVEA Men Maximum Hydration 400ml lotion enriched with aloe vera for dry skin.',
    specs: '400ml · Blue Bottle'
  },
  {
    id: 'tez-pc-10',
    name: 'NIVEA Repair & Care 72H Body Lotion',
    category: 'Personal Care',
    price: 69000,
    image: './assets/products/skincare.jpg',
    description: 'Intensive 72-hour relief body lotion formulated for very dry and tight skin.',
    specs: '72H Moisture · Repair & Care'
  },
  {
    id: 'tez-pc-11',
    name: 'NIVEA Men Revitalizing Body Lotion 400ml',
    category: 'Personal Care',
    price: 30000,
    image: './assets/products/skincare.jpg',
    description: 'Refreshing 400ml daily body lotion designed for men’s normal to dry skin.',
    specs: '400ml · Men Revitalizing',
    featured: true
  },
  {
    id: 'tez-pc-12',
    name: 'NIVEA Fresh Natural Anti-Perspirant Spray 150ml',
    category: 'Personal Care',
    price: 14300,
    image: './assets/products/skincare.jpg',
    description: '48-hour gentle ocean-extract anti-perspirant deodorant spray for women.',
    specs: '150ml Spray · 48h Protection'
  },
  {
    id: 'tez-pc-13',
    name: 'Colgate Herbal Toothpaste 150g',
    category: 'Personal Care',
    price: 12000,
    image: './assets/products/skincare.jpg',
    description: 'Family-size 150g herbal fluoride toothpaste combining natural herb extracts and calcium.',
    specs: '150g Tube · Herbal'
  },
  {
    id: 'tez-pc-14',
    name: 'Colgate Herbal Toothpaste 70g',
    category: 'Personal Care',
    price: 9000,
    image: './assets/products/skincare.jpg',
    description: 'Compact 70g tube of Colgate Herbal toothpaste ideal for hostel bathrooms and travel.',
    specs: '70g Tube · Herbal'
  },
  {
    id: 'tez-pc-15',
    name: 'Lux Fresh Glow Bathing Soap 128g',
    category: 'Personal Care',
    price: 4500,
    image: './assets/products/skincare.jpg',
    description: 'Fragrant 128g everyday bathing bar soap for fresh daily cleansing.',
    specs: '128g Bar · Fresh Glow'
  },

  // ===========================================================================
  // 4. KITCHEN TOOLS (15 products)
  // ===========================================================================
  {
    id: 'tez-kt-01',
    name: 'Panda 2L Stainless Steel Electric Kettle',
    category: 'Kitchen Tools',
    price: 20983,
    image: './assets/products/kettle.jpg',
    description: 'Fast-boiling 2.0L stainless steel cordless electric kettle with auto shut-off.',
    specs: '2.0 Liters · Stainless Steel · Blue Accent',
    featured: true
  },
  {
    id: 'tez-kt-02',
    name: 'Pixel 2.5L Fast Boiling Electric Kettle',
    category: 'Kitchen Tools',
    price: 31500,
    image: './assets/products/kettle.jpg',
    description: 'Generous 2.5L electric kettle/percolator in rose gold finish for hostel tea and coffee.',
    specs: '2.5 Liters · Rose Gold Finish'
  },
  {
    id: 'tez-kt-03',
    name: '26cm Black Non-Stick Frying Pan',
    category: 'Kitchen Tools',
    price: 18500,
    image: './assets/products/cookware.jpg',
    description: 'Everyday 26cm non-stick skillet pan suited for eggs, pancakes, and quick student meals.',
    specs: '26cm Diameter · Non-Stick Coating'
  },
  {
    id: 'tez-kt-04',
    name: '3-Piece Non-Stick Frying Pan Set (20/22/24cm)',
    category: 'Kitchen Tools',
    price: 67500,
    image: './assets/products/cookware.jpg',
    description: 'Nested 3-piece non-stick black frying pan set covering small, medium, and family portions.',
    specs: '20cm, 22cm, 24cm · Black Non-Stick'
  },
  {
    id: 'tez-kt-05',
    name: 'Pixel 1.5L 2-in-1 Blender with Grinder',
    category: 'Kitchen Tools',
    price: 44800,
    image: './assets/products/kettle.jpg',
    description: '1.5L countertop fruit blender paired with a dry spice/coffee mill grinder attachment.',
    specs: '1.5L Jar · 2-in-1 Blender + Mill'
  },
  {
    id: 'tez-kt-06',
    name: 'ADH 2-in-1 Unbreakable Jar Blender',
    category: 'Kitchen Tools',
    price: 49900,
    image: './assets/products/kettle.jpg',
    description: 'Durable 2-in-1 kitchen blender featuring a shatter-resistant unbreakable jar.',
    specs: '2-in-1 · Unbreakable Jar · White/Green'
  },
  {
    id: 'tez-kt-07',
    name: '6-Piece Kitchen Knife Set with Wooden Board',
    category: 'Kitchen Tools',
    price: 25000,
    image: './assets/products/cookware.jpg',
    description: 'Complete starter prep set containing stainless kitchen knives and a wooden chopping board.',
    specs: '6 Pieces + Wooden Board'
  },
  {
    id: 'tez-kt-08',
    name: '3-Piece Plastic Cutting Chopping Board Set',
    category: 'Kitchen Tools',
    price: 40000,
    image: './assets/products/cookware.jpg',
    description: 'Easy-wash 3-piece white plastic chopping board set for separating vegetables and meats.',
    specs: '3 Sizes · Easy-Clean Plastic'
  },
  {
    id: 'tez-kt-09',
    name: 'Tankoo 3.2L Double-Wall Hot & Cold Flask',
    category: 'Kitchen Tools',
    price: 22400,
    image: './assets/products/kettle.jpg',
    description: 'Large 3.2L insulated vacuum flask designed to keep water or tea hot for hours.',
    specs: '3.2 Liters · Double-Wall Vacuum'
  },
  {
    id: 'tez-kt-10',
    name: 'Sundabest 3L Unbreakable Stainless Vacuum Flask',
    category: 'Kitchen Tools',
    price: 37000,
    image: './assets/products/kettle.jpg',
    description: 'Heavy-duty 3L stainless steel vacuum flask in silver for dorms and shared kitchens.',
    specs: '3.0 Liters · Stainless Steel · Silver'
  },
  {
    id: 'tez-kt-11',
    name: '6-Piece Ceramic Dinner Plates Set',
    category: 'Kitchen Tools',
    price: 85000,
    image: './assets/products/cookware.jpg',
    description: 'Set of 6 sturdy ceramic dinner plates suitable for daily meals and hosting guests.',
    specs: '6 Plates · Ceramic'
  },
  {
    id: 'tez-kt-12',
    name: '24-Piece Black Line Plates, Bowls & Cups Set',
    category: 'Kitchen Tools',
    price: 72000,
    image: './assets/products/cookware.jpg',
    description: 'Coordinated 24-piece minimalist black-line dinnerware set with plates, bowls, and cups.',
    specs: '24 Pieces · Minimalist Black Line'
  },
  {
    id: 'tez-kt-13',
    name: '36-Piece Black Line Complete Dinnerware Set',
    category: 'Kitchen Tools',
    price: 70000,
    image: './assets/products/cookware.jpg',
    description: '36-piece set with 6 plates, 6 cups, 6 saucers, 6 side dishes, 6 forks, and 6 spoons.',
    specs: '36 Pieces · Service for 6'
  },
  {
    id: 'tez-kt-14',
    name: '5-Piece Food Storage Container Set with Lids',
    category: 'Kitchen Tools',
    price: 44635,
    image: './assets/products/cookware.jpg',
    description: '5-piece nesting kitchen storage container set with tight lids for fruits, leftovers, and dry goods.',
    specs: '5 Containers + Lids'
  },
  {
    id: 'tez-kt-15',
    name: '5-Set Multi-Colour Plastic Food Containers',
    category: 'Kitchen Tools',
    price: 40000,
    image: './assets/products/cookware.jpg',
    description: 'Stackable set of 5 plastic food storage bowls with colour-coded snap lids.',
    specs: '5-Piece Set · Snap Lids'
  },

  // ===========================================================================
  // 5. STATIONERY (15 products)
  // ===========================================================================
  {
    id: 'tez-st-01',
    name: 'Picfare Exercise Books 96 Pages (Dozen of 12)',
    category: 'Stationery',
    price: 19500,
    image: './assets/products/stationery.jpg',
    description: 'Dozen pack of 12 standard blue Picfare 96-page exercise books for lecture notes.',
    specs: '12 Books · 96 Pages · Blue Cover',
    badge: '12-Pack',
    featured: true
  },
  {
    id: 'tez-st-02',
    name: 'A4 96-Page Exercise Books (12 Pieces)',
    category: 'Stationery',
    price: 26550,
    image: './assets/products/stationery.jpg',
    description: 'Full-size A4 ruled exercise books packed in a dozen of 12 for university coursework.',
    specs: 'A4 Size · 12 Books · 96 Pages'
  },
  {
    id: 'tez-st-03',
    name: 'King A5 Exercise Books (2 Dozens / 24 Pieces)',
    category: 'Stationery',
    price: 28500,
    image: './assets/products/stationery.jpg',
    description: 'Bulk 24-piece pack of compact A5 exercise books for daily rough notes and quizzes.',
    specs: 'A5 Size · 24 Books'
  },
  {
    id: 'tez-st-04',
    name: 'Picfare Champion A4 96-Page Books (12-Pack)',
    category: 'Stationery',
    price: 31500,
    image: './assets/products/stationery.jpg',
    description: 'Picfare Champion A4 96-page crisp ruled notebooks bundled in a 12-book pack.',
    specs: 'A4 Size · 12 Books · 96 Pages'
  },
  {
    id: 'tez-st-05',
    name: 'A4 4-Quire Hardcover Counter Books (6 Pieces)',
    category: 'Stationery',
    price: 41800,
    image: './assets/products/stationery.jpg',
    description: '6-pack of thick A4 4-quire hardcover counter books built to last an entire semester.',
    specs: 'A4 · 4-Quire · 6 Books'
  },
  {
    id: 'tez-st-06',
    name: 'A4 Black 4-Quire 384-Page Counter Books (4-Pack)',
    category: 'Stationery',
    price: 35625,
    image: './assets/products/stationery.jpg',
    description: 'Pack of 4 black hardcover 384-page counter books with durable stitched binding.',
    specs: '384 Pages · 4-Quire · 4 Books'
  },
  {
    id: 'tez-st-07',
    name: 'Bic Ballpoint Blue Pens (Box of 50)',
    category: 'Stationery',
    price: 31950,
    image: './assets/products/stationery.jpg',
    description: 'Full box of 50 smooth-writing blue ballpoint pens ideal for exams and study groups.',
    specs: '50 Pens · Blue Ink',
    badge: 'Box of 50'
  },
  {
    id: 'tez-st-08',
    name: 'Bic Cristal Original Blue Pens (50-Pack)',
    category: 'Stationery',
    price: 36500,
    image: './assets/products/stationery.jpg',
    description: 'Classic transparent hexagonal Bic Cristal Original blue ballpoint pens in a 50-count box.',
    specs: '50 Pens · Medium 1.0mm · Blue'
  },
  {
    id: 'tez-st-09',
    name: 'Bic Whiteboard Marker (Red)',
    category: 'Stationery',
    price: 4080,
    image: './assets/products/stationery.jpg',
    description: 'Dry-erase red whiteboard marker for seminar presentations and study boards.',
    specs: 'Dry Erase · Red Ink'
  },
  {
    id: 'tez-st-10',
    name: '12-Digit Solar LCD Desktop Calculator',
    category: 'Stationery',
    price: 21995,
    image: './assets/products/stationery.jpg',
    description: 'Large-button 12-digit solar and battery powered calculator for accounting and coursework.',
    specs: '12 Digits · Solar + Battery · Black'
  },
  {
    id: 'tez-st-11',
    name: 'Student Multifunctional Scientific Calculator',
    category: 'Stationery',
    price: 18900,
    image: './assets/products/stationery.jpg',
    description: 'Portable 12-digit 2-line scientific calculator for engineering, maths, and science units.',
    specs: 'Scientific · 12-Digit Display'
  },
  {
    id: 'tez-st-12',
    name: '30cm / 12-Inch Plastic School Rulers (6-Pack)',
    category: 'Stationery',
    price: 3000,
    image: './assets/products/stationery.jpg',
    description: 'Set of 6 clear 30cm metric and inch rulers for diagrams, charts, and assignments.',
    specs: '30cm / 12" · 6 Pieces'
  },
  {
    id: 'tez-st-13',
    name: 'A4 PU Conference Portfolio Folder with Calculator',
    category: 'Stationery',
    price: 94500,
    image: './assets/products/stationery.jpg',
    description: 'Black PU leather A4 zippered conference folder with built-in calculator and notepad slot.',
    specs: 'A4 · PU Leather · Integrated Calculator'
  },
  {
    id: 'tez-st-14',
    name: 'Executive Portfolio Padfolio Document Folder',
    category: 'Stationery',
    price: 287000,
    image: './assets/products/stationery.jpg',
    description: 'Structured padfolio document organizer for final-year presentations, CVs, and internships.',
    specs: 'Padfolio · Multi-Pocket Organizer'
  },
  {
    id: 'tez-st-15',
    name: 'P1 Bright White A4 500-Sheet Paper (5-Ream Carton)',
    category: 'Stationery',
    price: 120000,
    image: './assets/products/stationery.jpg',
    description: 'Bulk carton of 5 reams (2,500 sheets) bright white A4 paper for dissertation and printing.',
    specs: '5 Reams × 500 Sheets · A4 White'
  },

  // ===========================================================================
  // 6. GROCERIES (15 products)
  // ===========================================================================
  {
    id: 'tez-gr-01',
    name: 'SWT Delight Long Grain Rice 5kg',
    category: 'Groceries',
    price: 24900,
    image: './assets/products/groceries.jpg',
    description: 'Clean, quick-cooking 5kg bag of SWT Delight white rice for hostel and home meals.',
    specs: '5kg Bag · Long Grain Rice',
    badge: '5kg Bag',
    featured: true
  },
  {
    id: 'tez-gr-02',
    name: 'SWT Aromatic Rice 5kg',
    category: 'Groceries',
    price: 22000,
    image: './assets/products/groceries.jpg',
    description: 'Fragrant 5kg bag of SWT Aromatic rice suited for pilau and everyday dishes.',
    specs: '5kg Bag · Aromatic'
  },
  {
    id: 'tez-gr-03',
    name: 'Numa Super White Rice 5kg',
    category: 'Groceries',
    price: 36800,
    image: './assets/products/groceries.jpg',
    description: 'Premium grade Numa Super White Rice packed in a sealed 5kg household bag.',
    specs: '5kg Bag · Super White'
  },
  {
    id: 'tez-gr-04',
    name: 'Zhong Yi Super Rice 1kg',
    category: 'Groceries',
    price: 6500,
    image: './assets/products/groceries.jpg',
    description: 'Convenient 1kg pack of Zhong Yi Super Rice for single-student cooking.',
    specs: '1kg Pack'
  },
  {
    id: 'tez-gr-05',
    name: 'Sunseed Sunflower Cooking Oil 5 Liters',
    category: 'Groceries',
    price: 45500,
    image: './assets/products/groceries.jpg',
    description: 'Refined cholesterol-free 5L jerrycan of Sunseed pure sunflower cooking oil.',
    specs: '5 Liters · Sunflower Oil'
  },
  {
    id: 'tez-gr-06',
    name: 'Fortune Sunflower Cooking Oil 5 Liters',
    category: 'Groceries',
    price: 45900,
    image: './assets/products/groceries.jpg',
    description: 'Light, neutral-tasting 5L Fortune sunflower oil for frying, sautéing, and baking.',
    specs: '5 Liters · Sunflower Oil'
  },
  {
    id: 'tez-gr-07',
    name: 'Kinyara Sweet Sugar 1kg',
    category: 'Groceries',
    price: 3700,
    image: './assets/products/groceries.jpg',
    description: 'Locally milled 1kg bag of Kinyara brown sugar for tea, porridge, and baking.',
    specs: '1kg Pack · Ugandan Cane Sugar'
  },
  {
    id: 'tez-gr-08',
    name: 'Lato Whole Milk Powder 400g',
    category: 'Groceries',
    price: 22700,
    image: './assets/products/groceries.jpg',
    description: 'Instant full-cream 400g Lato powdered milk pouch—no fridge required in hostels.',
    specs: '400g Pouch · Whole Milk Powder'
  },
  {
    id: 'tez-gr-09',
    name: 'JESA Super Milk 200ml (Pack of 24)',
    category: 'Groceries',
    price: 21000,
    image: './assets/products/groceries.jpg',
    description: 'Carton of 24 shelf-stable 200ml JESA UHT milk packs for breakfast and tea.',
    specs: '24 × 200ml · UHT Whole Milk'
  },
  {
    id: 'tez-gr-10',
    name: 'Nescafe Classic Instant Coffee 100g',
    category: 'Groceries',
    price: 40500,
    image: './assets/products/groceries.jpg',
    description: '100g jar of rich Nescafe Classic instant coffee for early lectures and late revision.',
    specs: '100g Jar · Instant Coffee'
  },
  {
    id: 'tez-gr-11',
    name: 'Kericho Gold String & Tag Tea Bags (50 pcs)',
    category: 'Groceries',
    price: 18500,
    image: './assets/products/groceries.jpg',
    description: 'Box of 50 individually tagged Kericho Gold black tea bags for quick hot cups.',
    specs: '50 Tea Bags · String & Tag'
  },
  {
    id: 'tez-gr-12',
    name: 'Indomie Chicken Instant Noodles 70g (5-Pack)',
    category: 'Groceries',
    price: 4000,
    image: './assets/products/groceries.jpg',
    description: 'Bundle of 5 individual 70g chicken-flavour instant noodles ready in 3 minutes.',
    specs: '5 × 70g · Chicken Flavour'
  },
  {
    id: 'tez-gr-13',
    name: 'Santa Lucia Spaghetti 500g',
    category: 'Groceries',
    price: 4000,
    image: './assets/products/groceries.jpg',
    description: '500g pack of durum-wheat Santa Lucia spaghetti pasta for quick hostel dinners.',
    specs: '500g Pack · Pasta'
  },
  {
    id: 'tez-gr-14',
    name: 'JOHA Maize Flour 2kg',
    category: 'Groceries',
    price: 5000,
    image: './assets/products/groceries.jpg',
    description: 'Fine sifted 2kg pack of JOHA white maize flour for posho and porridge.',
    specs: '2kg Pack · Maize Flour'
  },
  {
    id: 'tez-gr-15',
    name: 'Blue Band Smooth Peanut Butter 400g',
    category: 'Groceries',
    price: 13000,
    image: './assets/products/groceries.jpg',
    description: 'Creamy 400g jar of Blue Band roasted peanut butter spread for bread and breakfast.',
    specs: '400g Jar · Smooth Spread'
  },

  // ===========================================================================
  // 7. HOUSEHOLD ESSENTIALS (15 products)
  // ===========================================================================
  {
    id: 'tez-hh-01',
    name: 'Omo Hand Washing Powder',
    category: 'Household Essentials',
    price: 23500,
    image: './assets/products/household.jpg',
    description: 'Fast-action stain-removing Omo hand washing detergent powder for everyday laundry.',
    specs: 'Hand Wash Detergent Powder',
    featured: true
  },
  {
    id: 'tez-hh-02',
    name: 'Omo Lemon Bleach 700ml (2-Pack)',
    category: 'Household Essentials',
    price: 17300,
    image: './assets/products/household.jpg',
    description: 'Twin pack of 700ml lemon-scented household bleach for whites and bathroom sanitising.',
    specs: '2 × 700ml · Lemon Scent'
  },
  {
    id: 'tez-hh-03',
    name: 'Mambo Toilet Paper (10-Pack)',
    category: 'Household Essentials',
    price: 4800,
    image: './assets/products/household.jpg',
    description: 'Value 10-roll pack of Mambo toilet tissue for hostel rooms and apartments.',
    specs: '10 Rolls · Value Pack'
  },
  {
    id: 'tez-hh-04',
    name: 'Toilex Poa Wrapped Toilet Paper 2-Ply (10-Pack)',
    category: 'Household Essentials',
    price: 5200,
    image: './assets/products/household.jpg',
    description: 'Soft 2-ply wrapped Toilex Poa toilet rolls in a convenient 10-roll pack.',
    specs: '10 Rolls · 2-Ply Wrapped'
  },
  {
    id: 'tez-hh-05',
    name: 'Rosy Wrapped Toilet Paper 2-Ply (10-Pack)',
    category: 'Household Essentials',
    price: 7600,
    image: './assets/products/household.jpg',
    description: 'Individually wrapped 2-ply Rosy toilet tissue rolls packed in a 10-roll bundle.',
    specs: '10 Rolls · 2-Ply Soft'
  },
  {
    id: 'tez-hh-06',
    name: 'Compact Twin Pack Kitchen Towels & Napkins',
    category: 'Household Essentials',
    price: 9900,
    image: './assets/products/household.jpg',
    description: 'Absorbent twin-pack paper kitchen towels for spills, counters, and food prep.',
    specs: 'Twin Pack · Absorbent Paper'
  },
  {
    id: 'tez-hh-07',
    name: 'Jik Multipurpose Household Bleach 750ml',
    category: 'Household Essentials',
    price: 29750,
    image: './assets/products/household.jpg',
    description: '750ml bottle of Jik multipurpose bleach and disinfectant for floors, sinks, and laundry.',
    specs: '750ml Bottle · Disinfectant'
  },
  {
    id: 'tez-hh-08',
    name: 'Jik Stain Remover & Disinfectant 750ml',
    category: 'Household Essentials',
    price: 22000,
    image: './assets/products/household.jpg',
    description: '750ml Jik stain remover formula for whitening laundry and disinfecting hard surfaces.',
    specs: '750ml Bottle · Stain Remover'
  },
  {
    id: 'tez-hh-09',
    name: 'Harpic Disinfectant Toilet Cleaner 500ml',
    category: 'Household Essentials',
    price: 19500,
    image: './assets/products/household.jpg',
    description: '500ml angled-neck Harpic toilet cleaner that tackles limescale and tough stains.',
    specs: '500ml · Toilet Disinfectant'
  },
  {
    id: 'tez-hh-10',
    name: 'Dettol Antibacterial Liquid 250ml',
    category: 'Household Essentials',
    price: 21000,
    image: './assets/products/household.jpg',
    description: '250ml Dettol antiseptic liquid for household cleaning, laundry rinse, and hygiene.',
    specs: '250ml Bottle · Antiseptic'
  },
  {
    id: 'tez-hh-11',
    name: 'Dettol Original Soap Value Pack 175g',
    category: 'Household Essentials',
    price: 10600,
    image: './assets/products/household.jpg',
    description: '175g Dettol Original antibacterial bar soap for reliable everyday germ protection.',
    specs: '175g Bar · Original'
  },
  {
    id: 'tez-hh-12',
    name: 'Home Microfiber Spray Mop',
    category: 'Household Essentials',
    price: 52100,
    image: './assets/products/household.jpg',
    description: 'Lightweight trigger-spray floor mop with refillable bottle and washable microfiber pad.',
    specs: 'Built-in Spray Tank · Microfiber Pad'
  },
  {
    id: 'tez-hh-13',
    name: 'Long-Handle Broom and Dustpan Set',
    category: 'Household Essentials',
    price: 44200,
    image: './assets/products/household.jpg',
    description: 'Stand-up sweeping broom with matching long-handle hinged dustpan for effortless room cleaning.',
    specs: 'Upright Broom + Dustpan'
  },
  {
    id: 'tez-hh-14',
    name: '360° Spin Mop and Bucket Set',
    category: 'Household Essentials',
    price: 125000,
    image: './assets/products/household.jpg',
    description: 'Hands-free wringing spin mop bucket with extendable handle and microfiber mop refills.',
    specs: '360° Spinner Bucket + Refills'
  },
  {
    id: 'tez-hh-15',
    name: 'Heavy-Duty Dustbin Garbage Bags (20-Pack)',
    category: 'Household Essentials',
    price: 20000,
    image: './assets/products/household.jpg',
    description: 'Pack of 20 durable 60×50cm disposable trash bin liners for hostel and kitchen bins.',
    specs: '20 Bags · 60 × 50cm'
  },

  // ===========================================================================
  // 8. FOOD & SNACKS (15 products)
  // ===========================================================================
  {
    id: 'tez-fs-01',
    name: 'Everyday Chocolate Milk Biscuits (60 Pieces)',
    category: 'Food & Snacks',
    price: 5200,
    image: './assets/products/snacks.jpg',
    description: 'Value 60-piece pack of crunchy chocolate-flavoured milk biscuits for study breaks.',
    specs: '60 Pieces · Chocolate Milk'
  },
  {
    id: 'tez-fs-02',
    name: 'Britania Chocolate Creams 21g (30 Packets)',
    category: 'Food & Snacks',
    price: 4100,
    image: './assets/products/snacks.jpg',
    description: 'Bundle of 30 individual 21g packets of Britania chocolate-cream sandwich biscuits.',
    specs: '30 × 21g Packets'
  },
  {
    id: 'tez-fs-03',
    name: 'Britania Butter Biscuit Jar 1kg',
    category: 'Food & Snacks',
    price: 13200,
    image: './assets/products/snacks.jpg',
    description: 'Resealable 1kg plastic jar filled with classic crisp Britania butter biscuits.',
    specs: '1kg Jar · Butter Biscuits',
    featured: true
  },
  {
    id: 'tez-fs-04',
    name: 'Britania Galaxy Biscuits Jar 1kg',
    category: 'Food & Snacks',
    price: 13200,
    image: './assets/products/snacks.jpg',
    description: '1kg hostel snack jar of Britania Galaxy biscuits—keeps snacks fresh on your desk.',
    specs: '1kg Jar · Galaxy'
  },
  {
    id: 'tez-fs-05',
    name: 'Britania Cocobite Biscuits Jar 1kg',
    category: 'Food & Snacks',
    price: 13200,
    image: './assets/products/snacks.jpg',
    description: '1kg resealable jar of toasted coconut-flavoured Britania Cocobite biscuits.',
    specs: '1kg Jar · Coconut Flavour'
  },
  {
    id: 'tez-fs-06',
    name: 'Britania Shortcake Biscuits (108 Pieces)',
    category: 'Food & Snacks',
    price: 7100,
    image: './assets/products/snacks.jpg',
    description: 'Large 108-piece sharing pack of crisp tea-time shortcake biscuits.',
    specs: '108 Pieces · Shortcake'
  },
  {
    id: 'tez-fs-07',
    name: 'Sumz Chocolate Cookies Tin 700g',
    category: 'Food & Snacks',
    price: 14700,
    image: './assets/products/snacks.jpg',
    description: '700g gift-style metal tin of rich Sumz chocolate cookies.',
    specs: '700g Tin · Chocolate'
  },
  {
    id: 'tez-fs-08',
    name: 'Sumz Coconut Cookies Tin 1kg',
    category: 'Food & Snacks',
    price: 14700,
    image: './assets/products/snacks.jpg',
    description: '1kg Sumz cookie tin baked with real coconut crunch.',
    specs: '1kg Tin · Coconut'
  },
  {
    id: 'tez-fs-09',
    name: 'Sumz Assorted Cookies Tin 700g',
    category: 'Food & Snacks',
    price: 14300,
    image: './assets/products/snacks.jpg',
    description: '700g assorted cookie tin featuring mixed butter, vanilla, and cocoa flavours.',
    specs: '700g Tin · Assorted'
  },
  {
    id: 'tez-fs-10',
    name: 'Nutro Chocolate Cream Biscuits (24 Packets)',
    category: 'Food & Snacks',
    price: 38000,
    image: './assets/products/snacks.jpg',
    description: 'Full box of 24 packs of Nutro chocolate cream-filled sandwich biscuits.',
    specs: '24 Packets · Box'
  },
  {
    id: 'tez-fs-11',
    name: 'TOOKE Green Banana Digestives Jar 1kg',
    category: 'Food & Snacks',
    price: 28800,
    image: './assets/products/snacks.jpg',
    description: 'Ugandan-made 1kg jar of nutritious TOOKE green banana flour digestive biscuits.',
    specs: '1kg Jar · Green Banana Flour'
  },
  {
    id: 'tez-fs-12',
    name: 'Everyday Tea Time Biscuits (60 Pieces)',
    category: 'Food & Snacks',
    price: 7300,
    image: './assets/products/snacks.jpg',
    description: '60-piece pack of light, mildly sweet tea-time biscuits.',
    specs: '60 Pieces'
  },
  {
    id: 'tez-fs-13',
    name: 'Everyday Salted Crackers 400g',
    category: 'Food & Snacks',
    price: 3300,
    image: './assets/products/snacks.jpg',
    description: '400g pack of crisp Everyday savoury crackers—great with peanut butter or tea.',
    specs: '400g Pack · Crackers'
  },
  {
    id: 'tez-fs-14',
    name: 'Pringles Sour Cream & Onion Chips 165g',
    category: 'Food & Snacks',
    price: 45000,
    image: './assets/products/snacks.jpg',
    description: 'Full-size 165g resealable canister of stacked Sour Cream & Onion potato crisps.',
    specs: '165g Canister · Sour Cream & Onion'
  },
  {
    id: 'tez-fs-15',
    name: 'Pringles Ketchup Flavoured Chips 165g',
    category: 'Food & Snacks',
    price: 23400,
    image: './assets/products/snacks.jpg',
    description: '165g tall canister of tangy tomato ketchup seasoned Pringles potato crisps.',
    specs: '165g Canister · Ketchup Flavour'
  },

  // ===========================================================================
  // 9. OTHERS (15 products)
  // ===========================================================================
  {
    id: 'tez-ot-01',
    name: 'Compact Folding Travel Umbrella',
    category: 'Others',
    price: 16650,
    image: './assets/products/utilities.jpg',
    description: 'Lightweight portable folding umbrella that fits neatly inside a laptop backpack.',
    specs: 'Compact 3-Fold · Rain & Sun'
  },
  {
    id: 'tez-ot-02',
    name: 'Windproof 3-Fold Automatic Sun & Rain Umbrella',
    category: 'Others',
    price: 29900,
    image: './assets/products/utilities.jpg',
    description: 'Sturdy windproof 3-fold unisex travel umbrella designed for sudden Mukono downpours.',
    specs: 'Windproof Frame · 3-Fold'
  },
  {
    id: 'tez-ot-03',
    name: 'Heavy-Duty Brass Security Padlock',
    category: 'Others',
    price: 21250,
    image: './assets/products/utilities.jpg',
    description: 'Solid brass-body padlock with hardened steel shackle for hostel doors and trunks.',
    specs: 'Brass Body · Keys Included'
  },
  {
    id: 'tez-ot-04',
    name: 'Three-Digit Combination Luggage Padlock',
    category: 'Others',
    price: 18500,
    image: './assets/products/utilities.jpg',
    description: 'Keyless 3-digit resettable combination lock ideal for suitcases, lockers, and backpacks.',
    specs: '3-Digit Code · Keyless'
  },
  {
    id: 'tez-ot-05',
    name: 'Power King 4-Way Surge Extension Cable',
    category: 'Others',
    price: 26550,
    image: './assets/products/desklamp.jpg',
    description: 'Heavy-duty 4-way UK power extension strip with surge protection for laptops and kettles.',
    specs: '4-Way UK Sockets · Surge Protected',
    featured: true
  },
  {
    id: 'tez-ot-06',
    name: 'David Round Hanging Mosquito Net (4x6 / 5x6)',
    category: 'Others',
    price: 24000,
    image: './assets/products/utilities.jpg',
    description: 'Breathable fine-mesh round mosquito net fitting 4×6 and 5×6 hostel and bedroom beds.',
    specs: 'Fits 4×6 & 5×6 Beds · Hanging Hoop'
  },
  {
    id: 'tez-ot-07',
    name: 'Dp Light DP-7045 Rechargeable LED Torch',
    category: 'Others',
    price: 20580,
    image: './assets/products/utilities.jpg',
    description: 'Heavy-duty portable rechargeable LED searchlight torch for power outages and night walks.',
    specs: 'DP-7045 · Rechargeable LED'
  },
  {
    id: 'tez-ot-08',
    name: 'Dp Light DP-3420 Foldable Rechargeable Desk Lamp',
    category: 'Others',
    price: 13860,
    image: './assets/products/desklamp.jpg',
    description: 'Foldable rechargeable LED desk lamp and emergency light for study during power cuts.',
    specs: 'DP-3420 · Foldable · Rechargeable'
  },
  {
    id: 'tez-ot-09',
    name: 'Dp Light DP-952 Solar LED Emergency Camping Lamp',
    category: 'Others',
    price: 17960,
    image: './assets/products/desklamp.jpg',
    description: 'Portable solar and USB rechargeable LED lantern for hostels and emergency backup lighting.',
    specs: 'DP-952 · Solar + Rechargeable'
  },
  {
    id: 'tez-ot-10',
    name: 'SPJ Non-Stick Dry Flat Iron Box',
    category: 'Others',
    price: 30200,
    image: './assets/products/utilities.jpg',
    description: 'Lightweight titanium non-stick dry ironing box with temperature dial for crisp uniforms.',
    specs: 'Titanium Non-Stick Soleplate · Red/White'
  },
  {
    id: 'tez-ot-11',
    name: 'Double-Wall Insulated Stainless Water Bottle',
    category: 'Others',
    price: 46800,
    image: './assets/products/utilities.jpg',
    description: 'Vacuum-insulated stainless steel bottle keeping water cold or tea warm across campus.',
    specs: 'Double-Wall Stainless · Leak-Proof Lid'
  },
  {
    id: 'tez-ot-12',
    name: '2-in-1 Soft Absorbent Bath & Facial Towel Set',
    category: 'Others',
    price: 34888,
    image: './assets/products/utilities.jpg',
    description: 'Plush quick-drying bath towel paired with a matching facial towel.',
    specs: '2-Piece Set · Bath + Face Towel'
  },
  {
    id: 'tez-ot-13',
    name: 'Plastic Clothes Hangers (12-Piece Pack)',
    category: 'Others',
    price: 15500,
    image: './assets/products/utilities.jpg',
    description: 'Pack of 12 lightweight durable plastic hangers for organizing shirts, trousers, and dresses.',
    specs: '12 Hangers · Closet Organizer'
  },
  {
    id: 'tez-ot-14',
    name: 'Bekia 4-Layer DIY Multi-Tier Shoe Rack',
    category: 'Others',
    price: 19990,
    image: './assets/products/utilities.jpg',
    description: 'Space-saving 4-tier snap-together shoe rack that keeps hostel doorways tidy.',
    specs: '4 Tiers · Tool-Free Assembly'
  },
  {
    id: 'tez-ot-15',
    name: 'Rechargeable Electric Hot Water Warmer Bag',
    category: 'Others',
    price: 26000,
    image: './assets/products/utilities.jpg',
    description: 'Portable electric heated water bag with soft cover for chilly rainy nights and cramps.',
    specs: 'Electric Heated · Soft Pouch Cover'
  }
];

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null;
}

export function getFeaturedProducts(limit = 4) {
  const featured = PRODUCTS.filter((p) => p.featured);
  return featured.slice(0, limit);
}

export function getRelatedProducts(product, limit = 4) {
  if (!product) return [];
  return PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, limit);
}
