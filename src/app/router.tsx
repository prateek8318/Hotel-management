import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../features/home/pages/Home';
import Rooms from '../features/rooms/pages/Rooms';
import RoomDetails from '../features/rooms/pages/RoomDetails';
import Booking from '../features/booking/pages/Booking';
import Dining from '../features/dining/pages/Dining';
import Wellness from '../features/wellness/pages/Wellness';
import Events from '../features/events/pages/Events';
import Contact from '../features/contact/pages/Contact';
import { Navbar } from '../components/layout/Navbar/Navbar';
import { Footer } from '../components/layout/Footer/Footer';
import { ROUTES } from './routes';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.ROOMS} element={<Rooms />} />
            <Route path={ROUTES.ROOM_DETAILS} element={<RoomDetails />} />
            <Route path={ROUTES.BOOKING} element={<Booking />} />
            <Route path={ROUTES.DINING} element={<Dining />} />
            <Route path={ROUTES.WELLNESS} element={<Wellness />} />
            <Route path={ROUTES.EVENTS} element={<Events />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
