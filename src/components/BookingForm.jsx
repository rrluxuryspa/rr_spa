import React, { useState } from 'react';
import { SERVICES, SPA_INFO } from '../data/spaData';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, Sparkles, CheckCircle2, X } from 'lucide-react';

export default function BookingForm({ isModal = false, onClose = () => {}, preselectedService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: preselectedService || SERVICES[0].name,
    date: new Date().toISOString().split('T')[0],
    time: '11:00 AM',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const refId = 'RR-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(refId);
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: SERVICES[0].name,
      date: new Date().toISOString().split('T')[0],
      time: '11:00 AM',
      notes: ''
    });
    if (isModal) {
      onClose();
    }
  };

  const formContent = (
    <div className="relative">
      {submitted ? (
        <div className="bg-white p-8 rounded-3xl border border-amber-400 text-center flex flex-col items-center gap-4 animate-fadeIn shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-amber-100 border-2 border-amber-500 flex items-center justify-center text-amber-900 mb-2 shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h3 className="font-serif text-2xl md:text-3xl text-gold-gradient font-bold">
            Appointment Request Confirmed!
          </h3>

          <p className="text-slate-700 text-sm max-w-md font-medium">
            Thank you, <strong className="text-amber-900">{formData.name}</strong>! Your appointment request for <strong className="text-slate-900">{formData.service}</strong> has been received.
          </p>

          <div className="bg-amber-50/80 p-5 rounded-2xl border border-amber-300 w-full max-w-md my-2 text-left text-xs space-y-2.5 shadow-sm">
            <div className="flex justify-between border-b border-amber-200 pb-2">
              <span className="text-slate-600 font-medium">Booking Reference:</span>
              <span className="font-mono font-extrabold text-amber-900">{bookingRef}</span>
            </div>
            <div className="flex justify-between border-b border-amber-200 pb-2">
              <span className="text-slate-600 font-medium">Date & Time:</span>
              <span className="font-bold text-slate-900">{formData.date} at {formData.time}</span>
            </div>
            <div className="flex justify-between border-b border-amber-200 pb-2">
              <span className="text-slate-600 font-medium">Selected Service:</span>
              <span className="font-bold text-amber-900">{formData.service}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 font-medium">Location:</span>
              <span className="font-bold text-slate-800">RR Luxury Spa, Manikonda</span>
            </div>
          </div>

          <p className="text-xs text-slate-600">
            Our spa representative will call you shortly at <strong className="text-slate-900">{formData.phone}</strong> to confirm your therapist and suite preparation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
            <a
              href={`https://wa.me/${SPA_INFO.whatsapp}?text=Hi%20RR%20Luxury%20Spa,%20I%20just%20booked%20an%20appointment%20(Ref:%20${bookingRef})%20for%20${encodeURIComponent(formData.service)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <span>Confirm on WhatsApp</span>
            </a>

            <button
              onClick={resetForm}
              className="px-6 py-3 rounded-xl bg-gold-gradient text-slate-950 font-bold text-xs shadow-md transition-all hover:scale-105"
            >
              Book Another
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-900 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300">
              Get In Touch & Reserve
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-gold-gradient font-bold mt-2">
              Book Your Luxury Session
            </h3>
            <p className="text-xs text-slate-600 mt-1 font-medium">
              Select your preferred service, date and time. We will prepare your suite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">Your Name *</label>
              <div className="relative">
                <User className="w-4 h-4 text-amber-800 absolute left-3 top-3.5" />
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-amber-300 text-slate-900 text-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-500 shadow-sm transition-all"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">Phone Number *</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-amber-800 absolute left-3 top-3.5" />
                <input
                  type="tel"
                  required
                  placeholder="e.g. 91000 07856"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-amber-300 text-slate-900 text-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-500 shadow-sm transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Service Selection Dropdown */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">Select Service *</label>
              <div className="relative">
                <Sparkles className="w-4 h-4 text-amber-800 absolute left-3 top-3.5" />
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-amber-300 text-slate-900 text-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-500 shadow-sm transition-all appearance-none cursor-pointer"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.name} className="bg-white text-slate-900">
                      {s.name} ({s.price})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">Email Address (Optional)</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-amber-800 absolute left-3 top-3.5" />
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-amber-300 text-slate-900 text-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-500 shadow-sm transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Preferred Date */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">Preferred Date *</label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-amber-800 absolute left-3 top-3.5" />
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-amber-300 text-slate-900 text-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-500 shadow-sm transition-all cursor-pointer"
                />
              </div>
            </div>

            {/* Preferred Time */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">Preferred Time Slot *</label>
              <div className="relative">
                <Clock className="w-4 h-4 text-amber-800 absolute left-3 top-3.5" />
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-amber-300 text-slate-900 text-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-500 shadow-sm transition-all appearance-none cursor-pointer"
                >
                  {['10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM', '08:00 PM'].map((t) => (
                    <option key={t} value={t} className="bg-white text-slate-900">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Notes / Requests */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1">Special Requests / Notes</label>
            <div className="relative">
              <MessageSquare className="w-4 h-4 text-amber-800 absolute left-3 top-3.5" />
              <textarea
                rows={2}
                placeholder="Mention any specific pressure preferences, therapist gender requirement, or jacuzzi add-on..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-amber-300 text-slate-900 text-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-500 shadow-sm transition-all resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gold-gradient text-slate-950 font-extrabold text-base border border-amber-400 hover:shadow-xl hover:shadow-spa-gold/30 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 mt-4"
          >
            <Sparkles className="w-5 h-5 fill-slate-950" />
            <span>Confirm Appointment Reservation</span>
          </button>
        </form>
      )}
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-fadeIn">
        <div className="relative w-full max-w-2xl bg-white border-2 border-amber-300 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-amber-900 hover:text-slate-950 rounded-full bg-amber-50 border border-amber-300 hover:border-amber-500 transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          {formContent}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-amber-300/80 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      {formContent}
    </div>
  );
}
