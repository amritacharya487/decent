import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { login } from '../services/authservice';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';



const Login = ()=> {
  const data ={ username:"", password:""};

  const [inputData , setInputData] =useState(data);
  const [error, setError] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState(false);

  const navigate = useNavigate();

  
  
  /*const handleData = (e) => {
      setInputData({...inputData ,[e.target.name]:e.target.value})
  }*/

const handleData = (e) => {
  const { name, value } = e.target;
  setInputData((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
  }));
};

const handlesubmit = async (e) => {
  e.preventDefault();
 

  try {
      const response = await login(inputData);
      
      console.log('Login successful:', response);
      setAuthenticated(true);
      navigate("/Dashboard")

     
           // Handle successful login (e.g., redirect to dashboard)
      
  } catch (error) {
      console.error('Error during login', error);
      setError('Invalid username or password. Please try again.');
  }

};


  
  
 return (
  <div className='row'>
 {/*<Navbar isAuthenticated={isAuthenticated} />*/}
    <div className="login-container">
   

      <h1>Login</h1>
      <form>
        <label htmlFor="email">User Name</label>
        <input
          name='username'
          type="email"
          id="email"
          value={inputData.username}
          placeholder='Enter Username' required
          onChange={handleData}
        />

        <label htmlFor="password">Password:</label>
        <input
           name='password'
          type="password"
          id="password"
          value={inputData.password} 
          placeholder='Enter Password' required
          onChange={handleData}
        />

       
        <button onClick={handlesubmit}>Login</button>
        <div class="two-col">
                    <div class="one">
                        <label><a href="*">Forgot password?</a></label>
                    </div>
                </div>
                <div class="top">  
                Don't have an account? <Link to='/Register'  className='ac' >Register</Link> 
                </div>
      </form>
    </div>
    </div>
 );
};

export default Login;