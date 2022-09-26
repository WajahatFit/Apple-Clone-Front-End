import React from 'react'
import { Link } from 'react-router-dom'
import '../views/ErrorPage.css'


export default function ErrorPage() {
  return (
    <div className='error-page'>
      <div class="main">
    	<div class="fof">
          <h1>Error 404</h1> <br>

          </br>
          <h1>Page not found</h1>
          <Link to='/'><p className='mt-12 border-dashed border-2 border-sky-500 w-fit p-12 mx-auto'>TAKE ME HOME</p></Link>
    	</div>
</div>
    </div>
  )
}
