import { useState } from "react";
import React  from 'react';
import { Link } from "react-scroll";
import logo from '../img/logo.png';


function Navbar() {
    const [nav] = useState(false);
    
  return (
    <>
    <nav className = { nav ? "nav active" : "nav"} >
       <Link to = 'header' className = "logo" smooth={true} duration={2000}>
             <img src = {logo} alt = 'logo' />
       </Link>
      <input className ='menu-btn' type='checkbox' id='menu-btn' />
      <label className = 'menu-icon' >       
       <span className ='nav-icon'></span>  </label>

                <ul className='menu mb-0'>
                <li><Link to ='home' smooth={true} duration={100}>Home</Link> </li>
                <li><Link to ='about' smooth={true} duration={100}>About</Link> </li>
                <li><Link to ='skills' smooth={true} duration={100}>Skills</Link> </li>
                <li><Link to ='annexure' smooth={true} duration={100}>Annexure</Link> </li>
               
                {/* <li><Link to ='portfolio' smooth={true} duration={1000}>Portfolio</Link> </li> */}
                <li><Link to ='testimonials' smooth={true} duration={100}>Testimonials</Link> </li>
                <li><Link to ='contact' smooth={true} duration={100}>Contact</Link> </li>
                </ul>
    </nav>
   </>
  )
}

export default Navbar