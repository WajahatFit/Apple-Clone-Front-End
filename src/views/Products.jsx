import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";


export default function Home() {
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/products"
        );
        setProducts(response.data.data);
        setFilteredProducts(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
  }, []);

  return (
    <div className="flex flex-col flex-nowrap mt-40">
      {/* <img className="user--img" src={user.profilePic} alt={user.email}></img> */}
      {!products && <p>No products found in the DB</p>}
      {products &&
        filteredProducts.map((product) => {
          return (
            <div key={ product.title }>
              <ProductCard product={product} />
            </div>
          );
        })}
    </div>
  );
}
