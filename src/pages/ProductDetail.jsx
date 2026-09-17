import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MessageCircle,
  Share2,
  ExternalLink,
  Sparkles,
  Link2,
} from "lucide-react";
import Navbar from "../components/Navbar";

import t1 from "../assets/t1.png";
import t2 from "../assets/t2.png";

import t2p1 from "../assets/t2p1.png";
import t2p2 from "../assets/t2p2.png";

import t3p1 from "../assets/t3p1.png";
import t3p2 from "../assets/t3p2.png";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // All projects dataset
  const projectsData = {
    1: {
      title: "Birthday Website Template 1",
      category: "LANDING PAGE",
      postedDate: "Posted about 1 month ago",
      version: "Version 1.0.0",
      price: "₹19",
      delivery: "Direct Access Link + Optional ZIP",
      description:
        "A beautiful and elegant birthday website template with a soft pink aesthetic, personalized birthday greetings, animated cake, candle effects, and a sweet love note experience designed to make birthdays extra special.",
      overview:
        "Make someone's birthday special with a beautiful and personalized digital birthday experience. Birthday Website Template 1 features a soft pink aesthetic, animated birthday cake and candle effects, personalized name and birthday message, and a lovely love note section.\n\nThe template is simple, lightweight, responsive, and easy to customize with your own name and message. After purchase, you will receive a direct live deployment link instantly via WhatsApp, along with optional source code files if you want to host and customize it yourself.",
      liveUrl: "https://rahulrpyadav.github.io/ks/",
      features: [
        "Personalized birthday greeting",
        "Custom name and love note",
        "Animated birthday cake",
        "Interactive candle animation",
        "Soft pink aesthetic theme",
        "Elegant minimalist layout",
        "Smooth visual animations",
        "Fully responsive design",
        "Easy-to-edit birthday content",
        "Simple and lightweight template",
      ],
      screenshots: [t2, t1],
    },
    2: {
      title: "Birthday Website Template 2",
      category: "Landing Page",
      postedDate: "Posted about 2 weeks ago",
      version: "Version 1.0.0",
      price: "₹49",
      delivery: "Direct Access Link + Optional ZIP",
      description:
        "A beautiful and interactive birthday website template featuring a personalized birthday greeting, custom name, romantic love note popup, cute birthday decorations, animated elements, and a charming pink-themed design made for special celebrations.",
      overview:
        "Create a sweet and memorable digital birthday experience with Birthday Website Template 2 — a beautiful interactive template designed for birthdays, couples, anniversaries, friendships, and special celebrations.\n\nPersonalize the experience with a custom name and heartfelt love note, surrounded by cute birthday decorations, balloons, hearts, and a soft pink aesthetic. The responsive design works smoothly across mobile and desktop devices.\n\nAfter purchase, you will receive a direct live deployment link instantly via WhatsApp, along with optional source code files if you want to host and customize the template yourself.",
      liveUrl: "https://rahulrpyadav.github.io/Birthday-Website-Template-2/",
      features: [
        "Personalized birthday landing page",
        "Custom name and birthday message",
        "Interactive love note popup",
        "Romantic handwritten-style design",
        "Animated balloons and floating elements",
        "Heart and star decorative animations",
        "Cute birthday-themed illustrations",
        "Beautiful pink & cream color palette",
        "Fully responsive design",
        "Easy-to-customize template",
      ],
      screenshots: [t2p1, t2p2],
    },
    3: {
      title: "Birthday Website Template 3",
      category: "Landing Page",
      postedDate: "Posted 3 weeks ago",
      version: "Version 1.0.0",
      price: "₹29",
      delivery: "Direct Access Link + Optional ZIP",
      description:
        "A cute and romantic birthday website featuring an interactive envelope, personalized recipient name, and a heartfelt message reveal designed to create a sweet surprise for someone special.",
      overview:
        "Create a beautiful digital birthday surprise with this interactive envelope-style website template. The experience begins with a beautifully designed birthday envelope featuring a personalized name and an OPEN/CLOSE interaction.\n\nWhen the envelope is opened, a personalized love letter is revealed with a custom recipient name and heartfelt message, surrounded by cute hearts and romantic decorative elements. The soft pastel design and smooth envelope interaction make it perfect for birthdays, couples, anniversaries, and special occasions.\n\nAfter purchase, you will receive a direct live deployment link instantly via WhatsApp, along with optional source code files if you want to host and customize the template yourself.",
      liveUrl: "https://rahulrpyadav.github.io/Birthday-Website-Template-3/",
      features: [
        "Interactive birthday envelope",
        "Open and close envelope animation",
        "Personalized recipient name",
        "Custom love letter message",
        "Animated letter reveal",
        "Cute heart decorations",
        "Romantic pastel theme",
        "Smooth interactive experience",
        "Fully responsive design",
        "Easy-to-customize content",
      ],
      screenshots: [
        t3p1,t3p2
        ],
    },
    4: {
      title: "UPSC Exam Study & Prep Tracker",
      category: "PRODUCTIVITY APP",
      postedDate: "Posted 1 month ago",
      version: "Version 1.2.0",
      price: "₹199",
      delivery: "Direct Access Link + Optional ZIP",
      description:
        "A single-page UPSC preparation tracker web application featuring built-in study timers, revision logging, weekly progress charts, and local data persistence.",
      overview:
        "Designed specifically for civil services aspirants to log daily study hours, track syllabus completion, and analyze weekly progress through interactive charts.",
      liveUrl: "https://rahulrp.vercel.app/",
      features: [
        "Study timer & stopwatch",
        "Weekly progress charts",
        "Revision logging",
        "Auto data saving",
        "Clean dashboard",
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      ],
      previewText: "UPSC TRACKER",
    },
    5: {
      title: "RL Interior Design Portfolio & UI",
      category: "BUSINESS TEMPLATE",
      postedDate: "Posted 2 months ago",
      version: "Version 1.0.0",
      price: "₹149",
      delivery: "Direct Access Link + Optional ZIP",
      description:
        "Stunning modern portfolio and landing page for interior design brands featuring logo showcase, user testimonials UI components, and smooth scroll animations.",
      overview:
        "A sleek interior design agency portfolio template with modern typography, image lightboxes, and inquiry contact forms.",
      liveUrl: "https://rahulrp.vercel.app/",
      features: [
        "Logo showcase slider",
        "Client testimonials UI",
        "Smooth scroll animations",
        "WhatsApp direct inquiry",
        "Mobile optimized",
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      ],
      previewText: "RL INTERIORS",
    },
  };

  const project = projectsData[id] || projectsData["1"];

  // Index-based state management to prevent flickering
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Reset index when project ID changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [id]);

  const currentImage =
    project.screenshots[selectedIndex] || project.screenshots[0];

  const handleBuyNow = () => {
    const phoneNumber = "6367417127";
    const message = encodeURIComponent(
      `Hello RP, I want to buy "${project.title}" priced at ${project.price}. Please share the Direct Access Link (and optional ZIP if needed).`,
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleCustomise = () => {
    const phoneNumber = "6367417127";
    const message = encodeURIComponent(
      `Hello RP, I want a custom web project built similar to "${project.title}". Here are my requirements:`,
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleLiveDemo = () => {
    window.open(project.liveUrl, "_blank");
  };

  const handleWhatsAppShare = () => {
    const shareText = encodeURIComponent(
      `Hey! Check out this amazing project "${project.title}" on RpKart: ${window.location.href}`,
    );
    window.open(`https://wa.me/?text=${shareText}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/40 via-amber-50/20 to-white text-gray-900">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 pt-28 pb-24">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-8">
          <span
            onClick={() => navigate("/")}
            className="hover:text-orange-600 cursor-pointer"
          >
            Home
          </span>
          <span>/</span>
          <span
            onClick={() => navigate("/all-projects")}
            className="hover:text-orange-600 cursor-pointer"
          >
            Projects
          </span>
          <span>/</span>
          <span className="text-gray-400">{project.category}</span>
          <span>/</span>
          <span className="text-gray-900 font-bold">{project.title}</span>
        </div>

        {/* Top Grid: Preview & Buy Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left: Interactive Preview Screen & Thumbnails (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden border border-orange-100/85 shadow-xl bg-white">
              <div className="bg-gray-100/80 px-4 py-3 border-b border-gray-200/85 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="bg-white px-4 py-1 rounded-full text-[11px] font-mono text-gray-500 border border-gray-200 shadow-2xs">
                  rpkart.dev/preview/
                  {project.title.toLowerCase().replace(/\s+/g, "")}
                </div>
                <div className="w-12"></div>
              </div>

              {/* Main Image Container */}
              <div className="relative h-72 sm:h-96 w-full bg-black overflow-hidden group">
                <img
                  src={currentImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 pointer-events-none">
                  <span className="text-white font-black tracking-widest text-2xl sm:text-3xl drop-shadow-lg">
                    {project.previewText}
                  </span>
                </div>
              </div>
            </div>

            {/* Thumbnails Row using Index */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {project.screenshots &&
                project.screenshots.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedIndex(idx)}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                      selectedIndex === idx
                        ? "border-orange-500 scale-105 shadow-md ring-2 ring-orange-500/20"
                        : "border-gray-200 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`thumbnail-${idx}`}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  </button>
                ))}
            </div>
          </div>

          {/* Right: Title, Price & CTA Actions (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-orange-100/80 text-orange-800 text-[11px] font-extrabold tracking-wider rounded-full border border-orange-200">
                  {project.category}
                </span>

                {/* Share Button opening WhatsApp */}
                <button
                  onClick={handleWhatsAppShare}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-all cursor-pointer shadow-2xs"
                >
                  <Share2 size={13} className="text-emerald-600" /> Share on
                  WhatsApp
                </button>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-2">
                {project.title}
              </h1>
              <div className="flex items-center gap-3 text-xs text-gray-500 font-medium mb-6">
                <span>{project.postedDate}</span>
                <span>•</span>
                <span className="font-mono">{project.version}</span>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            {/* Price & Action Buttons Card */}
            <div className="bg-white/90 backdrop-blur-md border border-orange-100/85 rounded-3xl p-6 shadow-xl shadow-orange-500/5">
              <div className="flex items-baseline justify-between mb-6 pb-4 border-b border-gray-100">
                <div>
                  <span className="text-3xl font-black text-gray-900">
                    {project.price}
                  </span>
                  <span className="text-xs text-gray-400 font-medium ml-2">
                    ONE-TIME LICENSE
                  </span>
                </div>
                <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                  {project.delivery}
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleBuyNow}
                  className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm rounded-2xl shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle size={18} />
                  <span>Get Direct Link via WhatsApp</span>
                </button>

                <button
                  onClick={handleLiveDemo}
                  className="w-full py-3 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 font-bold text-sm rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <ExternalLink size={16} className="text-orange-500" />
                  <span>Live Demo</span>
                </button>

                <button
                  onClick={handleCustomise}
                  className="w-full py-3 bg-emerald-50 hover:bg-emerald-100/80 text-emerald-800 border border-emerald-200 font-bold text-sm rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <Sparkles size={16} className="text-emerald-600" />
                  <span>Customise from us</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Section: Project Overview */}
        <div className="mb-16">
          <div className="bg-white/90 backdrop-blur-md border border-orange-100/85 rounded-3xl p-8 shadow-sm">
            <h3 className="text-lg font-extrabold text-gray-900 mb-4 flex items-center gap-2">
              <Link2 size={18} className="text-orange-500" /> Project Overview &
              Delivery
            </h3>
            <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line space-y-4">
              {project.overview}
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="bg-white/90 backdrop-blur-md border border-orange-100/85 rounded-3xl p-8 sm:p-10 shadow-sm">
          <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wider mb-6 flex items-center gap-2">
            <Sparkles size={16} className="text-orange-500" /> Key Features &
            Highlights
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-orange-50/30 px-4 py-3 rounded-xl border border-orange-100/60 shadow-2xs"
              >
                <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
                <span className="text-xs sm:text-sm font-semibold text-gray-800 capitalize">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
