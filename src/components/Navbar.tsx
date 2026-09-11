import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Mail, 
  Phone,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_PROFILE } from '../data/companyData';
import { VoyageQuestLogo } from './VoyageQuestLogo';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Procurement', href: '#procurement' },
    { label: 'Project Management', href: '#project-management' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Main Clean Obsidian Navigation Bar */}
      <div 
        className={`transition-all duration-200 ${
          scrolled 
            ? 'bg-black/95 backdrop-blur-md shadow-2xl border-b border-white/15 py-3' 
            : 'bg-black/85 backdrop-blur-sm border-b border-white/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Identity */}
            <a href="#overview" className="group flex items-center transition-opacity hover:opacity-95" aria-label="Voyage Quest - Home">
              <VoyageQuestLogo 
                size="md" 
                align="center"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Right Action */}
            <div className="hidden sm:flex items-center gap-4">
              <div className="hidden xl:flex items-center gap-2 text-xs text-zinc-400">
                <Phone className="w-3.5 h-3.5 text-[#BF953F]" />
                <a href="tel:0734656796" className="hover:text-[#BF953F] transition-colors">073 465 6796</a>
              </div>

              <a
                id="btn-nav-contact"
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#0a0a0c] bg-[#BF953F] hover:bg-[#d4af37] rounded-xl transition-all shadow-md shadow-[#BF953F]/20 active:scale-[0.98] cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Clean Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="px-5 pt-3 pb-6 space-y-2">
              <div className="grid grid-cols-1 gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 text-base font-medium text-zinc-200 hover:bg-white/5 hover:text-[#BF953F] rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="pt-4 mt-2 border-t border-white/10 space-y-3">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-[#0a0a0c] bg-[#BF953F] hover:bg-[#d4af37] rounded-xl transition-colors shadow-md shadow-[#BF953F]/20"
                >
                  <Mail className="w-4 h-4 text-[#0a0a0c]" />
                  <span>Contact Us</span>
                </a>

                <div className="pt-2 text-center text-xs text-zinc-400 space-y-1">
                  <p>Yaaseen: <a href="tel:0734656796" className="text-white hover:text-[#BF953F]">073 465 6796</a> | Nabeel: <a href="tel:0713310016" className="text-white hover:text-[#BF953F]">071 331 0016</a></p>
                  <p className="text-zinc-500">info.voyagequest@gmail.com • Cape Town, South Africa</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
