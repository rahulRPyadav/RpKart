import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MessageCircle,
  Heart,
  ShieldCheck,
  Zap,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
  const navigate = useNavigate();

  const handleWhatsAppContact = () => {
    const phoneNumber = "6367417127";
    const message = encodeURIComponent(
      "Hello RP, I want to inquire about source codes or custom MERN projects from RpKart .",
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-white via-orange-50/30 to-orange-100/40 border-t border-orange-100 pt-16 pb-12 text-gray-900 mt-20 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-orange-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Top Callout Box */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 mb-12 text-white shadow-xl shadow-orange-500/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[11px] font-extrabold uppercase tracking-wider mb-2">
              <Sparkles size={12} /> Got a Custom Project Idea?
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">
              Let's build your dream web application together!
            </h3>
          </div>
          <button
            onClick={handleWhatsAppContact}
            className="px-6 py-3.5 bg-white hover:bg-orange-50 text-orange-600 font-extrabold text-xs rounded-2xl shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer shrink-0 hover:scale-105"
          >
            <MessageCircle
              size={16}
              className="text-emerald-600 fill-emerald-100"
            />
            <span>Chat on WhatsApp Now</span>
          </button>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-orange-200/60">
          {/* Brand Column (5 Cols) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div
              onClick={() => {
                navigate("/");
                scrollToTop();
              }}
              className="flex items-center gap-3 cursor-pointer group w-fit"
            >
              <div className="w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform">
                <img
                  src={logo}
                  alt="RpKart Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-black tracking-tight text-gray-900">
                RpKart
              </span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed max-w-sm font-medium">
              Your ultimate marketplace for production-ready frontend templates,
              landing pages, and full-stack MERN web applications. Delivered
              instantly via WhatsApp.
            </p>
            <div className="flex items-center gap-4 text-xs font-bold text-gray-700 pt-2">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-orange-100 shadow-2xs">
                <ShieldCheck size={14} className="text-emerald-500" />
                <span>100% Clean Code</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-orange-100 shadow-2xs">
                <Zap size={14} className="text-orange-500" />
                <span>Instant Delivery</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column (3 Cols) */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs font-bold text-gray-600">
              <li>
                <button
                  onClick={() => {
                    navigate("/");
                    scrollToTop();
                  }}
                  className="hover:text-orange-600 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Home Page</span> <ArrowUpRight size={12} />
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/all-projects");
                    scrollToTop();
                  }}
                  className="hover:text-orange-600 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Explore All Codebases</span> <ArrowUpRight size={12} />
                </button>
              </li>
            </ul>
          </div>

          {/* Contact / WhatsApp Column (4 Cols) */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">
              Direct Assistance
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed font-medium">
              Have questions or need technical support? Connect directly on
              WhatsApp anytime.
            </p>
            <button
              onClick={handleWhatsAppContact}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-500/30 text-emerald-800 font-bold text-xs rounded-2xl transition-all shadow-2xs cursor-pointer w-fit mt-1"
            >
              <MessageCircle
                size={15}
                className="text-emerald-600 fill-emerald-200"
              />
              <span>WhatsApp: 6367417127</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
          <p>© 2026 RpKart. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Developed with{" "}
            <Heart size={13} className="text-red-500 fill-red-500" /> by RP
            Yadav.
          </p>
        </div>
      </div>
    </footer>
  );
}
