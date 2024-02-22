import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'user', // Default role
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear validation error when the user starts typing
    if (e.target.name in errors) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      setErrors({
        ...errors,
        email: 'Please enter a valid email address',
      });
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (!formData.password || formData.password.length < 6) {
      setErrors({
        ...errors,
        password: 'Password must be at least 6 characters',
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate each field before submitting
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
  
    if (isEmailValid && isPasswordValid) {
      try {
        const response = await axios.post("http://localhost:8055/login", formData);
        console.log(response.data); // Handle successful login
  
        // Extract user data from response
        const userData = response.data.user;
  
        // Store user data in local storage
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('userId', userData.id); // Store user ID separately

  
        // Show success message using toast
        if (formData.role === 'user') {
          toast.success('Login successful!', { position: 'top-center' });
          // Redirect to user-dashboard with user ID
          navigate(`/user-dashboard/${userData.id}`);
        } else if (formData.role === 'lender') {
        localStorage.setItem('lender', JSON.stringify(userData));
        localStorage.setItem('lenderId', userData.id); // Store lender ID separatel

          toast.success('Login successful!', { position: 'top-center' });
          navigate('/lendor-dashboard/'); // Pass lender ID to URL
         
        }
  
        // You may want to redirect the user or perform other actions upon successful login
      } catch (error) {
        console.error('Error in login:', error.response ? error.response.data : error.message);
  
        // Show error message using toast
        toast.error('Login failed. Please check your credentials.', { position: 'top-center' });
  
        // Handle login error, show an error message to the user
      }
    }
  };
  

  return (
    <div>
      <ToastContainer />
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
              <div style={styles.formGroup}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
                {errors.email && <span style={styles.error}>{errors.email}</span>}
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
                {errors.password && <span style={styles.error}>{errors.password}</span>}
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="role">Role:</label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="user">User</option>
                  <option value="lender">Lender</option>
                </select>
              </div>
              <button type="submit" style={styles.button}>Login</button>
              <br />
              <a>
                <Link to={'/signup'}>Don't have an account?</Link>
              </a>
            </form>
          </div>
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
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    backgroundColor: 'black', // Add your preferred button background color
    color: 'white', // Add your preferred button text color
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '14px',
  },
};

export default LoginForm;
