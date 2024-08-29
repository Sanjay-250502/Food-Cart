import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";

const Product = ({ product, cart, setCart }) => {
  const navigate = useNavigate();

  const isInCart = cart.some(item => item.id === product.id);

  const addToCart = () => {
    setCart([...cart, { ...product, quantity: 1 }]);
    navigate("/cart");
  };

  const removeFromCart = () => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  return (
    <div className='product-details'>
      <div className='row m-0'>
        <div className='card-img'>
          <img src={product.pic} className='card-img-top' alt={product.name} />
        </div>
        <div className='card-body-detail'>
          <h5 className='card-title'>
            {product.name.length > 21 ? product.name.substring(0, 20) + "..." : product.name}
          </h5>
          <p className='card-text'>Price Rs: {product.amt}</p>
          {isInCart ? (
            <button className='btn btn-danger' onClick={removeFromCart}>Remove from Cart</button>
          ) : (
            <button className='btn btn-success' onClick={addToCart}>Add to Cart</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
