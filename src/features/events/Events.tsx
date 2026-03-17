import React from 'react';
import { Calendar, Users, MapPin, Star, Phone, Clock, ChevronRight } from 'lucide-react';
import './Events.css';

const Events: React.FC = () => {
  const venues = [
    {
      name: "Grand Ballroom",
      capacity: "500 guests",
      size: "10,000 sq ft",
      description: "Elegant space for grand celebrations and corporate events",
      features: ["Stage", "Dance Floor", "AV Equipment", "Bar Area"],
      price: "₹2,00,000 per day"
    },
    {
      name: "Conference Hall",
      capacity: "200 guests",
      size: "4,000 sq ft",
      description: "Perfect for business meetings, seminars, and workshops",
      features: ["Podium", "Projector", "Sound System", "High-Speed WiFi"],
      price: "₹75,000 per day"
    },
    {
      name: "Rooftop Garden",
      capacity: "150 guests",
      size: "3,000 sq ft",
      description: "Scenic outdoor venue with panoramic city views",
      features: ["Garden Seating", "Tents", "Barbecue Setup", "Lighting"],
      price: "₹1,20,000 per day"
    },
    {
      name: "Boardroom",
      capacity: "25 guests",
      size: "500 sq ft",
      description: "Intimate setting for executive meetings and discussions",
      features: ["Conference Table", "Video Conferencing", "Privacy", "Catering"],
      price: "₹25,000 per day"
    }
  ];

  const eventTypes = [
    {
      title: "Weddings & Receptions",
      description: "Make your special day unforgettable with our complete wedding packages",
      icon: "💒",
      services: ["Decoration", "Catering", "Photography", "Entertainment"]
    },
    {
      title: "Corporate Events",
      description: "Professional settings for business conferences and meetings",
      icon: "💼",
      services: ["Audio-Visual", "Catering", "Accommodation", "Transport"]
    },
    {
      title: "Birthday Parties",
      description: "Celebrate milestones with customized party packages",
      icon: "🎉",
      services: ["Theme Decoration", "Catering", "Entertainment", "Photography"]
    },
    {
      title: "Social Gatherings",
      description: "Perfect venue for family reunions and social events",
      icon: "🎊",
      services: ["Custom Menus", "Decoration", "Music", "Games"]
    }
  ];

  const packages = [
    {
      name: "Silver Package",
      price: "₹3,00,000",
      includes: ["Venue Booking", "Basic Decoration", "Standard Catering", "Music System"],
      bestFor: "Small gatherings and meetings"
    },
    {
      name: "Gold Package",
      price: "₹6,00,000",
      includes: ["Premium Venue", "Theme Decoration", "Gourmet Catering", "Live Entertainment", "Photography"],
      bestFor: "Weddings and large celebrations"
    },
    {
      name: "Platinum Package",
      price: "₹10,00,000",
      includes: ["Luxury Venue", "Custom Theme", "Premium Catering", "Live Band", "Professional Photography", "Accommodation"],
      bestFor: "Luxury weddings and corporate events"
    }
  ];

  return (
    <section id="events" className="events-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Events & Celebrations</h2>
          <p className="section-subtitle">Create unforgettable moments in our elegant venues</p>
        </div>

        <div className="events-intro">
          <div className="intro-content">
            <h3>Host Your Perfect Event</h3>
            <p>From intimate gatherings to grand celebrations, our versatile venues and expert event planning team ensure your event is nothing short of extraordinary. We handle every detail so you can focus on making memories.</p>
          </div>
        </div>

        <div className="event-types">
          <h3>Types of Events We Host</h3>
          <div className="types-grid">
            {eventTypes.map((type, index) => (
              <div key={index} className="event-type-card">
                <div className="event-icon">{type.icon}</div>
                <h4>{type.title}</h4>
                <p>{type.description}</p>
                <div className="event-services">
                  {type.services.map((service, idx) => (
                    <span key={idx} className="service-tag">{service}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="venues-section">
          <h3>Our Event Venues</h3>
          <div className="venues-grid">
            {venues.map((venue, index) => (
              <div key={index} className="venue-card">
                <div className="venue-image">
                  <div className="venue-placeholder">
                    <h4>{venue.name}</h4>
                  </div>
                </div>
                <div className="venue-content">
                  <div className="venue-header">
                    <h4>{venue.name}</h4>
                    <div className="venue-price">{venue.price}</div>
                  </div>
                  <p className="venue-description">{venue.description}</p>
                  
                  <div className="venue-details">
                    <div className="detail-item">
                      <Users size={16} />
                      <span>{venue.capacity}</span>
                    </div>
                    <div className="detail-item">
                      <MapPin size={16} />
                      <span>{venue.size}</span>
                    </div>
                  </div>

                  <div className="venue-features">
                    <h5>Features</h5>
                    <div className="features-list">
                      {venue.features.map((feature, idx) => (
                        <span key={idx} className="feature-tag">{feature}</span>
                      ))}
                    </div>
                  </div>

                  <button className="btn btn-outline venue-btn">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="packages-section">
          <div className="packages-header">
            <h3>Event Packages</h3>
            <p>All-inclusive packages designed for different needs and budgets</p>
          </div>
          
          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <div key={index} className={`package-card ${index === 1 ? 'featured' : ''}`}>
                {index === 1 && <div className="featured-badge">Most Popular</div>}
                <div className="package-header">
                  <h4>{pkg.name}</h4>
                  <div className="package-price">{pkg.price}</div>
                </div>
                <p className="package-description">{pkg.bestFor}</p>
                <ul className="package-includes">
                  {pkg.includes.map((item, idx) => (
                    <li key={idx}>
                      <ChevronRight size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className={`btn ${index === 1 ? 'btn-primary' : 'btn-outline'} package-btn`}>Book Package</button>
              </div>
            ))}
          </div>
        </div>

        <div className="services-section">
          <h3>Event Services</h3>
          <div className="services-grid">
            <div className="service-item">
              <Calendar size={32} />
              <h4>Event Planning</h4>
              <p>Complete event coordination from concept to execution</p>
            </div>
            <div className="service-item">
              <Users size={32} />
              <h4>Catering Services</h4>
              <p>Customized menus for all dietary preferences and budgets</p>
            </div>
            <div className="service-item">
              <Star size={32} />
              <h4>Entertainment</h4>
              <p>Live bands, DJs, and entertainment options for all occasions</p>
            </div>
            <div className="service-item">
              <Clock size={32} />
              <h4>24/7 Support</h4>
              <p>Round-the-clock assistance for your event needs</p>
            </div>
          </div>
        </div>

        <div className="events-contact">
          <div className="contact-info">
            <h3>Event Inquiries</h3>
            <div className="contact-details">
              <div className="contact-item">
                <Phone size={20} />
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <span>Events Department, DreamStay Hotel</span>
              </div>
            </div>
            <p className="contact-note">For venue tours and detailed quotations, please contact our events team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
