import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "animate.css";
import Header from "../components/Header";

export default function Products() {
  const [products, setProducts] = useState(null);
  const [searchProduct, setSearchProduct] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/products`
        );
        setProducts(response.data.data);
        setFilteredProducts(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
    // eslint-disable-next-line
  }, []);

  const handleMoreExpensive = () => {
    const ordered = [...products].sort((a, b) => b.price - a.price);
    setFilteredProducts(ordered);
  };
  const handleSort = () => {
    setShowLinks((showLinks) => !showLinks);
  };

  const handleCheaper = () => {
    const ordered = [...products].sort((a, b) => a.price - b.price);
    setFilteredProducts(ordered);
  };

  const handleSearch = (e) => {
    setSearchProduct(e.target.value);
    if (e.target.value === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((el) =>
        el.title.toLowerCase().includes(e.target.value.toLocaleLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="capitalize flex flex-col sm:flex sm:flex-row sm:justify-around sm:items-start sm:flex-wrap bg-black sm:w-full p-4">
      <div>
        <Header
          handleSearch={handleSearch}
          handleCheaper={handleCheaper}
          handleSort={handleSort}
          handleMoreExpensive={handleMoreExpensive}
          showLinks={showLinks}
          searchProduct={searchProduct}
        />
      </div>
      {!filteredProducts && (
        <p className="text-6xl text-white flex justify-center items-center mt-60">
          No products found in the DB
        </p>
      )}
      {filteredProducts &&
        filteredProducts.map((product) => {
          return (
            <>
              <div className="animate__fadeIn" key={product.title}>
                <Link to={"/products/" + product._id}>
                  <div className="flex-1 flex flex-col items-center justify-center space-x-4 space-y-4 p-4">
                    <span className="text-3xl text-center md:text-5xl md:text-center lg:text-6xl md:py-4 lg:text-center font-extrabold mt-8  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                      {product.title}
                    </span>
                    <p className="md:text-xl md:text-center lg:text-2xl lg:text-center text-center text-lightGray bg-black">
                      €{product.price} only
                    </p>
                    <h1 className=" md:text-xl md:text-center lg:text-2xl lg:text-center text-center text-lightGray bg-black">
                      {product.description}
                    </h1>
                    <div className="sm:w-60">
                      <img
                        className="w-full"
                        src={product.images[0]}
                        alt={product.title}
                      />
                    </div>
                    <div>
                      <Link to={"/products/" + product._id}>
                        <button className="text-sky-600 text-xl hover:underline hover:underline-offset-2">
                          Login to add products in cart{" >"}
                        </button>
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
    </div>
  );
}
