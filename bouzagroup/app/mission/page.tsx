"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { 
  TrendingUp, 
  Truck, 
  Globe, 
  ChevronDown,
  ArrowRight
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MissionVisionPage() {
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
    <div ref={pageRef} className="min-h-screen bg-white text-[#17306D] antialiased pt-20 flex flex-col font-normal">
      <Navbar />

      <main className="flex-grow">
        
        {/* ===================== HERO SECTION ===================== */}
        <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden" data-animate>
          {/* High Contrast Background Image */}
          <div className="absolute inset-0 z-0 bg-black">
            <Image 
              src="/mission-hero.jpg" // CLIENT ASSET: High contrast supply chain/logistics image
              alt="Bouza Group Mission" 
              fill 
              className="object-cover opacity-50 grayscale mix-blend-overlay"
              priority
            />
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 text-center text-white">
            <p className="text-sm uppercase tracking-widest text-[#F5B11A] mb-4 font-light">
              Mission & Vision
            </p>
            <h1 className="text-4xl lg:text-6xl tracking-tight leading-tight mb-6 font-light">
              Driving progress through purpose.
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto font-light">
              Bouza Group connects freight transportation service providers with enterprises globally. 
              With innovative, digital solutions and seamless support, we help companies move towards 
              smarter, more accessible, and efficient mobility.
            </p>
          </div>
        </section>

        {/* ===================== FACTS & FIGURES ===================== */}
        <section className="py-24 bg-slate-50 border-b border-[#17306D]/10" data-animate>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl tracking-tight text-[#17306D] font-light">
                Facts and figures
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Sharp Edge Card 1 */}
              <div className="bg-white p-10 border border-slate-200 shadow-sm rounded-none transition-all hover:border-[#0640CE]">
                <TrendingUp size={36} strokeWidth={1} className="text-[#17306D] mb-6" />
                <h3 className="text-2xl text-[#17306D] mb-4 font-light">Exponential network growth</h3>
                <p className="text-base text-[#17306D]/70 font-light leading-relaxed">
                  Rapid expansion since 2023, reflecting strong enterprise demand and continued trust in our modern B2B logistics marketplace.
                </p>
              </div>

              {/* Sharp Edge Card 2 */}
              <div className="bg-white p-10 border border-slate-200 shadow-sm rounded-none transition-all hover:border-[#0640CE]">
                <Truck size={36} strokeWidth={1} className="text-[#17306D] mb-6" />
                <h3 className="text-2xl text-[#17306D] mb-4 font-light">Tech-enabled fleets</h3>
                <p className="text-base text-[#17306D]/70 font-light leading-relaxed">
                  Integrating advanced algorithms to match demand with supply, driving the steady shift towards optimized routing and reduced empty miles.
                </p>
              </div>

              {/* Sharp Edge Card 3 */}
              <div className="bg-white p-10 border border-slate-200 shadow-sm rounded-none transition-all hover:border-[#0640CE]">
                <Globe size={36} strokeWidth={1} className="text-[#17306D] mb-6" />
                <h3 className="text-2xl text-[#17306D] mb-4 font-light">Trans-border presence</h3>
                <p className="text-base text-[#17306D]/70 font-light leading-relaxed">
                  Starting in Nairobi, Kenya, and scaling into a global network, highlighting our strong market presence and commitment to seamless cross-border freight.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== MILESTONES (ACCORDION STYLE) ===================== */}
        <section className="py-24 bg-white border-b border-[#17306D]/10" data-animate>
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <div className="mb-16">
              <h2 className="text-3xl lg:text-4xl tracking-tight text-[#17306D] font-light mb-4">
                Take a look at our historic milestones
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              
              {/* Active Accordion Item */}
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-none">
                <div className="flex justify-between items-center cursor-pointer mb-4">
                  <h3 className="text-xl text-[#17306D] font-light">2023–2026 | Brand evolution and tech integration</h3>
                  <ChevronDown size={24} strokeWidth={1} className="text-[#17306D]/50" />
                </div>
                <div className="space-y-4 border-t border-slate-200 pt-4">
                  <div className="flex gap-4">
                    <span className="font-medium text-[#17306D]">2026</span>
                    <p className="text-[#17306D]/70 font-light text-sm leading-relaxed">
                      Bouza Group introduces advanced route optimization tools to make fleet management even smarter and more personalized for enterprises.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-medium text-[#17306D]">2024</span>
                    <p className="text-[#17306D]/70 font-light text-sm leading-relaxed">
                      Expansion into specialized defense and automotive sectors, solidifying the overarching holding structure of Bouza Group.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-medium text-[#17306D]">2023</span>
                    <p className="text-[#17306D]/70 font-light text-sm leading-relaxed">
                      Bouza Logistics is officially established in Nairobi, Kenya. The digital freight platform launches, successfully connecting early shippers with independent truck drivers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Inactive Accordion Items (Visual structure) */}
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-none flex justify-between items-center cursor-pointer transition-colors hover:bg-slate-100">
                <h3 className="text-xl text-[#17306D] font-light">Looking Forward | Global expansion and sustainability</h3>
                <span className="text-[#17306D]/50 font-light text-2xl leading-none">+</span>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== GATEWAY / ROUTING CARDS ===================== */}
        <section className="py-24 bg-white" data-animate>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest text-[#17306D]/50 mb-4 font-light">
                More from Bouza Group
              </p>
              <h2 className="text-3xl lg:text-4xl tracking-tight text-[#17306D] font-light mb-6">
                Your gateway to smarter mobility
              </h2>
              <p className="text-lg text-[#17306D]/70 leading-relaxed max-w-3xl mx-auto font-light">
                Deep dive into the world of Bouza and explore what's shaping the future of logistics — from company updates to career opportunities and our global network.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* Card 1: News */}
              <div className="group flex flex-col">
                <div className="relative aspect-[16/9] w-full bg-slate-100 mb-6 overflow-hidden rounded-none border border-slate-200">
                  <Image 
                    src="/news-placeholder.jpg" // CLIENT ASSET: High contrast corporate/news image
                    alt="Latest News"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl text-[#17306D] mb-3 font-light">Latest news & press</h3>
                <p className="text-base text-[#17306D]/70 font-light leading-relaxed mb-6 flex-grow">
                  Stay up to date with the latest developments in business mobility, fleet management and sustainable logistics at Bouza Group. Discover innovations and partnerships.
                </p>
                <div>
                  <Link 
                    href="/news" 
                    className="inline-flex items-center gap-2 border border-[#17306D] px-6 py-3 text-sm uppercase tracking-widest text-[#17306D] transition-colors hover:bg-[#17306D] hover:text-white rounded-none"
                  >
                    See all news
                  </Link>
                </div>
              </div>

              {/* Card 2: Careers */}
              <div className="group flex flex-col">
                <div className="relative aspect-[16/9] w-full bg-slate-100 mb-6 overflow-hidden rounded-none border border-slate-200">
                  <Image 
                    src="/careers-placeholder.jpg" // CLIENT ASSET: High contrast office/team image
                    alt="Careers at Bouza"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl text-[#17306D] mb-3 font-light">Work with us</h3>
                <p className="text-base text-[#17306D]/70 font-light leading-relaxed mb-6 flex-grow">
                  Join a leading corporate mobility provider and be part of a team that drives innovation in fleet management, full-service logistics, and digital mobility solutions worldwide.
                </p>
                <div>
                  <Link 
                    href="/careers" 
                    className="inline-flex items-center gap-2 border border-[#17306D] px-6 py-3 text-sm uppercase tracking-widest text-[#17306D] transition-colors hover:bg-[#17306D] hover:text-white rounded-none"
                  >
                    Explore job opportunities
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}