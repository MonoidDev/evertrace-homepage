'use client'

import React from 'react'
import { motion } from 'framer-motion'

const TeamSection = () => {
  const team = [
    {
      name: "Dr. Yuki Tanaka",
      role: "CEO & Co-founder",
      background: "Former AI Research Lead at Tokyo University",
      avatar: "👩‍💼"
    },
    {
      name: "Marcus Chen",
      role: "CTO",
      background: "Ex-Google AI, Stanford PhD",
      avatar: "👨‍💻"
    },
    {
      name: "G.K. Monoid",
      role: "Founding Partner",
      background: "Track record in logistics, finance, AI, pet e-commerce",
      avatar: "🎯"
    }
  ]

  return (
    <div className="py-20 bg-gradient-to-br from-twilight-50 to-navy-50 dark:from-twilight-900 dark:to-navy-900">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <p className="text-twilight-600 dark:text-twilight-400 mb-3">
                {member.role}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {member.background}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamSection
