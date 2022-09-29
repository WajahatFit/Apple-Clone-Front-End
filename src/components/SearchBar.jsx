import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const element = <FontAwesomeIcon icon={faMagnifyingGlass} transform="" />;

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
    <div>
      <div>
        <input
          type="text"
          placeholder="search"
          className="pt-1 pb-1 pl-8 pr-16 text-lg rounded-md"
        />
        <div>{element}</div>
      </div>
      <div>
        <div className="dataResult"></div>
      </div>
    </div>
  );
}
