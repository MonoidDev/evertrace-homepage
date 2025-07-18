'use client'

import React from 'react'
import { motion } from 'framer-motion'

const VisionPoetrySection = () => {
  const quotes = [
    "Every life is a story worth telling.",
    "Remembrance should be personal, connected, and alive.",
    "Beyond preservation—toward emotional continuity across generations."
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-navy-900 flex items-center justify-center py-20">
      <div className="container-max section-padding text-center">
        {quotes.map((quote, index) => (
          <motion.h2
            key={index}
            className="text-3xl md:text-5xl lg:text-6xl font-serif font-light text-gradient mb-16 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.5 }}
            viewport={{ once: true }}
          >
            {quote}
          </motion.h2>
        ))}
      </div>
    </div>
  )
}

export default VisionPoetrySection
