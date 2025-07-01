'use client'

import React from 'react'

export default function About() {
  return (
    <section className="py-16 sm:py-20 macbook-small:py-24 macbook:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 macbook-small:gap-16 macbook:gap-20 items-center">
          {/* Left Column - About Text */}
          <div className="space-y-6 macbook-small:space-y-8 macbook:space-y-10">
            <div>
              <h2 className="text-3xl sm:text-4xl macbook-small:text-5xl macbook:text-6xl font-brand font-bold text-gray-900 leading-tight">
                Sobre nós
              </h2>
              <div className="mt-4 sm:mt-6 w-16 sm:w-20 h-1 bg-gradient-to-r from-brand-teal-dark to-brand-teal-light"></div>
            </div>
            
            <p className="text-lg sm:text-xl macbook-small:text-2xl macbook:text-3xl text-gray-700 leading-relaxed font-light">
              Conectamos pessoas, ideias e experiências. Promovemos inclusão e impacto positivo. 
              <span className="gradient-text font-medium"> Cada peça conta.</span>
            </p>

            <div className="pt-6 macbook-small:pt-8 macbook:pt-10">
              <div className="bg-gray-50 p-6 sm:p-8 macbook-small:p-10 macbook:p-12 rounded-2xl border border-gray-100 shadow-lg">
                <div className="space-y-4 macbook-small:space-y-6 macbook:space-y-8">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-brand-teal-dark rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-base sm:text-lg macbook-small:text-xl font-semibold text-gray-900 mb-2">Nossa Missão</h3>
                      <p className="text-sm sm:text-base macbook-small:text-lg text-gray-600 leading-relaxed">
                        Transformar ideias em experiências memoráveis que conectam pessoas e geram impacto positivo na sociedade.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-2 h-2 bg-brand-teal-dark rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-base sm:text-lg macbook-small:text-xl font-semibold text-gray-900 mb-2">Nossa Visão</h3>
                      <p className="text-sm sm:text-base macbook-small:text-lg text-gray-600 leading-relaxed">
                        Ser reconhecida como referência em eventos, comunicação e consultoria estratégica em Portugal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quote */}
          <div className="lg:pl-6 macbook-small:pl-8 macbook:pl-10">
            <div className="relative">
              <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 text-4xl sm:text-5xl macbook-small:text-6xl text-brand-teal-light font-serif leading-none">"</div>
              <div className="bg-gradient-to-br from-gray-925 to-gray-850 p-8 sm:p-10 macbook-small:p-12 macbook:p-14 rounded-2xl shadow-elegant text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 sm:w-28 macbook-small:w-32 h-24 sm:h-28 macbook-small:h-32 bg-brand-teal-light/20 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <blockquote className="text-lg sm:text-xl macbook-small:text-2xl macbook:text-3xl font-serif leading-relaxed text-center">
                    <p className="mb-3 sm:mb-4">Para ser grande, sê inteiro:</p>
                    <p className="mb-3 sm:mb-4">nada teu exagera ou exclui.</p>
                    <p className="gradient-text font-medium">Sê todo em cada coisa.</p>
                  </blockquote>
                  <footer className="mt-6 sm:mt-8 text-center">
                    <cite className="text-brand-teal-light font-medium not-italic text-base sm:text-lg">— Ricardo Reis</cite>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 