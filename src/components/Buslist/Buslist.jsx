import React from 'react'
import "./Buslist.css"
import { db } from '../../config/firebase-config'
import {ref, onValue } from "firebase/database"
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion'
import { busDetails } from "../../utils/busDetails.js"
import { useState } from 'react';
import { FaIndianRupeeSign } from "react-icons/fa6"
import { TbSofa } from "react-icons/tb"
import { RiSteering2Fill } from "react-icons/ri"

import { BiSquareRounded } from "react-icons/bi"
import BoardingAndDropPoint from '../../Pages/BoardingAndDropPoint/BoardingAndDropPoint';
import { useEffect } from 'react'
const buttonamount = [
  {
    amount: 300,
    available: 5
  },
  {
    amount: 400,
    available: 10
  },
  {
    amount: 456,
    available: 5
  },
  {
    amount: 390,
    available: 3
  },
  {
    amount: 560,
    available: 2
  },
]
console.log(busDetails);
const Buslist = () => {
  const [className, setClassName] = useState(null)
  const [busdetails,setBusdetails] = useState([])

  useEffect(()=>{
    onValue(ref(db),snapshot=>{
        let data = snapshot.val()
        // console.log(data.bus);
        if (data !== null) {
            Object.values(data.bus).map((todo)=>{
                console.log(todo);
                setBusdetails((prev)=>[...prev,todo])
             
            })
        }
    })
},[])
  return (
    <div>
      <Accordion
        className='accordian'
        allowMultipleExpanded={false}

      >
        {
           busdetails.map((item, index) => {
            console.log(item);
            return (

              <AccordionItem className={`accordianitem ${className}`} key={index} uuid={index} >
                <AccordionItemHeading>
                  <AccordionItemButton className='accordianbutton'>
                    <AccordionItemState>
                      {({ expanded }) =>
                        expanded
                          ? setClassName("expanded")
                          : setClassName("collapse")
                      }
                    </AccordionItemState>
                    <div className="items">
                      <div className='time-amount'>
                        <div className="time">{item.StartTime} {item.endTime}</div>
                        <span><FaIndianRupeeSign size={15} />{item.amount}</span>
                      </div>
                      <div className='name-seat'>
                        <span>{item.name}</span>
                        <span>{item.seatLeft} Seats left</span>
                      </div>

                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="acordian-dropdown">
                    <div className='l-container'>
                      <BoardingAndDropPoint/>
                    </div>
                    <div className='r-container'>
                      <div className="prices">
                        {
                          buttonamount.map((buttons) => {
                            return (
                              <div className='buttons'>
                                <button className='amt-btn'>
                                  <FaIndianRupeeSign size={10} />
                                  <div className="rupee-icon">{buttons.amount} </div>
                                  <div className="available">{` (${buttons.available})`}</div>
                                </button>
                              </div>
                            )
                          })
                        }

                      </div>
                      <div className="seats">
                        <div className="bus-seats">
                          <div className="lower-seat">
                            <div className='driver-seat'>
                              <RiSteering2Fill size={35} />
                            </div>
                            <div className='cus-seats'>
                              <div className='lower-sitting'>
                                <div className="seat-rows">
                                  <TbSofa size={30} style={{ rotate: "90deg" }} />
                                  <TbSofa size={30} style={{ rotate: "90deg" }} />
                                </div>
                                <div className="seat-rows">
                                  <TbSofa size={30} style={{ rotate: "90deg" }} />
                                  <TbSofa size={30} style={{ rotate: "90deg" }} color='grey'/>
                                </div>
                                <div className="seat-rows">
                                  <TbSofa size={30} style={{ rotate: "90deg" }} />
                                  <TbSofa size={30} style={{ rotate: "90deg" }} />
                                </div>
                                <div className="seat-rows">
                                  <TbSofa size={30} style={{ rotate: "90deg" }} color='pink' />
                                  <TbSofa size={30} style={{ rotate: "90deg" }} />
                                </div>
                                <div className="seat-rows">
                                  <TbSofa size={30} style={{ rotate: "90deg" ,color:"lightblue"}}  />
                                  <TbSofa size={30} style={{ rotate: "90deg" }} />
                                </div>
                                <div className="seat-rows">
                                  <TbSofa size={30} style={{ rotate: "90deg" }} />
                                  <TbSofa size={30} style={{ rotate: "90deg" }} />
                                </div>
                                <div className="seat-rows">
                                  <TbSofa size={30} style={{ rotate: "90deg" }} />
                                  <TbSofa size={30} style={{ rotate: "90deg" }} />
                                </div>
                                <div className="seat-rows">
                                  <TbSofa size={30} style={{ rotate: "90deg" }} />
                                  <TbSofa size={30} style={{ rotate: "90deg" }} />
                                </div>
                                <div className="seat-rows">
                                  <TbSofa size={30} style={{ rotate: "90deg" }} />
                                  <TbSofa size={30} style={{ rotate: "90deg" }} />
                                </div>
                                <div className="seat-rows">
                                  <TbSofa size={30} style={{ rotate: "90deg" }} />
                                  <TbSofa size={30} style={{ rotate: "90deg" }} />
                                </div>

                              </div>
                              <div className='lower-sleeper'>
                                <img src="sleeper.png" alt="" />
                                <img src="sleeper.png" alt="" />
                                <img src="sleeper.png" alt="" />
                                <img src="sleeper.png" alt="" />
                                <img src="sleeper.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="upper-seat">

                          <div className='cus-sleeper-seats'>
                            <div className="right-sleepee">
                              <div className='left-sleeper'>
                                <img src="sleeper.png" alt="" />
                                <img src="sleeper.png" alt="" />
                                <img src="sleeper.png" alt="" />
                                <img src="sleeper.png" alt="" />
                                <img src="sleeper.png" alt="" />
                              </div>
                              <div className='left-sleeper'>
                                <img src="sleeper.png" alt="" />
                                <img src="sleeper.png" alt="" />
                                <img src="sleeper.png" alt="" />
                                <img src="sleeper.png" alt="" />
                                <img src="sleeper.png" alt="" />
                              </div>
                            </div>
                            <div className='left-sleeper'>
                              <img src="sleeper.png" alt="" />
                              <img src="sleeper.png" alt="" />
                              <img src="sleeper.png" alt="" />
                              <img src="sleeper.png" alt="" />
                              <img src="sleeper.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='seat-type'>
                        <div className="seat-types">
                          <div className="seat-colm">
                            <div className="seat-row">
                              <div className="row-items"><BiSquareRounded size={20} style={{color:"black", fill:"grey"}}/>Unvailable</div>
                              <div className="row-items"><BiSquareRounded size={20} style={{color:"black", fill:"grey"}}/>Available</div>
                            </div>
                            <div className="seat-row">
                              <div className="row-items"><BiSquareRounded size={20} style={{color:"black", fill:"grey"}}/>Male reserver</div>
                              <div className="row-items"><BiSquareRounded size={20} style={{color:"black", fill:"grey"}}/>Female reserved</div>
                            </div>
                            <div className="seat-row">
                              <div className="row-items"><BiSquareRounded size={20} style={{color:"black", fill:"grey"}}/>Female booked</div>
                              {/* <div className="row-itwms">b</div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </AccordionItemPanel>

              </AccordionItem>

            )
          })}

      </Accordion>
    </div>
  )
}

export default Buslist
