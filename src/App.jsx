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
      '/public/images/river.jpg',
      '/public/images/boat.jpg',
      '/public/images/1.jpg',
      '/public/images/2.jpg',
      '/public/images/3.jpg',
    ]

    console.log(imageURLs);
    
    const randomBg = Math.floor(Math.random() * imageURLs.length)
    const randomImage = imageURLs[randomBg];

    setBgImage(randomImage)

  },[])

  return (
    <div className='app' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${bgImage})`}}>
      <nav>
        <div className="icon">
          <img src="/images/logo3.png" alt="logo" className='logo' />
        </div>
        
        <div className="midPart">
          <ul className='trips'>
            <li> <GiCommercialAirplane className='mr-2' /> Flights </li>
            <li> <FaHotel className='mr-2'/> Hotels </li>
            <li> <FaTrainSubway className='mr-2'/> Trains </li>
            <li> <FaCarRear className='mr-2' /> Cabs </li>
          </ul>
        </div>

        <div className="accPart">
          <ul className='accinfo'>
            <li> My Trips </li>
            <li className='border border-blue-500 rounded-xl bg-blue-500'> <CgProfile  className='mr-2'/> LOGIN / SIGNUP </li>
          </ul>
        </div>
      </nav>

      <section>
        <div className="booking">
          <form action="" id='station'>
            <label class='m-4 text-gray-500 font-bold'><input type="radio" id='selectST' name='options' /> One Way </label>
            <label class='m-4 text-gray-500 font-bold'><input type="radio" id='selectST' name='options' /> Round Trip </label>
            <label class= 'm-4 text-gray-500 font-bold'><input type="radio" id='selectST' name='options' /> Multi City </label>
            <p class='ml-20 mr-4 text-gray-500'> Book International and Domestic Flight </p>
          </form>

          <div className="specialfarebooking">
            <form action="" id='place'>

              <div className="relative">
                <label className=' absolute left-10 bg-white text-l text-gray-500 font-medium'> From  </label>
                <input type="text" name="placeName" id="placeName" placeholder='Enter city or airport' class='border-2 border-gray-300 rounded-xl p-8 mt-3 mx-1 text-black font-bold' />
              </div>

              {/* Switch button */}

              <div className="relative flex justify-center items-center align-middle">
                <div className=" absolute z-10 mt-2.5">
                <HiSwitchHorizontal className='text-blue-500 text-4xl bg-white border border-white rounded-full p-2' id='switch' />
                </div>
              </div>

              <div className="relative">
                <label className='absolute left-10 bg-white text-l text-gray-500 font-medium'> To </label>
                <input type="text" name="placeName" id="placeName" placeholder='Enter city or airport' class='border-2 border-gray-300 rounded-xl p-8 mt-3 mx-1 text-black font-bold' />
              </div>

              <div className="relative">
                <label className='absolute left-10 bg-white text-l text-gray-500 font-medium'> Departure </label>
                <input type="date" name="placeName" id="placeName" placeholder='Departure' class='border-2 border-gray-300 rounded-xl p-8 mt-3 mx-1' />
              </div>
              
              <div className="relative">
                <label className='absolute left-10 bg-white text-l text-gray-500 font-medium'> Return </label>
                <input type="date" name="placeName" id="placeName" placeholder='Return' class='border-2 border-gray-300 rounded-xl p-8 mt-3 mx-1' />
              </div>
              
              <div className="relative">
                <label className='absolute left-10 bg-white text-l text-gray-500 font-medium'> Travellers & Class </label>
                <input type="text" name="placeName" id="placeName" placeholder='Travellers & Class' class='border-2 border-gray-300 rounded-xl p-8 mt-3 mx-1' />
              </div>
            </form>

            <div className="special" >
              <div className="">
                <h1 className='font-bold'> Special Fares </h1>
                <h1 className='bg-gradient-to-r from-indigo-400 to-indigo-800 p-2 rounded-xl text-white font-bold'> EXTRA SAVINGS </h1>
              </div>

              <div className="border-2 border-gray-300 rounded-xl pt-2 pb-2 pr-2 m-2">
                <input type="radio" name="specialfare" id="specialFare" class='mr-2' />
                <label className='font-bold text-gray-800'> Regular </label>
                <p className='text-xs text-gray-500 font-medium ml-10'> Regular Fares </p>
              </div>
              
              <div className="border-2 border-gray-300 rounded-xl pt-2 pb-2 pr-2 m-2">
                <input type="radio" name="specialfare" id="specialFare" class='mr-2' />
                <label className='font-bold text-gray-800'> Student </label>
                <p className='text-xs text-gray-500 font-medium ml-10'> Extra Discounts </p>
              </div>
              
              <div className="border-2 border-gray-300 rounded-xl pt-2 pb-2 pr-2 m-2">
                <input type="radio" name="specialfare" id="specialFare" class='m-2 p-4'/>
                <label className='font-bold text-gray-800'> Senior Citizen </label>
                <p className='text-xs text-gray-500 font-medium ml-10'> Exclusive Discounts </p>
              </div>
              
              <div className="border-2 border-gray-300 rounded-xl pt-2 pb-2 pr-2 m-2">
                <input type="radio" name="specialfare" id="specialFare" class='m-2 p-4'/>
                <label className='font-bold text-gray-800'> Armed Forces </label>
                <p className='text-xs text-gray-500 font-medium ml-10'> Exclusive Discounts </p>
              </div>
              
              <div className="border-2 border-gray-300 rounded-xl pt-2 pb-2 pr-2 m-2">
                <input type="radio" name="specialfare" id="specialFare" class='m-2 p-4'/>
                <label className='font-bold text-gray-800'> Docter and Nurses </label>
                <p className='text-xs text-gray-500 font-medium ml-1'> Exclusive Discounts </p>
              </div>
            </div>

            <div className="search">
              <button class=' bg-gradient-to-r from-blue-400 to-blue-800 rounded-full p-4 px-12'> SEARCH </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
