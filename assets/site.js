/* Vedganga Foods & Chemicals — Global site script
   Injects nav + footer + quote modal, boots Lenis smooth scroll,
   wires GSAP scroll reveals, and handles the quote/contact API. */

// Backend base URL (leave as-is when hosted alongside the API; overridable via window.VEDGANGA_API)
window.VEDGANGA_API = window.VEDGANGA_API || 'https://vedganga-modern.preview.emergentagent.com';

(function () {
  const NAV = [
    { href: 'index.html', label: 'Home' },
    { href: 'products.html', label: 'Products' },
    { href: 'about.html', label: 'About' },
    { href: 'contact.html', label: 'Contact' },
  ];

  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  // ---------- NAV ----------
  const navEl = document.getElementById('v-nav');
  if (navEl) {
    navEl.innerHTML = `
      <div class="fixed top-0 inset-x-0 z-40">
        <div class="px-5 md:px-10 pt-4">
          <div class="flex items-center justify-between rounded-full border border-black/10 bg-[color:var(--v-cream)]/85 backdrop-blur-md px-4 md:px-6 py-2.5">
            <a href="index.html" class="flex items-center gap-2 group" data-testid="nav-brand-link">
              <img src="assets/img/logo.jpeg" alt="Vedganga Logo" class="h-9 w-auto object-contain" />
              <span class="font-display text-[20px] tracking-wider">Vedganga</span>
            </a>
            <nav class="hidden md:flex items-center gap-8 text-sm">
              ${NAV.map(n => `<a href="${n.href}" class="link-under ${current === n.href ? 'text-[color:var(--v-forest)] font-semibold' : 'text-[color:var(--v-ink)]/80 hover:text-[color:var(--v-ink)]'}" data-testid="nav-link-${n.label.toLowerCase()}">${n.label}</a>`).join('')}
            </nav>
            <div class="flex items-center gap-2">
              <button onclick="VedgangaQuote.open()" class="hidden md:inline-flex btn-pill" data-testid="nav-quote-btn"><span class="dot"></span> Request Quote</button>
              <button id="v-menu-btn" class="md:hidden w-10 h-10 grid place-items-center rounded-full border border-black/10" aria-label="Open menu" data-testid="nav-menu-toggle">
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><path d="M0 1h18M0 6h18M0 11h18" stroke="currentColor" stroke-width="1.4"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile overlay -->
      <div id="v-menu" class="menu-overlay fixed inset-0 z-50 bg-[color:var(--v-forest)] text-[color:var(--v-cream)] md:hidden">
        <div class="h-full flex flex-col">
          <div class="flex items-center justify-between px-5 pt-5">
            <a href="index.html" class="font-display text-lg">Vedganga</a>
            <button id="v-menu-close" class="w-10 h-10 grid place-items-center rounded-full border border-white/20" aria-label="Close menu">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 2l12 12M14 2L2 14" stroke="currentColor" stroke-width="1.6"/></svg>
            </button>
          </div>
          <nav class="flex-1 grid place-items-center gap-6 text-3xl font-display">
            ${NAV.map(n => `<a href="${n.href}" class="hover:text-[color:var(--v-gold)]" data-testid="mobile-nav-${n.label.toLowerCase()}">${n.label}</a>`).join('')}
            <button onclick="VedgangaQuote.open()" class="mt-4 btn-gold" data-testid="mobile-nav-quote">Request Quote →</button>
          </nav>
          <div class="px-5 pb-8 text-xs font-mono-caps text-[color:var(--v-cream)]/70">Bengaluru · India · Est. 2015</div>
        </div>
      </div>
    `;

    const menuBtn = document.getElementById('v-menu-btn');
    const menu = document.getElementById('v-menu');
    const menuClose = document.getElementById('v-menu-close');
    menuBtn?.addEventListener('click', () => menu.classList.add('open'));
    menuClose?.addEventListener('click', () => menu.classList.remove('open'));
    menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
  }

  // ---------- FOOTER ----------
  const footEl = document.getElementById('v-footer');
  if (footEl) {
    footEl.innerHTML = `
      <footer class="bg-[color:var(--v-ink)] text-[color:var(--v-cream)] grain relative">
        <div class="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-10">
          <div class="grid md:grid-cols-12 gap-10">
            <div class="md:col-span-5">
              <div class="font-mono-caps text-xs text-[color:var(--v-gold)]">— Est. 2015 · Bengaluru</div>
              <h3 class="font-display text-4xl md:text-5xl mt-4 leading-[1.05]">Ingredients<br/>with intent.</h3>
              <p class="mt-6 text-[color:var(--v-cream)]/70 max-w-md">Sourcing, blending and supplying premium raw materials to bakeries, food manufacturers and confectioners across India.</p>
              <button onclick="VedgangaQuote.open()" class="btn-gold mt-8" data-testid="footer-quote-btn">Request a Quote →</button>
            </div>
            <div class="md:col-span-3">
              <div class="font-mono-caps text-[10px] text-[color:var(--v-cream)]/50">Navigate</div>
              <ul class="mt-4 space-y-2">
                ${NAV.map(n => `<li><a href="${n.href}" class="link-under text-[color:var(--v-cream)]/90 hover:text-[color:var(--v-gold)]">${n.label}</a></li>`).join('')}
              </ul>
            </div>
            <div class="md:col-span-4">
              <div class="font-mono-caps text-[10px] text-[color:var(--v-cream)]/50">Head Office</div>
              <address class="not-italic mt-4 text-[color:var(--v-cream)]/85 leading-relaxed text-sm">
                Vedganga Foods and Chemicals<br/>
                973, 9th cross, 2nd main Rd,<br/>
                AECS B Block, Singasandra,<br/>
                Bengaluru, Karnataka 560068
              </address>
              <div class="mt-5 space-y-1 text-sm">
                <a class="block link-under text-[color:var(--v-gold)]" href="tel:+919611005994">+91 96110 05994</a>
                <a class="block link-under text-[color:var(--v-gold)]" href="mailto:vedgangafoodsandchemicals@gmail.com">vedgangafoodsandchemicals@gmail.com</a>
              </div>
            </div>
          </div>

          <div class="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div class="text-xs text-[color:var(--v-cream)]/50">© ${new Date().getFullYear()} Vedganga Foods &amp; Chemicals. All rights reserved.</div>
            <div class="font-mono-caps text-[10px] text-[color:var(--v-cream)]/50">FSSAI Compliant · HACCP Practices · ISO-aligned</div>
          </div>
        </div>
      </footer>
    `;
  }

  // ---------- QUOTE MODAL ----------
  const modalHost = document.getElementById('v-modal-host') || document.body;
  const modalWrap = document.createElement('div');
  modalWrap.innerHTML = `
    <div id="v-modal" class="fixed inset-0 z-[60] hidden items-center justify-center px-4">
      <div id="v-modal-back" class="absolute inset-0 modal-backdrop"></div>
      <div class="relative modal-panel w-full max-w-2xl rounded-3xl p-6 md:p-10 shadow-2xl">
        <div class="flex items-start justify-between gap-6">
          <div>
            <div class="font-mono-caps text-[10px] text-[color:var(--v-forest)]">— Request a Quote</div>
            <h3 class="font-display text-3xl md:text-4xl mt-2 leading-tight">Tell us what you<br/>need to source.</h3>
          </div>
          <button id="v-modal-close" class="w-10 h-10 rounded-full border border-black/10 grid place-items-center" aria-label="Close" data-testid="modal-close-btn">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 2l12 12M14 2L2 14" stroke="currentColor" stroke-width="1.5"/></svg>
          </button>
        </div>
        <form id="v-quote-form" class="mt-8 grid md:grid-cols-2 gap-x-8 gap-y-6">
          <div><label class="field-label">Name</label><input required name="name" class="field" placeholder="Your full name" data-testid="quote-input-name"/></div>
          <div><label class="field-label">Company</label><input name="company" class="field" placeholder="Company / Bakery" data-testid="quote-input-company"/></div>
          <div><label class="field-label">Email</label><input required type="email" name="email" class="field" placeholder="you@company.com" data-testid="quote-input-email"/></div>
          <div><label class="field-label">Phone</label><input name="phone" class="field" placeholder="+91 …" data-testid="quote-input-phone"/></div>
          <div><label class="field-label">Product</label><input name="product" class="field" placeholder="e.g. Raisins, Cake Premix…" data-testid="quote-input-product"/></div>
          <div><label class="field-label">Quantity</label><input name="quantity" class="field" placeholder="e.g. 500 kg / month" data-testid="quote-input-quantity"/></div>
          <div class="md:col-span-2"><label class="field-label">Details</label><textarea required name="message" class="field" placeholder="Application, packing, delivery city, target price…" data-testid="quote-input-message"></textarea></div>
          <div class="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
            <div class="text-xs text-black/50">We'll respond within 1 business day. Straight to <span class="text-[color:var(--v-forest-2)]">vedgangafoodsandchemicals@gmail.com</span>.</div>
            <button id="v-quote-submit" type="submit" class="btn-gold" data-testid="quote-submit-btn">
              <span class="label">Send Request</span>
              <span class="ml-1">→</span>
            </button>
          </div>
          <div id="v-quote-msg" class="md:col-span-2 hidden text-sm px-4 py-3 rounded-xl" data-testid="quote-status-message"></div>
        </form>
      </div>
    </div>
  `;
  modalHost.appendChild(modalWrap);

  const modal = document.getElementById('v-modal');
  const closeBtn = document.getElementById('v-modal-close');
  const backdrop = document.getElementById('v-modal-back');
  const form = document.getElementById('v-quote-form');
  const submitBtn = document.getElementById('v-quote-submit');
  const statusMsg = document.getElementById('v-quote-msg');

  function open(prefillProduct) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    if (prefillProduct) form.product.value = prefillProduct;
    setTimeout(() => form.name.focus(), 200);
  }
  function close() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
    statusMsg.className = 'md:col-span-2 hidden text-sm px-4 py-3 rounded-xl';
  }
  closeBtn.addEventListener('click', close);
  backdrop.addEventListener('click', close);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

  window.VedgangaQuote = { open, close };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    const label = submitBtn.querySelector('.label');
    const oldLabel = label.textContent;
    label.textContent = 'Sending…';
    statusMsg.className = 'md:col-span-2 hidden text-sm px-4 py-3 rounded-xl';
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch(`${window.VEDGANGA_API}/api/quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error((await res.json()).detail || 'Failed');
      statusMsg.className = 'md:col-span-2 text-sm px-4 py-3 rounded-xl bg-[color:var(--v-forest)] text-[color:var(--v-cream)]';
      statusMsg.textContent = 'Thank you — your request is on its way. We\'ll respond within 1 business day.';
      form.reset();
    } catch (err) {
      statusMsg.className = 'md:col-span-2 text-sm px-4 py-3 rounded-xl bg-red-100 text-red-800';
      statusMsg.textContent = 'Could not send. Please email vedgangafoodsandchemicals@gmail.com directly.';
    } finally {
      submitBtn.disabled = false;
      label.textContent = oldLabel;
    }
  });

  // Delegated: any [data-quote-product] button opens the modal prefilled
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-quote-product]');
    if (t) { e.preventDefault(); open(t.getAttribute('data-quote-product')); }
  });
})();

// ---------- LENIS + GSAP ----------
window.addEventListener('DOMContentLoaded', () => {
  // Lenis smooth scroll
  if (window.Lenis) {
    const lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    if (window.gsap && window.ScrollTrigger) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }
    window.__lenis = lenis;
  }

  if (!window.gsap) return;
  gsap.registerPlugin(window.ScrollTrigger);

  // On-load line reveal
  gsap.utils.toArray('.mask-line > span').forEach((el, i) => {
    gsap.to(el, { y: '0%', duration: 1.1, ease: 'expo.out', delay: 0.1 + i * 0.08 });
  });

  // Scroll fade/rise
  gsap.utils.toArray('[data-reveal]').forEach((el) => {
    gsap.fromTo(el, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.1, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true }
    });
  });

  // Parallax
  gsap.utils.toArray('[data-parallax]').forEach((el) => {
    const speed = parseFloat(el.getAttribute('data-parallax')) || 0.15;
    gsap.to(el, {
      yPercent: -speed * 100, ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true }
    });
  });

  // Number tickers
  gsap.utils.toArray('[data-ticker]').forEach((el) => {
    const target = parseFloat(el.getAttribute('data-ticker'));
    const obj = { v: 0 };
    gsap.to(obj, {
      v: target, duration: 2, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      onUpdate: () => { el.textContent = Math.round(obj.v).toLocaleString(); }
    });
  });

  // Product spotlight cursor
  document.querySelectorAll('.spotlight').forEach((card) => {
    const spot = card.querySelector('.spot');
    if (!spot) return;
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      spot.style.left = (e.clientX - r.left) + 'px';
      spot.style.top = (e.clientY - r.top) + 'px';
    });
  });
});
