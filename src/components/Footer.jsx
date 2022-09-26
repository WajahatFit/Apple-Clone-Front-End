import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/orange-svgrepo-com.svg'
import facebook from '../images/facebook-svgrepo-com.svg'
import instagram from '../images/instagram-svgrepo-com.svg'
import youtube from '../images/youtube-svgrepo-com.svg'
import apple from '../images/apple-svgrepo-com.svg'
import quora from '../images/quora-svgrepo-com.svg'
export default function Footer() {
  return (
      <div className='bottom-0 w-screen'>
          <footer className='bg-veryDarkBlue'>
              <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
                  <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
                  <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>

                      <div className='flex justify-center space-x-4 pt-10'>
                          <Link to='#'>
                              <img className='h-8' alt='icons' src={facebook }></img>
                          </Link>
                          <Link to='#'>
                              <img className='h-8' alt='icons' src={youtube }></img>
                          </Link>
                          <Link to='#'>
                              <img className='h-8' alt='icons' src={ instagram}></img>
                          </Link>
                          <Link to='#'>
                              <img className='h-8' alt='icons' src={ apple}></img>
                          </Link>
                          <Link to='#'>
                              <img className='h-8' alt='icons' src={quora }></img>
                          </Link>
                      </div>
                  </div>
                  <div className='flex justify-around space-x-32'>
                      <div className='flex flex-col space-y-3 text-white'>
                          <Link className='hover:text-brightRed' to='/'>Home</Link>
                          <Link className='hover:text-brightRed' to='/Products'>Products</Link>
                          <Link className='hover:text-brightRed' to='/About'>About</Link>
                          <Link className='hover:text-brightRed' to='/Cart'>Cart</Link>
                      </div>
                      <div className='flex flex-col space-y-3 text-white'>
                          <Link className='hover:text-brightRed' to='/'>Privacy Policy</Link>
                          <Link className='hover:text-brightRed' to='/Products'>Apple Care</Link>
                          <Link className='hover:text-brightRed' to='/About'>distributor</Link>
                          <Link className='hover:text-brightRed' to='/Cart'>Our Mission</Link>
                      </div>
                  </div>
                  <div className='flex flex-col justify-between'>
                      <div className='flex space-x-3 justify-center'>
                          <img src={ logo} alt = 'logo' className='w-1/5'/>
                      </div>
                      <div className='flex justify-center'>
                          <h1 className='text-white'>Orange Store</h1>
                      </div>
                  </div>
              </div>
        </footer>  
    </div>
  )
}
