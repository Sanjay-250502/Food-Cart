import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/Confirmation.css';

const Confirmation = () => {
  const { state } = useLocation(); 
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/payment'); 
  };

  return (
    <div className="confirmation-container container">
      <h1 className="confirmation-heading">Order Confirmation</h1>
      {state && state.cart.length > 0 ? (
        <div className="confirmation-details">
          <h2>Order Summary</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {state.cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity || 1}</td>
                  <td>₹{item.amt * (item.quantity)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total">
            <h3>Total Amount: ₹{state.total}</h3>
          </div>
          <button className="btn btn-success" onClick={handleConfirm}>
            Confirm and Proceed to Payment
          </button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Confirmation;
