import { useState, useEffect } from "react";
import { ProductModel } from "./models/product.model";
import { PRODUCTS_URL } from "./constants/api.constants.ts";

export function useProducts() {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [error, setError] = useState<String>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(PRODUCTS_URL);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (e) {
        setError(`Something went wrong! Error: ${e}`);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return { products, error, loading };
}
