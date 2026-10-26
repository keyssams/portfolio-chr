import React from 'react';
import { ArrowUp } from 'lucide-react';
import { clientData } from '../config/clientData';

export default function Footer() {
  const { info } = clientData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div>
          <p>© {currentYear} {info.name}. Todos os direitos reservados.</p>
          <p className="mt-0.5 text-slate-600">Desenvolvido com tecnologia de alta performance.</p>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
          aria-label="Voltar ao topo"
        >
          <span>Voltar ao topo</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
