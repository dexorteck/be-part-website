'use client'

import React from 'react'

const companies = [
  { name: "TechCorp", logo: "TC" },
  { name: "InnovateHub", logo: "IH" },
  { name: "GlobalEvents", logo: "GE" },
  { name: "CreativeLab", logo: "CL" },
  { name: "StartupVision", logo: "SV" },
  { name: "DigitalPro", logo: "DP" }
]

export default function ClientTestimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Logos Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {companies.map((company, index) => (
              <div 
                key={index}
                className="w-20 h-20 bg-gradient-to-br from-brand-teal-light to-brand-teal-dark rounded-xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <span className="text-white font-bold text-lg">
                  {company.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 