'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import FingerprintAnimation from './FingerprintAnimation'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] h-[90vh] sm:min-h-screen sm:h-screen flex items-center justify-center bg-gray-900 overflow-hidden py-10 sm:py-16">
      {/* Dark Background with Custom Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-radial from-brand-teal-light/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-brand-teal-light/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-brand-teal-dark/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-3xl sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center h-full">
        <div className="space-y-6 sm:space-y-8">
          {/* Fingerprint Animation - Positioned above title */}
          <div className="mb-4 sm:mb-6 -mt-6 sm:mt-0">
            <FingerprintAnimation />
          </div>

          {/* Main Headline */}
          <div className="space-y-2 sm:space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-brand font-bold leading-tight">
              <span className="block text-white">BE PART:</span>
              <span className="block gradient-text">EVERY PIECE</span>
              <span className="block text-brand-teal-light">MATTERS</span>
            </h1>
          </div>

          {/* Subheadline */}
          <div className="max-w-2xl mx-auto pt-2 sm:pt-4">
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed">
              Eventos. Comunicação. Consultoria Estratégica.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4 sm:pt-6">
            <button className="group btn-sweep inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-black transition-all duration-300 shadow-elegant hover:shadow-2xl transform hover:-translate-y-1">
              Vamos conversar
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-gray-400">
          <span className="text-xs sm:text-sm font-light">Scroll</span>
          <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-brand-teal-light to-transparent"></div>
        </div>
      </div>
    </section>
  )
} 