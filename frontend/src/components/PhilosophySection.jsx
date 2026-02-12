import React from 'react';
import { Monitor, TrendingUp, Smartphone, ShieldCheck, Lightbulb } from 'lucide-react';
import { philosophyItems } from '../data/mock';

const icons = [Monitor, TrendingUp, Smartphone, ShieldCheck];

const PhilosophySection = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6">
            <Lightbulb size={18} className="text-red-500" />
            <span className="text-red-400 text-sm font-medium">Filosofía Web</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ecosistema <span className="text-red-500">Digital</span>
          </h2>
        </div>

        {/* Philosophy Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {philosophyItems.map((item, index) => {
            const IconComponent = icons[index] || Monitor;
            return (
              <div
                key={index}
                className="group bg-black/40 rounded-2xl p-8 border border-gray-800 hover:border-red-500/30 transition-all duration-500"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                    <IconComponent size={24} className="text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white pt-2">{item.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
