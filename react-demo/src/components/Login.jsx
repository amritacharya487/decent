import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('User'); // Default to 'User'

  const handleLogin = () => {
    // Perform authentication logic here
    // For simplicity, let's assume a successful login for any input
    onLogin({ username, userType });
  };

 return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
      <label htmlFor="userType">User Type:</label>
        <select
          id="userType"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="Professional">Professional</option>
          <option value="Managementr">Management </option>
        </select>

        <label htmlFor="email">User Name</label>
        <input
          type="email"
          id="email"
          value={username}
          placeholder=' Enter Username' required
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          placeholder='Enter Password' required
          onChange={(e) => setPassword(e.target.value)}
        />

       
        <button type="button" onClick={handleLogin}>Login</button>
        <div class="two-col">
                    <div class="one">
                        <label><a href="/">Forgot password?</a></label>
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