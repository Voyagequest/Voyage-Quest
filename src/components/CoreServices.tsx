import React from 'react';
import { 
  ShoppingBag, 
  Briefcase, 
  ShieldCheck, 
  Truck, 
  HardHat, 
  Sparkles, 
  Monitor, 
  Layers, 
  ClipboardCheck, 
  Users, 
  Award, 
  Clock, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { motion } from 'motion/react';

export const CoreServices: React.FC = () => {
  const procurementOfferings = [
    {
      icon: HardHat,
      title: 'Certified PPE & Safety Wear',
      description: 'SABS and SANS-compliant protective equipment, continental overalls, high-visibility vests, and safety footwear for hazardous and industrial work environments.'
    },
    {
      icon: ShoppingBag,
      title: 'Commercial & Office Supplies',
      description: 'Daily operational consumables, high-volume stationery, paper goods, packaging materials, and facility essentials delivered on regular schedules.'
    },
    {
      icon: Sparkles,
      title: 'Industrial Cleaning & Hygiene',
      description: 'Commercial-grade chemical detergents, sanitizers, touchless dispensing systems, paper towels, and custodial equipment for institutions.'
    },
    {
      icon: Monitor,
      title: 'Office Furniture & Enterprise IT',
      description: 'Ergonomic workstations, executive boardroom suites, enterprise laptops, desktop computers, secure networking, and IT peripherals.'
    }
  ];

  const projectManagementOfferings = [
    {
      icon: Layers,
      title: 'Scoping, Planning & Budgeting',
      description: 'Comprehensive project charters, work breakdown structures (WBS), risk registers, milestone planning, and transparent cost governance.'
    },
    {
      icon: Users,
      title: 'Public Sector & Civic Facilitation',
      description: 'Coordinating workforce teams, community stakeholder liaison, compliance tracking, and structured reporting aligned with institutional guidelines.'
    },
    {
      icon: ClipboardCheck,
      title: 'On-Site Supervision & Quality Control',
      description: 'Dedicated site leadership, technical verification, contractor oversight, safety protocol enforcement, and stage-by-stage quality assurance.'
    },
    {
      icon: Award,
      title: 'Turnkey Delivery & Closeout',
      description: 'Complete project handover, punch list sign-offs, asset registers, compliance certification, and final financial reconciliation.'
    }
  ];

  const whyChooseUsPillars = [
    {
      icon: Users,
      title: 'Direct Leadership Access',
      desc: 'Work directly with key principals—Yaaseen and Nabeel—ensuring fast decisions, zero bureaucracy, and absolute accountability.'
    },
    {
      icon: Truck,
      title: 'Nationwide Logistics Reach',
      desc: 'Seamless distribution network delivering supplies and managing project deployments across all 9 provinces in South Africa.'
    },
    {
      icon: ShieldCheck,
      title: 'SABS / SANS Quality Standards',
      desc: 'Full commitment to industry compliance, certified safety specifications, and verified vendor vetting.'
    },
    {
      icon: Clock,
      title: 'On-Time, On-Budget Delivery',
      desc: 'Disciplined project milestones and reliable procurement fulfillment that keeps your operations moving forward without delay.'
    }
  ];

  return (
    <div className="bg-black text-white">
      
      {/* SECTION 1: PROCUREMENT */}
      <section id="procurement" className="py-20 lg:py-28 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl space-y-4 mb-16 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161619] text-[#BF953F] text-xs font-semibold border border-[#BF953F]/30">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Division 01</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Procurement Solutions
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
              We simplify and streamline purchasing for commercial enterprises, institutions, and public sector organizations. We source, vet, and deliver quality goods reliably at competitive rates.
            </p>
          </div>

          {/* 4 Procurement Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {procurementOfferings.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0c0c0e] border border-white/10 hover:border-[#BF953F]/50 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1a1a1f] border border-white/10 text-[#BF953F] flex items-center justify-center group-hover:bg-[#BF953F] group-hover:text-[#0a0a0c] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#BF953F] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-white/5 flex items-center text-xs font-semibold text-[#BF953F]">
                    <span>Nationwide dispatch</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick procurement highlight banner */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#121215] to-[#18181c] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-base font-bold text-white">
                Need a formal quote or itemized bill of quantities?
              </h4>
              <p className="text-xs text-zinc-400">
                Send us your specifications or tender schedule. We return quotes swiftly within 24–48 hours.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#BF953F] hover:bg-[#d4af37] text-[#0a0a0c] font-bold text-xs transition-all shadow-md shadow-[#BF953F]/20 shrink-0"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 2: PROJECT MANAGEMENT */}
      <section id="project-management" className="py-20 lg:py-28 border-b border-white/10 bg-[#060608] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl space-y-4 mb-16 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161619] text-[#BF953F] text-xs font-semibold border border-[#BF953F]/30">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Division 02</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Project Management
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
              Structured execution from concept to handover. We bring rigorous organization, site coordination, and disciplined milestone oversight to ensure every project is completed safely, on time, and within budget.
            </p>
          </div>

          {/* 4 Project Management Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectManagementOfferings.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0c0c0e] border border-white/10 hover:border-[#BF953F]/50 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1a1a1f] border border-white/10 text-[#BF953F] flex items-center justify-center group-hover:bg-[#BF953F] group-hover:text-[#0a0a0c] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#BF953F] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-white/5 flex items-center text-xs font-semibold text-[#BF953F]">
                    <span>Structured Governance</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Project Management Key Outcomes */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#0e0e11] border border-white/10 flex items-start gap-3.5">
              <CheckCircle className="w-5 h-5 text-[#BF953F] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-sm text-white block">Quality Assurance</span>
                <span className="text-xs text-zinc-400 leading-relaxed">Continuous site audits and strict adherence to technical specifications.</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0e0e11] border border-white/10 flex items-start gap-3.5">
              <CheckCircle className="w-5 h-5 text-[#BF953F] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-sm text-white block">Schedule Integrity</span>
                <span className="text-xs text-zinc-400 leading-relaxed">Active milestone tracking and proactive resolution of delivery bottlenecks.</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0e0e11] border border-white/10 flex items-start gap-3.5">
              <CheckCircle className="w-5 h-5 text-[#BF953F] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-sm text-white block">Cost Control</span>
                <span className="text-xs text-zinc-400 leading-relaxed">Transparent financial monitoring and variance reporting for peace of mind.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: WHY VOYAGE QUEST */}
      <section id="why-us" className="py-20 lg:py-28 border-b border-white/10 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-4 mb-16 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161619] text-[#BF953F] text-xs font-semibold border border-[#BF953F]/30">
              <Award className="w-3.5 h-3.5" />
              <span>Why Voyage Quest</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Dependable. Disciplined. Driven.
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
              Clients choose Voyage Quest when they need work completed without excuses. We provide the reliability of a major contractor with the responsiveness and personal care of a dedicated team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0d0d10] border border-white/10 hover:border-[#BF953F]/40 transition-all space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#18181c] border border-white/10 text-[#BF953F] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
