import Link from "next/link"
import { Facebook, Instagram, CircleFadingPlus, Coffee, Beer } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-cream relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-pattern-dots"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center mb-8 md:mb-0">
            <div className="mr-4">
              <img src="/logo_blanco.png" alt="Logo" className="w-25 h-16" />
            </div>
          </div>

          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/profile.php?id=61574731992976" className="bg-cream/10 hover:bg-cream/20 text-cream p-3 rounded-full transition-colors">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://www.instagram.com/cafe.el.reloj/" className="bg-cream/10 hover:bg-cream/20 text-cream p-3 rounded-full transition-colors">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://www.tiktok.com/@cafeelreloj" className="bg-cream/10 hover:bg-cream/20 text-cream p-3 rounded-full transition-colors">
              <CircleFadingPlus className="h-6 w-6" />
              <span className="sr-only">Tiktok</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="text-xl font-ralsteda mb-6 text-cream flex items-center">
              <div className="w-8 h-1 bg-cream/40 mr-3"></div>
              Sobre Nosotros
            </h4>
            <p className="font-century text-cream/80 mb-6 leading-relaxed">
              Un espacio elegante donde el tiempo se detiene para disfrutar de los mejores cafés y cervezas artesanales de barril.
              Creamos experiencias únicas en un ambiente acogedor y sofisticado.
            </p>
          </div>


          <div>
            <h4 className="text-xl font-ralsteda mb-6 text-cream flex items-center">
              <div className="w-8 h-1 bg-cream/40 mr-3"></div>
              Horario
            </h4>
            <ul className="space-y-4 font-century text-cream/80">
              <li className="flex justify-between items-center border-b border-cream/10 pb-2">
                <span>Lunes a Jueves:</span>
                <span className="text-cream">8:00 - 22:00</span>
              </li>
              <li className="flex justify-between items-center border-b border-cream/10 pb-2">
                <span>Viernes y Sábado:</span>
                <span className="text-cream">8:00 - 00:00</span>
              </li>
              <li className="flex justify-between items-center border-b border-cream/10 pb-2">
                <span>Domingo:</span>
                <span className="text-cream">9:00 - 20:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-coffee"></div>

        <div className="text-center font-century text-cream/60 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} El Reloj Coffee and Beer. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

