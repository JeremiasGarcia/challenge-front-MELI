import { Link } from 'react-router-dom';

export const ProductList = ({ id, img, title, price, currency }) => {

  const formatPrice = price.toLocaleString('es-AR', {
    style: 'currency',
    currency: currency
  });

  return (
    <section>
      <article className="pl-article">
          <div key={id} className="pl-product-container">
            <div className="pl-product">
              <Link to={`/items/${id}`}>
                <img src={img} alt={title} />
                <div className="pl-details">
                  <p className="pl-price">{formatPrice}</p>
                  <p>{title}</p>
                </div>
              </Link>
            </div>
            <div className="pl-address-container">
              <span className="pl-address">Bs As</span>
            </div>
          </div>
      </article>
    </section>
    // <section>
    //   <article className="pl-article">
    //     {products.map((product) => (
    //       <div key={product.id} className="pl-product-container">
    //         <div className="pl-product">
    //           <Link to={`/items/${product.id}`}>
    //             <img src={product.img} alt={product.title} />
    //             <div className="pl-details">
    //               <p className="pl-price">{products.price}</p>
    //               <p>{product.title}</p>
    //             </div>
    //           </Link>
    //         </div>
    //         <div className="pl-address-container">
    //           <span className="pl-address">Bs As</span>
    //         </div>
    //       </div>
    //     ))}
    //   </article>
    // </section>
  );
};