/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  theme,
  onToggle,
  className = '',
}) => {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      role="switch"
      aria-checked={!isDark}
      aria-label={isDark ? 'Cambiar a modo día' : 'Cambiar a modo noche'}
      title={isDark ? 'Cambiar a modo día' : 'Cambiar a modo noche'}
      className={`relative inline-flex items-center w-14 h-7 rounded-full p-0.5 cursor-pointer select-none transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#00796b] focus:ring-offset-2 ${
        isDark
          ? 'bg-[#18181b] border border-white/20 focus:ring-offset-[#09090b]'
          : 'bg-[#00796b] border border-[#004d40] shadow-inner focus:ring-offset-white'
      } ${className}`}
    >
      {/* Background Day Decorative Elements: Fluffy Cloud */}
      <motion.div
        initial={false}
        animate={{
          opacity: isDark ? 0 : 1,
          x: isDark ? -10 : 0,
          scale: isDark ? 0.7 : 1,
        }}
        transition={{ duration: 0.25 }}
        className="absolute left-1.5 bottom-1 pointer-events-none text-white z-0"
      >
        {/* Soft rounded cloud SVG shape */}
        <svg
          viewBox="0 0 24 16"
          className="w-5 h-3.5 fill-white drop-shadow-sm"
          fill="currentColor"
        >
          <path d="M19.35 6.04C18.67 2.59 15.64 0 12 0 9.11 0 6.6 1.64 5.35 4.04 2.34 4.36 0 6.91 0 10c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      </motion.div>

      {/* Background Night Decorative Elements: Twinkling Stars */}
      <motion.div
        initial={false}
        animate={{
          opacity: isDark ? 1 : 0,
          x: isDark ? 0 : 10,
          scale: isDark ? 1 : 0.6,
        }}
        transition={{ duration: 0.25 }}
        className="absolute right-2 top-1.5 bottom-1 pointer-events-none flex flex-col justify-between py-0.5 z-0"
      >
        {/* Tiny star 1 */}
        <span className="w-1 h-1 rounded-full bg-amber-200/90 animate-pulse shadow-[0_0_4px_rgba(251,191,36,0.8)] self-end" />
        {/* Tiny star 2 */}
        <span className="w-0.5 h-0.5 rounded-full bg-white/80 self-center" />
        {/* Tiny star 3 */}
        <span className="w-1 h-1 rounded-full bg-cyan-200/90 shadow-[0_0_3px_rgba(165,243,252,0.8)] self-start" />
      </motion.div>

      {/* Sliding Switch Thumb: Sun in Day mode, Moon in Night mode */}
      <motion.div
        layout
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
        animate={{
          x: isDark ? 2 : 28,
        }}
        className={`relative z-10 w-5 h-5 rounded-full flex items-center justify-center shadow-md transition-colors ${
          isDark
            ? 'bg-slate-200 text-slate-700 shadow-[0_0_8px_rgba(226,232,240,0.6)]'
            : 'bg-gradient-to-tr from-amber-400 to-yellow-300 text-amber-900 shadow-[0_0_10px_rgba(251,191,36,0.9)]'
        }`}
      >
        {isDark ? (
          /* Moon icon/craters */
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5 fill-slate-700 text-slate-700"
            fill="currentColor"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          /* Glowing warm sun center */
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/30 ring-2 ring-amber-500/20" />
        )}
      </motion.div>
    </button>
  );
};
