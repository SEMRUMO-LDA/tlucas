import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Clock, ArrowRight, MapPin, Check, Send, Mail, Phone, Shield, Zap, Route, MessageSquare, Calendar, Users, ChevronRight, X, Search, Navigation, ShieldAlert, Compass, Bike, Footprints, Quote, Star, Plane, Map } from 'lucide-react';
import { useTranslation } from '../constants';

const BookingEngine: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full max-w-xl lg:ml-auto group">
      {/* Outer Card Glow */}
      <div className="absolute -inset-6 bg-brand-greenYellow/15 rounded-[60px] blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

      {/* Main Container */}
      <div className="relative bg-white border border-gray-100/80 rounded-[48px] md:rounded-[64px] p-6 md:p-8 shadow-[0_32px_64px_-16px_rgba(0,34,27,0.08)] overflow-hidden flex flex-col transition-all duration-700 group-hover:shadow-[0_48px_80px_-20px_rgba(0,34,27,0.12)] group-hover:-translate-y-1">

        {/* Decorative Top Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-brand-greenYellow rounded-b-full"></div>

        {/* Header Section */}
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex flex-col">
            <h3 className="text-brand-darkGreen text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none">
              {t('be_title')}
            </h3>
          </div>

          <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-brand-softGreen/50 border border-brand-greenYellow/30 text-brand-darkGreen">
            <Compass size={18} />
          </div>
        </div>

        {/* The Widget Area */}
        <div className="relative mb-2">
          <div className="absolute -inset-2 bg-gray-50/50 rounded-[28px] -z-10"></div>
          <div className="bg-white rounded-3xl p-2 shadow-inner border border-gray-100 overflow-hidden flex flex-col">
            <div className="w-full relative">
              <iframe
                src="https://transfersgo.pt/app/?org=tlucas&mode=widget"
                width="100%"
                height="260"
                frameBorder="0"
                style={{
                  border: 0,
                  width: '100%',
                  height: '260px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'block'
                }}
                title="t.lucas Search Widget"
                className="bg-white"
              />
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-caribbeanGreen animate-pulse"></span>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 text-center leading-relaxed">
              {t('be_redirect_note')}
            </p>
          </div>

          <div className="w-full pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center opacity-60 transition-opacity hover:opacity-100 grayscale hover:grayscale-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
                className="h-4"
                alt="Stripe"
              />
            </div>

            <div className="flex items-center gap-3 px-5 py-2.5 bg-brand-softGreen/40 rounded-full border border-brand-greenYellow/20">
              <ShieldCheck size={12} className="text-brand-caribbeanGreen" />
              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-brand-darkGreen">{t('be_secure_payment')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainContent: React.FC = () => {
  const { t } = useTranslation();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const whyUsScrollRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const parallaxCardRef = useRef<HTMLDivElement>(null);
  const supportScrollRef = useRef<HTMLDivElement>(null);

  const targetOffsetRef = useRef(0);
  const currentOffsetRef = useRef(0);
  const requestRef = useRef<number>(0);

  const [whyUsPercent, setWhyUsPercent] = useState(0);
  const [supportPercent, setSupportPercent] = useState(0);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    });

    const animatedElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    animatedElements.forEach((el) => observerRef.current?.observe(el));

    const animate = () => {
      // Linear interpolation (lerp) for smooth movement
      const lerpFactor = 0.1;
      const diff = targetOffsetRef.current - currentOffsetRef.current;

      if (Math.abs(diff) > 0.1) {
        currentOffsetRef.current += diff * lerpFactor;
        if (parallaxCardRef.current) {
          parallaxCardRef.current.style.transform = `translateY(${currentOffsetRef.current}px)`;
        }
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    const handleCtaParallax = () => {
      if (!ctaRef.current) return;

      const rect = ctaRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const distanceToCenter = elementCenter - viewportCenter;

      // Dampened parallax factor
      targetOffsetRef.current = -distanceToCenter * 0.12;
    };

    window.addEventListener('scroll', handleCtaParallax);
    handleCtaParallax(); // Initial check
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener('scroll', handleCtaParallax);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const handleScroll = (ref: React.RefObject<HTMLDivElement>, setPercent: (val: number) => void) => {
    if (ref.current) {
      const { scrollLeft, scrollWidth, clientWidth } = ref.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setPercent(progress);
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whyUsPoints = [
    {
      icon: <Plane size={28} />,
      title: t('why_point1_title'),
      desc: t('why_point1_desc'),
      color: "from-brand-caribbeanGreen/5 to-brand-caribbeanGreen/15"
    },
    {
      icon: <Route size={28} />,
      title: t('why_point2_title'),
      desc: t('why_point2_desc'),
      color: "from-brand-caribbeanGreen/5 to-brand-caribbeanGreen/15"
    },
    {
      icon: <Map size={28} />,
      title: t('why_point3_title'),
      desc: t('why_point3_desc'),
      color: "from-brand-caribbeanGreen/5 to-brand-caribbeanGreen/15"
    }
  ];

  const [quoteData, setQuoteData] = useState({ name: '', email: '', message: '' });
  const [isQuoteSubmitted, setIsQuoteSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: quoteData.name,
          email: quoteData.email,
          message: quoteData.message,
        })
      });

      if (response.ok) {
        setIsQuoteSubmitted(true);
        setQuoteData({ name: '', email: '', message: '' });
        setTimeout(() => setIsQuoteSubmitted(false), 5000);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || "Something went wrong. Please try again."}`);
      }
    } catch (error) {
      alert("Error sending request. Please check your connection.");
    } finally {
      setIsSending(false);
    }
  };

  const contactPoints = [
    { icon: <Phone size={28} />, label: t('contact_label_direct'), value: "+351 967 910 227", color: "from-brand-caribbeanGreen/5 to-brand-caribbeanGreen/10", link: "https://wa.me/351967910227" },
    { icon: <Mail size={28} />, label: t('contact_label_email'), value: "info@tlucas.pt", color: "from-brand-caribbeanGreen/5 to-brand-caribbeanGreen/10", link: "mailto:info@tlucas.pt" },
    { icon: <MapPin size={28} />, label: t('contact_label_hub'), value: t('contact_hub_value'), color: "from-brand-caribbeanGreen/5 to-brand-caribbeanGreen/10" }
  ];

  return (
    <div className="flex flex-col overflow-x-hidden bg-grain">
      {/* SECTION 1: HERO */}
      <section id="home" className="relative min-h-screen flex items-center bg-brand-darkGreen overflow-hidden py-12 lg:py-0">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544984243-75a802b773bc?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-[0.2] scale-110"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-darkGreen via-brand-darkGreen to-transparent"></div>
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-greenYellow/5 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-brand-caribbeanGreen/5 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10 w-full pt-20 sm:pt-32 lg:pt-40 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 text-white">
              <div className="reveal-left flex items-center gap-3 mb-6 lg:mb-8 ml-1">
                <Route className="text-brand-greenYellow" size={14} />
                <span className="text-brand-greenYellow text-[10px] font-black uppercase tracking-[0.4em]">{t('hero_tag')}</span>
              </div>
              <h1 className="reveal-left delay-100 text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.9] mb-6 lg:mb-10 tracking-tighter uppercase text-white break-words">
                {t('hero_title_1')} {t('hero_title_2')} {t('hero_title_3')}
              </h1>
              <p className="reveal-left delay-200 text-base md:text-lg lg:text-xl text-gray-400 mb-8 lg:mb-10 leading-relaxed font-medium max-w-xl">
                {t('hero_desc')}
              </p>

              {/* Review Summary Badge */}
              <div className="reveal-left delay-300 max-w-lg">
                <div className="relative inline-flex items-center gap-5 py-3.5 px-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full group transition-all duration-500 hover:border-brand-greenYellow/20 shadow-2xl">
                  <a href="https://www.tripadvisor.pt/Attraction_Review-g642199-d8478028-Reviews-Ttaxi_Travel_Transfers-Alvor_Portimao_F Faro_District_Algarve.html" target="_blank" rel="noopener noreferrer" className="transition-all hover:scale-105 duration-300">
                    <img
                      src="/img/tripadvisor.svg"
                      className="h-5 w-auto object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                      alt="TripAdvisor"
                    />
                  </a>
                  <div className="h-4 w-[1px] bg-white/20"></div>
                  <div className="flex flex-col">
                    <div className="flex text-brand-greenYellow gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white leading-none">{t('review_summary')}</span>
                      <span className="text-[10px] font-bold text-white/40 leading-none uppercase tracking-tighter">— {t('review_stat')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-end">
              <div className="reveal-scale delay-300 w-full">
                <BookingEngine />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY US */}
      <section id="why-us" className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 gap-6 md:gap-10">
            <div className="max-w-3xl reveal">
              <h2 className="text-xs font-black text-brand-caribbeanGreen uppercase tracking-[0.5em] mb-4 md:mb-6">{t('why_tag')}</h2>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-brand-darkGreen tracking-tighter uppercase leading-[0.9] break-words">
                {t('why_title_1')} {t('why_title_2')} {t('why_title_3')}
              </h1>
            </div>
          </div>

          <div
            ref={whyUsScrollRef}
            onScroll={() => handleScroll(whyUsScrollRef, setWhyUsPercent)}
            className="reveal flex lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-x-visible no-scrollbar gap-6 lg:gap-12 snap-x snap-mandatory py-12 -my-12 -mx-6 px-6 lg:mx-0 lg:px-0"
          >
            {whyUsPoints.map((item, idx) => (
              <div
                key={idx}
                className={`shrink-0 w-[75vw] md:w-[50vw] lg:w-auto snap-center group relative p-8 md:p-12 rounded-[40px] md:rounded-[56px] bg-white border border-gray-100 hover:border-brand-greenYellow/40 transition-all duration-700 lg:hover:-translate-y-2 flex flex-col shadow-sm hover:shadow-2xl h-full min-h-[380px] md:min-h-[420px]`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 rounded-[40px] md:rounded-[56px] -z-10 group-hover:opacity-40 transition-opacity`}></div>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-softGreen text-brand-caribbeanGreen rounded-[20px] md:rounded-[28px] flex items-center justify-center mb-8 group-hover:bg-brand-darkGreen group-hover:text-brand-greenYellow transition-all duration-500 shadow-sm">
                  {item.icon}
                </div>
                <div className="relative flex-grow flex flex-col">
                  <h4 className="text-2xl md:text-3xl font-black text-brand-darkGreen mb-4 uppercase tracking-tighter leading-tight whitespace-pre-line">{item.title}</h4>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Pagination Dots */}
          <div className="flex lg:hidden flex-col items-center mt-12 gap-4">
            <div className="flex items-center gap-3">
              {whyUsPoints.map((_, i) => {
                const step = 100 / (whyUsPoints.length - 1);
                const isActive = Math.abs(whyUsPercent - (i * step)) < (step / 2);
                return (
                  <div
                    key={i}
                    className={`h-1.5 transition-all duration-500 rounded-full ${isActive ? 'w-8 bg-brand-caribbeanGreen' : 'w-1.5 bg-gray-200'
                      }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PHILOSOPHY / ABOUT */}
      <section id="about" className="py-20 md:py-32 bg-brand-darkGreen text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-caribbeanGreen/5 -skew-x-12 translate-x-1/2 overflow-hidden"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative reveal-left">
              <div className="aspect-[3/4] rounded-[32px] md:rounded-[60px] overflow-hidden shadow-2xl relative group">
                <div className="absolute inset-0 bg-brand-darkGreen/20 group-hover:bg-transparent transition-colors duration-700"></div>
                <img src="/img/how-we-work.jpg" alt="Iconic Algarve Coast, Portugal" className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000" />
              </div>
              <div className="reveal-scale delay-400 absolute -bottom-6 md:-bottom-10 lg:-bottom-12 -right-2 md:-right-6 lg:-right-12 bg-brand-greenYellow p-6 md:p-12 rounded-[20px] md:rounded-[40px] shadow-2xl border-4 md:border-8 border-brand-darkGreen z-20 scale-75 md:scale-100">
                <p className="text-4xl md:text-7xl font-black text-brand-darkGreen leading-none mb-1 md:mb-2 tracking-tighter text-center">30+</p>
                <p className="text-[8px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-brand-darkGreen/60 text-center">{t('about_exp')}</p>
              </div>
            </div>

            <div className="reveal-right delay-200">
              <h2 className="text-xs font-black text-brand-greenYellow uppercase tracking-[0.6em] mb-6 md:mb-8">{t('about_tag')}</h2>
              <h3 className="text-4xl lg:text-7xl font-black text-white tracking-tighter mb-8 md:mb-10 uppercase leading-[1] text-balance break-words">
                {t('about_title_1')} {t('about_title_2')} {t('about_title_3')}
              </h3>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-medium max-w-lg mb-10 md:mb-12">
                {t('about_desc')}
              </p>

              {/* Feature grid - adding back points in a minimalist layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {[t('about_feat1'), t('about_feat2'), t('about_feat3'), t('about_feat4')].map((feat, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="p-1.5 bg-brand-greenYellow/10 rounded-full group-hover:bg-brand-greenYellow/20 transition-colors">
                      <Check size={14} className="text-brand-greenYellow" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-white/70 group-hover:text-white transition-colors pt-1 leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION */}
      <section id="booking-cta" ref={ctaRef} className="py-24 md:py-32 bg-white relative z-30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24">
          <div className="reveal-scale">
            <div
              ref={parallaxCardRef}
              className="relative rounded-[32px] md:rounded-[64px] bg-brand-darkGreen shadow-2xl group overflow-visible will-change-transform"
            >
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-14 p-10 md:p-20">
                <div className="absolute inset-0 bg-brand-caribbeanGreen/10 rounded-[32px] md:rounded-[64px] blur-3xl -z-10 group-hover:opacity-100 opacity-40 transition-opacity duration-1000"></div>
                <div className="max-w-2xl text-center lg:text-left relative z-20">
                  <h2 className="reveal delay-100 text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 md:mb-8 tracking-tighter uppercase leading-[0.9] break-words">
                    {t('cta_title')} {t('cta_subtitle')}
                  </h2>
                  <p className="reveal delay-200 text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
                    {t('cta_desc')}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-6 reveal delay-300 relative z-20">
                  <a
                    href="#home"
                    onClick={(e) => scrollToSection(e, '#home')}
                    className="group relative bg-brand-greenYellow text-brand-darkGreen px-10 md:px-16 py-6 md:py-7 rounded-full font-black text-sm uppercase tracking-[0.3em] transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-2xl whitespace-nowrap"
                  >
                    {t('cta_btn')}
                    <div className="absolute inset-0 rounded-full animate-ping bg-brand-greenYellow/20 -z-10 group-hover:hidden"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CONTACTS */}
      <section id="contact" className="py-20 md:py-32 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 lg:items-stretch">
            <div className="reveal-left lg:h-full lg:flex lg:flex-col">
              <h2 className="text-xs font-black text-brand-caribbeanGreen uppercase tracking-[0.5em] mb-6">{t('contact_tag')}</h2>
              <h3 className="text-4xl sm:text-5xl md:text-7xl font-black text-brand-darkGreen tracking-tighter mb-8 uppercase leading-tight break-words">{t('contact_title')}</h3>
              <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium max-w-lg mb-12 md:mb-16">
                {t('contact_desc')}
              </p>

              <div
                ref={supportScrollRef}
                onScroll={() => handleScroll(supportScrollRef, setSupportPercent)}
                className="flex md:flex-col overflow-x-auto md:overflow-x-visible no-scrollbar gap-6 md:gap-3 snap-x snap-mandatory py-12 -my-12 -mx-6 px-6 md:mx-0 md:px-0 items-stretch"
              >
                {contactPoints.map((item, idx) => {
                  const Content = (
                    <div className="shrink-0 w-[82vw] md:w-full snap-center flex gap-4 md:gap-6 group items-center bg-white md:bg-transparent p-5 md:p-4 rounded-[32px] md:rounded-none border border-gray-100 md:border-none shadow-sm md:shadow-none transition-all duration-300 h-full">
                      <div className="w-14 h-14 md:w-20 md:h-20 bg-brand-softGreen text-brand-caribbeanGreen rounded-[24px] flex items-center justify-center shadow-md shrink-0 group-hover:bg-brand-darkGreen group-hover:text-brand-greenYellow transition-all duration-500">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-black uppercase text-gray-400 tracking-[0.3em] mb-2 leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis">
                          {item.label.split(' (').map((part, i) => (
                            <React.Fragment key={i}>
                              {i > 0 && <br />}
                              {i > 0 ? `(${part}` : part}
                            </React.Fragment>
                          ))}
                        </p>
                        <p className={`text-lg sm:text-2xl md:text-3xl font-black text-brand-darkGreen tracking-tight group-hover:text-brand-caribbeanGreen transition-colors ${idx === 2 ? 'whitespace-pre-line break-words' : 'whitespace-nowrap'}`}>
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.link ? (
                    <a key={idx} href={item.link} target={item.link?.startsWith('http') ? '_blank' : undefined} rel={item.link?.startsWith('http') ? 'noopener noreferrer' : undefined} className="flex shrink-0 h-auto">
                      {Content}
                    </a>
                  ) : (
                    <div key={idx} className="flex shrink-0 h-auto">
                      {Content}
                    </div>
                  );
                })}
              </div>

              {/* Support Mobile Pagination Dots */}
              <div className="flex md:hidden flex-col items-center mt-12 gap-4">
                <div className="flex items-center gap-3">
                  {contactPoints.map((_, i) => {
                    const step = 100 / (contactPoints.length - 1);
                    const isActive = Math.abs(supportPercent - (i * step)) < (step / 2);
                    return (
                      <div
                        key={i}
                        className={`h-1.5 transition-all duration-500 rounded-full ${isActive ? 'w-8 bg-brand-caribbeanGreen' : 'w-1.5 bg-gray-200'
                          }`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="reveal-right delay-200 lg:h-full">
              <div className="bg-brand-darkGreen p-8 md:p-14 rounded-[32px] md:rounded-[64px] shadow-3xl relative group overflow-visible lg:h-full lg:flex lg:flex-col">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-greenYellow/5 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="relative z-10 lg:flex-1 lg:flex lg:flex-col">
                  <div className="flex items-center gap-4 mb-8 md:mb-10">
                    <div className="p-3 bg-brand-greenYellow rounded-2xl text-brand-darkGreen">
                      <ShieldAlert size={24} />
                    </div>
                    <div>
                      <h4 className="text-white text-3xl font-black uppercase tracking-tight leading-none">{t('contact_form_title')}</h4>
                    </div>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/50 mb-8 leading-relaxed">{t('contact_form_subtitle')}</p>

                  <form className="lg:flex-1 lg:flex lg:flex-col justify-between" onSubmit={handleQuoteSubmit}>
                    <div className="space-y-6 md:space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">{t('contact_form_name')}</label>
                          <input
                            type="text"
                            required
                            value={quoteData.name}
                            onChange={(e) => setQuoteData({ ...quoteData, name: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-[16px] md:rounded-[20px] p-5 text-white font-bold focus:ring-2 focus:ring-brand-greenYellow outline-none transition-all hover:bg-white/10"
                            placeholder={t('contact_form_placeholder_name')}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">{t('contact_form_email')}</label>
                          <input
                            type="email"
                            required
                            value={quoteData.email}
                            onChange={(e) => setQuoteData({ ...quoteData, email: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-[16px] md:rounded-[20px] p-5 text-white font-bold focus:ring-2 focus:ring-brand-greenYellow outline-none transition-all hover:bg-white/10"
                            placeholder={t('contact_form_placeholder_email')}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">{t('contact_form_help')}</label>
                        <textarea
                          rows={4}
                          required
                          value={quoteData.message}
                          onChange={(e) => setQuoteData({ ...quoteData, message: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-[16px] md:rounded-[20px] p-5 text-white font-bold focus:ring-2 focus:ring-brand-greenYellow outline-none resize-none transition-all hover:bg-white/10"
                          placeholder={t('contact_form_placeholder_msg')}
                        ></textarea>
                      </div>
                    </div>
                    <div className="mt-8 lg:mt-0">
                      <button
                        type="submit"
                        disabled={isSending}
                        className={`group w-full py-5 md:py-6 rounded-full font-black text-xs uppercase tracking-[0.4em] flex items-center justify-center gap-4 transition-all shadow-xl active:scale-95 ${isQuoteSubmitted
                          ? 'bg-brand-caribbeanGreen text-white'
                          : isSending
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : 'bg-brand-greenYellow text-brand-darkGreen hover:bg-white'
                          }`}
                      >
                        {isQuoteSubmitted ? 'THANK YOU!' : isSending ? 'SENDING...' : t('contact_form_btn')}
                        {!isQuoteSubmitted && !isSending && <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                        {isQuoteSubmitted && <Check size={16} />}
                        {isSending && <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;