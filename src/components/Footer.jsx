import "./Footer.css";
import { Link } from "react-router-dom";

import logo from "../assets/HR_Power_Energy.png";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaEnvelope
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-section brand">
          <div className="logo">
                  <img src={logo} alt="HR Power Energy" />
                </div>
          <p>
            Powering a cleaner, greener, and sustainable future with innovative
            solar energy solutions.
          </p>

          {/* SOCIAL ICONS */}
          <div className="footer-socials">
            <a href="https://www.facebook.com/profile.php?id=100086147756457" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/hrpowerenergyofficial/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaXTwitter />
            </a>
            <a href="mailto:hrpowerbikaner@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/FAQs">FAQs</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>
            📧 <a href="mailto:hrpowerbikaner@gmail.com">
                hrpowerbikaner@gmail.com
            </a>
          </p>
          <p>
            📞 <a href="tel:+917878655054">+91 7878655054</a>
          </p>
          <p>📍 India</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} HR Power Energy. All rights reserved. |
          Developed & Maintained By{" "}
          <a
            href="https://aditya-kumar-portfolio.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            Aditya Kumar
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
