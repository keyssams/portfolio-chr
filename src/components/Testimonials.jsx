import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { clientData } from '../config/clientData';

export default function Testimonials() {
  const { testimonials } = clientData;

  return (
    <section id="depoimentos" className="py-20 bg-sky-50/40 border-t border-sky-100 overflow-hidden">
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
            Prova Social
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Avaliações de quem confiou nas nossas instalações e no nosso atendimento direto.
          </p>
        </motion.div>

        {/* Grade de Depoimentos em Branco com Sombra */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className="relative p-7 rounded-2xl bg-white border border-sky-100 flex flex-col justify-between hover:border-sky-300 transition-all shadow-md"
            >
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-medium">
                  "{item.comment}"
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center font-bold text-sky-700 text-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                  <p className="text-xs text-sky-600 font-semibold">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
