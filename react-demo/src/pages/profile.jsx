// UserProfile.js

import React, { useState, useEffect } from 'react';

import { logout } from '../services/authaction';  // Import your logout action
import axios from 'axios';

const UserProfile = ({ userId, user, logout }) => {
  const [updatedUser, setUpdatedUser] = useState({ ...user });

  useEffect(() => {
    // Fetch user data from the backend using userId
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/api/users/${userId}`);
        setUpdatedUser(response.data);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send updated user data to the backend
      await axios.put(`/api/users/${user.id}`, updatedUser);
      // Optionally, you can fetch updated user data again
      // to ensure consistency with the backend
    } catch (error) {
      console.error('Error updating user profile', error);
    }
  };

  const handleLogout = () => {
    // Dispatch the logout action
    logout();
    // Optionally, you can redirect the user to the login page
    // history.push('/login');
  };

  return (
    <div>
      {user ? (
        <>
          <h2>{user.name}'s Profile</h2>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
          {/* Additional user profile information */}
          {/* Render a form to update user profile */}
          <form onSubmit={handleSubmit}>
            <h3>Edit Profile</h3>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={updatedUser.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={updatedUser.email}
                onChange={handleInputChange}
              />
            </label>
            {/* Add more fields as needed */}
            <button type="submit">Update Profile</button>
          </form>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default (mapStateToProps, mapDispatchToProps)(UserProfile);
