/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield, FileText, Smartphone } from 'lucide-react';

interface FooterProps {
  onOpenDownloadModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownloadModal }) => {
  return (
    <footer className="bg-[#09090b] text-zinc-400 hairline-border-t">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand and Description */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-lg font-bold tracking-tight text-white block">
              ROYEN VVIP
            </span>
            <p className="text-xs leading-relaxed max-w-sm text-zinc-400">
              Plataforma digital de movilidad ejecutiva, turismo y logística ligera para Android.
              Servicios bajo altos estándares de verificación documental y validación por código PIN.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-zinc-500">
              <Smartphone className="w-3.5 h-3.5 text-[#00796b]" />
              <span>Optimizado para teléfonos Android</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white block">
              Plataforma
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Servicios Urbanos
                </a>
              </li>
              <li>
                <a href="#seguridad" className="hover:text-white transition-colors">
                  Protocolo de Seguridad
                </a>
              </li>
              <li>
                <a href="#tours" className="hover:text-white transition-colors">
                  Tours Regionales
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-white transition-colors">
                  Calculadora de Tarifas
                </a>
              </li>
              <li>
                <a href="#especificaciones" className="hover:text-white transition-colors">
                  Ficha Android
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Consumer */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white block">
              Garantías y Legal
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#terminos"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Términos y Condiciones del Servicio Royen VVIP:\n- Cumplimiento de normativas de transporte y tránsito terrestre.\n- Obligatoriedad del código PIN previo al inicio de carrera.\n- Cobertura SOAT vigente requerida en todas las unidades afiliadas.');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a
                  href="#privacidad"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Política de Privacidad:\n- Cifrado de datos y ubicación satelital.\n- Tratamiento estrictamente confidencial de antecedentes e información de pago.\n- No comercialización de datos con terceros.');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="#reclamaciones"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Libro de Reclamaciones Virtual conforme a las disposiciones del Código de Protección y Defensa del Consumidor (Ley N° 29571). Atención de consultas en soporte@royenvvip.com');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Libro de Reclamaciones
                </a>
              </li>
              <li>
                <span className="text-zinc-500">Huánuco, Perú</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Conversion Badge */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-white block">
              Descarga para Celular
            </span>
            <p className="text-xs text-zinc-400">
              Consigue la versión oficial en Google Play Store con todas las funciones de viaje y cotización.
            </p>
            <button
              type="button"
              onClick={onOpenDownloadModal}
              className="w-full py-2.5 px-3 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium rounded-lg hairline-border transition-colors text-center"
            >
              Abrir Ficha de Descarga
            </button>
            <div className="text-[10px] font-mono text-zinc-500">
              Pagos aceptados: Culqi, Débito, Crédito y Efectivo
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <span>Copyright 2026 Royen VVIP. Todos los derechos reservados.</span>
          <div className="flex items-center gap-4">
            <span>Versión de Distribución 2.4</span>
            <span aria-hidden="true">·</span>
            <span>Google Play Protect</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
