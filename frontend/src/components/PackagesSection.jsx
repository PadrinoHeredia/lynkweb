import React from 'react';
import { Check, Star, Crown, Rocket, Building2 } from 'lucide-react';
import { packages, siteConfig } from '../data/mock';

const packageIcons = [Star, Crown, Rocket, Building2];

const PackagesSection = () => {
  return (
    <section id="paquetes" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6">
            <Crown size={18} className="text-red-500" />
            <span className="text-red-400 text-sm font-medium">Paquetes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Directorio y <span className="text-red-500">Posicionamiento</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Elige el paquete que mejor se adapte a las necesidades de tu negocio
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => {
            const IconComponent = packageIcons[index] || Star;
            const isHighlighted = pkg.highlighted;
            const isSpecial = pkg.requiresDiagnosis;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-6 border transition-all duration-500 hover:transform hover:scale-[1.02] ${
                  isHighlighted
                    ? 'bg-gradient-to-br from-red-900/40 to-red-950/60 border-red-500/50'
                    : isSpecial
                    ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/90 border-gray-600/50'
                    : 'bg-gradient-to-br from-gray-800/50 to-gray-900/80 border-gray-700/50 hover:border-red-500/30'
                }`}
              >
                {isHighlighted && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                      POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6 pt-2">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                    isHighlighted ? 'bg-red-600/30' : 'bg-red-600/10'
                  }`}>
                    <IconComponent size={28} className="text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">PAQUETE {pkg.id}</h3>
                  <p className={`text-xl font-bold ${
                    isHighlighted ? 'text-red-400' : 'text-gray-200'
                  }`}>
                    {pkg.name}
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Objetivo: {pkg.objective}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-gray-700/50">
                  <p className="text-gray-400 text-sm mb-4">
                    {isSpecial ? 'Requiere diagnóstico previo' : 'Precio mensual'}
                  </p>
                  <p className={`text-2xl font-bold mb-4 ${
                    isHighlighted ? 'text-red-400' : 'text-white'
                  }`}>
                    {pkg.price}
                  </p>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                      isSpecial 
                        ? 'Hola, me interesa una Evaluación Estratégica para el paquete Arquitectura Maestra'
                        : `Hola, me interesa el paquete ${pkg.name}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                      isHighlighted
                        ? 'bg-red-600 hover:bg-red-700 text-white'
                        : isSpecial
                        ? 'bg-gray-700 hover:bg-gray-600 text-white'
                        : 'bg-gray-700/50 hover:bg-red-600 text-white'
                    }`}
                  >
                    {isSpecial ? 'Solicitar Evaluación' : 'Seleccionar'}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
