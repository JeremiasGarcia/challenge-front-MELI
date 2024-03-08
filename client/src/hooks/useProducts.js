import { useState, useRef, useCallback } from "react";
import {
  getAllProducts,
  searchProducts,
  getProduct,
} from "../services/products";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef();

  const getAll = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const newProducts = await getAllProducts();
      setProducts(newProducts);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const getProducts = useCallback(async (search) => {
    if (!search || search === "" || search !== previousSearch.current) {
      try {
        setLoading(true);
        setError(null);
        previousSearch.current = search;
        const newProducts = await searchProducts(search);
        setProducts(newProducts);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  const getProductById = useCallback(async (id) => {
    if (!id || id === "") return;
    try {
      setLoading(true);
      setError(null);
      const newProduct = await getProduct(id);
      setProduct(newProduct);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { products, product, loading, error, getAll, getProducts, getProductById };
};
