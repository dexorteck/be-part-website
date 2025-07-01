'use client'

import React from 'react'
import { Leaf, Recycle, Smartphone, Heart } from 'lucide-react'

export default function Evergreen() {
  return (
    <section className="py-16 sm:py-20 macbook-small:py-24 macbook:py-28 bg-gradient-to-br from-gray-925 to-gray-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-18 macbook-small:mb-20 macbook:mb-24">
          <h2 className="text-3xl sm:text-4xl macbook-small:text-5xl macbook:text-6xl font-brand font-bold text-white leading-tight">
            EVERGREEN SOLUTIONS
          </h2>
          <div className="mt-4 sm:mt-6 mx-auto w-16 sm:w-20 h-1 bg-gradient-to-r from-brand-teal-dark to-brand-teal-light"></div>
          <p className="mt-6 sm:mt-8 max-w-3xl sm:max-w-4xl macbook:max-w-5xl mx-auto text-lg sm:text-xl macbook-small:text-2xl text-gray-300 leading-relaxed">
            O selo Evergreen Solutions, é uma garantia de que cada evento pode integrar opções mais ecológicas sem comprometer a sua identidade e objetivos.
          </p>
        </div>

        {/* Solutions Grid - Otimizado para MacBooks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 macbook-small:gap-10 macbook:gap-12 mb-16 sm:mb-18 macbook-small:mb-20 macbook:mb-24">
          <div className="group text-center">
            <div className="inline-flex items-center justify-center w-16 sm:w-18 macbook-small:w-20 macbook:w-22 h-16 sm:h-18 macbook-small:h-20 macbook:h-22 bg-gradient-to-br from-brand-teal-dark/30 to-brand-teal-light/20 rounded-full mb-4 sm:mb-6 transition-all duration-300 border border-brand-teal-light/30">
              <Leaf className="w-8 sm:w-9 macbook-small:w-10 macbook:w-11 h-8 sm:h-9 macbook-small:h-10 macbook:h-11 text-brand-teal-light group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-lg sm:text-xl macbook-small:text-2xl macbook:text-3xl font-brand font-semibold text-white mb-2 sm:mb-3 group-hover:text-brand-teal-light transition-colors duration-300">
              Catering Sustentável
            </h3>
            <p className="text-sm sm:text-base macbook-small:text-lg text-gray-400">
              Produtos Locais e da Época
            </p>
          </div>
          <div className="group text-center">
            <div className="inline-flex items-center justify-center w-16 sm:w-18 macbook-small:w-20 macbook:w-22 h-16 sm:h-18 macbook-small:h-20 macbook:h-22 bg-gradient-to-br from-brand-teal-dark/30 to-brand-teal-light/20 rounded-full mb-4 sm:mb-6 transition-all duration-300 border border-brand-teal-light/30">
              <Recycle className="w-8 sm:w-9 macbook-small:w-10 macbook:w-11 h-8 sm:h-9 macbook-small:h-10 macbook:h-11 text-brand-teal-light group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-lg sm:text-xl macbook-small:text-2xl macbook:text-3xl font-brand font-semibold text-white mb-2 sm:mb-3 group-hover:text-brand-teal-light transition-colors duration-300">
              Gestão eficiente de resíduos
            </h3>
            <p className="text-sm sm:text-base macbook-small:text-lg text-gray-400">
              Redução e Reciclagem
            </p>
          </div>
          <div className="group text-center">
            <div className="inline-flex items-center justify-center w-16 sm:w-18 macbook-small:w-20 macbook:w-22 h-16 sm:h-18 macbook-small:h-20 macbook:h-22 bg-gradient-to-br from-brand-teal-dark/30 to-brand-teal-light/20 rounded-full mb-4 sm:mb-6 transition-all duration-300 border border-brand-teal-light/30">
              <Smartphone className="w-8 sm:w-9 macbook-small:w-10 macbook:w-11 h-8 sm:h-9 macbook-small:h-10 macbook:h-11 text-brand-teal-light group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-lg sm:text-xl macbook-small:text-2xl macbook:text-3xl font-brand font-semibold text-white mb-2 sm:mb-3 group-hover:text-brand-teal-light transition-colors duration-300">
              Credenciação eletrónica
            </h3>
            <p className="text-sm sm:text-base macbook-small:text-lg text-gray-400">
              Tecnologia e Serviços Paperless
            </p>
          </div>
          <div className="group text-center">
            <div className="inline-flex items-center justify-center w-16 sm:w-18 macbook-small:w-20 macbook:w-22 h-16 sm:h-18 macbook-small:h-20 macbook:h-22 bg-gradient-to-br from-brand-teal-dark/30 to-brand-teal-light/20 rounded-full mb-4 sm:mb-6 transition-all duration-300 border border-brand-teal-light/30">
              <Heart className="w-8 sm:w-9 macbook-small:w-10 macbook:w-11 h-8 sm:h-9 macbook-small:h-10 macbook:h-11 text-brand-teal-light group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-lg sm:text-xl macbook-small:text-2xl macbook:text-3xl font-brand font-semibold text-white mb-2 sm:mb-3 group-hover:text-brand-teal-light transition-colors duration-300">
              Outras soluções
            </h3>
            <p className="text-sm sm:text-base macbook-small:text-lg text-gray-400">
              Responsáveis e com muito impacto
            </p>
          </div>
        </div>

        {/* Additional Info - Otimizado para MacBooks */}
        <div className="mt-16 sm:mt-18 macbook-small:mt-20 macbook:mt-24">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 macbook-small:gap-16 macbook:gap-20 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl macbook-small:text-3xl macbook:text-4xl font-brand font-bold text-white mb-4 sm:mb-6">
                COMPROMISSO com o futuro
              </h3>
              <p className="text-base sm:text-lg macbook-small:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6">
                O nosso selo de garantia reflete o compromisso da Be Part, dos nossos parceiros e fornecedores.
              </p>
              <p className="text-base sm:text-lg macbook-small:text-xl text-gray-300 leading-relaxed">
                Garantimos que todos os serviços que tiverem este selo seguem práticas ecológicas e responsáveis, respeitando o planeta e as comunidades locais.
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="/assets/icons/cartões de visita Be Part-2.png" 
                alt="Logo Evergreen by Be Part"
                className="mx-auto w-80 sm:w-96 macbook-small:w-[28rem] macbook:w-[36rem] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 