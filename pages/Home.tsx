
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Award, Star, ArrowRight, MousePointer2, CalendarCheck2, Ship, MapPin, Map } from 'lucide-react';
import TravelAssistant from '../components/TravelAssistant';

const Home: React.FC = () => {
  const popularRoutes = [
    { from: "Faro Airport", to: "Albufeira", price: "Starting €45", time: "40 min" },
    { from: "Faro Airport", to: "Vilamoura", price: "Starting €35", time: "25 min" },
    { from: "Faro Airport", to: "Lagos", price: "Starting €90", time: "65 min" },
    { from: "Faro Airport", to: "Quinta do Lago", price: "Starting €30", time: "20 min" },
  ];

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Premium Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-brand-darkGreen overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Updated Hero Image: Iconic Algarve Landmark */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1585614981447-7505a7679313?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-20 scale-105 transform hover:scale-100 transition-transform duration-[10000ms]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-darkGreen via-brand-darkGreen/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="grid grid-cols-1 lg:col-span-7 text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-brand-greenYellow/10 border border-brand-greenYellow/20 rounded-full w-fit">
                <div className="w-2 h-2 bg-brand-greenYellow rounded-full animate-pulse"></div>
                <span className="text-brand-greenYellow text-xs font-bold uppercase tracking-widest">Premium Service in Algarve</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black leading-[0.95] mb-8 tracking-tighter">
                ELEGANT <br />
                <span className="text-brand-greenYellow italic">TRANSFERS</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl font-medium">
                Professional chauffeur services for discerning travelers. Experience the ultimate comfort from Faro Airport to your private destination.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-brand-greenYellow text-brand-darkGreen px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white transition-all shadow-2xl shadow-brand-greenYellow/20 flex items-center gap-3 group">
                  Book Your Transfer
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex -space-x-3 items-center ml-4">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-brand-darkGreen" alt="Client" />
                  ))}
                  <div className="pl-6">
                    <div className="flex text-brand-greenYellow">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">5.0 rated by 2k+ guests</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative z-10 scale-105 lg:scale-110">
                <TravelAssistant />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-greenYellow/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-caribbeanGreen/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black text-brand-caribbeanGreen uppercase tracking-[0.4em] mb-4">The Experience</h2>
            <h3 className="text-4xl md:text-5xl font-black text-brand-darkGreen tracking-tighter">Effortless From Start to Finish</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ProcessStep 
              number="01"
              icon={<MousePointer2 className="text-brand-darkGreen" size={32} />}
              title="Easy Online Booking"
              description="Choose your destination, vehicle type, and schedule. Instant confirmation sent to your email."
            />
            <ProcessStep 
              number="02"
              icon={<CalendarCheck2 className="text-brand-darkGreen" size={32} />}
              title="Professional Meet & Greet"
              description="Your driver will be waiting at arrivals with a personalized sign, helping you with all your luggage."
            />
            <ProcessStep 
              number="03"
              icon={<Ship className="text-brand-darkGreen" size={32} />}
              title="Enjoy a Premium Ride"
              description="Relax in our climate-controlled, modern fleet with complimentary water and Wi-Fi on board."
            />
          </div>
        </div>
      </section>

      {/* Popular Routes - "The Best Sellers" */}
      <section className="py-24 bg-brand-softGreen/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-xs font-black text-brand-caribbeanGreen uppercase tracking-[0.4em] mb-4">Fast Links</h2>
              <h3 className="text-4xl font-black text-brand-darkGreen tracking-tighter">Most Requested Destinations</h3>
            </div>
            <Link to="/transfers" className="text-brand-darkGreen font-bold flex items-center gap-2 border-b-2 border-brand-greenYellow pb-1 hover:text-brand-caribbeanGreen transition-colors">
              See all destinations <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularRoutes.map((route, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group cursor-pointer">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-brand-softGreen text-brand-caribbeanGreen rounded-2xl">
                    <MapPin size={24} />
                  </div>
                  <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">{route.time}</span>
                </div>
                <h4 className="text-lg font-black text-brand-darkGreen mb-1">{route.to}</h4>
                <p className="text-xs text-gray-500 mb-6 uppercase tracking-wider font-bold">From {route.from}</p>
                <div className="pt-6 border-t border-gray-50 flex justify-between items-center">
                  <span className="text-brand-caribbeanGreen font-black">{route.price}</span>
                  <div className="w-8 h-8 rounded-full bg-brand-darkGreen flex items-center justify-center text-white group-hover:bg-brand-greenYellow group-hover:text-brand-darkGreen transition-colors">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-brand-darkGreen border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 items-center opacity-70">
            <div className="flex items-center gap-4 text-white grayscale hover:grayscale-0 transition-all cursor-default">
              <ShieldCheck size={40} className="text-brand-greenYellow" />
              <div>
                <p className="text-sm font-black uppercase tracking-widest">Safe & Insured</p>
                <p className="text-[10px] text-gray-400 uppercase">Licensed Operators</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white grayscale hover:grayscale-0 transition-all cursor-default">
              <Clock size={40} className="text-brand-greenYellow" />
              <div>
                <p className="text-sm font-black uppercase tracking-widest">Punctual Service</p>
                <p className="text-[10px] text-gray-400 uppercase">Real-time tracking</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white grayscale hover:grayscale-0 transition-all cursor-default">
              <Award size={40} className="text-brand-greenYellow" />
              <div>
                <p className="text-sm font-black uppercase tracking-widest">Premium Fleet</p>
                <p className="text-[10px] text-gray-400 uppercase">Mercedes Equiv.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white grayscale hover:grayscale-0 transition-all cursor-default">
              <Map size={40} className="text-brand-greenYellow" />
              <div>
                <p className="text-sm font-black uppercase tracking-widest">Local Experts</p>
                <p className="text-[10px] text-gray-400 uppercase">Deep Route Knowledge</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[40px] bg-brand-caribbeanGreen p-12 md:p-20 overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-greenYellow rounded-full blur-3xl opacity-30"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-6xl font-black text-brand-darkGreen mb-6 tracking-tighter">Arrive in <br />Class.</h2>
                <p className="text-brand-darkGreen/80 text-xl font-medium max-w-sm">No wait times. No stress. Just premium transport at fixed prices.</p>
              </div>
              <div className="flex flex-col gap-4 w-full md:w-auto">
                <Link to="/contact" className="bg-brand-darkGreen text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-brand-smokyBlack transition-all shadow-xl text-center">
                  Book Now
                </Link>
                <p className="text-center text-[10px] font-black uppercase tracking-widest text-brand-darkGreen/50">Free cancellation up to 24h before</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProcessStep: React.FC<{ number: string; icon: React.ReactNode; title: string; description: string }> = ({ number, icon, title, description }) => (
  <div className="relative pt-12">
    <span className="absolute top-0 left-0 text-7xl font-black text-brand-softGreen select-none -z-0">{number}</span>
    <div className="relative z-10">
      <div className="mb-8 p-6 bg-brand-softGreen/50 rounded-3xl w-fit shadow-inner">{icon}</div>
      <h4 className="text-2xl font-black text-brand-darkGreen mb-4 tracking-tight">{title}</h4>
      <p className="text-gray-500 leading-relaxed font-medium">{description}</p>
    </div>
  </div>
);

export default Home;
