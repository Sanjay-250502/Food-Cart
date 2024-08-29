import React, { useState } from 'react'
import datas from "../../products.json"
import Product from './Product'
import '../App.css'
import Header from './Header'
const Home = ({cart,setCart,products}) => {
   
  return (
    <>
    <Header cart={cart} onSearch={() => {}}/>
      <div className='product-container container-fluid'>
      <div className='row m-0'>
        {products.length > 0 ?(
            products.map((product) => (
              <div key={product.id} className='col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12 mt-3 mb-3'>
                <Product product={product} cart={cart} setCart={setCart} />
              </div>
            ))
          ) : (
            <p style={{textAlign:"center",fontSize:"20px",fontWeight:"500"}}>No products found</p>
          )}
        </div>
      </div> 
    </>
  )
}

export default Home