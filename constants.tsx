import React, { createContext, useContext } from 'react';

export const COLORS = {
  greenYellow: '#DBFF66',
  caribbeanGreen: '#00C692',
  darkGreen: '#00221B',
  softGreen: '#FBFFE1',
  darkBlueGreen: '#0A0A0A',
  prussianBlue: '#000549',
  smokyBlack: '#131414',
  antiFlashWhite: '#F0F2F0',
};

export const Logo: React.FC<{ variant?: 'light' | 'dark'; className?: string }> = ({ variant = 'dark', className = "" }) => {
  const logoUrl = variant === 'light' ? '/img/t_lucas_logo_white.png' : '/img/t_lucas_logo_dark.png';

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={logoUrl}
        alt="t.lucas logo"
        className="h-8 md:h-10 lg:h-12 w-auto object-contain transition-all duration-500"
      />
    </div>
  );
};

export type Language = 'en' | 'pt';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useTranslation must be used within a LanguageProvider");
  return context;
};

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    nav_home: "Home",
    nav_transfers: "Transfers",
    nav_about: "How We Work",
    nav_contact: "Contacts",
    hero_tag: "Transfers in the Algarve & Costa Vicentina.",
    hero_title_1: "TRANSPORT",
    hero_title_2: "THAT ADAPTS",
    hero_title_3: "TO YOU.",
    hero_desc: "Airport transfers, travel between accommodations, and support for hiking or cycling trails. We adjust schedules, routes, and services to the way you travel.",
    hero_trusted: "Surgical logistics for 5,000+ explorers yearly",
    be_title: "Book Now",
    be_pickup: "Departure Point",
    be_destination: "Destination",
    be_date: "Date",
    be_time: "Time",
    be_pax: "Group Size",
    be_btn: "Check Availability",
    be_redirect_note: "You will be redirected to complete your booking",
    be_secure_payment: "Secure Payment",
    be_placeholder_from: "e.g. Faro Airport (FAO)",
    be_placeholder_to: "e.g. Sagres Trailhead",
    why_tag: "WHY CHOOSE T.LUCAS",
    why_title_1: "TRANSFERS DESIGNED",
    why_title_2: "FOR EVERY TYPE",
    why_title_3: "OF JOURNEY",
    why_point1_title: "AIRPORT → ACCOMMODATION",
    why_point1_desc: "Direct transfers between Faro Airport and hotels, apartments, or local lodgings. Punctual, simple, and without unnecessary detours.",
    why_point2_title: "SUPPORT FOR COSTA VICENTINA TRAILS",
    why_point2_desc: "Transfers designed for those traveling the Costa Vicentina on foot or by bicycle. We connect stages, lodgings, and start or end points.",
    why_point3_title: "LOCAL TERRAIN KNOWLEDGE",
    why_point3_desc: "We know the access points, schedules, and the right pickup spots. This avoids delays, confusion, and hard-to-reach locations.",
    about_tag: "HOW WE WORK",
    about_title_1: "WELL-ORGANIZED",
    about_title_2: "TRANSFERS",
    about_title_3: "NO COMPLICATIONS",
    about_desc: "We plan every transfer based on your actual journey. This results in less waiting, fewer questions, and fewer unexpected issues.",
    about_exp: "Years of experience",
    about_feat1: "Flight and schedule monitoring",
    about_feat2: "Fixed prices defined at the start",
    about_feat3: "Careful transport of luggage and bicycles",
    about_feat4: "Daily support availability",
    review_tag: "Guest Experience",
    review_stat: "1500+ REVIEWS",
    review_summary: "EXCELLENT",
    review_text: "Would definitely book these transfers again. Driver was waiting at the airport. Car was very clean. He was really friendly and very knowledgeable about the area. Also gave us tips about restaurants to visit.",
    review_author: "Anne, Tripadvisor",
    cta_title: "Ready to book",
    cta_subtitle: "your transfer?",
    cta_desc: "Choose dates, route and type of support. We handle the rest.",
    cta_btn: "BOOK TRANSFER",
    contact_tag: "SUPPORT",
    contact_title: "WE ARE AVAILABLE.",
    contact_desc: "Need help planning your transfer or clarifying a specific request? We respond quickly and help you find the best solution.",
    contact_label_direct: "WhatsApp (direct support)",
    contact_label_email: "Email support",
    contact_email_value: "info@tlucas.pt",
    contact_label_hub: "Operational base",
    contact_hub_value: "Costa Vicentina & Algarve, Portugal",
    contact_form_title: "AN UNUSUAL REQUEST?",
    contact_form_subtitle: "Multi-stage hiking, cycling routes, luggage transport, or logistics for small groups. Explain your trip and we handle the rest.",
    contact_form_name: "Lead Explorer",
    contact_form_email: "Contact Email",
    contact_form_help: "Trip Details",
    contact_form_placeholder_name: "e.g. Tiago Mendes",
    contact_form_placeholder_email: "e.g. explorer@travel.com",
    contact_form_placeholder_msg: "Describe the route, dates, and type of support needed.",
    contact_form_btn: "GET QUOTE",
    footer_desc: "Transfers in the Algarve and Costa Vicentina for airport arrivals, stage-by-stage hiking, and cycling routes. Simple organization, direct support, and local knowledge.",
    footer_nav: "Navigation",
    footer_dest: "Tactical Drop-offs",
    footer_contact: "Contact"
  },
  pt: {
    nav_home: "Início",
    nav_transfers: "Transfers",
    nav_about: "Como Trabalhamos",
    nav_contact: "Contactos",
    hero_tag: "Transfers no Algarve e Costa Vicentina.",
    hero_title_1: "TRANSPORTE",
    hero_title_2: "QUE SE ADAPTA",
    hero_title_3: "A SI.",
    hero_desc: "Transfers para aeroporto, deslocações entre alojamentos e apoio a percursos a pé ou de bicicleta. Ajustamos horários, rotas e serviços à forma como viaja.",
    hero_trusted: "Logística cirúrgica para +5.000 exploradores anuais",
    be_title: "Reserva Já",
    be_pickup: "Ponto de Partida",
    be_destination: "Destino",
    be_date: "Data",
    be_time: "Hora",
    be_pax: "Nº de Pessoas",
    be_btn: "Verificar Disponibilidade",
    be_redirect_note: "Será redirecionado para concluir a sua reserva",
    be_secure_payment: "Pagamento Seguro",
    be_placeholder_from: "ex: Aeroporto de Faro (FAO)",
    be_placeholder_to: "ex: Início de Trilho / Hotel",
    why_tag: "PORQUE ESCOLHER A T.LUCAS",
    why_title_1: "TRANSFERS QUE SE",
    why_title_2: "AJUSTAM À",
    why_title_3: "SUA VIAGEM",
    why_point1_title: "AEROPORTO → ALOJAMENTO",
    why_point1_desc: "Transfers diretos entre o Aeroporto de Faro e hotéis, apartamentos ou alojamentos locais. Pontuais, simples e sem desvios desnecessários.",
    why_point2_title: "APOIO A PERCURSOS NA COSTA VICENTINA",
    why_point2_desc: "Transfers pensados para quem percorre a Costa Vicentina a pé ou de bicicleta. Ligamos etapas, alojamentos e pontos de início ou fim do percurso.",
    why_point3_title: "CONHECIMENTO DO TERRENO",
    why_point3_desc: "Conhecemos acessos, horários e pontos certos de recolha. Isso permite evitar atrasos, confusões e locais difíceis de chegar.",
    about_tag: "COMO TRABALHAMOS",
    about_title_1: "TRANSFERS BEM",
    about_title_2: "ORGANIZADOS",
    about_title_3: "SEM COMPLICAÇÕES",
    about_desc: "Planeamos cada transfer com base na sua viagem real. Isso significa menos esperas, menos dúvidas e menos imprevistos.",
    about_exp: "anos de experiência",
    about_feat1: "Acompanhamento de voos e horários",
    about_feat2: "Preços definidos à partida",
    about_feat3: "Transporte cuidado de bagagem e bicicletas",
    about_feat4: "Disponibilidade diária para apoio",
    review_tag: "Experiência do Passageiro",
    review_stat: "1500+ AVALIAÇÕES",
    review_summary: "EXCELENTE",
    review_text: "Sem dúvida que voltaria a reservar estes transfers. O motorista estava à nossa espera no aeroporto. O carro estava impecável. Ele foi muito simpático e conhecia muito bem a zona. Deu-nos ainda sugestões de restaurantes a visitar.",
    review_author: "Anne, Tripadvisor",
    cta_title: "Pronto para reservar",
    cta_subtitle: "o seu transfer?",
    cta_desc: "Escolha datas, percurso e tipo de apoio. Nós tratamos do resto.",
    cta_btn: "RESERVAR TRANSFER",
    contact_tag: "SUPORTE",
    contact_title: "ESTAMOS DISPONÍVEIS.",
    contact_desc: "Precisa de ajuda para planear o seu transfer ou esclarecer um pedido específico? Respondemos rapidamente e ajudamos a encontrar a melhor solução.",
    contact_label_direct: "WhatsApp (apoio direto)",
    contact_label_email: "Apoio por email",
    contact_email_value: "info@tlucas.pt",
    contact_label_hub: "Base operacional",
    contact_hub_value: "Costa Vicentina & Algarve, Portugal",
    contact_form_title: "UM PEDIDO FORA DO NORMAL?",
    contact_form_subtitle: "Caminhadas por etapas, percursos de bicicleta, transporte de bagagem ou logística para pequenos grupos. Explique-nos a sua viagem e tratamos do resto.",
    contact_form_name: "Responsável pelo pedido",
    contact_form_email: "Email de contacto",
    contact_form_help: "Detalhes da viagem",
    contact_form_placeholder_name: "ex: Tiago Mendes",
    contact_form_placeholder_email: "ex: explorer@travel.com",
    contact_form_placeholder_msg: "Descreva o percurso, datas e tipo de apoio necessário.",
    contact_form_btn: "PEDIR ORÇAMENTO",
    footer_desc: "Transfers no Algarve e Costa Vicentina para chegadas ao aeroporto, caminhadas por etapas e percursos de bicicleta. Organização simples, apoio direto e conhecimento local.",
    footer_nav: "Navegação",
    footer_dest: "Drop-offs Táticos",
    footer_contact: "Contacto"
  }
};