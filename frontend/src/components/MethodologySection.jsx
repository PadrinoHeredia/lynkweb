import React from 'react';
import { ClipboardCheck, PenTool, Cog, RefreshCw, ArrowRight, BarChart3, Eye, MousePointer, MessageSquare, TrendingUp, FileText } from 'lucide-react';
import { methodology, transparency } from '../data/mock';

const iconMap = {
  ClipboardCheck: ClipboardCheck,
  PenTool: PenTool,
  Cog: Cog,
  RefreshCw: RefreshCw,
};

const MethodologySection = () => {
  const transparencyIcons = [FileText, Eye, MousePointer, MessageSquare, TrendingUp, BarChart3];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Methodology */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Metodología
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nuestro proceso estructurado para garantizar resultados
          </p>
        </div>

        {/* Methodology Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-20 max-w-5xl mx-auto">
          {methodology.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Cog;
            const isLast = index === methodology.length - 1;
            const colors = [
              'from-red-600 to-orange-600',
              'from-blue-600 to-cyan-600',
              'from-purple-600 to-pink-600',
              'from-emerald-600 to-teal-600'
            ];

            return (
              <div key={item.step} className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center hover:-translate-y-2">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className={`bg-gradient-to-r ${colors[index]} text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center`}>
                      {item.step}
                    </span>
                  </div>
                  <div className={`w-16 h-16 bg-gradient-to-r ${colors[index]} rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                </div>
                {!isLast && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-red-500" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Transparency */}
        <div className="bg-white rounded-3xl p-10 shadow-lg max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{transparency.title}</h3>
            <p className="text-lg text-gray-600">{transparency.description}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {transparency.items.map((item, index) => {
              const IconComponent = transparencyIcons[index] || BarChart3;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 text-sm font-medium">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
