export const getAllProducts = async () => {
  try {
    const response = await fetch("/api/items");
    const { items } = await response.json();

    return items.map(({ id, thumbnail, title, price }) => ({
      id,
      img: thumbnail,
      title,
      price,
    }));
  } catch (error) {
    throw new Error("Error al obtener todos los productos");
  }
};

export const searchProducts = async (search) => {
  if (search === "") return null;

  try {
    const response = await fetch(`/api/items?q=${search}`);
    const { items } = await response.json();

    return items.map(({ id, thumbnail, title, price }) => ({
      id,
      img: thumbnail,
      title,
      price,
    }));
  } catch (e) {
    throw new Error("Error al buscar productos");
  }

};

export const getProduct = async (id) => {
  if (id === "") return null;
  try {
    const response = await fetch(`/api/items/${id}`);
    const { item } = await response.json();

    return {
      img: item.thumbnail,
      title: item.title,
      price: item.price,
      description: item.plain_text
    };

  } catch (e) {
    throw new Error("Error al buscar el producto");
  }
}