import React, { useState } from 'react';
import { MessageSquare, Menu, X, Zap } from 'lucide-react';
import { clientData } from '../config/clientData';

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { info, contact } = clientData;

  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappDefaultMessage)}`;

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Regiões SP', href: '#regioes' },
    { name: 'Antes & Depois', href: '#antes-depois' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all">
      {/* Faixa de Destaque no Topo em Azul Bebê */}
      <div className="bg-gradient-to-r from-sky-400 via-sky-300 to-sky-400 text-slate-950 text-xs py-1.5 px-4 text-center font-bold tracking-wide flex items-center justify-center gap-2 shadow-sm">
        <Zap className="w-3.5 h-3.5 fill-slate-950 animate-bounce" />
        <span>Christhyan Muniz ⚡ O Eletricista Autônomo • Atendendo Moema, Morumbi, Faria Lima e Grande SP</span>
      </div>

      {/* Navegação Fundo Branco */}
      <div className="backdrop-blur-xl bg-white/95 border-b border-sky-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Oficial */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-400 to-sky-200 flex items-center justify-center font-black text-slate-950 shadow-md shadow-sky-300/40 group-hover:scale-105 transition-transform border border-sky-300">
              ⚡
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                Christhyan Muniz ⚡
              </span>
              <span className="block text-xs text-sky-600 font-bold">
                O Eletricista Autônomo
              </span>
            </div>
          </a>

          {/* Links Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-slate-700 hover:text-sky-600 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Botões Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            {contact.instagram && (
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-sky-50 border border-sky-200 text-sky-600 hover:text-sky-700 hover:bg-sky-100 transition-colors"
                title="Instagram Oficial"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            )}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-400 hover:bg-sky-300 text-slate-950 font-extrabold text-xs tracking-wider uppercase shadow-md shadow-sky-300/40 transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>(11) 94927-7334</span>
            </a>
          </div>

          {/* Botão Hambúrguer Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-sky-50 focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-sky-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-semibold text-slate-700 hover:bg-sky-50 rounded-lg hover:text-sky-600"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-sm shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950" />
                <span>Chamar no WhatsApp (11) 94927-7334</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
