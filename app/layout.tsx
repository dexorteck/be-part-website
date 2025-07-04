import React from 'react'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Be Part – Every Piece Matters',
  description: 'Assente no princípio de que cada peça é essencial. Conectamos marcas, pessoas e ideias com soluções criativas em eventos, comunicação e consultoria. Promovemos inclusão, criatividade e impacto positivo. Cada peça conta. bepartmatters. Website desenvolvido por dexorteck.',
  keywords: 'eventos, comunicação, consultoria, sustentabilidade, Portugal, Be Part, bepartmatters, dexorteck',
  authors: [{ name: 'Be Part' }],
  creator: 'Be Part',
  publisher: 'Be Part',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.bepartmatters.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Be Part – Events & Communication',
    description: 'Conectamos pessoas, ideias e experiências. Promovemos inclusão e impacto positivo. Cada peça conta.',
    url: 'https://www.bepartmatters.com',
    siteName: 'Be Part',
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Be Part – Events & Communication',
    description: 'Conectamos pessoas, ideias e experiências. Promovemos inclusão e impacto positivo. Cada peça conta.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-PT">
      <body className="antialiased">{children}</body>
    </html>
  )
} 