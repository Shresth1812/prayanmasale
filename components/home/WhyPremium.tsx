'use client'

import { motion } from 'framer-motion'
import { Leaf, Award, Shield, Heart } from 'lucide-react'

const WhyPremium = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Pure & Natural',
      description: 'Handpicked from the finest farms, our spices are 100% pure with no artificial additives or preservatives.',
      color: 'text-green-400'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Each batch undergoes rigorous quality testing to ensure consistent flavor, aroma, and freshness.',
      color: 'text-primary-400'
    },
    {
      icon: Shield,
      title: 'FSSAI Certified',
      description: 'All our products are certified by FSSAI and follow strict hygiene and safety standards.',
      color: 'text-blue-400'
    },
    {
      icon: Heart,
      title: 'Traditional Methods',
      description: 'Crafted using time-honored techniques passed down through generations for authentic taste.',
      color: 'text-red-400'
    }
  ]

  return (
    <section className="py-20 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-luxury font-bold text-white mb-4">
            Why Our Spices Are <span className="text-gold-gradient">Premium</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We don't just sell spices, we deliver an experience of purity, quality, and tradition that transforms every meal into a royal feast.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-dark-800 p-8 rounded-2xl border border-dark-700 hover:border-primary-500/30 transition-all duration-300 hover-lift text-center">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-dark-700 mb-6 ${feature.color}`}
                >
                  <feature.icon size={32} />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-primary-400 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { number: '35+', label: 'Years of Excellence' },
            { number: '50K+', label: 'Happy Customers' },
            { number: '100%', label: 'Pure & Natural' },
            { number: '24/7', label: 'Customer Support' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-gold-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyPremium