import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LentAcar.css';
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the default CSS for react-toastify

const LentACar = () => {
  const [carDetails, setCarDetails] = useState({
    carName: '',
    carModel: '',
    carAmount: '',
    carImage: '',
    isLink: false,
    lenderName: '' // Add lenderName field to store the lender's name
  });
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch lender information from local storage
    const storedLender = localStorage.getItem('lender');
    if (storedLender) {
      const parsedLender = JSON.parse(storedLender);
      setCarDetails({
        ...carDetails,
        lenderName: parsedLender.name,
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setCarDetails({
      ...carDetails,
      [name]: newValue,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8055/lent-a-car', carDetails);
      console.log('Car Details Submitted:', response.data);
      toast.success('Car lended successfully!');
      setError('');
    } catch (error) {
      console.error('Error submitting car details:', error);
      setError('Failed to submit car details. Please try again later.');
    }
  };

  return (
    <div className="rentcard-container">
      <div className="rentcard">
        <div className="rentcard-header">Car Details</div>
        <div className="rentcard-body">
          <form>
            <div className="form-group">
              <label htmlFor="lenderName">Lender Name:</label>
              <input
                type="text"
                id="lenderName"
                name="lenderName"
                className="form-control"
                value={carDetails.lenderName}
                readOnly // Make the field read-only
              />
            </div>
            <div className="form-group">
              <label htmlFor="carName">Name of the Car:</label>
              <input
                type="text"
                id="carName"
                name="carName"
                className="form-control"
                value={carDetails.carName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="carModel">Model:</label>
              <input
                type="text"
                id="carModel"
                name="carModel"
                className="form-control"
                value={carDetails.carModel}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="carAmount">Amount:</label>
              <input
                type="text"
                id="carAmount"
                name="carAmount"
                className="form-control"
                value={carDetails.carAmount}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="carImage">Image Link:</label>
              <input
                type="text"
                id="carImage"
                name="carImage"
                className="form-control"
                value={carDetails.carImage}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="isLink">Is Image a Link:</label>
              <input
                type="checkbox"
                id="isLink"
                name="isLink"
                checked={carDetails.isLink}
                onChange={handleInputChange}
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="button" className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer /> {/* Add ToastContainer here */}
    </div>
  );
};

export default LentACar;

