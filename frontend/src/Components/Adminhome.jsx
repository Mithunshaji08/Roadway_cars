import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './Adminhome.css'; // Import external CSS file

const AdminHome = () => {
  return (
    <div className="background">
      <h2 className='header'>Welcome to admin Panel</h2>
      <img src="roadway cars.png" alt="background" className="background-image" />
      <div className="content">
        {/* Link for Login button */}
        <Link to="/admin-login" className="link">
          <button className="button">Login</button>
        </Link>
        {/* Link for Create New Admin button */}
        <Link to="/admin-register" className="link">
          <button className="button">Create New Admin</button>
        </Link>
      </div>
    </div>
  );
};

export default AdminHome;
