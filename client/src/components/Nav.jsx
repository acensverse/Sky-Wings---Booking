import React, { useState } from 'react'
import '../App.css'
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

function Nav() {

  const [username, setUsername] = useState('Login / SignUp')

  return (
    <nav className='relative md:static flex items-center justify-between md:justify-around'>
      <div className="icon">
        <img src="/images/logo3.png" alt="logo" className='w-16 md:w-36 ml-4 md:ml-auto' />
      </div>
      
      <div className="midPart hidden ml-60 md:flex">
        <ul className='trips flex items-center justify-center list-none p-4 text-white text-xl'>
          <li> <img src="images/airplane.png" alt=""className='w-7 mx-2' /> Flights </li>
          <li> <img src="images/hotel.png" alt="" className='w-7 mx-2'/> Hotels </li>
          <li> <img src="images/train.png" alt="" className='w-7 mx-2' /> Trains </li>
          <li> <img src="images/taxi.png" alt="" className='w-7 mx-2' />Cabs </li>
        </ul>
      </div>

      <div className="accPart">
        <ul className='text-white text-sm md:text-xl p-4 flex items-center justify-center'>
          <li className='mr-4'> My Trips </li>
          <li className='border border-blue-500 rounded-xl bg-blue-500 md:text-base font-bold'>
            <Link to='/Signup' className='flex items-center justify-center'>
             <CgProfile className='mr-2'/> {username}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav