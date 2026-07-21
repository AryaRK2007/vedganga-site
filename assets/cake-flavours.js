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

/* Hydrocolloid & Specialty Chemicals Technical Database */
window.V_HYDRO_TYPES = [
  {
    slug:'xanthan-gum', name:'Xanthan Gum', formats:'80 & 200 Mesh',
    tag:'High shear-thinning · Pseudoplasticity · Emulsion stability',
    desc:'Premium food-grade polysaccharide stabilizer providing exceptional viscosity control. Delivers robust suspension capabilities, freeze-thaw resilience, and stability across extreme pH variations.',
    specs:[['Functional Target','Thickener / Suspension Agent'],['Optimal pH Range','3.0 – 11.0'],['Viscosity (1% Sol.)','1,200 – 1,600 cPs'],['Shelf Life','24 months']]
  },
  {
    slug:'guar-gum', name:'Guar Gum', formats:'High Viscosity Systems',
    tag:'Galactomannan matrix · Cold water soluble · High binding',
    desc:'Extracted from selected guar seeds, this texturizer optimizes moisture management. Extensively utilized to smooth out defects and prevent ice crystal synthesis in dairy and dough systems.',
    specs:[['Functional Target','Water Binding / Yield Maximization'],['Viscosity (1% Sol.)','3,500 – 5,000 cPs'],['Mesh Rating','90% passing 200 mesh'],['Shelf Life','24 months']]
  },
  {
    slug:'carrageenan', name:'Carrageenan', formats:'Kappa & Iota Grades',
    tag:'Dairy protein reactive · Thermoreversible gelation',
    desc:'Sourced from natural red seaweed. Kappa yields firm, brittle matrices ideal for milk systems; Iota sets into elastic, clear gels displaying excellent thixotropic flow recovery properties.',
    specs:[['Functional Target','Gelling Agent / Dairy Stabilization'],['Gel Strength (Kappa)','≥ 1,200 g/cm²'],['Solubility','Requires thermal activation (≥ 75°C)'],['Shelf Life','24 months']]
  },
  {
    slug:'sodium-alginate', name:'Sodium Alginate', formats:'Low to High Viscosity',
    tag:'Brown seaweed derivative · Calcium reactive',
    desc:'Reacts instantly with calcium ions to establish cold-set, heat-stable structural layers. Vital for structured decorations, spherification parameters, and clear film barriers.',
    specs:[['Functional Target','Cold Gelling / Film Formation'],['Viscosity (1% Sol.)','300 – 800 cPs'],['Crosslinking','Direct with $Ca^{2+}$ ions'],['Shelf Life','24 months']]
  },
  {
    slug:'agar-agar', name:'Agar-Agar', formats:'700 to 1200 Gel Strength',
    tag:'Rhodophyta derived · Firm thermo-stable gel',
    desc:'Derived from red seaweeds, demonstrating a profound structural hysteresis loop ($35^\\circ\\text{C} - 85^\\circ\\text{C}$). Forms highly defined, crisp matrices without requiring additive ions.',
    specs:[['Functional Target','Syneresis Control / Plant Gelation'],['Gel Strength','700 – 1,200 g/cm²'],['Transition Parameters','Sets 35–40°C · Melts 85–95°C'],['Shelf Life','24 months']]
  },
  {
    slug:'enzymes-improvers', name:'Enzymes & Dough Improvers', formats:'Industrial Concentrations',
    tag:'Alpha-Amylase · Xylanase · Lipase · Glucose Oxidase',
    desc:'Targeted biocatalytic enzymes engineered to upgrade structural elasticity, accelerate gas retention, maximize loaf volume, and extend fresh-crumb softness over shelf life.',
    specs:[['Active Elements','Alpha-Amylase · Xylanase · Lipase'],['Functional Target','Gluten Network Optimization'],['Dosage Range','Custom process dependent'],['Shelf Life','12 months']]
  },
  {
    slug:'acidulants', name:'Acidulants & Regulators', formats:'Pure Crystalline / Glacial',
    tag:'Citric Acid · Malic Acid · Lactic Acid · Fumaric Acid · Ascorbic Acid · Tartaric Acid',
    desc:'High-purity food-grade processing acids used for precise pH adjustment, flavour enhancement, shelf stabilization, and structural dough modification.',
    specs:[['Composition Portfolio','Citric · Malic · Lactic · Fumaric · Acetic'],['Functional Target','pH Regulation / Microbial Control'],['Compliance','FSSAI, JECFA & FCC Standards]'],['Shelf Life','24 months']]
  },
  
  {
    slug:'micronutrients', name:'Micronutrients & Supplements', formats:'Bio-Available Minerals',
    tag:'Ferrous Sulphate · Zinc Oxide · Mineral Chelates',
    desc:'Premium bio-available food fortification ingredients, including precise mineral salts and amino compositions designed for nutritional optimization.',
    specs:[['Iron Formats','Ferrous Sulphate · Ferractiv Chelate'],['Zinc Formats','Zinc Oxide · Zinc Acetate · Zinc Sulphate'],['Amino Elements','Glycine · L-Glutamine · L-Arginine'],['Shelf Life','24 months']]
  },
  {
    slug:'sweeteners', name:'Functional Sweeteners', formats:'Granular & Powdered',
    tag:'Dextrose · Mannitol · Sucralose · Stevia Extract',
    desc:'High-performance sweetening matrices providing variable bulking properties, humidity tracking, browning control, and high-intensity structural stabilization.',
    specs:[['Bulk Sweeteners','Dextrose · Mannitol'],['High Intensity','Sucralose · Stevia Extract'],['Humectant Action','Optimized moisture control'],['Shelf Life','24 months']]
  }
];

/* Asset Framework Renderer */
window.V_CAKE_ART = function (v, isConcentrate) {
  if (v.imgUrl) {
    return `<div class="w-full h-full absolute inset-0 bg-neutral-100 flex items-center justify-center select-none">
              <img src="${v.imgUrl}" alt="${v.name}" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>`;
  }
  let imgPrefix = v.slug === 'chocolate' ? 'choco' : (v.slug === 'red-velvet' ? 'red' : (v.slug === 'brownie' ? 'brown' : v.slug));
  return `<div class="w-full h-full absolute inset-0 bg-neutral-100 flex items-center justify-center select-none">
            <img src="assets/img/${imgPrefix}${isConcentrate ? '2' : '1'}.webp" alt="${v.name}" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>`;
};

/* Unified Injection Engine: Alternates templates dynamically based on active product slug */
window.V_RenderCakeFlavours = function (opts) {
  const host = document.getElementById(opts.hostId);
  if (!host) return;
  
  const urlParams = new URLSearchParams(window.location.search);
  const currentSlug = urlParams.get('slug') || '';
  
  const isHydrocolloids = (currentSlug === 'hydrocolloids');
  const targetDataset = isHydrocolloids ? window.V_HYDRO_TYPES : window.V_CAKE_FLAVOURS;
  const labelPrefix = isHydrocolloids ? 'CHEMICAL' : 'FLAVOUR';
  const productLabel = opts.product || (isHydrocolloids ? 'Specialty Chemicals' : 'Cake');
  const isConcentrate = currentSlug.toLowerCase().includes('concentrate');

  if (isHydrocolloids) {
    // Renders as text blocks without pictures
    host.innerHTML = `
      <div class="grid md:grid-cols-2 gap-8 items-start">
        ${targetDataset.map((v, i) => {
          const num = String(i + 1).padStart(2, '0');
          return `
            <article id="item-${v.slug}" class="p-8 rounded-3xl border border-black/10 bg-[color:var(--v-cream-2)] flex flex-col justify-between h-full" data-reveal>
              <div>
                <div class="flex items-center justify-between border-b border-black/10 pb-4 mb-4">
                  <div class="font-mono-caps text-[11px] text-[color:var(--v-forest-2)]">${labelPrefix} ${num} // ${v.formats}</div>
                  <span class="text-xs font-mono bg-[color:var(--v-forest)] text-[color:var(--v-cream)] px-2 py-0.5 rounded">Active</span>
                </div>
                <h3 class="font-display text-2xl md:text-3xl leading-tight text-[color:var(--v-ink)]">
                  ${v.name}
                </h3>
                <p class="mt-2 text-sm font-serif-body italic text-[color:var(--v-forest-2)]">${v.tag}</p>
                <p class="mt-4 text-sm text-[color:var(--v-ink)]/80 leading-relaxed">${v.desc}</p>
                
                <div class="mt-6">
                  <table class="w-full border-collapse text-xs">
                    <tbody>
                      ${v.specs.map((row, r) => `
                        <tr class="border-b border-black/5">
                          <td class="py-2 pr-4 font-mono-caps text-[9px] text-[color:var(--v-forest-2)] whitespace-nowrap align-top w-[40%]">${row[0]}</td>
                          <td class="py-2 text-[color:var(--v-ink)]/90">${row[1]}</td>
                        </tr>`).join('')}
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="mt-8 pt-4 border-t border-black/5">
                <button data-quote-product="${v.name} — ${productLabel}" class="w-full text-center py-3 bg-[color:var(--v-forest)] text-[color:var(--v-cream)] rounded-xl text-xs font-mono-caps uppercase tracking-wider hover:bg-[color:var(--v-gold)] transition-colors duration-300">
                  Request Matrix Sample →
                </button>
              </div>
            </article>`;
        }).join('')}
      </div>`;
  } else {
    // Alternating full-width image row layout for bakery lines
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
  }

  // Animation Engine Hook
  if (window.gsap && window.ScrollTrigger) {
    window.gsap.utils.toArray('#' + opts.hostId + ' [data-reveal]').forEach((el) => {
      window.gsap.fromTo(el, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.0, ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      });
    });
  }
};
