import React from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom';
const Product = ({product,cart,setCart}) => {
  const name = product.name.length>21?product.name.substring(0,20) + "..." : product.name;
  const AddCart = () => {
    setCart([...cart,product])
    navigate("/cart")
  }
  const RemoveCart = () => {
    const duplicate = cart.filter((dCart)=>dCart.id !== product.id)
    setCart(duplicate)
  }
  const navigate = useNavigate();
  return (
    <>
      <div className='product-details'>
    <div className='row m-0'>
    
      <div className='card-img '>
        <img src={product.pic} className='card-img-top' alt={product.name} />
      </div>
      <div className='card-body-detail'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>Price Rs: {product.amt}</p>
          {
            cart.includes(product) ?(
              <button className='btn btn-danger' onClick={RemoveCart}>Remove from Cart</button>
            ):(
              <button className='btn btn-success' onClick={AddCart}>Add to Cart</button>
            )
          }
    </div>  
  </div>
</div>

    </>
  )
}

export default Product