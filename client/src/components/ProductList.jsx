import { Link } from "react-router-dom";

export const ProductList = ({ id, img, title, price, currency }) => {
  const formatPrice = price.toLocaleString("es-AR", {
    style: "currency",
    currency: currency,
  });

  return (
    <div className="pl-container">
      <div className="pl-product">
        <div className="pl-img">
          <Link to={`/items/${id}`}>
            <img src={img} alt={title} />
          </Link>
        </div>
        <div className="pl-details">
          <Link to={`/items/${id}`}>
            <h2 className="pl-price">{formatPrice}</h2>
            <h3 className="pl-title">{title}</h3>
          </Link>
        </div>
      </div>
      <div className="pl-address">
        <span>Bs As</span>
      </div>
    </div>
  );
};
