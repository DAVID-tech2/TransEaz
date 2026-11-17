/* TransEaz Central Product Catalogue
 * 9 Categories x 15 Products = 135 Ugandan Market Reference Listings (Jumia Uganda Research)
 * Reference prices checked: 2026-11-17 (UGX, current Ugandan retail prices).
 * Prices are indicative and subject to availability via WhatsApp confirmation.
 */

export const PRICE_CHECK_DATE = '2026-11-17';

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
  // 1. ELECTRONICS (15 products — Jumia Uganda current UGX prices)
  // ===========================================================================
  {
    id: 'tez-el-01',
    name: 'Oraimo Traveler 15 Power Bank 20000mAh',
    category: 'Electronics',
    price: 58000,
    image: './assets/products/powerbank.jpg',
    description: 'High-capacity 20,000mAh portable power bank with 15W Type-C fast charging, dual USB output, and built-in LED torch.',
    specs: '20,000mAh · 15W Type-C · Multi-output',
    badge: '20,000mAh',
    featured: true
  },
  {
    id: 'tez-el-02',
    name: 'Oraimo PowerNova QF1 Power Bank 27000mAh',
    category: 'Electronics',
    price: 95000,
    image: './assets/products/powerbank-only.jpg',
    description: 'Heavy-duty 27,000mAh 22.5W fast-charging power bank with AniFast smart charging for phones and tablets.',
    specs: '27,000mAh · 22.5W Fast Charge · Multi-Device',
    badge: '27,000mAh'
  },
  {
    id: 'tez-el-03',
    name: 'Oraimo SpaceBuds Lite Wireless Earbuds',
    category: 'Electronics',
    price: 38000,
    image: './assets/products/earbuds.jpg',
    description: 'Compact true wireless Bluetooth earbuds with Sound360 spatial audio and pocket charging case.',
    specs: 'Bluetooth 5.3 · Charging Case · 36-Hr Playtime',
    featured: true
  },
  {
    id: 'tez-el-04',
    name: 'Oraimo SpaceBuds Neo True Wireless Earbuds',
    category: 'Electronics',
    price: 36000,
    image: './assets/products/earbuds-enc.webp',
    description: 'Lightweight spatial-audio true wireless earpods with low-latency game mode and compact charging case.',
    specs: 'Bluetooth · Spatial Sound · Pocket Case'
  },
  {
    id: 'tez-el-05',
    name: 'Oraimo AirBuds 4 ENC Wireless Earbuds',
    category: 'Electronics',
    price: 44000,
    image: './assets/products/earbuds.jpg',
    description: 'Environmental noise-cancelling call earbuds offering clear voice pickup and up to 38 hours combined battery life.',
    specs: 'ENC Call Mic · 38-Hr Battery · Wireless'
  },
  {
    id: 'tez-el-06',
    name: 'Oraimo SpaceBox OBS-382 Bluetooth Speaker',
    category: 'Electronics',
    price: 88000,
    image: './assets/products/speaker-sonic.jpg',
    description: 'Portable cylindrical wireless Bluetooth speaker featuring HavyBass output, FM radio, and top control buttons.',
    specs: 'Wireless Bluetooth · Heavy Bass · Carry Loop'
  },
  {
    id: 'tez-el-07',
    name: 'Oraimo SpaceBox 8W Portable FM Speaker',
    category: 'Electronics',
    price: 48000,
    image: './assets/products/speaker-fm.webp',
    description: 'Compact 8W spherical portable Bluetooth speaker with built-in FM radio and fabric acoustic mesh.',
    specs: '8W Output · Bluetooth + FM · Space Grey'
  },
  {
    id: 'tez-el-08',
    name: 'Oraimo Watch 6 Lite OSW-809 Smartwatch',
    category: 'Electronics',
    price: 79000,
    image: './assets/products/smartwatch-only.jpg',
    description: 'Square HD smartwatch in matte black for WhatsApp notifications, step tracking, heart rate, and daily alarms.',
    specs: 'OSW-809 · HD Touch Display · Black'
  },
  {
    id: 'tez-el-09',
    name: 'Oraimo Watch Nova 2 Lite 1.93" AMOLED',
    category: 'Electronics',
    price: 75000,
    image: './assets/products/smartwatch-amoled.webp',
    description: 'Full-touch 1.93-inch AMOLED colour screen smartwatch with fitness modes and smartphone call alerts.',
    specs: '1.93" AMOLED · Full Touch · Bluetooth Calls'
  },
  {
    id: 'tez-el-10',
    name: 'Oraimo Watch 5 Lite 2.01" IP68 Smartwatch',
    category: 'Electronics',
    price: 39100,
    image: './assets/products/smartwatch.jpg',
    description: 'Water-resistant IP68 smartwatch with 2.01-inch HD screen, 100+ sports modes, and wireless calling.',
    specs: '2.01" HD · IP68 · Wireless Calling'
  },
  {
    id: 'tez-el-11',
    name: 'Oraimo HyperGaN 65W Fast Wall Charger Kit',
    category: 'Electronics',
    price: 159300,
    image: './assets/products/charger-gan65w.jpg',
    description: 'High-speed 65W dual-port GaN wall adapter block capable of fast-charging laptops, tablets, and smartphones.',
    specs: '65W GaN PD · Dual USB-C + USB-A · Fast Charge'
  },
  {
    id: 'tez-el-12',
    name: 'Oraimo Firefly 3 Fast Charger Kit (Adapter + Cable)',
    category: 'Electronics',
    price: 19000,
    image: './assets/products/charger-wall.webp',
    description: 'Compact 2A wall charger adapter bundled with a durable fast-charging data cable for everyday phone charging.',
    specs: 'Wall Adapter + Charging Cable · Surge Safe'
  },
  {
    id: 'tez-el-13',
    name: 'Oraimo Foldable Braided USB Type-C Cable',
    category: 'Electronics',
    price: 15000,
    image: './assets/products/usb-c-cable.jpg',
    description: 'Reinforced nylon-braided USB Type-C cable with velcro strap for tangle-free fast charging and data sync.',
    specs: '1m Braided · Type-C Fast Charge & Data'
  },
  {
    id: 'tez-el-14',
    name: 'Oraimo Type-C USB Data & Charging Cable',
    category: 'Electronics',
    price: 14875,
    image: './assets/products/usb-cable-black.jpg',
    description: 'Heavy-duty black USB-A to Type-C fast charging and high-speed data transfer cable for Android devices.',
    specs: 'USB-A to Type-C · 3A Fast Charge · Black'
  },
  {
    id: 'tez-el-15',
    name: 'Oraimo BoomPop N ANC Over-Ear Headphones',
    category: 'Electronics',
    price: 98000,
    image: './assets/products/headphones-anc.webp',
    description: 'Over-ear wireless Bluetooth headphones featuring active noise cancellation and plush ear cushions for focused study.',
    specs: 'Over-Ear · Hybrid ANC · 60-Hr Playtime'
  },

  // ===========================================================================
  // 2. FASHION (15 products — Jumia Uganda current UGX prices)
  // ===========================================================================
  {
    id: 'tez-fa-01',
    name: 'Free-Size Casual Everyday Campus Dress',
    category: 'Fashion',
    price: 50000,
    image: './assets/products/dress-casual.webp',
    description: 'Comfortable, breathable casual dress suited for university lectures, campus events, and weekend outings.',
    specs: 'Free Size · Breathable Fabric · Casual Fit'
  },
  {
    id: 'tez-fa-02',
    name: 'Modern Contrast Blue Casual Sneakers',
    category: 'Fashion',
    price: 55000,
    image: './assets/products/sneakers-blue.webp',
    description: 'Color-block blue and white lace-up trainers with cushioned sole for comfortable daily walking around campus.',
    specs: 'Contrast Blue · Cushioned Outsole'
  },
  {
    id: 'tez-fa-03',
    name: 'Structured Multi-Pocket Laptop Backpack',
    category: 'Fashion',
    price: 95000,
    image: './assets/products/backpack.jpg',
    description: 'Water-resistant structured navy laptop backpack with padded 15.6" sleeve and zippered organizer pockets.',
    specs: 'Fits 15.6" Laptop · Water-Resistant',
    featured: true
  },
  {
    id: 'tez-fa-04',
    name: 'Bekia Men Outdoor Non-Slip Sports Sneakers',
    category: 'Fashion',
    price: 35680,
    image: './assets/products/sneakers-sports-men.webp',
    description: 'High-top red and black sports sneakers with grippy non-slip rubber sole for daily commuting and court wear.',
    specs: 'Sizes 40–44 · Non-Slip Rubber Sole'
  },
  {
    id: 'tez-fa-05',
    name: 'Men Business Leather Belt (Automatic Buckle)',
    category: 'Fashion',
    price: 19900,
    image: './assets/products/leather-belt.jpg',
    description: 'Classic black genuine-look leather dress belt featuring a polished silver automatic slide buckle.',
    specs: '120cm Leather Strap · Silver Auto Buckle'
  },
  {
    id: 'tez-fa-06',
    name: 'BINBOND Men Silver Quartz Steel Watch',
    category: 'Fashion',
    price: 36385,
    image: './assets/products/watch-silver.webp',
    description: 'Classic silver stainless steel wristwatch with date window and luminous hands for lectures and presentations.',
    specs: 'Quartz Movement · Stainless Steel Band'
  },
  {
    id: 'tez-fa-07',
    name: 'ASHION Men Breathable Canvas Lace-Up Shoes',
    category: 'Fashion',
    price: 39890,
    image: './assets/products/canvas-shoes.jpg',
    description: 'Navy-blue low-top canvas lace-up sneakers with vulcanized white rubber soles for lightweight everyday wear.',
    specs: 'Sizes 39–45 · Navy Breathable Canvas'
  },
  {
    id: 'tez-fa-08',
    name: 'Bekia Breathable Casual Sports Sneakers',
    category: 'Fashion',
    price: 27500,
    image: './assets/products/sneakers-women-sport.webp',
    description: 'Lightweight off-white and red casual running and walking sneakers with breathable mesh upper.',
    specs: 'Breathable Mesh · Cushioned Sole'
  },
  {
    id: 'tez-fa-09',
    name: 'Fuxing Everyday White Gum-Sole Sneakers',
    category: 'Fashion',
    price: 29500,
    image: './assets/products/sneakers-only.jpg',
    description: 'Versatile white low-top casual sneakers with classic gum rubber outsole for campus and errands.',
    specs: 'White / Gum Sole · Lace-Up'
  },
  {
    id: 'tez-fa-10',
    name: 'Sport Fashion All-Black Sculpted Sneakers',
    category: 'Fashion',
    price: 45000,
    image: './assets/products/sneakers-allblack.jpg',
    description: 'Minimalist all-black knitted athletic running sneakers with shock-absorbing sculpted midsole.',
    specs: 'All-Black · Knitted Mesh · Sculpted Sole'
  },
  {
    id: 'tez-fa-11',
    name: 'Denggao 14.5-Inch School Backpack Rucksack',
    category: 'Fashion',
    price: 65000,
    image: './assets/products/backpack.jpg',
    description: 'Durable 14.5-inch leisure and university rucksack with dual side bottle pockets and padded shoulder straps.',
    specs: '14.5-Inch Fit · Padded Straps'
  },
  {
    id: 'tez-fa-12',
    name: 'STY Ladies Faux-Leather Daypack Backpack',
    category: 'Fashion',
    price: 29990,
    image: './assets/products/backpack-ladies.webp',
    description: 'Compact women’s structured daypack backpack ideal for notebooks, tablet, umbrella, and personal essentials.',
    specs: 'Compact Daypack · Adjustable Straps'
  },
  {
    id: 'tez-fa-13',
    name: 'Mateamoda Men Ratchet Automatic Buckle Belt',
    category: 'Fashion',
    price: 20000,
    image: './assets/products/belt-ratchet.jpg',
    description: 'Versatile black men’s formal and casual belt with micro-adjustable ratchet track and quick-release lever.',
    specs: 'Ratchet Track Buckle · Men'
  },
  {
    id: 'tez-fa-14',
    name: 'Unisex UV400 Black Fashion Sunglasses',
    category: 'Fashion',
    price: 15000,
    image: './assets/products/sunglasses-mirrored.webp',
    description: 'Lightweight UV400 dark-tinted sunglasses for sunny campus walks between Seeta and Mukono.',
    specs: 'UV400 Lenses · Unisex Frame'
  },
  {
    id: 'tez-fa-15',
    name: 'Photochromic Anti-Blue Light Computer Glasses',
    category: 'Fashion',
    price: 10600,
    image: './assets/products/glasses-bluelight.webp',
    description: 'Dual-use anti-blue-light and UV photochromic glasses designed for laptop study sessions and outdoor sun.',
    specs: 'Photochromic · Anti-Blue Light + UV'
  },

  // ===========================================================================
  // 3. PERSONAL CARE (15 products — Jumia Uganda current UGX prices)
  // ===========================================================================
  {
    id: 'tez-pc-01',
    name: 'Vaseline Lip Therapy Original Tin 20g',
    category: 'Personal Care',
    price: 6800,
    image: './assets/products/vaseline-lip-tin.jpg',
    description: 'Compact 20g blue pocket tin of original Vaseline petroleum lip balm to soothe and lock in lip moisture.',
    specs: '20g Pocket Tin · Original Formula'
  },
  {
    id: 'tez-pc-02',
    name: 'Vaseline Daily Brightening Body Oil 200ml',
    category: 'Personal Care',
    price: 32200,
    image: './assets/products/body-oil-brightening.jpg',
    description: 'Fast-absorbing 200ml golden body oil formulated to nourish, soften, and brighten dry skin.',
    specs: '200ml Pump Bottle · Daily Brightening'
  },
  {
    id: 'tez-pc-03',
    name: 'Vaseline Calm Healing Body Gel Oil 200ml',
    category: 'Personal Care',
    price: 30800,
    image: './assets/products/body-oil.jpg',
    description: 'Soothing 200ml body oil dispenser enriched with restorative moisture for smooth, glowing skin.',
    specs: '200ml Dispenser · Restorative Moisture'
  },
  {
    id: 'tez-pc-04',
    name: 'Vaseline Lip Therapy Rosy Tinted Stick 4.8g',
    category: 'Personal Care',
    price: 22000,
    image: './assets/products/lip-balm-rosy.webp',
    description: 'Tinted Rosy Lips moisturizing stick balm for everyday pocket carry and soft natural shine.',
    specs: '4.8g Twist Stick · Rosy Tint'
  },
  {
    id: 'tez-pc-05',
    name: 'Raw Shea Deep Hydration Body Cream 150ml',
    category: 'Personal Care',
    price: 35100,
    image: './assets/products/cream-jar.jpg',
    description: 'Rich whipped shea butter body cream in a wide-mouth jar for elbows, knees, and dry skin relief.',
    specs: '150ml Jar · Raw Shea Butter'
  },
  {
    id: 'tez-pc-06',
    name: 'Olay Ultra Moisture Shea Butter Body Wash 500ml',
    category: 'Personal Care',
    price: 40000,
    image: './assets/products/body-wash.webp',
    description: 'Creamy moisturizing liquid shower gel and body wash infused with shea butter and vitamin B3.',
    specs: '500ml Bottle · Shea Butter Body Wash'
  },
  {
    id: 'tez-pc-07',
    name: 'Vaseline Original Pure Petroleum Jelly 100ml',
    category: 'Personal Care',
    price: 15750,
    image: './assets/products/vaseline-jelly.jpg',
    description: 'Triple-purified 100ml Vaseline Original petroleum jelly jar with flip-top cap for whole-body skin protection.',
    specs: '100ml Jar · 100% Pure Petroleum Jelly'
  },
  {
    id: 'tez-pc-08',
    name: 'Vaseline Cocoa Butter Deep Moisture Lotion 400ml',
    category: 'Personal Care',
    price: 35100,
    image: './assets/products/lotion-cocoaglow.jpg',
    description: 'Rich cocoa butter and vitamin E body lotion in a 400ml pump bottle for glowing, hydrated skin.',
    specs: '400ml Pump · Cocoa Butter & Vitamin E'
  },
  {
    id: 'tez-pc-09',
    name: 'NIVEA Intense Hydration Aloe Body Lotion 400ml',
    category: 'Personal Care',
    price: 30000,
    image: './assets/products/nivea-hydration.jpg',
    description: 'NIVEA 400ml deep moisture serum body lotion enriched with aloe vera for 48-hour dry skin hydration.',
    specs: '400ml Pump Bottle · Deep Moisture Serum'
  },
  {
    id: 'tez-pc-10',
    name: 'Natural Unstoppable Solid Deodorant Stick 75g',
    category: 'Personal Care',
    price: 16000,
    image: './assets/products/deodorant-stick.jpg',
    description: 'Gentle aluminum-free solid deodorant stick providing clean all-day underarm odour protection.',
    specs: '75g Twist Stick · All-Day Fresh'
  },
  {
    id: 'tez-pc-11',
    name: 'Vaseline Men Body & Face Revitalizing Lotion 400ml',
    category: 'Personal Care',
    price: 30000,
    image: './assets/products/lotion-men.webp',
    description: 'Fast-absorbing non-greasy 400ml daily body and face lotion formulated for men’s skin.',
    specs: '400ml · Men Body & Face Lotion',
    featured: true
  },
  {
    id: 'tez-pc-12',
    name: 'Fresh Aloe & Mint 48H Anti-Perspirant Spray 150ml',
    category: 'Personal Care',
    price: 14300,
    image: './assets/products/deodorant-spray.jpg',
    description: '48-hour refreshing aloe vera and mint anti-perspirant deodorant body spray can.',
    specs: '150ml Aerosol Spray · 48h Protection'
  },
  {
    id: 'tez-pc-13',
    name: 'Colgate Herbal Mint Fluoride Toothpaste 150g',
    category: 'Personal Care',
    price: 12000,
    image: './assets/products/toothpaste-herbal.jpg',
    description: 'Family-size 150g herbal mint fluoride toothpaste combining natural herb extracts for cavity protection.',
    specs: '150g Tube + Box · Herbal Mint'
  },
  {
    id: 'tez-pc-14',
    name: 'Herbal Mint Fluoride Toothpaste Compact 70g',
    category: 'Personal Care',
    price: 9000,
    image: './assets/products/toothpaste-compact.jpg',
    description: 'Compact tube of herbal mint fluoride toothpaste ideal for hostel washbags and travel.',
    specs: 'Compact Tube · Fresh Mint'
  },
  {
    id: 'tez-pc-15',
    name: 'Lux Fresh Glow & Soften Bathing Soap 128g',
    category: 'Personal Care',
    price: 4500,
    image: './assets/products/soap-lux.jpg',
    description: 'Fragrant pink beauty bathing bar soap formulated to leave skin soft and delicately scented.',
    specs: '128g Beauty Bar · Pink Floral'
  },

  // ===========================================================================
  // 4. KITCHEN TOOLS (15 products — Jumia Uganda current UGX prices)
  // ===========================================================================
  {
    id: 'tez-kt-01',
    name: 'Panda 2L Stainless Steel Electric Kettle',
    category: 'Kitchen Tools',
    price: 20980,
    image: './assets/products/kettle.jpg',
    description: 'Fast-boiling 2.0L brushed stainless steel cordless electric kettle with water-level window and auto shut-off.',
    specs: '2.0 Liters · 1500W · Auto Shut-Off',
    featured: true
  },
  {
    id: 'tez-kt-02',
    name: 'Stainless Steel Cooking Pot with Tempered Glass Lid',
    category: 'Kitchen Tools',
    price: 45000,
    image: './assets/products/cooking-pot.webp',
    description: 'Durable polished stainless steel two-handle cooking pot with vented glass lid for rice, stews, and pasta.',
    specs: 'Stainless Steel · Vented Glass Lid'
  },
  {
    id: 'tez-kt-03',
    name: '26cm Black Non-Stick Frying Skillet Pan',
    category: 'Kitchen Tools',
    price: 18500,
    image: './assets/products/frying-pan-single.webp',
    description: 'Everyday 26cm non-stick frying pan with cool-touch handle for eggs, chapati, pancakes, and quick student meals.',
    specs: '26cm Diameter · Non-Stick Coating'
  },
  {
    id: 'tez-kt-04',
    name: 'Heavy-Duty Deep Non-Stick Chef Frying Pan',
    category: 'Kitchen Tools',
    price: 38000,
    image: './assets/products/frying-pan-black.jpg',
    description: 'Thick-base anodized black non-stick skillet with riveted stainless steel handle for even heat distribution.',
    specs: 'Deep Wall · Riveted Steel Handle'
  },
  {
    id: 'tez-kt-05',
    name: 'Pixel 1.5L 2-in-1 Countertop Blender with Grinder',
    category: 'Kitchen Tools',
    price: 44800,
    image: './assets/products/blender-2in1.webp',
    description: '1.5L multi-speed countertop fruit smoothie blender with pulse function for hostel and home kitchens.',
    specs: '1.5L Jar · Multi-Speed + Pulse'
  },
  {
    id: 'tez-kt-06',
    name: 'Electric Hand Immersion Stick Blender',
    category: 'Kitchen Tools',
    price: 49900,
    image: './assets/products/blender-unbreakable.webp',
    description: 'Compact handheld electric immersion blender with stainless steel blades for soups, smoothies, and sauces.',
    specs: 'Handheld Stick Blender · Stainless Blade'
  },
  {
    id: 'tez-kt-07',
    name: 'Stainless Kitchen Knife Set with Wooden Chopping Board',
    category: 'Kitchen Tools',
    price: 25000,
    image: './assets/products/knife-board-set.jpg',
    description: 'Complete starter prep set containing 3 stainless steel kitchen knives and a thick hardwood chopping board.',
    specs: '3 Stainless Knives + Hardwood Board'
  },
  {
    id: 'tez-kt-08',
    name: 'Natural Bamboo Kitchen Cutting & Chopping Board',
    category: 'Kitchen Tools',
    price: 22000,
    image: './assets/products/chopping-boards.webp',
    description: 'Easy-clean rectangular bamboo chopping board with carry handle cutout for vegetables, fruits, and meat.',
    specs: 'Thick Bamboo · Juice Groove & Handle'
  },
  {
    id: 'tez-kt-09',
    name: 'Tankoo 3.0L Double-Wall Hot & Cold Vacuum Flask',
    category: 'Kitchen Tools',
    price: 28500,
    image: './assets/products/vacuum-flask-3l.jpg',
    description: 'Large 3.0L insulated stainless steel vacuum thermos flask with press-lever pour spout to keep tea or water hot all day.',
    specs: '3.0 Liters · Press Pour · 24H Hot/Cold'
  },
  {
    id: 'tez-kt-10',
    name: 'Sundabest 3L Unbreakable Stainless Vacuum Flask',
    category: 'Kitchen Tools',
    price: 60000,
    image: './assets/products/flask-stainless.jpg',
    description: 'Heavy-duty 3.0L unbreakable brushed stainless steel thermal airpot flask for hostels and shared kitchens.',
    specs: '3.0 Liters · Unbreakable Stainless Steel'
  },
  {
    id: 'tez-kt-11',
    name: '6-Piece Glazed Ceramic Dinner Plates Set',
    category: 'Kitchen Tools',
    price: 27000,
    image: './assets/products/dinner-plates.webp',
    description: 'Set of 6 sturdy rimmed ceramic dinner plates suitable for daily meals and microwave reheating.',
    specs: '6 Plates · Microwave-Safe Ceramic'
  },
  {
    id: 'tez-kt-12',
    name: '24-Piece Black Line Plates, Bowls & Cups Set',
    category: 'Kitchen Tools',
    price: 72000,
    image: './assets/products/dinnerware-24pc.jpg',
    description: 'Coordinated 24-piece minimalist black-rim ceramic dinnerware set including dinner plates, side plates, soup bowls, and cups.',
    specs: '24 Pieces · Minimalist Black Line'
  },
  {
    id: 'tez-kt-13',
    name: '36-Piece Black Line Complete Dinnerware & Tea Set',
    category: 'Kitchen Tools',
    price: 95000,
    image: './assets/products/dinnerware-36pc.jpg',
    description: 'Complete 36-piece dining and tea service with plates, bowls, cups, saucers, teapot, and matte black cutlery.',
    specs: '36 Pieces · Complete Service for 6'
  },
  {
    id: 'tez-kt-14',
    name: '5-Piece Airtight Clear Food Storage Container Set',
    category: 'Kitchen Tools',
    price: 44635,
    image: './assets/products/food-containers-clear.jpg',
    description: '5-piece nesting BPA-free clear pantry and fridge storage containers (0.4L to 4.0L) with silicone-seal locking lids.',
    specs: '5 Sizes (0.4L–4.0L) · Locking Lids'
  },
  {
    id: 'tez-kt-15',
    name: 'Stackable Insulated Multi-Tier Food Lunch Box',
    category: 'Kitchen Tools',
    price: 32000,
    image: './assets/products/food-containers-color.webp',
    description: 'Leak-resistant multi-compartment insulated lunch container with snap latches for carrying warm meals to campus.',
    specs: 'Multi-Layer · Snap Latches'
  },

  // ===========================================================================
  // 5. STATIONERY (15 products — Jumia Uganda current UGX prices)
  // ===========================================================================
  {
    id: 'tez-st-01',
    name: 'Picfare Exercise Books 96 Pages (Dozen of 12)',
    category: 'Stationery',
    price: 19500,
    image: './assets/products/exercise-books-blue.jpg',
    description: 'Dozen pack of 12 standard blue-cover 96-page ruled school exercise books for lecture notes and assignments.',
    specs: '12 Books · 96 Pages · Blue Cover',
    badge: '12-Pack',
    featured: true
  },
  {
    id: 'tez-st-02',
    name: 'A4 Spiral Ruled Study Notebooks & Gel Pens (2-Pack)',
    category: 'Stationery',
    price: 26550,
    image: './assets/products/exercise-notebooks.jpg',
    description: 'Twin pack of twin-wire spiral hardcover A4 study notebooks paired with smooth-writing black gel pens.',
    specs: '2 Spiral Books + 2 Gel Pens · A4'
  },
  {
    id: 'tez-st-03',
    name: 'Stabilo Pastel Chisel-Tip Highlighters (4-Pack)',
    category: 'Stationery',
    price: 14500,
    image: './assets/products/markers-set.jpg',
    description: 'Set of 4 anti-dry-out pastel chisel-tip highlighters (yellow, pink, blue, green) for marking revision notes.',
    specs: '4 Highlighters · Pastel Assorted'
  },
  {
    id: 'tez-st-04',
    name: 'Complete Campus Study Desk Stationery Bundle',
    category: 'Stationery',
    price: 48000,
    image: './assets/products/stationery.jpg',
    description: 'All-in-one semester starter bundle with spiral notebooks, highlighters, pens, and scientific calculator.',
    specs: 'Notebooks + Highlighters + Pens + Calculator'
  },
  {
    id: 'tez-st-05',
    name: 'Exercise Books & Hardcover Counter Books Combo',
    category: 'Stationery',
    price: 70200,
    image: './assets/products/counter-books-6pk.jpg',
    description: 'Full semester pack combining a dozen blue 96-page exercise books with 3 A4 hardcover counter books.',
    specs: '12 Exercise Books + 3 Counter Books'
  },
  {
    id: 'tez-st-06',
    name: 'A4 Black Hardcover Record / Counter Books (3-Pack)',
    category: 'Stationery',
    price: 35625,
    image: './assets/products/counter-books-black.jpg',
    description: 'Pack of 3 thick A4 black hardcover 200-page counter books with reinforced red-and-black spine binding.',
    specs: 'A4 Size · 200 Pages · 3 Hardcover Books'
  },
  {
    id: 'tez-st-07',
    name: 'Bic Ballpoint Blue Pens (Box of 50)',
    category: 'Stationery',
    price: 31950,
    image: './assets/products/bic-pens-box50.jpg',
    description: 'Full wholesale box of 50 smooth-writing blue ballpoint pens with bonus whiteboard marker and ruler.',
    specs: '50 Pens · Blue Ink · Box Pack',
    badge: 'Box of 50'
  },
  {
    id: 'tez-st-08',
    name: 'Bic Cristal Original Medium Blue Pens (50-Pack)',
    category: 'Stationery',
    price: 36500,
    image: './assets/products/bic-cristal-50pk.jpg',
    description: 'Classic transparent hexagonal Bic Cristal 1.0mm blue ballpoint pens in a 50-count study pack.',
    specs: '50 Pens · Medium 1.0mm · Blue'
  },
  {
    id: 'tez-st-09',
    name: 'Bic Dry-Erase Red Whiteboard Marker & Ruler Set',
    category: 'Stationery',
    price: 6500,
    image: './assets/products/whiteboard-marker-red.jpg',
    description: 'Bold red dry-erase whiteboard marker paired with a clear 30cm metric ruler for seminars and diagrams.',
    specs: 'Dry-Erase Red Marker + 30cm Ruler'
  },
  {
    id: 'tez-st-10',
    name: '12-Digit Solar & Battery LCD Desktop Calculator',
    category: 'Stationery',
    price: 21995,
    image: './assets/products/calculator-desktop.jpg',
    description: 'Large-button 12-digit dual-power solar and battery calculator for accounting, business, and finance units.',
    specs: '12 Digits · Solar + Battery · Black'
  },
  {
    id: 'tez-st-11',
    name: 'Casio Natural-V.P.A.M. Student Scientific Calculator',
    category: 'Stationery',
    price: 26700,
    image: './assets/products/calculator-scientific.jpg',
    description: 'Multi-function 2-line textbook-display scientific calculator for engineering, statistics, and mathematics exams.',
    specs: 'Scientific · Natural Textbook Display'
  },
  {
    id: 'tez-st-12',
    name: '30cm / 12-Inch Clear Plastic School Rulers (6-Pack)',
    category: 'Stationery',
    price: 8750,
    image: './assets/products/rulers-6pk.jpg',
    description: 'Set of shatter-resistant clear 30cm metric and inch rulers for technical drawing and coursework.',
    specs: '30cm / 12" · Clear Metric & Inch'
  },
  {
    id: 'tez-st-13',
    name: 'A4 PU Leather Zippered Conference Folder with Calculator',
    category: 'Stationery',
    price: 94500,
    image: './assets/products/portfolio-calculator.jpg',
    description: 'Black PU leather A4 zippered conference portfolio with built-in 12-digit solar calculator, pen loop, card slots, and ruled pad.',
    specs: 'A4 · Zippered PU Leather · Built-in Calculator'
  },
  {
    id: 'tez-st-14',
    name: 'Executive Conference Padfolio + A4 Copy Paper Combo',
    category: 'Stationery',
    price: 195000,
    image: './assets/products/padfolio-folder.jpg',
    description: 'Final-year dissertation and internship combo featuring an executive calculator portfolio folder and a 5-ream A4 paper carton.',
    specs: 'A4 Portfolio Folder + 5-Ream Paper Carton'
  },
  {
    id: 'tez-st-15',
    name: 'Premium A4 80gsm 500-Sheet Copy Paper (5-Ream Carton)',
    category: 'Stationery',
    price: 120000,
    image: './assets/products/a4-paper-carton.jpg',
    description: 'Bulk carton of 5 reams (2,500 sheets) bright white 80gsm A4 multipurpose paper for printing and photocopying.',
    specs: '5 Reams × 500 Sheets · 80gsm A4 White'
  },

  // ===========================================================================
  // 6. GROCERIES (15 products — Jumia Uganda current UGX prices)
  // ===========================================================================
  {
    id: 'tez-gr-01',
    name: 'SWT Delight Long Grain White Rice 5kg',
    category: 'Groceries',
    price: 23550,
    image: './assets/products/rice-super-5kg.webp',
    description: 'Clean, stone-free, quick-cooking 5kg bag of SWT Delight long-grain white rice for hostel and family meals.',
    specs: '5kg Bag · Long Grain White Rice',
    badge: '5kg Bag',
    featured: true
  },
  {
    id: 'tez-gr-02',
    name: 'Numa Super Aromatic White Rice 5kg',
    category: 'Groceries',
    price: 36800,
    image: './assets/products/rice-super-5kg.webp',
    description: 'Premium grade Ugandan aromatic super white rice packed in a sealed 5kg household bag.',
    specs: '5kg Bag · Super Aromatic'
  },
  {
    id: 'tez-gr-03',
    name: 'Oat Bakery Whole Grain Crunchy Oat Biscuits 200g',
    category: 'Groceries',
    price: 8500,
    image: './assets/products/biscuits-pack.jpg',
    description: 'Fibre-rich whole-grain oat breakfast biscuits with berries for quick morning energy before lectures.',
    specs: '200g Pack · Whole Grain Oats'
  },
  {
    id: 'tez-gr-04',
    name: 'Sunripened Pure Natural Mango Juice 500ml',
    category: 'Groceries',
    price: 6500,
    image: './assets/products/mango-juice.jpg',
    description: 'Chilled-ready 500ml glass bottle of pure pressed tropical mango fruit juice with no artificial sweeteners.',
    specs: '500ml Glass Bottle · 100% Pure Mango'
  },
  {
    id: 'tez-gr-05',
    name: 'Sunseed Pure Sunflower Cooking Oil 5 Liters',
    category: 'Groceries',
    price: 45300,
    image: './assets/products/cooking-oil-bottle.webp',
    description: 'Refined cholesterol-free pure sunflower cooking oil enriched with Vitamin A for frying and everyday cooking.',
    specs: '5 Liters · Pure Sunflower Oil'
  },
  {
    id: 'tez-gr-06',
    name: 'Fortune Refined Sunflower Cooking Oil 3 Liters',
    category: 'Groceries',
    price: 28900,
    image: './assets/products/cooking-oil-bottle.webp',
    description: 'Light, neutral-tasting 3-liter bottle of Fortune sunflower cooking oil ideal for student kitchens.',
    specs: '3 Liters · Refined Cooking Oil'
  },
  {
    id: 'tez-gr-07',
    name: 'Kinyara Sweet Brown Cane Sugar 1kg',
    category: 'Groceries',
    price: 3700,
    image: './assets/products/sugar-kinyara-1kg.jpg',
    description: 'Locally milled 1kg sealed pack of natural Ugandan brown cane sugar for tea, coffee, and porridge.',
    specs: '1kg Pack · Natural Cane Sugar'
  },
  {
    id: 'tez-gr-08',
    name: 'Lato Instant Whole Milk Powder Pouch 400g',
    category: 'Groceries',
    price: 19000,
    image: './assets/products/milk-powder-400g.jpg',
    description: 'Resealable 400g pouch of instant full-cream whole milk powder—stays fresh without a fridge in hostels.',
    specs: '400g Resealable Pouch · Full Cream'
  },
  {
    id: 'tez-gr-09',
    name: 'JESA Farm Fresh UHT Whole Milk 1 Liter',
    category: 'Groceries',
    price: 4500,
    image: './assets/products/milk-uht-carton.webp',
    description: 'Long-life 1-liter carton of farm-fresh pasteurized whole milk for breakfast cereal, tea, and coffee.',
    specs: '1 Liter Carton · Whole Milk'
  },
  {
    id: 'tez-gr-10',
    name: 'Nescafe Classic Instant Coffee Glass Jar 100g',
    category: 'Groceries',
    price: 40500,
    image: './assets/products/nescafe-coffee-100g.webp',
    description: '100g glass jar of rich dark-roast Nescafe Classic instant coffee for early morning classes and late revision.',
    specs: '100g Glass Jar · Pure Instant Coffee'
  },
  {
    id: 'tez-gr-11',
    name: 'Kericho Gold String & Tag Black Tea Bags (50 pcs)',
    category: 'Groceries',
    price: 18500,
    image: './assets/products/tea-bags-50pk.jpg',
    description: 'Box of 50 individually string-and-tag East African black tea bags for brisk, aromatic hot tea.',
    specs: '50 Tea Bags · String & Tag'
  },
  {
    id: 'tez-gr-12',
    name: 'Indomie Chicken Flavour Instant Noodles 70g (5-Pack)',
    category: 'Groceries',
    price: 4000,
    image: './assets/products/indomie-noodles-5pk.jpg',
    description: 'Bundle of 5 individual 70g chicken-flavour instant noodle packs with seasoning—ready in 3 minutes.',
    specs: '5 × 70g Packs · Chicken Flavour'
  },
  {
    id: 'tez-gr-13',
    name: 'Santa Lucia Durum Wheat Spaghetti Pasta 500g',
    category: 'Groceries',
    price: 4000,
    image: './assets/products/spaghetti-500g.jpg',
    description: '500g pack of non-sticky durum-wheat spaghetti pasta for quick, filling hostel dinners.',
    specs: '500g Pack · Durum Wheat Spaghetti'
  },
  {
    id: 'tez-gr-14',
    name: 'JOHA White & Sifted Maize Flour 2kg',
    category: 'Groceries',
    price: 5000,
    image: './assets/products/maize-flour-2kg.jpg',
    description: 'Fine sifted 2kg bag of pure white maize meal flour for smooth posho (ugali) and morning porridge.',
    specs: '2kg Bag · White Sifted Maize Flour'
  },
  {
    id: 'tez-gr-15',
    name: 'Blue Band Smooth Roasted Peanut Butter 400g',
    category: 'Groceries',
    price: 13000,
    image: './assets/products/peanut-butter-400g.jpg',
    description: 'Creamy 400g jar of protein-rich smooth roasted peanut butter spread for bread, crackers, and porridge.',
    specs: '400g Jar · 100% Roasted Peanuts'
  },

  // ===========================================================================
  // 7. HOUSEHOLD ESSENTIALS (15 products — Jumia Uganda current UGX prices)
  // ===========================================================================
  {
    id: 'tez-hh-01',
    name: 'Omo Hand Washing Laundry Detergent Powder 1kg',
    category: 'Household Essentials',
    price: 23500,
    image: './assets/products/omo-washing-powder.jpg',
    description: 'Fast-action stain-removing 1kg hand-washing laundry detergent powder with fresh floral scent.',
    specs: '1kg Resealable Bag · Hand Wash Powder',
    featured: true
  },
  {
    id: 'tez-hh-02',
    name: '3-in-1 Concentrated Laundry Detergent Pods (42-Count)',
    category: 'Household Essentials',
    price: 38000,
    image: './assets/products/laundry-detergent.jpg',
    description: 'Resealable pouch of 42 pre-measured 3-in-1 laundry detergent pacs for deep cleaning and fabric brightening.',
    specs: '42 Laundry Pacs · Original Scent'
  },
  {
    id: 'tez-hh-03',
    name: 'Mambo Soft 2-Ply Toilet Paper Value Pack (10 Rolls)',
    category: 'Household Essentials',
    price: 4800,
    image: './assets/products/toilet-paper-10pk.jpg',
    description: 'Economical 10-roll value pack of soft 2-ply white toilet tissue rolls for hostel rooms and apartments.',
    specs: '10 Rolls · 2-Ply Soft & Strong'
  },
  {
    id: 'tez-hh-04',
    name: 'Toilex Ultra Comfort Mega Toilet Rolls (12-Pack)',
    category: 'Household Essentials',
    price: 7600,
    image: './assets/products/toilet-paper-pack.jpg',
    description: 'Bulk bundle of thick, absorbent 2-ply toilet tissue rolls built to last through the semester.',
    specs: '12 Mega Rolls · Ultra Comfort 2-Ply'
  },
  {
    id: 'tez-hh-05',
    name: 'Soft 2-Ply Facial Tissue Pop-Up Box (200 Sheets)',
    category: 'Household Essentials',
    price: 6500,
    image: './assets/products/tissue-box.webp',
    description: 'Hygienic pop-up desk box of gentle 2-ply white facial tissues for study desks and bedside tables.',
    specs: '200 Sheets · Pop-Up Dispenser Box'
  },
  {
    id: 'tez-hh-06',
    name: 'Clean Easy Embossed Kitchen Paper Towels (Twin Pack)',
    category: 'Household Essentials',
    price: 9900,
    image: './assets/products/kitchen-towels-2pk.jpg',
    description: 'Extra-absorbent twin pack of embossed white kitchen paper towel rolls for spills, counters, and food prep.',
    specs: '2 Rolls · Extra Absorbent Embossed'
  },
  {
    id: 'tez-hh-07',
    name: 'Jik Multipurpose Household Disinfectant Bleach 750ml',
    category: 'Household Essentials',
    price: 25000,
    image: './assets/products/bleach-jik-750ml.jpg',
    description: '750ml bottle of multipurpose household bleach that whitens laundry and kills 99.9% of surface germs.',
    specs: '750ml Easy-Grip Bottle · Kills 99.9% Germs'
  },
  {
    id: 'tez-hh-08',
    name: 'Concentrated Disinfecting Household Bleach 1.8L',
    category: 'Household Essentials',
    price: 29750,
    image: './assets/products/bleach-bottle.jpg',
    description: 'Family-size 1.8L jug of concentrated disinfecting bleach for whitening whites and sanitising bathrooms.',
    specs: '1.8L Handle Jug · Disinfecting Bleach'
  },
  {
    id: 'tez-hh-09',
    name: 'Harpic Total Hygiene Angled-Neck Toilet Cleaner 500ml',
    category: 'Household Essentials',
    price: 19500,
    image: './assets/products/toilet-cleaner-500ml.jpg',
    description: '500ml angled-neck liquid toilet cleaner that reaches under the rim to remove limescale, stains, and odours.',
    specs: '500ml Angled Neck · Toilet Disinfectant'
  },
  {
    id: 'tez-hh-10',
    name: 'Dettol Antiseptic Disinfectant Liquid 250ml',
    category: 'Household Essentials',
    price: 37500,
    image: './assets/products/antiseptic-liquid-250ml.jpg',
    description: '250ml bottle of concentrated chloroxylenol antiseptic liquid for first aid, bathing water, and laundry disinfection.',
    specs: '250ml Bottle · First Aid & Hygiene'
  },
  {
    id: 'tez-hh-11',
    name: 'Dettol Original Antibacterial Protection Bar Soap 175g',
    category: 'Household Essentials',
    price: 10600,
    image: './assets/products/soap-antibacterial.jpg',
    description: '175g green antibacterial bathing and handwashing bar soap with fresh pine scent for daily germ protection.',
    specs: '175g Bar · Fresh Pine Antibacterial'
  },
  {
    id: 'tez-hh-12',
    name: 'Home Microfiber Trigger Spray Floor Mop',
    category: 'Household Essentials',
    price: 52100,
    image: './assets/products/spray-mop.jpg',
    description: 'Lightweight flat microfiber floor mop with refillable water/detergent bottle and handle spray trigger.',
    specs: 'Refillable Spray Tank · Washable Pad'
  },
  {
    id: 'tez-hh-13',
    name: 'Long-Handle Upright Broom and Clip-On Dustpan Set',
    category: 'Household Essentials',
    price: 44200,
    image: './assets/products/broom-dustpan-set.jpg',
    description: 'Stand-up sweeping broom with matching long-handle windproof dustpan—no bending required when sweeping rooms.',
    specs: 'Upright Broom + Standing Dustpan'
  },
  {
    id: 'tez-hh-14',
    name: '360° Spin Mop and Stainless Wringer Bucket Set',
    category: 'Household Essentials',
    price: 74000,
    image: './assets/products/spin-mop-bucket.jpg',
    description: 'Hands-free 360-degree stainless steel spinner wringer bucket with telescopic handle and microfiber mop head.',
    specs: 'Stainless Spinner Bucket + Telescopic Mop'
  },
  {
    id: 'tez-hh-15',
    name: 'Heavy-Duty Black Dustbin Garbage Bags (20-Pack Roll)',
    category: 'Household Essentials',
    price: 20000,
    image: './assets/products/garbage-bags-20pk.jpg',
    description: 'Roll of 20 tear-resistant 60×50cm black drawstring trash bin liner bags for hostel and kitchen bins.',
    specs: '20 Bags · Tear-Resistant · Drawstring'
  },

  // ===========================================================================
  // 8. FOOD & SNACKS (15 products — Jumia Uganda current UGX prices)
  // ===========================================================================
  {
    id: 'tez-fs-01',
    name: 'Choco-Delights Chocolate Cream Sandwich Biscuits 180g',
    category: 'Food & Snacks',
    price: 5200,
    image: './assets/products/biscuits-chococreams.jpg',
    description: 'Crunchy cocoa biscuits sandwiched with smooth chocolate cream filling for quick study-break snacking.',
    specs: '180g Pack · Chocolate Cream Sandwich'
  },
  {
    id: 'tez-fs-02',
    name: 'Choco-Delight Rich Cocoa Filling Biscuits (Twin Box)',
    category: 'Food & Snacks',
    price: 9500,
    image: './assets/products/choco-biscuits.jpg',
    description: 'Twin 250g boxes of rich cocoa-filled chocolate cream sandwich biscuits ideal for sharing in hostels.',
    specs: '2 × 250g Boxes · Rich Cocoa Filling'
  },
  {
    id: 'tez-fs-03',
    name: 'Britania Butter Biscuit Resealable Jar 1kg',
    category: 'Food & Snacks',
    price: 13200,
    image: './assets/products/biscuit-jar-butter.jpg',
    description: 'Resealable 1kg clear plastic jar filled with golden, crisp swirled butter biscuits that stay fresh on your desk.',
    specs: '1kg Resealable Jar · Butter Biscuits',
    featured: true
  },
  {
    id: 'tez-fs-04',
    name: 'Hostel Snack Combo (1kg Biscuit Jar + Biscuits + Crackers)',
    category: 'Food & Snacks',
    price: 21500,
    image: './assets/products/biscuit-jar-galaxy.jpg',
    description: 'Complete student snack bundle combining a 1kg butter biscuit jar, chocolate cream cookies, and salted crackers.',
    specs: '1kg Jar + Choco Creams + Crackers'
  },
  {
    id: 'tez-fs-05',
    name: 'Harvest Crunchy Roasted Peanut Butter Jar 340g',
    category: 'Food & Snacks',
    price: 11500,
    image: './assets/products/peanut-butter-jar.jpg',
    description: 'Crunchy golden roasted peanut butter packed with real peanut bits—great on bread, toast, and crackers.',
    specs: '340g Glass Jar · Crunchy Roasted'
  },
  {
    id: 'tez-fs-06',
    name: 'Aurora Medium-Roast Instant Coffee Jar 100g',
    category: 'Food & Snacks',
    price: 24000,
    image: './assets/products/coffee-jar.jpg',
    description: 'Aromatic 100g glass jar of freeze-dried instant coffee granules with wooden-finish screw lid.',
    specs: '100g Jar · Freeze-Dried Coffee'
  },
  {
    id: 'tez-fs-07',
    name: 'Sumz Classic Pure Butter Cookies Metal Tin 700g',
    category: 'Food & Snacks',
    price: 14700,
    image: './assets/products/cookies-tin.jpg',
    description: 'Reusable royal-blue metal gift tin filled with assorted crisp pure butter cookies and pretzels.',
    specs: '700g Metal Tin · Pure Butter Cookies'
  },
  {
    id: 'tez-fs-08',
    name: 'Deluxe Hostel Snack Hamper (Cookies Tin, Biscuits & Crisps)',
    category: 'Food & Snacks',
    price: 38000,
    image: './assets/products/snacks.jpg',
    description: 'Generous snack assortment featuring a butter cookies tin, 2 boxes of chocolate biscuits, and 2 crisps canisters.',
    specs: '5-Item Snack Hamper · Hostel Sharing'
  },
  {
    id: 'tez-fs-09',
    name: 'Savory Sea Salt & Cheddar Potato Crisps (Twin Canisters)',
    category: 'Food & Snacks',
    price: 18000,
    image: './assets/products/crisps-canisters.jpg',
    description: 'Pair of resealable potato crisps canisters in Sea Salt & Black Pepper (150g) and Golden Cheddar Cheese (120g).',
    specs: '150g + 120g Canisters · Twin Pack'
  },
  {
    id: 'tez-fs-10',
    name: 'Nutro Chocolate Cream Biscuits Carton (24 Packets)',
    category: 'Food & Snacks',
    price: 38000,
    image: './assets/products/choco-biscuits.jpg',
    description: 'Full wholesale carton of 24 individual packets of chocolate cream-filled sandwich biscuits.',
    specs: '24 Packets · Wholesale Box'
  },
  {
    id: 'tez-fs-11',
    name: 'TOOKE Wholegrain Oat & Banana Digestive Biscuits',
    category: 'Food & Snacks',
    price: 14500,
    image: './assets/products/biscuits-pack.jpg',
    description: 'Wholesome high-fibre digestive biscuits baked with whole grains for a filling between-class snack.',
    specs: 'High Fibre · Wholegrain Digestives'
  },
  {
    id: 'tez-fs-12',
    name: 'Britania Shortcake Tea-Time Biscuits Jar 1kg',
    category: 'Food & Snacks',
    price: 13200,
    image: './assets/products/biscuit-jar-butter.jpg',
    description: '1kg resealable jar of crisp golden shortcake biscuits crafted for dipping in hot tea or coffee.',
    specs: '1kg Jar · Tea-Time Shortcake'
  },
  {
    id: 'tez-fs-13',
    name: 'Everyday Crispy & Savory Salted Crackers 250g',
    category: 'Food & Snacks',
    price: 3300,
    image: './assets/products/crackers-salted.jpg',
    description: '250g pack of light, flaky square salted crackers—delicious plain or topped with peanut butter.',
    specs: '250g Pack · Salted Square Crackers'
  },
  {
    id: 'tez-fs-14',
    name: 'Pringles Sour Cream & Onion Potato Crisps 165g',
    category: 'Food & Snacks',
    price: 45000,
    image: './assets/products/pringles-sourcream.jpg',
    description: 'Full-size 165g green resealable canister of iconic Sour Cream & Onion stacked potato crisps.',
    specs: '165g Tall Canister · Sour Cream & Onion'
  },
  {
    id: 'tez-fs-15',
    name: 'Pringles Tangy Ketchup Flavoured Crisps 165g',
    category: 'Food & Snacks',
    price: 23400,
    image: './assets/products/pringles-ketchup.jpg',
    description: '165g tall red canister of zesty tomato ketchup seasoned Pringles stacked potato crisps.',
    specs: '165g Tall Canister · Ketchup Flavour'
  },

  // ===========================================================================
  // 9. OTHERS (15 products — Jumia Uganda current UGX prices)
  // ===========================================================================
  {
    id: 'tez-ot-01',
    name: 'Compact 3-Fold Automatic Travel Umbrella',
    category: 'Others',
    price: 16650,
    image: './assets/products/umbrella-compact.jpg',
    description: 'Lightweight folding black umbrella with auto open/close button and protective sleeve that fits inside a backpack.',
    specs: 'Compact 3-Fold · Auto Button + Sleeve'
  },
  {
    id: 'tez-ot-02',
    name: 'Windproof Rain Umbrella, Insulated Bottle & Torch Combo',
    category: 'Others',
    price: 65000,
    image: './assets/products/utilities.jpg',
    description: 'Complete Mukono rainy-season commuter pack with a folding umbrella, stainless vacuum bottle, and LED torch.',
    specs: 'Umbrella + 950ml Bottle + LED Torch'
  },
  {
    id: 'tez-ot-03',
    name: 'Heavy-Duty Solid Brass Security Padlock with 3 Keys',
    category: 'Others',
    price: 21250,
    image: './assets/products/padlock-brass.jpg',
    description: 'Solid brass-body security padlock with hardened steel shackle and 3 brass keys for hostel doors and metal trunks.',
    specs: 'Solid Brass · Hardened Shackle · 3 Keys'
  },
  {
    id: 'tez-ot-04',
    name: 'Three-Digit Combination Luggage & Locker Padlock',
    category: 'Others',
    price: 18500,
    image: './assets/products/padlock-combo.jpg',
    description: 'Keyless 3-digit resettable dial combination lock ideal for backpack zippers, suitcases, and gym lockers.',
    specs: '3-Digit Resettable Code · Keyless'
  },
  {
    id: 'tez-ot-05',
    name: 'Power King 4-Way Individual-Switch UK Extension Cable',
    category: 'Others',
    price: 26550,
    image: './assets/products/extension-cable-4way.jpg',
    description: 'Heavy-duty 13A 4-gang UK power extension strip with individual neon switches and long cord for laptops and kettles.',
    specs: '4-Gang 13A UK Sockets · Individual Switches',
    featured: true
  },
  {
    id: 'tez-ot-06',
    name: 'David Round Hanging Canopy Mosquito Net (4x6 / 5x6)',
    category: 'Others',
    price: 24000,
    image: './assets/products/mosquito-net.jpg',
    description: 'Breathable fine-mesh white round hanging canopy mosquito net fitting 4×6 and 5×6 hostel and bedroom beds.',
    specs: 'Fits 4×6 & 5×6 Beds · Top Hanging Ring'
  },
  {
    id: 'tez-ot-07',
    name: 'Tactical Rechargeable High-Lumen LED Torch Flashlight',
    category: 'Others',
    price: 20580,
    image: './assets/products/led-torch.jpg',
    description: 'Durable aluminum-alloy rechargeable LED flashlight torch for campus power cuts and evening walks.',
    specs: 'USB Rechargeable · High-Lumen LED'
  },
  {
    id: 'tez-ot-08',
    name: 'Dp Light Foldable Gooseneck Rechargeable LED Desk Lamp',
    category: 'Others',
    price: 18500,
    image: './assets/products/desklamp.jpg',
    description: 'Minimalist white rechargeable LED study desk lamp with flexible gooseneck arm for late-night revision during outages.',
    specs: 'Flexible Gooseneck · Eye-Care LED'
  },
  {
    id: 'tez-ot-09',
    name: 'Dp Light DP-952 Solar & USB Emergency Camping Lantern',
    category: 'Others',
    price: 22000,
    image: './assets/products/solar-lantern.jpg',
    description: 'Portable 360-degree LED lantern with top solar charging panel and carry handle for reliable backup room lighting.',
    specs: 'Solar + USB Charging · Carry Handle'
  },
  {
    id: 'tez-ot-10',
    name: 'SPJ Non-Stick Electric Dry & Steam Flat Iron Box',
    category: 'Others',
    price: 30200,
    image: './assets/products/flat-iron-box.jpg',
    description: 'Lightweight non-stick soleplate electric clothes iron with fabric temperature dial for crisp shirts and dresses.',
    specs: 'Non-Stick Soleplate · Adjustable Thermostat'
  },
  {
    id: 'tez-ot-11',
    name: 'Hydro Flow 950ml Double-Wall Insulated Stainless Bottle',
    category: 'Others',
    price: 28500,
    image: './assets/products/stainless-bottle.jpg',
    description: 'Matte grey vacuum-insulated stainless steel sports bottle with carry loop lid that keeps water cold for 24 hours.',
    specs: '950ml · Double-Wall Vacuum · Leak-Proof'
  },
  {
    id: 'tez-ot-12',
    name: 'Plush 100% Cotton Absorbent Bath & Hand Towel Set (4-Pack)',
    category: 'Others',
    price: 34888,
    image: './assets/products/towel-set-2in1.jpg',
    description: 'Stack of soft, quick-drying combed cotton bath and face towels in crisp white and dove grey.',
    specs: '100% Cotton · White & Grey Set'
  },
  {
    id: 'tez-ot-13',
    name: 'Non-Slip Wardrobe Clothes Hangers (12-Piece Pack)',
    category: 'Others',
    price: 15500,
    image: './assets/products/clothes-hangers-12pk.jpg',
    description: 'Bundle of 12 sturdy contoured clothes hangers with swivel metal hooks for organizing shirts, coats, and dresses.',
    specs: '12 Hangers · Swivel Metal Hooks'
  },
  {
    id: 'tez-ot-14',
    name: 'Bekia Multi-Tier Metal & Wood Freestanding Shoe Rack',
    category: 'Others',
    price: 36000,
    image: './assets/products/shoe-rack-4tier.jpg',
    description: 'Space-saving multi-tier freestanding shoe organizer rack that keeps hostel doorways and wardrobes neat.',
    specs: 'Multi-Tier · Black Steel Frame'
  },
  {
    id: 'tez-ot-15',
    name: 'Rechargeable Electric Plush Hot Water Warmer Bag',
    category: 'Others',
    price: 26000,
    image: './assets/products/hot-water-bag.jpg',
    description: 'Corded rechargeable electric heated velvet pouch warmer for chilly rainy nights, muscle relief, and cramps.',
    specs: 'Fast 10-Min Charge · Soft Velvet Cover'
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
