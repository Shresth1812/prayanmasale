'use client'

import { motion } from 'framer-motion'
import { Star, Flame, Award, Sparkles } from 'lucide-react'

interface ProductFiltersProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  selectedFilter: string
  onFilterChange: (filter: string) => void
}

const ProductFilters = ({
  categories,
  selectedCategory,
  onCategoryChange,
  selectedFilter,
  onFilterChange
}: ProductFiltersProps) => {
  const specialFilters = [
    { id: 'All', label: 'All Products', icon: Star },
    { id: 'Featured', label: 'Featured', icon: Sparkles },
    { id: 'Best Seller', label: 'Best Sellers', icon: Award },
    { id: 'New', label: 'New Arrivals', icon: Flame },
  ]

  const heatLevels = [
    { level: 1, label: 'Mild', color: 'text-green-400' },
    { level: 2, label: 'Medium', color: 'text-yellow-400' },
    { level: 3, label: 'Hot', color: 'text-orange-400' },
    { level: 4, label: 'Very Hot', color: 'text-red-400' },
    { level: 5, label: 'Extreme', color: 'text-red-600' },
  ]

  return (
    <div className="space-y-6">
      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-dark-800 rounded-2xl p-6 border border-dark-700"
      >
        <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-500 text-dark-900 font-semibold'
                  : 'text-gray-400 hover:text-white hover:bg-dark-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Special Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-dark-800 rounded-2xl p-6 border border-dark-700"
      >
        <h3 className="text-lg font-semibold text-white mb-4">Special Collections</h3>
        <div className="space-y-2">
          {specialFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                selectedFilter === filter.id
                  ? 'bg-primary-500 text-dark-900 font-semibold'
                  : 'text-gray-400 hover:text-white hover:bg-dark-700'
              }`}
            >
              <filter.icon size={16} />
              <span>{filter.label}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Heat Level Guide */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-dark-800 rounded-2xl p-6 border border-dark-700"
      >
        <h3 className="text-lg font-semibold text-white mb-4">Heat Level Guide</h3>
        <div className="space-y-3">
          {heatLevels.map((heat) => (
            <div key={heat.level} className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">{heat.label}</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i < heat.level ? heat.color.replace('text-', 'bg-') : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Price Range */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-dark-800 rounded-2xl p-6 border border-dark-700"
      >
        <h3 className="text-lg font-semibold text-white mb-4">Price Range</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">₹0</span>
            <span className="text-gray-400">₹500+</span>
          </div>
          <input
            type="range"
            min="0"
            max="500"
            className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex items-center space-x-2">
            <input
              type="number"
              placeholder="Min"
              className="flex-1 px-3 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary-500"
            />
            <span className="text-gray-400">-</span>
            <input
              type="number"
              placeholder="Max"
              className="flex-1 px-3 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary-500"
            />
          </div>
        </div>
      </motion.div>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-dark-800 rounded-2xl p-6 border border-dark-700"
      >
        <h3 className="text-lg font-semibold text-white mb-4">Quality Assurance</h3>
        <div className="space-y-3">
          {[
            '100% Pure',
            'FSSAI Certified',
            'No Adulteration',
            'Lab Tested',
            'Fresh & Natural'
          ].map((badge) => (
            <div key={badge} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span className="text-gray-400 text-sm">{badge}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default ProductFilters