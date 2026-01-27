
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './pages/MainContent';
import { LanguageContext, Language, TRANSLATIONS } from './constants';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  const t = (key: string) => {
    return TRANSLATIONS[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <MainContent />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
