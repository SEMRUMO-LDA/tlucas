
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
            <Logo variant="light" />
            <p className="text-gray-400 text-sm leading-relaxed font-medium max-w-sm">
              {t('footer_desc')}
            </p>
            <div className="flex space-x-3">
              <SocialLink icon={<Instagram size={18} />} />
              <SocialLink icon={<Facebook size={18} />} />
            </div>
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
            <div className="flex flex-wrap items-center gap-x-12 gap-y-10 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
              {/* Turismo de Portugal */}
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Turismo_de_Portugal_logo.svg/1200px-Turismo_de_Portugal_logo.svg.png" 
                className="h-10 md:h-11 w-auto object-contain" 
                alt="Turismo de Portugal" 
              />
              
              {/* Algarve */}
              <img 
                src="https://www.visitalgarve.pt/img/logo-algarve.png" 
                className="h-8 md:h-9 w-auto object-contain brightness-0 invert" 
                alt="Algarve Region" 
              />
              
              {/* Associação Turismo do Algarve */}
              <div className="flex items-center gap-3">
                 <div className="w-9 h-9 rounded-full border-2 border-brand-greenYellow flex items-center justify-center">
                    <span className="text-[9px] font-black text-brand-greenYellow">ATA</span>
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-tighter text-white leading-tight">Associação Turismo<br/>do Algarve</span>
              </div>

              {/* TripAdvisor */}
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/02/TripAdvisor_Logo.svg" 
                className="h-8 md:h-9 w-auto object-contain brightness-0 invert" 
                alt="TripAdvisor" 
              />
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-center gap-x-4 gap-y-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 whitespace-nowrap text-center">
            <span>© 2026 t.lucas Transfers & Taxis. Designer by AORUBRO</span>
            <span className="hidden md:block text-white/10">•</span>
            <div className="flex items-center gap-x-4">
              <a href="#" className="hover:text-white transition-colors">Politica de Privacidade & Cookies</a>
              <span className="text-white/10">•</span>
              <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Livro de reclamações</a>
              <span className="text-white/10">•</span>
              <span className="text-brand-greenYellow/40">RNAVT: 0000</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <a href="#" className="p-3 bg-white/5 text-white rounded-full hover:bg-brand-greenYellow hover:text-brand-darkGreen transition-all border border-white/5">
    {icon}
  </a>
);

export default Footer;
