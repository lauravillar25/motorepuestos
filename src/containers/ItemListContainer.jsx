
import { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import { getProducts } from "../data/productos";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (products.length === 0) return <p>No hay productos disponibles.</p>;

  return <ItemList products={products} />;
};

export default ItemListContainer;
