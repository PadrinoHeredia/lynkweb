import React from 'react';
import { Facebook, Instagram, ExternalLink } from 'lucide-react';
import { siteConfig } from '../data/mock';

const SocialFeedSection = () => {
  const fbPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=400&q=80',
      caption: 'Estrategia digital en acción'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
      caption: 'Marketing de precisión'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=400&q=80',
      caption: 'Resultados medibles'
    }
  ];

  const igPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=400&q=80',
      caption: 'Ecosistema digital'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=400&q=80',
      caption: 'Automatización inteligente'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=400&q=80',
      caption: 'Arquitectura web'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Síguenos en <span className="text-red-600">Redes Sociales</span>
          </h2>
          <p className="text-xl text-gray-600">
            Manténte al día con nuestras últimas publicaciones
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Facebook Feed */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Facebook className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold">Facebook</h3>
                  <p className="text-gray-500 text-sm">@synergyrent</p>
                </div>
              </div>
              <a
                href={siteConfig.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium"
              >
                Ver más <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {fbPosts.map((post) => (
                <a
                  key={post.id}
                  href={siteConfig.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square rounded-xl overflow-hidden"
                >
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-600/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Facebook className="w-6 h-6 text-white" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Instagram Feed */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold">Instagram</h3>
                  <p className="text-gray-500 text-sm">@tracce_virtuale</p>
                </div>
              </div>
              <a
                href={siteConfig.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors text-sm font-medium"
              >
                Ver más <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {igPosts.map((post) => (
                <a
                  key={post.id}
                  href={siteConfig.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square rounded-xl overflow-hidden"
                >
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/50 to-pink-600/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeedSection;
