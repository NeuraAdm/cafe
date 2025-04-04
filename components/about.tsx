"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { Coffee, Beer, Clock, Award } from "lucide-react"
import { motion } from "framer-motion"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      icon: <Coffee className="h-10 w-10 text-cream" />,
      title: "Café de Especialidad",
      description:
        "Seleccionamos los mejores granos de café de origen único para ofrecerte una experiencia sensorial única.",
    },
    {
      icon: <Beer className="h-10 w-10 text-cream" />,
      title: "Cervezas Artesanales de Barril",
      description: "Contamos con una amplia selección de cervezas artesanales locales e internacionales.",
    },
    {
      icon: <Clock className="h-10 w-10 text-cream" />,
      title: "Ambiente Acogedor",
      description: "Un espacio diseñado para que disfrutes cada momento en un ambiente elegante y relajado.",
    },
    {
      icon: <Award className="h-10 w-10 text-cream" />,
      title: "Calidad Garantizada",
      description: "Nos comprometemos a ofrecerte productos de la más alta calidad y un servicio excepcional.",
    },
  ]

  return (
    <section id="nosotros" className="py-20 bg-coffee-pattern relative overflow-hidden" ref={ref}>
      {/* Elementos decorativos */}
      <div className="absolute -left-20 top-0 w-40 h-full bg-primary/10 -skew-x-12"></div>
      <div className="absolute -right-20 top-0 w-40 h-full bg-secondary/10 skew-x-12"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-ralsteda text-primary mb-4 text-gradient">Nuestra Historia</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary via-secondary to-primary mx-auto mb-8" />
            <p className="text-lg text-secondary/90 max-w-3xl mx-auto font-century">
              En El Reloj, el tiempo se detiene para dar paso a momentos de disfrute y conexión. Nacimos con la pasión
              de crear un espacio donde la tradición del buen café se fusiona con la innovación de las cervezas
              artesanales de barril.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="hover-lift hover-glow"
            >
              <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-sm shadow-lg text-cream relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full"></div>
                <div className="mb-6 bg-white/20 p-4 rounded-full inline-block">{feature.icon}</div>
                <h3 className="text-2xl font-ralsteda text-cream mb-4 text-shadow-sm">{feature.title}</h3>
                <p className="text-cream/90 font-century">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

