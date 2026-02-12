import React from 'react';
import { Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { ecosistemaResults, siteConfig } from '../data/mock';

const EcosistemaSection = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6">
            <Zap size={18} className="text-red-500" />
            <span className="text-red-400 text-sm font-medium">Resultados</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {ecosistemaResults.title}
          </h2>
          <p className="text-xl text-gray-400 mt-4">{ecosistemaResults.intro}</p>
          <p className="text-lg text-red-400 mt-2">{ecosistemaResults.subtitle}</p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {ecosistemaResults.benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 text-center hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600/30 transition-colors">
                <CheckCircle size={24} className="text-red-500" />
              </div>
              <p className="text-white font-medium">{benefit}</p>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="bg-gradient-to-r from-red-900/30 via-red-800/20 to-red-900/30 rounded-3xl p-8 md:p-12 text-center border border-red-500/20">
          <div className="max-w-3xl mx-auto">
            {ecosistemaResults.closing.map((text, index) => (
              <p
                key={index}
                className={`text-xl md:text-2xl font-semibold ${
                  index === 0 ? 'text-white mb-2' : 'text-red-400'
                }`}
              >
                {text}
              </p>
            ))}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg mt-8 transition-all duration-300 hover:scale-105 shadow-lg shadow-red-600/30"
            >
              Unirme al Ecosistema
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosistemaSection;
