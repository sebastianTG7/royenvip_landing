/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck } from 'lucide-react';

interface TariffEstimatorProps {
  onOpenDownloadModal: () => void;
}

export const TariffEstimator: React.FC<TariffEstimatorProps> = ({ onOpenDownloadModal }) => {
  const [serviceType, setServiceType] = useState<'urban' | 'tour' | 'delivery'>('urban');
  const [distanceKm, setDistanceKm] = useState<number>(6);
  const [offerAdjustment, setOfferAdjustment] = useState<number>(0);

  // Pricing formula logic
  const calculateFare = () => {
    let base = 6.0;
    let ratePerKm = 1.8;

    if (serviceType === 'tour') {
      base = 35.0; // base per hour or minimum tour block
      ratePerKm = 2.4;
    } else if (serviceType === 'delivery') {
      base = 5.0;
      ratePerKm = 1.5;
    }

    const calculated = base + distanceKm * ratePerKm;
    const finalFare = Math.max(base, calculated + offerAdjustment);
    const minOffer = Math.max(base * 0.85, calculated * 0.85);
    const maxOffer = calculated * 1.3;

    return {
      base: base.toFixed(2),
      suggested: calculated.toFixed(2),
      userProposal: finalFare.toFixed(2),
      minOffer: minOffer.toFixed(2),
      maxOffer: maxOffer.toFixed(2),
    };
  };

  const fare = calculateFare();

  return (
    <section id="simulador" className="py-20 md:py-28 hairline-border-b bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-14 space-y-4">
          <span className="text-xs font-mono tracking-widest text-[#00796b] uppercase block">
            Tarifas Transparentes
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white text-balance">
            Acuerda el precio antes de subir al auto.
          </h2>
          <p className="text-base text-zinc-400">
            A diferencia de otras plataformas con tarifas dinámicas ocultas por lluvia o demanda,
            Royen VVIP te permite ver la tarifa referencial y negociar un precio justo con el conductor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Form */}
          <div className="lg:col-span-7 bg-zinc-950 rounded-2xl hairline-border p-6 sm:p-8 space-y-6">
            {/* Service selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-zinc-400 block">
                Tipo de Servicio
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setServiceType('urban');
                    setDistanceKm(6);
                    setOfferAdjustment(0);
                  }}
                  className={`py-2.5 px-3 rounded-lg text-xs font-semibold transition-colors ${serviceType === 'urban'
                    ? 'bg-zinc-800 text-white hairline-border'
                    : 'bg-zinc-900/60 text-zinc-400 hover:text-zinc-200'
                    }`}
                >
                  Urbano Ejecutivo
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setServiceType('tour');
                    setDistanceKm(25);
                    setOfferAdjustment(0);
                  }}
                  className={`py-2.5 px-3 rounded-lg text-xs font-semibold transition-colors ${serviceType === 'tour'
                    ? 'bg-zinc-800 text-white hairline-border'
                    : 'bg-zinc-900/60 text-zinc-400 hover:text-zinc-200'
                    }`}
                >
                  Tour / Horas
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setServiceType('delivery');
                    setDistanceKm(4);
                    setOfferAdjustment(0);
                  }}
                  className={`py-2.5 px-3 rounded-lg text-xs font-semibold transition-colors ${serviceType === 'delivery'
                    ? 'bg-zinc-800 text-white hairline-border'
                    : 'bg-zinc-900/60 text-zinc-400 hover:text-zinc-200'
                    }`}
                >
                  Envío Express
                </button>
              </div>
            </div>

            {/* Distance slider */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400 font-mono">DISTANCIA DEL TRAYECTO</span>
                <span className="font-mono text-white font-bold">{distanceKm} km</span>
              </div>
              <input
                type="range"
                min={2}
                max={serviceType === 'tour' ? 80 : 25}
                step={1}
                value={distanceKm}
                onChange={(e) => setDistanceKm(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#00796b]"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                <span>Trayecto corto (2 km)</span>
                <span>Trayecto medio ({serviceType === 'tour' ? '80 km' : '25 km'})</span>
              </div>
            </div>

            {/* Fair offer adjustment slider */}
            <div className="space-y-3 pt-2 border-t border-white/5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400 font-mono">CONTRAOFERTA ESTIMADA</span>
                <span className="font-mono text-white font-bold">
                  {offerAdjustment > 0 ? `+ S/. ${offerAdjustment}.00` : offerAdjustment < 0 ? `- S/. ${Math.abs(offerAdjustment)}.00` : 'Tarifa sugerida'}
                </span>
              </div>
              <input
                type="range"
                min={-5}
                max={15}
                step={1}
                value={offerAdjustment}
                onChange={(e) => setOfferAdjustment(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#00796b]"
              />
              <span className="text-[11px] text-zinc-500 block">
                En la app puedes ingresar tu propia contraoferta y esperar que los conductores cercanos la acepten.
              </span>
            </div>
          </div>

          {/* Breakdown & Action Card */}
          <div className="lg:col-span-5 bg-zinc-950 rounded-2xl hairline-border p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>ESTIMACIÓN EN HUÁNUCO</span>
                <span className="text-[#00796b]">MODELO ABIERTO</span>
              </div>

              <div>
                <span className="text-xs text-zinc-400 block font-mono">TARIFA ESTIMADA EN APP</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl sm:text-5xl font-bold font-mono text-white tabular-nums">
                    S/. {fare.userProposal}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">PEN</span>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/5 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>Tarifa base del sistema</span>
                  <span className="font-mono text-zinc-200">S/. {fare.base}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Tarifa recomendada por distancia</span>
                  <span className="font-mono text-zinc-200">S/. {fare.suggested}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Rango justo de contraoferta</span>
                  <span className="font-mono text-emerald-400">
                    S/. {fare.minOffer} - S/. {fare.maxOffer}
                  </span>
                </div>
              </div>

              <div className="p-3 bg-zinc-900/60 rounded-lg border border-white/5 text-xs text-zinc-400 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#00796b] shrink-0 mt-0.5" />
                <span>
                  El precio pactado es el precio final. No se aplican cargos por tiempo en semáforos ni desvíos menores de ruta.
                </span>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={onOpenDownloadModal}
                className="tariff-cta-button w-full py-3.5 px-4 bg-white hover:bg-zinc-200 text-black text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Descargar App y Comprobar Tarifas</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
