import React from 'react';
import { MessageCircle, ChevronRight, ArrowDown } from 'lucide-react';
import { siteConfig, heroContent } from '../data/mock';

const HeroSection = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80"
          alt="Technology Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Logo Grande */}
        <div className="mb-10 animate-fade-in">
          <img
            src={siteConfig.logo}
            alt="LYNK"
            className="h-64 md:h-80 lg:h-96 w-auto mx-auto object-contain drop-shadow-2xl"
            style={{ filter: 'drop-shadow(0 0 30px rgba(220, 38, 38, 0.3))' }}
          />
        </div>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 font-light tracking-wide">
          {heroContent.subtitle}
        </h2>

        {/* Main Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-8 leading-relaxed">
          {heroContent.description}
        </p>

        {/* Extended Description */}
        <div className="max-w-4xl mx-auto mb-10 space-y-3">
          {heroContent.extendedDescription.map((text, index) => (
            <p
              key={index}
              className={`text-base md:text-lg ${
                index === 0 || index === 1
                  ? 'text-red-400 font-medium'
                  : 'text-gray-400'
              }`}
            >
              {text}
            </p>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3 hover:scale-105 shadow-lg shadow-red-600/30"
          >
            <MessageCircle size={22} />
            Comenzar Ahora
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={() => scrollToSection('#servicios')}
            className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10"
          >
            Ver Servicios
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('#que-hacemos')}
          className="animate-bounce text-white/50 hover:text-white transition-colors"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
