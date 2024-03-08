export const ProductDetail = ({ product }) => {

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  const { img, title, price, description } = product;

  return (
    <section className="pd-section">
      <img src={img} alt={title} />
      <p>{title}</p>
      <p className="pd-price">{price}</p>
      <hr />
      <p>{description}</p>
    </section>
  );
};