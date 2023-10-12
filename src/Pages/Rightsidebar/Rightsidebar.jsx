import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'
import "./Rightsidebar.css"
import { auth } from "../../config/firebase-config"
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { Toaster } from 'react-hot-toast'




const Rightsidebar = ({ sidebar, showSidebar }) => {

    const [OTP, setOTP] = useState("");
    const [phone, setPhone] = useState("")
    const [showOtp, setShowOtp] = useState(false)

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

            }).catch((error) => {

            });
        }
    }


    return (
        <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
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

export default Rightsidebar
