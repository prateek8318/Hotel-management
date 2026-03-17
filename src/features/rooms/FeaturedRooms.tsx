import React from 'react';
import RoomCard from './RoomCard';
import { Sparkles, Crown, Gem } from 'lucide-react';
import { roomsData } from '../../data/roomsData';
import './FeaturedRooms.css';

const getIconForSpecial = (special?: string) => {
  if (special?.includes('Popular') || special?.includes('Luxury')) return <Crown size={20} />;
  if (special?.includes('Perfect') || special?.includes('Choice')) return <Gem size={20} />;
  return <Sparkles size={20} />;
};

const FeaturedRooms: React.FC = () => {
  return (
    <section className="featured-rooms" id="rooms">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={16} />
            <span>Luxury Indian Suites</span>
          </div>
          <h2 className="section-title">Experience Royal Hospitality</h2>
          <p className="section-subtitle">
            Immerse yourself in the grandeur of Indian royalty with our meticulously designed suites. 
            Each room tells a story of India's rich heritage while offering modern luxury.
          </p>
        </div>
        
        <div className="rooms-grid">
          {roomsData.map(room => (
            <RoomCard 
              key={room.id}
              roomId={room.id}
              image={room.images[0]}
              title={room.name}
              subtitle={room.type}
              price={room.price}
              features={room.features.slice(0, 4)}
              icon={getIconForSpecial(room.special)}
              special={room.special}
            />
          ))}
        </div>
        
        <div className="view-all-container">
          <a href="#all-rooms" className="btn btn-primary btn-lg">Explore All 25+ Suites</a>
          <a href="#contact" className="btn btn-outline btn-lg">Request Custom Suite</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;
