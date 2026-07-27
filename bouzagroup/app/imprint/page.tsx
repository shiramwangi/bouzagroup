"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FileText } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ImprintPage() {
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
            <FileText size={32} strokeWidth={1} className="mx-auto text-[#17306D]/30 mb-6" />
            <h1 className="text-4xl lg:text-5xl tracking-tight text-[#17306D] mb-6 font-light">
              Imprint
            </h1>
          </div>
        </section>

        {/* ===================== IMPRINT CONTENT ===================== */}
        <section className="py-16 lg:py-24 bg-slate-50" data-animate>
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <div className="flex flex-col gap-8 text-[#17306D]/80 leading-loose">
              
              <p className="border-b border-slate-200 pb-8 mb-4">
                This Website is maintained by Bouza Group. References to &quot;Bouza Group&quot;, &quot;we&quot;, &quot;us&quot; and &quot;our&quot; is to Bouza Group unless otherwise indicated.
              </p>

              <div>
                <p className="font-medium text-[#17306D]">Bouza Group</p>
                <p>Bouza Place HQ: Magharibi Place,</p>
                <p>Mai Mahiu Rd, Nairobi West Area,</p>
                <p>Nairobi, Kenya.</p>
              </div>

              <div>
                <p className="font-medium text-[#17306D]">Postal Address</p>
                <p>P.O Box 24286-00100</p>
                <p>Mai Mahiu Rd, Nairobi Kenya</p>
              </div>

              <div>
                <p className="font-medium text-[#17306D]">Contact</p>
                <p>Phone: +254 117726583</p>
                <p>Email: info@bouzagroup.com</p>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <p>
                  <span className="font-medium text-[#17306D]">Legal representatives:</span> [Client to provide names of Directors/Board]
                </p>
                <p>
                  <span className="font-medium text-[#17306D]">Commercial Registry:</span> [Client to provide Company Registration Number]
                </p>
                <p>
                  <span className="font-medium text-[#17306D]">Value-added tax identification no.:</span> [Client to provide KRA PIN / VAT Number]
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}