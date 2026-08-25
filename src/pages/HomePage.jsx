import React from 'react';
import BannerCarousel from '../components/BannerCarousel';
import LearnAboutUsSection from '../components/LearnAboutUsSection';
import SpaVideoSection from '../components/SpaVideoSection';
import GalleryCarouselSection from '../components/GalleryCarouselSection';

export default function HomePage({ setActivePage, onOpenBooking, onSelectService }) {
  return (
    <div className="min-h-screen pt-20 bg-spa-light">
      
      {/* 1. HERO BANNER CAROUSEL BELOW NAVBAR */}
      <BannerCarousel onOpenBooking={onOpenBooking} />

      {/* 2. LEARN ABOUT US SECTION ("WE HAVE 10+ YEARS OF EXPERIENCE") */}
      <LearnAboutUsSection onOpenBooking={onOpenBooking} />

      {/* 3. SPA VIDEO SECTION DIRECTLY BELOW EXPERIENCE SECTION */}
      <SpaVideoSection />

      {/* 4. RR LUXURY SPA GALLERY CAROUSEL (PURE CLEAN PHOTOS) */}
      <GalleryCarouselSection />

    </div>
  );
}
