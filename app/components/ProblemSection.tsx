'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

const ProblemSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const problemPoints = [
    {
      stat: "150 million",
      description: "people lose a loved one every year",
      icon: "👥"
    },
    {
      stat: "99%",
      description: "of remembrance still relies on gravestones, urns, and photos",
      icon: "🪦"
    },
    {
      stat: "Physical memorials",
      description: "decay, fade, and require maintenance",
      icon: "⏳"
    },
    {
      stat: "One generation",
      description: "Without structure, memories and wisdom vanish within one generation",
      icon: "📚"
    }
  ]

  useEffect(() => {
    if (typeof window === 'undefined') return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        pin: true,
        pinSpacing: false
      }
    })

    // Animate problem points sequentially
    problemPoints.forEach((_, index) => {
      tl.fromTo(
        `.problem-point-${index}`,
        { opacity: 0, y: 50, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1 },
        index * 0.5
      )
    })

    // Final overlay animation
    tl.fromTo(
      '.problem-overlay',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1 },
      '+=0.5'
    )

  }, [])

  return (
    <div ref={sectionRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-50 to-twilight-50 dark:from-navy-900 dark:to-navy-800">
      <div className="container-max section-padding">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gradient mb-6">
            The Emotional Infrastructure Gap
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            While technology transformed every aspect of life, how we say goodbye remains unchanged
          </p>
        </motion.div>

        {/* Problem Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {problemPoints.map((point, index) => (
            <motion.div
              key={index}
              className={`problem-point-${index} glass rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300`}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-twilight-600 dark:text-twilight-400 mb-2">
                {point.stat}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Final Overlay Message */}
        <motion.div
          className="problem-overlay text-center p-8 glass rounded-3xl max-w-4xl mx-auto"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-2xl md:text-4xl font-serif font-bold text-gradient mb-4">
            Technology transformed life—but forgot how we say goodbye.
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            The infrastructure for preserving human connection across generations doesn't exist. 
            Until now.
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-twilight-200/20 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold-200/20 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-navy-200/10 rounded-full blur-2xl -z-10" />
      </div>
    </div>
  )
}

export default ProblemSection
