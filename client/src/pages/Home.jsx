import { useEffect } from "react";
import { ProductList } from "../components/ProductList";
import { useProducts } from "../hooks/useProducts";

export const Home = () => {
  const { getAllProducts, products, loading, error } = useProducts();

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <div>
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
