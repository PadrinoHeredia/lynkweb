import React from 'react';
import { Check, Star, Crown, Rocket, Building2 } from 'lucide-react';
import { packages, siteConfig } from '../data/mock';

const packageIcons = [Star, Crown, Rocket, Building2];
const packageColors = [
  { bg: 'from-gray-50 to-white', border: 'border-gray-200', button: 'bg-gray-800 hover:bg-gray-900' },
  { bg: 'from-red-50 to-orange-50', border: 'border-red-300', button: 'bg-red-600 hover:bg-red-700' },
  { bg: 'from-blue-50 to-cyan-50', border: 'border-blue-300', button: 'bg-blue-600 hover:bg-blue-700' },
  { bg: 'from-purple-50 to-pink-50', border: 'border-purple-300', button: 'bg-purple-600 hover:bg-purple-700' },
];

const PackagesSection = () => {
  return (
    <section id="paquetes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Paquetes - <span className="text-red-600">Directorio y Posicionamiento</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elige el paquete que mejor se adapte a las necesidades de tu negocio
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => {
            const IconComponent = packageIcons[index] || Star;
            const color = packageColors[index % packageColors.length];
            const isHighlighted = pkg.highlighted;

            return (
              <div
                key={pkg.id}
                className={`relative bg-gradient-to-br ${color.bg} rounded-3xl p-8 border-2 ${isHighlighted ? 'border-red-500 shadow-2xl scale-105' : color.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
              >
                {isHighlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                      POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${isHighlighted ? 'from-red-600 to-orange-600' : 'from-gray-600 to-gray-700'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm text-gray-500 mb-1">PAQUETE {pkg.id}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-sm text-gray-600">Objetivo: {pkg.objective}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-2">
                    {pkg.requiresDiagnosis ? 'Requiere diagnóstico previo' : 'Precio mensual'}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 mb-4">{pkg.price}</p>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                      pkg.requiresDiagnosis
                        ? 'Hola, me interesa una Evaluación Estratégica para Arquitectura Maestra'
                        : `Hola, me interesa el paquete ${pkg.name}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full ${color.button} text-white py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105`}
                  >
                    {pkg.requiresDiagnosis ? 'Solicitar Evaluación' : 'Seleccionar'}
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
