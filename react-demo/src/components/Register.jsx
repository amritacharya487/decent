import React, { useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';

const RegisterForm = () => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setconfirmPassword] = useState('');
 const [userType, setUserType] = useState('User');

 /*const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }*/


     /* try {
      await ({ username, password, userType });
      alert('Registration successful');
      setUsername('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      alert('Error registering user: ' + error.message);
    } */
 
 
    

 return (
  
    <div className='form-container'>
      <h2>Register</h2>
      <form  >
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
      
        <label htmlFor="Confirm Password"> Confirm Password :</label>
          
          <input
            type="password"
            value={confirmPassword}
            placeholder='Confirm Password' required
            onChange={(e) => setconfirmPassword(e.target.value)}
          />
      
      
        <label>
          User Type:
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="Professionals">Professionals</option>
            <option value="Management">Management</option>
          </select>
        </label>
        
        <button type="button" 
        >
          Register
        </button>
        <div class="top">  
                Already Register <Link to='/'  className='ac' >Login</Link> 
                </div>
      </form>
    </div>
 );
 };

export default RegisterForm;