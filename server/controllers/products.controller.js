import "dotenv/config";
const author = JSON.parse(process.env.AUTHOR_SIGNATURE);
const queryLimit = process.env.QUERY_LIMIT;

export const getProducts = async (query) => {
  try {
    const res = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=${queryLimit}`
    );
    const products = await res.json();

    const categoryFilter = products.filters.find(
      (filter) => filter.id === "category"
    );
    const categoryNames = [];

    if (categoryFilter) {
      categoryFilter.values.forEach((value) => {
        categoryNames.push(value.name);
        value.path_from_root.forEach((value) => {
          categoryNames.push(value.name);
        });
      });
    }

    const data = {
      author,
      items: products.results,
      categories: categoryNames,
    };

    return data;
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
};

export const getProduct = async (id) => {
  try {
    const resProduct = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const product = await resProduct.json();

    const resDescription = await fetch(
      `https://api.mercadolibre.com/items/${id}/description`
    );
    const description = await resDescription.json();

    const item = {
      ...product,
      ...description,
    };

    const data = {
      author,
      item,
    };

    return data;
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
};
