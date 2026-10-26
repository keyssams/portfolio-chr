import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Wrench, ShieldAlert, Cpu, Sparkles, Check, ArrowRight, MessageSquare } from 'lucide-react';
import { clientData } from '../config/clientData';

export default function Services() {
  const { services, contact } = clientData;

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-sky-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-sky-500" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-sky-600" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-sky-500" />;
      default: return <Zap className="w-6 h-6 text-sky-500" />;
    }
  };

  return (
    <section id="servicos" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-extrabold text-sky-600">
            • 𝐂𝐅𝐓𝐕 || • 𝐖𝐚𝐥𝐥𝐁𝐨𝐱 || • 𝐈𝐧𝐬𝐭𝐚𝐥𝐚çõ𝐞𝐬 || • 𝐌𝐚𝐧𝐮𝐭𝐞𝐧çõ𝐞𝐬
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Serviços & Especialidades
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Soluções completas com atendimento direto, segurança e alto padrão de acabamento.
          </p>
        </motion.div>

        {/* Grade de Serviços em Branco com Detalhes Azul Bebê */}
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
                className="group relative p-7 rounded-2xl bg-white border border-sky-100 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 group-hover:scale-105 group-hover:bg-sky-100 transition-all">
                      {renderIcon(service.icon)}
                    </div>
                    {service.badge && (
                      <span className="px-3 py-1 text-xs font-bold rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-sky-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <a
                    href={specificWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-extrabold text-sky-600 hover:text-sky-700 transition-colors group-hover:translate-x-1 duration-200"
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
