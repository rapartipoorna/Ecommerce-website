import * as React from 'react';
import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, Trophy, Flame, ChevronRight, Zap } from 'lucide-react';

export const Gamification = () => {
  return (
    <section className="py-8 container mx-auto px-4">
      <Card className="p-8 border-none bg-gradient-to-br from-indigo-900 via-slate-900 to-black text-white rounded-[32px] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,_var(--color-primary),_transparent_70%)] opacity-30" />
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-amber-400">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Daily Deal Streak</h3>
                <p className="text-white/60 text-sm">4 days ongoing</p>
              </div>
            </div>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <div key={day} className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                  day <= 4 ? 'bg-primary border-primary' : 'border-white/10 text-white/30'
                }`}>
                  {day <= 4 ? <Flame className="w-5 h-5" /> : <span className="text-xs font-bold">{day}</span>}
                </div>
              ))}
            </div>
            <p className="text-sm text-white/80 pt-2">Shop today to unlock your <span className="text-primary font-bold">₹500 Reward</span> tomorrow!</p>
          </div>

          <div className="md:border-x md:border-white/10 px-0 md:px-8 space-y-6">
            <h4 className="font-bold text-lg">Active Missions</h4>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-2xl p-4 group cursor-pointer hover:bg-white/10 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Wishlist 5 items</span>
                  <span className="text-xs font-bold text-primary">3/5</span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[60%]" />
                </div>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 group cursor-pointer hover:bg-white/10 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Refer a friend</span>
                  <Gift className="w-4 h-4 text-emerald-400" />
                </div>
                <p className="text-xs text-white/50">Get flat 15% off for both</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-24 h-24 rounded-full border-4 border-dashed border-white/20 animate-spin-slow flex items-center justify-center relative">
               <Zap className="w-10 h-10 text-amber-400" />
            </div>
            <div>
              <h4 className="font-bold">Spin for Rewards</h4>
              <p className="text-sm text-white/60">One lucky spin remaining</p>
            </div>
            <Button size="lg" className="rounded-full px-8 bg-white text-black hover:bg-zinc-200">
              Spin Now
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
};
