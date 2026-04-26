import * as React from 'react';
import { Search, Mic, Camera, ShoppingCart, User, Menu, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'motion/react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [searchFocused, setSearchFocused] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center gap-4 lg:gap-8">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer transition-transform hover:scale-105 active:scale-95">
          <div className="text-2xl font-black tracking-tighter text-primary italic uppercase">Market<span className="text-accent">.</span></div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 relative max-w-2xl mx-auto group">
          <div className={`relative flex items-center transition-all duration-300 ${
            searchFocused ? 'scale-[1.01]' : ''
          }`}>
            <Search className="absolute left-4 w-5 h-5 text-slate-400 transition-colors group-focus-within:text-primary" />
            <Input 
              placeholder="Search 'Smartwatches with high accuracy' or 'Under ₹4,999'" 
              className="pl-12 pr-24 h-12 bg-slate-100 border-none shadow-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:bg-white rounded-2xl w-full transition-all"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            <div className="absolute right-2 flex items-center gap-1">
              <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors">
                <Mic className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors">
                <Camera className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <AnimatePresence>
            {searchFocused && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl p-4 border border-border"
              >
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Trending Searches</div>
                <div className="flex flex-wrap gap-2">
                  {['Nike Air Max', 'Gaming Mouse', 'Summer Dresses', 'iPhone 15 Pro'].map(term => (
                    <Button key={term} variant="secondary" size="sm" className="rounded-full h-8 text-xs">
                      {term}
                    </Button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 lg:gap-4">
          <Button variant="ghost" size="icon" className="relative group">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
          </Button>
          <Button variant="ghost" className="hidden lg:flex items-center gap-2 rounded-full px-4 text-sm font-medium">
            <User className="w-5 h-5" />
            <span>Sign In</span>
          </Button>
          <Button className="rounded-full px-4 h-10 gap-2 relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline">Cart</span>
            <span className="absolute -top-1 -right-1 bg-white text-primary text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md">2</span>
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};
