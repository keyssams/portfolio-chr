import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Locations from './components/Locations';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import Portfolio from './components/Portfolio';
import QRCodeSection from './components/QRCodeSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactCTA from './components/ContactCTA';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-400 selection:text-slate-950">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Locations />
        <BeforeAfterSlider />
        <Portfolio />
        <QRCodeSection />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
