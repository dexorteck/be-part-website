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
    <section className="relative min-h-[85vh] h-[85vh] sm:min-h-[90vh] sm:h-[90vh] macbook-small:min-h-screen macbook-small:h-screen flex items-center justify-center bg-gray-900 overflow-hidden py-8 sm:py-12 macbook-small:py-16">
      {/* Dark Background with Custom Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      
      {/* Background Pattern - Otimizado para MacBooks */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-radial from-brand-teal-light/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-48 sm:w-64 macbook-small:w-80 macbook:w-96 h-48 sm:h-64 macbook-small:h-80 macbook:h-96 bg-brand-teal-light/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-64 macbook-small:w-80 macbook:w-96 h-48 sm:h-64 macbook-small:h-80 macbook:h-96 bg-brand-teal-dark/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-3xl sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center h-full">
        <div className="space-y-1 sm:space-y-2 macbook-small:space-y-3 macbook:space-y-4">
          <div className="">
            {/* Fingerprint Animation - sem margem inferior */}
            <div className="relative z-30">
              <FingerprintAnimation />
            </div>

            {/* Main Headline - "BE PART" em texto grande, colado ao logo */}
            <div className="relative z-20 -mt-16 sm:-mt-20 macbook-small:-mt-24 macbook:-mt-28">
              <h1 className="text-8xl sm:text-9xl macbook-small:text-[10rem] macbook:text-[12rem] macbook-large:text-[14rem] font-brand font-bold leading-none">
                <span className="block text-white">BE PART</span>
              </h1>
              {/* "EVERY PIECE MATTERS" colado ao BE PART, maior */}
              <p className="text-2xl sm:text-3xl macbook-small:text-4xl macbook:text-5xl text-gray-300 font-light leading-none font-montserrat -mt-4 sm:-mt-6 macbook-small:-mt-8 macbook:-mt-10">
                EVERY PIECE MATTERS
              </p>
            </div>

            {/* Subheadline - "Consultoria. Eventos. Comunicação" ainda mais afastado */}
            <div className="max-w-2xl mx-auto pt-16 sm:pt-20 macbook-small:pt-24 macbook:pt-28 relative z-20">
              <p className="text-base sm:text-xl macbook-small:text-2xl macbook:text-3xl text-gray-300 font-light leading-relaxed">
                Consultoria. Eventos. Comunicação.
              </p>
            </div>
          </div>

          {/* CTA Button - Otimizado para MacBooks */}
          <div className="pt-6 sm:pt-8 macbook-small:pt-10 macbook:pt-12 pb-2 sm:pb-4 macbook-small:pb-6 macbook:pb-8 relative z-20">
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
      <div className="absolute bottom-2 sm:bottom-4 macbook-small:bottom-6 macbook:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center">
          <div className="w-px h-3 sm:h-6 macbook-small:h-8 macbook:h-10 bg-gradient-to-b from-brand-teal-light to-transparent animate-pulse"></div>
        </div>
      </div>
    </section>
  )
} 