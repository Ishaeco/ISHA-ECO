"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Leaf, ArrowLeft, Search, PencilRuler, Hammer, Globe2, MapPin } from "lucide-react";
import Link from "next/link";

// --- DATA: The 4-Step Journey ---
const processSteps = [
  {
    id: 1,
    title: "Inspect & Analyze",
    subtitle: "The Environmental Audit",
    desc: "We begin by conducting a deep-dive analysis of your current waste streams, geographic constraints, and municipal pain points. We don't just look at the garbage; we look at the ecosystem.",
    icon: <Search className="w-6 h-6 text-emerald-400" />,
    img: "/Clay1.png",
    align: "left"
  },
  {
    id: 2,
    title: "Tailor the Solution",
    subtitle: "Engineering the Blueprint",
    desc: "There is no copy-paste in zero-waste. Based on our audit, we custom-engineer a facility blueprint integrating our CDMA machinery, ECO-BEAN thermal units, and BSFL biological pathways.",
    icon: <PencilRuler className="w-6 h-6 text-emerald-400" />,
    img: "/Clay2.png",
    align: "right"
  },
  {
    id: 3,
    title: "Implement & Deploy",
    subtitle: "Boots on the Ground",
    desc: "Our engineering teams deploy the turnkey infrastructure. We handle the heavy lifting, machinery installation, and system calibration to ensure Swachh Bharat compliance from day one.",
    icon: <Hammer className="w-6 h-6 text-emerald-400" />,
    img: "/ClayBuilding.png",
    align: "left"
  },
  {
    id: 4,
    title: "The End Goal: Zero Waste",
    subtitle: "Sustainable Ecosystem",
    desc: "The facility goes live. Liabilities are transformed into clean energy, premium organic manure, and recovered recyclables. We provide 24/7 support to maintain the loop.",
    icon: <Globe2 className="w-6 h-6 text-emerald-400" />,
    img: "/ClayEarth.png",
    align: "right"
  }
];

export default function ProcessPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className="min-h-screen bg-[#081017] text-slate-200 font-sans selection:bg-emerald-600 selection:text-white overflow-hidden">
      
      {/* --- NAVBAR (Dark Background for White Text Visibility) --- */}
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

      {/* --- HERO --- */}
      <section className="pt-40 pb-20 px-6 text-center relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-[#081017]/0 to-[#081017] pointer-events-none -z-10" />
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
          The Journey to <span className="text-emerald-400">Zero Waste</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
          Discover how we transform complex environmental liabilities into clean, sustainable ecosystems through our 4-step engineering process.
        </p>
      </section>

      {/* --- THE TIMELINE ROADMAP --- */}
      <section ref={containerRef} className="relative w-full max-w-7xl mx-auto px-6 py-20">
        
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 rounded-full -translate-x-1/2">
          <motion.div 
            style={{ height: lineHeight }} 
            className="w-full bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)]"
          />
        </div>

        <div className="flex flex-col gap-32 relative z-10">
          {processSteps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`flex flex-col ${step.align === "left" ? "md:flex-row" : "md:flex-row-reverse"} items-center justify-between gap-12 md:gap-20`}
            >
              
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative group flex justify-center items-center w-full">
                   <div className="absolute inset-10 bg-emerald-500/20 blur-[80px] rounded-full group-hover:bg-emerald-500/30 transition-colors duration-500" />
                   
                   <img 
                     src={step.img} 
                     alt={step.title} 
                     className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] object-contain relative z-10 drop-shadow-[0_40px_50px_rgba(0,0,0,0.6)] group-hover:-translate-y-6 transition-transform duration-700"
                   />
                </div>
              </div>

              <div className={`w-full md:w-1/2 flex flex-col ${step.align === "left" ? "md:text-left md:items-start" : "md:text-right md:items-end"} text-center items-center`}>
                
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-[#081017] border-4 border-emerald-500 rounded-full items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)] z-20">
                  {step.icon}
                </div>

                <p className="text-emerald-400 font-extrabold uppercase tracking-widest text-xs mb-3">Phase 0{step.id} • {step.subtitle}</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">{step.title}</h2>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-xl max-w-lg">
                   <p className="text-slate-300 text-lg leading-relaxed">{step.desc}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-32 text-center relative z-10 border-t border-white/5 mt-20">
         <h2 className="text-4xl font-extrabold text-white mb-8">Ready to begin Phase 01?</h2>
         <Link href="/#contact">
           <button className="bg-emerald-500 text-slate-950 px-10 py-4 rounded-full font-extrabold text-lg hover:bg-white transition-all shadow-xl shadow-emerald-500/20">
              Schedule The Audit
           </button>
         </Link>
      </section>

      {/* --- FOOTER (Added missing footer, Dark ECO text, Removed Date) --- */}
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