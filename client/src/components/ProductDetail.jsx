export const ProductDetail = ({ product }) => {

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  const { img, title, price, description, currency } = product;
  const formatPrice = price.toLocaleString('es-AR', {
    style: 'currency',
    currency: currency
  });

  return (
    // <section className="pd-section">
    <>
      <img src={img} alt={title} className="pd-img"/>
      <div className="pd-title">
        <h3>{title}</h3>
        <p className="pd-price">{formatPrice}</p>
      </div>
      <div className="pd-description">
        <h3>Descripción del producto</h3>
        <p>{description}</p>
      </div>
    </>
    // </section>
  );
};