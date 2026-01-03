'use client'

import HeroSection from '@/components/home/HeroSection'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import WhyPremium from '@/components/home/WhyPremium'
import Certifications from '@/components/home/Certifications'
import CustomerReviews from '@/components/home/CustomerReviews'
import SocialFeed from '@/components/home/SocialFeed'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      <WhyPremium />
      <Certifications />
      <CustomerReviews />
      <SocialFeed />
    </div>
  )
}