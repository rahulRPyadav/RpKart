import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';

// Step 1: Agar local image lagani ho toh yahan import karein
import t1 from '../assets/t2.png';
import t2p1 from '../assets/t2p1.png';
import t3p1 from "../assets/t3p1.png";
import lp1p1 from "../assets/lp1p1.png";

export default function FeaturedProjects() {
  const navigate = useNavigate();

  const projects = [
    { 
      id: 1, 
      title: "Birthday Website Template 1", 
      category: "LANDING PAGE", 
      version: "v1.0.0", 
      description: "A cinematic and interactive birthday website with exciting surprise moments...", 
      techStack: ["Next.js", "React", "TypeScript", "+2"], 
      price: "₹19", 
      delivery: "Direct Link Delivery", 
      imageBg: "bg-gradient-to-br from-zinc-950 via-neutral-900 to-stone-950", 
      image: t1
    },
    { 
      id: 2, 
      title: "Birthday Website Template 2", 
      category: "LANDING PAGE", 
      version: "v1.0.0", 
      description: "A fully customizable interactive website template for birthdays...", 
      techStack: ["Next.js", "React", "TypeScript", "+3"], 
      price: "₹49", 
      delivery: "Direct Access Link", 
      imageBg: "bg-gradient-to-br from-neutral-950 via-zinc-900 to-black", 
      image: t2p1
    },
    { 
      id: 3, 
      title: "Birthday Website Template 3", 
      category: "LANDING PAGE", 
      version: "v1.0.0", 
      description: "Complete tour & travel booking web application...", 
      techStack: ["React", "Node.js", "Express", "MongoDB"], 
      price: "₹29", 
      delivery: "Direct Access Link", 
      imageBg: "bg-gradient-to-br from-amber-950 via-orange-950 to-neutral-950", 
      image: t3p1
    },
    { 
      id: 4, 
      title: "Birthday Website Landing Page 1", 
      category: "LANDING PAGE", 
      version: "v1.0.0", 
      description: "A single-page UPSC preparation tracker...", 
      techStack: ["React", "Tailwind CSS", "Chart.js"], 
      price: "₹99", 
      delivery: "Direct Access Link", 
      imageBg: "bg-gradient-to-br from-stone-950 via-zinc-900 to-neutral-900", 
      image: lp1p1
    },
    { 
      id: 5, 
      title: "RL Interior Design Portfolio & UI", 
      category: "BUSINESS TEMPLATE", 
      version: "v1.0.0", 
      description: "Stunning modern portfolio and landing page...", 
      techStack: ["React", "Tailwind CSS", "JavaScript"], 
      price: "₹149", 
      delivery: "Direct Access Link", 
      imageBg: "bg-gradient-to-br from-orange-950 via-amber-950 to-stone-950", 
      previewText: "RL INTERIORS",
      image: "" 
    }
  ];

  const handleBrowseAll = () => {
    navigate('/all-projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-orange-50/40 via-amber-50/20 to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-100/70 border border-orange-200/60 rounded-full text-[10px] font-extrabold tracking-widest text-orange-700 uppercase mb-2 shadow-2xs">
              <Sparkles size={11} /> CURATED CATALOG
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
              Featured Production Codebases
            </h2>
          </div>

          <button
            onClick={handleBrowseAll}
            className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 hover:text-orange-700 bg-white hover:bg-orange-50 px-4 py-2 rounded-full transition-all duration-300 group cursor-pointer border border-orange-200/60 shadow-sm"
          >
            <span>Browse All Listings</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
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
                
                {/* Agar project.image me photo di hogi toh background me photo show hogi */}
                {project.image ? (
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : null}

                {/* Dark gradient overlay taaki text clear dikhe */}
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
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-orange-50/60 text-orange-900 text-[11px] font-semibold rounded-md border border-orange-100">
                        {tech}
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
    </section>
  );
}