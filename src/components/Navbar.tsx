import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, 
  Menu, 
  X, 
  Mail, 
  Phone,
  ShoppingBag, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  MapPin,
  ChevronDown,
  HardHat,
  Recycle,
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_PROFILE, OTHER_SERVICES } from '../data/companyData';
import { RfqItem, OtherServiceItem } from '../types';
import { ThemeToggle } from './ThemeToggle';
import { VoyageQuestLogo } from './VoyageQuestLogo';
import { OtherServiceModal } from './OtherServiceModal';

interface NavbarProps {
  rfqItems?: RfqItem[];
  onOpenRfq?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ rfqItems = [], onOpenRfq }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [otherServicesDropdownOpen, setOtherServicesDropdownOpen] = useState(false);
  const [mobileOtherServicesOpen, setMobileOtherServicesOpen] = useState(true);
  const [selectedOtherService, setSelectedOtherService] = useState<OtherServiceItem | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOtherServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnterDropdown = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOtherServicesDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOtherServicesDropdownOpen(false);
    }, 200);
  };

  const handleSelectOtherService = (serviceId: string) => {
    const found = OTHER_SERVICES.find(s => s.id === serviceId);
    if (found) {
      setSelectedOtherService(found);
      setOtherServicesDropdownOpen(false);
    }
  };

  const navLinksBefore = [
    { label: 'Overview', href: '#overview' },
    { label: 'Core Divisions', href: '#offerings' },
  ];

  const navLinksAfter = [
    { label: 'Performance', href: '#impact' },
    { label: 'Why VQ', href: '#why-us' },
    { label: 'Target Sectors', href: '#markets' },
    { label: 'Contact', href: '#contact' },
  ];

  const allMobileNavLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Core Divisions', href: '#offerings' },
    { label: 'Performance & KPIs', href: '#impact' },
    { label: 'Why VQ', href: '#why-us' },
    { label: 'Target Sectors', href: '#markets' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Institutional Credibility & Contact Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs font-medium py-2 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-400 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide border border-blue-500/20">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              SABS / SANS Quality Compliant
            </span>
            <span className="text-slate-700 hidden md:inline">•</span>
            <span className="text-slate-400 text-[11px]">
              Cape Town, Western Cape • Nationwide Delivery
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs flex-wrap justify-center sm:justify-end">
            <div className="flex items-center gap-2 text-[11px] text-slate-300">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>Yaaseen:</span>
              <a href="tel:0734656796" className="text-white hover:text-blue-400 font-semibold transition-colors">073 465 6796</a>
              <span className="text-slate-600">|</span>
              <span>Nabeel:</span>
              <a href="tel:0713310016" className="text-white hover:text-blue-400 font-semibold transition-colors">071 331 0016</a>
            </div>
            <span className="text-slate-700 hidden md:inline">•</span>
            <a 
              href={`mailto:${COMPANY_PROFILE.email}`} 
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors text-[11px]"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>{COMPANY_PROFILE.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <div 
        className={`transition-all duration-200 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/90 py-3 dark:bg-slate-900/95 dark:border-slate-800' 
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4 dark:bg-slate-900/90 dark:border-slate-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Identity */}
            <a href="#overview" className="group flex items-center transition-opacity hover:opacity-95" aria-label="Voyage Quest - Home">
              <VoyageQuestLogo 
                size="md" 
                subtitleText="Procurement & Project Management Solutions"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
              {navLinksBefore.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-2.5 xl:px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-all dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}

              {/* Other Services Dropdown Tab */}
              <div 
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnterDropdown}
                onMouseLeave={handleMouseLeaveDropdown}
              >
                <button
                  type="button"
                  onClick={() => setOtherServicesDropdownOpen(!otherServicesDropdownOpen)}
                  aria-expanded={otherServicesDropdownOpen}
                  aria-haspopup="true"
                  className={`px-2.5 xl:px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                    otherServicesDropdownOpen 
                      ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950/60' 
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800'
                  }`}
                >
                  <span>Other Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    otherServicesDropdownOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : 'text-slate-400'
                  }`} />
                </button>

                {/* Dropdown Menu Window */}
                <AnimatePresence>
                  {otherServicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 mt-1.5 w-[390px] bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200/90 dark:border-slate-800 p-2.5 z-50 overflow-hidden"
                    >
                      <div className="px-3 py-1.5 border-b border-slate-100 dark:border-slate-800 mb-1.5 flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          Specialized Ventures
                        </span>
                        <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-full">
                          Dedicated Portals
                        </span>
                      </div>

                      {/* Dropdown Item 1: Construction, Maintenance and Renovations */}
                      {/* Strictly kept on one line as requested by user */}
                      <button
                        type="button"
                        onClick={() => handleSelectOtherService('construction-maintenance-renovations')}
                        className="w-full text-left p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors group cursor-pointer border border-transparent hover:border-slate-200/80 dark:hover:border-slate-700/80 flex items-start gap-3"
                      >
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/80 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <HardHat className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-semibold text-xs text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors whitespace-nowrap block">
                              Construction, Maintenance and Renovations
                            </span>
                            <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-1.5 py-0.5 rounded border border-blue-200/60 dark:border-blue-800/60 shrink-0 whitespace-nowrap">
                              Sub-domain <ArrowUpRight className="w-2.5 h-2.5" />
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug mt-1 truncate">
                            Civil infrastructure, facilities upkeep & structural works
                          </p>
                        </div>
                      </button>

                      {/* Dropdown Item 2: Recycling Programs */}
                      <button
                        type="button"
                        onClick={() => handleSelectOtherService('recycling-programs')}
                        className="w-full text-left p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors group cursor-pointer border border-transparent hover:border-slate-200/80 dark:hover:border-slate-700/80 flex items-start gap-3"
                      >
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/80 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                          <Recycle className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-semibold text-xs text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors whitespace-nowrap block">
                              Recycling Programs
                            </span>
                            <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-1.5 py-0.5 rounded border border-emerald-200/60 dark:border-emerald-800/60 shrink-0 whitespace-nowrap">
                              Recycling Site <ArrowUpRight className="w-2.5 h-2.5" />
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug mt-1 truncate">
                            Municipal & commercial waste diversion and green sustainability
                          </p>
                        </div>
                      </button>

                      {/* Footer Tip */}
                      <div className="px-3 py-2 bg-slate-50 dark:bg-slate-850 rounded-xl mt-1 text-[10px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                        <span>Future dedicated Voyage Quest platforms</span>
                        <span className="text-blue-600 dark:text-blue-400 font-semibold cursor-pointer">Learn More →</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinksAfter.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-2.5 xl:px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-all dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Right CTA */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Theme Toggle Button */}
              <ThemeToggle id="btn-nav-theme-toggle" />

              <a
                id="btn-nav-contact"
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-950 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-xl transition-all shadow-sm active:scale-[0.98] cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400 group-hover:text-white transition-colors" />
                <span>Contact Us</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              {/* Mobile Quick Theme Toggle */}
              <ThemeToggle id="btn-nav-theme-toggle-mobile" />

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Animated Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              <div className="grid grid-cols-1 gap-1">
                {navLinksBefore.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}

                {/* Mobile Other Services Section */}
                <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden my-1 bg-slate-50/70 dark:bg-slate-850/60">
                  <button
                    type="button"
                    onClick={() => setMobileOtherServicesOpen(!mobileOtherServicesOpen)}
                    className="w-full px-3 py-2.5 text-sm font-semibold text-slate-900 dark:text-white flex items-center justify-between cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                      <span>Other Services</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      mobileOtherServicesOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''
                    }`} />
                  </button>

                  {mobileOtherServicesOpen && (
                    <div className="px-2 pb-2.5 space-y-1.5 border-t border-slate-200/80 dark:border-slate-800 pt-2">
                      {/* Tab 1: Construction, Maintenance and Renovations */}
                      <button
                        type="button"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          handleSelectOtherService('construction-maintenance-renovations');
                        }}
                        className="w-full text-left p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-750 flex items-center justify-between gap-2 shadow-2xs"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <HardHat className="w-4 h-4 text-blue-600 shrink-0" />
                          <span className="text-xs font-semibold text-slate-900 dark:text-white whitespace-nowrap truncate">
                            Construction, Maintenance and Renovations
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/80 px-1.5 py-0.5 rounded shrink-0">
                          Sub-domain <ArrowUpRight className="w-2.5 h-2.5" />
                        </span>
                      </button>

                      {/* Tab 2: Recycling Programs */}
                      <button
                        type="button"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          handleSelectOtherService('recycling-programs');
                        }}
                        className="w-full text-left p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-750 flex items-center justify-between gap-2 shadow-2xs"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <Recycle className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="text-xs font-semibold text-slate-900 dark:text-white whitespace-nowrap truncate">
                            Recycling Programs
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-1.5 py-0.5 rounded shrink-0">
                          Website <ArrowUpRight className="w-2.5 h-2.5" />
                        </span>
                      </button>
                    </div>
                  )}
                </div>

                {navLinksAfter.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Mobile Drawer Theme Switcher */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 mt-3">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Theme Appearance
                </span>
                <ThemeToggle id="btn-drawer-theme-toggle" showLabel={true} />
              </div>

              <div className="pt-3 mt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-slate-950 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-xl transition-colors shadow-sm"
                >
                  <Mail className="w-4 h-4 text-blue-400 group-hover:text-white" />
                  <span>Contact Procurement Desk</span>
                </a>

                <div className="pt-2 space-y-2 text-xs">
                  <div className="flex items-center justify-center gap-4 text-slate-600 dark:text-slate-300">
                    <a href="tel:0734656796" className="inline-flex items-center gap-1.5 hover:text-blue-600">
                      <Phone className="w-3.5 h-3.5 text-blue-500" />
                      <span>Yaaseen: 073 465 6796</span>
                    </a>
                    <span>•</span>
                    <a href="tel:0713310016" className="inline-flex items-center gap-1.5 hover:text-blue-600">
                      <Phone className="w-3.5 h-3.5 text-blue-500" />
                      <span>Nabeel: 071 331 0016</span>
                    </a>
                  </div>

                  <div className="text-center">
                    <a
                      href={`mailto:${COMPANY_PROFILE.email}`}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-blue-600"
                    >
                      <Mail className="w-3.5 h-3.5 text-blue-500" />
                      <span>{COMPANY_PROFILE.email}</span>
                    </a>
                  </div>

                  <div className="text-center text-[11px] text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>54 Roy road, Yorkshire Estate, Cape Town</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Other Services Detail & Future Sub-domain/Website Modal */}
      <OtherServiceModal 
        service={selectedOtherService}
        onClose={() => setSelectedOtherService(null)}
      />
    </header>
  );
};
