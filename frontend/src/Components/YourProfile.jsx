import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa'; // Import user icons
import './YourProfile.css';

const YourProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem('user');
    // Redirect to the login page or any other desired page
    // You need to define the path to your login page or any other desired page
    window.location.href = '/login'; // Replace '/login' with the desired path
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <FaUser className="user-icon" /> {/* User icon */}
          <h2>Your Profile</h2>
        </div>
        {user ? (
          <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            {/* Display other user information */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
        {/* Logout button */}
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default YourProfile;
