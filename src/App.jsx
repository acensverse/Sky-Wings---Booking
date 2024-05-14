import './App.css'
import { FaHotel } from "react-icons/fa6";
import { FaTrainSubway } from "react-icons/fa6";
import { FaCarRear } from "react-icons/fa6";
import { PiAirplaneTiltFill } from "react-icons/pi";

function App() {

  return (
    <>
      <nav>
        <img src="/images/logo.png" alt="logo" className='logo'/>
        <ul className='trips'>
          <li className=''> <PiAirplaneTiltFill /> Flights </li>
          <li> <FaHotel /> Hotels </li>
          <li> <FaTrainSubway /> Trains </li>
          <li> <FaCarRear /> Cabs </li>
        </ul>
        <ul className='accinfo'>
          <li> My Trips </li>
          <li> Login / SignUp </li>
        </ul>
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
              <label class=' '> From <input type="text" name="placeName" id="placeName1" placeholder='Station 1' class='border border-gray-500 rounded-xl p-8 m-2' /> </label>
              <label class=' '> To <input type="text" name="placeName" id="placeName2" placeholder='Station 1' class='border border-gray-500 rounded-xl p-8 m-2' /> </label>
              <label class=' '> Departure <input type="text" name="placeName" id="placeName2" placeholder='Station 1' class='border border-gray-500 rounded-xl p-8 m-2' /> </label>
              <label class=' '> Return <input type="text" name="placeName" id="placeName2" placeholder='Station 1' class='border border-gray-500 rounded-xl p-8 m-2' /> </label>
              <label class=' '> Travellers & Class <input type="text" name="placeName" id="placeName2" placeholder='Station 1' class='border border-gray-500 rounded-xl p-8 m-2' /> </label>
            </form>
            <div className="special">
              <label class='border border-gray-500 p-4 rounded-xl'> <input type="radio" name="specialfare" id="specialFare" class=' m-2 p-4 ' /> Regular </label>
              <label class='border border-gray-500 p-4 rounded-xl'> <input type="radio" name="specialfare" id="specialFare" class='m-2 p-4'/> Student </label>
              <label class='border border-gray-500 p-4 rounded-xl'> <input type="radio" name="specialfare" id="specialFare" class='m-2 p-4'/> Senior Citizen </label>
              <label class='border border-gray-500 p-4 rounded-xl'> <input type="radio" name="specialfare" id="specialFare" class='m-2 p-4'/> Armed Forces </label>
              <label class='border border-gray-500 p-4 rounded-xl'> <input type="radio" name="specialfare" id="specialFare" class='m-2 p-4'/> Docter and Nurses </label>
            </div>
          </div>

        </div>

          
      </section>
    </>
  )
}

export default App
