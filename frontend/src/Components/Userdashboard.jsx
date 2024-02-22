import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { FaCar, FaUser, FaInfoCircle, FaEdit } from 'react-icons/fa'; // Import FaEdit
import './CarLendorDashboard.css';

import RentAcar from './RentAcar';
import YourProfile from './YourProfile';
import UserInfo from './UserInfo';
import Userupdate from './Userupdate'; // Import the UpdateProfile component

const CarLendorDashboard = () => {
  const storedUser = localStorage.getItem('user');
  const userId = storedUser ? JSON.parse(storedUser)._id : null;
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
            <Link to={`/user-dashboard/profile/${userId}`} className="nav-link">
              <FaUser /> Profile
            </Link>
          </li>
          <li>
            <Link to={`/user-dashboard/info/${userId}`} className="nav-link">
              <FaInfoCircle /> Info
            </Link>
          </li>
          <li>
            <Link to={`/user-dashboard/update-profile/${userId}`} className="nav-link"> {/* New link for updating profile */}
              <FaEdit /> Update Profile {/* Replaced FaUserEdit with FaEdit */}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="main-content">
        <Routes>
          <Route path="/rend-a-car/:userId" element={<RentAcar />} />
          <Route path="/profile/:userId" element={<YourProfile />} />
          <Route path="/info/:userId" element={<UserInfo />} />
          <Route path="/update-profile/:userId" element={<Userupdate />} /> {/* Route for updating profile */}
        </Routes>
      </div>
    </div>
  );
}

export default CarLendorDashboard;
