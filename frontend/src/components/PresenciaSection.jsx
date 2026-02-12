import React from 'react';
import { Globe, Share2, BarChart3, ArrowRight } from 'lucide-react';
import { presenciaDigital } from '../data/mock';

const PresenciaSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6">
              <Globe size={18} className="text-red-500" />
              <span className="text-red-400 text-sm font-medium">Servicios</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              {presenciaDigital.title}
            </h2>
            <div className="space-y-6">
              {presenciaDigital.items.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <ArrowRight size={16} className="text-white" />
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-600/20 to-gray-800/50 rounded-3xl p-8 border border-gray-700/50">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-black/50 rounded-2xl p-6 text-center">
                  <Globe size={40} className="text-red-500 mx-auto mb-4" />
                  <h4 className="text-white font-semibold">Presencia Web</h4>
                  <p className="text-gray-400 text-sm mt-2">Desde cero</p>
                </div>
                <div className="bg-black/50 rounded-2xl p-6 text-center">
                  <Share2 size={40} className="text-red-500 mx-auto mb-4" />
                  <h4 className="text-white font-semibold">Redes Sociales</h4>
                  <p className="text-gray-400 text-sm mt-2">Estrategia IA</p>
                </div>
                <div className="bg-black/50 rounded-2xl p-6 text-center col-span-2">
                  <BarChart3 size={40} className="text-red-500 mx-auto mb-4" />
                  <h4 className="text-white font-semibold">Análisis de Datos</h4>
                  <p className="text-gray-400 text-sm mt-2">Ajustes precisos</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-600/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-600/5 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresenciaSection;
