'use client'

import React from 'react'
import { motion } from 'framer-motion'

const GlobalTrendsSection = () => {
  const trends = [
    {
      title: "Aging Societies",
      description: "Japan 35% over 65 by 2040",
      icon: "👴",
      impact: "Unprecedented need for digital legacy solutions"
    },
    {
      title: "Gen Z Rituals",
      description: "YouTube tributes, digital altars",
      icon: "📱",
      impact: "New generations expect interactive memorial experiences"
    },
    {
      title: "AI Maturity",
      description: "LLMs for grief counseling and legacy writing",
      icon: "🤖",
      impact: "Technology finally ready for emotional complexity"
    }
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-twilight-50 to-white dark:from-twilight-900 dark:to-navy-900 py-20">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div className="text-4xl mb-4">{trend.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {trend.title}
              </h3>
              <p className="text-twilight-600 dark:text-twilight-400 mb-4">
                {trend.description}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {trend.impact}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GlobalTrendsSection
