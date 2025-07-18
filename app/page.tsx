'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import VisionSection from './components/VisionSection'
import JapanSection from './components/JapanSection'
import GlobalTrendsSection from './components/GlobalTrendsSection'
import FeaturesSection from './components/FeaturesSection'
import WhyNowSection from './components/WhyNowSection'
import DemoSection from './components/DemoSection'
import TestimonialsSection from './components/TestimonialsSection'
import VisionPoetrySection from './components/VisionPoetrySection'
import TeamSection from './components/TeamSection'
import CTASection from './components/CTASection'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
}

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // GSAP ScrollTrigger setup
    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gradient-to-br from-twilight-50 via-white to-navy-50 dark:from-navy-900 dark:via-navy-800 dark:to-twilight-900">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <section id="home" className="relative">
          <HeroSection />
        </section>

        {/* 2. Problem Section */}
        <section id="problem" className="relative">
          <ProblemSection />
        </section>

        {/* 3. Vision Section */}
        <section id="vision" className="relative">
          <VisionSection />
        </section>

        {/* 4. Japan Market Fit */}
        <section id="japan" className="relative">
          <JapanSection />
        </section>

        {/* 5. Global Trends */}
        <section id="trends" className="relative">
          <GlobalTrendsSection />
        </section>

        {/* 6. Features */}
        <section id="features" className="relative">
          <FeaturesSection />
        </section>

        {/* 7. Why Now */}
        <section id="why-now" className="relative">
          <WhyNowSection />
        </section>

        {/* 8. Demo */}
        <section id="demo" className="relative">
          <DemoSection />
        </section>

        {/* 9. Testimonials */}
        <section id="testimonials" className="relative">
          <TestimonialsSection />
        </section>

        {/* 10. Vision Poetry */}
        <section id="vision-poetry" className="relative">
          <VisionPoetrySection />
        </section>

        {/* 11. Team */}
        <section id="team" className="relative">
          <TeamSection />
        </section>

        {/* 12. CTA */}
        <section id="contact" className="relative">
          <CTASection />
        </section>
      </main>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-twilight-300/30 rounded-full floating-element"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-6 h-6 bg-gold-300/30 rounded-full floating-element"
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-3 h-3 bg-navy-300/30 rounded-full floating-element"
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
    </div>
  )
}
