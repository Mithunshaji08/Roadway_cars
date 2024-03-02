import React from 'react';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa'; // Importing icons from react-icons library

const AdminNavbar = () => {
  return (
    <nav style={navbarStyle}>
      <div style={containerStyle}>
        <div style={logoStyle}>Roadwaycars</div>
      </div>
      <div style={buttonContainer}>
        <button style={buttonStyle}><FaSignInAlt /> Login</button>
        <button style={buttonStyle}><FaUserPlus /> Create New Admin</button>
      </div>
    </nav>
  );
};

const navbarStyle = {
  backgroundColor: 'black',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between', // Align items to the ends
  alignItems: 'center',
  padding: '10px',
  height: '100px', // Setting a fixed height for the navbar
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column', // Stack items vertically
  alignItems: 'center',
  justifyContent: 'center', // Center items horizontally and vertically
  height: '100%', // Fill the entire height of the navbar
};

const logoStyle = {
  fontSize: '24px',
};

const subTextStyle = {
  fontSize: '18px',
};

const buttonContainer = {
  display: 'flex',
  alignItems: 'center', // Align items vertically
};

const buttonStyle = {
  backgroundColor: 'transparent', // Transparent background
  color: 'white', // White text color
  border: 'none',
  padding: '10px 20px',
  fontSize: '16px',
  marginLeft: '10px', // Add margin to separate buttons
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
};

export default AdminNavbar;
