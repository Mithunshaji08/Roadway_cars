import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { toast, ToastContainer } from 'react-toastify'; // Import react-toastify
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'react-toastify/dist/ReactToastify.css'; // Import react-toastify styles
import './Adminregister.css';

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // useNavigate hook

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate form fields
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Invalid email address';
    } else if (!formData.email.trim().endsWith('@rodways.com')) {
      validationErrors.email = 'not allowed';
    }
    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters long';
    }
  
    // If there are validation errors, set them and prevent form submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    try {
      // Send form data to the backend using Axios
      const response = await axios.post('http://localhost:8055/admin-register', formData);
  
      // If the request is successful, reset the form
      setFormData({ name: '', email: '', password: '' });
  
      // Log the response data
      console.log(response.data);
  
      // Show success toast message
      toast.success(response.data.message);
  
      // Navigate to admin login page
      navigate('/admin-login');
    } catch (error) {
      // If an error occurs, log the error and show error toast message
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="cardd">
        <h2>Register Admin</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
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
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
      <ToastContainer /> {/* Add ToastContainer component */}
    </div>
  );
};

export default AdminRegister;
