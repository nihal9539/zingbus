import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { LuCalendarDays } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import Datepicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { db } from '../../config/firebase-config'
import { set, ref, onValue } from "firebase/database"
import { useState } from 'react'
import "./Homepagedatepicker.css"
import { useEffect } from 'react'

const Homepagedatepicker = () => {
    const [date, setDate] = useState(new Date())
    const [from, setfrom] = useState("")
    const [to, setTo] = useState("")
    const [places, setPlaces] = useState([])
    console.log(from);
    console.log(to);
    const fromOnChange = (e) => {
        setfrom(e.target.value)
    }
    const ToOnChange = (e) => {
        setTo(e.target.value)


    }
    const onSearch = () => {
        console.log('from =', from);
        console.log('To =', to);
        console.log('date =', date);
    }
    // const places = [
    //     { place: "kerala" },
    //     { place: "ca" },
    //     { place: "j" },
    //     { place: "j" },


    // ]

    useEffect(()=>{
        onValue(ref(db),snapshot=>{
            let data = snapshot.val()
            // console.log(data.bus);
            if (data !== null) {
                Object.values(data.places).map((todo)=>{
                    console.log(todo);
                    setPlaces((prev)=>[...prev,todo])
                 
                })
            }
        })
    },[])
    return (
        <div className="date-picker">
          <div className="from">
                <div><IoLocationOutline color='blue' size={'20px'} /></div>
                <div className='input'>
                    <span>To City</span>
                    {/* <input className='inputs' type="text" placeholder='To City' value={to} onChange={ToOnChange} /> */}
                    <select name="" id="" className='select-bar'
                   defaultValue={from}
                   onChange={fromOnChange}>
                    {places.map((place) => {
                        return (
                         
                               <option value={place.place}> {place.place}</option>
                            
                        )
                    })}
                   </select>
                </div>

            </div>
            <div className="to">
                <div><IoLocationOutline color='blue' size={'20px'} /></div>
                <div className='input'>
                    <span>To City</span>
                    {/* <input className='inputs' type="text" placeholder='To City' value={to} onChange={ToOnChange} /> */}
                    <select name="" id="" className='select-bar'
                   defaultValue={from}
                   onChange={ToOnChange}>
                    {places.map((place) => {
                        return (
                         
                               <option value={place.place}> {place.place}</option>
                            
                        )
                    })}
                   </select>
                </div>

            </div>
            <div className="date-input">
                <div><LuCalendarDays color='blue' size={'20px'} /></div>
                <div className='input'>
                    <span>Date</span>
                    <Datepicker
                        selected={date}
                        onChange={(date) => setDate(date)}

                    />
                </div>

            </div>
            {/* <Link to={'booking'}> */}
            <Link to={'booking'}><button className='dt-btn' onClick={() => onSearch()}>Search</button></Link>
            {/* </Link> */}
        </div>

    )
}

export default Homepagedatepicker
