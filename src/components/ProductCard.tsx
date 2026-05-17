"use client";
import { Product } from "@/lib/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

const badgeStyles: Record<string, string> = {
  Trending: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  Hot: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  New: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Sale: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

function formatPrice(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}

export default function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-slate-950/40 border border-slate-900 hover:border-indigo-500/30 rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/5 select-none cursor-none"
    >
      
      {/* Product Image Area */}
      <div className="relative aspect-square bg-slate-900/10 overflow-hidden flex items-center justify-center p-6">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105" 
          loading="lazy" 
        />

        {/* Wishlist Button */}
        <button 
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-slate-900/60 backdrop-blur-xl border border-white/5 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 z-10 cursor-none"
        >
          <Heart className={`w-4 h-4 transition-all duration-300 ${liked ? "fill-rose-500 text-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.4)]" : "text-slate-400 group-hover:text-slate-200"}`} />
        </button>

        {/* Floating Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <Badge className={`text-[9px] font-black tracking-widest uppercase px-2 py-0.5 border rounded-md shadow-sm ${badgeStyles[product.badge] || ""}`}>
              {product.badge}
            </Badge>
          )}
          {product.discount >= 20 && (
            <Badge className="bg-rose-500 text-white text-[9px] font-black tracking-widest uppercase px-2 py-0.5 border-0 rounded-md shadow-md">
              {product.discount}% OFF
            </Badge>
          )}
        </div>
      </div>

      {/* Info Body */}
      <div className="p-5 flex flex-col flex-1 gap-3 border-t border-slate-900/50">
        
        {/* Brand & Rating Bar */}
        <div className="flex justify-between items-center gap-2">
          <p className="text-[10px] font-extrabold tracking-widest text-slate-500 uppercase">{product.brand}</p>
          
          <div className="flex items-center gap-1 text-[10px] font-extrabold text-amber-400 bg-amber-400/5 px-2 py-0.5 rounded-lg border border-amber-400/10">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>{product.rating}</span>
            <span className="text-slate-600 font-normal text-[9px]">({product.reviews})</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xs font-bold text-slate-200 leading-relaxed min-h-[2.5rem] group-hover:text-indigo-400 transition-colors duration-200 line-clamp-2">
          {product.title}
        </h3>

        {/* Price & Delivery Details */}
        <div className="mt-auto flex flex-col gap-2">
          <div className="flex flex-col gap-0.5">
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span className="text-base font-black text-white">{formatPrice(product.price)}</span>
              {product.discount > 0 && (
                <span className="text-[10px] text-slate-500 line-through font-bold">{formatPrice(product.originalPrice)}</span>
              )}
            </div>
            {product.emi && (
              <p className="text-[9px] text-indigo-400/80 font-bold tracking-wide uppercase">
                EMI from <span className="text-indigo-400">{product.emi}</span>
              </p>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-[9px] text-slate-500 font-extrabold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{product.delivery}</span>
          </div>
        </div>

        {/* Add to Cart Premium Action Button */}
        <Button className="mt-2 w-full rounded-xl bg-slate-900 hover:bg-indigo-600 text-white hover:text-white border border-white/5 hover:border-indigo-500/30 text-[10px] font-black tracking-widest uppercase h-9.5 gap-2 transition-all duration-300 shadow-md shadow-black/40 hover:shadow-indigo-600/20 active:scale-[0.98] cursor-none">
          <ShoppingCart className="w-3.5 h-3.5" /> Add to Cart
        </Button>
      </div>

      {/* Floating Dynamic Product Image Cursor Follower */}
      {hovered && (
        <div 
          className="fixed pointer-events-none z-[99999] w-8 h-8 rounded-lg overflow-hidden border border-indigo-500/50 bg-slate-950/90 shadow-xl shadow-black/80 flex items-center justify-center translate-x-2 translate-y-2 transition-transform duration-75"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
        >
          <img src={product.image} alt="cursor" className="w-full h-full object-contain p-0.5" />
        </div>
      )}

    </div>
  );
}
