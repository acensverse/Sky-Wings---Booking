import React from 'react'
import './App.css'
import { FaHotel } from "react-icons/fa6";
import { FaTrainSubway } from "react-icons/fa6";
import { FaCarRear } from "react-icons/fa6";
import { GiCommercialAirplane } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

function Nav() {
  return (
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
  )
}

export default Nav