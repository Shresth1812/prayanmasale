'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react'
import { useCartStore } from '@/lib/store'
import toast from 'react-hot-toast'

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice, getTotalItems, clearCart } = useCartStore()

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id)
      toast.success('Item removed from cart')
    } else {
      updateQuantity(id, newQuantity)
    }
  }

  const handleRemoveItem = (id: string, name: string) => {
    removeItem(id)
    toast.success(`${name} removed from cart`)
  }

  const handleClearCart = () => {
    clearCart()
    toast.success('Cart cleared')
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-dark-950 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-8xl mb-8">🛒</div>
            <h1 className="text-4xl font-luxury font-bold text-white mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Looks like you haven't added any premium spices to your cart yet.
            </p>
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary-500 text-dark-900 font-semibold rounded-full hover:bg-primary-400 transition-all duration-300 shadow-lg hover:shadow-primary-500/25"
              >
                Start Shopping
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-950 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-4xl font-luxury font-bold text-white mb-2">
              Shopping Cart
            </h1>
            <p className="text-gray-400">
              {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
          
          <Link href="/shop">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Continue Shopping</span>
            </motion.button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={`${item.id}-${item.selectedVariant.size}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-800 rounded-2xl p-6 border border-dark-700"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  {/* Product Image */}
                  <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <Link href={`/product/${item.id}`}>
                      <h3 className="text-lg font-semibold text-white hover:text-primary-400 transition-colors mb-1">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-gray-400 text-sm mb-2">{item.category}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-gray-400">Size: {item.selectedVariant.size}</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-gray-400">Heat:</span>
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${
                              i < item.heatLevel ? 'bg-red-500' : 'bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleQuantityChange(`${item.id}-${item.selectedVariant.size}`, item.quantity - 1)}
                      className="p-2 bg-dark-700 rounded-lg text-gray-400 hover:text-white hover:bg-dark-600 transition-colors"
                    >
                      <Minus size={16} />
                    </motion.button>
                    
                    <span className="text-white font-semibold w-8 text-center">
                      {item.quantity}
                    </span>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleQuantityChange(`${item.id}-${item.selectedVariant.size}`, item.quantity + 1)}
                      className="p-2 bg-dark-700 rounded-lg text-gray-400 hover:text-white hover:bg-dark-600 transition-colors"
                    >
                      <Plus size={16} />
                    </motion.button>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary-400 mb-1">
                      ₹{(item.selectedVariant.price * item.quantity).toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400">
                      ₹{item.selectedVariant.price} each
                    </div>
                  </div>

                  {/* Remove Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleRemoveItem(`${item.id}-${item.selectedVariant.size}`, item.name)}
                    className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <Trash2 size={20} />
                  </motion.button>
                </div>
              </motion.div>
            ))}

            {/* Clear Cart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center pt-4"
            >
              <button
                onClick={handleClearCart}
                className="text-gray-400 hover:text-red-400 transition-colors text-sm"
              >
                Clear entire cart
              </button>
            </motion.div>
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-dark-800 rounded-2xl p-6 border border-dark-700 h-fit sticky top-24"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal ({getTotalItems()} items)</span>
                <span>₹{getTotalPrice().toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between text-gray-400">
                <span>Shipping</span>
                <span className="text-green-400">Free</span>
              </div>
              
              <div className="flex justify-between text-gray-400">
                <span>Tax</span>
                <span>₹{Math.round(getTotalPrice() * 0.18).toLocaleString()}</span>
              </div>
              
              <div className="border-t border-dark-700 pt-4">
                <div className="flex justify-between text-xl font-bold text-white">
                  <span>Total</span>
                  <span className="text-primary-400">
                    ₹{(getTotalPrice() + Math.round(getTotalPrice() * 0.18)).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <Link href="/checkout">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary-500 text-dark-900 py-4 rounded-lg font-semibold hover:bg-primary-400 transition-all duration-300 shadow-lg hover:shadow-primary-500/25 flex items-center justify-center space-x-2"
              >
                <ShoppingBag size={20} />
                <span>Proceed to Checkout</span>
              </motion.button>
            </Link>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-dark-700">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="text-xs">
                  <div className="text-green-400 font-semibold">Free Shipping</div>
                  <div className="text-gray-400">On orders above ₹500</div>
                </div>
                <div className="text-xs">
                  <div className="text-blue-400 font-semibold">Secure Payment</div>
                  <div className="text-gray-400">SSL encrypted</div>
                </div>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="mt-4 p-4 bg-dark-700 rounded-lg">
              <div className="text-sm text-gray-300 mb-2">
                <strong>Estimated Delivery:</strong>
              </div>
              <div className="text-sm text-gray-400">
                2-3 business days for metro cities<br />
                3-5 business days for other locations
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}