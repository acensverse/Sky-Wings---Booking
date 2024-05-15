import './App.css'
import { FaHotel } from "react-icons/fa6";
import { FaTrainSubway } from "react-icons/fa6";
import { FaCarRear } from "react-icons/fa6";
import { GiCommercialAirplane } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { HiSwitchHorizontal } from "react-icons/hi";

function App() {

  return (
    <>
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
            <label class='m-4'><input type="radio" id='selectST' name='options' /> One Way </label>
            <label class='m-4'><input type="radio" id='selectST' name='options' /> Round Trip </label>
            <label class= 'm-4'><input type="radio" id='selectST' name='options' /> Multi City </label>
            <p class='ml-20 mr-4'> Book International and Domestic Flight </p>
          </form>

          <div className="specialfarebooking">
            <form action="" id='place'>

              <div className="relative">
                <label className=' absolute left-10 bg-white text-l text-gray-500 font-medium'> From  </label>
                <input type="text" name="placeName" id="placeName" placeholder='Enter city or airport' class='border border-gray-500 rounded-xl p-8 mt-3 mx-1 text-black font-bold' />
              </div>

              <div className="relative">
               <HiSwitchHorizontal className='absolute text-blue-500 text-4xl bg-white border border-blue-500 rounded-full z-10 p-2' />
              </div>

              <div className="relative">
                <label className='absolute left-10 bg-white text-l text-gray-500 font-medium'> To </label>
                <input type="text" name="placeName" id="placeName" placeholder='Enter city or airport' class='border border-gray-500 rounded-xl p-8 mt-3 mx-1 text-black font-bold' />
              </div>

              <div className="relative">
                <label className='absolute left-10 bg-white text-l text-gray-500 font-medium'> Departure </label>
                <input type="date" name="placeName" id="placeName" placeholder='Departure' class='border border-gray-500 rounded-xl p-8 mt-3 mx-1' />
              </div>
              
              <div className="relative">
                <label className='absolute left-10 bg-white text-l text-gray-500 font-medium'> Return </label>
                <input type="date" name="placeName" id="placeName" placeholder='Return' class='border border-gray-500 rounded-xl p-8 mt-3 mx-1' />
              </div>
              
              <div className="relative">
                <label className='absolute left-10 bg-white text-l text-gray-500 font-medium'> Travellers & Class </label>
                <input type="text" name="placeName" id="placeName" placeholder='Travellers & Class' class='border border-gray-500 rounded-xl p-8 mt-3 mx-1' />
              </div>
            </form>

            <div className="special">
              <label class='border border-gray-500 p-4 rounded-xl'> <input type="radio" name="specialfare" id="specialFare" class=' m-2 p-4' /> Regular </label>
              <label class='border border-gray-500 p-4 rounded-xl'> <input type="radio" name="specialfare" id="specialFare" class='m-2 p-4'/> Student </label>
              <label class='border border-gray-500 p-4 rounded-xl'> <input type="radio" name="specialfare" id="specialFare" class='m-2 p-4'/> Senior Citizen </label>
              <label class='border border-gray-500 p-4 rounded-xl'> <input type="radio" name="specialfare" id="specialFare" class='m-2 p-4'/> Armed Forces </label>
              <label class='border border-gray-500 p-4 rounded-xl'> <input type="radio" name="specialfare" id="specialFare" class='m-2 p-4'/> Docter and Nurses </label>
            </div>
            <div className="search">
              <button class=' bg-gradient-to-r from-blue-400 to-blue-800 rounded-full p-4 px-12'> SEARCH </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
