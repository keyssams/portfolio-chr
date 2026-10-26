import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, CheckCircle2, Zap } from 'lucide-react';
import { clientData } from '../config/clientData';

export default function Hero() {
  const { info, contact } = clientData;
  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappDefaultMessage)}`;

  return (
    <section id="inicio" className="relative pt-8 pb-20 md:pt-14 md:pb-28 overflow-hidden bg-white">
      
      {/* ============================================================== */}
      {/* ARTE ESTILIZADA DE FUNDO: RAIOS, RELÂMPAGOS E ONDAS DE ENERGIA */}
      {/* ============================================================== */}
      
      {/* 1. Gradiente Radial Azul Suave */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100 via-sky-50/40 to-white pointer-events-none -z-20" />

      {/* 2. Malha Gráfica de Circuitos e Raios Vetoriais */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden select-none">
        <svg 
          className="w-full h-full opacity-65" 
          viewBox="0 0 1440 700" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Brilho neon para os raios */}
            <filter id="lightningGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            
            <linearGradient id="rayBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#0284c7" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.4" />
            </linearGradient>

            <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Linhas de Circuito de Fundo */}
          <path d="M-50 200 H400 L460 260 H980 L1040 200 H1500" stroke="url(#circuitGrad)" strokeWidth="1.5" strokeDasharray="6 6" />
          <path d="M-50 480 H320 L380 420 H1060 L1120 480 H1500" stroke="url(#circuitGrad)" strokeWidth="1.5" strokeDasharray="6 6" />

          {/* Relâmpago Principal Esquerdo */}
          <path 
            d="M 120 -20 L 90 140 L 140 160 L 70 320 L 115 340 L 30 520 L 65 540 L 10 680" 
            stroke="url(#rayBlue)" 
            strokeWidth="3" 
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#lightningGlow)"
          />
          {/* Ramificação do raio esquerdo */}
          <path 
            d="M 90 140 L 160 220 L 130 240 L 190 340" 
            stroke="#7dd3fc" 
            strokeWidth="1.5" 
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Relâmpago Principal Direito */}
          <path 
            d="M 1320 -20 L 1350 150 L 1290 180 L 1360 330 L 1310 360 L 1400 520 L 1360 550 L 1420 680" 
            stroke="url(#rayBlue)" 
            strokeWidth="3" 
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#lightningGlow)"
          />
          {/* Ramificação do raio direito */}
          <path 
            d="M 1290 180 L 1220 250 L 1250 270 L 1190 370" 
            stroke="#7dd3fc" 
            strokeWidth="1.5" 
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Arcos Elétricos e Ondas de Pulso no Centro (atrás do avatar) */}
          <circle cx="720" cy="180" r="140" stroke="#bae6fd" strokeWidth="1" strokeDasharray="8 8" opacity="0.6" />
          <circle cx="720" cy="180" r="220" stroke="#7dd3fc" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.4" />
          <circle cx="720" cy="180" r="320" stroke="#38bdf8" strokeWidth="0.8" opacity="0.25" />

          {/* Centelhas de Energia */}
          <polygon points="260,90 270,115 285,115 272,130 278,150 260,135 242,150 248,130 235,115 250,115" fill="#38bdf8" opacity="0.35" />
          <polygon points="1180,80 1190,105 1205,105 1192,120 1198,140 1180,125 1162,140 1168,120 1155,105 1170,105" fill="#38bdf8" opacity="0.35" />
        </svg>
      </div>

      {/* 3. Luz ambiente central azul bebê */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-300/30 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* ============================================================== */}
      {/* CONTEÚDO PRINCIPAL (100% SÓLIDO - SEM TRANSPARÊNCIA AO ROLAR) */}
      {/* ============================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          {/* Foto Real de Perfil com Aro Neon e Borda Branca */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-sky-400 via-sky-200 to-sky-400 blur-lg opacity-85 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
              <img
                src={info.avatarUrl}
                alt={info.name}
                className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white shadow-2xl"
              />
            </div>
          </div>

          {/* Badge Oficial com o Slogan */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-sky-300 text-xs font-bold text-sky-800 shadow-md">
            <Zap className="w-3.5 h-3.5 fill-sky-500 text-sky-500 animate-pulse" />
            <span>Christhyan Muniz ⚡ O Eletricista Autônomo</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
            Instalações elétricas seguras,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-sky-600">
              WallBox e CFTV
            </span>{' '}
            com atendimento direto.
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto font-medium">
            {info.headline} Atendimento com hora marcada em <span className="text-sky-600 font-bold">Moema, Morumbi, Vila Olímpia, Faria Lima e Grande SP</span>.
          </p>

          {/* Pilares em Destaque */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs font-extrabold text-sky-900">
            <span className="px-3.5 py-1.5 rounded-xl bg-white border border-sky-300 shadow-sm">⚡ 𝐂𝐅𝐓𝐕</span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white border border-sky-300 shadow-sm">⚡ 𝐖𝐚𝐥𝐥𝐁𝐨𝐱</span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white border border-sky-300 shadow-sm">⚡ 𝐈𝐧𝐬𝐭𝐚𝐥𝐚çõ𝐞𝐬</span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white border border-sky-300 shadow-sm">⚡ 𝐌𝐚𝐧𝐮𝐭𝐞𝐧çõ𝐞𝐬</span>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-black text-base shadow-xl shadow-sky-300/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="w-5 h-5 fill-slate-950" />
              <span>Solicitar Orçamento no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#servicos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-sky-50 border-2 border-sky-200 text-slate-800 font-bold text-base transition-colors shadow-md"
            >
              <span>Ver Serviços & Obras</span>
            </a>
          </div>

          {/* Localização e WhatsApp */}
          <div className="pt-2 text-xs sm:text-sm text-slate-600 flex items-center justify-center gap-2 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Atendimento Rápido • Fone / WhatsApp: <strong className="text-slate-900 font-bold">{contact.whatsappDisplay}</strong></span>
          </div>
        </div>

        {/* Grade de Estatísticas / Autoridade */}
        <div className="mt-14 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {info.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/95 border border-sky-200 shadow-md hover:border-sky-400 hover:shadow-xl transition-all text-center backdrop-blur-sm"
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
    </section>
  );
}
