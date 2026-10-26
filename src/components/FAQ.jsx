import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { clientData } from '../config/clientData';

export default function FAQ() {
  const { faq } = clientData;
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold text-sky-400">
            Dúvidas Frequentes
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Perguntas & Respostas
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Tudo o que você precisa saber antes de iniciarmos o seu projeto.
          </p>
        </div>

        {/* Lista Sanfona (Accordion) */}
        <div className="space-y-4">
          {faq.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left text-white font-semibold text-base sm:text-lg hover:text-sky-300 transition-colors focus:outline-none"
                >
                  <span className="pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-sky-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/50">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
