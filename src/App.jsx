import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedPreselectedService, setSelectedPreselectedService] = useState('');

  const handleOpenBooking = (serviceName = '') => {
    setSelectedPreselectedService(serviceName);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-spa-light text-slate-900 flex flex-col justify-between selection:bg-amber-400 selection:text-slate-950">
      
      {/* Top Navbar */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <HomePage 
            setActivePage={setActivePage}
            onOpenBooking={handleOpenBooking}
            onSelectService={(serviceName) => handleOpenBooking(serviceName)}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage 
            onOpenBooking={(serviceName) => handleOpenBooking(serviceName)}
            selectedPreselectedService={selectedPreselectedService}
          />
        )}

        {activePage === 'about' && (
          <AboutPage 
            setActivePage={setActivePage}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage 
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
      </main>

      {/* Booking Form Modal Overlay */}
      {isBookingModalOpen && (
        <BookingForm
          isModal={true}
          preselectedService={selectedPreselectedService}
          onClose={() => setIsBookingModalOpen(false)}
        />
      )}

      {/* Footer */}
      <Footer 
        activePage={activePage} 
        setActivePage={setActivePage}
        onOpenBooking={() => handleOpenBooking()}
      />

    </div>
  );
}
