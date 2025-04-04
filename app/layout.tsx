import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import './globals.css'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "El Reloj - Coffee and Beer",
  description:
    "Un espacio elegante donde el tiempo se detiene para disfrutar de los mejores cafés y cervezas artesanales.",
    // Favicon
    icons: [{ rel: 'icon', url: '/taza_blanco.png' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="light" style={{ colorScheme: "light" }}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

