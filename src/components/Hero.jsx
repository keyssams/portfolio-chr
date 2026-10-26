import React from 'react';
import { ArrowRight, MessageSquare, CheckCircle2, Zap } from 'lucide-react';
import { clientData } from '../config/clientData';

export default function Hero() {
  const { info, contact } = clientData;
  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappDefaultMessage)}`;

  return (
    <section id="inicio" className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-sky-600 via-sky-500 to-sky-700 text-white shadow-inner">
      
      {/* ========================================================================= */}
      {/* ARTE MODERNA EM AZUL COM RELÂMPAGOS, CIRCUITOS E FORMAS GEOMÉTRICAS (100% VISÍVEL) */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        
        {/* 1. Formas Geométricas Angulares estilo Banner Oficial (Cortes dinâmicos) */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-400/40 rounded-full blur-3xl transform rotate-12" />
        <div className="absolute top-1/3 -right-24 w-[500px] h-[500px] bg-blue-700/50 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-[600px] h-[300px] bg-cyan-300/30 rounded-full blur-2xl" />

        {/* 2. Malha Vetorial de Relâmpagos e Raios em Alta Definição */}
        <svg 
          className="w-full h-full opacity-90" 
          viewBox="0 0 1440 800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Brilho elétrico intenso */}
            <filter id="lightningElectric" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="8" result="blur1" />
              <feGaussianBlur stdDeviation="3" result="blur2" />
              <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Gradiente do Raio Branco-Azul */}
            <linearGradient id="boltWhiteBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="60%" stopColor="#bae6fd" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
            </linearGradient>

            <linearGradient id="circuitLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Linhas Tecnológicas de Circuito */}
          <path d="M-50 180 H350 L420 250 H1020 L1090 180 H1500" stroke="url(#circuitLine)" strokeWidth="2" strokeDasharray="8 8" />
          <path d="M-50 520 H280 L350 450 H1090 L1160 520 H1500" stroke="url(#circuitLine)" strokeWidth="2" strokeDasharray="8 8" />
          
          {/* Pontos de conexão de circuito (Nodes) */}
          <circle cx="350" cy="180" r="5" fill="#ffffff" opacity="0.8" />
          <circle cx="1020" cy="250" r="5" fill="#ffffff" opacity="0.8" />
          <circle cx="420" cy="250" r="5" fill="#ffffff" opacity="0.8" />
          <circle cx="1090" cy="180" r="5" fill="#ffffff" opacity="0.8" />

          {/* ⚡ RELÂMPAGO PRINCIPAL ESQUERDO (Visível e Poderoso) */}
          <path 
            d="M 160 -10 L 120 160 L 180 180 L 90 360 L 150 380 L 40 580 L 80 600 L 10 780" 
            stroke="url(#boltWhiteBlue)" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            filter="url(#lightningElectric)"
          />
          {/* Ramificação esquerda */}
          <path 
            d="M 120 160 L 210 240 L 170 260 L 240 370" 
            stroke="#ffffff" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            opacity="0.8"
            filter="url(#lightningElectric)"
          />

          {/* ⚡ RELÂMPAGO PRINCIPAL DIREITO (Visível e Poderoso) */}
          <path 
            d="M 1280 -10 L 1320 170 L 1250 200 L 1340 380 L 1280 410 L 1390 590 L 1340 620 L 1420 790" 
            stroke="url(#boltWhiteBlue)" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            filter="url(#lightningElectric)"
          />
          {/* Ramificação direita */}
          <path 
            d="M 1250 200 L 1170 280 L 1200 300 L 1130 420" 
            stroke="#ffffff" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            opacity="0.8"
            filter="url(#lightningElectric)"
          />

          {/* Anéis de Pulso Eletromagnético no Centro */}
          <circle cx="720" cy="190" r="160" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="6 8" opacity="0.35" />
          <circle cx="720" cy="190" r="260" stroke="#bae6fd" strokeWidth="2" strokeDasharray="10 10" opacity="0.3" />
          <circle cx="720" cy="190" r="380" stroke="#ffffff" strokeWidth="1" strokeDasharray="4 6" opacity="0.2" />

          {/* Centelhas / Faíscas de Energia */}
          <polygon points="320,110 332,135 348,135 334,152 340,172 320,157 300,172 306,152 292,135 308,135" fill="#ffffff" opacity="0.6" filter="url(#lightningElectric)" />
          <polygon points="1120,95 1132,120 1148,120 1134,137 1140,157 1120,142 1100,157 1106,137 1092,120 1108,120" fill="#ffffff" opacity="0.6" filter="url(#lightningElectric)" />
        </svg>

        {/* Faixa Angular de Corte Moderno no Fundo */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-sky-400/20 to-transparent transform -skew-x-12 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-700/20 to-transparent transform -skew-x-12 pointer-events-none" />
      </div>

      {/* ========================================================================= */}
      {/* CONTEÚDO PRINCIPAL (100% NÍTIDO, SÓLIDO E DE ALTO CONTRASTE) */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          {/* Foto Real de Perfil com Aro Neon e Borda Branca Dupla */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-2.5 rounded-full bg-gradient-to-r from-white via-cyan-200 to-white blur-xl opacity-90 animate-pulse"></div>
              <img
                src={info.avatarUrl}
                alt={info.name}
                className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white shadow-[0_10px_35px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>

          {/* Badge Oficial com o Slogan */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-slate-900 text-xs sm:text-sm font-black shadow-xl border-2 border-sky-200">
            <Zap className="w-4 h-4 fill-sky-600 text-sky-600 animate-bounce" />
            <span>Christhyan Muniz ⚡ O Eletricista Autônomo</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] drop-shadow-md">
            Instalações elétricas seguras,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-sky-100 underline decoration-cyan-300 decoration-wavy decoration-2">
              WallBox e CFTV
            </span>{' '}
            com atendimento direto.
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl text-sky-50 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-sm">
            {info.headline} Atendimento com hora marcada em <span className="text-white font-extrabold underline">Moema, Morumbi, Vila Olímpia, Faria Lima e Grande SP</span>.
          </p>

          {/* Pilares em Destaque (Cards Brancos de Alto Padrão) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs sm:text-sm font-black text-slate-900">
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl bg-white hover:bg-sky-50 text-slate-950 font-black text-base shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.35)] transition-all transform hover:-translate-y-1 active:translate-y-0 border-2 border-white"
            >
              <MessageSquare className="w-5 h-5 fill-slate-950" />
              <span>Solicitar Orçamento no WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-sky-600" />
            </a>

            <a
              href="#servicos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-sky-700/60 hover:bg-sky-700/80 border-2 border-white/60 text-white font-black text-base transition-all backdrop-blur-md shadow-lg"
            >
              <span>Ver Serviços & Obras</span>
            </a>
          </div>

          {/* Localização e WhatsApp */}
          <div className="pt-2 text-xs sm:text-sm text-sky-100 flex items-center justify-center gap-2 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-300" />
            <span>Atendimento Rápido • Fone / WhatsApp: <strong className="text-white font-black underline">{contact.whatsappDisplay}</strong></span>
          </div>
        </div>

        {/* Grade de Estatísticas / Autoridade (Cards Brancos de Luxo) */}
        <div className="mt-14 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
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
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8 text-white fill-current">
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,20 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
