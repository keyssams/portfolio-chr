import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { clientData } from '../config/clientData';

export default function Portfolio() {
  const { portfolio, contact } = clientData;
  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = ['Todos', ...new Set(portfolio.map((item) => item.category))];

  const filteredItems = activeCategory === 'Todos'
    ? portfolio
    : portfolio.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-sky-50/30 border-t border-sky-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs uppercase tracking-widest font-extrabold text-sky-600">
            Cases & Obras Realizadas
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Resultados de Serviços Prestados
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Veja na prática a dedicação, qualidade técnica e acabamento nos trabalhos realizados.
          </p>
        </motion.div>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm ${
                activeCategory === cat
                  ? 'bg-sky-400 text-slate-950 shadow-sky-300/40'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-sky-50 border border-sky-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grade de Projetos em Branco com Sombra */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => {
            const projectWhatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
              `Olá Christhyan! Vi o serviço de "${item.title}" no seu site e gostaria de solicitar um orçamento semelhante.`
            )}`;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group rounded-2xl bg-white border border-sky-100 overflow-hidden hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-md"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 text-xs font-bold rounded-full bg-white/95 backdrop-blur-md text-sky-800 border border-sky-200 shadow-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-50 text-sky-800 border border-sky-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    href={projectWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-xs font-bold text-sky-700 transition-colors"
                  >
                    <span>Quero um Serviço Assim</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
