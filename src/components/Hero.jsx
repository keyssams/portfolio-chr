import React from 'react';
import { ArrowRight, MessageSquare, CheckCircle2, Zap } from 'lucide-react';
import { clientData } from '../config/clientData';

export default function Hero() {
  const { info, contact } = clientData;
  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappDefaultMessage)}`;

  return (
    <section id="inicio" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-[#061325] via-[#092244] to-[#07182e] text-white shadow-inner">
      
      {/* ========================================================================= */}
      {/* ARTE DE FUNDO: AZUL ESCURECIDO ELEGANTE COM RELÂMPAGOS E RAIOS DISCRETOS */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        
        {/* Luzes difusas sutis em azul elétrico */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-10 -left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-20 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl" />

        {/* ⚡ Raio Discreto Esquerdo (visível perfeitamente no mobile e desktop) */}
        <div className="absolute left-0 top-4 sm:top-10 w-24 sm:w-40 md:w-56 opacity-30">
          <svg viewBox="0 0 160 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <defs>
              <filter id="glowLeft" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Tronco principal */}
            <path
              d="M 20 0 L 70 95 L 45 110 L 110 210 L 85 225 L 140 340 L 120 350 L 150 380"
              stroke="#7dd3fc"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glowLeft)"
            />
            {/* Ramificação suave */}
            <path
              d="M 70 95 L 120 140 L 105 155 L 145 220"
              stroke="#bae6fd"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.7"
            />
            <path
              d="M 110 210 L 70 270"
              stroke="#38bdf8"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.6"
            />
            {/* Centelhas discretas */}
            <circle cx="140" cy="340" r="2" fill="#ffffff" opacity="0.8" />
            <circle cx="120" cy="140" r="1.5" fill="#ffffff" opacity="0.8" />
          </svg>
        </div>

        {/* ⚡ Raio Discreto Direito (visível perfeitamente no mobile e desktop) */}
        <div className="absolute right-0 top-6 sm:top-14 w-24 sm:w-40 md:w-56 opacity-30">
          <svg viewBox="0 0 160 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <defs>
              <filter id="glowRight" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Tronco principal espelhado */}
            <path
              d="M 140 0 L 90 100 L 115 115 L 50 215 L 75 230 L 20 340 L 40 350 L 10 380"
              stroke="#7dd3fc"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glowRight)"
            />
            {/* Ramificação suave */}
            <path
              d="M 90 100 L 40 145 L 55 160 L 15 225"
              stroke="#bae6fd"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.7"
            />
            <path
              d="M 50 215 L 90 275"
              stroke="#38bdf8"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.6"
            />
            {/* Centelhas discretas */}
            <circle cx="20" cy="340" r="2" fill="#ffffff" opacity="0.8" />
            <circle cx="40" cy="145" r="1.5" fill="#ffffff" opacity="0.8" />
          </svg>
        </div>

        {/* Malha sutil de circuitos e pulso eletromagnético */}
        <svg className="w-full h-full opacity-20" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M 0 100 H 350 L 400 150 H 800 L 850 100 H 1200" stroke="#38bdf8" strokeWidth="1" strokeDasharray="6 6" />
          <path d="M 0 450 H 420 L 470 400 H 730 L 780 450 H 1200" stroke="#38bdf8" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="350" cy="100" r="3" fill="#38bdf8" />
          <circle cx="850" cy="100" r="3" fill="#38bdf8" />
          <circle cx="420" cy="450" r="3" fill="#38bdf8" />
          <circle cx="780" cy="450" r="3" fill="#38bdf8" />
        </svg>

      </div>

      {/* ========================================================================= */}
      {/* CONTEÚDO PRINCIPAL (DIRETO AO PONTO, NÍTIDO E SEM SUBTÍTULO REPETITIVO) */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          
          {/* Foto Real de Perfil com Aro Neon e Borda Branca Dupla */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-2.5 rounded-full bg-gradient-to-r from-sky-400 via-cyan-200 to-sky-300 blur-xl opacity-80 animate-pulse"></div>
              <img
                src={info.avatarUrl}
                alt={info.name}
                className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>

          {/* Badge Oficial com o Slogan */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-slate-900 text-xs sm:text-sm font-black shadow-xl border-2 border-sky-300">
            <Zap className="w-4 h-4 fill-sky-600 text-sky-600 animate-bounce" />
            <span>Christhyan Muniz ⚡ O Eletricista Autônomo</span>
          </div>

          {/* Título Principal Logo de Cara */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.14] drop-shadow-md">
            Instalações elétricas seguras,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-200 to-white underline decoration-sky-400 decoration-wavy decoration-2">
              WallBox e CFTV
            </span>{' '}
            com atendimento direto.
          </h1>

          {/* Pilares em Destaque (Cards Brancos de Alto Padrão) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs sm:text-sm font-black text-slate-900 pt-2">
            <span className="px-4 py-2 rounded-xl bg-white border border-sky-100 shadow-lg">⚡ 𝐂𝐅𝐓𝐕</span>
            <span className="px-4 py-2 rounded-xl bg-white border border-sky-100 shadow-lg">⚡ 𝐖𝐚𝐥𝐥𝐁𝐨𝐱</span>
            <span className="px-4 py-2 rounded-xl bg-white border border-sky-100 shadow-lg">⚡ 𝐈𝐧𝐬𝐭𝐚𝐥𝐚çõ𝐞𝐬</span>
            <span className="px-4 py-2 rounded-xl bg-white border border-sky-100 shadow-lg">⚡ 𝐌𝐚𝐧𝐮𝐭𝐞𝐧çõ𝐞𝐬</span>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl bg-white hover:bg-sky-50 text-slate-950 font-black text-base shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.45)] transition-all transform hover:-translate-y-1 active:translate-y-0 border-2 border-white"
            >
              <MessageSquare className="w-5 h-5 fill-slate-950" />
              <span>Solicitar Orçamento no WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-sky-600" />
            </a>

            <a
              href="#servicos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-sky-950/60 hover:bg-sky-900/80 border-2 border-sky-400/50 text-white font-black text-base transition-all backdrop-blur-md shadow-lg"
            >
              <span>Ver Serviços & Obras</span>
            </a>
          </div>

          {/* WhatsApp Direto */}
          <div className="pt-1 text-xs sm:text-sm text-sky-200 flex items-center justify-center gap-2 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Atendimento Rápido • Fone / WhatsApp: <strong className="text-white font-black underline">{contact.whatsappDisplay}</strong></span>
          </div>
        </div>

        {/* Grade de Estatísticas / Autoridade (Cards Brancos de Luxo) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {info.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/95 border-2 border-white shadow-xl hover:shadow-2xl transition-all text-center backdrop-blur-sm transform hover:-translate-y-1"
            >
              <p className="text-2xl sm:text-3xl font-black text-sky-600">
                {stat.value}
              </p>
              <p className="mt-2 text-xs sm:text-sm font-bold text-slate-700">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Onda de Transição Suave para a próxima seção Branca */}
      <div className="absolute bottom-0 left-0 right-0 leading-none pointer-events-none z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8 sm:h-10 text-white fill-current">
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,20 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}