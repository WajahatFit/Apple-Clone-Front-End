import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams, useNavigate} from 'react-router-dom';
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
      navigate('/');
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
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {product && (
        <div>
          <h6>Product: {product.title}</h6>
          <p>Description: {product.description}</p>
          {product.images && product.images.map(img => <img width="100px" src={img} alt={product.title} />)}
          <button className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight" onClick={handleDelete}>Delete product</button>
          {user && user.role === 'admin' ? <button className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight" onClick={() => navigate(`/edit/${id}`)}>Edit product</button> : <p></p>}
          <button className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight" onClick={handleSubmit}>add to cart</button> 
        </div>)}
      {!product && <p>Product not found</p>}
    </div>

  )
}
