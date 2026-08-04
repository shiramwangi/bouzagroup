"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ArrowUpRight, Crosshair, Truck, Car, HardHat } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WhoWeArePage() {
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
            Who We Are
          </p>
          <h1 data-animate className="mt-6 max-w-4xl text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
            We operate in the physical world.
          </h1>
        </section>

        {/* ===================== THE MANIFESTO (No Buzzwords) ===================== */}
        <section className="bg-slate-50 py-24 lg:py-32 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              
              <div data-animate className="lg:col-span-5">
                <HardHat size={48} strokeWidth={1} className="text-[#EB2027] mb-8" />
                <h2 className="text-3xl font-medium tracking-tight lg:text-4xl">
                  What is Bouza Group?
                </h2>
              </div>

              <div data-animate className="lg:col-span-7 space-y-8 text-lg font-normal leading-relaxed text-[#17306D]/80">
                <p>
                  A lot of companies today are focused on the cloud, software, and digital trends. We are not. Bouza Group is a holding company built entirely around physical infrastructure. 
                </p>
                <p>
                  We believe that no matter how advanced the world gets, goods still need to be put on trucks and moved across borders. People still need to buy cars and the spare parts to fix them. Governments and security firms still need reliable arms and ammunition. 
                </p>
                <p>
                  That is exactly what we do. We own and manage businesses that handle the hard, unforgiving work of the physical economy.
                </p>
                <p className="font-medium text-[#17306D]">
                  We are a holding company. That means we don&apos;t micromanage our businesses from a corner office. We acquire and build companies, put the right experts in charge, enforce a strict standard of compliance, and let them get to work.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== THE PORTFOLIO ===================== */}
        <section className="bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div data-animate className="mb-16">
              <h2 className="text-3xl font-medium tracking-tight lg:text-4xl">
                What we actually do
              </h2>
              <p className="mt-4 text-base text-[#17306D]/70 max-w-2xl">
                We have three main divisions. They operate independently, but they share the same absolute standard for reliability. Here is exactly what they do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Defense */}
              <div data-animate className="border border-slate-200 p-8 rounded-none hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#EB2027]/10 flex items-center justify-center mb-8">
                  <Crosshair size={28} className="text-[#EB2027]" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-medium mb-4 text-[#17306D]">Bouza Defense</h3>
                <p className="text-base text-[#17306D]/70 mb-6 leading-relaxed">
                  We manufacture and supply arms, ammunition, and security equipment. We deal with defense contracts that require absolute precision, total legality, and zero room for error.
                </p>
                <Link href="/defense" className="inline-flex items-center gap-2 text-sm font-medium text-[#EB2027] hover:text-[#17306D] transition-colors">
                  View Division <ArrowUpRight size={16} />
                </Link>
              </div>

              {/* Logistics */}
              <div data-animate className="border border-slate-200 p-8 rounded-none hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#0640CE]/10 flex items-center justify-center mb-8">
                  <Truck size={28} className="text-[#0640CE]" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-medium mb-4 text-[#17306D]">Bouza Logistics</h3>
                <p className="text-base text-[#17306D]/70 mb-6 leading-relaxed">
                  We move freight. We handle customs clearing, forwarding, and long-haul trucking. If a client needs a shipping container moved from a port to a warehouse across a border, we make it happen.
                </p>
                <Link href="/logistics" className="inline-flex items-center gap-2 text-sm font-medium text-[#0640CE] hover:text-[#17306D] transition-colors">
                  View Division <ArrowUpRight size={16} />
                </Link>
              </div>

              {/* Motors */}
              <div data-animate className="border border-slate-200 p-8 rounded-none hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#F5B11A]/10 flex items-center justify-center mb-8">
                  <Car size={28} className="text-[#F5B11A]" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-medium mb-4 text-[#17306D]">Bouza Motors</h3>
                <p className="text-base text-[#17306D]/70 mb-6 leading-relaxed">
                  We run vehicle dealerships and distribute spare parts. We supply cars to consumers, commercial fleets to businesses, and the parts required to keep those vehicles running for years.
                </p>
                <Link href="/motors" className="inline-flex items-center gap-2 text-sm font-medium text-[#F5B11A] hover:text-[#17306D] transition-colors">
                  View Division <ArrowUpRight size={16} />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== STRAIGHT TALK CTA ===================== */}
        <section className="bg-[#17306D] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div data-animate className="max-w-2xl">
              <h2 className="text-3xl font-medium tracking-tight text-white lg:text-4xl mb-4">
                Ready to do business?
              </h2>
              <p className="text-lg font-normal text-white/70">
                If you need a reliable partner to handle defense supply, heavy freight logistics, or automotive fleet management, speak to our team today.
              </p>
            </div>
            <div data-animate className="flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-none bg-[#EB2027] px-8 py-4 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#F5B11A] hover:text-[#17306D]"
              >
                Get In Touch
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}