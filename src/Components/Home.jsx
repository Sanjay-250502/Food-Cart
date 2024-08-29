import React, { useState } from 'react'
import Product from './Product'
import '../App.css'
import Header from './Header'
const Home = ({cart,setCart,products}) => {
   
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  return (
    <>
    <Header cart={cart} onSearch={handleSearch}/>
      <div className='product-container container-fluid'>
      <div className='row m-0'>
        {filteredProducts.length > 0 ?(
          filteredProducts.map((product) => (
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