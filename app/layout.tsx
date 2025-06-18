import React from 'react'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Be Part – Events & Communication',
  description: 'Conectamos pessoas, ideias e experiências. Promovemos inclusão e impacto positivo. Cada peça conta.',
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