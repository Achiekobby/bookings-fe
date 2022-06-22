import React from 'react'
import  "../../Styles/Css/Navbar.css"
import { TbBrandBooking } from "react-icons/tb"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <div className="logo_item">
                <span className="logo_icon"><TbBrandBooking/></span><span className="logo">kwaBooking</span>
            </div>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar