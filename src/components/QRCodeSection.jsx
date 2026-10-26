import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Smartphone, Download, Share2 } from 'lucide-react';
import { clientData } from '../config/clientData';

export default function QRCodeSection() {
  const { info } = clientData;
  const siteUrl = "https://portfolio-chr.vercel.app/";
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(siteUrl)}`;

  return (
    <section id="qrcode" className="py-16 bg-slate-900/30 border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-sky-500/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-xs font-bold text-sky-300">
              <QrCode className="w-3.5 h-3.5 text-sky-400" />
              <span>Cartão de Visitas Digital & QR Code</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Acesse o site oficial apontando a câmera do celular
            </h3>
            <p className="text-slate-300 text-sm max-w-md">
              QR Code oficial para colocar em cartões de visita, adesivos em veículos de trabalho, uniformes ou orçamentos em PDF.
            </p>
            <p className="text-xs text-sky-300 font-mono">
              {siteUrl}
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="p-3 bg-white rounded-2xl shadow-2xl border-4 border-sky-400">
              <img
                src={qrCodeUrl}
                alt="QR Code do Site"
                className="w-36 h-36 object-contain"
              />
            </div>
            <a
              href={qrCodeUrl}
              target="_blank"
              download="qrcode-christhyan-muniz.png"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Baixar QR Code em Alta Resolução</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
