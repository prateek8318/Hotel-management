import React from 'react';
import FeaturedRooms from '../rooms/FeaturedRooms';
import Hero from './Hero';
import Services from './Services';
import Gallery from './Gallery';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <Services />
      <FeaturedRooms />
      <Gallery />
    </div>
  );
};

export default Home;
