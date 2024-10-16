import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enLang from './locales/en/en.json';
import ukLang from './locales/uk/uk.json';

const resources = {
  'en-US': {
    translation: enLang,
  },
  'uk-UA': {
    translation: ukLang,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en-US',
  lng: 'en-US', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
  // if you're using a language detector, do not define the lng option

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
