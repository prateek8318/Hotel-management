import React from 'react';
import { Wifi, Car, Coffee, Dumbbell, Heart, Utensils } from 'lucide-react';
import './SpecialOffers.css';

const SpecialOffers: React.FC = () => {
  const offers = [
    {
      icon: <Wifi size={32} />,
      title: 'High-Speed WiFi',
      description: 'Complimentary high-speed internet throughout the property',
      highlight: 'FREE'
    },
    {
      icon: <Car size={32} />,
      title: 'Valet Parking',
      description: 'Secure valet parking service available 24/7',
      highlight: '24/7'
    },
    {
      icon: <Coffee size={32} />,
      title: 'Complimentary Breakfast',
      description: 'Start your day with our deluxe continental breakfast',
      highlight: 'INCLUDED'
    },
    {
      icon: <Dumbbell size={32} />,
      title: 'Fitness Center',
      description: 'State-of-the-art equipment with personal trainers',
      highlight: 'OPEN 24HRS'
    },
    {
      icon: <Heart size={32} />,
      title: 'Spa & Wellness',
      description: 'Rejuvenating treatments and therapeutic massages',
      highlight: '20% OFF'
    },
    {
      icon: <Utensils size={32} />,
      title: 'Fine Dining',
      description: 'Multi-cuisine restaurants with award-winning chefs',
      highlight: 'RESERVE NOW'
    }
  ];

  return (
    <section className="special-offers-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Exclusive Amenities & Services</h2>
          <p className="section-subtitle">
            Experience unparalleled luxury with our world-class amenities and personalized services
          </p>
        </div>

        <div className="offers-grid">
          {offers.map((offer, index) => (
            <div key={index} className="offer-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="offer-icon">
                {offer.icon}
              </div>
              <div className="offer-content">
                <h3 className="offer-title">{offer.title}</h3>
                <p className="offer-description">{offer.description}</p>
                <span className="offer-highlight">{offer.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <div className="cta-content">
            <h3>Limited Time Special Offer</h3>
            <p>Book your stay now and enjoy 25% off on all room categories plus a complimentary spa session!</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-lg">Book Now & Save</button>
              <button className="btn btn-outline btn-lg">View All Offers</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
