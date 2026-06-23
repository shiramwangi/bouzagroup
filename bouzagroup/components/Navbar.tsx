"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import {
  ChevronDown,
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

const PRODUCT_LINKS = [
  { label: "Defense Manufacturing", href: "/defense#manufacturing" },
  { label: "Freight & Forwarding", href: "/logistics#freight" },
  { label: "Vehicle Dealerships", href: "/motors#dealerships" },
  { label: "Supply Chain Consulting", href: "/services/consulting" },
  { label: "Bouza Secure Portal", href: "/portal" },
  { label: "Freight Tracking", href: "/tracking" },
  { label: "Fleet Management", href: "/fleet" },
  { label: "Connected Network", href: "/network" },
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
  itemsRef: React.MutableRefObject<HTMLAnchorElement[]>,
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
  const [productsOpen, setProductsOpen] = useState(false);

  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const aboutItemsRef = useRef<HTMLAnchorElement[]>([]);
  const aboutChevronRef = useRef<SVGSVGElement>(null);

  const companiesDropdownRef = useRef<HTMLDivElement>(null);
  const companiesItemsRef = useRef<HTMLAnchorElement[]>([]);
  const companiesChevronRef = useRef<SVGSVGElement>(null);

  const productsDropdownRef = useRef<HTMLDivElement>(null);
  const productsItemsRef = useRef<HTMLAnchorElement[]>([]);
  const productsChevronRef = useRef<SVGSVGElement>(null);

  const navRef = useRef<HTMLElement>(null);

  useDropdownAnimation(aboutOpen, aboutDropdownRef, aboutItemsRef, aboutChevronRef);
  useDropdownAnimation(companiesOpen, companiesDropdownRef, companiesItemsRef, companiesChevronRef);
  useDropdownAnimation(productsOpen, productsDropdownRef, productsItemsRef, productsChevronRef);

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
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="relative flex h-20 items-center justify-between">
            
            {/* Left: Logo */}
            <div className="flex items-center justify-start lg:w-1/4 z-10">
              <Link href="/" className="flex items-center" aria-label="Bouza Group home">
                <Image
                  src="/bouza.png"
                  alt="Bouza Group"
                  width={160}
                  height={40}
                  priority
                  className="h-9 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Center: Desktop Nav */}
            <nav className="hidden lg:flex items-center justify-center gap-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
              
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

              {/* Companies Dropdown */}
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

              {/* Products & Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setProductsOpen((v) => !v)}
                  aria-expanded={productsOpen}
                  className="flex items-center gap-1.5 text-sm font-medium uppercase tracking-wide text-white hover:text-[#F5B11A] transition-colors"
                >
                  Products &amp; Services
                  <ChevronDown ref={productsChevronRef} size={16} strokeWidth={2} className="text-white/70" />
                </button>

                <div
                  ref={productsDropdownRef}
                  style={{ display: "none" }}
                  className="absolute left-1/2 top-full mt-3 w-[280px] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#17306D] p-2 shadow-2xl"
                >
                  {PRODUCT_LINKS.map((link, i) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      ref={(el) => { if (el) productsItemsRef.current[i] = el; }}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5 hover:text-[#F5B11A]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

            </nav>

            {/* Right: CTA & Mobile Toggle */}
            <div className="flex items-center justify-end lg:w-1/4 z-10">
              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="hidden lg:inline-flex rounded-full bg-[#EB2027] px-6 py-2.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#F5B11A] hover:text-[#17306D]"
              >
                Contact Us
              </button>
              
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                className="lg:hidden text-white"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#17306D] px-6 py-6 h-screen overflow-y-auto pb-32">
            <div className="flex flex-col gap-8">
              
              {/* About Section */}
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-wide text-white/50 border-b border-white/10 pb-2">
                  About Us
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
                </div>
              </div>

              {/* Companies Section */}
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

              {/* Products & Services Section */}
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-wide text-white/50 border-b border-white/10 pb-2">
                  Products &amp; Services
                </p>
                <div className="flex flex-col gap-3 pl-2 mt-4">
                  {PRODUCT_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm font-medium text-white hover:text-[#F5B11A]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setIsContactOpen(true);
                }}
                className="w-full block rounded-full bg-[#F5B11A] px-5 py-3 mt-4 text-center text-sm font-medium uppercase tracking-wide text-[#17306D]"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </header>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}