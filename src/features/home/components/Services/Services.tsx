import React from 'react';
import { Wifi, Car, Coffee, Users, Shield, Clock, MapPin, Star } from 'lucide-react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Wifi size={40} />,
      title: "High-Speed Internet",
      description: "Complimentary high-speed WiFi throughout the hotel for seamless connectivity"
    },
    {
      icon: <Car size={40} />,
      title: "Airport Transfer",
      description: "Luxury airport pickup and drop-off service in premium vehicles"
    },
    {
      icon: <Coffee size={40} />,
      title: "24/7 Room Service",
      description: "Gourmet dining delivered to your room anytime, day or night"
    },
    {
      icon: <Users size={40} />,
      title: "Business Center",
      description: "Fully equipped business center with meeting rooms and conference facilities"
    },
    {
      icon: <Shield size={40} />,
      title: "Premium Security",
      description: "24/7 security surveillance and trained staff for your safety"
    },
    {
      icon: <Clock size={40} />,
      title: "Concierge Service",
      description: "Personalized concierge service to assist with all your needs"
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Premium Services & Amenities</h2>
          <p className="section-subtitle">
            Experience world-class hospitality with our comprehensive range of services
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-features">
          <div className="feature-row">
            <div className="feature-item">
              <MapPin size={24} />
              <div>
                <h4>Prime Location</h4>
                <p>Located in the heart of New Delhi</p>
              </div>
            </div>
            <div className="feature-item">
              <Star size={24} />
              <div>
                <h4>5-Star Rating</h4>
                <p>Consistently rated among Delhi's finest</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
