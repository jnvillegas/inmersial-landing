import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="ml-4 px-3 py-1 rounded bg-inmersial-light-blue text-inmersial-dark-blue font-semibold hover:bg-inmersial-cyan transition "
    >
      {i18n.language === 'es' ? 'EN' : 'ES'}
    </button>
  );
};

export default LanguageSwitcher;