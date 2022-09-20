import React, { useState, useEffect } from 'react'
import axios from 'axios';
import cartImg from '../images/undraw_empty_cart_co35.svg'

export default function Cart() {
    const [cart, setCart] = useState(null);

    useEffect(() => {
        const getCart = async () => {
          try {
            const response = await axios.get(
              "http://localhost:8000/api/v1/cart"
            );
              console.log(response.data.data)
            setCart(response.data.data);
          } catch (error) {
            console.error(error);
          }
        };
        getCart();
      }, []);
    // llamada axios a ruta get generica de  cart, guardar en state el cart si hay cart, y hacer un map en lugar de these ar your products haciendo map por cada producto mostrarlos en un useeffect al inicio, y en el backend hacer un populate de los productids.
    return (
        <>
            {!cart && <img className='container pt-20 w-2/5 mx-auto md:mx-auto md:w-2/4 md:pt-10' src={ cartImg } alt='Empty Cart svg'></img>}
            {cart && cart.map(e => { 
                console.log(e)
            })}
        </>
  )
}
