import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./tr/en.json";
import es from "./tr/es.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
