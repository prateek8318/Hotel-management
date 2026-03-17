import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, MapPin } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../../styles/index.css';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    console.log('Mobile menu state changed:', mobileMenuOpen);
  }, [mobileMenuOpen]);

  const handleBookNow = () => {
    console.log('Book Now clicked');
    navigate('/rooms');
  };

  const handlePhoneCall = () => {
    console.log('Phone call initiated');
    window.location.href = 'tel:+919876543210';
  };

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  const handleMobileNavClick = () => {
    console.log('Mobile nav link clicked, closing menu');
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    console.log('Mobile menu button clicked, current state:', mobileMenuOpen);
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled glass' : ''}`}>
        <div className="container navbar-container">
          <Link to="/" className="navbar-logo">
            DreamStay
          </Link>
          
          <ul className="navbar-links desktop-only">
            <li><Link to="/" className={`nav-link ${isActiveLink('/') ? 'active' : ''}`}>Home</Link></li>
            <li><Link to="/rooms" className={`nav-link ${isActiveLink('/rooms') ? 'active' : ''}`}>Rooms & Suites</Link></li>
            <li><Link to="/dining" className={`nav-link ${isActiveLink('/dining') ? 'active' : ''}`}>Dining</Link></li>
            <li><Link to="/wellness" className={`nav-link ${isActiveLink('/wellness') ? 'active' : ''}`}>Wellness</Link></li>
            <li><Link to="/events" className={`nav-link ${isActiveLink('/events') ? 'active' : ''}`}>Events</Link></li>
            <li><Link to="/contact" className={`nav-link ${isActiveLink('/contact') ? 'active' : ''}`}>Contact</Link></li>
          </ul>
          
          <div className="navbar-actions desktop-only">
            <button className="btn btn-outline" onClick={handlePhoneCall}>+91 98765 43210</button>
            <button className="btn btn-primary" onClick={handleBookNow}>Book Now</button>
          </div>

          <button 
            className="mobile-menu-btn hide-on-desktop"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu glass">
          <ul className="mobile-nav-links">
            <li><Link to="/" className={`mobile-nav-link ${isActiveLink('/') ? 'active' : ''}`} onClick={handleMobileNavClick}>Home</Link></li>
            <li><Link to="/rooms" className={`mobile-nav-link ${isActiveLink('/rooms') ? 'active' : ''}`} onClick={handleMobileNavClick}>Rooms & Suites</Link></li>
            <li><Link to="/dining" className={`mobile-nav-link ${isActiveLink('/dining') ? 'active' : ''}`} onClick={handleMobileNavClick}>Dining</Link></li>
            <li><Link to="/wellness" className={`mobile-nav-link ${isActiveLink('/wellness') ? 'active' : ''}`} onClick={handleMobileNavClick}>Wellness</Link></li>
            <li><Link to="/events" className={`mobile-nav-link ${isActiveLink('/events') ? 'active' : ''}`} onClick={handleMobileNavClick}>Events</Link></li>
            <li><Link to="/contact" className={`mobile-nav-link ${isActiveLink('/contact') ? 'active' : ''}`} onClick={handleMobileNavClick}>Contact</Link></li>
          </ul>
          <div className="mobile-nav-actions">
            <div className="flex items-center gap-2 text-sm mb-4 mobile-contact-info">
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2 text-sm mb-4 mobile-contact-info">
              <Mail size={16} />
              <span>info@dreamstay.in</span>
            </div>
            <div className="flex items-center gap-2 text-sm mb-4 mobile-contact-info">
              <MapPin size={16} />
              <span>New Delhi, India</span>
            </div>
            <button className="btn btn-primary w-full" onClick={handleBookNow}>Book Now</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
