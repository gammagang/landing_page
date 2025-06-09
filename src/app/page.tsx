import React from 'react'
import Hero from '@/components/Hero'
import ProblemStatement from '@/components/ProblemStatement'
import SolutionOverview from '@/components/SolutionOverview'

import AICallSection from '@/components/AICallSection'
import HowItWorks from '@/components/HowItWorks'
import MultiAudienceBenefits from '@/components/MultiAudienceBenefits'
import Benefits from '@/components/Benefits'

import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemStatement />
      <SolutionOverview />
      <AICallSection />
      <HowItWorks />
      <MultiAudienceBenefits />
      <Benefits />
      <FAQ />
      <Footer />
    </main>
  )
} 