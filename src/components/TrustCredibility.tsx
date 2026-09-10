import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  TrendingUp, 
  Clock, 
  MapPin, 
  CheckCircle2,
  Building,
  Briefcase
} from 'lucide-react';
import { motion } from 'motion/react';

export const TrustCredibility: React.FC = () => {
  const stats = [
    {
      value: '8',
      suffix: '',
      label: 'Core Commodity Lines',
      subtext: 'Centralized catalog covering safety, chemicals, IT & tooling'
    },
    {
      value: '100',
      suffix: '%',
      label: 'SABS & SANS Adherence',
      subtext: 'Rigorous batch testing and occupational health verification'
    },
    {
      value: '9',
      suffix: '',
      label: 'Provinces Supported',
      subtext: 'Turnkey regional dispatch and municipal field coordination'
    },
    {
      value: '<48',
      suffix: 'h',
      label: 'Fast RFQ Turnaround',
      subtext: 'Compliant formal cost schedules for tender evaluation'
    }
  ];

  const standards = [
    { title: 'SABS Approved', desc: 'Standard specifications across manufactured PPE & paper' },
    { title: 'SANS 434 Compliant', desc: 'Workforce protective clothing and industrial conti-suits' },
    { title: 'DPWI Framework', desc: 'Public works and community labor phase guidelines' },
    { title: 'OHS Act Aligned', desc: 'Occupational health & hazard mitigation certified' }
  ];

  return (
    <section className="bg-white border-b border-slate-200/80 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-12 border-b border-slate-100">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="space-y-1.5"
            >
              <div className="flex items-baseline gap-0.5">
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
                  {stat.value}
                </span>
                <span className="font-display text-2xl sm:text-3xl font-bold text-blue-600">
                  {stat.suffix}
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-display">
                {stat.label}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {stat.subtext}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Regulatory & Institutional Framework Strip */}
        <div className="pt-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                Quality Assurance & Governance
              </span>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 font-display">
                Institutional Regulatory Compliance Framework
              </h4>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              Every commodity line and public workforce management engagement conforms strictly to Republic of South Africa statutory standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {standards.map((std, i) => (
              <motion.div 
                key={std.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-slate-900">
                    {std.title}
                  </h5>
                  <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                    {std.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
