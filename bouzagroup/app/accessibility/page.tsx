"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Accessibility as UniversalAccess } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AccessibilityPage() {
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
            <UniversalAccess size={32} strokeWidth={1} className="mx-auto text-[#17306D]/30 mb-6" />
            <h1 className="text-4xl lg:text-5xl tracking-tight text-[#17306D] mb-6 font-light">
              This is how we understand accessibility.
            </h1>
          </div>
        </section>

        {/* ===================== ACCESSIBILITY CONTENT ===================== */}
        <section className="py-16 lg:py-24 bg-slate-50" data-animate>
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <div className="flex flex-col gap-10 text-[#17306D]/80 leading-loose">
              
              {/* Introduction */}
              <div className="space-y-6">
                <p>
                  Bouza Group makes its range of enterprise services and digital portals accessible in accordance with international web accessibility provisions. This is to ensure that our digital infrastructure is easily accessible to clients and that all partners can use them.
                </p>
                <p>
                  This accessibility statement applies to corporate services that are offered online on the Bouza Group Website.
                </p>
                <p>
                  In particular, accessibility guidelines require digital platforms to be accessible for users so that they can be found, accessed and used by people with disabilities in the usual way, without any particular difficulty and, in principle, without outside assistance. These requirements are specified to ensure the state of the art must be observed.
                </p>
                <p>
                  In addition to technical requirements, service providers must make certain information accessible in barrier-free form. In the case of our corporate services, the information on how they work must be understandable, without exceeding a level of complexity superior to level B2 of the Council of Europe&apos;s Common European Framework of Reference for Languages.
                </p>
              </div>

              {/* Products Explanation */}
              <div className="border-t border-slate-200 pt-10">
                <p className="mb-8">
                  We explain our most important products to you. And it&apos;s very simple. Bouza Group offers you various enterprise solutions — hereinafter referred to as &quot;services&quot;. The services are described here:
                </p>

                <div className="space-y-12">
                  
                  <div>
                    <h3 className="text-2xl font-light text-[#17306D] mb-4">Enterprise Mobility Solutions</h3>
                    <p className="mb-4">We offer a range of fleet options to suit different corporate models and operational requirements:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="font-medium text-[#17306D]">Enterprise Fleet Acquisition</span> – Scalable vehicle procurement for corporate needs</li>
                      <li><span className="font-medium text-[#17306D]">Fleet Management</span> – Comprehensive maintenance and operational support</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-light text-[#17306D] mb-4">Logistics & Freight Solutions</h3>
                    <p className="mb-4">Need reliable supply chain movement? Our logistics services provide fast and adaptable options:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="font-medium text-[#17306D]">Cross-border Transport</span> – Seamless regional supply chain movement across borders</li>
                      <li><span className="font-medium text-[#17306D]">Customs Clearing</span> – Efficient border and port-of-entry management</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-light text-[#17306D] mb-4">Defense & Security Operations</h3>
                    <p className="mb-4">Enhance your operational security with our specialized support services:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="font-medium text-[#17306D]">Secure Materiel Transport</span> – Highly secure and compliant defense logistics</li>
                      <li><span className="font-medium text-[#17306D]">Tactical Supply</span> – Precision armaments supply chain management</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-light text-[#17306D] mb-4">Digital Tools</h3>
                    <p className="mb-4">Stay in control with our innovative digital platforms:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="font-medium text-[#17306D]">Bouza Secure Portal</span> – Full visibility and control of your corporate engagements</li>
                      <li><span className="font-medium text-[#17306D]">Freight Tracking</span> – Real-time tracking of logistics routes and timelines</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-light text-[#17306D] mb-4">Consulting Services</h3>
                    <p className="mb-4">Our experts help you navigate the future of your supply chain:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="font-medium text-[#17306D]">Supply Chain Consulting</span> – Strategic fleet and mobility advice</li>
                      <li><span className="font-medium text-[#17306D]">Enterprise Strategy</span> – Transition support for complex corporate infrastructure</li>
                    </ul>
                  </div>

                </div>
              </div>

              {/* Technical Standards */}
              <div className="border-t border-slate-200 pt-10 space-y-6">
                <p>
                  Bouza Group strives in many ways to make its digital services and websites accessible for clients and to prepare them for the use of assistive technologies. To this end, the technical standards and the success criteria of the Web Content Accessibility Guidelines (WCAG) 2.1 referenced therein are fulfilled in the development of the websites at conformity levels A and AA.
                </p>
                <p>
                  In the case of digital services for our partners, the information on how they work is presented in an understandable way, without exceeding a level of complexity superior to level B2 of the Council of Europe&apos;s Common European Framework of Reference for Languages. 
                </p>
                <p>
                  As part of our digital channels, the information is presented in a perceivable and understandable way. The information is made available in text formats that are suitable for generating alternative assistive formats, which can be displayed by users in different forms and can be perceived via more than one sensory channel. The information is presented in a font with an appropriate font size, suitable font form and with sufficient contrast and adjustable spacing between letters, lines and paragraphs. 
                </p>
                <p>
                  Insofar as identification methods, authentication methods, electronic signatures, security functions and payment services are provided, these are perceivable, operable, understandable and robust.
                </p>
              </div>

              {/* Contact and Authorities */}
              <div className="border-t border-slate-200 pt-10">
                <div className="mb-8">
                  <h3 className="text-2xl font-light text-[#17306D] mb-4">Market surveillance authority</h3>
                  <p>National Council for Persons with Disabilities, Nairobi, Kenya.</p>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-light text-[#17306D] mb-4">Feedback and contact</h3>
                  <p className="mb-2">
                    Would you like to tell us about existing barriers or request information on how we ensure accessibility? 
                  </p>
                  <p>
                    For your feedback and any further information, please contact our responsible contact persons at <a href="mailto:info@bouzagroup.com" className="text-[#0640CE] hover:underline">info@bouzagroup.com</a>.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <p className="text-sm text-[#17306D]/60 italic">
                    Statement update: This accessibility statement was last updated on 27.07.2026.
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