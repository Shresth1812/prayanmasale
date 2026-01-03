'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Star, ShoppingCart, Eye } from 'lucide-react'
import { getFeaturedProducts } from '@/lib/products'
import { useCartStore } from '@/lib/store'
import toast from 'react-hot-toast'

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts()
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = (product: any) => {
    addItem(product, product.variants[1]) // Default to 100g variant
    toast.success(`${product.name} added to cart!`)
  }

  return (
    <section id="featured-products" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-luxury font-bold text-white mb-4">
            Featured <span className="text-gold-gradient">Spices</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our most loved premium spices, carefully selected for their exceptional quality and flavor
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-dark-800 rounded-2xl overflow-hidden hover-lift border border-dark-700 hover:border-primary-500/30 transition-all duration-300">
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 space-y-2">
                    {product.bestSeller && (
                      <span className="bg-primary-500 text-dark-900 px-3 py-1 rounded-full text-xs font-bold">
                        Best Seller
                      </span>
                    )}
                    {product.isNew && (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        New
                      </span>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
                    <Link href={`/product/${product.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/90 rounded-full text-dark-900 hover:bg-white transition-colors"
                      >
                        <Eye size={16} />
                      </motion.button>
                    </Link>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-primary-400 text-sm font-medium">{product.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-primary-400 fill-current" />
                    ))}
                    <span className="text-gray-400 text-sm ml-2">(4.8)</span>
                  </div>

                  {/* Heat Level */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-400">Heat Level:</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < product.heatLevel ? 'bg-red-500' : 'bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-primary-400">
                        ₹{product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-gray-500 line-through">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-400">100g</span>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 bg-primary-500 text-dark-900 py-3 rounded-lg font-semibold hover:bg-primary-400 transition-colors flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart size={18} />
                      <span>Add to Cart</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/shop">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-primary-500 text-primary-400 font-semibold rounded-full hover:bg-primary-500/10 transition-all duration-300"
            >
              View All Products
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProducts