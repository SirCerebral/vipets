// V.I. Pets — concept site interactions
(function () {
  'use strict';

  // ----- Theme toggle -----
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  let storedTheme = null;
  try { storedTheme = window.name && window.name.startsWith('vipets-theme:') ? window.name.split(':')[1] : null; } catch (e) {}
  if (storedTheme) root.setAttribute('data-theme', storedTheme);
  themeToggle && themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { window.name = 'vipets-theme:' + next; } catch (e) {}
  });

  // ----- Cart state (in-memory, persists across page nav via window.name) -----
  let cart = [];
  try {
    const raw = window.name && window.name.includes('vipets-cart:') ? window.name.split('vipets-cart:')[1] : '';
    if (raw) cart = JSON.parse(decodeURIComponent(raw));
  } catch (e) { cart = []; }
  const isVip = true; // demo: assume VIP on

  function save() {
    try {
      const themePart = root.getAttribute('data-theme') === 'dark' ? 'vipets-theme:dark ' : '';
      window.name = themePart + 'vipets-cart:' + encodeURIComponent(JSON.stringify(cart));
    } catch (e) {}
  }
  function money(n) { return '$' + n.toFixed(2); }
  function subtotal() { return cart.reduce((s, l) => s + l.price * l.qty, 0); }
  function vipDiscount() { return isVip ? subtotal() * 0.10 : 0; }
  function total() { return subtotal() - vipDiscount(); }

  // ----- Cart drawer -----
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  const openBtn = document.getElementById('cart-toggle');
  const closeBtn = document.getElementById('cart-close');
  const body = document.getElementById('cart-body');
  const foot = document.getElementById('cart-foot');
  const countEl = document.getElementById('cart-count');

  function openCart() {
    if (!drawer) return;
    drawer.setAttribute('aria-hidden', 'false');
    drawer.classList.add('open');
    backdrop.hidden = false;
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeCart() {
    if (!drawer) return;
    drawer.setAttribute('aria-hidden', 'true');
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    setTimeout(() => { backdrop.hidden = true; }, 300);
    document.body.style.overflow = '';
  }
  openBtn && openBtn.addEventListener('click', openCart);
  closeBtn && closeBtn.addEventListener('click', closeCart);
  backdrop && backdrop.addEventListener('click', closeCart);

  function renderCart() {
    if (!body) return;
    if (cart.length === 0) {
      body.innerHTML = '<div class="cart-empty"><p>Your cart is empty.</p><a href="shop.html" class="btn btn-secondary">Start shopping</a></div>';
      foot && (foot.hidden = true);
    } else {
      body.innerHTML = cart.map((l, i) => `
        <div class="cart-line" data-idx="${i}">
          <div class="cart-line-img" style="background:${l.swatch || '#e5dcc6'}"></div>
          <div class="cart-line-meta">
            <div class="cart-line-name">${l.name}</div>
            <div class="text-muted" style="font-size:var(--text-sm)">${l.brand || ''}</div>
            <div class="flex gap-3 mt-6" style="align-items:center;margin-top:0.5rem">
              <button class="icon-btn" data-act="dec">−</button>
              <span>${l.qty}</span>
              <button class="icon-btn" data-act="inc">+</button>
              <button class="icon-btn" data-act="rm" aria-label="Remove">✕</button>
            </div>
          </div>
          <div class="cart-line-price">${money(l.price * l.qty)}</div>
        </div>
      `).join('');
      foot && (foot.hidden = false);
      document.getElementById('cart-subtotal').textContent = money(subtotal());
      document.getElementById('cart-vip').textContent = '−' + money(vipDiscount());
      document.getElementById('cart-total').textContent = money(total());
    }
    if (countEl) {
      const n = cart.reduce((s, l) => s + l.qty, 0);
      countEl.textContent = n;
      countEl.dataset.empty = n === 0 ? 'true' : 'false';
    }
  }

  body && body.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-act]');
    if (!btn) return;
    const line = btn.closest('.cart-line');
    const i = parseInt(line.dataset.idx, 10);
    const act = btn.dataset.act;
    if (act === 'inc') cart[i].qty++;
    if (act === 'dec') cart[i].qty = Math.max(1, cart[i].qty - 1);
    if (act === 'rm') cart.splice(i, 1);
    save(); renderCart();
  });

  // ----- Add to cart (shop.html buttons) -----
  function addToCart(p) {
    const found = cart.find(l => l.id === p.id);
    if (found) found.qty++;
    else cart.push(Object.assign({ qty: 1 }, p));
    save(); renderCart();
    toast(`Added ${p.name} to cart`);
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-add]');
    if (!btn) return;
    addToCart({
      id: btn.dataset.add,
      name: btn.dataset.name,
      brand: btn.dataset.brand || '',
      price: parseFloat(btn.dataset.price),
      swatch: btn.dataset.swatch || ''
    });
    openCart();
  });

  // ----- Toast -----
  let toastTimer;
  function toast(msg) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('visible'), 2400);
  }

  // ----- Checkout modal -----
  const checkoutBtn = document.getElementById('checkout-btn');
  const checkoutModal = document.getElementById('checkout-modal');
  const checkoutClose = document.getElementById('checkout-close');

  function openCheckout() {
    if (cart.length === 0) { toast('Your cart is empty'); return; }
    closeCart();
    checkoutModal.setAttribute('aria-hidden', 'false');
    checkoutModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    // Fill summary
    const lines = document.getElementById('checkout-lines');
    if (lines) {
      lines.innerHTML = cart.map(l => `
        <div class="summary-line"><span>${l.name} × ${l.qty}</span><span>${money(l.price * l.qty)}</span></div>
      `).join('');
    }
    document.getElementById('co-subtotal').textContent = money(subtotal());
    document.getElementById('co-vip').textContent = '−' + money(vipDiscount());
    document.getElementById('co-total').textContent = money(total());
  }
  function closeCheckout() {
    checkoutModal.setAttribute('aria-hidden', 'true');
    checkoutModal.classList.remove('open');
    document.body.style.overflow = '';
  }
  checkoutBtn && checkoutBtn.addEventListener('click', openCheckout);
  checkoutClose && checkoutClose.addEventListener('click', closeCheckout);

  // First render
  renderCart();
})();
