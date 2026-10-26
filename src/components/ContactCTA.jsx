import React from 'react';
import { MessageSquare, Mail, MapPin, ArrowRight } from 'lucide-react';
import { clientData } from '../config/clientData';

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function ContactCTA() {
  const { info, contact } = clientData;
  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappDefaultMessage)}`;

  return (
    <section id="contato" className="py-24 relative overflow-hidden border-t border-slate-800">
      {/* Luz ambiente de fundo âmbar */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 shadow-2xl space-y-8">
          
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
              ⚡ Atendimento com Hora Marcada
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Precisa de um eletricista de confiança no seu imóvel?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Clique no botão abaixo para conversarmos no WhatsApp sem compromisso. Te ajudo a entender o melhor caminho para sua obra ou manutenção.
            </p>
          </div>

          {/* Botão de Destaque */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-400/40 transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-5 h-5 fill-slate-950" />
              <span>Chamar no WhatsApp Agora</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {contact.instagram && (
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-sm font-semibold transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-amber-400" />
                <span>Ver Vídeos no Instagram</span>
              </a>
            )}
          </div>

          {/* Localização e Redes */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <div className="inline-flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{info.location}</span>
            </div>
            {contact.instagram && (
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400/90 hover:text-amber-300 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>@christhyanmunizz</span>
              </a>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
