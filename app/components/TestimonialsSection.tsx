'use client'

import React from 'react'
import { motion } from 'framer-motion'

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Evertrace helped me preserve my grandmother's stories in a way that felt sacred and eternal.",
      author: "Sarah M.",
      role: "Granddaughter"
    },
    {
      quote: "Finally, a platform that understands grief is not about moving on, but moving forward with love.",
      author: "Hiroshi T.",
      role: "Father"
    },
    {
      quote: "My cat's memory lives on in ways I never imagined possible. Thank you for understanding that all love matters.",
      author: "Maria L.",
      role: "Pet Parent"
    }
  ]

  return (
    <div className="py-20 bg-navy-900 text-white">
      <div className="container-max section-padding">
        <h2 className="text-4xl font-serif font-bold text-center text-gold-400 mb-16">
          Stories of Remembrance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-twilight-400">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection
