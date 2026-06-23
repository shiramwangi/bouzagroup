"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Calendar, 
  ArrowRight,
  X,
  UploadCloud,
  FileText
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ==========================================
// DATA STRUCTURES
// ==========================================
export type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  datePosted: string;
  deadline: string;
  description: string;
  requirements: string[];
  qualifications: string[];
};

// Leave this array empty to show the "No jobs available" state.
// When you want to add a job, just drop the object in here!
const JOBS: Job[] = [];

/* Example of how a job looks when you want to add one:
const JOBS: Job[] = [
  {
    id: "jd-001",
    title: "Senior Logistics Coordinator",
    department: "Operations",
    location: "Nairobi, Kenya",
    type: "Full-Time",
    datePosted: "Oct 24, 2026",
    deadline: "Nov 15, 2026",
    description: "Bouza Group is seeking a highly organized...",
    requirements: ["Manage day-to-day freight operations", "Coordinate with tracking teams"],
    qualifications: ["Bachelor's in Supply Chain", "5+ years experience in B2B logistics"]
  }
];
*/

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function CareersPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  // Modal States
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  // Entrance Animations
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

  // Handlers
  const openJobDetails = (job: Job) => setSelectedJob(job);
  const closeJobDetails = () => setSelectedJob(null);
  
  const openApplication = () => {
    setIsApplyModalOpen(true);
  };
  const closeApplication = () => {
    setIsApplyModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-slate-50 text-[#17306D] antialiased pt-20 flex flex-col font-normal">
      <Navbar />

      <main className="flex-grow">
        
        {/* ===================== HERO SECTION ===================== */}
        <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden" data-animate>
          <div className="absolute inset-0 z-0 bg-black">
            {/* CLIENT ASSET: High contrast corporate/office image */}
            <Image 
              src="/careers-hero.jpg" 
              alt="Careers at Bouza Group" 
              fill 
              className="object-cover opacity-40 grayscale mix-blend-overlay"
              priority
            />
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 text-center text-white">
            <p className="text-sm uppercase tracking-widest text-[#F5B11A] mb-4 font-light">
              Join The Network
            </p>
            <h1 className="text-4xl lg:text-6xl tracking-tight leading-tight mb-6 font-light">
              Shape the future of mobility.
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto font-light">
              We are looking for driven individuals ready to innovate within global supply chains, defense logistics, and fleet operations.
            </p>
          </div>
        </section>

        {/* ===================== JOB LISTINGS ===================== */}
        <section className="py-24 bg-white" data-animate>
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            
            <div className="mb-12 border-b border-slate-200 pb-6 flex justify-between items-end">
              <div>
                <h2 className="text-3xl tracking-tight text-[#17306D] font-light">Open Positions</h2>
                <p className="text-[#17306D]/60 mt-2 font-light">Explore current opportunities across our global divisions.</p>
              </div>
              <div className="hidden md:block text-sm font-light text-[#17306D]/50 uppercase tracking-widest">
                {JOBS.length} {JOBS.length === 1 ? 'Role' : 'Roles'} Available
              </div>
            </div>

            {JOBS.length === 0 ? (
              // EMPTY STATE
              <div className="py-20 text-center border border-slate-200 bg-slate-50 rounded-none">
                <Briefcase size={48} strokeWidth={1} className="mx-auto text-[#17306D]/30 mb-6" />
                <h3 className="text-2xl text-[#17306D] font-light mb-3">No open positions</h3>
                <p className="text-[#17306D]/60 font-light max-w-md mx-auto">
                  We are currently at full capacity, but our network is always expanding. Check back soon or follow our latest news for updates.
                </p>
              </div>
            ) : (
              // JOB CARDS GRID
              <div className="flex flex-col gap-4">
                {JOBS.map((job) => (
                  <div 
                    key={job.id}
                    onClick={() => openJobDetails(job)}
                    className="group border border-slate-200 bg-white p-8 rounded-none cursor-pointer transition-all hover:border-[#0640CE] hover:shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#F5B11A] font-light mb-2">{job.department}</p>
                      <h3 className="text-2xl text-[#17306D] font-light mb-4 group-hover:text-[#0640CE] transition-colors">{job.title}</h3>
                      <div className="flex flex-wrap gap-6 text-sm text-[#17306D]/60 font-light">
                        <span className="flex items-center gap-2"><MapPin size={16} strokeWidth={1} /> {job.location}</span>
                        <span className="flex items-center gap-2"><Clock size={16} strokeWidth={1} /> {job.type}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between md:justify-end gap-6 mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-0 border-slate-100">
                      <span className="text-xs text-[#17306D]/40 font-light uppercase tracking-widest">Posted {job.datePosted}</span>
                      <div className="h-10 w-10 flex items-center justify-center border border-slate-200 rounded-none text-[#17306D] group-hover:bg-[#0640CE] group-hover:text-white group-hover:border-[#0640CE] transition-all">
                        <ArrowRight size={18} strokeWidth={1} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </section>

      </main>

      <Footer />

      {/* ===================== JOB DETAILS MODAL ===================== */}
      {selectedJob && !isApplyModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-[#17306D]/80 backdrop-blur-sm" onClick={closeJobDetails}></div>
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-none shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-300">
            
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-200 p-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#F5B11A] font-light mb-2">{selectedJob.department}</p>
                <h2 className="text-3xl text-[#17306D] font-light">{selectedJob.title}</h2>
                <div className="flex flex-wrap gap-6 text-sm text-[#17306D]/60 font-light mt-4">
                  <span className="flex items-center gap-2"><MapPin size={16} strokeWidth={1} /> {selectedJob.location}</span>
                  <span className="flex items-center gap-2"><Clock size={16} strokeWidth={1} /> {selectedJob.type}</span>
                  <span className="flex items-center gap-2 text-[#EB2027]"><Calendar size={16} strokeWidth={1} /> Closes: {selectedJob.deadline}</span>
                </div>
              </div>
              <button onClick={closeJobDetails} className="text-[#17306D]/50 hover:text-[#17306D] transition-colors p-2">
                <X size={24} strokeWidth={1} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-grow overflow-y-auto p-8 font-light text-[#17306D]/80">
              <h4 className="text-lg font-medium text-[#17306D] mb-3">Role Overview</h4>
              <p className="leading-relaxed mb-8">{selectedJob.description}</p>

              <h4 className="text-lg font-medium text-[#17306D] mb-3">Key Responsibilities</h4>
              <ul className="list-disc pl-5 space-y-2 mb-8 leading-relaxed">
                {selectedJob.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>

              <h4 className="text-lg font-medium text-[#17306D] mb-3">Qualifications & Experience</h4>
              <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                {selectedJob.qualifications.map((qual, i) => (
                  <li key={i}>{qual}</li>
                ))}
              </ul>
            </div>

            {/* Footer Action */}
            <div className="border-t border-slate-200 p-6 bg-slate-50 flex justify-end">
              <button 
                onClick={openApplication}
                className="bg-[#17306D] text-white px-8 py-3 uppercase tracking-widest text-sm font-light hover:bg-[#0640CE] transition-colors rounded-none"
              >
                Apply Now
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ===================== APPLICATION MODAL ===================== */}
      {isApplyModalOpen && selectedJob && (
        <ApplicationModal job={selectedJob} onClose={closeApplication} />
      )}

    </div>
  );
}

// ==========================================
// SEPARATE APPLICATION MODAL COMPONENT
// ==========================================
function ApplicationModal({ job, onClose }: { job: Job, onClose: () => void }) {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  // Drag and drop handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const submitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for submitting application goes here
    alert("Application submitted successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-[#17306D]/90 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-none shadow-2xl flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 p-6 bg-slate-50">
          <div>
            <h2 className="text-xl text-[#17306D] font-light">Application Profile</h2>
            <p className="text-xs uppercase tracking-widest text-[#17306D]/50 font-light mt-1">Applying for: {job.title}</p>
          </div>
          <button onClick={onClose} className="text-[#17306D]/50 hover:text-[#17306D] transition-colors p-2">
            <X size={20} strokeWidth={1} />
          </button>
        </div>

        {/* Scrollable Form */}
        <div className="flex-grow overflow-y-auto p-6 md:p-8">
          <form id="application-form" onSubmit={submitApplication} className="space-y-8 font-light">
            
            {/* Resume Upload Drag & Drop */}
            <div>
              <label className="block text-sm text-[#17306D] mb-3 uppercase tracking-widest">Resume / CV *</label>
              <div 
                className={`relative w-full border-2 border-dashed ${dragActive ? 'border-[#0640CE] bg-[#0640CE]/5' : 'border-slate-300 bg-slate-50'} p-10 text-center transition-colors`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input 
                  type="file" 
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                  required={!file}
                />
                <div className="flex flex-col items-center justify-center pointer-events-none">
                  {file ? (
                    <>
                      <FileText size={32} strokeWidth={1} className="text-[#0640CE] mb-3" />
                      <p className="text-[#17306D] text-sm">{file.name}</p>
                      <p className="text-[#17306D]/50 text-xs mt-1">Click or drag to replace</p>
                    </>
                  ) : (
                    <>
                      <UploadCloud size={32} strokeWidth={1} className="text-[#17306D]/50 mb-3" />
                      <p className="text-[#17306D] text-sm">Drag and drop your resume here</p>
                      <p className="text-[#17306D]/50 text-xs mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs text-[#17306D] mb-2 uppercase tracking-widest">First Name *</label>
                <input required type="text" className="w-full border border-slate-200 px-4 py-3 text-sm focus:border-[#0640CE] focus:outline-none bg-slate-50" />
              </div>
              <div>
                <label className="block text-xs text-[#17306D] mb-2 uppercase tracking-widest">Last Name *</label>
                <input required type="text" className="w-full border border-slate-200 px-4 py-3 text-sm focus:border-[#0640CE] focus:outline-none bg-slate-50" />
              </div>
            </div>

            <div>
              <label className="block text-xs text-[#17306D] mb-2 uppercase tracking-widest">Email Address *</label>
              <input required type="email" className="w-full border border-slate-200 px-4 py-3 text-sm focus:border-[#0640CE] focus:outline-none bg-slate-50" />
            </div>

            <div>
              <label className="block text-xs text-[#17306D] mb-2 uppercase tracking-widest">Highest Education Level *</label>
              <select required className="w-full border border-slate-200 px-4 py-3 text-sm focus:border-[#0640CE] focus:outline-none bg-slate-50 appearance-none">
                <option value="" disabled selected>Select an option</option>
                <option value="high-school">High School</option>
                <option value="bachelors">Bachelors Degree</option>
                <option value="masters">Masters Degree</option>
                <option value="phd">Doctorate / PhD</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs text-[#17306D] mb-2 uppercase tracking-widest">Work Authorization *</label>
                <select required className="w-full border border-slate-200 px-4 py-3 text-sm focus:border-[#0640CE] focus:outline-none bg-slate-50 appearance-none">
                  <option value="" disabled selected>Select an option</option>
                  <option value="yes">Authorized to work</option>
                  <option value="no">Require sponsorship</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-[#17306D] mb-2 uppercase tracking-widest">Gender (Optional)</label>
                <select className="w-full border border-slate-200 px-4 py-3 text-sm focus:border-[#0640CE] focus:outline-none bg-slate-50 appearance-none">
                  <option value="" disabled selected>Select an option</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-binary</option>
                  <option value="prefer-not">Prefer not to say</option>
                </select>
              </div>
            </div>

          </form>
        </div>

        {/* Footer Action */}
        <div className="border-t border-slate-200 p-6 bg-slate-50 flex justify-end gap-4">
          <button 
            type="button"
            onClick={onClose}
            className="border border-[#17306D] text-[#17306D] px-6 py-3 uppercase tracking-widest text-sm font-light hover:bg-[#17306D] hover:text-white transition-colors rounded-none"
          >
            Cancel
          </button>
          <button 
            type="submit"
            form="application-form"
            className="bg-[#17306D] text-white px-8 py-3 uppercase tracking-widest text-sm font-light hover:bg-[#0640CE] transition-colors rounded-none"
          >
            Submit Application
          </button>
        </div>

      </div>
    </div>
  );
}