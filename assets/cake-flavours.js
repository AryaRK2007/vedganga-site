/* Vedganga — Shared cake flavour catalogue (Premixes & Concentrates).
   Exposes: window.V_CAKE_FLAVOURS, window.V_CAKE_ICONS, window.V_CAKE_ART */

window.V_CAKE_ICONS = {
  'vanilla': `<path d="M35 20 C 30 40, 30 65, 50 85 C 70 65, 70 40, 65 20 Z"/><path d="M35 20 L 65 20"/><path d="M42 30 L 58 30 M40 45 L 60 45 M42 60 L 58 60"/><circle cx="50" cy="15" r="3"/>`,
  'chocolate': `<rect x="22" y="30" width="56" height="42" rx="3"/><path d="M35 30 L 35 72 M50 30 L 50 72 M65 30 L 65 72"/><path d="M22 44 L 78 44 M22 58 L 78 58"/><circle cx="28.5" cy="37" r="1.5"/><circle cx="43.5" cy="51" r="1.5"/><circle cx="58.5" cy="65" r="1.5"/>`,
  'red-velvet': `<path d="M25 40 C 25 25, 40 15, 50 25 C 60 15, 75 25, 75 40 C 75 60, 50 82, 50 82 C 50 82, 25 60, 25 40 Z"/><path d="M40 40 C 42 45, 48 45, 50 40 M50 40 C 52 45, 58 45, 60 40"/>`,
  'mava': `<path d="M28 42 C 28 32, 72 32, 72 42 L 72 74 C 72 82, 28 82, 28 74 Z"/><ellipse cx="50" cy="42" rx="22" ry="7"/><path d="M35 55 L 65 55 M35 65 L 65 65"/><path d="M50 20 C 45 25, 45 30, 50 33 C 55 30, 55 25, 50 20 Z"/>`,
  'brownie': `<rect x="20" y="35" width="60" height="45" rx="2"/><path d="M20 55 L 80 55"/><path d="M40 35 L 40 80 M60 35 L 60 80"/><circle cx="30" cy="45" r="1.8"/><circle cx="50" cy="70" r="2"/><circle cx="70" cy="45" r="1.8"/><circle cx="45" cy="45" r="1.4"/><circle cx="65" cy="70" r="1.4"/>`,
  'lava': `<path d="M50 15 C 32 30, 25 55, 30 78 L 70 78 C 75 55, 68 30, 50 15 Z"/><path d="M40 55 C 42 52, 48 52, 50 55 C 52 52, 58 52, 60 55 C 58 58, 55 58, 52 60 C 55 62, 55 65, 52 66 L 48 66 C 45 65, 45 62, 48 60 C 45 58, 42 58, 40 55 Z"/><path d="M45 40 C 47 38, 53 38, 55 40"/>`,
};

window.V_CAKE_FLAVOURS = [
  {
    slug:'vanilla', name:'Vanilla', formats:'Premix & Concentrate',
    palette:['#3F311C','#7A6236','#EFD9A4'],
    tag:'Bourbon vanilla · Milky sponge · Fine crumb',
    desc:'A benchmark vanilla system built around Madagascar bourbon vanilla and dairy notes. Fine, even crumb structure with excellent moisture retention and a soft, milky bite. Runs true across sponge, chiffon, cupcake and layer-cake formats.',
    specs:[
      ['Application','Sponge · Chiffon · Cupcake · Layer'],
      ['Dosage · Premix','100% (add water/oil/egg as per instruction)'],
      ['Dosage · Concentrate','1.5–2.5% on flour weight'],
      ['Water Addition','45–55%'],
      ['Bake Loss','8–11%'],
      ['Shelf Life','9 months (ambient, sealed)'],
      ['Packaging','1 kg pouch · 10 kg bag · 25 kg industrial bag'],
    ],
  },
  {
    slug:'chocolate', name:'Chocolate', formats:'Premix & Concentrate',
    palette:['#1F140C','#5A3418','#C7823E'],
    tag:'Dutch-processed cocoa · Deep, glossy crumb',
    desc:'Formulated with dutched cocoa (10–12% fat) for a rich, dark colour and a rounded chocolate flavour. Excellent volume, moist crumb and clean release from moulds — ideal for gateaux, mud cakes and cupcakes.',
    specs:[
      ['Application','Mud cake · Sponge · Cupcake · Gateaux'],
      ['Dosage · Premix','100% (add water/oil/egg as per instruction)'],
      ['Dosage · Concentrate','2.5–3.5% on flour weight'],
      ['Cocoa (in premix)','16–20%'],
      ['Water Addition','48–58%'],
      ['Shelf Life','9 months (ambient, sealed)'],
      ['Packaging','1 kg pouch · 10 kg bag · 25 kg industrial bag'],
    ],
  },
  {
    slug:'red-velvet', name:'Red Velvet', formats:'Premix & Concentrate',
    palette:['#3B0F14','#7C1F2B','#E7B092'],
    tag:'Cocoa-kissed · Deep red · Cream-cheese friendly',
    desc:'A balanced cocoa-forward red velvet with soft, plush crumb and a stable red hue that survives ambient shelf life. Tuned to pair beautifully with cream-cheese frostings and mascarpone fillings.',
    specs:[
      ['Application','Layer cake · Cupcake · Loaf'],
      ['Dosage · Premix','100% (add water/oil/egg as per instruction)'],
      ['Dosage · Concentrate','2.0–3.0% on flour weight'],
      ['Colour','FSSAI-permitted red · fade-resistant'],
      ['Water Addition','45–55%'],
      ['Shelf Life','9 months (ambient, sealed)'],
      ['Packaging','1 kg pouch · 10 kg bag · 25 kg industrial bag'],
    ],
  },
  {
    slug:'mava', name:'Mava', formats:'Premix & Concentrate',
    palette:['#3A2A16','#7B5B31','#EFD497'],
    tag:'Khoya-rich · Warm dairy notes · Indian bakery favourite',
    desc:'A traditional mava (khoya) system that captures slow-caramelised dairy flavour — cardamom-friendly, saffron-friendly. Ideal for Indian bakery loaves, mava cupcakes and festive gifting SKUs.',
    specs:[
      ['Application','Mava loaf · Cupcake · Fusion cakes'],
      ['Dosage · Premix','100% (add water/oil/ghee as per instruction)'],
      ['Dosage · Concentrate','2.0–3.0% on flour weight'],
      ['Water Addition','40–50%'],
      ['Bake Loss','9–12%'],
      ['Shelf Life','9 months (ambient, sealed)'],
      ['Packaging','1 kg pouch · 10 kg bag · 25 kg industrial bag'],
    ],
  },
  {
    slug:'brownie', name:'Brownie', formats:'High-Yield Premix',
    palette:['#170B04','#3A1B08','#A76428'],
    tag:'Fudgy · Glossy top · High cocoa · Walnut-ready',
    desc:'A high-yield brownie premix engineered for that iconic crackled top and dense, fudgy interior. Handles inclusions (walnuts, chocolate chunks, dried fruit) up to 25% without collapsing centre-set.',
    specs:[
      ['Application','Slab brownies · Bar SKUs · Sundae toppers'],
      ['Dosage','100% (add water/oil/egg as per instruction)'],
      ['Yield','~1.65 kg batter / 1 kg premix'],
      ['Water Addition','35–42%'],
      ['Bake Time','25–30 min @ 175°C'],
      ['Shelf Life','9 months (ambient, sealed)'],
      ['Packaging','1 kg pouch · 10 kg bag · 25 kg industrial bag'],
    ],
  },
  {
    slug:'lava', name:'Lava', formats:'Premix & Concentrate',
    palette:['#1A0808','#4A0F10','#D06B3E'],
    tag:'Molten centre · Glossy crust · Restaurant-grade',
    desc:'A choux-adjacent lava cake system with a controlled molten centre — designed to hold its liquid heart at room temperature for up to 20 minutes post-bake. Perfect for QSR desserts, patisserie and hotel banqueting.',
    specs:[
      ['Application','Molten lava cake · Individual portions'],
      ['Dosage · Premix','100% (add water/oil/egg as per instruction)'],
      ['Dosage · Concentrate','2.5–3.5% on flour weight'],
      ['Portion size','60 g / 80 g / 100 g moulds'],
      ['Bake Time','9–11 min @ 200°C (from chilled)'],
      ['Shelf Life','9 months (ambient, sealed)'],
      ['Packaging','1 kg pouch · 10 kg bag · 25 kg industrial bag'],
    ],
  },
];

window.V_CAKE_ART = function (v, i) {
  const [c1, c2, c3] = v.palette;
  const id = 'gc' + i + Math.random().toString(36).slice(2, 6);
  return `
    <svg class="w-full h-full absolute inset-0" viewBox="0 0 100 125" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/>
        </linearGradient>
        <radialGradient id="${id}b" cx="0.5" cy="0.34" r="0.72">
          <stop offset="0" stop-color="${c3}" stop-opacity="0.55"/>
          <stop offset="1" stop-color="${c3}" stop-opacity="0"/>
        </radialGradient>
        <filter id="${id}n"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/></filter>
      </defs>
      <rect width="100" height="125" fill="url(#${id})"/>
      <rect width="100" height="125" fill="url(#${id}b)"/>
      <g transform="translate(0,14)" opacity="0.94">
        <g stroke="${c3}" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round">${window.V_CAKE_ICONS[v.slug] || ''}</g>
      </g>
      <rect width="100" height="125" filter="url(#${id}n)" opacity="0.32"/>
    </svg>`;
};

/* Reusable renderer: injects the 6 flavour blocks into a given host element.
   options: { hostId, product } — product is used to prefill the quote modal */
window.V_RenderCakeFlavours = function (opts) {
  const host = document.getElementById(opts.hostId);
  if (!host) return;
  const productLabel = opts.product || 'Cake';
  host.innerHTML = window.V_CAKE_FLAVOURS.map((v, i) => {
    const num = String(i + 1).padStart(2, '0');
    const reverse = i % 2 === 1;
    return `
      <article id="flavour-${v.slug}" class="py-14 md:py-20 ${i !== 0 ? 'border-t border-black/10' : ''}" data-testid="flavour-${v.slug}">
        <div class="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div class="md:col-span-5 ${reverse ? 'md:order-2' : ''}">
            <div class="relative rounded-[24px] overflow-hidden border border-black/10 aspect-[4/5]" data-reveal>
              ${window.V_CAKE_ART(v, i)}
              <div class="absolute top-4 left-4 chip !bg-[color:var(--v-cream)]/90 !text-[color:var(--v-ink)]">${v.formats}</div>
              <div class="absolute bottom-4 left-4 font-mono-caps text-[10px] text-[color:var(--v-cream)]/85">N° ${num} / 06</div>
            </div>
          </div>
          <div class="md:col-span-7 ${reverse ? 'md:order-1' : ''}">
            <div class="chapter-num text-xs" data-reveal>FLAVOUR ${num}</div>
            <h3 class="font-display text-3xl md:text-5xl mt-3 leading-[1.02]" data-reveal>
              ${v.name.split(' ')[0]}
              ${v.name.split(' ').slice(1).length ? `<span class="italic font-serif-body font-normal text-[color:var(--v-forest-2)]"> ${v.name.split(' ').slice(1).join(' ')}</span>` : ''}
            </h3>
            <p class="mt-3 text-base md:text-lg font-serif-body italic text-[color:var(--v-forest-2)]" data-reveal>${v.tag}</p>
            <p class="mt-5 max-w-xl text-[color:var(--v-ink)]/80 leading-relaxed" data-reveal>${v.desc}</p>
            <div class="mt-8" data-reveal>
              <div class="font-mono-caps text-xs text-[color:var(--v-forest-2)]">— Technical Specifications</div>
              <div class="mt-3 overflow-x-auto">
                <table class="w-full border-collapse text-sm">
                  <tbody>
                    ${v.specs.map((row, r) => `
                      <tr class="border-b border-black/10 ${r % 2 ? 'bg-[color:var(--v-cream-2)]' : ''}">
                        <td class="py-3 pr-6 font-mono-caps text-[10px] text-[color:var(--v-forest-2)] whitespace-nowrap align-top w-[38%] md:w-[30%]">${row[0]}</td>
                        <td class="py-3 text-[color:var(--v-ink)]">${row[1]}</td>
                      </tr>`).join('')}
                  </tbody>
                </table>
              </div>
            </div>
            <div class="mt-8">
              <button data-quote-product="${v.name} — ${productLabel}" class="btn-gold" data-testid="flavour-quote-${v.slug}">
                Request Sample / Quote →
              </button>
            </div>
          </div>
        </div>
      </article>`;
  }).join('');

  // Re-fire scroll reveal for freshly injected elements
  if (window.gsap && window.ScrollTrigger) {
    window.gsap.utils.toArray('#' + opts.hostId + ' [data-reveal]').forEach((el) => {
      window.gsap.fromTo(el, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.0, ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      });
    });
  }
};
