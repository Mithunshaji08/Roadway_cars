import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LenderInfo.css'; // Import CSS file for styling

const fetchLentCars = async (lenderName, setLentCars) => {
  try {
    const response = await axios.get(`http://localhost:8055/cars-by-lender/${lenderName}`);
    setLentCars(response.data);
  } catch (error) {
    console.error('Error fetching lent cars:', error);
  }
};

const LenderInfo = () => {
  const [lentCars, setLentCars] = useState([]);
  const storedLender = localStorage.getItem('lender');
  const [lenderName, setLenderName] = useState('');

  useEffect(() => {
    if (storedLender) {
      const parsedLender = JSON.parse(storedLender);
      setLenderName(parsedLender.name);
    }
  }, [storedLender]);

  useEffect(() => {
    if (lenderName) {
      fetchLentCars(lenderName, setLentCars);
    }
  }, [lenderName]);

  const handleDeleteCar = async () => {
    try {
      await axios.delete(`http://localhost:8055/delete-car-by-lender/${lenderName}`);
      // After successful deletion, fetch the updated list of lent cars
      fetchLentCars(lenderName, setLentCars);
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  return (
    <div className="lender-info">
      <h2>Your Lend</h2>
      <table className="lent-car-table">
        <thead>
          <tr>
            <th>Car Name</th>
            <th>Car Model</th>
            <th>Car Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {lentCars.map((car) => (
            <tr key={car._id}>
              <td>{car.carName}</td>
              <td>{car.carModel}</td>
              <td>{car.carAmount}</td>
              <td>
                <button className="delete-button" onClick={handleDeleteCar}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LenderInfo;
