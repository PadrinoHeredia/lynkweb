import React, { useState } from 'react';
import { Send, User, MapPin, Phone, Clock, Link2, MessageCircle } from 'lucide-react';
import { siteConfig, contactInfo } from '../data/mock';
import { Button } from './ui/button';
import { Input } from './ui/input';
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
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Options */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Contáctanos
              </h2>

              {/* Two contact options */}
              <div className="space-y-6 mb-12">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {contactInfo.client.title}
                  </h3>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                      'Hola, quiero mejorar la visibilidad de mi negocio'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium transition-colors"
                  >
                    {contactInfo.client.cta}
                    <Send className="w-4 h-4" />
                  </a>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {contactInfo.job.title}
                  </h3>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                      'Hola, estoy interesado en formar parte de LYNK'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    {contactInfo.job.cta}
                    <Send className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Direct contact info */}
              <div className="space-y-4">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-700 hover:text-red-600 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg">{siteConfig.phone}</span>
                </a>
                <div className="flex items-center gap-4 text-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg">{siteConfig.location}</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Formulario de Contacto</h3>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="text-gray-900 text-xl font-semibold">¡Mensaje enviado!</p>
                  <p className="text-gray-600 mt-2">Nos pondremos en contacto contigo pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="nombre" className="text-gray-700 mb-2 flex items-center gap-2">
                      <User className="w-4 h-4" /> Nombre
                    </Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      required
                      className="border-gray-300 focus:border-red-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="redesSociales" className="text-gray-700 mb-2 flex items-center gap-2">
                      <Link2 className="w-4 h-4" /> Redes Sociales (Link a Facebook o Instagram)
                    </Label>
                    <Input
                      id="redesSociales"
                      name="redesSociales"
                      value={formData.redesSociales}
                      onChange={handleChange}
                      placeholder="https://facebook.com/tunegocio"
                      className="border-gray-300 focus:border-red-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="ubicacion" className="text-gray-700 mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> Ubicación
                    </Label>
                    <Input
                      id="ubicacion"
                      name="ubicacion"
                      value={formData.ubicacion}
                      onChange={handleChange}
                      placeholder="Ciudad, Estado"
                      required
                      className="border-gray-300 focus:border-red-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="telefono" className="text-gray-700 mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4" /> Teléfono o WhatsApp
                    </Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+52 xxx xxx xxxx"
                      required
                      className="border-gray-300 focus:border-red-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="horarioContacto" className="text-gray-700 mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Horario de Contacto
                    </Label>
                    <Input
                      id="horarioContacto"
                      name="horarioContacto"
                      value={formData.horarioContacto}
                      onChange={handleChange}
                      placeholder="Ej: Lunes a Viernes 9am - 6pm"
                      className="border-gray-300 focus:border-red-500"
                    />
                  </div>

                  <div>
                    <Label className="text-gray-700 mb-2">Está interesado en:</Label>
                    <Select onValueChange={handleSelectChange} value={formData.interes}>
                      <SelectTrigger className="border-gray-300 focus:border-red-500">
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="visibilidad">Paquete LYNK Visibilidad</SelectItem>
                        <SelectItem value="posicionamiento">Paquete LYNK Posicionamiento</SelectItem>
                        <SelectItem value="dominio">Paquete LYNK Dominio Digital</SelectItem>
                        <SelectItem value="arquitectura">Arquitectura Maestra</SelectItem>
                        <SelectItem value="otro">Otro servicio</SelectItem>
                        <SelectItem value="trabajo">Oportunidad laboral</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-6 rounded-full font-semibold text-lg transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2 justify-center">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 justify-center">
                        <Send className="w-5 h-5" />
                        Enviar Mensaje
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
