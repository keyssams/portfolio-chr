import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle, MessageSquare } from 'lucide-react';
import { clientData } from '../config/clientData';

export default function Locations() {
  const { regions, contact } = clientData;
  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    'Olá Christhyan! Moro em São Paulo e gostaria de verificar sua disponibilidade de atendimento para minha região.'
  )}`;

  return (
    <section id="regioes" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-xs font-bold text-sky-300 mb-3">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>São Paulo • Zona Sul & Nobre</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Regiões com Atendimento Exclusivo
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Atendimento residencial, predial e comercial com pontualidade e hora marcada.
          </p>
        </motion.div>

        {/* Grade dos Bairros */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto">
          {regions.map((bairro, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -3, borderColor: '#38bdf8' }}
              className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5 text-slate-200 transition-all shadow-sm"
            >
              <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0" />
              <span className="text-sm font-semibold">{bairro}</span>
            </motion.div>
          ))}
        </div>

        {/* Chamada para ação da região */}
        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-slate-400 mb-4">
            Seu bairro ou condomínio não está na lista? Também atendemos regiões próximas sob consulta!
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-lg shadow-sky-500/20 hover:shadow-sky-400/30 transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950" />
            <span>Consultar Disponibilidade para Minha Região</span>
          </a>
        </div>

      </div>
    </section>
  );
}
