import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminManageLends = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:8055/cars');
        setCars(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching car data:', error);
        setError('Error fetching car data. Please try again later.');
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Car Lending Management</h1>
      <table>
        <thead>
          <tr>
            <th>Car Name</th>
            <th>Amount</th>
            <th>Lender Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car._id}>
              <td>{car.carName}</td>
              <td>{car.carAmount}</td>
              <td>{car.lenderName}</td>
              <td><input type="checkbox" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminManageLends;
