import React, { useState } from 'react';
import { 
  Mail, 
  Phone,
  MapPin, 
  Clock, 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  Building2, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  FileText,
  UserCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_PROFILE, SOUTH_AFRICAN_PROVINCES } from '../data/companyData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [subject, setSubject] = useState('Procurement Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // FAQs
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does Voyage Quest support municipal tenders and formal RFQs?",
      a: "We act as an agile, single-source partner providing itemized line-item pricing, compliant SABS/SANS certification sheets, and verified delivery schedules within 24 to 48 hours for local, district, and metropolitan municipal procurement requests."
    },
    {
      q: "What is your scope for public employment and community works projects?",
      a: "We offer end-to-end facilitation: workforce PPE outfitting conforming to SANS 434 and SANS 20345 standards, structured participant rostering to comply with ministerial determinations, accredited on-site training workshops, and daily muster roll reconciliation for audit compliance."
    },
    {
      q: "Do you supply across all South African provinces?",
      a: "Yes. Our logistics and delivery network covers all 9 provinces: Gauteng, Western Cape, KwaZulu-Natal, Eastern Cape, Limpopo, Mpumalanga, Free State, North West, and Northern Cape, with dedicated staging for regional sites."
    },
    {
      q: "Can we consolidate janitorial, PPE, and enterprise IT under one contract?",
      a: "Yes, this is our core advantage. Consolidating multi-sector supplies and project management through Voyage Quest reduces administrative overhead, minimizes multi-contractor conflicts, and yields competitive public value."
    },
    {
      q: "How can our institution register Voyage Quest on our vendor database?",
      a: "Simply email info@voyagequest.co.za with your vendor registration pack or supplier database portal link. Our compliance officers will furnish complete company documentation promptly."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setFormError('Please fill in all required fields (Name, Email, Message).');
      return;
    }
    setFormError('');
    setSubmitted(true);
  };

  const getDirectMailto = () => {
    const sub = encodeURIComponent(`[Inquiry] ${subject} - ${org || name}`);
    const body = encodeURIComponent(
      `From: ${name} (${email})\n` +
      `Organization: ${org || 'Not specified'}\n` +
      `Subject: ${subject}\n\n` +
      `Message:\n${message}\n`
    );
    return `mailto:${COMPANY_PROFILE.email}?subject=${sub}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200/80">
            <Mail className="w-3.5 h-3.5" />
            <span>Procurement & Public Sector Desk</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-950 tracking-tight">
            Connect with Voyage Quest
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Have a tender document, request for quote (RFQ), or supply consultation? Connect directly with our team in Cape Town or reach our key account managers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left: Contact Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs border border-slate-200/90 dark:border-slate-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1">
                  Republic of South Africa
                </span>
                <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">
                  Head Office & Procurement Desk
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Voyage Quest • {COMPANY_PROFILE.legalType}
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Direct Phone Contacts */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/80 space-y-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Direct Key Account Contacts
                  </span>
                  
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700">
                      <div>
                        <span className="font-semibold text-slate-900 dark:text-white block text-xs">Yaaseen</span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">Key Accounts & Procurement</span>
                      </div>
                      <a 
                        href="tel:0734656796" 
                        className="text-xs font-bold text-blue-700 dark:text-blue-400 hover:text-blue-800 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-lg border border-blue-200/60 dark:border-blue-900/60 transition-colors"
                      >
                        073 465 6796
                      </a>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700">
                      <div>
                        <span className="font-semibold text-slate-900 dark:text-white block text-xs">Nabeel</span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">Operations & Logistics</span>
                      </div>
                      <a 
                        href="tel:0713310016" 
                        className="text-xs font-bold text-blue-700 dark:text-blue-400 hover:text-blue-800 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-lg border border-blue-200/60 dark:border-blue-900/60 transition-colors"
                      >
                        071 331 0016
                      </a>
                    </div>
                  </div>
                </div>

                {/* Official Email */}
                <div className="flex items-start gap-3 p-2">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/40">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block">Official Email</span>
                    <a 
                      href={`mailto:${COMPANY_PROFILE.email}`} 
                      className="text-slate-900 dark:text-white hover:text-blue-600 font-semibold transition-colors text-xs sm:text-sm"
                    >
                      {COMPANY_PROFILE.email}
                    </a>
                  </div>
                </div>

                {/* Business Address */}
                <div className="flex items-start gap-3 p-2">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block">Business Address</span>
                    <span className="text-slate-900 dark:text-white font-medium block text-xs sm:text-sm">
                      54 Roy road, Yorkshire Estate
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 text-xs block">
                      Cape Town, Western Cape, South Africa
                    </span>
                  </div>
                </div>

                {/* Operating Scope */}
                <div className="flex items-start gap-3 p-2">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block">Operating Scope & Turnaround</span>
                    <span className="text-slate-900 dark:text-white font-medium block text-xs sm:text-sm">
                      Nationwide Across All 9 Provinces
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 text-xs block">
                      24–48 Hours for Official SCM Quotations
                    </span>
                  </div>
                </div>

              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>CSD & Tender Compliance Ready</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Tax compliant, municipal vendor database registered, and adhering to the Broad-Based Black Economic Empowerment (B-BBEE) framework.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Direct Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-5">
              <h3 className="font-display text-lg font-bold text-slate-950 pb-2 border-b border-slate-100">
                Send Direct Message or Brief
              </h3>

              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-slate-950">
                    Message Prepared
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Click below to transmit directly via your default email client to guarantee immediate receipt by our desk.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                    <a
                      href={getDirectMailto()}
                      className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-sm"
                    >
                      Send via Email Client
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
                    >
                      Edit Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formError && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 block">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Lerato Khumalo"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 block">Official Email *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. lerato@municipality.gov.za"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 block">Organization / Entity</label>
                      <input
                        type="text"
                        value={org}
                        onChange={(e) => setOrg(e.target.value)}
                        placeholder="e.g. Department of Infrastructure"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 block">Subject / Inquiry Type</label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
                      >
                        <option value="Procurement Inquiry">Procurement / RFQ Inquiry</option>
                        <option value="Workforce Project Partnership">Workforce & Public Project Partnership</option>
                        <option value="Vendor Database Registration">Vendor Database Registration</option>
                        <option value="Bulk Commodity Sourcing">Bulk Commodity Sourcing</option>
                        <option value="Other">General Public Sector Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">Message / Scope *</label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Outline tender timeline, required commodities, delivery location, or questions..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-5 rounded-xl bg-slate-950 hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4 text-blue-400" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Procurement FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h3 className="font-display text-2xl font-bold text-slate-950">
              Frequently Asked Questions (FAQ)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Key operational details for procurement officers and project directors.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/60 transition-colors"
                  >
                    <span className="font-display font-bold text-sm text-slate-900">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-blue-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
