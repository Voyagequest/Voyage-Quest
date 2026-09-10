import React, { useState, useMemo } from 'react';
import { 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Monitor, 
  Briefcase, 
  CalendarRange, 
  GraduationCap, 
  ShoppingBag, 
  Check, 
  Plus, 
  Search, 
  ArrowRight,
  Info,
  X,
  FileCheck2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CORE_OFFERINGS } from '../data/companyData';
import { OfferingCategory } from '../types';

interface OfferingsSectionProps {
  onOpenRfq?: () => void;
}

export const OfferingsSection: React.FC<OfferingsSectionProps> = () => {
  const [filterType, setFilterType] = useState<'all' | 'goods' | 'services'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryModal, setSelectedCategoryModal] = useState<OfferingCategory | null>(null);

  // Icon mapping
  const renderIcon = (name: string, className = "w-5 h-5") => {
    switch (name) {
      case 'Layers':
        return <Layers className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'ShieldCheck':
        return <ShieldCheck className={className} />;
      case 'Monitor':
        return <Monitor className={className} />;
      case 'Briefcase':
        return <Briefcase className={className} />;
      case 'CalendarRange':
        return <CalendarRange className={className} />;
      case 'GraduationCap':
        return <GraduationCap className={className} />;
      case 'ShoppingBag':
      default:
        return <ShoppingBag className={className} />;
    }
  };

  const filteredOfferings = useMemo(() => {
    return CORE_OFFERINGS.filter((item) => {
      const matchesType = filterType === 'all' || item.type === filterType;
      const matchesQuery = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.primaryOfferings.some(o => o.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.complianceTags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesType && matchesQuery;
    });
  }, [filterType, searchQuery]);

  return (
    <section id="offerings" className="py-20 lg:py-28 bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200/80">
            <span>Procurement & Service Scope</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-950 tracking-tight">
            Eight Strategic Commodity Divisions
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Consolidated commercial sourcing paired with structured public sector and community works facilitation. Explore our single-source capabilities designed for tender compliance and enterprise reliability.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-200/80 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Segment Tabs */}
          <div className="flex items-center p-1 bg-slate-100 rounded-xl w-full md:w-auto">
            <button
              type="button"
              onClick={() => setFilterType('all')}
              className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filterType === 'all' 
                  ? 'bg-white text-slate-950 shadow-xs' 
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              All Divisions (8)
            </button>
            <button
              type="button"
              onClick={() => setFilterType('goods')}
              className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filterType === 'goods' 
                  ? 'bg-white text-slate-950 shadow-xs' 
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Commercial Goods (4)
            </button>
            <button
              type="button"
              onClick={() => setFilterType('services')}
              className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filterType === 'services' 
                  ? 'bg-white text-slate-950 shadow-xs' 
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Specialized Services (4)
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search PPE, SANS, chemicals, IT..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredOfferings.map((category, idx) => {
            return (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 p-6 flex flex-col justify-between transition-all duration-200 group hover:shadow-md"
              >
                <div>
                  {/* Top Row: Icon + Type Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-900 border border-slate-200/80 flex items-center justify-center group-hover:bg-slate-950 group-hover:text-white transition-colors">
                      {renderIcon(category.iconName)}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {category.type === 'goods' ? 'Commodity' : 'Service'}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-base font-bold text-slate-950 mb-1 font-display group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 line-clamp-2 leading-relaxed">
                    {category.tagline}
                  </p>

                  {/* Key Offerings List */}
                  <div className="space-y-1.5 mb-5">
                    {category.primaryOfferings.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <span className="w-1 h-1 rounded-full bg-blue-600 shrink-0 mt-2"></span>
                        <span className="line-clamp-1 leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Compliance Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {category.complianceTags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedCategoryModal(category)}
                    className="flex-1 inline-flex items-center justify-center gap-1 py-2 px-3 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200/80 transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Specs</span>
                  </button>

                  <a
                    href="#contact"
                    className="flex-1 inline-flex items-center justify-center gap-1 py-2 px-3 rounded-xl text-xs font-semibold text-white bg-slate-950 hover:bg-blue-600 transition-all cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Trigger */}
        <div className="mt-12 rounded-2xl bg-slate-950 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-bold text-lg text-white">
              Need multi-division consolidation for a single municipal tender?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              We coordinate combined PPE, janitorial, chemicals, and IT deliveries into a unified procurement package.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 cursor-pointer"
          >
            <span>Inquire Multi-Division Scope</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Specifications & Standards Modal */}
      <AnimatePresence>
        {selectedCategoryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
            >
              
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 text-white flex items-center justify-center">
                    {renderIcon(selectedCategoryModal.iconName)}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-950">
                      {selectedCategoryModal.title}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {selectedCategoryModal.tagline}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCategoryModal(null)}
                  className="p-2 text-slate-400 hover:text-slate-600 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-700">
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-2">
                    Division Summary & Standards
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {selectedCategoryModal.summary}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-2">
                    Standard Catalog Specifications
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedCategoryModal.primaryOfferings.map((offering, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70 flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{offering}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1.5">
                    <span className="font-bold text-slate-900 block text-xs">
                      Compliance Standards
                    </span>
                    <ul className="space-y-1 text-slate-600 text-[11px]">
                      {selectedCategoryModal.complianceTags.map((tag) => (
                        <li key={tag} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                          <span>{tag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1.5">
                    <span className="font-bold text-slate-900 block text-xs">
                      Packaging & Technical Specs
                    </span>
                    <ul className="space-y-1 text-slate-600 text-[11px]">
                      {selectedCategoryModal.specs.map((spec) => (
                        <li key={spec} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedCategoryModal(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Close
                </button>

                <a
                  href="#contact"
                  onClick={() => setSelectedCategoryModal(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-xs transition-all cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>Inquire for Division</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
