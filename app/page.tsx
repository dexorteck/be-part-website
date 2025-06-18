import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Evergreen from '../components/Evergreen'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import FAQ from '../components/FAQ'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Evergreen />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  )
} 