import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, CheckCircle2, Zap } from 'lucide-react';
import { clientData } from '../config/clientData';

export default function About() {
  const { info, about } = clientData;

  const getDifferentialIcon = (index) => {
    switch (index) {
      case 0: return <Zap className="w-5 h-5 text-sky-300" />;
      case 1: return <ShieldCheck className="w-5 h-5 text-sky-400" />;
      case 2: return <Clock className="w-5 h-5 text-white" />;
      default: return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="sobre" className="py-20 bg-slate-900/40 border-t border-b border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-bold text-sky-300">
            Quem Sou Eu
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            {about.title}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {about.subtitle}
          </p>
        </motion.div>

        {/* Conteúdo Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Card com Foto / Apresentação */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-sky-400 to-white rounded-3xl blur-lg opacity-25"></div>
              <div className="relative rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-2xl">
                <img
                  src={info.avatarUrl}
                  alt={info.name}
                  className="w-full h-80 object-cover rounded-xl shadow-md border border-slate-700"
                />
                <div className="mt-5 text-center">
                  <h3 className="text-xl font-extrabold text-white">{info.name}</h3>
                  <p className="text-sm text-sky-300 font-semibold mt-1">O Eletricista Autônomo</p>
                </div>

                <div className="mt-5 pt-5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Atendimento em SP
                  </span>
                  <span className="text-sky-300 font-semibold">Sem Intermediários</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Textos de História e Diferenciais */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-slate-200 text-base sm:text-lg leading-relaxed">
              {about.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Grid dos 4 Diferenciais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {about.diferenciais.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-sky-400/40 transition-colors flex gap-3.5"
                >
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 h-fit">
                    {getDifferentialIcon(idx)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-normal">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
