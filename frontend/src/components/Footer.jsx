import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Globe } from 'lucide-react';
import { siteConfig } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src={siteConfig.logo}
              alt="LYNK"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-400 mb-6 max-w-md">
              Arquitectura Estratégica Digital & Ecosistemas de Inteligencia.
              Construimos infraestructura digital que permite a los negocios escalar,
              automatizar y dominar su entorno competitivo.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Globe size={16} />
              <span>Soporte en {siteConfig.languages.join(' e ')}</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <span className="text-gray-500">CEO:</span>
                <span>{siteConfig.ceo}</span>
              </div>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={20} className="text-red-500" />
                <span>{siteConfig.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} className="text-red-500" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Enlaces Rápidos</h4>
            <div className="space-y-3">
              <a href="#inicio" className="block text-gray-400 hover:text-white transition-colors">
                Inicio
              </a>
              <a href="#que-hacemos" className="block text-gray-400 hover:text-white transition-colors">
                Qué Hacemos
              </a>
              <a href="#servicios" className="block text-gray-400 hover:text-white transition-colors">
                Servicios
              </a>
              <a href="#paquetes" className="block text-gray-400 hover:text-white transition-colors">
                Paquetes
              </a>
              <a href="#nosotros" className="block text-gray-400 hover:text-white transition-colors">
                Nosotros
              </a>
              <a href="#contacto" className="block text-gray-400 hover:text-white transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} LYNK Digital Strategy. Todos los derechos reservados.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
          >
            <MessageCircle size={18} />
            WhatsApp / Telegram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
