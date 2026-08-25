import React from 'react';
import BannerCarousel from '../components/BannerCarousel';
import WelcomeSection from '../components/WelcomeSection';
import LearnAboutUsSection from '../components/LearnAboutUsSection';
import FeelSpecialSection from '../components/FeelSpecialSection';
import SpaVideoSection from '../components/SpaVideoSection';
import TestimonialsSection from '../components/TestimonialsSection';
import GalleryCarouselSection from '../components/GalleryCarouselSection';

export default function HomePage({ setActivePage, onOpenBooking, onSelectService }) {
  return (
    <div className="min-h-screen pt-20 bg-spa-light">
      
      {/* 1. HERO BANNER CAROUSEL BELOW NAVBAR */}
      <BannerCarousel onOpenBooking={onOpenBooking} />

      {/* 2. WELCOME SECTION (NEW IMAGE ON LEFT) */}
      <WelcomeSection onOpenBooking={onOpenBooking} />

      {/* 3. LEARN ABOUT US SECTION ("WE HAVE 10+ YEARS OF EXPERIENCE") */}
      <LearnAboutUsSection onOpenBooking={onOpenBooking} />

      {/* 4. FEEL SPECIAL - MAKING YOU FEEL ROYAL SECTION */}
      <FeelSpecialSection onOpenBooking={onOpenBooking} />

      {/* 5. SPA VIDEO SECTION (FULL-BLEED BACKGROUND VIDEO) */}
      <SpaVideoSection />

      {/* 6. GUEST FEEDBACKS / TESTIMONIALS SECTION */}
      <TestimonialsSection />

      {/* 7. RR LUXURY SPA GALLERY CAROUSEL (PURE CLEAN PHOTOS) */}
      <GalleryCarouselSection />

    </div>
  );
}
