'use client'

import React, { useState, useCallback, memo, useEffect } from 'react'

const faqs = [
  {
    question: 'O que é a Be Part?',
    answer: 'A Be Part é uma empresa que atua nas áreas de eventos, comunicação e consultoria estratégica. Criamos experiências, campanhas e soluções pensadas à medida de cada cliente.'
  },
  {
    question: 'O que são as Evergreen Solutions?',
    answer: 'O Evergreen Solutions é o nosso selo de sustentabilidade. Sempre que possível, apresentamos alternativas mais sustentáveis nas diferentes fases do projeto — seja em eventos, comunicação ou consultoria. A escolha final cabe sempre ao cliente.'
  },
  {
    question: 'Podem tornar o meu evento mais sustentável?',
    answer: 'Sim. Através do selo Evergreen Solutions, propomos práticas e soluções mais responsáveis em áreas como catering, credenciação, transporte, materiais e gestão de resíduos. O cliente decide se as integra ou não.'
  },
  {
    question: 'Trabalham com empresas ou com particulares?',
    answer: 'Com ambos! Adaptamo-nos a cada desafio, seja para empresas, marcas, instituições ou projetos pessoais.'
  },
  {
    question: 'Fazem orçamentos personalizados?',
    answer: 'Sim. Cada projeto é único. Entra em contacto connosco para receber uma proposta ajustada aos teus objetivos.'
  },
]

// Detectar iOS e Safari (que têm problemas similares)
const isSafariOrIOS = () => {
  if (typeof window === 'undefined') return false
  
  const userAgent = navigator.userAgent
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) || 
                (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  
  const isSafari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent)
  
  return isIOS || isSafari
}

// Componente otimizado para iOS - solução híbrida
const FAQItem = memo(({ 
  faq, 
  index, 
  isOpen, 
  onToggle 
}: { 
  faq: { question: string; answer: string }; 
  index: number; 
  isOpen: boolean; 
  onToggle: (index: number) => void; 
}) => {
  const [isIOSDevice, setIsIOSDevice] = useState(false)

  useEffect(() => {
    setIsIOSDevice(isSafariOrIOS())
  }, [])

  const handleClick = useCallback(() => {
    onToggle(index)
  }, [index, onToggle])

  return (
    <li className="faq-item">
      <div className={`faq-container ${isOpen ? 'faq-open' : ''}`}>
        <button
          onClick={handleClick}
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${index}`}
          className={`faq-button ${isOpen ? 'faq-button-open' : ''}`}
        >
          <span className={`faq-question ${isOpen ? 'faq-question-open' : ''}`}>
            {faq.question}
          </span>
          <span className="faq-icon">
            {isOpen ? (
              <svg className="faq-icon-minus" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
              </svg>
            ) : (
              <svg className="faq-icon-plus" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
              </svg>
            )}
          </span>
        </button>
        <div
          id={`faq-panel-${index}`}
          role="region"
          aria-labelledby={`faq-header-${index}`}
          className={`faq-content ${isOpen ? 'faq-content-open' : ''} ${isIOSDevice ? 'faq-ios' : ''}`}
        >
          <div className="faq-answer">
            {faq.answer}
          </div>
        </div>
      </div>
    </li>
  )
})

FAQItem.displayName = 'FAQItem'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = useCallback((idx: number) => {
    setOpenIndex(prev => prev === idx ? null : idx)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-brand font-bold text-gray-900 mb-12 text-center">
          Perguntas Frequentes
        </h2>
        <div className="mx-auto mt-6 mb-12 w-20 h-1 bg-gradient-to-r from-brand-teal-dark to-brand-teal-light"></div>
        <ul className="faq-list" role="list">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              faq={faq}
              index={idx}
              isOpen={openIndex === idx}
              onToggle={handleToggle}
            />
          ))}
        </ul>
      </div>
    </section>
  )
} 