import React from 'react';
import { Map, Navigation, Zap, Users } from 'lucide-react';
import { mapImages } from '../data/mock';

const MapSection = () => {
  const features = [
    {
      icon: Map,
      title: "Mapa Virtual Interactivo",
      description: "Ubica negocios de forma visual y práctica",
      color: 'from-red-600 to-orange-600'
    },
    {
      icon: Navigation,
      title: "Directorio Digital Completo",
      description: "Acceso rápido a información de contacto y redes sociales",
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Zap,
      title: "Promociones Cruzadas",
      description: "Una colaboración exitosa desde 2019",
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: Users,
      title: "Red de Clientes Exclusiva",
      description: "Forma parte de un ecosistema selecto de negocios",
      color: 'from-emerald-600 to-teal-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mapa y <span className="text-red-600">Directorio Virtual</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Imagina un mapa virtual donde los negocios de tu zona se muestran de forma gráfica e interactiva. 
            Los usuarios pueden explorar los diferentes negocios, acceder a sus páginas web y descubrir 
            servicios complementarios que quizás no conocían.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            De esta manera, un cliente que busca una tintorería puede descubrir un servicio de lavado de autos cercano, 
            generando una oportunidad de negocio para ambos.
          </p>
        </div>

        {/* Map Image */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
          <img
            alt="Mapa y Directorio Virtual Interactivo"
            className="w-full h-auto object-cover"
            src={mapImages[0]}
          />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MapSection;
