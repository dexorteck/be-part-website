'use client'

import React from 'react'
import { Mail, Linkedin } from 'lucide-react'

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-brand font-bold text-gray-900 mb-6">
            EQUIPA
          </h2>
          <div className="mx-auto mt-6 w-20 h-1 bg-gradient-to-r from-brand-teal-dark to-brand-teal-light"></div>
        </div>

        {/* Founders Photos Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
          {/* Duarte Mairos */}
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-elegant">
              <img 
                src="/assets/images/duarte_bepart.jpeg" 
                alt="Duarte Mairos" 
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 20%' }}
              />
            </div>
            <h3 className="text-2xl font-brand font-bold mb-2">
              DUARTE MAIROS
            </h3>
            <p className="text-lg font-medium text-brand-teal-dark uppercase tracking-wide mb-4">
              CO - FOUNDER AND COMMUNICATION DIRECTOR
            </p>
            
            {/* Contact Links */}
            <div className="flex justify-center space-x-4">
              <a 
                href="mailto:duartemairos@bepartmatters.com"
                className="flex items-center space-x-2 text-gray-600 hover:text-brand-teal-dark transition-colors duration-300 group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">Email</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/duarte-mairos/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-brand-teal-dark transition-colors duration-300 group"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Vítor Macias */}
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-elegant">
              <img 
                src="/assets/images/vitor.jpeg" 
                alt="Vítor Macias" 
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 20%' }}
              />
            </div>
            <h3 className="text-2xl font-brand font-bold mb-2">
              VITOR MACIAS
            </h3>
            <p className="text-lg font-medium text-brand-teal-dark uppercase tracking-wide mb-4">
              CO - FOUNDER AND EVENTS DIRECTOR
            </p>
            
            {/* Contact Links */}
            <div className="flex justify-center space-x-4">
              <a 
                href="mailto:vitormacias@bepartmatters.com"
                className="flex items-center space-x-2 text-gray-600 hover:text-brand-teal-dark transition-colors duration-300 group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">Email</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/vitor-hugo-ferreira-macias/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-brand-teal-dark transition-colors duration-300 group"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Simple Phrase */}
        <div className="text-center">
          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light max-w-3xl mx-auto">
            Conectamos pessoas, ideias e experiências. 
            <span className="gradient-text font-medium"> Every piece matters.</span>
          </p>
        </div>
      </div>
    </section>
  )
} 