import React, { useState } from 'react';
import { Send, User, MapPin, Phone, Clock, Link2, MessageCircle } from 'lucide-react';
import { siteConfig, contactInfo } from '../data/mock';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    redesSociales: '',
    ubicacion: '',
    telefono: '',
    horarioContacto: '',
    interes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, interes: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      const message = `
*Nuevo contacto desde el sitio web LYNK*

*Nombre:* ${formData.nombre}
*Redes Sociales:* ${formData.redesSociales}
*Ubicación:* ${formData.ubicacion}
*Teléfono/WhatsApp:* ${formData.telefono}
*Horario de contacto:* ${formData.horarioContacto}
*Interesado en:* ${formData.interes}
      `.trim();

      window.open(
        `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`,
        '_blank'
      );

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        nombre: '',
        redesSociales: '',
        ubicacion: '',
        telefono: '',
        horarioContacto: '',
        interes: ''
      });

      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Options */}
          <div>
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6">
              <MessageCircle size={18} className="text-red-500" />
              <span className="text-red-400 text-sm font-medium">Contacto</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Contáctanos
            </h2>

            {/* Two contact options */}
            <div className="space-y-6 mb-12">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {contactInfo.client.title}
                </h3>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                    'Hola, quiero mejorar la visibilidad de mi negocio'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
                >
                  {contactInfo.client.cta}
                  <Send size={16} />
                </a>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {contactInfo.job.title}
                </h3>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                    'Hola, estoy interesado en formar parte de LYNK'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
                >
                  {contactInfo.job.cta}
                  <Send size={16} />
                </a>
              </div>
            </div>

            {/* Direct contact info */}
            <div className="space-y-4">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center">
                  <Phone size={20} className="text-red-500" />
                </div>
                <span>{siteConfig.phone}</span>
              </a>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center">
                  <MapPin size={20} className="text-red-500" />
                </div>
                <span>{siteConfig.location}</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Formulario de Contacto</h3>
            
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={32} className="text-green-500" />
                </div>
                <p className="text-white text-xl font-semibold">¡Mensaje enviado!</p>
                <p className="text-gray-400 mt-2">Nos pondremos en contacto contigo pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nombre" className="text-gray-300 mb-2 flex items-center gap-2">
                    <User size={16} /> Nombre
                  </Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    required
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-500"
                  />
                </div>

                <div>
                  <Label htmlFor="redesSociales" className="text-gray-300 mb-2 flex items-center gap-2">
                    <Link2 size={16} /> Redes Sociales (Link a Facebook o Instagram)
                  </Label>
                  <Input
                    id="redesSociales"
                    name="redesSociales"
                    value={formData.redesSociales}
                    onChange={handleChange}
                    placeholder="https://facebook.com/tunegocio"
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-500"
                  />
                </div>

                <div>
                  <Label htmlFor="ubicacion" className="text-gray-300 mb-2 flex items-center gap-2">
                    <MapPin size={16} /> Ubicación
                  </Label>
                  <Input
                    id="ubicacion"
                    name="ubicacion"
                    value={formData.ubicacion}
                    onChange={handleChange}
                    placeholder="Ciudad, Estado"
                    required
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-500"
                  />
                </div>

                <div>
                  <Label htmlFor="telefono" className="text-gray-300 mb-2 flex items-center gap-2">
                    <Phone size={16} /> Teléfono o WhatsApp
                  </Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+52 xxx xxx xxxx"
                    required
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-500"
                  />
                </div>

                <div>
                  <Label htmlFor="horarioContacto" className="text-gray-300 mb-2 flex items-center gap-2">
                    <Clock size={16} /> Horario de Contacto
                  </Label>
                  <Input
                    id="horarioContacto"
                    name="horarioContacto"
                    value={formData.horarioContacto}
                    onChange={handleChange}
                    placeholder="Ej: Lunes a Viernes 9am - 6pm"
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-500"
                  />
                </div>

                <div>
                  <Label className="text-gray-300 mb-2">Está interesado en:</Label>
                  <Select onValueChange={handleSelectChange} value={formData.interes}>
                    <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white focus:border-red-500">
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="visibilidad" className="text-white">Paquete LYNK Visibilidad</SelectItem>
                      <SelectItem value="posicionamiento" className="text-white">Paquete LYNK Posicionamiento</SelectItem>
                      <SelectItem value="dominio" className="text-white">Paquete LYNK Dominio Digital</SelectItem>
                      <SelectItem value="arquitectura" className="text-white">Arquitectura Maestra</SelectItem>
                      <SelectItem value="otro" className="text-white">Otro servicio</SelectItem>
                      <SelectItem value="trabajo" className="text-white">Oportunidad laboral</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-6 rounded-xl font-semibold text-lg transition-all duration-300"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 justify-center">
                      <Send size={20} />
                      Enviar Mensaje
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
