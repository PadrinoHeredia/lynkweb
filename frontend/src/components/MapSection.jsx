import React from 'react';
import { MapPin, Navigation, Star, Users, Map } from 'lucide-react';
import { mapImages } from '../data/mock';

const MapSection = () => {
  const features = [
    {
      icon: Map,
      title: "Mapa Virtual Interactivo",
      description: "Ubica negocios de forma visual y práctica"
    },
    {
      icon: Navigation,
      title: "Directorio Digital Completo",
      description: "Acceso rápido a información de contacto y redes sociales"
    },
    {
      icon: Star,
      title: "Promociones Cruzadas",
      description: "Una colaboración exitosa desde 2019"
    },
    {
      icon: Users,
      title: "Red de Clientes Exclusiva",
      description: "Forma parte de un ecosistema selecto de negocios"
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6">
            <MapPin size={18} className="text-red-500" />
            <span className="text-red-400 text-sm font-medium">Directorio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mapa y Directorio <span className="text-red-500">Virtual</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Imagina un mapa virtual donde los negocios de tu zona se muestran de forma gráfica e interactiva. 
            Los usuarios pueden explorar los diferentes negocios, acceder a sus páginas web y descubrir 
            servicios complementarios que quizás no conocían.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl">
              <img
                src={mapImages[0]}
                alt="Mapa y Directorio Virtual Interactivo"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-600/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-red-600/5 rounded-full blur-3xl" />
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 hover:border-red-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors">
                    <IconComponent size={24} className="text-red-500" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Example text */}
        <div className="mt-12 bg-gradient-to-r from-gray-800/30 via-gray-800/50 to-gray-800/30 rounded-2xl p-6 border border-gray-700/30 text-center">
          <p className="text-gray-300 text-lg">
            De esta manera, un cliente que busca una tintorería puede descubrir un servicio de lavado de autos cercano, 
            <span className="text-red-400 font-medium"> generando una oportunidad de negocio para ambos.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
