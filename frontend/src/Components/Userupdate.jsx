import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import './Userupdate.css'; // Import CSS file for component styling

const UserUpdate = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));

  const [formData, setFormData] = useState({
    name: storedUser ? storedUser.name : '',
    email: storedUser ? storedUser.email : '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a PUT request to update user data
      const response = await axios.put(`http://localhost:8055/update-user/${storedUser._id}`, formData);
      console.log('Update successful:', response.data);

      // Update local storage with the updated user data
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="update-container">
      <div className="update-card">
        <h2>Update Profile</h2>
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
              className="input-field"
            />
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
              className="input-field"
            />
          </div>
          <button type="submit" className="update-button">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UserUpdate;
