import React from 'react';
import { Brain, MapPin, TrendingUp, Search, Building, Briefcase } from 'lucide-react';
import { services } from '../data/mock';

const iconMap = {
  Brain: Brain,
  MapPin: MapPin,
  TrendingUp: TrendingUp,
  Search: Search,
  Building: Building,
};

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6">
            <Briefcase size={18} className="text-red-500" />
            <span className="text-red-400 text-sm font-medium">Soluciones</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Servicios <span className="text-red-500">Estratégicos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluciones integrales diseñadas para maximizar la visibilidad y el impacto de tu negocio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Brain;
            return (
              <div
                key={service.id}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50 hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-colors" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors">
                    <IconComponent size={32} className="text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
