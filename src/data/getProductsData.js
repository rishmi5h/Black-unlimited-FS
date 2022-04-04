import { useState, useEffect } from "react";
import axios from "axios";

export const useProductsData = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const res = await axios.get("/api/products");
        const data = await res.data;
        const products = await data.products;
        setProductsData(products);
      })();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return productsData;
};
