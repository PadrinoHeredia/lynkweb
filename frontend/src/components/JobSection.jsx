import React from 'react';
import { Briefcase, ChevronRight, MessageCircle } from 'lucide-react';
import { jobOffer, siteConfig } from '../data/mock';

const JobSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img
                alt="Compromiso con tu marca"
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
                src="https://images.pexels.com/photos/7414283/pexels-photo-7414283.jpeg"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {jobOffer.title}
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {jobOffer.text}
              </p>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                  'Hola, estoy interesado en formar parte del equipo LYNK'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg inline-flex items-center gap-2"
              >
                <Briefcase className="w-5 h-5" />
                Enviar Postulación
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSection;
