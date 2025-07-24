'use client'

import React from 'react'
import { motion } from 'framer-motion'

const DemoSection = () => (
  <div className="py-20 bg-gradient-to-br from-indigo-50 to-navy-50 dark:from-indigo-900 dark:to-navy-900">
    <div className="container-max section-padding text-center">
      <h2 className="text-4xl font-serif font-bold text-gradient mb-8">See Evertrace in Action</h2>
      <div className="max-w-4xl mx-auto glass rounded-3xl p-8">
        <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400">Product Demo Video</p>
        </div>
      </div>
    </div>
  </div>
)

export default DemoSection
