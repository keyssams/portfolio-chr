import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ZoomIn, X, MessageSquare } from 'lucide-react';
import { clientData } from '../config/clientData';

export default function Portfolio() {
  const { portfolio, contact } = clientData;
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [activeImageModal, setActiveImageModal] = useState(null);

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
            Veja na prática a dedicação, qualidade técnica e acabamento nos trabalhos realizados pelo Christhyan.
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

        {/* Grade de Projetos em Branco com Sombra (Grid de 3 Colunas Perfeito para 6 Itens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group rounded-2xl bg-white border border-sky-100 overflow-hidden hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-md"
              >
                <div>
                  <div 
                    onClick={() => setActiveImageModal(item)}
                    className="relative h-56 overflow-hidden bg-slate-900 cursor-pointer group/img"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badge da Categoria */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="px-3 py-1 text-xs font-black rounded-full bg-white/95 backdrop-blur-md text-sky-800 border border-sky-200 shadow-md">
                        {item.category}
                      </span>
                    </div>

                    {/* Dica de Zoom ao passar mouse */}
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 text-slate-950 text-xs font-bold shadow-md">
                        <ZoomIn className="w-3.5 h-3.5 text-sky-600" />
                        Ver Imagem Completa
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
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-sky-50 hover:bg-sky-400 hover:text-slate-950 border border-sky-200 text-xs font-bold text-sky-700 transition-all shadow-sm"
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

      {/* MODAL LIGHTBOX PARA VER QUALQUER PROJETO COMPLETO */}
      <AnimatePresence>
        {activeImageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setActiveImageModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-sky-300"
            >
              <button
                onClick={() => setActiveImageModal(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-900 transition-colors shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="bg-slate-950 flex items-center justify-center p-2">
                <img
                  src={activeImageModal.image}
                  alt={activeImageModal.title}
                  className="max-h-[75vh] w-auto object-contain rounded-lg"
                />
              </div>

              <div className="p-4 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-sky-100">
                <div className="max-w-md">
                  <h4 className="font-black text-slate-900 text-sm leading-tight">{activeImageModal.title}</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">{activeImageModal.category}</p>
                </div>

                <a
                  href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
                    `Olá Christhyan! Vi o serviço de "${activeImageModal.title}" no seu site e gostaria de solicitar um orçamento semelhante.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-xs shadow-md transition-all whitespace-nowrap"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Pedir Orçamento</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}