/* Vedganga — Shared product variants & editorial layout engines.
   Exposes: window.V_CAKE_FLAVOURS, window.V_HYDRO_TYPES, window.V_RAISIN_TYPES, window.V_PRESERVATIVE_TYPES, window.V_STARCH_TYPES, window.V_CAKE_ART, window.V_RenderCakeFlavours */

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

window.V_HYDRO_TYPES = [
  {
    slug:'xanthan-gum', name:'Xanthan Gum', formats:'80 & 200 Mesh',
    tag:'High shear-thinning · Pseudoplasticity · Emulsion stability',
    desc:'Premium food-grade polysaccharide stabilizer providing exceptional viscosity control. Delivers robust suspension capabilities, freeze-thaw resilience, and stability across extreme pH variations.',
    specs:[['Functional Target','Thickener / Suspension Agent'],['Optimal pH Range','3.0 – 11.0'],['Viscosity (1% Sol.)','1,200 – 1,600 cPs'],['Shelf Life','24 months']]
  },
   {
    slug:'monk-fruit', name:'Monk Fruit', formats:'Powdered',
    tag:'High-performance sweetening for variable bulking properties, and high-intensity structural stabilization.',
    desc:'Monk Friut Poweder',
    specs:[['Acts as','Bulk Sweetner'],['High Intensity Sweetener','Suagr Free'],['Humectant Action','Optimized moisture control'],['Shelf Life','24 months']]
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
    specs:[['Functional Target','Cold Gelling / Film Formation'],['Viscosity (1% Sol.)','300 – 800 cPs'],['Crosslinking','Direct with Ca2+ ions'],['Shelf Life','24 months']]
  },
  {
    slug:'agar-agar', name:'Agar-Agar', formats:'700 to 1200 Gel Strength',
    tag:'Rhodophyta derived · Firm thermo-stable gel',
    desc:'Derived from red seaweeds, demonstrating a profound structural hysteresis loop (35°C - 85°C). Forms highly defined, crisp matrices without requiring additive ions.',
    specs:[['Functional Target','Syneresis Control / Plant Gelation'],['Gel Strength','700 – 1,200 g/cm²'],['Transition Parameters','Sets 35–40°C · Melts 85–95°C'],['Shelf Life','24 months']]
  },
  {
    slug:'enzymes-improvers', name:'Enzymes & Dough Improvers', formats:'Industrial Concentrations',
    tag:'Targeted biocatalytic enzymes engineered to upgrade structural elasticity, accelerate gas retention, maximize loaf volume, and extend fresh-crumb softness over shelf life.',
    desc:'Alpha-Amylase · Xylanase · Lipase · Glucose Oxidase',
    specs:[['Active Elements','Alpha-Amylase · Xylanase · Lipase · Glucose Oxidase'],['Functional Target','Gluten Network Optimization'],['Dosage Range','Custom process dependent'],['Shelf Life','12 months']]
  },
  {
    slug:'acidulants', name:'Acidulants & Regulators', formats:'Pure Crystalline / Glacial',
    tag:'High-purity food-grade processing acids used for precise pH adjustment, flavour enhancement, shelf stabilization, and structural dough modification.',
    desc:'Citric Acid · Malic Acid · Lactic Acid · Fumaric Acid · Ascorbic Acid · Tartaric Acid · Acetic Acid',
    specs:[['Composition Portfolio','Citric · Malic · Lactic · Fumaric · Ascorbic · Tartaric · Acetic'],['Functional Target','pH Regulation / Microbial Control'],['Compliance','FSSAI, JECFA & FCC Standards'],['Shelf Life','24 months']]
  },
  {
    slug:'micronutrients', name:'Micronutrients & Supplements', formats:'Bio-Available Minerals',
    tag:'Premium bio-available food fortification ingredients, including precise mineral salts and amino compositions designed for nutritional optimization.',
    desc:'Ferrous Sulphate · Zinc Oxide · Mineral Chelates',
    specs:[['Iron Formats','Ferrous Sulphate · Ferractiv Chelate'],['Zinc Formats','Zinc Oxide · Zinc Acetate · Zinc Sulphate'],['Amino Elements','Glycine · L-Glutamine · L-Arginine'],['Shelf Life','24 months']]
  },
  {
    slug:'sweeteners', name:'Functional Sweeteners', formats:'Granular & Powdered',
    tag:'High-performance sweetening matrices providing variable bulking properties, humidity tracking, browning control, and high-intensity structural stabilization.',
    desc:'Dextrose · Mannitol · Sucralose · Stevia Extract · Mannose',
    specs:[['Bulk Sweeteners','Dextrose · Mannitol'],['High Intensity','Sucralose · Stevia Extract'],['Humectant Action','Optimized moisture control'],['Shelf Life','24 months']]
  }
];

window.V_RAISIN_TYPES = [
  {
    slug:'golden', name:'Golden Raisins', formats:'Grade A · Premium Cultivar',
    tag:'Sulphur-bleached · Bright yellow-gold · Sweet plum note',
    desc:'Carefully sun-dried and sulphur-treated golden raisins offering a plump, juicy texture and consistent light coloration. Perfect for high-end artisan panettones, cakes, and luxury retail packs.',
    specs:[['Moisture Content','14% – 16% Max'],['Sizing Options','Medium (300-350 berries/100g)'],['Purity','99.5% Sortex Cleaned'],['Shelf Life','12 months']]
  },
  {
    slug:'black', name:'Black Raisins', formats:'Natural Sun-Cured',
    tag:'Seedless · Deep black skin · Rich natural sugars',
    desc:'Naturally sun-cured black raisins possessing a deep flavour profile and high natural sugar content. Excellent for energy bars, traditional baked items, and bulk industrial applications.',
    specs:[['Moisture Content','13% – 15% Max'],['Processing','Triple washed & laser sorted'],['Foreign Matter','Nil (0.0%)'],['Shelf Life','12 months']]
  },
  {
    slug:'multigrain', name:'Multigrains', formats:'Customizable',
    tag:'High Quality · Customizable · Sunflower, Pumpkin, Flax, Sesame, Melon Seeds',
    desc:'Selected white (hulled) and black natural sesame seeds offering intense aroma upon baking. Essential inclusion for burger buns, artisanal crackers, and traditional confectionery lines.',
    specs:[['Varieties','Sunflower, Pumpkin, Flax, Sesame, Melon Seeds'],['Purity','Quality Assured'],['Shelf Life','12 months']]
  },
  {
    slug:'sunflower', name:'Sunflower Seeds', formats:'Peeled Kernel Grade',
    tag:'Raw & Roasted · High oil integrity · Crunchy texture',
    desc:'Clean, uniform-sized sunflower seed kernels sourced from premium crops. Imparts a delicate nutty flavor and satisfying crunch into multi-grain breads, buns, and snack bars.',
    specs:[['Purity Standards','99.9% Cleaned & Destoned'],['Broken Kernels','3% Max'],['Moisture','5% – 7% Max'],['Shelf Life','12 months']]
  },
  {
    slug:'pumpkin', name:'Pumpkin Seeds', formats:'Shine-Skin / Peeled',
    tag:'Deep green kernel · Rich in protein · Mild earthy note',
    desc:'High-grade raw pumpkin seed kernels offering a vibrant green appearance and clean, nutty aroma. Widely utilized as decorative toppings on artisan breads and health-focused snack matrices.',
    specs:[['Purity Standards','99.9% Pure Grade A'],['Admixture','0.1% Max'],['Moisture','6% Max'],['Shelf Life','12 months']]
  },
  {
    slug:'flax', name:'Flax Seeds', formats:'Golden & Brown Cultivars',
    tag:'High Omega-3 fatty acids · Mucilage-rich · Dietary fibre',
    desc:'Cleaned brown and golden flax seeds packed with essential fatty acids and functional mucilage components. Exceptional water binding behavior for functional health formulations.',
    specs:[['Oil Content','35% – 40% Min'],['Purity','99.5% Cleaned'],['Moisture','8% Max'],['Shelf Life','12 months']]
  },
  {
    slug:'til', name:'Til Seeds (Sesame)', formats:'Hull & Natural Black/White',
    tag:'High oil yield · Uniform size · Aromatic roasting profile',
    desc:'Selected white (hulled) and black natural sesame seeds offering intense aroma upon baking. Essential inclusion for burger buns, artisanal crackers, and traditional confectionery lines.',
    specs:[['Varieties','Hulled White / Natural Black'],['Purity','99.9% Sortex Cleaned'],['Free Fatty Acids','1.5% Max'],['Shelf Life','12 months']]
  },
  {
    slug:'melon', name:'Melon Seeds', formats:'Pure White Kernels',
    tag:'Subtle sweetness · Smooth texture · Traditional bakery use',
    desc:'Peeled white melon kernels thoroughly dried and graded for commercial bakery usage. Imparts a mild, pleasant crunch and enriches rich seasonal sweets and specialty breads.',
    specs:[['Purity Standards','99.9% Pure Kernel'],['Damaged Kernels','2% Max'],['Moisture','6% Max'],['Shelf Life','12 months']]
  }
];

window.V_PRESERVATIVE_TYPES = [
  {
    slug:'calcium-propionate', name:'Calcium Propionate', formats:'Powder & Granular',
    tag:'Mold inhibitor · Bread & bakery preservation · Neutral taste profile',
    desc:'An effective antimicrobial agent widely used in yeast-raised baked goods to inhibit mold and rope-forming bacteria growth without interfering with yeast activity during fermentation.',
    specs:[['Functional Target','Mold & Rope Inhibition'],['Recommended Dosage','0.1% – 0.3% on flour weight'],['Solubility','Water soluble'],['Shelf Life','24 months']]
  },
  {
    slug:'potassium-sorbate', name:'Potassium Sorbate', formats:'Extruded Pellets / Granular',
    tag:'Broad-spectrum preservative · Yeast & mold control',
    desc:'A high-purity potassium salt of sorbic acid designed to extend shelf life across high-moisture bakery items, confectionery lines, syrups, and beverages by preventing yeast and mold propagation.',
    specs:[['Functional Target','Yeast & Mold Suppression'],['Optimal pH Range','Effective below pH 6.0'],['Solubility','Highly soluble in water'],['Shelf Life','24 months']]
  },
  {
    slug:'sorbic-acid', name:'Sorbic Acid', formats:'Pure Crystalline Powder',
    tag:'High potency preservative · Low pH stability',
    desc:'A natural-identical organic acid offering exceptional preservative action against molds and yeasts in acidic food matrices. Ideal for surface treatments and high-acid product environments.',
    specs:[['Functional Target','Antimicrobial Control'],['Purity Standard','99.0% – 101.0% FCC'],['Melting Point','132°C – 135°C'],['Shelf Life','24 months']]
  },
  {
    slug:'tartaric-acid', name:'Tartaric Acid', formats:'L(+) Natural Crystalline',
    tag:'Natural fruit acid · Leavening reaction · Flavour sharper',
    desc:'A naturally occurring organic acid used for precise pH reduction, tart flavor enhancement, and acting as a solid acid component in chemical leavening systems (baking powders).',
    specs:[['Functional Target','Acidulant / Leavening Agent'],['Optical Activity','+12.0° to +13.0°'],['Compliance','FSSAI & FCC Grade'],['Shelf Life','24 months']]
  }
];

window.V_STARCH_TYPES = [
  {
    slug:'modified-starch', name:'Modified Starch', formats:'Cross-linked & Stabilized',
    tag:'High shear stability · Freeze-thaw resilience · Smooth mouthfeel',
    desc:'Engineered food-grade modified starches designed to withstand severe thermal processing, mechanical shear, and acidic conditions. Delivers excellent clarity, viscosity control, and long-term shelf stability in dressings, sauces, and fillings.',
    specs:[
      ['Application','Sauces · Dressings · Fillings · Gravies'],
      ['Functional Target','Viscosity & Freeze-Thaw Stability'],
      ['Viscosity Profile','High peak hot viscosity'],
      ['Shelf Life','24 months (ambient, sealed)'],
      ['Packaging','25 kg multi-wall paper bag'],
    ],
  },
  {
    slug:'corn-starch', name:'Corn Starch', formats:'Native & Industrial Grade',
    tag:'Clean gelling · Neutral flavor · Classic binding agent',
    desc:'High-purity native corn starch extracted from quality maize kernels. Serves as a fundamental thickening, binding, and body-building agent across bakery custards, puddings, dustings, and processed food formulations.',
    specs:[
      ['Application','Custards · Puddings · Confectionery · Baking'],
      ['Functional Target','Thickening & Gel Formation'],
      ['Moisture Content','12% – 14% Max'],
      ['Shelf Life','24 months (ambient, sealed)'],
      ['Packaging','25 kg industrial bag'],
    ],
  },
  {
    slug:'tapioca-starch', name:'Tapioca Starch', formats:'Native & Modified Flakes',
    tag:'High clarity · String-free texture · Bland taste profile',
    desc:'Extracted from cassava roots, tapioca starch offers exceptional paste clarity, a neutral taste profile, and a smooth, cohesive mouthfeel. Ideal for gluten-free baking architectures, snacks, and glossy fruit glazes.',
    specs:[
      ['Application','Gluten-free baking · Snacks · Glazes · Soups'],
      ['Functional Target','Clarity & Cohesive Texture'],
      ['Gelatinization Temp','Lower gelatinization range (58–70°C)'],
      ['Shelf Life','24 months (ambient, sealed)'],
      ['Packaging','25 kg bag'],
    ],
  },
  {
    slug:'liquid-glucose', name:'Liquid Glucose', formats:'High Conversion Syrup',
    tag:'Moisture retention · Anti-crystallization · Viscous body',
    desc:'A refined, clarified glucose syrup engineered to regulate sweetness, control crystallization in confectionery systems, and extend freshness by locking in internal moisture across baked goods and sweets.',
    specs:[
      ['Application','Confectionery · Fondants · Chewing gums · Baked goods'],
      ['Functional Target','Humectant & Anti-Crystallization'],
      ['Dextrose Equivalent (DE)','42 – 45'],
      ['Shelf Life','12 months (sealed drums/tankers)'],
      ['Packaging','300 kg HDPE drum · Tanker load'],
    ],
  },
  {
    slug:'maltodextrin', name:'Maltodextrin', formats:'10 DE & 20 DE Powder',
    tag:'Spray-dried · Low sweetness bulk agent · Carrier matrix',
    desc:'Easily digestible, highly soluble carbohydrate powder derived from starch conversion. Functions as an ideal bulking agent, carrier for flavors and active ingredients, and texture modifier in dry mixes.',
    specs:[
      ['Application','Dry mixes · Flavor encapsulation · Nutritional bars'],
      ['Functional Target','Bulking & Solubility Matrix'],
      ['Dextrose Equivalent (DE)','10 – 20 DE options available'],
      ['Shelf Life','24 months (ambient, sealed)'],
      ['Packaging','25 kg bag'],
    ],
  },
  {
    slug:'maltitol', name:'Maltitol', formats:'Crystalline Powder & Syrup',
    tag:'Sugar alcohol · Near-sucrose sweetness · Low glycemic index',
    desc:'A premium polyol sweetener providing clean, sugar-like sweetness and bulk properties with significantly reduced caloric impact. Excellent for sugar-free chocolate, hard candies, and diabetic-friendly bakery lines.',
    specs:[
      ['Application','Sugar-free confectionery · Chocolate · Baked goods'],
      ['Functional Target','Low-Calorie Sweetening & Bulk'],
      ['Sweetness Intensity','75% – 90% of sucrose'],
      ['Shelf Life','24 months (ambient, sealed)'],
      ['Packaging','25 kg bag'],
    ],
  }
];

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
  const isCardLayout = (isHydrocolloids || isRaisins || isPreservatives || isStarches);
  
  let targetDataset = window.V_CAKE_FLAVOURS;
  if (isHydrocolloids) targetDataset = window.V_HYDRO_TYPES;
  if (isRaisins) targetDataset = window.V_RAISIN_TYPES;
  if (isPreservatives) targetDataset = window.V_PRESERVATIVE_TYPES;
  if (isStarches) targetDataset = window.V_STARCH_TYPES;

  const labelPrefix = isRaisins ? 'VARIETY' : (isPreservatives ? 'PRESERVATIVE' : (isHydrocolloids ? 'CHEMICAL' : (isStarches ? 'STARCH' : 'FLAVOUR')));
  const productLabel = opts.product || (isRaisins ? 'Dry Fruits & Seeds' : (isPreservatives ? 'Preservatives & Acids' : (isHydrocolloids ? 'Specialty Chemicals' : (isStarches ? 'Starches & Derivatives' : 'Cake'))));
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
                          <td class="py-3 pr-6 font-mono-caps text-[10px] text-[color:var(--v-forest-2)] whitespace-nowrap align-top w-[38% md:w-[30%]" data-testid="spec-label-${r}">${row[0]}</td>
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
