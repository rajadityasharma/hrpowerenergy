import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

import logo from "../assets/HR_Power_Energy.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="HR Power Energy" />
      </div>

      {/* Burger Icon */}
      <div
        className="burger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
        <li><Link to="/faqs" onClick={() => setMenuOpen(false)}>FAQs</Link></li>
        <li><Link to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
