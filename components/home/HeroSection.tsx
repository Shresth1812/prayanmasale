'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown, Sparkles } from 'lucide-react'

const HeroSection = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('featured-products')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1920')`
          }}
        />
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-400 rounded-full"
              initial={{ 
                x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
                y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800,
                opacity: 0 
              }}
              animate={{ 
                y: [null, -100, -200],
                opacity: [0, 1, 0] 
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center space-x-2 glass-effect rounded-full px-6 py-3 text-primary-400 mb-6"
          >
            <Sparkles size={18} className="animate-pulse" />
            <span className="text-sm font-medium tracking-wide">Premium Quality Since 1985</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-luxury font-bold leading-tight tracking-tight"
          >
            <span className="text-white drop-shadow-2xl">PRAYAN</span>
            <br />
            <span className="text-gold-gradient animate-pulse">Masale</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-2xl sm:text-3xl lg:text-4xl text-gray-200 font-light tracking-wide"
          >
            Pure Taste. Royal Tradition.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Experience the finest quality spices, handpicked from the best farms and crafted with generations of expertise for the discerning palate.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8"
          >
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 btn-primary text-lg font-semibold tracking-wide shadow-2xl"
              >
                Shop Now
              </motion.button>
            </Link>

            <motion.button
              onClick={scrollToProducts}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-5 btn-secondary text-lg font-semibold tracking-wide"
            >
              Explore Products
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToProducts}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-primary-400 hover:text-primary-300 transition-colors"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection