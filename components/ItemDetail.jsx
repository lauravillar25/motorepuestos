
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const allProducts = [
  { id: "1", name: "Producto A", description: "Detalle del Producto A" },
  { id: "2", name: "Producto B", description: "Detalle del Producto B" },
  { id: "3", name: "Producto C", description: "Detalle del Producto C" },
  { id: "4", name: "Producto D", description: "Detalle del Producto D" },
];


function fetchProductById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(allProducts.find(p => p.id === id));
    }, 500);
  });
}


function ItemCount({ stock = 10, initial = 1, onAdd }) {
  const [count, setCount] = React.useState(initial);
  const increment = () => count < stock && setCount(count + 1);
  const decrement = () => count > 1 && setCount(count - 1);

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
}

export default function ItemDetailContainer() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProductById(productId).then(prod => {
      setProduct(prod);
      setLoading(false);
    });
  }, [productId]);

  const handleAdd = (count) => {
    alert(`Agregaste ${count} unidades de ${product.name} al carrito.`);
  };

  if (loading) return <p>Cargando detalle...</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <ItemCount onAdd={handleAdd} />
    </div>
  );
}
