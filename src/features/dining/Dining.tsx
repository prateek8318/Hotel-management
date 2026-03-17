import React, { useState } from 'react';
import { Clock, Star, Phone, MapPin, X } from 'lucide-react';
import './Dining.css';

const Dining: React.FC = () => {
  const [showReservationForm, setShowReservationForm] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const restaurants = [
    {
      name: "The Grand Restaurant",
      cuisine: "Multi-Cuisine Fine Dining",
      description: "Experience culinary excellence with our signature dishes prepared by world-class chefs.",
      timings: "6:00 AM - 11:00 PM",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop",
      specialties: ["Indian", "Continental", "Chinese", "Thai"]
    },
    {
      name: "Rooftop Grill",
      cuisine: "Barbecue & Grill",
      description: "Savor perfectly grilled delicacies under the stars with panoramic city views.",
      timings: "5:00 PM - 1:00 AM",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=250&fit=crop",
      specialties: ["Grilled Meats", "BBQ", "Seafood", "Cocktails"]
    },
    {
      name: "Coffee House",
      cuisine: "Café & Bakery",
      description: "Your perfect spot for artisanal coffee, fresh pastries, and light meals.",
      timings: "7:00 AM - 10:00 PM",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=250&fit=crop",
      specialties: ["Coffee", "Pastries", "Sandwiches", "Desserts"]
    },
    {
      name: "The Bar Lounge",
      cuisine: "Bar & Lounge",
      description: "Unwind with premium spirits, craft cocktails, and live music in an elegant setting.",
      timings: "4:00 PM - 2:00 AM",
      rating: 4.9,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/2a/4c/2a/the-lounge-bar.jpg?w=1100&h=1100&s=1",
      specialties: ["Cocktails", "Wine", "Whiskey", "Tapas"]
    }
  ];

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.date) {
      errors.date = 'Date is required';
    }
    
    if (!formData.time) {
      errors.time = 'Time is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleReserveTable = (restaurantName: string) => {
    setSelectedRestaurant(restaurantName);
    setShowReservationForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Reservation submitted:', { ...formData, restaurant: selectedRestaurant });
      alert(`Table reserved successfully at ${selectedRestaurant}! We'll send a confirmation to ${formData.email}.`);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        specialRequests: ''
      });
      setFormErrors({});
      setShowReservationForm(false);
    }
  };

  const closeReservationForm = () => {
    setShowReservationForm(false);
    setFormErrors({});
  };

  return (
    <section id="dining" className="dining-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Dining Experiences</h2>
          <p className="section-subtitle">Culinary journeys that delight your senses</p>
        </div>

        <div className="restaurants-grid">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="restaurant-card">
              <div className="restaurant-image">
                <img src={restaurant.image} alt={restaurant.name} className="restaurant-img" />
              </div>
              <div className="restaurant-content">
                <div className="restaurant-header">
                  <h3>{restaurant.name}</h3>
                  <div className="restaurant-rating">
                    <Star size={16} className="star-icon" />
                    <span>{restaurant.rating}</span>
                  </div>
                </div>
                <p className="restaurant-cuisine">{restaurant.cuisine}</p>
                <p className="restaurant-description">{restaurant.description}</p>
                
                <div className="restaurant-details">
                  <div className="detail-item">
                    <Clock size={16} />
                    <span>{restaurant.timings}</span>
                  </div>
                </div>

                <div className="restaurant-specialties">
                  <h4>Specialties</h4>
                  <div className="specialties-list">
                    {restaurant.specialties.map((specialty, idx) => (
                      <span key={idx} className="specialty-tag">{specialty}</span>
                    ))}
                  </div>
                </div>

                <button 
                  className="btn btn-primary restaurant-btn"
                  onClick={() => handleReserveTable(restaurant.name)}
                >
                  Reserve Table
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="dining-features">
          <div className="features-grid">
            <div className="feature-item">
              <h3>24/7 Room Service</h3>
              <p>Enjoy gourmet meals in the comfort of your room anytime</p>
            </div>
            <div className="feature-item">
              <h3>Private Dining</h3>
              <p>Exclusive spaces for intimate gatherings and celebrations</p>
            </div>
            <div className="feature-item">
              <h3>Theme Nights</h3>
              <p>Special culinary events and themed dining experiences</p>
            </div>
          </div>
        </div>

        <div className="dining-contact">
          <div className="contact-info">
            <h3>Dining Reservations</h3>
            <div className="contact-details">
              <div className="contact-item">
                <Phone size={20} />
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <span>DreamStay Hotel, New Delhi</span>
              </div>
            </div>
            <p className="reservation-note">For group bookings and special events, please call 24 hours in advance</p>
          </div>
        </div>
      </div>

      {/* Reservation Form Modal */}
      {showReservationForm && (
        <div className="reservation-modal-overlay" onClick={closeReservationForm}>
          <div className="reservation-modal" onClick={(e) => e.stopPropagation()}>
            <div className="reservation-header">
              <h3>Reserve Table at {selectedRestaurant}</h3>
              <button className="close-btn" onClick={closeReservationForm}>
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="reservation-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={formErrors.name ? 'error' : ''}
                  />
                  {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={formErrors.email ? 'error' : ''}
                  />
                  {formErrors.email && <span className="error-message">{formErrors.email}</span>}
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
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className={formErrors.phone ? 'error' : ''}
                  />
                  {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="guests">Number of Guests *</label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="7">7 Guests</option>
                    <option value="8">8+ Guests</option>
                  </select>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Date *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={formErrors.date ? 'error' : ''}
                  />
                  {formErrors.date && <span className="error-message">{formErrors.date}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="time">Time *</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className={formErrors.time ? 'error' : ''}
                  />
                  {formErrors.time && <span className="error-message">{formErrors.time}</span>}
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="specialRequests">Special Requests</label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Any dietary restrictions, occasion details, or special requests..."
                />
              </div>
              
              <div className="form-actions">
                <button type="button" className="btn btn-outline" onClick={closeReservationForm}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Confirm Reservation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Dining;
