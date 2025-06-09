'use client'
import React, { useState } from 'react'

export default function MultiAudienceBenefits() {
  const [activeTab, setActiveTab] = useState(0)

  const audiences = [
    {
      title: "Small Businesses",
      icon: "🏢",
      tagline: "Start influencer marketing without the learning curve",
      description: "AI handles the complex stuff, you focus on your business",
      benefits: [
        "No expertise required - AI guides every step",
        "Avoid common beginner mistakes with AI insights", 
        "Scale from zero to hero with automated workflows",
        "Professional results from day one"
      ]
    },
    
    {
      title: "Creators",
      icon: "✨",
      tagline: "Get quality offers that actually match your niche", 
      description: "Professional partnerships, hassle-free business",
      benefits: [
        "Stop receiving irrelevant spam offers",
        "Work with brands that truly align with your values",
        "Automated contract and payment processing", 
        "Focus on content, let AI handle business"
      ]
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Built For Every Type of Marketer
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Whether you're just starting out or scaling up, Flow adapts to your needs
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-lg inline-flex flex-col sm:flex-row">
            {audiences.map((audience, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center space-x-2 ${
                  activeTab === index
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                <span>{audience.icon}</span>
                <span>{audience.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{audiences[activeTab].icon}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                {audiences[activeTab].tagline}
              </h3>
              <p className="text-lg text-neutral-600">
                {audiences[activeTab].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {audiences[activeTab].benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-neutral-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 