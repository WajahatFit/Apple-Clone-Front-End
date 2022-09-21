import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import certified from '../images/undraw_certificate_re_yadi.svg'

export default function Section0() {
    const { isLoggedIn } = useContext(AuthContext);
  return (
      <div>
           <section>
        <div className="container flex flex-col md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h1 className="pt-20 max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Certified Apple distributor with more than 100 years in the Tech
              Industry
            </h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              We are operating since 1998 bringing the latest Tech products from
              Apple to our clients
            </p>
            <div className="flex justify-center md:justify-start">
              {!isLoggedIn && (<NavLink
                  className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight mb-4'
                  to="/signup"
                >
                  Get Started
                </NavLink>)}
                </div>
          </div>
          <div className="container flex flex-col items-center">
            <img src={ certified } alt='certified svg' className='w-2/5 md:w-3/5'></img>
          </div>
        </div>
      </section>
    </div>
  )
}
