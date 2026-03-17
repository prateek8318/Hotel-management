import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Bed, Users, Maximize2, Wifi, Car, Coffee, Dumbbell, Heart, Utensils, Check } from 'lucide-react';
import { roomsData } from '../../data/roomsData';
import './RoomDetails.css';

const RoomDetails: React.FC = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  
  const room = roomsData.find(r => r.id === roomId);

  if (!room) {
    return (
      <div className="container text-center py-5">
        <h2>Room Not Found</h2>
        <p>The room you're looking for doesn't exist.</p>
        <button className="btn btn-primary mt-3" onClick={() => navigate('/rooms')}>
          Back to Rooms
        </button>
      </div>
    );
  }

  const handleBookNow = () => {
    navigate(`/booking?roomId=${room.id}`);
  };

  const generalAmenities = [
    { icon: <Wifi size={20} />, name: 'High-Speed WiFi' },
    { icon: <Car size={20} />, name: 'Free Parking' },
    { icon: <Coffee size={20} />, name: 'Coffee Shop' },
    { icon: <Dumbbell size={20} />, name: 'Fitness Center' },
    { icon: <Heart size={20} />, name: 'Spa & Wellness' },
    { icon: <Utensils size={20} />, name: 'Restaurant' }
  ];

  return (
    <div className="room-details">
      <div className="container">
        {/* Image Gallery */}
        <div className="room-gallery">
          <div className="main-image">
            <img 
              src={room.images[selectedImage]} 
              alt={room.name}
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1564013799919-6005772337ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
              }}
            />
          </div>
          <div className="image-thumbnails">
            {room.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${room.name} ${index + 1}`}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1564013799919-6005772337ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                }}
              />
            ))}
          </div>
        </div>

        {/* Room Information */}
        <div className="room-info">
          <div className="room-header">
            <div className="room-title-section">
              <h1>{room.name}</h1>
              <p className="room-type">{room.type}</p>
              {room.special && <span className="special-badge">{room.special}</span>}
            </div>
            
            <div className="room-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className={i < Math.floor(room.rating) ? 'star-filled' : 'star-empty'} />
                ))}
              </div>
              <span className="rating-text">{room.rating} ({room.reviews} reviews)</span>
            </div>
          </div>

          <div className="room-price">
            <span className="price-currency">₹</span>
            <span className="price-amount">{room.price.toLocaleString('en-IN')}</span>
            <span className="price-period">/night</span>
          </div>

          <p className="room-description">{room.description}</p>

          {/* Room Specifications */}
          <div className="room-specs">
            <div className="spec-item">
              <Maximize2 size={20} />
              <span>{room.size}</span>
            </div>
            <div className="spec-item">
              <Bed size={20} />
              <span>{room.bedType}</span>
            </div>
            <div className="spec-item">
              <Users size={20} />
              <span>Max {room.maxOccupancy} Guests</span>
            </div>
            <div className="spec-item">
              <span className="view-badge">{room.view}</span>
            </div>
          </div>

          {/* Room Features */}
          <div className="room-features">
            <h3>Room Features</h3>
            <ul>
              {room.features.map((feature, index) => (
                <li key={index}>
                  <Check size={16} className="feature-check" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Room Amenities */}
          <div className="room-amenities">
            <h3>Room Amenities</h3>
            <div className="amenities-grid">
              {room.amenities.map((amenity, index) => (
                <div key={index} className="amenity-item">
                  <Check size={16} className="amenity-check" />
                  {amenity}
                </div>
              ))}
            </div>
          </div>

          {/* General Hotel Amenities */}
          <div className="hotel-amenities">
            <h3>Hotel Amenities</h3>
            <div className="amenities-grid">
              {generalAmenities.map((amenity, index) => (
                <div key={index} className="amenity-item">
                  {amenity.icon}
                  {amenity.name}
                </div>
              ))}
            </div>
          </div>

          {/* Booking Section */}
          <div className="booking-section">
            <div className="booking-card">
              <div className="booking-price">
                <span className="price-currency">₹</span>
                <span className="price-amount">{room.price.toLocaleString('en-IN')}</span>
                <span className="price-period">/night</span>
              </div>
              <button className="btn btn-primary btn-large" onClick={handleBookNow}>
                Book Now
              </button>
              <p className="booking-note">Free cancellation up to 24 hours before check-in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
