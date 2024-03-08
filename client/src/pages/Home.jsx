import { useEffect } from 'react';
import { ProductList } from '../components/ProductList';

export const Home = ({ products, loading, error, getAll }) => {
  useEffect(() => {
    getAll();
  }, [getAll]);

  return (
    <div>
      {loading && <p>Cargando productos...</p>}
      {error && <p>Error al cargar productos: {error}</p>}
      <ProductList products={products} />
    </div>
  );
};