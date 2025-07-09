const isProduction = process.env.ELEVENTY_ENV === "production";

module.exports = {
  title: {
    en: "Thun"
  },
  description: {
    en: "Your guide to our home in Thun"
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
  navigation: {
    en: [
      {
        text: "Welcome",
        url: "/en/"
      },
      {
        text: "House Rules",
        url: "/en/house-rules/"
      },
      {
        text: "Coffee Machine",
        url: "/en/coffee-machine/"
      },
    ]
  },
  buildTime: new Date()
};