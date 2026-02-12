import React from 'react';
import { MessageCircle, ChevronRight } from 'lucide-react';
import { siteConfig } from '../data/mock';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sé Parte de Algo <span className="text-yellow-300">Más Grande</span>
          </h2>
          <p className="text-xl text-white mb-8">
            Si eres un negocio innovador que busca un crecimiento sostenible y está comprometido 
            con la colaboración, te invitamos a unirte a nuestra red exclusiva.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white text-red-600 px-10 py-5 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold text-lg shadow-2xl inline-flex items-center gap-3"
          >
            <MessageCircle className="w-6 h-6" />
            Contáctanos por WhatsApp
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
