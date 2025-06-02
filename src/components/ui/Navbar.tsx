import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="bg-gradient-to-b from-inmersial-dark-blue to-transparent py-3 px-6 md:px-10 fixed w-full top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img className="h-auto w-[250px]" src="/22 - IsoLogo vBlanco Horizontal (1).png" />
        </div>
        <div className="hidden md:flex items-center space-x-8 text-[20px] ">
          <a href="#products" className="text-white hover:text-inmersial-cyan transition-colors">{t('product')}</a>
          <a href="#services" className="text-white hover:text-inmersial-cyan transition-colors">{t('service')}</a>
          <a href="#pricing" className="text-white hover:text-inmersial-cyan transition-colors">{t('subscriptions')}</a>
          <a href="#contact" className="text-white hover:text-inmersial-cyan transition-colors">{t('testimonials')}</a>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <button  className="bg-transparent border border-inmersial-light-blue text-inmersial-light-blue hover:bg-inmersial-light-blue/10 transition-colors py-1 px-2 rounded-md flex items-center neon-button">
            {t('sign_in')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;