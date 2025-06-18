'use client'

import React, { useEffect, useState } from 'react'

export default function FingerprintAnimation() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [showComplete, setShowComplete] = useState(false)

  useEffect(() => {
    // Inicia a animação
    const timer = setTimeout(() => {
      setIsAnimating(true)
    }, 500)

    // Mostra o resultado final
    const completeTimer = setTimeout(() => {
      setShowComplete(true)
    }, 2800)

    return () => {
      clearTimeout(timer)
      clearTimeout(completeTimer)
    }
  }, [])

  return (
    <div className="relative w-full h-36 flex items-center justify-center">
      {/* Container da animação */}
      <div className="relative w-80 h-28">
        
        {/* Impressão Digital Esquerda */}
        <div 
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 transition-all ease-out ${
            !isAnimating ? 'translate-x-0 opacity-100 scale-100' :
            !showComplete ? 'translate-x-20 opacity-80 scale-90' : 'translate-x-24 opacity-0 scale-50'
          }`}
          style={{ 
            transitionDuration: showComplete ? '600ms' : '2000ms'
          }}
        >
          <img 
            src="/assets/icons/esquerda.png" 
            alt="Impressão Digital Esquerda"
            className="w-28 h-36 object-contain"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(95, 223, 198, 0.5)) brightness(1.1)',
              transition: 'filter 0.6s ease'
            }}
          />
        </div>

        {/* Impressão Digital Direita */}
        <div 
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 transition-all ease-out ${
            !isAnimating ? 'translate-x-0 opacity-100 scale-100' :
            !showComplete ? '-translate-x-20 opacity-80 scale-90' : '-translate-x-24 opacity-0 scale-50'
          }`}
          style={{ 
            transitionDelay: showComplete ? '0ms' : '200ms',
            transitionDuration: showComplete ? '600ms' : '2000ms'
          }}
        >
          <img 
            src="/assets/icons/direita.png" 
            alt="Impressão Digital Direita"
            className="w-28 h-36 object-contain"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(2, 99, 90, 0.5)) brightness(1.1)',
              transition: 'filter 0.6s ease'
            }}
          />
        </div>

        {/* Linha de Conexão */}
        <div 
          className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-800 ${
            isAnimating && !showComplete ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ 
            transitionDelay: showComplete ? '0ms' : '1800ms'
          }}
        >
          <div className="h-0.5 w-20 bg-gradient-to-r from-brand-teal-light to-brand-teal-dark opacity-70 rounded-full"></div>
        </div>

        {/* Logo Final */}
        <div 
          className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1200 ease-out ${
            showComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{ transitionDelay: showComplete ? '300ms' : '0ms' }}
        >
          <div className="relative">
            {/* Glow de fundo */}
            <div className={`absolute -inset-4 bg-brand-teal-light/25 rounded-full blur-lg transition-opacity duration-1000 ${
              showComplete ? 'opacity-70' : 'opacity-0'
            }`}></div>
            
            <img 
              src="/assets/icons/impressao_completa.png" 
              alt="BE PART - Impressão Digital Completa"
              className="relative w-32 h-auto object-contain"
              style={{
                filter: 'drop-shadow(0 0 14px rgba(95, 223, 198, 0.6)) brightness(1.1)',
                maxWidth: '128px',
                maxHeight: '108px'
              }}
            />
          </div>
        </div>

        {/* Partículas */}
        <div className={`absolute inset-0 transition-opacity duration-600 ${
          isAnimating && !showComplete ? 'opacity-100' : 'opacity-0'
        }`}>
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-brand-teal-medium rounded-full opacity-70"
              style={{
                left: `${37 + (i * 6.5)}%`,
                top: `${47 + (Math.sin(i) * 6)}%`,
                animation: `ping 2s ease-in-out infinite`,
                animationDelay: `${1500 + (i * 200)}ms`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 