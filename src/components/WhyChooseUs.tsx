import React, { useState } from 'react';
import { 
  GitMerge, 
  Users, 
  Award, 
  Zap, 
  TrendingUp, 
  CheckCircle2, 
  XCircle, 
  ArrowRight,
  ShieldCheck,
  Building2,
  Clock
} from 'lucide-react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_PILLARS } from '../data/companyData';

interface WhyChooseUsProps {
  onOpenRfq?: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenRfq }) => {
  const [activePillarId, setActivePillarId] = useState<string>(WHY_CHOOSE_PILLARS[0].id);

  const renderIcon = (name: string, className = "w-5 h-5") => {
    switch (name) {
      case 'GitMerge':
        return <GitMerge className={className} />;
      case 'Users':
        return <Users className={className} />;
      case 'Award':
        return <Award className={className} />;
      case 'Zap':
        return <Zap className={className} />;
      case 'TrendingUp':
      default:
        return <TrendingUp className={className} />;
    }
  };

  const activePillar = WHY_CHOOSE_PILLARS.find(p => p.id === activePillarId) || WHY_CHOOSE_PILLARS[0];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200/80">
            <span>Enterprise Advantage</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-950 tracking-tight">
            Why Partner with Voyage Quest?
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Five strategic pillars designed to de-risk government procurement, streamline municipal facility replenishment, and ensure structured on-time delivery.
          </p>
        </div>

        {/* 5 Pillars Selector Cards with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-10">
          {WHY_CHOOSE_PILLARS.map((pillar, idx) => {
            const isActive = pillar.id === activePillarId;
            return (
              <motion.button
                key={pillar.id}
                type="button"
                onClick={() => setActivePillarId(pillar.id)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className={`p-5 rounded-2xl text-left transition-all border cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-slate-950 text-white border-slate-950 shadow-sm'
                    : 'bg-white text-slate-800 border-slate-200/90 hover:border-slate-300 hover:bg-slate-50/80'
                }`}
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3.5 transition-colors ${
                    isActive ? 'bg-blue-600 text-white' : 'bg-white text-slate-700 border border-slate-200 shadow-2xs'
                  }`}>
                    {renderIcon(pillar.iconName)}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${
                    isActive ? 'text-blue-400' : 'text-slate-500'
                  }`}>
                    {pillar.subtitle}
                  </span>
                  <h3 className="font-display text-sm font-bold leading-snug">
                    {pillar.title}
                  </h3>
                </div>

                {pillar.metric && (
                  <div className={`mt-4 pt-2.5 border-t text-[11px] font-semibold ${
                    isActive ? 'border-slate-800 text-blue-400' : 'border-slate-200 text-blue-600'
                  }`}>
                    {pillar.metric}
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Active Pillar Deep Dive Card */}
        <motion.div 
          key={activePillar.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-xs mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Pillar Deep-Dive: {activePillar.subtitle}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-950">
                {activePillar.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {activePillar.description}
              </p>

              <div className="space-y-2.5 pt-2">
                {activePillar.advantages.map((adv, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{adv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Target Performance Metric
                </span>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Benchmarked
                </span>
              </div>

              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display block">
                  {activePillar.metric || '100%'}
                </span>
                <span className="text-xs text-slate-600 font-medium">
                  {activePillar.metricLabel || 'Adherence & SLA Achievement Rate'}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-600 leading-relaxed">
                Integrated logistics coordination across all municipal districts with dedicated account managers and tender documentation packages.
              </div>

              <button
                type="button"
                onClick={onOpenRfq}
                className="w-full py-2.5 rounded-xl bg-slate-950 hover:bg-blue-600 text-white font-semibold text-xs transition-colors shadow-xs cursor-pointer"
              >
                Inquire Regarding This Pillar
              </button>
            </div>
          </div>
        </motion.div>

        {/* Side-by-Side Comparison: Traditional Sourcing vs. Voyage Quest */}
        <div className="border border-slate-200/90 rounded-3xl overflow-hidden bg-white shadow-xs">
          <div className="p-6 sm:p-8 bg-slate-50/70 border-b border-slate-200/80">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-950">
              Procurement Model Comparison
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              How Voyage Quest unified sourcing eliminates the administrative overhead of fragmented vendor management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Traditional Model */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                <XCircle className="w-5 h-5" />
                <span>Traditional Multi-Vendor Procurement</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2"></span>
                  <span>Dealing with 5-8 disparate suppliers for PPE, chemicals, paper, and IT hardware.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2"></span>
                  <span>High risk of non-compliant tender documents or unverified SABS/SANS certification.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2"></span>
                  <span>Separate delivery schedules causing operational delays and storeroom stockouts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2"></span>
                  <span>Audit findings on community workforce muster roll discrepancy or missing participant attendance proof.</span>
                </li>
              </ul>
            </div>

            {/* Voyage Quest Model */}
            <div className="p-6 sm:p-8 space-y-4 bg-blue-50/30">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <span>Voyage Quest Single-Source Delivery</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Single-source consolidated purchase order spanning 8 strategic commercial divisions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>100% verified SABS, SANS 434, and EN ISO standards with test certificates supplied.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Synchronized regional dispatch directly to municipal facilities and field sites.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Turnkey biometric workforce muster scheduling, accredited training, and close-out governance.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
