
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


const allProducts = [
  { id: "1", name: "Producto A", category: "electronics" },
  { id: "2", name: "Producto B", category: "books" },
  { id: "3", name: "Producto C", category: "electronics" },
  { id: "4", name: "Producto D", category: "clothing" },
];


function fetchProducts(categoryId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId) {
        resolve(allProducts.filter(p => p.category === categoryId));
      } else {
        resolve(allProducts);
      }
    }, 500);
  });
}

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProducts(categoryId).then(items => {
      setProducts(items);
      setLoading(false);
    });
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Todos los productos"}</h2>
      <ul>
        {products.map(prod => (
          <li key={prod.id}>
            <Link to={`/product/${prod.id}`}>{prod.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
