"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { 
  ArrowUpRight, 
  Crosshair, 
  Truck, 
  Car, 
  Mail, 
  Shield, 
  Globe, 
  Building 
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type AccentKey = "red" | "blue" | "yellow";

type Holding = {
  name: string;
  tagline: string;
  href: string;
  accent: AccentKey;
  Icon: typeof Crosshair;
  index: string;
  description: string;
};

const HOLDINGS: Holding[] = [
  {
    name: "Bouza Defense",
    tagline: "Arms & Ammunition",
    href: "/defense",
    accent: "red",
    Icon: Crosshair,
    index: "01",
    description:
      "Manufacturing and supply of arms, ammunition, and defense materiel built to exacting standards of reliability.",
  },
  {
    name: "Bouza Logistics",
    tagline: "Logistics, Clearing & Forwarding",
    href: "/logistics",
    accent: "blue",
    Icon: Truck,
    index: "02",
    description:
      "End-to-end freight, customs clearing, and forwarding infrastructure moving goods across borders without friction.",
  },
  {
    name: "Bouza Motors",
    tagline: "Car Dealerships & Spare Parts",
    href: "/motors",
    accent: "yellow",
    Icon: Car,
    index: "03",
    description:
      "Vehicle dealerships and a parts distribution network keeping fleets and households on the road.",
  },
];

const CARD_STYLES: Record<
  AccentKey,
  {
    cardBg: string;
    heading: string;
    sub: string;
    body: string;
    index: string;
    portal: string;
    iconBg: string;
    iconText: string;
  }
> = {
  red: {
    cardBg: "bg-[#EB2027]",
    heading: "text-white",
    sub: "text-white/85",
    body: "text-white/75",
    index: "text-white/35",
    portal: "text-white",
    iconBg: "bg-white/15",
    iconText: "text-white",
  },
  blue: {
    cardBg: "bg-[#0640CE]",
    heading: "text-white",
    sub: "text-white/85",
    body: "text-white/75",
    index: "text-white/35",
    portal: "text-white",
    iconBg: "bg-white/15",
    iconText: "text-white",
  },
  yellow: {
    cardBg: "bg-[#F5B11A]",
    heading: "text-[#17306D]",
    sub: "text-[#17306D]/80",
    body: "text-[#17306D]/70",
    index: "text-[#17306D]/30",
    portal: "text-[#17306D]",
    iconBg: "bg-[#17306D]/10",
    iconText: "text-[#17306D]",
  },
};

const HERO_IMAGES = [
  "/hero-1.jpg", 
  "/hero-2.jpg", 
  "/hero-3.jpg"
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | HTMLAnchorElement)[]>([]);
  const cardAccentRefs = useRef<HTMLDivElement[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;
    const targets = heroRef.current.querySelectorAll("[data-hero-item]");
    gsap.fromTo(
      targets,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.1,
      }
    );
  }, []);

  const handleCardEnter = (i: number) => {
    const card = cardRefs.current[i];
    const accentBar = cardAccentRefs.current[i];
    if (!card) return;
    gsap.to(card, {
      y: -6,
      duration: 0.35,
      ease: "power3.out",
      boxShadow: "0 28px 56px -16px rgba(0,0,0,0.15)",
    });
    if (accentBar) {
      gsap.to(accentBar, { scaleX: 1, duration: 0.4, ease: "power3.out" });
    }
  };

  const handleCardLeave = (i: number) => {
    const card = cardRefs.current[i];
    const accentBar = cardAccentRefs.current[i];
    if (!card) return;
    gsap.to(card, {
      y: 0,
      duration: 0.35,
      ease: "power3.out",
      boxShadow: "0 1px 2px -1px rgba(0,0,0,0.05)",
    });
    if (accentBar) {
      gsap.to(accentBar, { scaleX: 0, duration: 0.3, ease: "power2.in" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#17306D] antialiased">
      <Navbar />

      <main>
        {/* ===================== HERO / MANIFESTO ===================== */}
        {/* Changed to flex-col and min-h-[95vh] to act as a full-screen cover that rounds off at the bottom */}
        <section
          ref={heroRef}
          className="relative flex flex-col justify-center overflow-hidden bg-[#17306D] min-h-[95vh] pt-24 pb-20 rounded-b-[2.5rem] lg:rounded-b-[4rem] shadow-2xl z-20"
        >
          <div className="absolute inset-0 z-0 bg-[#0A1633]">
            {HERO_IMAGES.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image 
                  src={src} 
                  alt="Bouza Group Operations" 
                  fill 
                  className="object-cover object-right"
                  priority={index === 0}
                />
              </div>
            ))}
            
            {/* Reinstated the strong corporate blue gradient for perfect text contrast, fading out to reveal the image on the right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#17306D] via-[#17306D]/80 to-transparent z-10 pointer-events-none"></div>
          </div>

          <div className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-10 text-white">
            <p
              data-hero-item
              className="text-sm font-medium uppercase tracking-[0.25em] text-[#F5B11A]"
            >
              A Holding Company
            </p>
            <h1
              data-hero-item
              className="mt-6 max-w-4xl text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              We build the infrastructure
              <br className="hidden sm:block" /> industries run on.
            </h1>
            <p
              data-hero-item
              className="mt-8 max-w-2xl text-lg font-normal leading-relaxed text-white/80"
            >
              Bouza Group is the parent company of three independently
              operated businesses spanning defense manufacturing, logistics
              infrastructure, and the automotive trade. Each company is built
              to operate at its own pace, with its own discipline, under one
              shared standard of execution.
            </p>
            <div data-hero-item className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/us"
                className="rounded-none bg-[#EB2027] px-7 py-3.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#F5B11A] hover:text-[#17306D]"
              >
                Our Story
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-none border border-white/30 px-7 py-3.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:border-[#F5B11A] hover:text-[#F5B11A]"
              >
                Get In Touch
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ===================== HOLDINGS GRID ===================== */}
        <section className="bg-white py-24 lg:py-32 relative z-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex items-end justify-between gap-6 border-b border-slate-200 pb-8">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#17306D]/60">
                  Three Companies, One Standard
                </p>
                <h2 className="mt-4 text-4xl font-medium tracking-tight text-[#17306D] lg:text-5xl">
                  Our Holdings
                </h2>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {HOLDINGS.map((h, i) => {
                const card = CARD_STYLES[h.accent];
                return (
                  <Link
                    key={h.name}
                    href={h.href}
                    ref={(el) => {
                      if (el) cardRefs.current[i] = el;
                    }}
                    onMouseEnter={() => handleCardEnter(i)}
                    onMouseLeave={() => handleCardLeave(i)}
                    className={`group relative flex flex-col justify-between overflow-hidden rounded-none p-8 shadow-sm border border-slate-100 ${card.cardBg}`}
                  >
                    <div
                      ref={(el) => {
                        if (el) cardAccentRefs.current[i] = el;
                      }}
                      className="absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 bg-white/40"
                    />
                    <div>
                      <div className="flex items-center justify-between">
                        <span
                          className={`flex h-12 w-12 items-center justify-center rounded-none ${card.iconBg} ${card.iconText}`}
                        >
                          <h.Icon size={22} strokeWidth={1} />
                        </span>
                        <span className={`text-xs font-normal tracking-widest ${card.index}`}>
                          {h.index}
                        </span>
                      </div>
                      <h3 className={`mt-8 text-2xl font-medium tracking-tight ${card.heading}`}>
                        {h.name}
                      </h3>
                      <p className={`mt-1 text-sm font-medium uppercase tracking-wide ${card.sub}`}>
                        {h.tagline}
                      </p>
                      <p className={`mt-4 text-[15px] font-normal leading-relaxed ${card.body}`}>
                        {h.description}
                      </p>
                    </div>
                    <div className={`mt-8 flex items-center gap-2 text-sm font-medium ${card.portal}`}>
                      Visit Portal
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================== STATEMENT BAND ===================== */}
        <section className="bg-[#F5B11A] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#EB2027]">
                  How We Operate
                </p>
                <h2 className="mt-6 text-4xl font-medium leading-tight tracking-tight text-[#17306D] lg:text-5xl">
                  Independent businesses. Shared discipline.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:pt-2">
                <p className="text-lg font-normal leading-relaxed text-[#17306D]/80">
                  Each Bouza company is run by operators who know their
                  market, not a central office removed from it. What carries
                  across Defense, Logistics, and Motors is not a brand
                  template, it is a standard: rigorous compliance, durable
                  partnerships, and a long view on every market we enter.
                </p>
                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
                  <div className="border-l-2 border-[#EB2027] pl-4">
                    <p className="text-3xl font-medium text-[#17306D]">01</p>
                    <p className="mt-1 text-sm font-normal text-[#17306D]/80">
                      Compliance-first manufacturing
                    </p>
                  </div>
                  <div className="border-l-2 border-[#0640CE] pl-4">
                    <p className="text-3xl font-medium text-[#17306D]">02</p>
                    <p className="mt-1 text-sm font-normal text-[#17306D]/80">
                      Border-to-door logistics
                    </p>
                  </div>
                  <div className="border-l-2 border-[#17306D]/50 pl-4">
                    <p className="text-3xl font-medium text-[#17306D]">03</p>
                    <p className="mt-1 text-sm font-normal text-[#17306D]/80">
                      Trusted vehicle ownership
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== WHY BOUZA ===================== */}
        <section className="bg-slate-50 py-24 lg:py-32 text-[#17306D] border-y border-slate-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-16 max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#0640CE]">
                Why Bouza Group
              </p>
              <h2 className="mt-4 text-4xl font-medium tracking-tight lg:text-5xl">
                Uncompromising standards. Global execution.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <Shield className="text-[#EB2027] mb-6" size={36} strokeWidth={1} />
                <h3 className="text-xl font-medium mb-3">Absolute Reliability</h3>
                <p className="text-sm font-normal text-[#17306D]/70 leading-relaxed">
                  We operate in sectors where failure is not an option. From defense materiel to complex logistics, our protocols ensure zero-defect execution.
                </p>
              </div>
              <div>
                <Globe className="text-[#0640CE] mb-6" size={36} strokeWidth={1} />
                <h3 className="text-xl font-medium mb-3">Global Infrastructure</h3>
                <p className="text-sm font-normal text-[#17306D]/70 leading-relaxed">
                  A proprietary network spanning continents, giving our partners frictionless access to markets, resources, and end-to-end supply chains.
                </p>
              </div>
              <div>
                <Building className="text-[#F5B11A] mb-6" size={36} strokeWidth={1} />
                <h3 className="text-xl font-medium mb-3">Long-Term Vision</h3>
                <p className="text-sm font-normal text-[#17306D]/70 leading-relaxed">
                  We build for decades, not quarters. Our holding structure allows each entity to mature and dominate its respective industry without compromise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== OUR PARTNERS ===================== */}
        <section className="bg-white py-20 overflow-hidden border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="text-center text-sm font-medium uppercase tracking-widest text-[#17306D]/40 mb-10">
              Trusted by Global Industry Leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-40 grayscale select-none text-[#17306D]">
              <div className="text-xl font-medium tracking-widest uppercase">Aerospace Corp</div>
              <div className="text-xl font-medium tracking-widest uppercase">Global Freight</div>
              <div className="text-xl font-medium tracking-widest uppercase">Defense Secure</div>
              <div className="text-xl font-medium tracking-widest uppercase">Auto Haus</div>
              <div className="text-xl font-medium tracking-widest uppercase">Nexus Logistics</div>
            </div>
          </div>
        </section>

        {/* ===================== CONTACT / HELP SECTION ===================== */}
        <section className="bg-white py-24 lg:py-32 text-[#17306D]">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 className="text-4xl font-medium tracking-tight lg:text-5xl mb-16 lg:mb-24">
              How can we help you?
            </h2>

            {/* Sharp Contact Card */}
            <div className="relative rounded-none bg-slate-50 p-8 pt-32 lg:p-16 lg:pt-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mt-16 lg:mt-0 text-[#17306D] border border-slate-200">
              
              {/* Image Container */}
              <div className="absolute -top-24 lg:-top-16 lg:-left-4 w-56 h-64 lg:w-72 lg:h-80 flex-shrink-0 z-10">
                <div className="w-full h-full relative">
                  <Image 
                    src="/support.png" 
                    alt="Support Team" 
                    fill 
                    className="object-contain object-bottom" 
                  />
                </div>
              </div>

              {/* Spacer for mobile to account for absolute image */}
              <div className="hidden lg:block lg:w-56 flex-shrink-0"></div>

              {/* Text Content */}
              <div className="flex-1 relative z-20">
                <h3 className="text-2xl font-medium mb-4">
                  Get in touch with our support team
                </h3>
                <p className="text-base font-normal text-[#17306D]/80 mb-8 max-w-xl">
                  Want to know more about our services? Our experts are here to support you. Let&apos;s talk about how Bouza Group can help move your business forward.
                </p>
                
                <div className="flex items-center gap-3 mb-8">
                  <Mail size={18} strokeWidth={1} className="text-[#17306D]/60" />
                  <a href="mailto:support@bouzagroup.com" className="text-sm font-medium underline underline-offset-4 hover:text-[#0640CE] transition-colors">
                    support@bouzagroup.com
                  </a>
                </div>

                <Link
                  href="/contact"
                  className="inline-block rounded-none bg-[#EB2027] px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#17306D]"
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