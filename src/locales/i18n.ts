import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { en } from "./translations/en";
import { es } from "./translations/es";
import { ptbr } from "./translations/ptbr";

i18n.use(initReactI18next).init({
  resources: {
    ptbr: { translation: ptbr },
    en: { translation: en },
    es: { translation: es },
  },
  lng: "ptbr",
  fallbackLng: "ptbr",
  interpolation: {
    escapeValue: false,
  },
});
