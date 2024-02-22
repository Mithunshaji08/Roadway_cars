import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import './LendorProfile.css';

const LendorProfile = () => {
  const [lender, setLender] = useState(null);

  useEffect(() => {
    // Fetch lender information from local storage
    const storedLender = localStorage.getItem('lender');
    if (storedLender) {
      const parsedLender = JSON.parse(storedLender);
      setLender(parsedLender);
    }
  }, []);

  const handleLogout = () => {
    // Clear lender data from local storage
    localStorage.removeItem('lender');
    // Redirect to the login page or any other desired page
    window.location.href = '/login'; // Replace '/login' with the desired path
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <FaUser className="user-icon" />
          <h2>Your Profile</h2>
        </div>
        {lender ? (
          <div>
            <p>Name: {lender.name}</p>
            <p>Email: {lender.email}</p>
            {/* Display other lender information */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
        {/* Logout button */}
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default LendorProfile;
