import React, { useState } from 'react';
import { 
  Quote, 
  Star, 
  ShieldCheck, 
  MapPin, 
  Building2, 
  Landmark, 
  Users, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { CLIENT_TESTIMONIALS } from '../data/companyData';
import { ClientTestimonial } from '../types';

interface ClientTestimonialsProps {
  onOpenRfq?: () => void;
  onSelectSectorForRfq?: (sector: string) => void;
}

export const ClientTestimonials: React.FC<ClientTestimonialsProps> = ({ 
  onOpenRfq,
  onSelectSectorForRfq 
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Municipal & Public' | 'Public Works & Community' | 'Corporate & Industrial'>('All');

  const filteredTestimonials = selectedFilter === 'All' 
    ? CLIENT_TESTIMONIALS 
    : CLIENT_TESTIMONIALS.filter(item => item.sector === selectedFilter);

  return (
    <section 
      id="testimonials" 
      className="py-20 lg:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200/80">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Verified Track Record & Reference Feedback</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-950 tracking-tight">
            Client Endorsements & Social Proof
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Direct evaluations from municipal supply chain directors, public works managers, and commercial facility executives across South Africa.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {(['All', 'Municipal & Public', 'Public Works & Community', 'Corporate & Industrial'] as const).map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-slate-950 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200/80'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Testimonials Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              layout
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-all"
            >
              <div className="space-y-4">
                {/* Rating & Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                    {testimonial.verifiedBadge}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                {/* Metric Highlight Box */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-0.5">
                  <span className="text-sm font-bold text-blue-700 font-display block">
                    {testimonial.highlightMetric}
                  </span>
                  <span className="text-[11px] text-slate-500 block leading-tight">
                    {testimonial.metricLabel}
                  </span>
                </div>
              </div>

              {/* Author Attribution */}
              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-950 font-display">
                    {testimonial.clientName}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    {testimonial.role}, {testimonial.organization}
                  </p>
                </div>
                <span className="text-[10px] font-medium text-slate-400">
                  {testimonial.province}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
