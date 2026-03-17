import React from 'react';
import { Heart, Clock, Users, Star, Phone, MapPin } from 'lucide-react';
import './Wellness.css';

const Wellness: React.FC = () => {
  const wellnessServices = [
    {
      name: "Spa & Massage",
      description: "Rejuvenate your body and soul with our signature treatments",
      duration: "60-120 min",
      price: "₹3,000 - ₹8,000",
      treatments: ["Swedish Massage", "Deep Tissue", "Aromatherapy", "Hot Stone"]
    },
    {
      name: "Fitness Center",
      description: "State-of-the-art equipment and personal training services",
      duration: "Open 24/7",
      price: "Complimentary for guests",
      features: ["Modern Equipment", "Personal Training", "Yoga Classes", "Steam Room"]
    },
    {
      name: "Swimming Pool",
      description: "Olympic-sized pool with temperature control and poolside service",
      duration: "6:00 AM - 10:00 PM",
      price: "Complimentary for guests",
      features: ["Lap Pool", "Kids Pool", "Pool Bar", "Sun Deck"]
    },
    {
      name: "Yoga & Meditation",
      description: "Find your inner peace with guided sessions",
      duration: "45-60 min",
      price: "₹1,500 - ₹2,500",
      styles: ["Hatha Yoga", "Vinyasa", "Meditation", "Pranayama"]
    }
  ];

  const spaPackages = [
    {
      name: "Royal Rejuvenation",
      duration: "3 hours",
      price: "₹12,000",
      includes: ["Full Body Massage", "Facial", "Body Wrap", "Sauna"]
    },
    {
      name: "Couples Retreat",
      duration: "2.5 hours",
      price: "₹15,000",
      includes: ["Couples Massage", "Aromatherapy", "Rose Petal Bath", "Champagne"]
    },
    {
      name: "Quick Refresh",
      duration: "60 minutes",
      price: "₹4,000",
      includes: ["Back Massage", "Head Massage", "Foot Reflexology"]
    }
  ];

  return (
    <section id="wellness" className="wellness-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Wellness & Spa</h2>
          <p className="section-subtitle">Rejuvenate your mind, body, and soul</p>
        </div>

        <div className="wellness-intro">
          <div className="intro-content">
            <h3>Ultimate Relaxation Awaits</h3>
            <p>Step into our world of tranquility and let our expert therapists guide you through a journey of relaxation and rejuvenation. Our wellness facilities are designed to restore balance to your life.</p>
          </div>
        </div>

        <div className="services-grid">
          {wellnessServices.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <Heart size={40} />
              </div>
              <div className="service-content">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                
                <div className="service-details">
                  <div className="detail-item">
                    <Clock size={16} />
                    <span>{service.duration}</span>
                  </div>
                  <div className="detail-item">
                    <Star size={16} />
                    <span>{service.price}</span>
                  </div>
                </div>

                <div className="service-features">
                  {(service.treatments || service.features || service.styles)?.map((item, idx) => (
                    <span key={idx} className="feature-tag">{item}</span>
                  ))}
                </div>

                <button className="btn btn-outline service-btn">Book Session</button>
              </div>
            </div>
          ))}
        </div>

        <div className="spa-packages">
          <div className="packages-header">
            <h3>Signature Spa Packages</h3>
            <p>Curated wellness experiences for complete rejuvenation</p>
          </div>
          
          <div className="packages-grid">
            {spaPackages.map((pkg, index) => (
              <div key={index} className="package-card">
                <div className="package-header">
                  <h4>{pkg.name}</h4>
                  <div className="package-meta">
                    <span className="duration">{pkg.duration}</span>
                    <span className="price">{pkg.price}</span>
                  </div>
                </div>
                <ul className="package-includes">
                  {pkg.includes.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <button className="btn btn-primary package-btn">Book Package</button>
              </div>
            ))}
          </div>
        </div>

        <div className="wellness-amenities">
          <h3>Wellness Amenities</h3>
          <div className="amenities-grid">
            <div className="amenity-item">
              <div className="amenity-icon">
                <Users size={24} />
              </div>
              <h4>Expert Therapists</h4>
              <p>Certified professionals with years of experience</p>
            </div>
            <div className="amenity-item">
              <div className="amenity-icon">
                <Heart size={24} />
              </div>
              <h4>Natural Products</h4>
              <p>Premium organic and natural wellness products</p>
            </div>
            <div className="amenity-item">
              <div className="amenity-icon">
                <Clock size={24} />
              </div>
              <h4>Flexible Timings</h4>
              <p>Extended hours to accommodate your schedule</p>
            </div>
            <div className="amenity-item">
              <div className="amenity-icon">
                <Star size={24} />
              </div>
              <h4>Personalized Service</h4>
              <p>Customized treatments based on your needs</p>
            </div>
          </div>
        </div>

        <div className="wellness-contact">
          <div className="contact-info">
            <h3>Spa Reservations</h3>
            <div className="contact-details">
              <div className="contact-item">
                <Phone size={20} />
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <span>Wellness Floor, DreamStay Hotel</span>
              </div>
            </div>
            <p className="reservation-note">Advance booking recommended for weekend appointments</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wellness;
