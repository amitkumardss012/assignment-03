"use client";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { brands } from "@/lib/products";
import { SlidersHorizontal, X } from "lucide-react";

interface Filters {
  brands: string[];
  priceRange: [number, number];
  minRating: number;
  minDiscount: number;
  inStockOnly: boolean;
}

const ratingOptions = [4, 3, 2, 1];
const discountOptions = [10, 20, 30, 40, 50];

function formatPrice(n: number) { 
  return "₹" + n.toLocaleString("en-IN"); 
}

export default function FilterSidebar({ filters, onChange, onReset }: {
  filters: Filters; onChange: (f: Filters) => void; onReset: () => void;
}) {
  const toggleBrand = (b: string) => {
    const next = filters.brands.includes(b) ? filters.brands.filter(x => x !== b) : [...filters.brands, b];
    onChange({ ...filters, brands: next });
  };

  const activeCount = (filters.brands.length > 0 ? 1 : 0)
    + (filters.priceRange[0] > 0 || filters.priceRange[1] < 500000 ? 1 : 0)
    + (filters.minRating > 0 ? 1 : 0)
    + (filters.minDiscount > 0 ? 1 : 0)
    + (filters.inStockOnly ? 1 : 0);

  return (
    <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl">
      {/* Sidebar Header */}
      <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <SlidersHorizontal className="w-4 h-4 text-indigo-400" />
          <span className="font-extrabold text-xs tracking-wider uppercase text-slate-100">Filter Products</span>
          {activeCount > 0 && (
            <Badge className="bg-indigo-500 text-white text-[9px] font-black px-2 py-0.5 border-0 rounded-full shadow-lg shadow-indigo-500/20">
              {activeCount}
            </Badge>
          )}
        </div>
        {activeCount > 0 && (
          <button 
            onClick={onReset} 
            className="text-[10px] text-indigo-400 font-extrabold hover:text-indigo-300 transition-colors uppercase tracking-wider flex items-center gap-1 cursor-pointer"
          >
            <X className="w-3 h-3" /> Clear All
          </button>
        )}
      </div>

      <Accordion type="multiple" defaultValue={["brand", "price", "rating", "discount", "avail"]} className="px-2">
        
        {/* Brands Section */}
        <AccordionItem value="brand" className="border-b border-white/5 px-2">
          <AccordionTrigger className="py-4 text-xs font-bold tracking-wider text-slate-200 hover:text-white hover:no-underline transition-colors uppercase">
            Brands Selection
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <div className="flex flex-col gap-3 max-h-48 overflow-y-auto pr-2 scrollbar-hide">
              {brands.map(b => (
                <label key={b} className="flex items-center gap-3 cursor-pointer group select-none">
                  <Checkbox 
                    checked={filters.brands.includes(b)} 
                    onCheckedChange={() => toggleBrand(b)}
                    className="border-white/20 data-[state=checked]:bg-indigo-500 data-[state=checked]:border-indigo-500 rounded-md" 
                  />
                  <span className="text-xs text-slate-400 group-hover:text-slate-100 transition-colors font-medium">{b}</span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Price Range Slider */}
        <AccordionItem value="price" className="border-b border-white/5 px-2">
          <AccordionTrigger className="py-4 text-xs font-bold tracking-wider text-slate-200 hover:text-white hover:no-underline transition-colors uppercase">
            Pricing Budget
          </AccordionTrigger>
          <AccordionContent className="pb-5 px-1">
            <div className="px-2">
              <Slider 
                min={0} 
                max={500000} 
                step={2000}
                value={[filters.priceRange[0], filters.priceRange[1]]}
                onValueChange={v => onChange({ ...filters, priceRange: [v[0], v[1]] })}
                className="mb-4 cursor-pointer" 
              />
            </div>
            <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 tracking-wider px-2">
              <span className="bg-slate-900 border border-white/5 px-2.5 py-1 rounded-lg">{formatPrice(filters.priceRange[0])}</span>
              <span className="bg-slate-900 border border-white/5 px-2.5 py-1 rounded-lg">{formatPrice(filters.priceRange[1])}</span>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Rating Selectors */}
        <AccordionItem value="rating" className="border-b border-white/5 px-2">
          <AccordionTrigger className="py-4 text-xs font-bold tracking-wider text-slate-200 hover:text-white hover:no-underline transition-colors uppercase">
            Customer Rating
          </AccordionTrigger>
          <AccordionContent className="pb-4 flex flex-col gap-3">
            {ratingOptions.map(r => (
              <label key={r} className="flex items-center gap-3 cursor-pointer group select-none">
                <Checkbox 
                  checked={filters.minRating === r}
                  onCheckedChange={() => onChange({ ...filters, minRating: filters.minRating === r ? 0 : r })}
                  className="border-white/20 data-[state=checked]:bg-indigo-500 data-[state=checked]:border-indigo-500 rounded-md" 
                />
                <span className="text-xs text-slate-400 group-hover:text-slate-100 transition-colors font-medium flex items-center gap-1">
                  <span className="text-amber-400 font-extrabold">{"★".repeat(r)}{"☆".repeat(5-r)}</span>
                  <span>& above</span>
                </span>
              </label>
            ))}
          </AccordionContent>
        </AccordionItem>

        {/* Discount Selectors */}
        <AccordionItem value="discount" className="border-b border-white/5 px-2">
          <AccordionTrigger className="py-4 text-xs font-bold tracking-wider text-slate-200 hover:text-white hover:no-underline transition-colors uppercase">
            Exclusive Discounts
          </AccordionTrigger>
          <AccordionContent className="pb-4 flex flex-col gap-3">
            {discountOptions.map(d => (
              <label key={d} className="flex items-center gap-3 cursor-pointer group select-none">
                <Checkbox 
                  checked={filters.minDiscount === d}
                  onCheckedChange={() => onChange({ ...filters, minDiscount: filters.minDiscount === d ? 0 : d })}
                  className="border-white/20 data-[state=checked]:bg-indigo-500 data-[state=checked]:border-indigo-500 rounded-md" 
                />
                <span className="text-xs text-slate-400 group-hover:text-slate-100 transition-colors font-semibold">{d}% or more off</span>
              </label>
            ))}
          </AccordionContent>
        </AccordionItem>

        {/* Availability Switch */}
        <AccordionItem value="avail" className="border-b-0 px-2">
          <AccordionTrigger className="py-4 text-xs font-bold tracking-wider text-slate-200 hover:text-white hover:no-underline transition-colors uppercase">
            Availability
          </AccordionTrigger>
          <AccordionContent className="pb-5">
            <div className="flex items-center justify-between bg-slate-900/50 border border-white/5 p-3 rounded-xl">
              <Label className="text-xs text-slate-300 font-bold select-none cursor-pointer">In Stock Only</Label>
              <Switch 
                checked={filters.inStockOnly} 
                onCheckedChange={v => onChange({ ...filters, inStockOnly: v })} 
                className="data-[state=checked]:bg-indigo-500"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
