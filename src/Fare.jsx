import React from 'react'
import './App.css'

function Fare() {
  return (
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
  )
}

export default Fare