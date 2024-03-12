import { useEffect } from "react";
import { useProducts } from "../hooks/useProducts";
import { ProductList } from "../components/ProductList";
import { useSearchParams } from "react-router-dom";

const ProductListContainer = () => {
  const [searchParam] = useSearchParams();
  const search = searchParam.get("search");

  const { getSearchProducts, products, loading, error } = useProducts();

  useEffect(() => {
    getSearchProducts(search);
  }, [getSearchProducts, search]);
  
  
  return (
    <div className="plc-main">
      {loading && <p>Cargando productos...</p>}
      {error && <p>Error al cargar productos: {error}</p>}
      {products.map((product) => (
        <ProductList
          key={product.id}
          id={product.id}
          img={product.img}
          title={product.title}
          price={product.price}
          currency={product.currency}
        />
      ))}
    </div>
  );
};

export default ProductListContainer;
