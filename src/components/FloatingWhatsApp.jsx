import React from 'react';
import { MessageSquare } from 'lucide-react';
import { clientData } from '../config/clientData';

export default function FloatingWhatsApp() {
  const { contact } = clientData;
  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappDefaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip ao passar o mouse */}
      <span className="hidden sm:inline-block mr-3 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Falar no WhatsApp
      </span>

      {/* Botão Flutuante */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-400/60 transition-all duration-300 transform hover:scale-110 active:scale-95"
      >
        {/* Animação de pulso */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30"></span>
        <MessageSquare className="w-7 h-7 fill-white relative" />
      </a>
    </div>
  );
}
