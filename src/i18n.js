import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next"
    }
  },
  ru: {
    translation: {
      "Recent Transactions": 'Последние транзакции',
      "No results found. Try to change filters.": "Нет результатов, попробуйте поменять значение фильтров."

    },
    transfer: {
      "Make a Transfer": "Сделать перевод",
      "From account": "От аккаунта",
      "To account": "Кому",
      "Amount": "Сумма",
      "Submit": "Отправить",
      "Choose account": "Выбрать"
    },
    transaction: {
      "Search by typing...": "Фильтровать по значению...",
      "Date": "Дата",
      "Beneficiary": "Бенефициар",
      "Amount": "Сумма",
      "Sort By": "Сорт."
    },
  }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .init({
      resources,
      lng: ["en"],
      supportedLngs: ["en", "ru"],
      fallbackLng: 'en',
      keySeparator: false, // we do not use keys in form messages.welcome
      interpolation: {
        escapeValue: false // react already safes from xss
      }
    });

export default i18n;
