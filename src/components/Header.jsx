import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar-custom">
      <div className="container-fluid d-flex justify-content-between align-items-center px-5">

        {/* Logo Section */}
        <div className="d-flex align-items-center">
          <img
            src="./Images/logo.png" // Replace with actual logo
            alt="Zahrix Logo"
            className="logo-img"
          />
          <span className="brand-name">ZAHRIX</span>
        </div>

        {/* Navigation Links */}
        <div className="nav-links d-flex align-items-center gap-4">
          <NavLink to="/" className="nav-item">Home</NavLink>
          <NavLink to="/about" className="nav-item">About Us</NavLink>

          <div className="dropdown">
            <span className="nav-item dropdown-toggle">Services</span>
            <ul className="dropdown-menu-custom">
              <li><NavLink to="/electrical" className="dropdown-item-custom">Electrical</NavLink></li>
              <li><NavLink to="/cctv" className="dropdown-item-custom">CCTV</NavLink></li>
              <li><NavLink to="/bms" className="dropdown-item-custom">BMS</NavLink></li>
            </ul>
          </div>

          <NavLink to="/projects" className="nav-item">Projects</NavLink>
        </div>

        {/* Quote Button */}
        <div>
          <NavLink to="/contact" className="quote-btn">Get a Quote</NavLink>
        </div>

      </div>
    </nav>
  );
};

export default Header;
