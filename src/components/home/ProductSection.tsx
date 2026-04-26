import * as React from 'react';
import { motion } from 'motion/react';
import { Product } from '@/types';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, ArrowRight, ShieldCheck, Zap, Scale } from 'lucide-react';

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  trustLabel?: string;
  products: Product[];
  whyRecommended?: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="shrink-0 w-[280px] group cursor-pointer"
    >
      <Card className="border border-slate-200 shadow-sm group-hover:shadow-2xl group-hover:border-indigo-200 transition-all duration-[400ms] rounded-[24px] overflow-hidden bg-white relative">
        <div className="absolute top-4 left-4 z-10">
           <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-xl text-[10px] font-black text-slate-800 shadow-sm border border-slate-100/50">
             {product.rating} ★ (2k+)
           </span>
        </div>
        
        <div className="relative aspect-square overflow-hidden bg-slate-50 m-3 rounded-[18px]">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute top-2 right-2 flex flex-col gap-2">
            {product.discount && (
              <Badge className="bg-orange-500 border-none px-2 py-0.5 text-[9px] font-black tracking-tighter">
                {product.discount}
              </Badge>
            )}
          </div>
          
          <Button 
            size="icon" 
            variant="secondary" 
            className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-md hover:bg-white text-slate-400 hover:text-rose-500 rounded-full h-10 w-10 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-5 pt-2">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[9px] font-black text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-lg uppercase tracking-wider">Verified Seller</span>
          </div>
          
          <h3 className="font-bold text-slate-800 leading-snug mb-2 line-clamp-1 group-hover:text-indigo-600 transition-colors text-sm">
            {product.name}
          </h3>
          
          <div className="flex items-end gap-2 mb-3">
            <span className="text-xl font-black text-slate-900">₹{product.price.toLocaleString()}</span>
            {product.discount && (
              <span className="text-[10px] text-emerald-600 font-black mb-1.5 uppercase">Best Price</span>
            )}
          </div>

          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Express Delivery: <span className="text-emerald-600">Tomorrow</span></p>
        </div>
      </Card>
    </motion.div>
  );
};

export const ProductSection = ({ 
  title, 
  subtitle, 
  trustLabel, 
  products, 
  whyRecommended 
}: ProductSectionProps) => {
  return (
    <section className="py-12 container mx-auto px-4 overflow-hidden">
      <div className="flex justify-between items-end mb-8 gap-4 px-2">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter">{title}</h2>
            {trustLabel && (
              <Badge className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors border-none py-1 px-3 rounded-lg text-xs font-bold uppercase tracking-widest">
                {trustLabel}
              </Badge>
            )}
          </div>
          {subtitle && <p className="text-slate-500 text-sm font-medium">{subtitle}</p>}
        </div>
        <Button variant="ghost" className="group text-indigo-600 font-extrabold hover:bg-transparent px-0 text-sm flex items-center gap-1">
          View All <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={3} />
        </Button>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-8 carousel-hide-scrollbar px-2 -mx-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
