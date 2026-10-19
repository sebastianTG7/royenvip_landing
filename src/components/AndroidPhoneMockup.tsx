/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  Check,
  ChevronRight,
  Clock,
  Compass,
  Crosshair,
  MapPin,
  MinusCircle,
  PlusCircle,
  X,
  ArrowUpDown,
  Map as MapIcon,
  Car,
  User,
  Building2,
  History,
  Truck,
  Mountain,
  Bell,
  Shield,
  Settings,
  LogOut,
  Menu,
} from 'lucide-react';

type ModeType = 'trip' | 'tour' | 'delivery' | 'driver';

export const AndroidPhoneMockup: React.FC = () => {
  const [activeMode, setActiveMode] = useState<ModeType>('trip');
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [passengers, setPassengers] = useState<number>(2);
  const [tourTimeType, setTourTimeType] = useState<'hours' | 'days'>('hours');
  const [tourHours, setTourHours] = useState<number>(4);
  const [deliveryType, setDeliveryType] = useState<'doc' | 'medium' | 'box'>('doc');
  const [driverOnline, setDriverOnline] = useState<boolean>(true);

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleSelectModeFromDrawer = (mode: ModeType) => {
    setActiveMode(mode);
    setIsDrawerOpen(false);
  };

  return (
    <div className="relative mx-auto w-full max-w-[325px] sm:max-w-[345px] phone-mockup-screen">
      {/* Phone chassis */}
      <div className="relative rounded-[42px] bg-[#121215] p-2 sm:p-2.5 shadow-2xl ring-1 ring-white/10">
        {/* Antenna band accents */}
        <div className="absolute -left-[2px] top-24 h-7 w-[2px] bg-zinc-700/60 rounded-l" />
        <div className="absolute -right-[2px] top-20 h-10 w-[2px] bg-zinc-700/60 rounded-r" />

        {/* Outer screen bezel */}
        <div className="relative overflow-hidden rounded-[34px] bg-white text-zinc-900 hairline-border select-none shadow-inner">
          {/* Android status bar */}
          <div className="flex items-center justify-between px-4 pt-2 pb-0.5 text-[10.5px] font-sans font-medium bg-white text-zinc-800 z-30 relative">
            <span>09:41</span>
            {/* Punch-hole camera */}
            <div className="h-3 w-3 rounded-full bg-black ring-1 ring-zinc-300" />
            <div className="flex items-center gap-1.5 text-[10px]">
              <span className="font-mono">5G</span>
              <span>·</span>
              <span>100%</span>
            </div>
          </div>

          {/* Cinta de opciones superior (Solo 4 servicios, sin botón de Menú) */}
          <div className="px-1.5 py-1 bg-zinc-900 border-b border-zinc-800 grid grid-cols-4 gap-1 text-[10px] z-30 relative">
            <button
              type="button"
              onClick={() => {
                setActiveMode('trip');
                setIsDrawerOpen(false);
              }}
              className={`py-1 rounded text-center font-medium transition-all ${
                activeMode === 'trip'
                  ? 'bg-white text-black shadow-sm font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Viajes
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveMode('tour');
                setIsDrawerOpen(false);
              }}
              className={`py-1 rounded text-center font-medium transition-all ${
                activeMode === 'tour'
                  ? 'bg-white text-black shadow-sm font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Tours
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveMode('delivery');
                setIsDrawerOpen(false);
              }}
              className={`py-1 rounded text-center font-medium transition-all ${
                activeMode === 'delivery'
                  ? 'bg-white text-black shadow-sm font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Entregas
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveMode('driver');
                setIsDrawerOpen(false);
              }}
              className={`py-1 rounded text-center font-medium transition-all ${
                activeMode === 'driver'
                  ? 'bg-white text-black shadow-sm font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Conductor
            </button>
          </div>

          {/* Interactive Screen Display Area - Calibrated height */}
          <div className="relative h-[465px] sm:h-[485px] bg-white overflow-hidden flex flex-col justify-between">
            {/* ---------------------------------------------------------------- */}
            {/* OVERLAY: MENÚ LATERAL / DRAWER */}
            {/* ---------------------------------------------------------------- */}
            <AnimatePresence>
              {isDrawerOpen && (
                <div className="absolute inset-0 z-50 flex">
                  {/* Backdrop oscuro con blur ligero */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={handleCloseDrawer}
                    className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"
                  />

                  {/* Panel Drawer Blanco que se desplaza desde la izquierda */}
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                    className="relative w-[84%] bg-white h-full p-3.5 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto no-scrollbar"
                  >
                    <div>
                      {/* Cabecera de perfil del Pasajero */}
                      <div className="flex items-center gap-2.5 pt-0.5 pb-2.5 border-b border-zinc-100">
                        <div className="w-10 h-10 rounded-full bg-zinc-200/80 flex items-center justify-center text-zinc-600 shrink-0">
                          <User className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-zinc-900 leading-tight">
                            Pasajero
                          </div>
                          <div className="text-[11px] text-zinc-500">Amarilis</div>
                        </div>
                      </div>

                      {/* Lista de opciones del menú */}
                      <nav className="py-1.5 space-y-0.5">
                        <div className="flex items-center gap-2.5 py-1.5 px-1 text-zinc-800 hover:bg-zinc-50 rounded-lg cursor-pointer">
                          <User className="w-3.5 h-3.5 text-zinc-700" />
                          <span className="text-[11px] font-medium">Mi perfil</span>
                        </div>

                        <div className="flex items-center justify-between py-1.5 px-1 text-zinc-800 hover:bg-zinc-50 rounded-lg cursor-pointer">
                          <div className="flex items-center gap-2.5">
                            <Building2 className="w-3.5 h-3.5 text-zinc-700" />
                            <span className="text-[11px] font-medium">Ciudad</span>
                          </div>
                          <span className="text-[10px] text-zinc-400">Amarilis</span>
                        </div>

                        <div className="flex items-center gap-2.5 py-1.5 px-1 text-zinc-800 hover:bg-zinc-50 rounded-lg cursor-pointer">
                          <History className="w-3.5 h-3.5 text-zinc-700" />
                          <span className="text-[11px] font-medium">Historial de solicitudes</span>
                        </div>

                        <div
                          onClick={() => handleSelectModeFromDrawer('delivery')}
                          className="flex items-center gap-2.5 py-1.5 px-1 text-zinc-800 hover:bg-zinc-50 rounded-lg cursor-pointer"
                        >
                          <Truck className="w-3.5 h-3.5 text-zinc-700" />
                          <span className="text-[11px] font-medium">Entregas</span>
                        </div>

                        <div
                          onClick={() => handleSelectModeFromDrawer('tour')}
                          className="flex items-center gap-2.5 py-1.5 px-1 text-zinc-800 hover:bg-zinc-50 rounded-lg cursor-pointer"
                        >
                          <Mountain className="w-3.5 h-3.5 text-zinc-700" />
                          <span className="text-[11px] font-medium">Tours</span>
                        </div>

                        <div className="flex items-center gap-2.5 py-1.5 px-1 text-zinc-800 hover:bg-zinc-50 rounded-lg cursor-pointer">
                          <Bell className="w-3.5 h-3.5 text-zinc-700" />
                          <span className="text-[11px] font-medium">Notificaciones</span>
                        </div>

                        <div className="flex items-center gap-2.5 py-1.5 px-1 text-zinc-800 hover:bg-zinc-50 rounded-lg cursor-pointer">
                          <Shield className="w-3.5 h-3.5 text-zinc-700" />
                          <span className="text-[11px] font-medium">Seguridad</span>
                        </div>

                        <div className="flex items-center gap-2.5 py-1.5 px-1 text-zinc-800 hover:bg-zinc-50 rounded-lg cursor-pointer">
                          <Settings className="w-3.5 h-3.5 text-zinc-700" />
                          <span className="text-[11px] font-medium">Configuración</span>
                        </div>

                        <div className="pt-1 pb-0.5 border-t border-zinc-100">
                          <div
                            onClick={handleCloseDrawer}
                            className="flex items-center gap-2.5 py-1.5 px-1 text-red-500 hover:bg-red-50 rounded-lg cursor-pointer"
                          >
                            <LogOut className="w-3.5 h-3.5" />
                            <span className="text-[11px] font-semibold">Cerrar sesión</span>
                          </div>
                        </div>
                      </nav>
                    </div>

                    {/* Botón inferior: Modo Conductor */}
                    <div className="pt-1.5">
                      <button
                        type="button"
                        onClick={() => handleSelectModeFromDrawer('driver')}
                        className="w-full py-2 px-3 rounded-xl border border-zinc-900 text-zinc-900 font-bold text-[11px] flex items-center justify-center gap-1.5 hover:bg-zinc-50 active:scale-98 transition-all"
                      >
                        <Car className="w-3.5 h-3.5" />
                        <span>Modo Conductor</span>
                      </button>
                    </div>
                  </motion.div>

                  {/* Botón flotante para cerrar en el área derecha */}
                  <div
                    onClick={handleCloseDrawer}
                    className="flex-1 h-full cursor-pointer p-2 flex justify-end items-start z-10"
                  >
                    <button
                      type="button"
                      onClick={handleCloseDrawer}
                      className="w-7 h-7 rounded-full bg-white/90 backdrop-blur text-zinc-800 shadow-md flex items-center justify-center hover:bg-white transition-colors"
                      title="Cerrar menú"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </AnimatePresence>

            {/* Contenido principal de la pantalla */}
            <AnimatePresence mode="wait">
              {/* ---------------------------------------------------------------- */}
              {/* VIEW 1: VIAJES / PASAJERO (Captura 3) */}
              {/* ---------------------------------------------------------------- */}
              {activeMode === 'trip' && (
                <motion.div
                  key="trip"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="relative h-full flex flex-col justify-between"
                >
                  {/* Top Map View representing Huánuco */}
                  <div className="relative h-[180px] sm:h-[195px] w-full bg-[#dbe4ee] overflow-hidden">
                    {/* SVG Vector Map of Huánuco streets */}
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 360 240"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="360" height="240" fill="#e9edf2" />
                      <path d="M 0 40 L 140 0 L 220 30 L 120 180 L 0 160 Z" fill="#f4f6f9" />
                      <path d="M 160 30 L 320 0 L 360 80 L 220 120 Z" fill="#f1f5f9" />
                      <path d="M 0 170 L 180 180 L 120 240 L 0 240 Z" fill="#f4f6f9" />

                      {/* Huallaga River curving on right */}
                      <path
                        d="M 285 -10 C 275 60, 310 120, 260 170 C 230 200, 220 220, 210 250"
                        stroke="#99c6eb"
                        strokeWidth="24"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 285 -10 C 275 60, 310 120, 260 170 C 230 200, 220 220, 210 250"
                        stroke="#80b8e6"
                        strokeWidth="18"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <text
                        x="280"
                        y="85"
                        fill="#4a7c9d"
                        fontSize="7"
                        fontFamily="sans-serif"
                        fontWeight="bold"
                        opacity="0.65"
                        transform="rotate(75 280,85)"
                      >
                        Río Huallaga
                      </text>

                      {/* Street Network (Huánuco grid) */}
                      <path
                        d="M -20 120 L 380 70 M -20 175 L 380 125 M 30 0 L 170 250 M 95 -10 L 235 240 M 160 -10 L 300 240 M 230 0 L 350 220"
                        stroke="#ffffff"
                        strokeWidth="11"
                        strokeLinecap="round"
                      />
                      <path
                        d="M -20 120 L 380 70 M -20 175 L 380 125 M 30 0 L 170 250 M 95 -10 L 235 240 M 160 -10 L 300 240 M 230 0 L 350 220"
                        stroke="#cbd5e1"
                        strokeWidth="7"
                        strokeLinecap="round"
                      />

                      {/* Major Street Highlights */}
                      <path
                        d="M 40 230 L 165 10 M 10 135 L 360 85"
                        stroke="#ffffff"
                        strokeWidth="8"
                      />

                      {/* Parks / Landmarks */}
                      <rect
                        x="195"
                        y="45"
                        width="28"
                        height="24"
                        rx="3"
                        fill="#bbf7d0"
                        stroke="#86efac"
                        strokeWidth="1"
                      />
                      <text x="180" y="40" fill="#15803d" fontSize="7.5" fontWeight="bold">
                        Plaza Mayor de Huánuco
                      </text>

                      {/* HUANUCO PLAZA */}
                      <circle cx="150" cy="85" r="7" fill="#0284c7" />
                      <rect x="146" y="81" width="8" height="8" rx="1" fill="#ffffff" />
                      <text x="100" y="82" fill="#0369a1" fontSize="7" fontWeight="bold">
                        HUANUCO PLAZA
                      </text>

                      {/* San Sebastián area */}
                      <circle cx="120" cy="148" r="4.5" fill="#3b82f6" opacity="0.3" />
                      <text x="50" y="152" fill="#1d4ed8" fontSize="7" fontWeight="bold">
                        San Sebastián
                      </text>

                      {/* Route Polyline (San Sebastián -> Plaza Mayor) */}
                      <path
                        d="M 125 145 L 140 142 L 126 172 L 152 168 L 222 55"
                        stroke="#1d4ed8"
                        strokeWidth="4.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Origin Pin */}
                      <g transform="translate(120, 140)">
                        <circle cx="5" cy="5" r="6" fill="#2563eb" />
                        <circle cx="5" cy="5" r="2.5" fill="#ffffff" />
                      </g>

                      {/* Destination Pin */}
                      <g transform="translate(216, 42)">
                        <path
                          d="M 6 0 C 2.7 0 0 2.7 0 6 C 0 10.5 6 16 6 16 C 6 16 12 10.5 12 6 C 12 2.7 9.3 0 6 0 Z"
                          fill="#ef4444"
                        />
                        <circle cx="6" cy="6" r="2.5" fill="#ffffff" />
                      </g>
                    </svg>

                    {/* Top Floating Pill */}
                    <div className="absolute top-2 inset-x-0 flex justify-center px-4 pointer-events-none">
                      <div className="bg-[#18181b]/90 text-white text-[9px] font-medium px-2.5 py-1 rounded-full shadow-lg backdrop-blur-sm truncate border border-white/10">
                        Toca el mapa o arrastra el pin para destino
                      </div>
                    </div>

                    {/* Icono de Menú Hamburguesa */}
                    <button
                      type="button"
                      onClick={handleOpenDrawer}
                      className="absolute top-2 left-2 w-7 h-7 rounded-lg bg-white text-zinc-800 shadow-md flex items-center justify-center hover:bg-zinc-50 border border-zinc-200/60 active:scale-95 transition-transform"
                      title="Abrir menú lateral"
                    >
                      <Menu className="w-3.5 h-3.5 text-zinc-800" />
                    </button>

                    {/* Google Logo */}
                    <div className="absolute bottom-1 left-2 text-[10px] font-bold tracking-tight opacity-80 select-none">
                      <span className="text-[#4285F4]">G</span>
                      <span className="text-[#EA4335]">o</span>
                      <span className="text-[#FBBC05]">o</span>
                      <span className="text-[#4285F4]">g</span>
                      <span className="text-[#34A853]">l</span>
                      <span className="text-[#EA4335]">e</span>
                    </div>

                    {/* Floating Compass Button */}
                    <button
                      type="button"
                      className="absolute bottom-1.5 right-2 w-6 h-6 rounded-full bg-white text-zinc-700 shadow-md flex items-center justify-center border border-zinc-200 hover:bg-zinc-50 active:scale-95 transition-transform"
                      title="Centrar ubicación"
                    >
                      <Compass className="w-3.5 h-3.5 text-zinc-700" />
                    </button>
                  </div>

                  {/* Bottom Sheet - Exact Flutter Card */}
                  <div className="flex-1 bg-white rounded-t-2xl shadow-2xl px-3 pt-1.5 pb-2 flex flex-col justify-between border-t border-zinc-100 overflow-y-auto no-scrollbar">
                    <div>
                      {/* Pull Handle */}
                      <div className="w-7 h-1 bg-zinc-300 rounded-full mx-auto mb-2" />

                      {/* Route Inputs with Swap Icon */}
                      <div className="relative flex items-center gap-1.5">
                        <div className="flex-1 space-y-1.5">
                          {/* Origin Input */}
                          <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg border border-zinc-300/80 bg-white">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 shrink-0" />
                            <span className="text-[10.5px] font-medium text-zinc-800 truncate flex-1">
                              San Sebastián Huanuco
                            </span>
                            <X className="w-3 h-3 text-zinc-400 shrink-0 cursor-pointer" />
                          </div>

                          {/* Destination Input */}
                          <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg border border-teal-600 bg-white">
                            <span className="w-1.5 h-1.5 rounded-sm bg-teal-600 shrink-0" />
                            <span className="text-[10.5px] font-medium text-zinc-800 truncate flex-1">
                              Plaza de Armas de Huánuco
                            </span>
                            <X className="w-3 h-3 text-zinc-400 shrink-0 cursor-pointer" />
                          </div>
                        </div>

                        {/* Swap Button */}
                        <button
                          type="button"
                          className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-600 hover:bg-zinc-100 shrink-0 transition-colors"
                          title="Invertir ruta"
                        >
                          <ArrowUpDown className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Tu ubicación actual Quick Row */}
                      <div className="mt-1.5 pt-1.5 border-t border-zinc-100 flex items-center gap-2 cursor-pointer hover:bg-zinc-50 p-1 rounded-lg transition-colors">
                        <div className="w-5 h-5 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                          <Crosshair className="w-3 h-3" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[10.5px] font-bold text-zinc-800">
                            Tu ubicación actual
                          </div>
                          <div className="text-[9px] text-zinc-500 truncate">
                            Usar la posición GPS del dispositivo
                          </div>
                        </div>
                      </div>

                      {/* LUGARES FRECUENTES */}
                      <div className="mt-1.5">
                        <div className="text-[9px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                          Lugares Frecuentes
                        </div>

                        <div className="space-y-1">
                          <div className="flex items-center gap-2 py-0.5 px-1 rounded-md hover:bg-zinc-50 cursor-pointer transition-colors">
                            <div className="w-4 h-4 rounded-full bg-zinc-100 text-zinc-500 flex items-center justify-center shrink-0">
                              <Clock className="w-2.5 h-2.5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[10px] font-semibold text-zinc-800 truncate">
                                Plaza de Armas de Huánuco
                              </div>
                              <div className="text-[8.5px] text-zinc-400 truncate">
                                Jr. Dos de Mayo, Huánuco
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 py-0.5 px-1 rounded-md hover:bg-zinc-50 cursor-pointer transition-colors">
                            <div className="w-4 h-4 rounded-full bg-zinc-100 text-zinc-500 flex items-center justify-center shrink-0">
                              <Clock className="w-2.5 h-2.5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[10px] font-semibold text-zinc-800 truncate">
                                Terminal Ambo
                              </div>
                              <div className="text-[8.5px] text-zinc-400 truncate">
                                Av. Simón Bolívar, Huánuco
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA Button: Confirmar ruta • S/ 5.60 */}
                    <div className="pt-1.5">
                      <button
                        type="button"
                        onClick={handleOpenDrawer}
                        className="w-full py-2 px-3 bg-black hover:bg-zinc-900 active:scale-[0.99] text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5"
                      >
                        <div className="w-3.5 h-3.5 rounded-full border border-white flex items-center justify-center">
                          <Check className="w-2 h-2 text-white" />
                        </div>
                        <span>Confirmar ruta • S/ 5.60</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ---------------------------------------------------------------- */}
              {/* VIEW 2: TOURS REGIONALES (Captura 2) */}
              {/* ---------------------------------------------------------------- */}
              {activeMode === 'tour' && (
                <motion.div
                  key="tour"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.18 }}
                  className="h-full bg-[#fafafa] p-3 flex flex-col justify-between overflow-y-auto no-scrollbar"
                >
                  <div className="space-y-2.5">
                    {/* Top Bar with Back Arrow */}
                    <div className="flex items-center justify-between pt-0.5">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setActiveMode('trip')}
                          className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-800 hover:bg-zinc-200 transition-colors"
                          title="Volver"
                        >
                          <ArrowLeft className="w-4 h-4" />
                        </button>
                        <h2 className="text-sm font-bold text-zinc-900">
                          Tours Regionales
                        </h2>
                      </div>

                      {/* Botón de Menú lateral */}
                      <button
                        type="button"
                        onClick={handleOpenDrawer}
                        className="w-7 h-7 rounded-lg bg-white border border-zinc-200 text-zinc-700 flex items-center justify-center hover:bg-zinc-50 transition-colors"
                        title="Abrir menú"
                      >
                        <Menu className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Subtitle text */}
                    <p className="text-[10.5px] text-zinc-500 leading-snug">
                      Cotiza tu tour a Tingo María, Kotosh, Tomayquichua, Huánuco Pampa y más atractivos de la región.
                    </p>

                    {/* Card: Ruta del Tour */}
                    <div className="rounded-xl bg-white p-2.5 shadow-sm border border-zinc-200/70 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-zinc-900">Ruta del Tour</span>
                        <button
                          type="button"
                          className="flex items-center gap-1 text-[10px] font-semibold text-sky-600 hover:text-sky-700"
                        >
                          <MapIcon className="w-3 h-3" />
                          <span>Ver en mapa</span>
                        </button>
                      </div>

                      {/* Origin input container */}
                      <div className="flex items-center justify-between p-2 rounded-lg border border-zinc-200 bg-zinc-50/50 hover:bg-zinc-100/60 cursor-pointer transition-colors">
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="w-3 h-3 rounded-full border-2 border-sky-500 shrink-0" />
                          <span className="text-[10.5px] text-zinc-400 truncate">
                            Selecciona tu punto de partida
                          </span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      </div>

                      {/* Destination input container */}
                      <div className="flex items-center justify-between p-2 rounded-lg border border-zinc-200 bg-zinc-50/50 hover:bg-zinc-100/60 cursor-pointer transition-colors">
                        <div className="flex items-center gap-2 min-w-0">
                          <MapPin className="w-3 h-3 text-red-500 fill-red-500 shrink-0" />
                          <span className="text-[10.5px] text-zinc-400 truncate">
                            Selecciona el destino turístico
                          </span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      </div>
                    </div>

                    {/* Section 3: ¿Cuántas personas son? */}
                    <div className="pt-0.5">
                      <div className="text-[11px] font-bold text-zinc-900 mb-1.5">
                        3. ¿Cuántas personas son?
                      </div>
                      <div className="flex items-center gap-2.5">
                        <button
                          type="button"
                          onClick={() => setPassengers(Math.max(1, passengers - 1))}
                          className="text-zinc-700 hover:text-black transition-colors"
                        >
                          <MinusCircle className="w-5 h-5" />
                        </button>
                        <span className="text-xs font-bold text-zinc-900 w-4 text-center">
                          {passengers}
                        </span>
                        <button
                          type="button"
                          onClick={() => setPassengers(Math.min(10, passengers + 1))}
                          className="text-zinc-700 hover:text-black transition-colors"
                        >
                          <PlusCircle className="w-5 h-5" />
                        </button>
                        <span className="text-[11px] text-zinc-500">pasajeros</span>
                      </div>
                    </div>

                    {/* Section 4: ¿Tiempo estimado del tour? */}
                    <div className="pt-0.5">
                      <div className="text-[11px] font-bold text-zinc-900 mb-1.5">
                        4. ¿Tiempo estimado del tour?
                      </div>

                      {/* Toggle tabs: Horas / Días */}
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setTourTimeType('hours')}
                          className={`px-3 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition-all ${
                            tourTimeType === 'hours'
                              ? 'bg-black text-white shadow-sm'
                              : 'bg-white text-zinc-700 border border-zinc-200'
                          }`}
                        >
                          {tourTimeType === 'hours' && <Check className="w-3 h-3 text-white" />}
                          <span>Horas</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setTourTimeType('days')}
                          className={`px-3 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition-all ${
                            tourTimeType === 'days'
                              ? 'bg-black text-white shadow-sm'
                              : 'bg-white text-zinc-700 border border-zinc-200'
                          }`}
                        >
                          {tourTimeType === 'days' && <Check className="w-3 h-3 text-white" />}
                          <span>Días</span>
                        </button>
                      </div>

                      {/* Stepped Slider */}
                      <div className="mt-2 space-y-0.5">
                        <input
                          type="range"
                          min="1"
                          max="12"
                          value={tourHours}
                          onChange={(e) => setTourHours(Number(e.target.value))}
                          className="w-full accent-black cursor-pointer"
                        />
                        <div className="text-[10px] text-zinc-500">
                          {tourHours} hora(s) estimado(s)
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Disabled Button */}
                  <div className="pt-1.5">
                    <button
                      type="button"
                      disabled
                      className="w-full py-2.5 bg-[#e0e0e0] text-[#757575] font-semibold text-xs rounded-xl text-center cursor-not-allowed"
                    >
                      Selecciona tu ruta para cotizar
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ---------------------------------------------------------------- */}
              {/* VIEW 3: ENTREGAS / ENVÍOS (Captura de Entregas) */}
              {/* ---------------------------------------------------------------- */}
              {activeMode === 'delivery' && (
                <motion.div
                  key="delivery"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.18 }}
                  className="h-full bg-[#fafafa] p-3 flex flex-col justify-between overflow-y-auto no-scrollbar"
                >
                  <div className="space-y-2">
                    {/* Header */}
                    <div className="flex items-center justify-between pt-0.5">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setActiveMode('trip')}
                          className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-800 hover:bg-zinc-200 transition-colors"
                          title="Volver"
                        >
                          <ArrowLeft className="w-4 h-4" />
                        </button>
                        <h2 className="text-sm font-bold text-zinc-900">
                          Entregas Royen Express
                        </h2>
                      </div>

                      {/* Botón de Menú lateral */}
                      <button
                        type="button"
                        onClick={handleOpenDrawer}
                        className="w-7 h-7 rounded-lg bg-white border border-zinc-200 text-zinc-700 flex items-center justify-center hover:bg-zinc-50 transition-colors"
                        title="Abrir menú"
                      >
                        <Menu className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-[10px] text-zinc-500 leading-snug">
                      Despacho urbano de paquetes y encargos con custodia verificada y código PIN de entrega.
                    </p>

                    {/* Ruta de Entrega */}
                    <div className="rounded-xl bg-white p-2.5 shadow-sm border border-zinc-200/70 space-y-1.5">
                      <div className="text-[11px] font-bold text-zinc-900">Ruta de Envío</div>

                      <div className="flex items-center gap-2 p-1.5 rounded-lg bg-zinc-50 border border-zinc-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0" />
                        <span className="text-[10.5px] text-zinc-700 truncate">
                          San Sebastián (Recojo)
                        </span>
                      </div>

                      <div className="flex items-center gap-2 p-1.5 rounded-lg bg-zinc-50 border border-zinc-200">
                        <span className="w-1.5 h-1.5 rounded-sm bg-red-500 shrink-0" />
                        <span className="text-[10.5px] text-zinc-700 truncate">
                          Jr. Dos de Mayo, Huánuco (Destino)
                        </span>
                      </div>
                    </div>

                    {/* Tipo de paquete */}
                    <div>
                      <div className="text-[11px] font-bold text-zinc-900 mb-1">
                        Tipo de carga / paquete
                      </div>
                      <div className="grid grid-cols-3 gap-1 text-center">
                        <button
                          type="button"
                          onClick={() => setDeliveryType('doc')}
                          className={`p-1.5 rounded-lg border text-[10px] font-medium transition-all ${
                            deliveryType === 'doc'
                              ? 'bg-black text-white border-black shadow-sm'
                              : 'bg-white text-zinc-700 border-zinc-200'
                          }`}
                        >
                          Documentos
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeliveryType('medium')}
                          className={`p-1.5 rounded-lg border text-[10px] font-medium transition-all ${
                            deliveryType === 'medium'
                              ? 'bg-black text-white border-black shadow-sm'
                              : 'bg-white text-zinc-700 border-zinc-200'
                          }`}
                        >
                          Paquete &lt;5kg
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeliveryType('box')}
                          className={`p-1.5 rounded-lg border text-[10px] font-medium transition-all ${
                            deliveryType === 'box'
                              ? 'bg-black text-white border-black shadow-sm'
                              : 'bg-white text-zinc-700 border-zinc-200'
                          }`}
                        >
                          Caja &lt;15kg
                        </button>
                      </div>
                    </div>

                    {/* PIN Security Note */}
                    <div className="rounded-lg bg-teal-50 border border-teal-200 p-2 flex items-center gap-2">
                      <Shield className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                      <div className="text-[9.5px] text-teal-900 font-medium leading-tight">
                        El conductor exigirá el PIN de 4 dígitos al destinatario para liberar el paquete.
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveMode('trip')}
                      className="w-full py-2.5 bg-black hover:bg-zinc-900 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Confirmar Entrega • S/ 6.50</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ---------------------------------------------------------------- */}
              {/* VIEW 4: MODO CONDUCTOR */}
              {/* ---------------------------------------------------------------- */}
              {activeMode === 'driver' && (
                <motion.div
                  key="driver"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.18 }}
                  className="h-full bg-[#fafafa] p-3 flex flex-col justify-between overflow-y-auto no-scrollbar"
                >
                  <div className="space-y-2.5">
                    {/* Header */}
                    <div className="flex items-center justify-between pt-0.5">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setActiveMode('trip')}
                          className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-800 hover:bg-zinc-200 transition-colors"
                          title="Volver"
                        >
                          <ArrowLeft className="w-4 h-4" />
                        </button>
                        <h2 className="text-sm font-bold text-zinc-900">
                          Panel Conductor
                        </h2>
                      </div>

                      {/* Online toggle */}
                      <button
                        type="button"
                        onClick={() => setDriverOnline(!driverOnline)}
                        className={`text-[9.5px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 transition-colors ${
                          driverOnline
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : 'bg-zinc-200 text-zinc-600'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            driverOnline ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-400'
                          }`}
                        />
                        {driverOnline ? 'Conectado' : 'Desconectado'}
                      </button>
                    </div>

                    {/* Stats summary */}
                    <div className="grid grid-cols-3 gap-1.5">
                      <div className="rounded-lg bg-white p-2 border border-zinc-200 text-center">
                        <div className="text-[9px] text-zinc-400 uppercase font-semibold">
                          Hoy
                        </div>
                        <div className="text-[11px] font-bold text-emerald-600 mt-0.5">
                          S/ 184.50
                        </div>
                      </div>
                      <div className="rounded-lg bg-white p-2 border border-zinc-200 text-center">
                        <div className="text-[9px] text-zinc-400 uppercase font-semibold">
                          Viajes
                        </div>
                        <div className="text-[11px] font-bold text-zinc-900 mt-0.5">
                          8
                        </div>
                      </div>
                      <div className="rounded-lg bg-white p-2 border border-zinc-200 text-center">
                        <div className="text-[9px] text-zinc-400 uppercase font-semibold">
                          Rating
                        </div>
                        <div className="text-[11px] font-bold text-amber-500 mt-0.5">
                          4.96 ★
                        </div>
                      </div>
                    </div>

                    {/* Incoming request card */}
                    <div className="rounded-xl bg-white p-2.5 border border-zinc-300 shadow-sm space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded">
                          Nueva Solicitud
                        </span>
                        <span className="text-xs font-bold text-zinc-900 font-mono">
                          S/ 5.60
                        </span>
                      </div>

                      <div className="text-[11px] font-semibold text-zinc-800">
                        San Sebastian Huánuco ➔ Plaza de Armas Huánuco
                      </div>

                      <div className="text-[9.5px] text-zinc-500">
                        Pasajero verificado · Pago en efectivo o Yape
                      </div>

                      <div className="pt-0.5 flex gap-1.5">
                        <button
                          type="button"
                          onClick={() => setActiveMode('trip')}
                          className="flex-1 py-1.5 bg-black text-white text-[11px] font-bold rounded-lg shadow hover:bg-zinc-900 transition-colors"
                        >
                          Aceptar oferta
                        </button>
                        <button
                          type="button"
                          className="px-2.5 py-1.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-[11px] font-semibold rounded-lg transition-colors"
                        >
                          Contraofertar
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-[9.5px] text-zinc-400 pt-1">
                    Comisión reducida y liquidación instantánea
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Android Navigation Bar indicator */}
            <div className="py-1 flex justify-center bg-white border-t border-zinc-100 z-30">
              <div className="h-1 w-20 rounded-full bg-zinc-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
