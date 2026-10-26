import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Wrench, ShieldAlert, Cpu, Sparkles, Check, ArrowRight, MessageSquare } from 'lucide-react';
import { clientData } from '../config/clientData';

export default function Services() {
  const { services, contact } = clientData;

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-sky-300" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-white" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-sky-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-sky-200" />;
      default: return <Zap className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="servicos" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-bold text-sky-300">
            • 𝐂𝐅𝐓𝐕 || • 𝐖𝐚𝐥𝐥𝐁𝐨𝐱 || • 𝐈𝐧𝐬𝐭𝐚𝐥𝐚çõ𝐞𝐬 || • 𝐌𝐚𝐧𝐮𝐭𝐞𝐧çõ𝐞𝐬
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            Serviços & Especialidades
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Soluções completas com atendimento direto, segurança e alto padrão de acabamento.
          </p>
        </motion.div>

        {/* Grade de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const specificWhatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
              `Olá Christhyan! Vi seu site e gostaria de solicitar um orçamento para o serviço de: ${service.title}.`
            )}`;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-400/50 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-sky-950/20"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:scale-105 group-hover:border-sky-400/40 transition-all">
                      {renderIcon(service.icon)}
                    </div>
                    {service.badge && (
                      <span className="px-3 py-1 text-xs font-bold rounded-full bg-sky-500/10 text-sky-300 border border-sky-400/20">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-sky-200 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-sky-400 flex-shrink-0" />
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
                    className="inline-flex items-center gap-2 text-sm font-bold text-sky-300 hover:text-white transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Pedir Orçamento Deste Serviço</span>
                    <ArrowRight className="w-4 h-4" />
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
