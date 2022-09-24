import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams, useNavigate, Link} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';




export default function ProductDetails() {
  // const params = useParams(); then use with params.id
  const { id } = useParams();
  const storedToken = localStorage.getItem('authToken');
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { user } = useContext(AuthContext)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/${id}`)
        //console.log(response);
        setProduct(response.data.data)
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/products/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } });
      toast.success('Product deleted successfully')
      navigate('/products');
    } catch (error) {
      console.error(error);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.post(
        `${process.env.REACT_APP_API_URL}/cart/checkcart`,
        { productId: product._id },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );
      toast.success("Products added to the cart");
      navigate('/cart')
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='bg-black font-sans'>
      {product && <section id='product' className="flex flex-col mx-auto bg-balck">
        <div className="flex flex-col bg-black items-center tracking-widest md:p-4">
          <div class="text-5xl md:text-6xl md:text-center lg:text-8xl md:py-4 lg:text-center font-extrabold mt-8">
            <span class=" bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            {product.title}
            </span>
          </div>
          <h1 className="text-2xl md:text-m md:text-center lg:text-3xl lg:text-center text-center text-lightGray mt-10 font-medium md:m-4 ">
            From ${product.price}
          </h1>
                  <div className="flex flex-row justify-center items-center space-x-8 p-4 md:p-4">
                      <Link to='/iPhone'><button onClick={handleSubmit} className="text-white bg-sky-600 p-2  md:p-4 text-xl md:text-xl rounded-full lg:text-2xl hover:bg-white hover:text-sky-600">Buy</button></Link>
          </div>
          <div className='flex flex-row justify-center items-center space-x-8 p-4 md:p-4'>
          {user && user.role === 'admin' ? <button className="text-sky-500 text-l md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2" onClick={() => navigate(`/edit/${id}`)}>Edit product {">"}</button> : ''}
          {user && user.role === 'admin' ? <button className="text-red-700 text-l md:text-3xl lg:text-4xl hover:underline hover:underline-offset-2" onClick={handleDelete}>Delete product</button>: ''}
          </div>
          {product.images && product.images.map((img) => <img className="w-full md:w-1/2 mt-10" src={img} alt={product.title} key={img} />)}
        </div>
        {!product && <p>Product not found</p>}
      </section>
      
      }
      
    </div>
    

  )
}
