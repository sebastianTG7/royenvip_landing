/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Download } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenDownloadModal: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDownloadModal,
  theme,
  onToggleTheme,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#09090b]/90 backdrop-blur-md hairline-border-b transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between gap-4 md:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
        >
          ROYEN VVIP
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a
            href="#servicios"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Servicios
          </a>
          <a
            href="#seguridad"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Seguridad
          </a>
          <a
            href="#tours"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Tours Regionales
          </a>
          <a
            href="#simulador"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Tarifas
          </a>
          <a
            href="#especificaciones"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Android
          </a>
        </nav>

        {/* Zone 3: Theme Toggle Switch & Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <button
            type="button"
            onClick={onOpenDownloadModal}
            className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 text-xs font-semibold text-white bg-[#00796b] hover:bg-[#00695c] rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00796b] focus:ring-offset-2 focus:ring-offset-[#09090b]"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Descargar en Android</span>
            <span className="sm:hidden">Descargar</span>
          </button>
        </div>
      </div>
    </header>
  );
};
