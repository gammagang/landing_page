'use client'
import React from 'react'
import Image from 'next/image'

export default function ProblemStatement() {
  const problems = [
    {
      title: "For Brands",
      description: "Our AI finds the perfect creators for your brand in seconds by scanning your website. This saves you time and money.",
      image: "/brand.png"
    },
    
    
    {
      title: "For Creators",
      description: "Endless spam offers, mismatched brands, business admin nightmare. Our platform makes it easy to find the perfect brand for you.", 
      image: "/creator.png"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Influencer Marketing is now a single click away.
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A platform that automates the entire influencer marketing process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center mx-auto mb-6 shadow-lg overflow-hidden">
                <Image 
                  src={problem.image} 
                  alt={problem.title}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                {problem.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 