import { Product, Deal, Category } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'QuantumPods Pro - Silver Edition',
    price: 18999,
    originalPrice: 24999,
    discount: '24% OFF',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400',
    rating: 4.8,
    reviews: 1240,
    category: 'Electronics',
    trustBadge: 'Best Seller',
    tags: ['Wireless', 'Noise Cancelling']
  },
  {
    id: '2',
    name: 'Minimalist Chrono Watch v3',
    price: 4499,
    originalPrice: 8999,
    discount: '50% OFF',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400',
    rating: 4.6,
    reviews: 850,
    category: 'Fashion',
    trustBadge: 'Top Rated'
  },
  {
    id: '3',
    name: 'SmartHome Hub Pro',
    price: 12900,
    originalPrice: 15000,
    discount: '14% OFF',
    image: 'https://images.unsplash.com/photo-1558002038-103792e07971?auto=format&fit=crop&q=80&w=400',
    rating: 4.9,
    reviews: 2100,
    category: 'Home',
    isNew: true
  },
  {
    id: '4',
    name: 'ErgoComfort Office Chair',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1505843490701-5be5d0b19d58?auto=format&fit=crop&q=80&w=400',
    rating: 4.5,
    reviews: 560,
    category: 'Furniture',
    tags: ['Ergonomic', 'Mesh']
  }
];

export const MOCK_DEALS: Deal[] = [
  {
    id: 'd1',
    title: 'Summer Electronics Bash',
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 2).toISOString(),
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800',
    discount: 'Up to 60% OFF'
  },
  {
    id: 'd2',
    title: 'Modern Living Refresh',
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 5).toISOString(),
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800',
    discount: 'Flat ₹2000 OFF'
  }
];

export const CATEGORIES: Category[] = [
  { id: 'c1', name: 'Electronics', icon: 'Smartphone', color: 'bg-blue-500' },
  { id: 'c2', name: 'Fashion', icon: 'Shirt', color: 'bg-rose-500' },
  { id: 'c3', name: 'Home', icon: 'Home', color: 'bg-amber-500' },
  { id: 'c4', name: 'Appliances', icon: 'Tv', color: 'bg-cyan-500' },
  { id: 'c5', name: 'Beauty', icon: 'Sparkles', color: 'bg-pink-500' }
];
