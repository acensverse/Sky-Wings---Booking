import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <img src="/public/images/logo.png" alt="logo" className='logo'/>
        <ul className='trips'>
          <li> Flights </li>
          <li> Hotels </li>
          <li> Trains </li>
          <li> Cabs </li>
        </ul>
        <ul className='accinfo'>
          <li> My Trips </li>
          <li> Login / SignUp </li>
        </ul>
      </nav>
      <section>
        <div className="booking">
          <form action="" id='station'>
            <input type="radio" id='selectST' name='options' />
            <label> One Way </label>
            <input type="radio" id='selectST' name='options' />
            <label> Round Trip </label>
            <input type="radio" id='selectST' name='options' />
            <label> Multi Trip </label>
          </form>
        </div>
      </section>
    </>
  )
}

export default App
