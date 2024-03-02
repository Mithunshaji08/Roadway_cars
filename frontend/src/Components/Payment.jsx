import React, { useState, useEffect } from 'react';
import './Payment.css'; // Import CSS file for styling
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making HTTP requests
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the default CSS for react-toastify

const Payment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState(''); // State for payment method
  const [carName, setCarName] = useState('');

  const { id } = useParams(); // Extract the ID parameter from the URL

  useEffect(() => {
    // Fetch name and email from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setName(storedUser.name);
      setEmail(storedUser.email);
    }

    // Fetch the amount from localStorage using the key 'selectedCarAmount'
    const carAmount = localStorage.getItem('selectedCarAmount');
    if (carAmount) {
      setPaymentAmount(carAmount);
    }

    // Fetch the car name from localStorage using the key 'selectedCarName'
    const storedCarName = localStorage.getItem('selectedCarName');
    if (storedCarName) {
      setCarName(storedCarName);
    }
  }, []); // Fetch amount and car name whenever the component mounts

  const handlePayment = async () => {
    try {
      // Send a POST request to the backend endpoint /upload-payment with payment details
      await axios.post('http://localhost:8055/upload-payment', {
        name,
        email,
        carName,
        paymentAmount,
        paymentMethod
      });
      // Reset the payment fields after processing
      setName('');
      setEmail('');
      setPaymentAmount('');
      setPaymentMethod('');
      toast.success('Payment successful!'); // Display a success toast message
    } catch (error) {
      console.error('Error making payment:', error);
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <div className="payment-container">
      <h2 className="payment-header">Make a Payment</h2>
      <div className="payment-input">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>
      <div className="payment-input">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div className="payment-input">
        <label htmlFor="carName">Car Name:</label>
        <input
          type="text"
          id="carName"
          value={carName}
          readOnly // Make the car name input read-only
        />
      </div>
      <div className="payment-input">
        <label htmlFor="paymentAmount">Amount:</label>
        <input
          type="text"
          id="paymentAmount"
          value={paymentAmount}
          onChange={(e) => setPaymentAmount(e.target.value)}
          placeholder="Enter amount"
          readOnly // Make the amount input read-only
        />
      </div>
      <div className="payment-input">
        <label htmlFor="paymentMethod">Payment Method:</label>
        <select
          id="paymentMethod"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="">Select Payment Method</option>
          <option value="online">Online</option>
          <option value="onShop"></option>
        </select>
      </div>
      <button className="payment-button" onClick={handlePayment}>Make Payment</button>
      <ToastContainer /> {/* Add ToastContainer here */}
    </div>
  );
};

export default Payment;
