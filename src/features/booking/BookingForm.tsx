import React from 'react';
import './BookingForm.css';

const BookingForm: React.FC = () => {
  return (
    <div className="booking-section">
      <div className="container">
        <div className="booking-form-wrapper glass shadow-lg">
          <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="checkin">Check-in</label>
              <input type="date" id="checkin" className="form-control" />
            </div>
            
            <div className="form-group">
              <label htmlFor="checkout">Check-out</label>
              <input type="date" id="checkout" className="form-control" />
            </div>
            
            <div className="form-group">
              <label htmlFor="adults">Adults</label>
              <select id="adults" className="form-control">
                <option value="1">1 Adult</option>
                <option value="2" selected>2 Adults</option>
                <option value="3">3 Adults</option>
                <option value="4">4 Adults</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="children">Children</label>
              <select id="children" className="form-control">
                <option value="0">0 Children</option>
                <option value="1">1 Child</option>
                <option value="2">2 Children</option>
              </select>
            </div>
            
            <div className="form-group align-bottom">
              <button type="button" className="btn btn-primary w-100">Check Availability</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
