const items = [
  {
    id: '1',
    name: 'Filtro de Aceite Motul',
    category: 'repuestos',
    price: 2500,
    description: 'Filtro compatible con motos 110cc',
    image: 'https://http2.mlstatic.com/D_NQ_NP_613319-MLA50791817231_072022-O.webp'
  },
  {
    id: '2',
    name: 'Casco Integral Hawk',
    category: 'accesorios',
    price: 8500,
    description: 'Casco de alta resistencia, ideal para uso urbano y ruta.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_897808-MLA44200543886_122020-O.webp'
  },
  {
    id: '3',
    name: 'Pastilla de Freno Delantera',
    category: 'repuestos',
    price: 3100,
    description: 'Pastilla de freno universal delantera para moto',
    image: 'https://http2.mlstatic.com/D_NQ_NP_777140-MLA31500123555_072019-O.webp'
  },
  {
    id: '4',
    name: 'Guantes de Moto Invierno',
    category: 'accesorios',
    price: 5600,
    description: 'Guantes térmicos antideslizantes para climas fríos',
    image: 'https://http2.mlstatic.com/D_NQ_NP_777534-MLA52924353556_122022-O.webp'
  }
];

export const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!categoryId) resolve(items);
      else resolve(items.filter(i => i.category === categoryId));
    }, 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items.find(i => i.id === id));
    }, 500);
  });
};
