import React from 'react'

function MobNav() {
  return (
    <div className="md:hidden mt-4">
    <ul className='flex items-center justify-evenly list-none text-black px-2'>
      <li className='flex flex-col border border-white rounded-2xl bg-white '> <img src="images/airplane.png" alt="" className='w-10 mx-2' /> Flights </li>
      <li className='flex flex-col border-white rounded-2xl bg-white'> <img src="images/hotel.png" alt="" className='w-10 mx-2'/> Hotels </li>
      <li className='flex flex-col border-white rounded-2xl bg-white'> <img src="images/train.png" alt="" className='w-10 mx-2' /> Trains </li>
      <li className='flex flex-col border-white rounded-2xl bg-white'> <img src="images/taxi.png" alt="" className='w-10 mx-2' /> Cabs </li>
    </ul>
  </div>
  )
}

export default MobNav