'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import FingerprintAnimation from './FingerprintAnimation'

export default function Hero() {
  const scrollToCTA = () => {
    const ctaSection = document.querySelector('section:last-child')
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openEmail = () => {
    window.location.href = 'mailto:geral@bepartmatters.com'
  }

  return (
    <section className="relative min-h-[85vh] h-[85vh] sm:min-h-[90vh] sm:h-[90vh] macbook-small:min-h-screen macbook-small:h-screen flex items-center justify-center bg-gray-900 overflow-hidden py-4 sm:py-8 macbook-small:py-12 macbook:py-16">
      {/* Dark Background with Custom Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      
      {/* Background Pattern - Otimizado para MacBooks */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-radial from-brand-teal-light/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-32 sm:w-48 md:w-64 macbook-small:w-80 macbook:w-96 h-32 sm:h-48 md:h-64 macbook-small:h-80 macbook:h-96 bg-brand-teal-light/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-32 sm:w-48 md:w-64 macbook-small:w-80 macbook:w-96 h-32 sm:h-48 md:h-64 macbook-small:h-80 macbook:h-96 bg-brand-teal-dark/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-3xl sm:max-w-5xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center h-full">
        <div className="space-y-1 sm:space-y-2 macbook-small:space-y-3 macbook:space-y-4">
          <div className="">
            {/* Fingerprint Animation - sem margem inferior */}
            <div className="relative z-30">
              <FingerprintAnimation />
            </div>

            {/* Main Headline - "BE PART" em texto grande, colado ao logo */}
            <div className="relative z-20 -mt-8 sm:-mt-12 md:-mt-16 macbook-small:-mt-20 macbook:-mt-24">
              <h1 className="text-7xl sm:text-8xl md:text-9xl macbook-small:text-[10rem] macbook:text-[12rem] font-brand font-bold leading-none">
                <span className="block text-white">BE PART</span>
              </h1>
              {/* "EVERY PIECE MATTERS" colado ao BE PART, maior */}
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl macbook-small:text-5xl macbook:text-6xl text-gray-300 font-light leading-none font-montserrat -mt-2 sm:-mt-3 md:-mt-4 lg:-mt-6 xl:-mt-8 macbook-small:-mt-10 macbook:-mt-12">
                EVERY PIECE MATTERS
              </p>
            </div>

            {/* Subheadline - "Consultoria. Eventos. Comunicação" ainda mais afastado */}
            <div className="max-w-2xl mx-auto pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 macbook-small:pt-28 macbook:pt-32 relative z-20">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl macbook-small:text-3xl macbook:text-4xl text-gray-300 font-light leading-relaxed">
                Consultoria. Eventos. Comunicação.
              </p>
            </div>
          </div>

          {/* CTA Button - Otimizado para MacBooks */}
          <div className="pt-4 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-12 macbook-small:pt-14 macbook:pt-16 pb-2 sm:pb-4 md:pb-6 lg:pb-8 macbook-small:pb-10 macbook:pb-12 relative z-20">
            <button 
              onClick={scrollToCTA}
              className="group btn-sweep inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-black transition-all duration-300 shadow-elegant hover:shadow-2xl transform hover:-translate-y-1"
            >
              Vamos conversar
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Otimizado para MacBooks */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8 macbook-small:bottom-10 macbook:bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center">
          <div className="w-px h-3 sm:h-4 md:h-6 lg:h-8 xl:h-10 macbook-small:h-12 macbook:h-14 bg-gradient-to-b from-brand-teal-light to-transparent animate-pulse"></div>
        </div>
      </div>
    </section>
  )
} 