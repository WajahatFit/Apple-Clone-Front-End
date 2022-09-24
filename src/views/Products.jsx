import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/products`
        );
        setProducts(response.data);
        console.log(products);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-black">
      {/* <img className="user--img" src={user.profilePic} alt={user.email}></img> */}
      {!products && <p>No products found in the DB</p>}
      {products &&
        products.data.map((product) => {
          console.log(product);
          return (
            <div className="font-sans" key={product.title} >
              <Link to={"/products/" + product._id}>
                <section id="products" className="">
                  <div className="flex flex-col bg-black items-center md:flex-wrap lg:flex-wrap p-4">
                    <div class="text-3xl md:text-5xl md:text-center lg:text-4xl md:py-4 lg:text-center mt-8 tracking-widest">
                      <span class=" bg-clip-text text-transparent text-lightWhite">
                        {product.title}
                      </span>
                    </div>
                    <h1 className=" tracking-wide text-xl text-center w-full md:text-3xl md:text-center lg:text-2xl lg:text-center text-lightGray bg-black ">
                      {product.description}
                    </h1>
                    {product.images &&
                      product.images.map((img, i) => (
                        <img
                          className="w-full md:w-1/2 mt-8 lg:w-24 "
                          key={img + i}
                          src={img}
                          alt={product.title}
                        />
                      ))}
                  </div>
                </section>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
