import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <h3 className="footer-logo">
            DreamStay
          </h3>
          <p className="footer-desc">
            Experience luxury and comfort in the heart of New Delhi. We provide world-class amenities and legendary Indian hospitality.
          </p>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/rooms">Rooms & Suites</Link></li>
            <li><Link to="/dining">Dining</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-title">Contact Us</h4>
          <ul className="footer-contact">
            <li>Connaught Place, New Delhi</li>
            <li>Delhi 110001, India</li>
            <li>+91 98765 43210</li>
            <li>info@dreamstay.in</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} DreamStay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
