import React, { useState } from 'react'
import "./Booking.css"
import Switchbutton from '../../Pages/Switchbutton/Switchbutton';
import { IoIosArrowForward } from "react-icons/io"
import { RxDownload } from "react-icons/rx"
import Buslist from '../Buslist/Buslist';
import Leftsidedetails from '../../Pages/Leftsidedetails/Leftsidedetails';
import { Link } from 'react-router-dom';

import { db } from '../../config/firebase-config'
import { ref, onValue } from "firebase/database"
import { useEffect } from 'react';
const Booking = () => {
  const [switccontainer, setSwitchcontainer] = useState("black")
  const [date, setDate] = useState([])
  const [from, setfrom] = useState("")
    const [to, setTo] = useState("")
  useEffect(()=>{
    onValue(ref(db),snapshot=>{
        let data = snapshot.val()
        console.log(data.date);
        if (data !== null) {
            Object.values(data.date).map((todo)=>{
                console.log(todo);
                setDate((prev)=>[...prev,todo])
             
            })
        }
    })
},[])
// useEffect(()=>{
//   onValue(ref(db),snapshot=>{
//       let data = snapshot.val()
//       // console.log(data.bus);
//       if (data !== null) {
//           Object.values(data.places).map((todo)=>{
//               console.log(todo);
//               setPlaces((prev)=>[...prev,todo])
           
//           })
//       }
//   })
// },[])
  return (
    <div className='containers'>
      <div className="search">
        <div className="inputs">
          <input type="text" value='Delhi' />
          <input type="text" value='Banglore' />
          <input type="text" />
          <button className='search-btn'>Search bus</button>

        </div>
      </div>
      <Switchbutton switccontainer={switccontainer} />


      <div className='switch-btn'>
        <div className="zingbus-btn" onClick={() => setSwitchcontainer("black")}>
          <img src="zingbus-btn-logo.png" alt="" />
          <span>zingbus</span>
        </div>
        <div className="valuebus-btn" onClick={() => setSwitchcontainer("green")}>
          <img src="save-img.png" alt="" />
          <span>valuebus</span>
        </div>
      </div>
      <div className="booking-container">
        <div className="booking-details">
          <div className="buslocation">
            <div className='arrowlinks'>
              <Link to={'/'} className='links'><a href="">zingbus</a></Link>
              <IoIosArrowForward />
              <a href="">bus tickets</a>
              <IoIosArrowForward />
              <a href="">delhi-bus-booking-online</a>
              <IoIosArrowForward />
              <a href="">delhi to bangalore</a>
            </div>
            <div className='offer'>
              <RxDownload className='dowl-btn' />
              <span>Download the app to get ₹200 OFF on 1st booking</span>
            </div>
          </div>
          <div className="details">
            <div className="l-details">
              <Leftsidedetails/>
            </div>
            <div className="r-details">
              <div className="row-date-pickers">
                <div>

                {/* dates */}
                  <ul className='dates'>
                    {date.map((item) => {
                      console.log(item);
                      return (
                        <div className='date'>
                          <span>{item.day}</span>
                          <span>{item.date}</span>
                          </div>
                      )
                    })}
                  </ul>
                </div>
              </div>
              <div className='accordian'>
                <Buslist/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
