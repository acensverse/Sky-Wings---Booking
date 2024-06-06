import React, { useState, useEffect, useRef } from 'react';
import Home from '../Home';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { BiSolidErrorCircle } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import axios from '../../api/axios';


const USER_REGEX = /^[A-z][A-z0-9-_]{3,15}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/
const NUM_REGEX = /^\d{10}$/

function Signup() {
  
  const errRef = useRef()

  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [emailFocus, setEmailFocus] = useState(false)

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [num, setNum] = useState('')
  const [validNum, setValidNum] = useState(false)
  const [numFocus, setNumFocus] = useState(false)

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  // const [success, setSuccess] = useState(false);
  const [page, setPage] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email))
  }, [email])
  
  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidNum(NUM_REGEX.test(num))
  },[num])

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [email, user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');

    const data = page ? { email } : { email, name: user, number: num, pass: pwd };

    const verify = EMAIL_REGEX.test(email)
    if (!verify) {
      page ? setErrMsg("Invalid Email Address. Please Try again") : {}
      return
    }

    try {
      const result = await axios.post('/Signup', data);
      console.log(result);
      if (page) {
        setPage(false);
      } else {
        if (result.data.message === "Email Already exists") {
          setErrMsg("Email already exists. Try Login")
          setTimeout(() => {
            navigate('/Login')
          },1500)
        } else {
          navigate('/')
        }
      }
    } catch (err) {
      setErrMsg('Failed to submit the form. Please try again.');
      console.log(err);
    }
  }

  const togglePage = () => {
    setPage(!page);
  };

  return (
    <div>
      <div className="md:fixed inset-0 md:bg-black opacity-50 z-20"></div>

      <div className='md:absolute md:flex items-center justify-start md:p-20 xl:ml-100 2xl:ml-165 h-svh z-20'>
        {/* <Link to='/' className='hidden md:block'>
          <button>
            <IoMdClose className='cancel' />
          </button>
        </Link> */}

        <div className='bg-white border rounded-xl flex flex-col items-center justify-start md:justify-evenly md:p-4 md:py-8 h-full md:h-auto'>

          <Link to='/' className='md:hidden'>
            <button>
              <IoMdClose className='cancel' />
            </button>
          </Link>
          <Link to='/' className='hidden md:block ml-96 text-2xl'>
            <button>
              <IoMdClose/>
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

                <form onSubmit={handleSubmit} className='flex flex-col w-full'>

                  <label
                    htmlFor='emailId'
                    className='mb-2 text-sm font-medium mr-72 md:left-10 flex flex-row'>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="emailId"
                    required
                    className='border border-blue-300 rounded-md p-2 px-4 mr-4 w-full mb-2'
                    placeholder='Enter your email id'
                    value={email}
                    aria-invalid={validEmail ? "false" : "true"}
                    aria-describedby="emailnote"
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <p ref={errRef} className={errMsg ? "text-red-500 my-2" : "offscreen"} aria-live="assertive">{errMsg}</p>

                  {emailFocus && email && !validEmail && (
                    <p id='emailnote' className='text-red-500 my-2'>
                      Invalid Email Address
                    </p>
                  )}

                  <button
                    type='submit'
                    className='py-2 px-8 bg-blue-500 text-white font-bold border rounded-md mt-2'>
                    Register
                  </button>

                </form>

                <Link to={'/Login'} className='w-full'>
                <button
                    type='submit'
                    className='py-2 px-8 bg-blue-500 text-white font-bold border rounded-md mt-4 w-full'>
                    Already have an account ? Login here
                </button>
                </Link>
                

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
          ) : (
            <div className='md:px-8'>
              
                <button
                  className='text-red-500 mb-4 mr-80'
                  onClick={togglePage}>
                  Back
                </button>
              
              <div className='flex flex-col items-center justify-evenly'>
                <div className='flex flex-col items-start justify-center'>
                  <h1 className='font-bold text-3xl text-gray-700 mb-8'> Your Account Details </h1>
                </div>
                  
                <p ref={errRef} className={errMsg ? "text-red-500 my-2" : "offscreen"} aria-live="assertive">{errMsg}</p>

                <form onSubmit={handleSubmit} className='flex flex-col md:flex md:flex-col'>
                  
                  <label 
                    htmlFor="name"
                    className='mb-2 text-sm font-medium mr-72 flex flex-row'>
                    Full Name
                    <FaCheckCircle className={`${validName ? "text-green-500" : "hidden"} text-lg ml-2`} />
                    <BiSolidErrorCircle className={ `${validName || !user ? "hidden" : "text-red-500"} text-lg ml-2` }/>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className='border border-blue-300 rounded-md p-2 px-4 mr-4 w-full'
                    placeholder='Enter your name'
                    required
                    autoComplete="off"
                    value={user}
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                    onChange={(e) => setUser(e.target.value)}
                  />
                  {userFocus && user && !validName && (
                    <p id="uidnote" className="text-red-500 mt-2">
                      4 to 24 characters.
                      Must begin with a letter.<br />
                      Letters, numbers, underscores, hyphens allowed.
                    </p>
                  )}

                  <label
                    htmlFor='num'
                    className='mb-2 text-sm font-medium mr-72 mt-4 flex flex-row'>
                    Mobile No.
                    <FaCheckCircle className={`${validNum ? "text-green-500" : "hidden"} text-lg ml-2`} />
                    <BiSolidErrorCircle className={ `${validNum || !num ? "hidden" : "text-red-500"} text-lg ml-2` }/>
                  </label>
                  <input
                    type="text"
                    id="num"
                    className='border border-blue-300 rounded-md p-2 px-4 mr-4 w-full'
                    placeholder='Enter your mobile number'
                    required
                    autoComplete='off'  
                    value={num}
                    aria-invalid={validNum ? "false" : "true"}
                    aria-describedby='numnote' 
                    onFocus={() => setNumFocus(true)}
                    onBlur={() => setNumFocus(false)}
                    onChange={(e) => setNum(e.target.value)}
                  />
                    {numFocus && num && !validNum && (
                      <p id='numnote' className='text-red-500 mt-2'>
                        Mobile Number should be 10 digits
                      </p>
                  )} 

                  <label
                    htmlFor='password'
                    className='mb-2 text-sm font-medium mr-72 mt-4 flex flex-row'>
                    Password
                    <FaCheckCircle className={`${validPwd ? "text-green-500" : "hidden"} text-lg ml-2`} />
                    <BiSolidErrorCircle className={ `${validPwd || !pwd ? "hidden" : "text-red-500"} text-lg ml-2` }/>
                  </label>
                  <input
                    type='password'
                    id="password"
                    className='border border-blue-300 rounded-md p-2 px-4 mr-4 w-full'
                    placeholder='Enter your password'
                    required
                    value={pwd}
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                    onChange={(e) => setPwd(e.target.value)}
                  />
                  {pwdFocus && !validPwd && (
                    <p id="pwdnote" className="text-red-500 my-2">
                      8 to 24 characters.<br />
                      Must include uppercase and lowercase letters,<br />
                      a number and a special character.<br />
                      Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                    </p>
                  )}

                  <label
                    htmlFor='confirm_pwd'
                    className='mb-2 text-sm font-medium mr-72 mt-4 flex flex-row'>
                    Confirm
                    <FaCheckCircle className={`${validMatch && matchPwd ? "text-green-500" : "hidden"} text-lg ml-2`} />
                    <BiSolidErrorCircle className={ `${validMatch || !matchPwd ? "hidden" : "text-red-500"} text-lg ml-2` }/>
                  </label>
                  <input
                    type='password'
                    id="confirm_pwd"
                    className='border border-blue-300 rounded-md p-2 px-4 mr-4 w-full mb-4'
                    placeholder='Confirm your password'
                    required
                    value={matchPwd}
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                    onChange={(e) => setMatchPwd(e.target.value)}
                  />
                  {matchFocus && !validMatch && (
                    <p id="confirmnote" className="text-red-500 my-2">
                      Password does not match
                    </p>
                  )}

                  <button
                    type='submit'
                    disabled={!validName || !validNum || !validPwd || !validMatch}
                    onClick={() => {
                      if (!validName || !validNum || !validPwd || !validMatch) {
                        setErrMsg('Please fill out all fields correctly.')
                      }
                    }}  
                    className={`py-2 px-8 text-white font-bold border rounded-md 
                    ${!validName || !validNum || !validPwd || !validMatch ? 'bg-gray-300' : 'bg-blue-500'}`}>
                      Save & Continue                      
                  </button>
                    
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
