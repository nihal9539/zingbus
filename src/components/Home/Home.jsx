import React from 'react'

import "./Home.css"

import Homepagedatepicker from '../../Pages/Homepagedatepicker/Homepagedatepicker'


const Home = () => {
  

  return (

    <div className="home">
      {/* <Header /> */}
      <div className="home-container">
        <div className="image">

        </div>
       <Homepagedatepicker/>
      </div>
      <div style={{height:"200px"}}></div>
      {/* <Counter/> */}
    </div>

  )
}

export default Home
