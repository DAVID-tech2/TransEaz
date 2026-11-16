/* TransEaz Marketplace View — Search, 9-Category Filter, Price Sorting & Pagination */
import { PRODUCTS, PRODUCT_CATEGORIES, CATEGORY_ICONS } from './products.js';
import { addToCart } from './cart.js';
import { Storage } from './storage.js';
import { escapeHTML, formatUGX } from './validation.js';
import { navigateTo, showToast } from './navigation.js';

const PAGE_BATCH_SIZE = 24;

let marketState = {
  search: '',
  category: 'All',
  sort: 'featured',
  onlySaved: false,
  visibleLimit: PAGE_BATCH_SIZE
};

export function setMarketplaceFilter({ category, search }) {
  if (category !== undefined) {
    marketState.category = category;
    marketState.visibleLimit = PAGE_BATCH_SIZE;
  }
  if (search !== undefined) {
    marketState.search = search;
    marketState.visibleLimit = PAGE_BATCH_SIZE;
  }
}

export function toggleWishlist(productId) {
  const current = Storage.getWishlist();
  const exists = current.includes(productId);
  const updated = exists ? current.filter((id) => id !== productId) : [...current, productId];
  Storage.saveWishlist(updated);
  showToast(exists ? 'Removed from saved items.' : 'Saved to your favourites.', 'success');
  return !exists;
}

export function renderProductCardHTML(product) {
  const wishlist = Storage.getWishlist();
  const isSaved = wishlist.includes(product.id);
  const fallbackIcon = CATEGORY_ICONS[product.category] || CATEGORY_ICONS['Others'];

  return `
    <article class="product-card" data-product-card="${escapeHTML(product.id)}">
      <div class="product-media" data-open-product="${escapeHTML(product.id)}" role="button" tabindex="0" aria-label="View details for ${escapeHTML(product.name)}">
        <img
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
          referrerpolicy="no-referrer"
          onerror="this.style.display='none';this.nextElementSibling.hidden=false;"
        />
        <div class="image-fallback" hidden>
          ${fallbackIcon}
          <span>${escapeHTML(product.category)}</span>
        </div>
        <button
          type="button"
          class="wishlist-btn ${isSaved ? 'is-saved' : ''}"
          data-wishlist-id="${escapeHTML(product.id)}"
          aria-label="${isSaved ? 'Remove from favourites' : 'Save to favourites'}"
          aria-pressed="${isSaved ? 'true' : 'false'}"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
        </button>
      </div>

      <div class="product-body">
        <div class="product-meta-line">
          <span>${escapeHTML(product.category)}</span>
          ${product.badge ? `<span aria-hidden="true">·</span><span>${escapeHTML(product.badge)}</span>` : ''}
        </div>

        <h3 class="product-title" data-open-product="${escapeHTML(product.id)}">${escapeHTML(product.name)}</h3>

        ${product.specs ? `<div class="product-specs">${escapeHTML(product.specs)}</div>` : ''}

        <div class="product-price-row">
          <span class="product-price tabular-nums">${escapeHTML(formatUGX(product.price))}</span>
          <span class="product-ref-note">Confirm via WhatsApp</span>
        </div>

        <div class="product-actions">
          <button type="button" class="btn btn--primary btn--sm" data-add-cart="${escapeHTML(product.id)}">
            Add to Cart
          </button>
          <button type="button" class="btn btn--secondary btn--sm" data-open-product="${escapeHTML(product.id)}">
            Details
          </button>
        </div>
      </div>
    </article>
  `;
}

export function bindProductGridEvents(containerEl, onWishlistChange) {
  if (!containerEl) return;

  containerEl.querySelectorAll('[data-add-cart]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-add-cart');
      addToCart(id, 1);
    });
  });

  containerEl.querySelectorAll('[data-open-product]').forEach((el) => {
    const open = (e) => {
      if (e.target.closest('[data-wishlist-id]')) return;
      const id = el.getAttribute('data-open-product');
      if (id) navigateTo(`#product/${encodeURIComponent(id)}`);
    };
    el.addEventListener('click', open);
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(e);
      }
    });
  });

  containerEl.querySelectorAll('[data-wishlist-id]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-wishlist-id');
      const saved = toggleWishlist(id);
      btn.classList.toggle('is-saved', saved);
      btn.setAttribute('aria-pressed', saved ? 'true' : 'false');
      const svg = btn.querySelector('svg');
      if (svg) svg.setAttribute('fill', saved ? 'currentColor' : 'none');
      if (typeof onWishlistChange === 'function') onWishlistChange();
    });
  });
}

function getFilteredProducts() {
  const wishlist = Storage.getWishlist();
  const q = marketState.search.trim().toLowerCase();

  const filtered = PRODUCTS.filter((p) => {
    if (marketState.category !== 'All' && p.category !== marketState.category) return false;
    if (marketState.onlySaved && !wishlist.includes(p.id)) return false;
    if (q) {
      const hay = `${p.name} ${p.description} ${p.category} ${p.specs || ''}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  if (marketState.sort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (marketState.sort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (marketState.sort === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  return filtered;
}

export function renderMarketplaceView(rootEl, routeParams) {
  if (routeParams && routeParams.get('category')) {
    const cat = routeParams.get('category');
    if (PRODUCT_CATEGORIES.includes(cat)) {
      marketState.category = cat;
      marketState.visibleLimit = PAGE_BATCH_SIZE;
    }
  }

  rootEl.innerHTML = `
    <section class="page-section view-enter">
      <div class="container">
        <div class="section-header">
          <div>
            <span class="section-kicker">TransEaz Marketplace · 9 Categories</span>
            <h1>Browse Products &amp; Everyday Essentials</h1>
            <p class="section-subtitle">
              Shop electronics, fashion, personal care, kitchen tools, stationery, groceries, household items, and snacks around Seeta University, Seeta, Mbalala, and Mukono.
            </p>
          </div>
          <a href="#procurement" class="btn btn--secondary">Request Custom Kampala Item</a>
        </div>

        <p style="font-size:0.84rem;color:var(--color-text-muted);margin-bottom:14px;">
          Prices are indicative and subject to availability. Final pricing is confirmed through WhatsApp before an order is approved.
        </p>

        <div class="toolbar-panel">
          <div class="toolbar-top">
            <div class="search-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
              <label for="marketplace-search-input" class="sr-only">Search marketplace products</label>
              <input
                id="marketplace-search-input"
                type="search"
                class="input"
                placeholder="Search products, brands, or sizes..."
                value="${escapeHTML(marketState.search)}"
              />
            </div>

            <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
              <label for="marketplace-sort" class="sr-only">Sort products</label>
              <select id="marketplace-sort" class="select" style="width:auto;min-width:175px;">
                <option value="featured" ${marketState.sort === 'featured' ? 'selected' : ''}>Sort: Recommended</option>
                <option value="price-asc" ${marketState.sort === 'price-asc' ? 'selected' : ''}>Price: Low to High</option>
                <option value="price-desc" ${marketState.sort === 'price-desc' ? 'selected' : ''}>Price: High to Low</option>
                <option value="name" ${marketState.sort === 'name' ? 'selected' : ''}>Name: A to Z</option>
              </select>

              <button type="button" id="toggle-saved-filter" class="filter-tab ${marketState.onlySaved ? 'is-active' : ''}">
                Favourites
              </button>
            </div>
          </div>

          <div class="filter-tabs" role="tablist" aria-label="Product categories">
            ${PRODUCT_CATEGORIES.map((cat) => {
              const catCount = cat === 'All'
                ? PRODUCTS.length
                : PRODUCTS.filter((p) => p.category === cat).length;
              return `
                <button
                  type="button"
                  class="filter-tab ${marketState.category === cat ? 'is-active' : ''}"
                  data-category-tab="${escapeHTML(cat)}"
                >
                  ${escapeHTML(cat)} (${catCount})
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <p id="marketplace-result-count" style="font-size:0.86rem;color:var(--color-text-muted);margin-bottom:14px;"></p>

        <div id="marketplace-grid" class="product-grid"></div>

        <div id="marketplace-load-more-wrap" style="text-align:center;margin-top:24px;" hidden>
          <button type="button" id="marketplace-load-more" class="btn btn--secondary">Load More Products</button>
        </div>
      </div>
    </section>
  `;

  const renderGrid = () => {
    const items = getFilteredProducts();
    const grid = document.getElementById('marketplace-grid');
    const countEl = document.getElementById('marketplace-result-count');
    const loadWrap = document.getElementById('marketplace-load-more-wrap');
    const loadBtn = document.getElementById('marketplace-load-more');

    const isFiltered = marketState.category !== 'All' || marketState.search.trim() !== '' || marketState.onlySaved;
    const displayedItems = isFiltered ? items : items.slice(0, marketState.visibleLimit);

    if (countEl) {
      countEl.textContent = `Showing ${displayedItems.length} of ${items.length} ${items.length === 1 ? 'product' : 'products'}${marketState.category !== 'All' ? ` in ${marketState.category}` : ''}`;
    }

    if (!grid) return;

    if (items.length === 0) {
      grid.className = '';
      if (loadWrap) loadWrap.hidden = true;
      grid.innerHTML = `
        <div class="empty-state">
          <h3>No matching products found</h3>
          <p>Try clearing your search or category filter, or submit a Kampala Procurement request if you need a specific item sourced for you.</p>
          <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;">
            <button type="button" class="btn btn--secondary" id="reset-market-filters">Reset Filters</button>
            <a href="#procurement" class="btn btn--primary">Request Kampala Procurement</a>
          </div>
        </div>
      `;
      document.getElementById('reset-market-filters')?.addEventListener('click', () => {
        marketState = { search: '', category: 'All', sort: 'featured', onlySaved: false, visibleLimit: PAGE_BATCH_SIZE };
        renderMarketplaceView(rootEl);
      });
      return;
    }

    grid.className = 'product-grid';
    grid.innerHTML = displayedItems.map(renderProductCardHTML).join('');
    bindProductGridEvents(grid, () => {
      if (marketState.onlySaved) renderGrid();
    });

    if (loadWrap && loadBtn) {
      const hasMore = !isFiltered && displayedItems.length < items.length;
      loadWrap.hidden = !hasMore;
      if (hasMore) {
        loadBtn.textContent = `Show More Products (${items.length - displayedItems.length} remaining)`;
      }
    }
  };

  renderGrid();

  document.getElementById('marketplace-load-more')?.addEventListener('click', () => {
    marketState.visibleLimit += PAGE_BATCH_SIZE;
    renderGrid();
  });

  document.getElementById('marketplace-search-input')?.addEventListener('input', (e) => {
    marketState.search = e.target.value;
    renderGrid();
  });

  document.getElementById('marketplace-sort')?.addEventListener('change', (e) => {
    marketState.sort = e.target.value;
    renderGrid();
  });

  document.getElementById('toggle-saved-filter')?.addEventListener('click', (e) => {
    marketState.onlySaved = !marketState.onlySaved;
    e.currentTarget.classList.toggle('is-active', marketState.onlySaved);
    renderGrid();
  });

  rootEl.querySelectorAll('[data-category-tab]').forEach((btn) => {
    btn.addEventListener('click', () => {
      marketState.category = btn.getAttribute('data-category-tab') || 'All';
      marketState.visibleLimit = PAGE_BATCH_SIZE;
      rootEl.querySelectorAll('[data-category-tab]').forEach((t) =>
        t.classList.toggle('is-active', t === btn)
      );
      renderGrid();
    });
  });
}
