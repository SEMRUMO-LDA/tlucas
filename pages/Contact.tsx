
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-brand-antiFlashWhite pb-24">
      <section className="bg-brand-darkGreen py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Book your next ride or ask us a question. We're available 24/7 to assist you.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Side */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-darkGreen mb-8">Contact Info</h3>
              <div className="space-y-6">
                <a href="https://wa.me/351967910227" target="_blank" rel="noopener noreferrer" className="flex gap-4 group/item">
                  <div className="p-3 bg-brand-softGreen text-brand-caribbeanGreen rounded-2xl h-fit group-hover/item:bg-brand-darkGreen group-hover/item:text-brand-greenYellow transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">Phone / WhatsApp</p>
                    <p className="font-bold text-brand-darkGreen group-hover/item:text-brand-caribbeanGreen transition-colors">+351 967 910 227</p>
                  </div>
                </a>
                <a href="mailto:info@tlucas.pt" className="flex gap-4 group/item">
                  <div className="p-3 bg-brand-softGreen text-brand-caribbeanGreen rounded-2xl h-fit group-hover/item:bg-brand-darkGreen group-hover/item:text-brand-greenYellow transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">Email</p>
                    <p className="font-bold text-brand-darkGreen group-hover/item:text-brand-caribbeanGreen transition-colors">info@tlucas.pt</p>
                  </div>
                </a>
                <div className="flex gap-4">
                  <div className="p-3 bg-brand-softGreen text-brand-caribbeanGreen rounded-2xl h-fit">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">Office</p>
                    <p className="font-bold text-brand-darkGreen">Costa Vicentina & Algarve, Portugal</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <a
                  href="https://wa.me/351967910227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-opacity"
                >
                  <MessageCircle size={24} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-brand-greenYellow p-8 rounded-3xl">
              <h4 className="font-bold text-brand-darkGreen mb-2">Office Hours</h4>
              <p className="text-sm text-brand-darkGreen/70">While our office is open Mon-Fri 09:00 - 18:00, our drivers and support line operate 24/7 for confirmed bookings.</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 rounded-[40px] shadow-xl border border-gray-100">
              {submitted ? (
                <div className="py-20 text-center animate-in zoom-in-95 duration-500">
                  <div className="w-20 h-20 bg-brand-softGreen text-brand-caribbeanGreen rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-brand-darkGreen mb-4">Request Received!</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thank you for contacting t.lucas. Our team will review your request and get back to you shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 text-brand-caribbeanGreen font-bold underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-gray-50 border-gray-200 rounded-xl py-4 px-6 outline-none focus:ring-2 focus:ring-brand-caribbeanGreen"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-gray-50 border-gray-200 rounded-xl py-4 px-6 outline-none focus:ring-2 focus:ring-brand-caribbeanGreen"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Service Type</label>
                      <select className="w-full bg-gray-50 border-gray-200 rounded-xl py-4 px-6 outline-none focus:ring-2 focus:ring-brand-caribbeanGreen">
                        <option>Airport Transfer</option>
                        <option>Private Tour</option>
                        <option>Business Trip</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Phone Number</label>
                      <input
                        required
                        type="tel"
                        placeholder="+351 --- --- ---"
                        className="w-full bg-gray-50 border-gray-200 rounded-xl py-4 px-6 outline-none focus:ring-2 focus:ring-brand-caribbeanGreen"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Your Message / Booking Details</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please tell us your flight number, date, and any special requests..."
                      className="w-full bg-gray-50 border-gray-200 rounded-xl py-4 px-6 outline-none focus:ring-2 focus:ring-brand-caribbeanGreen"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-darkGreen text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-brand-smokyBlack transition-all"
                  >
                    Send Request
                    <Send size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="h-[400px] bg-gray-200 rounded-[40px] overflow-hidden relative border border-gray-300">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">
            Interactive Map Placeholder
          </div>
          {/* In a real app, an iframe for Google Maps would go here */}
          <img src="https://picsum.photos/seed/map-faro/1200/400?grayscale" className="w-full h-full object-cover opacity-30" alt="Map Area" />
        </div>
      </section>
    </div>
  );
};

export default Contact;
