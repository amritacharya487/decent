import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './profile.css';

const UserProfile = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');
  const [userId, setuserId]= useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch user profile data from the backend
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`https://localhost:7042/api/User/GetLoggedInProfessionalDetails`, {
          headers: {
            Authorization: `Bearer ${token}`, // Assuming you are using JWT and passing the token in the Authorization header
          },
        });
        const userData = response.data;
        setName(userData.name);
        setGender(userData.gender);
        setAddress(userData.address);
        setContact(userData.contact);
        setDescription(userData.description);
        setuserId(userData.userId);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setError('An error occurred while fetching profile data. Please try again later.');
      }
    };

    fetchProfileData();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className="container">
      <h2>User Profile</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Gender:
          <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
        </label>
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <label>
          Contact:
          <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        {error && <p className="error">{error}</p>}
        {/*<button type="submit">Update Profile</button>*/}
        <Link to='/Dashboard/update'  className='ac' >Update Profile</Link> 
      </form>
    </div>
  );
};

export default UserProfile;
