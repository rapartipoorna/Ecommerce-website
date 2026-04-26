import * as React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ChevronRight, Timer, RefreshCw, TrendingUp, Tag, MapPin } from 'lucide-react';

export const Hero = () => {
  const [timeLeft, setTimeLeft] = React.useState({ hours: 12, mins: 45, secs: 30 });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: 59, secs: 59, hours: prev.hours };
        return { hours: prev.hours - 1, mins: 59, secs: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-24 pb-8 container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Main Banner */}
        <div className="lg:col-span-8 relative rounded-[32px] overflow-hidden group h-[320px] lg:h-[450px] bg-indigo-900">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1200" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 via-indigo-900/60 to-transparent flex flex-col justify-center px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="z-20"
            >
              <Badge className="bg-orange-500 text-white border-none mb-4 px-4 py-1.5 rounded-lg text-xs font-black tracking-widest uppercase">Just for You</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.05] mb-4 tracking-tighter">
                Winter layering <br /> starts now.
              </h1>
              <p className="text-indigo-200 text-lg mb-8 max-w-md font-medium leading-relaxed">
                Handpicked premium jackets based on your love for minimal aesthetics.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-2xl px-10 h-14 bg-white text-indigo-900 hover:bg-slate-50 font-bold shadow-2xl">
                  Shop Collection
                </Button>
                <Button size="lg" variant="outline" className="rounded-2xl px-10 h-14 border-indigo-400/30 text-white hover:bg-white/10 backdrop-blur-md bg-white/5 font-bold">
                  View Catalog
                </Button>
              </div>
            </motion.div>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-center italic text-white opacity-5 text-[240px] font-black pointer-events-none z-10 select-none">
            SALE
          </div>
        </div>

        {/* Right Sidebar Widgets */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Flash Deal Widget */}
          <Card className="p-6 bg-white border-slate-200 shadow-sm flex-1 flex flex-col justify-between overflow-hidden relative group rounded-[24px]">
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-black uppercase text-slate-900 tracking-wider">Flash Deal</h3>
                <div className="flex items-center gap-1.5 text-orange-600 font-mono text-sm font-bold bg-orange-50 px-3 py-1 rounded-lg">
                   <span className="text-[10px] uppercase text-orange-400 font-sans tracking-tight mr-1">Ends in</span>
                   {timeLeft.hours.toString().padStart(2, '0')}:{timeLeft.mins.toString().padStart(2, '0')}:{timeLeft.secs.toString().padStart(2, '0')}
                </div>
              </div>
              
              <div className="flex gap-4 items-center mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100 group-hover:border-indigo-100 transition-colors">
                <div className="w-20 h-20 bg-white rounded-xl overflow-hidden shadow-sm flex shrink-0">
                  <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-slate-800 truncate mb-1">Sony WH-1000XM5</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-black text-slate-900">₹24,990</span>
                    <span className="text-xs text-slate-400 line-through">₹34,990</span>
                  </div>
                  <div className="text-[10px] text-emerald-600 font-bold uppercase tracking-tight mt-1">Lowest in 30 days</div>
                </div>
              </div>
              
              <Button className="w-full rounded-xl bg-slate-900 hover:bg-black text-white border-none h-12 font-bold shadow-lg">
                Grab Deal
              </Button>
            </div>
          </Card>

          {/* Continue Browsing */}
          <Card className="p-6 border-indigo-100 bg-indigo-50/50 shadow-none flex flex-col gap-4 rounded-[24px]">
            <h3 className="font-bold text-sm text-indigo-900 mb-2">Continue Shopping</h3>
            <div className="flex gap-3 overflow-hidden">
               {[1,2,3,4].map(idx => (
                 <div key={idx} className={`w-14 h-14 bg-white rounded-full border-2 border-white shadow-sm shrink-0 flex items-center justify-center transition-all hover:scale-110 cursor-pointer ${idx > 2 ? 'opacity-40' : ''}`}>
                    <img src={`https://images.unsplash.com/photo-${idx === 1 ? '1523275335684-37898b6baf30' : '1505740420928-5e560c06d30e'}?auto=format&fit=crop&q=80&w=100`} className="w-10 h-10 object-contain rounded-full" />
                 </div>
               ))}
            </div>
            <p className="text-[11px] text-indigo-700 font-medium">You viewed 12 items in <span className="font-bold underline cursor-pointer hover:text-indigo-900 transition-colors tracking-tight">Mechanical Keyboards</span></p>
          </Card>
        </div>
      </div>

      {/* Quick Entry Chips */}
      <div className="mt-12 flex flex-wrap gap-4 items-center overflow-x-auto pb-4 carousel-hide-scrollbar">
        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mr-2 shrink-0">Quick Access</h3>
        {[
          { icon: RefreshCw, label: 'Reorder' },
          { icon: TrendingUp, label: 'Trending Today' },
          { icon: Tag, label: 'Under ₹499' },
          { icon: MapPin, label: 'Deals Near You' },
        ].map((chip, idx) => (
          <Button key={idx} variant="secondary" className="rounded-full px-6 h-11 gap-2 border-none shadow-sm hover:shadow-md transition-all shrink-0">
            <chip.icon className="w-4 h-4 text-primary" />
            <span className="font-semibold">{chip.label}</span>
          </Button>
        ))}
      </div>
    </section>
  );
};
