/**
 * i18n is configured but not currently used by the app.
 * All UI content comes from src/resources/content.tsx (English).
 * To enable EN/FR: wrap the app with I18nextProvider and use useTranslation() for strings.
 */
import i18n from "i18next";
// import LanguageDetector from 'i18next-browser-languagedetector';

import { initReactI18next } from "react-i18next";

import en from "./en/common.json";
import en_resume from "./en/resume.json";

import fr from "./fr/common.json";
import fr_resume from "./fr/resume.json";

const resources = {
  en: { common: en, resume: en_resume },
  fr: { common: fr, resume: fr_resume },
};

const options = {
  order: ["localstorage", "querystring", "navigator"],
  lookupQuerystring: "lng",
};

i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  // .use(Backend)

  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)

  // pass the i18n instance to react-i18next.
  .use(initReactI18next)

  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // lng: 'en' //  turn off for detection to work
    detection: options,
    resources: resources,
    // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
    // set returnNull to false (and also in the i18next.d.ts options)
    // returnNull: false,
    defaultNS: "common",
    fallbackLng: "en",
    supportedLngs: ["en", "fr"],
    interpolation: {
      escapeValue: false,
    },

    debug: true,
  });

export default i18n;
