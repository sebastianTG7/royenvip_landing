/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Smartphone, CheckCircle, ShieldCheck, Download, Cpu, HardDrive, Wifi, CreditCard } from 'lucide-react';

interface AndroidSpecsProps {
  onOpenDownloadModal: () => void;
}

export const AndroidSpecs: React.FC<AndroidSpecsProps> = ({ onOpenDownloadModal }) => {
  const specs = [
    {
      label: 'Sistema Operativo',
      value: 'Android 8.0 (Oreo) o versiones posteriores',
      detail: 'Compatible con Android 10, 11, 12, 13, 14 y 15',
      icon: Smartphone,
    },
    {
      label: 'Tamaño del Paquete',
      value: '42 MB (Instalador APK optimizado)',
      detail: 'Descarga ultraligera compatible con redes móviles 4G/5G',
      icon: HardDrive,
    },
    {
      label: 'Arquitectura',
      value: 'ARM64-v8a / armeabi-v7a / x86_64',
      detail: 'Rendimiento nativo de 60/120 FPS sin consumo excesivo de batería',
      icon: Cpu,
    },
    {
      label: 'Verificación de Seguridad',
      value: 'Google Play Protect Certificado',
      detail: 'Cifrado de datos en reposo y en tránsito con protocolo TLS 1.3',
      icon: ShieldCheck,
    },
    {
      label: 'Conectividad Requerida',
      value: 'Red de datos móviles (3G, 4G, 5G) y GPS satelital',
      detail: 'Modo de reconexión automática ante caídas de cobertura en ruta',
      icon: Wifi,
    },
    {
      label: 'Métodos de Pago Integrados',
      value: 'Tarjetas de crédito, débito, transferencias y efectivo',
      detail: 'Procesamiento bancario seguro certificado mediante Culqi',
      icon: CreditCard,
    },
  ];

  return (
    <section id="especificaciones" className="py-20 md:py-28 hairline-border-b bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-14 space-y-4">
          <span className="text-xs font-mono tracking-widest text-[#00796b] uppercase block">
            Ficha Técnica para Celular Android
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white text-balance">
            Optimizada para máxima fluidez en cualquier dispositivo.
          </h2>
          <p className="text-base text-zinc-400">
            Desarrollo nativo diseñado para operar con rapidez incluso en zonas con cobertura
            intermitente, con bajo consumo de batería y memoria RAM.
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {specs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-xl bg-zinc-950 p-6 hairline-border flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 hairline-border flex items-center justify-center text-[#00796b]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-zinc-500 block">
                      {item.label}
                    </span>
                    <h3 className="text-sm font-bold text-white mt-0.5">
                      {item.value}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verificado en Play Store</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Download Callout */}
        <div className="mt-12 rounded-2xl bg-zinc-950 p-8 hairline-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-lg font-bold text-white tracking-tight">
              ¿Listo para instalar en tu smartphone Android?
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              El proceso de instalación toma menos de 30 segundos. No requiere configuraciones complejas
              ni permisos invasivos.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenDownloadModal}
            className="px-6 py-3.5 bg-[#00796b] hover:bg-[#00695c] text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shadow-sm shrink-0 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Descargar Ahora en Android</span>
          </button>
        </div>
      </div>
    </section>
  );
};
