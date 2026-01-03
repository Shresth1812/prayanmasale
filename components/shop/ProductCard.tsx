'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Star, ShoppingCart, Eye, Heart, MessageCircle } from 'lucide-react'
import { Product, useCartStore } from '@/lib/store'
import toast from 'react-hot-toast'

interface ProductCardProps {
  product: Product
  viewMode: 'grid' | 'list'
}

const ProductCard = ({ product, viewMode }: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem(product, product.variants[1]) // Default to 100g variant
    toast.success(`${product.name} added to cart!`)
  }

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.preventDefault()
    const message = `Hi! I'm interested in ordering ${product.name} (₹${product.price}). Can you help me with the details?`
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  if (viewMode === 'list') {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        className="bg-dark-800 rounded-2xl overflow-hidden border border-dark-700 hover:border-primary-500/30 transition-all duration-300"
      >
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative w-full md:w-64 h-48 md:h-auto overflow-hidden">
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
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between h-full">
              <div className="flex-1">
                <div className="mb-2">
                  <span className="text-primary-400 text-sm font-medium">{product.category}</span>
                </div>
                
                <Link href={`/product/${product.id}`}>
                  <h3 className="text-xl font-semibold text-white mb-2 hover:text-primary-400 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating & Heat Level */}
                <div className="flex items-center space-x-6 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-primary-400 fill-current" />
                    ))}
                    <span className="text-gray-400 text-sm ml-2">(4.8)</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">Heat:</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full ${
                            i < product.heatLevel ? 'bg-red-500' : 'bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {['100% Pure', 'FSSAI Certified', 'No Adulteration'].map((badge) => (
                    <span key={badge} className="text-xs bg-dark-700 text-primary-400 px-2 py-1 rounded-full">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Actions */}
              <div className="lg:text-right lg:ml-6">
                <div className="flex lg:flex-col items-center lg:items-end justify-between lg:justify-start mb-4">
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

                <div className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    className="flex-1 lg:w-full bg-primary-500 text-dark-900 py-2 px-4 rounded-lg font-semibold hover:bg-primary-400 transition-colors flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart size={16} />
                    <span>Add to Cart</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleWhatsAppOrder}
                    className="flex-1 lg:w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-500 transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-dark-800 rounded-2xl overflow-hidden border border-dark-700 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
    >
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
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white/90 rounded-full text-dark-900 hover:bg-white transition-colors"
          >
            <Heart size={16} />
          </motion.button>
        </div>

        {/* Discount Badge */}
        {product.originalPrice && (
          <div className="absolute bottom-4 left-4">
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="mb-2">
          <span className="text-primary-400 text-sm font-medium">{product.category}</span>
        </div>
        
        <Link href={`/product/${product.id}`}>
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
            {product.name}
          </h3>
        </Link>
        
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

        {/* Trust Badges */}
        <div className="flex flex-wrap gap-1 mb-4">
          {['100% Pure', 'FSSAI Certified', 'No Adulteration'].map((badge) => (
            <span key={badge} className="text-xs bg-dark-700 text-primary-400 px-2 py-1 rounded-full">
              {badge}
            </span>
          ))}
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
        <div className="space-y-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
            className="w-full bg-primary-500 text-dark-900 py-3 rounded-lg font-semibold hover:bg-primary-400 transition-colors flex items-center justify-center space-x-2"
          >
            <ShoppingCart size={18} />
            <span>Add to Cart</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleWhatsAppOrder}
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-500 transition-colors flex items-center justify-center space-x-2"
          >
            <MessageCircle size={16} />
            <span>WhatsApp Order</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard