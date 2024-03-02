import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { FaCar, FaUser, FaInfoCircle, FaEdit } from 'react-icons/fa';
import './CarLendorDashboard.css';

import RentAcar from './RentAcar';
import YourProfile from './YourProfile';
import UserInfo from './UserInfo';
import Userupdate from './Userupdate';
import Payment from './Payment'; // Import the Payment component

const CarLendorDashboard = () => {
  const storedUser = localStorage.getItem('user');
  const userId = storedUser ? JSON.parse(storedUser)._id : null;
  const userEmail = storedUser ? JSON.parse(storedUser).email : null; // Get user email

  return (
    <div className="car-lendor-dashboard">
      <nav className="side-nav">
        <ul>
          <li>
            <Link to={`/user-dashboard/rend-a-car/${userId}`} className="nav-link">
              <FaCar /> Rent a Car
            </Link>
          </li>
          <li>
            <Link to={`/user-dashboard/profile/${userEmail}`} className="nav-link">
              <FaUser /> Profile
            </Link>
          </li>
          <li>
            <Link to={`/user-dashboard/info/${userEmail}`} className="nav-link">
              <FaInfoCircle /> Info
            </Link>
          </li>
          <li>
            <Link to={`/user-dashboard/update-profile/${userId}`} className="nav-link">
              <FaEdit /> Update Profile
            </Link>
          </li>
        </ul>
      </nav>
      <div className="main-content">
        <Routes>
          <Route path="/rend-a-car/:userEmail" element={<RentAcar />} />
          <Route path="/profile/:userEmail" element={<YourProfile />} />
          <Route path="/info/:email" element={<UserInfo />} />
          <Route path="/update-profile/:userEmail" element={<Userupdate />} />
          <Route path="/payment/:carId" element={<Payment />} /> 
        </Routes>
      </div>
    </div>
  );
}

export default CarLendorDashboard;
