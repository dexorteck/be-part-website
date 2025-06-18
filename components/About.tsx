'use client'

import React from 'react'

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - About Text */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-brand font-bold text-gray-900 leading-tight">
                Sobre nós
              </h2>
              <div className="mt-6 w-20 h-1 bg-gradient-to-r from-brand-teal-dark to-brand-teal-light"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
              Conectamos pessoas, ideias e experiências. Promovemos inclusão e impacto positivo. 
              <span className="gradient-text font-medium"> Cada peça conta.</span>
            </p>

            <div className="pt-8">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-brand-teal-dark rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Nossa Missão</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Transformar ideias em experiências memoráveis que conectam pessoas e geram impacto positivo na sociedade.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-brand-teal-dark rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Nossa Visão</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Ser reconhecida como referência em eventos, comunicação e consultoria estratégica em Portugal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quote */}
          <div className="lg:pl-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-6xl text-brand-teal-light font-serif leading-none">"</div>
              <div className="bg-gradient-to-br from-gray-925 to-gray-850 p-12 rounded-2xl shadow-elegant text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal-light/20 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <blockquote className="text-xl md:text-2xl font-serif leading-relaxed text-center">
                    <p className="mb-4">Para ser grande, sê inteiro:</p>
                    <p className="mb-4">nada teu exagera ou exclui.</p>
                    <p className="gradient-text font-medium">Sê todo em cada coisa.</p>
                  </blockquote>
                  <footer className="mt-8 text-center">
                    <cite className="text-brand-teal-light font-medium not-italic">— Ricardo Reis</cite>
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