/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { SecurityArchitecture } from './components/SecurityArchitecture';
import { ToursSection } from './components/ToursSection';
import { TariffEstimator } from './components/TariffEstimator';
import { AndroidSpecs } from './components/AndroidSpecs';
import { DownloadModal } from './components/DownloadModal';
import { Footer } from './components/Footer';
import { Download, Smartphone } from 'lucide-react';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState<boolean>(false);
  const [selectedTour, setSelectedTour] = useState<string | undefined>(undefined);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('royen_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
      root.setAttribute('data-theme', 'light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    }
    localStorage.setItem('royen_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Smooth scroll indicator progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleOpenDownload = (tourName?: string) => {
    setSelectedTour(tourName);
    setDownloadModalOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    const el = document.getElementById('simulador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen ${
        theme === 'light' ? 'bg-[#f8fafc] text-[#0f172a]' : 'bg-[#09090b] text-[#e4e4e7]'
      } flex flex-col font-sans selection:bg-teal-700 selection:text-white transition-colors duration-200`}
    >
      {/* Precision Scroll Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#00796b] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Top Bar Navigation with Theme Switcher */}
      <Navbar
        onOpenDownloadModal={() => handleOpenDownload()}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onOpenDownloadModal={() => handleOpenDownload()}
          onOpenQrModal={() => handleOpenDownload()}
        />

        {/* Services & Capabilities Bento Grid */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Security Architecture & PIN Verification */}
        <SecurityArchitecture />

        {/* Regional Tours & Travel Routes */}
        <ToursSection onSelectTour={(tour) => handleOpenDownload(tour)} />

        {/* Interactive Tariff Bargaining Simulator */}
        <TariffEstimator onOpenDownloadModal={() => handleOpenDownload()} />

        {/* Technical Android Specs */}
        <AndroidSpecs onOpenDownloadModal={() => handleOpenDownload()} />
      </main>

      {/* Footer */}
      <Footer onOpenDownloadModal={() => handleOpenDownload()} />

      {/* Persistent Mobile Bottom CTA (complies with 15% sticky cap) */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-30 p-3 ${
          theme === 'light' ? 'bg-white/95' : 'bg-[#09090b]/95'
        } backdrop-blur-md hairline-border-t transition-colors`}
      >
        <button
          type="button"
          onClick={() => handleOpenDownload()}
          className="w-full py-3 px-4 bg-[#00796b] hover:bg-[#00695c] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
        >
          <Smartphone className="w-4 h-4" />
          <span>Descargar Royen VVIP en Play Store</span>
        </button>
      </div>

      {/* Download and QR Scanner Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        initialTourName={selectedTour}
      />
    </div>
  );
}
