import { useEffect } from 'react';
import { ProductList } from '../components/ProductList';

export const Home = ({ getAllProducts, products, loading, error }) => {
  
  useEffect(() => {
    getAllProducts();
  }, []);

  console.log('home:'+products);

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