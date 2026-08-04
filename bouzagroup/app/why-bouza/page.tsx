"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { 
  ArrowUpRight, 
  ShieldCheck, 
  Globe, 
  Target, 
  TrendingUp, 
  Anchor, 
  Layers
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DIFFERENTIATORS = [
  {
    title: "Decentralized Execution",
    description: "Our holding structure allows each division—Defense, Logistics, and Motors—to operate with total agility. Decisions are made by industry veterans on the ground, not delayed by bureaucratic bottlenecks.",
    Icon: Layers,
    accent: "text-[#0640CE]"
  },
  {
    title: "Zero-Defect Tolerance",
    description: "In the sectors we operate, margins for error are non-existent. We engineer our supply chains, manufacturing protocols, and compliance frameworks to ensure absolute precision.",
    Icon: Target,
    accent: "text-[#EB2027]"
  },
  {
    title: "End-to-End Infrastructure",
    description: "We don't rely on fragmented third-party networks. From clearing and forwarding to defense materiel supply, we own and manage the critical infrastructure that guarantees delivery.",
    Icon: Globe,
    accent: "text-[#F5B11A]"
  }
];

const SUCCESS_PILLARS = [
  {
    title: "Relentless Compliance",
    description: "Trust is built on transparency and legality. We maintain rigorous compliance with international trade laws, defense regulations, and cross-border transport mandates.",
    Icon: ShieldCheck,
  },
  {
    title: "Generational Resilience",
    description: "We structure our investments and operations to weather market volatility. Bouza Group is capitalized and operated to dominate markets for decades, not quarters.",
    Icon: Anchor,
  },
  {
    title: "Compound Growth",
    description: "The synergies between our divisions allow us to scale efficiently. Our logistics network empowers our defense and motor divisions, creating a self-sustaining ecosystem of growth.",
    Icon: TrendingUp,
  }
];

export default function WhyBouzaPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const elements = containerRef.current.querySelectorAll("[data-animate]");
    
    gsap.fromTo(
      elements,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#17306D] antialiased">
      <Navbar />

      <main ref={containerRef} className="pt-32 lg:pt-40">
        
        {/* ===================== HERO SECTION ===================== */}
        <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-16 lg:pb-24 border-b border-slate-200">
          <p data-animate className="text-sm font-medium uppercase tracking-[0.25em] text-[#0640CE]">
            Why Bouza Group
          </p>
          <h1 data-animate className="mt-6 max-w-4xl text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            The anatomy of absolute reliability.
          </h1>
          <p data-animate className="mt-8 max-w-2xl text-lg font-normal leading-relaxed text-[#17306D]/70">
            In industries where failure is not an option, trust cannot be demanded—it must be engineered. Discover the operational standards, strategic advantages, and core values that make Bouza Group the definitive partner in defense, logistics, and automotive trade.
          </p>
        </section>

        {/* ===================== WHAT SETS US APART ===================== */}
        <section className="bg-slate-50 py-24 lg:py-32 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div data-animate className="mb-16 max-w-3xl">
              <h2 className="text-3xl font-medium tracking-tight lg:text-4xl">
                What sets us apart
              </h2>
              <p className="mt-4 text-base text-[#17306D]/70 leading-relaxed">
                We do not just participate in markets; we build the underlying frameworks they rely on. Our competitive edge is defined by our structure, our standards, and our self-reliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {DIFFERENTIATORS.map((diff, index) => (
                <div data-animate key={diff.title} className="relative bg-white p-8 border border-slate-200 shadow-sm rounded-none group hover:border-[#17306D]/30 transition-colors">
                  <div className={`mb-6 ${diff.accent}`}>
                    <diff.Icon size={36} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-medium mb-4 text-[#17306D]">{diff.title}</h3>
                  <p className="text-sm font-normal text-[#17306D]/70 leading-relaxed">
                    {diff.description}
                  </p>
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-slate-200 transition-colors"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== THE ARCHITECTURE OF TRUST ===================== */}
        <section className="bg-white py-24 lg:py-32 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div data-animate>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#EB2027] mb-4">
                  The Architecture of Trust
                </p>
                <h2 className="text-3xl font-medium tracking-tight lg:text-4xl mb-6">
                  Commanded locally. Executed globally.
                </h2>
                <div className="space-y-6 text-base font-normal text-[#17306D]/70 leading-relaxed">
                  <p>
                    Commanded from our headquarters at Magharibi Place, our operational footprint spans continents. We understand that true global reach requires deep local anchoring.
                  </p>
                  <p>
                    Governments, multinational corporations, and independent enterprises trust Bouza Group because we strip away the friction of cross-border operations. Whether we are moving heavy freight across contested borders or delivering precision defense materiel, our partners know that our oversight is absolute and our execution is guaranteed.
                  </p>
                </div>
              </div>
              
              <div data-animate className="relative h-[400px] w-full bg-slate-100 flex items-center justify-center border border-slate-200 overflow-hidden">
                {/* Abstract geometric representation of a network/shield */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#17306D] to-transparent"></div>
                <Globe size={120} strokeWidth={0.5} className="text-[#17306D]/20 absolute" />
                <div className="relative z-10 w-2/3 h-2/3 border border-[#17306D]/20 flex items-center justify-center p-8">
                  <div className="w-full h-full border border-[#0640CE]/30 flex items-center justify-center">
                    <ShieldCheck size={48} strokeWidth={1} className="text-[#EB2027]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== SUCCESS PILLARS ===================== */}
        <section className="bg-[#17306D] text-white py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div data-animate className="mb-16 md:text-center max-w-3xl md:mx-auto">
              <h2 className="text-3xl font-medium tracking-tight lg:text-4xl">
                Why we succeed
              </h2>
              <p className="mt-4 text-base text-white/70 leading-relaxed">
                Success in high-stakes industries is not the result of chance. It is the byproduct of strict adherence to our operational pillars.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {SUCCESS_PILLARS.map((pillar, i) => (
                <div data-animate key={pillar.title} className="pt-10 md:pt-0 md:px-8 first:pt-0 first:md:pl-0 last:md:pr-0">
                  <pillar.Icon className="text-[#F5B11A] mb-6" size={32} strokeWidth={1.5} />
                  <h3 className="text-xl font-medium mb-4">{pillar.title}</h3>
                  <p className="text-sm font-normal text-white/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== CTA ===================== */}
        <section className="bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center flex flex-col items-center">
            <h2 data-animate className="text-3xl font-medium tracking-tight text-[#17306D] lg:text-5xl mb-6">
              Partner with absolute certainty.
            </h2>
            <p data-animate className="max-w-2xl text-lg font-normal text-[#17306D]/70 mb-10">
              Whether you are securing a supply chain, sourcing defense technology, or expanding a commercial fleet, Bouza Group is ready to execute.
            </p>
            <div data-animate className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-none bg-[#EB2027] px-8 py-4 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#17306D]"
              >
                Initiate Contact
                <ArrowUpRight size={18} />
              </Link>
              <Link
                href="/logistics"
                className="inline-flex items-center gap-2 rounded-none border border-[#17306D]/20 px-8 py-4 text-sm font-medium uppercase tracking-wide text-[#17306D] transition-colors hover:border-[#0640CE] hover:text-[#0640CE]"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}