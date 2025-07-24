'use client'

import React from 'react'
import { motion } from 'framer-motion'

const VisionSection = () => {
  const visionItems = [
    {
      title: "Digital Preservation",
      description: "Secure, permanent memory storage that transcends physical limitations",
      icon: "🔒",
      details: "Cloud-native architecture ensures your memories are preserved forever, accessible across generations with military-grade security."
    },
    {
      title: "AI-Enhanced Connection",
      description: "Discover, organize, and experience memories across generations",
      icon: "🧠",
      details: "Advanced AI helps surface forgotten memories, creates narrative connections, and enables interactive conversations with preserved legacies."
    },
    {
      title: "Universal Access",
      description: "Platform accessible anytime, anywhere, by anyone you choose",
      icon: "🌍",
      details: "Cross-platform compatibility ensures your loved ones can connect with memories whether they're across the street or across the world."
    }
  ]

  return (
    <div className="relative py-24 md:py-32 bg-gradient-to-br from-indigo-50 to-white dark:from-navy-900 dark:to-navy-800">
      <div className="container-max section-padding">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-gradient mb-6">
            A Bridge Between Our Digital Lives
            <br />
            <span className="text-indigo-600 dark:text-indigo-400">
              and How We Remember
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Creating emotional infrastructure that matches the depth of human connection
          </p>
        </motion.div>

        {/* Vision Items */}
        <div className="space-y-16">
          {visionItems.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xl text-indigo-600 dark:text-indigo-400 font-medium">
                  {item.description}
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.details}
                </p>
                <motion.button
                  className="px-6 py-3 border border-indigo-500 text-indigo-600 dark:text-indigo-400 rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>

              {/* Visual Element */}
              <div className="flex-1 relative">
                <motion.div
                  className="glass rounded-3xl p-8 h-64 flex items-center justify-center relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Floating Memory Fragments */}
                  <div className="absolute inset-0">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-gradient-to-br from-indigo-300 to-gold-300 rounded-sm opacity-60"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          scale: [0.8, 1.2, 0.8],
                          rotate: [0, 180, 360],
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2
                        }}
                      />
                    ))}
                  </div>

                  {/* Central Icon */}
                  <motion.div
                    className="text-6xl z-10"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {item.icon}
                  </motion.div>

                  {/* Ripple Effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-indigo-300/30 rounded-3xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connecting Lines */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-full bg-gradient-to-b from-indigo-200 via-indigo-400 to-gold-200 opacity-20 hidden lg:block" />
      </div>
    </div>
  )
}

export default VisionSection
