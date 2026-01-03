'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Star, ShoppingCart, Heart, Share2, MessageCircle, Truck, Shield, Award } from 'lucide-react'
import { getProductById } from '@/lib/products'
import { useCartStore } from '@/lib/store'
import toast from 'react-hot-toast'
import { notFound } from 'next/navigation'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const addItem = useCartStore((state) => state.addItem)

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    addItem(product, product.variants[selectedVariant])
    toast.success(`${product.name} added to cart!`)
  }

  const handleWhatsAppOrder = () => {
    const message = `Hi! I'm interested in ordering ${product.name} (${product.variants[selectedVariant].size} - ₹${product.variants[selectedVariant].price}). Can you help me with the details?`
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-dark-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/shop">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Shop</span>
            </motion.button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-dark-800">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Badges */}
              <div className="absolute top-6 left-6 space-y-2">
                {product.bestSeller && (
                  <span className="bg-primary-500 text-dark-900 px-3 py-1 rounded-full text-sm font-bold">
                    Best Seller
                  </span>
                )}
                {product.isNew && (
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    New
                  </span>
                )}
              </div>

              {/* Discount Badge */}
              {product.originalPrice && (
                <div className="absolute top-6 right-6">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Category */}
            <div className="text-primary-400 font-medium">{product.category}</div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-luxury font-bold text-white">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-primary-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-400">(4.8) • 234 reviews</span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-primary-400">
                ₹{product.variants[selectedVariant].price}
              </span>
              {product.originalPrice && (
                <span className="text-2xl text-gray-500 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Aroma & Taste Profile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-dark-800 p-4 rounded-lg border border-dark-700">
                <h3 className="text-white font-semibold mb-2">Aroma Profile</h3>
                <p className="text-gray-400 text-sm">{product.aromaProfile}</p>
              </div>
              <div className="bg-dark-800 p-4 rounded-lg border border-dark-700">
                <h3 className="text-white font-semibold mb-2">Taste Profile</h3>
                <p className="text-gray-400 text-sm">{product.tasteProfile}</p>
              </div>
            </div>

            {/* Heat Level */}
            <div className="bg-dark-800 p-4 rounded-lg border border-dark-700">
              <h3 className="text-white font-semibold mb-3">Heat Level</h3>
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 rounded-full ${
                        i < product.heatLevel ? 'bg-red-500' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-400">
                  {product.heatLevel === 1 && 'Mild'}
                  {product.heatLevel === 2 && 'Medium'}
                  {product.heatLevel === 3 && 'Hot'}
                  {product.heatLevel === 4 && 'Very Hot'}
                  {product.heatLevel === 5 && 'Extreme'}
                </span>
              </div>
            </div>

            {/* Usage Suggestions */}
            <div className="bg-dark-800 p-4 rounded-lg border border-dark-700">
              <h3 className="text-white font-semibold mb-3">Perfect For</h3>
              <div className="flex flex-wrap gap-2">
                {product.usageSuggestions.map((usage) => (
                  <span
                    key={usage}
                    className="bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full text-sm"
                  >
                    {usage}
                  </span>
                ))}
              </div>
            </div>

            {/* Variants */}
            <div>
              <h3 className="text-white font-semibold mb-3">Choose Size</h3>
              <div className="grid grid-cols-3 gap-3">
                {product.variants.map((variant, index) => (
                  <button
                    key={variant.size}
                    onClick={() => setSelectedVariant(index)}
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      selectedVariant === index
                        ? 'border-primary-500 bg-primary-500/10 text-primary-400'
                        : 'border-dark-700 bg-dark-800 text-gray-400 hover:border-primary-500/50'
                    }`}
                  >
                    <div className="font-semibold">{variant.size}</div>
                    <div className="text-sm">₹{variant.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className="flex-1 bg-primary-500 text-dark-900 py-4 rounded-lg font-semibold hover:bg-primary-400 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <ShoppingCart size={20} />
                  <span>Add to Cart</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-dark-800 border border-dark-700 rounded-lg text-gray-400 hover:text-red-400 hover:border-red-400 transition-colors"
                >
                  <Heart size={20} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-dark-800 border border-dark-700 rounded-lg text-gray-400 hover:text-primary-400 hover:border-primary-400 transition-colors"
                >
                  <Share2 size={20} />
                </motion.button>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsAppOrder}
                className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-500 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Order via WhatsApp</span>
              </motion.button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-dark-700">
              <div className="flex items-center space-x-2 text-green-400">
                <Shield size={16} />
                <span className="text-sm">100% Pure</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <Award size={16} />
                <span className="text-sm">FSSAI Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-400">
                <Truck size={16} />
                <span className="text-sm">Free Shipping</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}