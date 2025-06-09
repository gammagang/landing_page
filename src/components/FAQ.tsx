'use client'

import { useState } from 'react'

const faqs = [
  {
    question: "How does the Voice AI know what to negotiate?",
    answer: "You set your negotiation guidelines, budget ranges, and brand requirements upfront. Our AI follows these parameters exactly while adapting to the conversation flow. You maintain full control over what terms are acceptable."
  },
  {
    question: "Which languages does the AI support?",
    answer: "We support English and Hindi. We're working on adding more languages soon."
  },
  {
    question: "When will the platform be available?",
    answer: "We're launching our beta program soon! Join the waitlist to be among the first to experience AI-powered influencer marketing. Beta users get early access and special pricing."
  },
  {
    question: "What platforms do you support?",
    answer: "We're starting with Instagram, the largest influencer marketing platform."
  },
  {
    question: "How much will it cost?",
    answer: "We're still finalizing pricing based on beta feedback. Waitlist members will receive exclusive early-bird pricing and be the first to know about our pricing tiers when we launch."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Everything you need to know about Flow
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-neutral-200 hover:shadow-xl transition-all duration-300 hover:border-primary-300"
              >
                <button
                  className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-opacity-50 rounded-xl"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-neutral-900">
                      {faq.question}
                    </h3>
                    <span className="ml-6 flex-shrink-0 text-primary-600 font-bold text-xl">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-neutral-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 