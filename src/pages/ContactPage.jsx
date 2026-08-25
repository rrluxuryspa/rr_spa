import React from 'react';
import { SPA_INFO } from '../data/spaData';
import BookingForm from '../components/BookingForm';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, Navigation, Calendar } from 'lucide-react';

export default function ContactPage({ onOpenBooking }) {
  return (
    <div className="min-h-screen pt-20 bg-spa-light">
      
      {/* 1. CUSTOM CONTACT US HERO BANNER IMAGE (ENTIRELY FILLS BANNER AREA PERFECTLY) */}
      <section className="relative w-full overflow-hidden bg-white border-b border-amber-300 shadow-md">
        <div className="relative w-full aspect-[16/9] sm:aspect-[1.85/1] max-h-[640px] bg-amber-50 cursor-pointer group" onClick={() => onOpenBooking && onOpenBooking()}>
          <img
            src="/contact_banner.jpg"
            alt="Contact Us - RR LUXURY SPA"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          {/* Overlay Trigger for Booking */}
          <div className="absolute inset-0 z-10 flex items-end justify-start max-w-7xl mx-auto px-6 sm:px-12 pb-8 sm:pb-14 pointer-events-none">
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onOpenBooking) onOpenBooking();
              }}
              className="pointer-events-auto opacity-0 hover:opacity-100 transition-opacity inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-gradient text-slate-950 font-extrabold text-xs sm:text-sm border border-amber-400 shadow-xl"
              title="Click to Book Appointment"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK APPOINTMENT NOW</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. GET IN TOUCH FORM AND BESIDE THAT ADD MAP OF THE ADDRESS */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Get In Touch Form (7 cols) */}
            <div className="lg:col-span-7">
              <BookingForm />
            </div>

            {/* Right Column: Address Map & Contact Details Card (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Contact Info Card */}
              <div className="p-6 rounded-3xl bg-white border-2 border-amber-300/80 shadow-xl flex flex-col gap-5">
                
                <h3 className="font-serif text-2xl font-bold text-gold-gradient">
                  Location & Info
                </h3>

                <div className="space-y-4 text-slate-800 text-xs sm:text-sm">
                  
                  {/* Address */}
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-amber-50/80 border border-amber-300">
                    <MapPin className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-amber-900 text-xs uppercase tracking-wider mb-0.5 font-bold">Address</strong>
                      <p className="leading-relaxed text-slate-800 font-medium">{SPA_INFO.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-amber-50/80 border border-amber-300">
                    <Phone className="w-5 h-5 text-amber-800 shrink-0" />
                    <div>
                      <strong className="block text-amber-900 text-xs uppercase tracking-wider mb-0.5 font-bold">Phone Number</strong>
                      <a href={`tel:${SPA_INFO.rawPhone}`} className="text-base font-extrabold text-slate-950 hover:text-amber-900 transition-colors">
                        +91 91000 07856
                      </a>
                    </div>
                  </div>

                  {/* Timings */}
                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-amber-50/80 border border-amber-300">
                    <Clock className="w-5 h-5 text-amber-800 shrink-0" />
                    <div>
                      <strong className="block text-amber-900 text-xs uppercase tracking-wider mb-0.5 font-bold">Operating Hours</strong>
                      <span className="text-slate-950 font-bold">{SPA_INFO.timings}</span>
                    </div>
                  </div>

                  {/* Direct WhatsApp Chat Action */}
                  <a
                    href={`https://wa.me/${SPA_INFO.whatsapp}?text=Hi%20RR%20Luxury%20Spa,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat With Us On WhatsApp</span>
                  </a>

                </div>

              </div>

              {/* Beside that Map of the Address of that Spa */}
              <div className="rounded-3xl overflow-hidden border-2 border-amber-300 shadow-xl bg-white flex flex-col">
                <div className="p-4 bg-amber-50 border-b border-amber-300 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-amber-900">
                    <Navigation className="w-4 h-4" />
                    <span>Manikonda Location Map</span>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SPA_INFO.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-amber-900 hover:underline flex items-center gap-1 font-bold"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Google Maps Embed iframe */}
                <div className="relative h-[320px] w-full">
                  <iframe
                    title="RR LUXURY SPA Location Map"
                    src={SPA_INFO.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="filter contrast-105"
                  />
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
