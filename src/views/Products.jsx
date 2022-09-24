import React, { useState, useEffect} from "react";
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
        console.log(products)
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-col justify-center items-center md: flex md:flex-row bg-black h-full">
      {/* <img className="user--img" src={user.profilePic} alt={user.email}></img> */}
      {!products && <p>No products found in the DB</p>}
      {products &&
        products.data.map((product) => {
          console.log(product)
          return (
            <div className="" key={ product.title }>
              <Link to={"/products/"+product._id}>
                <section id="products">
          <div className="flex flex-col bg-black items-center tracking-widest md:w-1/2 md:flex-wrap lg:flex-wrap lg-space-x-8">
            <div class="text-3xl md:text-4xl md:text-center lg:text-4xl md:py-4 lg:text-center font-extrabold mt-8">
              <span class=" bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                {product.title}
              </span>
            </div>
            <h1 className="text-3xl md:text-3xl md:text-center lg:text-4xl lg:text-center text-center text-lightGray bg-black mt-10 font-semibold ">
              {product.description}
            </h1>
                    {product.images && product.images.map((img, i) => <img className="w-full md:w-1/2 mt-8 lg:w-24 " key={img+i} src={img} alt={product.title} />)}
                </div>
                
        </section></Link>
            </div>
          );
        })}
    </div>
  );
}
