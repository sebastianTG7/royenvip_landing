/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, QrCode, Download, Send, Check, Copy, ExternalLink, ShieldCheck } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTourName?: string;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
  initialTourName,
}) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [sendSuccess, setSendSuccess] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  if (!isOpen) return null;

  const playStoreLink = 'https://play.google.com/store/apps/details?id=com.royen.vvip';

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(playStoreLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleSendSms = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) return;
    setSendSuccess(true);
    setTimeout(() => {
      setSendSuccess(false);
      setPhoneNumber('');
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-lg rounded-2xl bg-[#0e0e11] text-zinc-100 hairline-border shadow-2xl p-6 sm:p-8 space-y-6"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5 pr-8">
          <span className="text-[10px] font-mono tracking-widest text-[#00796b] uppercase block">
            Descarga Oficial para Android
          </span>
          <h3 className="text-xl font-bold tracking-tight text-white">
            Instalar Royen VVIP en tu Celular
          </h3>
          {initialTourName && (
            <p className="text-xs text-[#00796b] font-mono pt-1">
              Ruta seleccionada: {initialTourName}
            </p>
          )}
          <p className="text-xs text-zinc-400">
            Escanea el código QR con la cámara de tu teléfono Android o descarga directamente
            el instalador verificado.
          </p>
        </div>

        {/* QR Code and Play Store Link Box */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center p-4 rounded-xl bg-zinc-950 hairline-border">
          {/* QR Container */}
          <div className="sm:col-span-5 flex flex-col items-center justify-center p-3 bg-white rounded-lg">
            <svg
              className="w-32 h-32 text-black"
              viewBox="0 0 100 100"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Corner position squares */}
              <rect x="10" y="10" width="24" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="5" />
              <rect x="17" y="17" width="10" height="10" rx="1" fill="currentColor" />
              <rect x="66" y="10" width="24" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="5" />
              <rect x="73" y="17" width="10" height="10" rx="1" fill="currentColor" />
              <rect x="10" y="66" width="24" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="5" />
              <rect x="17" y="73" width="10" height="10" rx="1" fill="currentColor" />

              {/* Data matrix pattern simulation */}
              <rect x="42" y="12" width="6" height="6" />
              <rect x="52" y="12" width="6" height="6" />
              <rect x="42" y="24" width="6" height="6" />
              <rect x="52" y="24" width="6" height="6" />
              <rect x="12" y="44" width="6" height="6" />
              <rect x="24" y="44" width="6" height="6" />
              <rect x="42" y="42" width="16" height="16" rx="2" fill="#00796b" />
              <rect x="68" y="44" width="6" height="6" />
              <rect x="80" y="44" width="6" height="6" />
              <rect x="42" y="68" width="6" height="6" />
              <rect x="52" y="68" width="6" height="6" />
              <rect x="68" y="68" width="6" height="6" />
              <rect x="80" y="68" width="6" height="6" />
              <rect x="68" y="80" width="6" height="6" />
              <rect x="80" y="80" width="6" height="6" />
            </svg>
            <span className="text-[10px] font-mono text-zinc-700 font-bold mt-1 uppercase">
              Escanear con Android
            </span>
          </div>

          {/* Quick Actions */}
          <div className="sm:col-span-7 space-y-3">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between px-3.5 py-2.5 bg-white hover:bg-zinc-200 text-black rounded-lg transition-colors text-xs font-bold"
            >
              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-black" />
                <span>Abrir en Google Play Store</span>
              </div>
              <span className="font-mono text-[10px] text-zinc-600">v2.4</span>
            </a>

            <button
              type="button"
              onClick={handleCopyLink}
              className="w-full flex items-center justify-between px-3.5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 rounded-lg hairline-border transition-colors text-xs font-medium"
            >
              <div className="flex items-center gap-2">
                {copiedLink ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4 text-zinc-400" />
                )}
                <span>{copiedLink ? 'Enlace copiado' : 'Copiar enlace directo'}</span>
              </div>
              <span className="font-mono text-[10px] text-zinc-500">Play URL</span>
            </button>

            <a
              href="#descargar-apk"
              onClick={(e) => {
                e.preventDefault();
                alert('Iniciando descarga segura de Royen_VVIP_v2.4_release.apk (42 MB)...');
              }}
              className="w-full flex items-center justify-between px-3.5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 rounded-lg hairline-border transition-colors text-xs font-medium"
            >
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-[#00796b]" />
                <span>Descarga directa APK</span>
              </div>
              <span className="font-mono text-[10px] text-[#00796b]">42 MB</span>
            </a>
          </div>
        </div>

        {/* SMS / WhatsApp Link Sender */}
        <div className="space-y-2 pt-2 border-t border-white/5">
          <label className="text-xs font-mono uppercase text-zinc-400 block">
            Enviar enlace de descarga por SMS a tu celular
          </label>
          <form onSubmit={handleSendSms} className="flex gap-2">
            <input
              type="tel"
              placeholder="+51 962 000 000"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="flex-1 px-3.5 py-2 bg-zinc-900 hairline-border rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-[#00796b]"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#00796b] hover:bg-[#00695c] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Enviar</span>
            </button>
          </form>

          {sendSuccess && (
            <div className="p-2.5 bg-emerald-950/60 border border-emerald-500/30 rounded-lg text-xs text-emerald-300 flex items-center gap-2">
              <Check className="w-4 h-4 shrink-0" />
              <span>Enlace de descarga oficial enviado satisfactoriamente a tu celular Android.</span>
            </div>
          )}
        </div>

        {/* Play Protect Notice */}
        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00796b]" />
            <span>Firma SHA-256 Verificada</span>
          </div>
          <span>Android 8.0+ Requerido</span>
        </div>
      </div>
    </div>
  );
};
