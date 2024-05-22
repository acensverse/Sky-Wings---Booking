import React from 'react'
import Home from '../Home'
import { Link } from 'react-router-dom'
import { ImCross } from "react-icons/im";

function Signup() {
  return (
    <div>
      <div className="fixed inset-0 bg-black opacity-50 z-20"></div>

      <div className='absolute flex items-center justify-start p-20 ml-165 h-screen z-20'>

        <Link to='/'> <ImCross className='cancel' /> </Link>

        <div className=' bg-white border rounded-xl flex flex-col items-center justify-evenly p-8 py-10'>
        
          <h1 className='bg-blue-600 px-8 py-2 text-lg font-bold border rounded-full bg-gradient-to-r from-purple-400 to to-blue-800 text-white mb-8'> Sky Wings Account </h1>

          
          <div className='flex flex-col items-center justify-evenly'>
            <div className='flex flex-col items-start justify-center'>
              <h1 className='font-bold text-3xl text-gray-700 mb-8'> Login/Sign up</h1>
              
            </div>
            <span className='mb-2 text-sm font-medium mr-72' > Email Address </span>

            <div className=''>
              <input type="email" name="email" id="emailId" className='border border-blue-300 rounded-md p-2 px-4 mr-4' placeholder='Enter your email id' />
              <button className='py-2 px-8 bg-blue-800 text-white font-bold border rounded-md'> Continue </button>
            </div>

            <div className='flex flex-col items-center justify-center'>
              <span className='text-xs font-semibold text-red-500 m-4'> Forgot Login Id ? </span>
              <p className='uppercase text-gray-400 font-semibold text-xs mt-8'> Or use your business account with </p>

              <img src="images/google.png" alt="" className='w-8 border border-gray-300 rounded-full p-2 m-4' />
              <span className='text-xs text-gray-400'> By proceeding you agree to Sky Wings's <Link className='text-red-500'> T&Cs </Link> and <Link className='text-red-500'> Privacy </Link> </span>
            </div>
          </div>
         
        </div>
      </div>
      <Home className='z-0'/>
    </div>

  )
}

export default Signup
