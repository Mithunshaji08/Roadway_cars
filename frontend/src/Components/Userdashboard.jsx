import React, { useState } from 'react';
import { FaCar, FaUser, FaMoneyBillAlt } from 'react-icons/fa'; // Import icons from react-icons
import './Userdashboard.css'; // Import your CSS file for styling

const UserDashboard = () => {
  const [currentPage, setCurrentPage] = useState('Rent a Car');

  const renderPage = () => {
    switch (currentPage) {
      case 'Rent a Car':
        return <div><h2>Rent a Car Page</h2><p>This is the content for renting a car.</p></div>;
      case 'Profile':
        return <div><h2>Profile Page</h2><p>This is the content for the profile page.</p></div>;
      case 'Your Payments':
        return <div><h2>Your Payments Page</h2><p>This is the content for your payments page.</p></div>;
      default:
        return null;
    }
  };

  return (
    <div className="user-dashboard">
      <div className="usernavbar">
        <div className={`nav-item ${currentPage === 'Rent a Car' && 'active'}`} onClick={() => setCurrentPage('Rent a Car')}>
          <FaCar /> Rent a Car
        </div>
        <div className={`nav-item ${currentPage === 'Profile' && 'active'}`} onClick={() => setCurrentPage('Profile')}>
          <FaUser /> Profile
        </div>
        <div className={`nav-item ${currentPage === 'Your Payments' && 'active'}`} onClick={() => setCurrentPage('Your Payments')}>
          <FaMoneyBillAlt /> Your Payments
        </div>
      </div>

      <div className="main-content">
        {renderPage()}
      </div>
    </div>
  );
}

export default UserDashboard;
