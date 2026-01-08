"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-electric-blue/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary-foreground">
          Connect<span className="text-electric-blue">Expo</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#services" className="text-primary-foreground hover:text-electric-blue transition">
            Услуги
          </a>
          <a href="#solutions" className="text-primary-foreground hover:text-electric-blue transition">
            Решения
          </a>
          <a href="#portfolio" className="text-primary-foreground hover:text-electric-blue transition">
            Проекты
          </a>
          <a href="#news" className="text-primary-foreground hover:text-electric-blue transition">
            Новости
          </a>
          <Button className="bg-electric-blue hover:bg-electric-blue/90 text-primary">Консультация</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-primary-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-electric-blue/20">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a href="#services" className="text-primary-foreground hover:text-electric-blue">
              Услуги
            </a>
            <a href="#solutions" className="text-primary-foreground hover:text-electric-blue">
              Решения
            </a>
            <a href="#portfolio" className="text-primary-foreground hover:text-electric-blue">
              Проекты
            </a>
            <a href="#news" className="text-primary-foreground hover:text-electric-blue">
              Новости
            </a>
            <Button className="bg-electric-blue hover:bg-electric-blue/90 text-primary w-full">Консультация</Button>
          </div>
        </div>
      )}
    </nav>
  )
}

