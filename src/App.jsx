import React, { useEffect, useState } from 'react';
import './App.css'
import { FaHotel } from "react-icons/fa6";
import { FaTrainSubway } from "react-icons/fa6";
import { FaCarRear } from "react-icons/fa6";
import { GiCommercialAirplane } from "react-icons/gi";
import Nav from './components/Nav';
import Travel from './components/Travel';
import Fare from './components/Fare';
import Signup from './components/Login/Signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Flight from './components/Flight';


function App() { 

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Nav/>
    },

  ])



  const [bgImage, setBgImage] = useState('')
  
  useEffect(() => {
    const imageURLs = [
      'images/river.jpg',
      'images/boat.jpg',
      'images/1.jpg',
      'images/2.jpg',
      'images/3.jpg',
      'images/4.jpg'
    ]
    
    const randomBg = Math.floor(Math.random() * imageURLs.length)
    const randomImage = imageURLs[randomBg];

    setBgImage(randomImage)

  },[])

  return (
    <div className='app' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${bgImage})` }}>
      
      <RouterProvider router={router} />
      
      {/* <Nav /> */}

      {/* Mobile view Port Trip Section */}

      <div className="md:hidden mt-4">
        <ul className='flex items-center justify-evenly list-none text-black'>
          <li className='flex flex-col border border-white rounded-xl bg-white '> <GiCommercialAirplane className='m-2' /> Flights </li>
          <li className='flex flex-col border-white rounded-xl bg-white'> <FaHotel className='m-2'/> Hotels </li>
          <li className='flex flex-col border-white rounded-xl bg-white'> <FaTrainSubway className='m-2'/> Trains </li>
          <li className='flex flex-col border-white rounded-xl bg-white px-5'> <FaCarRear className='m-2' /> Cabs </li>
        </ul>
      </div>

      {/* --------------------------------------------------------------------------------- */}

      <section className=' static md:relative md:flex flex-col items-center justify-evenly md:justify-center mt-2 md:mt-20 p-4 md:p-0'>

        <form action="" id='station' className='flex items-center justify-around bg-white z-10 rounded-xl md:p-4'>
          <label className='p-4 text-gray-500 font-bold'><input type="radio" id='selectST' name='options' /> One Way </label>
          <label className='p-4 text-gray-500 font-bold'><input type="radio" id='selectST' name='options' /> Round Trip </label>
          <label className='p-4 text-gray-500 font-bold'><input type="radio" id='selectST' name='options' /> Multi City </label>
          <p className='ml-20 mr-4 text-gray-500 hidden md:block'> Book International and Domestic Flight </p>
        </form>

        {/* Travels Section and Station Options */}

        <Travel />

        {/* Special Fares section */}

        <Fare />
        
        <div className="search">
          <button id='search'className=' bg-gradient-to-r from-blue-400 to-blue-800 rounded-full p-4 px-12'> SEARCH </button>
        </div>

      </section>
    </div>
  )
}

export default App
