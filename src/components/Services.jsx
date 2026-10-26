import React from 'react';
import { Database, ShoppingCart, Layout, Zap, Check, ArrowRight, MessageSquare } from 'lucide-react';
import { clientData } from '../config/clientData';

export default function Services() {
  const { services, contact } = clientData;

  // Mapa de ícones
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'Database': return <Database className="w-6 h-6 text-sky-400" />;
      case 'ShoppingCart': return <ShoppingCart className="w-6 h-6 text-cyan-400" />;
      case 'Layout': return <Layout className="w-6 h-6 text-teal-400" />;
      default: return <Zap className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="servicos" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-sky-400">
            O Que Faço
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Serviços & Soluções Especializadas
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Projetos desenvolvidos sob medida para atender exatamente o que o seu negócio precisa.
          </p>
        </div>

        {/* Grade de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => {
            const specificWhatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
              `Olá! Gostaria de um orçamento específico para o serviço de: ${service.title}.`
            )}`;

            return (
              <div
                key={service.id}
                className="group relative p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 group-hover:scale-105 group-hover:border-sky-500/40 transition-all">
                      {renderIcon(service.icon)}
                    </div>
                    {service.badge && (
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800/80">
                  <a
                    href={specificWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Solicitar Orçamento deste Serviço</span>
                    <ArrowRight className="w-4 h-4" />
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
