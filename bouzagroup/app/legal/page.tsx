"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Scale } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LegalDisclaimerPage() {
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
            <Scale size={32} strokeWidth={1} className="mx-auto text-[#17306D]/30 mb-6" />
            <h1 className="text-4xl lg:text-5xl tracking-tight text-[#17306D] mb-6 font-light">
              Legal disclaimer
            </h1>
          </div>
        </section>

        {/* ===================== DISCLAIMER CONTENT ===================== */}
        <section className="py-16 lg:py-24 bg-slate-50" data-animate>
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <div className="flex flex-col gap-12 text-[#17306D]/80 leading-loose">
              
              {/* Interpretation */}
              <div>
                <h2 className="text-xl font-medium text-[#17306D] mb-4">Interpretation</h2>
                <p>
                  Compliance with applicable laws is firmly anchored in Bouza Group&apos;s corporate governance. Where reference is made to Bouza Group or any Bouza Group company (including Bouza Defense, Bouza Logistics, and Bouza Motors) such reference implies compliance of such company with all laws applicable to it and nothing should be interpreted to the contrary.
                </p>
              </div>

              {/* Legal Note */}
              <div>
                <h2 className="text-xl font-medium text-[#17306D] mb-4">Legal Note</h2>
                <p className="mb-4">
                  Bouza Group appreciates your interest in its products and services and your visit to this website.
                </p>
                <p>
                  References to Bouza Group are to Bouza Group Ltd., the ultimate parent company, whose address is Bouza Place HQ, Magharibi Place, Mai Mahiu Rd, Nairobi West Area, Nairobi, Kenya.
                </p>
              </div>

              {/* Copyrights */}
              <div>
                <h2 className="text-xl font-medium text-[#17306D] mb-4">Copyrights</h2>
                <p>
                  © Copyright 2026 Bouza Group, Nairobi, Kenya. All rights reserved. The text, images, graphics, sound files, animation files, video files, and their arrangement on the Bouza Group website are all subject to copyright and other intellectual property protection. These objects may not be copied for commercial use or distribution, nor may these objects be modified or reposted to other sites. Some Bouza Group websites may contain images whose copyrights are attributable to third parties.
                </p>
              </div>

              {/* Trademarks */}
              <div>
                <h2 className="text-xl font-medium text-[#17306D] mb-4">Trademarks</h2>
                <p>
                  Unless otherwise indicated, all trademarks on this website are subject to trademark rights of Bouza Group, including marks, corporate names, logos, and emblems.
                </p>
              </div>

              {/* Warranties, Liability */}
              <div>
                <h2 className="text-xl font-medium text-[#17306D] mb-4">Warranties, Liability</h2>
                <p>
                  The information on these websites is provided &quot;as is&quot; and without warranty of any kind, expressed or implied, including (but not limited to) any implied warranties of merchantability, fitness for any particular purpose, or non-infringement of third party rights. While the information provided is believed to be accurate, it may include errors or inaccuracies. In no event shall Bouza Group be liable to any person for any special, indirect or consequential damages relating to this material, unless caused by gross negligence or intentional misconduct. Bouza Group is not responsible for the contents of websites that are maintained by third parties and therefore waives its liability for any links from this website to other websites.
                </p>
              </div>

              {/* Licenses */}
              <div>
                <h2 className="text-xl font-medium text-[#17306D] mb-4">Licenses</h2>
                <p className="mb-6">
                  Bouza Group has sought to achieve an innovative and informative digital network. However, you also need to understand that Bouza Group must protect its intellectual property, including its patents, trademarks, and copyrights. Accordingly, please appreciate that no license to use the intellectual property of Bouza Group companies or the intellectual property of third parties has been granted by this website.
                </p>
                
                <p className="text-sm italic text-[#17306D]/60 border-t border-slate-200 pt-6 mt-10">
                  Updated July 27, 2026
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