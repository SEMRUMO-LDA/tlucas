
import React from 'react';
import { Plane, Building2, Map, Users, Coffee, CalendarCheck, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Transfers: React.FC = () => {
  const services = [
    {
      title: "Airport Transfers",
      icon: <Plane size={32} />,
      description: "Direct door-to-door service between Faro Airport and your destination. We track your flight details for precise pickups.",
      details: ["Personalized sign at arrivals", "60 mins complimentary waiting", "Bottled water on board"]
    },
    {
      title: "Hotel & Resort Connections",
      icon: <Building2 size={32} />,
      description: "Seamless travel between hotels, marinas, and golf courses across the Algarve. Safe, clean, and always on time.",
      details: ["Baggage assistance", "Fixed competitive pricing", "Available 24/7/365"]
    },
    {
      title: "Golf & Sports Gear",
      icon: <Map size={32} />,
      description: "We cater specifically to golf groups with extra space for equipment and tailored multi-day transport packages.",
      details: ["Extra luggage capacity", "Group coordination", "Flexible pickup times"]
    },
    {
      title: "Corporate & Executive",
      icon: <Coffee size={32} />,
      description: "Professional transport for business visitors. Clean, black-car feel with discreet, multi-lingual drivers.",
      details: ["Billing for companies", "Quiet on-board environment", "Last-minute availability"]
    },
    {
      title: "Sightseeing Tours",
      icon: <CalendarCheck size={32} />,
      description: "Customized private tours of the Algarve. See the caves, cliffs, and mountain villages at your own pace.",
      details: ["Local driver guide", "Flexible itineraries", "Private group safety"]
    },
    {
      title: "Special Events",
      icon: <Users size={32} />,
      description: "Wedding transport, wedding parties, and group events coordinated by our professional dispatchers.",
      details: ["Multiple vehicle sync", "Event logistics support", "Late night shuttles"]
    }
  ];

  return (
    <div className="bg-brand-antiFlashWhite pb-24">
      <section className="bg-brand-darkGreen py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">Our Services</h1>
          <p className="text-xl text-brand-greenYellow/80 max-w-2xl mx-auto font-bold uppercase tracking-widest">
            Premium Transport Solutions for Every Journey
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-12 rounded-[40px] border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all group">
              <div className="p-5 bg-brand-softGreen text-brand-caribbeanGreen rounded-3xl w-fit mb-10 group-hover:bg-brand-darkGreen group-hover:text-brand-greenYellow transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-brand-darkGreen mb-4 tracking-tight uppercase">{service.title}</h3>
              <p className="text-gray-500 mb-8 leading-relaxed font-medium">{service.description}</p>
              
              <ul className="space-y-4 mb-12">
                {service.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-center gap-3 text-xs font-bold text-gray-700 uppercase tracking-widest">
                    <div className="p-1 bg-brand-caribbeanGreen/10 rounded-full">
                      <Check size={12} className="text-brand-caribbeanGreen" />
                    </div>
                    {detail}
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact" 
                className="w-full flex items-center justify-center gap-2 bg-brand-darkGreen text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-caribbeanGreen transition-all group"
              >
                Inquire Service <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Guarantee */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-white p-12 rounded-[50px] border border-brand-greenYellow/30 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-2 h-full bg-brand-greenYellow"></div>
          <h2 className="text-3xl font-black text-brand-darkGreen mb-6 tracking-tighter">Why Choose t.lucas?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            <div>
              <p className="text-brand-caribbeanGreen font-black text-sm uppercase mb-2">Transparent</p>
              <p className="text-gray-500 text-xs font-medium">Fixed prices with no hidden fees or extra charges for baggage.</p>
            </div>
            <div>
              <p className="text-brand-caribbeanGreen font-black text-sm uppercase mb-2">Reliable</p>
              <p className="text-gray-500 text-xs font-medium">Flight monitoring and personalized greet-at-gate included.</p>
            </div>
            <div>
              <p className="text-brand-caribbeanGreen font-black text-sm uppercase mb-2">Comfortable</p>
              <p className="text-gray-500 text-xs font-medium">Clean, modern Mercedes-equivalent vehicles for every group.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transfers;
