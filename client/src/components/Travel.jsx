import React from 'react'
import '../App.css'
import { HiSwitchHorizontal } from "react-icons/hi";

function Travel() {
  return (
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
        <label className='absolute left-10 px-1 bg-white text-l text-gray-500 font-medium'> Travellers & Class </label>
        <input type="list" name="placeName" id="placeName" placeholder='1 Adult Economy' className='border-2 border-gray-300 rounded-xl p-8 mt-3 mx-1' />
      </div>
    </form>
  )
}

export default Travel