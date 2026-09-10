import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, 
  FileCheck2, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  Award, 
  MapPin, 
  CheckCircle2,
  BarChart3,
  PieChart as PieChartIcon
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  CartesianGrid
} from 'recharts';
import { motion } from 'motion/react';
import { 
  COMPANY_IMPACT_KPIS, 
  ANNUAL_IMPACT_TRENDS, 
  SECTOR_IMPACT_DISTRIBUTION,
  PROVINCIAL_IMPACT_METRICS 
} from '../data/companyData';
import { ImpactKpi } from '../types';
import { useTheme } from '../context/ThemeContext';

interface CompanyImpactProps {
  onOpenRfq: () => void;
}

// Hook for smooth animated counter
const useAnimatedCounter = (targetValue: number, decimals = 0, duration = 1400, startAnimation = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = easeOut * targetValue;

      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetValue, duration, startAnimation]);

  return decimals > 0 ? count.toFixed(decimals) : Math.round(count).toString();
};

const KpiCard: React.FC<{ kpi: ImpactKpi; isInView: boolean }> = ({ kpi, isInView }) => {
  const animatedValue = useAnimatedCounter(kpi.value, kpi.decimals || 0, 1400, isInView);

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Users':
        return <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      default:
        return <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <div 
      id={`impact-kpi-${kpi.id}`}
      className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
            {renderIcon(kpi.iconName)}
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-200 dark:border-slate-700">
            {kpi.badge}
          </span>
        </div>

        <div className="space-y-1">
          <div className="flex items-baseline gap-1">
            {kpi.prefix && (
              <span className="text-xl font-bold font-display text-blue-600 dark:text-blue-400">
                {kpi.prefix}
              </span>
            )}
            <span className="text-3xl sm:text-4xl font-extrabold font-display text-slate-950 dark:text-white tracking-tight">
              {animatedValue}
            </span>
            {kpi.suffix && (
              <span className="text-xl font-bold font-display text-blue-600 dark:text-blue-400">
                {kpi.suffix}
              </span>
            )}
          </div>

          <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-display">
            {kpi.label}
          </h3>

          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
            {kpi.highlightText}
          </p>
        </div>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
        {kpi.description}
      </p>
    </div>
  );
};

export const CompanyImpact: React.FC<CompanyImpactProps> = ({ onOpenRfq }) => {
  const [activeTab, setActiveTab] = useState<'savings' | 'contracts' | 'sectors'>('savings');
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();

  // Dynamic Theme Colors for Charts
  const chartGridColor = isDark ? '#1e2d48' : '#f1f5f9';
  const chartAxisColor = isDark ? '#94a3b8' : '#64748b';
  const chartTooltipStyle = { 
    backgroundColor: isDark ? '#142036' : '#0f172a', 
    borderColor: isDark ? '#233454' : '#1e293b', 
    borderRadius: '12px', 
    color: '#fff', 
    fontSize: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
  };
  const barFillColor = isDark ? '#38bdf8' : '#0f172a';
  const areaStrokeColor = isDark ? '#60a5fa' : '#2563eb';
  const sectorColors = isDark 
    ? ['#38bdf8', '#3b82f6', '#60a5fa', '#94a3b8'] 
    : ['#0f172a', '#2563eb', '#0284c7', '#94a3b8'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="impact"
      ref={containerRef}
      className="py-20 lg:py-28 bg-slate-50/70 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950/70 dark:text-blue-400 text-xs font-semibold border border-blue-200/80 dark:border-blue-800/80">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Verified Public Sector Track Record</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-950 dark:text-white tracking-tight">
              Company Impact & Performance Analytics
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Transparent, measurable governance in public procurement, municipal supply consolidation, and community workforce empowerment across South Africa.
            </p>
          </div>

          <div>
            <button
              type="button"
              onClick={onOpenRfq}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-950 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer"
            >
              <span>Request Historical Tender Reference</span>
            </button>
          </div>
        </div>

        {/* 4 Animated KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_IMPACT_KPIS.map((kpi) => (
            <KpiCard key={kpi.id} kpi={kpi} isInView={isInView} />
          ))}
        </div>

        {/* Interactive Analytics Dashboard */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
                Multi-Year Governance Trends
              </span>
              <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">
                Audited Operational Volume & Provincial Spread
              </h3>
            </div>

            {/* Segment Controls */}
            <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
              <button
                type="button"
                onClick={() => setActiveTab('savings')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'savings' 
                    ? 'bg-white dark:bg-slate-700 text-slate-950 dark:text-white shadow-xs' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                Volume & Savings
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('contracts')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'contracts' 
                    ? 'bg-white dark:bg-slate-700 text-slate-950 dark:text-white shadow-xs' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                Contract Completions
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('sectors')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'sectors' 
                    ? 'bg-white dark:bg-slate-700 text-slate-950 dark:text-white shadow-xs' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                Sector Allocation
              </button>
            </div>
          </div>

          {/* Chart Display Area */}
          <div className="h-72 sm:h-80 w-full">
            {activeTab === 'savings' && (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={ANNUAL_IMPACT_TRENDS} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorProcurement" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={areaStrokeColor} stopOpacity={0.3}/>
                      <stop offset="95%" stopColor={areaStrokeColor} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={chartGridColor} vertical={false} />
                  <XAxis dataKey="fiscalYear" stroke={chartAxisColor} fontSize={11} tickLine={false} />
                  <YAxis stroke={chartAxisColor} fontSize={11} tickLine={false} />
                  <Tooltip 
                    contentStyle={chartTooltipStyle} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="procurementHandledMillion" 
                    name="Procurement Volume (R Million)" 
                    stroke={areaStrokeColor} 
                    strokeWidth={2.5}
                    fillOpacity={1} 
                    fill="url(#colorProcurement)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}

            {activeTab === 'contracts' && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ANNUAL_IMPACT_TRENDS} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={chartGridColor} vertical={false} />
                  <XAxis dataKey="fiscalYear" stroke={chartAxisColor} fontSize={11} tickLine={false} />
                  <YAxis stroke={chartAxisColor} fontSize={11} tickLine={false} />
                  <Tooltip 
                    contentStyle={chartTooltipStyle} 
                  />
                  <Bar dataKey="contractsCompleted" name="Tenders & Contracts Completed" fill={barFillColor} radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}

            {activeTab === 'sectors' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={SECTOR_IMPACT_DISTRIBUTION}
                      cx="50%"
                      cy="50%"
                      innerRadius={55}
                      outerRadius={85}
                      paddingAngle={4}
                      dataKey="percentage"
                    >
                      {SECTOR_IMPACT_DISTRIBUTION.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={sectorColors[index % sectorColors.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={chartTooltipStyle} 
                    />
                  </PieChart>
                </ResponsiveContainer>

                <div className="space-y-3">
                  {SECTOR_IMPACT_DISTRIBUTION.map((entry, index) => (
                    <div key={entry.name} className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2">
                        <span 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: sectorColors[index % sectorColors.length] }}
                        />
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{entry.name}</span>
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white">{entry.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Provincial Logistics Strip */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block mb-3">
              National Footprint & Deployment Logistics
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { name: 'Gauteng', hub: 'Johannesburg Central' },
                { name: 'KwaZulu-Natal', hub: 'Durban Harbor Staging' },
                { name: 'Western Cape', hub: 'Cape Town Metro' },
                { name: 'Eastern Cape', hub: 'Gqeberha / Mthatha' },
                { name: 'Limpopo', hub: 'Polokwane Regional' },
                { name: 'Free State', hub: 'Bloemfontein Central' },
              ].map(prov => (
                <div key={prov.name} className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 text-center">
                  <span className="text-xs font-bold text-slate-950 dark:text-white block">{prov.name}</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block leading-tight mt-0.5">{prov.hub}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
