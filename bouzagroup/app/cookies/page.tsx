"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CookiesPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  
  // State for the functional toggle and notifications
  const [analyticsAllowed, setAnalyticsAllowed] = useState(true);
  const [notification, setNotification] = useState<string | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

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

  const handleAction = (actionName: string) => {
    setNotification(`Preferences updated: ${actionName}`);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-white text-[#17306D] antialiased pt-20 flex flex-col font-light">
      <Navbar />

      <main className="flex-grow">
        
        {/* ===================== NOTIFICATION TOAST ===================== */}
        {notification && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#0640CE] text-white px-6 py-3 rounded-none shadow-xl flex items-center gap-3 animate-in slide-in-from-top-4 fade-in duration-300">
            <CheckCircle2 size={18} strokeWidth={1} />
            <p className="text-sm font-medium tracking-wide">{notification}</p>
          </div>
        )}

        {/* ===================== HEADER & ACTIONS ===================== */}
        <section className="bg-white py-16 lg:py-20" data-animate>
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <h1 className="text-3xl lg:text-5xl tracking-tight text-[#17306D] mb-12 font-light">
              Cookies - Modifications and Details
            </h1>

            {/* Functional Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => handleAction("Accept selected")}
                className="flex-1 py-3 px-6 border border-[#17306D] text-[#17306D] hover:bg-slate-50 transition-colors rounded-none text-sm font-medium uppercase tracking-widest"
              >
                Accept selected
              </button>
              <button 
                onClick={() => {
                  setAnalyticsAllowed(false);
                  handleAction("Reject all optional");
                }}
                className="flex-1 py-3 px-6 border border-[#17306D] text-[#17306D] hover:bg-slate-50 transition-colors rounded-none text-sm font-medium uppercase tracking-widest"
              >
                Reject
              </button>
              <button 
                onClick={() => {
                  setAnalyticsAllowed(true);
                  handleAction("Accept all");
                }}
                className="flex-1 py-3 px-6 bg-[#0640CE] text-white hover:bg-[#17306D] transition-colors rounded-none text-sm font-medium uppercase tracking-widest"
              >
                Accept all
              </button>
            </div>
            
            <p className="text-[#17306D]/80 leading-relaxed">
              In the following paragraph, you&apos;ll learn more about the purposes for which cookies are used.
            </p>
          </div>
        </section>

        {/* ===================== TOGGLE SECTIONS ===================== */}
        <section className="pb-16 bg-white" data-animate>
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            
            {/* Analytics Cookies */}
            <div className="border-t border-slate-200 py-10">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl text-[#17306D] font-light">Analytics and Marketing Cookies</h2>
                
                {/* Functional Toggle */}
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setAnalyticsAllowed(!analyticsAllowed)}
                    className={`relative w-14 h-7 transition-colors duration-300 ease-in-out focus:outline-none rounded-none border ${analyticsAllowed ? 'bg-[#0640CE] border-[#0640CE]' : 'bg-slate-200 border-slate-300'}`}
                    aria-pressed={analyticsAllowed}
                  >
                    <span 
                      className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white transition-transform duration-300 ease-in-out transform ${analyticsAllowed ? 'translate-x-7' : 'translate-x-0'} rounded-none shadow-sm`} 
                    />
                  </button>
                  <span className="text-sm text-[#17306D]/80 w-16">
                    {analyticsAllowed ? "Allowed" : "Blocked"}
                  </span>
                </div>
              </div>

              <div className="text-[#17306D]/80 space-y-4 leading-relaxed font-light">
                <p>Based on your consent, we store and read information on your end device, in order to subsequently process the collected personal data.</p>
                <p>This takes place in particular to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Present you with relevant advertisements, content or online banners</li>
                  <li>Create online advertisements with information that may be of interest to you</li>
                  <li>Prevent you from repeatedly being exposed to the same advertisements</li>
                  <li>Provide you with a personalised user experience</li>
                </ul>
                <p className="pt-4">
                  Moreover, based on your consent, your data may also be transferred to countries outside the East African Community (EAC) for a limited period of time, for example to the USA or the EU. As a rule, this transfer will be additionally secured by the conclusion of standard contractual clauses, if necessary, with supplementary technical measures.
                </p>
              </div>

              <button 
                onClick={() => setDetailsOpen(!detailsOpen)}
                className="flex items-center gap-2 mt-8 text-sm text-[#17306D] hover:text-[#0640CE] transition-colors"
              >
                {detailsOpen ? <ChevronUp size={16} strokeWidth={1} /> : <ChevronDown size={16} strokeWidth={1} />}
                Open cookies and options in detail
              </button>
            </div>

            {/* Essential Cookies */}
            <div className="border-t border-slate-200 py-10">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl text-[#17306D] font-light">Essential Cookies</h2>
                <span className="text-sm text-[#17306D]/80">Always on</span>
              </div>

              <div className="text-[#17306D]/80 space-y-4 leading-relaxed font-light">
                <p>We store and read essential cookies on your end device, in order to subsequently process the collected personal data.</p>
                <p>This takes place in particular to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Enable you to navigate between pages without losing your previous actions from the same browser session</li>
                  <li>Provide you with multimedia content that meets your technical requirements</li>
                  <li>Remember your past actions, such as the choice for your previous cookie consent</li>
                  <li>Ensure our website is created error-free and to continue improving it</li>
                  <li>Ensure an optimal load distribution when loading our websites</li>
                  <li>Store your data for authentication purposes (Bouza Secure Portal)</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* ===================== DETAILED EXPLANATIONS ===================== */}
        {detailsOpen && (
          <section className="py-16 bg-slate-50 border-t border-slate-200 animate-in fade-in slide-in-from-top-4 duration-500" data-animate>
            <div className="mx-auto max-w-5xl px-6 lg:px-10">
              <h2 className="text-3xl font-light text-[#17306D] mb-8">Cookies and Modifications.</h2>
              <p className="text-[#17306D]/80 leading-relaxed font-light mb-12">
                In the following paragraphs, we&apos;ll explain our purposes for using cookies and similar technologies on our websites, we also offer you the opportunity to modify your consent to our use or to revoke your consent at any time.
              </p>

              <div className="space-y-12 text-[#17306D]/80 font-light leading-relaxed">
                
                <div>
                  <h3 className="text-xl font-medium text-[#17306D] mb-3">What are Cookies?</h3>
                  <p>Cookies and web storage technologies, such as Local Storage and Session Storage, referred to as &quot;cookies&quot;, facilitate your interaction with our websites. As soon as you visit our websites, cookies are downloaded by the internet browser to your end device, for example as a small text file. Third-party technologies, like scripts, pixels and tags, which we integrate into our websites for advertising purposes, also place cookies on your end device. In the following paragraphs, we&apos;ll explain to you what we use these technologies for, and how to adjust the settings to your needs.</p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-[#17306D] mb-3">Purposes of Cookies.</h3>
                  <p>Cookies take care of many different tasks that contribute to a seamless and interactive online experience. For this to work, you need to always use the same end device and the same browser. Some specific cookies are essential for the running and maintenance of our websites, because they enable us to:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-1">
                    <li>Provide you with the services of your preference at all times</li>
                    <li>Present you with specific and relevant information</li>
                    <li>Offer you a seamless and comfortable online experience</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-[#17306D] mb-3">Recognition and Response.</h3>
                  <p>Cookies show us how you use and interact with our websites, for instance, when you save your settings and user ID. This helps us to:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-1">
                    <li>Provide you with a more personal experience by bringing you to the most important pages in a more efficient way</li>
                    <li>Remind us of some of your personal preferences</li>
                    <li>Guide you to useful content or pages</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-[#17306D] mb-3">Continuous Improvements.</h3>
                  <p>Cookies help us understand how visitors use our websites, and they enable us to make any necessary improvements. For example, cookies make it possible to analyse what type of content is popular, and create similar topics that could be equally relevant to our visitors. This, in turn, helps us to:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-1">
                    <li>Improve the design of our websites and provide you with a better online experience</li>
                    <li>Try different approaches and present our visitors with content that is most relevant to them</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-[#17306D] mb-3">Advertising and Retargeting.</h3>
                  <p>Our websites may use cookies for retargeting purposes. This means that cookies store information from your browsing history to track your interests and activity on our websites. This helps us, or our advertising partners, to present you with:</p>
                  <ul className="list-disc pl-6 mt-3 space-y-1">
                    <li>Relevant advertising for our products on other websites, which is based on your visits to our website</li>
                    <li>A combination of relevant and specific information, so that the displayed advertising matches your interests</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-[#17306D] mb-3">Cookie Categories.</h3>
                  <p>Both data processing and associated cookies may be deployed on our websites. Depending on function and purpose, we have divided data processing into different categories. The intended purpose of each respective category is described on this page, and your consent to said categories can also be modified here. Each category lists all related data processing, if any, as well as the cookies that are normally used for said data processing.</p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-[#17306D] mb-3">What do you need to know about cookies?</h3>
                  <p>Cookies support a better and faster online experience. A cookie is a small text file that stores internet settings. Almost every website uses cookies. When you visit a website for the first time, the cookies are downloaded by your internet browser. The next time you visit this website using the same end device, the website recognises you and displays content that is tailored to your personal needs and interests. The cookies mentioned below are synonymous with HTML5 Session Web Storage and HTML5 Local Web Storage.</p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-[#17306D] mb-3">First-Party Cookies.</h3>
                  <p>First party cookies are cookies that we, or contracted service providers, place on the website and with which you interact if you continue to use our website.</p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-[#17306D] mb-3">Third-Party Cookies.</h3>
                  <p>Our websites may also contain content from other providers (third-party providers), who possibly use their own cookies. Third-party providers may place cookies during your visit to our websites that request information like, for example, whether you loaded one of our websites. Please go to the website of the third-party provider to learn more about their use of cookies. You can reject cookies from third-party providers at any time, by using the corresponding function on our websites.</p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-[#17306D] mb-3">Rejecting Cookies.</h3>
                  <p>When you reject cookies that require your consent, we&apos;ll duly accept your decision and refrain from placing the respective cookies. If you revoke your consent for cookies, we&apos;ll stop placing cookies that require consent starting from your visit to the next page. We&apos;ll delete any first-party cookies, insofar as this is technically possible. You may, of course, refuse the use of analytics and marketing cookies. However, this will prevent us from understanding what you like or dislike about our websites, and from making any necessary improvements. Please note that we cannot delete third-party cookies. If you would like to delete all third-party cookies, please go to your browser settings.</p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-[#17306D] mb-3">Cookie Management in your browser.</h3>
                  <p>You can manage cookie settings via the aforementioned features on our website, and also through changing your browser settings (enable, disable, and delete). Most browsers allow you to manage cookies by either accepting or rejecting all cookies. Go to the help section of your browser to learn more about how to manage and delete cookies. When you changeNormally I can help with things like this, but I don&apos;t seem to have access to that content. You can try again or ask me for something else.your cookie settings, certain cookies will be blocked. In this case, you may not fully benefit from some features on our website. We may also be unable to provide you with certain content that you have previously seen or used.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-[#17306D] mb-3">Where is the information collected by cookies processed?</h3>
                  <p>The information collected via cookies is primarily processed within Kenya, the East African Community (EAC), and approved international jurisdictions. In some cases, it may happen that cookie information is processed by our contracted service providers or by third-party cookie providers in countries outside these regions, which don&apos;t provide a level of data protection equivalent to ours. In some countries, the notable risk exists that local authorities may obtain access to cookie information processed there for monitoring purposes. No effective legal remedies are in place to prevent this. We have implemented additional and adequate security measures, like for instance contracts on the basis of standard contractual clauses, in addition to the implementation of complementary technical measures, to ensure that the information collected by cookies is protected appropriately. Insofar as you&apos;ve given your consent to the category &quot;Analytics and Marketing Cookies&quot;, you also agree to the transfer and further processing of the information collected by cookies in these extended jurisdictions.</p>
                </div>

              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}