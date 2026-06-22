"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ArrowRight, Wrench, Car, Truck, Factory } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Data structure to handle the alternating editorial blocks automatically
const DISTRIBUTION_NETWORKS = [
  {
    title: "Bouza Mobility Networks",
    description: "We operate a premier multi-brand car dealership network, distributing top-tier passenger vehicles across key strategic locations. Our ambition is to support clients through every step of their mobility journey, providing an expanded offering that covers new vehicle sales, customized leasing solutions, and enhanced after-sales service centers.",
    Icon: Car,
    image: "/showroom-1.jpg", // Place a dealership interior image here
    align: "left", // Image on left, text on right
  },
  {
    title: "Commercial & Heavy Equipment",
    description: "Beyond passenger vehicles, Bouza Motors is a leading distributor of industrial and material handling equipment. We support a robust network of distributors for heavy machinery, providing essential infrastructure support for the construction, logistics, and warehousing sectors. Our short- and long-term rental fleets ensure continuous operational capacity for our partners.",
    Icon: Truck,
    image: "/showroom-2.jpg", // Place a forklift/heavy equipment image here
    align: "right", // Text on left, image on right
  },
  {
    title: "Premium Brand Operations",
    description: "At our flagship dealerships, we import, distribute, and market specialized premium models renowned for their cutting-edge technology and performance. We operate stand-alone, brand-specific service centers staffed by certified technicians to ensure that high-end vehicles receive the precise, specialized care they require.",
    Icon: Wrench,
    image: "/showroom-3.jpg", // Place a premium vehicle on a road image here
    align: "left",
  },
  {
    title: "OEM Parts & Supply Chain",
    description: "A key player in the automotive industry's backend, we support the development of local vehicle maintenance through an uncompromising supply chain. We provide major manufacturers and local garages with solutions covering the entire value chain: the supply of production parts, raw materials, diagnostic equipment, warehousing, and secure logistics solutions.",
    Icon: Factory,
    image: "/showroom-4.jpg", // Place a warehouse/parts assembly image here
    align: "right",
  }
];

export default function ShowroomsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  // Entrance animation
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
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.1,
      }
    );
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-white text-[#17306D] antialiased pt-20">
      <Navbar />

      <main>
        {/* ===================== HERO SECTION ===================== */}
        <section className="bg-slate-50 py-24 lg:py-32 border-b border-[#17306D]/5" data-animate>
          <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="flex h-px w-8 bg-[#F5B11A]"></span>
              <p className="text-sm font-medium uppercase tracking-widest text-[#F5B11A]">
                Bouza Motors Distribution
              </p>
              <span className="flex h-px w-8 bg-[#F5B11A]"></span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-medium tracking-tight text-[#17306D] leading-tight mb-8">
              An integrated mobility ecosystem.
            </h1>
            
            <p className="text-lg font-normal text-[#17306D]/75 leading-relaxed max-w-3xl mx-auto">
              Our showrooms and distribution centers represent more than just vehicle sales. We manage a complex, end-to-end automotive network spanning passenger luxury, industrial equipment, and critical OEM spare parts.
            </p>
          </div>
        </section>

        {/* ===================== EDITORIAL SHOWCASE GRID ===================== */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col gap-24 lg:gap-40">
            
            {DISTRIBUTION_NETWORKS.map((network, index) => (
              <div 
                key={index} 
                data-animate
                className={`flex flex-col gap-12 lg:gap-20 items-center ${
                  network.align === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Container */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100 border border-[#17306D]/5 shadow-xl shadow-[#17306D]/5">
                    {/* Add 4 images to your /public folder named showroom-1.jpg through showroom-4.jpg */}
                    <Image 
                      src={network.image}
                      alt={network.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-1000 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Text Content Container */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="mb-6 flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-[#17306D] border border-[#17306D]/10">
                      <network.Icon size={24} strokeWidth={1.5} />
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-[#17306D]">
                      {network.title}
                    </h2>
                  </div>
                  
                  <p className="text-base font-normal text-[#17306D]/75 leading-relaxed">
                    {network.description}
                  </p>
                  
                  <div className="mt-10">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-[#17306D] transition-colors hover:text-[#F5B11A]"
                    >
                      Inquire about services <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* ===================== BOTTOM CTA ===================== */}
        <section className="bg-[#17306D] py-24 text-center border-t border-white/10" data-animate>
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <h2 className="text-3xl font-medium tracking-tight text-white mb-6">
              Partner with our distribution network
            </h2>
            <p className="text-base font-normal text-white/70 mb-10 max-w-2xl mx-auto">
              Whether you represent an institutional fleet looking for supply, or an OEM manufacturer seeking a reliable distribution partner, our motors division is ready to integrate.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#F5B11A] px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-[#17306D] transition-colors hover:bg-white"
            >
              Contact Fleet Operations
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}