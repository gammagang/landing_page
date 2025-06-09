'use client'
import React from 'react'

export default function SolutionOverview() {
  const features = [
    {
      title: "Smart Discovery",
      description: "AI scans your website and finds creators who perfectly match your brand",
      icon: "🔍",
      gradient: "from-primary-100 to-primary-200"
    },
    {
      title: "Voice Negotiations", 
      description: "Your AI agent handles phone negotiations with pre-set guidelines",
      icon: "📞",
      gradient: "from-secondary-100 to-secondary-200"
    },
    {
      title: "Complete Automation",
      description: "From first contact to final payment - all handled automatically",
      icon: "⚡",
      gradient: "from-accent-100 to-accent-200"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Meet Your AI Marketing Team
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            The complete solution to transform your influencer marketing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-8 text-center h-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
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

        {/* Visual workflow hint */}
        <div className="mt-16 text-center">
          <p className="text-sm text-neutral-500 mb-4">
            Interactive workflow diagram coming soon
          </p>
          <div className="flex justify-center items-center space-x-4 text-neutral-300">
            <div className="w-8 h-8 bg-primary-200 rounded-full flex items-center justify-center">1</div>
            <div className="w-12 h-0.5 bg-neutral-200"></div>
            <div className="w-8 h-8 bg-secondary-200 rounded-full flex items-center justify-center">2</div>
            <div className="w-12 h-0.5 bg-neutral-200"></div>
            <div className="w-8 h-8 bg-accent-200 rounded-full flex items-center justify-center">3</div>
          </div>
        </div>
      </div>
    </section>
  )
} 