import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MessageSquare, CheckCircle2, Zap } from 'lucide-react';
import { clientData } from '../config/clientData';

export default function Hero() {
  const { info, contact } = clientData;
  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappDefaultMessage)}`;
  
  const heroRef = useRef(null);

  // Efeito Parallax conectado à rolagem
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 450], [1, 0.15]);
  const heroScale   = useTransform(scrollY, [0, 450], [1, 0.94]);
  const heroY       = useTransform(scrollY, [0, 450], [0, 90]);
  const glowY       = useTransform(scrollY, [0, 450], [0, 160]);

  return (
    <section ref={heroRef} id="inicio" className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      
      {/* Luz ambiente dourada/âmbar elétrica */}
      <motion.div 
        style={{ y: glowY }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-amber-500/15 blur-[140px] rounded-full pointer-events-none -z-10" 
      />

      <motion.div 
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto text-center space-y-7">
          
          {/* Badge Eletricista com Raio */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-xs font-semibold text-amber-300 shadow-inner"
          >
            <Zap className="w-3.5 h-3.5 fill-amber-400 text-amber-400 animate-pulse" />
            <span>Eletricista Residencial & Predial • Padrão NBR 5410</span>
          </motion.div>

          {/* Título Principal */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]"
          >
            Instalações elétricas seguras e{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-200">
              sem gambiarra.
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto"
          >
            {info.headline} {info.bioShort}
          </motion.p>

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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-400/40 transition-all"
            >
              <MessageSquare className="w-5 h-5 fill-slate-950" />
              <span>Solicitar Orçamento no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-base transition-colors"
            >
              <span>Ver Obras & Quadros Montados</span>
            </motion.a>
          </motion.div>

          {/* Localização */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-2 text-xs sm:text-sm text-slate-400 flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{info.location}</span>
          </motion.div>
        </div>

        {/* Grade de Estatísticas */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-14 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {info.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm text-center hover:border-amber-500/30 transition-colors"
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
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
