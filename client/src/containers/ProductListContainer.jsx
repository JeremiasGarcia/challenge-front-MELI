import { useEffect } from "react";
import { useProducts } from "../hooks/useProducts";
import { BreadCrumb } from "../components/BreadCrumb";
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
      {error && <p>{error}</p>}
      <div className="plc-breadcrumb">
        {<BreadCrumb categories={products.categories}/>}
      </div>
      <div className="plc-products">
        {products.items && products.items.map((product) => (
          <ProductList
            key={product.id}
            id={product.id}
            img={product.img}
            title={product.title}
            price={product.price}
            currency={product.currency}
            />
        ))}
        <hr />
      </div>
    </div>
  );
};

export default ProductListContainer;
