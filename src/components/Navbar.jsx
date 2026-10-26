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
      {/* Faixa de Destaque no Topo */}
      <div className="bg-gradient-to-r from-sky-500 via-sky-400 to-sky-500 text-slate-950 text-xs py-1.5 px-4 text-center font-bold tracking-wide flex items-center justify-center gap-2 shadow-sm">
        <Zap className="w-3.5 h-3.5 fill-slate-950 animate-bounce" />
        <span>Christhyan Muniz ⚡ O Eletricista Autônomo • Atendendo Moema, Morumbi, Faria Lima e Grande SP</span>
      </div>

      {/* Navegação */}
      <div className="backdrop-blur-xl bg-slate-950/85 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Oficial */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-400 to-white flex items-center justify-center font-black text-slate-950 shadow-lg shadow-sky-400/20 group-hover:scale-105 transition-transform">
              ⚡
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-sky-300 transition-colors">
                Christhyan Muniz ⚡
              </span>
              <span className="block text-xs text-sky-300 font-semibold">
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
                className="text-xs font-semibold text-slate-300 hover:text-sky-300 transition-colors uppercase tracking-wider"
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
                className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-300 hover:border-sky-400/40 transition-colors"
                title="Instagram Oficial"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            )}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-400 hover:bg-sky-300 text-slate-950 font-extrabold text-xs tracking-wider uppercase shadow-md shadow-sky-400/25 hover:shadow-sky-300/40 transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>(11) 94927-7334</span>
            </a>
          </div>

          {/* Menu Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Drawer Mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-800 bg-slate-900/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-semibold text-slate-200 hover:bg-slate-800/80 rounded-lg hover:text-sky-300"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-sm"
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
