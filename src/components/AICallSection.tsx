import React from 'react';

export default function AICallSection() {
  return (
    <div className="bg-gradient-to-r from-pastel-grey-200 to-pastel-grey-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-3xl font-bold text-pastel-black-900">
              Meet Your AI Negotiation Agent
            </h2>
            <div className="mt-6 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white shadow-lg">
                    ⚡
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-pastel-black-900">
                    5-Minute Deal Closure
                  </h3>
                  <p className="mt-2 text-pastel-grey-700">
                    What used to take days of back-and-forth can now be completed in a single AI call.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pastel-black-700 text-white shadow-lg">
                    🎯
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-pastel-black-900">
                    Perfect Brand Representation
                  </h3>
                  <p className="mt-2 text-pastel-grey-700">
                    AI follows your exact guidelines and negotiation parameters every time.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white shadow-lg">
                    📊
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-pastel-black-900">
                    Data-Driven Decisions
                  </h3>
                  <p className="mt-2 text-pastel-grey-700">
                    Every negotiation improves our AI's understanding of successful deals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Embedded YouTube Video */}
          <div className="mt-12 lg:mt-0">
            <div className="rounded-lg aspect-video shadow-xl overflow-hidden border border-pastel-grey-300">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/mJBshNapLiU"
                title="AI Call Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 