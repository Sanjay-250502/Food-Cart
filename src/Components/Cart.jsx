import React, { useEffect, useState } from 'react'
import "../css/Cart.css"
import Header from './Header';
const Cart = ({cart,setCart}) => {
  const [total,setTotal] = useState(0)
  
  useEffect(() => {
    const totalCart = cart.reduce((acc, curr) => acc + curr.amt * curr.quantity, 0);
    setTotal(totalCart);
  }, [cart]);

  const RemoveCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };
  const handleQuantityChange = (index, event) => {
    const value = event.target.value;
    if (value === '' || /^[1-9]\d*$/.test(value)) {  // Allow only positive integers or empty
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

  return (
    <>
    <Header cart={cart} onSearch={() => {}} />
    {cart.length>0 ? (
      <div className="container">
    <h1 className='cart-heading mt-5'>Cart Products</h1>
    <div className="row m-0 cart-container">
    {cart.map((product,i)=>(
      <div className='cart-products' key={i}>
      <div className='cart-img mt-3'>
        <img src={product.pic} alt={product.name}/>
      </div>
      <div className="cart-info mt-3">
        <h5 className="cart-name">{product.name}</h5>
        <p className='cart-price'>Price Rs: <span>{product.amt}</span></p>
        <div className="quantity-container">
            <button className="quantity-button-" onClick={() => decrementQuantity(i)}>-</button>
            <input
              type="text"
              className="quantity-input"
              value={product.quantity || cart.length}
              onChange={(e) => handleQuantityChange(i, e)}
              
                    />
                  <button className="quantity-button" onClick={() => incrementQuantity(i)}>+</button>
                </div>
        <button className='btn btn-danger' onClick={()=>RemoveCart(i)}>Remove</button>
      </div>
    </div>
    ))}
      </div>
      <h1 className='cart-amount'>Total Amount Rs: {total}</h1>
    </div>
    ):(
      <div className='container'>
      <p className='mt-1' style={{textAlign:"center",fontSize:"20px",fontWeight:"500"}}>Your cart is empty.</p>
      </div>
    )}
    </>
  )
}

export default Cart