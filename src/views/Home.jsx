import React, { useState, useEffect } from "react";
import axios from "axios";
// import { AuthContext } from "../context/AuthContext";
// import { useContext } from "react";

export default function Home() {
  const [products, setProducts] = useState(null);
  // const { user } = useContext(AuthContext);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/products"
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
  }, []);
  return (
    <div>
      {!products && <p>No products found in the DB</p>}
      {products &&
        products.map((product) => {
          return (
            <div key={product._id}>
              <p>title: {product.title}</p>
              <p>description: {product.description}</p>
              <p>color: {product.color}</p>
              <p>price: {product.price}</p>
              <p>New Stock: {product.newStock}</p>
              {<p>category: {product.category}</p>}
            </div>
          );
        })}
    </div>
  );
}
