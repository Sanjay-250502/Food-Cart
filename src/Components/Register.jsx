import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../css/Register.css"
const Register = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [message,setMessage] = useState('')
    const navigation = useNavigate()

    const handleRegister = (e) => {
      e.preventDefault()
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const userExist = users.some(user => user.username === username);
      if(userExist){
        setMessage('Users already exist!')
      }
      else{
        users.push({username,password})
        localStorage.setItem('users', JSON.stringify(users));
        setMessage("Registration Successful! Go to login page")
        setUsername('')
        setPassword('')
        navigation("/")
      }
    }
  return (
    <>
        <div className="container register-body">
        <div className="register-container">
        <h2 className="text-center">Register</h2>
        <form className='register-form' onSubmit={handleRegister}>
            <div className="form-inline mb-3 username">
                <label htmlFor="username" className="form-label">Username:</label>
                <input type="text" className="form-control me-2" 
                id="username" placeholder='Username' 
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                required />
            </div>
            <div className="form-inline mb-3 password">
                <label htmlFor="password" className="form-label">Password:</label>
                <input type="password" className="form-control me-2" 
                id="password" placeholder='Password' 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required />
            </div>
        <button type="submit" className="btn btn-success w-100 reg">Register</button>  
         {message && <p className='text-center mt-3 message'>{message}</p>}
        </form>
    </div>
    </div>
    </>
  )
}

export default Register