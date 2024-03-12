export const fetchAllProducts = async () => {
  try {
    const response = await fetch("/api/items");
    const { items } = await response.json();

    return items.map(({ id, thumbnail, title, price, currency_id }) => ({
      id,
      img: thumbnail,
      title,
      price,
      currency: currency_id
    }));
  } catch (error) {
    throw new Error("Error al obtener todos los productos");
  }
};

export const fetchSearchProducts = async (search) => {
  if (search === "") return null;

  try {
    const response = await fetch(`/api/items?q=${search}`);
    const { items } = await response.json();

    return items.map(({ id, thumbnail, title, price, currency_id }) => ({
      id,
      img: thumbnail,
      title,
      price,
      currency: currency_id
    }));
  } catch (e) {
    throw new Error("Error al buscar productos");
  }

};

export const fetchProductById = async (id) => {
  if (id === "") return null;
  try {
    const response = await fetch(`/api/items/${id}`);
    const { item } = await response.json();

    return {
      img: item.thumbnail,
      title: item.title,
      price: item.price,
      description: item.plain_text,
      currency: item.currency_id,
      condition: item.condition
    };

  } catch (e) {
    throw new Error("Error al buscar el producto");
  }
}