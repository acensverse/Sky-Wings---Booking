import React, { useState } from 'react';
import Home from '../Home';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import axios from 'axios';

function Signup({setUser}) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [pass, setPass] = useState('')
  const [page, setPage] = useState(true);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted from mobile device');

    const data = page? {email} : {email, name, number, pass}

    axios.post('http://192.168.29.43:5000/Signup', data)
      .then(result => {
        console.log(result);
        if (page) {
          setPage(false);
        } else {
          navigate('/')
        }
        
      })
      
      .catch(err => console.log(err));
  };

  const togglePage = () => {
    setPage(!page);
  };

  return (
    <div>
      <div className="md:fixed inset-0 md:bg-black opacity-50 z-20"></div>

      <div className='md:absolute md:flex items-center justify-start md:p-20 xl:ml-100 2xl:ml-165 h-svh z-20'>
        <Link to='/' className='hidden md:block'> 
          <button>
            <IoMdClose className='cancel' />
          </button> 
        </Link>

        <div className='bg-white border rounded-xl flex flex-col items-center justify-start md:justify-evenly md:p-4 md:py-10 h-full md:h-auto'>
          <Link to='/' className='md:hidden'> 
            <button>
              <IoMdClose className='cancel' />
            </button> 
          </Link>

          {page ? (
            <>
              <h1 className='bg-blue-600 px-8 py-2 text-lg font-bold border rounded-full bg-gradient-to-r from-purple-400 to-blue-800 text-white mb-8 mt-8 md:mt-auto'>
              Sky Wings Account
              </h1>

          
              <div className='flex flex-col items-center justify-evenly'>
                <div className='flex flex-col items-start justify-center'>
                  <h1 className='font-bold text-3xl text-gray-700 mb-8'>Login/Sign up</h1>
                </div>

                <span className='mb-2 text-sm font-medium mr-72 md:left-10'>Email Address</span>

                <form onSubmit={handleSubmit} className='flex flex-col w-full md:flex md:flex-row'>
                  <input
                    type="email"
                    name="email"
                    id="emailId"
                    required
                    className='border border-blue-300 rounded-md p-2 px-4 mr-4 w-full mb-4 md:mb-0'
                    placeholder='Enter your email id'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type='submit'
                    className='py-2 px-8 bg-blue-500 text-white font-bold border rounded-md'>
                    Continue
                  </button>
                </form>

                <div className='flex flex-col items-center justify-center'>
                  <span className='text-xs font-semibold text-red-500 m-4'>Forgot Login Id?</span>
                  <p className='uppercase text-gray-400 font-semibold text-xs md:mt-8'>Or use your business account with</p>
                  <img src="images/google.png" alt="" className='w-8 border border-gray-300 rounded-full p-2 m-4' />
                  <span className='text-xs text-gray-400'>
                    By proceeding you agree to Sky Wings's 
                    <Link className='text-red-500'> T&Cs </Link> 
                    and 
                    <Link className='text-red-500'> Privacy </Link>
                  </span>
                </div>
              </div>
            </>
          ) : (    // Name , Email and Password Section
              <div className='md:px-8'>
                <Link to='/Signup'>
                  <button
                    className='text-red-500 mb-4 mr-80 '
                    onClick={togglePage}>
                    Back
                  </button>
                </Link>
                <div className='flex flex-col items-center justify-evenly'>
                  <div className='flex flex-col items-start justify-center'>
                    <h1 className='font-bold text-3xl text-gray-700 mb-8'> Your Account Details </h1>                 
                  </div>

                  <form onSubmit={handleSubmit} className='flex flex-col md:flex md:flex-col'>
                    <span className='mb-2 text-sm font-medium mr-72' > Full Name </span>
                    <input type="text" name="text" id="textId" className='border border-blue-300 rounded-md p-2 px-4 mr-4 w-full' placeholder='Enter your name' required onChange={(e) => setName(e.target.value)} />
                    
                    <span className='mb-2 text-sm font-medium mr-72 mt-4' > Mobile No. </span>
                    <input type="text" name="text" id="textId" className='border border-blue-300 rounded-md p-2 px-4 mr-4 w-full' placeholder='Enter your mobile number' required onChange={(e) => setNumber(e.target.value)} />

                    <span className='mb-2 text-sm font-medium mr-72 mt-4' > Password </span>
                    <input type='password' name="text" id="textId" className='border border-blue-300 rounded-md p-2 px-4 mr-4 w-full mb-8' placeholder='Enter your password' required onChange={(e) => setPass(e.target.value)} />
                    
                    <button type='submit' className='py-2 px-8 bg-blue-500 text-white font-bold border rounded-md'> Save & Continue </button>
                  </form>

                  <div className='flex flex-col items-center justify-center mt-8'>
                    <span className='text-xs text-gray-400'> By proceeding you agree to Sky Wings's <Link className='text-red-500'> T&Cs </Link> and <Link className='text-red-500'> Privacy </Link> </span>
                  </div>
                </div>     
              </div>
          )}
        </div>
      </div>
      <div className='hidden md:block'>
        <Home />
      </div>
    </div>
  );
}

export default Signup;
