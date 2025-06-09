import React from 'react'
import Hero from '@/components/Hero'
import ProblemStatement from '@/components/ProblemStatement'
import SolutionOverview from '@/components/SolutionOverview'
import Features from '@/components/Features'
import AICallSection from '@/components/AICallSection'
import HowItWorks from '@/components/HowItWorks'
import MultiAudienceBenefits from '@/components/MultiAudienceBenefits'
import Benefits from '@/components/Benefits'
import SocialProof from '@/components/SocialProof'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemStatement />
      <SolutionOverview />
      <Features />
      <AICallSection />
      <HowItWorks />
      <MultiAudienceBenefits />
      <Benefits />
      <SocialProof />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
} 