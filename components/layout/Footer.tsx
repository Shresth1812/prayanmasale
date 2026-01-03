'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Instagram, Facebook, Twitter, MessageCircle, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: MessageCircle, href: 'https://wa.me/919876543210', label: 'WhatsApp' },
  ]

  const quickLinks = [
    { name: 'About Us', href: '/story' },
    { name: 'Shop All', href: '/shop' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'Quality Promise', href: '/trust' },
  ]

  const policies = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Return Policy', href: '/returns' },
    { name: 'Shipping Info', href: '/shipping' },
  ]

  return (
    <footer className="bg-dark-900 border-t border-primary-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-luxury font-bold text-gold-gradient">
                PRAYAN
              </div>
              <span className="text-sm text-primary-400 font-medium">Masale</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pure Taste. Royal Tradition. Experience the finest quality spices crafted with love and tradition.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 bg-dark-800 rounded-full text-primary-400 hover:text-primary-300 hover:bg-primary-500/10 transition-all duration-200"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-white font-semibold mb-4">Policies</h3>
            <ul className="space-y-2">
              {policies.map((policy) => (
                <li key={policy.name}>
                  <Link
                    href={policy.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {policy.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-4">Stay Connected</h3>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} />
                <span>hello@prayanmasale.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin size={16} />
                <span>Mumbai, India</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-white font-medium mb-2">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-dark-800 border border-dark-700 rounded-l-md text-white text-sm focus:outline-none focus:border-primary-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-primary-500 text-dark-900 rounded-r-md font-medium text-sm hover:bg-primary-400 transition-colors"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-dark-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 PRAYAN Masale. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-primary-400">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>100% Pure</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-400">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>FSSAI Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-400">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>No Adulteration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer