import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustCredibility } from './components/TrustCredibility';
import { OfferingsSection } from './components/OfferingsSection';
import { EpwpSpecialization } from './components/EpwpSpecialization';
import { CompanyImpact } from './components/CompanyImpact';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TargetMarkets } from './components/TargetMarkets';
import { ClientTestimonials } from './components/ClientTestimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RevealOnScroll } from './components/RevealOnScroll';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white font-sans antialiased">
        {/* Navigation */}
        <Navbar />

        {/* Main Content Sections with Reveal-On-Scroll Fluid Transitions */}
        <main className="flex-1">
          <Hero />

          <RevealOnScroll yOffset={24} duration={0.65} viewportAmount={0.08}>
            <TrustCredibility />
          </RevealOnScroll>

          <RevealOnScroll yOffset={32} duration={0.7} viewportAmount={0.06}>
            <OfferingsSection />
          </RevealOnScroll>

          <RevealOnScroll yOffset={32} duration={0.7} viewportAmount={0.06}>
            <EpwpSpecialization />
          </RevealOnScroll>

          <RevealOnScroll yOffset={32} duration={0.7} viewportAmount={0.06}>
            <CompanyImpact />
          </RevealOnScroll>

          <RevealOnScroll yOffset={32} duration={0.7} viewportAmount={0.06}>
            <WhyChooseUs />
          </RevealOnScroll>

          <RevealOnScroll yOffset={32} duration={0.7} viewportAmount={0.06}>
            <TargetMarkets />
          </RevealOnScroll>

          <RevealOnScroll yOffset={32} duration={0.7} viewportAmount={0.06}>
            <ClientTestimonials />
          </RevealOnScroll>

          <RevealOnScroll yOffset={32} duration={0.7} viewportAmount={0.06}>
            <ContactSection />
          </RevealOnScroll>
        </main>

        {/* Corporate Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
