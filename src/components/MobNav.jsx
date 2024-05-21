import React from 'react'
import { GiCommercialAirplane } from "react-icons/gi";
import { FaHotel } from "react-icons/fa6"; import { FaTrainSubway } from "react-icons/fa6";
import { FaCarRear } from "react-icons/fa6";


function MobNav() {
  return (
    <div className="md:hidden mt-4">
    <ul className='flex items-center justify-evenly list-none text-black'>
      <li className='flex flex-col border border-white rounded-xl bg-white '> <GiCommercialAirplane className='m-2' /> Flights </li>
      <li className='flex flex-col border-white rounded-xl bg-white'> <FaHotel className='m-2'/> Hotels </li>
      <li className='flex flex-col border-white rounded-xl bg-white'> <FaTrainSubway className='m-2'/> Trains </li>
      <li className='flex flex-col border-white rounded-xl bg-white px-5'> <FaCarRear className='m-2' /> Cabs </li>
    </ul>
  </div>
  )
}

export default MobNav