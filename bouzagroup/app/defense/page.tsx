"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { 
  Target, 
  ShieldAlert, 
  GlobeLock, 
  FileLock2, 
  ArrowRight,
  ArrowUpRight,
  Crosshair
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DEFENSE_SERVICES = [
  {
    title: "Strategic Munitions Supply",
    description: "Reliable, high-volume procurement and secure transport of standard and specialized munitions. Engineered for zero-fail operational readiness.",
    Icon: Target,
  },
  {
    title: "Tactical Systems",
    description: "Integration of advanced tactical hardware and specialized operational gear. Equipping modern forces with uncompromised field superiority.",
    Icon: ShieldAlert,
  },
  {
    title: "Sovereign Logistics",
    description: "End-to-end classified supply chain management. Delivering critical materiel across borders with absolute operational security and discretion.",
    Icon: GlobeLock,
  },
  {
    title: "Procurement & ITAR Compliance",
    description: "Navigating complex defense regulations. Our compliance architects ensure every transfer meets stringent international and ITAR directives.",
    Icon: FileLock2,
  },
];

export default function DefensePage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroGridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    // Grid stagger reveal
    const gridItems = heroGridRef.current.querySelectorAll(".defense-grid-item");
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

  // GSAP Hover Micro-physics for Service Cards
  const handleCardEnter = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    
    gsap.to(card, {
      y: -4,
      borderColor: "rgba(235, 32, 39, 0.4)", // #EB2027 at 40%
      boxShadow: "0 12px 24px -8px rgba(23, 48, 109, 0.15)", // Subtle Navy Shadow
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleCardLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    
    gsap.to(card, {
      y: 0,
      borderColor: "rgba(23, 48, 109, 0.1)", // #17306D at 10%
      boxShadow: "0 4px 6px -1px rgba(23, 48, 109, 0.05)",
      duration: 0.3,
      ease: "power2.in",
    });
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-white text-[#17306D] antialiased pt-20">
      <Navbar />

      <main>
        {/* ===================== EDITORIAL HERO ===================== */}
        <section className="relative overflow-hidden bg-white px-6 py-20 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              
              {/* Left: Tactical Typography */}
              <div ref={heroTextRef} className="flex-1 w-full relative z-10">
                <div data-animate-text className="flex items-center gap-4 mb-8">
                  <span className="flex h-px w-8 bg-[#EB2027]"></span>
                  <p className="text-sm font-medium uppercase tracking-widest text-[#EB2027]">
                    Security & Infrastructure
                  </p>
                </div>
                
                <h1 data-animate-text className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#17306D] leading-[1.05] mb-8">
                  BOUZA<br />DEFENSE
                </h1>
                
                <p data-animate-text className="text-lg font-normal text-[#17306D]/75 leading-relaxed max-w-lg mb-10">
                  Manufacturing and supply of arms, ammunition, and defense materiel built to exacting standards of reliability. We provision sovereign forces and security contractors with uncompromising precision.
                </p>

                <div data-animate-text className="flex flex-wrap items-center gap-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#17306D] px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#EB2027]"
                  >
                    Engage Procurement
                  </Link>
                  <Link
                    href="#services"
                    className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-[#17306D] transition-colors hover:text-[#EB2027]"
                  >
                    View Capabilities <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Right: Defense Grid Structure */}
              <div ref={heroGridRef} className="flex-1 w-full">
                <div className="grid grid-cols-2 gap-4 h-[500px] lg:h-[600px]">
                  {/* Grid Item 1 (Tall) */}
                  <div className="defense-grid-item row-span-2 relative rounded-2xl overflow-hidden bg-slate-100 border border-[#17306D]/10">
                    <div className="absolute inset-0 bg-[#17306D]/5 flex items-center justify-center">
                       <Crosshair size={48} strokeWidth={1} className="text-[#17306D]/20" />
                    </div>
                  </div>
                  {/* Grid Item 2 (Square) */}
                  <div className="defense-grid-item relative rounded-2xl overflow-hidden bg-[#17306D] border border-white/10 flex flex-col justify-end p-6">
                    <p className="text-white text-xs font-medium uppercase tracking-widest opacity-70 mb-1">Status</p>
                    <p className="text-white text-lg font-medium">Operational Readiness</p>
                    <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-[#EB2027] animate-pulse"></div>
                  </div>
                  {/* Grid Item 3 (Square - Red Accent) */}
                  <div className="defense-grid-item relative rounded-2xl overflow-hidden bg-[#EB2027] border border-white/10 flex items-center justify-center p-6">
                    <ShieldAlert size={48} strokeWidth={1} className="text-white/30" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== THE SERVICES MATRIX ===================== */}
        <section id="services" className="bg-slate-50 py-24 lg:py-32 border-t border-[#17306D]/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#EB2027] mb-4">
                  Core Capabilities
                </p>
                <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-[#17306D]">
                  Tactical infrastructure for high-stakes environments.
                </h2>
              </div>
            </div>

            {/* Services Matrix Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {DEFENSE_SERVICES.map((service, index) => {
                const Icon = service.Icon;
                return (
                  <div
                    key={service.title}
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    onMouseEnter={() => handleCardEnter(index)}
                    onMouseLeave={() => handleCardLeave(index)}
                    className="group relative cursor-pointer flex flex-col rounded-3xl bg-white p-8 lg:p-10 border border-[#17306D]/10 shadow-[0_4px_6px_-1px_rgba(23,48,109,0.05)]"
                  >
                    <div className="flex items-center justify-between mb-10">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-[#17306D] transition-colors duration-300 group-hover:bg-[#EB2027] group-hover:text-white border border-[#17306D]/5">
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

                    <div className="flex items-center gap-2 text-sm font-medium text-[#17306D] transition-colors duration-300 group-hover:text-[#EB2027]">
                      Explore Protocol
                      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
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
              Initiate Secure Dialogue
            </h2>
            <p className="text-base font-normal text-[#17306D]/70 max-w-2xl mx-auto mb-10">
              For security and compliance purposes, initial communications regarding defense materiel and procurement are heavily vetted. Contact our specialists to begin the compliance onboarding phase.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#17306D]/20 px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-[#17306D] transition-colors hover:border-[#EB2027] hover:bg-[#EB2027] hover:text-white"
            >
              Contact Clearance Team
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}