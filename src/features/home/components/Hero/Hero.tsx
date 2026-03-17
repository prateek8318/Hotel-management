import React from 'react';
import { Sparkles, Wifi, Car, Coffee, CheckCircle, ArrowRight, Clock, Users, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleExploreRooms = () => {
    navigate('/rooms');
  };

  const handleContactUs = () => {
    navigate('/contact');
  };

  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-pattern"></div>
      <div className="floating-elements">
        <div className="floating-element element-1">🌟</div>
        <div className="floating-element element-2">🏨</div>
        <div className="floating-element element-3">🛎️</div>
        <div className="floating-element element-4">✨</div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-badge animate-fade-in">
          <Sparkles size={16} />
          <span>अतिथि देवो भवः - The Guest is God</span>
        </div>
        
        <h1 className="hero-title animate-fade-in">
          Experience <span className="text-gradient">Luxury Redefined</span> at DreamStay
        </h1>
        
        <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Discover unparalleled elegance in the heart of New Delhi. Where Indian hospitality meets world-class luxury, 
          creating memories that last a lifetime.
        </p>
        
        <div className="hero-stats animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Luxury Rooms</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Happy Guests</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Awards Won</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Premium Service</div>
          </div>
        </div>
        
        <div className="hero-features animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="hero-feature">
            <Wifi size={20} />
            <span>High-Speed WiFi</span>
          </div>
          <div className="hero-feature">
            <Car size={20} />
            <span>Airport Transfer</span>
          </div>
          <div className="hero-feature">
            <Coffee size={20} />
            <span>Premium Dining</span>
          </div>
          <div className="hero-feature">
            <Users size={20} />
            <span>Event Spaces</span>
          </div>
        </div>
        
        <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <button className="btn btn-primary hero-btn-primary" onClick={handleExploreRooms}>
            Explore Our Suites
            <ArrowRight size={18} />
          </button>
          <button className="btn btn-outline hero-btn-outline" onClick={handleContactUs}>
            Contact Us
          </button>
        </div>
        
        <div className="hero-quick-info animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="quick-info-item">
            <CheckCircle size={16} />
            <span>Instant Confirmation</span>
          </div>
          <div className="quick-info-item">
            <Clock size={16} />
            <span>Flexible Check-in</span>
          </div>
          <div className="quick-info-item">
            <Star size={16} />
            <span>Best Price Guarantee</span>
          </div>
        </div>
        
        <div className="hero-indian-touch animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <div className="indian-motto">
            "Where every guest is treated like royalty"
          </div>
          <div className="indian-details">
            <span>🇮🇳</span>
            <span>Proudly Indian</span>
            <span>•</span>
            <span>Est. 2024</span>
            <span>•</span>
            <span>Delhi's Finest</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
