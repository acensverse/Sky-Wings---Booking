import React, { useState } from 'react'
import Home from '../Home'
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import axios from 'axios';

function Signup() {

  const [email, setEmail] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/Signup', { email })
      .then(result => console.log(result))
      .catch(err => console.log(err))
    
  }

  return (
    <div>
      <div className="md:fixed inset-0 md:bg-black opacity-50 z-20"></div>

      <div className='md:absolute md:flex items-center justify-start md:p-20 xl:ml-100 2xl:ml-165 h-svh z-20'>

        <Link to='/' className='hidden md:block'> <button>
          <IoMdClose className='cancel' />
        </button> </Link>

        <div className=' bg-white border rounded-xl flex flex-col items-center justify-start md:justify-evenly md:p-4 md:py-10 h-full md:h-auto '>

          <Link to='/' className='md:hidden'> <button>
            <IoMdClose className='cancel' />
          </button> </Link>
        
          <h1 className='bg-blue-600 px-8 py-2 text-lg font-bold border rounded-full bg-gradient-to-r from-purple-400 to to-blue-800 text-white mb-8 mt-8 md:mt-auto'> Sky Wings Account </h1>

          
          <div className='flex flex-col items-center justify-evenly'>
            <div className='flex flex-col items-start justify-center'>
              <h1 className='font-bold text-3xl text-gray-700 mb-8'> Login/Sign up</h1>
              
            </div>

            <span className='mb-2 text-sm font-medium mr-72' > Email Address </span>

            <form onSubmit={handleSubmit} className='flex flex-col w-full md:flex md:flex-row'>
              
              <input type="email" name="email" id="emailId" className='border border-blue-300 rounded-md p-2 px-4 mr-4 w-full mb-4 md:mb-0' placeholder='Enter your email id' onChange={(e) => setEmail(e.target.value)} />
              
              <button type='submit' className='py-2 px-8 bg-blue-500 text-white font-bold border rounded-md'> Continue </button>

            </form>

            <div className='flex flex-col items-center justify-center'>
              <span className='text-xs font-semibold text-red-500 m-4'> Forgot Login Id ? </span>
              <p className='uppercase text-gray-400 font-semibold text-xs md:mt-8'> Or use your business account with </p>

              <img src="images/google.png" alt="" className='w-8 border border-gray-300 rounded-full p-2 m-4' />
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

export default Signup
