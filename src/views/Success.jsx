import React from 'react'
import { Link } from 'react-router-dom'
import confirmed from '../images/undraw_order_confirmed_re_g0if.svg'
import "animate.css";
export default function Success() {
  return (
      <div className='font-sans bg-black flex flex-col md:flex-row  md:p-14 items-center w-full h-full'>
      <div className='flex flex-col w-5/6'>
        <img className='w-full md:w-3/4' src={confirmed} alt='payment success' />
      </div>
      <div className='text-center p-8 space-y-20 '>
        <h1 className='text-5xl uppercase'>order confirmed!</h1>
        <p className='text-3xl leading-loose'>Thanks for choosing us, much love from <Link to='/'><span className='uppercase text-sky-500 hover:underline underline-sky-500'>orangee store</span></Link></p>
      </div>
    </div>
  )
}
