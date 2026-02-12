import React from 'react';
import { BarChart3, Eye, MousePointer, MessageSquare, TrendingUp, FileText } from 'lucide-react';
import { transparency } from '../data/mock';

const icons = [FileText, Eye, MousePointer, MessageSquare, TrendingUp, BarChart3];

const TransparencySection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6">
            <BarChart3 size={18} className="text-red-500" />
            <span className="text-red-400 text-sm font-medium">Resultados</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {transparency.title}
          </h2>
          <p className="text-gray-400 text-lg">{transparency.description}</p>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {transparency.items.map((item, index) => {
            const IconComponent = icons[index] || BarChart3;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-2xl p-6 border border-gray-700/50 hover:border-red-500/30 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600/20 transition-colors">
                  <IconComponent size={24} className="text-red-500" />
                </div>
                <p className="text-gray-300 text-sm font-medium">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
