import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoreServices } from './components/CoreServices';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-black text-white flex flex-col selection:bg-[#BF953F] selection:text-black font-sans antialiased">
        {/* Streamlined Obsidian Header */}
        <Navbar />

        {/* Clean, Focused Core Content */}
        <main className="flex-1 bg-black">
          <Hero />
          <CoreServices />
          <ContactSection />
        </main>

        {/* Cohesive Black & Gold Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
