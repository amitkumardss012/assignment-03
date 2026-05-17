"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Truck, RotateCcw } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-slate-950 border-b border-white/5 bg-grid-pattern pt-8 pb-4">
      {/* Immersive radial glow maps */}
      <div className="absolute top-[-25%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] animate-float pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[130px] animate-float-delayed pointer-events-none" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-28 flex flex-col lg:flex-row items-center gap-12 z-10">
        
        {/* Text Area */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4.5 py-1.5 mb-6.5 animate-pulse shadow-sm">
            <Zap className="w-4 h-4 text-indigo-400 fill-indigo-400/20" />
            <span className="text-xs font-bold text-indigo-300 tracking-wide">Summer Special Sale is LIVE — Save up to 70%</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight text-glow">
            The Future of <br className="hidden sm:inline" />
            <span className="premium-gradient bg-clip-text text-transparent inline-block pb-1">Luxurious Tech</span><br />
            At Your Fingertips.
          </h1>
          
          <p className="mt-5 text-sm md:text-base lg:text-lg text-slate-400 max-w-xl leading-relaxed">
            Unleash next-level performance with the latest smartphones, premium developer laptops, audio speakers, and cutting-edge devices from industry-leading brands with lightning-fast shipping.
          </p>
          
          <div className="mt-9 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button className="rounded-2xl h-13 px-9 premium-gradient hover:opacity-90 text-white font-extrabold shadow-2xl shadow-indigo-500/35 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] gap-2 border-0 cursor-pointer text-sm">
              Explore Store <ArrowRight className="w-4 h-4 stroke-[3px]" />
            </Button>
            <Button variant="outline" className="rounded-2xl h-13 px-9 border-white/10 text-slate-200 hover:text-white hover:bg-white/5 font-extrabold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer text-sm">
              View Special Deals
            </Button>
          </div>
        </div>

        {/* Cinematic Visual Graphic Area */}
        <div className="flex-1 relative flex items-center justify-center w-full max-w-lg lg:max-w-none">
          <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-[3rem] bg-gradient-to-tr from-indigo-500/10 to-violet-500/10 border border-white/5 backdrop-blur-xl flex items-center justify-center animate-float shadow-2xl shadow-slate-950/80">
            {/* Glossy inner ring */}
            <div className="absolute inset-4 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-white/10 blur-[1px]" />
            
            {/* Absolute ambient glowing circles */}
            <div className="absolute w-44 h-44 rounded-full bg-indigo-500/20 blur-2xl top-12 left-12 animate-pulse" />
            <div className="absolute w-36 h-36 rounded-full bg-violet-500/20 blur-2xl bottom-12 right-12 animate-pulse" />

            <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-[2rem] bg-slate-950/60 border border-white/10 flex flex-col items-center justify-center text-center p-6 backdrop-blur-3xl z-10 group cursor-pointer hover:border-indigo-500/40 transition-all duration-500 shadow-xl">
              <span className="text-6xl lg:text-7xl mb-4 transition-transform duration-500 group-hover:scale-115 group-hover:rotate-6 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">🛍️</span>
              <p className="text-sm font-black text-slate-100 tracking-wider uppercase group-hover:text-indigo-400 transition-colors duration-300">LuxTronics Hub</p>
              <p className="text-[10px] text-indigo-300/60 font-semibold mt-1">INNOVATIVE • PREMIUM • SECURE</p>
            </div>
          </div>
        </div>

      </div>

      {/* Modern High-End Trust Bar */}
      <div className="border-y border-white/5 bg-slate-950/40 backdrop-blur-xl mt-8">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-5 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {[
            { icon: Truck, label: "Express Free Delivery", sub: "For orders above ₹499", color: "text-indigo-400" },
            { icon: Shield, label: "Encrypted Secure Payment", sub: "100% Buyer Protection", color: "text-violet-400" },
            { icon: RotateCcw, label: "Hassle-Free Returns", sub: "7-day direct refund policy", color: "text-emerald-400" },
            { icon: Zap, label: "Flash Sales Daily", sub: "Exclusive new discounts", color: "text-amber-400" },
          ].map(({ icon: Icon, label, sub, color }) => (
            <div key={label} className="flex items-center gap-4.5 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/25">
                <Icon className={`w-5.5 h-5.5 ${color}`} />
              </div>
              <div className="flex flex-col">
                <p className="text-xs font-bold text-slate-200 tracking-wide transition-colors duration-300 group-hover:text-white">{label}</p>
                <p className="text-[10px] text-slate-500 font-semibold mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
