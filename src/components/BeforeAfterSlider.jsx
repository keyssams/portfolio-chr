import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, MessageSquare, ZoomIn, X, ShieldCheck } from 'lucide-react';
import { clientData } from '../config/clientData';

export default function BeforeAfterSlider() {
  const { beforeAfter, contact } = clientData;
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeModalImage, setActiveModalImage] = useState(null);

  const handleMove = (clientX, rect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <section id="antes-depois" className="py-20 bg-white border-t border-b border-sky-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-800 mb-3 shadow-sm">
            <Sparkles className="w-4 h-4 text-sky-500" />
            <span>Padrão de Acabamento & Transformações Reais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {beforeAfter.title}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {beforeAfter.subtitle}
          </p>
        </motion.div>

        {/* 1. COMPONENTE INTERATIVO: QUADRO DE DISTRIBUIÇÃO (SLIDER) */}
        <div className="relative max-w-3xl mx-auto select-none rounded-2xl overflow-hidden border-2 border-sky-200 shadow-2xl bg-white mb-16">
          <div
            className="relative h-80 sm:h-96 md:h-[450px] w-full cursor-ew-resize"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* Imagem "Depois" (Fundo completo) */}
            <img
              src={beforeAfter.afterImage}
              alt={beforeAfter.afterLabel}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-sky-300 text-xs font-black text-sky-800 shadow-md">
              {beforeAfter.afterLabel}
            </div>

            {/* Imagem "Antes" (Cortada pela posição da barra) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={beforeAfter.beforeImage}
                alt={beforeAfter.beforeLabel}
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', minWidth: '100%' }}
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-slate-300 text-xs font-black text-slate-800 shadow-md">
                {beforeAfter.beforeLabel}
              </div>
            </div>

            {/* Linha Divisória e Alça de Arraste em Azul Bebê */}
            <div
              className="absolute top-0 bottom-0 w-1.5 bg-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.8)] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white text-sky-600 flex items-center justify-center font-black text-base shadow-xl border-2 border-sky-400">
                ↔
              </div>
            </div>
          </div>

          <div className="bg-sky-50 px-4 py-3 text-center text-xs text-slate-700 border-t border-sky-100 font-semibold flex items-center justify-center gap-2">
            <span>👆</span>
            <span><strong className="text-sky-700 font-black">Arraste para os lados</strong> para comparar a montagem e organização técnica do quadro Steck</span>
          </div>
        </div>

        {/* 2. CASOS REAIS DE ANTES E DEPOIS: ELETROFITA & PROLONGAÇÃO DE TOMADA */}
        {beforeAfter.cases && beforeAfter.cases.length > 0 && (
          <div className="mt-8 pt-8 border-t border-sky-100">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-widest font-extrabold text-sky-600">
                Instalações Rápidas & Limpas
              </span>
              <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Casos Reais: Eletrofita e Tomadas
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Soluções inteligentes para novos pontos de energia sem quebra-quebra de paredes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {beforeAfter.cases.map((c) => {
                const caseWhatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(c.whatsappMessage)}`;

                return (
                  <motion.div
                    key={c.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group bg-white rounded-2xl border-2 border-sky-100 overflow-hidden shadow-lg hover:shadow-2xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Imagem do Flyer com Botão de Zoom */}
                      <div 
                        onClick={() => setActiveModalImage(c)}
                        className="relative bg-slate-900 cursor-pointer overflow-hidden flex items-center justify-center group-hover:opacity-95 transition-opacity"
                        style={{ minHeight: '440px', maxHeight: '520px' }}
                      >
                        <img
                          src={c.image}
                          alt={c.title}
                          className="w-full h-full max-h-[520px] object-contain transition-transform duration-500 group-hover:scale-102"
                        />
                        
                        {/* Overlay sutil ao passar o mouse com dica de zoom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 text-slate-950 text-xs font-bold shadow-md">
                            <ZoomIn className="w-3.5 h-3.5 text-sky-600" />
                            Clique para Ampliar
                          </span>
                          <span className="text-white text-xs font-semibold bg-sky-600/90 px-2.5 py-1 rounded-md">
                            100% Real
                          </span>
                        </div>

                        {/* Badge no Topo */}
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 text-xs font-black rounded-full bg-white/95 backdrop-blur-md text-sky-800 border border-sky-200 shadow-md">
                            {c.badge}
                          </span>
                        </div>
                      </div>

                      {/* Informações do Case */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-xs font-bold text-sky-600 mb-1.5">
                          <ShieldCheck className="w-4 h-4 text-emerald-500" />
                          <span>{c.tag}</span>
                        </div>

                        <h4 className="text-xl font-black text-slate-900 group-hover:text-sky-600 transition-colors">
                          {c.title}
                        </h4>

                        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {c.description}
                        </p>
                      </div>
                    </div>

                    {/* Botão de Contato Específico no Rodapé */}
                    <div className="p-6 pt-0">
                      <a
                        href={caseWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-xs sm:text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <MessageSquare className="w-4 h-4 fill-slate-950" />
                        <span>Solicitar Orçamento Deste Serviço</span>
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* MODAL LIGHTBOX PARA VER A IMAGEM EM ALTA DEFINIÇÃO */}
      <AnimatePresence>
        {activeModalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setActiveModalImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-sky-300"
            >
              {/* Botão Fechar */}
              <button
                onClick={() => setActiveModalImage(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-900 transition-colors shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="bg-slate-950 flex items-center justify-center p-2">
                <img
                  src={activeModalImage.image}
                  alt={activeModalImage.title}
                  className="max-h-[75vh] w-auto object-contain rounded-lg"
                />
              </div>

              <div className="p-4 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-sky-100">
                <div>
                  <h4 className="font-black text-slate-900 text-sm">{activeModalImage.title}</h4>
                  <p className="text-xs text-slate-500 font-medium">{activeModalImage.tag}</p>
                </div>

                <a
                  href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(activeModalImage.whatsappMessage)}`}
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