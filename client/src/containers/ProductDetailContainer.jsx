import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { ProductDetail } from "../components/ProductDetail";

const ProductDetailContainer = () => {
  const { product, loading, error, getProductById } = useProducts();
  const { id } = useParams();

  useEffect(() => {
    getProductById(id);
  }, [getProductById, id]);

  return (
    <div className="pdc-main">
      {loading && <p>Cargando productos...</p>}
      {error && <p>Error al cargar productos: {error}</p>}
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductDetailContainer;
