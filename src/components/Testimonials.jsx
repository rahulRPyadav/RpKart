import React from 'react';
import { Star, CheckCircle2, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Aman Sharma",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      content: "RpKart se Birthday Website Template (#RP-01) liya tha. Code itna clean aur structured hai ki mujhe customization karne me ek minute bhi nahi laga. Aur WhatsApp par instant live link mil gaya!",
      rating: 5,
      project: "Birthday Template"
    },
    {
      id: 2,
      name: "Priya Verma",
      role: "Startup Founder",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
      content: "Ishika Travels SaaS app ne mera kaafi waqt bacha liya. Complete MERN stack setup, user authentication aur admin panel ekdam ready-to-use mil gaya. Highly recommended!",
      rating: 5,
      project: "Ishika Travels SaaS"
    },
    {
      id: 3,
      name: "Rohit Singh",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      content: "RP bhai ka code quality aur support zabardast hai. Custom build ke liye contact kiya tha, aur unhone exact requirement ke hisab se project deliver kiya.",
      rating: 5,
      project: "Custom MERN Project"
    }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="px-3.5 py-1.5 bg-orange-100 text-orange-800 text-xs font-extrabold rounded-full uppercase tracking-wider border border-orange-200 shadow-2xs">
          ⭐ Verified Social Proof
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-4 tracking-tight">
          Loved by Developers & Creators
        </h2>
        <p className="text-sm text-gray-600 mt-2 font-medium max-w-xl mx-auto">
          Dekhiye hamare buyers kya keh rahe hain RpKart ke production-ready codebases aur instant WhatsApp delivery ke baare me.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item) => (
          <div 
            key={item.id} 
            className="bg-white/90 backdrop-blur-md border border-orange-100/85 p-8 rounded-3xl shadow-xl shadow-orange-500/5 flex flex-col justify-between relative group hover:border-orange-300 transition-all duration-300"
          >
            <div className="absolute top-6 right-6 text-orange-200 group-hover:text-orange-400 transition-colors">
              <Quote size={28} />
            </div>

            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400" />
                ))}
              </div>

              <p className="text-sm text-gray-700 leading-relaxed font-medium mb-6 relative z-10">
                "{item.content}"
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-10 h-10 rounded-full object-cover border-2 border-orange-200" 
                />
                <div>
                  <h4 className="text-xs font-bold text-gray-900 flex items-center gap-1">
                    {item.name} <CheckCircle2 size={13} className="text-emerald-500 fill-emerald-100" />
                  </h4>
                  <p className="text-[11px] text-gray-500 font-medium">{item.role}</p>
                </div>
              </div>
              
              <span className="text-[10px] font-bold text-orange-700 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200 shrink-0">
                {item.project}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}