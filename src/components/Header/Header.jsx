import React, { useState } from 'react'
import "./Header.css"
// import { Link } from 'react-router-dom'
// import Rightsidebar from '../../Pages/Rightsidebar/Rightsidebar'
import { AiOutlineClose, AiOutlineBars } from 'react-icons/ai'
import { LuLogOut } from 'react-icons/lu'
import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'
// import "./Rightsidebar.css"
import { auth } from "../../config/firebase-config"
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { Toaster } from 'react-hot-toast'

const Header = () => {
    const [sidebar, setSidebar] = useState(0)

    const showSidebar = () => setSidebar(!sidebar);
    const [OTP, setOTP] = useState("");
    const [phone, setPhone] = useState("")
    const [showOtp, setShowOtp] = useState(false)
    const [login, setLogin] = useState(false)
    

    const loginslide = ()=>{
        setSidebar(!sidebar)
    }
   const logout = ()=>{
    setLogin(!login)
    setSidebar(!sidebar)
   }
    const generaterecapta = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {

            }
        },
            auth
        )
    }

    const requestOTP = (e) => {
        e.preventDefault()
        setShowOtp(true)
        const formatPhone = "+" + phone
        generaterecapta()
        let appvarifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, formatPhone, appvarifier)
            .then(confirmationResult => {
                window.confirmationResult = confirmationResult
            }).catch((error) => {
                console.log(error);
            })
    }

    function verifyOTP(e) {
        console.log(OTP);
        if (OTP.length === 6) {
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(OTP).then((result) => {

                console.log("ver");
                setSidebar(!sidebar)
                setLogin(true)

            }).catch((error) => {

            });
        }
    }

    return (
        <div className="header-container">
            <div className="c-right">
                <img className='logo' src="logo.png" alt="" />
            </div>
            <div className="c-left">
                <div className="reward">
                    <div className='text'>
                        <span>Get extra discount upto</span>
                        <span>#500 for zintone</span>
                    </div>
                </div>
                {
                    login ? (
                        <AiOutlineBars size={25} color='black' onClick={loginslide}/>
                    ) :
                        (
                            <div className="signup">

                                <span className='signup-link' onClick={showSidebar}>Signup</span>
                                <span>And <span style={{ fontWeight: 600 }}>Get ₹200 OFF</span> on first booking</span>
                            </div>
                        )
                }
                <div className="sidebar">

                </div>
                <div className="nav">
                    {/* <Rightsidebar sidebar={sidebar} showSidebar={showSidebar}/> */}
                    <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        {
                            login ? (
                                <div className="logout-div" onClick={logout}>
                                  <LuLogOut size={25} />
                                  <span>Log out</span>
                                </div>
                            ) : (
                                <div className="div">
                                    <div className="close-icon">
                            <AiOutlineClose onClick={showSidebar} className='close' color='black' cursor={'pointer'} size={'20px'} />
                        </div>
                        <div className="login">
                            <div><span>Login</span></div>
                            <Toaster toastOptions={{ duration: 400 }} />
                            {/* <CgSpinner size={25} color='red'/> */}
                            {showOtp ? (
                                <div className="number">
                                    <div className="number-text">
                                        <div>

                                            <input type="text" className='inputs' value={OTP} onChange={(e) => setOTP(e.target.value)} />

                                        </div>
                                    </div>
                                    <button className='login-button' onClick={verifyOTP}>
                                        <span>Login</span>
                                    </button>
                                </div>
                            )
                                :
                                (
                                    <form action="" onSubmit={requestOTP}>
                                        <div className="number">
                                            <div className="number-text">
                                                <div>

                                                    <PhoneInput
                                                        country={"in"}
                                                        disableDropdown={true}
                                                        placeholder='Mobile Number'
                                                        inputStyle={{ border: "none" }}
                                                        searchStyle={{ backgroundColor: "white" }}
                                                        countryCodeEditable={false}
                                                        value={phone}
                                                        onChange={setPhone}
                                                    />

                                                </div>
                                            </div>
                                            <button className='login-button' type='submit'>
                                                <span>Login</span>
                                            </button>


                                        </div>
                                    </form>
                                )
                            }

                            <div id='recaptcha-container'></div>
                        </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
