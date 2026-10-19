/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { QrCode, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { AndroidPhoneMockup } from './AndroidPhoneMockup';

interface HeroSectionProps {
  onOpenDownloadModal: () => void;
  onOpenQrModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenDownloadModal,
  onOpenQrModal,
}) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-10 md:pt-8 md:pb-12 lg:pt-8 lg:pb-10 bg-grid-subtle hairline-border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Copywriting & Conversion CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5"
          >
            {/* Unboxed Metadata (Strict Zero-Pill) */}
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="text-[#00796b] font-semibold">ANDROID NATIVE</span>
              <span aria-hidden="true">·</span>
              <span>GOOGLE PLAY STORE</span>
              <span aria-hidden="true">·</span>
              <span>VERSIÓN 2.4</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] text-balance">
              Movilidad privada, tours y envíos con estándar superior.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              Viaja por la ciudad o recorre rutas turísticas con vehículos seleccionados,
              conductores verificados, validación por código PIN y tarifas negociables
              sin recargos ocultos.
            </p>

            {/* Android Conversion Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Google Play Download Button */}
              <button
                type="button"
                onClick={onOpenDownloadModal}
                className="hero-play-button group relative flex items-center justify-center sm:justify-start gap-3 px-5 py-3.5 bg-white hover:bg-zinc-100 text-black rounded-lg transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-[#00796b]"
              >
                {/* Official Google Play Store Icon (SVG) */}
                <svg
                  className="w-6 h-6 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.6 2.3C3.2 2.7 3 3.3 3 4.1v15.8c0 .8.2 1.4.6 1.8l.1.1 9-9v-.2L3.6 2.3z"
                    fill="#2196F3"
                  />
                  <path
                    d="M16.2 15.6l-3.5-3.5v-.2l3.5-3.5.1.1 4.1 2.3c1.2.7 1.2 1.8 0 2.5l-4.2 2.3z"
                    fill="#FFC107"
                  />
                  <path
                    d="M12.7 12.1L3.6 21.2c.5.5 1.3.6 2.2.1l10.5-5.9-3.6-3.3z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M12.7 11.9l3.6-3.3L5.8 2.7C4.9 2.2 4.1 2.3 3.6 2.8l9.1 9.1z"
                    fill="#F44336"
                  />
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] uppercase font-mono tracking-wider text-zinc-600 leading-none">
                    Disponible en
                  </span>
                  <span className="block text-sm font-bold tracking-tight text-black leading-tight">
                    Google Play Store
                  </span>
                </div>
              </button>

              {/* QR Code Scan Trigger Button */}
              <button
                type="button"
                onClick={onOpenQrModal}
                className="flex items-center justify-center gap-2.5 px-5 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hairline-border rounded-lg transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-zinc-600"
              >
                <QrCode className="w-4 h-4 text-[#00796b]" />
                <span>Escanear QR en Celular</span>
              </button>
            </div>

            {/* Trust and Technical Markers */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-white/5 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00796b] shrink-0" />
                <span>Google Play Protect</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00796b] shrink-0" />
                <span>Android 8.0 o superior</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[#00796b] font-bold">42 MB</span>
                <span>Instalación ligera</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center -mt-2 lg:-mt-6"
          >
            <AndroidPhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
