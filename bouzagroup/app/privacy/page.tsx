"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ShieldCheck, ChevronDown } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQ_ITEMS = [
  {
    question: "Changes to our Data Protection Notice", //
    answer: "We may update this Data Protection Notice periodically to reflect changes in our operational processes, such as updates to the Bouza Secure Portal or regional freight tracking compliance requirements. Any significant modifications will be communicated through this page."
  },
  {
    question: "Who is responsible for data processing operations?", //
    answer: "Bouza Group Ltd., headquartered in Nairobi, Kenya, acts as the primary data controller for all corporate data processing operations across Bouza Defense, Bouza Logistics, and Bouza Motors."
  },
  {
    question: "When does Bouza Group acquire and process personal data?", //
    answer: "We acquire data when you interact with our digital portals, submit inquiries for defense contracting or supply chain consulting, register for fleet management services, or apply for careers within the Group."
  },
  {
    question: "Which data about you can be collected?", //
    answer: "Collected data may include corporate contact details, logistics routing requirements, telematics data for fleet vehicles, and authenticated session credentials for the Bouza Secure Portal."
  },
  {
    question: "For what purposes do we process your personal data?", //
    answer: "Data is processed strictly to fulfill enterprise mobility contracts, optimize global freight routing, maintain the security of our defense supply chains, and communicate corporate updates."
  },
  {
    question: "How do we protect your personal data?", //
    answer: "We utilize enterprise-grade encryption, strict access controls, and zero-trust network architectures to secure all proprietary and personal data against unauthorized access."
  },
  {
    question: "How long do we store your data?", //
    answer: "Data is retained only as long as necessary to fulfill contractual obligations or comply with statutory retention periods under Kenyan and international commercial laws."
  },
  {
    question: "Whom do we grant international access to your data and how do we ensure protection?", //
    answer: "Access may be granted to vetted international freight consortia and tier-1 manufacturing partners solely for operational execution. Protection is ensured through binding bilateral data processing agreements."
  },
  {
    question: "Contact with us, your data privacy protection rights, and your right to file complaints with data privacy protection authorities", //
    answer: "You retain the right to access, rectify, or request deletion of your personal data. Formal requests or complaints can be directed to our Data Protection Officer at info@bouzagroup.com or the relevant regional privacy authority."
  }
];

export default function PrivacyPolicyPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-slate-50 text-[#17306D] antialiased pt-20 flex flex-col font-light">
      <Navbar />

      <main className="flex-grow">
        
        {/* ===================== HERO SECTION ===================== */}
        <section className="bg-white py-20 lg:py-28 border-b border-slate-200" data-animate>
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <ShieldCheck size={32} strokeWidth={1} className="mx-auto text-[#17306D]/30 mb-6" />
            <h1 className="text-4xl lg:text-5xl tracking-tight text-[#17306D] mb-4 font-light">
              Privacy policy
            </h1>
            <h2 className="text-2xl text-[#17306D]/70 font-light">
              Data Protection Notice
            </h2>
          </div>
        </section>

        {/* ===================== INTRO SECTION ===================== */}
        <section className="py-16 bg-slate-50 border-b border-slate-200" data-animate>
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <h3 className="text-xl font-medium text-[#17306D] mb-6">Bouza Group Data Protection Notice</h3>
            <p className="text-[#17306D]/80 leading-loose">
              The high standards you expect from the features of our defense, logistics, and automotive operations are our guideline for handling your data. It is our aim to establish and preserve the basis for a trusting business relationship with our (potential) customers, and business partners. We regard the confidentiality, integrity and availability of your personal data as an important matter. That is why we will use the highest possible data privacy standards and we will only use your data for clearly described purposes and in accordance with legal provisions for data protection.
            </p>
          </div>
        </section>

        {/* ===================== FAQ ACCORDION ===================== */}
        <section className="py-16 bg-white border-b border-slate-200" data-animate>
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <div className="flex flex-col border-t border-slate-200">
              {FAQ_ITEMS.map((item, index) => (
                <div key={index} className="border-b border-slate-200">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between py-6 text-left group hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-lg font-medium text-[#17306D] group-hover:text-[#0640CE] transition-colors pr-8">
                      {item.question}
                    </span>
                    <span className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180 text-[#F5B11A]" : "text-[#17306D]/30"}`}>
                      <ChevronDown size={20} strokeWidth={1} />
                    </span>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"}`}
                  >
                    <p className="text-[#17306D]/70 leading-relaxed font-light">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== LEGAL BASIS & CONTACT ===================== */}
        <section className="py-16 lg:py-24 bg-slate-50" data-animate>
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            
            {/* Legal Basis */}
            <div className="mb-16">
              <h2 className="text-3xl font-light text-[#17306D] mb-6">Legal basis for the processing of personal data</h2>
              <p className="text-[#17306D]/80 leading-loose mb-8">
                We only process your data if this is permitted by an applicable legal regulation. Here, we will base the processing of your data on, among others, the following legal principles. Please bear in mind that this is not a complete or conclusive list of the legal principles, rather only examples intended to make the legal principles more transparent.
              </p>

              <ul className="space-y-6 text-[#17306D]/80 leading-loose list-disc pl-6">
                <li>
                  <span className="font-medium text-[#17306D]">Consent:</span> We will process certain data only on the basis of the consent you have given expressly and voluntarily. You have the right to revoke your consent at any time with effect for the future.
                </li>
                <li>
                  <span className="font-medium text-[#17306D]">Fulfilment of a contract / pre-contractual measures:</span> For initiation and/or execution of your contract with Bouza Group, and Bouza Group partners, we require access to certain data.
                </li>
                <li>
                  <span className="font-medium text-[#17306D]">Fulfilment of a legal obligation:</span> Bouza Group is subject to a number of legal specifications. We must process certain data to comply with these specifications.
                </li>
                <li>
                  <span className="font-medium text-[#17306D]">Protection of legitimate interests:</span> Bouza Group will process certain data in order to protect their legitimate interests or the interests of third parties. However, this only applies if your interests do not outweigh ours in individual cases.
                </li>
              </ul>
            </div>

            {/* Contact Data */}
            <div className="border-t border-slate-200 pt-16">
              <h2 className="text-3xl font-light text-[#17306D] mb-6">Contact data for Bouza Group data protection</h2>
              <p className="text-[#17306D]/80 leading-loose mb-8">
                If you have any questions regarding the use of your personal data, it is best to contact us using the following contact data:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[#17306D]/80 font-light">
                <div>
                  <p className="font-medium text-[#17306D] mb-1">Bouza Group Data Protection</p>
                  <p>Bouza Place HQ</p>
                  <p>Magharibi Place, Mai Mahiu Rd</p>
                  <p>Nairobi West Area, Kenya</p>
                </div>
                <div>
                  <p className="mb-1"><span className="font-medium text-[#17306D]">Postal:</span> P.O Box 24286-00100</p>
                  <p className="mb-1"><span className="font-medium text-[#17306D]">Tel:</span> +254 117726583</p>
                  <p className="mb-1"><span className="font-medium text-[#17306D]">Reachability:</span> Mo. - Fr. 08:00 – 17:00 hrs</p>
                  <p><span className="font-medium text-[#17306D]">E-mail:</span> <a href="mailto:info@bouzagroup.com" className="text-[#0640CE] hover:underline">info@bouzagroup.com</a></p>
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