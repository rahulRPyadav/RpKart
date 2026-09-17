import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MessageCircle, Menu, X, Code } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleWhatsAppContact = () => {
    const phoneNumber = "6367417127";
    const message = encodeURIComponent("Hello RP, I want to inquire about source codes or custom MERN projects.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <header className="max-w-6xl mx-auto bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl shadow-black/5 rounded-full px-6 py-3 transition-all duration-300">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo with Home Navigation */}
          <div 
            onClick={() => {
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-md shadow-orange-500/25 group-hover:scale-105 transition-transform duration-300">
              <Code size={18} className="stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-gray-900 flex items-center gap-1">
                RpKart <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping"></span>
              </span>
            </div>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="flex-1 max-w-md relative hidden sm:block">
            <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
              <Search size={16} />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects or categories..."
              className="w-full pl-4 pr-10 py-2 bg-white/60 border border-gray-200/60 rounded-full text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 transition-all duration-300 shadow-inner"
            />
          </div>

          {/* WhatsApp Contact Button (Desktop) */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={handleWhatsAppContact}
              className="group relative inline-flex items-center gap-2 px-5 py-2 bg-emerald-50/80 hover:bg-emerald-100 border border-emerald-500/30 text-emerald-700 font-bold text-xs rounded-full shadow-sm hover:shadow transition-all duration-300 cursor-pointer"
            >
              <MessageCircle size={16} className="text-emerald-600 fill-emerald-200 group-hover:scale-110 transition-transform" />
              <span>Contact Us</span>
            </button>
          </div>

          {/* Mobile Hamburger & WhatsApp Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={handleWhatsAppContact}
              className="p-2 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-200 shadow-sm cursor-pointer"
              title="WhatsApp Contact"
            >
              <MessageCircle size={18} />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 bg-white/80 text-gray-700 rounded-full border border-gray-200 hover:bg-white transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>

        {/* Mobile Search Drawer */}
        {isMobileMenuOpen && (
          <div className="sm:hidden mt-3 pt-3 border-t border-gray-100 flex flex-col gap-3 animate-fadeIn">
            <div className="relative w-full">
              <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                <Search size={16} />
              </span>
              <input
                type="text"
                placeholder="Search projects or categories..."
                className="w-full pl-4 pr-10 py-2 bg-white/80 border border-gray-200 rounded-full text-xs text-gray-700 focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>
        )}
      </header>
    </div>
  );
}