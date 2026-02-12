import React from 'react';
import { Brain, MapPin, TrendingUp, Search, Building, Check } from 'lucide-react';
import { services } from '../data/mock';

const iconMap = {
  Brain: Brain,
  MapPin: MapPin,
  TrendingUp: TrendingUp,
  Search: Search,
  Building: Building,
};

const serviceColors = [
  { gradient: 'from-red-600 to-orange-600', overlay: 'from-red-600 to-orange-600' },
  { gradient: 'from-blue-600 to-cyan-600', overlay: 'from-blue-600 to-cyan-600' },
  { gradient: 'from-purple-600 to-pink-600', overlay: 'from-purple-600 to-pink-600' },
  { gradient: 'from-emerald-600 to-teal-600', overlay: 'from-emerald-600 to-teal-600' },
  { gradient: 'from-indigo-600 to-violet-600', overlay: 'from-indigo-600 to-violet-600' },
];

const serviceImages = [
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDB8fHx8MTczODUyOTc3Mnww&ixlib=rb-4.1.0&q=85',
  'https://images.unsplash.com/photo-1676276374465-a3170089657c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMHRlYW18ZW58MHx8fHwxNzM4NTMwMzA5fDA&ixlib=rb-4.1.0&q=85',
  'https://images.unsplash.com/photo-1676276374987-c4a89f51d8a6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMHRlYW18ZW58MHx8fHwxNzM4NTMwMzA5fDA&ixlib=rb-4.1.0&q=85',
  'https://images.unsplash.com/photo-1571677246347-5040036b95cc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDB8fHx8MTczODUyOTc3Mnww&ixlib=rb-4.1.0&q=85',
  'https://images.unsplash.com/photo-1636645096936-fc8704bc8083?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDB8fHx8MTczODUyOTc3Mnww&ixlib=rb-4.1.0&q=85',
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Servicios <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Estratégicos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluciones integrales diseñadas para maximizar la visibilidad y el impacto de tu negocio
          </p>
        </div>

        {/* Services Cards */}
        <div className="space-y-12">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Brain;
            const color = serviceColors[index % serviceColors.length];
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={service.id}
                className={`group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                {/* Image */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img
                    alt={service.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={serviceImages[index]}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${color.overlay} opacity-20 group-hover:opacity-30 transition-opacity`} />
                </div>

                {/* Content */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className={`bg-gradient-to-r ${color.gradient} p-4 rounded-2xl inline-flex items-center justify-center w-fit mb-6`}>
                    <IconComponent className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">{service.description}</p>
                  <div className="space-y-3">
                    <p className="font-semibold text-gray-900 mb-3 text-lg">Beneficios:</p>
                    <div className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Resultados medibles y optimizados</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Estrategias personalizadas</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Soporte continuo</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
