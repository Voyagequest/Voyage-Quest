import React, { useState } from 'react';
import { 
  Landmark, 
  Building2, 
  Briefcase, 
  HeartPulse, 
  HardHat, 
  Home, 
  Check, 
  ArrowRight,
  ShieldAlert,
  Boxes
} from 'lucide-react';
import { motion } from 'motion/react';
import { TARGET_MARKETS } from '../data/companyData';
import { TargetMarket } from '../types';

interface TargetMarketsProps {
  onSelectMarketForRfq?: (market: TargetMarket) => void;
}

export const TargetMarkets: React.FC<TargetMarketsProps> = ({ onSelectMarketForRfq }) => {
  const [selectedMarketId, setSelectedMarketId] = useState<string>(TARGET_MARKETS[0].id);

  const renderIcon = (name: string, className = "w-5 h-5") => {
    switch (name) {
      case 'Landmark':
        return <Landmark className={className} />;
      case 'Building2':
        return <Building2 className={className} />;
      case 'Briefcase':
        return <Briefcase className={className} />;
      case 'HeartPulse':
        return <HeartPulse className={className} />;
      case 'HardHat':
        return <HardHat className={className} />;
      case 'Home':
      default:
        return <Home className={className} />;
    }
  };

  return (
    <section id="markets" className="py-20 lg:py-28 bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200/80">
            <span>Sectors & Client Segments</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-950 tracking-tight">
            Target Markets Served Across South Africa
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Tailored supply chain packaging, compliant tender documentation, and on-site project execution across South Africa's key municipal and economic sectors.
          </p>
        </div>

        {/* 6 Target Markets Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {TARGET_MARKETS.map((market, idx) => {
            const isSelected = market.id === selectedMarketId;

            return (
              <motion.div
                key={market.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
                onClick={() => setSelectedMarketId(market.id)}
                className={`rounded-2xl p-6 sm:p-7 transition-all cursor-pointer border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-slate-900 shadow-sm'
                    : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-slate-950 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {renderIcon(market.iconName)}
                    </div>
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                      {market.scope}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-950 mb-2">
                    {market.title}
                  </h3>

                  <div className="space-y-1.5 mb-5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Routine SCM Requirements:
                    </span>
                    {market.typicalNeeds.map((need, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{need}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60 leading-relaxed">
                    <strong className="text-slate-800 block mb-0.5">Track Record:</strong>
                    {market.caseExample}
                  </div>

                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-slate-800 hover:text-white bg-slate-50 hover:bg-slate-950 rounded-xl border border-slate-200/80 transition-all cursor-pointer"
                  >
                    <span>Inquire for {market.title.split('&')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
