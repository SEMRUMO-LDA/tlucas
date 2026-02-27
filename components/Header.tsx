
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import { Logo, useTranslation } from '../constants';

const Header: React.FC = () => {
  const { lang, setLang, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: t('nav_home'), href: '#home' },
    { name: t('nav_transfers'), href: '#why-us' },
    { name: t('nav_about'), href: '#about' },
    { name: t('nav_contact'), href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'pt' : 'en');
  };

  // Header becomes solid white only after scrolling.
  // At the top, it remains transparent to showcase the hero.
  const isHeaderSolid = scrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${isHeaderSolid
      ? 'bg-white shadow-md py-4'
      : 'bg-transparent py-8'
      }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center lg:grid lg:grid-cols-12">

          {/* Logo Section */}
          <div className="lg:col-span-4 flex items-center">
            <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex-shrink-0 transition-transform active:scale-95">
              <Logo variant={isHeaderSolid ? 'dark' : 'light'} />
            </a>
          </div>

          {/* Desktop Navigation Section */}
          <div className="hidden lg:flex lg:col-span-8 items-center justify-end gap-6">
            <nav className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`group relative text-xs font-black uppercase tracking-[0.15em] transition-colors whitespace-nowrap overflow-hidden ${isHeaderSolid ? 'text-brand-darkGreen' : 'text-white/80'
                    }`}
                >
                  <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">{link.name}</span>
                  <span className="absolute left-0 top-full inline-block transition-transform duration-300 group-hover:-translate-y-full text-brand-caribbeanGreen">{link.name}</span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-6">
              <button
                onClick={toggleLanguage}
                className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-colors ${isHeaderSolid ? 'text-brand-darkGreen hover:text-brand-caribbeanGreen' : 'text-white/80 hover:text-brand-greenYellow'}`}
              >
                <Globe size={14} />
                {lang === 'en' ? 'PT' : 'EN'}
              </button>

              <div className={`transition-all duration-500 transform ${isHeaderSolid ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'}`}>
                <a
                  href="#home"
                  onClick={(e) => scrollToSection(e, '#home')}
                  className="group px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center transition-all shadow-xl whitespace-nowrap bg-brand-darkGreen text-brand-greenYellow hover:bg-brand-greenYellow hover:text-brand-darkGreen active:scale-95"
                >
                  <ArrowRight size={14} className="mr-2" />
                  {t('cta_btn')}
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center justify-end gap-4">
            <button
              onClick={toggleLanguage}
              className={`text-[10px] font-black p-2 rounded-lg border transition-colors ${isHeaderSolid
                ? 'border-gray-100 text-brand-darkGreen'
                : 'border-white/20 text-white'
                }`}
            >
              {lang === 'en' ? 'PT' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-all active:scale-90 ${isHeaderSolid
                ? 'bg-gray-100 text-brand-darkGreen'
                : 'bg-white/10 text-white'
                }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white fixed inset-0 z-50 flex flex-col p-8 animate-in fade-in slide-in-from-right duration-500">
          <div className="flex justify-between items-center mb-12">
            <Logo variant="dark" />
            <button onClick={() => setIsOpen(false)} className="p-3 bg-gray-100 rounded-full">
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-4xl font-black text-brand-darkGreen uppercase tracking-tighter hover:text-brand-caribbeanGreen transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="mt-auto">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="w-full bg-brand-darkGreen text-white py-6 rounded-2xl font-black uppercase tracking-widest flex justify-center items-center gap-3 active:scale-95 transition-transform"
            >
              {t('cta_btn')} <ArrowRight size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
