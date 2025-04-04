"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

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
      <div ref={parallaxRef} className="absolute inset-0 z-0">
        <Image
          src="fondo.jpg"
          alt="Granos de café El Reloj"
          fill
          priority
          className="object-cover object-center"
        />
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

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex justify-center items-center mb-6">
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10 }}
              className="relative"
            >
              <img src="/logo.png" alt="Logo" className="w-50 h-40" />
              
            </motion.div>
          </div>

          <div className="h-1 w-32 bg-gradient-to-r from-secondary via-cream to-secondary mx-auto mb-8" />

          <p className="text-lg md:text-2xl text-cream/90 mb-12 max-w-2xl mx-auto font-century-bold">
            Un espacio elegante donde el tiempo se detiene para disfrutar de los mejores cafés y cervezas artesanales de barril.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
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

