"use client";
import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import {
  Search, ShoppingCart, Heart, User, Menu, Zap,
  Smartphone, Laptop, Watch, Headphones, Speaker, Tv,
  Camera, Gamepad2, Fan, Wind, AirVent, Home, Cpu
} from "lucide-react";
import { categories } from "@/lib/products";

const catIcons: Record<string, React.ReactNode> = {
  Smartphones: <Smartphone className="w-3.5 h-3.5" />, Laptops: <Laptop className="w-3.5 h-3.5" />,
  Smartwatches: <Watch className="w-3.5 h-3.5" />, Headphones: <Headphones className="w-3.5 h-3.5" />,
  Speakers: <Speaker className="w-3.5 h-3.5" />, TVs: <Tv className="w-3.5 h-3.5" />,
  Cameras: <Camera className="w-3.5 h-3.5" />, Gaming: <Gamepad2 className="w-3.5 h-3.5" />,
  Fans: <Fan className="w-3.5 h-3.5" />, "Air Coolers": <Wind className="w-3.5 h-3.5" />,
  "Air Conditioners": <AirVent className="w-3.5 h-3.5" />, "Home Appliances": <Home className="w-3.5 h-3.5" />,
  "Smart Gadgets": <Cpu className="w-3.5 h-3.5" />,
};

export default function Navbar({
  search, onSearch, activeCategory, onCategory
}: {
  search: string; onSearch: (s: string) => void;
  activeCategory: string; onCategory: (c: string) => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full flex flex-col">
      {/* Top Banner Accent */}
      <div className="bg-slate-950 border-b border-white/5 text-slate-300 text-[10px] sm:text-xs text-center py-2 font-bold tracking-wider flex items-center justify-center gap-2">
        <Zap className="w-3 h-3 text-amber-400 fill-amber-400/20 animate-pulse" /> 
        <span>FLASH SALE — UP TO 70% OFF ON LUXURY TECH DEVICES</span>
        <Zap className="w-3 h-3 text-amber-400 fill-amber-400/20 animate-pulse" />
      </div>

      {/* Main Glass Navigation Bar */}
      <div className="backdrop-blur-xl bg-slate-950/80 border-b border-white/5 shadow-2xl shadow-slate-950/50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-18 flex items-center gap-6">
          
          {/* Mobile Navigation Trigger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden shrink-0 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl">
                <Menu className="w-5.5 h-5.5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0 bg-slate-950 border-r border-white/5 text-white flex flex-col">
              <SheetTitle className="px-6 pt-6 text-xl font-black bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent tracking-tight">
                LuxTronics
              </SheetTitle>
              <nav className="mt-6 flex flex-col flex-1 overflow-y-auto px-3 pb-8 gap-1 scrollbar-hide">
                {categories.map(c => (
                  <button 
                    key={c} 
                    onClick={() => { onCategory(c); setMobileOpen(false); }}
                    className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-sm font-bold tracking-wide transition-all ${
                      activeCategory === c 
                        ? "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20" 
                        : "text-slate-400 hover:text-slate-100 hover:bg-white/5 border border-transparent"
                    }`}
                  >
                    <span className="shrink-0">{catIcons[c] || <Zap className="w-4 h-4 text-indigo-400" />}</span>
                    <span>{c}</span>
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo with clean elegant type */}
          <a href="/" className="shrink-0 text-2xl font-black tracking-tighter bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity">
            LuxTronics
          </a>

          {/* Luxury Search Engine */}
          <div className="flex-1 max-w-xl hidden sm:block relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
            <Input
              placeholder="Search smartphones, laptops, studio headphones..."
              value={search} 
              onChange={e => onSearch(e.target.value)}
              className="w-full pl-11 bg-slate-900/50 hover:bg-slate-900 border-white/10 text-white placeholder-slate-500 rounded-2xl h-11 focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/40 text-xs font-semibold tracking-wide transition-all"
            />
          </div>

          {/* Modern Actions */}
          <div className="flex items-center gap-2.5 ml-auto">
            <Button asChild variant="ghost" size="icon" className="relative text-slate-400 hover:text-white hover:bg-white/5 rounded-xl w-10.5 h-10.5 cursor-pointer">
              <Link href="/wishlist">
                <Heart className="w-5 h-5" />
              </Link>
            </Button>
            
            <Button asChild variant="ghost" size="icon" className="relative text-slate-400 hover:text-white hover:bg-white/5 rounded-xl w-10.5 h-10.5 cursor-pointer">
              <Link href="/cart">
                <ShoppingCart className="w-5 h-5" />
                <Badge className="absolute -top-1.5 -right-1.5 h-5 w-5 p-0 flex items-center justify-center text-[10px] font-black bg-indigo-500 text-white border border-slate-950 rounded-full shadow-lg shadow-indigo-500/35">
                  3
                </Badge>
              </Link>
            </Button>

            <Button asChild variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/5 rounded-xl w-10.5 h-10.5 cursor-pointer hidden sm:flex">
              <Link href="/profile">
                <User className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Search Engine */}
        <div className="sm:hidden px-6 pb-4 relative">
          <Search className="absolute left-10 top-1/2 -translate-y-1/2 -mt-2 w-4 h-4 text-slate-500" />
          <Input 
            placeholder="Search our luxury catalogue..." 
            value={search} 
            onChange={e => onSearch(e.target.value)}
            className="w-full pl-10 bg-slate-900/50 border-white/10 text-white placeholder-slate-500 rounded-xl h-10 focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/40 text-xs font-semibold" 
          />
        </div>
      </div>

      {/* Category Horizontal Bar (Desktop Layout) */}
      <div className="backdrop-blur-xl bg-slate-950/60 border-b border-white/5 hidden lg:block">
        <div className="max-w-[1440px] mx-auto px-12 flex items-center gap-2 overflow-x-auto py-2.5 scrollbar-hide">
          {categories.map(c => (
            <button 
              key={c} 
              onClick={() => onCategory(c)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-extrabold tracking-widest uppercase whitespace-nowrap transition-all border cursor-pointer ${
                activeCategory === c 
                  ? "bg-indigo-500/10 text-indigo-300 border-indigo-500/30 shadow-md shadow-indigo-500/10" 
                  : "text-slate-400 border-transparent hover:text-slate-200 hover:bg-white/5"
              }`}
            >
              {catIcons[c] && <span className="shrink-0">{catIcons[c]}</span>} 
              <span>{c}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
