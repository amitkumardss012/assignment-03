"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Sparkles, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CartComingSoon() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 bg-grid-pattern selection:bg-indigo-500">
      {/* Navbar Integration */}
      <Navbar 
        search={search} 
        onSearch={setSearch} 
        activeCategory="All" 
        onCategory={() => {
          if (typeof window !== "undefined") {
            window.location.href = "/";
          }
        }} 
      />

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center px-6 pt-[220px] sm:pt-[180px] lg:pt-[160px] pb-16">
        <div className="relative w-full max-w-lg overflow-hidden rounded-[32px] p-8 sm:p-12 glass-panel border border-white/10 shadow-2xl shadow-indigo-500/5 text-center">
          {/* Decorative glowing background bubbles */}
          <div className="absolute top-0 left-1/4 w-[250px] h-[250px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-violet-500/10 rounded-full blur-[80px] pointer-events-none" />

          {/* Animated Glowing Icon Pod */}
          <div className="relative mx-auto w-20 h-20 rounded-3xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center mb-8 animate-float">
            <ShoppingCart className="w-10 h-10 text-indigo-400 fill-indigo-400/20" />
            <div className="absolute -inset-1.5 rounded-[22px] border border-indigo-500/10 animate-pulse pointer-events-none" />
          </div>

          {/* Luxury Typography */}
          <span className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-xl mb-4.5 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" /> Secure Checkout Coming Soon
          </span>
          
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight text-glow uppercase mt-4">
            Shopping Cart
          </h1>
          
          <p className="text-xs sm:text-sm text-slate-400 font-bold uppercase tracking-wider mt-1.5">
            Premium Order Dispatch Hub
          </p>

          <p className="text-xs text-slate-500 font-semibold leading-relaxed max-w-md mx-auto mt-5 uppercase tracking-wide">
            Our luxury checkout vault and multi-currency secure gateway are currently undergoing final calibration checks. Soon you will experience instantaneous order generation with fully integrated worldwide tracked white-glove logistics.
          </p>

          {/* Action Back Button */}
          <div className="mt-9 relative z-10">
            <Link href="/" passHref legacyBehavior>
              <Button className="rounded-2xl premium-gradient text-white hover:opacity-90 font-extrabold h-12 px-8 text-xs transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-indigo-500/25 gap-2 cursor-pointer border-0">
                <ArrowLeft className="w-4 h-4" /> Return to Catalog
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer Integration */}
      <Footer />
    </div>
  );
}
