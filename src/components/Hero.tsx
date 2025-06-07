'use client'
import React from 'react'

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-pastel-grey-100 via-pastel-grey-200 to-pastel-grey-300 text-pastel-black-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-pastel-black-900">
            One Click. AI Negotiates. Deal Done.
          </h1>
          <p className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto text-pastel-grey-700">
            The first platform where AI handles your influencer negotiations through voice calls. Transform your influencer marketing with automated, intelligent deal-making.
          </p>
          <div className="mt-10">
            <a
              href="#waitlist"
              className="rounded-full bg-primary-600 text-white px-8 py-4 text-lg font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Transform Your Influencer Deals
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative blob shapes */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pastel-maroon-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/2 w-96 h-96 bg-pastel-grey-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
    </div>
  )
} 