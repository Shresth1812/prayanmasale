'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, CreditCard, Truck, Shield, CheckCircle } from 'lucide-react'
import { useCartStore } from '@/lib/store'
import toast from 'react-hot-toast'

export default function CheckoutPage() {
  const { items, getTotalPrice, getTotalItems, clearCart } = useCartStore()
  const [step, setStep] = useState(1) // 1: Details, 2: Payment, 3: Confirmation
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod'
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      // Validate form
      const required = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'pincode']
      const missing = required.filter(field => !formData[field as keyof typeof formData])
      
      if (missing.length > 0) {
        toast.error('Please fill in all required fields')
        return
      }
      
      setStep(2)
    } else if (step === 2) {
      // Process payment (mock)
      setStep(3)
      toast.success('Order placed successfully!')
      // Clear cart after successful order
      setTimeout(() => {
        clearCart()
      }, 2000)
    }
  }

  const subtotal = getTotalPrice()
  const tax = Math.round(subtotal * 0.18)
  const shipping = subtotal >= 500 ? 0 : 50
  const total = subtotal + tax + shipping

  if (items.length === 0 && step !== 3) {
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
              Add some premium spices to your cart before checkout.
            </p>
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary-500 text-dark-900 font-semibold rounded-full hover:bg-primary-400 transition-all duration-300"
              >
                Start Shopping
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  if (step === 3) {
    return (
      <div className="min-h-screen bg-dark-950 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <CheckCircle size={48} className="text-white" />
            </motion.div>
            
            <h1 className="text-4xl font-luxury font-bold text-white mb-4">
              Order Confirmed!
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Thank you for your order. We'll send you a confirmation email shortly.
            </p>
            
            <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700 max-w-md mx-auto mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Order Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Order ID:</span>
                  <span className="text-white">#PM{Date.now().toString().slice(-6)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Amount:</span>
                  <span className="text-primary-400 font-semibold">₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Payment Method:</span>
                  <span className="text-white">
                    {formData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Estimated Delivery:</span>
                  <span className="text-white">2-3 business days</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/shop">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary-500 text-dark-900 font-semibold rounded-full hover:bg-primary-400 transition-all duration-300"
                >
                  Continue Shopping
                </motion.button>
              </Link>
              
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-primary-500 text-primary-400 font-semibold rounded-full hover:bg-primary-500/10 transition-all duration-300"
                >
                  Back to Home
                </motion.button>
              </Link>
            </div>
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
              Checkout
            </h1>
            <p className="text-gray-400">
              Complete your order for {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}
            </p>
          </div>
          
          <Link href="/cart">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Cart</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center mb-12"
        >
          <div className="flex items-center space-x-4">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
              step >= 1 ? 'bg-primary-500 text-dark-900' : 'bg-dark-700 text-gray-400'
            }`}>
              1
            </div>
            <div className={`w-16 h-1 ${step >= 2 ? 'bg-primary-500' : 'bg-dark-700'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
              step >= 2 ? 'bg-primary-500 text-dark-900' : 'bg-dark-700 text-gray-400'
            }`}>
              2
            </div>
            <div className={`w-16 h-1 ${step >= 3 ? 'bg-primary-500' : 'bg-dark-700'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
              step >= 3 ? 'bg-primary-500 text-dark-900' : 'bg-dark-700 text-gray-400'
            }`}>
              3
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-dark-800 rounded-2xl p-8 border border-dark-700"
              >
                <h2 className="text-2xl font-semibold text-white mb-6">Shipping Information</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        State *
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary-500 text-dark-900 py-4 rounded-lg font-semibold hover:bg-primary-400 transition-all duration-300"
                  >
                    Continue to Payment
                  </motion.button>
                </form>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-dark-800 rounded-2xl p-8 border border-dark-700"
              >
                <h2 className="text-2xl font-semibold text-white mb-6">Payment Method</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <label className="flex items-center p-4 bg-dark-700 rounded-lg border border-dark-600 cursor-pointer hover:border-primary-500 transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === 'cod'}
                        onChange={handleInputChange}
                        className="mr-4"
                      />
                      <div className="flex items-center space-x-3">
                        <Truck className="text-primary-400" size={24} />
                        <div>
                          <div className="text-white font-medium">Cash on Delivery</div>
                          <div className="text-gray-400 text-sm">Pay when you receive your order</div>
                        </div>
                      </div>
                    </label>

                    <label className="flex items-center p-4 bg-dark-700 rounded-lg border border-dark-600 cursor-pointer hover:border-primary-500 transition-colors opacity-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="online"
                        disabled
                        className="mr-4"
                      />
                      <div className="flex items-center space-x-3">
                        <CreditCard className="text-gray-500" size={24} />
                        <div>
                          <div className="text-gray-500 font-medium">Online Payment</div>
                          <div className="text-gray-500 text-sm">Coming Soon - UPI, Cards, Net Banking</div>
                        </div>
                      </div>
                    </label>
                  </div>

                  <div className="flex space-x-4">
                    <motion.button
                      type="button"
                      onClick={() => setStep(1)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 border-2 border-primary-500 text-primary-400 py-4 rounded-lg font-semibold hover:bg-primary-500/10 transition-all duration-300"
                    >
                      Back
                    </motion.button>
                    
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-primary-500 text-dark-900 py-4 rounded-lg font-semibold hover:bg-primary-400 transition-all duration-300"
                    >
                      Place Order
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            )}
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-dark-800 rounded-2xl p-6 border border-dark-700 h-fit sticky top-24"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Order Summary</h2>
            
            {/* Items */}
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.selectedVariant.size}`} className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-sm font-medium truncate">{item.name}</div>
                    <div className="text-gray-400 text-xs">{item.selectedVariant.size} × {item.quantity}</div>
                  </div>
                  <div className="text-primary-400 font-semibold text-sm">
                    ₹{(item.selectedVariant.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Totals */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between text-gray-400">
                <span>Shipping</span>
                <span className={shipping === 0 ? 'text-green-400' : ''}>
                  {shipping === 0 ? 'Free' : `₹${shipping}`}
                </span>
              </div>
              
              <div className="flex justify-between text-gray-400">
                <span>Tax (18%)</span>
                <span>₹{tax.toLocaleString()}</span>
              </div>
              
              <div className="border-t border-dark-700 pt-3">
                <div className="flex justify-between text-xl font-bold text-white">
                  <span>Total</span>
                  <span className="text-primary-400">₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Security Badge */}
            <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
              <Shield size={16} />
              <span>Secure & Safe Checkout</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}