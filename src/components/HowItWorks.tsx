import React from 'react';

const steps = [
  {
    number: "1",
    title: "Creator Discovery",
    description: "Browse our curated creator marketplace and filter by niche, engagement, and budget."
  },
  {
    number: "2",
    title: "One-Click Initiation",
    description: "Select creators and let our AI send personalized invitation emails."
  },
  {
    number: "3",
    title: "AI Voice Call",
    description: "Creator clicks link for instant connection to AI negotiation agent."
  },
  {
    number: "4",
    title: "Smart Deal Closure",
    description: "AI follows your guidelines for automatic term finalization and contract generation."
  },
  {
    number: "5",
    title: "Campaign Launch",
    description: "Automated payment processing and real-time campaign tracking dashboard."
  }
]

export default function HowItWorks() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-pastel-black-900">How It Works</h2>
          <p className="mt-4 text-xl text-pastel-grey-700">
            End-to-end automation in five simple steps
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {index !== steps.length - 1 && (
                  <div className="absolute left-8 top-16 h-full w-0.5 bg-gradient-to-b from-pastel-grey-400 to-primary-400" />
                )}
                <div className="relative flex items-start hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-pastel-black-700 text-white text-xl font-bold shadow-lg group-hover:shadow-xl border-2 border-pastel-grey-300">
                    {step.number}
                  </div>
                  <div className="ml-6 pt-3">
                    <h3 className="text-xl font-bold text-pastel-black-900">{step.title}</h3>
                    <p className="mt-2 text-pastel-grey-700">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 