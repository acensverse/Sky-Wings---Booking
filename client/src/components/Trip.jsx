import React from 'react'

function Trip() {
  return (

    <form action="" id='station' className='flex items-center justify-around bg-white z-10 rounded-xl md:p-4'>
    <label className='p-4 text-gray-500 font-bold'><input type="radio" id='selectST1' name='options' /> One Way </label>
    <label className='p-4 text-gray-500 font-bold'><input type="radio" id='selectST2' name='options' /> Round Trip </label>
    <label className='p-4 text-gray-500 font-bold'><input type="radio" id='selectST3' name='options' /> Multi City </label>
    <p className='ml-20 mr-4 text-gray-500 hidden md:block'> Book International and Domestic Flight </p>
    </form>
    
  )
}

export default Trip