import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AdminLogin.css';
import { Navigate, useNavigate } from 'react-router-dom'; // Import useNavigate

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();


  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      // Send login credentials to the backend
      const response = await axios.post('http://localhost:8055/admin-login', formData);

      // If login is successful, show success toast message
      toast.success(response.data.message);
      navigate('/admin-dashboard/'); 

      // Clear the form data
      setFormData({ email: '', password: '' });

      // Navigate to admin dashboard
      return <Navigate to="/admin-dashboard" />;
    } catch (error) {
      console.error('Error:', error);
      // If there's an error, show error toast message
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="cardl">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              required 
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <div className="form-group">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminLogin;
