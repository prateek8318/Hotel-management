import React, { useState } from 'react';
import { Calendar, Users, User, Search } from 'lucide-react';
import './BookingForm.css';

interface BookingData {
  checkin: string;
  checkout: string;
  adults: string;
  children: string;
}

const BookingForm: React.FC = () => {
  const [bookingData, setBookingData] = useState<BookingData>({
    checkin: '',
    checkout: '',
    adults: '2',
    children: '0'
  });
  
  const [errors, setErrors] = useState<Partial<BookingData>>({});
  const [isSearching, setIsSearching] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field
    if (errors[name as keyof BookingData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<BookingData> = {};
    
    if (!bookingData.checkin) {
      newErrors.checkin = 'Check-in date is required';
    }
    
    if (!bookingData.checkout) {
      newErrors.checkout = 'Check-out date is required';
    } else if (bookingData.checkin && bookingData.checkout <= bookingData.checkin) {
      newErrors.checkout = 'Check-out must be after check-in';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckAvailability = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
      console.log('Checking availability for:', bookingData);
      // Here you would typically make an API call to check availability
      alert('Availability check complete! Rooms are available for your selected dates.');
    }, 2000);
  };

  const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <div className="booking-section">
      <div className="container">
        <div className="booking-form-wrapper glass shadow-lg">
          <div className="booking-header">
            <h3>Check Availability</h3>
            <p>Find your perfect stay</p>
          </div>
          
          <form className="booking-form" onSubmit={handleCheckAvailability}>
            <div className="form-group">
              <label htmlFor="checkin">
                <Calendar size={16} />
                Check-in
              </label>
              <input
                type="date"
                id="checkin"
                name="checkin"
                className={`form-control ${errors.checkin ? 'error' : ''}`}
                value={bookingData.checkin}
                onChange={handleInputChange}
                min={getTodayDate()}
                required
              />
              {errors.checkin && <span className="error-message">{errors.checkin}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="checkout">
                <Calendar size={16} />
                Check-out
              </label>
              <input
                type="date"
                id="checkout"
                name="checkout"
                className={`form-control ${errors.checkout ? 'error' : ''}`}
                value={bookingData.checkout}
                onChange={handleInputChange}
                min={bookingData.checkin || getTomorrowDate()}
                required
              />
              {errors.checkout && <span className="error-message">{errors.checkout}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="adults">
                <Users size={16} />
                Adults
              </label>
              <select
                id="adults"
                name="adults"
                className="form-control"
                value={bookingData.adults}
                onChange={handleInputChange}
              >
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
                <option value="3">3 Adults</option>
                <option value="4">4 Adults</option>
                <option value="5">5 Adults</option>
                <option value="6">6 Adults</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="children">
                <User size={16} />
                Children
              </label>
              <select
                id="children"
                name="children"
                className="form-control"
                value={bookingData.children}
                onChange={handleInputChange}
              >
                <option value="0">0 Children</option>
                <option value="1">1 Child</option>
                <option value="2">2 Children</option>
                <option value="3">3 Children</option>
                <option value="4">4 Children</option>
              </select>
            </div>
            
            <div className="form-group align-bottom">
              <button 
                type="submit" 
                className={`btn btn-primary w-100 ${isSearching ? 'loading' : ''}`}
                disabled={isSearching}
              >
                {isSearching ? (
                  <>
                    <span className="spinner"></span>
                    Searching...
                  </>
                ) : (
                  <>
                    <Search size={18} />
                    Check Availability
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
