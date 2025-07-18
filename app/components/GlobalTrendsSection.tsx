'use client'

import React from 'react'
import { motion } from 'framer-motion'

const GlobalTrendsSection = () => {
  const trends = [
    {
      title: "Aging Societies",
      description: "Japan 35% over 65 by 2040",
      icon: "👴",
      impact: "Unprecedented need for digital legacy solutions",
      stats: "35%",
      details: "Rising elderly population creates urgent demand for preserving wisdom and memories"
    },
    {
      title: "Gen Z Rituals",
      description: "YouTube tributes, digital altars",
      icon: "📱",
      impact: "New generations expect interactive memorial experiences",
      stats: "68%",
      details: "Young adults now prefer digital memorialization over traditional methods"
    },
    {
      title: "AI Maturity",
      description: "LLMs for grief counseling and legacy writing",
      icon: "🤖",
      impact: "Technology finally ready for emotional complexity",
      stats: "2024",
      details: "AI breakthrough year enabling empathetic, context-aware grief support"
    }
  ]

  const convergencePoints = [
    {
      title: "Cultural Shift",
      description: "From physical to digital remembrance",
      percentage: "73%"
    },
    {
      title: "Technology Readiness",
      description: "AI capabilities meet emotional needs",
      percentage: "85%"
    },
    {
      title: "Market Demand",
      description: "Growing need for legacy solutions",
      percentage: "92%"
    }
  ]

  return (
    <div className="relative py-20 md:py-24 bg-gradient-to-br from-twilight-50 to-white dark:from-twilight-900 dark:to-navy-900">
      <div className="container-max section-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-gradient mb-6">
            Global Trends Converging
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            The world is ready for emotional infrastructure that matches the depth of our connections
          </p>
        </motion.div>

        {/* Main Trends */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {trends.map((trend, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl mb-4">{trend.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {trend.title}
              </h3>
              <div className="text-2xl font-bold text-twilight-600 dark:text-twilight-400 mb-3">
                {trend.stats}
              </div>
              <p className="text-twilight-600 dark:text-twilight-400 mb-4 font-medium">
                {trend.description}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {trend.details}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Convergence Visualization */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-gradient mb-8">
            The Perfect Storm for Digital Memorialization
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {convergencePoints.map((point, index) => (
              <motion.div
                key={index}
                className="bg-white/60 dark:bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 dark:border-white/10"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-3xl font-bold text-twilight-600 dark:text-twilight-400 mb-2">
                  {point.percentage}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {point.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-gradient mb-4">
            The Opportunity Window is Now
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Three major global trends are converging at this exact moment in history. 
            The aging population needs digital solutions, younger generations expect interactive experiences, 
            and AI technology has finally reached the sophistication needed for emotional complexity.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-twilight-100 dark:bg-twilight-800 rounded-full text-twilight-700 dark:text-twilight-300">
              #DigitalLegacy
            </span>
            <span className="px-4 py-2 bg-twilight-100 dark:bg-twilight-800 rounded-full text-twilight-700 dark:text-twilight-300">
              #AIForGrief
            </span>
            <span className="px-4 py-2 bg-twilight-100 dark:bg-twilight-800 rounded-full text-twilight-700 dark:text-twilight-300">
              #FutureOfMemorialization
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default GlobalTrendsSection
