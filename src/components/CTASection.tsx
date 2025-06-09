'use client'
import React from 'react';

export default function CTASection() {
  const benefits = [
    "First access to the platform",
    "Special beta pricing", 
    "Direct input on features",
    "Priority support"
  ]

  return (
    <section className="bg-gradient-to-br from-primary-600 to-primary-800" id="waitlist">
      <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="px-8 py-12 md:px-16 md:py-20">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Be Among the First to Experience AI-Powered Influencer Marketing
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
                Join our exclusive beta program and get early access before everyone else.
              </p>

              {/* Benefits of joining waitlist */}
              <div className="mb-10">
                <p className="text-sm font-medium text-neutral-700 mb-4">
                  Benefits of joining the waitlist:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center justify-center space-x-2 text-sm text-neutral-600">
                      <svg className="w-4 h-4 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dual CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfGgbqm9hsa9BwxJUJqz2nL4KgY5z2HV-uZZGjgm_plrhGang/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto rounded-full bg-accent-500 text-white px-8 py-4 text-lg font-semibold hover:bg-accent-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Join the Waitlist Now
                </a>
                <a
                  href="#demo"
                  className="w-full sm:w-auto rounded-full border-2 border-primary-600 text-primary-600 px-8 py-4 text-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-200"
                >
                  Learn More About Our Vision
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 