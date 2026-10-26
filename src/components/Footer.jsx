import React from 'react';
import { ArrowUp } from 'lucide-react';
import { clientData } from '../config/clientData';

export default function Footer() {
  const { info, contact } = clientData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-slate-50 border-t border-sky-100 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-extrabold text-sm text-slate-900">Christhyan Muniz ⚡</span>
            <span className="text-sky-600 font-bold">• O Eletricista Autônomo</span>
          </div>
          <p>© {currentYear} Todos os direitos reservados. Atendimento na Zona Sul e Grande São Paulo.</p>
          <p className="mt-1 text-slate-400">CFTV || WallBox || Instalações || Manutenções</p>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-sky-50 text-slate-700 hover:text-slate-950 border border-sky-200 transition-colors shadow-sm font-semibold"
          aria-label="Voltar ao topo"
        >
          <span>Voltar ao topo</span>
          <ArrowUp className="w-4 h-4 text-sky-500" />
        </button>

      </div>
    </footer>
  );
}
