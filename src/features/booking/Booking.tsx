import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Calendar, Users, CreditCard, Mail, Phone, Check, AlertCircle } from 'lucide-react';
import { roomsData } from '../../data/roomsData';
import './Booking.css';

const Booking: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get('roomId');
  
  const room = roomsData.find(r => r.id === roomId);

  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
    paymentMethod: 'credit-card',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const calculateTotal = () => {
    if (!room || !formData.checkIn || !formData.checkOut) return 0;
    
    const checkIn = new Date(formData.checkIn);
    const checkOut = new Date(formData.checkOut);
    const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
    
    return nights > 0 ? nights * room.price : 0;
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.checkIn) newErrors.checkIn = 'Check-in date is required';
    if (!formData.checkOut) newErrors.checkOut = 'Check-out date is required';
    if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      newErrors.checkOut = 'Check-out must be after check-in';
    }
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (formData.paymentMethod === 'credit-card') {
      if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
      if (!formData.cardName) newErrors.cardName = 'Cardholder name is required';
      if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
      if (!formData.cvv) newErrors.cvv = 'CVV is required';
    }
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate booking process
    setTimeout(() => {
      alert(`Booking confirmed! Room: ${room?.name}, Total: ₹${calculateTotal().toLocaleString('en-IN')}`);
      navigate('/rooms');
      setIsSubmitting(false);
    }, 2000);
  };

  if (!room) {
    return (
      <div className="container text-center py-5">
        <h2>Room Not Found</h2>
        <p>Please select a room to book.</p>
        <button className="btn btn-primary mt-3" onClick={() => navigate('/rooms')}>
          Browse Rooms
        </button>
      </div>
    );
  }

  return (
    <div className="booking">
      <div className="container">
        <div className="booking-header">
          <h1>Complete Your Booking</h1>
          <p>Fill in the details below to confirm your reservation</p>
        </div>

        <div className="booking-content">
          {/* Booking Form */}
          <div className="booking-form">
            <form onSubmit={handleSubmit}>
              {/* Room Selection */}
              <div className="booking-summary">
                <h3>Room Details</h3>
                <div className="summary-room">
                  <div className="summary-room-info">
                    <h4>{room.name}</h4>
                    <p>{room.type} • {room.size} • {room.view}</p>
                    <p>Max {room.maxOccupancy} Guests</p>
                  </div>
                  <div className="summary-room-price">
                    <span className="price-currency">₹</span>
                    <span className="price-amount">{room.price.toLocaleString('en-IN')}</span>
                    <span className="price-period">/night</span>
                  </div>
                </div>
              </div>

              {/* Booking Details */}
              <div className="form-section">
                <h3>Booking Details</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>
                      <Calendar size={20} />
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={errors.checkIn ? 'error' : ''}
                    />
                    {errors.checkIn && <span className="error-message">{errors.checkIn}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label>
                      <Calendar size={20} />
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      min={formData.checkIn || new Date().toISOString().split('T')[0]}
                      className={errors.checkOut ? 'error' : ''}
                    />
                    {errors.checkOut && <span className="error-message">{errors.checkOut}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label>
                      <Users size={20} />
                      Number of Guests
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                    >
                      {[...Array(room.maxOccupancy)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Guest Information */}
              <div className="form-section">
                <h3>Guest Information</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={errors.firstName ? 'error' : ''}
                    />
                    {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={errors.lastName ? 'error' : ''}
                    />
                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label>
                      <Mail size={20} />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label>
                      <Phone size={20} />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Special Requests (Optional)</label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Any special requirements or preferences..."
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div className="form-section">
                <h3>Payment Information</h3>
                <div className="payment-methods">
                  <label className="payment-method">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit-card"
                      checked={formData.paymentMethod === 'credit-card'}
                      onChange={handleInputChange}
                    />
                    <CreditCard size={20} />
                    Credit/Debit Card
                  </label>
                </div>

                {formData.paymentMethod === 'credit-card' && (
                  <div className="payment-form">
                    <div className="form-group">
                      <label>Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        className={errors.cardNumber ? 'error' : ''}
                      />
                      {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
                    </div>
                    
                    <div className="form-grid">
                      <div className="form-group">
                        <label>Cardholder Name</label>
                        <input
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className={errors.cardName ? 'error' : ''}
                        />
                        {errors.cardName && <span className="error-message">{errors.cardName}</span>}
                      </div>
                      
                      <div className="form-group">
                        <label>Expiry Date</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          className={errors.expiryDate ? 'error' : ''}
                        />
                        {errors.expiryDate && <span className="error-message">{errors.expiryDate}</span>}
                      </div>
                      
                      <div className="form-group">
                        <label>CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          className={errors.cvv ? 'error' : ''}
                        />
                        {errors.cvv && <span className="error-message">{errors.cvv}</span>}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Terms and Conditions */}
              <div className="form-section">
                <label className="checkbox-group">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                  />
                  <span>
                    I agree to the <a href="#" className="terms-link">Terms and Conditions</a> and <a href="#" className="terms-link">Privacy Policy</a>
                  </span>
                </label>
                {errors.agreeToTerms && <span className="error-message">{errors.agreeToTerms}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary btn-large"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : `Complete Booking - ₹${calculateTotal().toLocaleString('en-IN')}`}
              </button>
            </form>
          </div>

          {/* Booking Summary */}
          <div className="booking-summary-sidebar">
            <div className="summary-card">
              <h3>Booking Summary</h3>
              
              <div className="summary-room">
                <h4>{room.name}</h4>
                <p>{room.type}</p>
              </div>
              
              <div className="summary-details">
                <div className="summary-row">
                  <span>Check-in</span>
                  <span>{formData.checkIn || 'Not selected'}</span>
                </div>
                <div className="summary-row">
                  <span>Check-out</span>
                  <span>{formData.checkOut || 'Not selected'}</span>
                </div>
                <div className="summary-row">
                  <span>Guests</span>
                  <span>{formData.guests}</span>
                </div>
                <div className="summary-row">
                  <span>Nights</span>
                  <span>
                    {formData.checkIn && formData.checkOut 
                      ? Math.ceil((new Date(formData.checkOut).getTime() - new Date(formData.checkIn).getTime()) / (1000 * 60 * 60 * 24))
                      : '0'}
                  </span>
                </div>
              </div>
              
              <div className="summary-total">
                <div className="summary-row total-row">
                  <span>Total Amount</span>
                  <span className="total-amount">₹{calculateTotal().toLocaleString('en-IN')}</span>
                </div>
              </div>
              
              <div className="summary-policies">
                <div className="policy-item">
                  <Check size={16} />
                  <span>Free cancellation up to 24 hours before check-in</span>
                </div>
                <div className="policy-item">
                  <Check size={16} />
                  <span>No booking fees</span>
                </div>
                <div className="policy-item">
                  <AlertCircle size={16} />
                  <span>Payment will be processed securely</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
