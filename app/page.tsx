"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Factory, Droplets, MapPin, Globe2, Phone, Mail, Leaf } from "lucide-react";
import Link from "next/link"; 

// --- GLOBAL BACKGROUND COMPONENT ---
const TechLinesBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#081017]">
    <div className="absolute inset-0 matrix-bg opacity-70" />
    <motion.div 
      animate={{ opacity: [0.1, 0.3, 0.1] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[15%] left-[-10%] w-[150vw] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent -rotate-12 blur-[1px]"
    />
    <motion.div 
      animate={{ opacity: [0.1, 0.2, 0.1] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute top-[65%] left-[-20%] w-[150vw] h-[2px] bg-gradient-to-r from-transparent via-orange-500/15 to-transparent -rotate-[15deg] blur-[2px]"
    />
    <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-500/5 blur-[150px] rounded-full" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-orange-500/5 blur-[150px] rounded-full" />
  </div>
);

// --- DATA ---
const heroWords = ["Waste Management", "Resource Recovery", "Zero-Waste Future"];

const servicesData = [
  { id: 0, title: "Advanced Dry Recycling", short: "Dry Recycling", desc: "Processing plastics, paper, glass, and metals into circular economy products.", video: "/video1.mp4" },
  { id: 1, title: "Organic Bioconversion", short: "Bioconversion", desc: "Food and yard waste transformation into nutrient-rich soil additives via BSFL.", video: "/Video2.mp4" },
  { id: 2, title: "Sanitary Landfilling", short: "Landfilling", desc: "Engineered disposal featuring advanced leachate collection to prevent groundwater contamination.", video: "/Video3.mp4" },
  { id: 3, title: "Waste-To-Energy (W-T-E)", short: "W-T-E", desc: "Converting non-recyclable municipal waste into clean heat and electricity.", video: "/Video4.mp4" },
  { id: 4, title: "Thermal Incineration", short: "Incineration", desc: "High-temperature treatment reducing waste volume by 99.7% and eliminating hazardous characteristics.", video: "/Video5.mp4" },
  { id: 5, title: "MBT Infrastructure", short: "MBT Plants", desc: "Mechanical & Biological Treatment combining physical sorting with biological stabilization.", video: "/Video6.mp4" },
];

const projectsData = [
  { 
    id: 0, 
    title: "Ramoji Film City", 
    desc: "A massive turnkey recovery facility processing municipal solid waste using automated sorting and integrated pathways.",
    workload: "2.5", metric: "Tons / Day", days: "Active", timeUnit: "Operation",
    video: "/ProjectVideo1.mp4"
  },
  { 
    id: 1, 
    title: "Tanjavoor Medical College", 
    desc: "Decentralized infrastructure utilizing MBT and BSFL units to achieve near-zero landfill waste.",
    workload: "Near", metric: "Zero Waste", days: "Active", timeUnit: "Operation",
    video: "/ProjectVideo2.mp4"
  }
];

const equipmentList = [
  { id: 1, name: "Trommel", image: "/Equipment1.png" },
  { id: 2, name: "WeighBridge", image: "/Equipment2.png" },
  { id: 3, name: "Shredder", image: "/Equipment3.png" },
  { id: 4, name: "Garden Shredder", image: "/Equipment4.png" },
  { id: 5, name: "Windrow Turner", image: "/Equipment5.png" },
  { id: 6, name: "Air blower", image: "/Equipment6.jpg" },
  { id: 7, name: "Leachate Treatment", image: "/Equipment7.jpg" },
  { id: 8, name: "Composting Plants", image: "/Equipment8.jpeg" },
  { id: 9, name: "Eco -Bean machine", image: "/Equipment9.jpg" },
  { id: 10, name: "Conveyer Belts", image: "/Equipment10.jpg" },
];

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % heroWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextService = () => setActiveService((p) => (p + 1) % servicesData.length);
  const prevService = () => setActiveService((p) => (p - 1 + servicesData.length) % servicesData.length);

  return (
    <main className="min-h-screen bg-[#081017] text-slate-200 font-sans selection:bg-emerald-500/30 selection:text-white antialiased overflow-x-hidden">
      <TechLinesBackground />

      {/* --- 1. NAVBAR (PREMIUM TEXT LOGO - NO IMAGES) --- */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center p-4 lg:py-4 lg:px-12 glass-nav">
        <div className="flex items-center gap-3 font-extrabold tracking-tighter text-white pt-1">
          
          <div className="hidden md:flex flex-row items-baseline gap-2 pt-1 font-extrabold">
            <span className="text-3xl text-emerald-400">ISHA</span>
            <span className="text-3xl text-white-400">ECO</span>
            <span className="text-3xl text-orange-400">SOLUTIONS</span>
          </div>
        </div>
        <div className="hidden lg:flex gap-10 text-sm font-bold capitalize tracking-wide text-slate-300">
          <a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a>
          <Link href="/process" className="hover:text-orange-400 transition-colors">Our Process</Link>
          <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
          <Link href="/portfolio" className="hover:text-emerald-400 transition-colors">Portfolio</Link>
          <a href="#equipment" className="hover:text-orange-400 transition-colors">Equipment</a>
        </div>
        <Link href="#contact">
          <button className="bg-emerald-500 text-slate-950 px-8 py-3 rounded-full text-sm font-extrabold hover:bg-white transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            Partner With Us
          </button>
        </Link>
      </nav>

      {/* --- 2. HERO SECTION --- */}
      <section className="relative w-full min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col lg:flex-row items-center justify-between relative z-10">
          <div className="w-full lg:w-[55%] z-20">
            <h1 className="text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-black tracking-tighter text-white leading-[0.95] mb-8">
              Transforming <br/>Liabilities <br/>
              <span className="text-emerald-400">To Value.</span>
            </h1>
            
            <div className="inline-flex items-center border border-white/10 rounded-full px-8 py-3 bg-white/5 backdrop-blur-md text-orange-400 font-bold text-xl h-[60px] overflow-hidden shadow-sm mb-10">
              <AnimatePresence mode="wait">
                <motion.span key={wordIndex} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -30, opacity: 0 }} transition={{ duration: 0.4 }}>
                  {heroWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <p className="text-slate-400 text-lg max-w-md font-medium leading-relaxed">
              We integrate industrial-grade hardware and biological innovation to redefine municipal waste infrastructure for a cleaner India.
            </p>
          </div>

          <div className="w-full lg:w-[45%] relative flex justify-center lg:justify-end mt-16 lg:mt-0">
            <motion.img 
              animate={{ y: [-15, 15, -15] }} 
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              src="/Sphere.png" 
              alt="Earth Tech Sphere" 
              className="w-[400px] md:w-[500px] lg:w-[700px] max-w-none object-contain drop-shadow-[0_20px_40px_rgba(16,185,129,0.15)] relative z-20"
            />
            
            <motion.div 
               animate={{ y: [10, -10, 10] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute top-10 right-0 lg:-right-10 z-30 bg-white/10 backdrop-blur-xl p-4 pr-6 rounded-2xl flex items-center gap-4 border border-white/10 shadow-2xl"
            >
               <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400">
                  <Globe2 size={24} />
               </div>
               <div>
                  <p className="text-white font-black text-sm">Zero-Waste Certified</p>
                  <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest">100% Sustainable</p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 3. ABOUT US --- */}
      <section id="about" className="relative py-24 overflow-hidden bg-transparent border-t border-white/5">
         <motion.img 
            initial={{ opacity: 0.05, x: 50 }}
            animate={{ opacity: [0.05, 0.1, 0.05], x: [50, 60, 50] }} 
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} 
            src="/transparent-equipment-details.png" 
            className="absolute -top-20 -right-20 w-[600px] h-[600px] object-contain grayscale opacity-20 pointer-events-none z-0" 
            alt="" 
         />
         <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative z-10">
               <p className="text-emerald-400 font-black uppercase tracking-[0.2em] text-sm mb-6 flex items-center gap-2">
                 Our Mission
               </p>
               <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
              
                  <span className="text-emerald-400">ISHA</span> <br/><span className="text-white-400">ECO</span><br/> <span className="text-orange-400">SOLUTIONS</span><br/> Engineering the <span className="text-emerald-400">Future</span> of <span className="text-orange-400">Waste.</span>
               </h2>
               
               <p className="text-lg text-slate-400 leading-relaxed mb-6 font-medium max-w-md">
                  Our mission is to transform and maintain zero-waste cities. That enhance the natural beauty of our planet through scalable engineering.<br/>
               </p>
               <p className="text-lg text-slate-400 leading-relaxed mb-10 font-medium max-w-md">
                 Liabilities to Assets. That is what we do.<br/>
               </p>
               
               <Link href="/process">
                  <button className="flex items-center justify-center gap-3 bg-white text-slate-950 px-10 py-4 rounded-full font-extrabold hover:bg-emerald-500 hover:text-white transition-all shadow-xl">
                    Discover Our Process <ArrowRight className="w-5 h-5" />
                  </button>
               </Link>
            </div>

            <div className="lg:col-span-7 space-y-12 py-10 relative z-10">
               <div className="flex gap-8 items-start relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0 border border-emerald-500/20"><ShieldCheck size={26}/></div>
                  <div>
                     <h4 className="text-2xl font-black text-white mb-2">Swachh Bharat Aligned</h4>
                     <p className="text-slate-400 text-lg leading-relaxed font-medium">Sustainable infrastructure built to strict national guidelines for urban health and environmental safety.</p>
                  </div>
               </div>
               <div className="w-full h-px bg-white/10 relative z-10" />
               <div className="flex gap-8 items-start relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0 border border-emerald-500/20"><Factory size={26}/></div>
                  <div>
                     <h4 className="text-2xl font-black text-white mb-2">Turnkey Deployment</h4>
                     <p className="text-slate-400 text-lg leading-relaxed font-medium">From conceptual design to heavy machinery installation, utilizing tech to minimize ecological footprints.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- 4. SERVICES CAROUSEL --- */}
      <section id="services" className="py-24 relative bg-[#050B10] border-y border-white/5 overflow-hidden shadow-inner">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-12 relative z-10">
           <p className="text-orange-400 font-black uppercase tracking-[0.2em] text-sm mb-4 flex items-center justify-center gap-2">
              <Globe2 size={16} /> Services
           </p>
           <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">Our <span className="text-orange-400">Core</span> <span className="text-emerald-400">Capacities</span></h2>
        </div>

        <div className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center max-w-[1200px] mx-auto mb-10 pointer-events-none">
          {servicesData.map((service, idx) => {
             let diff = idx - activeService;
             if (diff > servicesData.length / 2) diff -= servicesData.length;
             if (diff < -servicesData.length / 2) diff += servicesData.length;

             return (
               <motion.div
                 key={service.id}
                 animate={{
                   x: diff === 0 ? "0%" : diff === 1 ? "100%" : diff === -1 ? "-100%" : diff > 0 ? "200%" : "-200%",
                   scale: diff === 0 ? 1 : diff === 1 || diff === -1 ? 0.6 : 0.4,
                   opacity: diff === 0 ? 1 : diff === 1 || diff === -1 ? 0.4 : 0,
                   filter: diff === 0 ? "blur(0px)" : "blur(8px)",
                   zIndex: diff === 0 ? 30 : 20 - Math.abs(diff)
                 }}
                 transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                 className="absolute w-[200px] h-[200px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.2)] border-4 border-[#081017] pointer-events-auto cursor-pointer"
                 onClick={() => setActiveService(idx)}
               >
                  <video src={service.video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
               </motion.div>
             )
          })}
        </div>

        <div className="max-w-3xl mx-auto px-6 flex items-center justify-between gap-4">
          <button onClick={prevService} className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-white/5 text-slate-300 hover:bg-emerald-500 hover:text-slate-950 transition-colors border border-white/10"><ChevronLeft size={24}/></button>
          
          <div className="text-center flex-grow">
             <AnimatePresence mode="wait">
               <motion.div key={activeService} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} transition={{duration:0.3}}>
                 <h3 className="text-3xl md:text-4xl font-black text-white mb-4">{servicesData[activeService].title}</h3>
                 <p className="text-slate-400 md:text-lg font-medium leading-relaxed max-w-xl mx-auto">{servicesData[activeService].desc}</p>
               </motion.div>
             </AnimatePresence>
          </div>

          <button onClick={nextService} className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-white/5 text-slate-300 hover:bg-emerald-500 hover:text-slate-950 transition-colors border border-white/10"><ChevronRight size={24}/></button>
        </div>

        <div className="max-w-5xl mx-auto mt-12 flex flex-wrap justify-center items-center gap-2 md:gap-4 px-6 text-xs md:text-sm font-bold text-slate-500">
          {servicesData.map((s, i) => (
             <button 
                key={i} 
                onClick={() => setActiveService(i)} 
                className={`px-5 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${activeService === i ? 'bg-white/10 border border-emerald-400/50 text-emerald-400 shadow-sm' : 'hover:text-white'}`}
             >
               {activeService === i && <Leaf size={14} className="text-emerald-400" />}
               {s.short}
             </button>
          ))}
        </div>
      </section>

      {/* --- 5. CURRENT PROJECTS --- */}
      <section id="projects" className="pt-24 pb-16 px-6 lg:px-12 bg-transparent border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto text-center mb-16">
           <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">Our Current <span className="text-emerald-400">Projects</span></h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projectsData.map((project, idx) => (
             <motion.div key={idx} whileHover={{ y: -10 }} className="clay-card flex flex-col gap-8 relative group overflow-hidden">
               <div className="w-full h-80 rounded-[2rem] overflow-hidden shadow-2xl relative">
                  <video 
                     src={project.video} 
                     autoPlay 
                     loop 
                     muted 
                     playsInline
                     className="absolute inset-0 w-full h-full object-cover opacity-90 scale-100 group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081017]/95 via-[#081017]/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full">
                     <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 uppercase leading-tight tracking-tighter">{project.title}</h3>
                     <p className="text-slate-200 leading-relaxed mb-8 text-lg font-medium max-w-lg line-clamp-2">{project.desc}</p>
                     
                     <div className="grid grid-cols-2 gap-8 max-w-sm">
                        <div>
                           <p className="text-4xl lg:text-5xl font-black text-emerald-400 mb-2 tracking-tighter">{project.workload}</p>
                           <p className="text-xs font-black text-orange-400 uppercase tracking-widest">{project.metric}</p>
                        </div>
                        <div>
                           <p className="text-4xl lg:text-5xl font-black text-emerald-400 mb-2 tracking-tighter">{project.days}</p>
                           <p className="text-xs font-black text-orange-400 uppercase tracking-widest">{project.timeUnit}</p>
                        </div>
                     </div>
                  </div>
               </div>
             </motion.div>
          ))}
        </div>

        {/* Removed the large gap below this section */}
        <div className="max-w-7xl mx-auto mt-16 text-center">
            <Link href="/portfolio">
                <button className="inline-flex items-center gap-3 font-black text-orange-400 hover:text-white transition-all uppercase tracking-widest text-lg bg-white/5 backdrop-blur-md px-10 py-5 rounded-full shadow-sm border border-white/10 hover:border-orange-400/50">
                    Explore Full Portfolio <ArrowRight size={24}/>
                </button>
            </Link>
        </div>
      </section>

      {/* --- 6. ENVIRONMENTAL INFRASTRUCTURE (GAP FIXED, HEADINGS VISIBLE, LARGE IMAGES) --- */}
      <section id="equipment" className="pt-16 pb-24 px-6 lg:px-12 bg-[#050B10] border-t border-white/5 shadow-inner relative z-20">
         <div className="max-w-7xl mx-auto mb-16 text-center">
             <p className="text-orange-400 font-black uppercase tracking-[0.2em] text-sm mb-4 flex items-center justify-center gap-2">
                <ShieldCheck size={16} /> fleet
             </p>
             <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">Certified <span className="text-emerald-400">Equipment</span></h2>
             <p className="text-slate-400 text-lg leading-relaxed font-medium max-w-xl mx-auto mb-16">
                 Scalable and modular industrial-grade hardware, custom-engineered for city-wide resource recovery. Certified equipment that every waste management company uses.
             </p>
         </div>
         
         {/* Enlarged Grid: 3 columns on large screens to display big equipment images */}
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {equipmentList.map((item, idx) => (
              <motion.div key={idx} whileHover={{ y: -10 }} className="clay-card relative overflow-hidden group cursor-pointer h-80 md:h-96 w-full rounded-[2rem]">
                 {/* Full Image Container */}
                 <img src={item.image} alt={item.name} className="w-full h-full object-cover md:object-contain p-8 scale-100 group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                 
                 <div className="absolute inset-0 bg-gradient-to-t from-[#081017]/95 via-[#081017]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 
                 {/* Pop-up name label on hover */}
                 <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white font-black text-center text-2xl md:text-3xl uppercase tracking-tight drop-shadow-xl">{item.name}</p>
                 </div>
              </motion.div>
            ))}
         </div>
         
         <div className="max-w-7xl mx-auto mt-16 text-center">
             <Link href="#contact" className="inline-flex items-center gap-2 font-black text-emerald-400 hover:gap-4 transition-all uppercase tracking-widest text-sm bg-white/5 px-6 py-3 rounded-full shadow-sm border border-white/10">Request Tech Specs <ArrowRight size={20}/></Link>
         </div>
      </section>

      {/* --- 7. PARTNER WITH US (REFINED FORM & VIDEO PLACEHOLDER) --- */}
      <section id="contact" className="py-24 px-6 lg:px-12 bg-transparent border-t border-white/5 relative z-10 overflow-hidden">
          <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none -z-10" />
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              {/* Left Column: Form and Headers */}
              <div className="flex-grow max-w-xl">
                  <p className="text-orange-400 font-black uppercase tracking-[0.2em] text-sm mb-6 flex items-center gap-2">
                    PHASE 01: Inspect & Analyze
                  </p>
                  <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-8 leading-tight">Discuss your Turnkey proposal <span className="text-emerald-400">today.</span></h3>
                  <p className="text-slate-400 leading-relaxed mb-10 text-lg font-medium">Schedule a deep-dive waste stream audit and technical consultation to define your specific infrastructure requirements.</p>
                  
                  <form className="space-y-6">
                    <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-slate-200 placeholder:text-slate-600 focus:border-emerald-500 transition-colors" />
                    <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-slate-200 placeholder:text-slate-600 focus:border-emerald-500 transition-colors" />
                    <input type="text" placeholder="TPD Workload (e.g., 5 Tons / Day)" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-slate-200 placeholder:text-slate-600 focus:border-emerald-500 transition-colors" />
                    <textarea placeholder="Tell us about your project location and goals..." rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-slate-200 placeholder:text-slate-600 focus:border-emerald-500 transition-colors" />
                    <button type="submit" className="flex items-center justify-center gap-3 bg-emerald-500 text-slate-950 px-10 py-5 rounded-full font-extrabold text-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] w-full">
                        Schedule Audit Proposal <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
              </div>

              {/* Right Column: Contact Details & Media Placeholder */}
              <div className="flex flex-col gap-10">
                 <div className="w-full p-10 rounded-[2rem] bg-white/5 text-slate-300 font-bold flex flex-col gap-8 shadow-inner border border-white/10 relative overflow-hidden backdrop-blur-xl">
                    <div className="absolute inset-0 matrix-bg opacity-30" />
                    <p className="text-emerald-400 uppercase tracking-[0.2em] text-xs mb-2 flex items-center gap-2 relative z-10">
                       Direct Contact
                    </p>
                    <a href="tel:9334234567" className="flex items-center gap-4 text-white text-3xl font-black hover:text-emerald-400 transition-colors relative z-10">
                       <Phone size={32} className="text-orange-400"/>
                       9334234567
                    </a>
                    <a href="mailto:PROJECTS.ISHAECO@GMAIL.COM" className="flex items-center gap-4 text-emerald-400 text-lg md:text-xl font-bold hover:text-white transition-colors relative z-10">
                       <Mail size={24} className="text-slate-500"/>
                       PROJECTS.ISHAECO@GMAIL.COM
                    </a>
                 </div>

                 {/* Eco-Bean Animation Placeholder */}
                 <motion.div animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 6, repeat: Infinity }} className="w-full h-80 rounded-[2rem] overflow-hidden shadow-2xl relative group border-2 border-orange-500/30">
                     <video src="/EcoBeanAnimation.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#081017]/90 via-[#081017]/40 to-transparent flex flex-col items-center justify-center p-8">
                        <Leaf size={48} className="text-orange-400 mb-4"/>
                        <p className="text-white font-black text-xl lg:text-2xl text-center uppercase tracking-wider drop-shadow-lg">ECO-BEAN PROCESS</p>
                        <p className="text-slate-300 text-sm mt-1">Transforming Liabilities into Resource.</p>
                     </div>
                 </motion.div>
              </div>

          </div>
      </section>

      {/* --- 8. FOOTER (PREMIUM TEXT LOGO) --- */}
      <footer className="py-20 px-6 lg:px-12 bg-[#03080C] text-slate-500 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center">
             <div className="flex flex-row items-baseline font-black">
                 <span className="text-3xl text-emerald-400"> ISHA</span><br/>
                 <br/><span className="text-3xl text-white-400"> ECO</span>
                 <span className="text-3xl text-orange-400"> SOLUTIONS</span>
             </div>
           </div>
           <p className="font-medium text-sm">© 2026 ISHA ECO SOLUTIONS. Engineering a Zero-Waste Future.</p>
           <div className="flex items-center gap-3 text-sm font-bold"><MapPin size={18} className="text-orange-400" /> Hyderabad, India.</div>
        </div>
      </footer>
    </main>
  );
}