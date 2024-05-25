import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home'
import { IoMdClose } from "react-icons/io";

function Registration() {
  return (
    <div>
      <div className="md:fixed inset-0 md:bg-black opacity-50 z-20"></div>

      <div className='md:absolute md:flex items-center justify-start md:p-20 xl:ml-100 2xl:ml-165 h-svh z-20'>

        <Link to='/' className='hidden md:block'> <button>
          <IoMdClose className='cancel' />
        </button> </Link>

        <div className=' bg-white border rounded-xl flex flex-col items-start justify-start md:justify-evenly md:p-8 md:py-10 h-full md:h-auto '>

          <Link to='/' className='md:hidden'> <button>
            <IoMdClose className='cancel' />
          </button> </Link>

          <Link to ='/Signup'> <span className='mb-4 text-red-500'> Back </span> </Link>
          
          <div className='flex flex-col items-center justify-evenly'>
            <div className='flex flex-col items-start justify-center'>
              <h1 className='font-bold text-3xl text-gray-700 mb-8'> Your Account Details </h1>
              
            </div>

            <div className='flex flex-col w-full md:flex md:flex-col'>
              <span className='mb-2 text-sm font-medium mr-72' > Full Name </span>
              <input type="text" name="text" id="textId" className='border border-blue-300 rounded-md p-2 px-4 mr-4 w-full mb-4 md:mb-0' placeholder='Enter your name ' />
              
              <span className='mb-2 text-sm font-medium mr-72 mt-4' > Mobile No.: </span>
              <input type="text" name="text" id="textId" className='border border-blue-300 rounded-md p-2 px-4 mr-4 w-full mb-4 md:mb-4' placeholder='Enter your mobile number' />
              
              <button className='py-2 px-8 bg-blue-500 text-white font-bold border rounded-md'> Save & Continue </button>
            </div>

            <div className='flex flex-col items-center justify-center mt-8'>
              <span className='text-xs text-gray-400'> By proceeding you agree to Sky Wings's <Link className='text-red-500'> T&Cs </Link> and <Link className='text-red-500'> Privacy </Link> </span>
            </div>
          </div>
        
        </div>
      </div>
      <div className='hidden md:block'>
        <Home/>
      </div>
    </div>
  )
}

export default Registration