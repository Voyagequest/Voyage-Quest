import React from 'react';
import { 
  ArrowRight, 
  ShoppingBag, 
  Briefcase, 
  Phone, 
  CheckCircle2, 
  MapPin, 
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_PROFILE } from '../data/companyData';

export const Hero: React.FC = () => {
  return (
    <section 
      id="overview" 
      className="relative overflow-hidden bg-black text-white pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-white/10"
    >
      {/* Subtle Warm Gold Radial Glows in Pure Black */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] pointer-events-none -z-10 opacity-20"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, #BF953F 0%, rgba(191,149,63,0.1) 45%, transparent 100%)'
        }}
      />

      {/* Subtle Geometric Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Main Hero Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Core Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.8rem] font-bold tracking-tight text-white leading-[1.1] pt-1">
              Procurement &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D8] via-[#E5C274] to-[#BF953F]">
                Project Management.
              </span>
            </h1>

            {/* Direct, Uncluttered Explanation */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
              Voyage Quest delivers reliable commercial procurement solutions and structured, on-the-ground project management across South Africa. We keep supply chains dependable and lead projects to successful completion with precision and integrity.
            </p>

            {/* Quick Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                id="btn-hero-contact"
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-[#0a0a0c] bg-[#BF953F] hover:bg-[#d4af37] active:scale-[0.98] transition-all shadow-lg shadow-[#BF953F]/20 cursor-pointer group"
              >
                <span>Inquire With Our Team</span>
                <ArrowRight className="w-4 h-4 text-[#0a0a0c] group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#procurement"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-zinc-200 bg-[#121215] hover:bg-[#1a1a1f] border border-white/15 hover:border-[#BF953F]/40 transition-all cursor-pointer"
              >
                <span>Explore Procurement</span>
              </a>

              <a
                href="#project-management"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-zinc-200 bg-[#121215] hover:bg-[#1a1a1f] border border-white/15 hover:border-[#BF953F]/40 transition-all cursor-pointer"
              >
                <span>Project Management</span>
              </a>
            </div>

            {/* Contact quick links */}
            <div className="flex items-center gap-2 text-xs text-zinc-400 pt-1">
              <Phone className="w-3.5 h-3.5 text-[#BF953F]" />
              <span>Yaaseen:</span>
              <a href="tel:0734656796" className="text-white hover:text-[#BF953F] font-semibold transition-colors">073 465 6796</a>
              <span className="text-zinc-600">|</span>
              <span>Nabeel:</span>
              <a href="tel:0713310016" className="text-white hover:text-[#BF953F] font-semibold transition-colors">071 331 0016</a>
            </div>

            {/* Fast Credibility Checklist */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#BF953F] shrink-0" />
                <span>Commercial Supplies, PPE &amp; IT Hardware</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#BF953F] shrink-0" />
                <span>Turnkey Project Oversight &amp; Site Supervision</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Two Core Pillars Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Pillar 1 Card: Procurement */}
            <a 
              href="#procurement"
              className="block p-6 rounded-2xl bg-[#0e0e11] border border-white/10 hover:border-[#BF953F]/60 transition-all group shadow-xl hover:shadow-[#BF953F]/5"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#BF953F]/10 border border-[#BF953F]/30 text-[#BF953F] flex items-center justify-center shrink-0 group-hover:bg-[#BF953F] group-hover:text-[#0a0a0c] transition-colors">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#BF953F]">
                      Pillar 01
                    </span>
                    <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-[#BF953F] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1 group-hover:text-[#BF953F] transition-colors">
                    Procurement Solutions
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    Sourcing essential daily supplies, SABS-certified PPE, industrial cleaning hygiene, and enterprise IT hardware nationwide.
                  </p>
                </div>
              </div>
            </a>

            {/* Pillar 2 Card: Project Management */}
            <a 
              href="#project-management"
              className="block p-6 rounded-2xl bg-[#0e0e11] border border-white/10 hover:border-[#BF953F]/60 transition-all group shadow-xl hover:shadow-[#BF953F]/5"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#BF953F]/10 border border-[#BF953F]/30 text-[#BF953F] flex items-center justify-center shrink-0 group-hover:bg-[#BF953F] group-hover:text-[#0a0a0c] transition-colors">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#BF953F]">
                      Pillar 02
                    </span>
                    <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-[#BF953F] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1 group-hover:text-[#BF953F] transition-colors">
                    Project Management
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    Structured planning, public sector facilitation, subcontractor alignment, and rigorous quality supervision from inception to handover.
                  </p>
                </div>
              </div>
            </a>

            {/* Quick Operating Scope Callout */}
            <div className="p-4 rounded-xl bg-[#141418] border border-white/5 flex items-center justify-between text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#BF953F]" />
                <span>Operating across all 9 Provinces</span>
              </div>
              <span className="font-semibold text-white">South Africa</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
