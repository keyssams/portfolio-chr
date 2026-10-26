import React from 'react';
import { MessageSquare, Mail, MapPin, ArrowRight, Zap, Phone } from 'lucide-react';
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
      {/* Luz ambiente azul bebê */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-sky-400/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-sky-400/20 shadow-2xl space-y-8">
          
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-sky-500/10 text-sky-300 border border-sky-400/30">
              ⚡ Atendimento com Hora Marcada
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Precisa de um eletricista de confiança no seu imóvel?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Clique no botão abaixo para falar diretamente com o <strong className="text-white">Christhyan Muniz ⚡ O Eletricista Autônomo</strong>. Orçamentos rápidos e atendimento sem intermediários.
            </p>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-extrabold text-base shadow-xl shadow-sky-400/25 hover:shadow-sky-300/40 transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-5 h-5 fill-slate-950" />
              <span>Chamar no WhatsApp: (11) 94927-7334</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-sm font-semibold transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>{contact.email}</span>
              </a>
            )}
          </div>

          {/* Informações de Contato e Redes */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300">
            <div className="inline-flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-4 h-4 text-sky-400" />
              <span>{info.location}</span>
            </div>
            
            <div className="inline-flex items-center gap-1.5 text-slate-300">
              <Phone className="w-4 h-4 text-sky-400" />
              <span>{contact.whatsappDisplay}</span>
            </div>

            {contact.instagram && (
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sky-300 hover:text-white transition-colors font-semibold"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>{contact.instagramHandle}</span>
              </a>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
