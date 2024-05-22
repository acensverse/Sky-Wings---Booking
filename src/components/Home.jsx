import React from 'react'
import '../App.css'
import Nav from './Nav'
import Trip from './Trip'
import Travel from './Travel'
import Fare from './Fare'
import MobNav from './MobNav'

function Home() {
  return (
    <div>
      <Nav />
      <MobNav/>
      <section className=' static md:relative md:flex flex-col items-center justify-evenly md:justify-center mt-2 md:mt-20 p-4 md:p-0'>
        <Trip/>
        <Travel />
        <Fare />
        <div className="search md:absolute text-white font-bold md:text-2xl text-xl">
          <button id='search'className=' bg-gradient-to-r from-blue-400 to-blue-800 rounded-full p-4 px-12'> SEARCH </button>
        </div>
      </section>
      
    </div>
  )
}

export default Home