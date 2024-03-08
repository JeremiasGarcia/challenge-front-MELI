import { useEffect } from "react";
import { useProducts } from "../hooks/useProducts";
import { ProductList } from "../components/ProductList";
import { useSearchParams } from "react-router-dom";

const ProductListContainer = () => {
  const [searchParam] = useSearchParams();
  const search = searchParam.get("search");

  const { products, loading, error, getProducts } = useProducts();

  useEffect(() => {
    getProducts(search);
  }, [getProducts, search]);

  return (
    <div>
      {loading && <p>Cargando productos...</p>}
      {error && <p>Error al cargar productos: {error}</p>}
      <ProductList products={products} />
    </div>
  );
};

export default ProductListContainer;
