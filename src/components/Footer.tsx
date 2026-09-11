import React from 'react';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  ArrowRight
} from 'lucide-react';
import { COMPANY_PROFILE } from '../data/companyData';
import { VoyageQuestLogo } from './VoyageQuestLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-zinc-400 text-xs border-t border-white/10">
      
      {/* High-Impact Executive Final Strip */}
      <div className="border-b border-white/10 py-12 px-4 sm:px-6 lg:px-8 bg-[#09090b]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-white font-serif text-2xl sm:text-3xl font-bold">
              Ready to partner with Voyage Quest?
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm">
              Providing dependable commercial procurement and structured project management nationwide.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${COMPANY_PROFILE.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#141418] hover:bg-[#1c1c22] text-white font-semibold text-xs border border-white/10 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#BF953F]" />
              <span>Email Our Desk</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#BF953F] hover:bg-[#d4af37] text-[#0a0a0c] font-bold text-xs transition-all shadow-md shadow-[#BF953F]/20 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0a0a0c]" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-6 space-y-4">
            <VoyageQuestLogo 
              size="md" 
              align="left"
            />

            <p className="text-zinc-400 leading-relaxed text-xs max-w-lg">
              Voyage Quest is dedicated to delivering streamlined commercial procurement, safety gear, facility supplies, and end-to-end project management across South Africa.
            </p>

            <div className="pt-2 text-zinc-400 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-[#BF953F] shrink-0" />
                <span>Voyage Quest (Pty) Ltd</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#BF953F] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">54 Roy road, Yorkshire Estate</span>
                  <span>Cape Town, Western Cape • Nationwide Delivery</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#BF953F] shrink-0" />
                <div className="flex items-center gap-2 flex-wrap">
                  <span>Yaaseen: <a href="tel:0734656796" className="text-white hover:text-[#BF953F] font-semibold">073 465 6796</a></span>
                  <span className="text-zinc-700">|</span>
                  <span>Nabeel: <a href="tel:0713310016" className="text-white hover:text-[#BF953F] font-semibold">071 331 0016</a></span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#BF953F] shrink-0" />
                <a href={`mailto:${COMPANY_PROFILE.email}`} className="text-[#BF953F] hover:underline font-semibold">
                  {COMPANY_PROFILE.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Core Divisions
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#procurement" className="hover:text-white transition-colors">
                  Procurement Solutions
                </a>
              </li>
              <li>
                <a href="#procurement" className="hover:text-white transition-colors">
                  Certified PPE &amp; Workwear
                </a>
              </li>
              <li>
                <a href="#procurement" className="hover:text-white transition-colors">
                  Industrial Hygiene &amp; Supplies
                </a>
              </li>
              <li>
                <a href="#procurement" className="hover:text-white transition-colors">
                  Enterprise IT &amp; Office Furniture
                </a>
              </li>
              <li>
                <a href="#project-management" className="hover:text-white transition-colors">
                  Project Management &amp; Oversight
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation & Desk */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#overview" className="hover:text-white transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#procurement" className="hover:text-white transition-colors">
                  Procurement
                </a>
              </li>
              <li>
                <a href="#project-management" className="hover:text-white transition-colors">
                  Project Management
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Voyage Quest
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white text-[#BF953F] font-semibold transition-colors">
                  Contact &amp; RFQs →
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span>© {new Date().getFullYear()} Voyage Quest. All rights reserved.</span>
            <span className="text-zinc-700 hidden sm:inline">•</span>
            <span>Cape Town, South Africa</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors py-1 px-2.5 rounded-lg hover:bg-white/5 cursor-pointer"
            title="Return to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
