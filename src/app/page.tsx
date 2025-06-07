import React from 'react'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import AICallSection from '@/components/AICallSection'
import HowItWorks from '@/components/HowItWorks'
import Benefits from '@/components/Benefits'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <AICallSection />
      <HowItWorks />
      <Benefits />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
} 