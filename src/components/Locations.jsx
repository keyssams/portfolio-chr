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
    <section id="regioes" className="py-20 bg-sky-50/50 border-t border-b border-sky-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-sky-200 text-xs font-bold text-sky-700 shadow-sm mb-3">
            <MapPin className="w-3.5 h-3.5 text-sky-500" />
            <span>São Paulo • Zona Sul & Nobre</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Regiões com Atendimento Exclusivo
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Atendimento residencial, predial e comercial com pontualidade e hora marcada.
          </p>
        </motion.div>

        {/* Grade dos Bairros em Branco */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto">
          {regions.map((bairro, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -3, borderColor: '#38bdf8' }}
              className="p-3.5 rounded-xl bg-white border border-sky-100 flex items-center gap-2.5 text-slate-800 transition-all shadow-sm"
            >
              <CheckCircle className="w-4 h-4 text-sky-500 flex-shrink-0" />
              <span className="text-sm font-bold">{bairro}</span>
            </motion.div>
          ))}
        </div>

        {/* Chamada para ação da região */}
        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-slate-600 mb-4 font-medium">
            Seu bairro ou condomínio não está na lista? Também atendemos regiões próximas sob consulta!
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-400 hover:bg-sky-300 text-slate-950 font-extrabold text-sm shadow-md shadow-sky-300/40 transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950" />
            <span>Consultar Disponibilidade para Minha Região</span>
          </a>
        </div>

      </div>
    </section>
  );
}
