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

    
    try {
      const response = await axios.post('https://localhost:7042/api/Authentication/login', credentials);
  
      if (response.data.token && response.data.userId) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.userId);
        navigate('/Dashboard');
      } else {
        // If response doesn't contain token or userId, show error message
        toast.error('Username or password incorrect');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Invalid username or password');
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
          placeholder='Enter Email' 
          required
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