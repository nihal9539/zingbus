import React from 'react'
import { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css"
import "./BoardingAndDropPoint.css"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

const BoardingAndDropPoint = () => {
    const [className, setClassName] = useState(null)
    let data = [
        {
            point: "Bording "
        },
        {
            point: "Drop "
        }
    ]
    let places = [
        { 
            time:"10:00",
            town: "kottakkal" },
        { 
            time:"10:00",
            town: "kochi" },
        { 
            time:"10:00",
            town: "madiwala" },
        { 
            time:"10:00",
            town: "BTM ist stage" },
        { 
            time:"10:00",
            town: "BTM 2nd stage" },
        { 
            time:"10:00",
            town: "kottakkal" },
        { 
            time:"10:00",
            town: "White field" },
        { 
            time:"10:00",
            town: "church street" },
        { 
            time:"10:00",
            town: "eranamkulam" },
        { 
            time:"10:00",
            town: "tirur" },
        // { 
        //     time:"10:00",
        //     town: "madurai" },
        // { 
        //     time:"10:00",
        //     town: "calicut" },
        // { 
        //     time:"10:00",
        //     town: "maharajas" },
    ]
    return (
        <div>
            <Accordion
                className='accordian'
                allowMultipleExpanded={true}
                // onDragExit={true}
            
            // preExpanded={[0]}
            >
                {
                    data.map((item, index) => {

                        return (
                            <AccordionItem className={`accordianitem ${className}`} key={index} uuid={index}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className=' accordianbutton'>
                                        <span>{item.point} Point</span>
                                        <AccordionItemState>
                                            {({ expanded }) =>
                                                expanded
                                                    ? setClassName("expanded")
                                                    : setClassName("collapse")
                                            }
                                        </AccordionItemState>
                                        <div className="flexCenter icon">
                                            <AiOutlinePlus />
                                        </div>


                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel >

                                    {
                                        places.map((place) => {
                                            return (
                                                <div>
                                                    <form action="">
                                                        <div className='points'>
                                                            <input type="checkbox" />
                                                            <div>
                                                                <span>{place.town}</span>
                                                                <span>{place.time}</span>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            )
                                        })
                                    }
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                    })
                }
            </Accordion>
        </div>
    )
}

export default BoardingAndDropPoint
