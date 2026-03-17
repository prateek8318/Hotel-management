import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Testimonials from './Testimonials';
import Gallery from './Gallery';
import BookingForm from '../booking/BookingForm';
import FeaturedRooms from '../rooms/FeaturedRooms';
import Contact from '../contact/Contact';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Hero />
      <Services />
      <FeaturedRooms />
      <Gallery />
      <Testimonials />
      <BookingForm />
      <Contact />
    </div>
  );
};

export default Home;
