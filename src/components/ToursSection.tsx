/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, Clock, MapPin, Users, Check } from 'lucide-react';

interface ToursSectionProps {
  onSelectTour: (tourName: string) => void;
}

export const ToursSection: React.FC<ToursSectionProps> = ({ onSelectTour }) => {
  const [selectedRoute, setSelectedRoute] = useState<number>(0);

  const routes = [
    {
      id: 0,
      title: 'Circuito Histórico Kotosh',
      route: 'Huánuco Centro - Templo de las Manos Cruzadas',
      distance: '14 km ida y vuelta',
      duration: '3 a 4 horas recomendadas',
      capacity: 'Hasta 4 pasajeros',
      vehicle: 'Sedán Ejecutivo / Camioneta SUV',
      estimatedPrice: 'S/. 75.00',
      description:
        'Traslado privado con tiempo de espera incluido mientras visitas uno de los monumentos arqueológicos más antiguos de América. El conductor permanece estacionado en zona segura.',
      highlights: [
        'Espera en sitio sin límite de fotos',
        'Vehículo con maletera amplia para equipaje',
        'Chofer con conocimiento histórico básico',
      ],
    },
    {
      id: 1,
      title: 'Ruta Colonial Tomayquichua y Valle',
      route: 'Huánuco - Ambo - Tomayquichua (Tierra de la Perricholi)',
      distance: '38 km circuito total',
      duration: '4 a 5 horas',
      capacity: 'Hasta 4 pasajeros',
      vehicle: 'Sedán Premium o SUV 4x2',
      estimatedPrice: 'S/. 120.00',
      description:
        'Recorrido campestre por casonas coloniales y haciendas tradicionales de caña y aguardiente. Ideal para paseos familiares o visitantes corporativos.',
      highlights: [
        'Paradas programadas en miradores naturales',
        'Climatización continua garantizada',
        'Tarifa cerrada sin cobro por minuto detenido',
      ],
    },
    {
      id: 2,
      title: 'Expedición Selva Alta: Tingo María',
      route: 'Huánuco - Carpish - Parque Nacional Tingo María',
      distance: '240 km trayecto completo',
      duration: 'Jornada completa (8 a 10 horas)',
      capacity: 'Hasta 4 pasajeros',
      vehicle: 'Camioneta SUV 4x4 / 4x2 equipada',
      estimatedPrice: 'S/. 320.00',
      description:
        'Cruce de la cordillera hacia la ceja de selva con visita a la Cueva de las Lechuzas y mirador de la Bella Durmiente. Conductor profesional con experiencia en carretera de montaña.',
      highlights: [
        'Conductor certificado para neblina y túnel de Carpish',
        'Mantenimiento y neumáticos con certificación técnica',
        'Retorno coordinado en la misma jornada',
      ],
    },
  ];

  const current = routes[selectedRoute];

  return (
    <section id="tours" className="py-20 md:py-28 hairline-border-b bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <span className="text-xs font-mono tracking-widest text-[#00796b] uppercase block">
            Turismo y Circuitos Regionales
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white text-balance">
            Explora destinos icónicos con tarifas por hora o ruta cerrada.
          </h2>
          <p className="text-base text-zinc-400">
            Olvídate de contratar transporte en la calle sin garantías. Solicita tu
            itinerario turístico desde la app Royen VVIP en Android y viaja con total confort.
          </p>
        </div>

        {/* Route Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 p-1.5 bg-zinc-950 rounded-xl hairline-border max-w-2xl">
          {routes.map((r, i) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setSelectedRoute(i)}
              className={`flex-1 min-w-[140px] px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors text-center whitespace-nowrap ${
                selectedRoute === i
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {r.title}
            </button>
          ))}
        </div>

        {/* Active Route Details Card */}
        <div className="rounded-2xl bg-zinc-950 hairline-border p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00796b]">
                <MapPin className="w-3.5 h-3.5" />
                <span>{current.route}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {current.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {current.description}
              </p>
            </div>

            {/* Metric strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/5 text-xs">
              <div>
                <span className="block text-zinc-500 font-mono text-[11px]">DURACIÓN SUGERIDA</span>
                <span className="font-semibold text-zinc-200">{current.duration}</span>
              </div>
              <div>
                <span className="block text-zinc-500 font-mono text-[11px]">DISTANCIA TOTAL</span>
                <span className="font-semibold text-zinc-200">{current.distance}</span>
              </div>
              <div>
                <span className="block text-zinc-500 font-mono text-[11px]">CAPACIDAD</span>
                <span className="font-semibold text-zinc-200">{current.capacity}</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                Garantías del servicio
              </span>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                {current.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00796b] shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Fare Box */}
          <div className="lg:col-span-5 bg-zinc-900/90 rounded-xl p-6 sm:p-7 hairline-border space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>COTIZACIÓN BASE</span>
                <span className="text-[#00796b]">TARIFA CERRADA</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-bold font-mono text-white tabular-nums">
                  {current.estimatedPrice}
                </span>
                <span className="text-xs text-zinc-400 font-mono">/ servicio completo</span>
              </div>
              <p className="text-xs text-zinc-400 leading-normal">
                Incluye combustible, peajes de ruta, tiempo de espera en destino y
                retorno al punto de origen en Huánuco.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 space-y-2">
              <button
                type="button"
                onClick={() => onSelectTour(current.title)}
                className="w-full py-3 px-4 bg-[#00796b] hover:bg-[#00695c] text-white text-xs font-semibold rounded-lg transition-colors text-center"
              >
                Solicitar este Tour en la App Android
              </button>
              <span className="text-[10px] font-mono text-center text-zinc-500 block">
                Disponibilidad sujeta a reserva anticipada en la aplicación
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
