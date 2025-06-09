'use client'
import React from 'react'

export default function SocialProof() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Join the Revolution
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Be part of the future of influencer marketing
          </p>
        </div>

        {/* Waitlist Counter */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="text-4xl md:text-6xl font-bold text-primary-600 mb-2">
              500+
            </div>
            <p className="text-xl text-neutral-700 font-medium">
              Forward-Thinking Marketers Already Joined
            </p>
          </div>
        </div>

        {/* Testimonials/Early Feedback */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-neutral-50 rounded-xl p-6 text-center">
            <div className="text-2xl mb-4">💡</div>
            <p className="text-neutral-600 italic mb-4">
              "This is exactly what the industry needs. Can't wait to see our AI agent in action!"
            </p>
            <p className="text-sm text-neutral-500">
              - Early Beta Tester
            </p>
          </div>
          
          <div className="bg-neutral-50 rounded-xl p-6 text-center">
            <div className="text-2xl mb-4">🚀</div>
            <p className="text-neutral-600 italic mb-4">
              "Voice AI for negotiations? Game changer. This will save us hours every week."
            </p>
            <p className="text-sm text-neutral-500">
              - Marketing Agency Owner
            </p>
          </div>
          
          <div className="bg-neutral-50 rounded-xl p-6 text-center">
            <div className="text-2xl mb-4">⭐</div>
            <p className="text-neutral-600 italic mb-4">
              "Finally, a platform that understands the pain points of influencer marketing."
            </p>
            <p className="text-sm text-neutral-500">
              - Brand Manager
            </p>
          </div>
        </div>

        {/* Company Backing */}
        <div className="text-center">
          <p className="text-neutral-600 mb-4">
            <span className="font-semibold">Backed by industry leaders</span> in influencer marketing technology
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-neutral-400 font-medium">AI Innovation</div>
            <div className="w-2 h-2 bg-neutral-300 rounded-full"></div>
            <div className="text-neutral-400 font-medium">Marketing Excellence</div>
            <div className="w-2 h-2 bg-neutral-300 rounded-full"></div>
            <div className="text-neutral-400 font-medium">Creator Economy</div>
          </div>
        </div>
      </div>
    </section>
  )
} 