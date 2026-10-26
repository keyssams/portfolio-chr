import React from 'react';
import { Star, Quote } from 'lucide-react';
import { clientData } from '../config/clientData';

export default function Testimonials() {
  const { testimonials } = clientData;

  return (
    <section id="depoimentos" className="py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-sky-400">
            Prova Social
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            O Que Dizem Meus Clientes
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            A satisfação e a tranquilidade de quem já confiou no meu trabalho.
          </p>
        </div>

        {/* Grade de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative p-7 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                {/* Estrelas de Avaliação */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Informações do Autor */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-sky-400 text-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">{item.name}</h4>
                  <p className="text-xs text-slate-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
