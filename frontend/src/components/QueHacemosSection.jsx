import React from 'react';
import { Video, Users, Target, Palette, Globe, Zap } from 'lucide-react';
import { differentiationItems, philosophyItems, presenciaDigital, ecosistemaResults, siteConfig } from '../data/mock';

const iconMap = {
  Video: Video,
  Users: Users,
  Target: Target,
  Palette: Palette,
  Globe: Globe,
};

const QueHacemosSection = () => {
  return (
    <section id="que-hacemos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            QUÉ <span className="text-red-600">HACEMOS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No somos una agencia convencional. Somos arquitectos digitales.
          </p>
        </div>

        {/* Differentiation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {differentiationItems.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Target;
            const colors = [
              'from-red-600 to-orange-600',
              'from-blue-600 to-cyan-600',
              'from-purple-600 to-pink-600',
              'from-emerald-600 to-teal-600',
              'from-indigo-600 to-violet-600'
            ];
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${colors[index % colors.length]} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Philosophy Web Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-10 mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Filosofía del <span className="text-red-600">Ecosistema Digital</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {philosophyItems.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Presencia Digital */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {presenciaDigital.title}
            </h3>
            <div className="space-y-6">
              {presenciaDigital.items.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-10 rounded-3xl">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <Globe className="w-10 h-10 text-red-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900">Presencia Web</h4>
                <p className="text-gray-600 text-sm">Desde cero</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <Users className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900">Redes Sociales</h4>
                <p className="text-gray-600 text-sm">Estrategia IA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ecosistema y Resultados */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-10 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">{ecosistemaResults.title}</h3>
          <p className="text-xl mb-2">{ecosistemaResults.intro}</p>
          <p className="text-lg mb-8 text-yellow-200">{ecosistemaResults.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {ecosistemaResults.benefits.map((benefit, index) => (
              <span key={index} className="bg-white/20 px-6 py-3 rounded-full font-medium">
                {benefit}
              </span>
            ))}
          </div>
          <div className="space-y-2 mb-8">
            {ecosistemaResults.closing.map((text, index) => (
              <p key={index} className={`text-xl font-semibold ${index === 1 ? 'text-yellow-300' : ''}`}>
                {text}
              </p>
            ))}
          </div>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-red-600 px-10 py-5 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold text-lg shadow-2xl"
          >
            Unirme al Ecosistema
          </a>
        </div>
      </div>
    </section>
  );
};

export default QueHacemosSection;
