import React, { useEffect, useState } from 'react';
import '../css/Cart.css';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const totalCart = cart.reduce((acc, curr) => acc + (curr.amt * (curr.quantity || 1)), 0);
    setTotal(totalCart);
  }, [cart]);

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const handleQuantityChange = (index, event) => {
    const value = event.target.value;
    if (value === '' || /^[1-9]\d*$/.test(value)) {
      const newCart = [...cart];
      newCart[index].quantity = value === '' ? 1 : parseInt(value, 10);
      setCart(newCart);
    }
  };

  const incrementQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity = (newCart[index].quantity || 1) + 1;
    setCart(newCart);
  };

  const decrementQuantity = (index) => {
    const newCart = [...cart];
    if ((newCart[index].quantity || 1) > 1) {
      newCart[index].quantity -= 1;
      setCart(newCart);
    }
  };

  const handlePayment = () => {
    navigate('/confirmation', { state: { cart, total } });
  };

  return (
    <>
      <Header cart={cart} onSearch={() => {}} />
      {cart.length > 0 ? (
        <div className="container">
          <h1 className='cart-heading mt-5'>Cart Products</h1>
          <div className="row m-0 cart-container">
            {cart.map((product, i) => (
              <div className='cart-products' key={i}>
                <div className='cart-img mt-3'>
                  <img src={product.pic} alt={product.name} />
                </div>
                <div className="cart-info mt-3">
                  <h5 className="cart-name">{product.name}</h5>
                  <p className='cart-price'>Price Rs: <span>{product.amt}</span></p>
                  <div className="quantity-container">
                    <button className="quantity-button-" onClick={() => decrementQuantity(i)}>-</button>
                    <input
                      type="text"
                      className="quantity-input"
                      value={product.quantity || 1}
                      onChange={(e) => handleQuantityChange(i, e)}
                    />
                    <button className="quantity-button" onClick={() => incrementQuantity(i)}>+</button>
                  </div>
                  <button className='btn btn-danger' onClick={() => removeFromCart(i)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <h1 className='cart-amount'>Total Amount Rs: {total}</h1>
          <button className='btn btn-primary' style={{marginLeft:"20px",color:"white"}} onClick={handlePayment}>Proceed to Payment</button>
        </div>
      ) : (
        <div className='container'>
          <p className='mt-1' style={{ textAlign: 'center', fontSize: '20px', fontWeight: '500' }}>Your cart is empty.</p>
        </div>
      )}
    </>
  );
};

export default Cart;
