import React from 'react'
import { Link,  NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navbar = ({ isAuthenticated , logout }) => {  return (

    <nav>
    <Link to="/" className='title'>HealthWatch</Link>
    <img src= "https://images.app.goo.gl/DtF5UXsnH3eHbHhv6" alt='logo' className="logo" />

    <ul>
      <li><NavLink to="/About" spy={true} smooth={true} offset={50} duration={500} activeClassName="active-link">About</NavLink></li>
      <li><NavLink to="/Service" spy={true} smooth={true} offset={50} duration={500} activeClassName="active-link">Service</NavLink></li>
      <li><NavLink to="/Contact" spy={true} smooth={true} offset={50} duration={500} activeClassName="active-link">Contact</NavLink></li>
      {isAuthenticated ? (
        <>
          <li><NavLink to="/profile/:username" activeClassName="active-link">Profile</NavLink></li>
          <li><NavLink to="#" onClick={logout} activeClassName="active-link">Logout</NavLink></li>
        </>
      ) : (
        <>
          <li><NavLink to="/Login" activeClassName="active-link">SignIn</NavLink></li>
          <li><NavLink to="/Register" activeClassName="active-link">SignUp</NavLink></li>
        </>
      )}
    </ul>
  </nav>
  )
}


export default Navbar ;

