import React from 'react'
import './Footer.css'
import logo from '../../assets/Imgs/Logo1.png'
import { CiLocationOn } from "react-icons/ci";
import { FaHeadphones } from "react-icons/fa6";
import { BsSend } from "react-icons/bs";
import { TbClockHour1 } from "react-icons/tb";
import { footer_one, footer_two, footer_there, footer_four } from '../Data/Data';
import app from '../../assets/Imgs/App.png'
import play from '../../assets/Imgs/play.png'
import payme from '../../assets/Imgs/Payme.png'
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebook,FaTwitter,FaYoutube,FaInstagram,FaTelegram } from 'react-icons/fa6';



const Footer = () => {

    const one_text = footer_one?.map((el, i) => (
        <li key={i}>{el}</li>
    ))

    const two_text = footer_two?.map((el, i) => (
        <li key={i}>{el}</li>
    ))

    const there_text = footer_there?.map((el, i) => (
        <li key={i}>{el}</li>
    ))

    const four_text = footer_four?.map((el, i) => (
        <li key={i}>{el}</li>
    ))

    return (
        <>
            <footer>
                <div className='container'>
                    <div className='flex_elment_big'>
                        <div className='one_text'>
                            <img src={logo} alt="" />
                            <p className='p_text_footer'>Awesome grocery store website
                                template</p>
                            <p></p>
                            <div className='adress'>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <CiLocationOn style={{ color: `rgb(59, 183, 126)` }} />
                                    <p>Address: 5171 W Campbell Ave</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <FaHeadphones style={{ color: `rgb(59, 183, 126)` }} />
                                    <p>Call Us:(+91) - 540-025-124553</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <BsSend style={{ color: `rgb(59, 183, 126)` }} />
                                    <p>Email:sale@Nest.com</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <TbClockHour1 style={{ color: `rgb(59, 183, 126)` }} />
                                    <p>Hours:10:00 - 18:00, Mon - Sat</p>
                                </div>
                            </div>
                        </div>
                        <div className='two_text'>
                            <h4>Company</h4>
                            <ul>
                                {one_text}
                            </ul>
                        </div>

                        <div className='two_text'>
                            <h4>Account</h4>
                            <ul>
                                {two_text}
                            </ul>
                        </div>

                        <div className='two_text'>
                            <h4>Corporate</h4>
                            <ul>
                                {there_text}
                            </ul>
                        </div>

                        <div className='two_text'>
                            <h4>Popular</h4>
                            <ul>
                                {four_text}
                            </ul>
                        </div>
                        <div className='two_text'>
                            <h4>Install App</h4>
                            <p>From App Store or Google Play</p>
                            <div className='app_program'>
                                <img src={app} alt="" />
                                <img src={play} alt="" />
                            </div>

                            <p>Secured Payment Gateways</p>

                            <img src={payme} alt="" style={{ marginTop: 20 }} />
                        </div>
                    </div>
                    <div className='line'></div>

                    <div className='sub_footer'>
                        <p>© 2022, Nest - HTML Ecommerce Template
                            All rights reserved</p>

                            <div className='call'>
                               <FiPhoneCall/>
                             <div>
                             <b>1900 - 6666</b>
                               <p>Working 8:00 - 22:00</p>
                             </div>
                            </div>

                            <div className='call'>
                               <FiPhoneCall/>
                             <div>
                             <b>1900 - 8888</b>
                               <p>Working 8:00 - 22:00</p>
                             </div>
                            </div>


                            <div className='icon_wrapper'>
                               <div className='icon_container'>
                               <h5>Follow Us</h5>    
                                   <FaFacebook/>
                                   <FaInstagram/>
                                   <FaYoutube/>
                                   <FaTwitter/>
                                   <FaTelegram/>   
                               </div>
                               <div className='end_p_text'>
                                    <p>Up to 15% discount on your first subscribe</p>
                                   </div>
                            </div>
                            
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer