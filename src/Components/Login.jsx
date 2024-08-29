import React, { useState } from 'react';
import "../css/Login.css";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const nav = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
        
        const user = users.find(user => user.username === username && user.password === password);
        
        if (user) {
            setMessage("Login Successful!");
            nav("/Home")
        } else {
            setMessage("Invalid Credentials!");
        }
    };

    return (
        <div className="body">
            <div className="login-container">
                <h2 className="text-center">Login</h2>
                <form className='login-htmlForm' onSubmit={handleSubmit}>
                    <div className="form-inline mb-3">
                        <label htmlFor="username" className="form-label">Username:</label>
                        <input
                            type="text"
                            className="form-control me-2"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder='Username'
                            required
                        />
                    </div>
                    <div className="form-inline mb-3">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input
                            type="password"
                            className="form-control me-2"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password'
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                    <span className='d-block mt-2 span'>Don't have an account?</span>
                    <Link to="/Register">
                        <button type="button" className="btn btn-success w-100 reg">Register</button>
                    </Link>
                </form>
                {message && <p className='mt-2 text-center message'>{message}</p>}
            </div>
        </div>
    );
}

export default Login;
