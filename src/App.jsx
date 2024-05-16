import React, { useEffect, useState } from 'react';
import './App.css'
import { FaHotel } from "react-icons/fa6";
import { FaTrainSubway } from "react-icons/fa6";
import { FaCarRear } from "react-icons/fa6";
import { GiCommercialAirplane } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { HiSwitchHorizontal } from "react-icons/hi";

function App() { 
  const [bgImage, setBgImage] = useState('')
  
  useEffect(() => {
    const imageURLs = [
      'images/river.jpg',
      'images/boat.jpg',
      'images/1.jpg',
      'images/2.jpg',
      'images/3.jpg',
    ]
    
    const randomBg = Math.floor(Math.random() * imageURLs.length)
    const randomImage = imageURLs[randomBg];

    setBgImage(randomImage)

  },[])

  return (
    <div className='app' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${bgImage})` }}>
      
      <nav className='relative md:static flex items-center justify-between md:justify-around'>
        <div className="icon">
          <img src="/images/logo3.png" alt="logo" className='w-16 md:w-36 ml-4 md:ml-auto' />
        </div>
        
        <div className="midPart, hidden ml-60 md:flex">
          <ul className='trips flex items-center justify-center list-none p-4 text-white text-xl'>
            <li> <GiCommercialAirplane className='mr-2' /> Flights </li>
            <li> <FaHotel className='mr-2'/> Hotels </li>
            <li> <FaTrainSubway className='mr-2'/> Trains </li>
            <li> <FaCarRear className='mr-2' /> Cabs </li>
          </ul>
        </div>

        <div className="accPart">
          <ul className='text-white text-sm md:text-xl p-4 flex items-center justify-center'>
            <li> My Trips </li>
            <li className='border border-blue-500 rounded-xl bg-blue-500 text-lg'> <CgProfile className='mr-2'/> LOGIN / SIGNUP </li>
          </ul>
        </div>
      </nav>

      {/* Mobile view Port Trip Section */}

      <div className="md:hidden mt-4">
        <ul className='flex items-center justify-evenly list-none text-black'>
          <li className='flex flex-col border border-white rounded-xl bg-white '> <GiCommercialAirplane className='m-2' /> Flights </li>
          <li className='flex flex-col border-white rounded-xl bg-white'> <FaHotel className='m-2'/> Hotels </li>
          <li className='flex flex-col border-white rounded-xl bg-white'> <FaTrainSubway className='m-2'/> Trains </li>
          <li className='flex flex-col border-white rounded-xl bg-white px-5'> <FaCarRear className='m-2' /> Cabs </li>
        </ul>
      </div>

      {/* --------------------------------------------------------------------------------------------- */}

      <section className=' static md:relative md:flex flex-col items-center justify-evenly md:justify-center mt-5 md:mt-20 p-4 md:p-0'>

        <form action="" id='station' className='flex items-center justify-around bg-white z-10 rounded-xl md:p-4'>
          <label className='p-4 text-gray-500 font-bold'><input type="radio" id='selectST' name='options' /> One Way </label>
          <label className='p-4 text-gray-500 font-bold'><input type="radio" id='selectST' name='options' /> Round Trip </label>
          <label className='p-4 text-gray-500 font-bold'><input type="radio" id='selectST' name='options' /> Multi City </label>
          <p className='ml-20 mr-4 text-gray-500 hidden md:block'> Book International and Domestic Flight </p>
        </form>

        {/* Travels Section and Station Options */}

        <form action="" id='place' className='static md:absolute md:flex md:flex-row md:items-center md:justify-center md:pt-20 md:pb-40 md:px-4 flex-col items-center justify-evenly bg-white rounded-xl md:mt-88 p-5 mt-2'>

          <div className="relative">
            <label className='absolute left-10 px-1 bg-white text-l text-gray-500 font-medium'> From  </label>
            <input type="text" name="placeName" id="placeName" placeholder='Enter city or airport' className='border-2 border-gray-300 rounded-xl p-8 mt-3 mx-1 text-black font-bold' />
          </div>

          {/* Switch button */}

          <div className="relative flex justify-center items-center align-middle">
            <div className=" absolute z-10 mt-2.5">
            <HiSwitchHorizontal className='text-blue-500 text-4xl bg-white border border-white rounded-full p-2' id='switch' />
            </div>
          </div>

          <div className="relative">
            <label className='absolute left-10 px-1 bg-white text-l text-gray-500 font-medium'> To </label>
            <input type="text" name="placeName" id="placeName" placeholder='Enter city or airport' className='border-2 border-gray-300 rounded-xl p-8 mt-3 mx-1 text-black font-bold' />
          </div>

          <div className="relative">
            <label className='absolute left-10 px-1 bg-white text-l text-gray-500 font-medium'> Departure </label>
            <input type="date" name="placeName" id="placeName" placeholder='Departure' className='border-2 border-gray-300 rounded-xl p-8 mt-3 mx-1' />
          </div>
          
          <div className="relative">
            <label className='absolute left-10 px-1 bg-white text-l text-gray-500 font-medium'> Return </label>
            <input type="date" name="placeName" id="placeName" placeholder='Return' className='border-2 border-gray-300 rounded-xl p-8 mt-3 mx-1' />
          </div>
          
          <div className="relative">
            <label className='absolute left-10 px-1 bg-white text-l text-gray-500 font-medium'> Travellers & className </label>
            <input type="list" name="placeName" id="placeName" placeholder='1 Adult Economy' className='border-2 border-gray-300 rounded-xl p-8 mt-3 mx-1' />
          </div>
        </form>

        {/* Special Fares section */}

        <div className="special hidden md:flex items-center justify-evenly absolute z-1 mt-120" >
          <div className="m-2">
            <h1 className='font-bold'> Special Fares </h1>
            <h1 className='bg-gradient-to-r from-indigo-400 to-indigo-800 p-2 rounded-md text-sm text-white font-bold'> EXTRA SAVINGS </h1>
          </div>

          <div className="border-2 border-gray-300 rounded-xl pt-2 pb-2 pr-2 m-2">
            <label className='font-bold text-gray-800'> <input type="radio" name="specialfare" id="specialFare" className='mr-2' /> Regular <p className='text-xs text-gray-500 font-medium ml-10'> Regular Fares </p> </label>
          </div>
          
          <div className="border-2 border-gray-300 rounded-xl pt-2 pb-2 pr-2 m-2">               
            <label className='font-bold text-gray-800'> <input type="radio" name="specialfare" id="specialFare" className='mr-2' /> Student <p className='text-xs text-gray-500 font-medium ml-10'> Extra Discounts </p> </label>
          </div>
          
          <div className="border-2 border-gray-300 rounded-xl pt-2 pb-2 pr-2 m-2">               
            <label className='font-bold text-gray-800'> <input type="radio" name="specialfare" id="specialFare" className='m-2 p-4'/> Senior Citizen <p className='text-xs text-gray-500 font-medium ml-10'> Exclusive Discounts </p> </label>              
          </div>
          
          <div className="border-2 border-gray-300 rounded-xl pt-2 pb-2 pr-2 m-2">               
            <label className='font-bold text-gray-800'> <input type="radio" name="specialfare" id="specialFare" className='m-2 p-4'/> Armed Forces <p className='text-xs text-gray-500 font-medium ml-10'> Exclusive Discounts </p> </label>          
          </div>
          
          <div className="border-2 border-gray-300 rounded-xl pt-2 pb-2 pr-2 m-2">              
            <label className='font-bold text-gray-800'> <input type="radio" name="specialfare" id="specialFare" className='m-2 p-4'/> Docter and Nurses <p className='text-xs text-gray-500 font-medium ml-1'> Exclusive Discounts </p> </label>             
          </div>
        </div>

          <div className="search">
            <button id='search'className=' bg-gradient-to-r from-blue-400 to-blue-800 rounded-full p-4 px-12'> SEARCH </button>
          </div>
      </section>
    </div>
  )
}

export default App
