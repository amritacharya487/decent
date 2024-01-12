import React from 'react'
import { Link,  NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
        <Link to="/" className='Title'>HealthWatch</Link>
       
        <ul>
            <li><NavLink to="/About" >About</NavLink></li>
            <li><NavLink to="/Service">Service</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar ;
