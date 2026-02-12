import React from 'react';
import { MessageCircle, ChevronRight } from 'lucide-react';
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
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-red-900/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Logo Grande */}
          <img
            src={siteConfig.logo}
            alt="LYNK DIGITAL STRATEGY"
            className="h-48 md:h-64 lg:h-80 w-auto mx-auto mb-8"
          />

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            {heroContent.subtitle.split('&')[0]}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Ecosistemas de Inteligencia
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            {heroContent.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-2xl flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Comenzar Ahora
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => scrollToSection('#servicios')}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all font-semibold text-lg border-2 border-white/30"
            >
              Ver Servicios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
