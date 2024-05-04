import React from 'react'
import './Header.css'
import { GiCubeforce } from "react-icons/gi";
import { FaHotjar } from "react-icons/fa";
import { select__data } from '../Data/Data';
import { MdHeadsetMic } from "react-icons/md";

const Header = () => {

     let data = select__data?.map((el,i)=>(
            <li key={i}>{el}</li>
     ))

    return (
        <>
            <div className='container'>
                <div className='sub_header'>
                    <div className='seelect__div'>
                        <GiCubeforce />
                        <p>Browse</p>
                        <select>
                            <option value="All">All Categories</option>
                        </select>
                    </div>
                    <div className='select__wrapper_container'>
                        <FaHotjar />
                        <p>Deals</p>
                    </div>
                    <div className='ul_wrapper'>
                        <ul>
                            {data}
                        </ul>
                    </div>
                    <div className='aloqa__container' >
                    <MdHeadsetMic />
                    <div>
                        <h4>1900 - 888</h4>
                        <p>24/7 Support Center</p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header