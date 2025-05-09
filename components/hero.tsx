"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import cafeteraAnimadaData from "../public/cafe.json"
import cafeteraAnimadaData2 from "../public/cafetera-animada.json"
import personAnimadaData from "../public/person.json" 
import dynamic from 'next/dynamic'

// Dynamic loading of Lottie component
const LottiePlayer = dynamic(() => import('lottie-react'), { ssr: false });

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      {/* Background with LottiePlayer instead of image */}
      <div ref={parallaxRef} className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <LottiePlayer
            animationData={cafeteraAnimadaData2}
            loop={true}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-primary/60 to-secondary/50" />
      </div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-[10%] left-[10%] w-32 h-32 rounded-full bg-primary/30 blur-3xl animate-float"></div>
        <div
          className="absolute bottom-[20%] right-[15%] w-40 h-40 rounded-full bg-secondary/30 blur-3xl"
          style={{ animationDelay: "1s", animationDuration: "5s" }}
        ></div>
      </div>

      {/* Contenedor principal con diseño de dos columnas */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">

          {/* Columna izquierda - Logo y texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            {/* Logo con efecto especial */}
            <div className="mb-6 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-cream to-secondary rounded-full opacity-40 blur-md animate-pulse"></div>
              <Image
                src="/logo.png"
                alt="El Reloj Café logo"
                width={320}
                height={320}
                className="relative z-10 p-2 rounded-lg shadow-xl bg-cream/10 backdrop-blur-md"
                style={{ filter: "drop-shadow(0 0 15px rgba(0, 0, 0, 0.6))" }}
              />
            </div>

            {/* Texto descriptivo con diseño mejorado */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-2xl text-cream/90 mb-8 max-w-sm font-century-bold bg-cream/10 backdrop-blur-sm p-4 rounded-lg shadow-lg border-l-4 border-secondary"
            >
              Un espacio elegante donde el tiempo se detiene para disfrutar de los mejores cafés y cervezas artesanales de barril.
            </motion.p>

            {/* Botón de acción opcional */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-cream rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Conoce nuestro menú
            </motion.button>
          </motion.div>

          {/* Columna derecha - Animación de cafetera */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center"
          >
            <div className="relative">
              {/* Círculos decorativos animados */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 -z-10"
              >
                <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-primary/30 blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-28 h-28 rounded-full bg-secondary/30 blur-xl"></div>
              </motion.div>

              {/* LottiePlayer Box - Moved to bottom right */}
              <div className="absolute bottom-0 left-10">
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-primary/40 to-secondary/40 backdrop-blur-sm border border-cream/20 shadow-2xl">
                  {/* Primera animación (arriba) */}
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="mb-4"
                  >
                    <LottiePlayer
                      animationData={personAnimadaData}
                      loop={true}
                      style={{ width: 200, height: 200 }}
                    />
                  </motion.div>
                </div>
              </div>
              
              
              {/* LottiePlayer Box - Moved to bottom right */}
              <div className="absolute top-8 left-10">
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-primary/40 to-secondary/40 backdrop-blur-sm border border-cream/20 shadow-2xl">
                  {/* Primera animación (arriba) */}
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="mb-4"
                  >
                    <LottiePlayer
                      animationData={cafeteraAnimadaData}
                      loop={true}
                      style={{ width: 200, height: 200 }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll hacia abajo */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="bg-cream/10 backdrop-blur-sm p-2 rounded-full shadow-lg"
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-cream"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}