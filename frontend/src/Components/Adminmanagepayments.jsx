import React, { useState, useEffect } from 'react';

const AdminManagePayments = () => {
  // State to store the payment details
  const [payments, setPayments] = useState([]);

  // Function to fetch payment details from the server
  const fetchPayments = async () => {
    try {
      const response = await fetch('http://localhost:8055/payment-details'); // Adjust URL accordingly
      if (response.ok) {
        const data = await response.json();
        setPayments(data);
      } else {
        throw new Error('Failed to fetch payment details');
      }
    } catch (error) {
      console.error('Error fetching payment details:', error);
    }
  };

  // Fetch payment details when the component mounts
  useEffect(() => {
    fetchPayments();
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div>
      <h2>All Payments</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Car Name</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index}>
              <td>{payment.name}</td>
              <td>{payment.email}</td>
              <td>{payment.carName}</td>
              <td>{payment.paymentAmount}</td>
              <td>{payment.paymentMethod}</td>
              <td>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminManagePayments;
