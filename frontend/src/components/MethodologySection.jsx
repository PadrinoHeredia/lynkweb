import React from 'react';
import { ClipboardCheck, PenTool, Cog, RefreshCw, ArrowRight } from 'lucide-react';
import { methodology } from '../data/mock';

const iconMap = {
  ClipboardCheck: ClipboardCheck,
  PenTool: PenTool,
  Cog: Cog,
  RefreshCw: RefreshCw,
};

const MethodologySection = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6">
            <Cog size={18} className="text-red-500" />
            <span className="text-red-400 text-sm font-medium">Proceso</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Metodología
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Nuestro proceso estructurado para garantizar resultados
          </p>
        </div>

        {/* Methodology Steps */}
        <div className="grid md:grid-cols-4 gap-6">
          {methodology.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Cog;
            const isLast = index === methodology.length - 1;

            return (
              <div key={item.step} className="relative">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50 hover:border-red-500/30 transition-all duration-300 text-center h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>

                  <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4">
                    <IconComponent size={32} className="text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>

                {/* Arrow connector */}
                {!isLast && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight size={24} className="text-red-500" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
