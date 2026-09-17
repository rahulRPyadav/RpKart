import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';

// Step 1: Agar local image lagani ho toh yahan import karein
import t2 from '../assets/t2.png';
import t2p1 from '../assets/t2p1.png';
import t3p1 from "../assets/t3p1.png";

export default function AllProjects() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  // Saare projects ki list with ID matching ProductDetail dataset
  const allProjects = [
    {
      id: "1",
      title: "Birthday Website Template 2",
      category: "LANDING PAGE",
      version: "v1.0.0",
      description: "A cinematic and interactive birthday website with exciting surprise moments, personalized memories, animations.",
      techStack: ["Next.js", "React", "TypeScript"],
      price: "₹19",
      delivery: "Direct Link Delivery",
      imageBg: "bg-gradient-to-br from-zinc-950 via-neutral-900 to-stone-950",
      image:t2
    },
    {
      id: "2",
      title: "Birthday Website Template 2",
      category: "LANDING PAGE",
      version: "v1.0.0",
      description: "A fully customizable interactive website template for birthdays, couples, anniversaries, and celebrations.",
      techStack: ["Next.js", "React", "TypeScript"],
      price: "₹49",
      delivery: "Direct Access Link",
      imageBg: "bg-gradient-to-br from-neutral-950 via-zinc-900 to-black",
      image: t2p1
    },
    {
      id: "3",
      title: "Birthday Website Template 3",
      category: "LANDING PAGE",
      version: "v1.0.0",
      description: "Complete tour & travel booking web application featuring customer record management, date validation rules.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      price: "₹29",
      delivery: "Direct Access Link",
      imageBg: "bg-gradient-to-br from-amber-950 via-orange-950 to-neutral-950",
      image: t3p1
    },
    {
      id: "4",
      title: "UPSC Exam Study & Prep Tracker",
      category: "PRODUCTIVITY APP",
      version: "v1.2.0",
      description: "A single-page UPSC preparation tracker featuring built-in study timers, revision logging, weekly progress charts.",
      techStack: ["React", "Tailwind CSS", "Chart.js"],
      price: "₹199",
      delivery: "Direct Access Link",
      imageBg: "bg-gradient-to-br from-stone-950 via-zinc-900 to-neutral-900",
      previewText: "UPSC TRACKER",
      image: ""
    },
    {
      id: "5",
      title: "RL Interior Design Portfolio & UI",
      category: "BUSINESS TEMPLATE",
      version: "v1.0.0",
      description: "Stunning modern portfolio and landing page for interior design brands featuring logo showcase and smooth animations.",
      techStack: ["React", "Tailwind CSS", "JavaScript"],
      price: "₹149",
      delivery: "Direct Access Link",
      imageBg: "bg-gradient-to-br from-orange-950 via-amber-950 to-stone-950",
      previewText: "RL INTERIORS",
      image: ""
    },
    {
      id: "6",
      title: "E-Commerce Multi-Vendor Dashboard",
      category: "FULL STACK SaaS",
      version: "v1.5.0",
      description: "Advanced admin & vendor dashboard with product management, live sales analytics graphs, and role-based access.",
      techStack: ["React", "Node.js", "MongoDB", "Tailwind"],
      price: "₹349",
      delivery: "Full Source Code",
      imageBg: "bg-gradient-to-br from-slate-950 via-cyan-950 to-blue-950",
      previewText: "VENDOR DASH",
      image: ""
    }
  ];

  const categories = ["ALL", "LANDING PAGE", "FRONTEND", "FULL STACK SaaS", "PRODUCTIVITY APP", "BUSINESS TEMPLATE"];

  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'ALL' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/30 via-white to-white">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 pt-28 pb-20">
        
        {/* Back Button & Header */}
        <button 
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-orange-600 mb-6 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-2xs transition-all cursor-pointer"
        >
          <ArrowLeft size={14} /> Back to Home
        </button>

        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-100/70 border border-orange-200/60 rounded-full text-[10px] font-extrabold tracking-widest text-orange-700 uppercase mb-2">
            <Sparkles size={11} /> COMPLETE CATALOG
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Explore All Listings</h1>
          <p className="text-sm text-gray-600 mt-1">Browse all ready-to-use production codebases, MERN apps, and templates.</p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="relative w-full md:w-96">
            <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
              <Search size={16} />
            </span>
            <input 
              type="text"
              placeholder="Search codebases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-4 pr-10 py-2.5 bg-white border border-gray-200 rounded-xl text-xs text-gray-700 focus:outline-none focus:border-orange-500 shadow-2xs"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat 
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with card click navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => {
                navigate(`/product/${project.id}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white/90 backdrop-blur-md rounded-2xl border border-orange-100/80 shadow-lg shadow-orange-500/5 hover:shadow-xl hover:border-orange-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
            >
              {/* Card Top Preview Box */}
              <div className={`relative h-48 ${project.imageBg} p-5 flex flex-col justify-between overflow-hidden`}>
                
                {/* Agar project.image me local image di hogi toh background me show hogi */}
                {project.image ? (
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : null}

                {/* Dark overlay taaki text clear dikhe */}
                <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

                <div className="flex items-center justify-between relative z-10">
                  <span className="px-2.5 py-0.5 bg-white/15 backdrop-blur-md text-[10px] font-bold text-white tracking-wider rounded-full border border-white/20">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-white/80 bg-white/15 backdrop-blur-md px-2 py-0.5 rounded border border-white/20">
                    {project.version}
                  </span>
                </div>
                <div className="text-center relative z-10 my-auto">
                  <h3 className="text-white font-black tracking-wider text-xl drop-shadow-lg group-hover:scale-105 transition-transform">
                    {project.previewText}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.map((t, i) => (
                      <span key={i} className="px-2 py-0.5 bg-orange-50/60 text-orange-900 text-[11px] font-semibold rounded-md border border-orange-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-black text-gray-900">{project.price}</span>
                    <p className="text-[10px] text-gray-400 font-medium">{project.delivery}</p>
                  </div>
                  <span className="text-xs font-bold text-orange-600 group-hover:underline">
                    View Details &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}