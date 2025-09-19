const isProduction = process.env.ELEVENTY_ENV === "production";

module.exports = {
  title: {
    en: "Thun",
    de: "Thun"
  },
  description: {
    en: "Your guide to our home in Thun",
    de: "Euer umfassender Guide für unsere Wohnung in Thun, Schweiz"
  },
  url: isProduction ? "https://homeexchange-guide.example.com" : "http://localhost:8080",
  author: {
    name: "Maria & Tim",
    email: "contact@example.com"
  },
  defaultLanguage: "en",
  languages: {
    en: {
      code: "en",
      name: "English"
    },
    de: {
      code: "de",
      name: "Deutsch"
    }
  },
  buildTime: new Date()
};