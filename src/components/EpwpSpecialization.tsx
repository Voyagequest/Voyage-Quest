import React, { useState } from 'react';
import { 
  Users, 
  ShieldCheck, 
  CalendarCheck, 
  GraduationCap, 
  FileSpreadsheet, 
  ArrowRight,
  ClipboardList,
  CheckCircle2,
  Sliders,
  PackageCheck,
  Award
} from 'lucide-react';
import { motion } from 'motion/react';
import { WORKFORCE_COMPLIANCE_PILLARS } from '../data/companyData';

interface WorkforceSpecializationProps {
  onSelectWorkforceRfq?: () => void;
  onSelectEpwpRfq?: () => void;
}

export const WorkforceSpecialization: React.FC<WorkforceSpecializationProps> = ({ 
  onSelectWorkforceRfq,
  onSelectEpwpRfq 
}) => {
  // Interactive Labor Force Estimator
  const [workforceSize, setWorkforceSize] = useState<number>(100);

  // Computed metrics based on workforce size
  const contiSuits = workforceSize * 2; // 2 sets per worker standard
  const boots = workforceSize;
  const firstAidKits = Math.max(2, Math.ceil(workforceSize / 25));
  const trainingHours = workforceSize > 200 ? 120 : 80;

  return (
    <section id="workforce" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200/80">
              <Users className="w-3.5 h-3.5" />
              <span>Public Sector Specialization</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-950 tracking-tight leading-tight">
              Turnkey Workforce Management, <br />
              Scheduling & Capacity Building
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              We empower government departments and municipal directorates with end-to-end facilitation for public employment and community works initiatives. From SANS-certified safety outfitting to audit-proof muster rolls and accredited vocational workshop delivery.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-slate-950 hover:bg-blue-600 transition-all shadow-sm cursor-pointer"
            >
              <span>Configure Workforce Package</span>
              <ArrowRight className="w-4 h-4 text-blue-400" />
            </a>
          </div>
        </div>

        {/* 4 Pillars of Workforce Execution */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {WORKFORCE_COMPLIANCE_PILLARS.map((pillar, i) => (
            <motion.div 
              key={pillar.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="rounded-2xl bg-slate-50 border border-slate-200/80 p-6 flex flex-col justify-between hover:border-slate-300 hover:bg-white hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-2xl font-extrabold text-blue-600">
                    {pillar.step}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-800 shadow-xs group-hover:bg-slate-950 group-hover:text-white transition-colors">
                    {pillar.step === '01' && <ShieldCheck className="w-4 h-4" />}
                    {pillar.step === '02' && <CalendarCheck className="w-4 h-4" />}
                    {pillar.step === '03' && <GraduationCap className="w-4 h-4" />}
                    {pillar.step === '04' && <FileSpreadsheet className="w-4 h-4" />}
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-950 mb-2 font-display">
                  {pillar.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 text-[11px] font-semibold text-blue-700 flex items-center gap-1">
                <span>DPWI Framework Compliant</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Resource & Municipal Labor Estimator */}
        <div className="rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 text-slate-900 dark:text-white p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Interactive Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wider uppercase">
                <Sliders className="w-4 h-4" />
                <span>Municipal Workforce & Labor Estimator</span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
                  Estimate Turnkey Outfitting & Compliance Needs
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Adjust your planned municipal project workforce size to view standard SANS equipment schedules, first aid provisioning, and capacity modules required for municipal audit compliance.
                </p>
              </div>

              {/* Slider Controller */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Target Workforce Size</span>
                  <span className="font-bold text-base text-slate-950 dark:text-white px-3 py-1 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-2xs">
                    {workforceSize} Participants
                  </span>
                </div>
                
                <input
                  type="range"
                  min="25"
                  max="500"
                  step="25"
                  value={workforceSize}
                  onChange={(e) => setWorkforceSize(Number(e.target.value))}
                  className="w-full accent-blue-600 bg-slate-200 dark:bg-slate-700 h-2 rounded-lg cursor-pointer"
                />

                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>25 (Local Ward)</span>
                  <span>100 (Sub-District)</span>
                  <span>250 (Regional)</span>
                  <span>500 (Metro Scheme)</span>
                </div>
              </div>

              {/* Quick Select Buttons */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[50, 100, 200, 350, 500].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setWorkforceSize(size)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      workforceSize === size
                        ? 'bg-slate-950 text-white dark:bg-blue-600 shadow-xs'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {size} Workers
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Calculated Outfitting Schedule */}
            <div className="lg:col-span-6 bg-white dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-700 space-y-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <PackageCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-bold text-slate-950 dark:text-white font-display">
                    Estimated Outfitting & Compliance Schedule
                  </span>
                </div>
                <span className="text-xs text-slate-400">Phase IV Standards</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/80">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block">SANS 434 Conti-Suits</span>
                  <span className="text-lg font-bold text-slate-950 dark:text-white">{contiSuits} Units</span>
                  <span className="text-[10px] text-slate-400 block">2 sets per participant</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/80">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block">ISO 20345 Steel Boots</span>
                  <span className="text-lg font-bold text-slate-950 dark:text-white">{boots} Pairs</span>
                  <span className="text-[10px] text-slate-400 block">Conforming safety footwear</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/80">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block">OHS First Aid Stations</span>
                  <span className="text-lg font-bold text-slate-950 dark:text-white">{firstAidKits} Site Stations</span>
                  <span className="text-[10px] text-slate-400 block">Industrial emergency kits</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/80">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Accredited Training</span>
                  <span className="text-lg font-bold text-slate-950 dark:text-white">{trainingHours} Contact Hours</span>
                  <span className="text-[10px] text-slate-400 block">SETA aligned exit modules</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-blue-800 dark:text-blue-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Includes daily biometric muster roll verification system.</span>
                </div>
              </div>

              <a
                href="#contact"
                className="w-full py-3 px-4 rounded-xl bg-slate-950 hover:bg-blue-600 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Inquire for {workforceSize}-Person Workforce Specification</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export const EpwpSpecialization = WorkforceSpecialization;
