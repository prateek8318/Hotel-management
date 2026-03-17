import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import './RoomCard.css';

interface RoomCardProps {
  roomId: string;
  image: string;
  title: string;
  subtitle?: string;
  price: number;
  features: string[];
  icon?: React.ReactNode;
  special?: string;
}

const RoomCard: React.FC<RoomCardProps> = ({ 
  roomId,
  image, 
  title, 
  subtitle, 
  price, 
  features, 
  icon, 
  special 
}) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/booking?roomId=${roomId}`);
  };

  const handleViewDetails = () => {
    navigate(`/rooms/${roomId}`);
  };

  return (
    <div className="room-card">
      <div className="room-image-container">
        <img src={image} alt={title} className="room-image" onError={(e) => {
          // Fallback image if original fails
          e.currentTarget.src = 'https://images.unsplash.com/photo-1564013799919-6005772337ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
        }} />
        <div className="room-badge">
          {icon}
          <span>{special}</span>
        </div>
        <div className="room-price">
          <span className="price-currency">₹</span>
          <span className="price-amount">{price.toLocaleString('en-IN')}</span>
          <span className="price-period">/night</span>
        </div>
      </div>
      
      <div className="room-content">
        <div className="room-header">
          <h3 className="room-title">{title}</h3>
          {subtitle && <p className="room-subtitle">{subtitle}</p>}
        </div>
        
        <div className="room-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className={i < 4 ? 'star-filled' : 'star-empty'} />
            ))}
          </div>
          <span className="rating-text">4.8 (324 reviews)</span>
        </div>
        
        <ul className="room-features">
          {features.slice(0, 4).map((feature, index) => (
            <li key={index} className="feature-item">
              <span className="feature-check">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="room-actions">
          <button className="btn btn-primary room-btn-primary" onClick={handleBookNow}>
            Book Now
          </button>
          <button className="btn btn-outline room-btn-outline" onClick={handleViewDetails}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
