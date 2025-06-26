'use client'

import React from 'react'
import { ArrowRight, Mail, MapPin } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-925 via-gray-900 to-gray-850 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-teal-light/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-teal-dark/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - CTA */}
          <div className="text-center lg:text-left">
            {/* Original serif version: <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8"> */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-brand font-bold text-white leading-tight mb-8">
              <span className="block">LET US</span>
              <span className="block gradient-text">BE PART.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              Pronto para criar experiências memoráveis? Vamos transformar as suas ideias em realidade.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button className="group btn-sweep inline-flex items-center px-8 py-4 text-lg font-medium text-black transition-all duration-300 shadow-elegant hover:shadow-2xl transform hover:-translate-y-1">
                Entrar em contacto
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="lg:pl-12">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 lg:p-12">
              {/* Original serif version: <h3 className="text-2xl font-serif font-bold text-white mb-8 text-center lg:text-left"> */}
              <h3 className="text-2xl font-brand font-bold text-white mb-8 text-center lg:text-left">
                Contactos
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-teal-dark to-brand-teal-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 contact-icon">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <p className="text-white font-medium">info@bepart.pt</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-teal-dark to-brand-teal-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 contact-icon">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Localização</p>
                    <p className="text-white font-medium">Lisboa, Portugal</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-gray-400 text-sm mb-4">Siga-nos</p>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/company/be-part-events-communication/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand-teal-light transition-colors duration-300 text-sm font-medium social-link"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://www.instagram.com/bepart___?igsh=MXM1YTdtZWNxMno0eA%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand-teal-light transition-colors duration-300 text-sm font-medium social-link"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://www.facebook.com/people/Be-Part-Every-Piece-Matters/61577650228547/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand-teal-light transition-colors duration-300 text-sm font-medium social-link"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dexorteck Credit */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            Website desenvolvido por{' '}
            <a 
              href="https://instagram.com/dexorteck" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-teal-light hover:text-white font-medium transition-colors duration-300 social-link"
            >
              @dexorteck
            </a>
          </p>
        </div>
      </div>
    </section>
  )
} 