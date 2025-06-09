'use client'
import React from 'react';

const steps = [
  {
    number: "1",
    title: "Discover",
    description: "AI finds perfect creators by analyzing your brand",
    icon: "🔍",
    gradient: "from-primary-500 to-primary-600"
  },
  {
    number: "2", 
    title: "Connect",
    description: "Personalized outreach sent automatically",
    icon: "📧",
    gradient: "from-secondary-500 to-secondary-600"
  },
  {
    number: "3",
    title: "Negotiate", 
    description: "Voice AI handles the phone call",
    icon: "📞",
    gradient: "from-accent-500 to-accent-600"
  },
  {
    number: "4",
    title: "Contract",
    description: "Digital contracts generated and signed",
    icon: "📝",
    gradient: "from-primary-400 to-primary-500"
  },
  {
    number: "5",
    title: "Pay",
    description: "Secure payments processed seamlessly", 
    icon: "💳",
    gradient: "from-secondary-400 to-secondary-500"
  },
  {
    number: "6",
    title: "Track",
    description: "Campaign performance dashboard",
    icon: "📊",
    gradient: "from-accent-400 to-accent-500"
  }
]

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            One Platform, Entire Journey
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Complete automation from discovery to campaign tracking in six seamless steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-6 text-center h-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow duration-300`}>
                  <span className="text-white text-xl font-bold">{step.number}</span>
                </div>
                <div className="text-2xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Timeline for larger screens */}
        <div className="hidden lg:block mt-16">
          <div className="flex justify-center items-center space-x-4">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}>
                  {step.number}
                </div>
                {index !== steps.length - 1 && (
                  <div className="w-8 h-0.5 bg-neutral-300"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 