"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      src: "/1.jpeg?height=600&width=800",
      alt: "Cheesecake de Frutos Rojos",
    },
    {
      src: "/2.jpeg?height=600&width=800",
      alt: "Cafe Expresso",
    },
    {
      src: "/3.jpeg?height=600&width=800",
      alt: "Capuchino",
    },
    {
      src: "/4.jpeg?height=600&width=800",
      alt: "Cafe Americano",
    },
    {
      src: "/5.jpeg?height=600&width=800",
      alt: "Gin Tonic de Cafe",
    },
    {
      src: "/6.jpeg?height=600&width=800",
      alt: "Frappe de Cafe",
    },
    {
      src: "/7.jpeg?height=600&width=800",
      alt: "Omelette",
    },
    {
      src: "/8.jpeg?height=600&width=800",
      alt: "Calentado",
    },
    {
      src: "/9.jpeg?height=600&width=800",
      alt: "Muffins de Chocolate",
    },
  ]

  const nextImage = () => {
    if (selectedImage === null) return
    setSelectedImage((selectedImage + 1) % images.length)
  }

  const prevImage = () => {
    if (selectedImage === null) return
    setSelectedImage((selectedImage - 1 + images.length) % images.length)
  }

  return (
    <section id="galería" className="py-20 bg-pattern-dark relative">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-cream to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-cream to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-ralsteda text-primary mb-4 text-gradient">Galería</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary via-secondary to-primary mx-auto mb-8" />
          <p className="text-lg text-secondary/90 max-w-3xl mx-auto font-century">
            Explora nuestro espacio y descubre la experiencia que te espera en El Reloj.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.97 }}
              className="relative aspect-square overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-cream font-century text-lg font-semibold text-shadow-sm">{image.alt}</p>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cream/50 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                className="absolute top-4 right-4 text-cream hover:text-primary transition-colors z-10 bg-black/30 p-2 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(null)
                }}
              >
                <X size={32} />
                <span className="sr-only">Cerrar</span>
              </motion.button>

              <motion.button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cream hover:text-primary transition-colors z-10 bg-black/30 p-2 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
              >
                <ChevronLeft size={32} />
                <span className="sr-only">Anterior</span>
              </motion.button>

              <motion.button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-cream hover:text-primary transition-colors z-10 bg-black/30 p-2 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
              >
                <ChevronRight size={32} />
                <span className="sr-only">Siguiente</span>
              </motion.button>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative w-full max-w-4xl aspect-video"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={images[selectedImage].src || "/placeholder.svg"}
                  alt={images[selectedImage].alt}
                  fill
                  className="object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-cream text-xl font-ralsteda text-shadow-md">{images[selectedImage].alt}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

