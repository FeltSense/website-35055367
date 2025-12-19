'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
            >
              Bloom & Wild
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <a
              href="#features"
              className={`font-medium transition-colors duration-200 hover:text-primary-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Features
            </a>
            <a
              href="#pricing"
              className={`font-medium transition-colors duration-200 hover:text-primary-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className={`font-medium transition-colors duration-200 hover:text-primary-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className={`font-medium transition-colors duration-200 hover:text-primary-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contact
            </a>
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <a
              href="#pricing"
              className="hidden sm:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Your Transformation
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <a
              href="#features"
              onClick={closeMenu}
              className="block py-3 px-4 text-gray-700 font-medium hover:text-primary-500 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={closeMenu}
              className="block py-3 px-4 text-gray-700 font-medium hover:text-primary-500 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              onClick={closeMenu}
              className="block py-3 px-4 text-gray-700 font-medium hover:text-primary-500 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="block py-3 px-4 text-gray-700 font-medium hover:text-primary-500 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              Contact
            </a>
            <div className="pt-4">
              <a
                href="#pricing"
                onClick={closeMenu}
                className="block w-full text-center py-3 px-6 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-lg"
              >
                Start Your Transformation
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}