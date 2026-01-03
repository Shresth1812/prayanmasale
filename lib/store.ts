import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  description: string
  aromaProfile: string
  tasteProfile: string
  heatLevel: number
  usageSuggestions: string[]
  variants: { size: string; price: number }[]
  inStock: boolean
  featured: boolean
  bestSeller: boolean
  isNew: boolean
}

export interface CartItem extends Product {
  quantity: number
  selectedVariant: { size: string; price: number }
}

interface CartStore {
  items: CartItem[]
  addItem: (product: Product, variant: { size: string; price: number }) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product, variant) => {
        const existingItem = get().items.find(
          item => item.id === product.id && item.selectedVariant.size === variant.size
        )
        
        if (existingItem) {
          set({
            items: get().items.map(item =>
              item.id === product.id && item.selectedVariant.size === variant.size
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          })
        } else {
          set({
            items: [...get().items, { ...product, quantity: 1, selectedVariant: variant }]
          })
        }
      },
      
      removeItem: (id) => {
        set({
          items: get().items.filter(item => item.id !== id)
        })
      },
      
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id)
          return
        }
        
        set({
          items: get().items.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
        })
      },
      
      clearCart: () => set({ items: [] }),
      
      getTotalPrice: () => {
        return get().items.reduce((total, item) => {
          return total + (item.selectedVariant.price * item.quantity)
        }, 0)
      },
      
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      }
    }),
    {
      name: 'prayan-cart-storage',
    }
  )
)