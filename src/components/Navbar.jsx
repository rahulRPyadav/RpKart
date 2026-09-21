import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MessageCircle, Menu, X, Code, Search, Flame } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef(null);

  // Sample projects database for live navbar search
  const searchableProjects = [
    { id: "1", title: "Birthday Website Template 1", category: "LANDING PAGE", price: "₹99" },
    { id: "2", title: "Birthday Website Template 3", category: "FRONTEND", price: "₹99" },
    { id: "3", title: "Ishika Travels - Tour Booking Web App", category: "FULL STACK SaaS", price: "₹299" },
    { id: "4", title: "UPSC Exam Study & Prep Tracker", category: "PRODUCTIVITY APP", price: "₹199" },
    { id: "5", title: "RL Interior Design Portfolio & UI", category: "BUSINESS TEMPLATE", price: "₹149" }
  ];

  const filteredResults = searchQuery.trim() === '' ? [] : searchableProjects.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Close search dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleWhatsAppContact = () => {
    const phoneNumber = "6367417127";
    const message = encodeURIComponent("Hello RP, I want to inquire about source codes or custom MERN projects.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      
      {/* Top Ticker Announcement Banner */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 text-white text-[11px] font-bold py-1.5 px-4 text-center tracking-wide flex items-center justify-center gap-2 shadow-xs">
        <Flame size={14} className="animate-bounce text-yellow-200" />
        <span>Limited Time Offer: Get Production-Ready MERN Apps & Templates starting at just ₹99!</span>
      </div>

      <div className="px-4 pt-3">
        {/* Added overflow-hidden to keep everything neatly inside the rounded pill shape */}
        <header className="max-w-6xl mx-auto bg-white/90 backdrop-blur-xl border border-white/50 shadow-xl shadow-black/5 rounded-3xl sm:rounded-full px-6 py-3 transition-all duration-300 overflow-hidden">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo with Home Navigation */}
            <div 
              onClick={() => {
                navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 cursor-pointer group shrink-0"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-md shadow-orange-500/25 group-hover:scale-105 transition-transform duration-300">
                <Code size={16} className="stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black tracking-tight text-gray-900 flex items-center gap-1">
                  RpKart <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping"></span>
                </span>
              </div>
            </div>

            {/* Center Navigation Links & Live Search */}
            <div className="hidden md:flex items-center gap-3">
              <nav className="flex items-center gap-1 bg-orange-50/50 border border-orange-200/50 px-3 py-1 rounded-full shrink-0">
                <button
                  onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isActive('/') ? 'bg-orange-500 text-white shadow-sm' : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => { navigate('/all-projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isActive('/all-projects') ? 'bg-orange-500 text-white shadow-sm' : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  All Codebases
                </button>
              </nav>

              {/* Live Search Bar with Dropdown */}
              <div className="relative" ref={searchRef}>
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-gray-400 pointer-events-none">
                    <Search size={14} />
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    placeholder="Quick search..."
                    className="w-48 lg:w-56 pl-8 pr-4 py-1.5 bg-gray-50/80 border border-gray-200 rounded-full text-xs text-gray-700 focus:outline-none focus:bg-white focus:border-orange-500 transition-all shadow-2xs"
                  />
                </div>

                {/* Instant Search Dropdown */}
                {isSearchFocused && filteredResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-orange-100 shadow-2xl overflow-hidden z-50 animate-fadeIn">
                    <div className="p-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider px-3 border-b border-gray-100">
                      Matching Codebases
                    </div>
                    {filteredResults.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          navigate(`/product/${item.id}`);
                          setSearchQuery('');
                          setIsSearchFocused(false);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-4 py-2.5 hover:bg-orange-50 cursor-pointer flex items-center justify-between border-b border-gray-50 last:border-none transition-colors"
                      >
                        <div>
                          <p className="text-xs font-bold text-gray-900 line-clamp-1">{item.title}</p>
                          <span className="text-[10px] text-orange-600 font-semibold">{item.category}</span>
                        </div>
                        <span className="text-xs font-black text-gray-900 bg-gray-100 px-2 py-0.5 rounded-md">{item.price}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Section: Status Badge + WhatsApp Contact (Desktop) */}
            <div className="hidden sm:flex items-center gap-2.5">
              <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-[11px] font-bold text-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Open for Custom Builds</span>
              </div>

              <button
                onClick={handleWhatsAppContact}
                className="group relative inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-xs rounded-full shadow-md shadow-emerald-500/20 transition-all duration-300 cursor-pointer"
              >
                <MessageCircle size={15} className="fill-white/20 group-hover:scale-110 transition-transform" />
                <span>WhatsApp</span>
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
                className="p-2 bg-white/90 text-gray-700 rounded-full border border-gray-200 hover:bg-white transition-colors cursor-pointer shadow-sm"
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>

          </div>

          {/* Mobile Dropdown Menu (Contained Properly Inside Header) */}
          {isMobileMenuOpen && (
            <div className="sm:hidden mt-4 pt-3 border-t border-gray-100 flex flex-col gap-2.5 animate-fadeIn pb-2">
              <div className="relative w-full">
                <span className="absolute left-3 top-2.5 text-gray-400">
                  <Search size={14} />
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search codebases..."
                  className="w-full pl-8 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-700 focus:outline-none"
                />
                {searchQuery.trim() !== '' && filteredResults.length > 0 && (
                  <div className="mt-1 bg-white rounded-xl border border-orange-100 shadow-lg overflow-hidden">
                    {filteredResults.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          navigate(`/product/${item.id}`);
                          setIsMobileMenuOpen(false);
                          setSearchQuery('');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-3 py-2 hover:bg-orange-50 border-b border-gray-50 text-xs font-bold text-gray-900 flex justify-between items-center"
                      >
                        <span>{item.title}</span>
                        <span className="text-orange-600">{item.price}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => { navigate('/'); setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold text-gray-800 hover:bg-orange-50 transition-colors"
              >
                🏠 Home
              </button>
              <button
                onClick={() => { navigate('/all-projects'); setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold text-gray-800 hover:bg-orange-50 transition-colors"
              >
                🚀 Explore All Codebases
              </button>
              <div className="px-4 py-2.5 bg-emerald-50 border border-emerald-200/60 rounded-xl flex items-center gap-2 text-xs font-bold text-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Available for Custom MERN Projects</span>
              </div>
            </div>
          )}
        </header>
      </div>
    </div>
  );
}