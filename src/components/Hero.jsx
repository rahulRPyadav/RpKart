import React from 'react';
import { Rocket, Code2, CheckCircle, Cpu, Layers, MessageSquare } from 'lucide-react';
import heroBg from '../assets/hero-bg.jpg'; 

export default function Hero() {
  const handleWhatsAppContact = () => {
    const phoneNumber = "6367417127";
    const message = encodeURIComponent("Hello RP, I want a custom MERN stack project built according to my requirements.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleScrollToProjects = () => {
    window.scrollTo({ top: 700, behavior: 'smooth' });
  };

  return (
    <div 
      className="relative overflow-hidden pt-33 pb-16 px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Light Overlay taaki text clear dikhe */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-orange-200/80 shadow-sm px-4 py-1.5 rounded-full text-xs font-semibold text-gray-800 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>🚀 5+ Projects Successfully Delivered</span>
          <span className="text-gray-300">|</span>
          <span className="text-orange-600 font-bold">MERN Stack Expert</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-gray-900 leading-[1.15] max-w-4xl mb-4 font-sans">
          Build Custom Web Apps & <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent underline decoration-orange-300/60 decoration-wavy decoration-2">
            MERN Stack Codebases
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-gray-700 max-w-2xl mb-10 leading-relaxed font-normal">
          Explore ready-to-use full-stack templates or get custom web applications built precisely according to your unique business requirements. Clean architecture, fast delivery, and full source code access.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            onClick={handleScrollToProjects}
            className="flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm rounded-full shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Rocket size={18} />
            <span>Explore Templates</span>
          </button>

          <button
            onClick={handleWhatsAppContact}
            className="flex items-center gap-2 px-7 py-3.5 bg-emerald-50/90 hover:bg-emerald-100 text-emerald-700 border border-emerald-500/30 font-bold text-sm rounded-full shadow-sm hover:shadow transition-all duration-300 backdrop-blur-sm"
          >
            <MessageSquare size={18} className="text-emerald-600 fill-emerald-200" />
            <span>Request Custom Build</span>
          </button>
        </div>

        {/* Key Highlights / Features */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-gray-200/60 w-full text-xs sm:text-sm text-gray-700 font-medium">
          <div className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm py-3 px-4 rounded-2xl border border-gray-200/60 shadow-sm">
            <Layers size={16} className="text-orange-500" />
            <span>MERN Stack</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm py-3 px-4 rounded-2xl border border-gray-200/60 shadow-sm">
            <Code2 size={16} className="text-blue-500" />
            <span>Custom Requirements</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm py-3 px-4 rounded-2xl border border-gray-200/60 shadow-sm">
            <CheckCircle size={16} className="text-emerald-500" />
            <span>5+ Delivered</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm py-3 px-4 rounded-2xl border border-gray-200/60 shadow-sm">
            <Cpu size={16} className="text-purple-500" />
            <span>Production Ready</span>
          </div>
        </div>

      </div>
    </div>
  );
}