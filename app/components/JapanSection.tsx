'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

const JapanSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  const japanStats = [
    {
      stat: "29%",
      description: "of Japan's population is over 65",
      projection: "35% by 2040",
      color: "twilight"
    },
    {
      stat: "120,000+",
      description: "abandoned graves (無縁墓)",
      projection: "Growing annually",
      color: "gold"
    },
    {
      stat: "93%",
      description: "urban population makes traditional burials impractical",
      projection: "Space crisis intensifying",
      color: "navy"
    }
  ]

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Parallax animation for temple to digital transition
    gsap.fromTo('.temple-icon',
      { x: -100, opacity: 0.3 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1
        }
      }
    )

    gsap.fromTo('.digital-icon',
      { x: 100, opacity: 0.3 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1
        }
      }
    )

    // Animate stats on scroll
    japanStats.forEach((_, index) => {
      gsap.fromTo(`.japan-stat-${index}`,
        { scale: 0.8, opacity: 0, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: `.japan-stat-${index}`,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

  }, [])

  return (
    <div ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-twilight-900 text-white py-20">
      {/* Traditional Japanese Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="sakura" patternUnits="userSpaceOnUse" width="20" height="20">
              <circle cx="10" cy="10" r="2" fill="currentColor" />
              <circle cx="5" cy="5" r="1" fill="currentColor" />
              <circle cx="15" cy="15" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sakura)" />
        </svg>
      </div>

      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            <span className="text-gold-400">Japan:</span> Where Tradition Meets
            <br />
            <span className="text-gradient bg-gradient-to-r from-twilight-400 to-gold-400 bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The perfect convergence of ancestral respect, technological sophistication, and urgent demographic need
          </p>
        </motion.div>

        {/* Temple to Digital Transition */}
        <div className="flex items-center justify-center mb-20">
          <motion.div 
            className="temple-icon text-6xl mr-8"
            whileHover={{ scale: 1.1 }}
          >
            ⛩️
          </motion.div>
          
          <motion.div
            className="flex items-center space-x-4"
            initial={{ width: 0 }}
            whileInView={{ width: 'auto' }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            <div className="h-1 w-20 bg-gradient-to-r from-gold-400 to-twilight-400"></div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="text-2xl"
            >
              ⚡
            </motion.div>
            <div className="h-1 w-20 bg-gradient-to-r from-twilight-400 to-gold-400"></div>
          </motion.div>

          <motion.div 
            className="digital-icon text-6xl ml-8"
            whileHover={{ scale: 1.1 }}
          >
            📱
          </motion.div>
        </div>

        {/* Japan Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" ref={statsRef}>
          {japanStats.map((stat, index) => (
            <motion.div
              key={index}
              className={`japan-stat-${index} glass rounded-2xl p-8 text-center relative overflow-hidden`}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/10 to-${stat.color}-600/20`} />
              
              <div className="relative z-10">
                <motion.div
                  className={`text-4xl md:text-5xl font-bold text-${stat.color}-400 mb-2`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {stat.stat}
                </motion.div>
                <p className="text-gray-300 mb-3">
                  {stat.description}
                </p>
                <p className={`text-sm text-${stat.color}-300 font-medium`}>
                  {stat.projection}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Insight */}
        <motion.div
          className="text-center glass rounded-3xl p-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-gold-400 mb-6">
            The Perfect Market Confluence
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Japan combines the world's deepest ancestral respect traditions, 
            the most sophisticated technology adoption, and the most urgent demographic need. 
            <span className="text-twilight-400 font-semibold block mt-4">
              This isn't just a market—it's the epicenter of memorial innovation.
            </span>
          </p>
        </motion.div>

        {/* Decorative Cherry Blossoms */}
        <div className="absolute top-20 left-10">
          <motion.div
            className="text-4xl text-pink-300/30"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            🌸
          </motion.div>
        </div>
        <div className="absolute bottom-20 right-10">
          <motion.div
            className="text-3xl text-pink-200/30"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            🌸
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default JapanSection
