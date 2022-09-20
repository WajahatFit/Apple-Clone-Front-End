import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams, useNavigate } from 'react-router-dom';

export default function ProductDetails() {
  // const params = useParams(); then use with params.id
  const { id } = useParams();
  const storedToken = localStorage.getItem('authToken');
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/products/${id}`)
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
      await axios.delete(`http://localhost:8000/api/v1/products/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } });
      toast.success('Product deleted successfully')
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <p>Products</p>
      {product && (
        <div>
          <h6>Product: {product.title}</h6>
          <p>Description: {product.description}</p>
          {product.images && product.images.map(img => <img width="100px" src={img} alt={product.title} />)}
          <button className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight" onClick={handleDelete}>Delete product</button>
          <button className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight" onClick={() => navigate(`/edit/${id}`)}>Edit product</button>
        </div>)}
      {!product && <p>Product not found</p>}
    </div>
  )
}
