import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../features/home/Home';
import Rooms from '../../features/rooms/Rooms';
import RoomDetails from '../../features/rooms/RoomDetails';
import Booking from '../../features/booking/Booking';
import Dining from '../../features/dining/Dining';
import Wellness from '../../features/wellness/Wellness';
import Events from '../../features/events/Events';
import Contact from '../../features/contact/Contact';
import Navbar from './Navbar';
import Footer from './Footer';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/:roomId" element={<RoomDetails />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/wellness" element={<Wellness />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
