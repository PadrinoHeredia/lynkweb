import React from 'react';
import { Users, Briefcase, ArrowRight, Sparkles } from 'lucide-react';
import { jobOffer, siteConfig } from '../data/mock';

const JobSection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-red-900/30 via-gray-900 to-gray-900 rounded-3xl p-8 md:p-12 border border-red-500/20 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-600/5 rounded-full blur-2xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6">
                <Briefcase size={18} className="text-red-500" />
                <span className="text-red-400 text-sm font-medium">Trabaja con Nosotros</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {jobOffer.title}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {jobOffer.text}
              </p>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                  'Hola, estoy interesado en formar parte del equipo LYNK'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-red-600/30"
              >
                Enviar Postulación
                <ArrowRight size={20} />
              </a>
            </div>

            {/* Visual */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-red-600/20 to-gray-800/50 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-red-600/30 to-gray-800/70 rounded-full flex items-center justify-center">
                    <Users size={80} className="text-red-500" />
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center animate-pulse">
                  <Sparkles size={24} className="text-red-400" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center animate-pulse delay-500">
                  <Briefcase size={20} className="text-red-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSection;
