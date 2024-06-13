import React, { useContext, useState } from 'react'
import '../App.css'
import { CgProfile } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function Nav() {

  const { auth } = useContext(AuthContext)

  const [dropdownVisible, setdropdownVisible] = useState(false)

  const toggleDropdown = (e) => {
    e.preventDefault();
    setdropdownVisible(!dropdownVisible)
  }

  const closeDropdown = () => {
    setdropdownVisible(false);
  };

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

            {auth ? (
              <>
                <button
                  onClick={toggleDropdown}
                  aria-haspopup="true" 
                  aria-expanded={dropdownVisible} 
                  className='border border-blue-500 rounded-xl bg-blue-500 md:text-base font-bold flex items-center justify-center'
                >
                  <CgProfile className='mr-2'/> {auth.user}
                </button>

                {dropdownVisible && (
                   <div className='absolute md:right-18 right-16 md:mt-52 md:bg-white bg-black/75 inset-0 h-svh w-full md:h-auto md:inset-auto  md:rounded-md md:shadow-lg md:py-4 z-50 flex flex-col items-center justify-center md:w-48'>
                    
                    
                      <button onClick={toggleDropdown} className='md:hidden'>
                        <IoMdClose className='cancel text-white text-6xl' />
                      </button>
                  

                   <Link to='/profile'
                      onClick={closeDropdown}
                      className='md:my-1 my-8 md:text-gray-800 text-4xl md:text-lg text-white hover:text-purple-600'>
                     My Profile
                   </Link>
                   <Link to='/settings'
                      onClick={closeDropdown}
                      className='md:my-1 my-8 md:text-gray-800 text-4xl md:text-lg text-white hover:text-purple-600'>
                     Settings
                   </Link>
                   <button className='md:my-1 my-8 md:text-gray-800 text-4xl md:text-lg text-white hover:text-purple-600'>
                     Logout
                   </button>
                 </div>
                )}
              </>
            ):(
            
              <Link to='/Signup' className='flex items-center justify-center'>
              <CgProfile className='mr-2'/> {auth ? auth.user : 'Login/Signup'}
              </Link>  
                
             )}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav