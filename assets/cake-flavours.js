/* ============================================================
   Vedganga — Cake Flavours Portfolio Engine
   (c) Vedganga · All rights reserved
   ============================================================ */

/* ——— Cake Flavour Art Helper ——— */
window.V_CAKE_ART = (function(){
  const palette = {
    vanilla:  '#f5e6ca',
    chocolate:'#4a2c2a',
    redVelvet:'#c23b22',
    mava:     '#f4d03f',
    lava:     '#e74c3c',
    brownie:  '#5d3a1a'
  };
  function art(slug){ return palette[slug] || '#d4a574'; }
  return { art, palette };
})();

/* —————————— Cake Flavours —————————— */
window.V_CAKE_FLAVOURS = [{
  slug:'vanilla', name:'Vanilla Cake Premix',
  desc:'Classic vanilla flavour with a rich, creamy taste profile.',
  art: window.V_CAKE_ART.art('vanilla'),
  tags:['vanilla','premix','classic'],
  details:'Ideal for sponge, pound, and layered cakes. Consistent crumb structure.'
},{
  slug:'chocolate', name:'Chocolate Cake Premix',
  desc:'Deep cocoa flavour for a moist, indulgent chocolate experience.',
  art: window.V_CAKE_ART.art('chocolate'),
  tags:['chocolate','premix','indulgent'],
  details:'Rich colour and mouthfeel. Works well for cupcakes and celebration cakes.'
},{
  slug:'red-velvet', name:'Red Velvet Cake Premix',
  desc:'Subtle cocoa with a vibrant red hue and a smooth, velvety finish.',
  art: window.V_CAKE_ART.art('redVelvet'),
  tags:['red-velvet','premix','premium'],
  details:'Pairs beautifully with cream cheese frosting. Excellent shelf appeal.'
},{
  slug:'mava', name:'Mava Cake Concentrate',
  desc:'Traditional Indian mava (khoya) flavour with a rich, milky sweetness.',
  art: window.V_CAKE_ART.art('mava'),
  tags:['mava','concentrate','indian-sweet'],
  details:'Authentic mava taste, ideal for fusion and festive confectionery.'
},{
  slug:'brownie', name:'Brownie Premix',
  desc:'Dense, fudgy chocolate brownie with a crackly top and chewy centre.',
  art: window.V_CAKE_ART.art('brownie'),
  tags:['brownie','premix','chocolate'],
  details:'Versatile base for nut, caramel, or cheesecake brownie variants.'
},{
  slug:'lava', name:'Choco Lava Cake Premix',
  desc:'Molten-centre chocolate cake providing a luxurious, flowing core.',
  art: window.V_CAKE_ART.art('lava'),
  tags:['lava-cake','premix','chocolate'],
  details:'Designed for high-temperature short-bake, delivering consistent molten centres.'
}];

/* —————————— Hydrocolloids —————————— */
window.V_HYDRO_TYPES = [{
  slug:'xanthan', name:'Xanthan Gum',
  desc:'A powerful thickening and stabilising agent.',
  tags:['hydrocolloid','thickener','stabiliser'],
  details:'Effective at low concentrations; shear-thinning behaviour.'
},{
  slug:'monk-fruit', name:'Monk Fruit Powder',
  desc:'Monk Fruit Powder — natural zero-calorie sweetener.',
  tags:['hydrocolloid','sweetener','natural'],
  details:'Derived from monk fruit; suitable for sugar-free formulations.'
},{
  slug:'guar', name:'Guar Gum',
  desc:'Natural thickener and binder from guar beans.',
  tags:['hydrocolloid','thickener','binder'],
  details:'Excellent water-binding capacity; ideal for gluten-free applications.'
},{
  slug:'carrageenan', name:'Carrageenan',
  desc:'Seaweed-derived gelling and thickening agent.',
  tags:['hydrocolloid','gelling','thickener'],
  details:'Available in kappa, iota, and lambda grades for tailored gel textures.'
},{
  slug:'sodium-alginate', name:'Sodium Alginate',
  desc:'Brown-algae extract for gelation and film-forming.',
  tags:['hydrocolloid','gelling','film-forming'],
  details:'Reacts with calcium ions for spherification and restructured foods.'
},{
  slug:'agar', name:'Agar-Agar',
  desc:'Vegetable-based gelling agent suitable for a wide pH range.',
  tags:['hydrocolloid','gelling','vegan'],
  details:'Sets at room temperature; provides firm, brittle gels.'
},{
  slug:'enzymes', name:'Enzymes & Dough Improvers',
  desc:'Blends that enhance dough handling, volume, and crumb softness.',
  tags:['enzyme','dough-improver','bakery'],
  details:'Improves extensibility and fermentation tolerance in bread systems.'
},{
  slug:'acidulants', name:'Acidulants & Regulators',
  desc:'pH control agents for flavour balance and preservation.',
  tags:['acidulant','regulator','preservation'],
  details:'Includes citric, malic, and fumaric acids for tailored sourness.'
},{
  slug:'micronutrients', name:'Micronutrients',
  desc:'Fortification blends of vitamins and minerals.',
  tags:['micronutrient','fortification','nutrition'],
  details:'Custom blends available for targeted nutritional enhancement.'
},{
  slug:'sweeteners', name:'Functional Sweeteners',
  desc:'High-intensity and bulk sweeteners for sugar reduction.',
  tags:['sweetener','functional','sugar-free'],
  details:'Includes polyols and high-potency options for diverse applications.'
}];

/* —————————— Raisin & Seed Varieties —————————— */
window.V_RAISIN_TYPES = [{
  slug:'golden-raisins', name:'Golden Raisins',
  desc:'Sun-dried golden raisins with a naturally sweet fruity flavour.',
  tags:['raisin','golden','dried-fruit'],
  details:'Treated to retain golden hue; soft texture with honey-like sweetness.'
},{
  slug:'black-raisins', name:'Black Raisins',
  desc:'Dark, intensely sweet raisins with a rich, bold taste.',
  tags:['raisin','black','dried-fruit'],
  details:'Naturally dark; chewier texture and deeper caramel notes.'
},{
  slug:'multigrains', name:'Multigrains',
  desc:'A blend of wholesome grains for multigrain applications.',
  tags:['grain','multigrain','inclusion'],
  details:'Balanced mix providing nutritional diversity and textural contrast.'
},{
  slug:'sunflower-seeds', name:'Sunflower Seeds',
  desc:'Mild, nutty seeds for topping and inclusion.',
  tags:['seed','sunflower','inclusion'],
  details:'Rich in healthy fats; excellent for breads, bars, and snacks.'
},{
  slug:'pumpkin-seeds', name:'Pumpkin Seeds',
  desc:'Green pepitas with a crisp texture and earthy flavour.',
  tags:['seed','pumpkin','inclusion'],
  details:'Nutrient-dense; pairs well with both sweet and savoury profiles.'
},{
  slug:'flax-seeds', name:'Flax Seeds',
  desc:'Tiny powerhouse seeds high in omega-3 and fibre.',
  tags:['seed','flax','functional'],
  details:'Golden and brown varieties available; adds crunch and nutrition.'
},{
  slug:'til-seeds', name:'Til Seeds (Sesame)',
  desc:'Toasted sesame seeds with a distinctive nutty aroma.',
  tags:['seed','sesame','til'],
  details:'White and black varieties; classic for burger buns and Asian breads.'
},{
  slug:'melon-seeds', name:'Melon Seeds',
  desc:'Delicate, crunchy melon seeds for specialty baked goods.',
  tags:['seed','melon','specialty'],
  details:'Mild flavour profile; adds visual appeal and delicate crunch.'
}];

/* —————————— Preservatives & Acids —————————— */
window.V_PRESERVATIVE_TYPES = [{
  slug:'calcium-propionate', name:'Calcium Propionate',
  desc:'Mould inhibitor for bakery products extending shelf life.',
  tags:['preservative','antimicrobial','bakery'],
  details:'Effective against mould without affecting yeast activity in bread.'
},{
  slug:'potassium-sorbate', name:'Potassium Sorbate',
  desc:'Broad-spectrum preservative for cakes, fillings, and icings.',
  tags:['preservative','antimicrobial','broad-spectrum'],
  details:'Highly effective in low-pH systems; inhibits yeast, mould, and some bacteria.'
},{
  slug:'sorbic-acid', name:'Sorbic Acid',
  desc:'Organic acid preservative for confectionery and baked goods.',
  tags:['preservative','acid','organic'],
  details:'Fat-soluble form useful in high-fat matrices and surface treatments.'
},{
  slug:'tartaric-acid', name:'Tartaric Acid',
  desc:'Natural acidulant providing a sharp, clean sourness.',
  tags:['acidulant','tartaric','natural'],
  details:'Key component in baking powder systems; stabilises egg-white foams.'
}];

/* —————————— Starches & Derivatives —————————— */
window.V_STARCH_TYPES = [{
  slug:'modified-starch', name:'Modified Starch',
  desc:'Functionally enhanced starch for superior process tolerance.',
  tags:['starch','modified','thickener'],
  details:'Provides shear, acid, and freeze-thaw stability across applications.'
},{
  slug:'corn-starch', name:'Corn Starch',
  desc:'Versatile native starch for thickening and binding.',
  tags:['starch','corn','native'],
  details:'Clean-label option; reliable gel formation upon heating.'
},{
  slug:'tapioca-starch', name:'Tapioca Starch',
  desc:'Root starch delivering a glossy, clear gel and neutral taste.',
  tags:['starch','tapioca','gluten-free'],
  details:'Excellent for fruit fillings and gluten-free formulations.'
},{
  slug:'liquid-glucose', name:'Liquid Glucose',
  desc:'Syrup that controls crystallisation and adds body.',
  tags:['sweetener','liquid-glucose','confectionery'],
  details:'Prevents sugar bloom in icings; provides smooth mouthfeel.'
},{
  slug:'maltodextrin', name:'Maltodextrin',
  desc:'Bulking agent and carrier with low sweetness and high solubility.',
  tags:['starch-derivative','maltodextrin','bulking'],
  details:'Used for spray-drying flavours and building body in low-fat systems.'
},{
  slug:'maltitol', name:'Maltitol',
  desc:'Sugar alcohol providing bulk sweetness with reduced calories.',
  tags:['polyol','maltitol','sugar-free'],
  details:'Approximately 90% sweetness of sucrose; suitable for diabetic formulations.'
}];  // ←  FIXED: V_STARCH_TYPES now properly closed

/* —————————— Fibers —————————— */
window.V_FIBER_TYPES = [{
  slug:'fos', name:'Fructo Oligosaccharide (FOS)',
  desc:'Prebiotic soluble fibre supporting digestive health.',
  tags:['fibre','prebiotic','FOS'],
  details:'Mildly sweet; promotes beneficial gut bacteria growth.'
},{
  slug:'polydextrose-p95', name:'Polydextrose (P-95)',
  desc:'Low-calorie bulking fibre for sugar and fat replacement.',
  tags:['fibre','polydextrose','bulking'],
  details:'High tolerance; suitable for reduced-calorie baked goods and bars.'
},{
  slug:'scf-l55', name:'Soluble Corn Fiber (L-55)',
  desc:'Digestion-resistant corn fibre for fibre enrichment.',
  tags:['fibre','soluble-corn-fibre','prebiotic'],
  details:'L-55 grade: balanced solubility and process tolerance.'
},{
  slug:'scf-l65', name:'Soluble Corn Fiber (L-65)',
  desc:'Higher-fibre version with enhanced digestive tolerance.',
  tags:['fibre','soluble-corn-fibre','prebiotic'],
  details:'L-65 grade: optimised for high-fibre claim applications.'
},{
  slug:'scf-l55-plus', name:'Soluble Corn Fiber (L-55+)',
  desc:'Advanced formulation for superior clarity and stability.',
  tags:['fibre','soluble-corn-fibre','prebiotic'],
  details:'L-55+ grade: improved solubility in clear beverage systems.'
},{
  slug:'inulin', name:'Inulin',
  desc:'Chicory-root prebiotic fibre with a creamy mouthfeel.',
  tags:['fibre','prebiotic','inulin'],
  details:'Supports fat mimetic properties in dairy and bakery applications.'
}];  // ←  FIXED: V_FIBER_TYPES now properly closed

/* —————————— Proteins —————————— */
window.V_PROTEIN_TYPES = [{
  slug:'soya-isolate', name:'Soya Protein Isolate',
  desc:'High-purity plant protein for nutritional fortification.',
  tags:['protein','soya','plant-based'],
  details:'>90% protein; excellent emulsification and water-binding properties.'
},{
  slug:'pea-protein', name:'Pea Protein',
  desc:'Allergen-friendly plant protein with a balanced amino acid profile.',
  tags:['protein','pea','allergen-friendly'],
  details:'Non-GMO; popular in meat analogues and protein bars.'
},{
  slug:'rice-protein', name:'Rice Protein',
  desc:'Hypoallergenic cereal protein with a mild flavour.',
  tags:['protein','rice','hypoallergenic'],
  details:'Easily digestible; ideal for sensitive formulations.'
},{
  slug:'whey-protein', name:'Whey Protein',
  desc:'Fast-absorbing dairy protein for sports and performance nutrition.',
  tags:['protein','whey','dairy'],
  details:'High biological value; excellent solubility across pH ranges.'
}];  // ←  V_PROTEIN_TYPES was already correctly closed

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

window.V_RenderCakeFlavours = function (opts) {
  const host = document.getElementById(opts.hostId);
  if (!host) return;
  
  const urlParams = new URLSearchParams(window.location.search);
  const currentSlug = urlParams.get('slug') || '';
  
  const isHydrocolloids = (currentSlug === 'hydrocolloids');
  const isRaisins = (currentSlug === 'raisins');
  const isPreservatives = (currentSlug === 'preservatives');
  const isStarches = (currentSlug === 'starches' || currentSlug === 'starches-derivatives');
  const isProteins = (currentSlug === 'proteins');
  const isFibers = (currentSlug === 'fibers'); // 1. Add this line!
  
  // 2. Add isFibers to the card layout check here:
  const isCardLayout = (isHydrocolloids || isRaisins || isPreservatives || isStarches || isProteins || isFibers);
  
  let targetDataset = window.V_CAKE_FLAVOURS;
  if (isHydrocolloids) targetDataset = window.V_HYDRO_TYPES;
  if (isRaisins) targetDataset = window.V_RAISIN_TYPES;
  if (isPreservatives) targetDataset = window.V_PRESERVATIVE_TYPES;
  if (isStarches) targetDataset = window.V_STARCH_TYPES;
  if (isProteins) targetDataset = window.V_PROTEIN_TYPES;
  if (isFibers) targetDataset = window.V_FIBER_TYPES; // 3. Add this line!

  // 4. Update the labels so they display nicely:
  const labelPrefix = isRaisins ? 'VARIETY' : (isPreservatives ? 'PRESERVATIVE' : (isHydrocolloids ? 'CHEMICAL' : (isStarches ? 'STARCH' : (isProteins ? 'PROTEIN' : (isFibers ? 'FIBER' : 'FLAVOUR')))));
  const productLabel = opts.product || (isRaisins ? 'Dry Fruits & Seeds' : (isPreservatives ? 'Preservatives & Acids' : (isHydrocolloids ? 'Specialty Chemicals' : (isStarches ? 'Starches & Derivatives' : (isProteins ? 'Proteins' : (isFibers ? 'Dietary Fibers' : 'Cake')))))));
  const isConcentrate = currentSlug.toLowerCase().includes('concentrate');

  if (isCardLayout) {
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
                          <td class="py-2 pr-4 font-mono-caps text-[9px] text-[color:var(--v-forest-2)] whitespace-nowrap align-top w-[40%]" data-testid="spec-label-${r}">${row[0]}</td>
                          <td class="py-2 text-[color:var(--v-ink)]/90" data-testid="spec-val-${r}">${row[1]}</td>
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
    host.innerHTML = targetDataset.map((v, i) => {
      const num = String(i + 1).padStart(2, '0');
      const totalCount = String(targetDataset.length).padStart(2, '0');
      const reverse = i % 2 === 1;
      const nameParts = v.name.split(' ');
      const firstName = nameParts[0];
      const restName = nameParts.slice(1).join(' ');
      
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
                ${firstName} ${restName ? `<span class="italic font-serif-body font-normal text-[color:var(--v-forest-2)]">${restName}</span>` : ''}
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
                          <td class="py-3 pr-6 font-mono-caps text-[10px] text-[color:var(--v-forest-2)] whitespace-nowrap align-top w-[38%] md:w-[30%]" data-testid="spec-label-${r}">${row[0]}</td>
                          <td class="py-3 text-[color:var(--v-ink)]" data-testid="spec-val-${r}">${row[1]}</td>
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

  if (window.gsap && window.ScrollTrigger) {
    window.gsap.utils.toArray('#' + opts.hostId + ' [data-reveal]').forEach((el) => {
      window.gsap.fromTo(el, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.0, ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      });
    });
  }
};
