"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { 
  BarChart4, 
  ShieldCheck, 
  Truck, 
  Briefcase, 
  Building2, 
  Scale, 
  Wrench, 
  Landmark,
  ChevronDown,
  Plus,
  Minus,
  Mail
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mapped directly from the provided NICE Classification document
const WHEEL_ITEMS = [
  { label: "Fleet & Route Optimization", Icon: Truck, classRef: "Class 12 / 39" },
  { label: "Tactical Procurement", Icon: ShieldCheck, classRef: "Class 13" },
  { label: "Security & Protection", Icon: Briefcase, classRef: "Class 45" },
  { label: "Asset Financing & Insurance", Icon: Landmark, classRef: "Class 36" },
  { label: "Infrastructure & Repair", Icon: Wrench, classRef: "Class 37" },
  { label: "Enterprise Administration", Icon: Building2, classRef: "Class 35" },
  { label: "Global Supply Chain", Icon: BarChart4, classRef: "Class 39" },
  { label: "Legal & Compliance Audits", Icon: Scale, classRef: "Class 45" },
];

const SOLUTIONS = [
  {
    title: "Defense Strategy Consulting",
    description: "Understand where your tactical capabilities stand, and where you can go. We analyze procurement protocols, uncover security gaps, and define operational strategies.",
    image: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=800&q=80",
    linkText: "Learn your operational options",
    accent: "text-[#EB2027]",
  },
  {
    title: "Logistics & Customs Consulting",
    description: "Simplify your cross-border transit. Our consultants guide you in selecting the right freight routes, planning infrastructure, and seamlessly integrating global networks.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c70c0c?auto=format&fit=crop&w=800&q=80",
    linkText: "Start your freight strategy",
    accent: "text-[#0640CE]",
  },
  {
    title: "Fleet & Mobility Services",
    description: "From fleet setup to cost control, we help you reduce complexity and drive performance. Enhance transparency and implement cost-efficient strategies across your entire fleet.",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80",
    linkText: "See how we support your fleet",
    accent: "text-[#F5B11A]",
  }
];

const STEPS = [
  {
    number: "1",
    title: "Analysis & Diagnostics",
    content: "Get a clear view of your operational status quo. We assess your supply chains, fleet usage patterns, compliance gaps, and security risks — creating the strict foundation for strategic optimization.",
  },
  {
    number: "2",
    title: "Strategic Implementation",
    content: "We don't just provide a report; we integrate the solutions. Our specialists work directly with your teams to roll out new hardware, establish compliance protocols, and optimize routing.",
  },
  {
    number: "3",
    title: "Daily Operations Support",
    content: "Transitioning to a new operational standard requires oversight. We provide ongoing administrative and technical support to ensure zero downtime during the shift.",
  },
  {
    number: "4",
    title: "Evaluation & Optimization",
    content: "Continuous improvement is a core Bouza standard. We conduct quarterly reviews to measure ROI, assess new threat vectors, and refine cost structures for sustained long-term impact.",
  }
];

export default function ConsultingPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [hoveredWheelIndex, setHoveredWheelIndex] = useState<number | null>(null);
  const [openStep, setOpenStep] = useState<number | null>(0); // First accordion open by default

  useEffect(() => {
    if (!pageRef.current) return;
    const sections = pageRef.current.querySelectorAll("[data-animate]");
    
    gsap.fromTo(
      sections,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.2,
      }
    );
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-[#17306D] text-white antialiased pt-20">
      <Navbar />

      <main>
        {/* ===================== HERO SECTION ===================== */}
        <section className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-32 text-center" data-animate>
          <h1 className="text-4xl font-medium leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl mb-8">
            Bouza Consulting – your partner in operational optimization
          </h1>
          <p className="text-lg font-normal text-white/70 leading-relaxed max-w-4xl mx-auto mb-6">
            Managing a global enterprise means dealing with constant transformation — from regulatory shifts and border controls to the demand for superior tactical and logistical infrastructure. With Bouza Consulting, you gain more than insights: you get a tactical sparring partner who brings clarity, strategic guidance, and a fresh perspective to your most critical decisions.
          </p>
          <p className="text-lg font-normal text-white/70 leading-relaxed max-w-4xl mx-auto">
            We analyze your current setup, uncover potential for optimization, and develop actionable strategies — based on raw data, proven expertise, and your long-term goals.
          </p>
        </section>

        {/* ===================== THE INTERACTIVE WHEEL ===================== */}
        <section className="relative overflow-hidden py-24 lg:py-32 bg-[#263D86]/30 border-y border-white/5" data-animate>
          <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col items-center">
            
            <h2 className="text-2xl font-medium tracking-widest uppercase text-white/40 mb-20 text-center">
              Our Advisory Matrix
            </h2>

            {/* Wheel Container */}
            <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">
              
              {/* Center Hub */}
              <div className="relative z-20 flex flex-col items-center justify-center w-48 h-48 rounded-full bg-[#17306D] border border-white/10 shadow-[0_0_40px_rgba(23,48,109,0.8)] z-10">
                <Image src="/bouza.png" alt="Bouza Group" width={100} height={30} className="w-auto h-6 object-contain mb-2 brightness-0 invert" />
                <span className="text-sm font-medium tracking-widest text-[#F5B11A]">CONSULTING</span>
              </div>

              {/* Orbiting Nodes */}
              {WHEEL_ITEMS.map((item, i) => {
                // Calculate position on the circle
                const angle = (i / WHEEL_ITEMS.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 220; // Distance from center
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                const isHovered = hoveredWheelIndex === i;
                const isDimmed = hoveredWheelIndex !== null && hoveredWheelIndex !== i;
                const Icon = item.Icon;

                return (
                  <div
                    key={item.label}
                    onMouseEnter={() => setHoveredWheelIndex(i)}
                    onMouseLeave={() => setHoveredWheelIndex(null)}
                    className={`absolute z-30 flex flex-col items-center justify-center w-36 transition-all duration-500 cursor-pointer
                      ${isHovered ? "scale-110 opacity-100 z-40" : "scale-100"}
                      ${isDimmed ? "opacity-20 blur-[3px]" : "opacity-100"}
                    `}
                    style={{
                      transform: `translate(${x}px, ${y}px) ${isHovered ? 'scale(1.15)' : 'scale(1)'}`,
                    }}
                  >
                    <div className={`flex items-center justify-center w-14 h-14 rounded-full mb-3 transition-colors duration-500 border
                      ${isHovered ? "bg-[#F5B11A] border-[#F5B11A] text-[#17306D] shadow-[0_0_30px_rgba(245,177,26,0.4)]" : "bg-[#263D86] border-white/10 text-white"}
                    `}>
                      <Icon size={24} strokeWidth={isHovered ? 2 : 1.5} />
                    </div>
                    <span className={`text-center text-sm transition-colors duration-500 drop-shadow-md
                      ${isHovered ? "font-medium text-white" : "font-normal text-white/70"}
                    `}>
                      {item.label}
                    </span>
                    <span className={`text-[10px] uppercase tracking-widest transition-opacity duration-500 mt-1
                      ${isHovered ? "text-[#F5B11A] opacity-100" : "opacity-0"}
                    `}>
                      {item.classRef}
                    </span>
                  </div>
                );
              })}

              {/* Decorative Rings */}
              <div className="absolute inset-0 border border-white/5 rounded-full scale-[0.75] z-0 pointer-events-none"></div>
              <div className="absolute inset-0 border border-white/5 rounded-full scale-[1.05] z-0 pointer-events-none border-dashed"></div>
            </div>

          </div>
        </section>

        {/* ===================== SOLUTIONS THAT FIT ===================== */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32" data-animate>
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-[#F5B11A] mb-4">Consulting Services</p>
            <h2 className="text-3xl font-medium tracking-tight lg:text-4xl mb-6">
              Solutions that fit your enterprise
            </h2>
            <p className="text-base font-normal text-white/70 max-w-3xl mx-auto">
              Industry is changing — and with it, the way conglomerates are managed. From strict compliance directives to supply chain efficiency, every decision counts. With Bouza, you get consulting that adapts to your corporate goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SOLUTIONS.map((solution, i) => (
              <div key={i} className="flex flex-col rounded-3xl bg-[#263D86]/40 border border-white/10 overflow-hidden group">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src={solution.image} 
                    alt={solution.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-medium mb-4">{solution.title}</h3>
                  <p className="text-sm font-normal text-white/70 leading-relaxed flex-1 mb-8">
                    {solution.description}
                  </p>
                  <button className="self-start rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium transition-colors hover:bg-white hover:text-[#17306D]">
                    {solution.linkText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== STEP BY STEP ACCORDION ===================== */}
        <section className="bg-[#263D86]/20 py-24 lg:py-32 border-t border-white/5" data-animate>
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <div className="mb-16">
              <p className="text-sm font-medium uppercase tracking-widest text-[#F5B11A] mb-4">Your path to better operations</p>
              <h2 className="text-3xl font-medium tracking-tight lg:text-5xl leading-tight">
                Step by step: from calculation to action
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {STEPS.map((step, i) => {
                const isOpen = openStep === i;
                return (
                  <div 
                    key={step.number}
                    className={`rounded-2xl border transition-colors duration-300 overflow-hidden
                      ${isOpen ? "bg-[#263D86] border-white/20" : "bg-[#263D86]/40 border-white/5 hover:border-white/20"}
                    `}
                  >
                    <button 
                      onClick={() => setOpenStep(isOpen ? null : i)}
                      className="w-full flex items-center justify-between p-6 lg:p-8 text-left focus:outline-none"
                    >
                      <div className="flex items-center gap-6">
                        <span className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium transition-colors
                          ${isOpen ? "bg-[#F5B11A] text-[#17306D]" : "bg-[#17306D] text-white"}
                        `}>
                          {step.number}
                        </span>
                        <h3 className="text-xl lg:text-2xl font-medium">{step.title}</h3>
                      </div>
                      <div className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-[#F5B11A]" : "text-white/50"}`}>
                        {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                      </div>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out px-6 lg:px-8
                        ${isOpen ? "max-h-48 pb-8 opacity-100" : "max-h-0 opacity-0 pb-0"}
                      `}
                    >
                      <p className="text-base font-normal text-white/70 pl-16">
                        {step.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================== CONTACT STRIP ===================== */}
        <section className="py-24 lg:py-32" data-animate>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 className="text-4xl font-medium tracking-tight lg:text-5xl mb-16">
              Get in contact with us
            </h2>

            <div className="relative rounded-3xl lg:rounded-bl-[100px] lg:rounded-tr-[100px] bg-[#263D86] p-8 pt-32 lg:p-16 lg:pt-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 border border-white/10 shadow-2xl">
              
              <div className="absolute -top-20 lg:-top-16 lg:-left-4 w-56 h-64 lg:w-72 lg:h-80 flex-shrink-0 z-10">
                <div className="w-full h-full relative drop-shadow-2xl">
                  {/* Make sure you have a support.png with a transparent background in /public */}
                  <Image 
                    src="/support.png" 
                    alt="Consulting Expert" 
                    fill 
                    sizes="(max-width: 1024px) 14rem, 18rem"
                    className="object-contain object-bottom" 
                  />
                </div>
              </div>

              <div className="hidden lg:block lg:w-56 flex-shrink-0"></div>

              <div className="flex-1 relative z-20">
                <h3 className="text-2xl font-medium mb-4 text-white">
                  We are here to guide you
                </h3>
                <p className="text-base font-normal text-white/70 mb-8 max-w-xl">
                  Our dedicated consulting team is here to support you with personal advice, rigorous data analysis, and quick answers to your questions. Let&apos;s talk about your corporate challenges and how Bouza can solve them.
                </p>
                
                <div className="flex items-center gap-3 mb-8">
                  <Mail size={18} className="text-[#F5B11A]" />
                  <a href="mailto:consulting@bouzagroup.com" className="text-sm font-medium underline underline-offset-4 hover:text-[#F5B11A] transition-colors">
                    consulting@bouzagroup.com
                  </a>
                </div>

                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-[#EB2027] px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#F5B11A] hover:text-[#17306D]"
                >
                  Get in contact
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}