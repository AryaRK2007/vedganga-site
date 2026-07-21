/* Vedganga — Shared products catalogue + editorial SVG art panels.
   Exposes: window.V_PRODUCTS, window.V_ICONS, window.V_ART */

window.V_PRODUCTS = [
  { slug: 'raisins', name: 'Raisins & Dry Grapes' },
  { slug: 'cake-premixes', name: 'Cake Premixes' },
  { slug: 'hydrocolloids', name: 'Hydrocolloids & Texturizers' },
  { slug: 'tea-time-bar-cakes', name: 'Tea-Time Bar Cakes' },
  { slug: 'muffin-premixes', name: 'Muffin Premixes' },
  { slug: 'emulsifiers', name: 'Emulsifiers' },
  { slug: 'wheat-gluten', name: 'Wheat Gluten' },
  { slug: 'bread-improvers', name: 'Bread Improvers' },
  { slug: 'starch', name: 'Starch & Derivatives' },
  { slug: 'preservatives', name: 'Preservatives' },
  { slug: 'proteins', name: 'Proteins' },
  { slug: 'fibers', name: 'Fibers' }
];

window.V_ICONS = {
  'raisins': `<g stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="40" cy="55" r="14"/><circle cx="60" cy="42" r="12"/><circle cx="55" cy="65" r="10"/><circle cx="72" cy="58" r="9"/><circle cx="38" cy="75" r="8"/><path d="M56 30 C 58 22, 66 18, 72 20"/><path d="M62 28 L 66 22"/></g>`,
  'cake-premixes': `<g stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 80 L 20 50 L 80 50 L 80 80 Z"/><path d="M20 50 C 25 40, 40 40, 50 50 C 60 40, 75 40, 80 50"/><path d="M35 50 L 35 30 M50 50 L 50 25 M65 50 L 65 30"/><path d="M32 30 L 38 30 M47 25 L 53 25 M62 30 L 68 30"/></g>`,
  'hydrocolloids': `<g stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M30 25 C30 45, 70 45, 70 65"/><circle cx="30" cy="25" r="6" fill="currentColor"/><circle cx="70" cy="65" r="6" fill="currentColor"/><circle cx="50" cy="45" r="4"/><path d="M20 50 H 80 M50 20 V 70"/></g>`,
  'tea-time-bar-cakes': `<g stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="45" width="60" height="30" rx="4"/><path d="M20 55 L 80 55"/><path d="M30 45 L 30 25 C 30 20, 35 18, 40 18"/><path d="M30 25 L 22 25 L 25 18 L 27 25"/><path d="M50 45 L 50 30"/><path d="M70 45 L 70 30"/><path d="M20 75 L 80 75"/></g>`,
  'muffin-premixes': `<g stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M25 55 L 30 85 L 70 85 L 75 55 Z"/><path d="M25 55 C 25 40, 40 30, 50 30 C 60 30, 75 40, 75 55"/><path d="M30 40 L 32 55 M40 33 L 40 55 M50 30 L 50 55 M60 33 L 60 55 M70 40 L 68 55"/><path d="M30 68 L 70 68"/></g>`,
  'emulsifiers': `<g stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M40 15 L 40 40 L 25 75 C 22 82, 27 88, 34 88 L 66 88 C 73 88, 78 82, 75 75 L 60 40 L 60 15 Z"/><path d="M35 15 L 65 15"/><circle cx="42" cy="70" r="2"/><circle cx="55" cy="62" r="2.5"/><circle cx="48" cy="80" r="2"/></g>`,
  'wheat-gluten': `<g stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M50 88 L 50 20"/><path d="M50 25 C 40 22, 32 27, 30 35 M50 25 C 60 22, 68 27, 70 35"/><path d="M50 40 C 40 37, 32 42, 30 50 M50 40 C 60 37, 68 42, 70 50"/><path d="M50 55 C 40 52, 32 57, 30 65 M50 55 C 60 52, 68 57, 70 65"/></g>`,
  'bread-improvers': `<g stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 55 C 15 40, 30 30, 50 30 C 70 30, 85 40, 85 55 C 85 68, 70 78, 50 78 C 30 78, 15 68, 15 55 Z"/><path d="M25 50 L 30 45 L 35 50 L 40 45 L 45 50 L 50 45 L 55 50 L 60 45 L 65 50 L 70 45 L 75 50"/><path d="M25 65 L 75 65"/></g>`,
  'starch': `<g stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M50 15 L 60 25 L 50 35 L 40 25 Z"/><path d="M50 65 L 60 75 L 50 85 L 40 75 Z"/><path d="M15 50 L 25 40 L 35 50 L 25 60 Z"/><path d="M65 50 L 75 40 L 85 50 L 75 60 Z"/><path d="M50 35 L 50 65 M35 50 L 65 50"/></g>`,
  'preservatives': `<g stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M50 12 L 80 22 L 80 50 C 80 68, 68 82, 50 88 C 32 82, 20 68, 20 50 L 20 22 Z"/><path d="M35 50 L 45 60 L 65 40"/></g>`,
  'proteins': `<g stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M30 15 C 60 25, 60 45, 30 55 C 60 65, 60 85, 30 88"/><path d="M70 15 C 40 25, 40 45, 70 55 C 40 65, 40 85, 70 88"/><path d="M30 30 L 70 30 M30 45 L 70 45 M30 60 L 70 60 M30 75 L 70 75"/></g>`,
  'fibers': `<g stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M50 15 C 30 30, 30 55, 50 88"/><path d="M50 15 C 70 30, 70 55, 50 88"/><path d="M50 15 L 50 88"/><path d="M25 40 C 40 45, 60 45, 75 40"/><path d="M20 60 C 40 65, 60 65, 80 60"/></g>`
};

/* Reusable portfolio visual generator for the homepage grid using high-quality professional URLs */
window.V_ART = function (p, i) {
  const urlMap = {
    'raisins': 'https://images.unsplash.com/photo-1543158181-1274e5362710?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'cake-premixes': 'https://images.unsplash.com/photo-1602351447937-745cb720612f?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'hydrocolloids': 'https://t3.ftcdn.net/jpg/02/65/44/64/360_F_265446412_EuefgWWRqi3QOrJMEy8fuZMFMtza5AgA.jpg',
    'tea-time-bar-cakes': 'https://globchem.in/cdn/shop/files/choco-chips-tea-time-400x400_1000x1000.jpg?v=1654152890',
    'muffin-premixes': 'https://images.unsplash.com/photo-1623246123320-0d6636755796?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'emulsifiers': 'https://images.unsplash.com/photo-1534432182912-63863115e106?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'wheat-gluten': 'https://images.unsplash.com/photo-1561978248-bffcdd0457ad?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'bread-improvers': 'https://images.unsplash.com/photo-1695150455847-a34429ebfaca?q=80&w=995&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'starch': 'https://images.unsplash.com/photo-1627485937980-221c88ac04f9?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'preservatives': 'https://images.unsplash.com/photo-1737099113538-ea75c2ffce50?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'proteins': 'https://images.unsplash.com/photo-1693996045300-521e9d08cabc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'fibers': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80'
  };

  const imgUrl = urlMap[p.slug] || 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80';

  return `
    <div class="w-full h-full absolute inset-0 bg-neutral-900 overflow-hidden rounded-3xl select-none">
      <img 
        src="${imgUrl}" 
        alt="${p.name}" 
        class="w-full h-full object-cover opacity-85 scale-100 transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-100"
      />
    </div>`;
};
