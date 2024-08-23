import React, { useState } from 'react'
import "../css/header.css"
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Header = ({cart,onSearch}) => {
    const [inputValue, setInputValue] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    
    const handleInputChange = (event) => {
      const value = event.target.value;
      if (value.length <= 36) {
        setInputValue(value);
        onSearch(value); 
      }
    };

      const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
      };
    
      const closeSidebar = () => {
        setSidebarOpen(false);
      };
  return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container-fluid">
      <div className="navbar-brand logo">
        <img src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Emblem.png" alt="swiggy-logo" />
      </div>

      <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className=" navbar-collapse justify-content-center posrel" id="navbarNav">
        <form className="d-flex w-100">
          <input className="search-box" type="search" placeholder="Search for restaurants, cuisines or dishes" value={inputValue}
              onChange={handleInputChange}/>
          {/* <span className="search-btn"><CiSearch/></span> */}
        </form>
      </div>

      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={"/"} className="link nav-link home" >Home</Link>
          </li>
          <li className="nav-item">
            <Link to={"/Cart"} className="link nav-link" >
            <span className='cart-icon'><CiShoppingCart /></span>
            <span className='view-cart-length'>{cart.length}</span>
             View Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div className={`overlay ${sidebarOpen ? 'show' : ''}`} onClick={closeSidebar}></div>

  <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={"/"} className="link nav-link" onClick={closeSidebar}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to={"/Cart"} className="link nav-link" onClick={closeSidebar}>View Cart</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header