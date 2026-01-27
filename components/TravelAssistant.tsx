
import React, { useState } from 'react';
import { Sparkles, Car, Clock, Info, Send } from 'lucide-react';
import { getTravelAdvice } from '../services/geminiService';

const TravelAssistant: React.FC = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!origin || !destination) return;
    setLoading(true);
    const result = await getTravelAdvice(origin, destination, travelers);
    setAdvice(result);
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full flex flex-col">
      <div className="bg-brand-darkGreen p-6 text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-brand-caribbeanGreen rounded-lg">
            <Sparkles size={20} className="text-white" />
          </div>
          <div>
            <h3 className="font-bold">AI Trip Planner</h3>
            <p className="text-xs text-gray-400">Get instant vehicle recommendations</p>
          </div>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">From</label>
              <input
                type="text"
                placeholder="Airport / City"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="w-full bg-gray-50 border-gray-200 rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-brand-caribbeanGreen outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">To</label>
              <input
                type="text"
                placeholder="Hotel / Resort"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-gray-50 border-gray-200 rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-brand-caribbeanGreen outline-none"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-1">
               <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Travelers</label>
               <select 
                value={travelers}
                onChange={(e) => setTravelers(Number(e.target.value))}
                className="w-full bg-gray-50 border-gray-200 rounded-lg py-2 px-3 text-sm outline-none"
               >
                 {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} Persons</option>)}
               </select>
            </div>
            <button
              disabled={loading}
              className="mt-5 bg-brand-caribbeanGreen text-white p-2.5 rounded-lg hover:bg-brand-darkGreen transition-all disabled:opacity-50"
            >
              {loading ? <Clock className="animate-spin" /> : <Send size={20} />}
            </button>
          </div>
        </form>

        {loading && (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <div className="w-12 h-12 border-4 border-brand-caribbeanGreen border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-sm font-medium text-gray-600">Calculating the best route for you...</p>
          </div>
        )}

        {advice && !loading && (
          <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-brand-softGreen p-4 rounded-xl border border-brand-caribbeanGreen/20 space-y-4">
              <div className="flex items-start gap-3">
                <Car className="text-brand-caribbeanGreen mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-brand-darkGreen text-sm">Recommended: {advice.vehicleType}</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">{advice.recommendation}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-brand-caribbeanGreen" size={20} />
                <span className="text-sm font-medium text-brand-darkGreen">Est. Time: {advice.estimatedDuration}</span>
              </div>
              <div className="flex items-start gap-3 bg-white p-3 rounded-lg text-xs italic text-gray-500">
                <Info size={16} className="text-brand-caribbeanGreen shrink-0" />
                <p>"{advice.proTip}"</p>
              </div>
            </div>
          </div>
        )}

        {!advice && !loading && (
          <div className="flex-1 flex items-center justify-center text-center opacity-40">
            <p className="text-sm px-10">Enter your trip details to see how t.lucas can make your travel perfect.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TravelAssistant;
