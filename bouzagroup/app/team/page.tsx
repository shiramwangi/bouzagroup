"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ArrowUpRight, Scale, ShieldCheck, Target, Users } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const VALUES = [
  {
    title: "Uncompromising Execution",
    description: "In defense, logistics, and automotive trade, there is no margin for error. We execute with precision, ensuring every standard is not just met, but exceeded.",
    Icon: Target,
  },
  {
    title: "Absolute Integrity",
    description: "Our operations span global borders and sensitive sectors. We operate with strict compliance, radical transparency, and an unwavering moral compass.",
    Icon: Scale,
  },
  {
    title: "Long-Term Vision",
    description: "We are not built for short-term gains. We build infrastructure, partnerships, and teams designed to dominate their markets for decades.",
    Icon: ShieldCheck,
  },
];

const STRUCTURE = [
  {
    division: "Bouza Group Executive Board",
    roles: ["Founder & Chief Executive Officer", "Chief Financial Officer", "Chief Operating Officer"],
  },
  {
    division: "Bouza Defense",
    roles: ["Head of Defense Manufacturing", "Director of Global Compliance", "Lead Materiel Strategist"],
  },
  {
    division: "Bouza Logistics",
    roles: ["VP of Global Freight & Customs", "Head of Border Operations", "Director of Supply Chain"],
  },
  {
    division: "Bouza Motors",
    roles: ["Director of Automotive Dealerships", "Head of Spare Parts Distribution", "Fleet Network Manager"],
  },
];

export default function TeamPage() {
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
            Our People
          </p>
          <h1 data-animate className="mt-6 max-w-4xl text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            The minds behind the infrastructure.
          </h1>
          <p data-animate className="mt-8 max-w-2xl text-lg font-normal leading-relaxed text-[#17306D]/70">
            A holding company is only as strong as the operators running its divisions. Bouza Group is driven by specialists who know their markets intimately and execute under one shared standard of excellence.
          </p>
        </section>

        {/* ===================== CEO & FOUNDER ===================== */}
        <section className="bg-slate-50 py-24 lg:py-32 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              <div data-animate className="lg:col-span-5 relative">
                {/* Sharp square aspect ratio to match the corporate identity */}
                <div className="aspect-square w-full relative overflow-hidden shadow-2xl bg-slate-200">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D4D03AQF70Bklvw6JWA/profile-displayphoto-crop_800_800/B4DZ0569ktHMAI-/0/1774793254371?e=1787184000&v=beta&t=vp_dWM1tL6PFko6yyfxL99Fu5g86TqLV2xckkL-ILFk" 
                    alt="Mohammed Mousaa Bodle" 
                    className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Subtle red accent bar */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-[#EB2027]"></div>
                </div>
              </div>

              <div data-animate className="lg:col-span-7">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#EB2027] mb-4">
                  Founder & CEO
                </p>
                <h2 className="text-4xl font-medium tracking-tight lg:text-5xl mb-6">
                  Mohammed Mousaa Bodle
                </h2>
                <div className="space-y-6 text-base lg:text-lg font-normal leading-relaxed text-[#17306D]/80">
                  <p>
                    As the Founder and CEO of Bouza Group, Mohammed Mousaa Bodle built the holding company on a singular philosophy: independently operated businesses bound by a shared, uncompromising discipline. 
                  </p>
                  <p>
                    Recognizing the need for robust infrastructure across emerging and established markets, Mohammed structured Bouza Group to tackle highly complex industries—defense materiel, border-to-border logistics, and automotive networks—where trust and reliability are the only metrics that matter.
                  </p>
                  <p>
                    Under his leadership, Bouza Group does not just enter markets; it builds the frameworks that allow other industries to thrive.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================== TEAM STRUCTURE ===================== */}
        <section className="bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div data-animate className="mb-16">
              <h2 className="text-3xl font-medium tracking-tight lg:text-4xl">
                Corporate Structure
              </h2>
              <p className="mt-4 max-w-2xl text-base text-[#17306D]/70">
                Bouza Group operates through a decentralized leadership model. Each division is guided by industry veterans who possess complete operational autonomy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {STRUCTURE.map((group, index) => (
                <div data-animate key={group.division} className="border-t border-[#17306D]/10 pt-6">
                  <h3 className="text-lg font-medium text-[#0640CE] mb-6">
                    {group.division}
                  </h3>
                  <ul className="space-y-4">
                    {group.roles.map((role) => (
                      <li key={role} className="text-sm font-medium text-[#17306D]/80 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-none bg-[#F5B11A] mt-1.5 flex-shrink-0"></span>
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== OUR VALUES ===================== */}
        <section className="bg-[#17306D] text-white py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div data-animate className="mb-16 md:text-center max-w-3xl md:mx-auto">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#F5B11A]">
                The Bouza Standard
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight lg:text-4xl">
                The values that dictate our decisions.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {VALUES.map((val, i) => (
                <div data-animate key={val.title} className="bg-white/5 border border-white/10 p-8 rounded-none">
                  <val.Icon className="text-[#EB2027] mb-6" size={32} strokeWidth={1.5} />
                  <h3 className="text-xl font-medium mb-4">{val.title}</h3>
                  <p className="text-sm font-normal text-white/70 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== CAREERS CTA ===================== */}
        <section className="bg-[#F5B11A] py-24 lg:py-32 border-y border-slate-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center flex flex-col items-center">
            <div data-animate className="w-16 h-16 bg-white flex items-center justify-center rounded-none mb-8 shadow-sm">
              <Users size={28} className="text-[#17306D]" strokeWidth={1.5} />
            </div>
            <h2 data-animate className="text-3xl font-medium tracking-tight text-[#17306D] lg:text-5xl mb-6">
              Build the infrastructure of tomorrow.
            </h2>
            <p data-animate className="max-w-2xl text-lg font-normal text-[#17306D]/80 mb-10">
              We are always looking for rigorous, forward-thinking professionals to join our corporate board and operating divisions.
            </p>
            <Link
              data-animate
              href="/careers"
              className="inline-flex items-center gap-2 rounded-none bg-[#EB2027] px-8 py-4 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#17306D]"
            >
              View Open Roles
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}