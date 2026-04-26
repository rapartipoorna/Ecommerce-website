export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  trustBadge?: string;
  tags?: string[];
  isNew?: boolean;
}

export interface Deal {
  id: string;
  title: string;
  expiresAt: string;
  image: string;
  discount: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}
