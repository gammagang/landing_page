'use client'
import React from 'react';

export default function AICallSection() {
  return (
    <div id="demo" className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Hear Your AI Agent In Action
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-2">
            Watch a real negotiation call between our AI and a creator
          </p>
          <p className="text-sm text-neutral-500">
            This is what it sounds like when AI handles your negotiations
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left side - YouTube Video */}
          <div className="order-2 lg:order-1">
            <div className="rounded-xl aspect-video shadow-2xl overflow-hidden border border-neutral-200 bg-white p-2">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/mJBshNapLiU"
                title="AI Negotiation Demo - Flow"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Right side - Benefits */}
          <div className="order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-accent-400 to-accent-500 text-white shadow-lg">
                    ⏱️
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-neutral-900">
                    Saves Time
                  </h3>
                  <p className="mt-2 text-neutral-600 leading-relaxed">
                    What used to take days of back-and-forth emails can now be completed in a single 5-minute AI call.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg">
                    🎯
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-neutral-900">
                    Consistent Results
                  </h3>
                  <p className="mt-2 text-neutral-600 leading-relaxed">
                    AI follows your exact guidelines and negotiation parameters every time, ensuring brand consistency.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-secondary-400 to-secondary-500 text-white shadow-lg">
                    😌
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-neutral-900">
                    No Awkward Conversations
                  </h3>
                  <p className="mt-2 text-neutral-600 leading-relaxed">
                    Your AI handles the negotiation professionally while you focus on strategy and creativity.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent-500 text-white font-semibold hover:bg-accent-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Get Your Own AI Negotiator
              </a>
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-primary-500 text-primary-600 font-semibold hover:bg-primary-500 hover:text-white transition-all duration-200"
              >
                Join the Waitlist
              </a>
            </div>

            <p className="text-xs text-neutral-400 mt-4">
              More negotiation scenarios coming soon
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 