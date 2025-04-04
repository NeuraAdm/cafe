"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, Coffee } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const phoneNumber = "+573145182410"
    const message = `Hola, mi nombre es ${formData.name} y mi correo es ${formData.email}. ${formData.message}`
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, "_blank")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contacto" className="py-20 bg-cream relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-ralsteda text-primary mb-4 text-gradient">Contáctanos</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary via-secondary to-primary mx-auto mb-8" />
          <p className="text-lg text-secondary/90 max-w-3xl mx-auto font-century">
            Estamos aquí para responder tus preguntas y recibir tus comentarios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-sm shadow-lg border-t-4 border-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>

              <h3 className="text-2xl font-ralsteda text-gradient mb-8 inline-block">Información de Contacto</h3>

              <div className="space-y-8">
                <motion.div
                  className="flex items-start hover-lift p-4 bg-white shadow-md rounded-sm"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-primary text-cream p-3 rounded-full mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-ralsteda text-primary mb-1">Dirección</h4>
                    <p className="text-secondary/80 font-century">
                      
                      <br />
                      
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start hover-lift p-4 bg-white shadow-md rounded-sm"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-primary text-cream p-3 rounded-full mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-ralsteda text-primary mb-1">Teléfono</h4>
                    <p className="text-secondary/80 font-century">+57 314 5182410</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start hover-lift p-4 bg-white shadow-md rounded-sm"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-primary text-cream p-3 rounded-full mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-ralsteda text-primary mb-1">Email</h4>
                    <p className="text-secondary/80 font-century">cafeelreloj3@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start hover-lift p-4 bg-white shadow-md rounded-sm"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-primary text-cream p-3 rounded-full mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-ralsteda text-primary mb-1">Horario</h4>
                    <p className="text-secondary/80 font-century">
                      Lunes a Jueves: 8:00 - 22:00
                      <br />
                      Viernes y Sábado: 8:00 - 00:00
                      <br />
                      Domingo: 9:00 - 20:00
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-sm shadow-lg border-t-4 border-secondary relative overflow-hidden"
            >
              <div className="absolute -bottom-16 -right-16 w-32 h-32 text-secondary/10">
                <Coffee className="w-full h-full" />
              </div>

              <h3 className="text-2xl font-ralsteda text-gradient mb-8 inline-block">Envíanos un Mensaje</h3>

              <div className="space-y-6 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-secondary font-century mb-2 font-semibold">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-secondary/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-secondary font-century mb-2 font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-secondary/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-secondary font-century mb-2 font-semibold">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-secondary/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(141, 47, 35, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-cream font-century py-4 px-6 rounded-sm transition-all flex items-center justify-center text-lg"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Mensaje
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

