/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Car, Compass, Package, UserCheck, ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceKey: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const services = [
    {
      index: '01',
      title: 'Movilidad Urbana Ejecutiva',
      summary:
        'Traslados urbanos en sedanes y camionetas seleccionadas. Negociación transparente de tarifa directamente entre usuario y conductor, sin sobreprecios dinámicos ocultos.',
      features: [
        'Propuesta y contraoferta de tarifa en tiempo real',
        'Vehículos inspeccionados con aire acondicionado',
        'Validación de conductor mediante foto y placa',
      ],
      icon: Car,
      tag: 'Urbano Inmediato',
    },
    {
      index: '02',
      title: 'Tours y Circuitos Regionales',
      summary:
        'Reserva de vehículos por horas o por itinerario cerrado para recorridos turísticos y traslados interurbanos con conductores capacitados en rutas panorámicas.',
      features: [
        'Circuitos emblemáticos: Templo de Kotosh, Tomayquichua y valles',
        'Contratación por bloques horarios con paradas flexibles',
        'Capacidad para familias o grupos ejecutivos',
      ],
      icon: Compass,
      tag: 'Turismo y Rutas',
    },
    {
      index: '03',
      title: 'Envíos y Encomiendas Express',
      summary:
        'Despacho urbano de paquetes, documentos y compras comerciales con monitoreo continuo en mapa y confirmación obligatoria con código al momento de entrega.',
      features: [
        'Capacidad de carga ligera y mediana hasta 15 kg',
        'Custodia verificada con trazabilidad satelital en vivo',
        'Comprobante digital y notificación al remitente',
      ],
      icon: Package,
      tag: 'Logística Ligera',
    },
    {
      index: '04',
      title: 'Modo Conductor Afiliado ROYEN VIP',
      summary:
        'Módulo integrado en la misma aplicación Android para propietarios de vehículos que buscan generar ingresos con comisiones competitivas y soporte permanente.',
      features: [
        'Comisión reducida con liquidaciones rápidas',
        'Filtro previo de antecedentes, SOAT y brevete profesional',
        'Autonomía total para aceptar viajes urbanos o servicios de tour',
      ],
      icon: UserCheck,
      tag: 'Generación de Ingresos',
    },
  ];

  return (
    <section id="servicios" className="py-20 md:py-28 hairline-border-b bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest text-[#00796b] uppercase block">
            Ecosistema de Movilidad
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white text-balance">
            Soluciones integradas en una sola aplicación Android.
          </h2>
          <p className="text-base text-zinc-400">
            Cada servicio cuenta con parámetros claros de contratación, tiempos de respuesta
            medidos y tarifas reguladas por acuerdo transparente.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-xl bg-zinc-950 p-7 hairline-border hover:border-zinc-700 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-500 font-semibold">
                      {service.index}
                    </span>
                    <span className="text-xs font-mono text-[#00796b] tracking-wider uppercase">
                      {service.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-zinc-900 hairline-border text-white group-hover:text-[#00796b] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-white">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {service.summary}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-white/5 text-xs text-zinc-400">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#00796b] font-mono select-none">-</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
                  >
                    <span>Simular cotización</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#00796b]" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
