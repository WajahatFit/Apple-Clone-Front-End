import React, { useState, useEffect } from 'react'
import axios from 'axios';
import cartImg from '../images/undraw_empty_cart_co35.svg'
import { Link } from 'react-router-dom';




export default function Cart() {
    const storedToken = localStorage.getItem("authToken");
    const [cart, setCart] = useState(null);

    useEffect(() => {
        const getCart = async () => {
          try {
            const response = await axios.get(
              `${process.env.REACT_APP_API_URL}/cart`
              ,{ headers: { Authorization: `Bearer ${storedToken}` } });
              setCart(response.data.data[0].products);
          } catch (error) {
            // Check in 
              
          }
        };
        getCart();
        // eslint-disable-next-line
    }, []);
    const handleDelete = async (productId) => {    
        try {
            const response = await axios.put(
              `${process.env.REACT_APP_API_URL}/cart/delete/` + productId, {}
              ,{ headers: { Authorization: `Bearer ${storedToken}` } });
            setCart(response.data.data.products);
            console.log(cart)
          } catch (error) {
            // Check in 
              
          }
    }

    // llamada axios a ruta get generica de  cart, guardar en state el cart si hay cart, y hacer un map en lugar de these ar your products haciendo map por cada producto mostrarlos en un useeffect al inicio, y en el backend hacer un populate de los productids.
    return (
        <>
            {cart && cart.length === 0 && <div><img className='container pt-20 w-2/5 mx-auto md:mx-auto md:w-2/4 md:pt-10' src={cartImg} alt='Empty Cart svg'></img>
                <p>Cart is Empty</p>
                <Link to='/products'><button>Discover Products</button></Link> 
            </div>}
            {cart && cart.map(item => { 
                console.log(item)
                return (
                    <div key={item._id} className='flex flex-col justify-center items-center'>
                    <div  className='container flex flex-row items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 m-6 rounded-lg'>
                        <div className='flex flex-col items-center space-y-6 p-6 w-1/2'>
                            {item.newStock ? <h2 className='text-white text-2xl'> <span className='text-white text-3xl'>New</span> {item.title}</h2> : <h1 className='text-2xl'>{item.title}</h1>}
                        <p className='text-gray-600'>{item.description}</p>
                        <p className='text-4xl'>{item.price}$</p>
                        </div>
                        <div className='flex flex-col space-y-6 p-6 w-1/2'>
                        <h1 className='text-black text-xl'>Product Id: <span className='text-gray-600 text-lg'>{item._id}</span></h1>
                                {/*} {item.images && !item.images.length ? <p>There's no Images Available</p> : <img src={item.images[0]} alt={item.id}></img>}
                                <div>
                                    <button className='block-inline bg-white p-4 rounded-md' onClick={handleAdd}>+</button><span className='text-2xl m-4'>{quantity}</span><button className='inline bg-white p-4 text-bold rounded-md'  onClick={handleDec}>-</button>
                                </div>*/}
                                
                                
                        </div>
                        <div className='flex items-center'>
                                <Link to='/'><button className='bg-brightRed p-4 rounded-full text-white m-4'>Checkout</button></Link>
                                <button onClick={()=>handleDelete(item._id) } className='bg-brightRed p-4 rounded-full text-white m-4'>Delete</button>
                                
                        </div>
                        
                        
                        </div>
                        </div>
                ) 
            }
                
            )}
        </>
  )
}
