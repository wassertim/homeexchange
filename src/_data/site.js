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
      {
        text: "What to Do",
        url: "/en/inspirations/"
      },
      {
        text: "Shopping",
        url: "/en/shops/"
      }
    ],
    de: [
      {
        text: "Willkommen",
        url: "/de/"
      },
      {
        text: "Hausordnung",
        url: "/de/house-rules/"
      },
      {
        text: "Kaffeemaschine",
        url: "/de/coffee-machine/"
      },
      {
        text: "Was tun",
        url: "/de/inspirations/"
      },
      {
        text: "Einkaufen",
        url: "/de/shops/"
      }
    ]
  },
  buildTime: new Date()
};