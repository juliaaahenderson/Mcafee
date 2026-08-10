"use client";

import React, { useState, useEffect, useRef } from "react";

// Alphabetical countries array with flag indicators
const countries = [
  { name: "Afghanistan", code: "AF", flag: "🇦🇫" },
  { name: "Albania", code: "AL", flag: "🇦🇱" },
  { name: "Algeria", code: "DZ", flag: "🇩🇿" },
  { name: "Andorra", code: "AD", flag: "🇦🇩" },
  { name: "Angola", code: "AO", flag: "🇦🇴" },
  { name: "Antigua and Barbuda", code: "AG", flag: "🇦🇬" },
  { name: "Argentina", code: "AR", flag: "🇦🇷" },
  { name: "Armenia", code: "AM", flag: "🇦🇲" },
  { name: "Australia", code: "AU", flag: "🇦🇺" },
  { name: "Austria", code: "AT", flag: "🇦🇹" },
  { name: "Azerbaijan", code: "AZ", flag: "🇦🇿" },
  { name: "Bahamas", code: "BS", flag: "🇧🇸" },
  { name: "Bahrain", code: "BH", flag: "🇧🇭" },
  { name: "Bangladesh", code: "BD", flag: "🇧🇩" },
  { name: "Barbados", code: "BB", flag: "🇧🇧" },
  { name: "Belarus", code: "BY", flag: "🇧🇾" },
  { name: "Belgium", code: "BE", flag: "🇧🇪" },
  { name: "Belize", code: "BZ", flag: "🇧🇿" },
  { name: "Benin", code: "BJ", flag: "🇧🇯" },
  { name: "Bhutan", code: "BT", flag: "🇧🇹" },
  { name: "Bolivia", code: "BO", flag: "🇧🇴" },
  { name: "Bosnia and Herzegovina", code: "BA", flag: "🇧🇦" },
  { name: "Botswana", code: "BW", flag: "🇧🇼" },
  { name: "Brazil", code: "BR", flag: "🇧🇷" },
  { name: "Brunei", code: "BN", flag: "🇧🇳" },
  { name: "Bulgaria", code: "BG", flag: "🇧🇬" },
  { name: "Burkina Faso", code: "BF", flag: "🇧🇫" },
  { name: "Burundi", code: "BI", flag: "🇧🇮" },
  { name: "Cambodia", code: "KH", flag: "🇰🇭" },
  { name: "Cameroon", code: "CM", flag: "🇨🇲" },
  { name: "Canada", code: "CA", flag: "🇨🇦" },
  { name: "Cape Verde", code: "CV", flag: "🇨🇻" },
  { name: "Central African Republic", code: "CF", flag: "🇨🇫" },
  { name: "Chad", code: "TD", flag: "🇹🇩" },
  { name: "Chile", code: "CL", flag: "🇨🇱" },
  { name: "China", code: "CN", flag: "🇨🇳" },
  { name: "Colombia", code: "CO", flag: "🇨🇴" },
  { name: "Comoros", code: "KM", flag: "🇰🇲" },
  { name: "Congo", code: "CG", flag: "🇨🇬" },
  { name: "Costa Rica", code: "CR", flag: "🇨🇷" },
  { name: "Croatia", code: "HR", flag: "🇭🇷" },
  { name: "Cuba", code: "CU", flag: "🇨🇺" },
  { name: "Cyprus", code: "CY", flag: "🇨🇾" },
  { name: "Czech Republic", code: "CZ", flag: "🇨🇿" },
  { name: "Denmark", code: "DK", flag: "🇩🇰" },
  { name: "Djibouti", code: "DJ", flag: "🇩🇯" },
  { name: "Dominica", code: "DM", flag: "🇩🇲" },
  { name: "Dominican Republic", code: "DO", flag: "🇩🇴" },
  { name: "Ecuador", code: "EC", flag: "🇪🇨" },
  { name: "Egypt", code: "EG", flag: "🇪🇬" },
  { name: "El Salvador", code: "SV", flag: "🇸🇻" },
  { name: "Equatorial Guinea", code: "GQ", flag: "🇬🇶" },
  { name: "Eritrea", code: "ER", flag: "🇪🇷" },
  { name: "Estonia", code: "EE", flag: "🇪🇪" },
  { name: "Eswatini", code: "SZ", flag: "🇸🇿" },
  { name: "Ethiopia", code: "ET", flag: "🇪🇹" },
  { name: "Fiji", code: "FJ", flag: "🇫🇯" },
  { name: "Finland", code: "FI", flag: "🇫🇮" },
  { name: "France", code: "FR", flag: "🇫🇷" },
  { name: "Gabon", code: "GA", flag: "🇬🇦" },
  { name: "Gambia", code: "GM", flag: "🇬🇲" },
  { name: "Georgia", code: "GE", flag: "🇬🇪" },
  { name: "Germany", code: "DE", flag: "🇩🇪" },
  { name: "Ghana", code: "GH", flag: "🇬🇭" },
  { name: "Greece", code: "GR", flag: "🇬🇷" },
  { name: "Grenada", code: "GD", flag: "🇬🇩" },
  { name: "Guatemala", code: "GT", flag: "🇬🇹" },
  { name: "Guinea", code: "GN", flag: "🇬🇳" },
  { name: "Guyana", code: "GY", flag: "🇬🇾" },
  { name: "Haiti", code: "HT", flag: "🇭🇹" },
  { name: "Honduras", code: "HN", flag: "🇭🇳" },
  { name: "Hungary", code: "HU", flag: "🇭🇺" },
  { name: "Iceland", code: "IS", flag: "🇮🇸" },
  { name: "India", code: "IN", flag: "🇮🇳" },
  { name: "Indonesia", code: "ID", flag: "🇮🇩" },
  { name: "Iran", code: "IR", flag: "🇮🇷" },
  { name: "Iraq", code: "IQ", flag: "🇮🇶" },
  { name: "Ireland", code: "IE", flag: "🇮🇪" },
  { name: "Israel", code: "IL", flag: "🇮🇱" },
  { name: "Italy", code: "IT", flag: "🇮🇹" },
  { name: "Jamaica", code: "JM", flag: "🇯🇲" },
  { name: "Japan", code: "JP", flag: "🇯🇵" },
  { name: "Jordan", code: "JO", flag: "🇯🇴" },
  { name: "Kazakhstan", code: "KZ", flag: "🇰🇿" },
  { name: "Kenya", code: "KE", flag: "🇰🇪" },
  { name: "Kiribati", code: "KI", flag: "🇰🇮" },
  { name: "Kuwait", code: "KW", flag: "🇰🇼" },
  { name: "Kyrgyzstan", code: "KG", flag: "🇰🇬" },
  { name: "Laos", code: "LA", flag: "🇱🇦" },
  { name: "Latvia", code: "LV", flag: "🇱🇻" },
  { name: "Lebanon", code: "LB", flag: "🇱🇧" },
  { name: "Lesotho", code: "LS", flag: "🇱🇸" },
  { name: "Liberia", code: "LR", flag: "🇱🇷" },
  { name: "Libya", code: "LY", flag: "🇱🇾" },
  { name: "Liechtenstein", code: "LI", flag: "🇱🇮" },
  { name: "Lithuania", code: "LT", flag: "🇱🇹" },
  { name: "Luxembourg", code: "LU", flag: "🇱🇺" },
  { name: "Madagascar", code: "MG", flag: "🇲🇬" },
  { name: "Malawi", code: "MW", flag: "🇲🇼" },
  { name: "Malaysia", code: "MY", flag: "🇲🇾" },
  { name: "Maldives", code: "MV", flag: "🇲🇻" },
  { name: "Mali", code: "ML", flag: "🇲🇱" },
  { name: "Malta", code: "MT", flag: "🇲🇹" },
  { name: "Marshall Islands", code: "MH", flag: "🇲🇭" },
  { name: "Mauritania", code: "MR", flag: "🇲🇷" },
  { name: "Mauritius", code: "MU", flag: "🇲🇺" },
  { name: "Mexico", code: "MX", flag: "🇲🇽" },
  { name: "Micronesia", code: "FM", flag: "🇫🇲" },
  { name: "Moldova", code: "MD", flag: "🇲🇩" },
  { name: "Monaco", code: "MC", flag: "🇲🇨" },
  { name: "Mongolia", code: "MN", flag: "🇲🇳" },
  { name: "Montenegro", code: "ME", flag: "🇲🇪" },
  { name: "Morocco", code: "MA", flag: "🇲🇦" },
  { name: "Mozambique", code: "MZ", flag: "🇲🇿" },
  { name: "Myanmar", code: "MM", flag: "🇲🇲" },
  { name: "Namibia", code: "NA", flag: "🇳🇦" },
  { name: "Nauru", code: "NR", flag: "🇳🇷" },
  { name: "Nepal", code: "NP", flag: "🇳🇵" },
  { name: "Netherlands", code: "NL", flag: "🇳🇱" },
  { name: "New Zealand", code: "NZ", flag: "🇳🇿" },
  { name: "Nicaragua", code: "NI", flag: "🇳🇮" },
  { name: "Niger", code: "NE", flag: "🇳🇪" },
  { name: "Nigeria", code: "NG", flag: "🇳🇬" },
  { name: "North Korea", code: "KP", flag: "🇰🇵" },
  { name: "North Macedonia", code: "MK", flag: "🇲🇰" },
  { name: "Norway", code: "NO", flag: "🇳🇴" },
  { name: "Oman", code: "OM", flag: "🇴🇲" },
  { name: "Pakistan", code: "PK", flag: "🇵🇰" },
  { name: "Palau", code: "PW", flag: "🇵🇼" },
  { name: "Panama", code: "PA", flag: "🇵🇦" },
  { name: "Papua New Guinea", code: "PG", flag: "🇵🇬" },
  { name: "Paraguay", code: "PY", flag: "🇵🇾" },
  { name: "Peru", code: "PE", flag: "🇵🇪" },
  { name: "Philippines", code: "PH", flag: "🇵🇭" },
  { name: "Poland", code: "PL", flag: "🇵🇱" },
  { name: "Portugal", code: "PT", flag: "🇵🇹" },
  { name: "Qatar", code: "QA", flag: "🇶🇦" },
  { name: "Romania", code: "RO", flag: "🇷🇴" },
  { name: "Russia", code: "RU", flag: "🇷🇺" },
  { name: "Rwanda", code: "RW", flag: "🇷🇼" },
  { name: "Samoa", code: "WS", flag: "🇼🇸" },
  { name: "San Marino", code: "SM", flag: "🇸🇲" },
  { name: "Saudi Arabia", code: "SA", flag: "🇸🇦" },
  { name: "Senegal", code: "SN", flag: "🇸🇳" },
  { name: "Serbia", code: "RS", flag: "🇷🇸" },
  { name: "Seychelles", code: "SC", flag: "🇸🇨" },
  { name: "Sierra Leone", code: "SL", flag: "🇸🇱" },
  { name: "Singapore", code: "SG", flag: "🇸🇬" },
  { name: "Slovakia", code: "SK", flag: "🇸🇰" },
  { name: "Slovenia", code: "SI", flag: "🇸🇮" },
  { name: "Solomon Islands", code: "SB", flag: "🇸🇧" },
  { name: "Somalia", code: "SO", flag: "🇸🇴" },
  { name: "South Africa", code: "ZA", flag: "🇿🇦" },
  { name: "South Korea", code: "KR", flag: "🇰🇷" },
  { name: "South Sudan", code: "SS", flag: "🇸🇸" },
  { name: "Spain", code: "ES", flag: "🇪🇸" },
  { name: "Sri Lanka", code: "LK", flag: "🇱🇰" },
  { name: "Sudan", code: "SD", flag: "🇸🇩" },
  { name: "Suriname", code: "SR", flag: "🇸🇷" },
  { name: "Sweden", code: "SE", flag: "🇸🇪" },
  { name: "Switzerland", code: "CH", flag: "🇨🇭" },
  { name: "Syria", code: "SY", flag: "🇸🇾" },
  { name: "Taiwan", code: "TW", flag: "🇹🇼" },
  { name: "Tajikistan", code: "TJ", flag: "🇹🇯" },
  { name: "Tanzania", code: "TZ", flag: "🇹🇿" },
  { name: "Thailand", code: "TH", flag: "🇹🇭" },
  { name: "Timor-Leste", code: "TL", flag: "🇹🇱" },
  { name: "Togo", code: "TG", flag: "🇹🇬" },
  { name: "Tonga", code: "TO", flag: "🇹🇴" },
  { name: "Trinidad and Tobago", code: "TT", flag: "🇹🇹" },
  { name: "Tunisia", code: "TN", flag: "🇹🇳" },
  { name: "Turkey", code: "TR", flag: "🇹🇷" },
  { name: "Turkmenistan", code: "TM", flag: "🇹🇲" },
  { name: "Tuvalu", code: "TV", flag: "🇹🇻" },
  { name: "Uganda", code: "UG", flag: "🇺🇬" },
  { name: "Ukraine", code: "UA", flag: "🇺🇦" },
  { name: "United Arab Emirates", code: "AE", flag: "🇦🇪" },
  { name: "United Kingdom", code: "GB", flag: "🇬🇧" },
  { name: "United States", code: "US", flag: "🇺🇸" },
  { name: "Uruguay", code: "UY", flag: "🇺🇾" },
  { name: "Uzbekistan", code: "UZ", flag: "🇺🇿" },
  { name: "Vanuatu", code: "VU", flag: "🇻🇺" },
  { name: "Vatican City", code: "VA", flag: "🇻🇦" },
  { name: "Venezuela", code: "VE", flag: "🇻🇪" },
  { name: "Vietnam", code: "VN", flag: "🇻🇳" },
  { name: "Yemen", code: "YE", flag: "🇾🇪" },
  { name: "Zambia", code: "ZM", flag: "🇿🇲" },
  { name: "Zimbabwe", code: "ZW", flag: "🇿🇼" }
].sort((a, b) => a.name.localeCompare(b.name));

export default function CheckoutPage() {
  const plans = [
    { id: "1d1y", devices: "1 Device", term: "1 Year", price: "€29.90", monthly: "€2.49/mo", renewalPrice: "€74.95/yr" },
    { id: "1d2y", devices: "1 Device", term: "2 Years", price: "€49.90", monthly: "€2.08/mo", renewalPrice: "€74.95/yr" },
    { id: "10d1y", devices: "10 Devices", term: "1 Year", price: "€49.90", monthly: "€4.16/mo", renewalPrice: "€129.95/yr" },
    { id: "10d2y", devices: "10 Devices", term: "2 Years", price: "€99.90", monthly: "€4.16/mo", renewalPrice: "€129.95/yr" },
    { id: "5d1y", devices: "5 Devices", term: "1 Year", price: "€39.90", monthly: "€3.33/mo", renewalPrice: "€109.95/yr" },
    { id: "5d2y", devices: "5 Devices", term: "2 Years", price: "€79.90", monthly: "€3.33/mo", renewalPrice: "€109.95/yr" },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.name === "Sweden") || countries[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(plans.find(p => p.id === "10d2y") || plans[3]);
  const [planDropdownOpen, setPlanDropdownOpen] = useState(false);

  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const planDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (planDropdownRef.current && !planDropdownRef.current.contains(event.target as Node)) {
        setPlanDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setEmailError("Enter an email address in the correct format, like name@domain.com");
    } else {
      setEmailError("");
      alert("Redirecting to payment processor...");
    }
  };

  const filteredCountries = countries.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-[#333]">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 h-20 relative z-50 flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center w-full">
          <div className="flex items-center cursor-pointer relative h-10 w-48" onClick={() => window.location.href = "/"}>
            <img src="/logo.png" alt="McAfee Logo" className="h-40 max-h-none w-auto object-contain absolute left-0 top-1/2 -translate-y-1/2" />
          </div>

        {/* Header Right Actions */}
        <div className="flex items-center gap-6">

          {/* Country dropdown selector */}
          <div ref={countryDropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-md bg-white hover:bg-slate-50 transition text-base font-semibold text-slate-700 cursor-pointer"
            >
              <span className="text-lg">{selectedCountry.flag}</span>
              <span>{selectedCountry.name}</span>
              <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-1 w-64 bg-white border border-slate-200 rounded-lg shadow-xl z-50 overflow-hidden">
              <div className="p-2 border-b border-slate-100 flex items-center gap-2">
                <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search country..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs outline-none border-none p-1 focus:ring-0"
                />
              </div>
              <div className="max-h-60 overflow-y-auto">
                {filteredCountries.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => {
                      setSelectedCountry(c);
                      setDropdownOpen(false);
                      setSearchQuery("");
                    }}
                    className="w-full px-4 py-2 text-left text-xs hover:bg-slate-50 flex items-center gap-3 transition text-slate-700 font-medium"
                  >
                    <span className="text-base">{c.flag}</span>
                    <span>{c.name}</span>
                  </button>
                ))}
                {filteredCountries.length === 0 && (
                  <div className="p-4 text-center text-xs text-slate-400">No country found</div>
                )}
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    </header>

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Checkout Steps */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Step 1: Your Email */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-2xl font-semibold text-[#333]">1. Your Email</h2>
              <svg className="w-5 h-5 text-slate-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4m0-4h.01" />
              </svg>
            </div>
            
            <form onSubmit={handleContinue} className="space-y-6">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (e.target.value.includes("@")) setEmailError("");
                  }}
                  className={`w-full px-4 py-4 rounded-none border text-base outline-none transition ${
                    emailError 
                      ? "border-red-500 bg-white focus:border-red-500 text-[#333]" 
                      : "border-slate-300 focus:border-blue-500"
                  }`}
                />
              </div>
              {emailError && (
                <p className="text-xs text-red-600 font-normal mt-1">{emailError}</p>
              )}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className={`px-10 py-3.5 rounded-full font-bold text-sm shadow-sm transition duration-200 cursor-pointer ${
                    email.includes("@") 
                      ? "bg-[#ff1717] hover:bg-[#800505] text-white" 
                      : "bg-[#c0c0c0] hover:bg-slate-400 text-white"
                  }`}
                >
                  Continue to payment
                </button>
              </div>
            </form>
          </div>

          <hr className="border-slate-200 my-8" />

          {/* Step 2: Payment */}
          <div className="opacity-50 pointer-events-none">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold text-[#333]">2. Payment</h2>
                <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 border border-slate-200 px-3 py-1 rounded bg-white">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">VISA</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">MC</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">AMEX</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">PayPal</span>
                </div>
                <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

        </div>

        {/* Right Order Summary Panel */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm py-12 px-8 space-y-8">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-[#333] text-base">McAfee Total Protection</h3>
                <p className="text-sm text-slate-500 mt-1">{selectedPlan.devices}</p>
                <p className="text-sm text-slate-500">{selectedPlan.term} subscription</p>
              </div>
              <div className="text-right">
                <span className="font-bold text-[#333] text-lg">{selectedPlan.price}</span>
                <div className="text-xs text-[#24bc98] font-bold mt-1">
                  <div>That's about</div>
                  <div>{selectedPlan.monthly}</div>
                </div>
              </div>
            </div>

            <div ref={planDropdownRef} className="relative">
              <button 
                onClick={() => setPlanDropdownOpen(!planDropdownOpen)}
                className="flex items-center gap-1.5 px-4 py-1.5 border border-slate-300 rounded-md text-xs font-semibold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
              >
                <span>Change Plan</span>
                <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {planDropdownOpen && (
                <div className="absolute left-0 mt-1 w-64 bg-white border border-slate-200 rounded-lg shadow-xl z-50 overflow-hidden">
                  <div className="flex flex-col">
                    {plans.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => {
                          setSelectedPlan(p);
                          setPlanDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 border-b border-slate-100 last:border-0 font-medium transition cursor-pointer ${
                          selectedPlan.id === p.id ? "bg-slate-100/80 text-slate-900" : ""
                        }`}
                      >
                        {p.devices} - {p.term.replace("s", "")}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <hr className="border-slate-100" />

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Subscription and Auto Renewal Terms</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                At the end of your expiration term you will be automatically renewed at the renewal price (currently {selectedPlan.renewalPrice}). We will remind you 30 days before renewal. <span className="font-bold text-slate-800">You can cancel at any time.</span> For more details on auto-renewal see <span className="underline text-blue-600 cursor-pointer">here</span> and the full offer details <span className="underline text-blue-600 cursor-pointer">here</span>.
              </p>
            </div>

            <hr className="border-slate-100" />

            <div className="space-y-3">
              <div className="flex justify-between text-sm text-slate-600 font-medium">
                <span>Sub-total (Including VAT)</span>
                <span className="text-slate-800">{selectedPlan.price}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-[#333] pt-3 border-t border-slate-100">
                <span>Order total</span>
                <span>{selectedPlan.price}</span>
              </div>
            </div>
          </div>

          {/* Verification Badges (Placed below card as shown in 1st visual) */}
          <div className="grid grid-cols-3 gap-4 pt-4 text-center">
            <div className="flex flex-col items-center">
              <img src="/100.svg" alt="Our Virus Protection Pledge" className="w-10 h-10 object-contain" />
              <span className="text-[10px] font-semibold text-slate-600 mt-2 leading-tight">Our Virus Protection Pledge</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/money_back.svg" alt="30-day money back guarantee" className="w-10 h-10 object-contain" />
              <span className="text-[10px] font-semibold text-slate-600 mt-2 leading-tight">30-day money back guarantee</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/247.svg" alt="24/7 online security experts" className="w-10 h-10 object-contain" />
              <span className="text-[10px] font-semibold text-slate-600 mt-2 leading-tight">24/7 online security experts</span>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
