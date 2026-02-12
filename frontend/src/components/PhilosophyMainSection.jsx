import React from 'react';
import { Target, Eye, Heart, Crosshair, TrendingUp, Shield } from 'lucide-react';
import { philosophy } from '../data/mock';

const PhilosophyMainSection = () => {
  const valueIcons = [Crosshair, TrendingUp, Shield, Target];

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6">
            <Heart size={18} className="text-red-500" />
            <span className="text-red-400 text-sm font-medium">Filosofía</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {philosophy.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Purpose */}
          <div className="bg-gradient-to-br from-red-900/30 to-black rounded-3xl p-8 border border-red-500/20">
            <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center mb-6">
              <Target size={28} className="text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{philosophy.purpose.title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed">{philosophy.purpose.text}</p>
          </div>

          {/* Approach */}
          <div className="bg-gradient-to-br from-gray-800/50 to-black rounded-3xl p-8 border border-gray-700/50">
            <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center mb-6">
              <Eye size={28} className="text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{philosophy.approach.title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed">{philosophy.approach.text}</p>
          </div>

          {/* Values */}
          <div className="bg-gradient-to-br from-gray-800/50 to-black rounded-3xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Valores</h3>
            <div className="space-y-4">
              {philosophy.values.map((value, index) => {
                const IconComponent = valueIcons[index] || Target;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center">
                      <IconComponent size={20} className="text-red-500" />
                    </div>
                    <span className="text-gray-300 font-medium">{value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophyMainSection;
