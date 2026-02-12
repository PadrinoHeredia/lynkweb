import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/mock';

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} />
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        ¡Escríbenos por WhatsApp!
      </span>
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
    </a>
  );
};

export default WhatsAppButton;
