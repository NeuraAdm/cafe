import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Menu from "@/components/menu"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}

