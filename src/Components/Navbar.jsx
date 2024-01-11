import React, { useState } from 'react';
import './Navbar.css'; // You can create a separate CSS file for styling
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUser } from 'react-icons/fa'; // Import Font Awesome icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <img
          src="/RWdp.png" // Replace with the actual path to your logo image
          alt="Roadway cars logo"
          className="navbar__logo"
        />
        Roadway cars<br></br>
        <div className='tagline'>
        </div>
      </div>
      <div className={`navbar__links ${isOpen ? 'open' : ''}`}>
        <Link to={'/'}>
          <FaHome className="nav-icon" /> Home
        </Link>
        <Link to={'/login'}>
          <FaSignInAlt className="nav-icon" /> Log in
        </Link>
        <Link to={'/signin'}>
          <FaUser className="nav-icon" /> Sign in
        </Link>
      </div>
      <div className="navbar__menu-icon" onClick={toggleNavbar}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
