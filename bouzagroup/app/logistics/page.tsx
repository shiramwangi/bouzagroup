"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { Mail } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LogisticsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  // Subtle entrance animation for page sections
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
    <div ref={pageRef} className="min-h-screen bg-white text-[#17306D] antialiased">
      <Navbar />

      <main className="pt-28 pb-20 lg:pt-36">
        {/* ===================== HERO SECTION ===================== */}
        <section className="mx-auto max-w-7xl px-6 lg:px-10" data-animate>
          <div className="relative overflow-hidden rounded-3xl bg-[#17306D] min-h-[500px] lg:min-h-[600px] flex items-center">
            {/* Hero Background Image */}
            <div className="absolute inset-0 z-0">
              <Image 
                src="/logistics-hero.jpg" 
                alt="Bouza Logistics Global Freight" 
                fill 
                sizes="100vw"
                className="object-cover object-center opacity-40"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#17306D] via-[#17306D]/80 to-transparent"></div>
            </div>

            {/* Hero Content (Left Text, Right Logo) */}
            <div className="relative z-10 w-full px-8 py-16 lg:px-16 lg:py-24 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
              
              {/* Left Column: Text Content */}
              <div className="max-w-2xl">
                <div className="mb-6">
                  <span className="text-sm font-medium uppercase tracking-wide text-[#F5B11A]">
                    Logistics, Clearing & Forwarding
                  </span>
                </div>
                <h1 className="text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                  Because global trade should feel effortless.
                </h1>
                <p className="text-lg font-normal text-white/80 max-w-xl mb-10">
                  Discover our range of comprehensive freight and customs solutions — all working quietly in the background to keep your supply chain moving smoothly.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0640CE] px-7 py-3.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#F5B11A] hover:text-[#17306D]"
                >
                  Enhance your supply chain
                </Link>
              </div>

              {/* Right Column: Large Logo */}
              <div className="w-48 lg:w-80 flex-shrink-0">
                <Image 
                  src="/bouzalogistics.png" 
                  alt="Bouza Logistics" 
                  width={400} 
                  height={120} 
                  className="w-full h-auto object-contain drop-shadow-2xl" 
                  priority
                />
              </div>

            </div>
          </div>
        </section>

        {/* ===================== WHAT MAKES US DIFFERENT ===================== */}
        <section className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10 lg:py-32" data-animate>
          <h2 className="text-3xl font-medium tracking-tight lg:text-4xl mb-8">
            What makes us different?
          </h2>
          <p className="text-base font-normal text-[#17306D]/80 leading-relaxed mb-6">
            Wherever your cargo is headed, we&apos;re here to smooth the way. Our integrated services — from <span className="text-[#0640CE] font-medium">customs clearing and compliance</span> to <span className="text-[#0640CE] font-medium">freight forwarding and warehousing</span> — offer extra layers of support to keep your goods moving across borders without disruption.
          </p>
          <p className="text-base font-normal text-[#17306D]/80 leading-relaxed">
            Our Bouza experts work closely with you to find the right mix of logistical services for your business, so you can stay focused on what you do best. Less paperwork, less downtime, more peace of mind.
          </p>
        </section>

        {/* ===================== SMART SERVICES (CARDS) ===================== */}
        <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 lg:pb-32" data-animate>
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-[#17306D]/50 mb-4">Core Services</p>
            <h2 className="text-3xl font-medium tracking-tight lg:text-4xl mb-6">
              Smart infrastructure for your freight
            </h2>
            <p className="text-base font-normal text-[#17306D]/75 max-w-3xl mx-auto">
              Running a global supply chain comes with complexity, but we&apos;re here to make it manageable. Our core services are designed to keep your cargo moving, minimize border delays, and reduce your administrative load.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group cursor-pointer">
              <div className="relative h-64 w-full overflow-hidden rounded-2xl mb-6">
                <Image 
                  src="/logistics-1.jpg" 
                  alt="Customs Clearing" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <h3 className="text-xl font-medium mb-3 group-hover:text-[#0640CE] transition-colors">Customs Clearing</h3>
              <p className="text-sm font-normal text-[#17306D]/75 leading-relaxed">
                Keep your freight moving with our dedicated customs agents. We handle tariffs, border compliance, and documentation digitally to reduce border friction and avoid unexpected costs.
              </p>
            </div>
            {/* Card 2 */}
            <div className="group cursor-pointer">
              <div className="relative h-64 w-full overflow-hidden rounded-2xl mb-6">
                <Image 
                  src="/logistics-2.jpg" 
                  alt="Freight Forwarding" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <h3 className="text-xl font-medium mb-3 group-hover:text-[#0640CE] transition-colors">Freight Forwarding</h3>
              <p className="text-sm font-normal text-[#17306D]/75 leading-relaxed">
                Get the right routing for your cargo with solutions that match your deadlines. From premium air freight to cost-effective ocean routing, we cover every aspect — built to fit your budget.
              </p>
            </div>
            {/* Card 3 */}
            <div className="group cursor-pointer">
              <div className="relative h-64 w-full overflow-hidden rounded-2xl mb-6">
                <Image 
                  src="/logistics-3.jpg" 
                  alt="Warehousing" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <h3 className="text-xl font-medium mb-3 group-hover:text-[#0640CE] transition-colors">Secure Warehousing</h3>
              <p className="text-sm font-normal text-[#17306D]/75 leading-relaxed">
                Storage happens, but with Bouza, inventory stays simple. We manage the entire process from receipt to dispatch, providing real-time tracking updates so your goods stay secure.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== CONTACT CARD ===================== */}
        <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 lg:pb-32" data-animate>
          <h2 className="text-3xl font-medium tracking-tight lg:text-4xl mb-12">
            Looking for the right services?
          </h2>

          <div className="relative rounded-3xl lg:rounded-bl-[100px] lg:rounded-tr-[100px] bg-slate-50 p-8 pt-32 lg:p-16 lg:pt-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 border border-[#17306D]/5">
            
            {/* Image Container */}
            <div className="absolute -top-20 lg:-top-16 lg:-left-4 w-56 h-64 lg:w-72 lg:h-80 flex-shrink-0 z-10">
              <div className="w-full h-full relative drop-shadow-xl">
                <Image 
                  src="/support.png" 
                  alt="Logistics Support Team" 
                  fill 
                  sizes="(max-width: 1024px) 14rem, 18rem"
                  className="object-contain object-bottom" 
                />
              </div>
            </div>

            <div className="hidden lg:block lg:w-56 flex-shrink-0"></div>

            {/* Text Content */}
            <div className="flex-1 relative z-20">
              <h3 className="text-2xl font-medium mb-4">
                Get in touch with our logistics experts
              </h3>
              <p className="text-base font-normal text-[#17306D]/75 mb-8 max-w-xl">
                Whether you&apos;re looking to simplify customs admin, boost supply chain efficiency or keep your freight moving without disruption, we&apos;re here to support you. Let&apos;s shape a solution that works for your business.
              </p>
              
              <div className="flex items-center gap-3 mb-8">
                <Mail size={18} className="text-[#0640CE]" />
                <a href="mailto:logistics@bouzagroup.com" className="text-sm font-medium underline underline-offset-4 hover:text-[#0640CE] transition-colors">
                  logistics@bouzagroup.com
                </a>
              </div>

              <Link
                href="/contact"
                className="inline-block rounded-full bg-[#EB2027] px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#17306D]"
              >
                Get in contact
              </Link>
            </div>
          </div>
        </section>

        {/* ===================== ALTERNATING BLOCKS ===================== */}
        <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24" data-animate>
          <div className="text-center mb-20">
            <p className="text-sm font-medium uppercase tracking-widest text-[#17306D]/50 mb-4">Additional Services</p>
            <h2 className="text-3xl font-medium tracking-tight lg:text-4xl max-w-2xl mx-auto leading-tight">
              Trade with confidence — backed by Bouza&apos;s global network
            </h2>
          </div>

          {/* Block 1: Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24">
            <div className="flex-1 lg:pr-10">
              <p className="text-xs font-medium uppercase tracking-widest text-[#17306D]/50 mb-4">Global Reach</p>
              <h3 className="text-3xl font-medium mb-6">Air & Ocean Freight</h3>
              <p className="text-base font-normal text-[#17306D]/75 leading-relaxed">
                No matter if your cargo requires the speed of air transit or the volume capacity of ocean liners — Bouza&apos;s freight division keeps you moving. You&apos;ll get priority vessel space quickly and hassle-free. Availability depends on your specific routing, so be sure to check our schedules or contact us for details.
              </p>
            </div>
            <div className="flex-1 w-full relative h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-[#17306D]/10">
              <Image 
                src="/logistics-4.jpg" 
                alt="Air Freight" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover" 
              />
            </div>
          </div>

          {/* Block 2: Image Left, Text Right */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 w-full relative h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-[#17306D]/10">
              <Image 
                src="/logistics-5.jpg" 
                alt="Port Operations" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover" 
              />
            </div>
            <div className="flex-1 lg:pl-10">
              <p className="text-xs font-medium uppercase tracking-widest text-[#17306D]/50 mb-4">Port Operations</p>
              <h3 className="text-3xl font-medium mb-6">Terminal Handling</h3>
              <p className="text-base font-normal text-[#17306D]/75 leading-relaxed">
                When your shipments arrive, every minute counts. With Bouza Terminal Handling, your containers get fast, reliable support. Included in our end-to-end contracts, this service offers seamless clearing across major global ports. Our trained specialists provide immediate on-ground assistance, coordinating the right follow-up transport to get goods moving inland.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== OTHER SERVICES (CAROUSEL) ===================== */}
        <section className="bg-slate-50 py-24 lg:py-32" data-animate>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="text-sm font-medium uppercase tracking-widest text-[#17306D]/50 mb-4">Logistics Management</p>
            <h2 className="text-3xl font-medium tracking-tight lg:text-4xl mb-12">
              Other services
            </h2>

            <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              
              <div className="min-w-[85vw] md:min-w-[400px] bg-white rounded-2xl overflow-hidden shadow-sm border border-[#17306D]/5 snap-start">
                <div className="h-48 relative">
                  <Image 
                    src="/logistics-6.jpg" 
                    alt="Supply Chain Consulting" 
                    fill 
                    sizes="(max-width: 768px) 85vw, 400px"
                    className="object-cover" 
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-medium mb-3">Supply Chain Consulting</h3>
                  <p className="text-sm font-normal text-[#17306D]/75">
                    We take the hassle out of managing complex trade routes. Our service ensures accurate, on-time processing of customs paperwork, so you stay compliant without having to worry about administrative details.
                  </p>
                </div>
              </div>

              <div className="min-w-[85vw] md:min-w-[400px] bg-white rounded-2xl overflow-hidden shadow-sm border border-[#17306D]/5 snap-start">
                <div className="h-48 relative">
                  <Image 
                    src="/logistics-1.jpg" 
                    alt="Cargo Insurance" 
                    fill 
                    sizes="(max-width: 768px) 85vw, 400px"
                    className="object-cover" 
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-medium mb-3">Cargo Insurance</h3>
                  <p className="text-sm font-normal text-[#17306D]/75">
                    From minor delays to total losses — we handle it. Our experts manage the entire process, ensuring fast claims, proper documentation, and fewer disruptions for your business.
                  </p>
                </div>
              </div>

              <div className="min-w-[85vw] md:min-w-[400px] bg-white rounded-2xl overflow-hidden shadow-sm border border-[#17306D]/5 snap-start">
                <div className="h-48 relative">
                  <Image 
                    src="/logistics-2.jpg" 
                    alt="Last Mile Delivery" 
                    fill 
                    sizes="(max-width: 768px) 85vw, 400px"
                    className="object-cover" 
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-medium mb-3">Last Mile Delivery</h3>
                  <p className="text-sm font-normal text-[#17306D]/75">
                    Bridging the final gap between port and doorstep. Our dedicated fleets ensure your goods arrive exactly when promised, tracked digitally every step of the way.
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