import React from 'react';
import { Award, History } from 'lucide-react';
import { aboutUs } from '../data/mock';

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                alt="Equipo LYNK"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            {/* Stats overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex gap-4">
              <div className="bg-black/80 backdrop-blur-sm rounded-xl p-4 flex-1 text-center border border-gray-700">
                <p className="text-3xl font-bold text-red-500">15+</p>
                <p className="text-gray-400 text-sm">Años de experiencia</p>
              </div>
              <div className="bg-black/80 backdrop-blur-sm rounded-xl p-4 flex-1 text-center border border-gray-700">
                <p className="text-3xl font-bold text-red-500">100%</p>
                <p className="text-gray-400 text-sm">Compromiso</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-600/20 rounded-full blur-xl" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6">
              <History size={18} className="text-red-500" />
              <span className="text-red-400 text-sm font-medium">Nuestra Historia</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              {aboutUs.title}
            </h2>
            <div className="bg-gray-800/30 rounded-2xl p-6 border-l-4 border-red-500">
              <p className="text-gray-300 text-lg leading-relaxed italic">
                "{aboutUs.text}"
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center">
                <Award size={32} className="text-red-500" />
              </div>
              <div>
                <p className="text-white font-semibold">Pioneros Digitales</p>
                <p className="text-gray-400">Antes de las redes sociales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
