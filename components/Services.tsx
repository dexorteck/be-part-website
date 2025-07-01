'use client'

import React from 'react'
import { Lightbulb, Calendar, MessageCircle } from 'lucide-react'

export default function Services() {
  return (
    <section className="py-16 sm:py-20 macbook-small:py-24 macbook:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-18 macbook-small:mb-20 macbook:mb-24">
          <h2 className="text-3xl sm:text-4xl macbook-small:text-5xl macbook:text-6xl macbook-large:text-7xl font-brand font-bold text-gray-900 mb-4 sm:mb-6">
            SERVIÇOS
          </h2>
          <div className="mx-auto mt-4 sm:mt-6 mb-8 sm:mb-10 w-16 sm:w-20 h-1 bg-gradient-to-r from-brand-teal-dark to-brand-teal-light"></div>
          <p className="text-lg sm:text-xl macbook-small:text-2xl macbook:text-3xl text-gray-600 max-w-3xl sm:max-w-4xl macbook:max-w-5xl mx-auto leading-relaxed">
            Oferecemos soluções integradas para elevar a sua marca e criar experiências que fazem a diferença.
          </p>
        </div>

        {/* Services Grid - Layout original restaurado */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Consultoria */}
          <div className="group bg-gray-925 text-white p-12 rounded-2xl shadow-elegant hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal-light/20 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Lightbulb className="w-8 h-8 text-gray-925" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-brand font-bold mb-1">
                CONSULTORIA
              </h3>
              <p className="text-xs text-gray-400 italic mb-3" style={{ fontFamily: 'cursive' }}>
                crafted by
              </p>
              <p className="text-lg font-medium text-gray-300 mb-6">
                Soluções alinhadas com objetivos claros e comunicação eficaz.
              </p>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-teal-light rounded-full mr-3"></div>
                  Análise estratégica
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-teal-light rounded-full mr-3"></div>
                  Planeamento de comunicação
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-teal-light rounded-full mr-3"></div>
                  Consultoria organizacional
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-teal-light rounded-full mr-3"></div>
                  Desenvolvimento de marca
                </li>
              </ul>
            </div>
          </div>

          {/* Eventos */}
          <div className="group bg-brand-teal-light text-gray-925 p-12 rounded-2xl shadow-elegant hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="bg-gray-925 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Calendar className="w-8 h-8 text-brand-teal-light" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-brand font-bold mb-1">
                EVENTOS
              </h3>
              <p className="text-xs text-gray-400 italic mb-3" style={{ fontFamily: 'cursive' }}>
                crafted by
              </p>
              <p className="text-lg font-medium text-gray-925 mb-6">
                Planeamento, produção e logística de experiências memoráveis.
              </p>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-925 rounded-full mr-3"></div>
                  Eventos corporativos
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-925 rounded-full mr-3"></div>
                  Conferências
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-925 rounded-full mr-3"></div>
                  Workshops
                </li>
              </ul>
            </div>
          </div>

          {/* Comunicação */}
          <div className="group bg-brand-teal-dark text-white p-12 rounded-2xl shadow-elegant hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-brand-teal-light/20 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <MessageCircle className="w-8 h-8 text-brand-teal-dark" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-brand font-bold mb-1">
                COMUNICAÇÃO
              </h3>
              <p className="text-xs text-gray-400 italic mb-3" style={{ fontFamily: 'cursive' }}>
                crafted by
              </p>
              <p className="text-lg font-medium text-brand-teal-light mb-6">
                Identidade visual, redes sociais, conteúdo, media training e mais.
              </p>
              
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-teal-light rounded-full mr-3"></div>
                  Identidade visual
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-teal-light rounded-full mr-3"></div>
                  Gestão de redes sociais
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-teal-light rounded-full mr-3"></div>
                  Criação de conteúdo
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-teal-light rounded-full mr-3"></div>
                  Websites
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-teal-light rounded-full mr-3"></div>
                  Media training
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 