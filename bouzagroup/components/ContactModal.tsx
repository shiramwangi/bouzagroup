"use client";

import { useState, useEffect, useRef } from "react";
import { X, Loader2, CheckCircle2 } from "lucide-react";
import { gsap } from "gsap";
import { sendContactEmail } from "@/app/actions/contact";

// Comprehensive Country List
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

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // GSAP Animation for opening/closing
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scrolling
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" });
      gsap.fromTo(modalRef.current, { y: 50, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out", delay: 0.1 });
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(modalRef.current, { y: 30, opacity: 0, scale: 0.95, duration: 0.3, ease: "power2.in" });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, ease: "power2.in", onComplete: () => {
      onClose();
      setStatus("idle"); // Reset on close
    }});
  };

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

  if (!isOpen) return null;

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[100] flex items-center justify-center bg-[#17306D]/60 backdrop-blur-sm p-4 lg:p-0">
      
      <div 
        ref={modalRef} 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 lg:p-8 border-b border-[#17306D]/10">
          <h2 className="text-3xl font-medium text-[#17306D]">Contact us</h2>
          <button 
            onClick={handleClose}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-[#17306D] transition-colors hover:bg-[#17306D] hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 custom-scrollbar">
          
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <CheckCircle2 size={64} className="text-[#0640CE] mb-6" />
              <h3 className="text-2xl font-medium text-[#17306D] mb-4">Transmission Successful</h3>
              <p className="text-base font-normal text-[#17306D]/75 max-w-md">
                Your inquiry has been securely routed to the Bouza Group support division. Our specialists will respond shortly.
              </p>
              <button 
                onClick={handleClose}
                className="mt-8 rounded-full bg-[#17306D] px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#F5B11A] hover:text-[#17306D]"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              
              <div>
                <h3 className="text-xl font-medium text-[#17306D] border-b border-[#17306D]/10 pb-4 mb-6">
                  Your Contact Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-[#17306D]">First Name*</label>
                    <input required type="text" id="firstName" name="firstName" placeholder="Please enter your first name" className="w-full rounded-lg border border-slate-300 bg-slate-100 px-4 py-3 text-sm font-normal text-[#17306D] focus:border-[#0640CE] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0640CE] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-[#17306D]">Last Name*</label>
                    <input required type="text" id="lastName" name="lastName" placeholder="Please enter your last name" className="w-full rounded-lg border border-slate-300 bg-slate-100 px-4 py-3 text-sm font-normal text-[#17306D] focus:border-[#0640CE] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0640CE] transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-6">
                  <label htmlFor="email" className="text-sm font-medium text-[#17306D]">Email address*</label>
                  <input required type="email" id="email" name="email" placeholder="Please enter your email address" className="w-full rounded-lg border border-slate-300 bg-slate-100 px-4 py-3 text-sm font-normal text-[#17306D] focus:border-[#0640CE] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0640CE] transition-colors" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-sm font-medium text-[#17306D]">Company</label>
                    <input type="text" id="company" name="company" placeholder="Please enter your company name" className="w-full rounded-lg border border-slate-300 bg-slate-100 px-4 py-3 text-sm font-normal text-[#17306D] focus:border-[#0640CE] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0640CE] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-medium text-[#17306D]">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="Please enter your phone number" className="w-full rounded-lg border border-slate-300 bg-slate-100 px-4 py-3 text-sm font-normal text-[#17306D] focus:border-[#0640CE] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0640CE] transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-8">
                  <label htmlFor="country" className="text-sm font-medium text-[#17306D]">Country*</label>
                  <select required id="country" name="country" defaultValue="" className="w-full rounded-lg border border-slate-300 bg-slate-100 px-4 py-3 text-sm font-normal text-[#17306D] focus:border-[#0640CE] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0640CE] transition-colors appearance-none">
                    <option value="" disabled>Please select a country</option>
                    {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                <h3 className="text-xl font-medium text-[#17306D] border-b border-[#17306D]/10 pb-4 mb-6">
                  Inquiry Protocol
                </h3>

                <div className="flex flex-col gap-2 mb-6">
                  <label htmlFor="subject" className="text-sm font-medium text-[#17306D]">Subject*</label>
                  <select required id="subject" name="subject" defaultValue="" className="w-full rounded-lg border border-slate-300 bg-slate-100 px-4 py-3 text-sm font-normal text-[#17306D] focus:border-[#0640CE] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0640CE] transition-colors appearance-none">
                    <option value="" disabled>Please select a subject</option>
                    {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-2 mb-8">
                  <label htmlFor="message" className="text-sm font-medium text-[#17306D]">Message*</label>
                  <textarea required id="message" name="message" rows={5} placeholder="Please enter your message" className="w-full rounded-lg border border-slate-300 bg-slate-100 px-4 py-3 text-sm font-normal text-[#17306D] focus:border-[#0640CE] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0640CE] transition-colors resize-none"></textarea>
                </div>

                <h3 className="text-xl font-medium text-[#17306D] mb-4">
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
                  <div className="mb-6 p-4 rounded-lg bg-[#EB2027]/10 text-[#EB2027] text-sm font-medium">
                    {errorMessage}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="self-start rounded-xl bg-[#17306D] px-10 py-4 text-sm font-medium text-white transition-colors hover:bg-[#0640CE] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]"
                >
                  {status === "loading" ? <Loader2 size={20} className="animate-spin" /> : "Submit"}
                </button>

              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}