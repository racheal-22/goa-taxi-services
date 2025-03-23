"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-yellow-500">
            GoaTaxi
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-yellow-500 transition-colors">
              Home
            </Link>
            <Link href="/services" className="hover:text-yellow-500 transition-colors">
              Services
            </Link>
            <Link href="/pricing" className="hover:text-yellow-500 transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="hover:text-yellow-500 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Call Button */}
          <div className="hidden md:block">
            <a
              href="tel:+919699309907"
              className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full font-medium transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              +91 96993 09907
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-yellow-500 transition-colors py-2" onClick={toggleMenu}>
                Home
              </Link>
              <Link href="/services" className="hover:text-yellow-500 transition-colors py-2" onClick={toggleMenu}>
                Services
              </Link>
              <Link href="/pricing" className="hover:text-yellow-500 transition-colors py-2" onClick={toggleMenu}>
                Pricing
              </Link>
              <Link href="/contact" className="hover:text-yellow-500 transition-colors py-2" onClick={toggleMenu}>
                Contact
              </Link>
              <a
                href="tel:+919699309907"
                className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full font-medium transition-colors w-fit"
              >
                <Phone className="w-4 h-4 mr-2" />
                +91 96993 09907
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

