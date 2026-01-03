'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle, Shield, Award, Leaf } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      icon: Shield,
      title: 'FSSAI Certified',
      description: 'Food Safety and Standards Authority of India approved',
      badge: 'https://via.placeholder.com/100x100/eab308/1a1a1a?text=FSSAI'
    },
    {
      icon: CheckCircle,
      title: '100% Pure',
      description: 'No artificial colors, preservatives, or adulterants',
      badge: 'https://via.placeholder.com/100x100/22c55e/1a1a1a?text=PURE'
    },
    {
      icon: Leaf,
      title: 'Organic Certified',
      description: 'Certified organic by accredited agencies',
      badge: 'https://via.placeholder.com/100x100/10b981/1a1a1a?text=ORG'
    },
    {
      icon: Award,
      title: 'ISO Certified',
      description: 'International quality management standards',
      badge: 'https://via.placeholder.com/100x100/3b82f6/1a1a1a?text=ISO'
    }
  ]

  const trustBadges = [
    'No Adulteration',
    'Lab Tested',
    'Hygienically Packed',
    'Fresh & Pure',
    'Premium Quality',
    'Traditional Methods'
  ]

  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-luxury font-bold text-white mb-4">
            Trust & <span className="text-gold-gradient">Certifications</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Your trust is our priority. We maintain the highest standards of quality and safety in every product we deliver.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-dark-800 p-6 rounded-2xl border border-dark-700 hover:border-primary-500/30 transition-all duration-300 hover-lift text-center">
                {/* Badge Image */}
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <Image
                    src={cert.badge}
                    alt={cert.title}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-500/20 text-primary-400 mb-4"
                >
                  <cert.icon size={24} />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-dark-800 rounded-2xl p-8 border border-dark-700"
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-8">
            Our Quality Promise
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center p-3 bg-dark-700 rounded-lg border border-primary-500/20 hover:border-primary-500/40 transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-sm text-gray-300 font-medium text-center">
                    {badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quality Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">
            Our Quality Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Sourcing', desc: 'Direct from premium farms' },
              { step: '02', title: 'Testing', desc: 'Rigorous quality checks' },
              { step: '03', title: 'Processing', desc: 'Traditional methods' },
              { step: '04', title: 'Packaging', desc: 'Hygienic & fresh' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-primary-500/20 mb-2">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {process.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {process.desc}
                </p>
                
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary-500/20 transform translate-x-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications