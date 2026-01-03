import { Product } from './store'

export const products: Product[] = [
  {
    id: '1',
    name: 'Royal Garam Masala',
    price: 299,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500',
    category: 'Blends',
    description: 'Our signature blend of 12 premium spices, carefully roasted and ground to perfection. A royal touch to every dish.',
    aromaProfile: 'Warm, complex, with hints of cardamom and cinnamon',
    tasteProfile: 'Rich, balanced, with subtle heat and sweet undertones',
    heatLevel: 3,
    usageSuggestions: ['Biryani', 'Curries', 'Meat dishes', 'Vegetable preparations'],
    variants: [
      { size: '50g', price: 199 },
      { size: '100g', price: 299 },
      { size: '200g', price: 499 }
    ],
    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false
  },
  {
    id: '2',
    name: 'Premium Red Chili Powder',
    price: 249,
    originalPrice: 329,
    image: 'https://images.unsplash.com/photo-1599909533730-8b9e1b7b5b5a?w=500',
    category: 'Single Spices',
    description: 'Hand-picked Kashmiri chilies, sun-dried and stone-ground for authentic flavor and vibrant color.',
    aromaProfile: 'Smoky, fruity, with mild pungency',
    tasteProfile: 'Mild heat with sweet, fruity notes',
    heatLevel: 4,
    usageSuggestions: ['Tandoori dishes', 'Curries', 'Marinades', 'Garnishing'],
    variants: [
      { size: '50g', price: 149 },
      { size: '100g', price: 249 },
      { size: '200g', price: 399 }
    ],
    inStock: true,
    featured: true,
    bestSeller: false,
    isNew: false
  },
  {
    id: '3',
    name: 'Organic Turmeric Powder',
    price: 199,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500',
    category: 'Single Spices',
    description: 'Pure organic turmeric from Kerala farms, known for its high curcumin content and golden color.',
    aromaProfile: 'Earthy, woody, with subtle citrus notes',
    tasteProfile: 'Warm, bitter, with earthy undertones',
    heatLevel: 1,
    usageSuggestions: ['Golden milk', 'Curries', 'Rice dishes', 'Health drinks'],
    variants: [
      { size: '50g', price: 99 },
      { size: '100g', price: 199 },
      { size: '200g', price: 349 }
    ],
    inStock: true,
    featured: false,
    bestSeller: true,
    isNew: false
  },
  {
    id: '4',
    name: 'Biryani Masala Supreme',
    price: 349,
    originalPrice: 449,
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500',
    category: 'Blends',
    description: 'A luxurious blend crafted specifically for biryani, with saffron essence and premium whole spices.',
    aromaProfile: 'Floral, with saffron and rose notes',
    tasteProfile: 'Complex, aromatic, with layers of flavor',
    heatLevel: 2,
    usageSuggestions: ['Biryani', 'Pulao', 'Royal rice dishes'],
    variants: [
      { size: '50g', price: 249 },
      { size: '100g', price: 349 },
      { size: '200g', price: 599 }
    ],
    inStock: true,
    featured: true,
    bestSeller: false,
    isNew: true
  },
  {
    id: '5',
    name: 'Black Pepper Whole',
    price: 399,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500',
    category: 'Single Spices',
    description: 'Premium Malabar black pepper, known as the "King of Spices" - bold, pungent, and aromatic.',
    aromaProfile: 'Sharp, woody, with citrus undertones',
    tasteProfile: 'Hot, pungent, with complex flavor notes',
    heatLevel: 5,
    usageSuggestions: ['Freshly ground on dishes', 'Marinades', 'Soups', 'Steak seasoning'],
    variants: [
      { size: '50g', price: 299 },
      { size: '100g', price: 399 },
      { size: '200g', price: 699 }
    ],
    inStock: true,
    featured: false,
    bestSeller: true,
    isNew: false
  },
  {
    id: '6',
    name: 'Chole Masala Deluxe',
    price: 279,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500',
    category: 'Blends',
    description: 'Specially crafted for chickpea dishes, with dried pomegranate seeds and aromatic spices.',
    aromaProfile: 'Tangy, aromatic, with pomegranate notes',
    tasteProfile: 'Tangy, spicy, with complex layers',
    heatLevel: 3,
    usageSuggestions: ['Chole', 'Chickpea curry', 'Rajma', 'Legume dishes'],
    variants: [
      { size: '50g', price: 179 },
      { size: '100g', price: 279 },
      { size: '200g', price: 449 }
    ],
    inStock: true,
    featured: false,
    bestSeller: false,
    isNew: true
  }
]

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id)
}

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category)
}

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured)
}

export const getBestSellerProducts = (): Product[] => {
  return products.filter(product => product.bestSeller)
}

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew)
}