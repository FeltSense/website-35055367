'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-hero-1766158556123.png"
          alt="Beautiful skincare transformation"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="space-y-8">
          {/* Main Headline */}
          <h1 
            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight transition-all duration-1000 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Transform your skin with{' '}
            <span className="text-primary-500 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              science-backed
            </span>
            , sustainable skincare
          </h1>

          {/* Subheadline */}
          <p 
            className={`text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Experience the perfect fusion of cutting-edge science and natural luxury. 
            Our sustainable formulations deliver visible results while nurturing your skin 
            and protecting our planet for future generations.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4 transition-all duration-1000 ease-out delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link 
              href="#pricing"
              className="group relative bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25 w-full sm:w-auto"
            >
              <span className="relative z-10">Start Your Transformation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link 
              href="#features"
              className="group relative bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-xl w-full sm:w-auto"
            >
              Learn More
            </Link>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-secondary-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-20 -right-20 w-32 h-32 bg-accent-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-20 left-1/4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out delay-700 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}