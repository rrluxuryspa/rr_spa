import React from 'react';
import BannerCarousel from '../components/BannerCarousel';
import ServicesCarouselSection from '../components/ServicesCarouselSection';
import LearnAboutUsSection from '../components/LearnAboutUsSection';
import GalleryCarouselSection from '../components/GalleryCarouselSection';
import { Phone, ShieldCheck, Users } from 'lucide-react';
import { SPA_INFO } from '../data/spaData';

export default function HomePage({ setActivePage, onOpenBooking, onSelectService }) {
  return (
    <div className="min-h-screen pt-20 bg-spa-light">
      
      {/* 1. HERO BANNER CAROUSEL BELOW NAVBAR */}
      <BannerCarousel onOpenBooking={onOpenBooking} />

      {/* 2. OUR SERVICES SECTION */}
      <ServicesCarouselSection onOpenBooking={onOpenBooking} />

      {/* 3. LEARN ABOUT US SECTION */}
      <LearnAboutUsSection onOpenBooking={onOpenBooking} />

      {/* 4. RR LUXURY SPA GALLERY CAROUSEL (PURE CLEAN PHOTOS) */}
      <GalleryCarouselSection />

    </div>
  );
}
