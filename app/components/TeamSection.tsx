'use client'

import React from 'react'
import { motion } from 'framer-motion'

const TeamSection = () => {
  const team = [
    {
      name: "Yanru Mao",
      role: "CEO",
      background: "Waseda University\nFounder of G.K. Monoid\nIT product consultant with cross-border team leadership experience",
      avatar: "👩‍💼"
    },
    {
      name: "Chenyu Wang",
      role: "CTO",
      background: "University of Southern California (USC)\nFormer engineer at Microsoft\nSpecialized in distributed systems and cloud infrastructure",
      avatar: "👨‍💻"
    }
  ]

  return (
    <div className="py-20 bg-gradient-to-br from-indigo-50 to-navy-50 dark:from-indigo-900 dark:to-navy-900">
      <div className="container-max section-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-gradient mb-6">
            Our Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Bringing together technology, empathy, and vision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-6xl mb-4">{member.avatar}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-indigo-600 dark:text-indigo-400 mb-4 font-medium">
                {member.role}
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {member.background.split('\n').map((line, lineIndex) => (
                  <p key={lineIndex} className="mb-1">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamSection
