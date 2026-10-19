/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Copy } from 'lucide-react';

export const SecurityArchitecture: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const samplePin = '48926';

  const handleCopy = () => {
    navigator.clipboard?.writeText(samplePin);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const pillars = [
    {
      title: 'Validación por Código PIN',
      desc: 'Cada solicitud genera un código único de 4 dígitos en la pantalla de tu celular Android. El conductor debe ingresarlo antes de iniciar el trayecto para confirmar identidad mutua.',
      spec: 'Cifrado local de sesión',
    },
    {
      title: 'Verificación Documental Rigurosa',
      desc: 'Evaluación estricta de antecedentes policiales, penales y judiciales. Comprobación de SOAT vigente, licencia de conducir profesional e inspección técnica vehicular.',
      spec: '100% conductores auditados',
    },
    {
      title: 'Telemetría Satelital Continua',
      desc: 'Monitoreo de coordenadas GPS en tiempo real. Enlace compartible de alta precisión para familiares y contactos de confianza sin requerir que tengan la app instalada.',
      spec: 'Intervalo de 3 segundos',
    },
    {
      title: 'Protocolo de Asistencia Inmediata',
      desc: 'Botón de soporte prioritario y canal de comunicación directa con el equipo de operaciones en Huánuco para resolver incidentes o asistencia vial.',
      spec: 'Atención 24/7 en ruta',
    },
  ];

  return (
    <section id="seguridad" className="py-20 md:py-28 hairline-border-b bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Conceptual Overview */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono tracking-widest text-[#00796b] uppercase block">
              Protocolo de Seguridad
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white text-balance">
              Ningún vehículo avanza sin confirmación mutua.
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              La arquitectura de Royen VVIP elimina las contingencias del transporte
              informal mediante candados de software y procedimientos de control
              obligatorios en cada servicio.
            </p>

            {/* Interactive PIN verification demonstration block */}
            <div className="rounded-xl bg-zinc-950 p-6 hairline-border space-y-4">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span className="font-mono uppercase text-zinc-500">Muestra de validación</span>
                <span className="text-[#00796b] font-mono font-medium">Validar con conductor</span>
              </div>
              <div className="flex items-center justify-between bg-zinc-900/80 p-3.5 rounded-lg border border-white/5">
                <div>
                  <span className="text-[11px] text-zinc-400 block font-mono">
                    CÓDIGO PIN DEL PASAJERO
                  </span>
                  <span className="text-2xl font-mono font-bold tracking-[0.25em] text-white">
                    {samplePin}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded border border-white/10 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copiar PIN</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs text-zinc-500 leading-normal">
                El motor del vehículo y el taxímetro digital permanecen bloqueados en la app
                del conductor hasta que se valida este código.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Security Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="rounded-xl bg-zinc-950 p-6 hairline-border flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <h3 className="text-base font-bold tracking-tight text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span>Especificación</span>
                    <span className="text-zinc-300">{pillar.spec}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
