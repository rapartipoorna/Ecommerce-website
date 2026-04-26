import * as React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { ProductSection } from './components/home/ProductSection';
import { Gamification } from './components/home/Gamification';
import { Footer } from './components/layout/Footer';
import { MOCK_PRODUCTS, CATEGORIES } from './mockData';
import { Smartphone, Shirt, Home, Tv, Sparkles, TrendingUp, Sparkle, LayoutGrid, Trophy, User as UserIcon, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';

const CategoryIcon = ({ icon, name }: { icon: string, name: string }) => {
  const icons: any = { Smartphone, Shirt, Home, Tv, Sparkles, TrendingUp };
  const Icon = icons[icon] || Sparkles;
  return (
    <div className="flex flex-col items-center gap-3 group cursor-pointer transition-all hover:-translate-y-1">
      <div className="w-16 h-16 rounded-[22px] bg-white shadow-sm border border-border group-hover:border-primary/30 group-hover:shadow-xl group-hover:shadow-primary/5 flex items-center justify-center transition-all duration-300">
        <Icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
      <span className="text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors tracking-tight">{name}</span>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-600 selection:text-white">
      <Header />
      
      <main className="space-y-8 pb-32">
        {/* Category Strip */}
        <section className="pt-24 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center overflow-x-auto pb-2 carousel-hide-scrollbar gap-8 lg:justify-center lg:gap-16">
              {CATEGORIES.map(cat => (
                <CategoryIcon key={cat.id} {...cat} />
              ))}
            </div>
          </div>
        </section>

        <Hero />

        {/* Dynamic Contextual Modules */}
        <ProductSection 
          title="Recommended For You" 
          subtitle="Based on your interest in Luxury Timepieces"
          trustLabel="98% Match"
          products={MOCK_PRODUCTS.slice(0, 4)}
          whyRecommended="AI detected interest in Minimalist aesthetics"
        />

        {/* Seasonal Discovery */}
        <section className="container mx-auto px-4 py-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="h-[320px] rounded-[32px] overflow-hidden relative group cursor-pointer"
              >
                <img src="https://images.unsplash.com/photo-1540200049848-d9813ea0e120?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-x-8 bottom-8 z-20">
                   <h3 className="text-3xl font-bold text-white mb-2">Summer Essentials</h3>
                   <p className="text-white/80 text-sm mb-4">Curated outdoor gear for your next adventure.</p>
                   <Button size="lg" className="rounded-2xl bg-white text-indigo-900 border-none shadow-xl hover:bg-slate-100">Explore Now</Button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="h-[320px] rounded-[32px] overflow-hidden relative group cursor-pointer bg-indigo-900"
              >
                <div className="absolute inset-x-10 top-10 z-10">
                   <Sparkle className="text-orange-500 w-12 h-12 mb-4" />
                   <h3 className="text-3xl font-bold text-white mb-2">Editorial Picks</h3>
                   <p className="text-indigo-200 text-lg mb-4">"The 10 pieces every minimalist wardrobe needs in 2026"</p>
                </div>
                <div className="absolute inset-x-10 bottom-10 flex gap-4 z-10">
                   <div className="flex -space-x-3">
                      {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-4 border-indigo-900 bg-slate-200" />)}
                   </div>
                   <span className="text-indigo-300 text-sm font-medium self-center">Read by 4.5k shoppers this week</span>
                </div>
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
              </motion.div>
           </div>
        </section>

        <ProductSection 
          title="Trending in your city" 
          subtitle="Mumbai is loving these luxury accents"
          trustLabel="Local Choice"
          products={MOCK_PRODUCTS.slice(1, 4)}
        />

        <Gamification />

        {/* Ads as Native Recommendations */}
        <section className="container mx-auto px-4 py-8">
           <Card className="p-10 border border-slate-200 bg-white rounded-[40px] flex flex-col lg:flex-row items-center gap-12 group cursor-pointer transition-all hover:shadow-2xl hover:border-indigo-200">
              <div className="w-full lg:w-2/5 aspect-square rounded-[32px] overflow-hidden shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute top-6 left-6">
                   <Badge className="bg-orange-500 text-white border-none py-1.5 px-4 rounded-xl text-xs font-black shadow-lg">NEW ARRIVAL</Badge>
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                  <Badge className="bg-indigo-50 text-indigo-700 border-indigo-100 py-1 px-3 rounded-lg text-[10px] font-bold">SPONSORED</Badge>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Premium Selection</span>
                </div>
                <h3 className="text-5xl font-black tracking-tighter text-slate-900 leading-[0.9]">Nike Air Max '26 <br /><span className="text-indigo-600 italic">Stealth</span></h3>
                <p className="text-slate-500 text-lg leading-relaxed max-w-xl italic">"The evolution of comfort. Now with reactive padding that adapts to your stride. Exclusive access for Quantum Plus members."</p>
                <div className="flex gap-4 pt-4">
                   <Button size="lg" className="rounded-2xl px-10 h-14 bg-indigo-600 text-white shadow-xl shadow-indigo-600/20 hover:scale-105 transition-transform">Shop Exclusive</Button>
                   <Button size="lg" variant="ghost" className="rounded-2xl text-slate-700 hover:text-indigo-600 font-bold underline underline-offset-8">Design Story</Button>
                </div>
              </div>
           </Card>
        </section>

        <ProductSection 
          title="Recently Price Dropped" 
          subtitle="Price drop alerts from your wishlist and browsing history"
          trustLabel="Best Price in 30 Days"
          products={MOCK_PRODUCTS.slice(0, 3)}
          whyRecommended="You saved ₹2,040 on this purchase"
        />

        <Footer />
      </main>

      {/* Sticky Conversion Bottom Bar (Mobile/Desktop Hybrid Navigation) */}
      <div className="fixed bottom-0 inset-x-0 bg-white/80 backdrop-blur-2xl border-t border-slate-200 h-20 flex items-center justify-center px-12 z-50">
        <nav className="flex items-center gap-16 md:gap-32">
          <button className="flex flex-col items-center gap-1.5 text-indigo-600 transition-all hover:scale-110">
            <Compass className="w-6 h-6" />
            <span className="text-[10px] font-black uppercase tracking-widest leading-none">Explore</span>
          </button>
          <button className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-indigo-600 transition-all hover:scale-110">
            <LayoutGrid className="w-6 h-6" />
            <span className="text-[10px] font-black uppercase tracking-widest leading-none">Category</span>
          </button>
          <button className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-indigo-600 transition-all hover:scale-110">
            <Trophy className="w-6 h-6" />
            <span className="text-[10px] font-black uppercase tracking-widest leading-none">Rewards</span>
          </button>
          <button className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-indigo-600 transition-all hover:scale-110">
            <UserIcon className="w-6 h-6" />
            <span className="text-[10px] font-black uppercase tracking-widest leading-none">Profile</span>
          </button>
        </nav>
      </div>
    </div>
  );
}

