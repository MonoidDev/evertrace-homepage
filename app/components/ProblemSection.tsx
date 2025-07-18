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

    // Animate problem points sequentially on scroll
    problemPoints.forEach((_, index) => {
      gsap.fromTo(
        `.problem-point-${index}`,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: `.problem-point-${index}`,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

    // Final overlay animation
    gsap.fromTo(
      '.problem-overlay',
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.problem-overlay',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )

  }, [])

  return (
    <div ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white to-twilight-50 dark:from-navy-800 dark:to-navy-900">
      <div className="container-max section-padding">
        {/* Section Title */}
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-gradient mb-3 sm:mb-4 md:mb-6 px-4">
            The Emotional Infrastructure Gap
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            While technology transformed every aspect of life, how we say goodbye remains unchanged
          </p>
        </motion.div>

        {/* Problem Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-16">
          {problemPoints.map((point, index) => (
            <motion.div
              key={index}
              className={`problem-point-${index} glass rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 text-center hover:shadow-xl transition-all duration-300`}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 md:mb-5">{point.icon}</div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-twilight-600 dark:text-twilight-400 mb-2 sm:mb-3 md:mb-4">
                {point.stat}
              </div>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Final Overlay Message */}
        <motion.div
          className="problem-overlay text-center p-6 sm:p-8 md:p-10 glass rounded-2xl sm:rounded-3xl max-w-5xl mx-auto"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-gradient mb-3 sm:mb-4 md:mb-5 px-2">
            Technology transformed life—but forgot how we say goodbye.
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed px-2">
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
