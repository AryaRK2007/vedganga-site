/* Vedganga — Shared product variants & editorial layout engines.
   Exposes: window.V_CAKE_FLAVOURS, window.V_HYDRO_TYPES, window.V_CAKE_ART, window.V_RenderCakeFlavours */

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

/* Hydrocolloid Technical Database */
window.V_HYDRO_TYPES = [
  {
    slug:'xanthan-gum', name:'Xanthan Gum', formats:'80 & 200 Mesh',
    imgUrl:'https://images.unsplash.com/photo-1547891654-e66ed7edd96c?auto=format&fit=crop&w=800&q=80',
    tag:'High shear-thinning · Pseudoplasticity · Emulsion stability',
    desc:'Premium food-grade polysaccharide stabilizer that provides exceptional viscosity control at minimal loading levels. Delivers robust suspension capabilities, excellent freeze-thaw resilience, and stays perfectly stable across highly acidic pH variations and high temperatures.',
    specs:[
      ['Functional Target','Thickener / Suspension Agent'],
      ['Optimal pH Range','3.0 – 11.0'],
      ['Viscosity (1% Sol.)','1,200 – 1,600 cPs'],
      ['Hydration','Fast cold-water dispersion'],
      ['Loss on Drying','≤ 15.0%'],
      ['Shelf Life','24 months (dry, sealed conditions)'],
      ['Packaging','1 kg pouch · 25 kg multi-wall paper bag'],
    ],
  },
  {
    slug:'guar-gum', name:'Guar Gum', formats:'High Viscosity Systems',
    imgUrl:'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80',
    tag:'Galactomannan matrix · Cold water soluble · High binding',
    desc:'Extracted from selected guar seeds, this natural texturizer is highly effective for moisture management and water binding. Extensively used to smooth out texture defects and prevent ice crystal synthesis in ice creams, frozen desserts, and standard bakery doughs.',
    specs:[
      ['Functional Target','Water Binding / Yield Maximization'],
      ['Viscosity (1% Sol.)','3,500 – 5,000 cPs'],
      ['Particle Size','90% passes through 200 mesh'],
      ['Syneresis Control','Excellent water retention capability'],
      ['Protein Interactivity','Synergistic with starch networks'],
      ['Shelf Life','24 months'],
      ['Packaging','25 kg industrial moisture-barrier bags'],
    ],
  },
  {
    slug:'carrageenan', name:'Carrageenan', formats:'Kappa & Iota Grades',
    imgUrl:'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=800&q=80',
    tag:'Dairy protein reactive · Thermoreversible gelation',
    desc:'Sourced from natural red seaweed matrices. The Kappa variant yields firm, brittle thermal-reversible structural networks ideal for milk pudding systems, whereas the Iota variant sets into highly elastic, clear gel configurations that display excellent thixotropic flow recovery properties.',
    specs:[
      ['Functional Target','Gelling Agent / Dairy Stabilization'],
      ['Gel Strength (Kappa)','≥ 1,200 g/cm² (1.5% gel with KCl)'],
      ['Solubility','Requires thermal activation (≥ 75°C)'],
      ['Synergy','Strong gel-reinforcement when mixed with locust bean gum'],
      ['Heavy Metals','Conforms to global food safety standards'],
      ['Shelf Life','24 months'],
      ['Packaging','25 kg net drum or craft paper bag'],
    ],
  },
  {
    slug:'sodium-alginate', name:'Sodium Alginate', formats:'Low to High Viscosity options',
    imgUrl:'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=80',
    tag:'Brown seaweed derivative · Cold cross-linking · Calcium reactive',
    desc:'Natural polysaccharide hydrocolloid extracted from brown algae. It reacts instantly with calcium ions to establish cold-set, heat-stable structural gel layers. Essential for structured bakery decorations, molecular spherification configurations, fruit-drop simulations, and clear restructuring films.',
    specs:[
      ['Functional Target','Cold Gelling / Film Formation'],
      ['Viscosity (1% Sol.)','300 – 800 cPs (grade dependent)'],
      ['M/G Ratio','Optimized for varied gel elasticity profiles'],
      ['Activation Method','Crosslinks directly with $Ca^{2+}$ ions'],
      ['Purity','Conforms to FCC & FSSAI standards'],
      ['Shelf Life','24 months'],
      ['Packaging','1 kg specialty pouch · 25 kg fiber drum'],
    ],
  },
  {
    slug:'agar-agar', name:'Agar-Agar', formats:'700 to 1200 Gel Strength',
    imgUrl:'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
    tag:'Rhodophyta derived · High hysteresis · Firm thermo-stable gel',
    desc:'Highly functional plant-based gelling agent derived from red seaweeds. Demonstrates a profound structural hysteresis loop ($35^\\circ\\text{C} - 85^\\circ\\text{C}$ transition parameters), forming strongly defined, crisp structural matrices that retain excellent thermal stability without requiring additive ions.',
    specs:[
      ['Functional Target','Syneresis Control / Plant Gelation'],
      ['Gel Strength','700 – 1,200 g/cm² (1.5% solution matrix)'],
      ['Gelling Point','Sets rapidly between 35°C – 40°C'],
      ['Melting Point','Liquefies optimally at 85°C – 95°C'],
      ['Moisture Level','≤ 12.0%'],
      ['Shelf Life','24 months under cool settings'],
      ['Packaging','1 kg pouch · 20 kg industrial cartoon box'],
    ]
  }
];

/* Dual-Mode Layout Visual Renderer */
window.V_CAKE_ART = function (v, isConcentrate) {
  if (v.imgUrl) {
    return `
      <div class="w-full h-full absolute inset-0 bg-neutral-100 flex items-center justify-center select-none">
        <img 
          src="${v.imgUrl}" 
          alt="${v.name}" 
          class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>`;
  }
  
  let imgPrefix = v.slug;
  if (v.slug === 'chocolate') imgPrefix = 'choco';
  if (v.slug === 'red-velvet') imgPrefix = 'red';
  if (v.slug === 'brownie') imgPrefix = 'brown';
  
  const suffix = isConcentrate ? '2' : '1';
  const imgPath = `assets/img/${imgPrefix}${suffix}.webp`;

  return `
    <div class="w-full h-full absolute inset-0 bg-neutral-100 flex items-center justify-center select-none">
      <img 
        src="${imgPath}" 
        alt="${v.name}" 
        class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>`;
};

/* Unified Injection Engine: Alternates rows dynamically depending on active slug query parameter */
window.V_RenderCakeFlavours = function (opts) {
  const host = document.getElementById(opts.hostId);
  if (!host) return;
  
  const urlParams = new URLSearchParams(window.location.search);
  const currentSlug = urlParams.get('slug') || '';
  
  const targetDataset = (currentSlug === 'hydrocolloids') ? window.V_HYDRO_TYPES : window.V_CAKE_FLAVOURS;
  const labelPrefix = (currentSlug === 'hydrocolloids') ? 'STABILIZER' : 'FLAVOUR';
  const productLabel = opts.product || ((currentSlug === 'hydrocolloids') ? 'Hydrocolloids' : 'Cake');
  const isConcentrate = currentSlug.toLowerCase().includes('concentrate');

  host.innerHTML = targetDataset.map((v, i) => {
    const num = String(i + 1).padStart(2, '0');
    const totalCount = String(targetDataset.length).padStart(2, '0');
    const reverse = i % 2 === 1;
    
    return `
      <article id="item-${v.slug}" class="py-14 md:py-20 ${i !== 0 ? 'border-t border-black/10' : ''}">
        <div class="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div class="md:col-span-5 ${reverse ? 'md:order-2' : ''}">
            <div class="relative rounded-[24px] overflow-hidden border border-black/10 aspect-[4/5]" data-reveal>
              ${window.V_CAKE_ART(v, isConcentrate)}
              <div class="absolute top-4 left-4 chip !bg-[color:var(--v-cream)]/90 !text-[color:var(--v-ink)]">${v.formats}</div>
              <div class="absolute bottom-4 left-4 font-mono-caps text-[10px] text-[color:var(--v-cream)]/85 z-10">N° ${num} / ${totalCount}</div>
            </div>
          </div>
          <div class="md:col-span-7 ${reverse ? 'md:order-1' : ''}">
            <div class="chapter-num text-xs" data-reveal>${labelPrefix} ${num}</div>
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
              <button data-quote-product="${v.name} — ${productLabel}" class="btn-gold">
                Request Sample / Quote →
              </button>
            </div>
          </div>
        </div>
      </article>`;
  }).join('');

  if (window.gsap && window.ScrollTrigger) {
    window.gsap.utils.toArray('#' + opts.hostId + ' [data-reveal]').forEach((el) => {
      window.gsap.fromTo(el, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.0, ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      });
    });
  }
};
