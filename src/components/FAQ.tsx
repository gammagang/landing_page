'use client'

import { useState } from 'react'

const faqs = [
  {
    question: "How does the AI voice negotiation work?",
    answer: "Our AI uses advanced natural language processing to conduct real-time voice negotiations with creators. It follows your preset guidelines for budget, deliverables, and terms while maintaining a natural conversation flow."
  },
  {
    question: "What happens if the AI negotiation needs human intervention?",
    answer: "While our AI handles most negotiations successfully, we provide an option to seamlessly transition to human support if needed. You'll be notified immediately if any escalation is required."
  },
  {
    question: "How do you ensure the security of negotiations?",
    answer: "All AI calls are encrypted end-to-end and recorded for transparency. We follow enterprise-grade security protocols and comply with data protection regulations."
  },
  {
    question: "Can I customize the AI's negotiation style?",
    answer: "Yes! You can set your preferred negotiation style, tone, and parameters. The AI will adapt to represent your brand voice while maintaining professional standards."
  },
  {
    question: "Which languages does the AI call support?",
    answer: "Currently, just English but soon the user will be able to communicate in Hindi too."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="py-24 bg-gradient-to-b from-pastel-grey-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-pastel-black-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-pastel-grey-700">
            Everything you need to know about InfluencerFlow AI
          </p>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-pastel-grey-300 hover:shadow-xl transition-all duration-300 hover:border-primary-300"
              >
                <button
                  className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-opacity-50 rounded-lg"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-pastel-black-900">
                      {faq.question}
                    </h3>
                    <span className="ml-6 flex-shrink-0 text-primary-600 font-bold text-xl">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-pastel-grey-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 