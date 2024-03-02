import React, { useEffect, useState } from 'react';
import './Details.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

/*const ProfileForm = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit form data to the server
    const formData = {
      name,
      gender,
      address,
      contact,
      description
    };

    console.log('Form submitted:', formData);

    // Add code here to send form data to the server
    // using Axios or fetch
  };*/
  const ProfileForm = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
  
    const navigate= useNavigate();
    const token= localStorage.getItem('token');
    const config={
      headers:{
        Authorization:`${token}`,
        //UserId: `${userId}`,
      }
    }

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            setError('User not authenticated.');
            return;
          }
    
          const userId = localStorage.getItem('userId');
    
          const response = await axios.post('https://localhost:7042/api/User/CreateOrUpdateUserProfile', {
            name,
            gender,
            address,
            contact,
            description,
            userId
          }, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
    
          console.log('Profile data sent successfully:', response.data);
          navigate('/Dashboard/profile');
          // Handle success response, e.g., show success message or redirect
        } catch (error) {
          console.error('Error sending profile data:', error);
          setError('An error occurred while sending profile data. Please try again later.');
        }
      };
    
  

  return (
    <div className="profile-form">

      <h2>User Profile Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contact:</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default ProfileForm;
