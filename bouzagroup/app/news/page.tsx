"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { 
  ArrowRight, 
  X, 
  Calendar, 
  Clock,
  Share2
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export type Article = {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: React.ReactNode;
  imageUrl: string;
};

const NEWS_ARTICLES: Article[] = [
  {
    id: "news-001",
    title: "Kenya to Host Global Military AI Summit in 2027",
    category: "Defense & Security",
    date: "June 22, 2026",
    readTime: "4 min read",
    excerpt: "Artificial intelligence is rapidly reshaping the character of warfare, security, and defense planning across the continent. Kenya is set to lead this conversation.",
    imageUrl: "/news-defense.jpg",
    content: (
      <>
        <p>Kenya is poised to host the Global Military AI Summit in 2027, marking a historic first for the African continent. As artificial intelligence rapidly reshapes the character of warfare, security, and defense planning, responsible governance of emerging technologies has become a strategic imperative for nations across the globe.</p>
        <p>Military institutions are increasingly recognizing that the integration of AI into defense systems is not merely an operational upgrade, but a fundamental shift in how security is maintained. The upcoming summit in Nairobi will gather defense chiefs, technology experts, and policymakers to discuss the ethical deployment of AI in autonomous systems, threat detection, and strategic logistics.</p>
        <p>For defense contractors and logistics providers like Bouza Group, this shift signals a new era of tech-enabled supply chains. The integration of AI into military logistics ensures faster deployment of materiel, predictive maintenance for tactical fleets, and enhanced cybersecurity across national borders.</p>
      </>
    )
  },
  {
    id: "news-002",
    title: "Strategic Partnership Signed for Major Transport Infrastructure",
    category: "Government & Logistics",
    date: "June 18, 2026",
    readTime: "5 min read",
    excerpt: "The Government of the Republic of Kenya has signed a strategic partnership agreement to collaborate in the development of major transport and logistics infrastructure.",
    imageUrl: "/news-logistics.jpg",
    content: (
      <>
        <p>In a landmark move during the recent Africa Forward Summit, the Government of the Republic of Kenya signed a strategic partnership agreement with major global logistics players. This agreement aims to collaborate extensively in the development of transport and logistics infrastructure, reaffirming a long-term commitment to positioning Kenya as the premier regional gateway for East and Central Africa.</p>
        <p>The objective of the framework is to accelerate solutions that meet the growing demands of supply chain flows. This includes maritime demand, inland logistics, and sophisticated freight management. The partnership will seek joint investment solutions to improve competitiveness and strengthen the regions integration into global trade routes through reinforced Kenyan infrastructures.</p>
        <p>This development is highly significant for local B2B networks. Upgraded port facilities, expanded road networks, and decarbonized transport chains will directly enhance the efficiency of freight forwarding. As these governmental initiatives take root, the capacity for seamless intercity and trans-border deliveries will exponentially increase.</p>
      </>
    )
  },
  {
    id: "news-003",
    title: "Kenya's Vehicle Sales Rebound with Near 20% Growth",
    category: "Automotive Market",
    date: "May 15, 2026",
    readTime: "3 min read",
    excerpt: "Industry figures point to improved financing conditions and renewed business confidence as key drivers of the sharp rise in new vehicle sales.",
    imageUrl: "/news-automotive.jpg",
    content: (
      <>
        <p>Kenyas vehicle market has recorded remarkably strong growth, with new data revealing a sharp rise in total sales compared to the previous year. New vehicle sales have surged by nearly 20%, bringing total units sold to over 13,500.</p>
        <p>Industry analysts attribute this rebound to a combination of improved corporate financing conditions and renewed business confidence. The commercial sector, in particular, has seen a massive uptake in heavy-duty trucks and fleet vehicles, driven by the expanding logistics and construction sectors.</p>
        <p>As the market expands, the demand for reliable fleet management and automotive consultation grows in tandem. Companies are no longer just buying vehicles; they are investing in connected fleets that offer real-time telematics, optimized fuel consumption, and comprehensive maintenance structures.</p>
      </>
    )
  },
  {
    id: "news-004",
    title: "The Push for EV Fleets: Overcoming Regulatory Roadblocks",
    category: "Policy & Market Trends",
    date: "June 10, 2026",
    readTime: "6 min read",
    excerpt: "While Kenya leads in electric motorcycle adoption, the transition to fully electric corporate vehicle fleets requires a shift in fiscal incentives and import duties.",
    imageUrl: "/news-ev.jpg",
    content: (
      <>
        <p>Kenya is widely recognized as a leader in innovation and the adoption of new technology in Africa. However, when it comes to the corporate adoption of fully electric cars and trucks, the market is currently lagging behind regional peers like Rwanda. While electric motorcycles have seen massive penetration, four-wheeled EVs face significant hurdles.</p>
        <p>The primary barrier remains the high import duties and taxes applied to electric cars. While the government has introduced fiscal incentives for electric charging stations—such as capping electricity tariffs during off-peak periods—the upfront cost of importing EVs remains prohibitive for many fleet operators.</p>
        <p>Advocacy groups and logistics leaders are currently engaging with government bodies to push for a duty-free EV import quota. If implemented, this policy shift would catalyze the adoption of electric passenger cars and heavy-duty logistics trucks. For enterprise supply chains, the transition to EVs represents the ultimate goal: achieving zero-emission freight while drastically reducing long-term operational costs.</p>
      </>
    )
  }
];

export default function NewsPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

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
        stagger: 0.15,
        delay: 0.1,
      }
    );
  }, []);

  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedArticle]);

  return (
    <div ref={pageRef} className="min-h-screen bg-slate-50 text-[#17306D] antialiased pt-20 flex flex-col font-normal">
      <Navbar />

      <main className="flex-grow">
        
        {/* ===================== HERO SECTION ===================== */}
        <section className="bg-white py-24 lg:py-32 border-b border-slate-200" data-animate>
          <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
            <p className="text-sm uppercase tracking-widest text-[#F5B11A] mb-4 font-light">
              Corporate Intelligence
            </p>
            <h1 className="text-4xl lg:text-6xl tracking-tight leading-tight mb-6 font-light">
              Latest news & insights.
            </h1>
            <p className="text-lg text-[#17306D]/70 leading-relaxed max-w-2xl mx-auto font-light">
              Stay up to date with the latest developments in government logistics, regional defense infrastructure, and the evolving automotive market.
            </p>
          </div>
        </section>

        {/* ===================== ARTICLE LIST ===================== */}
        <section className="py-20 bg-slate-50" data-animate>
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            
            <div className="flex flex-col border-t border-slate-200">
              {NEWS_ARTICLES.map((article) => (
                <article 
                  key={article.id} 
                  onClick={() => setSelectedArticle(article)}
                  className="group cursor-pointer border-b border-slate-200 py-10 flex flex-col md:flex-row gap-8 lg:gap-12 transition-colors hover:bg-white"
                >
                  <div className="md:w-1/4 flex flex-col gap-2 md:pt-2">
                    <p className="text-xs uppercase tracking-widest text-[#F5B11A] font-light">
                      {article.category}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-[#17306D]/50 font-light">
                      <Calendar size={14} strokeWidth={1} />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#17306D]/50 font-light">
                      <Clock size={14} strokeWidth={1} />
                      {article.readTime}
                    </div>
                  </div>

                  <div className="md:w-3/4 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl lg:text-3xl tracking-tight text-[#17306D] font-light mb-4 group-hover:text-[#0640CE] transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-base text-[#17306D]/70 font-light leading-relaxed mb-6">
                        {article.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-sm uppercase tracking-widest text-[#17306D] font-light group-hover:text-[#0640CE] transition-colors">
                      Read Article <ArrowRight size={16} strokeWidth={1} className="transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />

      {/* ===================== MODAL WINDOW ===================== */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[#17306D]/90 backdrop-blur-md p-0 md:p-6 lg:p-12"
          data-lenis-prevent
        >
          {/* Clickable Backdrop Area to Close */}
          <div className="absolute inset-0 z-0" onClick={() => setSelectedArticle(null)}></div>
          
          {/* Article Card (The Paper Container) */}
          <div className="relative z-10 w-full max-w-4xl bg-white rounded-none shadow-2xl flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-500 my-0 md:my-8 min-h-screen md:min-h-0">
            
            {/* Sticky Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white/95 backdrop-blur-sm px-6 py-4 md:px-12">
              <p className="text-xs uppercase tracking-widest text-[#17306D]/50 font-light">
                Bouza Editorial • {selectedArticle.category}
              </p>
              <div className="flex items-center gap-4">
                <button className="text-[#17306D]/50 hover:text-[#17306D] transition-colors p-2" aria-label="Share article">
                  <Share2 size={20} strokeWidth={1} />
                </button>
                <button onClick={() => setSelectedArticle(null)} className="text-[#17306D]/50 hover:text-[#17306D] transition-colors p-2 bg-slate-50 border border-slate-200 rounded-none" aria-label="Close article">
                  <X size={20} strokeWidth={1} />
                </button>
              </div>
            </div>

            {/* Main Reading Frame */}
            <div className="px-6 py-10 md:px-16 md:py-16 flex-grow">
              
              {/* Title Header */}
              <div className="mb-10 border-b border-slate-200 pb-8">
                <h1 className="text-3xl md:text-5xl tracking-tight text-[#17306D] font-light leading-tight mb-6">
                  {selectedArticle.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-[#17306D]/60 font-light uppercase tracking-widest">
                  <span className="flex items-center gap-2"><Calendar size={16} strokeWidth={1} /> {selectedArticle.date}</span>
                  <span className="flex items-center gap-2"><Clock size={16} strokeWidth={1} /> {selectedArticle.readTime}</span>
                </div>
              </div>

              {/* Cover Graphic Container */}
              <div className="relative w-full aspect-[21/9] mb-10 bg-slate-100 border border-slate-200 overflow-hidden">
                <Image 
                  src={selectedArticle.imageUrl} 
                  alt={selectedArticle.title}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>

              {/* Textbook Typography Body */}
              <div className="prose prose-lg max-w-none text-[#17306D]/80 font-light leading-loose space-y-6">
                {selectedArticle.content}
              </div>

              {/* Editorial Graphic Finisher */}
              <div className="mt-16 pt-8 border-t border-slate-200 text-center text-[#17306D]/30">
                <div className="w-2 h-2 bg-[#17306D]/30 mx-auto rotate-45"></div>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}