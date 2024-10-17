import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enLang from './locales/en/en.json';
import ukLang from './locales/uk/uk.json';
import * as constants from './constants';

const resources = {
  [constants.LOCALES.EN]: {
    translation: enLang,
  },
  [constants.LOCALES.UK]: {
    translation: ukLang,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: constants.LOCALES.EN,

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
