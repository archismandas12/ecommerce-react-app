import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-5 mt-5" style={{ borderTop: "1px solid rgba(0,0,0,0.08)", background: "var(--bg-color)" }}>
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <h5 className="fw-bold mb-3" style={{ background: "linear-gradient(135deg, #6366f1, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              React Ecommerce
            </h5>
            <p className="text-muted" style={{ fontSize: "0.9rem", lineHeight: "1.7" }}>
              Shop the latest trends with confidence. Fresh and premium products curated for you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="fw-bold text-uppercase mb-3" style={{ fontSize: "0.8rem", letterSpacing: "1.5px" }}>Quick Links</h6>
            <div className="footer-links">
              <Link to="/" className="text-muted text-decoration-none" style={{ fontSize: "0.9rem", transition: "color 0.3s" }}>Home</Link>
              <Link to="/product" className="text-muted text-decoration-none" style={{ fontSize: "0.9rem", transition: "color 0.3s" }}>Products</Link>
              <Link to="/about" className="text-muted text-decoration-none" style={{ fontSize: "0.9rem", transition: "color 0.3s" }}>About</Link>
              <Link to="/contact" className="text-muted text-decoration-none" style={{ fontSize: "0.9rem", transition: "color 0.3s" }}>Contact</Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h6 className="fw-bold text-uppercase mb-3" style={{ fontSize: "0.8rem", letterSpacing: "1.5px" }}>Categories</h6>
            <div className="footer-links">
              <Link to="/product" className="text-muted text-decoration-none" style={{ fontSize: "0.9rem" }}>Men's Clothing</Link>
              <Link to="/product" className="text-muted text-decoration-none" style={{ fontSize: "0.9rem" }}>Women's Clothing</Link>
              <Link to="/product" className="text-muted text-decoration-none" style={{ fontSize: "0.9rem" }}>Electronics</Link>
              <Link to="/product" className="text-muted text-decoration-none" style={{ fontSize: "0.9rem" }}>Jewelery</Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h6 className="fw-bold text-uppercase mb-3" style={{ fontSize: "0.8rem", letterSpacing: "1.5px" }}>Connect</h6>
            <div className="footer-social">
              <a href="#!" className="text-muted" style={{ fontSize: "1.2rem", transition: "color 0.3s" }}><i className="fa fa-facebook"></i></a>
              <a href="#!" className="text-muted" style={{ fontSize: "1.2rem", transition: "color 0.3s" }}><i className="fa fa-twitter"></i></a>
              <a href="#!" className="text-muted" style={{ fontSize: "1.2rem", transition: "color 0.3s" }}><i className="fa fa-instagram"></i></a>
              <a href="#!" className="text-muted" style={{ fontSize: "1.2rem", transition: "color 0.3s" }}><i className="fa fa-github"></i></a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="text-center mt-5 pt-4" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
          <p className="text-muted mb-0" style={{ fontSize: "0.85rem" }}>
            © {new Date().getFullYear()} React Ecommerce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
