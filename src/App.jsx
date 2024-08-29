
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import datas from "../products.json"
import Home from './Components/Home'
import Header from './Components/Header'
import Cart from './Components/Cart'
import { useState } from 'react'
import Login from './Components/Login'
import Register from './Components/Register'
import Payment from './Components/Payment'
import Confirmation from './Components/Confirmation'

function App() {
  
  const [cart,setCart] = useState([])
  const [products] = useState(datas)
  
  return (
    <>
      
        <BrowserRouter>
          <Routes>
             <Route path='/' element={<Login/>}/>
             <Route path='/Register' element={<Register/>}/>
             <Route path='/home' element={<Home cart={cart} setCart={setCart} products={products}/>} />
             <Route path='/Cart' element={<Cart cart={cart} setCart={setCart}/>} />
             <Route path='/Payment' element={<Payment/>}/>
             <Route path='/Confirmation' element={<Confirmation/>}/>
          </Routes>  
              
        </BrowserRouter>
      
    </>
  )
}

export default App
