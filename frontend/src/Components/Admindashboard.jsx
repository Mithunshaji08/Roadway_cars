import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { FaHome, FaUsers, FaMoneyBillAlt, FaCar } from 'react-icons/fa';
import './Admindashboard.css';
import Adminpanel from './Adminpanel';
import Adminmangeusers from './Adminmangeusers';
import Adminmanagepayments from './Adminmanagepayments';
import Adminmanagelends from './Adminmanagelends';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <nav className="side-nav">
        <ul>
          <li>
            <Link to="/admin-dashboard/home" className="nav-link">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/admin-dashboard/manage-users" className="nav-link">
              <FaUsers /> Manage Users
            </Link>
          </li>
          <li>
            <Link to="/admin-dashboard/manage-payments" className="nav-link">
              <FaMoneyBillAlt /> Manage Payments
            </Link>
          </li>
          <li>
            <Link to="/admin-dashboard/manage-lends" className="nav-link">
              <FaCar /> Manage Lends
            </Link>
          </li>
        </ul>
      </nav>
      <div className="main-content">
        <Routes>
          <Route path="home" element={<Adminpanel />} />
          <Route path="manage-users" element={<Adminmangeusers />} />
          <Route path="manage-payments" element={<Adminmanagepayments />} />
          <Route path="manage-lends" element={<Adminmanagelends />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminDashboard;
