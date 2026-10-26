import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { clientData } from '../config/clientData';

export default function BeforeAfterSlider() {
  const { beforeAfter } = clientData;
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-700 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>Padrão de Acabamento & Segurança</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {beforeAfter.title}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            {beforeAfter.subtitle}
          </p>
        </motion.div>

        {/* Componente Interativo com Barra de Arrastar */}
        <div className="relative max-w-3xl mx-auto select-none rounded-2xl overflow-hidden border-2 border-sky-200 shadow-2xl bg-white">
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
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-sky-300 text-xs font-extrabold text-sky-800 shadow-md">
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
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-slate-300 text-xs font-extrabold text-slate-800 shadow-md">
                {beforeAfter.beforeLabel}
              </div>
            </div>

            {/* Linha Divisória e Alça de Arraste em Azul Bebê */}
            <div
              className="absolute top-0 bottom-0 w-1.5 bg-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.8)] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-sky-600 flex items-center justify-center font-black text-sm shadow-xl border-2 border-sky-400">
                ↔
              </div>
            </div>
          </div>

          <div className="bg-sky-50 px-4 py-3 text-center text-xs text-slate-700 border-t border-sky-100 font-medium">
            👆 <span className="text-sky-700 font-bold">Arraste para os lados</span> para comparar a transformação
          </div>
        </div>

      </div>
    </section>
  );
}
