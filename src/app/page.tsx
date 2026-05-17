"use client";
import FilterSidebar from "@/components/FilterSidebar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { products } from "@/lib/products";
import {
  Home as HomeIcon,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Heart,
  User,
  LayoutGrid,
  Zap
} from "lucide-react";
import { useMemo, useState } from "react";

const defaultFilters = {
  brands: [] as string[],
  priceRange: [0, 500000] as [number, number],
  minRating: 0,
  minDiscount: 0,
  inStockOnly: false,
};

type SortOption = "popularity" | "best-selling" | "top-rated" | "newest" | "price-asc" | "price-desc" | "discount";

const sortLabels: Record<SortOption, string> = {
  popularity: "Popularity",
  "best-selling": "Best Selling",
  "top-rated": "Top Rated",
  newest: "Newest First",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
  discount: "Biggest Discount",
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [filters, setFilters] = useState(defaultFilters);
  const [sort, setSort] = useState<SortOption>("popularity");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Clear conflicts and scroll back to top when shifting active categories to ensure maximum products display
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setSearch("");
    setFilters(defaultFilters);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBrandQuickSelect = (brandName: string) => {
    setFilters({
      ...defaultFilters,
      brands: [brandName]
    });
    setActiveCategory("All");
    setSearch("");
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleReset = () => {
    setFilters(defaultFilters);
    setSearch("");
    setActiveCategory("All");
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const filtered = useMemo(() => {
    let list = [...products];

    if (search) {
      const q = search.toLowerCase();
      list = list.filter(p => p.title.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }
    if (activeCategory !== "All") list = list.filter(p => p.category === activeCategory);
    if (filters.brands.length > 0) list = list.filter(p => filters.brands.includes(p.brand));
    list = list.filter(p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]);
    if (filters.minRating > 0) list = list.filter(p => p.rating >= filters.minRating);
    if (filters.minDiscount > 0) list = list.filter(p => p.discount >= filters.minDiscount);
    if (filters.inStockOnly) list = list.filter(p => p.inStock);

    switch (sort) {
      case "top-rated": list.sort((a, b) => b.rating - a.rating); break;
      case "price-asc": list.sort((a, b) => a.price - b.price); break;
      case "price-desc": list.sort((a, b) => b.price - a.price); break;
      case "discount": list.sort((a, b) => b.discount - a.discount); break;
      case "newest": list.sort((a, b) => b.id - a.id); break;
      case "best-selling": list.sort((a, b) => b.reviews - a.reviews); break;
      default: list.sort((a, b) => b.reviews - a.reviews); break;
    }
    return list;
  }, [search, activeCategory, filters, sort]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 bg-grid-pattern selection:bg-indigo-500">
      {/* Fixed Header Navigation (Always 100% Fixed at very top) */}
      <Navbar search={search} onSearch={setSearch} activeCategory={activeCategory} onCategory={handleCategoryChange} />
      
      {/* Pushed offset to clear fixed header navbar */}
      <div className="flex flex-col pt-[160px] lg:pt-[148px]">

        {/* Main Container: Dual-Column Layout with Pinned Sidebar & Scrollable Feed */}
        <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 py-10 flex gap-8 relative items-start">
          
          {/* Left Column: Filter Sidebar 
              - sticky top-[168px] makes it stay perfectly fixed under our fixed header navbar 
              - h-[calc(100vh-190px)] overflow-y-auto scrollbar-hide makes it separately scrollable if user wants to scroll filters list
              - self-start holds its position at top of flex row
          */}
          <aside className="hidden lg:block w-72 shrink-0 sticky top-[168px] h-[calc(100vh-190px)] overflow-y-auto premium-sidebar-scrollbar self-start z-10 pb-10">
            <FilterSidebar filters={filters} onChange={setFilters} onReset={handleReset} />
          </aside>

          {/* Right Column: Dynamic Products Catalog & Showcase Feed */}
          <main className="flex-1 min-w-0">
            
            <div className="flex flex-col gap-10">
              
              {/* Main Listing Control Bar */}
              <div className="flex items-center justify-between border-b border-slate-900 pb-4.5 flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8.5 h-8.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <ShoppingBag className="w-4.5 h-4.5 text-indigo-400" />
                  </div>
                  <h1 className="text-sm font-extrabold tracking-wider uppercase text-slate-100">
                    {search ? `Results for "${search}"` : activeCategory !== "All" ? `Category: ${activeCategory}` : "All Products Catalog"}
                  </h1>
                  <Badge className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/25 text-[10px] font-extrabold px-2.5 py-1 rounded-lg">
                    {filtered.length} Items Found
                  </Badge>
                </div>

                <div className="flex items-center gap-3">
                  {/* Mobile Filter Toggle Drawer */}
                  <Sheet open={mobileFilterOpen} onOpenChange={setMobileFilterOpen}>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="sm" className="lg:hidden gap-2 rounded-xl text-xs font-bold border-white/10 text-slate-300 bg-slate-900/50 h-10 px-4">
                        <SlidersHorizontal className="w-4 h-4" /> Filter Options
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-80 p-0 bg-slate-950 border-r border-white/5 overflow-y-auto text-white">
                      <SheetTitle className="px-6 pt-6 text-sm font-black tracking-widest text-slate-400 uppercase">Filters</SheetTitle>
                      <div className="p-4">
                        <FilterSidebar filters={filters} onChange={setFilters} onReset={handleReset} />
                      </div>
                    </SheetContent>
                  </Sheet>

                  <Select value={sort} onValueChange={v => setSort(v as SortOption)}>
                    <SelectTrigger className="w-46 h-10 text-xs font-bold rounded-xl bg-slate-900/50 border-white/10 text-slate-200 cursor-pointer">
                      <SelectValue placeholder="Sort Catalogue" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-950 border border-white/10 text-white rounded-xl">
                      {Object.entries(sortLabels).map(([k, v]) => (
                        <SelectItem key={k} value={k} className="text-xs font-semibold focus:bg-indigo-500/10 cursor-pointer">{v}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Direct Unified Products Feed */}
              {filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-center glass-panel rounded-3xl p-8 border border-dashed border-white/10">
                  <Sparkles className="w-12 h-12 text-indigo-400 mb-5 animate-pulse" />
                  <h3 className="text-lg font-black text-slate-200 uppercase">No products match your parameters</h3>
                  <p className="text-xs text-slate-500 mt-2 max-w-sm font-semibold uppercase tracking-wider leading-relaxed">Try clearing active filters, adjusting price ranges, or searching for other items</p>
                  <Button 
                    variant="outline" 
                    className="mt-6.5 rounded-xl border-indigo-500/30 text-indigo-300 hover:text-white hover:bg-indigo-500/10 font-bold px-6 h-11 text-xs cursor-pointer" 
                    onClick={handleReset}
                  >
                    Clear Active Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
                  {filtered.map(p => <ProductCard key={p.id} product={p} />)}
                </div>
              )}

            </div>

          </main>
        </div>
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
