"use client";

import { useState } from "react";
import Link from "next/link";
import ContactModal from "./ContactModal";

export default function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <footer className="relative overflow-hidden bg-[#17306D] pt-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          
          {/* ===================== Top Links Grid ===================== */}
          <div className="relative z-10 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 pb-20">
            
            {/* Column 1 */}
            <div>
              <h4 className="mb-6 text-sm font-medium tracking-wide text-white">
                Our Holdings
              </h4>
              <ul className="flex flex-col gap-4 text-sm font-normal text-white/70">
                <li>
                  <Link href="/defense" className="transition-colors hover:text-[#EB2027] hover:underline underline-offset-4">
                    Bouza Defense
                  </Link>
                </li>
                <li>
                  <Link href="/logistics" className="transition-colors hover:text-[#0640CE] hover:underline underline-offset-4">
                    Bouza Logistics
                  </Link>
                </li>
                <li>
                  <Link href="/motors" className="transition-colors hover:text-[#F5B11A] hover:underline underline-offset-4">
                    Bouza Motors
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="mb-6 text-sm font-medium tracking-wide text-white">
                Corporate Services
              </h4>
              <ul className="flex flex-col gap-4 text-sm font-normal text-white/70">
                <li>
                  <Link href="/defense#manufacturing" className="transition-colors hover:text-white hover:underline underline-offset-4">
                    Defense Manufacturing
                  </Link>
                </li>
                <li>
                  <Link href="/logistics#freight" className="transition-colors hover:text-white hover:underline underline-offset-4">
                    Freight & Forwarding
                  </Link>
                </li>
                <li>
                  <Link href="/motors#dealerships" className="transition-colors hover:text-white hover:underline underline-offset-4">
                    Vehicle Dealerships
                  </Link>
                </li>
                <li>
                  <Link href="/services/consulting" className="transition-colors hover:text-white hover:underline underline-offset-4">
                    Supply Chain Consulting
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="mb-6 text-sm font-medium tracking-wide text-white">
                Client Tools
              </h4>
              <ul className="flex flex-col gap-4 text-sm font-normal text-white/70">
                <li>
                  <Link href="/portal" className="transition-colors hover:text-white hover:underline underline-offset-4">
                    Bouza Secure Portal
                  </Link>
                </li>
                <li>
                  <Link href="/tracking" className="transition-colors hover:text-white hover:underline underline-offset-4">
                    Freight Tracking
                  </Link>
                </li>
                <li>
                  <Link href="/fleet" className="transition-colors hover:text-white hover:underline underline-offset-4">
                    Fleet Management
                  </Link>
                </li>
                <li>
                  <Link href="/network" className="transition-colors hover:text-white hover:underline underline-offset-4">
                    Connected Network
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="mb-6 text-sm font-medium tracking-wide text-white">
                About Bouza
              </h4>
              <ul className="flex flex-col gap-4 text-sm font-normal text-white/70">
                <li>
                  <Link href="/about" className="transition-colors hover:text-white hover:underline underline-offset-4">
                    Mission & Standard
                  </Link>
                </li>
                <li>
                  <Link href="/investors" className="transition-colors hover:text-white hover:underline underline-offset-4">
                    Investor Relations
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="transition-colors hover:text-white hover:underline underline-offset-4">
                    Careers
                  </Link>
                </li>
                <li>
                  {/* Swapped Link for Button */}
                  <button 
                    onClick={() => setIsContactOpen(true)} 
                    className="transition-colors hover:text-white hover:underline underline-offset-4 text-left"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* ===================== Background Watermark ===================== */}
          <div className="pointer-events-none absolute bottom-20 left-1/2 -translate-x-1/2 text-[14vw] font-medium tracking-[0.1em] text-white/[0.02] select-none whitespace-nowrap">
            BOUZA GROUP
          </div>

          {/* ===================== Bottom Legal Bar ===================== */}
          <div className="relative z-10 flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 lg:flex-row">
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-normal text-white/60 lg:justify-start">
              <Link href="/imprint" className="transition-colors hover:text-white hover:underline underline-offset-4">Imprint</Link>
              <Link href="/legal" className="transition-colors hover:text-white hover:underline underline-offset-4">Legal Disclaimer</Link>
              <Link href="/privacy" className="transition-colors hover:text-white hover:underline underline-offset-4">Privacy Policy</Link>
              <Link href="/cookies" className="transition-colors hover:text-white hover:underline underline-offset-4">Cookie Policy</Link>
              <Link href="/accessibility" className="transition-colors hover:text-white hover:underline underline-offset-4">Accessibility Statement</Link>
              <Link href="/compliance" className="transition-colors hover:text-white hover:underline underline-offset-4">Compliance</Link>
            </div>

            {/* Social Icons & Copyright */}
            <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center">
              <div className="flex gap-4">
                <Link href="https://facebook.com" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-colors hover:border-white/30 hover:bg-white/5 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </Link>
                <Link href="https://linkedin.com" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-colors hover:border-white/30 hover:bg-white/5 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </Link>
                <Link href="https://youtube.com" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-colors hover:border-white/30 hover:bg-white/5 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </Link>
              </div>
              <p className="text-sm font-normal text-white/50 text-center lg:text-right">
                © {new Date().getFullYear()} Bouza Group. All Rights Reserved.
              </p>
            </div>

          </div>
        </div>
      </footer>

      {/* Render Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}