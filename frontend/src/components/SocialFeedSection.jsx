import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, ExternalLink, Image } from 'lucide-react';
import { siteConfig } from '../data/mock';

const SocialFeedSection = () => {
  // Mock social media posts since we can't actually fetch from FB/IG APIs without authentication
  const [fbPosts] = useState([
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
  ]);

  const [igPosts] = useState([
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
  ]);

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Síguenos en <span className="text-red-500">Redes Sociales</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Manténte al día con nuestras últimas publicaciones
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Facebook Feed */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                  <Facebook size={24} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Facebook</h3>
                  <p className="text-gray-400 text-sm">@synergyrent</p>
                </div>
              </div>
              <a
                href={siteConfig.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
              >
                Ver más <ExternalLink size={16} />
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
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Facebook size={24} className="text-white" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Instagram Feed */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl flex items-center justify-center">
                  <Instagram size={24} className="text-pink-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Instagram</h3>
                  <p className="text-gray-400 text-sm">@tracce_virtuale</p>
                </div>
              </div>
              <a
                href={siteConfig.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors text-sm"
              >
                Ver más <ExternalLink size={16} />
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
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 to-pink-500/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Instagram size={24} className="text-white" />
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
