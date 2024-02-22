import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCar } from 'react-icons/fa';
import './RentAcar.css';

const RentAcar = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8055/cars');
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching car data:', error);
        setError('Error fetching car data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    // Display loading animation or spinner while fetching data
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleRentNow = (carId) => {
    // Implement your logic for renting the car
    console.log(`Renting car with ID: ${carId}`);
  };

  return (
    <div className="car-list">
      {cars.map((car) => (
        <div key={car._id} className="car-card">
          <img src={car.carImage} alt={car.carName} />
          <div>
            <h3>{car.carName}</h3>
            <p>Model: {car.carModel}</p>
            <p>Amount: {car.carAmount}</p>
            <button onClick={() => handleRentNow(car._id)}>Rent Now <FaCar /></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RentAcar;
