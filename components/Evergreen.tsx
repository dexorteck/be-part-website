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
    <section className="py-24 bg-gradient-to-br from-gray-925 to-gray-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-brand font-bold text-white leading-tight">
            Evergreen Solutions
          </h2>
          <div className="mt-6 mx-auto w-20 h-1 bg-gradient-to-r from-brand-teal-dark to-brand-teal-light"></div>
          <p className="mt-8 max-w-4xl mx-auto text-xl text-gray-300 leading-relaxed">
            Opções sustentáveis para eventos com impacto positivo. Catering ecológico, gestão de resíduos, 
            credenciação eletrónica e mais.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon
            return (
              <div 
                key={index}
                className="group text-center"
              >
                {/* Icon Container */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-teal-dark/30 to-brand-teal-light/20 rounded-full mb-6 group-hover:from-brand-teal-dark/40 group-hover:to-brand-teal-light/30 transition-all duration-300 border border-brand-teal-light/30">
                  <IconComponent className="w-10 h-10 text-brand-teal-light group-hover:text-brand-teal-dark transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-brand font-semibold text-white mb-3 group-hover:text-brand-teal-light transition-colors duration-300">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {solution.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-brand font-bold text-white mb-6">
                Compromisso com o Futuro
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Acreditamos que eventos podem ser um catalisador para mudanças positivas. 
                Cada decisão que tomamos considera o impacto ambiental e social.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-brand-teal-light rounded-full mr-3 flex-shrink-0"></div>
                  Redução de 80% no uso de papel
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-brand-teal-light rounded-full mr-3 flex-shrink-0"></div>
                  Parcerias com fornecedores locais
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-brand-teal-light rounded-full mr-3 flex-shrink-0"></div>
                  Compensação de carbono
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="inline-block bg-gradient-to-br from-brand-teal-dark to-brand-teal-light p-1 rounded-2xl">
                <div className="bg-gray-900 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                    <div className="text-brand-teal-light font-medium">Eventos Sustentáveis</div>
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