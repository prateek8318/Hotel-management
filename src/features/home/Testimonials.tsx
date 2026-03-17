import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Sharma",
      location: "Mumbai, India",
      rating: 5,
      comment: "Absolutely phenomenal experience! The staff went above and beyond to make our anniversary special. The room was luxurious and the view was breathtaking.",
      roomType: "Presidential Suite"
    },
    {
      name: "Priya Patel",
      location: "Bangalore, India",
      rating: 5,
      comment: "DreamStay exceeded all our expectations. The attention to detail, world-class amenities, and exceptional service made our business trip truly comfortable.",
      roomType: "Executive Suite"
    },
    {
      name: "Amit Kumar",
      location: "Delhi, India",
      rating: 5,
      comment: "Perfect location, impeccable service, and stunning interiors. The spa facilities are outstanding. Will definitely come back for our next family vacation!",
      roomType: "Deluxe Room"
    },
    {
      name: "Sarah Johnson",
      location: "London, UK",
      rating: 5,
      comment: "As an international traveler, I was impressed by the blend of Indian hospitality and modern luxury. The dining experience was exceptional.",
      roomType: "Royal Suite"
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      rating: 5,
      comment: "Outstanding hotel with world-class facilities. The conference rooms were perfect for our business meeting. Highly recommend for both leisure and business.",
      roomType: "Business Suite"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">What Our Guests Say</h2>
          <p className="section-subtitle">
            Discover why our guests rate us as Delhi's premier luxury hotel destination
          </p>
        </div>

        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="quote-icon">
              <Quote size={40} />
            </div>
            
            <div className="testimonial-content">
              <div className="rating">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="star-filled" />
                ))}
              </div>
              
              <p className="testimonial-text">
                "{currentTestimonial.comment}"
              </p>
              
              <div className="guest-info">
                <div className="guest-details">
                  <h4 className="guest-name">{currentTestimonial.name}</h4>
                  <p className="guest-location">{currentTestimonial.location}</p>
                  <p className="room-type">{currentTestimonial.roomType}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-controls">
            <button className="control-btn prev-btn" onClick={prevTestimonial}>
              <ChevronLeft size={24} />
            </button>
            <button className="control-btn next-btn" onClick={nextTestimonial}>
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToTestimonial(index)}
              />
            ))}
          </div>
        </div>

        <div className="testimonials-stats">
          <div className="stat-box">
            <div className="stat-number">4.9/5</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Happy Guests</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">98%</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
