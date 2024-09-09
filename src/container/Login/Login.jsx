import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        navigate('/');
    };

    return (
        <div className="app__login app__bg section__padding">
            <div className={`app__login-container ${isLogin ? 'login' : 'register'}`}>
                <div className="form-wrapper">
                    <div className="app__login-form">
                        <h2 className='headtext__cormorant'>Login</h2>
                        <form onSubmit={handleLoginSubmit}>
                            <label htmlFor='email' className='p__cormorant'>Email</label>
                            <input type="email" placeholder="Email" required />
                            <label htmlFor='password' className='p__cormorant'>Password</label>
                            <input type="password" placeholder="Password" required />
                            <button type="submit" className='custom__button'>Login</button>
                        </form>
                        <p onClick={toggleForm}>Don't have an account? Register</p>
                    </div>
                    <div className="app__register-form">
                        <h2 className='headtext__cormorant'>Register</h2>
                        <form>
                            <label htmlFor='name' className='p__cormorant'>Name</label>
                            <input type="text" placeholder="Name" required />
                            <label htmlFor='email' className='p__cormorant'>Email</label>
                            <input type="email" placeholder="Email" required />
                            <label htmlFor='password' className='p__cormorant'>Password</label>
                            <input type="password" placeholder="Password" required />
                            <button type="submit" className='custom__button'>Register</button>
                        </form>
                        <p onClick={toggleForm}>Already have an account? Login</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;