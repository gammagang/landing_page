'use client'
import React from 'react'

export default function ProblemStatement() {
  const problems = [
    {
      title: "For Brands",
      description: "Spending weeks finding the right creators, awkward negotiations, contract headaches",
      icon: "🏢"
    },
    {
      title: "For Agencies", 
      description: "Manual discovery eating your time, juggling multiple campaigns, client frustration",
      icon: "🎯"
    },
    {
      title: "For Creators",
      description: "Endless spam offers, mismatched brands, business admin nightmare", 
      icon: "✨"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Influencer Marketing Shouldn't Be This Hard
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            The current process is broken for everyone involved
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl">{problem.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                {problem.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 