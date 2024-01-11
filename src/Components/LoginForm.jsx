import { colors } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'user', // Default role
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your login logic goes here
    console.log('Logging in with:', formData);
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          src="login image.png" // Replace with your background image URL
          alt="Background"
          style={styles.image}
        />
      </div>
      <div style={styles.formContainer}>
        <div style={styles.overlay}></div>
        <div style={styles.card}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input} // Apply the same style as other inputs
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={styles.input} // Apply the same style as other inputs
            />

            <label htmlFor="role">Role:</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              style={styles.input} // Apply the same style as other inputs
            >
              <option value="user">User</option>
              <option value="lender">Lender</option>
            </select>

            <button type="submit" style={styles.button}>Login</button><br/>
            <a>
        <Link to={'/signin'}>Don't have a account?</Link>
        </a>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  imageContainer: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  formContainer: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center', // Center the form
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'black', // Solid black color with opacity
  },
  card: {
    width: '100%', // Make the form take full width
    maxWidth: '360px', // Set a maximum width
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '8px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    marginTop: '10px',
    boxSizing: 'border-box',
    backgroundColor: 'black', // Add your preferred button background color
    color: 'white', // Add your preferred button text color
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default LoginForm;
