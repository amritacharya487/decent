import React from 'react'
import { Link,  NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navbar = ({ isAuthenticated }) => {  return (

    <nav>
    <Link to="/" className='title'>HealthWatch</Link>
    <ul>
      <li><NavLink to="/About" activeClassName="active-link">About</NavLink></li>
      <li><NavLink to="/Service" activeClassName="active-link">Service</NavLink></li>
      <li><NavLink to="/Contact" activeClassName="active-link">Contact</NavLink></li>
      {isAuthenticated ? (
        <li><NavLink to="#" activeClassName="active-link">Logout</NavLink></li>
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
