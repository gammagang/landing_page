'use client'
import React from 'react';

const benefits = [
  {
    title: "Save 80% Time",
    description: "What took days now takes minutes with AI-powered negotiations",
    metric: "80%",
    metricLabel: "Time Saved",
    gradient: "from-primary-500 to-primary-600"
  },
  {
    title: "Higher Success Rate",
    description: "AI-driven matching leads to better collaboration outcomes",
    metric: "95%",
    metricLabel: "Deal Success",
    gradient: "from-secondary-500 to-secondary-600"
  },
  {
    title: "Cost Efficient",
    description: "Reduce operational costs with automated negotiations",
    metric: "60%",
    metricLabel: "Cost Reduction",
    gradient: "from-accent-500 to-accent-600"
  }
]

export default function Benefits() {
  return (
    <section className="bg-gradient-to-br from-neutral-800 via-neutral-700 to-primary-800 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transform Your Influencer Marketing
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Real results from brands using Flow
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <div className="text-2xl font-bold text-white">
                  {benefit.metric}
                </div>
              </div>
              <div className="text-sm text-neutral-500 font-medium mb-4">
                {benefit.metricLabel}
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 