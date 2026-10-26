import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MessageSquare, CheckCircle2, Zap } from 'lucide-react';
import { clientData } from '../config/clientData';

export default function Hero() {
  const { info, contact } = clientData;
  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappDefaultMessage)}`;
  
  const heroRef = useRef(null);

  // Parallax ao rolar a página
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 450], [1, 0.15]);
  const heroScale   = useTransform(scrollY, [0, 450], [1, 0.94]);
  const heroY       = useTransform(scrollY, [0, 450], [0, 90]);
  const glowY       = useTransform(scrollY, [0, 450], [0, 160]);

  return (
    <section ref={heroRef} id="inicio" className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-white">
      
      {/* Luz ambiente azul bebê */}
      <motion.div 
        style={{ y: glowY }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-sky-200/50 blur-[130px] rounded-full pointer-events-none -z-10" 
      />

      <motion.div 
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          {/* Foto Real de Perfil com Aro Neon e Borda Branca */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-sky-400 via-sky-200 to-sky-400 blur-md opacity-80 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
              <img
                src={info.avatarUrl}
                alt={info.name}
                className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-white shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Badge Oficial com o Slogan */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-800 shadow-sm"
          >
            <Zap className="w-3.5 h-3.5 fill-sky-500 text-sky-500 animate-pulse" />
            <span>Christhyan Muniz ⚡ O Eletricista Autônomo</span>
          </motion.div>

          {/* Título Principal */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]"
          >
            Instalações elétricas seguras,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-600">
              WallBox e CFTV
            </span>{' '}
            com atendimento direto.
          </motion.h1>

          {/* Subtítulo */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto"
          >
            {info.headline} Atendimento em <span className="text-sky-600 font-bold">Moema, Morumbi, Vila Olímpia, Faria Lima e Grande SP</span>.
          </motion.p>

          {/* Pilares em Destaque */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-sky-800"
          >
            <span className="px-3 py-1.5 rounded-lg bg-sky-50 border border-sky-200 shadow-sm">⚡ 𝐂𝐅𝐓𝐕</span>
            <span className="px-3 py-1.5 rounded-lg bg-sky-50 border border-sky-200 shadow-sm">⚡ 𝐖𝐚𝐥𝐥𝐁𝐨𝐱</span>
            <span className="px-3 py-1.5 rounded-lg bg-sky-50 border border-sky-200 shadow-sm">⚡ 𝐈𝐧𝐬𝐭𝐚𝐥𝐚çõ𝐞𝐬</span>
            <span className="px-3 py-1.5 rounded-lg bg-sky-50 border border-sky-200 shadow-sm">⚡ 𝐌𝐚𝐧𝐮𝐭𝐞𝐧çõ𝐞𝐬</span>
          </motion.div>

          {/* Botões de Ação */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-extrabold text-base shadow-xl shadow-sky-300/40 transition-all"
            >
              <MessageSquare className="w-5 h-5 fill-slate-950" />
              <span>Solicitar Orçamento no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#servicos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-sky-50 border border-sky-200 text-slate-800 font-bold text-base transition-colors shadow-sm"
            >
              <span>Ver Serviços & Obras</span>
            </motion.a>
          </motion.div>

          {/* Localização e WhatsApp */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-2 text-xs sm:text-sm text-slate-600 flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Atendimento Rápido • Fone / WhatsApp: <strong className="text-slate-900 font-bold">{contact.whatsappDisplay}</strong></span>
          </motion.div>
        </div>

        {/* Grade de Estatísticas / Autoridade */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-14 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {info.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-sky-100 shadow-md hover:border-sky-300 hover:shadow-lg transition-all text-center"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-sky-600">
                {stat.value}
              </p>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}
