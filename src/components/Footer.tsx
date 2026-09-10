import React from 'react';
import { 
  Building2, 
  Mail, 
  Phone,
  ShieldCheck, 
  ArrowUp, 
  CheckCircle2, 
  Compass,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { COMPANY_PROFILE, CORE_OFFERINGS } from '../data/companyData';
import { VoyageQuestLogo } from './VoyageQuestLogo';

interface FooterProps {
  onOpenRfq?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRfq }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      
      {/* High-Impact Executive Final CTA Strip */}
      <div className="border-b border-slate-800/80 py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-white font-display text-xl sm:text-2xl font-bold">
              Ready to consolidate your procurement or public sector delivery?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Direct tender participation for municipalities, provincial departments, SOEs, and corporate facilities.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${COMPANY_PROFILE.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>Email Tender Pack</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-sm cursor-pointer"
            >
              <span>Contact Procurement Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <VoyageQuestLogo 
              size="md" 
              subtitleText="Procurement & Project Management Solutions"
              isFooter={true}
            />

            <p className="text-slate-400 leading-relaxed text-xs">
              A dynamic, multi-sector enterprise dedicated to sourcing essential commercial operational supplies, PPE, sanitation products, and enterprise IT, alongside end-to-end management of public sector and community works initiatives.
            </p>

            <div className="pt-2 text-slate-400 space-y-2 text-[11px]">
              <div className="flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Legal Structure: {COMPANY_PROFILE.legalType}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">54 Roy road, Yorkshire Estate</span>
                  <span>Cape Town, Western Cape • Nationwide Delivery</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <div className="flex items-center gap-2 flex-wrap">
                  <span>Yaaseen: <a href="tel:0734656796" className="text-white hover:text-blue-400 font-semibold">073 465 6796</a></span>
                  <span className="text-slate-700">|</span>
                  <span>Nabeel: <a href="tel:0713310016" className="text-white hover:text-blue-400 font-semibold">071 331 0016</a></span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`mailto:${COMPANY_PROFILE.email}`} className="text-blue-400 hover:underline font-semibold">
                  {COMPANY_PROFILE.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Commodity Lines */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Core Divisions
            </span>
            <ul className="space-y-2 text-xs">
              {CORE_OFFERINGS.map((offering) => (
                <li key={offering.id}>
                  <a href="#offerings" className="hover:text-white transition-colors">
                    {offering.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Workforce & Governance */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Workforce & Governance
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#workforce" className="hover:text-white transition-colors">
                  SANS 434 Workforce PPE Outfitting
                </a>
              </li>
              <li>
                <a href="#workforce" className="hover:text-white transition-colors">
                  Biometric Muster Roll Tracking
                </a>
              </li>
              <li>
                <a href="#workforce" className="hover:text-white transition-colors">
                  Accredited Vocational Workshops
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-white transition-colors">
                  Audited Performance Dashboard
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Comparative Value Matrix
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Anchors & Inquiries */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Direct Desk
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors text-left text-blue-400 font-semibold"
                >
                  Direct Inquiry Desk →
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Procurement FAQs
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_PROFILE.email}`} className="hover:text-white transition-colors">
                  Vendor Pack Submission
                </a>
              </li>
              <li>
                <a href="#overview" className="hover:text-white transition-colors">
                  National Staging Hubs
                </a>
              </li>
            </ul>

            {/* Other Services & Specialized Portals */}
            <div className="pt-3 border-t border-slate-800 space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Other Services
              </span>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <span className="text-slate-300 hover:text-white transition-colors flex items-center justify-between gap-1 cursor-default">
                    <span className="truncate">Construction & Renovations</span>
                    <span className="text-[9px] text-blue-400 bg-blue-950/80 px-1.5 py-0.5 rounded border border-blue-800/60 shrink-0">Sub-domain</span>
                  </span>
                </li>
                <li>
                  <span className="text-slate-300 hover:text-white transition-colors flex items-center justify-between gap-1 cursor-default">
                    <span className="truncate">Recycling Programs</span>
                    <span className="text-[9px] text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800/60 shrink-0">Website</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span>© {new Date().getFullYear()} Voyage Quest. All rights reserved.</span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span>Registered Enterprise in the Republic of South Africa</span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="text-slate-400">SABS & SANS Aligned Supply Chain</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors py-1 px-2.5 rounded-lg hover:bg-slate-900 cursor-pointer"
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
