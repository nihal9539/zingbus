import React from 'react'
import "./Switchbutton.css"
const Switchbutton = ({switccontainer}) => {
  return (
    <div>
      {
         switccontainer === "black" ?
         (
           <div className="black-container" >
             <div className="black-div">
               <div className="zingbus">
                 <img src="logo3.png" alt="" className='blue-logo' />
                 <span>zingbus</span>
               </div>
               <span className='lux-bus'>Luxury bus rides at affordable prices</span>
               <button className='know-btn'>Know more</button>
             </div>
             <img className='logo-pointer' src="https://d1flzashw70bti.cloudfront.net/original/images/smallTriangleZingbusBusesDweb.svg" alt="" />
           </div>
         ) :
         (
           <div className="green-container" >
           <div className="green-div">
             <div className="valbus">
               <img src="green-logo.png" className='green-logo' />
               <span>valuebus</span>
             </div>
             <span className='lux-bus'>Find the cheapest bus tickets here</span>
             <button className='green-know-btn'>Know more</button>
           </div>
           <img className='logo-pointer-2' src="https://d1flzashw70bti.cloudfront.net/original/images/smallTriangleZingbusBusesDweb.svg"
             alt="" />
         </div>
         )
      }
    </div>
  )
}

export default Switchbutton
