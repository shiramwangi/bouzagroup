"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Shield, Users, AlertCircle, Scale } from "lucide-react";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CompliancePage() {
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
        stagger: 0.1,
        delay: 0.1,
      }
    );
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-slate-50 text-[#17306D] antialiased pt-20 flex flex-col font-light">
      <Navbar />

      <main className="flex-grow">
        
        {/* ===================== HERO SECTION ===================== */}
        <section className="bg-white py-20 lg:py-28 border-b border-slate-200" data-animate>
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <Shield size={32} strokeWidth={1} className="mx-auto text-[#17306D]/30 mb-6" />
            <h1 className="text-4xl lg:text-5xl tracking-tight text-[#17306D] mb-6 font-light">
              Bouza Group Compliance
            </h1>
          </div>
        </section>

        {/* ===================== COMPLIANCE OVERVIEW ===================== */}
        <section className="py-16 bg-slate-50" data-animate>
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <div className="text-[#17306D]/80 leading-loose space-y-4 mb-16 text-lg">
              <p>
                The Bouza Group&apos;s culture emphasizes responsibility, respect, and trust. Ethical behavior is crucial for our long-term success.
              </p>
              <p>
                Our goal is to avoid risks that could undermine trust from customers, shareholders, and partners. We have a Compliance Management System to help manage compliance risks.
              </p>
              <p className="font-medium text-[#17306D]">
                Further information on following topics can be found here:
              </p>
            </div>

            {/* ===================== TOPICS GRID ===================== */}
            <div className="flex flex-col gap-10">
              
              {/* 1. Compliance Management System */}
              <div className="group border border-slate-200 bg-white p-8 hover:border-[#0640CE]/30 transition-colors rounded-none">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl font-light text-[#17306D]/30">01</span>
                  <div className="h-px w-8 bg-[#17306D]/20"></div>
                  <Scale size={20} strokeWidth={1} className="text-[#F5B11A]" />
                </div>
                <Link href="#" className="text-2xl tracking-tight text-[#17306D] hover:text-[#0640CE] transition-colors inline-block mb-4">
                  Compliance Management System
                </Link>
                <p className="text-[#17306D]/70 leading-relaxed font-light">
                  A structured framework designed to ensure that all Bouza Group holdings, including Defense, Logistics, and Motors, adhere strictly to national and international statutory requirements.
                </p>
              </div>

              {/* 2. Human Rights */}
              <div className="group border border-slate-200 bg-white p-8 hover:border-[#0640CE]/30 transition-colors rounded-none">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl font-light text-[#17306D]/30">02</span>
                  <div className="h-px w-8 bg-[#17306D]/20"></div>
                  <Users size={20} strokeWidth={1} className="text-[#F5B11A]" />
                </div>
                <Link href="#" className="text-2xl tracking-tight text-[#17306D] hover:text-[#0640CE] transition-colors inline-block mb-4">
                  Human Rights
                </Link>
                <p className="text-[#17306D]/70 leading-relaxed font-light">
                  Our absolute commitment to upholding fair labor practices, safe working conditions, and fundamental human rights across our entire global supply chain and manufacturing operations.
                </p>
              </div>

              {/* 3. Whistleblower System */}
              <div className="group border border-slate-200 bg-white p-8 hover:border-[#0640CE]/30 transition-colors rounded-none relative overflow-hidden">
                {/* Accent border for the most detailed section */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F5B11A]"></div>
                
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl font-light text-[#17306D]/30">03</span>
                  <div className="h-px w-8 bg-[#17306D]/20"></div>
                  <AlertCircle size={20} strokeWidth={1} className="text-[#F5B11A]" />
                </div>
                <Link href="#" className="text-2xl tracking-tight text-[#17306D] hover:text-[#0640CE] transition-colors inline-block mb-4">
                  Whistleblower System
                </Link>
                <div className="text-[#17306D]/70 leading-relaxed font-light space-y-4">
                  <p>
                    Responsible, sustainable and lawful behavior is an integral part of the Bouza Group&apos;s values. The Bouza Group&apos;s whistleblower system is open to all employees, business partners, customers and other third parties who wish to report specific or potential violations of the law. 
                  </p>
                  <p>
                    This enables risks to be recognized and addressed at an early stage and, if necessary, appropriate remedial action to be taken. Confidentiality and the protection of whistleblowers are our top priority. If desired, information can also be provided anonymously.
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