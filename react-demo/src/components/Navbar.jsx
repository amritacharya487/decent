import React, {useState, useEffect } from 'react'
import { Link,  NavLink, useNavigate } from 'react-router-dom';
import "./Navbar.css"





const Navbar = () => {


  const navigate= useNavigate();
  const removeAccount = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/Login");
  };
  const [isLoggedIn, setIsLoggedIn]= useState(false);
  useEffect(()=> {
    const userExist= localStorage.getItem("token")
    if (userExist)
    {
      setIsLoggedIn(true)
    }
  },[])
  return (

  <nav>
  {/*<Link to="/" className='title'>HealthWatch</Link>*/}
  
    
    {isLoggedIn ? 
     (
     <>
     <Link to="/Dashboard" className='title'>HealthWatch</Link>
     <ul>
     <li><NavLink to="/Dashboard">MyPatients</NavLink></li>
     <li><NavLink to="/Predict">Predict</NavLink></li>
     <li><NavLink to="/profile">Profile</NavLink></li>
     <li><NavLink to ="/"onClick={removeAccount}>LogOut</NavLink></li>
      </ul>
      </>
    ) : (
      <>
        <Link to="/" className='title'>HealthWatch</Link>
        <ul>
        {/*<li><NavLink to="/About" spy={true} smooth={true} offset={50} duration={500} activeClassName="active-link">About</NavLink></li>
        <li><NavLink to="/Service" spy={true} smooth={true} offset={50} duration={500} activeClassName="active-link">Service</NavLink></li>
    <li><NavLink to="/Contact" spy={true} smooth={true} offset={50} duration={500} activeClassName="active-link">Contact</NavLink></li>*/}
        <li><NavLink to="/Login" activeClassName="active-link">SignIn</NavLink></li>
        <li><NavLink to="/Register" activeClassName="active-link">SignUp</NavLink></li>
        </ul>
      </>
    )}
  
</nav>
  )
}


export default Navbar ;


