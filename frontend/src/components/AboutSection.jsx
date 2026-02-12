import React from 'react';
import { MessageCircle, Target, Sparkles } from 'lucide-react';
import { aboutUs, philosophy, siteConfig } from '../data/mock';

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Quiénes Somos */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              QUIÉNES <span className="text-red-600">SOMOS</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                alt="Equipo LYNK Digital Strategy"
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHw0fHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMHRlYW18ZW58MHx8fHwxNzM4NTMwMzA5fDA&ixlib=rb-4.1.0&q=85"
              />
            </div>
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                {aboutUs.text}
              </p>
              <div className="pt-6">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition-all transform hover:scale-105 font-semibold shadow-lg inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contáctanos
                </a>
              </div>
            </div>
          </div>

          {/* Filosofía - Propósito y Enfoque */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{philosophy.purpose.title}</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{philosophy.purpose.text}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{philosophy.approach.title}</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{philosophy.approach.text}</p>
            </div>
          </div>

          {/* Valores */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {philosophy.values.map((value, index) => {
              const colors = [
                { bg: 'from-red-600 to-orange-600', hover: 'hover:border-red-200' },
                { bg: 'from-green-600 to-emerald-600', hover: 'hover:border-green-200' },
                { bg: 'from-purple-600 to-pink-600', hover: 'hover:border-purple-200' },
                { bg: 'from-blue-600 to-cyan-600', hover: 'hover:border-blue-200' }
              ];
              const color = colors[index % colors.length];
              return (
                <div
                  key={index}
                  className={`group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100 ${color.hover} hover:-translate-y-2`}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${color.bg} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{value}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
