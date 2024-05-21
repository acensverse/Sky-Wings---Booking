import React from 'react'
import Home from '../Home'

function Signup() {
  return (
    <div>
      <div className="fixed inset-0 bg-black opacity-50 z-20"></div>
      <div className='absolute flex items-center justify-start p-20 ml-165 h-screen z-20'>
        <div className=' bg-white border rounded-xl flex flex-col items-center justify-evenly p-8 py-10'>
        
          <h1 className='bg-blue-600 px-8 py-2 text-lg font-bold border rounded-full bg-gradient-to-r from-purple-400 to to-blue-800 text-white mb-8'> Sky Wings Account </h1>

          
          <div className='flex flex-col items-center justify-evenly'>
            <div className='flex flex-col items-start justify-center'>
              <h1 className='font-bold text-3xl text-gray-800 mb-8 mr-40 ml-0'> Login/Sign up</h1>
              <label className='mb-2 text-sm font-medium ml-0' > Email Address </label>
            </div>

            <div className=''>
              <input type="text" name="email" id="emailId" className='border border-blue-300 rounded-md p-2 px-4 mr-4' placeholder='Enter your email id' />
              <button className='py-2 px-8 bg-blue-800 text-white font-bold border rounded-md'> Continue </button>
            </div>

            <div className='flex flex-col items-center justify-center'>
              <p className='uppercase text-gray-400 font-semibold text-xs mt-8'> Or use your business account with </p>

              <img src="images/google.png" alt="" className='w-8 border border-gray-300 rounded-full p-2 m-4' />
              <p className='text-xs text-gray-400'> By proceeding you agree to Sky Wings's T&Cs and Privacy </p>
            </div>
          </div>
         
        </div>
      </div>
      <Home className='z-0'/>
    </div>

  )
}

export default Signup
