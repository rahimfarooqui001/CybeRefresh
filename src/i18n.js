import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Sample translations (you should add proper translation files)
const resources = {
  en: {
    translation: {
      "welcome": "Welcome to the CyberRefresh",
      "select_language": "Select Language"
    }
  },
  ar: {
    translation: {
      "welcome": "مرحبا بك في التطبيق",
      "select_language": "اختر اللغة"
    }
  }
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources, // Your translations
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if user language is not found
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
