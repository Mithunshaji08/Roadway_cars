import React, { useEffect, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { FaCar, FaUser, FaInfoCircle } from 'react-icons/fa';
import './CarLendorDashboard.css';

import LentACar from './LentACar';
import LendorProfile from './LendorProfile';
import LenderInfo from './LenderInfo';

const CarLendorDashboard = () => {
  const [lender, setLender] = useState(null);
  const [lenderId, setLenderId] = useState(null);
  const [lenderName, setLenderName] = useState('');

  useEffect(() => {
    // Fetch lender information from local storage
    const storedLender = localStorage.getItem('lender');
    if (storedLender) {
      const parsedLender = JSON.parse(storedLender);
      setLender(parsedLender);
      setLenderId(parsedLender._id); // Extract and set lender ID 
      setLenderName(parsedLender.name); // Set lender's name
    }
  }, []);

  return (
    <div className="car-lendor-dashboard">
      <nav className="side-nav">
        <ul>
          <li>
            <Link to={`/lendor-dashboard/lend-a-car/${lenderId}`} className="nav-link">
              <FaCar /> Lend a car
            </Link>
          </li>
          <li>
            <Link to={`/lendor-dashboard/lender-profile/${lenderId}`} className="nav-link">
              <FaUser /> Profile
            </Link>
          </li>
          <li>
            <Link to={`/lendor-dashboard/lender-info/${lenderName}`} className="nav-link">
              <FaInfoCircle /> Info
            </Link>
          </li>
    
        </ul>
      </nav>
      <div className="main-content">
        <h2 className='lendor-name'>{lender ? `Hi, ${lender.name}!` : 'Hi Lendor!'}</h2>
        {/* Use Routes to define nested routes */}
        <Routes>
          <Route path="lend-a-car/:lenderId" element={<LentACar />} />
          <Route path="lender-profile/:lenderId" element={<LendorProfile />} />
          <Route path="lender-info/:lendername" element={<LenderInfo />} />
        </Routes>
      </div>
    </div>
  );
}

export default CarLendorDashboard;
