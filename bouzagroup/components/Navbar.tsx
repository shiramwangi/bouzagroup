"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  ArrowUpRight,
  Crosshair,
  Truck,
  Car,
} from "lucide-react";

import ContactModal from "./ContactModal";

type AccentKey = "red" | "blue" | "yellow";

type Holding = {
  name: string;
  tagline: string;
  href: string;
  accent: AccentKey;
  Icon: typeof Crosshair;
  index: string;
};

const HOLDINGS: Holding[] = [
  {
    name: "Bouza Defense",
    tagline: "Arms & Ammunition",
    href: "/defense",
    accent: "red",
    Icon: Crosshair,
    index: "01",
  },
  {
    name: "Bouza Logistics",
    tagline: "Logistics, Clearing & Forwarding",
    href: "/logistics",
    accent: "blue",
    Icon: Truck,
    index: "02",
  },
  {
    name: "Bouza Motors",
    tagline: "Car Dealerships & Spare Parts",
    href: "/motors",
    accent: "yellow",
    Icon: Car,
    index: "03",
  },
];

const ABOUT_LINKS = [
  { label: "Our Story", href: "/us" },
  { label: "Mission & Vision", href: "/mission" },
  { label: "Latest News / Press", href: "/news" },
  { label: "Careers", href: "/careers" },
];

const SOLUTIONS_DATA = [
  {
    company: "Bouza Defense",
    links: [
      { label: "Defense Manufacturing", href: "/defense#manufacturing" },
      { label: "Bouza Secure Portal", href: "/portal" },
    ],
  },
  {
    company: "Bouza Logistics",
    links: [
      { label: "Freight & Forwarding", href: "/logistics#freight" },
      { label: "Freight Tracking", href: "/tracking" },
      { label: "Supply Chain Consulting", href: "/services/consulting" },
    ],
  },
  {
    company: "Bouza Motors",
    links: [
      { label: "Vehicle Dealerships", href: "/motors#dealerships" },
      { label: "Fleet Management", href: "/fleet" },
      { label: "Connected Network", href: "/network" },
    ],
  },
];

const ACCENT_MAP: Record<
  AccentKey,
  { text: string; groupHover: string }
> = {
  red: {
    text: "text-[#EB2027]",
    groupHover: "group-hover:bg-[#EB2027] group-hover:text-white",
  },
  blue: {
    text: "text-[#0640CE]",
    groupHover: "group-hover:bg-[#0640CE] group-hover:text-white",
  },
  yellow: {
    text: "text-[#F5B11A]",
    groupHover: "group-hover:bg-[#F5B11A] group-hover:text-[#17306D]",
  },
};

function useDropdownAnimation(
  isOpen: boolean,
  dropdownRef: React.RefObject<HTMLDivElement | null>,
  itemsRef: React.MutableRefObject<HTMLAnchorElement[] | HTMLDivElement[]>,
  chevronRef: React.RefObject<SVGSVGElement | null>
) {
  useEffect(() => {
    if (!dropdownRef.current) return;

    if (isOpen) {
      gsap.killTweensOf(dropdownRef.current);
      gsap.set(dropdownRef.current, { display: "block" });
      gsap.fromTo(
        dropdownRef.current,
        { autoAlpha: 0, y: -10, scale: 0.98 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.32,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        itemsRef.current,
        { autoAlpha: 0, x: -8 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.04,
          delay: 0.06,
        }
      );
      if (chevronRef.current) {
        gsap.to(chevronRef.current, {
          rotate: 180,
          duration: 0.25,
          ease: "power2.out",
        });
      }
    } else {
      gsap.to(dropdownRef.current, {
        autoAlpha: 0,
        y: -8,
        scale: 0.98,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          if (dropdownRef.current) {
            gsap.set(dropdownRef.current, { display: "none" });
          }
        },
      });
      if (chevronRef.current) {
        gsap.to(chevronRef.current, {
          rotate: 0,
          duration: 0.2,
          ease: "power2.in",
        });
      }
    }
  }, [isOpen, dropdownRef, itemsRef, chevronRef]);
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const [aboutOpen, setAboutOpen] = useState(false);
  const [companiesOpen, setCompaniesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const aboutItemsRef = useRef<HTMLAnchorElement[]>([]);
  const aboutChevronRef = useRef<SVGSVGElement>(null);

  const companiesDropdownRef = useRef<HTMLDivElement>(null);
  const companiesItemsRef = useRef<HTMLAnchorElement[]>([]);
  const companiesChevronRef = useRef<SVGSVGElement>(null);

  const solutionsDropdownRef = useRef<HTMLDivElement>(null);
  const solutionsItemsRef = useRef<HTMLDivElement[]>([]);
  const solutionsChevronRef = useRef<SVGSVGElement>(null);

  const navRef = useRef<HTMLElement>(null);

  useDropdownAnimation(aboutOpen, aboutDropdownRef, aboutItemsRef, aboutChevronRef);
  useDropdownAnimation(companiesOpen, companiesDropdownRef, companiesItemsRef, companiesChevronRef);
  useDropdownAnimation(solutionsOpen, solutionsDropdownRef, solutionsItemsRef, solutionsChevronRef);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#17306D]/95 backdrop-blur-xl shadow-[0_4px_24px_-8px_rgba(0,0,0,0.45)] border-white/10"
            : "bg-[#17306D]/90 backdrop-blur-md border-white/10"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          {/* Reduced height back down to a sleek h-20 (80px) standard */}
          <div className="relative flex h-20 items-center justify-between w-full">
            
            {/* ================= MOBILE SPACER ================= */}
            <div className="flex-1 lg:hidden"></div>

            {/* ================= LEFT WING ================= */}
            <div className="hidden lg:flex flex-1 items-center justify-end pr-8 xl:pr-14 z-10">
              <nav className="flex items-center gap-8 xl:gap-10">
                
                {/* About Us Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setAboutOpen((v) => !v)}
                    aria-expanded={aboutOpen}
                    className="flex items-center gap-1.5 text-sm font-medium uppercase tracking-wide text-white hover:text-[#F5B11A] transition-colors"
                  >
                    About Us
                    <ChevronDown ref={aboutChevronRef} size={16} strokeWidth={2} className="text-white/70" />
                  </button>

                  <div
                    ref={aboutDropdownRef}
                    style={{ display: "none" }}
                    className="absolute left-1/2 top-full mt-3 w-64 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#17306D] p-2 shadow-2xl"
                  >
                    {ABOUT_LINKS.map((link, i) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        ref={(el) => { if (el) aboutItemsRef.current[i] = el; }}
                        className="block rounded-xl px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5 hover:text-[#F5B11A]"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Standard Links */}
                <Link href="/who-we-are" className="text-sm font-medium uppercase tracking-wide text-white hover:text-[#F5B11A] transition-colors">
                  Who We Are
                </Link>
                <Link href="/why-bouza" className="text-sm font-medium uppercase tracking-wide text-white hover:text-[#F5B11A] transition-colors">
                  Why Bouza
                </Link>

              </nav>
            </div>

            {/* ================= CENTER (LOGO) ================= */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center lg:static lg:translate-x-0 lg:translate-y-0 shrink-0 pointer-events-none lg:pointer-events-auto">
              <Link href="/" className="flex items-center pointer-events-auto" aria-label="Bouza Group home">
                {/* Slimmed down the logo dimensions to fit perfectly inside the sleek h-20 header */}
                <Image
                  src="/logo.png"
                  alt="Bouza Group"
                  width={240}
                  height={80}
                  priority
                  className="h-10 lg:h-12 xl:h-14 w-auto object-contain"
                />
              </Link>
            </div>

            {/* ================= RIGHT WING ================= */}
            <div className="hidden lg:flex flex-1 items-center justify-between pl-8 xl:pl-14 z-10">
              <nav className="flex items-center gap-8 xl:gap-10">
                {/* Our Companies Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setCompaniesOpen(true)}
                  onMouseLeave={() => setCompaniesOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setCompaniesOpen((v) => !v)}
                    aria-expanded={companiesOpen}
                    className="flex items-center gap-1.5 text-sm font-medium uppercase tracking-wide text-white hover:text-[#F5B11A] transition-colors"
                  >
                    Our Companies
                    <ChevronDown ref={companiesChevronRef} size={16} strokeWidth={2} className="text-white/70" />
                  </button>

                  <div
                    ref={companiesDropdownRef}
                    style={{ display: "none" }}
                    className="absolute left-1/2 top-full mt-3 w-[420px] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#17306D] p-2 shadow-2xl"
                  >
                    {HOLDINGS.map((h, i) => {
                      const accent = ACCENT_MAP[h.accent];
                      return (
                        <Link
                          key={h.name}
                          href={h.href}
                          ref={(el) => { if (el) companiesItemsRef.current[i] = el; }}
                          className="group flex items-start gap-4 rounded-xl p-4 transition-colors hover:bg-white/5"
                        >
                          <span className={`mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-white/10 ${accent.text} transition-colors ${accent.groupHover}`}>
                            <h.Icon size={18} strokeWidth={2} />
                          </span>
                          <span className="flex-1">
                            <span className="flex items-center gap-2">
                              <span className="text-sm font-medium text-white">
                                {h.name}
                              </span>
                              <ArrowUpRight
                                size={14}
                                className={`opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 ${accent.text}`}
                              />
                            </span>
                            <span className="mt-0.5 block text-xs font-normal text-white/60">
                              {h.tagline}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Solutions Nested Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setSolutionsOpen((v) => !v)}
                    aria-expanded={solutionsOpen}
                    className="flex items-center gap-1.5 text-sm font-medium uppercase tracking-wide text-white hover:text-[#F5B11A] transition-colors"
                  >
                    Solutions
                    <ChevronDown ref={solutionsChevronRef} size={16} strokeWidth={2} className="text-white/70" />
                  </button>

                  <div
                    ref={solutionsDropdownRef}
                    style={{ display: "none" }}
                    className="absolute left-1/2 top-full mt-3 w-[260px] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#17306D] p-2 shadow-2xl"
                  >
                    {SOLUTIONS_DATA.map((solution, i) => (
                      <div 
                        key={solution.company} 
                        ref={(el) => { if (el) solutionsItemsRef.current[i] = el; }}
                        className="group/item relative rounded-xl hover:bg-white/5 transition-colors"
                      >
                        <button className="w-full flex items-center justify-between px-4 py-3.5 text-sm font-medium text-white group-hover/item:text-[#F5B11A]">
                          {solution.company}
                          <ChevronRight size={16} strokeWidth={2} className="text-white/40 group-hover/item:text-[#F5B11A] transition-colors" />
                        </button>
                        
                        {/* Nested Sub-menu */}
                        <div className="absolute right-full top-0 mr-1 w-[280px] rounded-2xl border border-white/10 bg-[#17306D] p-2 shadow-2xl opacity-0 invisible group-hover/item:visible group-hover/item:opacity-100 transition-all duration-200 translate-x-2 group-hover/item:translate-x-0">
                          <div className="absolute -right-2 top-0 bottom-0 w-4" /> 
                          {solution.links.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              className="block rounded-xl px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5 hover:text-[#F5B11A]"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/team" className="text-sm font-medium uppercase tracking-wide text-white hover:text-[#F5B11A] transition-colors">
                  Our Team
                </Link>
              </nav>

              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="hidden lg:inline-flex rounded-full bg-[#EB2027] px-6 py-2.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#F5B11A] hover:text-[#17306D]"
              >
                Contact Us
              </button>
            </div>

            {/* ================= MOBILE MENU TOGGLE ================= */}
            <div className="flex flex-1 lg:hidden items-center justify-end z-10 pointer-events-auto">
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                className="text-white"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>

          </div>
        </div>

        {/* ================= MOBILE MENU OVERLAY ================= */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#17306D] px-6 py-6 h-screen overflow-y-auto pb-32">
            <div className="flex flex-col gap-10">
              
              {/* Left Wing Elements */}
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-wide text-white/50 border-b border-white/10 pb-2">
                  Company
                </p>
                <div className="flex flex-col gap-3 pl-2 mt-4">
                  {ABOUT_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm font-medium text-white hover:text-[#F5B11A]"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link href="/who-we-are" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-white hover:text-[#F5B11A]">Who We Are</Link>
                  <Link href="/why-bouza" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-white hover:text-[#F5B11A]">Why Bouza</Link>
                </div>
              </div>

              {/* Right Wing Elements: Companies */}
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-wide text-white/50 border-b border-white/10 pb-2">
                  Our Companies
                </p>
                <div className="flex flex-col gap-4 pl-2 mt-4">
                  {HOLDINGS.map((h) => {
                    const accent = ACCENT_MAP[h.accent];
                    return (
                      <Link
                        key={h.name}
                        href={h.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3"
                      >
                        <span className={`flex h-8 w-8 items-center justify-center rounded-md bg-white/10 ${accent.text}`}>
                          <h.Icon size={16} />
                        </span>
                        <span className="text-sm font-medium text-white hover:text-[#F5B11A]">
                          {h.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Right Wing Elements: Solutions (Nested visually for mobile) */}
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-wide text-white/50 border-b border-white/10 pb-2">
                  Solutions
                </p>
                <div className="flex flex-col gap-6 pl-2 mt-4">
                  {SOLUTIONS_DATA.map((solution) => (
                    <div key={solution.company}>
                      <span className="block text-sm font-medium text-[#F5B11A] mb-3">
                        {solution.company}
                      </span>
                      <div className="flex flex-col gap-3 pl-3 border-l border-white/10">
                        {solution.links.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team & Contact CTA */}
              <div className="pt-4 border-t border-white/10">
                <Link 
                  href="/team" 
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-white uppercase tracking-wide mb-6 hover:text-[#F5B11A]"
                >
                  Our Team
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    setIsContactOpen(true);
                  }}
                  className="w-full block rounded-full bg-[#EB2027] px-5 py-3.5 text-center text-sm font-medium uppercase tracking-wide text-white shadow-lg"
                >
                  Contact Us
                </button>
              </div>

            </div>
          </div>
        )}
      </header>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}