import React from 'react';

const Carlendordelete = ({ car }) => {
  return (
    <div>
      <h2>Car Details</h2>
      <p>Car Name: {car.carName}</p>
      <p>Car Model: {car.carModel}</p>
      <p>Car Amount: {car.carAmount}</p>
    </div>
  );
};

export default Carlendordelete;
