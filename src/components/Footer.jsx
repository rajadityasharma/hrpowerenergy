import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section brand">
          <h3>
            <span className="blue">HR</span>{" "}
            <span className="white">Power</span>{" "}
            <span className="green">Energy</span>
          </h3>
          <p>
            Powering a cleaner, greener, and sustainable future with innovative
            energy solutions.
          </p>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>📧 hrpowerenergy@gmail.com</p>
          <p>📞 +91 9XXXXXXXXX</p>
          <p>📍 India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} HR Power Energy. All rights reserved.|  Developed & Maintained By <a href="https://aditya-kumar-portfolio.onrender.com/">Aditya Kumar</a> </p>
      </div>
    </footer>
  );
}

export default Footer;
