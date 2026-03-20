import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light py-3 sticky-top glass">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> React Ecommerce</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center d-flex align-items-center justify-content-center gap-3">
                        <NavLink to="/login" className="btn btn-nav btn-nav-login d-flex align-items-center gap-2 px-4 py-2 fw-bold text-uppercase" style={{ fontSize: "0.85rem" }}>
                            <i className="fa fa-sign-in-alt"></i> Login
                        </NavLink>
                        <NavLink to="/register" className="btn btn-nav btn-nav-register d-flex align-items-center gap-2 px-4 py-2 fw-bold text-uppercase" style={{ fontSize: "0.85rem" }}>
                            <i className="fa fa-user-plus"></i> Register
                        </NavLink>
                        <NavLink to="/cart" className="btn btn-nav btn-nav-cart d-flex align-items-center gap-2 px-4 py-2 fw-bold text-uppercase" style={{ fontSize: "0.85rem" }}>
                            <i className="fa fa-cart-shopping"></i> Cart ({state.length})
                        </NavLink>
                        <button onClick={toggleTheme} className="btn d-flex align-items-center justify-content-center border-0 shadow-sm" style={{ width: "42px", height: "42px", borderRadius: "50%", background: theme === 'light' ? '#f1f5f9' : '#1e293b', color: theme === 'light' ? '#0f172a' : '#f8fafc', transition: "all 0.3s ease" }}>
                            {theme === 'light' ? <i className="fa fa-moon fs-5"></i> : <i className="fa fa-sun fs-5 text-warning"></i>}
                        </button>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar