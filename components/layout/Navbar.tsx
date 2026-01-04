'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react'
import { useCartStore } from '@/lib/store'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const totalItems = useCartStore((state) => state.getTotalItems())

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'Our Story', href: '/story' },
    { name: 'Trust', href: '/trust' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-primary-500/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 z-10">
            <div className="text-3xl lg:text-4xl font-luxury font-bold text-gold-gradient tracking-tight hover:scale-105 transition-transform duration-200">
              PRAYAN
            </div>
            <span className="text-sm text-primary-400 font-medium tracking-widest uppercase">Masale</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-primary-400 transition-all duration-300 font-medium text-lg tracking-wide relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-white hover:text-primary-400 transition-colors hover:scale-110 duration-200">
              <Search size={20} />
            </button>

            <button className="p-2 text-white hover:text-primary-400 transition-colors hover:scale-110 duration-200">
              <User size={20} />
            </button>

            <Link href="/cart">
              <div className="relative p-2 text-white hover:text-primary-400 transition-colors hover:scale-110 duration-200">
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary-500 text-dark-900 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
                    {totalItems}
                  </span>
                )}
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-primary-400 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-out overflow-hidden ${
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-black/95 backdrop-blur-md border-t border-primary-500/20 px-4 py-6 space-y-4">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-white hover:text-primary-400 transition-colors duration-200 font-medium py-3 text-lg"
              style={{ 
                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms' 
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar