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
    <section ref={heroRef} id="inicio" className="relative pt-8 pb-20 md:pt-14 md:pb-28 overflow-hidden">
      
      {/* Luz ambiente azul bebê */}
      <motion.div 
        style={{ y: glowY }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-sky-400/15 blur-[140px] rounded-full pointer-events-none -z-10" 
      />

      <motion.div 
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          {/* Foto Real de Perfil com Aro Neon */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-400 via-white to-sky-400 blur-md opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
              <img
                src={info.avatarUrl}
                alt={info.name}
                className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-2 border-white shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Badge Oficial com o Slogan */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-sky-400/40 text-xs font-bold text-sky-200 shadow-inner"
          >
            <Zap className="w-3.5 h-3.5 fill-sky-300 text-sky-300 animate-pulse" />
            <span>Christhyan Muniz ⚡ O Eletricista Autônomo</span>
          </motion.div>

          {/* Título Principal */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]"
          >
            Instalações elétricas seguras,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-sky-200">
              WallBox e CFTV
            </span>{' '}
            com atendimento direto.
          </motion.h1>

          {/* Subtítulo */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto"
          >
            {info.headline} Atendimento em <span className="text-sky-300 font-semibold">Moema, Morumbi, Vila Olímpia, Faria Lima e Grande SP</span>.
          </motion.p>

          {/* Pilares em Destaque */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-sky-300"
          >
            <span className="px-3 py-1 rounded-lg bg-sky-500/10 border border-sky-400/20">⚡ 𝐂𝐅𝐓𝐕</span>
            <span className="px-3 py-1 rounded-lg bg-sky-500/10 border border-sky-400/20">⚡ 𝐖𝐚𝐥𝐥𝐁𝐨𝐱</span>
            <span className="px-3 py-1 rounded-lg bg-sky-500/10 border border-sky-400/20">⚡ 𝐈𝐧𝐬𝐭𝐚𝐥𝐚çõ𝐞𝐬</span>
            <span className="px-3 py-1 rounded-lg bg-sky-500/10 border border-sky-400/20">⚡ 𝐌𝐚𝐧𝐮𝐭𝐞𝐧çõ𝐞𝐬</span>
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-extrabold text-base shadow-xl shadow-sky-400/25 hover:shadow-sky-300/40 transition-all"
            >
              <MessageSquare className="w-5 h-5 fill-slate-950" />
              <span>Solicitar Orçamento no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#servicos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-base transition-colors"
            >
              <span>Ver Serviços & Obras</span>
            </motion.a>
          </motion.div>

          {/* Localização e WhatsApp */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-2 text-xs sm:text-sm text-slate-300 flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Atendimento Rápido • Fone / WhatsApp: <strong className="text-white">{contact.whatsappDisplay}</strong></span>
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
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm text-center hover:border-sky-400/40 transition-colors"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-white">
                {stat.value}
              </p>
              <p className="mt-2 text-xs sm:text-sm font-medium text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}
