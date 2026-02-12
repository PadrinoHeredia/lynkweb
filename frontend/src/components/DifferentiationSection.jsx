import React from 'react';
import { Video, Users, Target, Palette, Globe, Sparkles } from 'lucide-react';
import { differentiationItems } from '../data/mock';

const iconMap = {
  Video: Video,
  Users: Users,
  Target: Target,
  Palette: Palette,
  Globe: Globe,
};

const DifferentiationSection = () => {
  return (
    <section id="que-hacemos" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6">
            <Sparkles size={18} className="text-red-500" />
            <span className="text-red-400 text-sm font-medium">Nuestra Diferencia</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Qué <span className="text-red-500">Hacemos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            No somos una agencia convencional. Somos arquitectos digitales.
          </p>
        </div>

        {/* Differentiation Items */}
        <div className="grid gap-6 md:gap-8">
          {differentiationItems.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Target;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-[1.02]"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                    <IconComponent size={28} className="text-red-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed group-hover:text-white transition-colors">
                      {item.text}
                    </p>
                  </div>
                </div>
                {/* Decorative gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection;
