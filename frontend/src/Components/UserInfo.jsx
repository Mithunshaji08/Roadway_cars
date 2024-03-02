import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import'./Userinfo.css';

const UserInfo = () => {
  const { email } = useParams(); // Fetch the email parameter from the URL
  const [paymentDetails, setPaymentDetails] = useState(null);

  useEffect(() => {
    // Fetch payment details based on the email from the backend
    const fetchPaymentDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8055/payment-details/${email}`);
        const data = await response.json();
        setPaymentDetails(data);
      } catch (error) {
        console.error('Error fetching payment details:', error);
      }
    };

    fetchPaymentDetails();
  }, [email]); // Fetch payment details whenever the email parameter changes

  return (
    <div>
      <h2>User Information</h2>
      {Array.isArray(paymentDetails) && paymentDetails.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Car</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {paymentDetails.map(payment => (
              <tr key={payment._id}>
                <td>{payment.name}</td>
                <td>{payment.carName}</td>
                <td>{payment.paymentAmount}</td>
                <td className={payment.status === 'paid' ? 'paid' : ''}>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No payment details found</p>
      )}
    </div>
  );
};

export default UserInfo;
