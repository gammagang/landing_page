'use client'
import React from 'react'

const features = [
  {
    title: "AI Creator Discovery",
    description: "Find the perfect Instagram creators for your brand in minutes with AI-powered matching.",
    icon: "🎯",
    gradient: "from-primary-100 to-primary-200"
  },
  {
    title: "Voice AI Negotiations",
    description: "Revolutionary AI voice agent handles negotiations in real-time, closing deals in minutes.",
    icon: "🎙️",
    gradient: "from-secondary-100 to-secondary-200"
  },
  {
    title: "Smart Contracts",
    description: "Automated contract generation and e-signatures for seamless deal closure.",
    icon: "📝",
    gradient: "from-accent-100 to-accent-200"
  },
  {
    title: "24/7 Availability",
    description: "AI negotiates any time, anywhere, eliminating timezone barriers.",
    icon: "⏰",
    gradient: "from-neutral-100 to-neutral-200"
  }
]

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Why Brands Choose Flow
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            End-to-end automation for your influencer marketing campaigns
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-6 text-center h-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 