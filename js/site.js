/* New Leaf — shared header, footer, demo catalogue and cart.
   Everything here is DEMO DATA. Replace PRODUCTS with the real catalogue;
   leave `price` undefined until a real price is confirmed. */

const CONTACT = {
  phone: "+234 913 710 4301",
  tel: "+2349137104301",
  whatsapp: "https://wa.me/2349137104301",
};

const CATEGORIES = [
  { id: "fashion", name: "Fashion" },
  { id: "electronics", name: "Electronics" },
  { id: "home", name: "Home & Living" },
  { id: "beauty", name: "Beauty" },
];

const PRODUCTS = Array.from({ length: 12 }, (_, i) => {
  const cat = CATEGORIES[i % CATEGORIES.length];
  const n = String(Math.floor(i / CATEGORIES.length) + 1).padStart(2, "0");
  return {
    id: `demo-${cat.id}-${n}`,
    name: `Demo ${cat.name} Item ${n}`,
    category: cat.id,
    price: undefined, // no real prices yet
    featured: i < 8,
  };
});

const categoryName = (id) => (CATEGORIES.find((c) => c.id === id) || {}).name || "";
const formatPrice = (p) => (p === undefined ? "Price coming soon" : "₦" + p.toLocaleString("en-NG"));
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* Icons — simple 1.5px line set */
const I = {
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c1.2-3.4 3.8-5 7-5s5.8 1.6 7 5"/></svg>',
  bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8V6.5a3 3 0 016 0V8"/></svg>',
  wa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M4 20l1.2-3.6A8 8 0 1112 20a8 8 0 01-3.9-1L4 20z"/><path d="M9 9.5c.3 2.2 2.3 4.2 4.5 4.5l1-1.2 1.8.8-.4 1.6c-3.6.3-7.4-3.5-7.1-7.1l1.6-.4.8 1.8-1.2 1z"/></svg>',
  left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M14 6l-6 6 6 6"/></svg>',
  right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M10 6l6 6-6 6"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.6 2.5 14.4 0 17M12 3.5c-2.5 2.6-2.5 14.4 0 17"/></svg>',
  spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M12 20V10M12 10c0-3.5 2.5-6 6-6 0 3.5-2.5 6-6 6zM12 13c0-2.8-2-4.8-4.8-4.8 0 2.8 2 4.8 4.8 4.8z"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 11v5M12 8h.01"/></svg>',
};

const MARK = '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 25C5 13.4 13.4 5 25 5L5 25Z" fill="currentColor"/><path d="M7.6 27.4L27.4 7.6C27.4 19.2 19.2 27.4 7.6 27.4Z" fill="var(--mark-2, #21866B)"/></svg>';

const NAV = [
  { href: "shop.html", label: "Shop" },
  { href: "payments.html", label: "Payments" },
  { href: "about.html", label: "About" },
  { href: "design-system.html", label: "Design System" },
];

/* Cart — localStorage, per visitor, demo only */
const Cart = {
  key: "nl-cart",
  read() { try { return JSON.parse(localStorage.getItem(this.key)) || {}; } catch { return {}; } },
  write(c) { try { localStorage.setItem(this.key, JSON.stringify(c)); } catch {} updateCartCount(); },
  add(id, qty = 1) { const c = this.read(); c[id] = (c[id] || 0) + qty; this.write(c); },
  set(id, qty) { const c = this.read(); if (qty <= 0) delete c[id]; else c[id] = qty; this.write(c); },
  count() { return Object.values(this.read()).reduce((a, b) => a + b, 0); },
};
function updateCartCount() {
  const n = Cart.count();
  document.querySelectorAll("[data-cart-count]").forEach((el) => { el.textContent = n; el.hidden = n === 0; });
  document.querySelectorAll("[data-cart-label]").forEach((el) => el.setAttribute("aria-label", `Cart, ${n} item${n === 1 ? "" : "s"}`));
}

function toast(msg) {
  let t = document.querySelector(".toast");
  if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("show"), 2200);
}

function productCard(p) {
  return `<a class="card" href="product.html?id=${encodeURIComponent(p.id)}">
    <div class="card-media"><span class="tag tag-demo">Demo</span><div class="ph r-4x5" data-label="Product image"></div></div>
    <div class="card-body"><span class="card-title">${esc(p.name)}</span>
    <span class="card-meta">${esc(categoryName(p.category))}</span>
    <span class="price-pending">${formatPrice(p.price)}</span></div></a>`;
}

function renderChrome() {
  const here = location.pathname.split("/").pop() || "index.html";
  const navLinks = NAV.map((n) => `<a href="${n.href}"${n.href === here ? ' aria-current="page"' : ""}>${n.label}</a>`).join("");

  const header = document.querySelector("[data-header]");
  if (header) header.outerHTML = `
    <a class="skip" href="#main">Skip to content</a>
    <div class="announce">Demo preview · Products and prices shown are sample data · <a href="${CONTACT.whatsapp}">Chat with us on WhatsApp</a></div>
    <header class="header"><div class="container header-inner">
      <button class="icon-btn menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="drawer" data-menu>${I.menu}</button>
      <a class="brand" href="index.html" aria-label="New Leaf home">${MARK}<span>New Leaf</span></a>
      <nav class="nav" aria-label="Main">${navLinks}</nav>
      <div class="header-actions">
        <a class="icon-btn hide-sm" href="shop.html#search" aria-label="Search">${I.search}</a>
        <a class="icon-btn hide-sm" href="account.html" aria-label="Account">${I.user}</a>
        <a class="icon-btn" href="cart.html" data-cart-label aria-label="Cart">${I.bag}<span class="cart-count" data-cart-count hidden>0</span></a>
      </div>
    </div></header>
    <div class="drawer" id="drawer" aria-hidden="true">
      <div class="drawer-scrim" data-close></div>
      <div class="drawer-panel" role="dialog" aria-modal="true" aria-label="Menu">
        <button class="icon-btn" type="button" aria-label="Close menu" data-close>${I.close}</button>
        <nav class="drawer-nav" aria-label="Mobile">${navLinks}<a href="account.html"${here === "account.html" ? ' aria-current="page"' : ""}>Account</a><a href="cart.html">Cart</a></nav>
        <a class="btn btn-primary" href="${CONTACT.whatsapp}">${I.wa} WhatsApp ${CONTACT.phone}</a>
      </div>
    </div>`;

  const footer = document.querySelector("[data-footer]");
  if (footer) footer.outerHTML = `
    <footer class="footer"><div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a class="brand" href="index.html" style="--mark-2: var(--nl-gold)">${MARK}<span>New Leaf</span></a>
          <p class="small" style="opacity:.75">Digital shopping and payments, connecting customers and businesses. Developed by DataWeave.</p>
          <a class="btn btn-ghost-light" href="${CONTACT.whatsapp}" style="justify-self:start">${I.wa} ${CONTACT.phone}</a>
        </div>
        <div class="footer-cols">
          <div><h4>Shop</h4><ul><li><a href="shop.html">All products</a></li>${CATEGORIES.map((c) => `<li><a href="shop.html?c=${c.id}">${c.name}</a></li>`).join("")}</ul></div>
          <div><h4>Services</h4><ul><li><a href="payments.html">Payments</a></li><li><a href="payments.html#transfers">Nigeria–China transfers</a></li><li><a href="account.html">My account</a></li></ul></div>
          <div><h4>Help</h4><ul><li><a href="tel:${CONTACT.tel}">Call ${CONTACT.phone}</a></li><li><a href="${CONTACT.whatsapp}">WhatsApp</a></li><li><a href="#" aria-disabled="true">Delivery &amp; returns</a></li><li><a href="#" aria-disabled="true">FAQs</a></li></ul></div>
          <div><h4>Legal</h4><ul><li><a href="#" aria-disabled="true">Privacy policy</a></li><li><a href="#" aria-disabled="true">Terms of use</a></li><li><a href="#" aria-disabled="true">Cookie policy</a></li></ul></div>
        </div>
      </div>
      <div class="footer-word" aria-hidden="true">New Leaf</div>
      <div class="footer-bottom"><span>© ${new Date().getFullYear()} New Leaf · Developed by DataWeave</span><span>Email and address: to be added</span><a href="design-system.html">Design system</a></div>
    </div></footer>
    <a class="wa-float" href="${CONTACT.whatsapp}" aria-label="Chat on WhatsApp">${I.wa}</a>`;

  // Drawer
  const drawer = document.getElementById("drawer");
  const menuBtn = document.querySelector("[data-menu]");
  const setDrawer = (open) => {
    drawer.classList.toggle("open", open);
    drawer.setAttribute("aria-hidden", String(!open));
    menuBtn.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
    if (open) drawer.querySelector("[data-close]").focus(); else menuBtn.focus();
  };
  menuBtn?.addEventListener("click", () => setDrawer(true));
  drawer?.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", () => setDrawer(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && drawer.classList.contains("open")) setDrawer(false); });

  updateCartCount();
}

function initRails() {
  document.querySelectorAll("[data-rail]").forEach((rail) => {
    const id = rail.id;
    document.querySelectorAll(`[data-rail-prev="${id}"], [data-rail-next="${id}"]`).forEach((btn) => {
      btn.addEventListener("click", () => {
        const dir = btn.hasAttribute("data-rail-next") ? 1 : -1;
        rail.scrollBy({ left: dir * rail.clientWidth * 0.8, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      });
    });
  });
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -10% 0px" });
  els.forEach((e) => io.observe(e));
}

document.addEventListener("DOMContentLoaded", () => {
  renderChrome();
  document.querySelectorAll("[data-products]").forEach((el) => {
    const list = el.dataset.products === "featured" ? PRODUCTS.filter((p) => p.featured) : PRODUCTS;
    el.innerHTML = list.map(productCard).join("");
  });
  document.querySelectorAll("[data-wa]").forEach((a) => (a.href = CONTACT.whatsapp));
  document.querySelectorAll("[data-phone]").forEach((a) => { a.textContent = CONTACT.phone; a.href = "tel:" + CONTACT.tel; });
  document.querySelectorAll("form[data-newsletter]").forEach((f) => f.addEventListener("submit", (e) => { e.preventDefault(); toast("Thanks. Newsletter sign-up is not live yet."); f.reset(); }));
  initRails();
  initReveal();
  document.dispatchEvent(new Event("nl:ready"));
});
