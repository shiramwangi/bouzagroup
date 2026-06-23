"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { 
  MapPin, 
  Cpu, 
  TrendingUp, 
  ShieldCheck,
  Zap
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  // Entrance animations for smooth scrolling narrative
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
            <p className="text-sm font-light uppercase tracking-widest text-[#F97316] mb-6">
              The Bouza Story
            </p>
            <h1 className="text-4xl lg:text-6xl font-light tracking-tight text-[#17306D] leading-tight mb-8">
              Connect. Deliver. Excel.
            </h1>
            <p className="text-xl font-light text-[#0640CE] max-w-2xl mx-auto mb-6">
              Your partner for growth and success.
            </p>
            <p className="text-lg font-light text-[#17306D]/75 leading-relaxed max-w-3xl mx-auto">
              We are a digital freight network built to power modern supply chains. Transforming how businesses and individuals move goods through technological innovation, speed, and unwavering reliability.
            </p>
          </div>
        </section>

        {/* ===================== THE OVERVIEW (GENESIS) ===================== */}
        <section className="py-24 lg:py-32" data-animate>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
              
              {/* Left: Image Placeholder */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] w-full rounded-none overflow-hidden bg-slate-100 border border-[#17306D]/5 shadow-xl">
                  {/* CLIENT IMAGE REQUIRED: A photo of the Nairobi HQ, trucks, or team */}
                  <Image 
                    src="/about-overview.jpg" 
                    alt="Bouza Logistics Operations" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right: Text Content */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="text-[#F97316]" size={24} strokeWidth={1} />
                  <span className="text-sm font-light uppercase tracking-widest text-[#17306D]/50">Founded 2023 • Nairobi, Kenya</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-[#17306D] mb-6">
                  Bridging the gap in global freight.
                </h2>
                
                <div className="space-y-6 text-base font-light text-[#17306D]/75 leading-relaxed">
                  <p>
                    Bouza Logistics operates as a premier B2B marketplace that connects freight transportation service providers with enterprises and individuals requiring seamless delivery. 
                  </p>
                  <p>
                    Whether moving household goods, sensitive electronics, or heavy construction supplies, our platform connects shippers directly with a vetted network of independent truck drivers equipped to meet those exact needs efficiently and cost-effectively.
                  </p>
                  <p>
                    We are more than just a logistics company. The Bouza platform is engineered from the ground up to connect, optimize, measure, analyze, and solve the most pressing challenges in the logistics industry through pure technological innovation.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== POSITIONING GRID ===================== */}
        <section className="bg-[#17306D] py-24 lg:py-32 text-white" data-animate>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            
            <div className="text-center mb-16 lg:mb-24">
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-6">
                A tech-enabled digital freight network
              </h2>
              <p className="text-lg font-light text-white/70 max-w-2xl mx-auto">
                We operate a platform that simplifies freight booking, ensures real-time tracking, optimizes routes, and matches demand with available supply—transforming how goods move across regions and borders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#263D86]/40 border border-white/10 p-8 rounded-none">
                <Cpu size={32} strokeWidth={1} className="text-[#F97316] mb-6" />
                <h3 className="text-xl font-light mb-4">Technological Innovation</h3>
                <p className="text-sm font-light text-white/70 leading-relaxed">
                  Utilizing advanced algorithms to match shippers with the perfect transport capacity, reducing empty miles and optimizing every route.
                </p>
              </div>
              
              <div className="bg-[#263D86]/40 border border-white/10 p-8 rounded-none">
                <TrendingUp size={32} strokeWidth={1} className="text-[#F97316] mb-6" />
                <h3 className="text-xl font-light mb-4">Trans-border Scalability</h3>
                <p className="text-sm font-light text-white/70 leading-relaxed">
                  Built to handle everything from intercity rapid transit to complex, cross-border international supply chain operations.
                </p>
              </div>

              <div className="bg-[#263D86]/40 border border-white/10 p-8 rounded-none">
                <ShieldCheck size={32} strokeWidth={1} className="text-[#F97316] mb-6" />
                <h3 className="text-xl font-light mb-4">Unwavering Reliability</h3>
                <p className="text-sm font-light text-white/70 leading-relaxed">
                  Providing complete visibility, real-time tracking, and measurable analytics so enterprises have absolute confidence in their logistics.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ===================== BRANDING STORY (LOGO & COLORS) ===================== */}
        <section className="py-24 lg:py-32 bg-slate-50 border-t border-[#17306D]/5" data-animate>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            
            <div className="text-center mb-16">
              <p className="text-sm font-light uppercase tracking-widest text-[#F97316] mb-4">Identity & Meaning</p>
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-[#17306D]">
                The philosophy behind the brand.
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              
              {/* Brand Colors Definition */}
              <div className="w-full lg:w-1/2 flex flex-col gap-8">
                
                {/* The Blue Card */}
                <div className="bg-white p-8 rounded-none border border-[#17306D]/5 shadow-sm flex items-start gap-6">
                  <div className="w-16 h-16 rounded-none bg-[#0640CE] flex-shrink-0 shadow-[0_0_20px_rgba(6,64,206,0.3)]"></div>
                  <div>
                    <h3 className="text-xl font-light text-[#17306D] mb-3">Corporate Blue</h3>
                    <p className="text-sm font-light text-[#17306D]/75 leading-relaxed">
                      Associated with intelligence, trust, reliability, and professionalism. Blue communicates the energy and dependability essential for transportation. It provides a calming effect, assuring our customers that their transactions and freight are secure, safe, and handled with exact precision.
                    </p>
                  </div>
                </div>

                {/* The Orange Card */}
                <div className="bg-white p-8 rounded-none border border-[#17306D]/5 shadow-sm flex items-start gap-6">
                  <div className="w-16 h-16 rounded-none bg-[#F97316] flex-shrink-0 shadow-[0_0_20px_rgba(249,115,22,0.3)]"></div>
                  <div>
                    <h3 className="text-xl font-light text-[#17306D] mb-3">Velocity Orange</h3>
                    <p className="text-sm font-light text-[#17306D]/75 leading-relaxed">
                      A color of significant value in the Bouza ecosystem. It represents the raw energy, agility, and continuous forward momentum required to innovate in the modern logistics landscape. It acts as a beacon of our operational speed.
                    </p>
                  </div>
                </div>

              </div>

              {/* The "Z" Logo Display */}
              <div className="w-full lg:w-1/2">
                <div className="h-full bg-[#17306D] rounded-none p-10 flex flex-col items-center justify-center text-center border border-[#17306D]/10 relative overflow-hidden">
                  
                  {/* Subtle background graphics */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#0640CE]/20 blur-3xl rounded-none"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F97316]/10 blur-3xl rounded-none"></div>

                  {/* CLIENT IMAGE REQUIRED: The specific "Z" forward logo design */}
                  <div className="relative w-40 h-40 mb-8 z-10">
                    <Image 
                      src="/bouza-z.png" 
                      alt="Bouza Forward Z Icon" 
                      fill 
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>

                  <h3 className="text-2xl font-light text-white mb-4 z-10">The Forward Z</h3>
                  <p className="text-base font-light text-white/70 max-w-sm z-10 leading-relaxed">
                    Rooted in movement and speed. Our stylised forward icon shaped like the letter Z symbolizes progress, delivery, and velocity. The letter is dynamic—conveying the exact energy, agility, and direction that reflect our commitment to rapid, efficient services.
                  </p>
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