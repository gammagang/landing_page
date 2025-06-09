'use client'
import React from 'react'

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-neutral-50 to-primary-50 overflow-hidden">
      {/* Logo in top left */}
      <div className="absolute top-6 left-6 z-6">
        <img 
          src="/flow.png" 
          alt="Flow Logo" 
          className="h-24 md:h-32 w-auto"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-6">
            Your AI Manager that handles everything.
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-neutral-600 mb-8">
            From finding perfect creators to closing deals over AI voice calls, Flow automates your entire influencer marketing journey in minutes, not weeks.
          </p>
          
          {/* Trust Indicator */}
          <div className="mb-10">
            <p className="text-sm text-neutral-500 mb-6">
              Join 500+ brands and creators already on the waitlist
            </p>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#waitlist"
              className="w-full sm:w-auto rounded-full bg-accent-500 text-white px-8 py-4 text-lg font-semibold hover:bg-accent-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Join the Waitlist
            </a>
            <a
              href="#demo"
              className="w-full sm:w-auto rounded-full border-2 border-primary-600 text-primary-600 px-8 py-4 text-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-200"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements with sparkle inspiration */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-secondary-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-32 w-3 h-3 bg-accent-400 rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-32 left-40 w-2 h-2 bg-primary-400 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-secondary-300 rounded-full animate-pulse delay-1000"></div>
      
      {/* Background blobs */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/2 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
    </div>
  )
} 