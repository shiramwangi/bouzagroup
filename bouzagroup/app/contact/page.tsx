"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { 
  Loader2, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Phone, 
  Globe,
  Clock
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sendContactEmail } from "@/app/actions/contact";

const COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Côte d'Ivoire", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
  "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const SUBJECTS = [
  "Defense & Tactical Procurement",
  "Logistics & Freight Forwarding",
  "Automotive & Fleet Operations",
  "Enterprise Consulting Services",
  "Partnership & Investment",
  "General Corporate Inquiry"
];

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.1,
      }
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await sendContactEmail(formData);
      
      if (response.error) {
        setStatus("error");
        setErrorMessage(response.error);
      } else {
        setStatus("success");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("A network error occurred. Please try again.");
    }
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-slate-50 text-[#17306D] antialiased pt-20 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* ===================== HERO SECTION ===================== */}
        <section className="bg-white py-20 lg:py-24 border-b border-[#17306D]/5" data-animate>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="text-sm font-medium uppercase tracking-widest text-[#F5B11A] mb-4">
              Secure Communications
            </p>
            <h1 className="text-4xl lg:text-6xl font-medium tracking-tight text-[#17306D] leading-tight mb-6">
              Connect with Bouza Group.
            </h1>
            <p className="text-lg font-normal text-[#17306D]/75 leading-relaxed max-w-2xl">
              Our dedicated divisions are ready to architect your solutions. Reach out to our central command for inquiries regarding logistics, defense materiel, or automotive fleet operations.
            </p>
          </div>
        </section>

        {/* ===================== MAIN SPLIT LAYOUT ===================== */}
        <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* LEFT COLUMN: THE FORM */}
            <div className="lg:col-span-3 bg-white p-8 lg:p-12 rounded-3xl border border-[#17306D]/5 shadow-xl shadow-[#17306D]/5" data-animate>
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-32 text-center h-full">
                  <CheckCircle2 size={72} className="text-[#0640CE] mb-8" />
                  <h3 className="text-3xl font-medium text-[#17306D] mb-4">Transmission Successful</h3>
                  <p className="text-base font-normal text-[#17306D]/75 max-w-md">
                    Your inquiry has been securely routed to the Bouza Group support division. Our specialists will respond shortly.
                  </p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="mt-10 rounded-full border border-[#17306D]/20 px-8 py-3 text-sm font-medium uppercase tracking-wide text-[#17306D] transition-colors hover:bg-[#17306D] hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  <div>
                    <h3 className="text-2xl font-medium text-[#17306D] border-b border-[#17306D]/10 pb-4 mb-8">
                      Direct Inquiry Portal
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-[#17306D]">First Name*</label>
                        <input required type="text" id="firstName" name="firstName" placeholder="Please enter your first name" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-normal text-[#17306D] focus:border-[#0640CE] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0640CE] transition-colors" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-[#17306D]">Last Name*</label>
                        <input required type="text" id="lastName" name="lastName" placeholder="Please enter your last name" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-normal text-[#17306D] focus:border-[#0640CE] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0640CE] transition-colors" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mb-6">
                      <label htmlFor="email" className="text-sm font-medium text-[#17306D]">Email address*</label>
                      <input required type="email" id="email" name="email" placeholder="Please enter your email address" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-normal text-[#17306D] focus:border-[#0640CE] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0640CE] transition-colors" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="company" className="text-sm font-medium text-[#17306D]">Company</label>
                        <input type="text" id="company" name="company" placeholder="Please enter your company name" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-normal text-[#17306D] focus:border-[#0640CE] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0640CE] transition-colors" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-sm font-medium text-[#17306D]">Phone Number</label>
                        <input type="tel" id="phone" name="phone" placeholder="Please enter your phone number" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-normal text-[#17306D] focus:border-[#0640CE] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0640CE] transition-colors" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mb-8">
                      <label htmlFor="country" className="text-sm font-medium text-[#17306D]">Country*</label>
                      <select required id="country" name="country" defaultValue="" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-normal text-[#17306D] focus:border-[#0640CE] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0640CE] transition-colors appearance-none">
                        <option value="" disabled>Please select a country</option>
                        {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>

                    <h3 className="text-xl font-medium text-[#17306D] border-b border-[#17306D]/10 pb-4 mb-6 mt-10">
                      Inquiry Protocol
                    </h3>

                    <div className="flex flex-col gap-2 mb-6">
                      <label htmlFor="subject" className="text-sm font-medium text-[#17306D]">Subject*</label>
                      <select required id="subject" name="subject" defaultValue="" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-normal text-[#17306D] focus:border-[#0640CE] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0640CE] transition-colors appearance-none">
                        <option value="" disabled>Please select a subject</option>
                        {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div className="flex flex-col gap-2 mb-8">
                      <label htmlFor="message" className="text-sm font-medium text-[#17306D]">Message*</label>
                      <textarea required id="message" name="message" rows={5} placeholder="Please enter your message" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-normal text-[#17306D] focus:border-[#0640CE] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0640CE] transition-colors resize-none"></textarea>
                    </div>

                    <h3 className="text-lg font-medium text-[#17306D] mb-4">
                      Terms of Service*
                    </h3>
                    <p className="text-sm font-normal text-[#17306D]/75 leading-relaxed mb-6">
                      I hereby consent that Bouza Group will collect and store my contact details, e.g. text, email address, and telephone number, for the purpose of contacting me regarding offered corporate services. My data will not be used for other purposes nor will it be shared with third parties, unless explicitly consented by me.
                    </p>

                    <div className="flex items-center gap-3 mb-8">
                      <input required type="checkbox" id="terms" name="terms" className="w-5 h-5 rounded border-slate-300 text-[#0640CE] focus:ring-[#0640CE]" />
                      <label htmlFor="terms" className="text-sm font-normal text-[#17306D]">I agree to the terms of service*</label>
                    </div>

                    {status === "error" && (
                      <div className="mb-6 p-4 rounded-xl bg-[#EB2027]/10 text-[#EB2027] text-sm font-medium">
                        {errorMessage}
                      </div>
                    )}

                    <button 
                      type="submit" 
                      disabled={status === "loading"}
                      className="rounded-full bg-[#17306D] px-12 py-4 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#F5B11A] hover:text-[#17306D] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[180px]"
                    >
                      {status === "loading" ? <Loader2 size={20} className="animate-spin" /> : "Transmit Request"}
                    </button>

                  </div>
                </form>
              )}
            </div>

            {/* RIGHT COLUMN: LOCATION & INTERACTIVE MAP */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              
              {/* Location Card */}
              <div className="bg-white p-8 rounded-3xl border border-[#17306D]/5 shadow-xl shadow-[#17306D]/5" data-animate>
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#17306D]/5 text-[#17306D]">
                    <MapPin size={24} />
                  </span>
                  <div>
                    <h3 className="text-xl font-medium text-[#17306D]">Global Headquarters</h3>
                    <p className="text-xs font-medium uppercase tracking-widest text-[#F5B11A] mt-1">Bouza Group</p>
                  </div>
                </div>

                <div className="space-y-6">
  <div className="flex items-start gap-4">
    <MapPin size={18} className="text-[#17306D]/50 mt-1 flex-shrink-0" />
    <p className="text-base font-normal text-[#17306D]/80 leading-relaxed">
      Bouza Place HQ, Magharibi Place<br />
      Mai Mahiu Rd, Nairobi West Area<br />
      Kenya (P.O Box 24286-00100)
    </p>
  </div>
  <div className="flex items-start gap-4">
    <Mail size={18} className="text-[#17306D]/50 mt-1 flex-shrink-0" />
    <a href="mailto:info@bouzagroup.com" className="text-base font-normal text-[#17306D]/80 hover:text-[#0640CE] transition-colors">
      info@bouzagroup.com
    </a>
  </div>
  <div className="flex items-start gap-4">
    <Phone size={18} className="text-[#17306D]/50 mt-1 flex-shrink-0" />
    <p className="text-base font-normal text-[#17306D]/80">
      +254 117726583
    </p>
  </div>
  <div className="flex items-start gap-4">
    <Clock size={18} className="text-[#17306D]/50 mt-1 flex-shrink-0" />
    <p className="text-base font-normal text-[#17306D]/80">
      Mon - Fri: 08:00 - 17:00 (EAT)
    </p>
  </div>
</div>
              </div>

              {/* Interactive Operating Regions Map */}
              <div className="bg-white p-8 rounded-3xl border border-[#17306D]/5 shadow-xl shadow-[#17306D]/5 flex-grow flex flex-col min-h-[400px]" data-animate>
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#17306D]/5 text-[#17306D]">
                    <Globe size={24} />
                  </span>
                  <div>
                    <h3 className="text-xl font-medium text-[#17306D]">Operating Regions</h3>
                    <p className="text-xs font-medium uppercase tracking-widest text-[#17306D]/50 mt-1">Explore Active Zones</p>
                  </div>
                </div>

                {/* Google Maps Iframe Container */}
                <div className="relative w-full flex-grow rounded-2xl overflow-hidden border border-[#17306D]/10">
                  
                  {/* Floating Brand Badge */}
                  <div className="absolute top-4 left-4 z-10 pointer-events-none bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg border border-[#17306D]/10 shadow-lg">
                    <p className="text-[#17306D] font-medium text-sm tracking-wide">KENYA</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EB2027] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EB2027]"></span>
                      </span>
                      <p className="text-[#17306D]/60 text-[10px] font-medium uppercase tracking-widest">Active Region</p>
                    </div>
                  </div>

                  {/* Interactive Embed */}
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4083319.458927909!2d36.31502447910543!3d0.4852925573426214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182780d08350900f%3A0x403b0eb0a1976dd9!2sKenya!5e0!3m2!1sen!2ske!4v1716000000000!5m2!1sen!2ske" 
                    className="absolute inset-0 w-full h-full border-0" 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
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