import React, { useState, useEffect, useCallback } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const closeMenu = useCallback(() => setMenuOpen(false), []);

    return (
        <>
            <nav className="navbar-modern">
                <div className="navbar-modern-inner">
                    {/* Brand */}
                    <NavLink className="navbar-modern-brand" to="/" onClick={closeMenu}>
                        <span className="brand-text">React Ecommerce</span>
                    </NavLink>

                    {/* Desktop Nav Links */}
                    <ul className="navbar-modern-links">
                        <li><NavLink to="/" className={({isActive}) => `navbar-modern-link ${isActive ? 'active' : ''}`}>Home</NavLink></li>
                        <li><NavLink to="/product" className={({isActive}) => `navbar-modern-link ${isActive ? 'active' : ''}`}>Products</NavLink></li>
                        <li><NavLink to="/about" className={({isActive}) => `navbar-modern-link ${isActive ? 'active' : ''}`}>About</NavLink></li>
                        <li><NavLink to="/contact" className={({isActive}) => `navbar-modern-link ${isActive ? 'active' : ''}`}>Contact</NavLink></li>
                    </ul>

                    {/* Desktop Actions */}
                    <div className="navbar-modern-actions">
                        <NavLink to="/login" className="navbar-action-btn navbar-action-login" onClick={closeMenu}>
                            <i className="fa fa-sign-in"></i>
                            <span>Login</span>
                        </NavLink>
                        <NavLink to="/register" className="navbar-action-btn navbar-action-register" onClick={closeMenu}>
                            <i className="fa fa-user-plus"></i>
                            <span>Register</span>
                        </NavLink>
                        <NavLink to="/cart" className="navbar-action-btn navbar-action-cart" onClick={closeMenu}>
                            <i className="fa fa-shopping-cart"></i>
                            <span>Cart</span>
                            {state.length > 0 && <span className="cart-badge">{state.length}</span>}
                        </NavLink>
                        <button onClick={toggleTheme} className="navbar-theme-toggle" aria-label="Toggle theme">
                            {theme === 'light' ? <i className="fa fa-moon-o"></i> : <i className="fa fa-sun-o"></i>}
                        </button>
                    </div>

                    {/* Mobile: Cart + Theme + Hamburger */}
                    <div className="navbar-mobile-right">
                        <NavLink to="/cart" className="navbar-mobile-cart" onClick={closeMenu}>
                            <i className="fa fa-shopping-cart"></i>
                            {state.length > 0 && <span className="cart-badge">{state.length}</span>}
                        </NavLink>
                        <button onClick={toggleTheme} className="navbar-theme-toggle" aria-label="Toggle theme">
                            {theme === 'light' ? <i className="fa fa-moon-o"></i> : <i className="fa fa-sun-o"></i>}
                        </button>
                        <button
                            className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu}></div>
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-header">
                    <span className="brand-text">Menu</span>
                </div>
                <ul className="mobile-menu-links">
                    <li><NavLink to="/" className={({isActive}) => `mobile-menu-link ${isActive ? 'active' : ''}`} onClick={closeMenu}><i className="fa fa-home"></i> Home</NavLink></li>
                    <li><NavLink to="/product" className={({isActive}) => `mobile-menu-link ${isActive ? 'active' : ''}`} onClick={closeMenu}><i className="fa fa-th-large"></i> Products</NavLink></li>
                    <li><NavLink to="/about" className={({isActive}) => `mobile-menu-link ${isActive ? 'active' : ''}`} onClick={closeMenu}><i className="fa fa-info-circle"></i> About</NavLink></li>
                    <li><NavLink to="/contact" className={({isActive}) => `mobile-menu-link ${isActive ? 'active' : ''}`} onClick={closeMenu}><i className="fa fa-envelope"></i> Contact</NavLink></li>
                </ul>
                <div className="mobile-menu-divider"></div>
                <div className="mobile-menu-actions">
                    <NavLink to="/login" className="mobile-action-btn" onClick={closeMenu}>
                        <i className="fa fa-sign-in"></i> Login
                    </NavLink>
                    <NavLink to="/register" className="mobile-action-btn mobile-action-register" onClick={closeMenu}>
                        <i className="fa fa-user-plus"></i> Register
                    </NavLink>
                    <NavLink to="/cart" className="mobile-action-btn mobile-action-cart" onClick={closeMenu}>
                        <i className="fa fa-shopping-cart"></i> Cart {state.length > 0 && `(${state.length})`}
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar