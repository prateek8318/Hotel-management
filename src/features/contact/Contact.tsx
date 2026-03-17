import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // Phone validation (basic Indian phone number format)
    const phoneRegex = /^[+]?[0-9]{10,15}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      alert('Please enter a valid phone number.');
      return;
    }
    
    // Success message
    alert(`Thank you for your inquiry, ${formData.name}! We will contact you at ${formData.email} within 2 hours.`);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-pattern"></div>
      <div className="container">
        <div className="contact-header">
          <div className="section-badge">
            <MapPin size={16} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">Contact DreamStay</h2>
          <p className="section-subtitle">
            We'd love to hear from you! Reach out to us for bookings, inquiries, or just to say hello.
            Our team is here to assist you 24/7 with authentic Indian hospitality.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+91 98765 43210</p>
                <p>+91 87654 32109</p>
                <span className="contact-note">24/7 Customer Support</span>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>info@dreamstay.in</p>
                <p>bookings@dreamstay.in</p>
                <span className="contact-note">Response within 2 hours</span>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-details">
                <h3>Address</h3>
                <p>DreamStay Hotel</p>
                <p>Connaught Place, New Delhi</p>
                <p>Delhi 110001, India</p>
                <span className="contact-note">Near India Gate</span>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Clock size={24} />
              </div>
              <div className="contact-details">
                <h3>Business Hours</h3>
                <p>Check-in: 2:00 PM onwards</p>
                <p>Check-out: 11:00 AM</p>
                <span className="contact-note">Reception open 24/7</span>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="form-header">
              <h3>Send us a Message</h3>
              <p>Fill out the form below and we'll get back to you soon.</p>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us more about your requirements..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="contact-social">
          <h3>Follow Us on Social Media</h3>
          <div className="social-links">
            <a href="#" className="social-link facebook">
              <Facebook size={24} />
            </a>
            <a href="#" className="social-link instagram">
              <Instagram size={24} />
            </a>
            <a href="#" className="social-link twitter">
              <Twitter size={24} />
            </a>
            <a href="#" className="social-link youtube">
              <Youtube size={24} />
            </a>
          </div>
          <p className="social-text">
            Stay updated with our latest offers and Indian hospitality experiences
          </p>
        </div>

        <div className="contact-map">
          <h3>Find Us in New Delhi</h3>
          <div className="map-placeholder">
            <MapPin size={48} />
            <p>Interactive map coming soon</p>
            <span>Located in the heart of Delhi's premium business district</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
