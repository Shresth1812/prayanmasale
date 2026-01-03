'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useState, useEffect } from 'react'

const CustomerReviews = () => {
  const [currentReview, setCurrentReview] = useState(0)

  const reviews = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      review: 'PRAYAN Masale has completely transformed my cooking! The Royal Garam Masala is absolutely divine - the aroma fills the entire kitchen. My family can taste the difference in every dish.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Chef Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      review: 'As a professional chef, I can confidently say PRAYAN spices are exceptional. The purity and freshness are unmatched. My restaurant customers always compliment the authentic flavors.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Meera Patel',
      location: 'Ahmedabad',
      rating: 5,
      review: 'I have been using PRAYAN Masale for 2 years now. The quality is consistent, packaging is excellent, and the taste is just like my grandmother used to make. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'Arjun Singh',
      location: 'Bangalore',
      rating: 5,
      review: 'The Biryani Masala Supreme is a game-changer! My weekend biryanis have become legendary among friends. The blend of spices is perfect - not too strong, not too mild.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 5,
      name: 'Sunita Reddy',
      location: 'Hyderabad',
      rating: 5,
      review: 'Pure quality! No artificial colors or preservatives. I can see and taste the difference. My children love the food I make with PRAYAN spices. Worth every rupee!',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [reviews.length])

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
            What Our <span className="text-gold-gradient">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about PRAYAN Masale.
          </p>
        </motion.div>

        {/* Main Review Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <motion.div
            key={currentReview}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-dark-800 rounded-2xl p-8 lg:p-12 border border-dark-700 relative"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-primary-500/20">
              <Quote size={48} />
            </div>

            {/* Review Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex items-center justify-center mb-6">
                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                  <Star key={i} size={24} className="text-primary-400 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-xl lg:text-2xl text-gray-200 text-center leading-relaxed mb-8 font-light">
                "{reviews[currentReview].review}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-500">
                  <img
                    src={reviews[currentReview].image}
                    alt={reviews[currentReview].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <div className="text-white font-semibold text-lg">
                    {reviews[currentReview].name}
                  </div>
                  <div className="text-primary-400 text-sm">
                    {reviews[currentReview].location}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview ? 'bg-primary-500 w-8' : 'bg-dark-600 hover:bg-dark-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Review Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-gold-gradient mb-2">4.9/5</div>
            <div className="text-gray-400">Average Rating</div>
            <div className="flex items-center justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-primary-400 fill-current" />
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-gold-gradient mb-2">10K+</div>
            <div className="text-gray-400">Happy Reviews</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-gold-gradient mb-2">98%</div>
            <div className="text-gray-400">Recommend Us</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">Join thousands of satisfied customers</p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary-500 text-dark-900 font-semibold rounded-full hover:bg-primary-400 transition-all duration-300 shadow-lg hover:shadow-primary-500/25"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default CustomerReviews