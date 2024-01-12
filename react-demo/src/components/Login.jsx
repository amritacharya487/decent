import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';




const Login = ()=> {
      const data ={ username:" ", password:" "};
      
      const [inputData , setInputData] =useState(data);
      const [error ,setError] = useState(null);

      
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

    
     
  

    
      
  //const [password, setPassword] = useState('');
  //const [userType, setUserType] = useState('User'); // Default to 'User'
  const handleLogin = async (e) => {
    e.preventDefault();

    // Perform login logic here
    try {
      const response = await axios.post('https://localhost:7042/api/Authentication/login', inputData);

      if (response.data) {
          console.log('Login successful');
          // Handle successful login (e.g., redirect to dashboard)
      }
      } catch (error) {
      console.error('Error during login', error);
      setError('Invalid username or password. Please try again.');
      }
    // Redirect to the home page after successful login
    
  };
  /* const handleLogin = () => {
    // Perform authentication logic here
    // For simplicity, let's assume a successful login for any input

    onLogin({ username });
  }; */
  
  
 return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
      

        <label htmlFor="email">User Name</label>
        <input
           name='username'
          type="email"
          id="email"
          value={inputData.username}
          placeholder=' Enter Username' required
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

       
        <button onClick={handleLogin}><Link to="/Dashboard" >Login</Link></button>
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
 );
};

export default Login;