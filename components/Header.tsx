'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/blog', label: 'Novidades' },
    { href: '/cotacao', label: 'Solicite sua Cotação' },
    { href: '/sobre-nos', label: 'Sobre Nós' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-brand-blue ${
        scrolled ? 'shadow-lg py-2' : 'py-3'
      }`}
    >
      <div className="container-custom relative flex items-center justify-between">

        {/* Mobile: hambúrguer à esquerda */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2 z-10"
          aria-label="Menu"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

        {/* Mobile: logos centralizadas (absolute) */}
        <Link href="/" className="lg:hidden absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/prevent-senior-white.png"
            alt="Prevent Senior"
            className="h-11 w-auto"
            style={{ mixBlendMode: 'screen' }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-start-white.png"
            alt="Start Corretora de Seguros"
            className="h-11 w-auto"
            style={{ mixBlendMode: 'screen' }}
          />
        </Link>

        {/* Desktop: logos à esquerda */}
        <Link href="/" className="hidden lg:flex items-center gap-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/prevent-senior-white.png"
            alt="Prevent Senior"
            className="h-11 w-auto"
            style={{ mixBlendMode: 'screen' }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-start-white.png"
            alt="Start Corretora de Seguros"
            className="h-11 w-auto"
            style={{ mixBlendMode: 'screen' }}
          />
        </Link>

        {/* Desktop: nav à direita */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white hover:text-brand-green font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5521996703834?text=Ol%C3%A1%2C+vim+do+site+e+gostaria+de+ajuda+sobre+seguro+de+vida%21"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-green hover:bg-brand-green-light text-brand-blue px-5 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg"
          >
            <FaWhatsapp size={16} />
            <span>(21) 99670-3834</span>
          </a>
        </nav>

        {/* Mobile: botão "Solicitar Cotação" à direita */}
        <Link
          href="/cotacao"
          className="lg:hidden bg-brand-green hover:bg-brand-green-light text-brand-blue px-3 py-2 rounded font-bold text-xs z-10 whitespace-nowrap"
        >
          Solicitar Cotação
        </Link>
      </div>

      {/* Menu mobile dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-brand-blue-dark border-t border-white/10 animate-fade-in">
          <nav className="container-custom py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-brand-green font-medium py-2 border-b border-white/10"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5521996703834"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-green text-brand-blue px-5 py-3 rounded-full font-bold"
            >
              <FaWhatsapp size={16} />
              <span>(21) 99670-3834</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
