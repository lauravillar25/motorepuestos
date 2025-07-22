
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/productos"; 

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then((res) => {
        setProduct(res);
      })
      .catch((error) => {
        console.error("Error al cargar producto:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;
  if (!product) return <p>No se encontró el producto con ID {id}.</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      {/* Agregá más detalles si los tenés */}
    </div>
  );
};

export default ItemDetailContainer;
