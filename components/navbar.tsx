"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-cream/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <div
            className={cn("flex items-center transition-all duration-300", scrolled ? "text-primary" : "text-cream")}
          >
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10 }}
              className="mr-2"
            >
              <img src="/logo.png" alt="Logo" className="w-50 h-10" />
            </motion.div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {["Inicio", "Nosotros", "Menú", "Galería", "Contacto"].map((item, index) => (
            <Link
              key={index}
              href={`#${item.toLowerCase()}`}
              className={cn(
                "px-4 py-2 font-century relative group overflow-hidden",
                scrolled ? "text-secondary" : "text-cream",
              )}
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden transition-colors",
            scrolled ? "text-primary hover:text-secondary" : "text-cream hover:text-cream/80",
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "100vh", opacity: 1 } : { height: 0, opacity: 0 }}
        className={cn(
          "fixed inset-x-0 top-16 bg-gradient-to-b from-primary to-secondary backdrop-blur-md z-40 flex flex-col items-center justify-center overflow-hidden md:hidden",
        )}
      >
        <div className="flex flex-col items-center justify-center space-y-8 py-12">
          {["Inicio", "Nosotros", "Menú", "Galería", "Contacto"].map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={isOpen ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-cream font-century text-2xl hover:text-cream/80 transition-colors relative after:absolute after:bottom-0 after:left-1/4 after:right-1/4 after:h-0.5 after:bg-cream/40"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isOpen ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
          </motion.div>
        </div>
      </motion.div>
    </header>
  )
}

