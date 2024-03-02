import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCar } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
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

  const handleRentNow = (carId, carAmount, carName) => {
    // Store the car ID, car amount, and car name in local storage
    localStorage.setItem('selectedCarId', carId);
    localStorage.setItem('selectedCarAmount', carAmount);
    localStorage.setItem('selectedCarName', carName);
    console.log('Car ID, amount, and name stored in local storage:', carId, carAmount, carName);
  };

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

  return (
    <div className="car-list">
      {cars.map((car) => (
        <div key={car._id} className="car-card">
          <img src={car.carImage} alt={car.carName} />
          <div>
            <h3>{car.carName}</h3>
            <p>Model: {car.carModel}</p>
            <p>Amount: {car.carAmount}  per day</p>
            {/* Change button to call handleRentNow */}
            <Link to={`/user-dashboard/payment/${car._id}`}>
              <button onClick={() => handleRentNow(car._id, car.carAmount, car.carName)}>Rent Now <FaCar /></button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RentAcar;
