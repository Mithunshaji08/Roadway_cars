import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Adminpanel.css'; // Import CSS file for styling

const Adminpanel = () => {
  // State to store total counts
  const [counts, setCounts] = useState({
    totalUsers: 0,
    totalLenders: 0,
    totalLends:0
  });

  // Function to fetch total counts from the backend
  const fetchTotalCounts = async () => {
    try {
      const response = await axios.get('http://localhost:8055/total-counts');
      setCounts(response.data);
    } catch (error) {
      console.error('Error fetching total counts:', error);
    }
  };

  // Fetch total counts when component mounts
  useEffect(() => {
    fetchTotalCounts();
  }, []);

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <div className="stats-container">
        <div className="stat-box">
          <h2>Total Users</h2>
          <p>{counts.totalUsers}</p>
        </div>
        <div className="stat-box">
          <h2>Total Lenders</h2>
          <p>{counts.totalLenders}</p>
        </div>
        <div className="stat-box">
          <h2>Total Cars Rented</h2>
          <p>{counts.totalLends}</p>
        </div>
      </div>
    </div>
  );
}

export default Adminpanel;
