import React, { useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import signup from '../services/authservice';



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
 

    const RegisterForm = () => {
      const [user, setUser] = useState({
          email: '',
          password: '',
          confirmPassword: '',
          role:'',
          
          
      });
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
        newErrors.confirmPassword = 'Passwords do not match';
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

    // Handle success (e.g., redirect to login page)
  } catch (error) {
    console.error('Signup failed:', error);
  }
};



     
       
 
    

 return (
  
    <div className='form-container'>
      <h2>Register</h2>
      <form onSubmit={handleSignup} >
      <label htmlFor="email">Email</label>
        <input
          type="email"
          name='email'
          id="email"
          value={user.email}
          placeholder=' Enter Username' required
          onChange={handleInputChange}
          
        />

        <label htmlFor="password">Password:</label>
        <input
        name='password'
          type="password"
          id="password"
          value={user.password}
          placeholder='Enter Password' required
          onChange={handleInputChange}
        />
      
        <label htmlFor="Confirm Password"> Confirm Password :</label>
          
          <input
          name='confirmPassword'
            type="password"
            value={user.confirmPassword}
            placeholder='Confirm Password' required
            onChange={handleInputChange}
          />
      
      
        <label>
          User Type:
          <select
            
            onChange={handleInputChange}
          >
            <option value={user.role}>Professionals</option>
            <option value={user.role}>Management</option>
          </select>
        </label>
        
        <button type="button" onClick={handleSignup}>
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