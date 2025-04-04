"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Coffee, Beer, Utensils } from "lucide-react"

type MenuItem = {
  name: string
  description: string
  price: string
  highlight?: boolean
}

type MenuCategory = {
  name: string
  items: MenuItem[]
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState("cafe")

  const menuData: Record<string, MenuCategory[]> = {
    cafe: [
      {
        name: "Espresso",
        items: [
          {
            name: "Espresso",
            description: "Intenso y aromático",
            price: "$2.50",
          },
          {
            name: "Americano",
            description: "Espresso con agua caliente",
            price: "$3.00",
          },
          {
            name: "Cappuccino",
            description: "Espresso con leche espumada",
            price: "$3.50",
            highlight: true,
          },
          {
            name: "Latte",
            description: "Espresso con leche cremosa",
            price: "$3.75",
          },
        ],
      },
      {
        name: "Especialidades",
        items: [
          {
            name: "Moka",
            description: "Espresso, chocolate y leche",
            price: "$4.25",
          },
          {
            name: "Caramel Macchiato",
            description: "Vainilla, espresso y caramelo",
            price: "$4.50",
            highlight: true,
          },
          {
            name: "Affogato",
            description: "Espresso sobre helado de vainilla",
            price: "$5.00",
          },
        ],
      },
    ],
    cerveza: [
      {
        name: "Cervezas Artesanales de Barril",
        items: [
          {
            name: "IPA Local",
            description: "Notas cítricas y amargor equilibrado",
            price: "$5.50",
            highlight: true,
          },
          {
            name: "Stout",
            description: "Cremosa con notas de café y chocolate",
            price: "$6.00",
          },
          {
            name: "Amber Ale",
            description: "Caramelo y malta con final seco",
            price: "$5.75",
          },
          {
            name: "Wheat Beer",
            description: "Refrescante con notas de cítricos",
            price: "$5.50",
          },
        ],
      },
      {
        name: "Cervezas Importadas",
        items: [
          {
            name: "Belgian Tripel",
            description: "Compleja con notas frutales",
            price: "$7.00",
            highlight: true,
          },
          {
            name: "German Pilsner",
            description: "Clásica, limpia y refrescante",
            price: "$6.50",
          },
          {
            name: "English Porter",
            description: "Robusta con notas tostadas",
            price: "$6.75",
          },
        ],
      },
    ],
    comida: [
      {
        name: "Para Compartir",
        items: [
          {
            name: "Tabla de Quesos",
            description: "Selección de quesos artesanales",
            price: "$12.00",
            highlight: true,
          },
          {
            name: "Bruschetta",
            description: "Pan artesanal con tomate y albahaca",
            price: "$8.50",
          },
          {
            name: "Nachos Gourmet",
            description: "Con guacamole y pico de gallo",
            price: "$10.00",
          },
        ],
      },
      {
        name: "Sándwiches",
        items: [
          {
            name: "Club Sándwich",
            description: "Pollo, tocino, lechuga y tomate",
            price: "$9.50",
            highlight: true,
          },
          {
            name: "Veggie Wrap",
            description: "Vegetales asados y hummus",
            price: "$8.75",
          },
          {
            name: "Panini Caprese",
            description: "Mozzarella, tomate y pesto",
            price: "$9.00",
          },
        ],
      },
    ],
  }

  const tabs = [
    { id: "cafe", label: "Café", icon: <Coffee className="h-5 w-5" /> },
    { id: "cerveza", label: "Cerveza", icon: <Beer className="h-5 w-5" /> },
    { id: "comida", label: "Comida", icon: <Utensils className="h-5 w-5" /> },
  ]

  return (
    <section id="menú" className="py-20 bg-pattern-light relative">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-secondary/20 via-transparent to-primary/20"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-ralsteda text-primary mb-4 text-gradient">Nuestro Menú</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary via-secondary to-primary mx-auto mb-8" />
          <p className="text-lg text-secondary/90 max-w-3xl mx-auto font-century">
            Descubre nuestra selección de productos elaborados con los mejores ingredientes y mucho cariño.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-sm shadow-lg p-1 border border-secondary/20">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative px-6 py-4 font-century text-lg transition-colors flex items-center gap-2",
                  activeTab === tab.id ? "text-cream" : "text-secondary hover:text-primary",
                )}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-sm"
                    initial={false}
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.icon}</span>
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-sm shadow-lg border-t-4 border-coffee"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {menuData[activeTab].map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-2xl font-ralsteda text-primary mb-6 pb-2 border-b-2 border-secondary/20 inline-block">
                    {category.name}
                  </h3>
                  <div className="space-y-6">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className={cn(
                          "flex justify-between items-start p-4 rounded-sm transition-all",
                          item.highlight
                            ? "bg-gradient-to-r from-primary/5 to-secondary/5 border-l-4 border-primary"
                            : "hover:bg-secondary/5",
                        )}
                        whileHover={{ x: 5 }}
                      >
                        <div>
                          <h4
                            className={cn("text-lg font-ralsteda", item.highlight ? "text-primary" : "text-secondary")}
                          >
                            {item.name}
                            {item.highlight && (
                              <span className="ml-2 text-xs bg-primary text-cream px-2 py-0.5 rounded-full">
                                Recomendado
                              </span>
                            )}
                          </h4>
                          <p className="text-secondary/70 font-century">{item.description}</p>
                        </div>
                        <span
                          className={cn(
                            "font-century font-semibold text-lg",
                            item.highlight ? "text-primary" : "text-secondary",
                          )}
                        >
                          {item.price}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

