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
  ChevronDown, 
  ChevronUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_PROFILE } from '../data/companyData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [subject, setSubject] = useState('Procurement Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // FAQs tailored strictly to Procurement and Project Management
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I request a quote for procurement supplies?",
      a: "Simply complete the inquiry form above, or email your bill of quantities directly to info.voyagequest@gmail.com. You can also contact Yaaseen (073 465 6796) or Nabeel (071 331 0016). We provide itemized quotes within 24 to 48 hours."
    },
    {
      q: "What types of project management services do you provide?",
      a: "We provide comprehensive on-the-ground management, including project scoping, resource scheduling, contractor management, on-site supervision, quality audits, and closeout reporting across both public and private sectors."
    },
    {
      q: "Do you deliver procurement orders nationwide?",
      a: "Yes. Our logistics network services all 9 South African provinces: Western Cape, Gauteng, KwaZulu-Natal, Eastern Cape, Free State, Limpopo, Mpumalanga, North West, and Northern Cape."
    },
    {
      q: "Are your safety equipment and PPE supplies SABS compliant?",
      a: "Yes. All our protective workwear, safety boots, and equipment comply with relevant SABS and SANS industry standards, complete with requisite specification sheets."
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
      `Inquiry Focus: ${subject}\n\n` +
      `Message Details:\n${message}\n`
    );
    return `mailto:${COMPANY_PROFILE.email}?subject=${sub}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-black text-white border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161619] text-[#BF953F] text-xs font-semibold border border-[#BF953F]/30">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Inquiries</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Connect With Voyage Quest
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
            Whether you require a formal procurement quotation or a project management consultation, our leadership team is readily available.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left: Contact Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0c0c0e] text-white rounded-3xl p-6 sm:p-8 space-y-6 border border-white/10 shadow-2xl">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#BF953F] block mb-1">
                  Republic of South Africa
                </span>
                <h3 className="font-serif text-xl font-bold text-white">
                  Head Office &amp; Operations
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Voyage Quest (Pty) Ltd
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Direct Phone Contacts */}
                <div className="p-4 rounded-2xl bg-[#141418] border border-white/10 space-y-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#BF953F]" /> Direct Principals
                  </span>
                  
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#1a1a20] border border-white/5">
                      <div>
                        <span className="font-bold text-white block text-xs">Yaaseen</span>
                        <span className="text-[11px] text-zinc-400">Key Accounts &amp; Procurement</span>
                      </div>
                      <a 
                        href="tel:0734656796" 
                        className="text-xs font-bold text-[#0a0a0c] hover:bg-[#d4af37] bg-[#BF953F] px-3 py-1.5 rounded-lg transition-colors"
                      >
                        073 465 6796
                      </a>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#1a1a20] border border-white/5">
                      <div>
                        <span className="font-bold text-white block text-xs">Nabeel</span>
                        <span className="text-[11px] text-zinc-400">Projects &amp; Operations</span>
                      </div>
                      <a 
                        href="tel:0713310016" 
                        className="text-xs font-bold text-[#0a0a0c] hover:bg-[#d4af37] bg-[#BF953F] px-3 py-1.5 rounded-lg transition-colors"
                      >
                        071 331 0016
                      </a>
                    </div>
                  </div>
                </div>

                {/* Official Email */}
                <div className="flex items-start gap-3 p-2">
                  <div className="w-10 h-10 rounded-xl bg-[#18181c] text-[#BF953F] flex items-center justify-center shrink-0 border border-white/10">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-400 text-[11px] block">Official Email</span>
                    <a 
                      href={`mailto:${COMPANY_PROFILE.email}`} 
                      className="text-white hover:text-[#BF953F] font-semibold transition-colors text-xs sm:text-sm"
                    >
                      {COMPANY_PROFILE.email}
                    </a>
                  </div>
                </div>

                {/* Business Address */}
                <div className="flex items-start gap-3 p-2">
                  <div className="w-10 h-10 rounded-xl bg-[#18181c] text-[#BF953F] flex items-center justify-center shrink-0 border border-white/10">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-400 text-[11px] block">Operating Office</span>
                    <span className="text-white font-medium block text-xs sm:text-sm">
                      54 Roy road, Yorkshire Estate
                    </span>
                    <span className="text-zinc-400 text-xs block">
                      Cape Town, Western Cape, South Africa
                    </span>
                  </div>
                </div>

                {/* Operating Scope */}
                <div className="flex items-start gap-3 p-2">
                  <div className="w-10 h-10 rounded-xl bg-[#18181c] text-[#BF953F] flex items-center justify-center shrink-0 border border-white/10">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-400 text-[11px] block">Operating Reach &amp; Turnaround</span>
                    <span className="text-white font-medium block text-xs sm:text-sm">
                      Nationwide Across All 9 Provinces
                    </span>
                    <span className="text-zinc-400 text-xs block">
                      Fast Quotation Turnaround within 24–48 Hours
                    </span>
                  </div>
                </div>

              </div>

              <div className="p-4 rounded-2xl bg-[#141418] border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#BF953F]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Compliance &amp; Quality Assured</span>
                </div>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Tax compliant, municipal vendor registered, and adhering to strict quality standards.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Direct Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0c0c0e] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-5">
              <h3 className="font-serif text-xl font-bold text-white pb-3 border-b border-white/10">
                Send an Inquiry or Quote Request
              </h3>

              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#BF953F]/10 border border-[#BF953F]/30 text-[#BF953F] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-white">
                    Inquiry Prepared
                  </h4>
                  <p className="text-xs text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Click below to send directly via your email client to ensure immediate transmission to our management team.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                    <a
                      href={getDirectMailto()}
                      className="px-6 py-3 rounded-xl bg-[#BF953F] hover:bg-[#d4af37] text-[#0a0a0c] font-bold text-xs transition-all shadow-md"
                    >
                      Send via Email Client
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-3 rounded-xl bg-[#18181c] hover:bg-[#202026] text-zinc-300 font-semibold text-xs transition-colors"
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formError && (
                    <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-300 text-xs font-medium">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-zinc-300 block">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. John Doe"
                        className="w-full px-3.5 py-2.5 bg-[#141418] border border-white/10 rounded-xl text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#BF953F] transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-zinc-300 block">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. john@company.co.za"
                        className="w-full px-3.5 py-2.5 bg-[#141418] border border-white/10 rounded-xl text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#BF953F] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-zinc-300 block">Company / Organization</label>
                      <input
                        type="text"
                        value={org}
                        onChange={(e) => setOrg(e.target.value)}
                        placeholder="e.g. Acme Enterprises"
                        className="w-full px-3.5 py-2.5 bg-[#141418] border border-white/10 rounded-xl text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#BF953F] transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-zinc-300 block">Service Needed</label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#141418] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#BF953F] transition-colors"
                      >
                        <option value="Procurement Solutions">Procurement Solutions &amp; Supplies</option>
                        <option value="Project Management">Project Management Services</option>
                        <option value="Both Procurement and Project Management">Both Procurement &amp; Project Management</option>
                        <option value="General Inquiry">General Business Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-300 block">Message / Scope of Requirements *</label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please outline the commodities needed, delivery location, or project scope..."
                      className="w-full px-3.5 py-2.5 bg-[#141418] border border-white/10 rounded-xl text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#BF953F] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-5 rounded-xl bg-[#BF953F] hover:bg-[#d4af37] text-[#0a0a0c] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md shadow-[#BF953F]/20 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 text-[#0a0a0c]" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h3 className="font-serif text-2xl font-bold text-white">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-zinc-400">
              Clear answers regarding our procurement procedures and project management services.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl bg-[#0c0c0e] border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    <span className="font-medium text-sm text-white">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#BF953F] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-zinc-400 shrink-0" />
                    )}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-5 pb-5 text-xs text-zinc-300 leading-relaxed border-t border-white/5 pt-3"
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
