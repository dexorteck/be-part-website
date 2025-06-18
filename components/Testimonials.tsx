'use client'

import React from 'react'

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-brand font-bold text-gray-900 mb-6">
            EQUIPA
          </h2>
        </div>

        {/* Founders Photos Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
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
            <p className="text-lg font-medium text-brand-teal-dark uppercase tracking-wide">
              CO - FOUNDER AND CEO
            </p>
          </div>

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
            <p className="text-lg font-medium text-brand-teal-dark uppercase tracking-wide">
              CO - FOUNDER AND COMMUNICATION DIRECTOR
            </p>
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