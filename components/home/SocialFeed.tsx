'use client'

import { motion } from 'framer-motion'
import { Instagram, Heart, MessageCircle, Share } from 'lucide-react'
import { useState } from 'react'

const SocialFeed = () => {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null)

  const instagramPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop',
      caption: 'Royal Garam Masala making every dish special ✨ #PRAYANMasale #PureTaste',
      likes: 1247,
      comments: 89
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=400&fit=crop',
      caption: 'Biryani Sunday with our premium Biryani Masala Supreme 🍛 #BiryaniLove',
      likes: 2156,
      comments: 134
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1599909533730-8b9e1b7b5b5a?w=400&h=400&fit=crop',
      caption: 'The perfect red chili powder for authentic Indian flavors 🌶️ #SpiceLove',
      likes: 987,
      comments: 67
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=400&fit=crop',
      caption: 'Golden turmeric from Kerala farms 💛 #OrganicSpices #HealthyLiving',
      likes: 1543,
      comments: 92
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
      caption: 'Black pepper - the king of spices! 👑 #KingOfSpices #PremiumQuality',
      likes: 876,
      comments: 45
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=400&fit=crop',
      caption: 'Chole Masala Deluxe for the perfect chickpea curry 🥘 #CholeMasala',
      likes: 1234,
      comments: 78
    }
  ]

  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-luxury font-bold text-white mb-4">
            Follow Our <span className="text-gold-gradient">Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Join our community on Instagram and discover daily inspiration, recipes, and behind-the-scenes moments.
          </p>
          
          {/* Instagram Handle */}
          <motion.a
            href="https://instagram.com/prayanmasale"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            <Instagram size={20} />
            <span>@prayanmasale</span>
          </motion.a>
        </motion.div>

        {/* Instagram Feed Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
              className="group relative overflow-hidden rounded-2xl bg-dark-800 border border-dark-700 hover:border-primary-500/30 transition-all duration-300"
            >
              {/* Post Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={post.image}
                  alt="Instagram post"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredPost === post.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex items-center space-x-6 text-white">
                    <div className="flex items-center space-x-2">
                      <Heart size={20} className="fill-current" />
                      <span className="font-semibold">{post.likes.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MessageCircle size={20} />
                      <span className="font-semibold">{post.comments}</span>
                    </div>
                  </div>
                </div>

                {/* Instagram Icon */}
                <div className="absolute top-4 right-4">
                  <Instagram size={24} className="text-white/80" />
                </div>
              </div>

              {/* Post Caption */}
              <div className="p-4">
                <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>
                
                {/* Engagement */}
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-dark-700">
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <div className="flex items-center space-x-1">
                      <Heart size={14} />
                      <span>{post.likes.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle size={14} />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <Share size={14} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-dark-800 rounded-2xl p-8 border border-dark-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gold-gradient mb-2">25K+</div>
              <div className="text-gray-400">Instagram Followers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-gradient mb-2">500+</div>
              <div className="text-gray-400">Posts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-gradient mb-2">50K+</div>
              <div className="text-gray-400">Monthly Likes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-gradient mb-2">95%</div>
              <div className="text-gray-400">Engagement Rate</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">Tag us in your cooking adventures!</p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <span className="text-primary-400 font-semibold">#PRAYANMasale</span>
            <span className="text-gray-500">•</span>
            <span className="text-primary-400 font-semibold">#PureTaste</span>
            <span className="text-gray-500">•</span>
            <span className="text-primary-400 font-semibold">#RoyalTradition</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialFeed