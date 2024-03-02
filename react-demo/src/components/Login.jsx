import React, { useState,useEffect } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { login } from '../services/authservice';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import axios from 'axios';

const Login = ()=> {

  const navigate= useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  

  const handleData = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };


  const handleLogin = async (e) => {
    e.preventDefault();

    
      // Make a POST request to the server to authenticate the user
      const response = await axios.post('https://localhost:7042/api/Authentication/login', credentials);  

      console.log('login success',response);
      // Check if the response contains a token
    if (response.data.token && response.data.userId) {
      // Store the token and userId in local storage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.userId);

      // Redirect to the Dashboard
      navigate('/Dashboard');


  }
};
      

  
 return (
  <div className='row'>
    
    <div className="login-container">
    

      <h1>Login</h1>
      <form>
        <div className='box'>
        <label htmlFor="email">User Name </label>
        <input
          name='username'
          type="email"
          id="email"
          value={credentials.username}
          placeholder='Enter Email' required
          onChange={handleData}
        />

        <label htmlFor="password">Password:</label>
        <input
           name='password'
          type="password"
          id="password"
          value={credentials.password} 
          placeholder='Enter Password' required
          onChange={handleData}
        />
        </div>
       
        <button onClick={handleLogin}>Login</button>
        
        <div class="two-col">

                
                <div class="top">  
                Don't have an account? <Link to='/Register'  className='ac' >Register Now</Link> 
                </div>
                </div>

      </form>
    </div>
    </div>
 );
};

export default Login;