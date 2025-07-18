'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      title: "Legacy Message Vault",
      description: "Secure space to schedule voice/text/video messages after death",
      icon: "💌",
      details: "AI-guided writing, custom triggers, multi-format support",
      preview: "Schedule messages for birthdays, anniversaries, or life milestones"
    },
    {
      title: "Digital Asset Inheritance",
      description: "Organize 90+ online accounts with access control",
      icon: "🔐",
      details: "Assign access control & executor tools",
      preview: "Seamlessly transfer digital accounts to chosen inheritors"
    },
    {
      title: "Life Story Timeline",
      description: "Multimedia life story with collaborative storytelling",
      icon: "📖",
      details: "AI organizes fragmented memories into narratives",
      preview: "Transform scattered memories into beautiful chronological stories"
    },
    {
      title: "Living Family Tree",
      description: "Interactive, zoomable tree with voice/photo memories",
      icon: "🌳",
      details: "Emotional tags like 'Kitchen Legend' or 'Bringer of Laughter'",
      preview: "Explore family connections through interactive storytelling"
    }
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-navy-50 to-twilight-50 dark:from-navy-900 dark:to-twilight-900 py-20">
      <div className="container-max section-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-gradient mb-6">
            From Grief to Creation
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Transform loss into living legacy with AI-powered tools for memory preservation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`glass rounded-2xl p-8 cursor-pointer transition-all duration-300 ${
                activeFeature === index ? 'ring-2 ring-twilight-400 bg-twilight-50/50 dark:bg-twilight-900/50' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveFeature(index)}
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{feature.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-twilight-600 dark:text-twilight-400 mb-3">
                    {feature.description}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {feature.details}
                  </p>
                  {activeFeature === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="border-t border-twilight-200 dark:border-twilight-700 pt-4 mt-4"
                    >
                      <p className="text-twilight-700 dark:text-twilight-300 italic">
                        {feature.preview}
                      </p>
                      <motion.button
                        className="mt-3 px-4 py-2 bg-twilight-500 text-white rounded-lg text-sm hover:bg-twilight-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Try Demo
                      </motion.button>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection
