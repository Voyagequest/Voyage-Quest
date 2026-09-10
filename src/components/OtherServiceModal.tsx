import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ExternalLink, 
  HardHat, 
  Recycle, 
  CheckCircle2, 
  Phone, 
  Mail, 
  ArrowRight,
  Globe,
  Clock
} from 'lucide-react';
import { OtherServiceItem } from '../types';
import { COMPANY_PROFILE } from '../data/companyData';

interface OtherServiceModalProps {
  service: OtherServiceItem | null;
  onClose: () => void;
  onOpenRfq?: () => void;
}

export const OtherServiceModal: React.FC<OtherServiceModalProps> = ({
  service,
  onClose,
}) => {
  if (!service) return null;

  const isSubdomain = service.type === 'subdomain';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden z-10 my-8"
        >
          {/* Header Banner */}
          <div className="relative bg-slate-950 text-white p-6 sm:p-7 border-b border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-850 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0">
                {service.iconName === 'HardHat' ? (
                  <HardHat className="w-6 h-6 text-blue-400" />
                ) : (
                  <Recycle className="w-6 h-6 text-emerald-400" />
                )}
              </div>

              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    <Globe className="w-3 h-3" />
                    {service.typeLabel}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                    <Clock className="w-3 h-3" /> Launching Soon
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-display text-white mt-1">
                  {service.title}
                </h3>
              </div>
            </div>

            {/* Target URL Preview */}
            <div className="mt-3 p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 truncate">
                <span className="text-slate-400 font-mono text-[11px]">Future URL:</span>
                <span className="text-blue-400 font-mono font-medium truncate">{service.futureUrl}</span>
              </div>
              <span className="text-[10px] uppercase font-bold text-slate-400 shrink-0 px-2 py-0.5 bg-slate-800 rounded">
                {isSubdomain ? 'Sub-domain' : 'External Website'}
              </span>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-7 space-y-6 max-h-[65vh] overflow-y-auto">
            {/* Overview text */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                Overview & Strategic Scope
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {service.details}
              </p>
            </div>

            {/* Capabilities list */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3">
                Core Capabilities & Offerings
              </h4>
              <div className="space-y-2">
                {service.capabilities.map((cap, i) => (
                  <div 
                    key={i}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-xs text-slate-700 dark:text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Immediate Assistance Box */}
            <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/60 space-y-3">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                  VQ
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-950 dark:text-white">
                    Need Immediate Project Execution or Quotation?
                  </h5>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug mt-0.5">
                    While the dedicated platform is undergoing final deployment, our Cape Town operations desk is actively taking on public sector and commercial briefs today.
                  </p>
                </div>
              </div>

              {/* Direct Telephone Contacts */}
              <div className="pt-2 border-t border-blue-200/60 dark:border-blue-800/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <a
                  href="tel:0734656796"
                  className="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-slate-700 hover:border-blue-400 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span className="font-semibold text-slate-900 dark:text-white">Yaaseen</span>
                  </div>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">073 465 6796</span>
                </a>

                <a
                  href="tel:0713310016"
                  className="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-slate-700 hover:border-blue-400 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span className="font-semibold text-slate-900 dark:text-white">Nabeel</span>
                  </div>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">071 331 0016</span>
                </a>
              </div>
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <a
              href={`mailto:${COMPANY_PROFILE.email}?subject=${encodeURIComponent(`Inquiry regarding ${service.title}`)}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors border border-slate-300 dark:border-slate-700"
            >
              <Mail className="w-3.5 h-3.5 text-blue-500" />
              <span>Email Brief Directly</span>
            </a>

            <div className="w-full sm:w-auto flex items-center gap-2">
              <a
                href="#contact"
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-950 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 transition-all shadow-sm cursor-pointer"
              >
                <span>Inquire for Project Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
