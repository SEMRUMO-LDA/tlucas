
import React from 'react';
import { History, Target, Users, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-brand-antiFlashWhite">
      <section className="bg-brand-darkGreen pt-20 pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About t.lucas</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A legacy of excellence in personal transport, rooted in reliability and passenger satisfaction.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 pb-24">
        <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://picsum.photos/seed/tlucas-fleet/800/1000"
                alt="Our Fleet"
                className="rounded-3xl shadow-lg w-full object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-greenYellow p-8 rounded-3xl hidden md:block">
                <span className="block text-4xl font-bold text-brand-darkGreen">30+</span>
                <span className="text-xs uppercase font-bold tracking-widest text-brand-darkGreen/70">Years Experience</span>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-brand-darkGreen mb-4">Our Story</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Founded with a simple vision to provide high-quality transport solutions, t.lucas has grown from a single vehicle operation to a leading transfer provider. We understood early on that a transfer isn't just about getting from A to B—it's about the first and last impression of a journey.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Every driver in our team is hand-picked not just for their driving skills, but for their commitment to hospitality and local knowledge.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-2xl flex items-start gap-4">
                  <div className="p-3 bg-brand-softGreen text-brand-caribbeanGreen rounded-xl">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-darkGreen">Our Mission</h4>
                    <p className="text-sm text-gray-500 mt-2">To provide seamless, premium transport that simplifies travel for every passenger.</p>
                  </div>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl flex items-start gap-4">
                  <div className="p-3 bg-brand-softGreen text-brand-caribbeanGreen rounded-xl">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-darkGreen">Our Team</h4>
                    <p className="text-sm text-gray-500 mt-2">Professional, multi-lingual drivers committed to your comfort and safety.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-bold text-brand-darkGreen mb-4 underline decoration-brand-caribbeanGreen underline-offset-8">Our Core Values</h3>
                <ul className="space-y-3">
                  {['Integrity in every transaction', 'Uncompromising safety standards', 'Exceptional passenger comfort', 'Environmental responsibility'].map((val, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle2 size={18} className="text-brand-caribbeanGreen" />
                      {val}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet showcase */}
      <section className="py-24 bg-brand-darkGreen text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Our Premium Fleet</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">Modern, clean, and meticulously maintained vehicles for groups of all sizes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-smokyBlack rounded-3xl overflow-hidden group border border-white/5">
              <img src="https://picsum.photos/seed/sedan/600/400" alt="Executive Sedan" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-8">
                <h4 className="text-xl font-bold mb-2">Executive Sedan</h4>
                <p className="text-sm text-gray-400">Perfect for individuals or couples. Luggage capacity: 2 large + 2 small bags.</p>
              </div>
            </div>
            <div className="bg-brand-smokyBlack rounded-3xl overflow-hidden group border border-white/5">
              <img src="https://picsum.photos/seed/van/600/400" alt="Premium Van" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-8">
                <h4 className="text-xl font-bold mb-2">Premium Van</h4>
                <p className="text-sm text-gray-400">Ideal for families and groups up to 8 people. Spacious and comfortable.</p>
              </div>
            </div>
            <div className="bg-brand-smokyBlack rounded-3xl overflow-hidden group border border-white/5">
              <img src="https://picsum.photos/seed/minibus/600/400" alt="Mini Bus" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-8">
                <h4 className="text-xl font-bold mb-2">Private Mini Bus</h4>
                <p className="text-sm text-gray-400">Customized solutions for larger groups and events. Full climate control.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
