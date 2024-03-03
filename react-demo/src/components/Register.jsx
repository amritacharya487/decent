import React, { useState } from 'react';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import signup from '../services/authservice';
import { toast } from 'react-toastify';

    const RegisterForm = () => {

      

      const [user, setUser] = useState({
          email: '',
          password: '',
          confirmPassword: '',
          role:'Professionals',
          
          
      });
      const navigate= useNavigate();

      const [errors, setErrors] = useState({
        
        email: '',
        password: '',
        confirmPassword: '',
        role:''
        
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUser((prevUser) => ({
          ...prevUser,
          [name]: value,
      }));
  };
  
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Basic validation
   

    if (!user.email.trim()) {
        newErrors.email = 'Email is required';
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(user.email)) {
        newErrors.email = 'Invalid email address';
        isValid = false;
    } else {
        newErrors.email = '';
    }

    if (!user.password.trim()) {
        newErrors.password = 'Password is required';
        isValid = false;
    } else {
        newErrors.password = '';
    }

    if (user.password !== user.confirmPassword) {
        toast.error ('Passwords do not match');
        isValid = false;
    } else {
        newErrors.confirmPassword = '';
    }

    setErrors(newErrors);
    return isValid;
};

const handleSignup = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
      return;
  }

  try {
    const response = await signup(user);
    console.log('Signup successful:', response);
    toast.success("Check Your Email For Confirmation Link");
    navigate('/login');
    // Handle success (e.g., redirect to login page)
  } catch (error) {
    console.error('Signup failed:', error);
  }
};

 return (
  <div className='row'>
    <div className="form-container">
      <h1>Register</h1>
      
      <form onSubmit={handleSignup} >
      <div className='box'>
      <label htmlFor="email">Email</label>
        <input
          type="email"
          name='email'
          id="email"
          value={user.email}
          placeholder='Enter Email'
          required
          onChange={handleInputChange}
          
        />

        <label htmlFor="password">Password</label>
        <input
        name='password'
          type="password"
          id="password"
          value={user.password}
          placeholder='Enter Password' 
          required
          onChange={handleInputChange}
        />
      
        <label htmlFor="Confirm Password"> Confirm Password</label>
          
          <input
          name='confirmPassword'
            type="password"
            value={user.confirmPassword}
            placeholder='Confirm Password' 
            required
            onChange={handleInputChange}
          />

                
      
         
        <button type="button" onClick={handleSignup}>
          Register
        </button>
        <div class="top">  
                Already Register <Link to='/'  className='ac' >Login</Link> 
                </div>
                </div>
      </form>
    </div>
    </div>
 );
};

export default RegisterForm;