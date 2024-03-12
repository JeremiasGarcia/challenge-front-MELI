export const ProductDetail = ({ product }) => {

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  const { img, title, price, description, currency, condition } = product;
  const formatPrice = price.toLocaleString('es-AR', {
    style: 'currency',
    currency: currency
  });

  return (
    <div className="pd-container">
      <div className="pd-img">
        <img src={img} alt={title}/>
      </div>
      <div className="pd-detail">
        <span className="pd-condition">{condition}</span>
        <h2 className="pd-title">{title}</h2>
        <h3 className="pd-price">{formatPrice}</h3>
        <button className="pd-buy">Comprar</button>
      </div>
      <div className="pd-description">
        <h3>Descripción del producto</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};