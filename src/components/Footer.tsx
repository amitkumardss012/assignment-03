import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Globe, MessageCircle, Camera, Play } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 mt-auto text-slate-400 font-medium">
      {/* Sleek Glowing Newsletter Banner */}
      <div className="bg-slate-950 border-b border-white/5 relative overflow-hidden bg-grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-violet-500/5 to-blue-500/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-black text-white tracking-wide text-glow">Subscribe to our Elite Newsletter</h3>
            <p className="text-xs text-slate-500 mt-1.5 font-bold tracking-wide uppercase">Get exclusive drops, early invites, and premium tech discounts</p>
          </div>
          <div className="flex w-full max-w-md gap-3">
            <Input 
              placeholder="Enter your professional email..." 
              className="bg-slate-900/60 border-white/10 text-white placeholder-slate-500 rounded-2xl h-12 px-5 text-xs font-bold focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/40 transition-all flex-1" 
            />
            <Button className="rounded-2xl premium-gradient text-white hover:opacity-90 font-extrabold h-12 px-6 text-xs transition-all duration-300 hover:scale-[1.02] cursor-pointer shrink-0 border-0 shadow-lg shadow-indigo-500/25">
              <Mail className="w-4 h-4 mr-2" /> Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Link Directories */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="flex flex-col gap-4">
          <h4 className="font-extrabold text-xs tracking-widest uppercase text-white">About LuxTronics</h4>
          <ul className="space-y-3 text-xs font-bold text-slate-500">
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">About Our Company</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">Core Careers</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">Brand Press Kits</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">Tech Blog Articles</a></li>
          </ul>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="font-extrabold text-xs tracking-widest uppercase text-white">Client Help Desk</h4>
          <ul className="space-y-3 text-xs font-bold text-slate-500">
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">FAQs & Guides</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">Shipping Logistics</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">Product Exchanges</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">Order Tracking Portal</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-extrabold text-xs tracking-widest uppercase text-white">Legal Policy</h4>
          <ul className="space-y-3 text-xs font-bold text-slate-500">
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">Security Safeguards</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-300">Store Directory</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-extrabold text-xs tracking-widest uppercase text-white">Contact & Support</h4>
          <ul className="space-y-3.5 text-xs font-semibold text-slate-500">
            <li className="flex items-center gap-3 font-bold text-slate-400"><Phone className="w-4 h-4 text-indigo-400" /> 1800-123-4567</li>
            <li className="flex items-center gap-3 font-bold text-slate-400"><Mail className="w-4 h-4 text-indigo-400" /> support@luxtronics.com</li>
            <li className="flex items-center gap-3 font-bold text-slate-400"><MapPin className="w-4 h-4 text-indigo-400" /> Corporate Hub, New Delhi, India</li>
          </ul>
          
          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            {[Globe, MessageCircle, Camera, Play].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-500/10 hover:border-indigo-500/35 transition-all duration-300 hover:scale-105"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <Separator className="bg-white/5" />
      
      {/* Bottom Legal */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold text-slate-600 tracking-wider">
        <p>© 2026 LuxTronics Inc. All rights reserved.</p>
        <p className="flex items-center gap-1">Made with <span className="text-rose-500 animate-pulse">❤️</span> in India</p>
      </div>
    </footer>
  );
}
