
import React, { useEffect } from 'react';
import { X, Shield, Lock, Eye } from 'lucide-react';
import { useTranslation } from '../constants';

interface PrivacyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
    const { t, lang } = useTranslation();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const content = lang === 'pt' ? {
        title: "Política de Privacidade & Cookies",
        intro: "Na t.lucas, respeitamos a sua privacidade e agradecemos a confiança que deposita em nós. Nesta Política de Privacidade explicamos como recolhemos, utilizamos e protegemos os seus dados.",
        sections: [
            {
                icon: <Shield size={18} />,
                title: "Recolha de Dados",
                text: "Recolhemos apenas os dados estritamente necessários para a prestação dos nossos serviços de transfer, tais como nome, email, número de telefone e detalhes da viagem."
            },
            {
                icon: <Lock size={18} />,
                title: "Segurança",
                text: "Implementamos medidas de segurança técnicas e organizativas para proteger os seus dados pessoais contra a destruição, alteração, difusão ou acesso não autorizado."
            },
            {
                icon: <Eye size={18} />,
                title: "Cookies",
                text: "Utilizamos apenas cookies essenciais para o funcionamento do website e cookies de análise (Google Analytics) para compreender como os utilizadores navegam no site de forma anónima."
            }
        ],
        footer: "Para qualquer esclarecimento adicional, por favor contacte-nos através de info@tlucas.pt."
    } : {
        title: "Privacy Policy & Cookies",
        intro: "At t.lucas, we respect your privacy and appreciate the trust you place in us. In this Privacy Policy, we explain how we collect, use, and protect your data.",
        sections: [
            {
                icon: <Shield size={18} />,
                title: "Data Collection",
                text: "We collect only the data strictly necessary for the provision of our transfer services, such as name, email, phone number, and trip details."
            },
            {
                icon: <Lock size={18} />,
                title: "Security",
                text: "We implement technical and organizational security measures to protect your personal data against destruction, alteration, dissemination, or unauthorized access."
            },
            {
                icon: <Eye size={18} />,
                title: "Cookies",
                text: "We use only essential cookies for the operation of the website and analytical cookies (Google Analytics) to understand how users navigate the site anonymously."
            }
        ],
        footer: "For any further clarification, please contact us via info@tlucas.pt."
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 lg:p-10">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-brand-darkGreen/80 backdrop-blur-md transition-opacity duration-300 pointer-events-auto"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-2xl max-h-[90vh] bg-[#1a1c1c] border border-white/10 rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden flex flex-col animate-reveal-scale">
                {/* Header */}
                <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/5 bg-white/[0.02]">
                    <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">{content.title}</h2>
                    <button
                        onClick={onClose}
                        className="p-3 rounded-full bg-white/5 text-white/50 hover:text-brand-greenYellow hover:bg-white/10 transition-all active:scale-90"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 font-medium">
                        {content.intro}
                    </p>

                    <div className="space-y-10">
                        {content.sections.map((section, idx) => (
                            <div key={idx} className="space-y-4">
                                <div className="flex items-center gap-3 text-brand-greenYellow">
                                    <div className="p-2 bg-brand-greenYellow/10 rounded-lg">
                                        {section.icon}
                                    </div>
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em]">{section.title}</h3>
                                </div>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed pl-13 border-l border-white/5 ml-5">
                                    {section.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-6 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/30">
                            {content.footer}
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        
        @keyframes reveal-scale {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-reveal-scale {
          animation: reveal-scale 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
        </div>
    );
};

export default PrivacyModal;
