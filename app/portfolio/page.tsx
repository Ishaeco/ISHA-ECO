"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, Globe2, MapPin } from "lucide-react";
import Link from "next/link";

// --- DATA: All 5 Strategic Projects ---
// Images are now /portfolio1.png, /portfolio2.png, etc.
// Icons have been removed from data entirely.
const projectJourney = [
  {
    id: 1,
    project: "Ramoji Film City (Hyderabad)",
    title: "Massive Turnkey Recovery",
    desc: "A sprawling facility processing 2.5 tons per day of municipal solid waste, utilizing state-of-the-art automated sorting and integrated biological pathways.",
    img: "/portfolio1.jpg", 
    align: "left"
  },
  {
    id: 2,
    project: "Tanjavoor Medical College",
    title: "Decentralized Zero-Waste",
    desc: "A decentralized infrastructure project designed to successfully achieve near-zero landfill waste.",
    img: "/portfolio2.jpg",
    align: "right"
  },
  {
    id: 3,
    project: "Coastal Reclaim",
    title: "Legacy Bio-Mining",
    desc: "Scientific excavation and processing DPR of 1 million tons of historical urban waste, resulting in the reclamation of 40 acres of high-value land.",
    img: "/portfolio3.jpg",
    align: "left"
  },
  {
    id: 4,
    project: "Kaleshwaram",
    title: "Temple-Waste Bio Conversion",
    desc: "A specialized pathway dedicated to ritual floral and organic waste, creatively transforming local liabilities into premium incense and rich soil additives.",
    img: "/portfolio4.jpg",
    align: "right"
  },
  {
    id: 5,
    project: "Munshi Municipality",
    title: "Centralized Eco-Bean Cluster",
    desc: "A strategic, centralized Eco-Bean Machine installation efficiently managing and processing 5 tons of unwanted urban waste daily.",
    img: "/portfolio5.jpg", 
    align: "left"
  }
];

export default function PortfolioPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className="min-h-screen bg-[#081017] text-slate-300 font-sans selection:bg-emerald-500/30 selection:text-white overflow-hidden">
      
      <div className="fixed inset-0 z-0 opacity-70 matrix-bg pointer-events-none" />

      {/* --- 1. NAVBAR (LOGO FIXED TO THREE-COLOR TEXT TYPOGRAPHY) --- */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center p-4 lg:py-4 lg:px-12 bg-[#081017]/85 backdrop-blur-xl border-b border-white/5 shadow-sm">
        <Link href="/" className="flex items-center tracking-tighter hover:opacity-80 transition-opacity">
          {/* Logo is now the Emerald, White, Orange text cluster */}
          <div className="flex flex-row items-baseline font-black tracking-tighter pt-1">
            <span className="text-3xl text-emerald-400">ISHA</span>
            <span className="text-3xl text-white-400">ECO</span>
            <span className="text-3xl text-orange-400">SOLUTIONS</span>
          </div>
        </Link>
        <Link href="/" className="flex items-center gap-2 text-sm font-bold text-orange-400 hover:text-emerald-400 transition-all">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </nav>

      {/* --- 2. HERO --- */}
      <section className="pt-40 pb-20 px-6 text-center relative z-10 border-b border-white/5 bg-transparent">
        <p className="text-emerald-400 font-black uppercase tracking-[0.2em] text-sm mb-6 flex items-center justify-center gap-2">
            <Globe2 size={16} /> Impact Portfolio
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-tight">
          A Story of <br/>Environmental <span className="text-emerald-400">Impact.</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
          Discover how ISHA ECO SOLUTIONS transforms environmental liabilities into clean, sustainable ecosystems across real municipal and industrial projects.
        </p>
      </section>

      {/* --- 3. THE STORY TIMELINE (NODES AND ICONS REMOVED) --- */}
      <section ref={containerRef} className="relative w-full max-w-7xl mx-auto px-6 py-32 z-10">
        
        {/* The Central Glowing Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 rounded-full -translate-x-1/2">
          <motion.div 
            style={{ height: lineHeight }} 
            className="w-full bg-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.8)]"
          />
        </div>

        <div className="flex flex-col gap-32 relative z-10">
          {projectJourney.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`flex flex-col ${step.align === "left" ? "md:flex-row" : "md:flex-row-reverse"} items-center justify-between gap-12 md:gap-20`}
            >
              {/* Image Side (Uses /portfolioX.png source with updated container) */}
              <div className="w-full md:w-1/2 flex justify-center relative">
                <div className="relative group flex justify-center items-center w-full">
                   {/* Background Emerald Glow */}
                   <div className="absolute inset-4 bg-emerald-500/10 blur-[60px] rounded-[2rem] transition-colors duration-500" />
                   
                   {/* The Project Image */}
                   <img 
                     src={step.img} 
                     alt={step.title} 
                     className="w-full max-w-[500px] aspect-square object-cover rounded-[2rem] relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-700"
                   />
                </div>
              </div>

              {/* Text Side (Icons and central circles removed) */}
              <div className={`w-full md:w-1/2 flex flex-col ${step.align === "left" ? "md:text-left md:items-start" : "md:text-right md:items-end"} text-center items-center relative`}>
                
                {/* Removed the central node <div className="hidden md:flex absolute left-1/2...>{step.icon}</div> */}

                {/* Counter Number */}
                <div className="absolute -top-12 text-6xl md:text-8xl lg:text-[10rem] font-extrabold text-white/5 z-0 tracking-tighter">0{step.id}</div>
                
                {/* Project Location Header (Icons removed) */}
                <p className="text-orange-400 font-black uppercase tracking-widest text-xs mb-3 flex relative z-10">
                    {step.project}
                </p>
                
                {/* Title */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tighter relative z-10">{step.title}</h2>
                
                {/* Glassmorphism Card for Description */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-xl max-w-lg relative z-10">
                   <p className="text-slate-300 text-lg leading-relaxed font-medium">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 4. CTA --- */}
      <section className="py-32 text-center relative z-10 border-t border-white/5 bg-transparent">
          <div className="absolute inset-0 matrix-bg opacity-30 pointer-events-none -z-10" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">Ready to Engineer <br/>the <span className="text-emerald-400">future of Waste?</span></h2>
          <Link href="/#contact">
            <button className="bg-emerald-500 text-slate-950 px-10 py-5 rounded-full font-extrabold text-lg hover:bg-white transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              Discuss A Technical Consultation
            </button>
          </Link>
      </section>

      {/* --- 5. FOOTER (LOGO FIXED TO THREE-COLOR TEXT TYPOGRAPHY) --- */}
      <footer className="py-20 px-6 lg:px-12 bg-[#03080C] text-slate-500 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center tracking-tighter pt-1">
             {/* Logo is now the Emerald, White, Orange text cluster */}
             <div className="flex flex-row items-baseline font-black tracking-tighter text-white">
                 <span className="text-3xl text-white tracking-tight">ISHA</span>
                 <span className="text-3xl text-emerald-400 tracking-tight">ECO</span>
                 <span className="hidden sm:inline-block text-xs font-bold text-orange-400 uppercase tracking-[0.3em] ml-2 pb-1">SOLUTIONS</span>
             </div>
           </div>
           <p className="font-medium text-sm">© 2026 ISHA ECO SOLUTIONS. Engineering a Zero-Waste Future.</p>
           <div className="flex items-center gap-3 text-sm font-bold"><MapPin size={18} className="text-orange-400" /> Hyderabad, India.</div>
        </div>
      </footer>

    </main>
  );
}