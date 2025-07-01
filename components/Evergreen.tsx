'use client'

import React from 'react'
import { Leaf, Recycle, Smartphone, Heart } from 'lucide-react'

export default function Evergreen() {
  const solutions = [
    {
      icon: Leaf,
      title: 'Catering Ecológico',
      description: 'Produtos locais e sustentáveis'
    },
    {
      icon: Recycle,
      title: 'Gestão de Resíduos',
      description: 'Redução e reciclagem responsável'
    },
    {
      icon: Smartphone,
      title: 'Credenciação Eletrónica',
      description: 'Tecnologia sem papel'
    },
    {
      icon: Heart,
      title: 'Impacto Social',
      description: 'Eventos com propósito'
    }
  ]

  return (
    <section className="py-16 sm:py-20 macbook-small:py-24 macbook:py-28 bg-gradient-to-br from-gray-925 to-gray-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-18 macbook-small:mb-20 macbook:mb-24">
          <h2 className="text-3xl sm:text-4xl macbook-small:text-5xl macbook:text-6xl font-brand font-bold text-white leading-tight">
            Evergreen Solutions
          </h2>
          <div className="mt-4 sm:mt-6 mx-auto w-16 sm:w-20 h-1 bg-gradient-to-r from-brand-teal-dark to-brand-teal-light"></div>
          <p className="mt-6 sm:mt-8 max-w-3xl sm:max-w-4xl macbook:max-w-5xl mx-auto text-lg sm:text-xl macbook-small:text-2xl text-gray-300 leading-relaxed">
            Opções sustentáveis para eventos com impacto positivo. Catering ecológico, gestão de resíduos, 
            credenciação eletrónica e mais.
          </p>
        </div>

        {/* Solutions Grid - Otimizado para MacBooks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 macbook-small:gap-10 macbook:gap-12 mb-16 sm:mb-18 macbook-small:mb-20 macbook:mb-24">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon
            return (
              <div 
                key={index}
                className="group text-center"
              >
                {/* Icon Container - Otimizado para MacBooks */}
                <div className="inline-flex items-center justify-center w-16 sm:w-18 macbook-small:w-20 macbook:w-22 h-16 sm:h-18 macbook-small:h-20 macbook:h-22 bg-gradient-to-br from-brand-teal-dark/30 to-brand-teal-light/20 rounded-full mb-4 sm:mb-6 group-hover:from-brand-teal-dark/40 group-hover:to-brand-teal-light/30 transition-all duration-300 border border-brand-teal-light/30">
                  <IconComponent className="w-8 sm:w-9 macbook-small:w-10 macbook:w-11 h-8 sm:h-9 macbook-small:h-10 macbook:h-11 text-brand-teal-light group-hover:text-brand-teal-dark transition-colors duration-300" />
                </div>

                {/* Title - Otimizado para MacBooks */}
                <h3 className="text-lg sm:text-xl macbook-small:text-2xl macbook:text-3xl font-brand font-semibold text-white mb-2 sm:mb-3 group-hover:text-brand-teal-light transition-colors duration-300">
                  {solution.title}
                </h3>

                {/* Description - Otimizado para MacBooks */}
                <p className="text-sm sm:text-base macbook-small:text-lg text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {solution.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Additional Info - Otimizado para MacBooks */}
        <div className="mt-16 sm:mt-18 macbook-small:mt-20 macbook:mt-24">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 macbook-small:gap-16 macbook:gap-20 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl macbook-small:text-3xl macbook:text-4xl font-brand font-bold text-white mb-4 sm:mb-6">
                Compromisso com o Futuro
              </h3>
              <p className="text-base sm:text-lg macbook-small:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6">
                Acreditamos que eventos podem ser um catalisador para mudanças positivas. 
                Cada decisão que tomamos considera o impacto ambiental e social.
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center text-sm sm:text-base macbook-small:text-lg text-gray-300">
                  <div className="w-2 h-2 bg-brand-teal-light rounded-full mr-3 flex-shrink-0"></div>
                  Redução de 80% no uso de papel
                </li>
                <li className="flex items-center text-sm sm:text-base macbook-small:text-lg text-gray-300">
                  <div className="w-2 h-2 bg-brand-teal-light rounded-full mr-3 flex-shrink-0"></div>
                  Parcerias com fornecedores locais
                </li>
                <li className="flex items-center text-sm sm:text-base macbook-small:text-lg text-gray-300">
                  <div className="w-2 h-2 bg-brand-teal-light rounded-full mr-3 flex-shrink-0"></div>
                  Compensação de carbono
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="inline-block bg-gradient-to-br from-brand-teal-dark to-brand-teal-light p-1 rounded-2xl">
                <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 macbook-small:p-10 macbook:p-12">
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl macbook-small:text-5xl macbook:text-6xl font-bold gradient-text mb-2">100%</div>
                    <div className="text-brand-teal-light font-medium text-base sm:text-lg macbook-small:text-xl">Eventos Sustentáveis</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 