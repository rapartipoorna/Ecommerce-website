import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Smartphone, Facebook, Twitter, Instagram, ShieldCheck, CreditCard, RotateCcw } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-border bg-white">
      {/* App Sticky Prompt */}
      <div className="bg-primary/5 py-4 border-b border-primary/10">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm">Download the Quantum App</h4>
              <p className="text-xs text-muted-foreground">Get exclusive deals and instant price drop alerts.</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="rounded-xl h-10 px-4">App Store</Button>
            <Button size="sm" variant="outline" className="rounded-xl h-10 px-4">Play Store</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <span className="font-bold">Q</span>
              </div>
              <span className="font-bold text-lg">Quantum Commerce</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Redefining the marketplace experience with AI-driven discovery and a commitment to trust, speed, and design excellence.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="secondary" className="rounded-full w-9 h-9"><Twitter className="w-4 h-4" /></Button>
              <Button size="icon" variant="secondary" className="rounded-full w-9 h-9"><Instagram className="w-4 h-4" /></Button>
              <Button size="icon" variant="secondary" className="rounded-full w-9 h-9"><Facebook className="w-4 h-4" /></Button>
            </div>
          </div>

          {/* Links - Accordion on Small Screens */}
          <div className="lg:col-span-8 flex flex-col md:flex-row gap-8 lg:gap-16">
            <div className="flex-1 space-y-4">
              <h5 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Shopping</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Men's Fashion</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Women's Fashion</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Gadgets</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Home & Decor</li>
              </ul>
            </div>
            <div className="flex-1 space-y-4">
              <h5 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Policies</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Return Center</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Delivery Standards</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Security</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Privacy</li>
              </ul>
            </div>
            <div className="flex-1 space-y-4">
              <h5 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Support</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Contact Us</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Help Center</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Career</li>
              </ul>
            </div>
          </div>
        </div>

        {/* trust indicators */}
        <div className="mt-16 pt-8 border-t border-muted grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span className="text-xs font-bold uppercase tracking-tight">100% Genuine</span>
          </div>
          <div className="flex items-center gap-3">
            <CreditCard className="w-5 h-5 text-primary" />
            <span className="text-xs font-bold uppercase tracking-tight">Secure Payments</span>
          </div>
          <div className="flex items-center gap-3">
            <RotateCcw className="w-5 h-5 text-amber-500" />
            <span className="text-xs font-bold uppercase tracking-tight">Easy 30-Day Returns</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-black tracking-widest">VISA / MC / UPI</div>
          </div>
        </div>

        <div className="mt-12 text-center text-[10px] text-muted-foreground">
           © 2026 Quantum Commerce Pvt Ltd. All Rights Reserved. Built for tomorrow.
        </div>
      </div>
    </footer>
  );
};
