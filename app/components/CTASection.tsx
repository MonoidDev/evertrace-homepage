'use client'

import React from 'react'
import { motion } from 'framer-motion'

const CTASection = () => (
  <div className="min-h-screen bg-gradient-to-br from-navy-900 via-twilight-900 to-navy-800 text-white flex items-center justify-center">
    <div className="container-max section-padding text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-gold-400 mb-8">
          Join us in reimagining how humanity remembers
        </h2>
        <p className="text-2xl mb-12 text-twilight-300">
          Because every story deserves to be remembered.
        </p>
        
        <motion.div
          className="space-y-6"
          whileHover={{ scale: 1.05 }}
        >
          <motion.a
            href="mailto:ymao@monoidtech.com"
            className="inline-block px-12 py-4 bg-gradient-to-r from-twilight-500 to-gold-500 text-white rounded-full font-semibold text-xl shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
          
          <div className="mt-8">
            <div className="w-16 h-16 bg-gradient-to-br from-twilight-500 to-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
              </svg>
            </div>
            <p className="text-2xl font-serif text-gold-400">Evertrace</p>
            <p className="text-twilight-300 mt-2">ymao@monoidtech.com</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>
)

export default CTASection
