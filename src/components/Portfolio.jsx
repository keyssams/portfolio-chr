import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';
import { clientData } from '../config/clientData';

export default function Portfolio() {
  const { portfolio, contact } = clientData;
  const [activeCategory, setActiveCategory] = useState('Todos');

  // Categorias únicas extraídas dos itens
  const categories = ['Todos', ...new Set(portfolio.map((item) => item.category))];

  const filteredItems = activeCategory === 'Todos'
    ? portfolio
    : portfolio.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-slate-900/30 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-sky-400">
            Cases & Trabalhos
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Portfólio em Destaque
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Exemplos de projetos entregues com alto padrão de qualidade e estabilidade.
          </p>
        </div>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grade de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const projectWhatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
              `Olá! Vi o projeto "${item.title}" no seu portfólio e gostaria de criar algo semelhante para minha empresa.`
            )}`;

            return (
              <div
                key={item.id}
                className="group rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden hover:border-slate-700 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Imagem do Projeto */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-950">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-950/80 backdrop-blur-md text-sky-400 border border-slate-700">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Detalhes do Projeto */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-950 text-slate-400 border border-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Ação */}
                <div className="p-6 pt-0">
                  <a
                    href={projectWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700/80 text-xs sm:text-sm font-semibold text-sky-400 transition-colors"
                  >
                    <span>Quero um Projeto Assim</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
