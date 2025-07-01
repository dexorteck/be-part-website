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
    }, 3200)

    return () => {
      clearTimeout(timer)
      clearTimeout(completeTimer)
    }
  }, [])

  return (
    <div className="relative w-full h-64 flex items-center justify-center">
      {/* Container da animação */}
      <div className="relative w-[28rem] h-48">
        
        {/* Impressão Digital Esquerda */}
        <div 
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-all ease-out ${
            !isAnimating ? 'translate-x-0 opacity-100 scale-100' :
            !showComplete ? 'translate-x-12 opacity-80 scale-90' : 'translate-x-16 opacity-0 scale-75'
          }`}
          style={{ 
            transitionDuration: showComplete ? '800ms' : '2000ms',
            zIndex: showComplete ? 1 : 15
          }}
        >
          <img 
            src="/assets/icons/esquerda.png" 
            alt="Impressão Digital Esquerda"
            className="w-56 h-64 object-contain"
            style={{
              transition: 'filter 0.6s ease'
            }}
          />
        </div>

        {/* Impressão Digital Direita */}
        <div 
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all ease-out ${
            !isAnimating ? 'translate-x-0 opacity-100 scale-100' :
            !showComplete ? '-translate-x-12 opacity-80 scale-90' : '-translate-x-16 opacity-0 scale-75'
          }`}
          style={{ 
            transitionDelay: showComplete ? '0ms' : '200ms',
            transitionDuration: showComplete ? '800ms' : '2000ms',
            zIndex: showComplete ? 1 : 5
          }}
        >
          <img 
            src="/assets/icons/direita.png" 
            alt="Impressão Digital Direita"
            className="w-56 h-64 object-contain"
            style={{
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
            transitionDelay: showComplete ? '0ms' : '2200ms',
            zIndex: showComplete ? 1 : 5
          }}
        >
          <div className="h-1.5 w-40 bg-gradient-to-r from-brand-teal-light to-brand-teal-dark opacity-70 rounded-full"></div>
        </div>

        {/* Logo Final */}
        <div 
          className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1200 ease-out ${
            showComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{ 
            transitionDelay: showComplete ? '500ms' : '0ms',
            zIndex: showComplete ? 1 : 15
          }}
        >
          <div className="relative">
            
            <img 
              src="/assets/icons/impressao_completa.png" 
              alt="BE PART - Impressão Digital Completa"
              className="relative w-56 h-auto object-contain"
              style={{
                maxWidth: '224px',
                maxHeight: '189px'
              }}
            />
          </div>
        </div>

        {/* Partículas */}
        <div className={`absolute inset-0 transition-opacity duration-600 ${
          isAnimating && !showComplete ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ zIndex: showComplete ? 1 : 8 }}>
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