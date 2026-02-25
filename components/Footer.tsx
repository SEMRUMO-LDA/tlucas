
import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { Logo, useTranslation } from '../constants';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-darkGreen text-brand-antiFlashWhite pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-16 lg:gap-x-24 mb-20">
          {/* Column 1: Logo & Description (Spans 4/12) */}
          <div className="lg:col-span-4 space-y-8">
            <img src="/img/t_lucas_tl_white.png" className="h-10 w-auto object-contain" alt="t.lucas" />
            <p className="text-gray-400 text-sm leading-relaxed font-medium max-w-sm">
              {t('footer_desc')}
            </p>
          </div>

          {/* Column 2: Navigation (Spans 2/12) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-brand-greenYellow">{t('footer_nav')}</h3>
            <ul className="space-y-5 text-xs font-bold uppercase tracking-widest text-gray-400">
              <li><a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="hover:text-brand-greenYellow transition-colors">{t('nav_home')}</a></li>
              <li><a href="#why-us" onClick={(e) => scrollToSection(e, '#why-us')} className="hover:text-brand-greenYellow transition-colors">{t('nav_transfers')}</a></li>
              <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-brand-greenYellow transition-colors">{t('nav_about')}</a></li>
              <li><a href="#booking-cta" onClick={(e) => scrollToSection(e, '#booking-cta')} className="hover:text-brand-greenYellow transition-colors">{t('cta_btn')}</a></li>
            </ul>
          </div>

          {/* Column 3: Travel Wise (Spans 6/12) */}
          <div className="lg:col-span-6">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-brand-greenYellow">Travel wise:</h3>
            <div className="flex flex-wrap items-center gap-x-12 gap-y-10">
              {/* Turismo de Portugal */}
              <a href="https://www.turismodeportugal.pt/pt/Paginas/homepage.aspx" target="_blank" rel="noopener noreferrer" className="transition-all logo-gray-filter hover-lime-filter hover:scale-105 duration-300">
                <img
                  src="/img/turismo-de-portugal.png"
                  className="h-8 md:h-9 w-auto object-contain"
                  alt="Turismo de Portugal"
                />
              </a>

              {/* Algarve */}
              <a href="https://visitalgarve.pt/" target="_blank" rel="noopener noreferrer" className="transition-all logo-gray-filter hover-lime-filter hover:scale-105 duration-300">
                <img
                  src="/img/visit-algarve-portugal.svg"
                  className="h-7 md:h-8 w-auto object-contain"
                  alt="Algarve Region"
                />
              </a>

              {/* Associação Turismo do Algarve */}
              <a href="https://www.algarvepromotion.pt/pt/corporate" target="_blank" rel="noopener noreferrer" className="transition-all logo-gray-filter hover-lime-filter hover:scale-105 duration-300">
                <img
                  src="/img/associacao-turismo-do-algarve.svg"
                  className="h-8 md:h-9 w-auto object-contain"
                  alt="Associação Turismo do Algarve"
                />
              </a>

              {/* TripAdvisor */}
              <a href="https://www.tripadvisor.pt/Attraction_Review-g642199-d8478028-Reviews-Ttaxi_Travel_Transfers-Alvor_Portimao_F Faro_District_Algarve.html" target="_blank" rel="noopener noreferrer" className="transition-all logo-gray-filter hover-lime-filter hover:scale-105 duration-300">
                <img
                  src="/img/tripadvisor.svg"
                  className="h-6 md:h-7 w-auto object-contain"
                  alt="TripAdvisor"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-center gap-x-4 gap-y-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 whitespace-nowrap text-center">
            <span>© 2026 t.lucas Transfers & Taxis. Designer by <a href="https://www.aorubro.pt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">AORUBRO</a></span>
            <span className="hidden md:block text-white/10">•</span>
            <div className="flex items-center gap-x-4">
              <a href="#" className="hover:text-white transition-colors">Politica de Privacidade & Cookies</a>
              <span className="text-white/10">•</span>
              <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Livro de reclamações</a>
              <span className="text-white/10">•</span>
              <span className="text-brand-greenYellow/40">RNAVT: 10199</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
