"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  Check,
  ChevronRight,
  Shield,
  HelpCircle,
  Menu,
  X,
  Lock,
  Eye,
  AlertTriangle,
  Info
} from "lucide-react";

// Pricing list definition
interface PlanDetails {
  title: string;
  sub: string;
  originalPrice: number;
  discount: number;
  devices: string;
  pricePerYear: number;
}

const plan2YearDetails: Record<string, PlanDetails> = {
  "McAfee® Total Protection - Basic - 2 yr": {
    title: "McAfee® Total Protection - Basic",
    sub: "All-in-one protection for your personal info and privacy, so you can enjoy life online.",
    originalPrice: 2999.00,
    discount: 1400.00,
    devices: "1 Device",
    pricePerYear: 799.50
  },
  "McAfee® Total Protection - Essential - 2 yr": {
    title: "McAfee® Total Protection - Essential",
    sub: "Enhanced security suites for family and home networks with identity tracking.",
    originalPrice: 11997.00,
    discount: 7798.00,
    devices: "5 Devices",
    pricePerYear: 1399.66
  },
  "McAfee® Total Protection - Premium - 2 yr": {
    title: "McAfee® Total Protection - Premium",
    sub: "Ultimate cross-device defense coverage with personal info dark web alert integration.",
    originalPrice: 14997.00,
    discount: 9898.00,
    devices: "10 Devices",
    pricePerYear: 1699.66
  }
};

export default function McAfeeClone() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroPlan, setHeroPlan] = useState<string>("McAfee® Total Protection - Basic - 2 yr");
  const [pricePeriodYears, setPricePeriodYears] = useState<2 | 3>(3);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);
  const [seeAllFeatures, setSeeAllFeatures] = useState(false);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [openTermsSection, setOpenTermsSection] = useState<string | null>(null);

  const selectedHeroPlan = plan2YearDetails[heroPlan] || plan2YearDetails["McAfee® Total Protection - Basic - 2 yr"];

  // Pricing plans based on 2 / 3 years selection
  const pricingPlans = [
    {
      name: "McAfee® Total Protection",
      tag: "3 years",
      price3Yr: 1699.66,
      price2Yr: 1499.50,
      original3Yr: 14997.00,
      original2Yr: 11997.00,
      save3Yr: 9898.00,
      save2Yr: 7798.00,
      devices: "10 Devices",
      user: "1 user",
      features: [
        "Scam Detector",
        "Antivirus",
        "Identity Monitoring",
        "Password manager",
        "Web protection",
        "File shredder",
        "Advanced Firewall",
        "Tracker Remover",
        "Virus Protection Pledge"
      ]
    },
    {
      name: "McAfee® Essential",
      tag: "3 years",
      price3Yr: 1399.66,
      price2Yr: 1199.00,
      original3Yr: 11997.00,
      original2Yr: 8999.00,
      save3Yr: 7798.00,
      save2Yr: 5200.00,
      devices: "5 Devices",
      user: "1 user",
      features: [
        "Scam Detector",
        "Antivirus",
        "Identity Monitoring",
        "Password manager",
        "Web protection",
        "File shredder",
        "Advanced Firewall",
        "Tracker Remover",
        "Virus Protection Pledge"
      ]
    },
    {
      name: "McAfee® Basic",
      tag: "3 years",
      price3Yr: 799.66,
      price2Yr: 699.00,
      original3Yr: 4497.00,
      original2Yr: 2999.00,
      save3Yr: 2098.00,
      save2Yr: 1400.00,
      devices: "1 Device",
      user: "1 user",
      features: [
        "Scam Detector",
        "Antivirus",
        "Identity Monitoring",
        "Password manager",
        "Web protection",
        "File shredder",
        "Advanced Firewall",
        "Tracker Remover",
        "Virus Protection Pledge"
      ]
    }
  ];

  const faqs = [
    {
      q: "What does McAfee Total Protection cover?",
      a: "McAfee Total Protection provides comprehensive defense including award-winning antivirus, identity monitoring, secure VPN, safe browsing tools, password manager, and privacy guards to secure your devices and personal files from malware and hackers."
    },
    {
      q: "How do I use McAfee Total Protection?",
      a: "Once purchased, you can download the application client directly onto your system. It automatically installs background shield programs and guides you through setting up identity protection, VPN channels, and scanner preferences."
    },
    {
      q: "Does McAfee Total Protection remove viruses?",
      a: "Yes. In addition to proactive shields that prevent initial infections, McAfee scans and completely purges existing Trojans, ransomware, spyware, and tracking cookies from your hard drive."
    },
    {
      q: "How many devices can I use with McAfee Total Protection?",
      a: "Device coverage depends on your chosen tier: Basic covers 1 device, Essential protects up to 5 devices, and Total Protection provides security coverage for up to 10 endpoints."
    },
    {
      q: "Do I need to renew my McAfee subscription?",
      a: "Yes. To keep you protected against emerging daily threat signatures, your subscription auto-renews at the end of the term. You can manage or disable automatic renewals easily in your McAfee account settings."
    },
    {
      q: "What devices and operating systems are compatible with McAfee Total Protection?",
      a: "McAfee Total Protection is compatible with Windows (11, 10), macOS (current and two previous versions), Android (8.0 or higher), and iOS (current and two previous versions)."
    },
    {
      q: "What happens if I don't renew McAfee Total Protection?",
      a: "If your subscription expires, you will lose access to active threat scanning, VPN security updates, automated firewall protection, and real-time database updates, leaving your device vulnerable."
    },
    {
      q: "How is my Protection Score calculated?",
      a: "Your Protection Score evaluates the strength of your active settings, setup features, and identity protection. Completing configuration steps like activating VPN or scanning credentials increases your score."
    },
    {
      q: "How can I request a refund?",
      a: "McAfee offers a 30-day money-back guarantee on annual subscriptions. You can request a refund by reaching out to McAfee Customer Support directly through their support page."
    },
    {
      q: "How do I turn Auto-Renewal on or off?",
      a: "You can toggle auto-renewal from your McAfee account dashboard. Go to the Auto-Renewal Settings tab, select the toggle next to your product plan, and confirm the change."
    },
    {
      q: "Will my subscription renew automatically?",
      a: "Yes, by default annual plans are enrolled in auto-renewal to avoid service gaps. You receive warning notices via email before any payment transaction goes through."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#454545] font-sans selection:bg-[#af0707]/10 antialiased">
      
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-none mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = "/"}>
            <img src="/logo.png" alt="McAfee Logo" className="h-40 max-h-none w-auto object-contain py-0" />
          </div>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/checkout"
              className="px-16 py-3 rounded-full bg-[#af0707] hover:bg-[#910505] text-white text-sm font-bold shadow-md shadow-red-900/10 transition-all duration-200"
            >
              Buy Now
            </a>
            <a
              href="/login"
              className="px-14 py-3 rounded-full border border-slate-300 hover:bg-[#343434] hover:text-white text-slate-700 text-sm font-semibold transition-all duration-200"
            >
              Log In
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-50 transition"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-3 shadow-lg">
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-2.5 text-center text-sm font-bold bg-[#af0707] text-white rounded-full"
            >
              Buy Now
            </a>
            <button className="w-full py-2.5 text-center text-sm font-semibold border border-slate-300 rounded-full">
              My Account
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-8 md:py-12 bg-[#f2f3f5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-[36px] font-semibold text-[#454545] tracking-tight leading-tight">
                {selectedHeroPlan.title}
              </h1>
              <p className="text-[20px] font-normal text-slate-700 leading-relaxed max-w-xl">
                {selectedHeroPlan.sub}
              </p>

              {/* Selector Dropdown */}
              <div className="max-w-md relative">
                <select
                  value={heroPlan}
                  onChange={(e) => setHeroPlan(e.target.value)}
                  className="w-full appearance-none bg-white border border-slate-300 rounded-lg px-4 py-3.5 text-sm font-medium text-slate-700 pr-10 focus:outline-none focus:border-[#af0707] transition cursor-pointer shadow-sm"
                >
                  <option value="McAfee® Total Protection - Basic - 2 yr">McAfee® Total Protection - Basic - 2 yr</option>
                  <option value="McAfee® Total Protection - Essential - 2 yr">McAfee® Total Protection - Essential - 2 yr</option>
                  <option value="McAfee® Total Protection - Premium - 2 yr">McAfee® Total Protection - Premium - 2 yr</option>
                </select>
                <ChevronDown className="w-4.5 h-4.5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Pricing Display */}
              <div className="flex items-center gap-6 pt-2">
                <div className="text-[34px] font-medium text-[#454545]">
                  ₹{selectedHeroPlan.pricePerYear}/yr
                </div>
                <div className="border-l border-slate-300 pl-6 text-xs text-slate-500 space-y-1">
                  <div>
                    <span className="line-through text-slate-400">₹{selectedHeroPlan.originalPrice.toFixed(2)}</span>{" "}
                    <span className="text-[#af0707] font-bold">Save ₹{selectedHeroPlan.discount.toFixed(2)}</span>
                  </div>
                  <div className="font-semibold text-slate-800">{selectedHeroPlan.devices}</div>
                  <div>Today pay ₹{(selectedHeroPlan.originalPrice - selectedHeroPlan.discount).toFixed(2)}* for 2 yrs subscription.</div>
                </div>
              </div>

              {/* Hero Action Buttons */}
              <div className="flex items-center gap-6 pt-2">
                <a
                  href="/checkout"
                  className="px-12 py-3.5 bg-[#af0707] hover:bg-[#910505] text-white font-bold text-sm rounded-full shadow-lg shadow-red-900/10 transition duration-200"
                >
                  Buy Now
                </a>
                <a href="#pricing" style={{ textDecoration: "underline" }} className="text-sm font-bold text-slate-700 hover:text-blue-600 transition">
                  View More Plans
                </a>
              </div>

              <p className="text-sm text-slate-500 font-light">
                * First term price for new customers. See <a href="#terms" style={{ color: "#2563eb", textDecoration: "underline" }} className="cursor-pointer hover:text-blue-700 transition">offer details</a> below.
              </p>
            </div>

            {/* Hero Right Visual — 3-card stacked layout matching target design */}
            <div className="lg:col-span-6 relative flex justify-center items-center min-h-[420px] md:min-h-[460px]">

              {/* Outer wrapper – overflow:hidden clips side cards naturally */}
              <div className="relative w-full max-w-[560px] h-full flex items-center justify-center overflow-hidden">

                {/* ── LEFT CARD (Essential – peeking behind left, pink tint) ── */}
                <div
                  className="absolute left-0 z-10 pointer-events-none"
                  style={{ width: 195, top: "50%", transform: "translateY(-46%) translateX(0px)", opacity: 0.92 }}
                >
                  {/* Unified rounded card */}
                  <div className="w-full rounded-2xl overflow-hidden shadow-lg" style={{ background: "#fff" }}>
                    {/* Photo */}
                    <div style={{ height: 185 }} className="w-full overflow-hidden">
                      <img
                        src="/hero_woman.png"
                        alt="Essential plan user"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    {/* Card body – pink tint */}
                    <div className="px-3 pt-3 pb-4 space-y-1.5" style={{ background: "#fce8e8" }}>
                      <div className="flex items-center gap-1 py-1">
                        <img src="/logo.png" alt="McAfee Logo" className="h-10 w-auto object-contain" />
                      </div>
                      <div className="text-[11px] font-extrabold text-[#454545]">Essential</div>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-1">
                          <span className="w-3.5 h-3.5 rounded-full bg-[#24bc98] flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-2 h-2 text-white fill-none stroke-current stroke-2" viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg>
                          </span>
                          <div>
                            <div className="text-[8px] font-bold text-slate-800 leading-tight">Scam Detector</div>
                            <div className="text-[7px] text-slate-400 leading-tight">Text, email, and video</div>
                          </div>
                        </li>
                        {["Premium Antivirus", "Identity monitoring", "Password Manager"].map((item) => (
                          <li key={item} className="flex items-center gap-1">
                            <span className="w-3.5 h-3.5 rounded-full bg-[#24bc98] flex items-center justify-center shrink-0">
                              <svg className="w-2 h-2 text-white fill-none stroke-current stroke-2" viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg>
                            </span>
                            <span className="text-[8px] font-semibold text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* ── CENTER CARD (Basic – front, largest) ── */}
                <div
                  className="relative z-20 bg-white rounded-3xl shadow-2xl overflow-hidden"
                  style={{ width: 320, border: "1px solid #e8e8e8" }}
                >
                  {/* Big photo – taller to match target */}
                  <div className="w-full overflow-hidden" style={{ height: 260 }}>
                    <img
                      src="/hero_man.png"
                      alt="Basic plan user"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* Card content – compact */}
                  <div className="px-6 pt-4 pb-5 space-y-3">
                    {/* McAfee™ M-shield logo row */}
                    <div className="flex items-center gap-2 py-1">
                      <img src="/logo.png" alt="McAfee Logo" className="h-16 w-auto object-contain" />
                    </div>
                    {/* Plan title */}
                    <h3 className="text-[28px] font-extrabold text-[#454545] leading-none">Basic</h3>
                    {/* Features list */}
                    <ul className="space-y-2.5 pt-0.5">
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#24bc98] flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-white fill-none stroke-current stroke-[2.5]" viewBox="0 0 14 14">
                            <polyline points="2,7 6,11 12,3" />
                          </svg>
                        </span>
                        <div>
                          <div className="text-sm font-bold text-[#454545]">Scam Detector</div>
                          <div className="text-xs text-slate-400 font-normal mt-0.5">Text, email, and video scams</div>
                        </div>
                      </li>
                      {["Premium Antivirus", "Identity monitoring", "Password Manager"].map((feat) => (
                        <li key={feat} className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#24bc98] flex items-center justify-center shrink-0">
                            <svg className="w-3.5 h-3.5 text-white fill-none stroke-current stroke-[2.5]" viewBox="0 0 14 14">
                              <polyline points="2,7 6,11 12,3" />
                            </svg>
                          </span>
                          <span className="text-sm font-bold text-[#454545]">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* ── RIGHT CARD (C… – peeking behind right, lavender tint) ── */}
                <div
                  className="absolute right-0 z-10 pointer-events-none"
                  style={{ width: 195, top: "50%", transform: "translateY(-46%) translateX(0px)", opacity: 0.92 }}
                >
                  {/* Unified rounded card */}
                  <div className="w-full rounded-2xl overflow-hidden shadow-lg">
                    {/* Photo */}
                    <div style={{ height: 185 }} className="w-full overflow-hidden">
                      <img
                        src="/hero_man_right.png"
                        alt="Complete plan user"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    {/* Card body – lavender tint, same text style as 1st card */}
                    <div className="px-3 pt-3 pb-4 space-y-1.5" style={{ background: "#ece8f5" }}>
                      <div className="flex items-center gap-1 py-1">
                        <img src="/logo.png" alt="McAfee Logo" className="h-10 w-auto object-contain" />
                      </div>
                      <div className="text-[11px] font-extrabold text-[#454545]">Complete</div>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-1">
                          <span className="w-3.5 h-3.5 rounded-full bg-[#24bc98] flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-2 h-2 text-white fill-none stroke-current stroke-2" viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg>
                          </span>
                          <div>
                            <div className="text-[8px] font-bold text-slate-800 leading-tight">Scam Detector</div>
                            <div className="text-[7px] text-slate-400 leading-tight">Text, email, and video scams</div>
                          </div>
                        </li>
                        {["Premium Antivirus", "Identity monitoring", "Password Manager"].map((item) => (
                          <li key={item} className="flex items-center gap-1">
                            <span className="w-3.5 h-3.5 rounded-full bg-[#24bc98] flex items-center justify-center shrink-0">
                              <svg className="w-2 h-2 text-white fill-none stroke-current stroke-2" viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg>
                            </span>
                            <span className="text-[8px] font-semibold text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Rating bar */}
      <section className="py-8 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[24px] font-normal text-[#454545]">
            Rated #1 by experts. Trusted by millions.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <img src="/logo1.avif" alt="Award logo 1" className="h-14 w-auto object-contain" />
            <img src="/logo2.avif" alt="Award logo 2" className="h-14 w-auto object-contain" />
            <img src="/logo3.avif" alt="Award logo 3" className="h-14 w-auto object-contain" />
            <img src="/logo4.avif" alt="Award logo 4" className="h-14 w-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Easy-to-use antivirus details */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[36px] font-semibold text-[#454545] tracking-tight leading-tight">
              Easy-to-use antivirus protection you can count on
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content List */}
            <div className="space-y-5">
              <h3 className="text-[20px] font-normal text-[#454545] leading-relaxed">
                Trusted solutions for your peace of mind:
              </h3>
              <ul className="space-y-5">
                {[
                  { label: "Scam protection and antivirus", body: "for automatic protection against fake messages, deepfake scams, viruses, malware, and more." },
                  { label: "Advanced privacy features", body: "Secure VPN to keep you safe from prying eyes on public Wi-Fi." },
                  { label: "24/7 identity monitoring and alerts", body: "for up to 60 unique types of personal info on the dark web. We'll even notify you 10 months sooner than similar services, so you can act quickly." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    {/* Outlined red circle check — matches target exactly */}
                    <svg className="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#af0707" strokeWidth="1.8" />
                      <path d="M7.5 12.5L10.5 15.5L16.5 9.5" stroke="#af0707" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-base font-normal text-[#454545] leading-relaxed">
                      <span className="text-[#af0707] font-semibold underline decoration-[#af0707]">{item.label}</span>{" "}{item.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — McAfee Protection Center actual dashboard image */}
            <div className="w-full">
              <img
                src="/dashboard.avif"
                alt="McAfee Protection Center Dashboard"
                className="w-full h-auto object-contain"
              />
            </div>

          </div>
        </div>
      </section>


      {/* Plan selection grid */}
      <section id="pricing" className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10">
            <h2 className="text-[36px] font-semibold text-[#454545] tracking-tight leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Choose the plan that's right for you
            </h2>
          </div>

          {/* Toggle */}
          <div className="mt-4 mb-8 flex justify-center items-center gap-3">
            <span className={`text-[14px] font-semibold ${pricePeriodYears === 2 ? "text-[#454545]" : "text-slate-400"}`}>
              2 Years
            </span>
            <button
              onClick={() => setPricePeriodYears(pricePeriodYears === 2 ? 3 : 2)}
              className="w-12 h-6 bg-[#24bc98] rounded-full p-1 transition-colors relative flex items-center cursor-pointer"
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                pricePeriodYears === 3 ? "translate-x-6" : "translate-x-0"
              }`} />
            </button>
            <span className={`text-[14px] font-semibold ${pricePeriodYears === 3 ? "text-[#454545]" : "text-slate-400"}`}>
              3 Years
            </span>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {pricingPlans.map((plan, idx) => {
              const currentPrice = pricePeriodYears === 3 ? plan.price3Yr : plan.price2Yr;
              const original = pricePeriodYears === 3 ? plan.original3Yr : plan.original2Yr;
              const savings = pricePeriodYears === 3 ? plan.save3Yr : plan.save2Yr;
              
              const isBestValue = plan.name.includes("Total Protection");
              const badgeText = isBestValue ? "Best value!" : `${pricePeriodYears} years`;
              const badgeColor = isBestValue ? "bg-[#2563eb] text-white" : "bg-[#e2d8ce] text-slate-700";
              const border = isBestValue ? "border border-[#4f46e5] relative shadow-md" : "border border-slate-200";

              return (
                <div key={idx} className={`rounded-3xl ${border} bg-[#fcf7f5] p-6 flex flex-col justify-between relative`}>
                  
                  <div>
                    {/* Badge */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className={`text-[10px] font-bold px-4 py-1 rounded-sm uppercase tracking-wider ${badgeColor}`}>
                        {badgeText}
                      </span>
                    </div>

                    {/* Plan name with McAfee logo */}
                    <div className="flex items-center justify-center gap-1 mt-4 mb-6">
                      <img src="/logo.png" alt="McAfee Logo" className="h-12 w-auto object-contain mr-1" />
                      <span className="text-[11px] text-slate-400 font-light">|</span>
                      <span className="text-[11px] font-bold text-[#454545]">{plan.name.replace("McAfee® ", "")}</span>
                    </div>

                    {/* Pricing Info */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="text-[28px] font-normal text-[#454545] tracking-tight">
                          €{currentPrice.toLocaleString()}<span className="text-[14px] font-light text-slate-500">*/yr</span>
                        </div>
                        <div className="flex flex-wrap items-baseline gap-1 mt-1">
                          <span className="text-[11px] text-slate-400 line-through">€{original.toLocaleString()}</span>
                          <span className="text-[11px] text-[#af0707] font-semibold">Save €{savings.toLocaleString()}</span>
                        </div>
                        <div className="text-[10px] text-slate-500 mt-0.5">over {pricePeriodYears} yrs</div>
                      </div>
                      <div className="text-right text-[11px] text-[#454545] font-normal self-center shrink-0 leading-tight">
                        <div className="font-semibold">{plan.devices}</div>
                        <div>{plan.user}</div>
                      </div>
                    </div>

                    {/* Buy Now button */}
                    <div className="mb-6">
                      <a href="/checkout" className={`block text-center w-full py-2.5 rounded-full text-xs font-semibold transition duration-200 ${
                        isBestValue 
                          ? "bg-[#b10c0c] text-white hover:bg-[#910505] border-none shadow-sm" 
                          : "bg-transparent border border-slate-400 text-slate-700 hover:bg-[#f3ece6]"
                      }`}>
                        Buy Now
                      </a>
                    </div>

                    {/* Features list */}
                    <ul className="space-y-3.5">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-center justify-between text-xs font-semibold text-[#454545]">
                          <div className="flex items-center gap-2">
                            <svg className="w-3.5 h-3 text-[#24bc98] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feat}</span>
                          </div>
                          <svg className="w-3.5 h-3.5 text-slate-350 cursor-pointer hover:text-slate-500 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4m0-4h.01" />
                          </svg>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer footnote */}
          <p className="text-center text-sm text-slate-500 mt-8">
            * First term price for new customers. See <span className="underline text-blue-600 cursor-pointer hover:text-blue-700 transition">offer details</span> below.
          </p>

        </div>
      </section>


      {/* McAfee Protection Guarantee */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-[36px] font-semibold text-[#454545] tracking-tight mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            The McAfee Protection <span className="text-[#b10c0c] font-bold">Guarantee</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {[
              {
                icon: "/icon3.avif",
                title: "30-Day Money-Back Guarantee",
                desc: "for peace of mind with a risk-free option to try any plan"
              },
              {
                icon: "/icon1.avif",
                title: "Personalized Protection",
                desc: "to meet the individualized needs of you and your family"
              },
              {
                icon: "/icon2.avif",
                title: "Free Customer Support",
                desc: <>with around-the-clock <span className="text-blue-600 underline cursor-pointer">support</span> and troubleshooting</>
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 flex items-center justify-center">
                  <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                </div>
                <h4 className="text-[20px] font-semibold text-[#454545] max-w-[200px] mx-auto leading-snug">{item.title}</h4>
                <p className="text-base font-normal text-slate-500 max-w-[280px] font-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[36px] font-semibold text-[#454545] tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Frequently asked questions
            </h2>
            <p className="text-[20px] font-normal text-slate-600 mt-2">These answers might help.</p>
          </div>

          <div className="border-t border-slate-200">
            {faqs.slice(0, showAllFaqs ? faqs.length : 5).map((faq, idx) => (
              <div key={idx} className="border-b border-slate-200">
                <button
                  onClick={() => setFaqOpenIndex(faqOpenIndex === idx ? null : idx)}
                  className="w-full py-5 text-left flex justify-between items-center text-[#454545] hover:text-[#333333] transition focus:outline-none text-[20px] font-medium"
                >
                  <span>{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#454545] transition-transform ${faqOpenIndex === idx ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {faqOpenIndex === idx && (
                  <div className="pb-5 text-base text-slate-600 leading-relaxed font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button 
              onClick={() => setShowAllFaqs(!showAllFaqs)}
              className="px-6 py-2 border border-slate-300 hover:bg-slate-50 text-xs font-bold text-slate-600 rounded-full transition inline-flex items-center gap-1.5"
            >
              {showAllFaqs ? "See Less" : "See More"} 
              <svg className={`w-3 h-3 transition-transform duration-200 ${showAllFaqs ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Terms & Footer Details Section */}
      <section id="terms" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#f3f4f6] rounded-3xl p-8 text-slate-700 text-sm leading-relaxed">
            
            <p className="font-bold mb-6 text-slate-800">Important Terms and Promotional Offer Details:</p>
            
            <div className="space-y-4 mb-6">
              {/* Section 1 */}
              <div>
                <div 
                  onClick={() => setOpenTermsSection(openTermsSection === "subscription" ? null : "subscription")}
                  className="flex items-center gap-2 cursor-pointer hover:text-slate-900 transition"
                >
                  <span className="font-bold text-slate-600 text-lg leading-none select-none">
                    {openTermsSection === "subscription" ? "—" : "+"}
                  </span>
                  <span className="font-semibold text-[#454545]">Subscription, Pricing, and Automatic Renewal Terms:</span>
                </div>
                {openTermsSection === "subscription" && (
                  <ul className="list-disc list-outside pl-6 mt-3 space-y-4 text-xs text-slate-600 max-w-5xl">
                    <li>The amount you are charged upon purchase is the price of the first term of your subscription. After that, unless you choose to cancel your subscription, it will renew automatically for another term and you will be charged the renewal subscription price in effect at the time of your renewal.</li>
                    <li>We will contact you using the email address you provide when you register ahead of the renewal date, so you can decide whether to keep your subscription going or not.</li>
                    <li>Introductory offer: Unless otherwise stated, if an introductory price is shown, it describes the lower price offered to you, as a new customer, for the first term of the subscription and the price currently paid by existing customers upon renewal of their subscription for a subsequent year at the time that the offer is made.</li>
                    <li>Pricing is subject to change. The new price will apply when your subscription renews. If the renewal price changes, we will notify you in advance using the email address you provided at registration, so you always know what's going on.</li>
                    <li>Payment will be taken 30 days before your subscription renews. You can change your auto-renewal settings before then to avoid being charged from your <a href="#" className="text-blue-600 hover:underline">My Account</a> page. To learn more, <a href="#" className="text-blue-600 hover:underline">click here</a>.</li>
                    <li>You may request a full refund by contacting <a href="#" className="text-blue-600 hover:underline">Customer Support</a> or accessing your <a href="#" className="text-blue-600 hover:underline">My Account</a> page within 30 days of initial purchase or within 60 days of automatic renewal. You may also be entitled to a pro-rated refund outside this window. See the <a href="#" className="text-blue-600 hover:underline">Refund Policy</a> for details.</li>
                    <li>Your subscription is subject to our <a href="#" className="text-blue-600 hover:underline">License Agreement</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Notice</a>. Subscriptions covering &quot;all&quot; devices are limited to supported devices that you own. Product features may be added, changed or removed during the subscription term. Not all features may be available on all devices. See <a href="#" className="text-blue-600 hover:underline">System Requirements</a> for additional information.</li>
                  </ul>
                )}
              </div>
              
              {/* Section 2 */}
              <div>
                <div 
                  onClick={() => setOpenTermsSection(openTermsSection === "benefits" ? null : "benefits")}
                  className="flex items-center gap-2 cursor-pointer hover:text-slate-900 transition"
                >
                  <span className="font-bold text-slate-600 text-lg leading-none select-none">
                    {openTermsSection === "benefits" ? "—" : "+"}
                  </span>
                  <span className="font-semibold text-[#454545]">**Free Benefits With Auto-Renewal:</span>
                </div>
                {openTermsSection === "benefits" && (
                  <ul className="list-disc list-outside pl-6 mt-3 space-y-4 text-xs text-slate-600 max-w-5xl">
                    <li>For many qualifying product subscriptions McAfee offers additional benefits for free when you are enrolled in auto-renewal. You can check your eligibility for these benefits in your <a href="#" className="text-blue-600 hover:underline">My Account</a> page. Not all benefits are offered in all locations or for all product subscriptions. <a href="#" className="text-blue-600 hover:underline">System Requirements</a> apply. Turning off auto-renewal terminates your eligibility for these additional benefits.</li>
                    <li><strong>Virus Protection Pledge (VPP):</strong> If we cannot remove a virus from your supported device we'll refund you the amount you paid for your current term subscription. The refund does not apply to any damage or loss caused by a virus. You are responsible for backing up your data to prevent data loss. See terms here: <a href="https://mcafee.com/pledge" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">mcafee.com/pledge</a>.</li>
                  </ul>
                )}
              </div>
              
              {/* Section 3 */}
              <div>
                <div 
                  onClick={() => setOpenTermsSection(openTermsSection === "identity" ? null : "identity")}
                  className="flex items-center gap-2 cursor-pointer hover:text-slate-900 transition"
                >
                  <span className="font-bold text-slate-600 text-lg leading-none select-none">
                    {openTermsSection === "identity" ? "—" : "+"}
                  </span>
                  <span className="font-semibold text-[#454545]">**Additional Terms Specific to Identity Monitoring Service:</span>
                </div>
                {openTermsSection === "identity" && (
                  <ul className="list-disc list-outside pl-6 mt-3 space-y-4 text-xs text-slate-600 max-w-5xl">
                    <li>Eligibility: McAfee® Identity Monitoring Service Essentials is available within active McAfee Total Protection and McAfee LiveSafe subscriptions with identity monitoring for up to 10 unique emails. Phone number monitoring is enabled upon activation of Automatic Renewal. Not all identity monitoring elements are available in all countries. See <a href="#" className="text-blue-600 hover:underline">Product Terms of Service</a> for more information.</li>
                    <li>Your subscription is subject to our License Agreement and Privacy Notice. Product features may be added, changed or removed during the subscription term. Some features may require registration and a valid ID number to activate. See <a href="#" className="text-blue-600 hover:underline">System Requirements</a> for additional information.</li>
                    <li>While McAfee Identity Monitoring Service provides you tools and resources to protect yourself from identity theft, no identity can be completely secure.</li>
                  </ul>
                )}
              </div>
              
              {/* Section 4 */}
              <div>
                <div 
                  onClick={() => setOpenTermsSection(openTermsSection === "scam" ? null : "scam")}
                  className="flex items-center gap-2 cursor-pointer hover:text-slate-900 transition"
                >
                  <span className="font-bold text-slate-600 text-lg leading-none select-none">
                    {openTermsSection === "scam" ? "—" : "+"}
                  </span>
                  <span className="font-semibold text-[#454545]">Additional Terms Specific to Scam Detector:</span>
                </div>
                {openTermsSection === "scam" && (
                  <ul className="list-disc list-outside pl-6 mt-3 space-y-4 text-xs text-slate-600 max-w-5xl">
                    <li>Video Scams is currently trained only on English audio. Scanning non-English audio in videos might give less accurate results. No AI is perfect, but we're committed to improving its reliability for your protection. See <a href="#" className="text-blue-600 hover:underline">here</a> for more information.</li>
                  </ul>
                )}
              </div>
            </div>

            <div className="border-t border-slate-300 my-6"></div>

            <p className="text-slate-500 mb-4 text-xs leading-relaxed">
              McAfee, LiveSafe™, Total Protection™ and the McAfee logo are trademarks or registered trademarks of McAfee, LLC. Or its subsidiaries in the United States and other countries. Other brands and names may be claimed as the property of others.
            </p>

            <p className="text-slate-500 text-xs">
              6220 America Center Drive, San Jose, CA 95002, USA (866) 622-3911 &copy; 2026 McAfee, LLC. All Rights Reserved.
            </p>

          </div>
        </div>
      </section>
    </div>
  );
}
