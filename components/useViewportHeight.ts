'use client'

import { useEffect, useState } from 'react'

export function useViewportHeight() {
  const [viewportClass, setViewportClass] = useState<string>('')

  useEffect(() => {
    const detectViewport = () => {
      const isMobile = window.innerWidth <= 768
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      const isChrome = /chrome/i.test(navigator.userAgent) && !/edge/i.test(navigator.userAgent)
      const supportsDvh = CSS.supports('height', '100dvh')
      
      let className = ''
      
      if (isMobile) {
        if (supportsDvh) {
          // Navegadores modernos com suporte a dvh
          className = 'dvh-supported'
        } else if (isSafari) {
          // Safari específico
          className = 'safari-adjusted'
        } else if (isChrome) {
          // Chrome/Android específico
          className = 'chrome-adjusted'
        } else {
          // Fallback para outros navegadores
          className = ''
        }
      }
      
      setViewportClass(className)
    }

    // Detectar na montagem
    detectViewport()

    // Detectar mudanças de orientação
    const handleOrientationChange = () => {
      setTimeout(detectViewport, 100) // Pequeno delay para garantir que a orientação mudou
    }

    // Detectar mudanças de tamanho da janela
    const handleResize = () => {
      detectViewport()
    }

    // Detectar mudanças na barra de navegação (visual viewport)
    const handleVisualViewportChange = () => {
      if (window.visualViewport) {
        detectViewport()
      }
    }

    // Event listeners
    window.addEventListener('orientationchange', handleOrientationChange)
    window.addEventListener('resize', handleResize)
    
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleVisualViewportChange)
    }

    // Cleanup
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange)
      window.removeEventListener('resize', handleResize)
      
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleVisualViewportChange)
      }
    }
  }, [])

  return viewportClass
} 