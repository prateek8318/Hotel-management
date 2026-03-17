import React from 'react';
import FeaturedRooms from './FeaturedRooms';
import './Rooms.css';

const Rooms: React.FC = () => {
  return (
    <div className="rooms-page">
      <div className="container">
        <div className="rooms-header">
          <h1>Rooms & Suites</h1>
          <p>Experience luxury and comfort in our elegantly designed accommodations</p>
        </div>
        <FeaturedRooms />
      </div>
    </div>
  );
};

export default Rooms;
