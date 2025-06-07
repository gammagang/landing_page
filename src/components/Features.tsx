'use client'
import React from 'react'

const features = [
  {
    title: "AI Creator Discovery",
    description: "Find the perfect Instagram creators for your brand in minutes with AI-powered matching.",
    icon: "🎯",
    bgColor: "bg-pastel-grey-200"
  },
  {
    title: "Voice AI Negotiations",
    description: "Revolutionary AI voice agent handles negotiations in real-time, closing deals in minutes.",
    icon: "🎙️",
    bgColor: "bg-pastel-maroon-100"
  },
  {
    title: "Smart Contracts",
    description: "Automated contract generation and e-signatures for seamless deal closure.",
    icon: "📝",
    bgColor: "bg-pastel-grey-300"
  },
  {
    title: "24/7 Availability",
    description: "AI negotiates any time, anywhere, eliminating timezone barriers.",
    icon: "⏰",
    bgColor: "bg-pastel-maroon-200"
  }
]

export default function Features() {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-pastel-grey-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-pastel-black-900">
            Why Brands Choose InfluencerFlow AI
          </h2>
          <p className="mt-4 text-xl text-pastel-grey-700">
            End-to-end automation for your influencer marketing campaigns
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className={`flex justify-center items-center mx-auto h-16 w-16 rounded-full ${feature.bgColor} text-3xl shadow-lg group-hover:shadow-xl border border-pastel-grey-300`}>
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-pastel-black-900">
                {feature.title}
              </h3>
              <p className="mt-4 text-pastel-grey-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 