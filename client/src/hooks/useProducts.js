import { useState, useRef, useCallback } from "react";
import {
  fetchAllProducts,
  fetchSearchProducts,
  fetchProductById,
} from "../services/products";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef();

  const getAllProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const newProducts = await fetchAllProducts();
      setProducts(newProducts);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const getSearchProducts = useCallback(async (search) => {
    if (!search || search === "" || search !== previousSearch.current) {
      try {
        setLoading(true);
        setError(null);
        previousSearch.current = search;
        const newProducts = await fetchSearchProducts(search);
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
      const newProduct = await fetchProductById(id);
      setProduct(newProduct);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    getAllProducts,
    getSearchProducts,
    getProductById,
    products,
    product,
    loading,
    error,
  };
};
