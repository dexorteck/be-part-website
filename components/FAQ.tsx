'use client'

import React, { useState } from 'react'

const faqs = [
  {
    question: 'O que é a Be Part?',
    answer: 'A Be Part é uma empresa que atua nas áreas de eventos, comunicação e consultoria estratégica. Criamos experiências, campanhas e soluções pensadas à medida de cada cliente.'
  },
  {
    question: 'Quais os serviços que oferecem?',
    answer: 'Dividimos a nossa atividade em três grandes áreas:\n• Eventos – Organização, produção e gestão de eventos corporativos, culturais e institucionais (Powered by Be Part);\n• Comunicação – Estratégia de marca, gestão de redes sociais, marketing digital e design (Crafted by Be Part);\n• Consultoria Estratégica – Inovação, sustentabilidade e posicionamento de marca (Taylored by Be Part).'
  },
  {
    question: 'O que são as Evergreen Solutions?',
    answer: 'O Evergreen Solutions é o nosso selo de sustentabilidade. Sempre que possível, apresentamos alternativas mais sustentáveis nas diferentes fases do projeto — seja em eventos, comunicação ou consultoria. A escolha final cabe sempre ao cliente.'
  },
  {
    question: 'Trabalham com empresas ou com particulares?',
    answer: 'Com ambos! Adaptamo-nos a cada desafio, seja para empresas, marcas, instituições ou projetos pessoais.'
  },
  {
    question: 'Atuam em todo o país?',
    answer: 'Sim. A Be Part desenvolve projetos e organiza eventos em qualquer ponto do território nacional.'
  },
  {
    question: 'Fazem orçamentos personalizados?',
    answer: 'Sim. Cada projeto é único. Entra em contacto connosco para receber uma proposta ajustada aos teus objetivos.'
  },
  {
    question: 'Como posso pedir um orçamento ou entrar em contacto?',
    answer: 'Podes preencher o formulário no site, enviar-nos um e-mail ou contactar-nos pelas redes sociais.'
  },
  {
    question: 'A Be Part faz branding e criação de logótipos?',
    answer: 'Sim. O serviço Crafted by Be Part inclui naming, identidade visual, branding, rebranding, packaging e mais.'
  },
  {
    question: 'Podem tornar o meu evento mais sustentável?',
    answer: 'Sim. Através do selo Evergreen Solutions, propomos práticas e soluções mais responsáveis em áreas como catering, credenciação, transporte, materiais e gestão de resíduos. O cliente decide se as integra ou não.'
  },
  {
    question: 'O que significa "Be Part"?',
    answer: '“Be Part” é mais do que um nome – é uma forma de estar. Significa criar em conjunto, envolver e deixar marca. Acreditamos que fazer parte é construir algo com impacto real e duradouro.'
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-brand font-bold text-gray-900 mb-12 text-center">Perguntas Frequentes</h2>
        <ul className="space-y-4" role="list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <li key={idx} className="">
                <div
                  className={`rounded-2xl border border-gray-200 shadow-md bg-white transition-all duration-300 ${isOpen ? 'border-brand-teal-dark shadow-lg' : ''}`}
                >
                  <button
                    onClick={() => handleToggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                    className={`w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-brand-teal-dark rounded-2xl transition-all duration-200 ${isOpen ? 'bg-brand-teal-light/10' : 'hover:bg-brand-teal-light/5'}`}
                  >
                    <span className={`text-lg md:text-xl font-semibold transition-colors duration-200 ${isOpen ? 'text-brand-teal-dark' : 'text-gray-900'}`}>{faq.question}</span>
                    <span className="ml-4 flex items-center justify-center">
                      {isOpen ? (
                        <svg className="w-6 h-6 text-brand-teal-dark" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" /></svg>
                      ) : (
                        <svg className="w-6 h-6 text-brand-teal-dark" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" /></svg>
                      )}
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${idx}`}
                    role="region"
                    aria-labelledby={`faq-header-${idx}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}
                    style={{ transitionProperty: 'max-height, opacity, padding' }}
                  >
                    <div className="px-6 text-gray-700 text-base md:text-lg whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
} 