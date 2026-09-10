import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  Compass, 
  Layers, 
  MapPin, 
  Clock, 
  Maximize2, 
  X, 
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_PROFILE, CORE_OFFERINGS } from '../data/companyData';
import heroAbstractSupply from '../assets/images/hero_abstract_supply_1789068336535.jpg';
import heroNetworkNodes from '../assets/images/hero_network_nodes_1789068352811.jpg';
import heroInfraGeometry from '../assets/images/hero_infra_geometry_1789068367239.jpg';

interface HeroProps {
  onOpenRfq?: () => void;
}

interface AbstractArtwork {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  src: string;
  aspect: string;
}

const ABSTRACT_ARTWORKS: AbstractArtwork[] = [
  {
    id: 'corridors',
    tag: 'Corridor Flow',
    title: 'National Supply Corridors',
    subtitle: 'Synchronized Bulk Logistics',
    description: 'Sculptural architectural rendering symbolizing high-throughput institutional supply chains across South Africa’s 9 provinces.',
    src: heroAbstractSupply,
    aspect: '16:9'
  },
  {
    id: 'nodes',
    tag: 'Staging Depots',
    title: 'Interconnected Distribution Nodes',
    subtitle: 'Consolidated Municipal Hubs',
    description: 'Minimalist geometric matrices representing decentralized staging points, audit-proof delivery routes, and municipal warehouses.',
    src: heroNetworkNodes,
    aspect: '4:3'
  },
  {
    id: 'framework',
    tag: 'Civic Alignment',
    title: 'Civic Infrastructure Framework',
    subtitle: 'Public Works & Turnkey Outfitting',
    description: 'Layered architectural curved surfaces reflecting DPWI labor integration, SABS safety standards, and physical asset readiness.',
    src: heroInfraGeometry,
    aspect: '4:3'
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenRfq }) => {
  const [activeTab, setActiveTab] = useState<'commodities' | 'workforce' | 'standards'>('commodities');
  const [activeArtworkIndex, setActiveArtworkIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const currentArtwork = ABSTRACT_ARTWORKS[activeArtworkIndex];

  const handleNextArtwork = () => {
    setActiveArtworkIndex((prev) => (prev + 1) % ABSTRACT_ARTWORKS.length);
  };

  const handlePrevArtwork = () => {
    setActiveArtworkIndex((prev) => (prev - 1 + ABSTRACT_ARTWORKS.length) % ABSTRACT_ARTWORKS.length);
  };

  return (
    <section 
      id="overview" 
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-14 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-200/80"
    >
      {/* Precision Structural Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      {/* Subtle Ambient Accent */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-blue-50/50 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Hero Narrative */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            
            {/* Status & Credential Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs text-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="font-semibold text-slate-900 tracking-wide">
                Republic of South Africa
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 font-medium">
                National SCM & Public Sector Partner
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-slate-950 leading-[1.12]">
                Consolidated Supply Chains. <br className="hidden sm:inline" />
                <span className="text-blue-600">Flawless</span> Public Sector Execution.
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
                Voyage Quest delivers institutional procurement agility and turnkey public sector infrastructure facilitation across South Africa. From SABS/SANS-certified site workforce outfitting to audit-proof municipal muster roll project leadership in all 9 provinces.
              </p>
            </div>

            {/* Quick Strategic Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-950 text-xs sm:text-sm block">
                    SABS & SANS Adherence
                  </span>
                  <span className="text-slate-500 text-xs leading-relaxed">
                    Full SANS 434 PPE specs, EN 20345 safety footwear, and SDS sheets.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-950 text-xs sm:text-sm block">
                    DPWI Aligned Delivery
                  </span>
                  <span className="text-slate-500 text-xs leading-relaxed">
                    Accredited community modules, biometric muster, and compliance.
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                id="btn-hero-contact"
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-slate-950 hover:bg-blue-600 active:scale-[0.98] transition-all shadow-md shadow-slate-950/10 cursor-pointer group"
              >
                <span>Contact Procurement Desk</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-blue-400 group-hover:text-white" />
              </a>

              <a
                href="#offerings"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-all shadow-xs"
              >
                <span>Explore 8 Commodity Divisions</span>
              </a>
            </div>

            {/* Bottom Governance Credibility Line */}
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-500">
              <span className="text-emerald-700 font-semibold text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">
                Tender Ready
              </span>
              <span>
                Supporting Municipalities, Provincial Departments, SOEs, and Corporate Portfolios.
              </span>
            </div>

          </motion.div>

          {/* Right Column: Visual Architecture Showcase & Supply Chain Matrix */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-4"
          >
            {/* Minimalist Abstract Imagery Viewport */}
            <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-4 sm:p-5 shadow-sm space-y-3.5 relative">
              
              {/* Image Header / Curation Bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Architectural Visualization • Series I
                  </span>
                </div>

                {/* View Selector Tabs */}
                <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                  {ABSTRACT_ARTWORKS.map((artwork, idx) => (
                    <button
                      key={artwork.id}
                      type="button"
                      onClick={() => setActiveArtworkIndex(idx)}
                      className={`px-2.5 py-1 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                        activeArtworkIndex === idx 
                          ? 'bg-white dark:bg-slate-700 text-slate-950 dark:text-white shadow-2xs' 
                          : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {`0${idx + 1}`}
                    </button>
                  ))}
                </div>
              </div>

              {/* The Abstract Artwork Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-700/80 bg-slate-950 aspect-[16/9] group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentArtwork.id}
                    src={currentArtwork.src}
                    alt={currentArtwork.title}
                    referrerPolicy="no-referrer"
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full object-cover select-none"
                  />
                </AnimatePresence>

                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Bottom Caption Inside Artwork */}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3 text-white">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300 bg-blue-950/60 px-2 py-0.5 rounded-md border border-blue-800/60 backdrop-blur-xs inline-block">
                      {currentArtwork.tag}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold font-display text-white drop-shadow-xs">
                      {currentArtwork.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={handlePrevArtwork}
                      aria-label="Previous artwork"
                      className="w-7 h-7 rounded-lg bg-black/40 hover:bg-black/70 text-white/90 hover:text-white flex items-center justify-center border border-white/20 backdrop-blur-xs transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextArtwork}
                      aria-label="Next artwork"
                      className="w-7 h-7 rounded-lg bg-black/40 hover:bg-black/70 text-white/90 hover:text-white flex items-center justify-center border border-white/20 backdrop-blur-xs transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsLightboxOpen(true)}
                      aria-label="Expand image"
                      className="w-7 h-7 rounded-lg bg-black/40 hover:bg-black/70 text-white/90 hover:text-white flex items-center justify-center border border-white/20 backdrop-blur-xs transition-colors cursor-pointer ml-0.5"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Artwork Subtitle & Description */}
              <div className="flex items-start justify-between gap-4 pt-0.5">
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
                  {currentArtwork.description}
                </p>
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider shrink-0 mt-0.5">
                  South Africa • 9 Provinces
                </span>
              </div>
            </div>

            {/* Enterprise Supply Chain Matrix Interactive Module */}
            <div className="rounded-3xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-5 sm:p-6 shadow-sm border border-slate-200/90 dark:border-slate-800 space-y-4 relative">
              
              {/* Top Matrix Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/80 border border-blue-100 dark:border-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 block">
                      Operational Grid
                    </span>
                    <h2 className="text-sm sm:text-base font-bold text-slate-950 dark:text-white font-display">
                      Supply Chain Matrix
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>9 Provinces Live</span>
                </div>
              </div>

              {/* Interactive Segment Controller */}
              <div className="grid grid-cols-3 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setActiveTab('commodities')}
                  className={`py-1.5 px-2 text-center rounded-lg transition-all cursor-pointer ${
                    activeTab === 'commodities' 
                      ? 'bg-white dark:bg-slate-700 text-slate-950 dark:text-white shadow-xs font-bold' 
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Commodities
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('workforce')}
                  className={`py-1.5 px-2 text-center rounded-lg transition-all cursor-pointer ${
                    activeTab === 'workforce' 
                      ? 'bg-white dark:bg-slate-700 text-slate-950 dark:text-white shadow-xs font-bold' 
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Community Works
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('standards')}
                  className={`py-1.5 px-2 text-center rounded-lg transition-all cursor-pointer ${
                    activeTab === 'standards' 
                      ? 'bg-white dark:bg-slate-700 text-slate-950 dark:text-white shadow-xs font-bold' 
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Compliance
                </button>
              </div>

              {/* Tab Content Display */}
              {activeTab === 'commodities' && (
                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 border border-slate-200/60 dark:border-slate-600 flex items-center justify-center shrink-0">
                        <Layers className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-900 dark:text-white block">8 Centralized Divisions</span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">PPE, Janitorial, Chemicals, IT, Equipment</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-md">Bulk Ready</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 border border-slate-200/60 dark:border-slate-600 flex items-center justify-center shrink-0">
                        <Clock className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-900 dark:text-white block">Tender Turnaround</span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">Rapid quotation turnaround within 24-48 hours</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-md">24h - 48h</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 border border-slate-200/60 dark:border-slate-600 flex items-center justify-center shrink-0">
                        <MapPin className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-900 dark:text-white block">National Staging Hubs</span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">Johannesburg, Durban, Cape Town, Port Elizabeth</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md">Consolidated</span>
                  </div>
                </div>
              )}

              {activeTab === 'workforce' && (
                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 dark:text-white">1. Safety Outfitting</span>
                      <span className="text-[11px] font-semibold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-md">SANS 434 Conti-Suits</span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                      Custom municipal embroidered safety vests, steel toe gumboots, and heavy-duty protective gloves.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 dark:text-white">2. Muster & Biometrics</span>
                      <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md">Audit-Proof</span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                      Daily biometric sign-in, shift allocation, and automated stipend verification for municipal records.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 dark:text-white">3. Community Workshops</span>
                      <span className="text-[11px] font-semibold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-md">Accredited Modules</span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                      OHS hazard identification, environmental waste management, and practical vocational development.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'standards' && (
                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-900 dark:text-white block">SABS Standard Specifications</span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">SANS 434 Workwear & ISO 20345 Footwear</span>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md">Verified</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-900 dark:text-white block">Chemical & Hygiene Certification</span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">SANS 1853 Medical & Food Grade Disinfectants</span>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md">Certified</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-900 dark:text-white block">Department of Public Works (DPWI)</span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">National Phase IV Aligned Reporting</span>
                    </div>
                    <span className="text-[11px] font-bold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-md">Compliant</span>
                  </div>
                </div>
              )}

              {/* Bottom Card Summary */}
              <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-medium text-[11px]">Central Supplier Database (CSD) Ready</span>
                </div>
                <a
                  href="#contact"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold flex items-center gap-1 group cursor-pointer text-[11px]"
                >
                  <span>Contact Operations</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* High-Resolution Minimalist Artwork Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/70 px-2.5 py-1 rounded-md border border-blue-200/60 dark:border-blue-800">
                    {currentArtwork.tag}
                  </span>
                  <h3 className="text-base font-bold font-display text-slate-950 dark:text-white">
                    {currentArtwork.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Artwork Full View */}
              <div className="relative aspect-[16/9] bg-slate-950 overflow-hidden">
                <img
                  src={currentArtwork.src}
                  alt={currentArtwork.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Footer / Navigation */}
              <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                    {currentArtwork.subtitle}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {currentArtwork.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                  <button
                    type="button"
                    onClick={handlePrevArtwork}
                    className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 cursor-pointer"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={handleNextArtwork}
                    className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 cursor-pointer"
                  >
                    Next
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsLightboxOpen(false)}
                    className="px-4 py-1.5 rounded-lg bg-slate-950 hover:bg-blue-600 text-xs font-semibold text-white transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
