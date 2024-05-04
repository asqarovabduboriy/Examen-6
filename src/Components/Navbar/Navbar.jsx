import React from 'react'
import './Navbar.css'
import { IoMenu, IoSearch } from "react-icons/io5"
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import logo from '../../assets/Imgs/Logo1.png'  

const Navbar = () => {
  return (
   <>
     <header className='navbar__wrapper'>
            <div className='container'>
                <nav className="navbar">
                    <NavLink to={'/'} className="navbar__logo">
                        <img src={logo} alt="" />
                    </NavLink>
                    <button className="navbar__category-btn">
                        <IoMenu />
                        <span>Katalog</span>
                    </button>
                    <div className="navbar__search">
                        <input type="text" placeholder='Search...' />
                        <button><IoSearch /></button>
                    </div>
                    <div className="navbar__collection">
                        <NavLink to={'/'} className="navbar__item">
                            <IoHome />
                            <span>Home</span>
                        </NavLink>
                        <NavLink to={'admin'} className="navbar__item">
                            <FaRegUser />
                            <span>Account</span>
                        </NavLink>
                        <div className="navbar__item">
                            <FaRegHeart />
                            <span>Wishlist</span>
                        </div>
                        <div className="navbar__item">
                            <FiShoppingCart />
                            <span>Cart</span>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    
   </>
  )
}

export default Navbar