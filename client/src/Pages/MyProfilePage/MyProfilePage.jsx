import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get('/api/user/profile');
      setUserProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      <form>
        <label htmlFor="name">First Name:</label>
        <input type="text" id="name" value={userProfile.Fname || ''} readOnly />

        <label htmlFor="name">Last name:</label>
        <input type="text" id="name" value={userProfile.Lname || ''} readOnly />

        <label htmlFor="city">City:</label>
        <input type="text" id="city" value={userProfile.City || ''} readOnly />

        <label htmlFor="Mobile">Mobile Number:</label>
        <input type="text" id="Mobile" value={userProfile.MobNum || ''} readOnly />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={userProfile.email || ''} readOnly />

        <label htmlFor="password">Password:</label>
        <input type="text" id="password" value={userProfile.Pword || ''} readOnly />


        {/* Add more fields as needed */}

        <button type="submit">update</button>
      </form>
    </div>
  );
};

export default UserProfile;
