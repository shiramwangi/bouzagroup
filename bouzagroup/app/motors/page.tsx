"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { 
  CarFront, 
  Settings, 
  Gauge, 
  Briefcase, 
  ArrowRight,
  ArrowUpRight,
  Car
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MOTORS_SERVICES = [
  {
    title: "Vehicle Dealerships",
    description: "Premium showrooms delivering high-end passenger and commercial vehicles. A seamless, luxury acquisition experience from consultation to handover.",
    Icon: CarFront,
  },
  {
    title: "OEM Spare Parts",
    description: "Certified component distribution network. We guarantee the authenticity and immediate availability of critical parts to keep your vehicles on the road.",
    Icon: Settings,
  },
  {
    title: "High-Performance Logistics",
    description: "Specialized automotive transport. Secure, climate-controlled, and high-velocity transit for luxury, operational, and institutional vehicles.",
    Icon: Gauge,
  },
  {
    title: "Institutional Fleet Management",
    description: "End-to-end lifecycle management for corporate and government fleets. Precision maintenance, deployment, and rotation at scale.",
    Icon: Briefcase,
  },
];

export default function MotorsPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroGridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Page Entrance Animations
  useEffect(() => {
    if (!pageRef.current || !heroTextRef.current || !heroGridRef.current) return;

    // Staggered text reveal
    const texts = heroTextRef.current.querySelectorAll("[data-animate-text]");
    gsap.fromTo(
      texts,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.1,
      }
    );

    // Grid stagger reveal mimicking a showroom light-up
    const gridItems = heroGridRef.current.querySelectorAll(".motors-grid-item");
    gsap.fromTo(
      gridItems,
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        delay: 0.3,
      }
    );
  }, []);

  // GSAP Kinetic Hover Physics for Automotive Cards
  const handleCardEnter = (index: number) => {
    const card = cardRefs.current[index];
    const icon = iconRefs.current[index];
    if (!card || !icon) return;
    
    gsap.to(card, {
      y: -6,
      borderColor: "rgba(245, 177, 26, 0.4)", // #F5B11A (Yellow) at 40%
      boxShadow: "0 16px 32px -8px rgba(23, 48, 109, 0.12)", // Deep Navy subtle shadow
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(icon, {
      scale: 1.15,
      color: "#F5B11A", // Shift icon to yellow
      duration: 0.4,
      ease: "back.out(1.7)", // Slight mechanical snap effect
    });
  };

  const handleCardLeave = (index: number) => {
    const card = cardRefs.current[index];
    const icon = iconRefs.current[index];
    if (!card || !icon) return;
    
    gsap.to(card, {
      y: 0,
      borderColor: "rgba(23, 48, 109, 0.1)", // #17306D at 10%
      boxShadow: "0 4px 6px -1px rgba(23, 48, 109, 0.05)",
      duration: 0.3,
      ease: "power2.in",
    });

    gsap.to(icon, {
      scale: 1,
      color: "#17306D", // Revert to navy
      duration: 0.3,
      ease: "power2.in",
    });
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-white text-[#17306D] antialiased pt-20">
      <Navbar />

      <main>
        {/* ===================== SHOWROOM HERO ===================== */}
        <section className="relative overflow-hidden bg-white px-6 py-20 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              
              {/* Left: Velocity Typography */}
              <div ref={heroTextRef} className="flex-1 w-full relative z-10">
                <div data-animate-text className="flex items-center gap-4 mb-8">
                  <span className="flex h-px w-8 bg-[#F5B11A]"></span>
                  <p className="text-sm font-medium uppercase tracking-widest text-[#F5B11A]">
                    Automotive & Fleet
                  </p>
                </div>
                
                <h1 data-animate-text className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-widest text-[#17306D] leading-[1.05] mb-8">
                  BOUZA<br />MOTORS
                </h1>
                
                <p data-animate-text className="text-lg font-normal text-[#17306D]/75 leading-relaxed max-w-lg mb-10">
                  Vehicle dealerships and a precision parts distribution network keeping fleets and households on the road. We engineer mobility experiences defined by quality and uncompromising support.
                </p>

                <div data-animate-text className="flex flex-wrap items-center gap-6">
                  <Link
                    href="/motors/showrooms"
                    className="inline-flex items-center gap-2 rounded-full bg-[#17306D] px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#F5B11A] hover:text-[#17306D]"
                  >
                    Explore Showrooms
                  </Link>
                  <Link
                    href="#capabilities"
                    className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-[#17306D] transition-colors hover:text-[#F5B11A]"
                  >
                    Our Capabilities <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Right: Showroom Abstract Grid */}
              <div ref={heroGridRef} className="flex-1 w-full">
                <div className="grid grid-cols-2 grid-rows-3 gap-4 h-[500px] lg:h-[600px]">
                  {/* Main Display Pane (Large) */}
                  <div className="motors-grid-item row-span-2 col-span-2 lg:col-span-1 relative rounded-2xl overflow-hidden bg-slate-50 border border-[#17306D]/10 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#17306D]/5 to-transparent flex flex-col items-center justify-center p-8 transition-transform duration-700 group-hover:scale-105">
                       <Car size={64} strokeWidth={1} className="text-[#17306D]/30 mb-4" />
                       <div className="w-16 h-px bg-[#F5B11A]/50"></div>
                    </div>
                  </div>
                  {/* Detail Pane 1 (Top Right) */}
                  <div className="motors-grid-item relative rounded-2xl overflow-hidden bg-[#17306D] flex flex-col justify-end p-6 border border-white/5">
                    <p className="text-[#F5B11A] text-xs font-medium uppercase tracking-widest opacity-90 mb-1">Network</p>
                    <p className="text-white text-lg font-medium">OEM Parts Active</p>
                  </div>
                  {/* Detail Pane 2 (Middle Right) */}
                  <div className="motors-grid-item relative rounded-2xl overflow-hidden bg-slate-100 border border-[#17306D]/10 flex items-center justify-center p-6">
                    <Gauge size={40} strokeWidth={1.5} className="text-[#17306D]/40" />
                  </div>
                  {/* Detail Pane 3 (Bottom Full Width) */}
                  <div className="motors-grid-item col-span-2 relative rounded-2xl overflow-hidden bg-[#F5B11A] flex items-center justify-between p-6 lg:px-8 border border-white/20">
                    <span className="text-[#17306D] font-medium tracking-wide">Fleet Operations Live</span>
                    <div className="h-2 w-2 rounded-full bg-[#17306D] animate-pulse"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== THE CAPABILITIES GRID ===================== */}
        <section id="capabilities" className="bg-slate-50 py-24 lg:py-32 border-t border-[#17306D]/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#F5B11A] mb-4">
                  Core Pillars
                </p>
                <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-[#17306D]">
                  Automotive excellence driven by precision infrastructure.
                </h2>
              </div>
            </div>

            {/* Matrix Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {MOTORS_SERVICES.map((service, index) => {
                const Icon = service.Icon;
                return (
                  <div
                    key={service.title}
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    onMouseEnter={() => handleCardEnter(index)}
                    onMouseLeave={() => handleCardLeave(index)}
                    className="relative cursor-pointer flex flex-col rounded-3xl bg-white p-8 lg:p-10 border border-[#17306D]/10 shadow-[0_4px_6px_-1px_rgba(23,48,109,0.05)]"
                  >
                    <div className="flex items-center justify-between mb-10">
                      <span 
                        ref={(el) => {
                          iconRefs.current[index] = el;
                        }}
                        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-[#17306D] border border-[#17306D]/5"
                      >
                        <Icon size={24} strokeWidth={1.5} />
                      </span>
                      <span className="text-sm font-medium tracking-widest text-[#17306D]/20">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-medium tracking-tight text-[#17306D] mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-base font-normal leading-relaxed text-[#17306D]/70 mb-8 max-w-md flex-1">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-medium text-[#17306D] transition-colors duration-300">
                      View Service
                      <ArrowUpRight size={16} className="text-[#17306D]/40" />
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ===================== SECURE CONTACT STRIP ===================== */}
        <section className="bg-white py-24 border-t border-[#17306D]/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
            <h2 className="text-3xl font-medium tracking-tight text-[#17306D] mb-6">
              Accelerate Your Mobility
            </h2>
            <p className="text-base font-normal text-[#17306D]/70 max-w-2xl mx-auto mb-10">
              Whether you are acquiring a single luxury vehicle or looking to overhaul an entire institutional fleet, our specialists are ready to architect your solution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#17306D]/20 px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-[#17306D] transition-colors hover:border-[#F5B11A] hover:bg-[#F5B11A] hover:text-[#17306D]"
            >
              Consult the Motors Team
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}