import React, { useState } from 'react';
import './Payment.css'; // Import CSS file for styling

const Payment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePayment = () => {
    // Perform payment processing logic here
    console.log(`Payment of ${paymentAmount} made via ${paymentMethod} by ${name} (${email})`);
    // Reset the payment fields after processing
    setName('');
    setEmail('');
    setPaymentAmount('');
    setPaymentMethod('');
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
        <label htmlFor="paymentAmount">Amount:</label>
        <input
          type="text"
          id="paymentAmount"
          value={paymentAmount}
          onChange={(e) => setPaymentAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </div>
      <div className="payment-input">
        <label htmlFor="paymentMethod">Payment Method:</label>
        <input
          type="text"
          id="paymentMethod"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          placeholder="Enter payment method"
        />
      </div>
      <button className="payment-button" onClick={handlePayment}>Make Payment</button>
    </div>
  );
};

export default Payment;
