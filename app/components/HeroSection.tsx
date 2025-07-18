'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Parallax effect for hero background
    const tl = gsap.timeline({ repeat: -1, yoyo: true })
    
    // Animate floating particles
    if (particlesRef.current) {
      const particles = particlesRef.current.children
      Array.from(particles).forEach((particle, index) => {
        gsap.to(particle, {
          y: '+=30',
          x: '+=20',
          duration: 3 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.3
        })
      })
    }

    // Scroll-triggered animations
    gsap.fromTo(heroRef.current, 
      { opacity: 1 },
      {
        opacity: 0.3,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      }
    )

  }, [])

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg" />
      
      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-twilight-300/40 rounded-full`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-max section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-gradient mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            The Missing Digital Layer
            <br />
            <span className="text-twilight-600 dark:text-twilight-400">
              in How We Grieve
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            An AI-powered infrastructure for next-generation memorialization that transforms 
            how we preserve, share, and honor the memories of those we've lost.
          </motion.p>

          {/* Quote */}
          <motion.div
            className="mb-12 p-6 glass rounded-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p className="text-lg italic font-serif text-twilight-700 dark:text-twilight-300">
              "We digitize everything—except how we say goodbye."
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.a
              href="#demo"
              className="px-8 py-4 bg-gradient-to-r from-twilight-500 to-twilight-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              See Demo
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 border-2 border-twilight-500 text-twilight-600 dark:text-twilight-400 rounded-full font-semibold text-lg hover:bg-twilight-50 dark:hover:bg-twilight-900/20 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Legacy
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Candle/Flower SVG */}
      <motion.div
        className="absolute bottom-20 right-20 opacity-30"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 0.3, rotate: 0 }}
        transition={{ duration: 2, delay: 1.2 }}
      >
        <svg
          width="80"
          height="120"
          viewBox="0 0 80 120"
          className="text-twilight-400"
          fill="currentColor"
        >
          {/* Candle Flame */}
          <motion.ellipse
            cx="40"
            cy="20"
            rx="8"
            ry="15"
            className="text-gold-400"
            animate={{ scaleY: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Candle Body */}
          <rect x="35" y="30" width="10" height="60" rx="2" className="text-twilight-300" />
          {/* Wax Drips */}
          <motion.path
            d="M 42 35 Q 48 40 45 50 Q 42 55 40 60"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-twilight-200"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 2 }}
          />
        </svg>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-twilight-400 rounded-full p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1 h-3 bg-twilight-400 rounded-full mx-auto" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HeroSection
