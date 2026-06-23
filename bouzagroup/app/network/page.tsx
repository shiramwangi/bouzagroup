"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { 
  Globe, 
  Shield, 
  Briefcase, 
  Anchor,
  ArrowRight,
  Lock
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ENGAGEMENTS = [
  {
    id: "01",
    title: "Tier-1 Defense Contracting",
    sector: "Aerospace & Security",
    description: "Providing classified logistics, secure materiel transport, and armaments supply to regional defense forces and allied international security contractors. Our engagements in this sector are governed by absolute operational silence and zero-fail protocols.",
    icon: Shield,
    image: "/network-defense.jpg" // CLIENT ASSET: High contrast tactical/security image
  },
  {
    id: "02",
    title: "Trans-Continental Freight Operations",
    sector: "Global Logistics",
    description: "Managing high-volume, cross-border supply chains for multinational corporations. From port-of-entry clearing to final-mile delivery, we partner with top-tier maritime and aviation freight forwarders to ensure frictionless global trade.",
    icon: Anchor,
    image: "/network-freight.jpg" // CLIENT ASSET: High contrast cargo ship or port image
  },
  {
    id: "03",
    title: "Enterprise Fleet Acquisition",
    sector: "Corporate Mobility",
    description: "Structuring large-scale vehicle procurement and telematics integration for enterprise clients. We partner with elite global automotive manufacturers to deliver custom-spec fleets that drive corporate operations forward.",
    icon: Briefcase,
    image: "/network-motors.jpg" // CLIENT ASSET: High contrast corporate fleet/vehicles image
  }
];

export default function NetworkPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;
    const elements = pageRef.current.querySelectorAll("[data-animate]");
    
    gsap.fromTo(
      elements,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        delay: 0.1,
      }
    );
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-slate-50 text-[#17306D] antialiased pt-20 flex flex-col font-normal">
      <Navbar />

      <main className="flex-grow">
        
        {/* ===================== HERO SECTION ===================== */}
        <section className="relative w-full h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden" data-animate>
          <div className="absolute inset-0 z-0 bg-black">
            <Image 
              src="/network-hero.jpg" // CLIENT ASSET: Very dark, high-contrast abstract architecture or globe image
              alt="Bouza Group Global Network" 
              fill 
              className="object-cover opacity-40 grayscale mix-blend-overlay"
              priority
            />
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 text-center text-white">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Globe size={18} strokeWidth={1} className="text-[#F5B11A]" />
              <p className="text-sm uppercase tracking-[0.3em] text-[#F5B11A] font-light">
                Global Partnerships
              </p>
            </div>
            <h1 className="text-4xl lg:text-6xl tracking-tight leading-tight mb-8 font-light max-w-4xl mx-auto">
              The infrastructure of trust.
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto font-light">
              Our network is not merely a list of clients; it is a sacred coalition of industry leaders, governments, and enterprise pioneers operating under a singular standard of excellence.
            </p>
          </div>
        </section>

        {/* ===================== MANIFESTO OF TRUST ===================== */}
        <section className="py-24 bg-white border-b border-slate-200" data-animate>
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <Lock size={32} strokeWidth={1} className="mx-auto text-[#17306D]/30 mb-8" />
            <h2 className="text-3xl font-light text-[#17306D] leading-relaxed mb-6">
              Confidentiality and precision are the currencies of our engagements.
            </h2>
            <p className="text-[#17306D]/70 font-light leading-loose text-lg">
              At Bouza Group, we partner with entities whose operations define the global economy. Because of the sensitive nature of our defense contracts, high-value logistics, and corporate acquisitions, we protect the identities of our premier partners with uncompromising discretion. What we share is the caliber of our work and the profound depth of our operational engagements.
            </p>
          </div>
        </section>

        {/* ===================== CORE ENGAGEMENTS ===================== */}
        <section className="py-24 bg-slate-50" data-animate>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            
            <div className="mb-16 border-b border-slate-200 pb-6">
              <h2 className="text-3xl tracking-tight text-[#17306D] font-light">Strategic Engagements</h2>
              <p className="text-[#17306D]/60 mt-2 font-light">The foundational pillars of our partner network.</p>
            </div>

            <div className="grid grid-cols-1 gap-16">
              {ENGAGEMENTS.map((engagement, index) => (
                <div key={engagement.id} className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Image Block */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[16/10] w-full bg-slate-200 overflow-hidden border border-slate-300 rounded-none group">
                      <Image 
                        src={engagement.image} 
                        alt={engagement.title}
                        fill
                        className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                      />
                      {/* Elite corner accent */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/50 z-10 m-4"></div>
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/50 z-10 m-4"></div>
                    </div>
                  </div>

                  {/* Text Block */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-2xl font-light text-[#17306D]/30">{engagement.id}</span>
                      <div className="h-px w-12 bg-[#17306D]/20"></div>
                      <p className="text-xs uppercase tracking-widest text-[#F5B11A] font-light flex items-center gap-2">
                        <engagement.icon size={14} strokeWidth={1} />
                        {engagement.sector}
                      </p>
                    </div>
                    <h3 className="text-3xl font-light text-[#17306D] mb-6 tracking-tight">
                      {engagement.title}
                    </h3>
                    <p className="text-[#17306D]/70 font-light leading-relaxed text-lg mb-8">
                      {engagement.description}
                    </p>
                    <div>
                      <button className="flex items-center gap-3 text-sm uppercase tracking-widest text-[#17306D] font-light group hover:text-[#0640CE] transition-colors">
                        Inquire about engagement 
                        <ArrowRight size={16} strokeWidth={1} className="transition-transform group-hover:translate-x-2" />
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ===================== ALLIANCE GRID (GRAYSCALE) ===================== */}
        <section className="py-24 bg-white border-t border-slate-200" data-animate>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-2xl tracking-tight text-[#17306D] font-light">Industries we empower</h2>
            </div>
            
            {/* Minimalist text-based partner categories to maintain the "Sacred" feel without using tacky logos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-l border-slate-100">
              {[
                "Sovereign Defense Ministries", 
                "Global Tier-1 Manufacturers", 
                "International Freight Consortia", 
                "Energy & Infrastructure",
                "Regional Automotive Dealers",
                "Tech-Driven Supply Chains",
                "Aviation Authorities",
                "Private Security Firms"
              ].map((industry, i) => (
                <div key={i} className="border-b border-r border-slate-100 p-8 flex items-center justify-center text-center group hover:bg-slate-50 transition-colors cursor-default">
                  <span className="text-sm uppercase tracking-widest text-[#17306D]/50 font-light group-hover:text-[#17306D] transition-colors">
                    {industry}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}