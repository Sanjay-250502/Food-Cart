import React from 'react';
import '../css/Payment.css';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();

  const handlePaymentOption = (option) => {
    alert(`${option} Payment successful`);
    navigate('/Home'); 
  };

  return (
    <div className="payment-container container">
      <h1 className="payment-heading">Select Payment Method</h1>
      <div className="payment-options">
        <button className="btn btn-info" onClick={() => handlePaymentOption('gpay')}>Google Pay</button>
        <button className="btn btn-info" onClick={() => handlePaymentOption('phonepay')}>PhonePe</button>
        <button className="btn btn-info" onClick={() => handlePaymentOption('creditcard')}>Credit Card</button>
        <button className="btn btn-info" onClick={() => handlePaymentOption('debitcard')}>Debit Card</button>
      </div>
    </div>
  );
};

export default Payment;
