"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, Globe2, MapPin } from "lucide-react";
import Link from "next/link";

// --- DATA ---
const projectJourney = [
  {
    id: 1,
    project: "Ramoji Film City (Hyderabad)",
    title: "Massive Turnkey Recovery",
    desc: "A sprawling facility processing 2.5 tons per day of municipal solid waste, utilizing state-of-the-art automated sorting and integrated biological pathways.",
    video: "/portfoliovideo1.mp4", 
    align: "left"
  },
  {
    id: 2,
    project: "Tanjavoor Medical College",
    title: "Decentralized Zero-Waste",
    desc: "A decentralized infrastructure project designed for Tanjavur Medical College, utilizing MBT & Eco-Bean to successfully achieve near-zero landfill waste.",
    video: "/PortfolioVideo2.mp4",
    align: "right"
  },
  {
    id: 3,
    project: "20 Tons/Day",
    title: "Legacy Waste Elimination",
    desc: "Scientific excavation and processing of 20 tons of historical urban waste, resulting in the reclamation of acres of high-value land.",
    video: "/Portfoliovideo3.mp4",
    align: "left"
  },
  {
    id: 4,
    project: "Kaleshwaram",
    title: "Decentralized Waste Management for Temple Waste",
    desc: "A specialized pathway to acheive zero waste in Kaleshwaram Temple",
    video: "/portfoliovideo4.mp4",
    align: "right"
  },
  {
    id: 5,
    project: "A Complete Sytem ",
    title: "Centralized Eco-Bean Cluster",
    desc: "A strategic, centralized Eco-Bean Machine installation efficiently managing and processing tons of unwanted urban waste daily.",
    video: "/portfoliovideo5.mp4", 
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
    <main className="min-h-screen bg-slate-50 text-slate-700 font-sans selection:bg-emerald-500/20 selection:text-emerald-700 overflow-hidden">
      
      <div className="fixed inset-0 z-0 opacity-70 matrix-bg pointer-events-none" />

      {/* --- 1. NAVBAR (Dark Background for White Text Visibility) --- */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center p-4 lg:py-4 lg:px-12 bg-[#081017]/90 backdrop-blur-xl border-b border-white/5 shadow-sm">
        <Link href="/" className="flex items-center tracking-tighter hover:opacity-80 transition-opacity">
          <div className="flex flex-row items-baseline font-black tracking-tighter pt-1">
            <span className="text-2xl md:text-3xl text-emerald-400">ISHA</span>
            <span className="text-2xl md:text-3xl text-white ml-1.5">ECO</span>
            <span className="text-2xl md:text-3xl text-orange-400 ml-2">SOLUTIONS</span>
          </div>
        </Link>
        <Link href="/" className="flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-emerald-400 transition-all">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </nav>

      {/* --- 2. HERO --- */}
      <section className="pt-40 pb-20 px-6 text-center relative z-10 border-b border-slate-200 bg-white">
        <p className="text-emerald-600 font-black uppercase tracking-[0.2em] text-sm mb-6 flex items-center justify-center gap-2">
            <Globe2 size={16} /> Impact Portfolio
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter mb-6 leading-tight">
          A Story of <br/>Environmental <span className="text-emerald-500">Impact.</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
          Discover how ISHA ECO SOLUTIONS transforms environmental liabilities into clean, sustainable ecosystems across real municipal and industrial projects.
        </p>
      </section>

      {/* --- 3. THE STORY TIMELINE --- */}
      <section ref={containerRef} className="relative w-full max-w-7xl mx-auto px-6 py-32 z-10">
        
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 rounded-full -translate-x-1/2">
          <motion.div 
            style={{ height: lineHeight }} 
            className="w-full bg-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)]"
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
              <div className="w-full md:w-1/2 flex justify-center relative">
                <div className="relative group flex justify-center items-center w-full">
                   <div className="absolute inset-4 bg-emerald-500/5 blur-[60px] rounded-[2rem] transition-colors duration-500" />
                   
                   <video 
                     src={step.video} 
                     autoPlay 
                     loop 
                     muted 
                     playsInline
                     className="w-full max-w-[500px] aspect-square object-cover rounded-[2rem] relative z-10 shadow-xl group-hover:scale-105 transition-transform duration-700 border border-slate-100"
                   />
                </div>
              </div>

              <div className={`w-full md:w-1/2 flex flex-col ${step.align === "left" ? "md:text-left md:items-start" : "md:text-right md:items-end"} text-center items-center relative`}>
                <div className="absolute top-1/2 -translate-y-1/2 text-6xl md:text-8xl lg:text-[10rem] font-extrabold text-white/5 opacity-10 z-0 tracking-tighter">0{step.id}</div>
                <p className="text-orange-500 font-black uppercase tracking-widest text-xs mt-16 md:mt-0 mb-3 flex items-center gap-2 relative z-10">
                    {step.project}
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tighter relative z-20">{step.title}</h2>
                <div className="bg-white/80 backdrop-blur-md border border-slate-200 p-8 rounded-3xl shadow-sm max-w-lg relative z-10">
                   <p className="text-slate-600 text-lg leading-relaxed font-medium">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 4. CTA (Color bleed fixed) --- */}
      <section className="py-32 text-center relative z-10 border-t border-slate-200 bg-white">
          <div className="absolute inset-0 matrix-bg opacity-30 pointer-events-none -z-10" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
            Ready to Engineer <br/>the future of <span className="text-emerald-500">Waste?</span>
          </h2>
          <Link href="/#contact">
            <button className="bg-emerald-500 text-white px-10 py-5 rounded-full font-extrabold text-lg hover:bg-slate-900 transition-all shadow-lg shadow-emerald-500/20">
              Discuss A Technical Consultation
            </button>
          </Link>
      </section>

      {/* --- 5. FOOTER (Dark ECO text, Removed Date) --- */}
      <footer className="py-20 px-6 lg:px-12 bg-slate-50 text-slate-500 border-t border-slate-200 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center tracking-tighter pt-1">
             <div className="flex flex-row items-baseline font-black tracking-tighter">
                 <span className="text-3xl text-emerald-500 tracking-tight">ISHA</span>
                 <span className="text-3xl text-slate-900 tracking-tight ml-1.5">ECO</span>
                 <span className="text-3xl text-orange-500 tracking-tight ml-2">SOLUTIONS</span>
             </div>
           </div>
           <p className="font-medium text-sm">Engineering a Zero-Waste Future.</p>
           <div className="flex items-center gap-3 text-sm font-bold"><MapPin size={18} className="text-orange-500" /> Hyderabad, India.</div>
        </div>
      </footer>

    </main>
  );
}