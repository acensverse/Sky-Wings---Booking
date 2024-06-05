import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Home from '../Home';
import { IoMdClose } from "react-icons/io";
import axios from 'axios';

const Login = () => {

  const [errMsg, setErrMsg] = useState('')

  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/Login', { email, pass: pwd })
      .then(result => {
        console.log(result)
        if (result.data === 'Success') {
        navigate('/')
        } else {
          setErrMsg("Invaild Email or Password")
        }
      })
      .catch(err => {
        setErrMsg("Failed to Login. Invaild Email or Password")
        console.log(err)
      }) 
      
  }

  return (
    <div>
      <div className="md:fixed inset-0 md:bg-black opacity-50 z-20"></div>

      <div className='md:absolute md:flex items-center justify-start md:p-20 xl:ml-100 2xl:ml-165 h-svh z-20'>

        <div className='bg-white border rounded-xl flex flex-col items-start justify-start md:justify-evenly px-4  md:p-8 md:py-10 h-full md:h-auto'>

          <Link to='/' className='md:hidden'>
            <button>
              <IoMdClose className='cancel' />
            </button>
          </Link>
          <Link to='/' className='hidden md:block ml-88 text-2xl'>
            <button>
              <IoMdClose/>
            </button>
          </Link>

          <Link to='/Signup'>
            <span className='mb-4 text-red-500'>Back</span>
          </Link>

          <div className='flex flex-col items-center justify-evenly'>
            <div className='flex flex-col items-start justify-center'>
              <h1 className='font-bold text-3xl text-gray-700 mb-8 mt-10 md:mt-4'>Your Account Details </h1>
            </div>

            <form onSubmit={handleSubmit} className='flex flex-col w-full'>
              <span className='mb-2 text-sm font-medium mr-72'>Email Address</span>
              <input
                type="email"
                name="text"
                id="email"
                className='border border-blue-300 rounded-md p-2 px-4 mr-4 w-full mb-4 md:mb-0'
                placeholder='Enter your email id'
                required
                onChange={(e) => setEmail(e.target.value)}
              />

              <span className='mb-2 text-sm font-medium mr-72 mt-4'>Password</span>
              <input
                type="password"
                name="text"
                id="textId"
                className='border border-blue-300 rounded-md p-2 px-4 mr-4 w-full mb-4 md:mb-4'
                placeholder='Enter your mobile number'
                required
                onChange={(e) => setPwd(e.target.value)}
              />

              {errMsg && <p className="text-red-500 mb-4">{errMsg}</p>}

              <button
                type='submit'
                className='py-2 px-8 bg-blue-500 text-white font-bold border rounded-md'
              >
                Login
              </button>
            </form>

            <div className='flex flex-col items-center justify-center mt-8'>
              <span className='text-xs text-gray-400'>
                By proceeding you agree to Sky Wings's <Link className='text-red-500'>T&Cs</Link> and <Link className='text-red-500'>Privacy</Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='hidden md:block'>
        <Home />
      </div>
    </div>
  );
};

export default Login;
