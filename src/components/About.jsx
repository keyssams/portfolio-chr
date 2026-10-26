import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, CheckCircle2, Zap } from 'lucide-react';
import { clientData } from '../config/clientData';

export default function About() {
  const { info, about } = clientData;

  const getDifferentialIcon = (index) => {
    switch (index) {
      case 0: return <Zap className="w-5 h-5 text-sky-600" />;
      case 1: return <ShieldCheck className="w-5 h-5 text-sky-500" />;
      case 2: return <Clock className="w-5 h-5 text-sky-600" />;
      default: return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <section id="sobre" className="py-20 bg-sky-50/40 border-t border-b border-sky-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-extrabold text-sky-600">
            Quem Sou Eu
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
            {about.title}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            {about.subtitle}
          </p>
        </motion.div>

        {/* Conteúdo Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Card com Foto Real do Christhyan no Painel */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-sky-300 via-sky-100 to-white rounded-3xl blur-lg opacity-60"></div>
              <div className="relative rounded-2xl bg-white border border-sky-200 p-4 shadow-xl overflow-hidden">
                <img
                  src={info.heroFullUrl}
                  alt={info.name}
                  className="w-full h-96 object-cover rounded-xl shadow-md border border-slate-100"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-extrabold text-slate-900">{info.name}</h3>
                  <p className="text-sm text-sky-600 font-bold mt-0.5">O Eletricista Autônomo</p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Atendimento em SP
                  </span>
                  <span className="text-sky-600 font-bold">Sem Intermediários</span>
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
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              {about.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Grid dos 4 Diferenciais em Branco com Borda Azul */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {about.diferenciais.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl bg-white border border-sky-100 hover:border-sky-300 hover:shadow-md transition-all flex gap-3.5 shadow-sm"
                >
                  <div className="p-2.5 rounded-lg bg-sky-50 border border-sky-200 h-fit">
                    {getDifferentialIcon(idx)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-normal">{item.desc}</p>
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
